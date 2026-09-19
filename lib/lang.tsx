"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { content, type Content, type Lang } from "./content";

const STORAGE_KEY = "meli-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Content;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  // Server render luôn dùng tiếng Việt để HTML đầu tiên thân thiện với SEO trong nước.
  const [lang, setLangState] = useState<Lang>("vi");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "vi" || saved === "en") {
        setLangState(saved);
        return;
      }
      // Chưa có lựa chọn lưu sẵn → đoán theo ngôn ngữ trình duyệt.
      if (!navigator.language.toLowerCase().startsWith("vi")) setLangState("en");
    } catch {
      /* localStorage bị chặn (chế độ riêng tư) — giữ mặc định tiếng Việt */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* bỏ qua */
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "vi" ? "en" : "vi"),
    [lang, setLang],
  );

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, toggle, t: content[lang] }),
    [lang, setLang, toggle],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang phải được dùng bên trong <LangProvider>");
  return ctx;
}
