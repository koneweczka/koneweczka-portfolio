import { SectionCard } from "../../ui/SectionCard";

export function AfterHours() {
  return (
    <SectionCard className="text-center" id="after-hours">
      <h2 className="text-2xl md:text-3xl font-bold text-text-section-header dark:text-text-section-header-dark underline decoration-brand-green-warmer dark:decoration-brand-violet">
        After Hours
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <HobbyItem
          title="Forest Gravel Rider"
          image="/images/gravel-cyclist.png"
        />
        <HobbyItem
          // title="Minions Painter"
          title="Arcane Miniature Painter"
          image="/images/painting-minions.png"
        />
        <HobbyItem
          title="Lake Serenity Navigator"
          image="/images/sailing.png"
        />
        <HobbyItem title="Rune-XP Huntress" image="/images/gaming.png" />

        {/* <HobbyItem
          title="Spanish Sunseer"
          image="/images/spanish-explorer.png"
        /> */}
        <HobbyItem
          title="Spanish Sunseer"
          image="/images/spanish-explorer2.png"
        />
      </div>
    </SectionCard>
  );
}

function HobbyItem({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center mb-4 pt-2 pb-4 px-2 md:pb-6">
      <div className="w-40 h-40 md:w-44 md:h-44 flex items-center justify-center">
        <img
          src={image}
          alt="Elvish Dev"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-text-brand dark:text-text-brand-dark">
        {title}
      </h3>
    </div>
  );
}
