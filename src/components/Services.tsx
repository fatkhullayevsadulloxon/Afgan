"use client";

import {
  Scale,
  Calculator,
  LineChart,
  Building2,
  Languages,
  Car,
  Stamp,
  Handshake,
  Presentation,
  Ship,
  Landmark,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const ICONS: LucideIcon[] = [
  Scale,
  Calculator,
  LineChart,
  Building2,
  Languages,
  Car,
  Stamp,
  Handshake,
  Presentation,
  Ship,
  Landmark,
  Warehouse,
];

export function Services() {
  const { dict } = useLanguage();

  return (
    <section id="services" className="bg-navy py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          intro={dict.services.intro}
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item, index) => {
            const Icon = ICONS[index] ?? Scale;
            return (
              <article
                key={item.title}
                className="h-full border border-[#C9A24B]/20 bg-navy-dark p-6 transition duration-250 hover:border-gold/50"
              >
                <div className="space-y-2">
                  <Icon className="text-gold" size={24} strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-white/75">
                    {item.text}
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
