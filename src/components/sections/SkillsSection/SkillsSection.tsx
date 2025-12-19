import { SectionCard } from "../../ui/SectionCard";
import { SkillBox } from "@/components/sections/SkillsSection/SkillBox";
import { SkillItem } from "@/components/sections/SkillsSection/SkillItem";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILL_GROUPS } from "./skills.data";

export function SkillsSection() {
  return (
    <SectionCard
      className="space-y-4 md:space-y-6 "
      id="skills"
      labelledBy="skills-heading"
    >
      <SectionHeader id="skills-heading">Skills & Technologies</SectionHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
        {SKILL_GROUPS.map((group) => (
          <SkillBox key={group.title} title={group.title}>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <SkillItem key={item} label={item} />
              ))}
            </ul>
          </SkillBox>
        ))}
      </div>
    </SectionCard>
  );
}
