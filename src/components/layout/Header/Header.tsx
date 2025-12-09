// TODO: This icons are for dark/light mode to use later
// import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { scrollToSection } from "@/utils/scroll-to";

export function Header() {
  return (
    <header className="w-full bg-bg-light sticky top-0 z-40">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 text-text-turquoise p-4 rounded-xl my-2">
        <h1 className="font-semibold text-text-brand text-xl cursor-pointer">
          Koneweczka
        </h1>
        <ul className="hidden md:flex items-center gap-8 text-text-main font-medium">
          <MenuItem name="About Me" id="about" />
          <MenuItem name="Skills" id="skills" />
          <MenuItem name="Projects" id="projects" />
          <MenuItem name="After Hours" id="after-hours" />
        </ul>
      </nav>
    </header>
  );
}

function MenuItem({ name, id }: { name: string; id: string }) {
  return (
    <li
      className="cursor-pointer hover:text-text-brand transition"
      onClick={() => scrollToSection(id)}
    >
      {name}
    </li>
  );
}
