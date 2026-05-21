"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Locale, translations } from "@/lib/translations";

const STORAGE_KEY = "iptv_locale";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && stored in translations) return stored;
  const browser = navigator.language.slice(0, 2).toLowerCase();
  const map: Record<string, Locale> = { fr: "fr", de: "de", es: "es", nl: "nl" };
  return map[browser] ?? "en";
}

type LanguageContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  tArr: (key: string) => string[];
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
  tArr: () => [],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const t = (key: string): string => {
    const val = translations[locale][key] ?? translations["en"][key] ?? key;
    return Array.isArray(val) ? val.join(", ") : (val as string);
  };

  const tArr = (key: string): string[] => {
    const val = translations[locale][key] ?? translations["en"][key] ?? [];
    return Array.isArray(val) ? (val as string[]) : [val as string];
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
