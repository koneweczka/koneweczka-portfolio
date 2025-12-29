import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render portfolio sections on initial load", () => {
    render(<App />);

    const heroHeading = screen.getByRole("heading", {
      name: /i build legible, slightly magical interfaces/i,
    });

    expect(heroHeading).toBeVisible();
    expect(heroHeading).toHaveTextContent(/slightly magical interfaces/i);

    const sectionHeadings = [
      /about me/i,
      /skills & technologies/i,
      /after hours/i,
    ];

    sectionHeadings.forEach((name) => {
      expect(screen.getByRole("heading", { name })).toBeVisible();
    });
  });

  it("renders navigation and footer links", () => {
    render(<App />);

    const links = [/homepage/i, /github/i, /email/i];

    links.forEach((name) => {
      expect(screen.getByRole("link", { name })).toBeVisible();
    });
  });
});
