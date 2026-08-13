import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Noto_Serif, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { htmlLang, isLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import uz from "../../locales/uz.json";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: uz.meta.title,
  description: uz.meta.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    url: SITE_URL,
    siteName: uz.brand.name,
    title: uz.meta.ogTitle,
    description: uz.meta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: uz.meta.ogTitle,
    description: uz.meta.ogDescription,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      uz: SITE_URL,
      ru: SITE_URL,
      en: SITE_URL,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const raw = cookies().get("ubh-locale")?.value;
  const initialLocale = isLocale(raw) ? raw : "uz";

  return (
    <html
      lang={htmlLang[initialLocale]}
      className={`${playfair.variable} ${inter.variable} ${notoSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
