import uz from "../../locales/uz.json";
import ru from "../../locales/ru.json";
import en from "../../locales/en.json";

export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export type Dictionary = typeof uz;

export const dictionaries: Record<Locale, Dictionary> = {
  uz,
  ru,
  en,
};

export const localeLabels: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const htmlLang: Record<Locale, string> = {
  uz: "uz",
  ru: "ru",
  en: "en",
};

const STORAGE_KEY = "ubh-locale";
const COOKIE_KEY = "ubh-locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "uz" || value === "ru" || value === "en";
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

export function persistLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  document.cookie = `${COOKIE_KEY}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

function isEmptyValue(value: unknown): boolean {
  return value === "" || value === null || value === undefined;
}

export function withUzbekFallback(locale: Locale): Dictionary {
  if (locale === "uz") return uz;
  return mergeFallback(uz, dictionaries[locale]) as Dictionary;
}

function mergeFallback(base: unknown, overlay: unknown): unknown {
  if (Array.isArray(base) && Array.isArray(overlay)) {
    if (overlay.length === 0) return base;
    return overlay.map((item, index) => mergeFallback(base[index], item));
  }
  if (
    base &&
    overlay &&
    typeof base === "object" &&
    typeof overlay === "object"
  ) {
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(base as object)) {
      const overlayValue = (overlay as Record<string, unknown>)[key];
      result[key] = mergeFallback(
        (base as Record<string, unknown>)[key],
        overlayValue
      );
    }
    return result;
  }
  return isEmptyValue(overlay) ? base : overlay;
}
