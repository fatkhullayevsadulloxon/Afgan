import { cn } from "@/lib/cn";
import { ROUTES } from "@/lib/routes";

export function Breadcrumb({
  current,
  homeLabel = "Бош саҳифа",
}: {
  current: string;
  homeLabel?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] tracking-wide text-white/65">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a href={ROUTES.home} className="transition hover:text-gold">
            {homeLabel}
          </a>
        </li>
        <li aria-hidden className="text-gold/70">
          /
        </li>
        <li className="text-gold">{current}</li>
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  breadcrumb,
  homeLabel,
  className,
}: {
  title: string;
  breadcrumb: string;
  homeLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("bg-navy pt-28 pb-12 md:pt-32 md:pb-14", className)}>
      <div className="mx-auto w-full max-w-content px-5 md:px-8">
        <Breadcrumb current={breadcrumb} homeLabel={homeLabel} />
        <h1 className="mt-4 font-serif text-h2 font-semibold text-white">{title}</h1>
      </div>
    </section>
  );
}
