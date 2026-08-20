"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";
import { NAV_ITEMS, ROUTES } from "@/lib/routes";

export function Header() {
  const { dict } = useLanguage();
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);
  const isHome = pathname === ROUTES.home;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-shadow duration-250",
        solid || open || !isHome ? "border-navy/10 shadow-sm" : "border-transparent"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-3 lg:h-20 lg:gap-4">
        {!isHome ? (
          <Link href={ROUTES.home} className="flex shrink-0 items-center" onClick={close}>
            <Logo priority />
          </Link>
        ) : null}

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b-2 pb-0.5 text-[13px] font-medium transition",
                  active
                    ? "border-gold text-gold"
                    : "border-transparent text-navy/75 hover:text-gold"
                )}
              >
                {dict.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button href={ROUTES.contact} className="hidden md:inline-flex">
            {dict.nav.cta}
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-navy lg:hidden"
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
          "border-t border-navy/10 bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={cn(
                  "py-3 text-base",
                  active ? "text-gold" : "text-navy"
                )}
              >
                {dict.nav[item.key]}
              </Link>
            );
          })}
          <Button href={ROUTES.contact} onClick={close} className="mt-4 w-full">
            {dict.nav.cta}
          </Button>
        </Container>
      </div>
    </header>
  );
}
