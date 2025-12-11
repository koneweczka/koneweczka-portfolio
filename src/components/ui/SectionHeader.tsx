import type { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeader({ children, className }: SectionHeaderProps) {
  return (
    <h2
      className={`text-2xl md:text-3xl font-bold text-text-header dark:text-text-header-dark underline decoration-underline dark:decoration-underline-dark decoration-3 underline-offset-4 ${className}`}
    >
      {children}
    </h2>
  );
}
