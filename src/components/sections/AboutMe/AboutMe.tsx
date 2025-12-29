import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionCard } from "../../ui/SectionCard";

export function AboutMe() {
  return (
    <SectionCard
      className="space-y-4 md:space-y-6"
      id="about"
      labelledBy="about-heading"
    >
      <SectionHeader id="about-heading">About Me</SectionHeader>
      <p className="text-text-main dark:text-text-main-dark leading-relaxed">
        I am a Front-end & Platform Engineer with experience in React/TypeScript
        and a strong background in service reliability and data-driven
        operational processes. I build user-facing features, internal tooling,
        CI/CD workflows and automate data pipelines (BigQuery, Looker, Airflow).
      </p>

      <p className="text-text-main dark:text-text-main-dark leading-relaxed">
        I also support the developer community as a co-organizer of MeetJS
        Poznań and internal tech events. Outside of work, I develop personal
        side projects — including game-related tools — to deepen my skills. I
        also contributed to e.g. the Material UI during an open-source
        hackathon.
      </p>
    </SectionCard>
  );
}
