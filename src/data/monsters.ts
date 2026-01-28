export type MonsterPage = {
  slug: string;
  name: string;
  monsterName: string;
  category: "creatures";
  challengeRating: string;
  type: string;
  size: string;
  alignment: string;
  armorClass: string;
  hitPoints: string;
  speed: string;
  abilities: { str: number; dex: number; con: number; int: number; wis: number; cha: number };
  keyAbilities: { name: string; description: string }[];
  tactics: string;
  encounterTips: string;
  loot: string;
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
};

export type LorePage = {
  slug: string;
  name: string;
  category: "lore";
  description: string;
  sections: { id: string; title: string; content: string }[];
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
};

export type SourcebookPage = {
  slug: string;
  name: string;
  category: "sourcebooks";
  description: string;
  publisher: string;
  releaseYear: number;
  keyContent: { name: string; description: string }[];
  bestFor: string[];
  searchVolume: number;
};

export const monsterPages: MonsterPage[] = [
  {
    slug: "aboleth-5e",
    name: "Aboleth 5e Guide",
    monsterName: "Aboleth",
    category: "creatures",
    challengeRating: "10",
    type: "Aberration",
    size: "Large",
    alignment: "Lawful Evil",
    armorClass: "17",
    hitPoints: "135 (18d10 + 36)",
    speed: "10 ft., swim 40 ft.",
    abilities: { str: 21, dex: 9, con: 15, int: 18, wis: 15, cha: 18 },
    keyAbilities: [
      { name: "Mucous Cloud", description: "Creates a 5-foot cloud of slime when underwater. Creatures within must make DC 14 Con save or lose ability to breathe air for 3 hours." },
      { name: "Telepathy", description: "Can communicate telepathically with any creature within 120 feet and read surface thoughts." },
      { name: "Enslave", description: "Targets one creature within 30 feet. DC 14 Wis save or be charmed for 24 hours. Aboleth can telepathically command." },
      { name: "Psychic Drain", description: "Legendary action to deal 10 (3d6) psychic damage to one enslaved creature within 120 feet." }
    ],
    tactics: "Use enslave early to turn party members against each other. Stay underwater and use mucous cloud to drown melee fighters.",
    encounterTips: "Place aboleth in flooded ruins with escape routes. Use enslaved minions as early warning system.",
    loot: "Ancient tablets worth 500gp, pearls (3d6 × 100gp), possibly ring of water breathing or trident of fish command.",
    commonMistakes: [
      "Forgetting the mucous cloud affects anyone who attacks in melee range",
      "Not using enslaved creatures as meat shields"
    ],
    dmTips: [
      "Foreshadow aboleth with dreams and visions weeks before encounter",
      "Make the lair partially flooded with varying water depths"
    ],
    searchVolume: 8500
  },
  {
    slug: "cockatrice-5e",
    name: "Cockatrice 5e Stats",
    monsterName: "Cockatrice",
    category: "creatures",
    challengeRating: "1/2",
    type: "Monstrosity",
    size: "Small",
    alignment: "Unaligned",
    armorClass: "11",
    hitPoints: "27 (6d6 + 6)",
    speed: "20 ft., fly 40 ft.",
    abilities: { str: 6, dex: 12, con: 12, int: 2, wis: 13, cha: 5 },
    keyAbilities: [
      { name: "Bite", description: "+3 to hit, deals 3 (1d4+1) piercing damage and target must make DC 11 Con save or be restrained and begin turning to stone." },
      { name: "Petrification", description: "Restrained creature repeats save at end of next turn. On success, effect ends. On failure, creature is petrified for 24 hours." },
      { name: "Flyby", description: "Can fly out of enemy reach without provoking opportunity attacks." }
    ],
    tactics: "Fly in, bite, fly away. Target spellcasters and ranged attackers first.",
    encounterTips: "Use 2-4 cockatrices in rocky terrain. Scattered stone statues hint at danger.",
    loot: "Feathers (25gp to alchemist), beak (50gp spell component), intact eggs (100gp each, rare).",
    commonMistakes: [
      "Forgetting cockatrices are animals with animal intelligence",
      "Making them too aggressive—they flee when injured"
    ],
    dmTips: [
      "Have one cockatrice already pecking at a petrified adventurer",
      "They nest in abandoned structures with stone debris"
    ],
    searchVolume: 6200
  },
  {
    slug: "displacer-beast-5e",
    name: "Displacer Beast 5e",
    monsterName: "Displacer Beast",
    category: "creatures",
    challengeRating: "3",
    type: "Monstrosity",
    size: "Large",
    alignment: "Lawful Evil",
    armorClass: "13",
    hitPoints: "85 (10d10 + 30)",
    speed: "40 ft.",
    abilities: { str: 18, dex: 15, con: 16, int: 6, wis: 12, cha: 8 },
    keyAbilities: [
      { name: "Displacement", description: "Attackers have disadvantage on attack rolls. If hit by an attack, this trait is disrupted until start of next turn." },
      { name: "Avoidance", description: "If subjected to an effect that allows a Dex save for half damage, takes no damage on success and half on failure." },
      { name: "Tentacle Attack", description: "Two attacks: +6 to hit, reach 10 ft., 7 (1d6+4) bludgeoning damage each." }
    ],
    tactics: "Ambush from shadows using displacement. Focus fire on one target. Retreat if displacement disrupted.",
    encounterTips: "Ambush in dim light or darkness. Use terrain with lots of cover. Pack hunts with 2-3 beasts.",
    loot: "Hide worth 300gp (can craft cloak of displacement), tentacles (100gp to wizards for illusion spells).",
    commonMistakes: [
      "Forgetting displacement ends when the beast is hit",
      "Not making them intelligent pack hunters"
    ],
    dmTips: [
      "They hate blink dogs—use this for interesting encounters",
      "Describe their shimmer effect vividly to create tension"
    ],
    searchVolume: 7800
  },
  {
    slug: "drider-5e",
    name: "Drider 5e Tactics",
    monsterName: "Drider",
    category: "creatures",
    challengeRating: "6",
    type: "Monstrosity",
    size: "Large",
    alignment: "Chaotic Evil",
    armorClass: "19",
    hitPoints: "123 (13d10 + 52)",
    speed: "30 ft., climb 30 ft.",
    abilities: { str: 16, dex: 16, con: 18, int: 13, wis: 14, cha: 12 },
    keyAbilities: [
      { name: "Fey Ancestry", description: "Advantage on saves against being charmed, and magic can't put it to sleep." },
      { name: "Spider Climb", description: "Can climb difficult surfaces, including upside down on ceilings, without ability checks." },
      { name: "Web Walker", description: "Ignores movement restrictions caused by webbing." },
      { name: "Innate Spellcasting", description: "Cha DC 12. At will: dancing lights. 1/day each: darkness, faerie fire." }
    ],
    tactics: "Cast darkness and attack from ceiling. Use webs to separate party. Target vulnerable spellcasters.",
    encounterTips: "Use vertical cave systems. Webs everywhere. Drider controls battlefield with darkness and terrain.",
    loot: "Masterwork longsword (150gp), spider silk (200gp), drow poison (1d4 vials, 200gp each).",
    commonMistakes: [
      "Not utilizing their spider climb to attack from unexpected angles",
      "Forgetting they're cursed drow with tactical intelligence"
    ],
    dmTips: [
      "They're tragic figures—consider adding roleplay opportunities",
      "Place them in three-dimensional combat spaces"
    ],
    searchVolume: 5400
  },
  {
    slug: "false-hydra-5e",
    name: "False Hydra 5e Homebrew",
    monsterName: "False Hydra",
    category: "creatures",
    challengeRating: "varies (8-15)",
    type: "Aberration",
    size: "Huge",
    alignment: "Chaotic Evil",
    armorClass: "15",
    hitPoints: "200 (16d12 + 96)",
    speed: "20 ft., burrow 30 ft.",
    abilities: { str: 20, dex: 8, con: 18, int: 16, wis: 14, cha: 20 },
    keyAbilities: [
      { name: "Memory Erasing Song", description: "All creatures within 120 feet that can hear it forget the hydra exists. Those who save (DC 18 Wis) are immune for 24 hours." },
      { name: "Multiple Heads", description: "Starts with 3 heads. Each head can attack independently. If a head is destroyed, two grow back in 1d4 days." },
      { name: "Blind Strike", description: "Creatures under song effect cannot see or target the hydra, but feel unexplained terror." },
      { name: "Town Devourer", description: "Emerges at night to consume townspeople. Citizens forget the missing ever existed." }
    ],
    tactics: "Remain hidden underground. Sing constantly. Emerge only to feed at night. Party must deduce its existence from clues.",
    encounterTips: "This is a mystery horror monster. Players discover empty houses, extra chairs at tables, and feel watched.",
    loot: "Personal effects of victims (jewelry, weapons), partially digested magic items (DM choice, 1d4 items).",
    commonMistakes: [
      "Revealing the monster too early—mystery is everything",
      "Not preparing enough environmental clues"
    ],
    dmTips: [
      "Use detailed town NPC list, secretly cross off victims session by session",
      "Have NPCs reference people who don't exist anymore"
    ],
    searchVolume: 12000
  },
  {
    slug: "gnoll-5e",
    name: "Gnoll 5e Stats",
    monsterName: "Gnoll",
    category: "creatures",
    challengeRating: "1/2",
    type: "Humanoid",
    size: "Medium",
    alignment: "Chaotic Evil",
    armorClass: "15 (hide armor, shield)",
    hitPoints: "22 (5d8)",
    speed: "30 ft.",
    abilities: { str: 14, dex: 12, con: 11, int: 6, wis: 10, cha: 7 },
    keyAbilities: [
      { name: "Rampage", description: "When gnoll reduces creature to 0 HP with melee attack, it can use bonus action to move up to half speed and make bite attack." },
      { name: "Bite", description: "+4 to hit, 4 (1d4+2) piercing damage." },
      { name: "Spear", description: "Melee or ranged, +4 to hit, 5 (1d6+2) or 6 (1d8+2) two-handed piercing damage." }
    ],
    tactics: "Swarm weak targets to trigger rampage. Focus fire to drop enemies quickly. Fight with frenzied bloodlust.",
    encounterTips: "Use packs of 4-8 gnolls. Add a gnoll pack lord for CR 2 challenge. They attack caravans and small settlements.",
    loot: "Crude weapons, hide armor, bone jewelry (2d10 gp), spoiled rations.",
    commonMistakes: [
      "Not using rampage ability—it's what makes gnolls scary",
      "Playing them too tactically—they're savage and reckless"
    ],
    dmTips: [
      "Describe their hyena-like cackling during combat",
      "Show aftermath of gnoll raids for motivation"
    ],
    searchVolume: 4800
  },
  {
    slug: "hippogriff-5e",
    name: "Hippogriff 5e Mount",
    monsterName: "Hippogriff",
    category: "creatures",
    challengeRating: "1",
    type: "Monstrosity",
    size: "Large",
    alignment: "Unaligned",
    armorClass: "11",
    hitPoints: "19 (3d10 + 3)",
    speed: "40 ft., fly 60 ft.",
    abilities: { str: 17, dex: 13, con: 13, int: 2, wis: 12, cha: 8 },
    keyAbilities: [
      { name: "Keen Sight", description: "Advantage on Wisdom (Perception) checks that rely on sight." },
      { name: "Claws", description: "+5 to hit, 10 (2d6+3) slashing damage." },
      { name: "Mountable", description: "Can be trained as a mount with DC 15 Animal Handling checks. Requires patient approach." }
    ],
    tactics: "Dive attack with claws. Flee if seriously injured. Protective of nest and young.",
    encounterTips: "Encountered in small groups (2-6) in mountains. Can be tamed if approached respectfully. Make good mounts.",
    loot: "Feathers (10gp), eggs if nest nearby (50gp each), trained hippogriff mount (250gp value).",
    commonMistakes: [
      "Making them too aggressive—they're skittish unless threatened",
      "Forgetting they can be tamed with proper approach"
    ],
    dmTips: [
      "Use the traditional bow greeting (from Harry Potter fame)",
      "Great opportunity for mounted aerial combat if tamed"
    ],
    searchVolume: 3200
  },
  {
    slug: "mimic-5e",
    name: "Mimic 5e Chest",
    monsterName: "Mimic",
    category: "creatures",
    challengeRating: "2",
    type: "Monstrosity",
    size: "Medium",
    alignment: "Neutral",
    armorClass: "12",
    hitPoints: "58 (9d8 + 18)",
    speed: "15 ft.",
    abilities: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
    keyAbilities: [
      { name: "Shapechanger", description: "Can use action to polymorph into object or back to true form. Statistics are same. Reverts when it dies." },
      { name: "Adhesive", description: "Adheres to anything that touches it. Creature is grappled (escape DC 13). Can choose not to adhere." },
      { name: "False Appearance", description: "While motionless, indistinguishable from ordinary object." },
      { name: "Grappler", description: "Advantage on attack rolls against grappled creatures." }
    ],
    tactics: "Wait for creature to touch it. Grapple with adhesive. Bite grappled prey until dead.",
    encounterTips: "Classic dungeon treasure chest. Also disguises as doors, furniture, or treasure piles. Use Investigation to detect.",
    loot: "Whatever the mimic was guarding (DM choice), partially digested coins (3d10 × 10gp).",
    commonMistakes: [
      "Only using them as treasure chests—they can be any object",
      "Forgetting the adhesive grapples automatically on touch"
    ],
    dmTips: [
      "Place real treasure chests nearby to create paranoia",
      "Describe slight breathing motion on Investigation success"
    ],
    searchVolume: 9500
  },
  {
    slug: "mind-flayer-5e",
    name: "Mind Flayer 5e Stats",
    monsterName: "Mind Flayer",
    category: "creatures",
    challengeRating: "7",
    type: "Aberration",
    size: "Medium",
    alignment: "Lawful Evil",
    armorClass: "15 (breastplate)",
    hitPoints: "71 (13d8 + 13)",
    speed: "30 ft.",
    abilities: { str: 11, dex: 12, con: 12, int: 19, wis: 17, cha: 17 },
    keyAbilities: [
      { name: "Mind Blast", description: "60-foot cone. DC 15 Int save or take 22 (4d8+4) psychic damage and stunned for 1 minute. Can repeat save each turn." },
      { name: "Extract Brain", description: "Melee attack against incapacitated humanoid. 55 (10d10) piercing damage. Target dies if reduced to 0 HP." },
      { name: "Telepathy", description: "Can communicate telepathically with any creature within 120 feet. Can read surface thoughts." },
      { name: "Magic Resistance", description: "Advantage on saves against spells and magical effects." }
    ],
    tactics: "Open with mind blast to stun party. Extract brains from stunned victims. Flee if outnumbered or losing.",
    encounterTips: "Always encountered with thralls (1-4 intellect devourers or dominated humanoids). Uses lair defenses.",
    loot: "Breastplate, scholar's robes worth 50gp, possibly headband of intellect or wand.",
    commonMistakes: [
      "Using them alone—they always have thralls or minions",
      "Not emphasizing the horror of brain extraction"
    ],
    dmTips: [
      "Make them calculating and cruel, not mindless monsters",
      "Use telepathy for creepy mid-combat taunts"
    ],
    searchVolume: 11500
  },
  {
    slug: "owlbear-5e",
    name: "Owlbear 5e Encounter",
    monsterName: "Owlbear",
    category: "creatures",
    challengeRating: "3",
    type: "Monstrosity",
    size: "Large",
    alignment: "Unaligned",
    armorClass: "13 (natural armor)",
    hitPoints: "59 (7d10 + 21)",
    speed: "40 ft.",
    abilities: { str: 20, dex: 12, con: 17, int: 3, wis: 12, cha: 7 },
    keyAbilities: [
      { name: "Keen Sight and Smell", description: "Advantage on Wisdom (Perception) checks that rely on sight or smell." },
      { name: "Multiattack", description: "Two attacks: one with beak and one with claws." },
      { name: "Claws", description: "+7 to hit, 14 (2d8+5) slashing damage." },
      { name: "Beak", description: "+7 to hit, 10 (1d10+5) piercing damage." }
    ],
    tactics: "Charge at nearest creature. Use multiattack on same target. Territorial but not mindlessly aggressive.",
    encounterTips: "Found in forests and caves. Protective of young. Can be encountered at night near camps.",
    loot: "Hide and feathers (worth 200gp), possibly eggs (100gp each, extremely rare).",
    commonMistakes: [
      "Making them too intelligent—they're animals with animal instincts",
      "Forgetting they're territorial, not evil"
    ],
    dmTips: [
      "Have them burst through underbrush for dramatic entrance",
      "Use them as forest random encounters to drain resources"
    ],
    searchVolume: 8200
  },
  {
    slug: "skeleton-5e",
    name: "Skeleton 5e Basic",
    monsterName: "Skeleton",
    category: "creatures",
    challengeRating: "1/4",
    type: "Undead",
    size: "Medium",
    alignment: "Lawful Evil",
    armorClass: "13 (armor scraps)",
    hitPoints: "13 (2d8 + 4)",
    speed: "30 ft.",
    abilities: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
    keyAbilities: [
      { name: "Damage Vulnerabilities", description: "Vulnerable to bludgeoning damage." },
      { name: "Damage Immunities", description: "Immune to poison damage, exhaustion, poisoned condition." },
      { name: "Shortsword", description: "+4 to hit, 5 (1d6+2) piercing damage." },
      { name: "Shortbow", description: "+4 to hit, range 80/320 ft., 5 (1d6+2) piercing damage." }
    ],
    tactics: "Mindless obedience to creator. Attack in groups. Ranged attackers provide support while melee skeletons advance.",
    encounterTips: "Use in groups of 4-12. Mix melee and ranged. Place in crypts, tombs, or under necromancer control.",
    loot: "Rusty weapons, old armor pieces (worthless), occasionally old coins (2d10 gp).",
    commonMistakes: [
      "Not using their vulnerability to bludgeoning damage",
      "Making them too tactical—they're mindless undead"
    ],
    dmTips: [
      "Describe bones clattering as they approach",
      "Great cannon fodder to drain party resources"
    ],
    searchVolume: 5900
  },
  {
    slug: "tarrasque-5e",
    name: "Tarrasque 5e Guide",
    monsterName: "Tarrasque",
    category: "creatures",
    challengeRating: "30",
    type: "Monstrosity",
    size: "Gargantuan",
    alignment: "Unaligned",
    armorClass: "25 (natural armor)",
    hitPoints: "676 (33d20 + 330)",
    speed: "40 ft.",
    abilities: { str: 30, dex: 11, con: 30, int: 3, wis: 11, cha: 11 },
    keyAbilities: [
      { name: "Legendary Resistance", description: "Can choose to succeed on a failed save three times per day." },
      { name: "Magic Resistance", description: "Advantage on saves against spells and magical effects." },
      { name: "Reflective Carapace", description: "Any time tarrasque is targeted by magic missile, line spell, or ranged spell requiring attack roll, roll d6. On 1-5, unaffected. On 6, reflected back." },
      { name: "Frightful Presence", description: "DC 17 Wis save or frightened for 1 minute. Each creature within 120 feet when tarrasque uses this." }
    ],
    tactics: "Destroy everything. No strategy—pure destruction. Swallow whole Large or smaller creatures. Use legendary actions constantly.",
    encounterTips: "This is a campaign-ending encounter. Evacuate cities. Requires epic-level preparation and teamwork. Cannot be permanently killed without wish spell.",
    loot: "Carapace plates (worth 50,000gp total), teeth (1,000gp each), destroyed treasure from digested victims (DM discretion).",
    commonMistakes: [
      "Using the tarrasque too early—it's meant for level 20 campaigns",
      "Not describing the apocalyptic devastation it causes"
    ],
    dmTips: [
      "Foreshadow its awakening for months—earthquakes, ancient prophecies",
      "Make it a regional event affecting entire nations"
    ],
    searchVolume: 14500
  },
  {
    slug: "zombie-5e",
    name: "Zombie 5e Stats",
    monsterName: "Zombie",
    category: "creatures",
    challengeRating: "1/4",
    type: "Undead",
    size: "Medium",
    alignment: "Neutral Evil",
    armorClass: "8",
    hitPoints: "22 (3d8 + 9)",
    speed: "20 ft.",
    abilities: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
    keyAbilities: [
      { name: "Undead Fortitude", description: "If damage reduces zombie to 0 HP, make Con save (DC 5 + damage taken). On success, drop to 1 HP instead. Doesn't work vs radiant or critical hits." },
      { name: "Slam", description: "+3 to hit, 4 (1d6+1) bludgeoning damage." },
      { name: "Slow", description: "Only 20 ft. speed. Cannot take reactions or bonus actions." }
    ],
    tactics: "Shuffle forward mindlessly. Grapple and bite. Never retreat. Mob single targets.",
    encounterTips: "Use hordes of 10-20 zombies. They're slow, so use confined spaces. Great for resource drain.",
    loot: "Tattered clothes, rotting flesh, occasionally personal effects from their former life (trinkets, 1d10 gp).",
    commonMistakes: [
      "Forgetting undead fortitude—zombies should keep getting back up",
      "Not using them in overwhelming numbers"
    ],
    dmTips: [
      "Describe the horror of fighting former neighbors or loved ones",
      "Use zombie hordes to create time pressure"
    ],
    searchVolume: 7300
  },
  {
    slug: "beholder-5e",
    name: "Beholder 5e Guide",
    monsterName: "Beholder",
    category: "creatures",
    challengeRating: "13",
    type: "Aberration",
    size: "Large",
    alignment: "Lawful Evil",
    armorClass: "18 (natural armor)",
    hitPoints: "180 (19d10 + 76)",
    speed: "0 ft., fly 20 ft. (hover)",
    abilities: { str: 10, dex: 14, con: 18, int: 17, wis: 15, cha: 17 },
    keyAbilities: [
      { name: "Antimagic Cone", description: "The beholder's central eye creates a 150-foot cone of antimagic. Each creature and magical effect in the area is affected by Antimagic Field." },
      { name: "Eye Rays", description: "The beholder shoots three random eye rays from among ten options, each targeting a creature within 120 ft. Rays include Charm, Paralyzing, Fear, Slowing, Enervation, Telekinetic, Sleep, Petrification, Disintegration, and Death rays." },
      { name: "Legendary Actions", description: "The beholder can take 3 legendary actions: use one eye ray per action. It can also use its eye rays at the start of its turn." }
    ],
    tactics: "Beholders are paranoid geniuses. They position themselves to use Antimagic Cone strategically — shutting down casters while using eye rays on martial characters. They use terrain to their advantage, hovering over pits or lava. A smart beholder has prepared its lair with traps, minions, and escape routes.",
    encounterTips: "Beholder lairs should feel like entering a mad genius's domain. Vertical terrain is key since the beholder hovers. Use the legendary actions to keep pressure on the party between turns. The antimagic cone creates tactical puzzles — do casters stay in range or retreat?",
    loot: "Beholder eyes retain residual magic and are prized by wizards (500–2,000 gp each). Their lairs contain hoarded treasures including magic items they've collected from defeated foes.",
    commonMistakes: [
      "Forgetting the Antimagic Cone also affects the beholder's own eye rays",
      "Not randomizing which eye rays fire each turn",
      "Playing the beholder as a brute instead of a paranoid tactician"
    ],
    dmTips: [
      "Give the beholder a personality — each one is uniquely paranoid",
      "Use the lair actions to make the environment itself hostile",
      "The antimagic cone is a cone FROM the central eye — position matters"
    ],
    searchVolume: 18100
  },
  {
    slug: "dragon-red-ancient-5e",
    name: "Ancient Red Dragon 5e Guide",
    monsterName: "Ancient Red Dragon",
    category: "creatures",
    challengeRating: "24",
    type: "Dragon",
    size: "Gargantuan",
    alignment: "Chaotic Evil",
    armorClass: "22 (natural armor)",
    hitPoints: "546 (28d20 + 252)",
    speed: "40 ft., climb 40 ft., fly 80 ft.",
    abilities: { str: 30, dex: 10, con: 29, int: 18, wis: 15, cha: 23 },
    keyAbilities: [
      { name: "Fire Breath (Recharge 5-6)", description: "90-foot cone, DC 24 Dexterity save, 26d6 fire damage on a failed save, half on success." },
      { name: "Frightful Presence", description: "Each creature of the dragon's choice within 120 feet must succeed on a DC 21 Wisdom save or become frightened for 1 minute." },
      { name: "Legendary Actions (3/round)", description: "Detect (Wisdom check), Tail Attack (reach 20 ft., 2d8+10), Wing Attack (DC 25 Dex save, 2d6+10, knocked prone, dragon flies half speed)." }
    ],
    tactics: "Ancient Red Dragons are arrogant but not stupid. They open with Frightful Presence to scatter the party, then use breath weapon on grouped enemies. They fly out of melee range and use legendary wing attacks to reposition. If seriously threatened, they retreat to their lair where they have legendary lair actions.",
    encounterTips: "This is a campaign-ending boss fight. The lair should be a volcanic cave or mountain peak. Use minions (kobolds, fire elementals) to distract while the dragon focuses on the biggest threat. Give the party environmental options — collapsing pillars, lava flows, or magic items that grant fire resistance.",
    loot: "A red dragon's hoard is legendary — tens of thousands of gold, gems, magic weapons and armor, spell scrolls, and items stolen from heroes over centuries. Red dragon scales can be forged into +2 or +3 armor.",
    commonMistakes: [
      "Forgetting legendary resistances (3/day auto-succeed saves)",
      "Not using the dragon's flight and massive speed advantage",
      "Underestimating the breath weapon recharge — it can fire multiple times per fight"
    ],
    dmTips: [
      "Give the dragon a name, history, and personality",
      "Use lair actions every round to make the environment fight too",
      "Ancient dragons speak many languages and will negotiate if outmatched"
    ],
    searchVolume: 14800
  },
  {
    slug: "lich-5e",
    name: "Lich 5e Guide",
    monsterName: "Lich",
    category: "creatures",
    challengeRating: "21",
    type: "Undead",
    size: "Medium",
    alignment: "Any Evil alignment",
    armorClass: "17 (natural armor)",
    hitPoints: "135 (18d8 + 54)",
    speed: "30 ft.",
    abilities: { str: 11, dex: 16, con: 16, int: 20, wis: 14, cha: 16 },
    keyAbilities: [
      { name: "Spellcasting (18th level)", description: "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit). It has access to the full wizard spell list including 9th-level spells like Power Word Kill." },
      { name: "Legendary Resistance (3/Day)", description: "If the lich fails a saving throw, it can choose to succeed instead." },
      { name: "Rejuvenation", description: "If destroyed, the lich gains a new body in 1d10 days if its phylactery is intact. The new body appears within 5 feet of the phylactery." },
      { name: "Paralyzing Touch", description: "Melee spell attack, +12 to hit. 3d6 cold damage, and the target must succeed on a DC 18 Constitution save or be paralyzed for 1 minute." }
    ],
    tactics: "A lich fights like a master wizard who has had centuries to prepare. It casts defensive spells before combat (Globe of Invulnerability, Shield, Mirror Image). It uses Power Word Kill on weakened targets and Counterspell against enemy casters. It never fights fair — it has contingency plans, escape routes, and minions positioned throughout its lair.",
    encounterTips: "The real challenge is finding and destroying the phylactery. The lich itself can be defeated, but it comes back. Make the phylactery quest the real adventure. A lich's lair should be filled with magical traps, undead guardians, and arcane puzzles that reflect the lich's living interests.",
    loot: "A lich's spellbook is priceless — it contains every wizard spell the lich knew in life. Its lair contains magical research materials, rare spell components, and artifacts accumulated over centuries. The phylactery itself may be a valuable gemstone or magical object.",
    commonMistakes: [
      "Forgetting that the lich must feed souls to its phylactery or become a demilich",
      "Not using the lich's full spell list — it has 9th-level spells",
      "Playing the lich as a simple combat encounter instead of a recurring villain"
    ],
    dmTips: [
      "A lich should be a recurring villain across multiple sessions",
      "Give it a motivation beyond 'evil' — what drove it to seek immortality?",
      "Use the phylactery as a multi-session quest hook"
    ],
    searchVolume: 16200
  },
  {
    slug: "vampire-5e",
    name: "Vampire 5e Guide",
    monsterName: "Vampire",
    category: "creatures",
    challengeRating: "13",
    type: "Undead",
    size: "Medium",
    alignment: "Lawful Evil",
    armorClass: "16 (natural armor)",
    hitPoints: "144 (17d8 + 68)",
    speed: "30 ft.",
    abilities: { str: 18, dex: 18, con: 18, int: 17, wis: 15, cha: 18 },
    keyAbilities: [
      { name: "Bite", description: "Melee weapon attack, +9 to hit. 1d6+4 piercing plus 3d6 necrotic damage. Target's HP max is reduced by the necrotic damage taken, and the vampire regains HP equal to that amount." },
      { name: "Charm", description: "One humanoid within 30 ft. must succeed on a DC 17 Wisdom save or be charmed. The charmed target regards the vampire as a trusted friend." },
      { name: "Shapechanger", description: "The vampire can use its action to polymorph into a Tiny bat, a Medium cloud of mist, or back into its true form." },
      { name: "Legendary Actions (3/round)", description: "Move without provoking opportunity attacks, Unarmed Strike, or Bite (costs 2 actions)." }
    ],
    tactics: "Vampires are cunning manipulators who prefer to avoid direct combat. They charm key party members, use children of the night (wolves, bats, rats) as distractions, and strike with bite attacks to heal and weaken. If reduced to 0 HP, they turn to mist and retreat to their coffin.",
    encounterTips: "Vampire encounters work best in Gothic settings — castles, mansions, fog-shrouded villages. Play up the horror and social manipulation. The vampire may invite the party to dinner before revealing its true nature. Remember its weaknesses: sunlight, running water, stakes through the heart while in its resting place.",
    loot: "A vampire's lair contains centuries of accumulated wealth, art, and magical items. Vampire fangs and blood are valuable to alchemists and necromancers (100–500 gp).",
    commonMistakes: [
      "Forgetting the vampire's weaknesses (sunlight, running water, radiant damage)",
      "Not using the vampire's social abilities before combat begins",
      "Ignoring the vampire's Misty Escape — it turns to mist at 0 HP instead of dying"
    ],
    dmTips: [
      "Vampires make excellent recurring villains with complex motivations",
      "Use vampire spawn as lesser threats that lead back to the master",
      "The coffin and its location should be a quest in itself"
    ],
    searchVolume: 12100
  },
  {
    slug: "gelatinous-cube-5e",
    name: "Gelatinous Cube 5e Guide",
    monsterName: "Gelatinous Cube",
    category: "creatures",
    challengeRating: "2",
    type: "Ooze",
    size: "Large",
    alignment: "Unaligned",
    armorClass: "6",
    hitPoints: "84 (8d10 + 40)",
    speed: "15 ft.",
    abilities: { str: 14, dex: 3, con: 20, int: 1, wis: 6, cha: 1 },
    keyAbilities: [
      { name: "Transparent", description: "Even when the cube is in plain sight, it takes a DC 15 Wisdom (Perception) check to spot a cube that hasn't moved or attacked. A creature that doesn't notice it is surprised by the cube." },
      { name: "Engulf", description: "The cube moves into creatures' spaces. Each creature must succeed on a DC 12 Dexterity save or be engulfed. An engulfed creature takes 3d6 acid damage at the start of each of the cube's turns." },
      { name: "Pseudopod", description: "Melee weapon attack, +4 to hit, reach 5 ft. 3d6 acid damage." }
    ],
    tactics: "The gelatinous cube is a dungeon hallway cleaner. It fills a 10-foot corridor perfectly and moves slowly toward prey. Its transparency makes it a deadly ambush predator in dark dungeons. It simply rolls over creatures and dissolves them.",
    encounterTips: "Place gelatinous cubes in 10-foot-wide corridors where they fill the entire passage. Describe the corridor as unusually clean — that's the cube's trail. Scatter visible objects (coins, bones, weapons) floating inside the cube as a visual clue. Great for low-level dungeon crawls.",
    loot: "Whatever the cube has dissolved around — coins, weapons, armor, and other indigestible items float inside it. After killing the cube, these items can be salvaged (typically 2d10 gp in coins and 1d4 mundane items).",
    commonMistakes: [
      "Forgetting the cube is transparent and nearly invisible in dim dungeons",
      "Not having it fill the entire corridor width",
      "Allowing easy escape — an engulfed creature must use its action to try to escape"
    ],
    dmTips: [
      "Use the cube as an environmental hazard during other encounters",
      "Describe the 'clean' corridor as a clue before the encounter",
      "Great for teaching new players about dungeon awareness"
    ],
    searchVolume: 8900
  },
  {
    slug: "goblin-5e",
    name: "Goblin 5e Guide",
    monsterName: "Goblin",
    category: "creatures",
    challengeRating: "1/4",
    type: "Humanoid (goblinoid)",
    size: "Small",
    alignment: "Neutral Evil",
    armorClass: "15 (leather armor, shield)",
    hitPoints: "7 (2d6)",
    speed: "30 ft.",
    abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
    keyAbilities: [
      { name: "Nimble Escape", description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns." },
      { name: "Scimitar", description: "Melee weapon attack, +4 to hit, 1d6+2 slashing damage." },
      { name: "Shortbow", description: "Ranged weapon attack, +4 to hit, range 80/320 ft., 1d6+2 piercing damage." }
    ],
    tactics: "Goblins are cowardly but cunning. They attack from ambush, use hit-and-run tactics with Nimble Escape to Hide or Disengage each turn. They set traps, use wolves as mounts, and flee when the fight turns against them. In groups, they try to overwhelm single targets.",
    encounterTips: "Goblin encounters should feel scrappy and chaotic. Use terrain with hiding spots, traps (pit traps, swinging logs, tripwires), and multiple entry points. Goblin bosses (bugbears or hobgoblins) add structure. The classic 'goblin cave' from Lost Mine of Phandelver is a perfect template.",
    loot: "Goblins carry stolen goods — 1d6 gp, trinkets from victims, crude weapons. Their lairs contain accumulated loot from raids: 10d10 gp in mixed coins, stolen trade goods, and occasionally a low-value magic item they don't understand.",
    commonMistakes: [
      "Playing goblins as fearless fighters instead of cowardly ambushers",
      "Forgetting Nimble Escape — it makes goblins much more mobile than they look",
      "Not using traps and terrain to make goblin encounters interesting"
    ],
    dmTips: [
      "Goblins are perfect first enemies for new campaigns",
      "Give goblin leaders names and distinct personalities",
      "Use goblin humor — they should be funny-scary, not just scary"
    ],
    searchVolume: 22000
  },
  {
    slug: "dragon-black-adult-5e",
    name: "Adult Black Dragon 5e Guide",
    monsterName: "Adult Black Dragon",
    category: "creatures",
    challengeRating: "14",
    type: "Dragon",
    size: "Huge",
    alignment: "Chaotic Evil",
    armorClass: "19 (natural armor)",
    hitPoints: "195 (17d12 + 85)",
    speed: "40 ft., fly 80 ft., swim 40 ft.",
    abilities: { str: 23, dex: 14, con: 21, int: 14, wis: 13, cha: 17 },
    keyAbilities: [
      { name: "Acid Breath (Recharge 5-6)", description: "60-foot line, 5 feet wide. DC 18 Dexterity save, 12d8 acid damage on failure, half on success." },
      { name: "Amphibious", description: "The dragon can breathe air and water." },
      { name: "Legendary Actions (3/round)", description: "Detect, Tail Attack (2d8+6 bludgeoning), Wing Attack (costs 2, DC 19 Dex save, 2d6+6, knocked prone)." },
      { name: "Frightful Presence", description: "Each creature within 120 ft. must succeed on a DC 16 Wisdom save or become frightened for 1 minute." }
    ],
    tactics: "Black dragons are sadistic ambush predators. They lurk in swamps and murky water, using Amphibious to attack from below. They melt enemies with acid breath, then retreat underwater. They love to toy with prey, letting them think they've escaped before striking again.",
    encounterTips: "Set the encounter in a swamp or marsh with deep water, quicksand, and poor visibility. The dragon uses the terrain to hide and ambush. Boats and bridges become hazards when the dragon attacks from below. Use the dragon's cruelty — it may capture and torment victims rather than kill them outright.",
    loot: "Black dragon hoards include items that survived acid: coins (especially copper and silver), gemstones, and acid-resistant magic items. The hoard is often partially submerged in acidic water.",
    commonMistakes: [
      "Forgetting the dragon can swim and breathe underwater",
      "Not using the swamp terrain to the dragon's advantage",
      "Ignoring legendary resistances (3/day)"
    ],
    dmTips: [
      "Black dragons are the most cruel and sadistic chromatic dragons",
      "Their lairs corrupt the surrounding land — dead trees, acidic water, perpetual fog",
      "Use the dragon as a regional threat before the party ever faces it directly"
    ],
    searchVolume: 9800
  },
  {
    slug: "troll-5e",
    name: "Troll 5e Guide",
    monsterName: "Troll",
    category: "creatures",
    challengeRating: "5",
    type: "Giant",
    size: "Large",
    alignment: "Chaotic Evil",
    armorClass: "15 (natural armor)",
    hitPoints: "84 (8d10 + 40)",
    speed: "30 ft.",
    abilities: { str: 18, dex: 13, con: 20, int: 7, wis: 9, cha: 7 },
    keyAbilities: [
      { name: "Regeneration", description: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate." },
      { name: "Multiattack", description: "The troll makes three attacks: one with its bite (1d6+4) and two with its claws (2d6+4 each)." },
      { name: "Keen Smell", description: "The troll has advantage on Wisdom (Perception) checks that rely on smell." }
    ],
    tactics: "Trolls are straightforward fighters — they charge in and claw everything. Their regeneration makes them terrifying because they just keep getting back up. Without fire or acid, a troll is nearly unkillable. They fight to the death because they literally can't die unless properly killed.",
    encounterTips: "The classic troll encounter teaches players about monster weaknesses. Drop hints that fire is effective — scorched troll tracks, a nervous NPC mentioning 'burn it.' If the party doesn't have fire or acid, make torches or oil available in the environment. Trolls under bridges is a classic for a reason.",
    loot: "Trolls don't collect treasure intentionally, but their lairs contain remains of victims: 2d20 gp in scattered coins, 1d4 mundane weapons and armor, and occasionally items from unfortunate adventurers.",
    commonMistakes: [
      "Forgetting that the troll regenerates EVERY turn — track this carefully",
      "Not making fire/acid the clear counter — players should learn this",
      "Having the troll die normally from regular damage"
    ],
    dmTips: [
      "Describe the regeneration visually — severed limbs reattaching, wounds knitting shut",
      "Troll encounters teach an important D&D lesson: research your enemies",
      "Variant trolls (ice troll, spirit troll) keep the concept fresh at higher levels"
    ],
    searchVolume: 11200
  },
  {
    slug: "kraken-5e",
    name: "Kraken 5e Guide",
    monsterName: "Kraken",
    category: "creatures",
    challengeRating: "23",
    type: "Monstrosity (titan)",
    size: "Gargantuan",
    alignment: "Chaotic Evil",
    armorClass: "18 (natural armor)",
    hitPoints: "472 (27d20 + 189)",
    speed: "20 ft., swim 60 ft.",
    abilities: { str: 30, dex: 11, con: 25, int: 22, wis: 18, cha: 20 },
    keyAbilities: [
      { name: "Tentacle", description: "Melee weapon attack, +17 to hit, reach 30 ft. 3d6+10 bludgeoning damage, and the target is grappled (escape DC 18). The kraken has ten tentacles, each of which can grapple one target." },
      { name: "Lightning Storm", description: "The kraken magically creates three bolts of lightning, each targeting a creature within 120 ft. Each must make a DC 23 Dexterity save, taking 4d10 lightning damage on a failure." },
      { name: "Legendary Actions (3/round)", description: "Tentacle Attack or Fling (flings a grappled creature up to 60 ft.), Lightning Storm (costs 2), or Ink Cloud (costs 3, 60-foot radius cloud in water)." }
    ],
    tactics: "The kraken fights from the water, using its 30-foot tentacle reach to grab creatures off ships and drag them under. It uses Lightning Storm to hit targets it can't reach with tentacles. It capsizes ships by grappling and pulling them under. On its turn, it multiattacks with bite and tentacles while keeping targets grappled.",
    encounterTips: "A kraken encounter should feel like a natural disaster. Set it during a storm at sea. The party must fight while their ship is being destroyed around them. Give them objectives beyond 'kill the kraken' — rescue drowning sailors, keep the ship afloat, reach a magical artifact that can banish it.",
    loot: "Krakens guard deep-sea treasure hordes: 50,000+ gp in sunken ships, legendary magic items, and artifacts from ancient civilizations. A kraken's beak and tentacles are worth thousands to alchemists.",
    commonMistakes: [
      "Trying to run a kraken fight on land — it needs water",
      "Forgetting the kraken has TEN tentacles that can each grapple separately",
      "Not using the environment — storms, waves, sinking ships"
    ],
    dmTips: [
      "A kraken is a campaign-level threat, not a random encounter",
      "Use the kraken's Intelligence (22) — it plans, negotiates, and plots",
      "Kraken cults and kraken priests make great adventure hooks"
    ],
    searchVolume: 10500
  },
  {
    slug: "orc-5e",
    name: "Orc 5e Guide",
    monsterName: "Orc",
    category: "creatures",
    challengeRating: "1/2",
    type: "Humanoid (orc)",
    size: "Medium",
    alignment: "Chaotic Evil",
    armorClass: "13 (hide armor)",
    hitPoints: "15 (2d8 + 6)",
    speed: "30 ft.",
    abilities: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
    keyAbilities: [
      { name: "Aggressive", description: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
      { name: "Greataxe", description: "Melee weapon attack, +5 to hit, 1d12+3 slashing damage." },
      { name: "Javelin", description: "Melee or ranged weapon attack, +5 to hit, range 30/120 ft., 1d6+3 piercing damage." }
    ],
    tactics: "Orcs are aggressive warriors who charge straight into melee using their Aggressive bonus action to close distance quickly. They attack the nearest enemy and fight to the death. Orc war chiefs and shamans provide leadership and magical support. In groups, they overwhelm targets with numbers.",
    encounterTips: "Orc encounters should feel like a tide of violence. Use war drums, battle cries, and overwhelming numbers. Mix in orc war chiefs, orc eyes of Gruumsh (clerics), and sometimes ogres or trolls. Orc raiding parties attack settlements, caravans, and outposts.",
    loot: "Orcs carry crude weapons and 1d4 gp in loot from raids. Orc camps contain stolen goods: 3d20 gp in mixed valuables, weapons, tools, and supplies taken from victims.",
    commonMistakes: [
      "Forgetting the Aggressive bonus action — orcs close gaps fast",
      "Playing all orcs identically — use war chiefs, shamans, and berserkers for variety",
      "Not using orcs in groups — single orcs aren't threatening"
    ],
    dmTips: [
      "Orcs work best as a faction with camps, raiding parties, and war chiefs",
      "Give orc leaders names and battle strategies",
      "Orc society worships Gruumsh — use religious elements for depth"
    ],
    searchVolume: 14500
  },
  {
    slug: "bugbear-5e",
    name: "Bugbear 5e Guide",
    monsterName: "Bugbear",
    category: "creatures",
    challengeRating: "1",
    type: "Humanoid (goblinoid)",
    size: "Medium",
    alignment: "Chaotic Evil",
    armorClass: "16 (hide armor, shield)",
    hitPoints: "27 (5d8 + 5)",
    speed: "30 ft.",
    abilities: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
    keyAbilities: [
      { name: "Brute", description: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in attacks)." },
      { name: "Surprise Attack", description: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 2d6 damage from the attack." },
      { name: "Morningstar", description: "Melee weapon attack, +4 to hit, 2d8+2 piercing damage." }
    ],
    tactics: "Bugbears are ambush predators. They hide and wait for the perfect moment to strike, dealing devastating Surprise Attack damage on their first hit. They bully goblins into scouting and trap-setting, then attack when the enemy is distracted or weakened. They flee when clearly outmatched.",
    encounterTips: "Place bugbears as ambush leaders in goblin lairs. They're the 'boss' of a goblin cave. Use their Stealth proficiency (+6) to set up ambushes in rooms the party thinks they've cleared. A bugbear behind a door is a classic surprise. Great early-campaign mini-boss.",
    loot: "Bugbears take the best loot from their goblin underlings: 2d10 gp, a quality weapon, and sometimes a piece of salvaged armor or jewelry (10-50 gp).",
    commonMistakes: [
      "Forgetting Surprise Attack — it only works in the first round if the bugbear surprises the target",
      "Not using Brute — the damage is already calculated in the stat block",
      "Playing bugbears as dumb brutes instead of cunning ambushers"
    ],
    dmTips: [
      "Bugbears make great early-game mini-bosses",
      "They lead goblin groups — use them as the 'boss room' encounter",
      "Describe their size and ferocity to intimidate low-level parties"
    ],
    searchVolume: 9100
  },
  {
    slug: "basilisk-5e",
    name: "Basilisk 5e Guide",
    monsterName: "Basilisk",
    category: "creatures",
    challengeRating: "3",
    type: "Monstrosity",
    size: "Medium",
    alignment: "Unaligned",
    armorClass: "15 (natural armor)",
    hitPoints: "52 (8d8 + 16)",
    speed: "20 ft.",
    abilities: { str: 16, dex: 8, con: 15, int: 2, wis: 8, cha: 7 },
    keyAbilities: [
      { name: "Petrifying Gaze", description: "If a creature starts its turn within 30 ft. and the two can see each other, the basilisk can force it to make a DC 12 Constitution save or begin turning to stone (restrained). On a subsequent failed save, the creature is petrified. Averting eyes gives disadvantage on attacks against the basilisk." },
      { name: "Bite", description: "Melee weapon attack, +5 to hit, 2d6+3 piercing plus 2d6 poison damage." }
    ],
    tactics: "The basilisk is a simple predator that relies on its petrifying gaze. It moves toward prey and forces Constitution saves. Smart parties avert their eyes, but this gives them disadvantage on attacks. The basilisk doesn't strategize — it just advances and bites.",
    encounterTips: "The basilisk's lair should contain stone statues — petrified victims as a warning and a puzzle (can they be restored?). Use mirrors as a clever environmental tool. Place the basilisk in a lair where the party might stumble into its gaze range before they realize what it is.",
    loot: "Basilisk stomach acid can be harvested (100 gp) and used to restore petrified creatures. Its eyes retain weak petrifying magic (50 gp to alchemists).",
    commonMistakes: [
      "Forgetting that averting eyes still lets the basilisk attack normally",
      "Not giving players environmental tools to deal with the gaze (mirrors, blindfolds)",
      "Making the petrification save too hard or too easy"
    ],
    dmTips: [
      "Stone statues in the lair tell a story — who were these people?",
      "The 'avert your eyes' mechanic creates interesting tactical choices",
      "Greater Restoration or basilisk venom can cure petrification"
    ],
    searchVolume: 7600
  },
  {
    slug: "werewolf-5e",
    name: "Werewolf 5e Guide",
    monsterName: "Werewolf",
    category: "creatures",
    challengeRating: "3",
    type: "Humanoid (human, shapechanger)",
    size: "Medium",
    alignment: "Chaotic Evil",
    armorClass: "11 (natural armor in hybrid/wolf form)",
    hitPoints: "58 (9d8 + 18)",
    speed: "30 ft. (40 ft. in wolf form)",
    abilities: { str: 15, dex: 13, con: 14, int: 10, wis: 11, cha: 10 },
    keyAbilities: [
      { name: "Shapechanger", description: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid, a wolf, or back into its true humanoid form." },
      { name: "Damage Immunities", description: "Bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons." },
      { name: "Bite (hybrid/wolf form)", description: "Melee weapon attack, +4 to hit, 1d8+2 piercing. If target is humanoid, it must succeed on a DC 12 Constitution save or be cursed with werewolf lycanthropy." }
    ],
    tactics: "Werewolves rely on their immunity to non-silvered, nonmagical weapons. They target parties without silver or magic weapons, knowing most attacks can't hurt them. They attack in packs, surrounding isolated targets. In humanoid form, they infiltrate communities and attack at night.",
    encounterTips: "The mystery of 'who is the werewolf?' is more interesting than the combat. Run a social investigation scenario where the party must identify the werewolf among NPCs. When combat happens, the lack of silvered weapons creates genuine danger. Drop hints about silver effectiveness through folklore and NPC warnings.",
    loot: "Werewolves in humanoid form carry normal gear and 2d10 gp. A werewolf's pelt in wolf form is worth 50 gp. The real 'loot' is the cure — removing the curse requires Remove Curse or a wolfsbane potion.",
    commonMistakes: [
      "Forgetting the immunity to non-silvered, nonmagical weapons — this is the werewolf's main threat",
      "Not offering the party a way to get silvered weapons before the encounter",
      "Ignoring the lycanthropy curse — a bitten PC should be at risk of becoming a werewolf"
    ],
    dmTips: [
      "Werewolf encounters are best as horror/mystery scenarios",
      "A PC bitten by a werewolf creates incredible roleplay opportunities",
      "Use the full moon cycle to build tension over multiple sessions"
    ],
    searchVolume: 9700
  },
  {
    slug: "pit-fiend-5e",
    name: "Pit Fiend 5e Guide",
    monsterName: "Pit Fiend",
    category: "creatures",
    challengeRating: "20",
    type: "Fiend (devil)",
    size: "Large",
    alignment: "Lawful Evil",
    armorClass: "19 (natural armor)",
    hitPoints: "300 (24d10 + 168)",
    speed: "30 ft., fly 60 ft.",
    abilities: { str: 26, dex: 14, con: 24, int: 22, wis: 18, cha: 24 },
    keyAbilities: [
      { name: "Fear Aura", description: "Any creature hostile to the pit fiend that starts its turn within 20 ft. must succeed on a DC 21 Wisdom save or be frightened until the start of its next turn." },
      { name: "Multiattack", description: "Four attacks: one bite (4d6+8 piercing plus 6d6 poison, DC 21 Con save or poisoned), one claw, one mace, one tail." },
      { name: "Innate Spellcasting", description: "At will: detect magic, fireball (as 6th-level, DC 21). 3/day each: hold monster, wall of fire." },
      { name: "Magic Resistance", description: "Advantage on saving throws against spells and other magical effects." }
    ],
    tactics: "Pit fiends are generals of Hell's armies. They open with Wall of Fire to split the party, use Fireball on clusters, and wade into melee with devastating multiattacks. Their Fear Aura disrupts formations. They use Hold Monster on dangerous martial characters and focus fire on healers.",
    encounterTips: "A pit fiend is a boss-level threat for high-level parties. It should command legions of lesser devils (bearded devils, chain devils, bone devils) and have a strategic objective beyond combat. The Nine Hells are lawful — a pit fiend might negotiate, make bargains, or honor contracts while still being utterly evil.",
    loot: "Pit fiend horns and blood are incredibly valuable to summoners and fiend-pact warlocks (5,000+ gp). They carry hell-forged weapons and may possess infernal contracts, scrolls of diabolical pacts, or keys to Hell's vaults.",
    commonMistakes: [
      "Forgetting Magic Resistance — the pit fiend has advantage on ALL spell saves",
      "Not using the Fear Aura — it triggers automatically every round",
      "Playing the pit fiend as a mindless brute instead of a brilliant commander"
    ],
    dmTips: [
      "Pit fiends should have names, ranks, and agendas in Hell's hierarchy",
      "They make deals — and always honor the letter while violating the spirit",
      "Use lesser devils as a 'preview' of what's coming"
    ],
    searchVolume: 8200
  },
  {
    slug: "hill-giant-5e",
    name: "Hill Giant 5e Guide",
    monsterName: "Hill Giant",
    category: "creatures",
    challengeRating: "5",
    type: "Giant",
    size: "Huge",
    alignment: "Chaotic Evil",
    armorClass: "13 (natural armor)",
    hitPoints: "105 (10d12 + 40)",
    speed: "40 ft.",
    abilities: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
    keyAbilities: [
      { name: "Multiattack", description: "The giant makes two greatclub attacks." },
      { name: "Greatclub", description: "Melee weapon attack, +8 to hit, reach 10 ft., 3d8+5 bludgeoning damage." },
      { name: "Rock", description: "Ranged weapon attack, +8 to hit, range 60/240 ft., 3d10+5 bludgeoning damage." }
    ],
    tactics: "Hill giants are dim-witted brutes who solve every problem with violence. They throw rocks at distant targets and wade into melee to club anything within reach. They fight for food above all else and will stop fighting to eat fallen enemies. In groups, they simply attack the nearest target.",
    encounterTips: "Hill giants work best as raid encounters — they attack farms, villages, and caravans for food. Their low intelligence means they can be tricked, led into traps, or distracted with food. They throw rocks and livestock. A hill giant demanding tribute from a village is a classic quest hook.",
    loot: "Hill giants carry a sack of random items: 2d20 gp in coins, livestock, furniture, and mundane objects they thought were interesting. Their lairs contain larger hoards of stolen goods (200-500 gp value) mixed with trash.",
    commonMistakes: [
      "Forgetting the rock attack — 3d10+5 at range is devastating",
      "Making hill giants too smart — they're the dumbest giants (INT 5)",
      "Not using their size for environmental destruction"
    ],
    dmTips: [
      "Hill giants are motivated almost entirely by hunger",
      "Use them as a low-level 'big threat' that the party must outsmart rather than outfight",
      "The ordning (giant social hierarchy) means hill giants are bullied by all other giants"
    ],
    searchVolume: 6800
  },
  {
    slug: "kobold-5e",
    name: "Kobold 5e Guide",
    monsterName: "Kobold",
    category: "creatures",
    challengeRating: "1/8",
    type: "Humanoid (kobold)",
    size: "Small",
    alignment: "Lawful Evil",
    armorClass: "12",
    hitPoints: "5 (2d6 - 2)",
    speed: "30 ft.",
    abilities: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
    keyAbilities: [
      { name: "Pack Tactics", description: "The kobold has advantage on attack rolls against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated." },
      { name: "Sunlight Sensitivity", description: "While in sunlight, the kobold has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight." },
      { name: "Dagger", description: "Melee weapon attack, +4 to hit, 1d4+2 piercing. Sling: Ranged, +4 to hit, range 30/120 ft., 1d4+2 bludgeoning." }
    ],
    tactics: "Kobolds never fight fair. They use elaborate trap systems, narrow tunnels that larger creatures can't navigate, and Pack Tactics to get advantage on every attack. They swarm targets in groups of 6+, retreat into tunnels when threatened, and reset traps behind them. Their warrens are designed as kill zones.",
    encounterTips: "Tucker's Kobolds are legendary for a reason — a well-designed kobold warren is terrifying at any level. Use pit traps, crossbow murder holes, collapsing tunnels, oil slicks, and swinging blades. The kobolds themselves are weak but their environment is the real enemy. Include a kobold inventor or sorcerer for variety.",
    loot: "Individual kobolds carry almost nothing (1d4 cp). Their warrens contain communal treasure: 3d20 gp in small gems and coins, crude traps that can be repurposed, and occasionally a dragon-related artifact (kobolds worship dragons).",
    commonMistakes: [
      "Playing kobolds as just 'weak goblins' — they're trap masters",
      "Not using Pack Tactics — it's what makes kobolds dangerous in groups",
      "Forgetting Sunlight Sensitivity when fighting outdoors"
    ],
    dmTips: [
      "Kobold warrens should be the real encounter, not the kobolds themselves",
      "Their connection to dragons can tie into larger campaign arcs",
      "Kobold inventors and trap-smiths add variety to encounters"
    ],
    searchVolume: 13500
  },
  {
    slug: "bandit-captain-5e",
    name: "Bandit Captain 5e Guide",
    monsterName: "Bandit Captain",
    category: "creatures",
    challengeRating: "2",
    type: "Humanoid (any race)",
    size: "Medium",
    alignment: "Any non-lawful",
    armorClass: "15 (studded leather)",
    hitPoints: "65 (10d8 + 20)",
    speed: "30 ft.",
    abilities: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14 },
    keyAbilities: [
      { name: "Multiattack", description: "Three melee attacks: two with scimitar (1d6+3) and one with dagger (1d4+3)." },
      { name: "Parry", description: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." },
      { name: "Dagger (ranged)", description: "Ranged weapon attack, +5 to hit, range 20/60 ft., 1d4+3 piercing damage." }
    ],
    tactics: "Bandit captains command groups of bandits (CR 1/8) and thugs (CR 1/2). They stay behind their minions initially, directing the fight, then engage the most dangerous-looking target with their three-attack multiattack. They use Parry to survive longer in melee and retreat if the fight goes badly — their life is more valuable than any loot.",
    encounterTips: "Bandit captains are versatile — they can be highway robbers, pirate leaders, rebel commanders, or corrupt militia officers. Give them a name and motivation. The encounter can be social (negotiate passage, pay a toll) or combat. Their bandits should use terrain: fallen logs, overturned carts, rooftops.",
    loot: "The captain carries 3d10 gp, a quality weapon, and a stolen item of value (50-200 gp). The bandit camp contains the group's accumulated loot: 5d20 gp in coins and stolen goods, maps, and perhaps a bounty poster for the captain.",
    commonMistakes: [
      "Forgetting Parry — it's a reaction that adds +2 AC",
      "Not giving the captain bandit minions — they're leaders, not solo fighters",
      "Making every bandit encounter a fight — negotiation is more interesting"
    ],
    dmTips: [
      "Bandit captains are perfect recurring NPCs — defeated captains seek revenge",
      "Give them a cause — are they Robin Hood or a pure villain?",
      "Use them at any level by adjusting the number and type of minions"
    ],
    searchVolume: 7400
  },
  {
    slug: "wyvern-5e",
    name: "Wyvern 5e Guide",
    monsterName: "Wyvern",
    category: "creatures",
    challengeRating: "6",
    type: "Dragon",
    size: "Large",
    alignment: "Unaligned",
    armorClass: "13 (natural armor)",
    hitPoints: "110 (13d10 + 39)",
    speed: "20 ft., fly 80 ft.",
    abilities: { str: 19, dex: 10, con: 16, int: 5, wis: 12, cha: 6 },
    keyAbilities: [
      { name: "Multiattack", description: "Two attacks: one bite (2d6+4) and one stinger." },
      { name: "Stinger", description: "Melee weapon attack, +7 to hit, reach 10 ft., 2d6+4 piercing damage. Target must make a DC 15 Constitution save, taking 7d6 poison damage on a failure, or half on a success." },
      { name: "Claws", description: "Melee weapon attack, +7 to hit, 2d8+4 slashing damage." }
    ],
    tactics: "Wyverns are aerial predators that dive-bomb targets with their poisonous stinger. They grab prey in their claws and carry them into the air, then drop them. They're not intelligent enough for complex tactics but are dangerous due to flight and poison. They attack livestock and travelers near their nesting grounds.",
    encounterTips: "Wyvern encounters work best in mountainous or open terrain where they can use their 80 ft. fly speed. They swoop in, sting, and fly away. Give the party ranged options or they'll be frustrated. Wyvern eggs are valuable to dragon-riding cultures, and taming a wyvern is a classic quest reward.",
    loot: "Wyverns don't hoard treasure, but their nests contain bones and gear from previous victims: 2d20 gp in scattered coins and 1d4 mundane items. Wyvern poison (extracted from the tail, DC 15 Nature check) is worth 200 gp. Wyvern eggs are worth 2,000+ gp.",
    commonMistakes: [
      "Forgetting the wyvern can fly 80 ft. — it should rarely stay in melee",
      "Not using the stinger poison — 7d6 is devastating for its CR",
      "Confusing wyverns with true dragons — wyverns are beasts, not intelligent"
    ],
    dmTips: [
      "Wyverns are great 'dragon-lite' encounters for mid-level parties",
      "A wyvern nest on a cliff makes for an excellent exploration encounter",
      "Tamed wyverns as mounts can be a campaign reward"
    ],
    searchVolume: 8100
  },
  {
    slug: "death-knight-5e",
    name: "Death Knight 5e Guide",
    monsterName: "Death Knight",
    category: "creatures",
    challengeRating: "17",
    type: "Undead",
    size: "Medium",
    alignment: "Chaotic Evil",
    armorClass: "20 (plate, shield)",
    hitPoints: "180 (19d8 + 95)",
    speed: "30 ft.",
    abilities: { str: 20, dex: 11, con: 20, int: 12, wis: 16, cha: 18 },
    keyAbilities: [
      { name: "Marshal Undead", description: "Unless surprised, any undead within 60 ft. has advantage on saving throws against features that turn undead." },
      { name: "Hellfire Orb", description: "The death knight hurls a magical ball of fire that explodes at a point within 120 ft. Each creature in a 20-foot radius must make a DC 18 Dex save, taking 10d6 fire plus 10d6 necrotic damage on a failure." },
      { name: "Spellcasting (19th level paladin)", description: "Spell save DC 18, including destructive wave, staggering smite, banishing smite, and command." },
      { name: "Longsword", description: "Melee weapon attack, +11 to hit, 1d8+5 slashing plus 5d8 necrotic damage." }
    ],
    tactics: "Death knights are fallen paladins with immense martial and magical power. They open with Hellfire Orb (20d6 damage!) to devastate grouped enemies, then wade into melee dealing 5d8 extra necrotic on every sword hit. They use paladin smite spells to deal even more damage on critical hits. They command undead armies.",
    encounterTips: "A death knight encounter should be the climax of a story about a fallen hero. Give the death knight a tragic backstory — it was once a noble paladin who broke an oath. Its undead army (wraiths, wights, skeletons) reflects its former followers. Defeating the death knight may require redeeming its soul, not just killing its body.",
    loot: "Death knights carry their equipment from life: magic plate armor (+1 or +2), a magic longsword, and holy symbols corrupted by their fall. Their lairs contain treasures from their former order and trophies from those they've slain (2,000-10,000 gp value).",
    commonMistakes: [
      "Forgetting Hellfire Orb is a 20-foot radius dealing 20d6 — it's devastating",
      "Not giving the death knight undead allies — it's a commander",
      "Missing that the death knight has paladin spellcasting including smites"
    ],
    dmTips: [
      "Every death knight has a story of its fall — make it tragic and specific",
      "They can only be permanently destroyed by redeeming their soul",
      "Lord Soth from Dragonlance is the original death knight — great inspiration"
    ],
    searchVolume: 7900
  },
  {
    slug: "rust-monster-5e",
    name: "Rust Monster 5e Guide",
    monsterName: "Rust Monster",
    category: "creatures",
    challengeRating: "1/2",
    type: "Monstrosity",
    size: "Medium",
    alignment: "Unaligned",
    armorClass: "14 (natural armor)",
    hitPoints: "27 (5d8 + 5)",
    speed: "40 ft.",
    abilities: { str: 13, dex: 12, con: 13, int: 2, wis: 13, cha: 6 },
    keyAbilities: [
      { name: "Iron Scent", description: "The rust monster can pinpoint the location of ferrous metal within 30 feet of it by smell." },
      { name: "Rust Metal", description: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed." },
      { name: "Antennae", description: "The rust monster corrodes a nonmagical ferrous metal object it touches. If it's a weapon, it takes a −1 penalty. If it's armor, it takes a −1 penalty to AC. If the object's penalty reduces it to useless, it's destroyed." }
    ],
    tactics: "Rust monsters aren't aggressive — they're hungry for metal. They detect ferrous metal with Iron Scent and rush toward the nearest source. They prefer to touch metal objects with their antennae rather than fight. They'll ignore creatures who drop their metal equipment and flee from fire.",
    encounterTips: "The rust monster is one of D&D's most feared low-CR creatures because it destroys equipment. The terror comes from watching a fighter's plate armor dissolve, not from damage. Use them in dungeon corridors where retreat is difficult. Smart parties will strip off metal gear or use non-metal weapons.",
    loot: "Rust monster antennae can be harvested (25 gp each) and used to create rust-dissolving potions. Their lairs are littered with iron oxide dust — the remains of their meals.",
    commonMistakes: [
      "Having rust monsters destroy magic items — they only affect nonmagical metal",
      "Making them aggressive fighters — they want metal, not combat",
      "Not giving players warning signs (corroded metal in the dungeon, iron oxide dust)"
    ],
    dmTips: [
      "Rust monsters create memorable encounters through equipment loss, not danger",
      "Use them sparingly — players HATE losing gear",
      "Give players time to realize what's happening and adapt tactics"
    ],
    searchVolume: 6500
  },
  {
    slug: "gibbering-mouther-5e",
    name: "Gibbering Mouther 5e Guide",
    monsterName: "Gibbering Mouther",
    category: "creatures",
    challengeRating: "2",
    type: "Aberration",
    size: "Medium",
    alignment: "Neutral",
    armorClass: "9",
    hitPoints: "67 (9d8 + 27)",
    speed: "10 ft., swim 10 ft.",
    abilities: { str: 10, dex: 8, con: 16, int: 3, wis: 10, cha: 6 },
    keyAbilities: [
      { name: "Gibbering", description: "Each creature that starts its turn within 20 ft. and can hear the mouther must succeed on a DC 10 Wisdom save or be unable to take reactions and use movement randomly." },
      { name: "Aberrant Ground", description: "The ground within 10 ft. is doughlike difficult terrain. Each creature that starts its turn there must succeed on a DC 10 Strength save or have its speed reduced to 0." },
      { name: "Multiattack", description: "One bite attack. If it hits, the target takes 5d6 piercing and must succeed on a DC 10 Strength save or be knocked prone." }
    ],
    tactics: "The gibbering mouther is a slow horror that turns the ground to mush and drives enemies mad with its incessant babbling. It oozes toward prey, trapping them in difficult terrain while its gibbering prevents coherent thought. It absorbs prey into its mass of eyes and mouths.",
    encounterTips: "Use the mouther in tight dungeon corridors where its slow speed doesn't matter and creatures can't easily escape its auras. The horror factor is key — describe the mass of eyes, mouths, and gibbering voices. It should feel like encountering a thing that shouldn't exist. Works great in aberration-themed dungeons near the Underdark.",
    loot: "The mouther has no treasure, but whatever it consumed can sometimes be found in its remains: 1d6 gp in coins, bones, and fragments of equipment.",
    commonMistakes: [
      "Forgetting Aberrant Ground — it traps creatures within reach",
      "Not describing the horror of the gibbering — it's a madness-inducing sound",
      "Making the encounter too easy by fighting in open terrain"
    ],
    dmTips: [
      "Gibbering mouthers are perfect Lovecraftian horror encounters",
      "Describe the babbling as fragments of speech from consumed victims",
      "Use them in tight spaces where their slow speed doesn't matter"
    ],
    searchVolume: 5900
  }
];

export const lorePages: LorePage[] = [
  {
    slug: "dnd-gods",
    name: "D&D Gods & Deities",
    category: "lore",
    description: "Complete guide to deities across D&D pantheons including Forgotten Realms, Greyhawk, and Eberron gods.",
    sections: [
      {
        id: "major-pantheons",
        title: "Major Pantheons",
        content: "<p>D&D features multiple pantheons across different settings. The <strong>Forgotten Realms</strong> pantheon includes major deities like Mystra (magic), Tempus (war), and Tyr (justice). The <strong>Greyhawk</strong> pantheon features Pelor (sun), Heironeous (valor), and Nerull (death). <strong>Eberron</strong> uses the Sovereign Host and Dark Six.</p><p>Each deity has a <strong>domain</strong> that grants powers to their clerics. Common domains include Life, War, Light, Death, Knowledge, Trickery, and Nature.</p>"
      },
      {
        id: "popular-deities",
        title: "Most Popular Deities",
        content: "<p><strong>Bahamut</strong> (Lawful Good): Platinum dragon god of justice and honor. Worshipped by paladins and metallic dragons.</p><p><strong>Tiamat</strong> (Lawful Evil): Five-headed chromatic dragon goddess of greed and tyranny. Enemy of Bahamut.</p><p><strong>Lolth</strong> (Chaotic Evil): Spider Queen, goddess of drow elves, ruling from the Demonweb Pits.</p><p><strong>Asmodeus</strong> (Lawful Evil): Archdevil and god of the Nine Hells, representing tyranny and domination.</p>"
      },
      {
        id: "using-gods",
        title: "Using Gods in Your Campaign",
        content: "<p>Gods can be active or passive depending on your campaign. Some DMs have gods directly intervene, while others keep them distant. <strong>Divine intervention</strong> is a class feature for clerics at level 10.</p><p>Consider having temples, festivals, and religious conflicts. Gods might send <strong>omens</strong>, grant <strong>blessings</strong>, or dispatch <strong>celestial servants</strong> to aid worshippers.</p>"
      }
    ],
    commonMistakes: [
      "Making gods too accessible—divine intervention should be rare and meaningful",
      "Forgetting that clerics don't need to worship a specific god in some settings"
    ],
    dmTips: [
      "Use religious factions for political intrigue and faction play",
      "Grant small divine boons for faithful roleplaying"
    ],
    searchVolume: 18500
  },
  {
    slug: "drizzt-dourden",
    name: "Drizzt Do'Urden Guide",
    category: "lore",
    description: "Everything about Drizzt Do'Urden, the legendary drow ranger created by R.A. Salvatore.",
    sections: [
      {
        id: "who-is-drizzt",
        title: "Who is Drizzt Do'Urden?",
        content: "<p>Drizzt Do'Urden is a <strong>drow ranger</strong> and one of D&D's most iconic characters. Created by author R.A. Salvatore, Drizzt appears in over 30 novels starting with <em>The Crystal Shard</em> (1988).</p><p>Born in the dark elf city of Menzoberranzan, Drizzt rejected the evil ways of drow society and fled to the surface. He wields twin scimitars named <strong>Icingdeath</strong> and <strong>Twinkle</strong>, and is accompanied by his magical panther companion <strong>Guenhwyvar</strong>.</p>"
      },
      {
        id: "companions-of-the-hall",
        title: "Companions of the Hall",
        content: "<p>Drizzt's closest friends are known as the <strong>Companions of the Hall</strong>:</p><ul><li><strong>Bruenor Battlehammer</strong>: Dwarf king of Mithral Hall, wielder of Aegis-fang</li><li><strong>Catti-brie</strong>: Human archer and later wizard, wielder of Taulmaril</li><li><strong>Wulfgar</strong>: Barbarian warrior from Icewind Dale, wielder of Aegis-fang</li><li><strong>Regis</strong>: Halfling rogue with a magical ruby pendant</li></ul>"
      },
      {
        id: "in-your-campaign",
        title: "Using Drizzt in Your Campaign",
        content: "<p>Drizzt exists in the <strong>Forgotten Realms</strong> setting. As of 5e, his stats appear in various supplements. He's a 19th-level ranger with incredible combat prowess.</p><p>Consider having Drizzt as a distant legend, brief ally, or quest-giver rather than main character. His story is complete—let your players be the heroes.</p>"
      }
    ],
    commonMistakes: [
      "Making Drizzt overshadow the player characters",
      "Copying Drizzt's backstory for player drow—it's been overdone"
    ],
    dmTips: [
      "Reference Drizzt's legacy rather than using him directly",
      "Use his philosophy about choosing good over evil heritage for NPC inspiration"
    ],
    searchVolume: 22000
  },
  {
    slug: "forgotten-realms-map",
    name: "Forgotten Realms Map",
    category: "lore",
    description: "Complete guide to the geography, cities, and regions of the Forgotten Realms campaign setting.",
    sections: [
      {
        id: "faerun-overview",
        title: "Faerûn Overview",
        content: "<p>The <strong>Forgotten Realms</strong> is D&D's most popular campaign setting. The main continent is <strong>Faerûn</strong>, featuring diverse regions from frozen tundras to deserts to jungles.</p><p>Major regions include the <strong>Sword Coast</strong> (west), <strong>Heartlands</strong> (center), <strong>Unapproachable East</strong>, and <strong>Old Empires</strong> (south). Each region has distinct cultures, politics, and threats.</p>"
      },
      {
        id: "major-cities",
        title: "Major Cities & Locations",
        content: "<p><strong>Waterdeep</strong>: City of Splendors, largest city on Sword Coast. Central hub for trade and adventure.</p><p><strong>Baldur's Gate</strong>: Merchant city south of Waterdeep, famous for its Grand Dukes.</p><p><strong>Neverwinter</strong>: City of Skilled Hands, rebuilt after volcanic eruption.</p><p><strong>Luskan</strong>: Pirate city ruled by five High Captains.</p><p><strong>Menzoberranzan</strong>: Drow city in the Underdark, ruled by Matron Mothers.</p><p><strong>Candlekeep</strong>: Fortress library containing vast magical knowledge.</p>"
      },
      {
        id: "regions",
        title: "Key Regions",
        content: "<p><strong>Icewind Dale</strong>: Frozen tundra in far north, home to Ten-Towns and barbarian tribes.</p><p><strong>Underdark</strong>: Vast underground realm of drow, mind flayers, and aberrations.</p><p><strong>Anauroch</strong>: Great desert wasteland once home to fallen empires.</p><p><strong>High Forest</strong>: Ancient woodland with elven ruins and treant guardians.</p><p><strong>Dalelands</strong>: Confederation of farming communities in eastern Faerûn.</p>"
      }
    ],
    commonMistakes: [
      "Overwhelming players with too much lore—introduce locations as needed",
      "Treating the setting as rigid—make it your own"
    ],
    dmTips: [
      "Start with Sword Coast region—it's well-documented and beginner-friendly",
      "Use official modules like Dragon Heist or Descent into Avernus as frameworks"
    ],
    searchVolume: 16200
  }
];

export const sourcebookPages: SourcebookPage[] = [
  {
    slug: "eberron-rising",
    name: "Eberron: Rising from the Last War",
    category: "sourcebooks",
    description: "Campaign setting book for Eberron, featuring noir magic, warforged, airships, and a world recovering from devastating war.",
    publisher: "Wizards of the Coast",
    releaseYear: 2019,
    keyContent: [
      { name: "Warforged Race", description: "Sentient constructs built for war, now seeking purpose in peacetime. Full player race with multiple subraces." },
      { name: "Dragonmarks", description: "Magical marks granting powers, controlled by powerful houses. New feat system for dragonmarked characters." },
      { name: "Artificer Class", description: "Full artificer class with Alchemist, Armorer, Artillerist, and Battle Smith subclasses." },
      { name: "Sharn City Guide", description: "Detailed guide to the City of Towers, a vertical metropolis perfect for urban campaigns." }
    ],
    bestFor: [
      "Noir and pulp-style adventures",
      "Magic-as-technology settings",
      "Political intrigue campaigns",
      "Players who want construct or artificer characters"
    ],
    searchVolume: 8900
  },
  {
    slug: "xanathars-guide",
    name: "Xanathar's Guide to Everything",
    category: "sourcebooks",
    description: "Rules expansion featuring new subclasses, spells, magic items, and DM tools narrated by the beholder crime lord Xanathar.",
    publisher: "Wizards of the Coast",
    releaseYear: 2017,
    keyContent: [
      { name: "Subclasses", description: "31 new subclasses including Hexblade Warlock, Samurai Fighter, and Ancestral Guardian Barbarian." },
      { name: "Spells", description: "Over 20 new spells for all classes, including healing spirit, shadow blade, and steel wind strike." },
      { name: "Downtime Activities", description: "Expanded rules for crafting, training, running businesses, and carousing between adventures." },
      { name: "Tool Proficiencies", description: "Detailed rules for using tools like thieves' tools, herbalism kits, and smith's tools." }
    ],
    bestFor: [
      "Players who want more character options",
      "DMs who need more downtime rules",
      "Groups who want expanded crafting systems",
      "Anyone looking for quick random tables"
    ],
    searchVolume: 12400
  }
];

export const allMonsterPages = [...monsterPages, ...lorePages, ...sourcebookPages];
export const monsterPagesOnly = monsterPages;
export const lorePagesOnly = lorePages;
export const sourcebookPagesOnly = sourcebookPages;
