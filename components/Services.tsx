"use client";

import { useLang } from "@/lib/lang";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="relative scroll-mt-24 border-t border-line/60 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-brand absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          desc={t.services.desc}
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.name} delay={i * 110}>
              <article className="card-ring group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-ink-900/70 p-7 transition-colors duration-300 hover:bg-ink-850/80 sm:p-8">
                {/* Quầng sáng khi rê chuột */}
                <div
                  aria-hidden
                  className="glow-brand pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                />

                <div className="relative flex items-baseline justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] text-brand-500">{s.tag}</span>
                  <span className="h-px flex-1 translate-y-[-2px] bg-line ml-4" />
                </div>

                <h3 className="relative mt-6 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {s.name}
                </h3>
                <p className="relative mt-1.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-400">
                  {s.kicker}
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-muted">{s.desc}</p>

                <ul className="relative mt-7 space-y-3 border-t border-line/70 pt-6">
                  {s.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-snug text-fg/85">
                      <svg viewBox="0 0 16 16" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brand-500" fill="none">
                        <path
                          d="M3 8.5 6.2 11.7 13 4.9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
