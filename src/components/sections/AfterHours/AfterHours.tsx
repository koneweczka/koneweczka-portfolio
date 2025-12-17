import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionCard } from "../../ui/SectionCard";

export function AfterHours() {
  return (
    <SectionCard
      className="text-center"
      id="after-hours"
      labelledBy="after-hours-heading"
    >
      <SectionHeader id="after-hours-heading">After Hours</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <HobbyItem
          title="Forest Gravel Rider"
          image="/images/gravel-cyclist.webp"
          className="scale-110"
        />
        <HobbyItem
          title="Arcane Miniature Painter"
          image="/images/painting-minions.webp"
        />
        <HobbyItem
          title="Lake Serenity Navigator"
          image="/images/sailing.webp"
        />
        <HobbyItem title="Rune-XP Huntress" image="/images/gaming.webp" />
        <HobbyItem
          title="Spanish Sunseer"
          image="/images/spanish-explorer.webp"
        />
      </div>
    </SectionCard>
  );
}

function HobbyItem({
  title,
  image,
  className = "",
}: {
  title: string;
  image: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center mb-4 pt-2 pb-4 px-2 md:pb-6">
      <div className="w-40 h-40 md:w-44 md:h-44 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className={["max-w-full max-h-full object-contain", className]
            .filter(Boolean)
            .join(" ")}
        />
      </div>
      <h3 className="mt-3 text-lg font-semibold text-text-brand dark:text-text-brand-dark">
        {title}
      </h3>
    </div>
  );
}
