"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building,
  Building2,
  Calculator,
  Car,
  Handshake,
  Languages,
  LineChart,
  Presentation,
  Stamp,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import {
  L,
  relatedServices,
  serviceHref,
  services,
  type Lang,
  type ServiceSlug,
} from "@/data/services";
import { ROUTES, contactWithService } from "@/lib/routes";

const ICON_MAP: Record<string, LucideIcon> = {
  Handshake,
  Calculator,
  Stamp,
  Presentation,
  LineChart,
  Warehouse,
  Building2,
  Building,
  Car,
  Languages,
};

function ServiceIcon({ name, size = 18 }: { name: string; size?: number }) {
  const Icon = ICON_MAP[name] ?? Building2;
  return <Icon size={size} strokeWidth={1.75} />;
}

export default function ServicesClient() {
  const { dict, locale } = useLanguage();
  const lang = locale as Lang;

  return (
    <>
      <PageHeader
        title={dict.services.title}
        breadcrumb={dict.services.title}
        homeLabel={dict.common.home}
      />
      <section className="bg-white py-10 lg:py-16">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg">
            {dict.services.intro}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={serviceHref(service.slug)}
                className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-cream transition hover:border-gold"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={L(service.title, lang)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center bg-gold text-navy-dark">
                    <ServiceIcon name={service.icon} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-serif text-xl font-semibold text-navy">
                    {L(service.title, lang)}
                  </h2>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy/70 line-clamp-4">
                    {L(service.intro, lang)}
                  </p>
                  <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                    {dict.services.page.more} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Button href={ROUTES.pricing}>{dict.services.cta} →</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ServiceDetailClient({ slug }: { slug: ServiceSlug }) {
  const { dict, locale } = useLanguage();
  const lang = locale as Lang;
  const page = dict.services.page;
  const service = services.find((s) => s.slug === slug)!;
  const related = relatedServices(slug, 3);
  const title = L(service.title, lang);

  return (
    <>
      {/* 1. Page header */}
      <section className="bg-navy pt-28 md:pt-32">
        <Container className="pb-12 md:pb-16">
          <nav className="text-[12px] tracking-wide text-white/65">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={ROUTES.home} className="hover:text-gold">
                  {dict.common.home}
                </Link>
              </li>
              <li className="text-gold/70">/</li>
              <li>
                <Link href={ROUTES.services} className="hover:text-gold">
                  {dict.services.title}
                </Link>
              </li>
              <li className="text-gold/70">/</li>
              <li className="text-gold">{title}</li>
            </ol>
          </nav>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center text-gold">
              <ServiceIcon name={service.icon} size={40} />
            </span>
            <div>
              <h1 className="max-w-3xl font-serif text-h2 font-semibold text-white">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
                {L(service.intro, lang)}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Features */}
      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
            {page.featuresTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {service.features.map((feature, i) => (
              <article
                key={`${service.slug}-f-${i}`}
                className="border border-navy/10 bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy font-serif text-sm font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {L(feature.title, lang)}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy/75">
                      {L(feature.description, lang)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Advantages */}
      <section className="bg-navy py-12 lg:py-16">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-white md:text-3xl">
            {page.advantagesTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.advantages.map((adv, i) => (
              <article
                key={`${service.slug}-a-${i}`}
                className="border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-serif text-lg font-semibold text-gold">
                  {L(adv.title, lang)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                  {L(adv.description, lang)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Who for */}
      <section className="bg-cream py-12 lg:py-16">
        <Container>
          <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
            {page.whoTitle}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-navy/80 md:text-lg">
            {L(service.whoFor, lang)
              .split(/\n+/)
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        </Container>
      </section>

      {/* 5. Closing CTA */}
      <section className="bg-navy py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl border border-gold/50 bg-navy px-6 py-10 text-center md:px-12 md:py-12">
            <p className="font-serif text-xl font-semibold leading-relaxed text-white md:text-2xl">
              {L(service.closing, lang)}
            </p>
            <Button
              href={contactWithService(service.slug)}
              className="mt-8"
            >
              {page.applyCta}
            </Button>
          </div>
        </Container>
      </section>

      {/* 6. Related */}
      <section className="bg-white py-12 lg:py-16">
        <Container>
          <h3 className="font-serif text-2xl font-semibold text-navy">
            {page.relatedTitle}
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={serviceHref(s.slug)}
                className="group overflow-hidden border border-navy/10 bg-cream transition hover:border-gold"
              >
                <div className="relative h-36">
                  <Image
                    src={s.image}
                    alt={L(s.title, lang)}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-lg font-semibold text-navy">
                    {L(s.title, lang)}
                  </h4>
                  <p className="mt-1 line-clamp-2 text-sm text-navy/70">
                    {L(s.intro, lang)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
