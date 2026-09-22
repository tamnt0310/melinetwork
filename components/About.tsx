"use client";

import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { rich } from "@/lib/rich";

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
                <MediaSlot
                  src={images.about}
                  alt="Sơ đồ hệ sinh thái Meli Network: Nhà sáng tạo, Truyền thông, Chiến dịch và Thương mại kết nối quanh một đầu mối"
                  seed={2}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </Reveal>

          {/* Chữ */}
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title}>
              <Reveal delay={140}>
                <p className="mt-6 text-base leading-relaxed text-fg/90 sm:text-lg">
                  {rich(t.about.lead)}
                </p>
              </Reveal>
              {t.about.body.map((paragraph, i) => (
                <Reveal key={paragraph} delay={200 + i * 60}>
                  <p className="mt-5 text-base leading-relaxed text-muted">{rich(paragraph)}</p>
                </Reveal>
              ))}

              <Reveal delay={340}>
                <p className="mt-7 border-l-2 border-brand-500 pl-5 text-base font-semibold leading-relaxed text-white sm:text-lg">
                  {t.about.closing.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
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

            {/* Khẩu hiệu thương hiệu */}
            <Reveal delay={420}>
              <p className="mt-10 flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-6 text-lg font-extrabold tracking-tight sm:text-xl">
                {t.about.tagline.map((phrase, i) => (
                  <span key={phrase} className={i === t.about.tagline.length - 1 ? "text-brand-400" : "text-white"}>
                    {phrase}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
