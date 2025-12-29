import { IconSeedling } from "@tabler/icons-react";

export function SkillItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-text-main dark:text-text-main-dark text-sm leading-snug">
      <div className="text-leaf-icon dark:text-leaf-icon-dark">
        <IconSeedling
          size={16}
          className="shrink-0 mt-0.5"
          stroke="currentColor"
          aria-hidden="true"
          focusable="false"
        />
      </div>
      <span>{label}</span>
    </li>
  );
}
