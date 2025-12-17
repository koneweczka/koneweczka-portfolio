import { render, screen } from "@testing-library/react";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders children", async () => {
    render(<Chip>React</Chip>);

    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies base classes", () => {
    render(<Chip>React</Chip>);

    const chip = screen.getByText("React");

    expect(chip).toHaveClass("inline-flex");
    expect(chip).toHaveClass("rounded-full");
    expect(chip).toHaveClass("bg-brand-green");
    expect(chip).toHaveClass("border-underline");
  });

  it("merges custom className", () => {
    render(<Chip className="new-class">React</Chip>);

    const chip = screen.getByText("React");
    expect(chip).toHaveClass("new-class");
  });
});
