import type { ReactNode } from "react";

interface SkillBoxProps {
  title: string;
  children: ReactNode;
}

export function SkillBox({ title, children }: SkillBoxProps) {
  return (
    // TODO: bg-bg-box-project has nth for dark mode? Find some!
    <div className="rounded-2xl border-2 border-text-section-header dark:border-brand-violet bg-bg-box-project dark:bg-bg-box-project-dark shadow-md pt-2 pb-4 px-2 md:pb-6 md-px-3 mb-4">
      <h3 className="text-md text-center font-bold text-text-brand dark:text-text-brand-dark mb-3 border-b border-text-brand/60 dark:border-text-brand-dark/60 pb-2 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
