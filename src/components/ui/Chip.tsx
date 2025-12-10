import type { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 
        rounded-full text-sm font-medium
        bg-bg-chip text-text-main 
        dark:bg-bg-chip-dark dark:text-brand-turquoise
        shadow-sm border border-brand-green-warmer/30
        ${className}
      `}
    >
      {children}
    </span>
  );
}
