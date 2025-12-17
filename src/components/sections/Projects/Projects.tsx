import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionCard } from "../../ui/SectionCard";

export function Projects() {
  return (
    <SectionCard
      className="text-center"
      id="projects"
      labelledBy="projects-heading"
    >
      <SectionHeader id="projects-heading">Projects</SectionHeader>
    </SectionCard>
  );
}
