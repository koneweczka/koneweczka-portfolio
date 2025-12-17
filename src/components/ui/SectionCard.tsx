import type { ReactNode } from "react";

interface SectionCardProps {
  className?: string;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
}

export function SectionCard({
  className = "",
  children,
  id,
  labelledBy,
}: SectionCardProps) {
  const classes = [
    "border border-underline dark:border-underline-dark rounded-xl shadow-md p-4 mx-2 my-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
