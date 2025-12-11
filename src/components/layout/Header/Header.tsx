import { useState } from "react";
// TODO: This icons are for dark/light mode to use later
// import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { IconMenu2, IconX } from "@tabler/icons-react";
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

export function Header() {
  //  TODO: Maybe toggle?
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick(id: string) {
    scrollToSection(id);
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full sticky top-0 z-40 bg-bg dark:bg-bg-dark">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 p-4 rounded-xl my-2">
        <h1 className="font-semibold text-text-brand dark:text-text-brand-dark text-xl cursor-pointer">
          Koneweczka
        </h1>

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
          className="md:hidden transition"
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

      {isOpen && (
        <nav className="md:hidden border-t border-underline/60 dark:border-underline-dark">
          <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-text-main dark:text-text-main-dark font-medium">
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
    </header>
  );
}
