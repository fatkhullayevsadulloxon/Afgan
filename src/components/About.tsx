"use client";

import { ShieldCheck, TrendingUp, Landmark } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES } from "@/lib/routes";

const ICONS = [TrendingUp, ShieldCheck, Landmark];

export function About() {
  const { dict } = useLanguage();

  return (
    <section className="bg-white py-10 lg:py-20">
      <Container>
        <SectionHeading
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
                className="h-full border border-navy/10 bg-cream p-6"
              >
                <div className="space-y-2">
                  <Icon className="text-gold" size={26} strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-navy">
                    {goal.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-navy/70">
                    {goal.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8">
          <Button href={ROUTES.about} variant="secondary">
            {dict.home.aboutMore} →
          </Button>
        </div>
      </Container>
    </section>
  );
}
