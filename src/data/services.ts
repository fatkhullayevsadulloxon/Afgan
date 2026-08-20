import { ROUTES } from "@/lib/routes";

export const SERVICE_SLUGS = [
  "yuridik",
  "buxgalteriya",
  "marketing",
  "ofis-qabul",
  "tarjima",
  "transport",
  "viza",
  "b2b",
  "korgazma",
  "eksport-import",
  "ofis-toshkent",
  "anbor-logistika",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function serviceImagePath(slug: ServiceSlug) {
  return `/images/services/${slug}.jpg`;
}

export function serviceHref(slug: ServiceSlug) {
  return `${ROUTES.services}/${slug}`;
}

export function getServiceIndex(slug: ServiceSlug) {
  return SERVICE_SLUGS.indexOf(slug);
}
