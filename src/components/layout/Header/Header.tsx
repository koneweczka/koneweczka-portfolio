import { useEffect, useState } from "react";
import { IconMoonStars, IconSun, IconMenu2, IconX } from "@tabler/icons-react";
import { scrollToSection } from "@/utils/scroll-to-section";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  // TODO: Uncomment when added
  // { id: "projects", label: "Projects" },
  { id: "after-hours", label: "After Hours" },
  { id: "contact", label: "Contact" },
];

type Theme = "light" | "dark";

function applyTheme(next: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  if (next === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("theme", next);
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored === "dark" ? "dark" : "light";

    applyTheme(initial);
    return initial;
  });

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleNavClick(id: string) {
    scrollToSection(id);
    setIsOpen(false);
  }

  return (
    <header className="w-full sticky top-0 z-40 bg-bg dark:bg-bg-dark">
      <div className="max-w-5xl mx-auto px-4 py-3 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="font-semibold text-text-brand dark:text-text-brand-dark text-xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="sr-only">Homepage</span>
            <span aria-hidden="true">Koneweczka</span>
          </a>

          <div className="flex items-center gap-2">
            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="md:flex items-center gap-8 text-text-main dark:text-text-main-dark font-medium">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-text-brand dark:hover:text-text-brand-dark transition"
                      onClick={(event) => {
                        event.preventDefault();
                        handleNavClick(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              variant="icon"
              className="transition p-1"
              aria-label={
                theme === "light" ? "Enable dark mode" : "Enable light mode"
              }
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <IconMoonStars
                  size={22}
                  className="text-contact-icon dark:text-contact-icon-dark"
                />
              ) : (
                <IconSun
                  size={22}
                  className="text-contact-icon dark:text-contact-icon-dark"
                />
              )}
            </Button>
            <Button
              variant="icon"
              className="md:hidden transition p-1"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <IconX
                  className="text-text-header dark:text-text-header"
                  size={24}
                />
              ) : (
                <IconMenu2
                  className="text-text-header dark:text-text-header"
                  size={24}
                />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-underline/60 dark:border-underline-dark"
            aria-label="Mobile navigation"
          >
            <ul className="px-4 py-3 flex flex-col gap-2 text-text-main dark:text-text-main-dark font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Button variant="nav" onClick={() => handleNavClick(item.id)}>
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
