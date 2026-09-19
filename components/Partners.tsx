"use client";

import { useLang } from "@/lib/lang";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Partners() {
  const { t } = useLang();
  // Nhân đôi danh sách để dải logo chạy liền mạch
  const strip = [...t.partners.logos, ...t.partners.logos];

  return (
    <section id="partners" className="relative scroll-mt-24 border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.partners.eyebrow}
          title={t.partners.title}
          desc={t.partners.desc}
          align="center"
        />
      </div>

      {/* Dải logo chạy ngang */}
      <Reveal delay={120}>
        <div className="marquee-mask mt-14 overflow-hidden">
          <div className="marquee-track flex w-max animate-marquee items-center gap-4">
            {strip.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-line/80 bg-ink-900/60 px-4"
              >
                {/* 👉 Thay <span> bằng <img src="/logos/xxx.svg" …/> khi có logo thật */}
                <span className="text-sm font-bold tracking-wide text-muted/80">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Trích dẫn đối tác */}
      <div className="mx-auto mt-20 max-w-4xl px-5 sm:px-8">
        <Reveal>
          <figure className="card-ring relative overflow-hidden rounded-[1.75rem] bg-ink-900/70 p-8 sm:p-12">
            <div aria-hidden className="glow-brand absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-40" />
            <svg viewBox="0 0 24 24" className="relative h-9 w-9 text-brand-500" fill="currentColor" aria-hidden>
              <path d="M9.6 5.5C6.3 7 4.4 9.8 4.2 13.6c-.2 3.3 1.5 5.4 4 5.4 2.1 0 3.6-1.5 3.6-3.5s-1.4-3.4-3.3-3.4c-.4 0-.7 0-1 .1.4-1.8 1.8-3.3 3.8-4.3l-1.7-2.4Zm9.3 0C15.6 7 13.7 9.8 13.5 13.6c-.2 3.3 1.5 5.4 4 5.4 2.1 0 3.6-1.5 3.6-3.5s-1.4-3.4-3.3-3.4c-.4 0-.7 0-1 .1.4-1.8 1.8-3.3 3.8-4.3l-1.7-2.4Z" />
            </svg>
            <blockquote className="relative mt-6 text-lg font-medium leading-relaxed text-fg sm:text-2xl sm:leading-relaxed">
              “{t.partners.testimonial.quote}”
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/15 text-sm font-bold text-brand-400">
                {t.partners.testimonial.name.trim().slice(0, 1)}
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold text-white">
                  {t.partners.testimonial.name}
                </span>
                <span className="mt-0.5 block text-xs text-muted">
                  {t.partners.testimonial.role}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
