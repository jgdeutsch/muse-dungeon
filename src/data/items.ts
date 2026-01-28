export type EquipmentPage = {
  slug: string;
  name: string;
  category: "equipment";
  itemType: string;
  cost: string;
  weight: string;
  description: string;
  mechanics: string;
  properties: string[];
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
};

export type EquipmentOverviewPage = {
  slug: string;
  name: string;
  category: "equipment";
  description: string;
  sections: { id: string; title: string; content: string }[];
  searchVolume: number;
};

export type MagicItemPage = {
  slug: string;
  name: string;
  category: "magic-items";
  rarity: string;
  attunement: boolean;
  itemType: string;
  description: string;
  mechanics: string;
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
};

export type MagicItemOverviewPage = {
  slug: string;
  name: string;
  category: "magic-items";
  description: string;
  sections: { id: string; title: string; content: string }[];
  searchVolume: number;
};

export const equipmentPages: EquipmentPage[] = [
  {
    slug: "explorers-pack-5e",
    name: "Explorer's Pack",
    category: "equipment",
    itemType: "Pack",
    cost: "10 gp",
    weight: "59 lbs",
    description: "The Explorer's Pack is one of the most popular starting equipment packages for adventurers. It contains essential supplies for dungeon delving and wilderness exploration, making it an excellent choice for characters who expect to spend time away from civilization.",
    mechanics: "The Explorer's Pack includes: a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, a waterskin, and 50 feet of hempen rope strapped to the side of the pack. All items follow their standard rules for use.",
    properties: ["Starting Equipment", "Adventuring Gear"],
    commonMistakes: [
      "Forgetting that torches only last 1 hour each",
      "Not tracking rations consumption (1 per day)",
      "Assuming the rope is silk rope (it's hempen, requiring DC 10 Strength to climb)",
      "Thinking the backpack has unlimited capacity (it holds 1 cubic foot or 30 pounds of gear)"
    ],
    dmTips: [
      "Track resource depletion early in the campaign to establish survival expectations",
      "The 10 torches can become a point of tension in long dungeons without rest",
      "Use the limited rope length (50 feet) to create interesting challenges with pits and climbs",
      "The mess kit can be a roleplaying opportunity during camp scenes"
    ],
    searchVolume: 8190
  },
  {
    slug: "leather-armor-5e",
    name: "Leather Armor",
    category: "equipment",
    itemType: "Armor",
    cost: "10 gp",
    weight: "10 lbs",
    description: "Leather armor is made from carefully tanned and stitched animal hides. It's the most common light armor, favored by rogues, rangers, and other adventurers who value mobility over protection. The armor is boiled and hardened to provide a reasonable degree of protection without restricting movement.",
    mechanics: "Armor Class: 11 + Dexterity modifier. Light armor lets you add your full Dexterity modifier to your AC. You can don leather armor in 1 minute and doff it in 1 minute. No Strength requirement. No disadvantage on Stealth checks.",
    properties: ["Light Armor"],
    commonMistakes: [
      "Forgetting that you add your full Dex modifier (no maximum)",
      "Thinking leather armor is silent (it's not magical stealth armor)",
      "Assuming it provides damage resistance (it only increases AC)",
      "Not realizing it can be worn under certain clothing for concealment with DM approval"
    ],
    dmTips: [
      "Leather armor is perfect for NPCs who need to be mobile and stealthy",
      "Consider offering masterwork or decorative versions as minor rewards",
      "The 10 gp cost makes it affordable for low-level parties to upgrade hirelings",
      "In hot climates, remind players that leather armor can be uncomfortable"
    ],
    searchVolume: 13190
  },
  {
    slug: "quarterstaff-5e",
    name: "Quarterstaff",
    category: "equipment",
    itemType: "Weapon",
    cost: "2 sp",
    weight: "4 lbs",
    description: "A quarterstaff is a simple wooden staff, typically 6 to 9 feet long. It's one of the most versatile and accessible weapons in D&D, used by monks, druids, and wizards alike. The staff can be wielded with one or two hands, making it adaptable to different combat situations.",
    mechanics: "Damage: 1d6 bludgeoning (one-handed) or 1d8 bludgeoning (two-handed). Melee weapon attack using Strength modifier. Range: 5 feet (reach). The Versatile property allows you to use either damage die depending on whether you use one or two hands.",
    properties: ["Simple Melee Weapon", "Versatile (1d8)"],
    commonMistakes: [
      "Forgetting you can switch between one-handed and two-handed as part of your attack",
      "Thinking the staff has reach (it doesn't extend your attack range beyond 5 feet)",
      "Not realizing monks can use Dexterity instead of Strength with this weapon",
      "Assuming the versatile damage applies when wielding two quarterstaffs (you can't)"
    ],
    dmTips: [
      "Quarterstaffs are great improvised weapons - a walking stick is essentially a quarterstaff",
      "Monks with Martial Arts can use this weapon with their Dex and deal their Martial Arts die instead",
      "The low cost makes it accessible for peasant NPCs in combat encounters",
      "Consider magical quarterstaffs as rewards - they're iconic for spellcasters"
    ],
    searchVolume: 6670
  },
  {
    slug: "scale-mail-5e",
    name: "Scale Mail",
    category: "equipment",
    itemType: "Armor",
    cost: "50 gp",
    weight: "45 lbs",
    description: "Scale mail consists of a coat and leggings of leather covered with overlapping pieces of metal, much like the scales of a fish. It's a popular choice for clerics and other adventurers who need substantial protection but can't wear heavy armor. The suit includes gauntlets.",
    mechanics: "Armor Class: 14 + Dexterity modifier (max +2). Medium armor lets you add your Dexterity modifier, up to a maximum of +2, to your AC. You can don scale mail in 5 minutes and doff it in 1 minute. No Strength requirement, but you have disadvantage on Stealth checks while wearing it.",
    properties: ["Medium Armor", "Stealth Disadvantage"],
    commonMistakes: [
      "Forgetting the +2 maximum on Dexterity modifier (high-Dex characters don't get full benefit)",
      "Not applying disadvantage on Stealth checks in every situation",
      "Thinking you can remove the stealth penalty with proficiency (you can't)",
      "Confusing scale mail with half plate (which has AC 15)"
    ],
    dmTips: [
      "Scale mail is the sweet spot for clerics who can't wear heavy armor",
      "The stealth disadvantage creates interesting party dynamics when sneaking",
      "At 50 gp, it's a significant early investment - make earning it feel rewarding",
      "Consider describing the distinctive sound of scales clinking during tense moments",
      "Characters with 16+ Dexterity might prefer hide armor or studded leather"
    ],
    searchVolume: 13450
  },
  {
    slug: "studded-leather-5e",
    name: "Studded Leather Armor",
    category: "equipment",
    itemType: "Armor",
    cost: "45 gp",
    weight: "13 lbs",
    description: "Studded leather armor is made from tough but flexible leather with close-set rivets or spikes. Despite the name, the studs are actually metal reinforcements rather than decorative elements. This is the best light armor available in standard D&D 5e, offering maximum protection without sacrificing mobility.",
    mechanics: "Armor Class: 12 + Dexterity modifier. Light armor lets you add your full Dexterity modifier to your AC. You can don studded leather armor in 1 minute and doff it in 1 minute. No Strength requirement. No disadvantage on Stealth checks.",
    properties: ["Light Armor"],
    commonMistakes: [
      "Thinking the studs deal damage to grapplers (they don't)",
      "Forgetting it's only 1 AC better than regular leather for 45 gp more",
      "Assuming it's medium armor due to the cost (it's still light armor)",
      "Not considering whether the upgrade from leather is worth the gold early on"
    ],
    dmTips: [
      "This is the best non-magical armor for high-Dex characters like rogues and rangers",
      "The 45 gp cost makes it a good first major purchase for starting characters",
      "Consider offering studded leather as loot after tough early encounters",
      "The armor can be described in various ways - studded, riveted, or reinforced",
      "For characters starting with leather, upgrading to studded leather feels significant"
    ],
    searchVolume: 40
  },
  {
    slug: "yklwa-5e",
    name: "Yklwa",
    category: "equipment",
    itemType: "Weapon",
    cost: "1 gp",
    weight: "3 lbs",
    description: "The yklwa (pronounced YICK-ul-wah) is a Chultan weapon that consists of a 3-foot wooden shaft with a steel or stone blade up to 18 inches long. It's the signature weapon of Chult's people, particularly the dinosaur-riding warriors. The weapon is designed for both melee combat and throwing.",
    mechanics: "Damage: 1d8 piercing. Melee weapon attack using Strength modifier. Range: 5 feet melee, or 10/30 feet thrown. Simple melee weapon with the Thrown property. When thrown, it uses the same ability modifier as when used in melee (Strength). After throwing, the weapon lands in the target's space.",
    properties: ["Simple Melee Weapon", "Thrown (10/30)"],
    commonMistakes: [
      "Forgetting it's a simple weapon, not martial (anyone can use it proficiently)",
      "Not realizing it deals 1d8 damage, making it better than most simple weapons",
      "Thinking you can draw and throw multiple yklwas in one turn without the Dual Wielder feat",
      "Assuming the thrown range is longer than 30 feet (it has disadvantage beyond 10 feet)"
    ],
    dmTips: [
      "This weapon is exclusive to Tomb of Annihilation and Chult-themed campaigns",
      "At 1d8 damage with thrown property, it's surprisingly powerful for a simple weapon",
      "Perfect for strength-based characters who want a simple throwing weapon option",
      "Consider making this weapon available in other settings with cultural modification",
      "The low cost makes it affordable to carry multiple for throwing"
    ],
    searchVolume: 24600
  }
];

