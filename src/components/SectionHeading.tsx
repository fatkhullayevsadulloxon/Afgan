import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold md:text-xs">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-2 font-serif text-h2 font-semibold",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-[1.65] md:text-[17px]",
            dark ? "text-white/75" : "text-navy/70"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
