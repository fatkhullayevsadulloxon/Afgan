export type Partner = {
  id: string;
  name: string;
  /** Path under /public, e.g. /images/partners/uz/company.png */
  logo: string;
  href?: string;
};

/**
 * Shown when locale is UZ or RU (Uzbekistan partners).
 * Replace placeholder SVGs with real logos when available.
 */
export const partnersUz: Partner[] = [
  { id: "uz-silk-trade", name: "Silk Trade Group", logo: "/images/partners/uz/silk-trade.svg" },
  { id: "uz-tashkent-export", name: "Tashkent Export", logo: "/images/partners/uz/tashkent-export.svg" },
  { id: "uz-registan-logistics", name: "Registan Logistics", logo: "/images/partners/uz/registan-logistics.svg" },
  { id: "uz-oxiana-invest", name: "Oxiana Invest", logo: "/images/partners/uz/oxiana-invest.svg" },
  { id: "uz-navoi-textile", name: "Navoi Textile", logo: "/images/partners/uz/navoi-textile.svg" },
  { id: "uz-samarkand-agro", name: "Samarkand Agro", logo: "/images/partners/uz/samarkand-agro.svg" },
  { id: "uz-fergana-valley", name: "Fergana Valley Co", logo: "/images/partners/uz/fergana-valley.svg" },
  { id: "uz-bukhara-craft", name: "Bukhara Craft", logo: "/images/partners/uz/bukhara-craft.svg" },
  { id: "uz-andijan-motors", name: "Andijan Motors", logo: "/images/partners/uz/andijan-motors.svg" },
  { id: "uz-khiva-energy", name: "Khiva Energy", logo: "/images/partners/uz/khiva-energy.svg" },
  { id: "uz-chirchiq-chem", name: "Chirchiq Chem", logo: "/images/partners/uz/chirchiq-chem.svg" },
  { id: "uz-zeravshan-bank", name: "Zeravshan Bank", logo: "/images/partners/uz/zeravshan-bank.svg" },
];

/**
 * Shown when locale is Dari / prs (Afghanistan partners).
 * Replace placeholder SVGs with real logos when available.
 */
export const partnersAf: Partner[] = [
  { id: "af-kabul-commerce", name: "Kabul Commerce", logo: "/images/partners/af/kabul-commerce.svg" },
  { id: "af-herat-trading", name: "Herat Trading", logo: "/images/partners/af/herat-trading.svg" },
  { id: "af-balkh-exports", name: "Balkh Exports", logo: "/images/partners/af/balkh-exports.svg" },
  { id: "af-pamir-logistics", name: "Pamir Logistics", logo: "/images/partners/af/pamir-logistics.svg" },
  { id: "af-arian-invest", name: "Arian Invest", logo: "/images/partners/af/arian-invest.svg" },
  { id: "af-hindukush-trade", name: "Hindukush Trade", logo: "/images/partners/af/hindukush-trade.svg" },
  { id: "af-mazar-markets", name: "Mazar Markets", logo: "/images/partners/af/mazar-markets.svg" },
  { id: "af-kandahar-goods", name: "Kandahar Goods", logo: "/images/partners/af/kandahar-goods.svg" },
  { id: "af-nangarhar-agro", name: "Nangarhar Agro", logo: "/images/partners/af/nangarhar-agro.svg" },
  { id: "af-kabul-freight", name: "Kabul Freight", logo: "/images/partners/af/kabul-freight.svg" },
  { id: "af-arian-textile", name: "Arian Textile", logo: "/images/partners/af/arian-textile.svg" },
  { id: "af-bamiyan-craft", name: "Bamiyan Craft", logo: "/images/partners/af/bamiyan-craft.svg" },
];

export function partnersForLocale(locale: string): Partner[] {
  return locale === "prs" ? partnersAf : partnersUz;
}
