"use client";

import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { RouteLine } from "@/components/RouteLine";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONES } from "@/lib/site";

const LINKS = [
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#pricing", key: "pricing" as const },
  { href: "#stages", key: "stages" as const },
  { href: "#contact", key: "contact" as const },
];

export function Footer() {
  const { dict } = useLanguage();
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
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/75 hover:text-gold">
                    {dict.nav[link.key]}
                  </a>
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
              {CONTACT_PHONES.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-gold">
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
