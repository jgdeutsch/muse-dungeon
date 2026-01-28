// Barrel file — imports all spell data and provides unified access

import { cantrips } from "./spells-cantrips";
import { offensiveSpells } from "./spells-offensive";
import { utilityControlSpells } from "./spells-utility-control";
import { supportHealingSpells } from "./spells-support-healing";
import { reactionDefenseSpells } from "./spells-reaction-defense";
import { classSpellLists } from "./spells-class-lists";
import { spellOverview } from "./spells-general";

export type Spell = {
  slug: string;
  name: string;
  level: string;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  classes: string[];
  description: string;
  damage: string | null;
  savingThrow: string | null;
  higherLevels: string | null;
  commonMistakes: string[];
  dmTips: string[];
  category: string;
  searchVolume: number;
  aliases?: string[];
};

export type { SpellListPage } from "./spells-class-lists";
export type { SpellOverviewPage } from "./spells-general";

// All individual spells (not class lists or overview)
export const allSpells: Spell[] = [
  ...cantrips,
  ...offensiveSpells,
  ...utilityControlSpells,
  ...supportHealingSpells,
  ...reactionDefenseSpells,
];

// Grouped by category
export const spellsByCategory: Record<string, Spell[]> = {
  cantrips,
  offensive: offensiveSpells,
  "utility-control": utilityControlSpells,
  "support-healing": supportHealingSpells,
  "reaction-defense": reactionDefenseSpells,
};

export const categoryMeta: Record<string, { title: string; description: string }> = {
  cantrips: {
    title: "Cantrips",
    description: "At-will spells that don't use spell slots. The bread and butter of any caster's toolkit.",
  },
  offensive: {
    title: "Offensive Spells",
    description: "Damage-dealing spells from cantrips to 9th level. Quick reference for damage dice, saving throws, and area of effect.",
  },
  "utility-control": {
    title: "Utility & Control Spells",
    description: "Spells that manipulate the battlefield, control enemies, and provide utility outside of direct damage.",
  },
  "support-healing": {
    title: "Support & Healing Spells",
    description: "Healing, buffing, and protective spells that keep the party alive and fighting.",
  },
  "reaction-defense": {
    title: "Reaction & Defense Spells",
    description: "Spells cast as reactions or focused on defense. Critical for surviving tough encounters.",
  },
};

// Find a spell by slug, including aliases
export function getSpellBySlug(slug: string): Spell | undefined {
  return allSpells.find(
    (s) => s.slug === slug || (s.aliases && s.aliases.includes(slug))
  );
}

// Get all slugs including aliases (for static path generation)
export function getAllSpellSlugs(): { slug: string; category: string }[] {
  const slugs: { slug: string; category: string }[] = [];
  for (const spell of allSpells) {
    slugs.push({ slug: spell.slug, category: spell.category });
    if (spell.aliases) {
      for (const alias of spell.aliases) {
        slugs.push({ slug: alias, category: spell.category });
      }
    }
  }
  return slugs;
}

export { classSpellLists, spellOverview };
