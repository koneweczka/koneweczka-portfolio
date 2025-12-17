import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Hero } from "./Hero";
import { scrollToSection } from "@/utils/scroll-to-section";

vi.mock("@/utils/scroll-to-section", () => ({
  scrollToSection: vi.fn(),
}));

describe("Hero", () => {
  it("renders hero content and CTA actions", async () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /slightly magical interfaces/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /view cv/i })).toHaveAttribute(
      "href",
      "/agnieszka-konefal-cv-eng.pdf"
    );

    await userEvent.click(screen.getByRole("button", { name: /contact/i }));

    expect(scrollToSection).toHaveBeenCalledWith("contact");

    expect(screen.getByAltText(/elvish dev/i)).toBeInTheDocument();
  });
});
