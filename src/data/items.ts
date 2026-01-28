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
  },
  {
    slug: "longsword-5e",
    name: "Longsword",
    category: "equipment",
    itemType: "Weapon",
    cost: "15 gp",
    weight: "3 lbs",
    description: "The longsword is one of the most iconic and versatile weapons in D&D, favored by fighters, paladins, and other martial warriors. This double-edged blade typically measures about 3 to 4 feet in length with a cruciform hilt. The longsword can be wielded effectively with one or two hands, making it adaptable to different combat situations and allowing the wielder to pair it with a shield or maximize damage output.",
    mechanics: "Damage: 1d8 slashing (one-handed) or 1d10 slashing (two-handed). Melee weapon attack using Strength modifier. Range: 5 feet (reach). The Versatile property allows you to choose between wielding it one-handed (1d8) or two-handed (1d10) on each attack. When wielding one-handed, you can use a shield or keep a hand free for other purposes.",
    properties: ["Martial Melee Weapon", "Versatile (1d10)"],
    commonMistakes: [
      "Forgetting you can switch between one-handed and two-handed grips as part of your attack action",
      "Thinking the longsword has reach beyond 5 feet (it doesn't)",
      "Not realizing the versatile damage only applies when using two hands (can't use a shield)",
      "Assuming all characters are proficient with longswords (it's a martial weapon)",
      "Forgetting that elves get longsword proficiency from their racial traits"
    ],
    dmTips: [
      "The longsword is the quintessential knight's weapon - perfect for heroic characters",
      "The versatile property creates interesting tactical choices between defense (shield) and offense (2h)",
      "Consider iconic magical longswords as major campaign rewards (Flame Tongue, Frost Brand)",
      "Many published adventures feature magic longswords as they're universally useful",
      "The 15 gp cost makes it affordable for starting martial characters",
      "Great for NPCs like guards, knights, and soldiers"
    ],
    searchVolume: 18240
  },
  {
    slug: "greatsword-5e",
    name: "Greatsword",
    category: "equipment",
    itemType: "Weapon",
    cost: "50 gp",
    weight: "6 lbs",
    description: "The greatsword is a massive two-handed blade measuring 5 to 6 feet in length. This weapon epitomizes raw martial power, dealing the highest consistent damage of any non-exotic weapon in D&D 5e. Warriors who wield greatswords sacrifice the protection of a shield for devastating offensive capability. The weapon's great length and weight require both hands to wield effectively, but the payoff is exceptional damage output.",
    mechanics: "Damage: 2d6 slashing. Melee weapon attack using Strength modifier. Range: 5 feet (reach). This weapon requires two hands to use (you cannot use a shield with it). The Heavy property means Small creatures have disadvantage on attack rolls with this weapon. The 2d6 damage is more consistent than the greataxe's 1d12, averaging 7 damage compared to 6.5.",
    properties: ["Martial Melee Weapon", "Heavy", "Two-Handed"],
    commonMistakes: [
      "Small creatures trying to use this weapon effectively (they have disadvantage on attacks)",
      "Forgetting you can't use a shield while wielding a greatsword",
      "Not utilizing the Great Weapon Fighting style to reroll 1s and 2s on damage dice",
      "Assuming the greatsword deals more damage than the greataxe (it's more consistent, not higher)",
      "Thinking you can sheathe and draw a greatsword as a free action (drawing requires an action or object interaction)"
    ],
    dmTips: [
      "Perfect weapon for Strength-based damage dealers like Barbarians and Fighters",
      "The 2d6 damage pairs exceptionally well with the Great Weapon Master feat",
      "Barbarian's Brutal Critical and Half-Orc's Savage Attacks benefit more from the greataxe's d12",
      "Consider describing the weight and power of greatsword strikes for cinematic effect",
      "The 50 gp cost makes it a significant early investment but very affordable at mid-levels",
      "Great Weapon Fighting style adds about 1.33 damage per attack with this weapon"
    ],
    searchVolume: 12950
  },
  {
    slug: "rapier-5e",
    name: "Rapier",
    category: "equipment",
    itemType: "Weapon",
    cost: "25 gp",
    weight: "2 lbs",
    description: "The rapier is an elegant thrusting sword with a slender, sharply pointed blade typically 3 to 4 feet long. This weapon is the highest-damaging finesse weapon available in standard D&D 5e, making it the preferred choice for Dexterity-based martial characters like rogues, swashbuckling fighters, and dexterous rangers. The rapier's design emphasizes precision and technique over brute force, allowing skilled duelists to exploit enemy weaknesses.",
    mechanics: "Damage: 1d8 piercing. Melee weapon attack using Strength OR Dexterity modifier (your choice). Range: 5 feet (reach). The Finesse property allows you to use your Dexterity modifier instead of Strength for attack and damage rolls, making it ideal for characters with high Dexterity. This is the only finesse weapon that deals 1d8 damage without requiring two hands or being a monk weapon.",
    properties: ["Martial Melee Weapon", "Finesse"],
    commonMistakes: [
      "Forgetting the rapier lacks the Light property (you need the Dual Wielder feat to two-weapon fight with it)",
      "Thinking the rapier is a slashing weapon (it's piercing damage only)",
      "Not realizing this is the best weapon for Sneak Attack damage for rogues",
      "Assuming you must use Dexterity (you can choose Strength if it's higher)",
      "Thinking the rapier has reach or special defensive properties beyond finesse"
    ],
    dmTips: [
      "The rapier is THE weapon for optimized Dexterity builds - especially rogues",
      "Perfect for swashbuckler and duelist character archetypes",
      "Consider offering magical rapiers with additional properties for finesse characters",
      "The 25 gp cost makes it accessible but not trivial for starting characters",
      "Works exceptionally well with the Dueling fighting style (+2 damage when wielding in one hand)",
      "Describe the elegant, precise nature of rapier combat for narrative flair",
      "Rogues should almost always prefer rapiers over shortswords for Sneak Attack"
    ],
    searchVolume: 15670
  },
  {
    slug: "shortsword-5e",
    name: "Shortsword",
    category: "equipment",
    itemType: "Weapon",
    cost: "10 gp",
    weight: "2 lbs",
    description: "The shortsword is a short-bladed martial weapon approximately 2 feet long, designed for quick, agile combat. Unlike its larger cousin the longsword, the shortsword excels in close-quarters fighting and dual-wielding scenarios. This weapon is favored by rogues, rangers, and other warriors who value speed and versatility. The shortsword's Light property makes it ideal for two-weapon fighting, while its Finesse property allows Dexterity-based characters to use it effectively.",
    mechanics: "Damage: 1d6 piercing. Melee weapon attack using Strength OR Dexterity modifier (your choice). Range: 5 feet (reach). The Finesse property lets you use Dexterity instead of Strength for attack and damage rolls. The Light property allows you to engage in two-weapon fighting, attacking with a second shortsword (or other light weapon) as a bonus action without needing a feat.",
    properties: ["Martial Melee Weapon", "Finesse", "Light"],
    commonMistakes: [
      "Forgetting that two-weapon fighting with shortswords doesn't add your ability modifier to the bonus action attack damage (unless you have the Two-Weapon Fighting style)",
      "Not realizing shortswords are martial weapons (rogues and rangers are proficient, but many classes aren't)",
      "Thinking shortswords are better than rapiers for single-weapon rogues (rapier deals 1d8)",
      "Assuming drawing two shortswords at once is free (requires Dual Wielder feat or two separate actions)",
      "Using two shortswords but forgetting you can't use a shield"
    ],
    dmTips: [
      "Shortswords are the iconic dual-wielding weapon for Dexterity builds",
      "Perfect for Two-Weapon Fighting style rangers and rogues",
      "The 10 gp cost makes dual-wielding affordable at low levels (20 gp for two)",
      "Consider offering matched pairs of magical shortswords as loot",
      "Rangers with Two-Weapon Fighting style add their Dex mod to bonus action attacks",
      "Single-weapon rogues should prefer rapiers (1d8) over shortswords (1d6) for Sneak Attack",
      "Great for pirates, scouts, and agile fighter NPCs"
    ],
    searchVolume: 9820
  },
  {
    slug: "greataxe-5e",
    name: "Greataxe",
    category: "equipment",
    itemType: "Weapon",
    cost: "30 gp",
    weight: "7 lbs",
    description: "The greataxe is a massive, brutal two-handed weapon with a wide, heavy axe blade mounted on a sturdy haft. This weapon embodies raw destructive power and is the signature weapon of barbarians and other warriors who favor devastating single strikes. While it deals slightly less consistent damage than the greatsword, the greataxe's d12 damage die makes it superior for characters with features that add extra damage dice on critical hits.",
    mechanics: "Damage: 1d12 slashing. Melee weapon attack using Strength modifier. Range: 5 feet (reach). This weapon requires two hands to use (you cannot use a shield with it). The Heavy property means Small creatures have disadvantage on attack rolls with this weapon. Rolling a single d12 gives you a chance at maximum damage of 12 on each hit, though it's less consistent than the greatsword's 2d6.",
    properties: ["Martial Melee Weapon", "Heavy", "Two-Handed"],
    commonMistakes: [
      "Not realizing the greataxe is better than greatsword for Barbarians (Brutal Critical adds extra d12s)",
      "Forgetting Small creatures have disadvantage with Heavy weapons",
      "Thinking the greataxe deals more average damage than greatsword (it deals slightly less: 6.5 vs 7)",
      "Not understanding that Half-Orc's Savage Attacks benefits more from d12 weapons",
      "Assuming you can use Great Weapon Fighting style to reroll the damage (you can, it's just one die)"
    ],
    dmTips: [
      "The greataxe is THE weapon for critical-focused builds (Barbarian, Half-Orc)",
      "Barbarian's Brutal Critical at level 9+ adds an extra d12 on crits (massive damage spike)",
      "Half-Orc's Savage Attacks adds an extra weapon die on crits (another d12)",
      "The 30 gp cost is 20 gp cheaper than a greatsword, making it more accessible",
      "Perfect for berserkers, orcs, and brutish warrior NPCs",
      "Consider magical greataxes with on-crit effects to emphasize the crit-fishing playstyle",
      "Great Weapon Master feat pairs excellently with this weapon's high damage die"
    ],
    searchVolume: 8760
  },
  {
    slug: "handaxe-5e",
    name: "Handaxe",
    category: "equipment",
    itemType: "Weapon",
    cost: "5 gp",
    weight: "2 lbs",
    description: "The handaxe is a versatile one-handed weapon with a short handle and a curved blade, designed for both melee combat and throwing. Unlike most simple weapons, the handaxe offers respectable damage (1d6) while maintaining the Light and Thrown properties. This makes it an excellent choice for barbarians, fighters, and rangers who want both melee and ranged options without investing in martial weapon proficiency or archery tactics.",
    mechanics: "Damage: 1d6 slashing. Melee weapon attack using Strength modifier. Range: 5 feet melee, or 20/60 feet thrown. Simple melee weapon with the Light and Thrown properties. The Light property allows two-weapon fighting as a bonus action. When thrown, it uses your Strength modifier for attack and damage rolls. After throwing, the weapon lands in the target's space and must be retrieved.",
    properties: ["Simple Melee Weapon", "Light", "Thrown (20/60)"],
    commonMistakes: [
      "Forgetting you need a free hand to draw another handaxe after throwing one",
      "Not realizing you need the Dual Wielder feat to draw two weapons in one turn",
      "Thinking you add your ability modifier to bonus action two-weapon fighting attacks (you don't, unless you have the Two-Weapon Fighting style)",
      "Assuming you can throw two handaxes in one turn without the proper setup",
      "Not tracking how many handaxes you're carrying for throwing purposes"
    ],
    dmTips: [
      "Handaxes are excellent for Strength-based characters who want ranged options",
      "The 5 gp cost makes it affordable to carry multiple for throwing",
      "Perfect for barbarians who can't or won't use bows",
      "Dwarven and barbarian NPCs often carry handaxes as signature weapons",
      "The combination of Light and Thrown makes this uniquely versatile for simple weapons",
      "Consider handaxe-throwing contests as tavern minigames or skill challenges",
      "At higher levels, +1 handaxes become very valuable for thrown weapon builds"
    ],
    searchVolume: 7240
  },
  {
    slug: "dagger-5e",
    name: "Dagger",
    category: "equipment",
    itemType: "Weapon",
    cost: "2 gp",
    weight: "1 lb",
    description: "The dagger is one of the most versatile and universally accessible weapons in D&D 5e. This simple weapon features a short blade, typically 6-12 inches long, designed for both stabbing and throwing. The dagger's unique combination of Finesse, Light, and Thrown properties makes it useful for virtually any character build. From rogues to wizards, from barbarians to clerics, almost every adventurer carries at least one dagger as a backup weapon or tool.",
    mechanics: "Damage: 1d4 piercing. Melee or ranged weapon attack using Strength OR Dexterity modifier (your choice). Range: 5 feet melee, or 20/60 feet thrown. The Finesse property allows you to use Dexterity instead of Strength. The Light property enables two-weapon fighting. The Thrown property allows ranged attacks using the same ability modifier as melee. Virtually all characters are proficient with daggers.",
    properties: ["Simple Melee Weapon", "Finesse", "Light", "Thrown (20/60)"],
    commonMistakes: [
      "Not realizing daggers can use Dexterity for throwing (unlike most thrown weapons)",
      "Forgetting that daggers count as melee weapons for Sneak Attack even when thrown",
      "Thinking you can throw two daggers as an Attack action (you can attack with one, then throw another as a bonus action with two-weapon fighting)",
      "Not tracking how many daggers you're carrying when using them as thrown weapons",
      "Assuming the dagger's low damage makes it useless (it's about versatility, not damage)"
    ],
    dmTips: [
      "Daggers are perfect backup weapons for spellcasters with minimal weapon proficiency",
      "The 2 gp cost and 1 lb weight make them easy to carry multiple",
      "Excellent for concealed weapons, surprise attacks, and assassination plots",
      "Rogues can deliver Sneak Attack with thrown daggers from range",
      "Consider daggers as tools (cutting rope, prying open containers, etc.)",
      "Silver or magical daggers are classic treasure items useful for any party",
      "Perfect weapon for commoners, assassins, spies, and roguish NPCs",
      "The dagger is likely the most commonly-found weapon in the world"
    ],
    searchVolume: 11340
  },
  {
    slug: "longbow-5e",
    name: "Longbow",
    category: "equipment",
    itemType: "Weapon",
    cost: "50 gp",
    weight: "2 lbs",
    description: "The longbow is a tall, powerful bow standing roughly 5 to 6 feet in height, representing the pinnacle of medieval archery. This martial ranged weapon is the primary choice for serious archers, offering the longest range of any standard weapon in D&D 5e. The longbow's exceptional range (150/600 feet) allows archers to strike enemies from extreme distances, often eliminating threats before melee combat begins. Rangers, fighters, and rogues with martial proficiency favor this weapon.",
    mechanics: "Damage: 1d8 piercing. Ranged weapon attack using Dexterity modifier. Range: 150/600 feet (normal range 150 feet, long range with disadvantage up to 600 feet). This weapon requires two hands to use and ammunition to fire. Drawing ammunition is part of the attack action. The Heavy property means Small creatures have disadvantage on attack rolls with this weapon. The Ammunition property requires arrows, which cost 1 gp for 20 arrows.",
    properties: ["Martial Ranged Weapon", "Ammunition (range 150/600)", "Heavy", "Two-Handed"],
    commonMistakes: [
      "Forgetting that Small creatures (halflings, gnomes) have disadvantage with Heavy weapons",
      "Not tracking ammunition (though most DMs don't enforce this strictly)",
      "Thinking you can use a longbow while holding something in your other hand (it requires two hands to use)",
      "Assuming you can make opportunity attacks with a longbow (opportunity attacks are melee only)",
      "Not realizing the longbow has the longest range of any standard weapon in the game"
    ],
    dmTips: [
      "The longbow is the gold standard for optimized archer builds",
      "Sharpshooter feat turns this weapon into a devastating damage dealer",
      "The 150-foot normal range means no disadvantage on most combat encounters",
      "Perfect for rangers, fighter archers, and ranged rogues",
      "The 50 gp cost makes it a significant but achievable early purchase",
      "Elves get longbow proficiency from their racial traits",
      "Consider magical longbows as iconic rewards (+1 Longbow, Oathbow, etc.)",
      "The weight of only 2 lbs makes it easy to carry despite requiring two hands to use"
    ],
    searchVolume: 10980
  },
  {
    slug: "shortbow-5e",
    name: "Shortbow",
    category: "equipment",
    itemType: "Weapon",
    cost: "25 gp",
    weight: "2 lbs",
    description: "The shortbow is a compact bow measuring 3 to 4 feet in length, designed for mobility and ease of use. As a simple ranged weapon, it's accessible to a much wider range of characters than the longbow, including rogues, monks, druids, and other classes without martial weapon proficiency. While it has shorter range and lower damage potential than the longbow, the shortbow's simple weapon classification and lack of the Heavy property make it the ranged weapon of choice for many adventurers.",
    mechanics: "Damage: 1d6 piercing. Ranged weapon attack using Dexterity modifier. Range: 80/320 feet (normal range 80 feet, long range with disadvantage up to 320 feet). This weapon requires two hands to use and ammunition to fire. Drawing ammunition is part of the attack action. Unlike the longbow, the shortbow lacks the Heavy property, meaning Small creatures can use it effectively without disadvantage. Arrows cost 1 gp for 20.",
    properties: ["Simple Ranged Weapon", "Ammunition (range 80/320)", "Two-Handed"],
    commonMistakes: [
      "Not realizing the shortbow is a simple weapon (rogues, druids, and monks are proficient)",
      "Thinking the shortbow has the same range as the longbow (it's 80/320, not 150/600)",
      "Forgetting that even Small creatures can use shortbows effectively (no Heavy property)",
      "Assuming the damage difference (1d6 vs 1d8) makes shortbows inferior for all builds",
      "Not considering that many classes lack longbow proficiency"
    ],
    dmTips: [
      "Perfect ranged option for rogues who lack martial weapon proficiency",
      "The 25 gp cost makes it half the price of a longbow and accessible at level 1",
      "Excellent for Small race archers (halflings, gnomes) who would have disadvantage with longbows",
      "The 1d6 damage is sufficient for Sneak Attack delivery - damage die matters less than hitting",
      "Consider shortbows for NPC scouts, bandits, and tribal warriors",
      "Monks can use shortbows effectively as a ranged option",
      "The 80-foot range is sufficient for most dungeon and indoor encounters",
      "Druids and other nature-themed characters often prefer shortbows thematically"
    ],
    searchVolume: 6420
  },
  {
    slug: "hand-crossbow-5e",
    name: "Hand Crossbow",
    category: "equipment",
    itemType: "Weapon",
    cost: "75 gp",
    weight: "3 lbs",
    description: "The hand crossbow is a small, one-handed crossbow that can be held and fired with a single hand. Despite its size, it maintains respectable stopping power with 1d6 piercing damage. This martial ranged weapon is unique for having the Light property, which opens up interesting build options when combined with the Crossbow Expert feat. The hand crossbow represents precision engineering and is often favored by rogues, rangers, and tactical fighters who value mobility and attack frequency.",
    mechanics: "Damage: 1d6 piercing. Ranged weapon attack using Dexterity modifier. Range: 30/120 feet (normal range 30 feet, long range with disadvantage up to 120 feet). The Light property is unusual for a ranged weapon. The Loading property means you can fire only one piece of ammunition when you use an action, bonus action, or reaction to fire this weapon, regardless of the number of attacks you can make - unless you have the Crossbow Expert feat, which ignores the loading property. Requires bolts for ammunition.",
    properties: ["Martial Ranged Weapon", "Ammunition (range 30/120)", "Light", "Loading"],
    commonMistakes: [
      "Forgetting the Loading property prevents multiple attacks per turn (Extra Attack doesn't work without Crossbow Expert feat)",
      "Not realizing you need a free hand to load the crossbow (even with ammunition drawn automatically)",
      "Thinking Light property allows two-weapon fighting with hand crossbows (you need Crossbow Expert feat to ignore Loading)",
      "Assuming hand crossbows are better than other ranged weapons for most builds (they're not without Crossbow Expert)",
      "Not understanding that Crossbow Expert feat makes hand crossbows extremely powerful"
    ],
    dmTips: [
      "Hand crossbows are mediocre without Crossbow Expert feat, exceptional with it",
      "Crossbow Expert + hand crossbow allows bonus action attacks, making this the highest DPR ranged build",
      "The 75 gp cost is the most expensive standard weapon, making it a significant investment",
      "Perfect for rogues with Crossbow Expert who want to maximize attacks per turn",
      "The 30-foot normal range is quite short - positioning matters more with this weapon",
      "Great for spy, assassin, or urban rogue NPCs",
      "Consider the build implications before allowing easy access to Crossbow Expert feat",
      "The Loading property means this weapon is nearly useless for characters with Extra Attack unless they have Crossbow Expert"
    ],
    searchVolume: 8950
  },
  {
    slug: "heavy-crossbow-5e",
    name: "Heavy Crossbow",
    category: "equipment",
    itemType: "Weapon",
    cost: "50 gp",
    weight: "18 lbs",
    description: "The heavy crossbow is a powerful mechanical weapon that launches heavy bolts with tremendous force. This large, unwieldy crossbow deals the highest damage of any standard ranged weapon (1d10), but requires significant strength to wield and time to reload. The heavy crossbow is favored by characters who value raw damage over attack frequency, making it ideal for single-shot sniper builds or for characters without Extra Attack who want to maximize damage per attack.",
    mechanics: "Damage: 1d10 piercing. Ranged weapon attack using Dexterity modifier. Range: 100/400 feet (normal range 100 feet, long range with disadvantage up to 400 feet). This weapon requires two hands to use and ammunition (bolts) to fire. The Loading property means you can fire only one piece of ammunition when you use an action, bonus action, or reaction to fire this weapon, regardless of the number of attacks you can make. The Heavy property means Small creatures have disadvantage on attack rolls with this weapon.",
    properties: ["Martial Ranged Weapon", "Ammunition (range 100/400)", "Heavy", "Loading", "Two-Handed"],
    commonMistakes: [
      "Forgetting the Loading property prevents using Extra Attack effectively (you can only fire once per turn)",
      "Not realizing Small creatures have disadvantage with Heavy weapons",
      "Thinking the heavy crossbow is better than longbow for characters with Extra Attack (it's usually not due to Loading)",
      "Assuming you can reload and fire multiple times with Action Surge (Loading limits you to one shot per action)",
      "Not understanding that Crossbow Expert feat removes the Loading restriction"
    ],
    dmTips: [
      "Heavy crossbows are best for characters without Extra Attack (rogues, single-attack clerics)",
      "The 1d10 damage makes it excellent for delivering Sneak Attack for rogues",
      "Sharpshooter feat pairs well with the high base damage",
      "The 50 gp cost and 18 lb weight make it a significant investment",
      "Perfect for guards, snipers, and defensive positions in adventures",
      "Crossbow Expert feat makes this weapon viable for Extra Attack users",
      "The Loading property is often overlooked - enforce it to balance ranged combat",
      "Consider heavy crossbows for siege weapons or mounted defenses thematically"
    ],
    searchVolume: 5820
  },
  {
    slug: "shield-5e",
    name: "Shield",
    category: "equipment",
    itemType: "Armor",
    cost: "5 gp",
    weight: "6 lbs",
    description: "A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2, making it one of the most efficient defensive options in D&D 5e. Shields represent a simple but effective defensive tool that has been used throughout history. Whether a small buckler or a large kite shield, mechanically all shields provide the same +2 AC bonus. The shield occupies one hand, preventing the use of two-handed weapons or dual-wielding, but the defensive benefit is substantial.",
    mechanics: "Armor Class: +2 bonus to AC. Donning a shield takes an action. Doffing a shield takes an action. You can benefit from only one shield at a time. Using a shield requires one hand, preventing you from wielding two-handed weapons or using two-weapon fighting (unless you have the Dual Wielder feat). You must be proficient with shields to gain the AC bonus; wearing a shield without proficiency gives you disadvantage on any ability check, saving throw, or attack roll that involves Strength or Dexterity, and prevents you from casting spells.",
    properties: ["Shield", "+2 AC"],
    commonMistakes: [
      "Forgetting that donning or doffing a shield requires an action (not free)",
      "Thinking you can use a shield with two-handed weapons (you can't)",
      "Not realizing you can cast spells with somatic components while holding a shield (if you're proficient and it's your spellcasting focus or the other hand is free)",
      "Assuming all characters are proficient with shields (wizards, sorcerers, rogues, monks typically aren't)",
      "Forgetting that shields prevent two-weapon fighting unless you have Dual Wielder feat"
    ],
    dmTips: [
      "The +2 AC from shields is mathematically equivalent to roughly 25% more durability",
      "Shields are essential for front-line defensive characters (paladins, clerics, sword-and-board fighters)",
      "The 5 gp cost makes shields extremely affordable and accessible",
      "Consider magical shields (+1, +2, +3) or shields with special properties as rewards",
      "Animated Shield is a fun magic item that allows shield bonus without occupying a hand",
      "Shield spell reaction can stack with physical shield for incredible burst defense",
      "NPCs with shields are noticeably harder to hit - use them for elite guards and knights",
      "The 6 lb weight is negligible for most characters"
    ],
    searchVolume: 8640
  },
  {
    slug: "chain-mail-5e",
    name: "Chain Mail",
    category: "equipment",
    itemType: "Armor",
    cost: "75 gp",
    weight: "55 lbs",
    description: "Chain mail consists of interlocking metal rings forming a protective suit. This heavy armor includes a layer of quilted fabric worn underneath the chain to prevent chafing and to cushion the impact of blows. The suit includes gauntlets. Chain mail is the entry-level heavy armor for warriors who can meet the Strength requirement, offering solid protection at a more accessible price point than splint or plate armor. It's commonly worn by soldiers, knights, and front-line fighters.",
    mechanics: "Armor Class: 16. Heavy armor doesn't let you add your Dexterity modifier to your AC. You can don chain mail in 10 minutes and doff it in 5 minutes. Donning with help reduces time by half. Strength Requirement: 13 (if you don't meet this, your speed is reduced by 10 feet). Stealth Disadvantage: You have disadvantage on Dexterity (Stealth) checks while wearing this armor. Wearing armor without proficiency imposes disadvantage on ability checks, saving throws, and attack rolls involving Strength or Dexterity, and prevents spellcasting.",
    properties: ["Heavy Armor", "Stealth Disadvantage"],
    commonMistakes: [
      "Forgetting the Strength 13 requirement (speed is reduced by 10 feet if not met)",
      "Not applying disadvantage on Stealth checks in all situations",
      "Thinking you add Dexterity modifier to AC (you don't with heavy armor)",
      "Assuming you can remove the stealth penalty with expertise or proficiency (you can't)",
      "Not accounting for the 55 lb weight when calculating encumbrance",
      "Forgetting it takes 10 minutes to don (you can't quickly put on heavy armor)"
    ],
    dmTips: [
      "Chain mail is the standard armor for level 1 heavy armor users (clerics, fighters, paladins)",
      "Many starting equipment packages include chain mail for appropriate classes",
      "The 75 gp cost is expensive but achievable for starting characters with class features that grant it",
      "AC 16 is respectable for low to mid levels but becomes less effective at higher levels",
      "The Strength requirement matters for builds that don't prioritize Strength",
      "Stealth disadvantage creates interesting party dynamics during infiltration",
      "Consider describing the distinctive sound of chain mail clinking during tense moments",
      "NPCs in chain mail are clearly armored warriors - good for guards and soldiers"
    ],
    searchVolume: 7230
  },
  {
    slug: "plate-armor-5e",
    name: "Plate Armor",
    category: "equipment",
    itemType: "Armor",
    cost: "1500 gp",
    weight: "65 lbs",
    description: "Plate armor consists of shaped, interlocking metal plates that cover the entire body. This is the best non-magical armor in D&D 5e, providing an exceptional AC of 18. The suit includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath. Donning a suit of plate armor is a time-consuming process requiring assistance. Plate armor is the signature protection of legendary knights, elite paladins, and wealthy warriors. The exceptional cost reflects the masterwork craftsmanship required to create such armor.",
    mechanics: "Armor Class: 18. Heavy armor doesn't let you add your Dexterity modifier to your AC. You can don plate armor in 10 minutes and doff it in 5 minutes. Donning with help reduces time by half. Strength Requirement: 15 (if you don't meet this, your speed is reduced by 10 feet). Stealth Disadvantage: You have disadvantage on Dexterity (Stealth) checks while wearing this armor. Wearing armor without proficiency imposes disadvantage on ability checks, saving throws, and attack rolls involving Strength or Dexterity, and prevents spellcasting.",
    properties: ["Heavy Armor", "Stealth Disadvantage"],
    commonMistakes: [
      "Not realizing plate armor costs 1,500 gp (it's typically not available until mid-levels)",
      "Forgetting the Strength 15 requirement (higher than other heavy armor)",
      "Thinking plate armor makes you invincible (AC 18 is great but not immunity)",
      "Not applying stealth disadvantage in all situations",
      "Forgetting that donning plate takes 10 minutes (you can't quickly equip it)",
      "Assuming plate armor prevents swimming (it's difficult but possible with Athletics checks)"
    ],
    dmTips: [
      "Plate armor is a major milestone reward - make acquiring it feel significant",
      "The 1,500 gp cost typically means characters get this around levels 5-10",
      "AC 18 makes characters very hard to hit - balance encounters accordingly",
      "Consider offering plate armor as loot from a fallen knight or ancient armory",
      "The Strength 15 requirement excludes many builds from using it effectively",
      "Magical plate armor (+1, +2, +3) is legendary treasure",
      "The 65 lb weight matters for characters tracking encumbrance",
      "Plate armor is instantly recognizable - stealth missions become very challenging",
      "NPCs in plate armor are elite enemies - telegraphs threat level to players"
    ],
    searchVolume: 14280
  },
  {
    slug: "half-plate-5e",
    name: "Half Plate",
    category: "equipment",
    itemType: "Armor",
    cost: "750 gp",
    weight: "40 lbs",
    description: "Half plate armor consists of shaped metal plates that cover most of the wearer's body, but leaves the legs protected only by greaves and the arms by vambraces. This medium armor represents a balance between the mobility of light armor and the protection of heavy armor. The suit includes gauntlets. Half plate is the best medium armor available, offering AC 15 + Dexterity modifier (max 2). It's favored by clerics, druids (if metal is allowed), rangers, and other characters who want substantial protection while maintaining some Dexterity benefit.",
    mechanics: "Armor Class: 15 + Dexterity modifier (maximum +2). Medium armor lets you add your Dexterity modifier, up to a maximum of +2, to your AC. You can don half plate in 5 minutes and doff it in 1 minute. Donning with help reduces time by half. No Strength requirement. Stealth Disadvantage: You have disadvantage on Dexterity (Stealth) checks while wearing this armor. Wearing armor without proficiency imposes disadvantage on ability checks, saving throws, and attack rolls involving Strength or Dexterity, and prevents spellcasting.",
    properties: ["Medium Armor", "Stealth Disadvantage"],
    commonMistakes: [
      "Forgetting the +2 maximum on Dexterity modifier (14 Dex gives +2, 16+ Dex also gives only +2)",
      "Not applying stealth disadvantage in all situations",
      "Thinking the 750 gp cost makes this early-game armor (it's usually mid-level)",
      "Not realizing characters with 16+ Dexterity get the same AC from breastplate (which has no stealth disadvantage)",
      "Assuming half plate requires a Strength score (it doesn't, unlike heavy armor)"
    ],
    dmTips: [
      "Half plate is the best armor for medium armor users willing to accept stealth disadvantage",
      "Characters with 14 Dexterity get AC 17 from half plate (same as splint armor)",
      "The 750 gp cost is expensive - typically a level 5-8 upgrade",
      "Breastplate (AC 14 + Dex max 2) has no stealth disadvantage and costs 400 gp - often better choice",
      "Perfect for clerics who want maximum AC without heavy armor proficiency",
      "The 40 lb weight is substantial but manageable",
      "Consider half plate as loot from fallen knights or elite guards",
      "The stealth disadvantage matters less for front-line characters who rarely sneak",
      "NPCs in half plate are professional soldiers or experienced adventurers"
    ],
    searchVolume: 11450
  },
  {
    slug: "chain-shirt-5e",
    name: "Chain Shirt",
    category: "equipment",
    itemType: "Armor",
    cost: "50 gp",
    weight: "20 lbs",
    description: "A chain shirt is made of interlocking metal rings worn between layers of clothing or leather. This medium armor covers the torso and provides solid protection without the bulk of heavier armors. Unlike the heavier chain mail, the chain shirt is lighter and doesn't impose disadvantage on Stealth checks, making it popular among adventurers who need both protection and mobility. It's commonly worn by scouts, rangers, and rogues who have medium armor proficiency.",
    mechanics: "Armor Class: 13 + Dexterity modifier (maximum +2). Medium armor lets you add your Dexterity modifier, up to a maximum of +2, to your AC. You can don a chain shirt in 5 minutes and doff it in 1 minute. Donning with help reduces time by half. No Strength requirement. No disadvantage on Stealth checks.",
    properties: ["Medium Armor"],
    commonMistakes: [
      "Forgetting the +2 maximum on Dexterity modifier (characters with 16+ Dex still only add +2)",
      "Confusing chain shirt with chain mail (chain mail is heavy armor with AC 16 and stealth disadvantage)",
      "Not realizing chain shirt is often inferior to hide armor for high-Dex characters (same AC, hide is cheaper)",
      "Thinking the 50 gp cost is cheap (it's the same as scale mail but with 1 less base AC)",
      "Assuming characters with 16+ Dexterity should use this (studded leather gives AC 17)"
    ],
    dmTips: [
      "Chain shirt is best for characters with exactly 14 Dexterity (gives AC 15)",
      "Hide armor gives the same AC as chain shirt for only 10 gp (huge cost difference)",
      "The lack of stealth disadvantage is the main selling point over scale mail",
      "Perfect for NPCs who need medium armor without stealth penalties",
      "The 20 lb weight is reasonable for most characters",
      "Consider chain shirts as common loot from bandits or guards",
      "Not optimal for min-maxed builds but thematically appropriate for many characters",
      "At 50 gp, it's accessible but often outshined by other medium armor options"
    ],
    searchVolume: 4870
  },
  {
    slug: "breastplate-5e",
    name: "Breastplate",
    category: "equipment",
    itemType: "Armor",
    cost: "400 gp",
    weight: "20 lbs",
    description: "A breastplate is a fitted metal chest piece worn with supple leather. This medium armor provides excellent protection without restricting movement or creating noise. The breastplate is often considered the optimal medium armor choice, offering the same base AC as half plate (14) while avoiding stealth disadvantage and costing less. It's particularly favored by rangers, rogues with medium armor proficiency, and clerics who need to balance protection with stealth capability.",
    mechanics: "Armor Class: 14 + Dexterity modifier (maximum +2). Medium armor lets you add your Dexterity modifier, up to a maximum of +2, to your AC. You can don a breastplate in 5 minutes and doff it in 1 minute. Donning with help reduces time by half. No Strength requirement. No disadvantage on Stealth checks.",
    properties: ["Medium Armor"],
    commonMistakes: [
      "Not realizing breastplate is often better than half plate for stealth-conscious characters",
      "Forgetting the +2 maximum on Dexterity modifier (16+ Dex still only adds +2)",
      "Thinking the 400 gp cost is too expensive (it's a great mid-level investment)",
      "Comparing it unfavorably to half plate without considering the stealth disadvantage tradeoff",
      "Not understanding that characters with 14 Dex get AC 16, same as many heavy armors"
    ],
    dmTips: [
      "Breastplate is arguably the best medium armor for balanced builds",
      "Characters with 14 Dexterity get AC 16 with no stealth disadvantage (excellent value)",
      "The 400 gp cost is substantial but much cheaper than half plate (750 gp)",
      "Perfect for rangers, medium-armor clerics, and skill-focused characters",
      "The 20 lb weight is the same as chain shirt but with +1 base AC",
      "Consider breastplate as a reward for completing mid-level quests",
      "Offers same AC as half plate for characters with 14+ Dex, without stealth disadvantage",
      "NPCs in breastplates are professional adventurers or elite guards",
      "The lack of stealth disadvantage makes this ideal for mixed stealth/combat encounters"
    ],
    searchVolume: 6240
  },
  {
    slug: "hide-armor-5e",
    name: "Hide Armor",
    category: "equipment",
    itemType: "Armor",
    cost: "10 gp",
    weight: "12 lbs",
    description: "Hide armor is made from the thick, tough hide of a large beast or multiple layers of boiled leather. This crude but effective medium armor is often worn by barbarian tribes, druids, and other warriors who live close to nature. While not as refined as metal armors, hide armor provides respectable protection and is often the best armor choice for druids who avoid metal armor. The armor is typically adorned with fur, bones, or tribal decorations.",
    mechanics: "Armor Class: 12 + Dexterity modifier (maximum +2). Medium armor lets you add your Dexterity modifier, up to a maximum of +2, to your AC. You can don hide armor in 5 minutes and doff it in 1 minute. Donning with help reduces time by half. No Strength requirement. No disadvantage on Stealth checks.",
    properties: ["Medium Armor"],
    commonMistakes: [
      "Not realizing hide armor gives the same AC as chain shirt for only 10 gp (1/5 the cost)",
      "Forgetting the +2 maximum on Dexterity modifier",
      "Thinking hide armor is worse than studded leather for high-Dex characters (studded leather is light armor and adds full Dex)",
      "Not considering hide armor for druids who avoid metal (it's often their best option)",
      "Assuming hide armor is only for barbarians (it's the most cost-effective medium armor)"
    ],
    dmTips: [
      "Hide armor is the most cost-effective medium armor at only 10 gp",
      "Perfect for druids who avoid metal armor (check with your table's interpretation)",
      "The 12 lb weight and low cost make it very accessible",
      "Great for tribal NPCs, barbarians, and nature-themed enemies",
      "Characters with 14 Dexterity get AC 14 from hide armor for only 10 gp (excellent value)",
      "Consider describing the source of the hide for flavor (bear, dinosaur, giant boar)",
      "Often overlooked but mathematically equivalent to chain shirt at 1/5 the cost",
      "Thematically appropriate for wilderness campaigns and primitive cultures"
    ],
    searchVolume: 5120
  },
  {
    slug: "ring-mail-5e",
    name: "Ring Mail",
    category: "equipment",
    itemType: "Armor",
    cost: "30 gp",
    weight: "40 lbs",
    description: "Ring mail is crude armor consisting of leather with heavy rings sewn into it. The rings help deflect blows from weapons. This is the weakest and cheapest heavy armor, offering the same AC (14) as many medium armors but without allowing any Dexterity bonus. Ring mail is typically worn by poor soldiers, militiamen, or warriors who can't afford better heavy armor. While it provides heavy armor's benefit of not requiring Dexterity, its low AC and stealth disadvantage make it one of the least popular armor choices.",
    mechanics: "Armor Class: 14. Heavy armor doesn't let you add your Dexterity modifier to your AC. You can don ring mail in 10 minutes and doff it in 5 minutes. Donning with help reduces time by half. No Strength requirement. Stealth Disadvantage: You have disadvantage on Dexterity (Stealth) checks while wearing this armor. Wearing armor without proficiency imposes disadvantage on ability checks, saving throws, and attack rolls involving Strength or Dexterity, and prevents spellcasting.",
    properties: ["Heavy Armor", "Stealth Disadvantage"],
    commonMistakes: [
      "Not realizing ring mail has the same AC as scale mail but without Dex bonus",
      "Thinking ring mail is a good choice for low-level characters (scale mail is usually better)",
      "Forgetting to apply stealth disadvantage",
      "Confusing ring mail with chain mail (chain mail has AC 16)",
      "Not understanding that medium armor is usually superior to ring mail for characters with any Dexterity"
    ],
    dmTips: [
      "Ring mail is generally the worst armor choice in the game - rarely optimal",
      "Only useful for characters with heavy armor proficiency and very low Dexterity (8-9)",
      "The 30 gp cost is cheap but scale mail (50 gp) is almost always a better investment",
      "Perfect for poor soldiers, militiamen, or bandits in your world",
      "The 40 lb weight is substantial",
      "Characters with 12+ Dexterity get better AC from scale mail (14+1=15 vs ring mail's 14)",
      "Consider ring mail as the lowest tier of military equipment in your setting",
      "Rarely appears in treasure hoards because it's not desirable",
      "NPCs in ring mail are low-tier warriors or guards"
    ],
    searchVolume: 3240
  },
  {
    slug: "warhammer-5e",
    name: "Warhammer",
    category: "equipment",
    itemType: "Weapon",
    cost: "15 gp",
    weight: "2 lbs",
    description: "A warhammer is a military one-handed hammer with a metal head featuring a flat striking surface on one side and often a spike or pick on the other. This martial weapon is favored by clerics, especially those devoted to forge or smith deities, as well as dwarven warriors. The warhammer's versatile property allows it to be wielded with one or two hands, making it adaptable for use with a shield or for maximum damage. The bludgeoning damage type is effective against skeletons and other creatures vulnerable to crushing weapons.",
    mechanics: "Damage: 1d8 bludgeoning (one-handed) or 1d10 bludgeoning (two-handed). Melee weapon attack using Strength modifier. Range: 5 feet (reach). The Versatile property allows you to choose between wielding it one-handed (1d8) or two-handed (1d10) on each attack. When wielding one-handed, you can use a shield or keep a hand free for spellcasting or other purposes.",
    properties: ["Martial Melee Weapon", "Versatile (1d10)"],
    commonMistakes: [
      "Forgetting you can switch between one-handed and two-handed grips as part of your attack",
      "Not realizing the warhammer is mechanically identical to the longsword (just deals bludgeoning instead of slashing)",
      "Thinking warhammers automatically deal bonus damage to constructs or undead (they don't in 5e)",
      "Assuming clerics automatically get warhammer proficiency (only certain domains do)",
      "Not taking advantage of bludgeoning damage against skeletons (they're vulnerable in some settings)"
    ],
    dmTips: [
      "Warhammers are thematically perfect for dwarven characters and forge clerics",
      "Mechanically identical to longsword, so balance is well-established",
      "Bludgeoning damage type can be situationally useful against certain enemies",
      "The 15 gp cost and 2 lb weight make it accessible and easy to carry",
      "Consider magical warhammers as rewards for cleric or dwarf PCs (Dwarven Thrower is legendary)",
      "Perfect weapon for NPCs like priests of forge gods, dwarven warriors, and smiths",
      "The versatile property creates tactical choices between defense (shield) and offense (two-handed)",
      "Warhammers are historically associated with holy warriors and religious orders"
    ],
    searchVolume: 7680
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
  },
  {
    slug: "flame-tongue-5e",
    name: "Flame Tongue",
    category: "magic-items",
    rarity: "Rare",
    attunement: true,
    itemType: "Weapon (any sword)",
    description: "A Flame Tongue is a magical sword that can burst into flames at the wielder's command. When activated, the blade is wreathed in fire, shedding bright light and dealing significant extra fire damage. This iconic magic weapon has appeared in D&D lore for decades, representing the classic \"flaming sword\" fantasy. While inactive, the weapon appears as a normal, high-quality sword with subtle flame motifs or runes etched into the blade. The fire springs to life with a mental command, transforming it into a devastating instrument of destruction.",
    mechanics: "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.\n\nThis weapon functions as a magic sword for purposes of overcoming resistance and immunity to nonmagical attacks and damage. The base damage depends on the type of sword (longsword, greatsword, scimitar, etc.).",
    commonMistakes: [
      "Forgetting that activating/deactivating the flames requires a bonus action each time",
      "Not tracking the bright light radius (40 feet bright, 40 feet dim) which can ruin stealth",
      "Thinking the sword is always on fire (it requires activation and deactivates when dropped or sheathed)",
      "Not realizing the +2d6 fire damage is substantial (averages 7 extra damage)",
      "Forgetting that fire damage can ignite flammable objects and interact with environmental effects",
      "Assuming the weapon provides a bonus to hit (it doesn't - just extra damage when activated)"
    ],
    dmTips: [
      "The 2d6 extra fire damage is significant but balanced by requiring attunement and activation",
      "Enemies resistant or immune to fire dramatically reduce this weapon's effectiveness",
      "The bright light can be a drawback in stealth scenarios but useful in darkness",
      "Perfect thematic weapon for paladins, fighters, and martial characters",
      "Consider the environmental implications of carrying a flaming sword (lighting, fire hazards)",
      "The activation/deactivation mechanic adds tactical depth to combat",
      "Typical market value around 5,000-7,000 gp as a rare magic weapon",
      "Works well with Great Weapon Fighting style (can reroll 1s and 2s on the 2d6 fire damage)",
      "Fire damage makes this excellent against trolls and other regenerating creatures",
      "Consider describing the appearance of the flames (color, intensity) for flavor"
    ],
    searchVolume: 8940
  },
  {
    slug: "weapon-plus-1-5e",
    name: "+1 Weapon",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: false,
    itemType: "Weapon (any)",
    description: "A +1 weapon is a masterwork armament imbued with magical enhancement. This represents the most basic tier of magical weapons in D&D 5e, but don't underestimate its value. The +1 bonus applies to both attack rolls and damage rolls, making the wielder measurably more accurate and deadly. Perhaps more importantly, +1 weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks, which becomes crucial against devils, demons, lycanthropes, and many other creatures. The weapon might glow faintly, feel perfectly balanced, or show subtle magical runes.",
    mechanics: "You have a +1 bonus to attack rolls and damage rolls made with this magic weapon. This bonus applies to every attack and damage roll you make with the weapon. Additionally, attacks with this weapon are considered magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n\nThe weapon can be any type: longsword, greatsword, longbow, dagger, etc. The base properties of the weapon remain unchanged (damage die, properties, weight).",
    commonMistakes: [
      "Forgetting the +1 applies to BOTH attack rolls AND damage rolls",
      "Not realizing this overcomes resistance to nonmagical weapons (crucial against many creatures)",
      "Thinking +1 weapons require attunement (they don't)",
      "Underestimating the power of +1 to hit (roughly 5% increased hit chance and access to higher AC enemies)",
      "Not considering that the +1 might be the difference between hitting and missing high AC targets"
    ],
    dmTips: [
      "A +1 weapon is a meaningful but not overpowering magic item for levels 1-5",
      "The +1 bonus increases expected damage by roughly 10-15% depending on AC",
      "Overcoming nonmagical resistance often matters more than the +1 bonus itself",
      "Standard value around 500-1,000 gp as an uncommon magic item",
      "Consider introducing +1 weapons around level 3-5 as first major magic items",
      "Works on any weapon type - perfect for rewarding martial characters' preferred weapons",
      "No attunement requirement makes this valuable for any martial character",
      "Great as loot from defeated champions, found in ancient armories, or purchased in magic shops",
      "Some creatures (werewolves, devils) can only be harmed by magical weapons",
      "The +1 to attack is often more valuable than the +1 to damage at higher levels"
    ],
    searchVolume: 14260
  },
  {
    slug: "weapon-plus-2-5e",
    name: "+2 Weapon",
    category: "magic-items",
    rarity: "Rare",
    attunement: false,
    itemType: "Weapon (any)",
    description: "A +2 weapon is a significantly enhanced magical armament, representing a major step up from the basic +1 enchantment. These weapons are crafted by master artificers or blessed by powerful clerics, embodying considerable magical power. The +2 bonus to both attack and damage rolls makes the wielder substantially more effective in combat. These weapons are often legendary items with names and histories, passed down through generations or recovered from ancient ruins. The weapon might crackle with energy, shine with inner light, or bear elaborate magical inscriptions.",
    mechanics: "You have a +2 bonus to attack rolls and damage rolls made with this magic weapon. This bonus applies to every attack and damage roll you make with the weapon. Additionally, attacks with this weapon are considered magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n\nThe weapon can be any type: longsword, greatsword, longbow, dagger, etc. The base properties of the weapon remain unchanged (damage die, properties, weight).",
    commonMistakes: [
      "Forgetting the +2 applies to BOTH attack rolls AND damage rolls",
      "Thinking +2 weapons require attunement (they don't, unlike many other rare items)",
      "Not appreciating how significant +2 to hit is (roughly 10% increased hit chance)",
      "Treating +2 weapons as common when they should be rare and special",
      "Not giving these weapons narrative significance (they should have history and importance)"
    ],
    dmTips: [
      "A +2 weapon is a significant power boost, appropriate for levels 6-10",
      "The +2 bonus increases expected damage by roughly 20-30% depending on AC and build",
      "Standard value around 2,000-5,000 gp as a rare magic item",
      "These weapons should be memorable rewards with names and backstories",
      "Consider having +2 weapons be quest rewards or major treasure finds",
      "The lack of attunement requirement is very powerful - characters can use multiple +2 items",
      "Perfect for mid-tier bosses and villains to wield",
      "+2 weapons make martial characters competitive with spellcaster power spikes",
      "Consider legendary weapons that grow from +1 to +2 over time through story progression",
      "Some DMs restrict +2 weapons because they're powerful without requiring attunement"
    ],
    searchVolume: 11780
  },
  {
    slug: "shield-plus-1-5e",
    name: "+1 Shield",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: false,
    itemType: "Armor (shield)",
    description: "A +1 shield is a magically enhanced defensive implement that provides even greater protection than a mundane shield. The shield might be adorned with glowing runes, made from enchanted materials, or blessed by divine magic. When wielded, the shield seems to anticipate attacks, positioning itself perfectly to deflect blows. While all shields provide a +2 bonus to AC, a +1 shield increases this to +3 total bonus (+2 base + 1 magical enhancement), representing a significant defensive improvement.",
    mechanics: "While holding this shield, you have a +3 bonus to AC. This is in addition to the shield's normal bonus to AC (+2), for a total of +3 AC. The shield works against all attacks and grants its bonus as long as you're wielding it. You must be proficient with shields to gain this benefit.\n\nDonning or doffing this shield takes an action, just like a normal shield. The shield occupies one hand and prevents the use of two-handed weapons or two-weapon fighting.",
    commonMistakes: [
      "Calculating the bonus as +1 instead of +3 (it's +2 from normal shield + 1 magical = +3 total)",
      "Thinking the +1 shield requires attunement (it doesn't)",
      "Forgetting that donning or doffing the shield still requires an action",
      "Not realizing you still need shield proficiency to use this effectively",
      "Assuming you can use two-handed weapons while benefiting from the shield"
    ],
    dmTips: [
      "A +1 shield increases total AC by 1 compared to a normal shield (from +2 to +3)",
      "This is a simple but effective magic item that never feels wasted",
      "Standard value around 500-1,500 gp as an uncommon magic item",
      "Perfect reward for defensive-minded paladins, clerics, and fighters",
      "The lack of attunement makes this stackable with other defensive items",
      "Consider giving this to tanks who need to survive longer in combat",
      "+1 AC may seem small but it's roughly 5% less chance to be hit",
      "Great for NPCs who need to be hard to hit without complex abilities",
      "Can be combined with magical armor for very high AC builds",
      "Thematically appropriate for knights, paladins, and defensive specialists"
    ],
    searchVolume: 6840
  },
  {
    slug: "armor-plus-1-5e",
    name: "+1 Armor",
    category: "magic-items",
    rarity: "Rare",
    attunement: false,
    itemType: "Armor (any)",
    description: "A suit of +1 armor is magically enhanced to provide superior protection beyond its mundane counterpart. The armor might shimmer with protective enchantments, bear intricate magical runes, or be crafted from special materials like mithral or adamantine enhanced with enchantment magic. While wearing this armor, you're surrounded by an invisible aegis that helps deflect attacks. The armor fits perfectly and feels lighter than normal despite maintaining its protective properties. This is one of the most straightforward and universally useful magic items for any character who wears armor.",
    mechanics: "You have a +1 bonus to AC while you wear this armor. The bonus applies regardless of the armor type (light, medium, or heavy). The armor can be any type: leather, chain mail, plate, etc. The base properties of the armor remain unchanged (Dexterity bonus limits, Strength requirements, stealth disadvantage, weight).\n\nYou must be proficient with the type of armor to gain this benefit. Donning and doffing times remain the same as the base armor type.",
    commonMistakes: [
      "Thinking +1 armor changes the armor's weight or don/doff time (it doesn't)",
      "Assuming +1 armor removes stealth disadvantage if the base armor has it (it doesn't)",
      "Believing +1 armor requires attunement (it doesn't)",
      "Not realizing the +1 bonus applies on top of all other AC calculations",
      "Forgetting you still need proficiency with the armor type to use it effectively"
    ],
    dmTips: [
      "+1 armor is categorized as rare, making it more valuable than +1 weapons (uncommon)",
      "This is one of the most straightforward power boosts for martial characters",
      "Standard value around 1,500-5,000 gp as a rare magic item",
      "Consider introducing +1 armor around levels 5-8 as a major defensive upgrade",
      "The lack of attunement makes this stackable with other AC-boosting items",
      "Perfect reward for front-line tanks who need to survive longer",
      "+1 AC is roughly 5% less chance to be hit - simple but effective",
      "Can combine with +1 shield for +2 total AC bonus without using any attunement slots",
      "Consider having armor be found sized for the party or magically resize to fit",
      "Plate +1 (AC 19) makes characters extremely hard to hit at mid-levels"
    ],
    searchVolume: 9240
  },
  {
    slug: "ring-of-protection-5e",
    name: "Ring of Protection",
    category: "magic-items",
    rarity: "Rare",
    attunement: true,
    itemType: "Ring",
    description: "A Ring of Protection is a finely crafted ring imbued with powerful protective magic. When worn and attuned, the ring creates an invisible magical barrier around the wearer that deflects both physical attacks and harmful magic. The ring appears as an elegant piece of jewelry, often made of precious metals and set with protective gemstones like garnets or sapphires. The magical enhancement applies constantly, making the wearer noticeably more difficult to harm. This is one of the most sought-after magic items due to its universal defensive benefit.",
    mechanics: "You gain a +1 bonus to AC and saving throws while wearing this ring. The bonus applies to your Armor Class and to all saving throws (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma). The ring requires attunement and occupies one of your two ring slots (you can wear one magic ring on each hand).",
    commonMistakes: [
      "Forgetting the +1 applies to ALL saving throws, not just AC",
      "Not realizing this stacks with Cloak of Protection (both require attunement)",
      "Thinking you can wear more than two rings total (you can only wear one per hand)",
      "Forgetting it requires attunement (uses one of your three attunement slots)",
      "Underestimating the value of +1 to saves (it's often more valuable than +1 AC at higher levels)"
    ],
    dmTips: [
      "Ring of Protection is mechanically identical to Cloak of Protection (both +1 AC and saves)",
      "The saving throw bonus becomes increasingly valuable at higher levels",
      "Standard value around 2,000-5,000 gp as a rare magic item requiring attunement",
      "This item benefits literally any character in any situation",
      "The attunement requirement means it competes with other powerful items",
      "Perfect reward for characters with weak saving throws or low AC",
      "Can stack with Cloak of Protection for +2 AC and saves (but uses 2 attunement slots)",
      "+1 to all saves is roughly 5% better success rate on every save",
      "Consider this a legendary family heirloom or organization badge item",
      "Rings are easy to conceal and don't interfere with armor or clothing"
    ],
    searchVolume: 12460
  },
  {
    slug: "amulet-of-health-5e",
    name: "Amulet of Health",
    category: "magic-items",
    rarity: "Rare",
    attunement: true,
    itemType: "Wondrous Item",
    description: "An Amulet of Health is a powerful magical necklace that enhances the wearer's physical constitution to peak levels. When worn and attuned, the amulet infuses the wearer with supernatural vitality, setting their Constitution score to 19 if it was lower. The wearer gains enhanced stamina, resilience, and health, along with all the mechanical benefits of having 19 Constitution. The amulet appears as a finely crafted pendant, often featuring symbols of vitality like hearts, trees, or life-related runes.",
    mechanics: "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher. This increases your hit points based on your new Constitution modifier (+4), improves your Constitution saving throws, and affects any abilities that use your Constitution modifier.\n\nWhen you attune to this amulet, recalculate your maximum hit points using the new Constitution modifier. If you later remove the amulet, recalculate again using your normal Constitution.",
    commonMistakes: [
      "Not recalculating hit points when attuning or unattuning to the amulet",
      "Thinking the amulet increases Constitution above 19 (it sets it to 19, doesn't add to it)",
      "Forgetting that concentration saves benefit from the improved Constitution modifier",
      "Not realizing this has no effect if your Constitution is already 19 or higher",
      "Failing to account for improved death saving throws if Constitution modifier increases"
    ],
    dmTips: [
      "This item is transformative for characters with low Constitution (wizards, sorcerers, etc.)",
      "A wizard with 14 Con who attunes to this gains significant hit points (+2 HP per level)",
      "Standard value around 4,000-8,000 gp as a rare attunement item",
      "Concentration casters benefit enormously from the improved Constitution saves",
      "The attunement requirement means it competes with other powerful items",
      "Perfect for squishy spellcasters who need survivability",
      "Setting Con to 19 gives +4 modifier, which is excellent for most characters",
      "Barbarians and front-line fighters with already-high Con get less benefit",
      "Consider this item for characters frequently making concentration checks",
      "The HP boost at higher levels can be 20-40+ additional hit points"
    ],
    searchVolume: 7820
  },
  {
    slug: "winged-boots-5e",
    name: "Winged Boots",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: true,
    itemType: "Wondrous Item",
    description: "Winged Boots are magical footwear that grant the wearer the ability to fly. When activated, small wings sprout from the sides or heels of the boots, allowing the wearer to take to the air with grace and speed. These boots are iconic magic items that solve many mobility challenges and open up three-dimensional combat and exploration options. The boots appear as fine quality footwear, often with subtle wing motifs or designs that hint at their magical nature. Flying with these boots is as natural as walking, requiring no skill checks or concentration.",
    mechanics: "While you wear these boots, you can use a bonus action to speak the boots' command word. If you do, the boots grant you a flying speed equal to your walking speed for 4 hours. The flying speed can be used instead of your walking speed during this duration. You fly with the maneuverability of normal flight (not hovering).\n\nAfter the boots' flying property is used, it can't be used again until the next dawn. This means you get 4 hours of flight per day, which you can use all at once or in multiple shorter flights by speaking the command word again to activate and deactivate.",
    commonMistakes: [
      "Thinking you can hover in place when flight ends (you fall if not on ground)",
      "Not tracking the 4-hour daily limit on flying",
      "Assuming activation doesn't require an action (it requires a bonus action)",
      "Forgetting the boots need to recharge at dawn (can't use again the same day)",
      "Thinking you can fly indefinitely (it's 4 hours per day total)"
    ],
    dmTips: [
      "Flight fundamentally changes how players approach problems and combat",
      "The 4-hour limit prevents unlimited flight but allows significant exploration",
      "Standard value around 500-2,000 gp as an uncommon attunement item",
      "Perfect for characters without innate flight (unlike aarakocra or flying races)",
      "Flying speed equals walking speed (usually 30 feet), which isn't extremely fast",
      "Consider how flying characters interact with indoor/underground environments",
      "The attunement requirement prevents every party member from flying constantly",
      "Great for reconnaissance, avoiding ground hazards, and reaching high places",
      "Enemies with ranged attacks become more important when PCs can fly",
      "Track whether players are conserving their 4 hours or using it all at once"
    ],
    searchVolume: 6240
  },
  {
    slug: "gauntlets-of-ogre-power-5e",
    name: "Gauntlets of Ogre Power",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: true,
    itemType: "Wondrous Item",
    description: "Gauntlets of Ogre Power are magical gloves that grant the wearer tremendous physical strength. When worn and attuned, these gauntlets imbue the wearer with the raw might of an ogre, setting their Strength score to 19 if it was lower. The gauntlets are typically large, heavy-looking gloves made of thick leather or metal, often decorated with orcish or giantish symbols. Despite their brutal appearance, they fit any wearer and allow full dexterity of movement. This item is particularly valuable for characters with naturally low Strength who want to become effective melee combatants.",
    mechanics: "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher. This improves your Strength-based attack rolls, damage rolls, Athletics checks, and any other abilities that use your Strength modifier.\n\nSetting your Strength to 19 gives you a +4 Strength modifier. This affects melee weapon attacks (unless using finesse with Dexterity), carrying capacity, jump distance, and Strength saving throws.",
    commonMistakes: [
      "Thinking the gauntlets increase Strength above 19 (they set it to 19, don't add to it)",
      "Not realizing this has no effect if your Strength is already 19 or higher",
      "Forgetting that carrying capacity is based on Strength (19 Str = 285 lbs capacity)",
      "Not accounting for improved jump distances with higher Strength",
      "Assuming the gauntlets look or feel bulky in combat (they don't impede dexterity)"
    ],
    dmTips: [
      "These gauntlets are transformative for low-Strength characters (wizards, rogues, etc.)",
      "A wizard with 8 Strength suddenly becomes a competent melee combatant",
      "Standard value around 500-2,000 gp as an uncommon attunement item",
      "Perfect for enabling unlikely melee builds (strength wizard, melee sorcerer)",
      "The attunement requirement prevents everyone from having 19 Strength",
      "Setting Str to 19 gives +4 modifier, which is excellent for most characters",
      "Barbarians and fighters with already-high Strength get no benefit",
      "Consider these for characters who want to multiclass into Strength-based classes",
      "Removes armor Strength requirements (can wear plate with originally low Strength)",
      "Great for solving strength-based puzzles or carrying heavy objects"
    ],
    searchVolume: 8460
  },
  {
    slug: "belt-of-giant-strength-hill-5e",
    name: "Belt of Giant Strength (Hill Giant)",
    category: "magic-items",
    rarity: "Rare",
    attunement: true,
    itemType: "Wondrous Item",
    description: "A Belt of Giant Strength is a magnificently crafted belt that grants the wearer the tremendous strength of a giant. The Hill Giant variant is the weakest of the giant strength belts but still incredibly powerful, setting the wearer's Strength to 21. The belt appears as a wide, sturdy belt made of thick leather or metal links, often decorated with giant runes or symbols of strength. When worn and attuned, the wearer's muscles surge with supernatural power, allowing feats of strength that would be impossible for most mortals. This is one of the most impactful magic items for martial characters.",
    mechanics: "Your Strength score is 21 while you wear this belt. It has no effect on you if your Strength is already 21 or higher. This improves your Strength-based attack rolls (+5 modifier), damage rolls (+5), Athletics checks, carrying capacity (315 lbs), and any other abilities that use your Strength modifier.\n\nThere are six varieties of Belt of Giant Strength, corresponding to different giant types. The Hill Giant version (21 Strength) is the weakest but still incredibly powerful. Other versions include Stone (23), Frost (23), Fire (25), Cloud (27), and Storm (29) giant belts, each with higher rarity.",
    commonMistakes: [
      "Thinking the belt increases Strength above the stated score (it sets it, doesn't add)",
      "Confusing the different giant belt types and their Strength scores",
      "Not realizing this has no effect if your Strength is already 21 or higher",
      "Forgetting the massive increase to carrying capacity (21 Str = 315 lbs)",
      "Not accounting for the +5 modifier to all Strength-based activities"
    ],
    dmTips: [
      "This item dramatically transforms any character into a strength powerhouse",
      "A wizard with 8 Strength suddenly has 21 Strength and +5 modifier - game-changing",
      "Standard value around 5,000-10,000 gp as a rare attunement item",
      "Perfect for enabling martial multiclasses or unconventional melee builds",
      "The Hill Giant version (21 Str) is the weakest but still extraordinary",
      "Higher-rarity belts (Stone, Frost, etc.) are progressively more powerful",
      "Fighters and Barbarians typically can't benefit as much (they have high Strength already)",
      "Setting Strength to 21 provides +5 modifier, which is exceptional",
      "Great for characters who want to grapple, shove, or dominate physical contests",
      "Consider this a legendary treasure or major quest reward due to its power"
    ],
    searchVolume: 9870
  },
  {
    slug: "boots-of-speed-5e",
    name: "Boots of Speed",
    category: "magic-items",
    rarity: "Rare",
    attunement: true,
    itemType: "Wondrous Item",
    description: "Boots of Speed are magical footwear that grant the wearer supernatural quickness and agility. When activated, the boots allow the wearer to move with blinding speed and take an additional action each turn. These boots shimmer with magical energy and appear as fine quality footwear, often with lightning bolt or speed-related designs. The enhanced speed is dramatic and noticeable, allowing the wearer to blur across the battlefield. This is one of the most powerful uncommon items, as it effectively grants the Haste spell's benefits without requiring concentration.",
    mechanics: "As a bonus action, you can click the boots' heels together to activate them. For 10 minutes, your walking speed doubles, and you gain an additional action on each of your turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.\n\nWhen the boots' property is used, it can't be used again until the next dawn. This is similar to the Haste spell but doesn't require concentration and doesn't cause lethargy when it ends.",
    commonMistakes: [
      "Forgetting the extra action is limited (only Attack with one weapon, Dash, Disengage, Hide, or Use Object)",
      "Not realizing you can't use the extra action to cast spells",
      "Thinking you can use the boots multiple times per day (it's once per dawn)",
      "Assuming activation is free (it requires a bonus action)",
      "Not tracking the 10-minute duration"
    ],
    dmTips: [
      "These boots essentially grant the Haste spell without concentration or lethargy drawback",
      "The extra attack action makes this incredible for martial characters",
      "Standard value around 3,000-8,000 gp as a rare attunement item",
      "10 minutes is enough for most combat encounters plus some exploration",
      "Doubling movement speed often matters more than the extra action",
      "Perfect for melee characters who need to close distance quickly",
      "The once-per-day limit prevents this from being overpowered",
      "Can be used for escaping, chasing, or alpha-striking in important fights",
      "Monks especially benefit from doubling their already-high movement speed",
      "Consider saving uses for boss fights or critical moments"
    ],
    searchVolume: 7620
  },
  {
    slug: "staff-of-the-magi-5e",
    name: "Staff of the Magi",
    category: "magic-items",
    rarity: "Legendary",
    attunement: true,
    itemType: "Staff (requires attunement by a sorcerer, warlock, or wizard)",
    description: "The Staff of the Magi is one of the most powerful magic items in all of D&D, representing the pinnacle of arcane achievement. This legendary staff combines incredible versatility, raw power, and a devastating self-destruct option. The staff functions as both a potent magical weapon and an enormous repository of spells, granting the wielder access to some of the most powerful magic in the game. It's said that only a handful of these staffs exist in the entire multiverse, each with its own history of legendary wielders. The staff appears as a magnificent arcane implement, often adorned with crystals, runes, and precious metals.",
    mechanics: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n\nThe staff has 50 charges. While holding it, you can expend charges to cast many spells including: Conjure Elemental (7), Dispel Magic (3), Fireball (7th level, 7), Flaming Sphere (2), Ice Storm (4), Invisibility (2), Knock (2), Lightning Bolt (7th level, 7), Passwall (5), Plane Shift (7), Telekinesis (5), Wall of Fire (4), and Web (2). The staff regains 4d6+2 charges daily at dawn.\n\nYou have advantage on saving throws against spells while holding the staff. The staff can absorb spells targeting only you (not area effects), canceling the spell and storing its energy. The staff can also be broken intentionally to create a massive explosion.",
    commonMistakes: [
      "Not tracking the 50 charges carefully (the staff doesn't break at 0 like other staffs)",
      "Forgetting the +2 bonus to AC and saves (extremely powerful defensive benefit)",
      "Not utilizing the spell absorption ability (requires a reaction but incredibly powerful)",
      "Thinking anyone can use this staff (requires attunement by sorcerer, warlock, or wizard)",
      "Not realizing the staff regains 4d6+2 charges (average 16) per day",
      "Forgetting the +2 bonus to spell attack rolls"
    ],
    dmTips: [
      "This is arguably the most powerful magic item in the game - reserve for level 17+ campaigns",
      "The spell absorption ability alone is game-changing against enemy casters",
      "Standard value would be 200,000+ gp if it could even be purchased",
      "The staff's destruction (Retributive Strike) can devastate entire battlefields",
      "Perfect as a campaign capstone reward or ancient artifact quest goal",
      "The versatility of spell selection makes this useful in nearly any situation",
      "Regaining 16 average charges per day means sustainable high-level casting",
      "+2 to AC, saves, and spell attacks is exceptional on top of everything else",
      "Consider making the staff sentient or with a personality for added depth",
      "This item can overshadow other party members - ensure everyone gets epic items"
    ],
    searchVolume: 11240
  },
  {
    slug: "holy-avenger-5e",
    name: "Holy Avenger",
    category: "magic-items",
    rarity: "Legendary",
    attunement: true,
    itemType: "Weapon (any sword, requires attunement by a paladin)",
    description: "The Holy Avenger is the ultimate weapon for paladins, representing divine power made manifest in the form of a blade. This legendary sword is blessed by good-aligned deities and specifically crafted to smite fiends and undead. The weapon glows with holy radiance and serves as both a powerful combat implement and a symbol of righteous justice. Holy Avengers are extremely rare, often passed down through orders of paladins or hidden in ancient temples awaiting a worthy champion. The sword appears as a magnificent blade, often silver or gold-colored, with holy symbols and radiant gemstones.",
    mechanics: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or undead with it, that creature takes an extra 2d10 radiant damage.\n\nWhile you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. This aura functions only while you're conscious.\n\nThe sword can also be used as a holy symbol for your paladin spells. As a bonus action, you can activate or deactivate the aura.",
    commonMistakes: [
      "Forgetting the +3 applies to both attack and damage rolls",
      "Not realizing the 2d10 extra radiant damage only applies to fiends and undead",
      "Thinking the aura is always active (you can toggle it with a bonus action)",
      "Not utilizing the advantage on saves against magical effects (extremely powerful)",
      "Forgetting the aura only works while you're conscious",
      "Assuming anyone can attune to this (requires attunement by a paladin specifically)"
    ],
    dmTips: [
      "This is THE ultimate paladin weapon - reserve for high-level campaigns",
      "The +3 enhancement makes this an exceptional weapon even without other abilities",
      "Standard value would be 150,000+ gp if it could be purchased",
      "The aura providing advantage on saves vs magic is incredibly powerful for the whole party",
      "2d10 extra damage vs fiends/undead makes paladins devastating demon/devil hunters",
      "Perfect as a campaign capstone reward for a paladin PC",
      "Consider making this weapon a quest artifact tied to paladin's deity or order",
      "The aura benefits the entire party, making the paladin even more valuable",
      "Works especially well in campaigns featuring fiendish or undead main villains",
      "Some versions of Holy Avenger have additional abilities - customize as desired"
    ],
    searchVolume: 9640
  },
  {
    slug: "vorpal-sword-5e",
    name: "Vorpal Sword",
    category: "magic-items",
    rarity: "Legendary",
    attunement: true,
    itemType: "Weapon (any sword that deals slashing damage)",
    description: "The Vorpal Sword is one of the most iconic and feared magic weapons in D&D history. Made famous by Lewis Carroll's \"Jabberwocky\" poem, this legendary blade has the terrifying ability to sever heads with a perfect strike. The sword is exceptionally sharp, able to cut through nearly anything, and in the hands of a skilled warrior can instantly decapitate enemies. Vorpal blades are extremely rare, often crafted by legendary weaponsmiths or found in the hoards of ancient dragons. The blade appears impossibly sharp, sometimes with a mirrorlike finish, and may hum or shimmer with deadly energy.",
    mechanics: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n\nWhen you roll a 20 on your attack roll with this weapon against a creature that has a head and isn't immune to slashing damage, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it's immune to slashing damage, doesn't have or need a head, has legendary actions, or if the DM decides the creature is too big for its head to be cut off with this weapon.\n\nIf the weapon has no head to cut off, you instead deal an extra 6d8 slashing damage on the critical hit.",
    commonMistakes: [
      "Thinking the decapitation works on any creature (many are immune: no head, legendary actions, immunity to slashing)",
      "Forgetting the +3 bonus to attack and damage on all attacks",
      "Not realizing the decapitation only triggers on a natural 20 (not other crits)",
      "Assuming the decapitation works on creatures with legendary actions (it doesn't)",
      "Not applying the 6d8 extra damage when decapitation doesn't apply"
    ],
    dmTips: [
      "This is one of the most feared weapons in D&D - instant death on nat 20 is dramatic",
      "Many boss monsters have legendary actions or multiple heads, making them immune",
      "Standard value would be 150,000+ gp if it could be purchased",
      "The +3 enhancement alone makes this an exceptional weapon",
      "Ignoring resistance to slashing damage is a significant but often overlooked benefit",
      "Perfect for high-level campaigns (17+) where players face deadly threats",
      "The decapitation ability is spectacular but situational",
      "6d8 extra damage (average 27) on crits against immune creatures is still excellent",
      "Consider describing the impossibly sharp edge and effortless cutting",
      "DM has final say on whether creatures can be decapitated (size, anatomy, etc.)"
    ],
    searchVolume: 10820
  },
  {
    slug: "immovable-rod-5e",
    name: "Immovable Rod",
    category: "magic-items",
    rarity: "Uncommon",
    attunement: false,
    itemType: "Rod",
    description: "An Immovable Rod is a flat iron rod with a button on one end. When activated, this rod becomes absolutely fixed in space, defying gravity and resisting tremendous force. This simple but versatile magic item has countless creative applications, from creating temporary platforms to jamming doors to anchoring yourself in place. The rod appears as a simple metal rod, typically about 2-3 feet long, with a button mechanism on one end. Despite its simplicity, clever adventurers have found hundreds of uses for this item, making it one of the most beloved utility magic items in D&D.",
    mechanics: "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it's defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall.\n\nA creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success. The rod is immovable in three-dimensional space - it doesn't move relative to its position in space, not relative to objects.",
    commonMistakes: [
      "Thinking the rod stays fixed relative to the planet (it's fixed in space - consider planetary rotation)",
      "Not realizing the 8,000-pound weight limit includes everything hanging from it",
      "Assuming anyone can move it easily (DC 30 Strength check is nearly impossible)",
      "Forgetting it takes an action to activate or deactivate (not free)",
      "Not considering creative uses like climbing aids, door jammers, or makeshift weapons"
    ],
    dmTips: [
      "The Immovable Rod is beloved because it rewards creative thinking",
      "Standard value around 500-2,000 gp as an uncommon non-attunement item",
      "Two Immovable Rods together enable incredible climbing and positioning options",
      "The 8,000 lb capacity is enough for most party climbing/hanging situations",
      "Consider how the rod interacts with moving vehicles, airships, or the planet's rotation",
      "Can be used to jam doors, create barriers, or trap enemies",
      "Perfect utility item that never feels overpowered but always feels useful",
      "Great for creative players who enjoy problem-solving",
      "The DC 30 Strength check means even powerful creatures struggle to move it",
      "Encourage creative uses but maintain narrative consistency"
    ],
    searchVolume: 8940
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
