"use client";

import { useLang } from "@/lib/lang";
import { LogoLockup } from "./Logo";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line/70 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Thương hiệu */}
          <div className="lg:col-span-4">
            <LogoLockup />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{t.footer.tagline}</p>

            <div className="mt-7">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">
                {t.footer.socialTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {t.footer.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex rounded-full border border-line px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-brand-500/60 hover:text-white"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Điều hướng */}
          <nav className="lg:col-span-3" aria-label="Footer">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">
              {t.footer.colTitleNav}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Dịch vụ */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">
              {t.footer.colTitleServices}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.footer.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">
              {t.footer.colTitleContact}
            </h3>
            <ul className="mt-4 space-y-3">
              {t.contact.info.map((item) => (
                <li key={item.label}>
                  {"href" in item && item.href ? (
                    <a href={item.href} className="text-sm text-muted transition-colors hover:text-white">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {year} {t.footer.legal} · {t.footer.company}
          </p>
          <a href="#top" className="text-xs font-medium text-muted transition-colors hover:text-brand-400">
            ↑ {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
