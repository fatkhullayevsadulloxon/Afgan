"use client";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export function Stages() {
  const { dict } = useLanguage();

  return (
    <section id="stages" className="bg-cream py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.stages.eyebrow}
          title={dict.stages.title}
          intro={dict.stages.intro}
        />
        <ol className="mt-8 grid gap-8 md:grid-cols-4">
          {dict.stages.items.map((item, index) => (
            <li key={item.title} className="relative">
              {index < dict.stages.items.length - 1 ? (
                <span className="absolute left-10 top-6 hidden h-px w-[calc(100%-0.5rem)] bg-gold/50 md:block" />
              ) : null}
              <div className="relative h-full border border-navy/10 bg-white p-6">
                <p className="font-serif text-4xl font-bold leading-none text-gold">
                  {index + 1}
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {item.duration}
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-navy">
                  {item.title}
                </h3>
                <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-navy/70">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
