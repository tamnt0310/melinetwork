"use client";

import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Cases() {
  const { t } = useLang();

  return (
    <section id="cases" className="relative scroll-mt-24 border-t border-line/60 bg-ink-900/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} desc={t.cases.desc} />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {t.cases.items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 110}>
              <article className="card-ring group h-full overflow-hidden rounded-[1.5rem] bg-ink-900">
                <div className="relative aspect-16/10 overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <MediaSlot src={images.cases[i]} alt="" seed={i + 3} />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full bg-ink-950/75 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-fg backdrop-blur">
                    {c.client}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-[11px] font-medium text-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-line/70 pt-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-faint">
                      {t.cases.metricLabel}
                    </span>
                    <span className="text-sm font-bold text-brand-400">{c.metric}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
