import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("render portfolio sections on initial load", () => {
    render(<App />);

    const heroHeading = screen.getByRole("heading", { level: 1 });

    expect(heroHeading).toBeInTheDocument();
    expect(heroHeading).toHaveTextContent(/slightly magical interfaces/i);

    expect(
      screen.getByRole("heading", { name: /about me/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /skills & technologies/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /after hours/i })
    ).toBeInTheDocument();
  });

  it("render header and footer", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /homepage/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email/i })).toBeInTheDocument();
  });
});
