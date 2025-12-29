import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeart,
  IconMail,
} from "@tabler/icons-react";

const CONTACT_ICON_CLASS =
  "text-contact-icon hover:text-text-header dark:hover:text-text-header-dark";

const CONTACT_ICON_SIZE = 25;

export function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-4xl mx-auto mb-6 px-4 py-6 
                 flex flex-col md:flex-row 
                 items-center justify-between gap-4"
    >
      <div className="flex items-center gap-2">
        <span className="font-semibold text-brand-turquoise dark:text-brand-turquoise-dark">
          Koneweczka
        </span>
        <span className="text-text-muted text-brand-turquoise dark:text-brand-turquoise-dark">
          with
        </span>
        <IconHeart
          size={21}
          className="text-brand-turquoise-dark fill-brand-turquoise/30"
          role="img"
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
            size={CONTACT_ICON_SIZE}
            className={CONTACT_ICON_CLASS}
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
            size={CONTACT_ICON_SIZE}
            className={CONTACT_ICON_CLASS}
          />
        </a>

        <a
          href="mailto:akonewka@gmail.com"
          className="transition hover:scale-105"
          aria-label="Email"
        >
          <IconMail size={CONTACT_ICON_SIZE} className={CONTACT_ICON_CLASS} />
        </a>
      </div>
    </footer>
  );
}
