import type { ReactNode } from "react";

interface SkillBoxProps {
  title: string;
  children: ReactNode;
}

export function SkillBox({ title, children }: SkillBoxProps) {
  return (
    <div
      role="group"
      aria-label={title}
      className="rounded-2xl border-2 border-brand-turquoise dark:border-brand-turquoise-dark bg-surface-column dark:bg-surface-column-dark shadow-md p-3 md:p-4"
    >
      <h3 className="text-md text-center font-bold text-text-brand dark:text-text-brand-dark mb-3 border-b border-text-brand/60 dark:border-text-brand-dark/60 pb-2 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
