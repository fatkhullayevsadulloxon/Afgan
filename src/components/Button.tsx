import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase transition duration-250",
    "rounded-[2px] disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary" &&
      "bg-gold text-navy-dark hover:-translate-y-px hover:bg-gold-light",
    variant === "secondary" &&
      "border border-gold bg-transparent text-gold hover:-translate-y-px hover:bg-gold/10",
    className
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
