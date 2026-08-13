import { cn } from "@/lib/cn";

export function Logo({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="absolute inset-[18%] rotate-45 bg-gold" />
      <span
        className="relative font-serif text-[1.05em] font-bold leading-none text-navy-dark"
        style={{ fontSize: size * 0.42 }}
      >
        Б
      </span>
    </span>
  );
}
