/**
 * Biểu tượng "M" của Meli — hai vòm lồng vào nhau, tượng trưng cho sự đồng hành
 * giữa Meli và nhà sáng tạo.
 *
 * 👉 MUỐN DÙNG LOGO GỐC: đặt file logo vào `public/logo.svg` (hoặc .png) rồi thay
 *    toàn bộ phần <svg> bên dưới bằng:  <img src="/logo.svg" alt="Meli Network" className={...} />
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const arch =
    "M 3 84 C 3 44, 15 24, 40 24 C 55 24, 60 42, 62 66 L 55 75 C 52 50, 48 40, 39 40 C 28 40, 23 58, 23 84 Z";

  return (
    <svg viewBox="0 0 100 88" className={className} role="img" aria-label="Meli Network">
      <defs>
        <linearGradient id="meli-red" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ff4650" />
          <stop offset="55%" stopColor="#e81123" />
          <stop offset="100%" stopColor="#a30c16" />
        </linearGradient>
        <linearGradient id="meli-silver" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#dcdce4" />
          <stop offset="100%" stopColor="#9a9aa8" />
        </linearGradient>
      </defs>

      {/* Vòm phải (bạc) nằm dưới */}
      <g transform="matrix(-1 0 0 1 100 0)">
        <path d={arch} fill="url(#meli-silver)" />
      </g>
      <circle cx="60" cy="12" r="8" fill="url(#meli-silver)" />

      {/* Vòm trái (đỏ) nằm trên */}
      <path d={arch} fill="url(#meli-red)" />
      <circle cx="40" cy="12" r="8" fill="url(#meli-red)" />
    </svg>
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.16em] text-white">MELI</span>
        <span className="mt-1 text-[9px] font-semibold tracking-[0.3em] text-brand-400">
          NETWORK
        </span>
      </span>
    </span>
  );
}
