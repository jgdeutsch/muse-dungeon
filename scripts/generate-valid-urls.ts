// Script to generate a list of all valid URLs on the site
// Run with: npx ts-node scripts/generate-valid-urls.ts

import { allSpells } from "../src/data/spells-index";
import { classPages, racePages, featPages, classFeaturePages } from "../src/data/characters-index";
import { monsterPages } from "../src/data/monsters-index";
import { equipmentPages, magicItemPages } from "../src/data/items-index";
import { rulePages } from "../src/data/rules-index";
import * as fs from "fs";

const validUrls = new Set<string>();

// Static pages
validUrls.add("/");
validUrls.add("/characters");
validUrls.add("/characters/classes");
validUrls.add("/characters/races");
validUrls.add("/characters/feats");
validUrls.add("/characters/creation");
validUrls.add("/spells");
validUrls.add("/spells/cantrips");
validUrls.add("/spells/offensive");
validUrls.add("/spells/utility-control");
validUrls.add("/spells/support-healing");
validUrls.add("/spells/reaction-defense");
validUrls.add("/spells/class-spell-lists");
validUrls.add("/spells/general");
validUrls.add("/monsters");
validUrls.add("/monsters/creatures");
validUrls.add("/monsters/lore");
validUrls.add("/monsters/sourcebooks");
validUrls.add("/items");
validUrls.add("/items/equipment");
validUrls.add("/items/magic-items");
validUrls.add("/rules");
validUrls.add("/rules/conditions");
validUrls.add("/rules/core-mechanics");
validUrls.add("/rules/game-terms");
validUrls.add("/rules/tools-resources");
validUrls.add("/game");

// Spells
for (const spell of allSpells) {
  validUrls.add(`/spells/${spell.category}/${spell.slug}/`);
  if (spell.aliases) {
    for (const alias of spell.aliases) {
      validUrls.add(`/spells/${spell.category}/${alias}/`);
    }
  }
}

// Classes
for (const cls of classPages) {
  validUrls.add(`/characters/classes/${cls.slug}/`);
  if (cls.aliases) {
    for (const alias of cls.aliases) {
      validUrls.add(`/characters/classes/${alias}/`);
    }
  }
}

// Races
for (const race of racePages) {
  validUrls.add(`/characters/races/${race.slug}/`);
  if (race.aliases) {
    for (const alias of race.aliases) {
      validUrls.add(`/characters/races/${alias}/`);
    }
  }
}

// Feats
for (const feat of featPages) {
  validUrls.add(`/characters/feats/${feat.slug}/`);
  if (feat.aliases) {
    for (const alias of feat.aliases) {
      validUrls.add(`/characters/feats/${alias}/`);
    }
  }
}

// Class Features
for (const feature of classFeaturePages) {
  validUrls.add(`/characters/classes/${feature.slug}/`);
}

// Monsters
for (const monster of monsterPages) {
  validUrls.add(`/monsters/${monster.category}/${monster.slug}/`);
}

// Equipment
for (const item of equipmentPages) {
  validUrls.add(`/items/equipment/${item.slug}/`);
}

// Magic Items
for (const item of magicItemPages) {
  validUrls.add(`/items/magic-items/${item.slug}/`);
}

// Rules (including conditions)
for (const rule of rulePages) {
  validUrls.add(`/rules/${rule.category}/${rule.slug}/`);
  if (rule.aliases) {
    for (const alias of rule.aliases) {
      validUrls.add(`/rules/${rule.category}/${alias}/`);
    }
  }
}

// Sort and output
const sortedUrls = Array.from(validUrls).sort();
console.log(`Total valid URLs: ${sortedUrls.length}`);

// Write to file
fs.writeFileSync(
  "scripts/valid-urls.json",
  JSON.stringify(sortedUrls, null, 2)
);
console.log("Written to scripts/valid-urls.json");

// Also export as a module
export const VALID_URLS = validUrls;
