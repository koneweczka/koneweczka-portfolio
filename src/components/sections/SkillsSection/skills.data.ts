export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend Development",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind",
      "MUI",
      "Mantine",
      "Storybook",
      "State management (Redux, React Query)",
    ],
  },
  {
    title: "Testing & Quality",
    items: ["React Testing Library", "Vitest", "Cypress"],
  },
  {
    title: "Backend, Data & Analytics",
    items: [
      "Node.js",
      "Java, Kotlin (basic)",
      "SQL",
      "Data Analysis & Visualization (Looker Studio)",
      "Airflow (DAGs), ETL / data pipelines",
    ],
  },
  {
    title: "DevOps / Platform",
    items: [
      "Git, Github, Bitbucket",
      "CI/CD (GitHub Actions, Bamboo)",
      "Docker, Podman, Insomnia",
      "Google Cloud Platform (BigQuery, GCS, Composer/Airflow)",
      "REST API integration",
      "Monitoring & observability",
      "SLA / SLO tracking",
      "Capacity planning & performance forecasting",
    ],
  },
  {
    title: "Tools & Collaboration",
    items: ["Jira", "Figma (basic)", "Technical documentation & onboarding"],
  },
];
