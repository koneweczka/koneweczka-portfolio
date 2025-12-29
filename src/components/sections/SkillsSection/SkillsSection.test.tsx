import { render, screen } from "@testing-library/react";
import { SkillsSection } from "./SkillsSection";
import { SKILL_GROUPS } from "./skills.data";

describe("SkillsSection", () => {
  it("renders section heading and skills groups", () => {
    render(<SkillsSection />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /skills & technologies/i,
    });
    expect(heading).toBeVisible();

    const section = heading.closest("section");

    expect(section).toHaveAttribute("id", "skills");
    expect(section).toHaveAttribute("aria-labelledby", "skills-heading");

    const groupHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(groupHeadings).toHaveLength(SKILL_GROUPS.length);

    const technologies = [/typescript/i, /vitest/i, /sql/i];

    technologies.forEach((label) => {
      expect(screen.getByText(label)).toBeVisible();
    });
  });
});
