import type { ReactNode } from "react";

interface SectionCardProps {
  className?: string;
  children: ReactNode;
  // TODO: Title maybe optional?
  title?: string;
}

export function SectionCard({
  className = "",
  children,
  title,
}: SectionCardProps) {
  const classes = [
    "border border-brand-green rounded-xl shadow-md p-4 mx-2 my-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
