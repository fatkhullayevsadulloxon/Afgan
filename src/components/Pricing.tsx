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
    <section id="pricing" className="bg-bg-light py-10 text-ink lg:py-20">
      <Container>
        <SectionHeading
          invert
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
                  "relative flex h-full flex-col bg-navy p-6 text-white",
                  featured
                    ? "border-2 border-[#C9A24B]"
                    : "border border-white/10"
                )}
              >
                {featured ? (
                  <span className="mb-3 inline-flex self-start bg-[#C9A24B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-dark">
                    {dict.pricing.featured}
                  </span>
                ) : null}
                <h3 className="font-serif text-xl font-semibold tracking-tight text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 font-serif text-4xl font-bold text-[#C9A24B]">
                  {plan.price}
                  <span className="ml-1 font-sans text-sm font-medium uppercase tracking-wide text-white/55">
                    {plan.period === "project"
                      ? dict.pricing.perProject
                      : dict.pricing.perMonth}
                  </span>
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-[14px] leading-relaxed text-white/75">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check
                        className="mt-0.5 shrink-0 text-[#C9A24B]"
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

        <div className="mt-8 border border-navy/10 bg-white">
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
            <div className="border-t border-navy/10">
              {dict.pricing.extras.map((extra) => (
                <div
                  key={extra.name}
                  className="grid gap-1 border-b border-navy/10 px-6 py-3 last:border-b-0 md:grid-cols-[1fr_180px_1.2fr] md:items-baseline md:gap-6"
                >
                  <p className="font-medium text-navy">{extra.name}</p>
                  <p className="font-semibold text-[#C9A24B]">{extra.price}</p>
                  <p className="text-sm text-ink/65">{extra.note}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
