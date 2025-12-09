import { Button } from "../components/ui/Button";
import { SectionCard } from "../components/ui/SectionCard";

// TODO: This need to be done in Storybook, moved it later;
export function DesignSystemPreview() {
  return (
    <div>
      <SectionCard className="text-center bg-bg-light">
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
        <Button variant="ghost" onClick={() => console.log("Click me")}>
          Button Ghost
        </Button>
        {colorsLight}
      </SectionCard>

      <SectionCard className="bg-bg-dark border text-brand-turquoise text-center">
        <h2>Dark Mode Background</h2>
        {buttonsDark}
        {colorsDark}
      </SectionCard>
      <SectionCard className="bg-bg-dark-elevated border text-brand-turquoise text-center">
        <h2>Dark Mode Elevated Background</h2>
        {buttonsDark}
        {colorsDark}
      </SectionCard>
      <SectionCard className="bg-bg-dark-colorzilla text-brand-turquoise text-center">
        <h2>Dark Mode Colorzilla Background</h2>
        {buttonsDark}
        {colorsDark}
      </SectionCard>
    </div>
  );
}

const buttonsDark = (
  <div>
    <Button
      className="mr-2"
      variant="dark"
      onClick={() => console.log("Click me")}
    >
      Button Dark Mode
    </Button>
    <Button variant="ghost" onClick={() => console.log("Click me")}>
      Button Ghost
    </Button>
  </div>
);

const colorsLight = (
  <div className="flex flex-col gap-6 md:flex-row md:items-center">
    <div className="flex-1 space-y-4 mt-2">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-turquoise">
        This is text-brand-turquoise for light mode. Probably just for button
        bg.
      </h1>
      <h2 className="text-3xl md:text-3xl font-bold text-brand-violet">
        This is text-brand-violet for light mode. For boxes border and
        underline.
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
      <p className="text-text-section-header text-sm md:text-base tracking-wide ">
        This text is text-section-header for light mode ✨ For Sections Headers
        like About Me.
      </p>
      <p className="text-bg-icon text-sm md:text-base tracking-wide ">
        This text is bg-icon for light mode ✨ For icons and open CV.
      </p>
    </div>
  </div>
);

const colorsDark = (
  <div className="flex flex-col gap-6 md:flex-row md:items-center">
    <div className="flex-1 space-y-4 mt-2">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-turquoise-dark">
        This is text-brand-turquoise-dark for dark mode. probably just for
        button bg.
      </h1>
      <h2 className="text-3xl md:text-3xl font-bold text-brand-violet">
        This is text-brand-violet for light mode. I leave it here, maybe I use
        it on drk mode for headers About Me as well.
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
      <p className="text-text-section-header-dark text-sm md:text-base tracking-wide ">
        This text is text-section-header for dark mode ✨ For Sections Headers
        like About Me.
      </p>
      <p className="text-bg-icon text-sm md:text-base tracking-wide ">
        This text is bg-icon for light mode ✨ For icons and open CV.
      </p>
    </div>
  </div>
);
