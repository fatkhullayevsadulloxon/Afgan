"use client";

import { Suspense } from "react";
import { ContactForm } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/context/LanguageContext";

function ContactBody() {
  return <ContactForm showHeading={false} />;
}

export default function ContactClient() {
  const { dict } = useLanguage();

  return (
    <>
      <PageHeader
        title={dict.contact.title}
        breadcrumb={dict.contact.title}
        homeLabel={dict.common.home}
      />
      <Suspense fallback={<div className="bg-cream py-20" />}>
        <ContactBody />
      </Suspense>
    </>
  );
}
