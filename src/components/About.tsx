"use client";

import { ShieldCheck, TrendingUp, Landmark } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [TrendingUp, ShieldCheck, Landmark];

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="bg-bg-light py-10 text-ink lg:py-20">
      <Container>
        <SectionHeading
          invert
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
          intro={dict.about.intro}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {dict.about.goals.map((goal, index) => {
            const Icon = ICONS[index] ?? TrendingUp;
            return (
              <article
                key={goal.title}
                className="h-full border border-navy/10 bg-white p-6"
              >
                <div className="space-y-2">
                  <Icon className="text-gold" size={26} strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-navy">
                    {goal.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/75">
                    {goal.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
