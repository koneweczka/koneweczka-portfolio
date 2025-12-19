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
    expect(heading).toBeInTheDocument();

    const section = heading.closest("section");

    expect(section).toHaveAttribute("id", "skills");
    expect(section).toHaveAttribute("aria-labelledby", "skills-heading");

    const groupHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(groupHeadings).toHaveLength(SKILL_GROUPS.length);

    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
    expect(screen.getByText(/vitest/i)).toBeInTheDocument();
    expect(screen.getByText(/sql/i)).toBeInTheDocument();
  });
});
