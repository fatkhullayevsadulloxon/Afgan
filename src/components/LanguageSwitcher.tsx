"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageContext";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn("flex items-center border border-line", className)}
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code as Locale)}
          className={cn(
            "min-w-[2.25rem] px-2 py-1.5 text-[11px] font-semibold tracking-[0.14em] transition",
            locale === code
              ? "bg-gold text-navy-dark"
              : "bg-transparent text-gold-light hover:text-white"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
