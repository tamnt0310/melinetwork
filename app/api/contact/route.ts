import { NextResponse } from "next/server";

/* ============================================================================
 * NHẬN THÔNG TIN TỪ BIỂU MẪU LIÊN HỆ
 * ----------------------------------------------------------------------------
 * Mặc định: ghi log ra server (xem tại Vercel → Project → Logs).
 * Muốn nhận email thật: tạo tài khoản https://resend.com rồi khai báo 3 biến
 * môi trường trong Vercel (Settings → Environment Variables):
 *
 *   RESEND_API_KEY = re_xxxxxxxx
 *   CONTACT_TO     = contact@melinetwork.vn      (email nhận)
 *   CONTACT_FROM   = website@melinetwork.vn      (tên miền đã xác thực ở Resend)
 *
 * Có đủ 3 biến là route này tự gửi email, không cần sửa code.
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

  // Chưa cấu hình email → vẫn nhận, ghi log lại để không mất lead.
  console.log("[contact] Lead mới (chưa cấu hình email):", {
    name,
    email,
    phone,
    topic,
    message,
  });

  return NextResponse.json({ ok: true, stored: "log" });
}
