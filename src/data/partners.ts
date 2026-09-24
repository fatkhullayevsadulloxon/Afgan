export type Partner = {
  id: string;
  name: string;
  /** Path under /public, e.g. /images/partners/real/company.png */
  logo: string;
  href?: string;
  country?: string;
};

/**
 * OXUS / Uzbekistan Business House partners (all locales).
 * Official logos used where publicly available; others use branded wordmarks.
 */
export const partners: Partner[] = [
  {
    id: "ndc",
    name: "National Development Corporation (NDC)",
    logo: "/images/partners/real/ndc.png",
    href: "https://www.ndc.gov.af/",
    country: "Afghanistan",
  },
  {
    id: "holley",
    name: "Holley",
    logo: "/images/partners/real/holley.png",
    href: "https://www.holley.cn/",
    country: "China",
  },
  {
    id: "ssd",
    name: "SSD",
    logo: "/images/partners/real/ssd.svg",
    href: "https://ssd.uz/",
    country: "Uzbekistan",
  },
  {
    id: "energiya",
    name: "Energiya",
    logo: "/images/partners/real/energiya.svg",
    country: "Uzbekistan",
  },
  {
    id: "kunduz-spinzar",
    name: "Kunduz Spinzar",
    logo: "/images/partners/real/kunduz-spinzar.svg",
    country: "Afghanistan",
  },
  {
    id: "afghan-lwar-fikar",
    name: "Afghan Lwar Fikar",
    logo: "/images/partners/real/afghan-lwar-fikar.svg",
    country: "Afghanistan",
  },
  {
    id: "huangtai",
    name: "Jinan Huangtai Coal Gasifier Co., Ltd.",
    logo: "/images/partners/real/huangtai.svg",
    href: "https://www.huangtaigroup.com/",
    country: "China",
  },
  {
    id: "handan-fengnong",
    name: "Handan Fengnong Agricultural Technology Co., Ltd.",
    logo: "/images/partners/real/handan-fengnong.svg",
    country: "China",
  },
  {
    id: "core-bridge",
    name: "Core Bridge",
    logo: "/images/partners/real/core-bridge.svg",
    country: "Hong Kong",
  },
];

/** @deprecated use `partners` — same list for every language */
export const partnersUz = partners;
/** @deprecated use `partners` — same list for every language */
export const partnersAf = partners;

export function partnersForLocale(_locale?: string): Partner[] {
  void _locale;
  return partners;
}
