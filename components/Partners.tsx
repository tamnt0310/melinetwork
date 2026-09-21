"use client";

import Image from "next/image";

import { useLang } from "@/lib/lang";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Lấy chữ cái đầu cho vòng tròn đại diện, bỏ qua kính ngữ tiếng Việt —
 *  "Anh N** Nguyễn" phải ra "N" chứ không phải "A". */
function initial(name: string) {
  const honorifics = ["anh", "chị", "chi", "ông", "ong", "bà", "ba", "cô", "co", "mr", "mrs", "ms"];
  const parts = name.trim().split(/\s+/);
  const first = parts.find((w) => !honorifics.includes(w.toLowerCase().replace(/[.,]/g, "")));
  return (first ?? parts[0] ?? "").slice(0, 1).toUpperCase();
}

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
            {strip.map((logo, i) => (
              /* Logo gốc là ảnh nền trắng chữ đen, nên phải đặt trên thẻ trắng —
                 để thẳng lên nền tối thì chữ đen sẽ chìm mất. */
              <div
                key={`${logo.name}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/15"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={176}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Chia sẻ từ đối tác và Creator */}
      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.18em] text-faint">
            {t.partners.quotesTitle}
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {t.partners.testimonials.map((item, i) => (
            <Reveal key={item.quote} delay={i * 110}>
              <figure className="card-ring relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-ink-900/70 p-7">
                <div
                  aria-hidden
                  className="glow-brand absolute -left-20 -top-20 h-48 w-48 rounded-full opacity-30"
                />
                <svg
                  viewBox="0 0 24 24"
                  className="relative h-7 w-7 shrink-0 text-brand-500"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M9.6 5.5C6.3 7 4.4 9.8 4.2 13.6c-.2 3.3 1.5 5.4 4 5.4 2.1 0 3.6-1.5 3.6-3.5s-1.4-3.4-3.3-3.4c-.4 0-.7 0-1 .1.4-1.8 1.8-3.3 3.8-4.3l-1.7-2.4Zm9.3 0C15.6 7 13.7 9.8 13.5 13.6c-.2 3.3 1.5 5.4 4 5.4 2.1 0 3.6-1.5 3.6-3.5s-1.4-3.4-3.3-3.4c-.4 0-.7 0-1 .1.4-1.8 1.8-3.3 3.8-4.3l-1.7-2.4Z" />
                </svg>

                <blockquote className="relative mt-5 flex-1 text-[15px] leading-relaxed text-fg/90">
                  “{item.quote}”
                </blockquote>

                {/* Chỉ hiện phần người nói khi đã có tên — tránh thẻ trống trông lỗi */}
                {item.name ? (
                  <figcaption className="relative mt-6 flex items-center gap-3 border-t border-line/70 pt-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-400">
                      {initial(item.name)}
                    </span>
                    <span className="leading-tight">
                      <span className="block text-sm font-bold text-white">{item.name}</span>
                      {item.role && (
                        <span className="mt-0.5 block text-xs text-muted">{item.role}</span>
                      )}
                    </span>
                  </figcaption>
                ) : (
                  <div aria-hidden className="relative mt-6 h-px w-10 bg-brand-500/70" />
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}
