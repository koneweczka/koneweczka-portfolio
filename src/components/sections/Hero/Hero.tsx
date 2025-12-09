import { Button } from "@/components/ui/Button";
import { SectionCard } from "../../ui/SectionCard";

export function Hero() {
  return (
    <SectionCard className="flex flex-col gap-6 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <p className="text-text-main text-sm uppercase tracking-wide">
          Frontend Engineer · React · TypeScript
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-brand">
          I build legible, slightly magical interfaces.
        </h1>
        <p className="text-text-main text-sm md:text-base max-w-xl">
          Focused on clarity, stability, and a delightful user experience — with
          a touch of elven magic ✨
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>View CV</Button>
          <Button variant="secondary">Contact</Button>
        </div>
      </div>

      <div className="flex-1 mt-6 md:mt-0 flex justify-center">
        <div className="max-w-3xs rounded-2xl border-5 border-brand-green-warmer overflow-hidden shadow-md">
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
