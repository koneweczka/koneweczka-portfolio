import { IconSeedling } from "@tabler/icons-react";
import type { ReactNode } from "react";

export function SkillItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-snug">
      <IconSeedling size={16} className="shrink-0 mt-0.5" color="green" />
      <span>{children}</span>
    </li>
  );
}
