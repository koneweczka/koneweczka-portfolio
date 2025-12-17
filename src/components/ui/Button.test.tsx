import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children and calls onClick event", async () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click me</Button>);

    await userEvent.click(screen.getByRole("button", { name: /click me/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("default type is button", () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole("button", { name: /click me/i })).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("allows to overwrite type", () => {
    render(<Button type="submit">Submit me</Button>);

    expect(screen.getByRole("button", { name: /submit me/i })).toHaveAttribute(
      "type",
      "submit"
    );
  });

  it("doesn't call onClick when disabled", async () => {
    const onClick = vi.fn();

    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>
    );

    await userEvent.click(screen.getByRole("button", { name: /click me/i }));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies primary button classes", () => {
    render(<Button variant="primary">Primary</Button>);

    expect(screen.getByRole("button", { name: /primary/i })).toHaveClass(
      "bg-brand-turquoise"
    );
  });

  it("applies secondary button classes", () => {
    render(<Button variant="secondary">Secondary</Button>);

    expect(screen.getByRole("button", { name: /secondary/i })).toHaveClass(
      "bg-surface-button"
    );
  });

  it("applies icon button classes", () => {
    render(
      <Button variant="icon" aria-label="theme toggle">
        🌙
      </Button>
    );

    expect(screen.getByRole("button", { name: /theme toggle/i })).toHaveClass(
      "rounded-md"
    );
  });

  it("applies nav button classes", () => {
    render(<Button variant="nav">Nav</Button>);

    expect(screen.getByRole("button", { name: /nav/i })).toHaveClass(
      "bg-transparent"
    );
  });

  it("applies md size classes for non-nav buttons", () => {
    render(<Button size="md">Medium</Button>);

    expect(screen.getByRole("button", { name: /medium/i })).toHaveClass(
      "text-sm"
    );
  });

  it("applies sm size classes for non-nav buttons", () => {
    render(<Button size="sm">Small</Button>);

    expect(screen.getByRole("button", { name: /small/i })).toHaveClass(
      "text-xs"
    );
  });

  it("doesn't apply size classes for nav buttons", () => {
    render(
      <Button variant="nav" size="sm">
        Nav
      </Button>
    );

    const navButton = screen.getByRole("button", { name: /nav/i });

    expect(navButton).not.toHaveClass("text-sm");
    expect(navButton).not.toHaveClass("text-xs");
  });
});
