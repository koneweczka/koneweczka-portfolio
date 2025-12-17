import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        "bg-brand-green dark:bg-brand-green-dark",
        "text-text-brand dark:text-text-brand-dark",
        "shadow-sm border border-underline dark:border-underline-dark",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
