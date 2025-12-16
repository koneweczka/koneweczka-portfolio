import { useState } from "react";
import { AboutMe } from "./components/sections/AboutMe/AboutMe";
import { AfterHours } from "./components/sections/AfterHours/AfterHours";
import { Button } from "./components/ui/Button";
import { DesignSystemPreview } from "./dev/DesignSystemPreview";
import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
// import { Projects } from "./components/sections/Projects/Projects";
import { SkillsSection } from "./components/sections/SkillsSection/SkillsSection";
import { CornerDecorations } from "./components/CornerDecorations";

function App() {
  const [showPlayground, setShowPlayground] = useState(false);

  return (
    <>
      <div className="bg-bg dark:bg-bg-dark min-h-screen relative">
        <CornerDecorations />
        <div className="relative max-w-5xl mx-auto px-4">
          {/* TODO: This can be removed when creating Storybook */}
          {import.meta.env.DEV && (
            <Button
              onClick={() => setShowPlayground((prev) => !prev)}
              className="fixed bottom-4 right-4 z-50 rounded-full px-3 py-2 text-xs font-semibold
                     bg-brand-turquoise dark:bg-brand-turquoise-dark text-bg-dark shadow-lg"
            >
              {showPlayground ? "Hide DS" : "Show DS"}
            </Button>
          )}
          {showPlayground && <DesignSystemPreview />}
          <Header />
          <Hero />
          <AboutMe />
          <SkillsSection />
          {/* TODO: Uncomment when added */}
          {/* <Projects /> */}
          <AfterHours />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
