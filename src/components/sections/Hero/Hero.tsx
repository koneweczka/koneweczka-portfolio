import { Button } from "@/components/ui/Button";
import { SectionCard } from "../../ui/SectionCard";
import { scrollToSection } from "@/utils/scroll-to-section";
import { Chip } from "@/components/ui/Chip";

export function Hero() {
  return (
    // TODO: Here and in other sections on mobile I have a big margin top, fix it later
    <SectionCard
      className="flex flex-col gap-6 md:flex-row md:items-center"
      id="hero"
    >
      <div className="flex-1 space-y-4">
        <p className="text-text-main dark:text-text-main-dark text-sm uppercase tracking-wide">
          Frontend Engineer · React · TypeScript
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-brand dark:text-text-brand-dark">
          I build legible, slightly magical interfaces.
        </h1>
        <p className="text-text-main dark:text-text-main-dark text-sm md:text-base max-w-xl">
          Focused on clarity, stability, and a delightful user experience — with
          a touch of elven magic ✨
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/agnieszka-konefal-cv-eng.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button>View CV</Button>
          </a>
          {/* TODO: Check if I want some dark colors better here */}
          <Button
            variant="secondary"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Chip>React</Chip>
          <Chip>TypeScript</Chip>
          <Chip>JavaScript</Chip>
          <Chip>HTML5</Chip>
          <Chip>CSS3</Chip>
        </div>
      </div>

      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <div className="max-w-3xs rounded-2xl border-5 border-brand-green-warmer dark:border-underline-dark overflow-hidden shadow-md">
          <img
            src="/images/avatar1.png"
            alt="Elvish Dev"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </SectionCard>
  );
}
