import { ImageResponse } from "next/og";

/* Ảnh hiển thị khi chia sẻ link lên Facebook, Zalo, LinkedIn…
   Next.js tự sinh ảnh này, không cần file JPG thủ công.
   Muốn dùng ảnh thiết kế riêng: xoá file này và đặt `app/opengraph-image.jpg` (1200×630). */

export const runtime = "edge";
export const alt = "Meli Network — Hệ sinh thái sáng tạo nội dung & thương mại số";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ARCH =
  "M 3 84 C 3 44, 15 24, 40 24 C 55 24, 60 42, 62 66 L 55 75 C 52 50, 48 40, 39 40 C 28 40, 23 58, 23 84 Z";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#07070a",
          backgroundImage:
            "radial-gradient(900px 600px at 78% 12%, rgba(232,17,35,0.42), transparent 62%)",
        }}
      >
        <svg width="96" height="85" viewBox="0 0 100 88">
          <g transform="matrix(-1 0 0 1 100 0)">
            <path d={ARCH} fill="#e6e6ee" />
          </g>
          <circle cx="60" cy="12" r="8" fill="#e6e6ee" />
          <path d={ARCH} fill="#e81123" />
          <circle cx="40" cy="12" r="8" fill="#e81123" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              color: "#ff6b72",
              fontWeight: 700,
            }}
          >
            MELI NETWORK
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 68,
              lineHeight: 1.1,
              color: "#ffffff",
              fontWeight: 800,
              maxWidth: 880,
            }}
          >
            Hệ sinh thái sáng tạo nội dung &amp; thương mại số
          </div>
          <div style={{ marginTop: 26, fontSize: 26, color: "#9b9baa" }}>
            MCN · Agency Truyền thông · Thương mại điện tử
          </div>
        </div>
      </div>
    ),
    size,
  );
}
