import { render, screen } from "@testing-library/react";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders as h2 with provided text", () => {
    render(<SectionHeader>About Me</SectionHeader>);

    expect(
      screen.getByRole("heading", { level: 2, name: /about me/i })
    ).toBeVisible();
  });

  it("merges custom className", () => {
    render(<SectionHeader className="new-class">Title</SectionHeader>);

    const heading = screen.getByRole("heading", { level: 2, name: /title/i });
    expect(heading).toHaveClass("new-class");
  });

  it("does not include 'undefined' in class attribute", () => {
    render(<SectionHeader>Title</SectionHeader>);

    const heading = screen.getByRole("heading", { level: 2, name: /title/i });
    expect(heading.getAttribute("class")).not.toMatch(/\bundefined\b/);
  });
});
