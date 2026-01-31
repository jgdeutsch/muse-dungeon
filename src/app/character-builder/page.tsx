import { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CharacterBuilder } from "@/components/CharacterBuilder";

export const metadata: Metadata = {
  title: "D&D 5e Character Builder — AI-Powered Character Generator",
  description:
    "Create a complete D&D 5e character in seconds. Just describe who you want to play, and our AI generates stats, equipment, spells, backstory, and more.",
};

export default function CharacterBuilderPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: "Character Builder" },
        ]}
      />

      <div className="pt-6 pb-8 text-center">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          AI Character Builder
        </h1>
        <p className="text-[var(--text-dim)] text-base leading-relaxed max-w-lg mx-auto">
          Describe your character concept, and we&apos;ll create a complete, playable D&D 5e
          character sheet with stats, equipment, spells, backstory, and personality.
        </p>
      </div>

      <CharacterBuilder />
    </>
  );
}
