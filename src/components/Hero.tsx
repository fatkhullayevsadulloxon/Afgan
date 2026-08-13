"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { RouteLine } from "@/components/RouteLine";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt={dict.img.heroAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1330]/60 via-[#0A1330]/80 to-[#0A1330]/98" />

      <Container className="relative z-10 pb-16 pt-24 md:pb-20 md:pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-light md:text-xs">
          {dict.hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-h1 font-bold text-white">
          {dict.hero.title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-[1.65] text-white/75 md:text-lg">
          {dict.hero.subhead}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#contact">{dict.hero.ctaPrimary}</Button>
          <Button href="#services" variant="secondary">
            {dict.hero.ctaSecondary}
          </Button>
        </div>
        <RouteLine className="mt-12 max-w-xl" />
      </Container>

      <a
        href="#about"
        className="absolute bottom-6 left-5 z-10 hidden flex-col items-start gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-light md:left-8 md:flex"
      >
        <span>{dict.hero.scroll}</span>
        <span className="block h-8 w-px bg-gold/70" />
      </a>
    </section>
  );
}
