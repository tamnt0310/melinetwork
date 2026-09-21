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
              <div className="card-ring relative aspect-video overflow-hidden rounded-[1.5rem] bg-ink-900">
                <MediaSlot
                  src={images.culture}
                  alt="Đội ngũ Meli Network trong một chương trình cộng đồng"
                  seed={5}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-ring relative overflow-hidden rounded-[1.5rem] bg-ink-900/80 p-7 sm:p-8">
                <div
                  aria-hidden
                  className="glow-brand absolute -bottom-20 -right-16 h-52 w-52 rounded-full opacity-45"
                />
                <h3 className="relative text-balance text-xl font-extrabold tracking-tight text-white">
                  {t.culture.invite.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {t.culture.invite.desc}
                </p>
                <a
                  href="#contact"
                  className="group relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-300"
                >
                  {t.culture.invite.cta}
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                  >
                    <path
                      d="M2 8h11m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
