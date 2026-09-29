import Image from "next/image";

/**
 * Logo chính thức theo Brand Guideline Meli Network.
 * File gốc nền trong suốt nằm trong public/brand/.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/brand/bieu-tuong.png"
        alt="Meli Network"
        fill
        sizes="64px"
        className="object-contain"
      />
    </span>
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  // Logo chính (ngang): biểu tượng + chữ MELI NETWORK trong cùng một file
  return (
    <Image
      src="/brand/logo-meli-network.png"
      alt="Meli Network"
      width={456}
      height={160}
      priority
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  );
}
