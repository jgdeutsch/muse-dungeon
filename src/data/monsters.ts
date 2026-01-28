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
