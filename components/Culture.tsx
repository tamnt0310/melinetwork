"use client";

import { useLang } from "@/lib/lang";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Culture() {
  const { t } = useLang();

  return (
    <section
      id="culture"
      className="relative scroll-mt-24 border-t border-line/60 bg-ink-900/30 py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-brand absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.culture.eyebrow} title={t.culture.title} align="center" />

        <div className="mx-auto mt-7 max-w-3xl text-center">
          <Reveal delay={140}>
            <p className="text-pretty text-base leading-relaxed text-fg/90 sm:text-lg">
              {t.culture.lead}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted">
              {t.culture.body}
            </p>
          </Reveal>
        </div>

        {/* Cam kết với từng nhóm đối tác */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.culture.commitments.map((c, i) => (
            <Reveal key={c.who} delay={i * 100}>
              <div className="card-ring h-full rounded-[1.5rem] bg-ink-900/70 p-7">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
                  {c.who}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-fg/85">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ba điều Meli luôn giữ */}
        <Reveal>
          <h3 className="mt-20 text-center text-sm font-bold uppercase tracking-[0.18em] text-faint">
            {t.culture.valuesIntro}
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.culture.values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-line/70 bg-ink-900/60 p-7 transition-colors hover:border-brand-500/40">
                <span className="text-xs font-bold tracking-[0.22em] text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-4 text-lg font-extrabold uppercase tracking-wide text-white">
                  {v.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Câu chốt của khối */}
        <Reveal delay={120}>
          <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-lg font-semibold leading-relaxed text-white sm:text-xl">
            <span className="text-brand-400">Meli Network</span> — {t.culture.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
