"use client";

import {
  ShoppingBag,
  Wheat,
  Shirt,
  BrickWall,
  Pill,
  Truck,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const ICONS: LucideIcon[] = [
  ShoppingBag,
  Wheat,
  Shirt,
  BrickWall,
  Pill,
  Truck,
  Monitor,
];

export function Audience() {
  const { dict } = useLanguage();

  return (
    <section className="bg-white py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.audience.eyebrow}
          title={dict.audience.title}
          intro={dict.audience.intro}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.audience.items.map((item, index) => {
            const Icon = ICONS[index] ?? ShoppingBag;
            return (
              <article
                key={item.title}
                className="h-full border border-navy/10 bg-cream p-6"
              >
                <div className="space-y-2">
                  <Icon className="text-gold" size={24} strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-navy/70">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
          {dict.audience.whoTitle}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {dict.audience.who.map((item) => (
            <li
              key={item}
              className="border border-navy/15 bg-cream px-3 py-1.5 text-sm text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
