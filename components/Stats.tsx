"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

/** Đếm số tăng dần khi khối lọt vào màn hình */
function useCountUp(target: number, decimals: number, run: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    const duration = 1400;
    let raf = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Number((target * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, decimals, run]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  run,
  singleRow,
}: {
  value: string;
  suffix: string;
  label: string;
  run: boolean;
  /** true khi tất cả ô nằm gọn trên một hàng ở mọi kích thước màn hình */
  singleRow: boolean;
}) {
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;
  const current = useCountUp(Number(value), decimals, run);

  return (
    <div
      className={
        "relative border-line/50 px-2 py-8 text-center sm:px-6 " +
        (singleRow
          ? // Một hàng: chỉ cần vạch ngăn giữa các ô
            "border-l [&:first-child]:border-l-0"
          : // Hai hàng trên mobile, một hàng từ lg: phải bỏ vạch đúng chỗ
            "border-b border-l [&:nth-child(2n+1)]:border-l-0 [&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(4n+1)]:border-l-0")
      }
    >
      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {current.toFixed(decimals)}
        <span className="text-brand-500">{suffix}</span>
      </div>
      <div className="mx-auto mt-3 max-w-[13rem] text-sm leading-snug text-muted">{label}</div>
    </div>
  );
}

/** Bố cục lưới theo số ô. Viết sẵn từng chuỗi vì Tailwind quét class ở dạng
 *  văn bản tĩnh — ghép chuỗi kiểu `grid-cols-${n}` sẽ không sinh ra CSS. */
const GRID: Record<number, string> = {
  1: "grid grid-cols-1",
  2: "grid grid-cols-2",
  3: "grid grid-cols-3",
  4: "grid grid-cols-2 lg:grid-cols-4",
};

export default function Stats() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative border-y border-line/60 bg-ink-900/40">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={GRID[Math.min(t.stats.items.length, 4)] ?? GRID[4]}>
          {t.stats.items.map((s) => (
            <StatItem key={s.label} {...s} run={run} singleRow={t.stats.items.length <= 3} />
          ))}
        </div>
        <p className="pb-6 text-center text-[11px] uppercase tracking-[0.18em] text-faint">
          {t.stats.note}
        </p>
      </div>
    </section>
  );
}