export const equipmentOverviews: EquipmentOverviewPage[] = [
  {
    slug: "dnd-5e-armor",
    name: "D&D 5e Armor",
    category: "equipment",
    description: "Armor in D&D 5e protects characters from attacks by increasing their Armor Class (AC). The game divides armor into three categories: light, medium, and heavy. Your class determines which armor types you can wear proficiently. Wearing armor without proficiency imposes disadvantage on any ability check, saving throw, or attack roll that involves Strength or Dexterity, and prevents you from casting spells.",
    sections: [
      {
        id: "light-armor",
        title: "Light Armor",
        content: `<p>Light armor is made from flexible, lightweight materials. If you wear light armor, you add your full Dexterity modifier to your AC. Ideal for rogues, rangers, and other agile characters.</p>
<table>
<thead>
<tr><th>Armor</th><th>Cost</th><th>Armor Class (AC)</th><th>Strength</th><th>Stealth</th><th>Weight</th></tr>
</thead>
<tbody>
<tr><td>Padded</td><td>5 gp</td><td>11 + Dex modifier</td><td>-</td><td>Disadvantage</td><td>8 lbs</td></tr>
<tr><td>Leather</td><td>10 gp</td><td>11 + Dex modifier</td><td>-</td><td>-</td><td>10 lbs</td></tr>
<tr><td>Studded Leather</td><td>45 gp</td><td>12 + Dex modifier</td><td>-</td><td>-</td><td>13 lbs</td></tr>
</tbody>
</table>`
      },
      {
        id: "medium-armor",
        title: "Medium Armor",
        content: `<p>Medium armor offers more protection than light armor, but also restricts movement somewhat. If you wear medium armor, you add your Dexterity modifier, to a maximum of +2, to your AC. Perfect for clerics, druids, and versatile fighters.</p>
<table>
<thead>
<tr><th>Armor</th><th>Cost</th><th>Armor Class (AC)</th><th>Strength</th><th>Stealth</th><th>Weight</th></tr>
</thead>
<tbody>
<tr><td>Hide</td><td>10 gp</td><td>12 + Dex modifier (max 2)</td><td>-</td><td>-</td><td>12 lbs</td></tr>
<tr><td>Chain Shirt</td><td>50 gp</td><td>13 + Dex modifier (max 2)</td><td>-</td><td>-</td><td>20 lbs</td></tr>
<tr><td>Scale Mail</td><td>50 gp</td><td>14 + Dex modifier (max 2)</td><td>-</td><td>Disadvantage</td><td>45 lbs</td></tr>
<tr><td>Breastplate</td><td>400 gp</td><td>14 + Dex modifier (max 2)</td><td>-</td><td>-</td><td>20 lbs</td></tr>
<tr><td>Half Plate</td><td>750 gp</td><td>15 + Dex modifier (max 2)</td><td>-</td><td>Disadvantage</td><td>40 lbs</td></tr>
</tbody>
</table>`
      },
      {
        id: "heavy-armor",
        title: "Heavy Armor",
        content: `<p>Heavy armor offers the best protection, but doesn't let you add your Dexterity modifier to your AC. Some heavy armor also slows you down. Heavier armor also reduces your speed by 10 feet if you don't meet the Strength requirement. Designed for fighters, paladins, and front-line warriors.</p>
<table>
<thead>
<tr><th>Armor</th><th>Cost</th><th>Armor Class (AC)</th><th>Strength</th><th>Stealth</th><th>Weight</th></tr>
</thead>
<tbody>
<tr><td>Ring Mail</td><td>30 gp</td><td>14</td><td>-</td><td>Disadvantage</td><td>40 lbs</td></tr>
<tr><td>Chain Mail</td><td>75 gp</td><td>16</td><td>Str 13</td><td>Disadvantage</td><td>55 lbs</td></tr>
<tr><td>Splint</td><td>200 gp</td><td>17</td><td>Str 15</td><td>Disadvantage</td><td>60 lbs</td></tr>
<tr><td>Plate</td><td>1,500 gp</td><td>18</td><td>Str 15</td><td>Disadvantage</td><td>65 lbs</td></tr>
</tbody>
</table>`
      },
      {
        id: "shields",
        title: "Shields",
        content: `<p>A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.</p>
<table>
<thead>
<tr><th>Armor</th><th>Cost</th><th>Armor Class (AC)</th><th>Strength</th><th>Stealth</th><th>Weight</th></tr>
</thead>
<tbody>
<tr><td>Shield</td><td>10 gp</td><td>+2</td><td>-</td><td>-</td><td>6 lbs</td></tr>
</tbody>
</table>`
      },
      {
        id: "getting-into-armor",
        title: "Getting Into and Out of Armor",
        content: `<p>The time it takes to don or doff armor depends on the armor's category:</p>
<table>
<thead>
<tr><th>Category</th><th>Don</th><th>Doff</th></tr>
</thead>
<tbody>
<tr><td>Light Armor</td><td>1 minute</td><td>1 minute</td></tr>
<tr><td>Medium Armor</td><td>5 minutes</td><td>1 minute</td></tr>
<tr><td>Heavy Armor</td><td>10 minutes</td><td>5 minutes</td></tr>
<tr><td>Shield</td><td>1 action</td><td>1 action</td></tr>
</tbody>
</table>
<p><strong>Donning:</strong> You can don armor only if you're proficient with it. To don armor, you must incorporate it into your body over the course of the indicated time.</p>
<p><strong>Doffing:</strong> To doff armor, you must spend the indicated time removing it. If you have help removing armor, you can reduce the time by half.</p>`
      }
    ],
    searchVolume: 27300
  },
  {
    slug: "dnd-weapons",
    name: "D&D Weapons",
    category: "equipment",
    description: "Weapons in D&D 5e are divided into two main categories: simple and martial. Your race, class, and feats determine which weapons you're proficient with. When you make an attack with a weapon, you add your proficiency bonus to the attack roll if you're proficient with that weapon. You also add your relevant ability modifier (Strength for most melee weapons, Dexterity for finesse and ranged weapons) to both attack and damage rolls.",
    sections: [
      {
        id: "weapon-properties",
        title: "Weapon Properties",
        content: `<p>Many weapons have special properties that define how they work:</p>
<ul>
<li><strong>Ammunition:</strong> You need ammunition to fire a ranged weapon. Drawing ammunition is part of the attack.</li>
<li><strong>Finesse:</strong> You can use Strength or Dexterity for attack and damage rolls.</li>
<li><strong>Heavy:</strong> Small creatures have disadvantage on attack rolls with heavy weapons.</li>
<li><strong>Light:</strong> Ideal for two-weapon fighting. You can fight with a light weapon in each hand.</li>
<li><strong>Loading:</strong> You can fire only one piece of ammunition when you use an action, bonus action, or reaction to fire this weapon, regardless of how many attacks you can normally make.</li>
<li><strong>Range:</strong> Shows two numbers - normal range and long range (with disadvantage).</li>
<li><strong>Reach:</strong> Adds 5 feet to your reach for melee attacks.</li>
<li><strong>Special:</strong> The weapon has unusual rules (see weapon description).</li>
<li><strong>Thrown:</strong> You can throw the weapon to make a ranged attack.</li>
<li><strong>Two-Handed:</strong> Requires two hands to use.</li>
<li><strong>Versatile:</strong> Can be used with one or two hands. The damage shown in parentheses is for two-handed use.</li>
</ul>`
      },
      {
        id: "simple-melee-weapons",
        title: "Simple Melee Weapons",
        content: `<table>
<thead>
<tr><th>Name</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr>
</thead>
<tbody>
<tr><td>Club</td><td>1 sp</td><td>1d4 bludgeoning</td><td>2 lbs</td><td>Light</td></tr>
<tr><td>Dagger</td><td>2 gp</td><td>1d4 piercing</td><td>1 lb</td><td>Finesse, light, thrown (20/60)</td></tr>
<tr><td>Greatclub</td><td>2 sp</td><td>1d8 bludgeoning</td><td>10 lbs</td><td>Two-handed</td></tr>
<tr><td>Handaxe</td><td>5 gp</td><td>1d6 slashing</td><td>2 lbs</td><td>Light, thrown (20/60)</td></tr>
<tr><td>Javelin</td><td>5 sp</td><td>1d6 piercing</td><td>2 lbs</td><td>Thrown (30/120)</td></tr>
<tr><td>Light Hammer</td><td>2 gp</td><td>1d4 bludgeoning</td><td>2 lbs</td><td>Light, thrown (20/60)</td></tr>
<tr><td>Mace</td><td>5 gp</td><td>1d6 bludgeoning</td><td>4 lbs</td><td>-</td></tr>
<tr><td>Quarterstaff</td><td>2 sp</td><td>1d6 bludgeoning</td><td>4 lbs</td><td>Versatile (1d8)</td></tr>
<tr><td>Sickle</td><td>1 gp</td><td>1d4 slashing</td><td>2 lbs</td><td>Light</td></tr>
<tr><td>Spear</td><td>1 gp</td><td>1d6 piercing</td><td>3 lbs</td><td>Thrown (20/60), versatile (1d8)</td></tr>
</tbody>
</table>`
      },
      {
        id: "simple-ranged-weapons",
        title: "Simple Ranged Weapons",
        content: `<table>
<thead>
<tr><th>Name</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr>
</thead>
<tbody>
<tr><td>Crossbow, Light</td><td>25 gp</td><td>1d8 piercing</td><td>5 lbs</td><td>Ammunition (80/320), loading, two-handed</td></tr>
<tr><td>Dart</td><td>5 cp</td><td>1d4 piercing</td><td>1/4 lb</td><td>Finesse, thrown (20/60)</td></tr>
<tr><td>Shortbow</td><td>25 gp</td><td>1d6 piercing</td><td>2 lbs</td><td>Ammunition (80/320), two-handed</td></tr>
<tr><td>Sling</td><td>1 sp</td><td>1d4 bludgeoning</td><td>-</td><td>Ammunition (30/120)</td></tr>
</tbody>
</table>`
      },
      {
        id: "martial-melee-weapons",
        title: "Martial Melee Weapons",
        content: `<table>
<thead>
<tr><th>Name</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr>
</thead>
<tbody>
<tr><td>Battleaxe</td><td>10 gp</td><td>1d8 slashing</td><td>4 lbs</td><td>Versatile (1d10)</td></tr>
<tr><td>Flail</td><td>10 gp</td><td>1d8 bludgeoning</td><td>2 lbs</td><td>-</td></tr>
<tr><td>Glaive</td><td>20 gp</td><td>1d10 slashing</td><td>6 lbs</td><td>Heavy, reach, two-handed</td></tr>
<tr><td>Greataxe</td><td>30 gp</td><td>1d12 slashing</td><td>7 lbs</td><td>Heavy, two-handed</td></tr>
<tr><td>Greatsword</td><td>50 gp</td><td>2d6 slashing</td><td>6 lbs</td><td>Heavy, two-handed</td></tr>
<tr><td>Halberd</td><td>20 gp</td><td>1d10 slashing</td><td>6 lbs</td><td>Heavy, reach, two-handed</td></tr>
<tr><td>Lance</td><td>10 gp</td><td>1d12 piercing</td><td>6 lbs</td><td>Reach, special</td></tr>
<tr><td>Longsword</td><td>15 gp</td><td>1d8 slashing</td><td>3 lbs</td><td>Versatile (1d10)</td></tr>
<tr><td>Maul</td><td>10 gp</td><td>2d6 bludgeoning</td><td>10 lbs</td><td>Heavy, two-handed</td></tr>
<tr><td>Morningstar</td><td>15 gp</td><td>1d8 piercing</td><td>4 lbs</td><td>-</td></tr>
<tr><td>Pike</td><td>5 gp</td><td>1d10 piercing</td><td>18 lbs</td><td>Heavy, reach, two-handed</td></tr>
<tr><td>Rapier</td><td>25 gp</td><td>1d8 piercing</td><td>2 lbs</td><td>Finesse</td></tr>
<tr><td>Scimitar</td><td>25 gp</td><td>1d6 slashing</td><td>3 lbs</td><td>Finesse, light</td></tr>
<tr><td>Shortsword</td><td>10 gp</td><td>1d6 piercing</td><td>2 lbs</td><td>Finesse, light</td></tr>
<tr><td>Trident</td><td>5 gp</td><td>1d6 piercing</td><td>4 lbs</td><td>Thrown (20/60), versatile (1d8)</td></tr>
<tr><td>War Pick</td><td>5 gp</td><td>1d8 piercing</td><td>2 lbs</td><td>-</td></tr>
<tr><td>Warhammer</td><td>15 gp</td><td>1d8 bludgeoning</td><td>2 lbs</td><td>Versatile (1d10)</td></tr>
<tr><td>Whip</td><td>2 gp</td><td>1d4 slashing</td><td>3 lbs</td><td>Finesse, reach</td></tr>
</tbody>
</table>`
      },
      {
        id: "martial-ranged-weapons",
        title: "Martial Ranged Weapons",
        content: `<table>
<thead>
<tr><th>Name</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr>
</thead>
<tbody>
<tr><td>Blowgun</td><td>10 gp</td><td>1 piercing</td><td>1 lb</td><td>Ammunition (25/100), loading</td></tr>
<tr><td>Crossbow, Hand</td><td>75 gp</td><td>1d6 piercing</td><td>3 lbs</td><td>Ammunition (30/120), light, loading</td></tr>
<tr><td>Crossbow, Heavy</td><td>50 gp</td><td>1d10 piercing</td><td>18 lbs</td><td>Ammunition (100/400), heavy, loading, two-handed</td></tr>
<tr><td>Longbow</td><td>50 gp</td><td>1d8 piercing</td><td>2 lbs</td><td>Ammunition (150/600), heavy, two-handed</td></tr>
<tr><td>Net</td><td>1 gp</td><td>-</td><td>3 lbs</td><td>Special, thrown (5/15)</td></tr>
</tbody>
</table>`
      }
    ],
    searchVolume: 29190
  },
  {
    slug: "simple-weapons-5e",
    name: "Simple Weapons 5e",
    category: "equipment",
    description: "Simple weapons in D&D 5e are weapons that require minimal training to use effectively. Most classes have proficiency with at least some simple weapons, making them accessible to nearly all characters. They include common implements like clubs, daggers, and spears. While simple weapons typically deal less damage than martial weapons, they're reliable, affordable, and versatile options for adventurers.",
    sections: [
      {
        id: "simple-weapon-proficiency",
        title: "Simple Weapon Proficiency",
        content: `<p>The following classes have proficiency with all simple weapons: Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, and Warlock. Wizards and Sorcerers typically have limited weapon proficiencies.</p>
<p>If you make an attack with a weapon you're not proficient with, you don't add your proficiency bonus to the attack roll.</p>`
      },
      {
        id: "simple-melee-weapons-table",
        title: "Simple Melee Weapons",
        content: `<table>
<thead>
<tr><th>Name</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr>
</thead>
<tbody>
<tr><td>Club</td><td>1 sp</td><td>1d4 bludgeoning</td><td>2 lbs</td><td>Light</td></tr>
<tr><td>Dagger</td><td>2 gp</td><td>1d4 piercing</td><td>1 lb</td><td>Finesse, light, thrown (20/60)</td></tr>
<tr><td>Greatclub</td><td>2 sp</td><td>1d8 bludgeoning</td><td>10 lbs</td><td>Two-handed</td></tr>
<tr><td>Handaxe</td><td>5 gp</td><td>1d6 slashing</td><td>2 lbs</td><td>Light, thrown (20/60)</td></tr>
<tr><td>Javelin</td><td>5 sp</td><td>1d6 piercing</td><td>2 lbs</td><td>Thrown (30/120)</td></tr>
<tr><td>Light Hammer</td><td>2 gp</td><td>1d4 bludgeoning</td><td>2 lbs</td><td>Light, thrown (20/60)</td></tr>
<tr><td>Mace</td><td>5 gp</td><td>1d6 bludgeoning</td><td>4 lbs</td><td>-</td></tr>
<tr><td>Quarterstaff</td><td>2 sp</td><td>1d6 bludgeoning</td><td>4 lbs</td><td>Versatile (1d8)</td></tr>
<tr><td>Sickle</td><td>1 gp</td><td>1d4 slashing</td><td>2 lbs</td><td>Light</td></tr>
<tr><td>Spear</td><td>1 gp</td><td>1d6 piercing</td><td>3 lbs</td><td>Thrown (20/60), versatile (1d8)</td></tr>
<tr><td>Yklwa*</td><td>1 gp</td><td>1d8 piercing</td><td>3 lbs</td><td>Thrown (10/30)</td></tr>
</tbody>
</table>
<p><em>*Yklwa is from Tomb of Annihilation and may not be available in all campaigns.</em></p>`
      },
      {
        id: "simple-ranged-weapons-table",
        title: "Simple Ranged Weapons",
        content: `<table>
<thead>
<tr><th>Name</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr>
</thead>
<tbody>
<tr><td>Crossbow, Light</td><td>25 gp</td><td>1d8 piercing</td><td>5 lbs</td><td>Ammunition (80/320), loading, two-handed</td></tr>
<tr><td>Dart</td><td>5 cp</td><td>1d4 piercing</td><td>1/4 lb</td><td>Finesse, thrown (20/60)</td></tr>
<tr><td>Shortbow</td><td>25 gp</td><td>1d6 piercing</td><td>2 lbs</td><td>Ammunition (80/320), two-handed</td></tr>
<tr><td>Sling</td><td>1 sp</td><td>1d4 bludgeoning</td><td>-</td><td>Ammunition (30/120)</td></tr>
</tbody>
</table>`
      },
      {
        id: "notable-simple-weapons",
        title: "Notable Simple Weapons",
        content: `<h3>Dagger</h3>
<p>The most versatile simple weapon. With finesse, light, and thrown properties, it works for any build. Perfect for spellcasters who need a backup weapon.</p>
<h3>Quarterstaff</h3>
<p>Excellent for monks (can use with Dexterity and Martial Arts) and for any character who wants versatile damage without spending much gold.</p>
<h3>Spear</h3>
<p>The best simple weapon for most characters - 1d8 versatile damage and thrown property for only 1 gp. Pairs well with a shield.</p>
<h3>Light Crossbow</h3>
<p>Best ranged option for characters without martial weapon proficiency. Deals 1d8 damage but has the loading property limiting you to one shot per turn.</p>
<h3>Yklwa</h3>
<p>A Chultan weapon dealing 1d8 damage with thrown property - essentially a stronger javelin. Limited availability to Tomb of Annihilation campaigns.</p>`
      }
    ],
    searchVolume: 24010
  }
];

