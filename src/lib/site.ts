export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://uzbusinesshouse.uz";

export const CONTACT_EMAIL = "info@uzbusinesshouse.uz";

export const CONTACT_PHONES = ["+93 70 000 00 00", "+998 71 000 00 00"] as const;

export const OFFICE_ADDRESS_EN =
  "Martan Kart-e-Se, Kabul, Afghanistan";

export const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Kart-e%20Se%2C%20Kabul%2C%20Afghanistan&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const PACKAGE_EVENT = "ubh:package";

export type PackageId =
  | "basic"
  | "business"
  | "export"
  | "representative"
  | "other";

export function selectPackageAndScroll(packageId: PackageId) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PACKAGE_EVENT, { detail: packageId }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
