import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { CV_FILE_NAME } from "@/constants/assets";
import { Hero } from "./Hero";
import { scrollToSection } from "@/utils/scroll-to-section";
import { publicUrl } from "@/utils/public-url";

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
      }),
    ).toBeVisible();

    const cvLink = screen.getByRole("link", { name: /view cv/i });

    expect(cvLink).toHaveAttribute("href", publicUrl(CV_FILE_NAME));
    expect(cvLink).toHaveAttribute("target", "_blank");
    expect(cvLink).toHaveAttribute("rel", "noreferrer");

    await userEvent.click(screen.getByRole("button", { name: /contact/i }));

    expect(scrollToSection).toHaveBeenCalledWith("contact");

    expect(screen.getByAltText(/elvish dev/i)).toBeVisible();
  });
});