export const magicItemPages: MagicItemPage[] = [
  {
    slug: "bag-of-holding-5e",
    name: "Bag of Holding",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: false,
    itemType: "Wondrous Item",
    description: "A Bag of Holding is a magical sack that opens into a nondimensional space, allowing it to hold far more than its size would suggest. The bag itself weighs only 15 pounds regardless of its contents. This iconic magic item is one of the most useful utility items in D&D, solving many inventory management problems for adventuring parties.",
    mechanics: "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n\nIf the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which they begin to suffocate.\n\nPlacing a bag of holding inside an extradimensional space created by a Heward's Handy Haversack, Portable Hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
    commonMistakes: [
      "Forgetting that retrieving an item requires an action (not a bonus action or free object interaction)",
      "Thinking you can breathe inside the bag indefinitely (you have 10 minutes alone, 5 minutes with another creature, etc.)",
      "Not tracking the 500-pound weight limit or 64 cubic feet volume limit",
      "Assuming the bag protects contents from all damage (it doesn't provide special protection)",
      "Putting a bag of holding inside another extradimensional space without realizing it destroys both and opens an Astral gate"
    ],
    dmTips: [
      "Track encumbrance carefully before giving this item - it trivializes many resource decisions",
      "The Astral Plane destruction can be a plot hook, not just a punishment",
      "Consider how NPCs might use this for smuggling or hiding valuable items",
      "A pierced bag makes for dramatic moments - plan what happens to important items scattered in the Astral Plane",
      "The 10-minute suffocation timer can create tension in kidnapping or hiding scenarios",
      "Price this around 500-4,000 gp depending on how much you want to boost party carrying capacity"
    ],
    searchVolume: 9450
  },
  {
    slug: "cloak-of-displacement-5e",
    name: "Cloak of Displacement",
    category: "magic-items",
    rarity: "Rare",
    attunement: true,
    itemType: "Wondrous Item",
    description: "This item appears to be a normal cloak, but when worn, it projects an illusion that makes the wearer appear to be standing in a place near their actual location. The cloak creates a constant displacement effect, causing attacks to veer off course. The shimmering illusion gives the wearer a ghostly, hard-to-pin-down appearance.",
    mechanics: "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.",
    commonMistakes: [
      "Forgetting that the effect ends after taking ANY damage, including from saving throws",
      "Thinking the effect persists through multiple hits in one round (it ends on first damage)",
      "Assuming the disadvantage applies to saving throws (it only affects attack rolls)",
      "Not realizing that being grappled or restrained suppresses the effect",
      "Thinking you can choose when to activate it (it's always active when worn)"
    ],
    dmTips: [
      "This item shines on characters who can avoid being hit (high AC rogues, monks)",
      "The 'first hit breaks it' mechanic rewards tactical positioning and defensive play",
      "Great for making boss NPCs more challenging without just increasing HP",
      "Consider describing the visual displacement effect during combat for immersion",
      "Pairs extremely well with the Dodge action or Defensive Duelist feat",
      "Area effects that require saves bypass this entirely - use them to counter it"
    ],
    searchVolume: 2950
  },
  {
    slug: "cloak-of-protection-5e",
    name: "Cloak of Protection",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: true,
    itemType: "Wondrous Item",
    description: "A Cloak of Protection is a finely made garment that shimmers with protective magic. When worn and attuned, it grants the wearer an aura of magical protection that deflects both physical attacks and harmful magic. The cloak appears as a high-quality, well-tailored garment that may bear various designs depending on its creator.",
    mechanics: "You gain a +1 bonus to AC and saving throws while you wear this cloak. This bonus applies to your Armor Class and to all saving throws (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma). The benefits require attunement.",
    commonMistakes: [
      "Forgetting that the +1 applies to saving throws as well as AC",
      "Stacking it with a Ring of Protection (they stack, both require attunement)",
      "Assuming you can wear multiple cloaks for multiple bonuses (you can only wear one cloak)",
      "Not realizing it requires attunement (uses one of your three attunement slots)",
      "Thinking the bonus is situational (it's always active when attuned and worn)"
    ],
    dmTips: [
      "This is a solid, balanced magic item that never feels overpowered but always feels useful",
      "Consider giving this as a reward to characters with lower AC or weaker saving throws",
      "The saving throw bonus is often more valuable than the AC bonus at higher levels",
      "Works well as a family heirloom or organization badge in your campaign lore",
      "Typical price: 500-1,500 gp in magic item shops (if available)",
      "Can be combined with magical armor for a modest but meaningful defense boost"
    ],
    searchVolume: 10760
  },
  {
    slug: "deck-of-many-things-5e",
    name: "Deck of Many Things",
    category: "magic-items",
    rarity: "Legendary",
    attunement: false,
    itemType: "Wondrous Item",
    description: "The Deck of Many Things is one of the most legendary and dangerous magic items in D&D. This deck of beautifully illustrated cards contains incredibly powerful magic that can instantly change a character's fate - for better or worse. Each card drawn can grant immense power, bestow terrible curses, or cause reality-warping effects. Many campaigns have ended (or been transformed) by this item.",
    mechanics: "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.\n\nBefore you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.\n\nOnce a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.",
    commonMistakes: [
      "Not having a session zero discussion before introducing this campaign-altering item",
      "Forgetting that players declare how many cards BEFORE drawing",
      "Allowing players to stop drawing mid-declaration (they must draw the declared number)",
      "Not tracking which cards have been drawn (most cards disappear after being drawn)",
      "Assuming you can draw one card per day (you have 1 hour between draws)",
      "Thinking you can inspect cards before drawing (you must draw randomly)"
    ],
    dmTips: [
      "This item can end campaigns - only introduce it if you're ready for chaos",
      "Have backup plans for character death, soul entrapment, and reality changes",
      "The Void and Donjon cards can remove PCs from the campaign entirely",
      "Consider using a partial deck (13 cards) instead of full deck (22 cards) to reduce chaos",
      "Make the deck's reputation known in-world so players understand the stakes",
      "Track the consequences of cards carefully - some have long-term effects",
      "The Avatar of Death created by the Skull card can TPK unprepared parties",
      "This item works best in high-level campaigns where players can handle the chaos"
    ],
    searchVolume: 26010
  },
  {
    slug: "healing-potion-5e",
    name: "Potion of Healing",
    category: "magic-items",
    rarity: "Common (Potion of Healing), Uncommon (Greater), Rare (Superior), Very Rare (Supreme)",
    attunement: false,
    itemType: "Potion",
    description: "Potions of Healing are the most common and essential magic items in D&D 5e. These magical liquids restore hit points when consumed, coming in various strengths from basic healing to supreme restoration. Most adventurers carry at least a few healing potions as emergency recovery. The liquid is typically a vibrant red color and has a sweet, pleasant taste.",
    mechanics: "**Potion of Healing (Common):** You regain 2d4 + 2 hit points when you drink this potion. Drinking or administering a potion takes an action.\n\n**Potion of Greater Healing (Uncommon):** You regain 4d4 + 4 hit points.\n\n**Potion of Superior Healing (Rare):** You regain 8d4 + 8 hit points.\n\n**Potion of Supreme Healing (Very Rare):** You regain 10d4 + 20 hit points.\n\n**Using Potions:** Drinking a potion or administering a potion to another character takes an action. A character can also drink a potion as a bonus action (variant rule used by many DMs, but not official). Identifying a potion requires tasting it (action) or using the Identify spell.",
    commonMistakes: [
      "Drinking a potion as a bonus action (official rules require an action, though many tables house-rule this)",
      "Not specifying whether you're drinking or administering (both take an action)",
      "Forgetting that administering to an unconscious ally requires an action",
      "Rolling healing when you don't need to (some DMs allow taking the average)",
      "Assuming anyone can identify a potion by looking (requires tasting or Identify spell)",
      "Not tracking potion costs - they're worth 50 gp (common) to 50,000 gp (supreme)"
    ],
    dmTips: [
      "Standard pricing: Healing (50 gp), Greater (250 gp), Superior (2,500 gp), Supreme (50,000 gp)",
      "Consider using the bonus action variant rule if combat feels too deadly",
      "Potions can be destroyed - consider attacking held items or targeting pouches",
      "Let alchemists or herbalists craft potions downtime for half the market price",
      "Place healing potions on downed enemies for tactical decisions",
      "Describe the taste and effect uniquely for each batch to add flavor",
      "Consider making healing potions rarer to increase tension and value healing magic",
      "The 2d4+2 roll averages 7 HP - not enough to fully heal most characters"
    ],
    searchVolume: 10820
  }
];

