export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzbusinesshouse.uz";

export const CONTACT_EMAIL = "info@uzbusinesshouse.uz";

/** Kabul office (Dari / prs) */
export const CONTACT_PHONES_AF = ["+93 78 752 1423"] as const;

/** Tashkent office (UZ / RU) */
export const CONTACT_PHONES_UZ = ["+998 91 011 11 33"] as const;

export const OFFICE_ADDRESS_AF_EN =
  "13 Street Wazir Akbar Khan Road, First Street Home Number 07, Kabul, Afghanistan";

export const OFFICE_ADDRESS_UZ_EN =
  "8A Afrosiab Street, Mirabad District, Tashkent, Uzbekistan — DMAAR Business Center";

export const MAP_EMBED_AF =
  "https://maps.google.com/maps?q=Wazir%20Akbar%20Khan%2C%20Kabul%2C%20Afghanistan&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const MAP_EMBED_UZ =
  "https://maps.google.com/maps?q=Afrosiab%208A%20Tashkent%20DMAAR&t=&z=16&ie=UTF8&iwloc=&output=embed";

/** Both offices — shown in every language. */
export function contactPhonesAll(): readonly string[] {
  return [...CONTACT_PHONES_UZ, ...CONTACT_PHONES_AF];
}

/** @deprecated use contactPhonesAll — both numbers in all locales */
export function contactPhonesForLocale(_locale?: string): readonly string[] {
  return contactPhonesAll();
}

export function mapEmbedForLocale(locale: string): string {
  return locale === "prs" ? MAP_EMBED_AF : MAP_EMBED_UZ;
}

export const MAP_EMBEDS = [
  { id: "uz", src: MAP_EMBED_UZ },
  { id: "af", src: MAP_EMBED_AF },
] as const;

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

export function parseServiceQuery(value: string | null | undefined): string | null {
  if (!value) return null;
  return value.trim() || null;
}
