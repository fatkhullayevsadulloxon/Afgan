import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  priority = false,
  variant = "mark",
}: {
  className?: string;
  priority?: boolean;
  /** mark = OXUS only; full = OXUS + TRADE & INVESTMENT HUB */
  variant?: "mark" | "full";
}) {
  const full = variant === "full";

  return (
    <Image
      src={full ? "/images/logo-lockup.png" : "/images/logo.png"}
      alt="OXUS Trade & Investment Hub"
      width={full ? 877 : 834}
      height={full ? 412 : 372}
      className={cn(
        "h-auto w-auto max-w-full object-contain object-left",
        full ? "h-[5.5rem] md:h-28 lg:h-32" : "h-12 md:h-14",
        className
      )}
      priority={priority}
    />
  );
}
