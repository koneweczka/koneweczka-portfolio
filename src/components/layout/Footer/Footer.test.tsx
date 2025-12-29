import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders brand signature", () => {
    render(<Footer />);

    expect(screen.getByText(/koneweczka/i)).toBeVisible();
    expect(screen.getByLabelText(/love/i)).toBeVisible();
  });

  it("github link has correct url and attributes", () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", { name: /github/i });

    expect(githubLink).toHaveAttribute("href", "https://github.com/koneweczka");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noreferrer");
  });

  it("linkedin link has correct url and attributes", () => {
    render(<Footer />);

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/agnieszka-konefa%C5%82-9a731bb2/"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noreferrer");
  });

  it("email link has correct url and attributes", () => {
    render(<Footer />);

    const emailLink = screen.getByRole("link", { name: /email/i });

    expect(emailLink).toHaveAttribute("href", "mailto:akonewka@gmail.com");
  });
});
