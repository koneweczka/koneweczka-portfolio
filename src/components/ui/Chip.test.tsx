import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders children", async () => {
    render(<Chip>React</Chip>);

    expect(screen.getByText("React")).toBeVisible();
  });

  it("applies base classes", () => {
    render(<Chip>React</Chip>);

    const chip = screen.getByText("React");

    expect(chip).toHaveClass(
      "inline-flex",
      "rounded-full",
      "bg-brand-green",
      "border-underline"
    );
  });

  it("merges custom className", () => {
    render(<Chip className="new-class">React</Chip>);

    const chip = screen.getByText("React");
    expect(chip).toHaveClass("new-class");
  });
});
