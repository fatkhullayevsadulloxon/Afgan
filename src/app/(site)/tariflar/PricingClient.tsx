"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Pricing } from "@/components/Pricing";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";
import { ROUTES } from "@/lib/routes";

export default function PricingClient() {
  const { dict } = useLanguage();

  return (
    <>
      <PageHeader
        title={dict.pricing.title}
        breadcrumb={dict.pricing.title}
        homeLabel={dict.common.home}
      />
      <section className="bg-white pt-8">
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-navy/75 md:text-lg">
            {dict.pricing.intro}
          </p>
        </Container>
      </section>
      <Pricing mode="full" hideHeading />
      <div className="bg-white pb-12">
        <Container>
          <Button href={ROUTES.contact}>{dict.nav.cta} →</Button>
        </Container>
      </div>
    </>
  );
}
