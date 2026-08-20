"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES } from "@/lib/routes";

export function MiniCta() {
  const { dict } = useLanguage();

  return (
    <section className="bg-cream py-14 lg:py-20">
      <Container>
        <div className="border border-gold/40 bg-navy px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="font-serif text-h2 font-semibold text-white">
            {dict.home.miniCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            {dict.home.miniCtaText}
          </p>
          <Button href={ROUTES.contact} className="mt-8">
            {dict.home.miniCtaButton}
          </Button>
        </div>
      </Container>
    </section>
  );
}
