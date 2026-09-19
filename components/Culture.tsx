"use client";

import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Culture() {
  const { t } = useLang();

  return (
    <section id="culture" className="relative scroll-mt-24 border-t border-line/60 bg-ink-900/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Chữ + giá trị cốt lõi */}
          <div>
            <SectionHeading eyebrow={t.culture.eyebrow} title={t.culture.title} desc={t.culture.desc} />

            <div className="mt-10 space-y-5">
              {t.culture.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="flex gap-5 rounded-2xl border border-line/70 bg-ink-900/60 p-5 transition-colors hover:border-brand-500/40">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-500/12 text-xs font-bold text-brand-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{v.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Ảnh ghép + khối tuyển dụng */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="grid grid-cols-5 gap-4">
                <div className="card-ring col-span-3 aspect-3/4 overflow-hidden rounded-[1.5rem] bg-ink-900">
                  <MediaSlot src={images.culture} alt="" seed={5} />
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="card-ring aspect-square overflow-hidden rounded-[1.5rem] bg-ink-900">
                    <MediaSlot src={images.cultureAlt} alt="" seed={6} />
                  </div>
                  <div className="card-ring flex flex-1 flex-col justify-center rounded-[1.5rem] bg-brand-500/10 p-5">
                    <div className="text-3xl font-extrabold text-brand-400">
                      {t.culture.jobs.count}
                    </div>
                    <div className="mt-1 text-xs leading-snug text-muted">
                      {t.culture.jobs.openings}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-ring relative overflow-hidden rounded-[1.5rem] bg-ink-900/80 p-7 sm:p-8">
                <div aria-hidden className="glow-brand absolute -bottom-20 -right-16 h-52 w-52 rounded-full opacity-45" />
                <h3 className="relative text-xl font-extrabold tracking-tight text-white">
                  {t.culture.jobs.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {t.culture.jobs.desc}
                </p>
                <a
                  href="#contact"
                  className="group relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t.culture.jobs.cta}
                  <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
                    <path d="M2 8h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
