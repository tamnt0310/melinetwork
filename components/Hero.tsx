"use client";

import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";
import MediaSlot from "./MediaSlot";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Nền */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]" />
        <div className="glow-brand absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-[70%] rounded-full opacity-70" />
        <div className="glow-brand absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Cột chữ */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900/70 px-4 py-2 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-7 text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[4.1rem]">
            {t.hero.titleLead}{" "}
            <span className="text-gradient-brand">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.desc}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(232,17,35,0.95)] transition-all hover:bg-brand-400 hover:shadow-[0_14px_48px_-8px_rgba(232,17,35,1)]"
            >
              {t.hero.ctaPrimary}
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
                <path d="M2 8h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-line bg-ink-900/60 px-7 py-3.5 text-sm font-semibold text-fg backdrop-blur transition-colors hover:border-white/30 hover:bg-ink-850"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Cột hình */}
        <div className="lg:col-span-5">
          <div className="card-ring relative aspect-4/5 overflow-hidden rounded-[2rem] bg-ink-900 shadow-[0_40px_90px_-40px_rgba(0,0,0,1)]">
            <MediaSlot src={images.hero} alt="Meli Network" seed={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
