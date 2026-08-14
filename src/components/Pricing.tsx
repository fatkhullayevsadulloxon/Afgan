"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";
import { selectPackageAndScroll, type PackageId } from "@/lib/site";

export function Pricing() {
  const { dict } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section id="pricing" className="bg-white py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.pricing.eyebrow}
          title={dict.pricing.title}
          intro={dict.pricing.intro}
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dict.pricing.plans.map((plan) => {
            const featured = plan.id === "business";
            return (
              <article
                key={plan.id}
                className={cn(
                  "relative flex h-full flex-col p-6",
                  featured
                    ? "border-2 border-gold bg-navy text-white"
                    : "border border-navy/10 bg-cream text-navy"
                )}
              >
                {featured ? (
                  <span className="mb-3 inline-flex self-start bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-dark">
                    {dict.pricing.featured}
                  </span>
                ) : null}
                <h3
                  className={cn(
                    "font-serif text-xl font-semibold tracking-tight",
                    featured ? "text-white" : "text-navy"
                  )}
                >
                  {plan.name}
                </h3>
                <p className="mt-3 font-serif text-4xl font-bold text-gold">
                  {plan.price}
                  <span
                    className={cn(
                      "ml-1 font-sans text-sm font-medium uppercase tracking-wide",
                      featured ? "text-white/55" : "text-navy/50"
                    )}
                  >
                    {plan.period === "project"
                      ? dict.pricing.perProject
                      : dict.pricing.perMonth}
                  </span>
                </p>
                <ul
                  className={cn(
                    "mt-5 flex-1 space-y-2 text-[14px] leading-relaxed",
                    featured ? "text-white/75" : "text-navy/70"
                  )}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check
                        className="mt-0.5 shrink-0 text-gold"
                        size={16}
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full"
                  onClick={() => selectPackageAndScroll(plan.id as PackageId)}
                >
                  {dict.pricing.cta}
                </Button>
              </article>
            );
          })}
        </div>

        <div className="mt-8 border border-navy/10 bg-cream">
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            <span className="font-serif text-lg font-semibold text-navy">
              {dict.pricing.extrasTitle}
            </span>
            <ChevronDown
              className={cn(
                "text-gold transition duration-250",
                open && "rotate-180"
              )}
              size={22}
            />
          </button>
          {open ? (
            <div className="border-t border-navy/10 bg-white">
              {dict.pricing.extras.map((extra) => (
                <div
                  key={extra.name}
                  className="grid gap-1 border-b border-navy/10 px-6 py-3 last:border-b-0 md:grid-cols-[1fr_180px_1.2fr] md:items-baseline md:gap-6"
                >
                  <p className="font-medium text-navy">{extra.name}</p>
                  <p className="font-semibold text-gold">{extra.price}</p>
                  <p className="text-sm text-navy/65">{extra.note}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
