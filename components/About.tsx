"use client";

import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Hình */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="card-ring relative aspect-4/3 overflow-hidden rounded-[1.75rem] bg-ink-900">
                <MediaSlot src={images.about} alt="" seed={2} />
              </div>
              {/* Dải đỏ trang trí */}
              <div
                aria-hidden
                className="absolute -bottom-7 -right-5 hidden sm:block h-28 w-28 rounded-[1.25rem] border border-brand-500/35 bg-gradient-to-br from-brand-500/25 to-brand-700/10 backdrop-blur-md sm:-right-8 sm:h-36 sm:w-36"
              />
            </div>
          </Reveal>

          {/* Chữ */}
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title}>
              <Reveal delay={140}>
                <p className="mt-6 text-base leading-relaxed text-fg/90 sm:text-lg">
                  {t.about.lead}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-base leading-relaxed text-muted">{t.about.body}</p>
              </Reveal>
            </SectionHeading>

            <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-3">
              {t.about.pillars.map((p, i) => (
                <Reveal key={p.title} delay={260 + i * 80}>
                  <div className="border-t border-line pt-4">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
