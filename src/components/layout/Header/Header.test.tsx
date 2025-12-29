import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

vi.mock("@/utils/scroll-to-section", () => ({
  scrollToSection: vi.fn(),
}));

import { scrollToSection } from "@/utils/scroll-to-section";

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders brand link", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /homepage/i })).toHaveAttribute(
      "href",
      "#top"
    );
  });

  it("clicking brand link scrolls to the top", async () => {
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});

    render(<Header />);

    await userEvent.click(screen.getByRole("link", { name: /homepage/i }));

    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: 0 })
    );
  });

  it("toggles theme from light to dark mode", async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    render(<Header />);

    const darkModeButton = screen.getByRole("button", {
      name: /enable dark mode/i,
    });

    expect(darkModeButton).toHaveAttribute("aria-pressed", "false");

    await userEvent.click(darkModeButton);

    const lightModeButton = screen.getByRole("button", {
      name: /enable light mode/i,
    });

    expect(lightModeButton).toHaveAttribute("aria-pressed", "true");

    expect(document.documentElement).toHaveClass("dark");
    expect(setItemSpy).toHaveBeenCalledWith("theme", "dark");
  });

  it("toggles mobile menu navigation visibility", async () => {
    render(<Header />);

    expect(
      screen.queryByRole("navigation", { name: /mobile/i })
    ).not.toBeInTheDocument();

    const mobileMenu = screen.getByRole("button", {
      name: /toggle navigation/i,
    });

    await userEvent.click(mobileMenu);

    expect(
      screen.getByRole("navigation", { name: /mobile/i })
    ).toBeInTheDocument();

    await userEvent.click(mobileMenu);

    expect(
      screen.queryByRole("navigation", { name: /mobile/i })
    ).not.toBeInTheDocument();
  });

  it("clicking mobile nav item scrolls to section and closes menu ", async () => {
    render(<Header />);

    const mobileMenu = screen.getByRole("button", {
      name: /toggle navigation/i,
    });

    await userEvent.click(mobileMenu);

    expect(
      screen.getByRole("navigation", { name: /mobile/i })
    ).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", {
        name: /about me/i,
      })
    );

    expect(scrollToSection).toHaveBeenCalledWith("about");

    expect(
      screen.queryByRole("navigation", { name: /mobile/i })
    ).not.toBeInTheDocument();
  });
});
