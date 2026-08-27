import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "../ServicesClient";
import {
  SERVICE_SLUGS,
  getServiceBySlug,
  isServiceSlug,
} from "@/data/services";
import uz from "../../../../../locales/uz.json";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title.uz} — ${uz.brand.name}`,
    description: service.intro.uz,
  };
}

export default function ServicePage({ params }: Props) {
  if (!isServiceSlug(params.slug)) notFound();
  return <ServiceDetailClient slug={params.slug} />;
}
