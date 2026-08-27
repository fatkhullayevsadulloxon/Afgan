"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { partnersForLocale, type Partner } from "@/data/partners";

function PartnerSlide({ partner }: { partner: Partner }) {
  const card = (
    <span className="flex h-32 w-[220px] shrink-0 items-center justify-center border border-navy/10 bg-white px-5 py-4 md:h-36 md:w-[260px]">
      <Image
        src={partner.logo}
        alt={partner.name}
        width={280}
        height={112}
        unoptimized
        className="max-h-20 w-auto max-w-full object-contain opacity-90 transition duration-250 group-hover:opacity-100 md:max-h-24"
      />
    </span>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group shrink-0"
        aria-label={partner.name}
      >
        {card}
      </a>
    );
  }

  return <div className="group shrink-0">{card}</div>;
}

export function Partners() {
  const { dict, locale } = useLanguage();
  const partners = partnersForLocale(locale);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || partners.length === 0) return;

    offsetRef.current = 0;
    track.style.transform = "translate3d(0,0,0)";

    let raf = 0;
    const speed = 0.6; // px per frame (~36px/s at 60fps)

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current -= speed;
        const loopWidth = track.scrollWidth / 2;
        if (loopWidth > 0 && Math.abs(offsetRef.current) >= loopWidth) {
          offsetRef.current += loopWidth;
        }
        track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [partners, locale, ready]);

  if (partners.length === 0) return null;

  const track = [...partners, ...partners];

  return (
    <section className="overflow-hidden bg-cream py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.partners.eyebrow}
          title={dict.partners.title}
          intro={dict.partners.intro}
        />
      </Container>

      <div
        className="relative mt-10"
        dir="ltr"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onTouchStart={() => {
          pausedRef.current = true;
        }}
        onTouchEnd={() => {
          pausedRef.current = false;
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent md:w-20" />

        <div
          ref={trackRef}
          className="partners-marquee-track flex w-max gap-5 will-change-transform md:gap-6"
        >
          {track.map((partner, index) => (
            <PartnerSlide key={`${partner.id}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
