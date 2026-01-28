import { monsterPages, lorePages, sourcebookPages } from "./monsters";

export type { MonsterPage, LorePage, SourcebookPage } from "./monsters";
export { monsterPages, lorePages, sourcebookPages };

export const monsterCategoryMeta: Record<string, { title: string; description: string }> = {
  creatures: {
    title: "Monsters & Creatures",
    description: "Stat blocks, tactics, and encounter tips for iconic D&D monsters.",
  },
  lore: {
    title: "Lore & NPCs",
    description: "Gods, famous NPCs, and world lore quick references.",
  },
  sourcebooks: {
    title: "Sourcebooks",
    description: "What's inside each sourcebook and who it's for.",
  },
};

export function getMonsterPageBySlug(slug: string) {
  const monster = monsterPages.find((m) => m.slug === slug);
  if (monster) return { type: "monster" as const, data: monster };

  const lore = lorePages.find((l) => l.slug === slug);
  if (lore) return { type: "lore" as const, data: lore };

  const sb = sourcebookPages.find((s) => s.slug === slug);
  if (sb) return { type: "sourcebook" as const, data: sb };

  return null;
}

export function getAllMonsterSlugs(): { slug: string; category: string }[] {
  const slugs: { slug: string; category: string }[] = [];
  for (const m of monsterPages) slugs.push({ slug: m.slug, category: "creatures" });
  for (const l of lorePages) slugs.push({ slug: l.slug, category: "lore" });
  for (const s of sourcebookPages) slugs.push({ slug: s.slug, category: "sourcebooks" });
  return slugs;
}
