// Barrel file for all character data

import { classPages, classOverview } from "./characters-classes";
import { racePages, raceOverviews } from "./characters-races";
import {
  featOverview,
  featPages,
  combatPages,
  creationPages,
  characterRedirects,
  monstersOverview,
  classFeaturePages,
} from "./characters-other";
import { subclassPages } from "./characters-subclasses";
import { featurePages } from "./characters-features";

export type { ClassPage, ClassOverviewPage } from "./characters-classes";
export type { FeaturePage } from "./characters-features";
export type { RacePage, RaceOverviewPage } from "./characters-races";
export type {
  FeatPage,
  FeatOverviewPage,
  CombatManeuverPage,
  CreationToolPage,
  RedirectEntry,
  ClassFeaturePage,
} from "./characters-other";
export type { SubclassPage } from "./characters-subclasses";

// All class pages
export { classPages, classOverview };

// All race pages
export { racePages, raceOverviews };

// All subclass pages
export { subclassPages };

// All feature pages
export { featurePages };

// Feats, combat maneuvers, creation tools, class features
export { featOverview, featPages, combatPages, creationPages, characterRedirects, monstersOverview, classFeaturePages };

// Category metadata
export const characterCategoryMeta: Record<
  string,
  { title: string; description: string }
> = {
  classes: {
    title: "Classes",
    description:
      "Quick reference for every class in D&D 5e — hit dice, key features, and DM tips.",
  },
  subclasses: {
    title: "Subclasses",
    description:
      "All 108 subclasses in D&D 5e — features, abilities, and build guides for every archetype.",
  },
  races: {
    title: "Races & Species",
    description:
      "Racial traits, ability scores, and subraces at a glance for every playable race in D&D 5e.",
  },
  feats: {
    title: "Combat Maneuvers & Feats",
    description:
      "Feats, grappling rules, sneak attack, and other combat options explained step-by-step.",
  },
  creation: {
    title: "Character Creation Tools",
    description:
      "Point buy calculator, character sheets, and creation guides for building D&D 5e characters.",
  },
  features: {
    title: "Class Features",
    description:
      "All 137 class features in D&D 5e — mechanics, FAQ, and tips for Rage, Sneak Attack, Divine Smite, and more.",
  },
};

// Unified lookup: find any character page by slug
export function getCharacterPageBySlug(slug: string) {
  // Check class pages
  const cls = classPages.find(
    (c) => c.slug === slug || c.aliases?.includes(slug)
  );
  if (cls) return { type: "class" as const, data: cls };

  // Check class overview
  if (classOverview.slug === slug)
    return { type: "classOverview" as const, data: classOverview };

  // Check subclass pages
  const subclass = subclassPages.find((s) => s.slug === slug);
  if (subclass) return { type: "subclass" as const, data: subclass };

  // Check race pages
  const race = racePages.find(
    (r) => r.slug === slug || r.aliases?.includes(slug)
  );
  if (race) return { type: "race" as const, data: race };

  // Check race overviews
  const raceOv = raceOverviews.find((r) => r.slug === slug);
  if (raceOv) return { type: "raceOverview" as const, data: raceOv };

  // Check feat overview
  if (
    featOverview.slug === slug ||
    featOverview.aliases?.includes(slug)
  )
    return { type: "featOverview" as const, data: featOverview };

  // Check feat pages
  const feat = featPages.find(
    (f) => f.slug === slug || f.aliases?.includes(slug)
  );
  if (feat) return { type: "feat" as const, data: feat };

  // Check combat pages
  const combat = combatPages.find((c) => c.slug === slug);
  if (combat) return { type: "combat" as const, data: combat };

  // Check creation pages
  const creation = creationPages.find((c) => c.slug === slug);
  if (creation) return { type: "creation" as const, data: creation };

  // Check class feature pages (old wizard-specific)
  const classFeature = classFeaturePages.find((c) => c.slug === slug);
  if (classFeature) return { type: "classFeature" as const, data: classFeature };

  // Check feature pages (new comprehensive features)
  const feature = featurePages.find((f) => f.slug === slug);
  if (feature) return { type: "feature" as const, data: feature };

  // Check redirects
  const redirect = characterRedirects.find((r) => r.slug === slug);
  if (redirect) return { type: "redirect" as const, data: redirect };

  // Check monsters overview (dnd-monsters is under characters/general)
  if (monstersOverview.slug === slug)
    return { type: "creation" as const, data: monstersOverview };

  return null;
}

// Get all slugs for static params
export function getAllCharacterSlugs(): { slug: string; category: string }[] {
  const slugs: { slug: string; category: string }[] = [];

  for (const c of classPages) {
    slugs.push({ slug: c.slug, category: "classes" });
    if (c.aliases) for (const a of c.aliases) slugs.push({ slug: a, category: "classes" });
  }
  slugs.push({ slug: classOverview.slug, category: "classes" });

  // Subclass pages
  for (const s of subclassPages) {
    slugs.push({ slug: s.slug, category: "subclasses" });
  }

  for (const r of racePages) {
    slugs.push({ slug: r.slug, category: "races" });
    if (r.aliases) for (const a of r.aliases) slugs.push({ slug: a, category: "races" });
  }
  for (const r of raceOverviews) {
    slugs.push({ slug: r.slug, category: "races" });
  }

  slugs.push({ slug: featOverview.slug, category: "feats" });
  if (featOverview.aliases) for (const a of featOverview.aliases) slugs.push({ slug: a, category: "feats" });
  for (const f of featPages) {
    slugs.push({ slug: f.slug, category: "feats" });
  }
  for (const c of combatPages) {
    slugs.push({ slug: c.slug, category: "feats" });
  }

  for (const c of creationPages) {
    slugs.push({ slug: c.slug, category: "creation" });
  }

  slugs.push({ slug: monstersOverview.slug, category: "creation" });

  for (const c of classFeaturePages) {
    slugs.push({ slug: c.slug, category: "classes" });
  }

  // Feature pages
  for (const f of featurePages) {
    slugs.push({ slug: f.slug, category: "features" });
  }

  for (const r of characterRedirects) {
    slugs.push({ slug: r.slug, category: r.category });
  }

  return slugs;
}
