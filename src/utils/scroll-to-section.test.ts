import { scrollToSection } from "./scroll-to-section";

describe("scrollToSection", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("scrolls to section when it exists", () => {
    const section = document.createElement("section");
    section.id = "about";
    section.scrollIntoView = vi.fn();
    document.body.appendChild(section);

    scrollToSection("about");

    expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("does nothing when section does not exist", () => {
    expect(() => scrollToSection("unknown")).not.toThrow();
  });
});
