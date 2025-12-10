import { SectionCard } from "../../ui/SectionCard";
import { SkillBox } from "@/components/sections/SkillsSection/SkillBox";
import { SkillItem } from "@/components/sections/SkillsSection/SkillItem";

export function SkillsSection() {
  return (
    <SectionCard className="space-y-4 md:space-y-6 " id="skills">
      <h2 className="text-2xl md:text-3xl font-bold text-text-section-header dark:text-text-section-header-dark underline decoration-brand-green-warmer dark:decoration-brand-violet">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">
        <SkillBox title="Frontend Development">
          <ul className="space-y-1">
            <SkillItem>React</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>JavaScript (ES6+)</SkillItem>
            <SkillItem>HTML5 & CSS3</SkillItem>
            <SkillItem>Storybook</SkillItem>
          </ul>
        </SkillBox>

        <SkillBox title="Testing & Quality">
          <ul className="space-y-1">
            <SkillItem>React Testing Library</SkillItem>
            <SkillItem>Vitest</SkillItem>
            <SkillItem>Cypress</SkillItem>
          </ul>
        </SkillBox>

        <SkillBox title="Backend, Data & Analytics">
          <ul className="space-y-1">
            <SkillItem>Node.js</SkillItem>
            <SkillItem>Java, Kotlin (basic)</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>Data Analysis & Visualization (Looker)</SkillItem>
            <SkillItem>Airflow (DAGs), ETL / data pipelines</SkillItem>
          </ul>
        </SkillBox>
        <SkillBox title="DevOps / Platform">
          <ul className="space-y-1">
            <SkillItem>Git, Github, Bitbucket</SkillItem>
            <SkillItem>CI/CD (GitHub Actions, Bamboo)</SkillItem>
            <SkillItem>Docker, Podman, Insomnia</SkillItem>
            <SkillItem>
              Google Cloud Platform (BigQuery, GCS, Composer/Airflow)
            </SkillItem>
            <SkillItem>Monitoring & observability</SkillItem>
            <SkillItem>SLA / SLO tracking</SkillItem>
            <SkillItem>Capacity planning & performance forecasting</SkillItem>
          </ul>
        </SkillBox>
        <SkillBox title="Tools & Collaboration">
          <ul className="space-y-1">
            <SkillItem>Jira</SkillItem>
            <SkillItem>Figma (basic)</SkillItem>
            <SkillItem>Technical documentation & onboarding</SkillItem>
          </ul>
        </SkillBox>
      </div>
    </SectionCard>
  );
}
