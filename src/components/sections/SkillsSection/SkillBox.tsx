import type { ReactNode } from "react";

interface SkillBoxProps {
  title: string;
  children: ReactNode;
}

export function SkillBox({ title, children }: SkillBoxProps) {
  return (
    <div className=" rounded-2xl border-2 border-text-section-header bg-bg-box-project shadow-md pt-2 pb-4 px-2 md:pb-6 md-px-3 mb-4">
      <h3 className="text-md font-bold text-text-brand mb-3 border-b border-text-brand/60 pb-2 uppercase">
        {title}
      </h3>
      {children}
    </div>
  );
}
