import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconMail,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-4xl mx-auto mb-6 px-4 py-6 
                 flex flex-col md:flex-row 
                 items-center justify-between gap-4 "
    >
      <div className="flex items-center gap-2">
        <span className="font-semibold text-brand-turquoise">Koneweczka</span>
        <span className="text-text-muted text-brand-turquoise">with</span>
        <IconHeart
          size={21}
          className="text-brand-turquoise-dark fill-brand-turquoise/30"
          aria-label="love"
        />
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/koneweczka"
          target="_blank"
          rel="noreferrer"
          className="transition hover:scale-105"
          aria-label="GitHub"
        >
          <IconBrandGithub
            size={25}
            className="text-bg-icon hover:text-text-section-header"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/agnieszka-konefa%C5%82-9a731bb2/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:scale-105"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin
            size={25}
            className="text-bg-icon hover:text-text-section-header"
          />
        </a>

        <a
          href="mailto:akonewka@gmail.com"
          className="transition hover:scale-105"
          aria-label="Email"
        >
          <IconMail
            size={25}
            className="text-bg-icon hover:text-text-section-header"
          />
        </a>
      </div>
    </footer>
  );
}
