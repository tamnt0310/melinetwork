"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { LogoLockup } from "./Logo";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Khoá cuộn nền khi menu di động đang mở
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#top" aria-label="Meli Network" className="shrink-0">
          <LogoLockup />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"}
            className="flex items-center gap-1 rounded-full border border-line px-2.5 py-1.5 text-[11px] font-bold tracking-wider transition-colors hover:border-brand-500/60 hover:bg-ink-850"
          >
            <span className={lang === "vi" ? "text-white" : "text-faint"}>VI</span>
            <span className="text-faint">/</span>
            <span className={lang === "en" ? "text-white" : "text-faint"}>EN</span>
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_28px_-8px_rgba(232,17,35,0.9)] transition-all hover:bg-brand-400 hover:shadow-[0_8px_34px_-6px_rgba(232,17,35,1)] sm:block"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-white transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-[1.5px] w-full bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-full bg-white transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu di động */}
      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line/60 bg-ink-950/95 backdrop-blur-xl transition-[max-height] duration-400 lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-5 sm:px-8" aria-label="Mobile">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/50 py-3.5 text-base font-medium text-fg transition-colors hover:text-brand-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white"
          >
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
