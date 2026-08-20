export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzbusinesshouse.uz";

export const CONTACT_EMAIL = "info@uzbusinesshouse.uz";

export const CONTACT_PHONES = ["+93 70 000 00 00", "+998 71 000 00 00"] as const;

export const OFFICE_ADDRESS_EN =
  "Martan Kart-e-Se, Kabul, Afghanistan";

export const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Kart-e%20Se%2C%20Kabul%2C%20Afghanistan&t=&z=14&ie=UTF8&iwloc=&output=embed";

export type PackageId =
  | "basic"
  | "business"
  | "export"
  | "representative"
  | "other";

export const PACKAGE_QUERY_MAP: Record<string, PackageId> = {
  basic: "basic",
  bazaviy: "basic",
  business: "business",
  biznes: "business",
  export: "export",
  eksport: "export",
  representative: "representative",
  vakolatxona: "representative",
  other: "other",
};

export function parsePackageQuery(value: string | null | undefined): PackageId | null {
  if (!value) return null;
  return PACKAGE_QUERY_MAP[value.toLowerCase()] ?? null;
}
