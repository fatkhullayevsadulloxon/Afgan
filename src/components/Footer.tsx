"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { RouteLine } from "@/components/RouteLine";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL, contactPhonesForLocale } from "@/lib/site";
import { NAV_ITEMS, ROUTES } from "@/lib/routes";

export function Footer() {
  const { dict, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/30 bg-navy py-10 lg:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="inline-block bg-white px-3 py-2">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
              {dict.footer.description}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              {dict.footer.links}
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={ROUTES.home} className="text-sm text-white/75 hover:text-gold">
                  {dict.common.home}
                </Link>
              </li>
              {NAV_ITEMS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 hover:text-gold">
                    {dict.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              {dict.footer.office}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {dict.contact.address}
            </p>
            <p className="mt-3 space-y-1 text-sm text-white/75">
              {contactPhonesForLocale(locale).map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block hover:text-gold"
                >
                  {phone}
                </a>
              ))}
              <a href={`mailto:${CONTACT_EMAIL}`} className="block hover:text-gold">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
        <RouteLine variant="footer" dark className="mt-8 max-w-md" />
        <p className="mt-6 text-xs text-white/45">
          © {year} OXUS. {dict.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
