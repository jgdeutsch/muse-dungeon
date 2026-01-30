// Unified entity lookup — find any entity by name or slug across all content types
// Returns tooltip-friendly data for spells, classes, races, monsters, items, conditions, feats, etc.

import { allSpells, type Spell } from "@/data/spells-index";
import { classPages, racePages, featPages, classFeaturePages } from "@/data/characters-index";
import { monsterPages } from "@/data/monsters-index";
import { equipmentPages, magicItemPages } from "@/data/items-index";
import { rulePages } from "@/data/rules-index";

export type EntityType =
  | "spell"
  | "class"
  | "class-feature"
  | "race"
  | "monster"
  | "equipment"
  | "magic-item"
  | "condition"
  | "rule"
  | "feat";

export type EntityData = {
  type: EntityType;
  name: string;
  slug: string;
  url: string;
  shortDescription: string; // For tooltip
  details?: {
    // Additional info for modal
    level?: string;
    school?: string;
    castingTime?: string;
    range?: string;
    components?: string;
    duration?: string;
    classes?: string[];
    hitDie?: string;
    primaryAbility?: string;
    size?: string;
    speed?: string;
    challengeRating?: string;
    type?: string;
    rarity?: string;
    attunement?: boolean;
    category?: string;
  };
  fullDescription?: string; // For modal
};

// Build lookup maps for fast access by name (case-insensitive)
const entityByName = new Map<string, EntityData>();
const entityBySlug = new Map<string, EntityData>();

function addEntity(data: EntityData, aliases?: string[]) {
  const nameLower = data.name.toLowerCase();
  entityByName.set(nameLower, data);
  entityBySlug.set(data.slug, data);

  // Also index without common suffixes like "5e"
  const nameWithout5e = nameLower.replace(/\s*5e$/i, "").trim();
  if (nameWithout5e !== nameLower) {
    entityByName.set(nameWithout5e, data);
  }

  // Add aliases
  if (aliases) {
    for (const alias of aliases) {
      entityByName.set(alias.toLowerCase(), data);
      entityBySlug.set(alias, data);
    }
  }
}

// Initialize all entities
function initializeLookup() {
  // Spells
  for (const spell of allSpells) {
    // Use the spell's category directly - it matches the URL path
    addEntity({
      type: "spell",
      name: spell.name,
      slug: spell.slug,
      url: `/spells/${spell.category}/${spell.slug}/`,
      shortDescription: truncate(stripHtml(spell.description), 150),
      details: {
        level: spell.level,
        school: spell.school,
        castingTime: spell.castingTime,
        range: spell.range,
        components: spell.components,
        duration: spell.duration,
        classes: spell.classes,
      },
      fullDescription: spell.description,
    }, spell.aliases);
  }

  // Classes
  for (const cls of classPages) {
    addEntity({
      type: "class",
      name: cls.className || cls.name,
      slug: cls.slug,
      url: `/characters/classes/${cls.slug}/`,
      shortDescription: truncate(stripHtml(cls.description), 150),
      details: {
        hitDie: cls.hitDie,
        primaryAbility: cls.primaryAbility,
      },
      fullDescription: cls.description,
    }, cls.aliases);
  }

  // Races
  for (const race of racePages) {
    addEntity({
      type: "race",
      name: race.raceName || race.name,
      slug: race.slug,
      url: `/characters/races/${race.slug}/`,
      shortDescription: truncate(stripHtml(race.description), 150),
      details: {
        size: race.size,
        speed: race.speed,
      },
      fullDescription: race.description,
    }, race.aliases);
  }

  // Monsters
  for (const monster of monsterPages) {
    addEntity({
      type: "monster",
      name: monster.monsterName || monster.name,
      slug: monster.slug,
      url: `/monsters/${monster.slug}/`,
      shortDescription: `CR ${monster.challengeRating} ${monster.type}. ${truncate(stripHtml(monster.tactics || ""), 100)}`,
      details: {
        challengeRating: monster.challengeRating,
        type: monster.type,
        size: monster.size,
      },
      fullDescription: monster.tactics,
    });
  }

  // Equipment
  for (const item of equipmentPages) {
    addEntity({
      type: "equipment",
      name: item.name,
      slug: item.slug,
      url: `/items/${item.slug}/`,
      shortDescription: truncate(stripHtml(item.description), 150),
      details: {
        category: item.itemType,
      },
      fullDescription: item.description,
    });
  }

  // Magic Items
  for (const item of magicItemPages) {
    addEntity({
      type: "magic-item",
      name: item.name,
      slug: item.slug,
      url: `/items/${item.slug}/`,
      shortDescription: `${item.rarity}${item.attunement ? " (requires attunement)" : ""}. ${truncate(stripHtml(item.description), 100)}`,
      details: {
        rarity: item.rarity,
        attunement: item.attunement,
        category: item.itemType,
      },
      fullDescription: item.description,
    });
  }

  // Rules (including conditions)
  for (const rule of rulePages) {
    const isCondition = rule.category === "conditions";
    addEntity({
      type: isCondition ? "condition" : "rule",
      name: rule.name,
      slug: rule.slug,
      url: `/rules/${rule.category}/${rule.slug}/`,
      shortDescription: truncate(stripHtml(rule.description), 150),
      fullDescription: rule.description,
    }, rule.aliases);
  }

  // Feats
  for (const feat of featPages) {
    addEntity({
      type: "feat",
      name: feat.name,
      slug: feat.slug,
      url: `/characters/feats/${feat.slug}/`,
      shortDescription: truncate(stripHtml(feat.description || ""), 150),
      fullDescription: feat.description,
    }, feat.aliases);
  }

  // Class Features (Wizard features, etc.)
  for (const feature of classFeaturePages) {
    addEntity({
      type: "class-feature",
      name: feature.name,
      slug: feature.slug,
      url: `/characters/classes/${feature.slug}/`,
      shortDescription: truncate(stripHtml(feature.description || ""), 150),
      details: {
        category: `${feature.className} (${feature.featureLevel})`,
      },
      fullDescription: feature.description,
    });
  }
}

// Helper functions
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

// Initialize on module load
initializeLookup();

// Public API

/**
 * Find an entity by name (case-insensitive)
 * Handles common variations like "Fireball" vs "fireball 5e"
 */
export function findEntityByName(name: string): EntityData | null {
  const normalized = name.toLowerCase().trim();
  return entityByName.get(normalized) || null;
}

/**
 * Find an entity by slug
 */
export function findEntityBySlug(slug: string): EntityData | null {
  return entityBySlug.get(slug) || null;
}

/**
 * Check if a name corresponds to a known entity
 */
export function isKnownEntity(name: string): boolean {
  return entityByName.has(name.toLowerCase().trim());
}

/**
 * Get all entity names (for autocomplete, etc.)
 */
export function getAllEntityNames(): string[] {
  return Array.from(entityByName.keys());
}

/**
 * Get the URL for a given entity name
 */
export function getEntityUrl(name: string): string | null {
  const entity = findEntityByName(name);
  return entity?.url || null;
}
