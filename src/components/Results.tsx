"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function Results() {
  const { dict } = useLanguage();

  return (
    <section className="bg-navy py-10 lg:py-20">
      <Container>
        <SectionHeading
          dark
          eyebrow={dict.results.eyebrow}
          title={dict.results.title}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.results.items.map((item) => (
            <article
              key={item.label}
              className="h-full border border-gold/30 bg-white p-6"
            >
              <p className="font-serif text-4xl font-bold text-gold md:text-[2.75rem]">
                {item.prefix}
                {item.value}
                {item.suffix}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-navy">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