export const magicItemOverview: MagicItemOverviewPage = {
  slug: "magic-items-5e",
  name: "Magic Items 5e",
  category: "magic-items",
  description: "Magic items are one of the most exciting rewards in D&D 5e. These objects have supernatural properties that enhance characters in various ways, from simple +1 weapons to legendary artifacts that can reshape reality. Unlike previous editions, 5e assumes characters don't need magic items to function - they're bonuses rather than necessities. Magic items are categorized by rarity: Common, Uncommon, Rare, Very Rare, and Legendary, with rarer items being more powerful and harder to find.",
  sections: [
    {
      id: "rarity-and-attunement",
      title: "Rarity and Attunement",
      content: `<h3>Magic Item Rarity</h3>
<p>Magic items are assigned a rarity that suggests their relative power and availability:</p>
<table>
<thead>
<tr><th>Rarity</th><th>Character Level</th><th>Example Value</th><th>Examples</th></tr>
</thead>
<tbody>
<tr><td>Common</td><td>1st or higher</td><td>50-100 gp</td><td>Potion of Healing</td></tr>
<tr><td>Uncommon</td><td>1st or higher</td><td>101-500 gp</td><td>Bag of Holding, +1 Weapon</td></tr>
<tr><td>Rare</td><td>5th or higher</td><td>501-5,000 gp</td><td>+2 Weapon, Cloak of Displacement</td></tr>
<tr><td>Very Rare</td><td>11th or higher</td><td>5,001-50,000 gp</td><td>+3 Weapon, Potion of Supreme Healing</td></tr>
<tr><td>Legendary</td><td>17th or higher</td><td>50,001+ gp</td><td>Deck of Many Things, Vorpal Sword</td></tr>
</tbody>
</table>

<h3>Attunement</h3>
<p>Some magic items require attunement. A creature can be attuned to no more than three magic items at a time. To attune to an item, you must spend a short rest focused on only that item while being in physical contact with it. This can't be the same short rest used to learn the item's properties. If the short rest is interrupted, the attunement attempt fails.</p>
<p>An item can be attuned to only one creature at a time, and a creature can't attune to more than one copy of an item. A creature's attunement to an item ends if the creature no longer satisfies the prerequisites for attunement, if the item has been more than 100 feet away for at least 24 hours, if the creature dies, or if another creature attunes to the item.</p>`
    },
    {
      id: "wearing-and-wielding",
      title: "Wearing and Wielding Items",
      content: `<p>Using a magic item's properties might require you to wear or wield it. A magic item meant to be worn must be donned in the intended fashion: boots go on the feet, gloves on the hands, hats and helmets on the head, and rings on the finger. Magic armor must be donned, a shield strapped to the arm, and a cloak fastened about the shoulders. A weapon must be held.</p>
<p>In most cases, a magic item that's meant to be worn can fit a creature regardless of size or build. Magic garments are made to be easily adjustable, or they magically adjust themselves to the wearer.</p>
<p><strong>Multiple Items of the Same Kind:</strong> You can't wear more than one pair of footwear, one pair of gloves or gauntlets, one pair of bracers, one suit of armor, one item of headwear, or one cloak. You can, however, wear one ring on each hand.</p>`
    },
    {
      id: "magic-item-categories",
      title: "Magic Item Categories",
      content: `<h3>Armor</h3>
<p>Magic armor includes +1, +2, and +3 versions of all standard armor types. The bonus applies to AC. Some armor has special properties beyond the AC bonus.</p>

<h3>Weapons</h3>
<p>Magic weapons include +1, +2, and +3 versions that add their bonus to attack and damage rolls. Many magic weapons have additional properties like dealing extra damage types or granting special attacks.</p>

<h3>Potions</h3>
<p>Potions are magical liquids that produce their effect when imbibed. Drinking a potion or administering one to another character requires an action. Potions are consumable items that disappear after use.</p>

<h3>Scrolls</h3>
<p>Spell scrolls contain a single spell that can be cast once without expending a spell slot. The spell's level and DC are determined when the scroll is created. After the spell is cast, the scroll disintegrates.</p>

<h3>Wands, Rods, and Staffs</h3>
<p>These items contain spells or magical effects. Wands typically have limited charges, rods provide constant benefits or activated powers, and staffs combine weapon properties with spell storage.</p>

<h3>Rings</h3>
<p>Magic rings offer a wide variety of effects. You can wear one magic ring on each hand. Some rings require attunement.</p>

<h3>Wondrous Items</h3>
<p>This catch-all category includes all magic items that don't fit into other categories. Examples include bags of holding, cloaks of protection, and decks of many things.</p>`
    },
    {
      id: "identifying-magic-items",
      title: "Identifying Magic Items",
      content: `<p>Some magic items are indistinguishable from their nonmagical counterparts, whereas other magic items display their magical nature conspicuously. Handling a magic item is enough to give a character a sense that something is extraordinary about the item, but learning its properties requires more investigation.</p>
<p><strong>Identify Spell:</strong> The identify spell reveals an item's properties instantly.</p>
<p><strong>Short Rest Focus:</strong> Alternatively, a character can focus on one magic item during a short rest, while being in physical contact with the item. At the end of the rest, the character learns the item's properties, as well as how to use them. Potions are an exception; a little taste is enough to tell the taster what the potion does.</p>
<p><strong>Cursed Items:</strong> The identify spell doesn't reveal whether an item is cursed. Most methods of identifying items fail to reveal a curse, and a curse affects its bearer only after they attune to the cursed item.</p>`
    },
    {
      id: "common-magic-items",
      title: "Common Magic Items Examples",
      content: `<table>
<thead>
<tr><th>Item</th><th>Rarity</th><th>Attunement</th><th>Effect</th></tr>
</thead>
<tbody>
<tr><td>Potion of Healing</td><td>Common</td><td>No</td><td>Regain 2d4+2 HP</td></tr>
<tr><td>Potion of Climbing</td><td>Common</td><td>No</td><td>Gain climbing speed for 1 hour</td></tr>
<tr><td>Potion of Animal Friendship</td><td>Common</td><td>No</td><td>Cast Animal Friendship for 1 hour</td></tr>
<tr><td>Spell Scroll (Cantrip)</td><td>Common</td><td>No</td><td>Cast one cantrip from the scroll</td></tr>
<tr><td>Ammunition +1</td><td>Uncommon</td><td>No</td><td>+1 to attack and damage, breaks after use</td></tr>
</tbody>
</table>`
    },
    {
      id: "uncommon-magic-items",
      title: "Uncommon Magic Items Examples",
      content: `<table>
<thead>
<tr><th>Item</th><th>Rarity</th><th>Attunement</th><th>Effect</th></tr>
</thead>
<tbody>
<tr><td>Bag of Holding</td><td>Uncommon</td><td>No</td><td>Holds 500 lbs in 64 cubic feet</td></tr>
<tr><td>Cloak of Protection</td><td>Uncommon</td><td>Yes</td><td>+1 AC and saving throws</td></tr>
<tr><td>Weapon +1</td><td>Uncommon</td><td>No</td><td>+1 to attack and damage rolls</td></tr>
<tr><td>Armor +1</td><td>Uncommon</td><td>No</td><td>+1 to AC</td></tr>
<tr><td>Boots of Elvenkind</td><td>Uncommon</td><td>No</td><td>Advantage on Stealth (sound)</td></tr>
<tr><td>Gauntlets of Ogre Power</td><td>Uncommon</td><td>Yes</td><td>Strength becomes 19</td></tr>
<tr><td>Ring of Protection</td><td>Uncommon</td><td>Yes</td><td>+1 AC and saving throws</td></tr>
</tbody>
</table>`
    },
    {
      id: "rare-and-above",
      title: "Rare and Higher Magic Items",
      content: `<table>
<thead>
<tr><th>Item</th><th>Rarity</th><th>Attunement</th><th>Effect</th></tr>
</thead>
<tbody>
<tr><td>Cloak of Displacement</td><td>Rare</td><td>Yes</td><td>Attackers have disadvantage until you're hit</td></tr>
<tr><td>Weapon +2</td><td>Rare</td><td>No</td><td>+2 to attack and damage rolls</td></tr>
<tr><td>Armor +2</td><td>Rare</td><td>No</td><td>+2 to AC</td></tr>
<tr><td>Ring of Spell Storing</td><td>Rare</td><td>Yes</td><td>Store up to 5 levels of spells</td></tr>
<tr><td>Weapon +3</td><td>Very Rare</td><td>No</td><td>+3 to attack and damage rolls</td></tr>
<tr><td>Armor +3</td><td>Very Rare</td><td>No</td><td>+3 to AC</td></tr>
<tr><td>Ring of Three Wishes</td><td>Legendary</td><td>No</td><td>Grant three wishes</td></tr>
<tr><td>Deck of Many Things</td><td>Legendary</td><td>No</td><td>Draw cards with powerful effects</td></tr>
<tr><td>Vorpal Sword</td><td>Legendary</td><td>Yes</td><td>+3 weapon, decapitate on nat 20</td></tr>
</tbody>
</table>`
    }
  ],
  searchVolume: 16310
};
