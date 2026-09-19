import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-brand-500/70" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {desc && (
        <Reveal delay={140}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted">{desc}</p>
        </Reveal>
      )}

      {children}
    </div>
  );
}
