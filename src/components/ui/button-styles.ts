export type ButtonVariant = "primary" | "secondary" | "icon" | "nav";
export type ButtonSize = "md" | "sm";

const baseClasses =
  "inline-flex items-center justify-center rounded-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise disabled:opacity-50 disabled:cursor-not-allowed";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "font-semibold bg-brand-turquoise dark:bg-brand-turquoise-dark text-text-brand dark:text-bg-dark hover:brightness-110 dark:hover:brightness-120 border border-underline dark:border-underline-dark",
  secondary:
    "font-semibold bg-surface-button dark:bg-surface-button-dark border border-brand-turquoise dark:border-brand-turquoise-dark text-text-main dark:text-text-main-dark hover:bg-brand-turquoise/30 dark:hover:bg-brand-turquoise-dark/30",
  icon: "p-1 rounded-md hover:bg-brand-turquoise/20 text-brand-turquoise",
  nav: "flex w-full justify-start items-center bg-transparent shadow-none p-0 text-left hover:text-text-brand dark:hover:text-text-brand-dark",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-sm",
  sm: "px-3 py-1.5 text-xs",
};

export function getButtonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return [
    baseClasses,
    variantClasses[variant],
    variant === "nav" ? "" : sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}
