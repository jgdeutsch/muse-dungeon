import {
  equipmentPages,
  equipmentOverviews,
  magicItemPages,
  magicItemOverview,
} from "./items";

export type { EquipmentPage, EquipmentOverviewPage, MagicItemPage, MagicItemOverviewPage } from "./items";
export { equipmentPages, equipmentOverviews, magicItemPages, magicItemOverview };

export const itemCategoryMeta: Record<string, { title: string; description: string }> = {
  equipment: {
    title: "Equipment & Weapons",
    description: "Armor, weapons, and adventuring gear stats at a glance.",
  },
  "magic-items": {
    title: "Magic Items",
    description: "Rarity, attunement, and mechanics for popular magic items.",
  },
};

export function getItemPageBySlug(slug: string) {
  const eq = equipmentPages.find((e) => e.slug === slug);
  if (eq) return { type: "equipment" as const, data: eq };

  const eqOv = equipmentOverviews.find((e) => e.slug === slug);
  if (eqOv) return { type: "equipmentOverview" as const, data: eqOv };

  const mi = magicItemPages.find((m) => m.slug === slug);
  if (mi) return { type: "magicItem" as const, data: mi };

  if (magicItemOverview.slug === slug)
    return { type: "magicItemOverview" as const, data: magicItemOverview };

  return null;
}

export function getAllItemSlugs(): { slug: string; category: string }[] {
  const slugs: { slug: string; category: string }[] = [];

  for (const e of equipmentPages) slugs.push({ slug: e.slug, category: "equipment" });
  for (const e of equipmentOverviews) slugs.push({ slug: e.slug, category: "equipment" });
  for (const m of magicItemPages) slugs.push({ slug: m.slug, category: "magic-items" });
  slugs.push({ slug: magicItemOverview.slug, category: "magic-items" });

  return slugs;
}
