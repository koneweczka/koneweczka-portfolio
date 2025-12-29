import { render, screen } from "@testing-library/react";
import { SectionCard } from "./SectionCard";

describe("SectionCard", () => {
  it("renders children", () => {
    render(
      <SectionCard>
        <p>Content</p>
      </SectionCard>
    );

    expect(screen.getByText("Content")).toBeVisible();
  });

  it("applies id when provided", () => {
    render(<SectionCard id="about">About Me</SectionCard>);

    const section = screen.getByText("About Me").closest("section");
    expect(section).not.toBeNull();
    expect(section).toHaveAttribute("id", "about");
  });

  it("merges custom className", () => {
    render(<SectionCard className="new-class">Content</SectionCard>);

    const section = screen.getByText("Content").closest("section");
    expect(section).not.toBeNull();
    expect(section).toHaveClass("new-class");
  });
});
