"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/lang";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

const field =
  "w-full rounded-xl border border-line bg-ink-950/60 px-4 py-3 text-sm text-fg placeholder:text-faint transition-colors focus:border-brand-500 focus:outline-none";

export default function Contact() {
  const { t, lang } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "success"
      ? { text: t.contact.form.success, tone: "text-emerald-400" }
      : status === "error"
        ? { text: t.contact.form.error, tone: "text-brand-400" }
        : status === "invalid"
          ? { text: t.contact.form.required, tone: "text-brand-400" }
          : null;

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-line/60 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="glow-brand absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full opacity-35" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Cột giới thiệu + thông tin liên hệ */}
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} desc={t.contact.desc} />

            <dl className="mt-10 space-y-6">
              {t.contact.info.map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className="border-t border-line pt-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-base text-fg">
                      {"href" in item && item.href ? (
                        <a href={item.href} className="transition-colors hover:text-brand-400">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Biểu mẫu */}
          <Reveal delay={100} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="card-ring rounded-[1.75rem] bg-ink-900/70 p-7 backdrop-blur sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-muted">
                    {t.contact.form.name} <span className="text-brand-500">*</span>
                  </span>
                  <input name="name" type="text" autoComplete="name" placeholder={t.contact.form.namePh} className={field} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-muted">
                    {t.contact.form.email} <span className="text-brand-500">*</span>
                  </span>
                  <input name="email" type="email" autoComplete="email" placeholder={t.contact.form.emailPh} className={field} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-muted">{t.contact.form.phone}</span>
                  <input name="phone" type="tel" autoComplete="tel" placeholder={t.contact.form.phonePh} className={field} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-muted">{t.contact.form.topic}</span>
                  <select name="topic" defaultValue={t.contact.form.topics[0]} className={`${field} appearance-none`}>
                    {t.contact.form.topics.map((topic) => (
                      <option key={topic} value={topic} className="bg-ink-900">
                        {topic}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold text-muted">
                    {t.contact.form.message} <span className="text-brand-500">*</span>
                  </span>
                  <textarea name="message" rows={5} placeholder={t.contact.form.messagePh} className={`${field} resize-y`} />
                </label>
              </div>

              {/* Bẫy bot: người thật sẽ không điền ô này */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_rgba(232,17,35,0.95)] transition-all hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                </button>
                <p className="text-xs text-faint sm:max-w-[16rem] sm:text-right">
                  {t.contact.form.privacy}
                </p>
              </div>

              <p aria-live="polite" className={`mt-4 min-h-5 text-sm ${message?.tone ?? ""}`}>
                {message?.text ?? ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
