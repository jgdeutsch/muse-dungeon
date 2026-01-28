import { rulePages } from "./rules";

export type { RulePage } from "./rules";
export { rulePages };

export const ruleCategoryMeta: Record<string, { title: string; description: string }> = {
  "core-mechanics": {
    title: "Core Mechanics",
    description: "Exhaustion, fall damage, multiclassing, and other core rules.",
  },
  "game-terms": {
    title: "Game Terms & Backgrounds",
    description: "Languages, tools, backgrounds, and other game terms.",
  },
  "tools-resources": {
    title: "External Tools & Resources",
    description: "D&D Beyond, Sage Advice, MCDM, and other resources.",
  },
};

export function getRulePageBySlug(slug: string) {
  return rulePages.find(
    (r) => r.slug === slug || r.aliases?.includes(slug)
  ) || null;
}

export function getAllRuleSlugs(): { slug: string; category: string }[] {
  const slugs: { slug: string; category: string }[] = [];
  for (const r of rulePages) {
    slugs.push({ slug: r.slug, category: r.category });
    if (r.aliases) for (const a of r.aliases) slugs.push({ slug: a, category: r.category });
  }
  return slugs;
}
