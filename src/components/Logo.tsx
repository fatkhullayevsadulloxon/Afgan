import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="OXUS Trade & Investment Hub"
      width={834}
      height={372}
      className={cn("h-12 w-auto md:h-14", className)}
      priority={priority}
    />
  );
}
