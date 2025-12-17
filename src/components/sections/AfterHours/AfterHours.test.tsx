import { render, screen } from "@testing-library/react";
import { AfterHours } from "./AfterHours";

describe("AfterHours", () => {
  it("renders section heading and hobby items", () => {
    render(<AfterHours />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /after hours/i,
    });
    expect(heading).toHaveAttribute("id", "after-hours-heading");

    const section = heading.closest("section");

    expect(section).toHaveAttribute("id", "after-hours");
    expect(section).toHaveAttribute("aria-labelledby", "after-hours-heading");
  });

  it("renders hobby items", () => {
    render(<AfterHours />);

    const items = screen.getAllByRole("heading", { level: 3 });
    expect(items).toHaveLength(5);

    expect(screen.getAllByRole("img")).toHaveLength(5);

    expect(
      screen.getByRole("heading", { level: 3, name: /forest gravel rider/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /arcane miniature painter/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /lake serenity navigator/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 3, name: /spanish sunseer/i })
    ).toBeInTheDocument();
  });
});
