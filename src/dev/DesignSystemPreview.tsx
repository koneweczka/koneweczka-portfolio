import { Chip } from "@/components/ui/Chip";
import { Button } from "../components/ui/Button";
import { SectionCard } from "../components/ui/SectionCard";

// TODO: This need to be done in Storybook, moved it later;
export function DesignSystemPreview() {
  return (
    <div>
      <SectionCard className="text-center bg-bg">
        <h2 className="text-brand-turquoise">
          Buttons component with Light Mode background
        </h2>
        <Button
          className="mr-2 text-text-brand"
          variant="primary"
          onClick={() => console.log("Click me")}
        >
          Primary Button
        </Button>
        <Button
          className="mr-2"
          variant="secondary"
          onClick={() => console.log("Click me")}
        >
          Secondary Button
        </Button>
        <Chip>Test Chip</Chip>
        {colorsLight}
      </SectionCard>

      <SectionCard className="bg-bg-dark text-brand-turquoise text-center">
        <h2>Dark Mode Background</h2>
        {buttonsDark}
        <Chip>Test Chip</Chip>
        {colorsDark}
      </SectionCard>
    </div>
  );
}

const buttonsDark = (
  <div>
    <Button
      className="mr-2"
      variant="primary"
      onClick={() => console.log("Click me")}
    >
      Primary Button
    </Button>
  </div>
);

const colorsLight = (
  <div className="flex flex-col gap-6 md:flex-row md:items-center">
    <div className="flex-1 space-y-4 mt-2">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-turquoise">
        This is text-brand-turquoise for light mode. Probably just for button
        bg.
      </h2>
      <h2 className="text-3xl md:text-3xl font-bold text-brand-green">
        This is text-brand-green for light mode. For technologies chips.
      </h2>
    </div>
    <div className="flex-1 mt-6 md:mt-0">
      <p className="text-text-brand text-sm md:text-base tracking-wide ">
        This text is text-brand for light mode ✨ For main hero text and
        projects names in boxes, CV button.
      </p>
      <p className="text-text-main text-sm md:text-base tracking-wide ">
        This text is text-main for light mode ✨ For Nav bar and main text.
      </p>
      <p className="text-text-header text-sm md:text-base tracking-wide ">
        This text is text-header for light mode ✨ For Sections Headers like
        About Me.
      </p>
      <p className="text-contact-icon text-sm md:text-base tracking-wide ">
        This text is contact-icon for light mode ✨ For icons and open CV.
      </p>
    </div>
  </div>
);

const colorsDark = (
  <div className="flex flex-col gap-6 md:flex-row md:items-center">
    <div className="flex-1 space-y-4 mt-2">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-turquoise-dark">
        This is text-brand-turquoise-dark for dark mode. probably just for
        button bg.
      </h2>
    </div>
    <div className="flex-1 mt-6 md:mt-0">
      <p className="text-text-brand-dark text-sm md:text-base tracking-wide ">
        This text is text-brand-dark for dark mode ✨ For projects names inside
        boxes.
      </p>
      <p className="text-text-main-dark text-sm md:text-base tracking-wide ">
        This text is text-main-dark for dark mode✨ For Nav bar and main text.
      </p>
      <p className="text-text-projects-names-dark text-sm md:text-base tracking-wide ">
        This text is text-projects-names-dark for light mode ✨ For Nav bar and
        main text.
      </p>
      <p className="text-text-header-dark text-sm md:text-base tracking-wide ">
        This text is text-header for dark mode ✨ For Sections Headers like
        About Me.
      </p>
      <p className="text-contact-icon text-sm md:text-base tracking-wide ">
        This text is contact-icon for light mode ✨ For icons and open CV.
      </p>
    </div>
  </div>
);
