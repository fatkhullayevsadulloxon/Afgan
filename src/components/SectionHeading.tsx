import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold md:text-xs">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-2 font-serif text-h2 font-semibold",
          invert ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-[1.65] md:text-[17px]",
            invert ? "text-ink/75" : "text-white/75"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
