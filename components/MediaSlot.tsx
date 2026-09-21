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

  // Mỗi seed cho một bố cục khác hẳn nhau để các khung không bị trùng lặp
  const rotate = [-22, 14, -6, 34, -38, 22, 6][seed % 7];
  const scale = [1.5, 1.2, 1.7, 1.35, 1.9, 1.15, 1.6][seed % 7];
  const sweep = [
    "M -40 300 C 120 180, 260 260, 440 90",
    "M -40 120 C 140 320, 280 60, 440 260",
    "M -20 380 C 160 120, 240 340, 420 40",
    "M -40 60 C 120 240, 300 140, 440 340",
    "M -30 220 C 90 380, 310 40, 430 200",
  ][seed % 5];
  const rings = [
    [70, 112, 154, 196, 238],
    [48, 96, 168, 216, 272],
    [60, 130, 176, 232, 290],
  ][seed % 3];

  return (
    <div
      role="presentation"
      className={`relative h-full w-full overflow-hidden bg-ink-900 ${className}`}
    >
      {/* Quầng đỏ */}
      <div
        className="absolute h-[70%] w-[70%] rounded-full glow-brand animate-pulse-slow"
        style={{
          top: `${[6, 30, -10, 40, 14, 52, 22][seed % 7]}%`,
          left: `${[-12, 34, 10, -20, 44, 4, 24][seed % 7]}%`,
        }}
      />
      {/* Các vòng cung mảnh */}
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        style={{ transform: `rotate(${rotate}deg) scale(${scale})` }}
      >
        <defs>
          <linearGradient id={`ms-stroke-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="60%" stopColor="#e81123" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e81123" stopOpacity="0" />
          </linearGradient>
        </defs>
        {rings.map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke={`url(#ms-stroke-${seed})`}
            strokeWidth={i === 1 ? 1.6 : 0.8}
          />
        ))}
        <path
          d={sweep}
          fill="none"
          stroke="#e81123"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
      </svg>
      {/* Biểu tượng mờ */}
      <LogoMark className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 opacity-[0.13]" />
      {/* Lớp tối phủ để chữ đặt lên vẫn đọc được */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/35" />
    </div>
  );
}
