import { IconSeedling } from "@tabler/icons-react";
import type { ReactNode } from "react";

export function SkillItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-text-main dark:text-text-main-dark text-sm leading-snug">
      <div className="text-brand-icon-light dark:text-brand-icon-dark">
        <IconSeedling
          size={16}
          className="shrink-0 mt-0.5"
          stroke="currentColor"
        />
      </div>
      <span>{children}</span>
    </li>
  );
}
