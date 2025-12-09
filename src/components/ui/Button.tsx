import type { ButtonHTMLAttributes, ReactNode } from "react";

// TODO: Delete not used colors later, moved to inline
// TODO: Dark probably has to be moved after adding dark mode
type ButtonVariant = "primary" | "secondary" | "dark" | "ghost";
type ButtonSize = "md" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise disabled:opacity-50 disabled:cursor-not-allowed";

// TODO: Delete not used colors later
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-turquoise text-text-brand hover:opacity-85",
  secondary:
    "bg-bg-button-secondary border border-brand-turquoise text-text-main hover:bg-brand-turquoise/15",
  // TODO: Maybe primary/20 ? Check it later
  ghost: "text-brand-turquoise hover:bg-brand-turquoise/10",
  dark: "bg-brand-turquoise-dark text-bg-dark hover:opacity-80",
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
