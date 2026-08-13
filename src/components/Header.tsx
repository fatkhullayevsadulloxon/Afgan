"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "#about", key: "about" as const },
  { href: "#services", key: "services" as const },
  { href: "#pricing", key: "pricing" as const },
  { href: "#stages", key: "stages" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const { dict } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-250",
        solid || open ? "bg-navy-dark" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-20 lg:gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={close}>
          <Logo size={36} />
          <span className="truncate font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white md:text-xs">
            {dict.brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-off-white transition hover:text-gold"
            >
              {dict.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button href="#contact" className="hidden md:inline-flex">
            {dict.nav.cta}
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-gold lg:hidden"
            aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "border-t border-line bg-navy-dark lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="py-3 text-base text-white"
            >
              {dict.nav[item.key]}
            </a>
          ))}
          <Button href="#contact" onClick={close} className="mt-4 w-full">
            {dict.nav.cta}
          </Button>
        </Container>
      </div>
    </header>
  );
}
