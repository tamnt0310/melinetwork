"use client";

import { useLang } from "@/lib/lang";
import { images } from "@/lib/images";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Culture() {
  const { t } = useLang();

  return (
    <section
      id="culture"
      className="relative scroll-mt-24 border-t border-line/60 bg-ink-900/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Cột trái: tiêu đề, giá trị cốt lõi, lời mời.
              Lời mời đặt ở cuối cột này để hai cột cao gần bằng nhau —
              chân dung bên phải vốn đã rất cao. */}
          <div>
            <SectionHeading
              eyebrow={t.culture.eyebrow}
              title={t.culture.title}
              desc={t.culture.desc}
            />

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

            <Reveal delay={280}>
              <div className="card-ring relative mt-8 overflow-hidden rounded-[1.5rem] bg-ink-900/80 p-7 sm:p-8">
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

          {/* Cột phải: chân dung người sáng lập, rồi tới ảnh tập thể */}
          <div className="flex flex-col gap-5">
          <Reveal delay={120}>
            <figure className="card-ring relative aspect-3/4 overflow-hidden rounded-[1.75rem] bg-ink-900">
              <MediaSlot
                src={images.culture}
                alt={`${t.culture.founder.name} — ${t.culture.founder.role}, Meli Network`}
                seed={5}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              {/* Không có thẻ tên thì người xem không biết đây là ai */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-transparent px-6 pb-6 pt-16 sm:px-8 sm:pb-8">
                <span className="block text-lg font-bold text-white sm:text-xl">
                  {t.culture.founder.name}
                </span>
                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-400">
                  {t.culture.founder.role}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={200}>
            <div className="card-ring relative aspect-video overflow-hidden rounded-[1.5rem] bg-ink-900">
              <MediaSlot
                src={images.team}
                alt="Đội ngũ Meli Network trong một chương trình cộng đồng"
                seed={6}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
