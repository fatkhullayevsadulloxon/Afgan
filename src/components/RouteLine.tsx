"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageContext";

type Variant = "hero" | "footer";

export function RouteLine({
  variant = "hero",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { dict } = useLanguage();
  const isHero = variant === "hero";

  return (
    <div
      className={cn("w-full", className)}
      role="img"
      aria-label={`${dict.hero.tashkent} — ${dict.hero.kabul}, ${dict.hero.routeLabel}`}
    >
      <div className="flex items-end justify-between gap-3">
        <City
          name={dict.hero.tashkent}
          country={dict.hero.uzbekistan}
          compact={!isHero}
        />
        <City
          name={dict.hero.kabul}
          country={dict.hero.afghanistan}
          compact={!isHero}
          align="right"
        />
      </div>
      <div className={cn("relative mt-3 flex items-center", isHero ? "h-4" : "h-3")}>
        <span className="h-px w-full bg-gold/70" />
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gold" />
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-navy" />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gold" />
      </div>
    </div>
  );
}

function City({
  name,
  country,
  compact,
  align = "left",
}: {
  name: string;
  country: string;
  compact: boolean;
  align?: "left" | "right";
}) {
  return (
    <div className={cn(align === "right" && "text-right")}>
      <p
        className={cn(
          "font-serif font-semibold tracking-tight text-white",
          compact ? "text-sm" : "text-lg md:text-xl"
        )}
      >
        {name}
      </p>
      <p
        className={cn(
          "mt-0.5 uppercase tracking-[0.18em] text-gold-light",
          compact ? "text-[9px]" : "text-[10px] md:text-xs"
        )}
      >
        {country}
      </p>
    </div>
  );
}
