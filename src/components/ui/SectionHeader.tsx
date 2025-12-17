import type { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionHeader({
  children,
  className = "",
  id,
}: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className={[
        "text-2xl md:text-3xl font-bold text-text-header",
        "dark:text-text-header-dark underline decoration-underline",
        "dark:decoration-underline-dark decoration-3 underline-offset-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </h2>
  );
}
