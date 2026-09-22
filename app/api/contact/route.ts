import { NextResponse } from "next/server";

/* ============================================================================
 * NHẬN THÔNG TIN TỪ BIỂU MẪU LIÊN HỆ
 * ----------------------------------------------------------------------------
 * Thứ tự ưu tiên, tuỳ biến môi trường khai báo trên Vercel:
 *
 * 1. Google Sheet (đang dùng) — ghi vào bảng tính + gửi email về Gmail:
 *      GOOGLE_SHEET_WEBHOOK_URL = https://script.google.com/macros/s/.../exec
 *      GOOGLE_SHEET_SECRET      = mã bí mật, giống hệt SECRET trong script
 *    Script nằm ở google-apps-script/lien-he.gs, hướng dẫn cài ở HUONG-DAN.md.
 *
 * 2. Resend — chỉ gửi email (dự phòng, dùng khi không khai báo Google Sheet):
 *      RESEND_API_KEY, CONTACT_TO, CONTACT_FROM
 *
 * 3. Không khai báo gì: chỉ ghi log ra server (Vercel → Logs, giữ rất ngắn).
 * ==========================================================================*/

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const get = (key: string) => String(body[key] ?? "").trim().slice(0, 4000);

  // Bẫy bot — trường ẩn có nội dung nghĩa là bot tự điền.
  if (get("company_website")) {
    return NextResponse.json({ ok: true });
  }

  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const topic = get("topic");
  const message = get("message");

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 422 });
  }

  // Luôn ghi log làm bản dự phòng, kể cả khi gửi đi thành công
  console.log("[contact] Lead mới:", { name, email, phone, topic });

  const { GOOGLE_SHEET_WEBHOOK_URL, GOOGLE_SHEET_SECRET } = process.env;

  if (GOOGLE_SHEET_WEBHOOK_URL && GOOGLE_SHEET_SECRET) {
    try {
      // Apps Script trả về 302 sang googleusercontent.com; fetch tự đi theo
      // và đổi sang GET — đúng cách Google yêu cầu để đọc kết quả.
      const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          secret: GOOGLE_SHEET_SECRET,
          name, email, phone, topic, message,
          lang: get("lang") || "vi",
        }),
        signal: AbortSignal.timeout(15000),
      });
      const text = await res.text();
      let out: { ok?: boolean; error?: string } | null = null;
      try {
        out = JSON.parse(text);
      } catch {
        // Không phải JSON: thường là trang đăng nhập Google (sai quyền truy
        // cập, hoặc dán nhầm link /dev thay vì /exec)
      }
      if (!out) {
        // Trích thông báo lỗi Apps Script hiển thị (vd "Script function not
        // found: doPost") cùng tên miền đích để biết URL có đúng loại không
        const msg = text
          .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, " ")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 160);
        throw new Error(`not_json:${res.status}:${new URL(res.url).host}:${msg}`);
      }
      if (!out.ok) throw new Error(out.error ?? "script_error");
      return NextResponse.json({ ok: true });
    } catch (err) {
      const reason = err instanceof Error ? (err.name === "TimeoutError" ? "timeout" : err.message) : "unknown";
      console.error("[contact] Google Sheet lỗi:", reason, { name, email, phone, topic, message });
      // Trả kèm mã lý do để chẩn đoán nhanh — chỉ là mã phân loại, không chứa bí mật
      return NextResponse.json({ error: "sheet_failed", reason }, { status: 502 });
    }
  }

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;

  if (RESEND_API_KEY && CONTACT_TO && CONTACT_FROM) {
    const rows: [string, string][] = [
      ["Họ tên", name],
      ["Email", email],
      ["Điện thoại", phone || "—"],
      ["Quan tâm", topic || "—"],
      ["Ngôn ngữ", get("lang") || "vi"],
    ];

    const html = `
      <h2 style="font-family:sans-serif">Liên hệ mới từ website Meli Network</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `[Website] ${name} — ${topic || "Liên hệ"}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend lỗi:", res.status, await res.text());
      return NextResponse.json({ error: "mail_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  }

  // Chưa cấu hình nơi nhận → chỉ còn bản log
  console.log("[contact] Chưa cấu hình nơi nhận, nội dung:", message);
  return NextResponse.json({ ok: true, stored: "log" });
}
