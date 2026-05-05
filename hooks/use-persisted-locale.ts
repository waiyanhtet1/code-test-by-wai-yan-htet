"use client";

import { useEffect, useState } from "react";
import { Locale, locales } from "@/data/product-content";

const localeStorageKey = "appi-locale";
const defaultLocale: Locale = "ja";
const localeCodes = new Set(locales.map((locale) => locale.code));

function isLocale(value: string | null): value is Locale {
  return value !== null && localeCodes.has(value as Locale);
}

export function usePersistedLocale() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(localeStorageKey);

    if (isLocale(storedLocale)) {
      window.requestAnimationFrame(() => {
        setLocaleState(storedLocale);
      });
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(localeStorageKey, nextLocale);
  };

  return [locale, setLocale] as const;
}
