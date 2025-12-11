import type { ReactNode } from "react";

interface SectionCardProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export function SectionCard({
  className = "",
  children,
  id,
}: SectionCardProps) {
  const classes = [
    "border border-underline dark:border-underline-dark rounded-xl shadow-md p-4 mx-2 my-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id}>
      {children}
    </section>
  );
}
