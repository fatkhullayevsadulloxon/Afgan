export const ROUTES = {
  home: "/",
  about: "/loyiha-haqida",
  services: "/xizmatlar",
  pricing: "/tariflar",
  contact: "/aloqa",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

export const NAV_ITEMS = [
  { href: ROUTES.about, key: "about" as const },
  { href: ROUTES.services, key: "services" as const },
  { href: ROUTES.pricing, key: "pricing" as const },
  { href: ROUTES.contact, key: "contact" as const },
] as const;

/** Homepage services preview indices (of 10) */
export const HOME_SERVICE_INDICES = [0, 1, 2, 4, 6, 9] as const;

export function contactWithPackage(packageId: string) {
  return `${ROUTES.contact}?paket=${encodeURIComponent(packageId)}`;
}

export function contactWithService(slug: string) {
  return `${ROUTES.contact}?xizmat=${encodeURIComponent(slug)}`;
}

export function servicePath(slug: string) {
  return `${ROUTES.services}/${slug}`;
}
