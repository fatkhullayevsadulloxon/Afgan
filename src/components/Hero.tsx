"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { RouteLine } from "@/components/RouteLine";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES } from "@/lib/routes";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-cream"
    >
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <div className="absolute inset-y-0 left-[38%] right-0">
          <Image
            src="/images/hero-oxus.jpg"
            alt={dict.img.heroAlt}
            fill
            priority
            className="object-cover object-[28%_center] -scale-x-100"
            sizes="62vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cream from-[42%] via-cream/90 via-[52%] to-transparent" />
      </div>

      <Container className="relative z-10 pb-16 pt-28 md:pb-20 md:pt-32">
        <h1>
          <Image
            src="/images/oxus-wordmark.png"
            alt={dict.hero.title}
            width={930}
            height={343}
            priority
            className="h-28 w-auto object-contain object-left md:h-32 lg:h-36"
          />
        </h1>
        <p className="mt-3 font-serif text-lg font-semibold uppercase tracking-[0.18em] text-navy md:text-xl lg:text-2xl">
          {dict.hero.subhead}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={ROUTES.contact}>{dict.hero.ctaPrimary}</Button>
          <Button href={ROUTES.services} variant="secondary">
            {dict.hero.ctaSecondary}
          </Button>
        </div>
        <RouteLine className="mt-12 max-w-xl" />
        <div className="relative mt-10 h-44 w-full overflow-hidden lg:hidden">
          <Image
            src="/images/hero-oxus.jpg"
            alt={dict.img.heroAlt}
            fill
            className="object-cover object-center -scale-x-100"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 to-transparent" />
        </div>
      </Container>

      <a
        href={ROUTES.about}
        className="absolute bottom-6 left-5 z-10 hidden flex-col items-start gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold md:left-8 md:flex"
      >
        <span>{dict.hero.scroll}</span>
        <span className="block h-8 w-px bg-gold" />
      </a>
    </section>
  );
}
