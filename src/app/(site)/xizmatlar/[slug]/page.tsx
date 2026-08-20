import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "../ServicesClient";
import {
  SERVICE_SLUGS,
  isServiceSlug,
  type ServiceSlug,
} from "@/data/services";
import uz from "../../../../../locales/uz.json";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isServiceSlug(params.slug)) return {};
  const index = SERVICE_SLUGS.indexOf(params.slug as ServiceSlug);
  const item = uz.services.items[index];
  return {
    title: `${item.title} | ${uz.brand.name}`,
    description: item.detail,
  };
}

export default function ServicePage({ params }: Props) {
  if (!isServiceSlug(params.slug)) notFound();
  return <ServiceDetailClient slug={params.slug} />;
}
