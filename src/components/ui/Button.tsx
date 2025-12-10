import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "icon";
type ButtonSize = "md" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  // TODO: Check if I want other color for dark text - yes, I Want, right now only primary is changing bg color in dark mode
  primary:
    "bg-brand-turquoise dark:bg-brand-turquoise-dark text-text-brand dark:text-bg-dark hover:opacity-85 hover:dark:opacity-80",
  secondary:
    "bg-bg-button-secondary border border-brand-turquoise text-text-main hover:bg-brand-turquoise/15",
  icon: "p-1 rounded-md hover:bg-brand-turquoise/20 text-brand-turquoise",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-xs",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
