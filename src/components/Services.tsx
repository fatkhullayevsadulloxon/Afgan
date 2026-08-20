"use client";

import Image from "next/image";
import Link from "next/link";
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
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { HOME_SERVICE_INDICES, ROUTES } from "@/lib/routes";
import { SERVICE_SLUGS, serviceHref, serviceImagePath } from "@/data/services";

export const SERVICE_ICONS: LucideIcon[] = [
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

export function Services({
  mode = "preview",
}: {
  mode?: "preview" | "full";
}) {
  const { dict } = useLanguage();
  const indices =
    mode === "preview"
      ? [...HOME_SERVICE_INDICES]
      : dict.services.items.map((_, i) => i);

  return (
    <section className="bg-cream py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          intro={dict.services.intro}
        />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {indices.map((index) => {
            const item = dict.services.items[index];
            const slug = item.slug ?? SERVICE_SLUGS[index];
            const Icon = SERVICE_ICONS[index] ?? Scale;
            return (
              <Link
                key={slug}
                href={serviceHref(slug as (typeof SERVICE_SLUGS)[number])}
                className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-white transition duration-250 hover:border-gold"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={serviceImagePath(slug as (typeof SERVICE_SLUGS)[number])}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center bg-gold text-navy-dark">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-5">
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-[15px] leading-relaxed text-navy/70">
                    {mode === "full" ? item.detail : item.text}
                  </p>
                  <span className="pt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {dict.services.page.more} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        {mode === "preview" ? (
          <div className="mt-8">
            <Button href={ROUTES.services} variant="secondary">
              {dict.home.servicesMore} →
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
