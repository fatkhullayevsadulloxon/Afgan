"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SERVICE_ICONS } from "@/components/Services";
import { useLanguage } from "@/context/LanguageContext";
import {
  SERVICE_SLUGS,
  type ServiceSlug,
  getServiceIndex,
  serviceHref,
  serviceImagePath,
} from "@/data/services";
import { ROUTES } from "@/lib/routes";

export default function ServicesClient() {
  const { dict } = useLanguage();

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
            {dict.services.items.map((item, index) => {
              const slug = (item.slug ?? SERVICE_SLUGS[index]) as ServiceSlug;
              const Icon = SERVICE_ICONS[index];
              return (
                <Link
                  key={slug}
                  href={serviceHref(slug)}
                  className="group flex h-full flex-col overflow-hidden border border-navy/10 bg-cream transition hover:border-gold"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={serviceImagePath(slug)}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center bg-gold text-navy-dark">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-serif text-xl font-semibold text-navy">
                      {item.title}
                    </h2>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-navy/70">
                      {item.detail}
                    </p>
                    <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {dict.services.page.more} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <h2 className="mt-14 font-serif text-h2 font-semibold text-navy">
            {dict.services.extrasTitle}
          </h2>
          <div className="mt-6 overflow-hidden border border-navy/10">
            <div className="hidden bg-navy px-6 py-3 text-sm font-semibold text-white md:grid md:grid-cols-[1.2fr_180px_1.4fr]">
              <span>Хизмат</span>
              <span>Нарх</span>
              <span>Изоҳ</span>
            </div>
            {dict.services.extras.map((extra) => (
              <div
                key={extra.name}
                className="grid gap-1 border-b border-navy/10 bg-white px-6 py-4 last:border-b-0 md:grid-cols-[1.2fr_180px_1.4fr] md:items-baseline"
              >
                <p className="font-medium text-navy">{extra.name}</p>
                <p className="font-semibold text-gold">{extra.price}</p>
                <p className="text-sm text-navy/65">{extra.note}</p>
              </div>
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
  const { dict } = useLanguage();
  const index = getServiceIndex(slug);
  const item = dict.services.items[index];
  const page = dict.services.page;
  const Icon = SERVICE_ICONS[index];
  const related = dict.services.items
    .map((s, i) => ({ s, i }))
    .filter(({ i }) => i !== index)
    .slice(0, 3);

  return (
    <>
      <section className="relative min-h-[48vh] overflow-hidden bg-navy pt-28 md:min-h-[56vh] md:pt-32">
        <Image
          src={serviceImagePath(slug)}
          alt={item.title}
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <Container className="relative z-10 pb-12 md:pb-16">
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
              <li className="text-gold">{item.title}</li>
            </ol>
          </nav>
          <div className="mt-6 flex items-start gap-4">
            <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-gold text-navy-dark">
              <Icon size={24} strokeWidth={1.6} />
            </span>
            <div>
              <h1 className="max-w-3xl font-serif text-h2 font-semibold text-white">
                {item.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                {item.detail}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {page.highlightsTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {item.highlights.map((line) => (
                  <li key={line} className="flex gap-3 text-[15px] text-navy/80">
                    <Check className="mt-0.5 shrink-0 text-gold" size={18} strokeWidth={2} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">
                {page.benefitsTitle}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {item.benefits.map((b) => (
                  <article
                    key={b}
                    className="border border-navy/10 bg-cream p-4 text-[14px] leading-relaxed text-navy/80"
                  >
                    {b}
                  </article>
                ))}
              </div>

              <h2 className="mt-10 font-serif text-2xl font-semibold text-navy">
                {page.whoTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-navy/75">
                {item.whoFor}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={ROUTES.contact}>{page.cta}</Button>
                <Button href={ROUTES.services} variant="secondary">
                  {page.back}
                </Button>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden border border-navy/10">
                <Image
                  src={serviceImagePath(slug)}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                />
              </div>
              <div className="border border-gold/40 bg-navy p-6 text-white">
                <p className="font-serif text-xl font-semibold">
                  {dict.home.miniCtaTitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {dict.home.miniCtaText}
                </p>
                <Button href={ROUTES.contact} className="mt-5 w-full">
                  {page.cta}
                </Button>
              </div>
            </aside>
          </div>

          <h2 className="mt-16 font-serif text-2xl font-semibold text-navy">
            {page.relatedTitle}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map(({ s, i }) => {
              const sSlug = (s.slug ?? SERVICE_SLUGS[i]) as ServiceSlug;
              return (
                <Link
                  key={sSlug}
                  href={serviceHref(sSlug)}
                  className="group overflow-hidden border border-navy/10 bg-cream transition hover:border-gold"
                >
                  <div className="relative h-36">
                    <Image
                      src={serviceImagePath(sSlug)}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-navy/70">{s.text}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
