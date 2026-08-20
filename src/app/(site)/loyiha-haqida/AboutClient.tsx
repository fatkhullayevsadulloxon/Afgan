"use client";

import {
  FileText,
  Search,
  Handshake,
  CircleCheck,
  ShieldCheck,
  Timer,
  Users,
  DoorOpen,
  Layers,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES } from "@/lib/routes";

const PROCESS_ICONS: LucideIcon[] = [FileText, Search, Handshake, CircleCheck];
const ADV_ICONS: LucideIcon[] = [
  ShieldCheck,
  Timer,
  Users,
  DoorOpen,
  Layers,
  Headset,
];

export default function AboutPage() {
  const { dict } = useLanguage();

  return (
    <>
      <PageHeader
        title={dict.about.title}
        breadcrumb={dict.about.title}
        homeLabel={dict.common.home}
      />
      <section className="bg-white py-10 lg:py-16">
        <Container>
          <p className="max-w-3xl text-base leading-[1.7] text-navy/75 md:text-lg">
            {dict.about.pageIntro}
          </p>

          <h2 className="mt-12 font-serif text-h2 font-semibold text-navy">
            {dict.about.eyebrow}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.about.goalsFull.map((goal) => (
              <article
                key={goal.title}
                className="border border-navy/10 bg-cream p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {goal.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy/70">
                  {goal.text}
                </p>
              </article>
            ))}
          </div>

          <h2 className="mt-14 font-serif text-h2 font-semibold text-navy">
            {dict.about.processTitle}
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {dict.about.process.map((step, index) => {
              const Icon = PROCESS_ICONS[index] ?? FileText;
              return (
                <li
                  key={step.title}
                  className="relative border border-navy/10 bg-cream p-5"
                >
                  <Icon className="text-gold" size={24} strokeWidth={1.5} />
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>

          <h2 className="mt-14 font-serif text-h2 font-semibold text-navy">
            {dict.about.advantagesTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.about.advantages.map((item, index) => {
              const Icon = ADV_ICONS[index] ?? ShieldCheck;
              return (
                <article
                  key={item.title}
                  className="border border-navy/10 bg-white p-6"
                >
                  <Icon className="text-gold" size={24} strokeWidth={1.5} />
                  <h3 className="mt-3 font-serif text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy/70">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12">
            <Button href={ROUTES.services}>{dict.about.cta} →</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
