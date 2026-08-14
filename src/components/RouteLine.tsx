"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/LanguageContext";

type Variant = "hero" | "footer";

export function RouteLine({
  variant = "hero",
  className,
  dark = false,
}: {
  variant?: Variant;
  className?: string;
  dark?: boolean;
}) {
  const { dict } = useLanguage();
  const isHero = variant === "hero";
  const knot = isHero ? 28 : 22;

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
          dark={dark}
        />
        <City
          name={dict.hero.kabul}
          country={dict.hero.afghanistan}
          compact={!isHero}
          align="right"
          dark={dark}
        />
      </div>
      <div className={cn("relative mt-3 flex items-center overflow-hidden", isHero ? "h-7" : "h-6")}>
        <span className="h-px w-full bg-gold" />
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gold" />
        <OxusKnot
          size={knot}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold"
        />
        <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-gold" />
      </div>
    </div>
  );
}

function OxusKnot({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={cn("px-0.5", className)}
    >
      <path
        d="M24 3.5 L31 15.5 L24 24 L17 15.5 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M24 24 L31 32.5 L24 44.5 L17 32.5 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M3.5 24 L15.5 17 L24 24 L15.5 31 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M24 24 L32.5 17 L44.5 24 L32.5 31 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function City({
  name,
  country,
  compact,
  align = "left",
  dark,
}: {
  name: string;
  country: string;
  compact: boolean;
  align?: "left" | "right";
  dark: boolean;
}) {
  return (
    <div className={cn(align === "right" && "text-right")}>
      <p
        className={cn(
          "font-serif font-semibold tracking-tight",
          dark ? "text-white" : "text-navy",
          compact ? "text-sm" : "text-lg md:text-xl"
        )}
      >
        {name}
      </p>
      <p
        className={cn(
          "mt-0.5 uppercase tracking-[0.18em] text-gold",
          compact ? "text-[9px]" : "text-[10px] md:text-xs"
        )}
      >
        {country}
      </p>
    </div>
  );
}
