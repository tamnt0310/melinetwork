import Image from "next/image";

import { LogoMark } from "./Logo";

/**
 * Khung ảnh dùng chung cho cả trang.
 * - Có `src`  → hiển thị ảnh thật (object-cover, phủ kín khung).
 * - Không có  → vẽ một nền trừu tượng đỏ/đen để trang vẫn chỉn chu khi chưa có ảnh.
 * Đường dẫn ảnh khai báo tập trung tại `lib/images.ts`.
 */
export default function MediaSlot({
  src,
  alt = "",
  className = "",
  seed = 0,
  sizes = "(max-width: 1024px) 100vw, 600px",
  priority = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  /** Đổi số này để nền trừu tượng của mỗi khung khác nhau một chút */
  seed?: number;
  /** Gợi ý cho trình duyệt biết khung ảnh rộng bao nhiêu, để tải đúng cỡ cần thiết */
  sizes?: string;
  /** Bật cho ảnh nằm ngay màn hình đầu — tải sớm thay vì chờ cuộn tới */
  priority?: boolean;
}) {
  if (src) {
    // Dùng next/image: Vercel tự chuyển sang WebP/AVIF và cắt sẵn nhiều kích
    // thước. Ảnh chụp màn hình dạng PNG rất nặng, qua bước này nhẹ đi đáng kể.
    return (
      <div className={`relative h-full w-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  // Trang còn 4 khung chưa có ảnh thật. Nếu khung nào cũng vẽ vòng tròn đồng tâm
  // với logo chính giữa thì nhìn sẽ như lỗi lặp, nên chia làm 3 kiểu bố cục khác
  // hẳn nhau và xoay vòng theo seed.
  const variant = seed % 3;
  const tilt = [-22, 14, -6, 34, -38, 22, 6][seed % 7];
  const glow = {
    top: `${[6, 34, -12, 44, 16, 54, 24][seed % 7]}%`,
    left: `${[-14, 36, 8, -22, 46, 2, 26][seed % 7]}%`,
  };
  const gid = `ms-${seed}`;

  return (
    <div
      role="presentation"
      className={`relative h-full w-full overflow-hidden bg-ink-900 ${className}`}
    >
      <div
        className="absolute h-[70%] w-[70%] rounded-full glow-brand animate-pulse-slow"
        style={glow}
      />

      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`${gid}-line`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#e81123" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#e81123" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g transform={`rotate(${tilt} 200 200)`}>
          {variant === 0 && (
            <>
              {[60, 110, 165, 225, 290].map((r, i) => (
                <circle
                  key={r}
                  cx="200"
                  cy="200"
                  r={r}
                  fill="none"
                  stroke={`url(#${gid}-line)`}
                  strokeWidth={i === 1 ? 1.8 : 0.8}
                />
              ))}
              <path
                d="M -60 300 C 120 180, 260 270, 460 80"
                fill="none"
                stroke="#e81123"
                strokeOpacity="0.55"
                strokeWidth="2.2"
              />
            </>
          )}

          {variant === 1 &&
            [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect
                key={i}
                x={-120 + i * 74}
                y="-140"
                width={i === 3 ? 12 : 2}
                height="680"
                fill={i === 3 ? "#e81123" : `url(#${gid}-line)`}
                opacity={i === 3 ? 0.42 : 1}
              />
            ))}

          {variant === 2 && (
            <>
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M -80 ${420 - i * 66} Q 200 ${250 - i * 78}, 480 ${400 - i * 60}`}
                  fill="none"
                  stroke={`url(#${gid}-line)`}
                  strokeWidth={i === 2 ? 2.2 : 0.9}
                />
              ))}
              <circle
                cx="300"
                cy="120"
                r="86"
                fill="none"
                stroke="#e81123"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
            </>
          )}
        </g>
      </svg>

      {/* Logo mờ, đặt lệch theo từng kiểu để các khung không trùng nhau */}
      <LogoMark
        className={
          "absolute opacity-[0.13] " +
          [
            "left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2",
            "bottom-[12%] right-[10%] h-1/4 w-1/4",
            "left-[10%] top-[12%] h-[28%] w-[28%]",
          ][variant]
        }
      />

      {/* Lớp tối phủ để chữ đặt lên vẫn đọc được */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/35" />
    </div>
  );
}
