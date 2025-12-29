import { render, screen } from "@testing-library/react";
import { AfterHours } from "./AfterHours";

describe("AfterHours", () => {
  it("renders section heading and accessible attributes", () => {
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
    const images = screen.getAllByRole("img");

    expect(items).not.toHaveLength(0);
    expect(images).toHaveLength(items.length);

    const hobbyHeadings = [
      /forest gravel rider/i,
      /arcane miniature painter/i,
      /lake serenity navigator/i,
      /rune-xp huntress/i,
      /spanish sunseer/i,
    ];

    hobbyHeadings.forEach((name) => {
      expect(screen.getByRole("heading", { level: 3, name })).toBeVisible();
    });
  });
});
