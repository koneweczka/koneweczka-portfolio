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

export function Header() {
  //  TODO: Maybe toggle?
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored === "dark" ? "dark" : "light";

    applyTheme(initial);
    setTheme(initial);
  }, []);

  function applyTheme(next: Theme) {
    const root = document.documentElement;

    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", next);
  }

  function toggleTheme() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  }

  function handleNavClick(id: string) {
    scrollToSection(id);
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full sticky top-0 z-40 bg-bg dark:bg-bg-dark">
      <div className="max-w-5xl mx-auto px-4 py-3 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-text-brand dark:text-text-brand-dark text-xl cursor-pointer">
            Koneweczka
          </h1>

          <div className="flex items-center md:gap-2">
            <ul className="hidden md:flex items-center gap-8 text-text-main dark:text-text-main-dark font-medium">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-text-brand dark:hover:text-text-brand-dark transition"
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <Button
              variant="icon"
              className="transition p-1"
              aria-label={
                theme === "light" ? "Enable dark mode" : "Enable light mode"
              }
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
              onClick={() => setIsOpen(!isOpen)}
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
          <nav className="md:hidden border-t border-underline/60 dark:border-underline-dark">
            <ul className="px-4 py-3 flex flex-col gap-3 text-text-main dark:text-text-main-dark font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="w-full text-left hover:text-text-brand dark:hover:text-text-brand-dark transition"
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
