export type ClassPage = {
  slug: string;
  name: string;
  className: string;
  category: "classes";
  hitDie: string;
  primaryAbility: string;
  savingThrows: string;
  armorProf: string;
  weaponProf: string;
  spellcasting: string | null;
  description: string;
  keyFeatures: { name: string; level: string; description: string }[];
  subclasses: { name: string; source: string; focus: string }[];
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
  aliases?: string[];
};

export type ClassOverviewPage = {
  slug: string;
  name: string;
  category: "classes";
  description: string;
  sections: { id: string; title: string; content: string }[];
  searchVolume: number;
};

export const classPages: ClassPage[] = [
  {
    slug: "artificer-5e",
    name: "Artificer 5e",
    className: "Artificer",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Intelligence",
    savingThrows: "Constitution, Intelligence",
    armorProf: "Light armor, medium armor, shields",
    weaponProf: "Simple weapons, firearms (if allowed)",
    spellcasting: "Half caster (Intelligence)",
    description: "Masters of invention and magical engineering who infuse objects with arcane power. Artificers blend craftsmanship with spellcasting to create powerful magical items and support their allies.",
    keyFeatures: [
      {
        name: "Magical Tinkering",
        level: "1st",
        description: "Imbue tiny objects with minor magical properties like light, sound, or messages."
      },
      {
        name: "Infuse Item",
        level: "2nd",
        description: "Create magic items by infusing mundane objects with specific properties. Number of infusions increases with level."
      },
      {
        name: "The Right Tool for the Job",
        level: "3rd",
        description: "Spend 1 hour to create a set of artisan's tools using materials at hand."
      },
      {
        name: "Tool Expertise",
        level: "6th",
        description: "Double proficiency bonus for ability checks made with tools you're proficient with."
      },
      {
        name: "Flash of Genius",
        level: "7th",
        description: "Use reaction to add Intelligence modifier to ability check or saving throw within 30 feet, usable INT mod times per long rest."
      },
      {
        name: "Magic Item Adept/Savant/Master",
        level: "10th/14th/18th",
        description: "Attune to more magic items (4/5/6), craft common/uncommon items faster and cheaper, and ignore class/race/spell requirements."
      }
    ],
    subclasses: [
      {
        name: "Alchemist",
        source: "Eberron: Rising from the Last War",
        focus: "Healing and experimental elixirs with random effects"
      },
      {
        name: "Armorer",
        source: "Tasha's Cauldron of Everything",
        focus: "Arcane armor with Guardian or Infiltrator modes for tanking or stealth"
      },
      {
        name: "Artillerist",
        source: "Eberron: Rising from the Last War",
        focus: "Magical turrets for damage and battlefield control"
      },
      {
        name: "Battle Smith",
        source: "Eberron: Rising from the Last War",
        focus: "Steel Defender companion and INT-based weapon attacks for frontline combat"
      }
    ],
    commonMistakes: [
      "Forgetting that infusions replace previous ones when you change them during a long rest",
      "Not tracking which items are currently infused (max 2 at level 2, scaling up)",
      "Overlooking that you can end an infusion early to free up a slot",
      "Missing that Flash of Genius is a reaction and limited by INT modifier per long rest"
    ],
    dmTips: [
      "Encourage creative use of tool proficiencies and Magical Tinkering for problem-solving",
      "Track infusion changes during long rests to prevent abuse",
      "Remember artificers can attune to more items than other classes (4-6 vs standard 3)",
      "Their spell list is limited but versatile - expect lots of utility and support casting"
    ],
    searchVolume: 8500
  },
  {
    slug: "barbarian-5e",
    name: "Barbarian 5e",
    className: "Barbarian",
    category: "classes",
    hitDie: "d12",
    primaryAbility: "Strength",
    savingThrows: "Strength, Constitution",
    armorProf: "Light armor, medium armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spellcasting: null,
    description: "Fierce warriors who channel primal fury in combat through devastating rages. Barbarians are frontline tanks who shrug off damage and deliver massive melee strikes.",
    keyFeatures: [
      {
        name: "Rage",
        level: "1st",
        description: "Bonus action to gain advantage on STR checks/saves, melee damage bonus, and resistance to physical damage. Limited uses per long rest."
      },
      {
        name: "Unarmored Defense",
        level: "1st",
        description: "AC equals 10 + DEX modifier + CON modifier when not wearing armor."
      },
      {
        name: "Reckless Attack",
        level: "2nd",
        description: "Gain advantage on melee weapon attacks using STR, but attacks against you have advantage until your next turn."
      },
      {
        name: "Danger Sense",
        level: "2nd",
        description: "Advantage on DEX saves against effects you can see while not blinded, deafened, or incapacitated."
      },
      {
        name: "Extra Attack",
        level: "5th",
        description: "Attack twice when taking the Attack action on your turn."
      },
      {
        name: "Persistent Rage",
        level: "15th",
        description: "Rage only ends early if you fall unconscious or choose to end it."
      }
    ],
    subclasses: [
      {
        name: "Path of the Berserker",
        source: "Player's Handbook",
        focus: "Maximum damage output with Frenzy for bonus action attacks, risking exhaustion"
      },
      {
        name: "Path of the Totem Warrior",
        source: "Player's Handbook",
        focus: "Animal spirit powers granting tactical benefits (Bear for resistance, Wolf for pack tactics, Eagle for mobility)"
      },
      {
        name: "Path of the Ancestral Guardian",
        source: "Xanathar's Guide to Everything",
        focus: "Tank/defender using ancestral spirits to protect allies"
      },
      {
        name: "Path of the Zealot",
        source: "Xanathar's Guide to Everything",
        focus: "Divine fury adding radiant/necrotic damage, extremely hard to kill"
      },
      {
        name: "Path of the Beast",
        source: "Tasha's Cauldron of Everything",
        focus: "Shapeshifting natural weapons (claws, tail, bite) for versatile combat"
      },
      {
        name: "Path of Wild Magic",
        source: "Tasha's Cauldron of Everything",
        focus: "Chaotic magical effects triggered during rage"
      }
    ],
    commonMistakes: [
      "Forgetting rage ends if you don't attack a hostile creature or take damage on your turn",
      "Wearing heavy armor which prevents Unarmored Defense and Rage benefits",
      "Not tracking rage uses per long rest (2 at 1st level, scaling to unlimited at 20th)",
      "Attempting to cast or concentrate on spells while raging (prohibited)"
    ],
    dmTips: [
      "Rage resistance only applies to bludgeoning, piercing, and slashing damage - use magic, fire, or psychic",
      "Barbarians excel at soaking damage but have low AC - swarms of weak enemies can exploit Reckless Attack",
      "Watch for players forgetting to maintain rage by attacking or taking damage each turn",
      "At high levels, Persistent Rage and damage resistance make them incredibly durable"
    ],
    searchVolume: 22100,
    aliases: ["dnd-barbarian"]
  },
  {
    slug: "bard-5e",
    name: "Bard 5e",
    className: "Bard",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Charisma",
    savingThrows: "Dexterity, Charisma",
    armorProf: "Light armor",
    weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    spellcasting: "Full caster (Charisma)",
    description: "Versatile performers and spellcasters who inspire allies and manipulate reality through music and words. Bards are skill masters with access to any spell through Magical Secrets.",
    keyFeatures: [
      {
        name: "Bardic Inspiration",
        level: "1st",
        description: "Grant allies a d6 (scaling to d12) they can add to ability checks, attack rolls, or saving throws. CHA mod uses per long rest (short rest at 5th level)."
      },
      {
        name: "Jack of All Trades",
        level: "2nd",
        description: "Add half proficiency bonus to any ability check that doesn't already include proficiency."
      },
      {
        name: "Song of Rest",
        level: "2nd",
        description: "Allies regain extra hit points during short rests (d6 at 2nd, scaling to d12)."
      },
      {
        name: "Expertise",
        level: "3rd",
        description: "Double proficiency bonus for two skills. Gain two more at 10th level."
      },
      {
        name: "Font of Inspiration",
        level: "5th",
        description: "Regain all Bardic Inspiration uses on short rest instead of long rest."
      },
      {
        name: "Magical Secrets",
        level: "10th",
        description: "Learn two spells from any class. Gain two more at 14th and 18th level."
      }
    ],
    subclasses: [
      {
        name: "College of Lore",
        source: "Player's Handbook",
        focus: "Ultimate skill monkey with Cutting Words and early Magical Secrets at 6th level"
      },
      {
        name: "College of Valor",
        source: "Player's Handbook",
        focus: "Combat-oriented with medium armor, shields, Extra Attack, and combat inspiration"
      },
      {
        name: "College of Glamour",
        source: "Xanathar's Guide to Everything",
        focus: "Fey charm and battlefield repositioning with temporary HP"
      },
      {
        name: "College of Swords",
        source: "Xanathar's Guide to Everything",
        focus: "Dexterous melee fighter with Blade Flourishes for offense and defense"
      },
      {
        name: "College of Whispers",
        source: "Xanathar's Guide to Everything",
        focus: "Espionage and psychic damage, stealing identities"
      },
      {
        name: "College of Eloquence",
        source: "Tasha's Cauldron of Everything",
        focus: "Master persuader with minimum rolls and unsettling words"
      },
      {
        name: "College of Creation",
        source: "Tasha's Cauldron of Everything",
        focus: "Creating objects and animating items with performance"
      }
    ],
    commonMistakes: [
      "Not using Bardic Inspiration liberally since it refreshes on short rest at 5th level",
      "Forgetting Jack of All Trades applies to initiative rolls and counterspell/dispel magic checks",
      "Overlooking that inspiration dice are given as a bonus action and used by allies on their turn",
      "Missing that Magical Secrets can grab any spell, including powerful options like Counterspell or Find Greater Steed"
    ],
    dmTips: [
      "Bards are incredibly versatile - expect support, control, face skills, and stolen spells from other classes",
      "They can copy any class's best spells via Magical Secrets, potentially outshining specialists",
      "High Charisma makes them natural party faces - prepare social encounters",
      "Jack of All Trades makes them decent at everything, reducing party weaknesses"
    ],
    searchVolume: 18700
  },
  {
    slug: "bladesinger-5e",
    name: "Bladesinger 5e",
    className: "Wizard (Bladesinger)",
    category: "classes",
    hitDie: "d6",
    primaryAbility: "Intelligence",
    savingThrows: "Intelligence, Wisdom",
    armorProf: "Light armor (via subclass)",
    weaponProf: "Simple weapons, one type of one-handed melee weapon (via subclass)",
    spellcasting: "Full caster (Intelligence)",
    description: "Elven wizards who blend swordplay with arcane magic, using their Bladesong to enhance mobility and defense. Bladesingers are gish hybrids excelling at hit-and-run melee tactics.",
    keyFeatures: [
      {
        name: "Bladesong",
        level: "2nd",
        description: "Bonus action for INT mod uses per long rest. Gain bonus to AC (INT mod), advantage on Acrobatics, +10 ft movement, and advantage on CON saves for concentration. Lasts 1 minute."
      },
      {
        name: "Extra Attack",
        level: "6th",
        description: "Attack twice, or attack once and cast a cantrip as part of the Attack action."
      },
      {
        name: "Song of Defense",
        level: "10th",
        description: "Use reaction when damaged to reduce damage by 5 times your wizard level by expending a spell slot."
      },
      {
        name: "Song of Victory",
        level: "14th",
        description: "Add INT modifier to melee weapon damage while Bladesong is active."
      }
    ],
    subclasses: [
      {
        name: "Bladesinger",
        source: "Tasha's Cauldron of Everything",
        focus: "This is the subclass itself - wizard arcane tradition focused on melee magic combat"
      }
    ],
    commonMistakes: [
      "Forgetting Bladesong ends if you wear medium/heavy armor, use a shield, or use two hands for an attack",
      "Not tracking Bladesong uses per long rest (equals proficiency bonus as of Tasha's)",
      "Missing that Extra Attack lets you replace one attack with a cantrip, not add a third action",
      "Overlooking that Song of Defense can consume higher level slots for more damage reduction"
    ],
    dmTips: [
      "Bladesong AC can get extremely high (base + DEX + INT) - target saves instead",
      "They're still wizards with d6 hit dice - focus fire or grapple to shut them down",
      "Advantage on concentration saves while Bladesonging makes them hard to interrupt",
      "Song of Defense can burn through spell slots quickly if pressured with consistent damage"
    ],
    searchVolume: 12400
  },
  {
    slug: "blood-hunter-5e",
    name: "Blood Hunter 5e",
    className: "Blood Hunter",
    category: "classes",
    hitDie: "d10",
    primaryAbility: "Strength or Dexterity",
    savingThrows: "Dexterity, Intelligence",
    armorProf: "Light armor, medium armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spellcasting: null,
    description: "Dark warriors who sacrifice their own vitality to hunt monsters using hemocraft magic. Created by Matt Mercer for Critical Role, Blood Hunters use blood curses and crimson rites to track and destroy evil.",
    keyFeatures: [
      {
        name: "Hunter's Bane",
        level: "1st",
        description: "Advantage on Survival and INT checks to track and recall information about fey, fiends, and undead."
      },
      {
        name: "Crimson Rite",
        level: "2nd",
        description: "Take necrotic damage equal to one hit die to activate rite on weapon, dealing extra damage (fire, cold, lightning, etc). Lasts until short/long rest."
      },
      {
        name: "Blood Curse of Binding/Bloated Agony/etc",
        level: "1st",
        description: "Use blood curses to debuff enemies or protect allies. Amplify by taking damage. Learn more curses as you level."
      },
      {
        name: "Extra Attack",
        level: "5th",
        description: "Attack twice when taking the Attack action."
      },
      {
        name: "Brand of Castigation",
        level: "6th",
        description: "Mark targets with Crimson Rite for additional psychic damage when they hit you."
      },
      {
        name: "Grim Psychometry",
        level: "9th",
        description: "Touch object and learn recent history through visions."
      }
    ],
    subclasses: [
      {
        name: "Order of the Ghostslayer",
        source: "Critical Role",
        focus: "Hunting undead with rite damage ignoring resistance and curse of the exorcist"
      },
      {
        name: "Order of the Profane Soul",
        source: "Critical Role",
        focus: "Warlock pact magic for limited spellcasting and rite focus"
      },
      {
        name: "Order of the Mutant",
        source: "Critical Role",
        focus: "Mutagenic formulas granting temporary physical enhancements with side effects"
      },
      {
        name: "Order of the Lycan",
        source: "Critical Role",
        focus: "Controlled lycanthropy transformation for melee power and regeneration"
      }
    ],
    commonMistakes: [
      "Forgetting Crimson Rite costs hit point maximum (not current HP) equal to your hit die",
      "Not tracking which rites are active on which weapons",
      "Amplifying blood curses too often without managing HP loss",
      "Missing that rite damage type must be chosen when activating, not per attack"
    ],
    dmTips: [
      "Blood Hunters are fragile because they constantly damage themselves - track their HP carefully",
      "Blood curses are powerful but limited (1 use per rest, +1 per proficiency bonus above +2)",
      "This is unofficial content - confirm with player which version they're using (2020 update recommended)",
      "Order of the Lycan can become very powerful but has roleplay consequences"
    ],
    searchVolume: 9800
  },
  {
    slug: "cleric-5e",
    name: "Cleric 5e",
    className: "Cleric",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Wisdom",
    savingThrows: "Wisdom, Charisma",
    armorProf: "Light armor, medium armor, shields",
    weaponProf: "Simple weapons",
    spellcasting: "Full caster (Wisdom)",
    description: "Divine spellcasters who channel the power of their deity to heal, protect, and smite enemies. Clerics are versatile support with strong healing, buff spells, and surprising combat capability.",
    keyFeatures: [
      {
        name: "Divine Domain",
        level: "1st",
        description: "Choose a domain granting bonus spells, armor/weapon proficiencies, and channel divinity options."
      },
      {
        name: "Channel Divinity",
        level: "2nd",
        description: "Turn Undead (all clerics) plus domain-specific option. 1 use per rest, scaling to 3 at high levels."
      },
      {
        name: "Destroy Undead",
        level: "5th",
        description: "Turn Undead instantly destroys undead of CR 1/2 or lower (scaling to CR 4 at 17th)."
      },
      {
        name: "Divine Intervention",
        level: "10th",
        description: "Call on deity for direct aid, percentage chance equal to cleric level. Automatic success at 20th level."
      },
      {
        name: "Blessed Strikes or Potent Spellcasting",
        level: "8th",
        description: "Add WIS modifier to cantrip damage or weapon damage once per turn (Tasha's optional)."
      }
    ],
    subclasses: [
      {
        name: "Life Domain",
        source: "Player's Handbook",
        focus: "Best healing in game with bonus healing and heavy armor proficiency"
      },
      {
        name: "Light Domain",
        source: "Player's Handbook",
        focus: "Radiant damage and control with Warding Flare and fireball"
      },
      {
        name: "War Domain",
        source: "Player's Handbook",
        focus: "Martial combat with bonus attacks and heavy armor"
      },
      {
        name: "Trickery Domain",
        source: "Player's Handbook",
        focus: "Stealth and illusions with duplicate and pass without trace"
      },
      {
        name: "Tempest Domain",
        source: "Player's Handbook",
        focus: "Lightning and thunder damage with Destructive Wrath maximizing damage"
      },
      {
        name: "Knowledge Domain",
        source: "Player's Handbook",
        focus: "Skills and information gathering with expertise and read thoughts"
      },
      {
        name: "Nature Domain",
        source: "Player's Handbook",
        focus: "Druid-like abilities with heavy armor"
      },
      {
        name: "Grave Domain",
        source: "Xanathar's Guide to Everything",
        focus: "Death prevention with spare the dying range and vulnerability on crits"
      },
      {
        name: "Forge Domain",
        source: "Xanathar's Guide to Everything",
        focus: "Crafting and AC bonuses with heavy armor"
      },
      {
        name: "Order Domain",
        source: "Tasha's Cauldron of Everything",
        focus: "Commanding allies to attack when you cast spells on them"
      },
      {
        name: "Peace Domain",
        source: "Tasha's Cauldron of Everything",
        focus: "Extremely powerful support with Emboldening Bond granting d4 to saves/checks"
      },
      {
        name: "Twilight Domain",
        source: "Tasha's Cauldron of Everything",
        focus: "Overpowered darkvision sharing and temp HP aura"
      }
    ],
    commonMistakes: [
      "Not preparing the right spells for the day - clerics know all domain spells and can change prepared list daily",
      "Forgetting domain spells are always prepared and don't count against prepared spell limit",
      "Using spell slots for healing in combat when cantrips/Channel Divinity are better (heal after fights)",
      "Not using Shield of Faith, Bless, or Spiritual Weapon - clerics have excellent bonus action spells"
    ],
    dmTips: [
      "Clerics are deceptively powerful - they can heal, tank, blast, and control",
      "Spirit Guardians is one of the best combat spells in the game",
      "Some domains (Twilight, Peace) are considered overpowered - discuss balance with players",
      "Track Channel Divinity uses (1-3 per rest depending on level)"
    ],
    searchVolume: 24600
  },
  {
    slug: "paladin-5e",
    name: "Paladin 5e",
    className: "Paladin",
    category: "classes",
    hitDie: "d10",
    primaryAbility: "Strength, Charisma",
    savingThrows: "Wisdom, Charisma",
    armorProf: "All armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spellcasting: "Half caster (Charisma)",
    description: "Holy warriors bound by sacred oaths who combine martial prowess with divine magic. Paladins are frontline fighters who smite enemies and protect allies with powerful auras.",
    keyFeatures: [
      {
        name: "Lay on Hands",
        level: "1st",
        description: "Heal up to 5 HP per paladin level per long rest as an action. Can also cure diseases or poison for 5 HP."
      },
      {
        name: "Divine Smite",
        level: "2nd",
        description: "Expend spell slot when you hit with melee weapon to deal 2d8 (+1d8 per slot level) radiant damage. +1d8 against undead/fiends."
      },
      {
        name: "Fighting Style",
        level: "2nd",
        description: "Choose Defense, Dueling, Great Weapon Fighting, or Protection (Blessed Warrior in Tasha's for cantrips)."
      },
      {
        name: "Channel Divinity",
        level: "3rd",
        description: "Sacred Oath feature usable once per rest. Most oaths grant offensive or defensive options."
      },
      {
        name: "Extra Attack",
        level: "5th",
        description: "Attack twice when taking the Attack action."
      },
      {
        name: "Aura of Protection",
        level: "6th",
        description: "You and allies within 10 ft (30 ft at 18th) gain bonus to saves equal to your CHA modifier."
      }
    ],
    subclasses: [
      {
        name: "Oath of Devotion",
        source: "Player's Handbook",
        focus: "Classic holy knight with Sacred Weapon and protection from charm"
      },
      {
        name: "Oath of the Ancients",
        source: "Player's Handbook",
        focus: "Nature-themed with resistance to spell damage aura"
      },
      {
        name: "Oath of Vengeance",
        source: "Player's Handbook",
        focus: "Aggressive hunter with advantage on attacks against marked target"
      },
      {
        name: "Oathbreaker",
        source: "Dungeon Master's Guide",
        focus: "Evil paladin controlling undead with aura boosting fiends/undead"
      },
      {
        name: "Oath of Conquest",
        source: "Xanathar's Guide to Everything",
        focus: "Fear-based control reducing enemy speed to 0 in aura"
      },
      {
        name: "Oath of Redemption",
        source: "Xanathar's Guide to Everything",
        focus: "Pacifist protector reflecting damage and taking hits for allies"
      },
      {
        name: "Oath of Glory",
        source: "Tasha's Cauldron of Everything",
        focus: "Athletic hero with speed boosts and legendary athletics"
      },
      {
        name: "Oath of the Watchers",
        source: "Tasha's Cauldron of Everything",
        focus: "Anti-extraplanar with initiative bonuses and mental save aura"
      }
    ],
    commonMistakes: [
      "Smiting before confirming the hit actually lands - declare Divine Smite after rolling damage",
      "Forgetting Aura of Protection affects all saves, making the party incredibly resilient",
      "Not managing spell slots between smites and utility spells like Bless or Find Steed",
      "Missing that you can smite on opportunity attacks and critical hits (double smite dice on crits)"
    ],
    dmTips: [
      "Aura of Protection is incredibly powerful - +3 to +5 on all saves for the party",
      "Paladins nova hard with multiple smites but burn resources quickly",
      "Their spell slots are limited but impactful - expect Bless, Shield of Faith, Find Steed",
      "Smite damage makes them excellent against single big targets but less effective against swarms"
    ],
    searchVolume: 28900,
    aliases: ["paladin-5e-alt"]
  },
  {
    slug: "druid-5e",
    name: "Druid 5e",
    className: "Druid",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Wisdom",
    savingThrows: "Intelligence, Wisdom",
    armorProf: "Light armor, medium armor, shields (non-metal)",
    weaponProf: "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
    spellcasting: "Full caster (Wisdom)",
    description: "Nature priests who draw power from the land and can shapeshift into beasts. Druids are versatile casters with excellent control spells and Wild Shape utility.",
    keyFeatures: [
      {
        name: "Druidic",
        level: "1st",
        description: "Secret language of druids and ability to leave hidden messages in natural settings."
      },
      {
        name: "Wild Shape",
        level: "2nd",
        description: "Transform into beasts you've seen with CR limit based on level. 2 uses per short rest, limited duration."
      },
      {
        name: "Wild Companion",
        level: "2nd",
        description: "Expend Wild Shape use to cast Find Familiar (Tasha's optional feature)."
      },
      {
        name: "Circle Feature",
        level: "2nd",
        description: "Druid circle grants combat, spellcasting, or utility enhancements."
      },
      {
        name: "Timeless Body",
        level: "18th",
        description: "Age 1 year for every 10 years that pass and can't be magically aged."
      },
      {
        name: "Beast Spells",
        level: "18th",
        description: "Cast many druid spells while in Wild Shape form."
      }
    ],
    subclasses: [
      {
        name: "Circle of the Land",
        source: "Player's Handbook",
        focus: "Spell recovery and bonus spells based on terrain type (arctic, coast, forest, etc)"
      },
      {
        name: "Circle of the Moon",
        source: "Player's Handbook",
        focus: "Combat Wild Shape with higher CR and bonus action transformation"
      },
      {
        name: "Circle of Dreams",
        source: "Xanathar's Guide to Everything",
        focus: "Fey healing and teleportation with bonus action heal pool"
      },
      {
        name: "Circle of the Shepherd",
        source: "Xanathar's Guide to Everything",
        focus: "Summoning and buffing beasts/fey with spirit totems"
      },
      {
        name: "Circle of Spores",
        source: "Tasha's Cauldron of Everything",
        focus: "Necrotic damage aura and zombie animation instead of Wild Shape"
      },
      {
        name: "Circle of Stars",
        source: "Tasha's Cauldron of Everything",
        focus: "Starry Form constellations for healing, damage, or concentration advantage"
      },
      {
        name: "Circle of Wildfire",
        source: "Tasha's Cauldron of Everything",
        focus: "Fire spirit companion for damage and teleportation"
      }
    ],
    commonMistakes: [
      "Forgetting Wild Shape HP is separate - you revert when beast form reaches 0 HP with overflow damage",
      "Not tracking CR limits for Wild Shape (CR 1/4 at 2nd, CR 1 at 8th, no swim/fly until specific levels)",
      "Missing that you can't cast spells in Wild Shape until 18th level (except Moon druids with 18th level feature)",
      "Overlooking that you retain mental stats (INT, WIS, CHA) and class features while wild shaped"
    ],
    dmTips: [
      "Moon druids are incredibly tanky at low levels due to Wild Shape HP buffer",
      "Concentration spells + Wild Shape makes druids durable casters",
      "Entangle, Spike Growth, and Conjure Animals are notorious for slowing combat",
      "They refuse metal armor for roleplay reasons but can use hide or other materials"
    ],
    searchVolume: 19200
  },
  {
    slug: "eldritch-knight-5e",
    name: "Eldritch Knight 5e",
    className: "Fighter (Eldritch Knight)",
    category: "classes",
    hitDie: "d10",
    primaryAbility: "Strength or Dexterity, Intelligence",
    savingThrows: "Strength, Constitution",
    armorProf: "All armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spellcasting: "Third caster (Intelligence)",
    description: "Fighters who supplement martial prowess with abjuration and evocation magic. Eldritch Knights blend weapon attacks with spellcasting for tactical versatility.",
    keyFeatures: [
      {
        name: "Spellcasting",
        level: "3rd",
        description: "Learn wizard spells (primarily abjuration/evocation). Limited slots as third caster."
      },
      {
        name: "Weapon Bond",
        level: "3rd",
        description: "Bond with up to two weapons, can't be disarmed, and summon as bonus action."
      },
      {
        name: "War Magic",
        level: "7th",
        description: "When you cast a cantrip, make one weapon attack as a bonus action."
      },
      {
        name: "Eldritch Strike",
        level: "10th",
        description: "Creature hit by your weapon attack has disadvantage on next save against your spell until end of your next turn."
      },
      {
        name: "Arcane Charge",
        level: "15th",
        description: "Teleport up to 30 feet when using Action Surge, before or after the extra action."
      },
      {
        name: "Improved War Magic",
        level: "18th",
        description: "Attack as bonus action after casting any spell, not just cantrips."
      }
    ],
    subclasses: [
      {
        name: "Eldritch Knight",
        source: "Player's Handbook",
        focus: "This is the subclass itself - fighter martial archetype blending magic and melee"
      }
    ],
    commonMistakes: [
      "Forgetting spell restrictions - must pick mostly abjuration/evocation until high levels",
      "Not using Shield spell, which is one of the best reasons to be an Eldritch Knight",
      "Missing that War Magic requires casting a cantrip, not any spell (until 18th level)",
      "Overlooking Weapon Bond prevents disarming and allows teleporting weapons to hand"
    ],
    dmTips: [
      "Shield and Absorb Elements make Eldritch Knights extremely durable",
      "They're limited to 1/3 spell progression - don't expect heavy spellcasting",
      "War Magic at 7th level makes them dangerous with cantrips like Booming Blade",
      "Eldritch Strike disadvantage combos well with allies casting save spells"
    ],
    searchVolume: 11300,
    aliases: ["eldritch-knight-5e-alt"]
  },
  {
    slug: "fighter-5e",
    name: "Fighter 5e",
    className: "Fighter",
    category: "classes",
    hitDie: "d10",
    primaryAbility: "Strength or Dexterity",
    savingThrows: "Strength, Constitution",
    armorProf: "All armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spellcasting: null,
    description: "Masters of weapons and armor who excel at sustained combat through extra attacks and quick recovery. Fighters are versatile warriors with the most attacks per turn and customization options.",
    keyFeatures: [
      {
        name: "Fighting Style",
        level: "1st",
        description: "Choose Archery, Defense, Dueling, Great Weapon Fighting, Protection, Two-Weapon Fighting, or others from Tasha's."
      },
      {
        name: "Second Wind",
        level: "1st",
        description: "Bonus action to regain 1d10 + fighter level HP once per short rest."
      },
      {
        name: "Action Surge",
        level: "2nd",
        description: "Take one additional action on your turn. 1 use per rest (2 uses at 17th level)."
      },
      {
        name: "Extra Attack",
        level: "5th",
        description: "Attack twice (three times at 11th, four times at 20th level)."
      },
      {
        name: "Indomitable",
        level: "9th",
        description: "Reroll a failed save once per long rest (2/rest at 13th, 3/rest at 17th)."
      }
    ],
    subclasses: [
      {
        name: "Champion",
        source: "Player's Handbook",
        focus: "Expanded critical hit range (19-20, then 18-20) for simple but effective combat"
      },
      {
        name: "Battle Master",
        source: "Player's Handbook",
        focus: "Superiority dice for tactical maneuvers (Trip, Riposte, Precision Attack, etc)"
      },
      {
        name: "Eldritch Knight",
        source: "Player's Handbook",
        focus: "Wizard spellcasting (see eldritch-knight-5e for details)"
      },
      {
        name: "Arcane Archer",
        source: "Xanathar's Guide to Everything",
        focus: "Magical arrow effects with limited uses per rest"
      },
      {
        name: "Cavalier",
        source: "Xanathar's Guide to Everything",
        focus: "Mounted combat and protecting allies with opportunity attacks"
      },
      {
        name: "Samurai",
        source: "Xanathar's Guide to Everything",
        focus: "Fighting Spirit granting advantage and temp HP"
      },
      {
        name: "Echo Knight",
        source: "Explorer's Guide to Wildemount",
        focus: "Creating echo copies for teleportation and extra attacks"
      },
      {
        name: "Psi Warrior",
        source: "Tasha's Cauldron of Everything",
        focus: "Psionic energy dice for damage, protection, and telekinesis"
      },
      {
        name: "Rune Knight",
        source: "Tasha's Cauldron of Everything",
        focus: "Growing to Large/Huge size and using runes for various effects"
      }
    ],
    commonMistakes: [
      "Not using Action Surge enough - it refreshes on short rest",
      "Forgetting Action Surge gives an extra action (including extra attacks) but not extra bonus action",
      "Missing that Indomitable lets you reroll but must keep the new result even if worse",
      "Not leveraging four attacks at 20th level - fighters are sustained damage dealers"
    ],
    dmTips: [
      "Fighters are deceptively powerful with multiple attacks and Action Surge nova rounds",
      "Battle Master maneuvers add significant tactical depth - track superiority dice",
      "Echo Knight can be confusing - the echo isn't a creature and has unique rules",
      "Short rest classes like Fighter excel in dungeons with multiple encounters per day"
    ],
    searchVolume: 21500
  },
  {
    slug: "gunslinger-5e",
    name: "Gunslinger 5e",
    className: "Fighter (Gunslinger)",
    category: "classes",
    hitDie: "d10",
    primaryAbility: "Dexterity",
    savingThrows: "Strength, Constitution",
    armorProf: "All armor, shields",
    weaponProf: "Simple weapons, martial weapons, firearms",
    spellcasting: null,
    description: "Fighters specializing in firearms with trick shots and quick-draw expertise. Created by Matt Mercer, Gunslingers are precision strikers who risk firearm misfires for devastating attacks.",
    keyFeatures: [
      {
        name: "Firearm Proficiency",
        level: "3rd",
        description: "Proficiency with firearms and ability to craft/repair them with tinker's tools."
      },
      {
        name: "Grit",
        level: "3rd",
        description: "Pool of points equal to WIS modifier (minimum 1) for trick shots. Regain on kill or short rest."
      },
      {
        name: "Trick Shots",
        level: "3rd",
        description: "Spend grit to perform special attacks: Disarming Shot, Deadeye Shot, Forceful Shot, etc. Learn more as you level."
      },
      {
        name: "Quickdraw",
        level: "7th",
        description: "Add proficiency bonus to initiative and can stow/draw firearms freely."
      },
      {
        name: "Rapid Repair",
        level: "10th",
        description: "Fix misfired firearm as bonus action by spending grit."
      },
      {
        name: "Lightning Reload",
        level: "15th",
        description: "Reload any firearm as bonus action."
      }
    ],
    subclasses: [
      {
        name: "Gunslinger",
        source: "Critical Role",
        focus: "This is the subclass itself - fighter martial archetype focused on firearms combat"
      }
    ],
    commonMistakes: [
      "Not tracking firearm misfire scores - each gun has a misfire property that can jam it",
      "Forgetting you need to reload firearms (various action costs depending on weapon)",
      "Missing that grit refreshes on short rest or when you score a killing blow",
      "Not managing ammo and repair costs - firearms require tinker's tools to fix"
    ],
    dmTips: [
      "This is unofficial Matt Mercer content - confirm which version and whether firearms are allowed in your setting",
      "Firearm damage can be high but misfires add risk/reward balance",
      "Trick Shots are limited by grit points (WIS modifier) so they're a finite resource",
      "Requires tinker's tools, materials, and downtime to craft ammunition and repair"
    ],
    searchVolume: 7200
  },
  {
    slug: "hexblade-warlock-5e",
    name: "Hexblade Warlock 5e",
    className: "Warlock (Hexblade)",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Charisma",
    savingThrows: "Wisdom, Charisma",
    armorProf: "Light armor, medium armor, shields (via subclass)",
    weaponProf: "Simple weapons, martial weapons (via subclass)",
    spellcasting: "Pact caster (Charisma)",
    description: "Warlocks bound to sentient weapons from the Shadowfell who fight in melee using Charisma. Hexblades are powerful gish builds combining Eldritch Blast spam with weapon attacks.",
    keyFeatures: [
      {
        name: "Hexblade's Curse",
        level: "1st",
        description: "Bonus action to curse target, gaining +proficiency bonus to damage, crit on 19-20, and heal when target dies. Once per short rest."
      },
      {
        name: "Hex Warrior",
        level: "1st",
        description: "Use CHA for attack/damage with one weapon (or pact weapon). Gain medium armor, shields, and martial weapons."
      },
      {
        name: "Accursed Specter",
        level: "6th",
        description: "Raise slain humanoid as specter under your command once per long rest."
      },
      {
        name: "Armor of Hexes",
        level: "10th",
        description: "Cursed target misses you 50% of the time (roll d6, 4+ misses)."
      },
      {
        name: "Master of Hexes",
        level: "14th",
        description: "Transfer Hexblade's Curse to new target when cursed creature dies."
      }
    ],
    subclasses: [
      {
        name: "Hexblade",
        source: "Xanathar's Guide to Everything",
        focus: "This is the subclass itself - warlock otherworldly patron focused on weapon combat"
      }
    ],
    commonMistakes: [
      "Forgetting Hexblade's Curse bonus applies to all damage rolls, including Eldritch Blast",
      "Not managing Hex Warrior - you must touch weapon during long rest (or use pact weapon)",
      "Missing that you're still a warlock - maintain Eldritch Blast for ranged option",
      "Overlooking Pact of the Blade synergy for summoning any weapon and using CHA"
    ],
    dmTips: [
      "Hexblade is widely considered the strongest warlock patron, especially for multiclassing",
      "CHA-based attacks make them excellent for paladin/bard multiclass (smite with CHA weapons)",
      "They have limited spell slots but regain on short rest - encourage short rests",
      "Hexblade's Curse + Hex spell stacks for massive single-target damage"
    ],
    searchVolume: 15600
  },
  {
    slug: "monk-5e",
    name: "Monk 5e",
    className: "Monk",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Dexterity, Wisdom",
    savingThrows: "Strength, Dexterity",
    armorProf: "None",
    weaponProf: "Simple weapons, shortswords",
    spellcasting: null,
    description: "Martial artists who channel ki energy for supernatural speed and strikes. Monks are mobile skirmishers with flurry of blows, stunning strikes, and incredible mobility.",
    keyFeatures: [
      {
        name: "Unarmored Defense",
        level: "1st",
        description: "AC equals 10 + DEX modifier + WIS modifier when wearing no armor and not using shield."
      },
      {
        name: "Martial Arts",
        level: "1st",
        description: "Unarmed strikes and monk weapons use martial arts die (d4 scaling to d10). Bonus action unarmed strike after attack action."
      },
      {
        name: "Ki",
        level: "2nd",
        description: "Pool of ki points equal to monk level for Flurry of Blows, Patient Defense, Step of the Wind, and later abilities."
      },
      {
        name: "Unarmored Movement",
        level: "2nd",
        description: "Gain bonus speed (+10 ft scaling to +30 ft). At 9th level, run on walls and water."
      },
      {
        name: "Stunning Strike",
        level: "5th",
        description: "Spend 1 ki when you hit to force CON save or stun until end of your next turn."
      },
      {
        name: "Evasion",
        level: "7th",
        description: "Take no damage on successful DEX save (half on failure) for effects that deal half damage on save."
      }
    ],
    subclasses: [
      {
        name: "Way of the Open Hand",
        source: "Player's Handbook",
        focus: "Classic monk with enhanced Flurry effects (prone, push, no reactions)"
      },
      {
        name: "Way of Shadow",
        source: "Player's Handbook",
        focus: "Ninja with darkness/stealth spells and teleportation"
      },
      {
        name: "Way of the Four Elements",
        source: "Player's Handbook",
        focus: "Elemental spells via ki (considered underpowered)"
      },
      {
        name: "Way of the Drunken Master",
        source: "Xanathar's Guide to Everything",
        focus: "Evasive fighting with disengage on Flurry and redirect attacks"
      },
      {
        name: "Way of the Kensei",
        source: "Xanathar's Guide to Everything",
        focus: "Weapon specialist using longswords, longbows as monk weapons"
      },
      {
        name: "Way of the Sun Soul",
        source: "Xanathar's Guide to Everything",
        focus: "Ranged radiant blast attacks"
      },
      {
        name: "Way of Mercy",
        source: "Tasha's Cauldron of Everything",
        focus: "Healing and necrotic touch using ki"
      },
      {
        name: "Way of the Astral Self",
        source: "Tasha's Cauldron of Everything",
        focus: "Summoning spectral arms for reach and WIS-based attacks"
      }
    ],
    commonMistakes: [
      "Forgetting bonus action unarmed strike is free, but Flurry of Blows costs 1 ki for two strikes",
      "Wearing armor which disables Unarmored Defense and Martial Arts",
      "Not tracking ki points (equal to monk level, refresh on short rest)",
      "Missing that Stunning Strike can be used multiple times per turn if you have ki"
    ],
    dmTips: [
      "Monks are highly mobile - prepare vertical terrain and obstacles",
      "Stunning Strike can trivialize single boss fights - have legendary resistances ready",
      "They're ki-dependent and shine with short rests between encounters",
      "Relatively low damage compared to other martials but excellent control with stuns"
    ],
    searchVolume: 16800
  },
  {
    slug: "ranger-5e",
    name: "Ranger 5e",
    className: "Ranger",
    category: "classes",
    hitDie: "d10",
    primaryAbility: "Dexterity, Wisdom",
    savingThrows: "Strength, Dexterity",
    armorProf: "Light armor, medium armor, shields",
    weaponProf: "Simple weapons, martial weapons",
    spellcasting: "Half caster (Wisdom)",
    description: "Wilderness warriors who track enemies and protect civilization's borders using martial skill and nature magic. Rangers excel at focused damage and exploration utility.",
    keyFeatures: [
      {
        name: "Favored Enemy",
        level: "1st",
        description: "Advantage on tracking and recalling info about chosen creature types. (Tasha's replacement: Favored Foe adds 1d4 damage)"
      },
      {
        name: "Natural Explorer",
        level: "1st",
        description: "Benefits in favored terrain (ignore difficult terrain, advantage on initiative, bonuses on exploration). (Tasha's replacement: Deft Explorer)"
      },
      {
        name: "Fighting Style",
        level: "2nd",
        description: "Choose Archery, Defense, Dueling, Two-Weapon Fighting, or Druidic Warrior (Tasha's for cantrips)."
      },
      {
        name: "Spellcasting",
        level: "2nd",
        description: "Know ranger spells with limited slots as half caster. Strong picks: Hunter's Mark, Pass Without Trace, Conjure Animals."
      },
      {
        name: "Ranger Conclave",
        level: "3rd",
        description: "Choose subclass granting companion, combat style, or magic focus."
      },
      {
        name: "Extra Attack",
        level: "5th",
        description: "Attack twice when taking the Attack action."
      }
    ],
    subclasses: [
      {
        name: "Hunter",
        source: "Player's Handbook",
        focus: "Versatile combat with choices at each tier (Colossus Slayer, Multiattack Defense, etc)"
      },
      {
        name: "Beast Master",
        source: "Player's Handbook",
        focus: "Animal companion (PHB version weak, Tasha's revised version much better)"
      },
      {
        name: "Gloom Stalker",
        source: "Xanathar's Guide to Everything",
        focus: "Darkvision ambusher with extra attack on first turn and invisibility to darkvision"
      },
      {
        name: "Horizon Walker",
        source: "Xanathar's Guide to Everything",
        focus: "Planar warrior with teleportation and force damage"
      },
      {
        name: "Monster Slayer",
        source: "Xanathar's Guide to Everything",
        focus: "Anti-magic hunter with Slayer's Prey and protective spells"
      },
      {
        name: "Fey Wanderer",
        source: "Tasha's Cauldron of Everything",
        focus: "Fey magic and Charisma skills with psychic damage boost"
      },
      {
        name: "Swarmkeeper",
        source: "Tasha's Cauldron of Everything",
        focus: "Swarm of spirits granting movement, damage, or control"
      },
      {
        name: "Drakewarden",
        source: "Fizban's Treasury of Dragons",
        focus: "Dragon companion that grows rideable at 7th level"
      }
    ],
    commonMistakes: [
      "Using PHB Beast Master without Tasha's revisions (original is very weak)",
      "Concentrating on Hunter's Mark every fight when Pass Without Trace or Entangle may be better",
      "Forgetting Natural Explorer benefits only apply in favored terrains (unless using Tasha's Deft Explorer)",
      "Not preparing situational spells - rangers can change spells on long rest"
    ],
    dmTips: [
      "Rangers were weak in PHB but Tasha's optional features fixed most problems",
      "Gloom Stalker is extremely powerful, especially in dark dungeons",
      "Pass Without Trace makes entire party stealthy (+10 to Stealth)",
      "Conjure Animals can slow combat - consider using average stats for swarms"
    ],
    searchVolume: 17900
  },
  {
    slug: "rogue-5e",
    name: "Rogue 5e",
    className: "Rogue",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Dexterity",
    savingThrows: "Dexterity, Intelligence",
    armorProf: "Light armor",
    weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    spellcasting: null,
    description: "Skilled experts who strike from shadows with devastating Sneak Attacks. Rogues excel at skills, avoiding danger, and dealing massive single-target damage.",
    keyFeatures: [
      {
        name: "Expertise",
        level: "1st",
        description: "Double proficiency bonus for two skills. Gain two more at 6th level."
      },
      {
        name: "Sneak Attack",
        level: "1st",
        description: "Once per turn, deal extra damage (1d6 scaling to 10d6) when you have advantage or ally is within 5 ft of target."
      },
      {
        name: "Thieves' Cant",
        level: "1st",
        description: "Secret language and code for leaving hidden messages."
      },
      {
        name: "Cunning Action",
        level: "2nd",
        description: "Bonus action to Dash, Disengage, or Hide."
      },
      {
        name: "Uncanny Dodge",
        level: "5th",
        description: "Use reaction to halve damage from one attack you can see."
      },
      {
        name: "Evasion",
        level: "7th",
        description: "Take no damage on successful DEX save (half on failure) for effects that deal half damage on save."
      }
    ],
    subclasses: [
      {
        name: "Thief",
        source: "Player's Handbook",
        focus: "Use objects as bonus action, climb at full speed, Use Magic Device at 13th to use any magic item"
      },
      {
        name: "Assassin",
        source: "Player's Handbook",
        focus: "Advantage against creatures that haven't acted yet, auto-crit on surprised creatures, disguise mastery"
      },
      {
        name: "Arcane Trickster",
        source: "Player's Handbook",
        focus: "1/3 spellcaster with wizard spells, Mage Hand at range, steal with magic"
      },
      {
        name: "Inquisitive",
        source: "Xanathar's Guide to Everything",
        focus: "Sherlock Holmes rogue, bonus to Insight/Investigation, Sneak Attack without advantage if enemy has no allies nearby"
      },
      {
        name: "Mastermind",
        source: "Xanathar's Guide to Everything",
        focus: "Help as bonus action at 30 feet, mimic accents, disguise and impersonation expert"
      },
      {
        name: "Scout",
        source: "Xanathar's Guide to Everything",
        focus: "Mobility-focused, reaction to move away from enemies, advantage on initiative, expertise in Nature/Survival"
      },
      {
        name: "Swashbuckler",
        source: "Xanathar's Guide to Everything",
        focus: "Dashing duelist, Sneak Attack without allies if 1v1, Charisma to initiative, free Disengage after attacking"
      },
      {
        name: "Phantom",
        source: "Tasha's Cauldron of Everything",
        focus: "Death-themed, deal damage to two creatures, collect soul trinkets, communicate with dead"
      },
      {
        name: "Soulknife",
        source: "Tasha's Cauldron of Everything",
        focus: "Psionic rogue with psychic blades, telepathy, roll d20 after Sneak Attack to regain psi die"
      }
    ],
    commonMistakes: [
      "Thinking Sneak Attack requires hiding - you just need advantage or an ally within 5 feet of the enemy",
      "Not realizing Sneak Attack works on opportunity attacks - it's once per turn, not once per round",
      "Forgetting Uncanny Dodge only works against one attack per round - choose wisely",
      "Overlooking that Sneak Attack requires finesse or ranged weapon - no Sneak Attack with a greataxe",
      "Not using Cunning Action Hide in combat - hiding and attacking with advantage is core rogue strategy"
    ],
    dmTips: [
      "Rogues need opportunities to hide and reposition - provide cover and shadows",
      "Reliable Talent at 11th level means they rarely fail skill checks - let them feel competent",
      "Assassins need surprise to shine - clearly communicate surprise rules and stealth mechanics"
    ],
    searchVolume: 19400
  },
  {
    slug: "sorcerer-5e",
    name: "Sorcerer 5e",
    className: "Sorcerer",
    category: "classes",
    hitDie: "d6",
    primaryAbility: "Charisma",
    savingThrows: "Constitution, Charisma",
    armorProf: "None",
    weaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows",
    spellcasting: "Full caster (Charisma)",
    description: "Innate spellcasters who manipulate magic through sorcery points and metamagic. Sorcerers trade spell versatility for the ability to enhance and modify their limited spell list.",
    keyFeatures: [
      {
        name: "Sorcerous Origin",
        level: "1st",
        description: "Source of magic granting bonus spells and unique abilities."
      },
      {
        name: "Font of Magic",
        level: "2nd",
        description: "Sorcery points equal to sorcerer level. Convert between spell slots and points or fuel metamagic."
      },
      {
        name: "Metamagic",
        level: "3rd",
        description: "Learn 2 metamagic options (4 total by 17th). Spend sorcery points to modify spells: Quicken, Twin, Subtle, etc."
      },
      {
        name: "Sorcerous Restoration",
        level: "20th",
        description: "Regain 4 sorcery points on short rest."
      }
    ],
    subclasses: [
      {
        name: "Draconic Bloodline",
        source: "Player's Handbook",
        focus: "Dragon ancestry granting AC bonus, CHA damage to elemental spells, and wings at 14th"
      },
      {
        name: "Wild Magic",
        source: "Player's Handbook",
        focus: "Unpredictable surges, Tides of Chaos advantage then trigger surge, Bend Luck to alter rolls"
      },
      {
        name: "Divine Soul",
        source: "Xanathar's Guide to Everything",
        focus: "Cleric spell list access for healing and support"
      },
      {
        name: "Shadow Magic",
        source: "Xanathar's Guide to Everything",
        focus: "Darkness spell, summon hound of ill omen, teleport via shadows, immune to death at 0 HP once"
      },
      {
        name: "Storm Sorcery",
        source: "Xanathar's Guide to Everything",
        focus: "Fly 10ft after casting spells, storm guide controls weather, lightning/thunder damage resistance"
      },
      {
        name: "Aberrant Mind",
        source: "Tasha's Cauldron of Everything",
        focus: "Psionic spells cast subtly and telepathy"
      },
      {
        name: "Clockwork Soul",
        source: "Tasha's Cauldron of Everything",
        focus: "Order magic with advantage/disadvantage negation and defensive spells"
      }
    ],
    commonMistakes: [
      "Not converting spell slots to sorcery points between combats - Font of Magic is flexible, use it",
      "Forgetting Twinned Spell only works on spells that target one creature and can't target multiple - no Twinned Fireball",
      "Not realizing Subtle Spell lets you cast in Silence and without being seen - it's incredible for stealth casting",
      "Quickened Spell confusion - if you cast a bonus action spell, you can only cast cantrips with your action that turn",
      "Choosing too many blast spells - sorcerers know very few spells, pick versatile options"
    ],
    dmTips: [
      "Wild Magic surges should happen regularly - roll on the table, it's fun chaos",
      "Sorcerers burn through spell slots converting to sorcery points - multiple encounters tax them heavily",
      "Subtle Spell bypasses Counterspell - remember NPCs can't counter what they can't see"
    ],
    searchVolume: 20300,
    aliases: ["dnd-sorcerer"]
  },
  {
    slug: "swashbuckler-5e",
    name: "Swashbuckler 5e",
    className: "Rogue (Swashbuckler)",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Dexterity, Charisma",
    savingThrows: "Dexterity, Intelligence",
    armorProf: "Light armor",
    weaponProf: "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    spellcasting: null,
    description: "Charming duelists who combine roguish cunning with flashy swordplay. Swashbucklers are mobile skirmishers who excel at one-on-one combat and making dramatic escapes.",
    keyFeatures: [
      {
        name: "Fancy Footwork",
        level: "3rd",
        description: "Enemy you make melee attack against can't make opportunity attacks against you for rest of turn."
      },
      {
        name: "Rakish Audacity",
        level: "3rd",
        description: "Add CHA modifier to initiative. Sneak Attack when 1v1 with target even without advantage."
      },
      {
        name: "Panache",
        level: "9th",
        description: "Persuasion check to charm non-hostile or force hostile to duel you (can't attack others, disadvantage vs others)."
      },
      {
        name: "Elegant Maneuver",
        level: "13th",
        description: "Bonus action for advantage on next Acrobatics or Athletics check."
      },
      {
        name: "Master Duelist",
        level: "17th",
        description: "If you miss with advantage, reroll one die once per short rest."
      }
    ],
    subclasses: [
      {
        name: "Swashbuckler",
        source: "Xanathar's Guide to Everything",
        focus: "This is the subclass itself - rogue archetype focused on dueling and mobility"
      }
    ],
    commonMistakes: [
      "Forgetting Fancy Footwork only prevents opportunity attacks from creatures you attacked - still triggers from others",
      "Not realizing Rakish Audacity allows Sneak Attack in 1v1 without advantage or allies",
      "Overlooking that Panache can be used on non-hostile creatures for Persuasion benefits outside combat",
      "Thinking Elegant Maneuver gives permanent advantage - it's only for the next check before end of turn"
    ],
    dmTips: [
      "Swashbucklers excel in duels and skirmishes - give them opportunities for one-on-one combat",
      "Panache creates interesting tactical situations - consider how enemies react to being 'taunted'",
      "Their high initiative and mobility can dictate combat flow - use terrain and ranged enemies"
    ],
    searchVolume: 8900
  },
  {
    slug: "warlock-5e",
    name: "Warlock 5e",
    className: "Warlock",
    category: "classes",
    hitDie: "d8",
    primaryAbility: "Charisma",
    savingThrows: "Wisdom, Charisma",
    armorProf: "Light armor",
    weaponProf: "Simple weapons",
    spellcasting: "Pact caster (Charisma)",
    description: "Wielders of eldritch power granted by otherworldly patrons who recover spells quickly. Warlocks rely on Eldritch Blast spam and short rest spell slot recovery for sustained output.",
    keyFeatures: [
      {
        name: "Otherworldly Patron",
        level: "1st",
        description: "Pact with entity granting expanded spells and unique features."
      },
      {
        name: "Pact Magic",
        level: "1st",
        description: "Limited spell slots (max 4) that are all highest level and recover on short rest."
      },
      {
        name: "Eldritch Invocations",
        level: "2nd",
        description: "Choose 2 invocations (scaling to 8), including Agonizing Blast for +CHA to Eldritch Blast damage."
      },
      {
        name: "Pact Boon",
        level: "3rd",
        description: "Choose Pact of the Chain (familiar), Tome (cantrips/rituals), Blade (weapon), or Talisman (protection)."
      },
      {
        name: "Mystic Arcanum",
        level: "11th",
        description: "Learn one 6th-level spell (7th at 13th, 8th at 15th, 9th at 17th) castable once per long rest."
      },
      {
        name: "Eldritch Master",
        level: "20th",
        description: "Regain all Pact Magic slots during 1-minute rest once per long rest."
      }
    ],
    subclasses: [
      {
        name: "The Fiend",
        source: "Player's Handbook",
        focus: "Temp HP on kills and fire/utility spells"
      },
      {
        name: "The Great Old One",
        source: "Player's Handbook",
        focus: "Telepathy and psychic damage with mind control"
      },
      {
        name: "The Archfey",
        source: "Player's Handbook",
        focus: "Fey charm and teleportation with Misty Escape"
      },
      {
        name: "The Hexblade",
        source: "Xanathar's Guide to Everything",
        focus: "Weapon combat with CHA attacks (see hexblade-warlock-5e)"
      },
      {
        name: "The Celestial",
        source: "Xanathar's Guide to Everything",
        focus: "Healing and radiant damage with bonus action heal pool"
      },
      {
        name: "The Fathomless",
        source: "Tasha's Cauldron of Everything",
        focus: "Tentacle summon and cold/lightning spells"
      },
      {
        name: "The Genie",
        source: "Tasha's Cauldron of Everything",
        focus: "Bottled Respite sanctuary and elemental damage boosts"
      },
      {
        name: "The Undead",
        source: "Van Richten's Guide to Ravenloft",
        focus: "Form of Dread for fear and temp HP"
      }
    ],
    commonMistakes: [
      "Not taking Agonizing Blast invocation - it's essential for damage output",
      "Forgetting spell slots recover on short rest - warlocks benefit hugely from multiple short rests",
      "Missing that all spell slots are cast at highest available level",
      "Not leveraging invocations for at-will spells like Detect Magic or Disguise Self"
    ],
    dmTips: [
      "Warlocks spam Eldritch Blast almost every turn - it's their bread and butter",
      "Only 2-4 spell slots but they recharge on short rest - pace encounters accordingly",
      "Invocations can be very powerful (Devil's Sight + Darkness, infinite Disguise Self, etc)",
      "Hexblade multiclass is extremely popular for CHA-based weapon builds"
    ],
    searchVolume: 23700
  },
  {
    slug: "wizard-5e",
    name: "Wizard 5e",
    className: "Wizard",
    category: "classes",
    hitDie: "d6",
    primaryAbility: "Intelligence",
    savingThrows: "Intelligence, Wisdom",
    armorProf: "None",
    weaponProf: "Daggers, darts, slings, quarterstaffs, light crossbows",
    spellcasting: "Full caster (Intelligence)",
    description: "Masters of arcane magic who study spellbooks to prepare from the largest spell list in the game. Wizards are versatile casters with ritual casting, spell schools, and unmatched magical flexibility.",
    keyFeatures: [
      {
        name: "Spellcasting",
        level: "1st",
        description: "Spellbook with 6 spells at 1st level. Learn 2 per level and copy found spells. Prepare INT mod + level spells daily."
      },
      {
        name: "Arcane Recovery",
        level: "1st",
        description: "Once per day during short rest, recover spell slots with combined level up to half wizard level (rounded up)."
      },
      {
        name: "Arcane Tradition",
        level: "2nd",
        description: "School of magic specialization granting bonus features and cheaper spell copying."
      },
      {
        name: "Spell Mastery",
        level: "18th",
        description: "Choose one 1st and one 2nd level spell to cast at-will without slots."
      },
      {
        name: "Signature Spells",
        level: "20th",
        description: "Two 3rd level spells are always prepared and can each be cast once without slots per short rest."
      }
    ],
    subclasses: [
      {
        name: "School of Abjuration",
        source: "Player's Handbook",
        focus: "Arcane Ward absorbing damage and protective magic"
      },
      {
        name: "School of Conjuration",
        source: "Player's Handbook",
        focus: "Summoning creatures/objects and teleportation"
      },
      {
        name: "School of Divination",
        source: "Player's Handbook",
        focus: "Portent dice to replace d20 rolls (extremely powerful)"
      },
      {
        name: "School of Enchantment",
        source: "Player's Handbook",
        focus: "Charm and mind control with longer durations"
      },
      {
        name: "School of Evocation",
        source: "Player's Handbook",
        focus: "Sculpt Spells to protect allies from Fireball and maximize damage"
      },
      {
        name: "School of Illusion",
        source: "Player's Handbook",
        focus: "Making illusions real and improved Minor Illusion"
      },
      {
        name: "School of Necromancy",
        source: "Player's Handbook",
        focus: "Undead minion army and HP drain"
      },
      {
        name: "School of Transmutation",
        source: "Player's Handbook",
        focus: "Transforming objects and transmuter's stone buffs"
      },
      {
        name: "War Magic",
        source: "Xanathar's Guide to Everything",
        focus: "AC/save bonuses and mixing cantrips with defense"
      },
      {
        name: "Chronurgy Magic",
        source: "Explorer's Guide to Wildemount",
        focus: "Time manipulation forcing rerolls and delaying spell effects"
      },
      {
        name: "Graviturgy Magic",
        source: "Explorer's Guide to Wildemount",
        focus: "Gravity control for movement and advantage manipulation"
      },
      {
        name: "Order of Scribes",
        source: "Tasha's Cauldron of Everything",
        focus: "Awakened spellbook changing damage types and ritual casting speed"
      },
      {
        name: "Bladesinging",
        source: "Tasha's Cauldron of Everything",
        focus: "Melee gish combat (see bladesinger-5e)"
      }
    ],
    commonMistakes: [
      "Not using ritual casting for Detect Magic, Identify, Find Familiar - save spell slots",
      "Forgetting you can prepare different spells after long rest - wizards adapt daily",
      "Missing that you can learn spells from scrolls and other spellbooks (50gp and 2 hours per spell level)",
      "Not using Arcane Recovery - it's a free short rest slot refresh"
    ],
    dmTips: [
      "Wizards know the most spells in the game - expect creative solutions",
      "Divination Portent can trivialize encounters by forcing failures/successes",
      "Spellbooks are valuable treasure and can be stolen/destroyed",
      "They're incredibly versatile but fragile (d6 hit die, no armor) - target them in combat"
    ],
    searchVolume: 25100
  }
];

export const classOverview: ClassOverviewPage = {
  slug: "dnd-classes",
  name: "D&D 5e Classes",
  category: "classes",
  description: "Complete overview of all D&D 5e classes, comparing roles, mechanics, and playstyles to help players choose the right class and DMs understand party composition.",
  sections: [
    {
      id: "introduction",
      title: "Understanding D&D 5e Classes",
      content: `<p>D&D 5e offers 13 official classes (plus popular homebrew like Blood Hunter), each with unique mechanics and playstyles. Classes determine your character's abilities, progression, and role in the party.</p>
      <p><strong>Key Concepts:</strong></p>
      <ul>
        <li><strong>Hit Die:</strong> Determines HP per level (d6 = fragile casters, d12 = tanks)</li>
        <li><strong>Spellcasting:</strong> Full casters (all spell slots), half casters (some slots + martial), third casters (few slots + martial)</li>
        <li><strong>Primary Ability:</strong> Main stat for class features (STR for fighters, CHA for bards, etc)</li>
        <li><strong>Subclasses:</strong> Specializations chosen at level 2-3 that dramatically change playstyle</li>
      </ul>`
    },
    {
      id: "martial-classes",
      title: "Martial Classes (Non-Spellcasters)",
      content: `<p>These classes rely primarily on weapons, physical abilities, and combat techniques rather than magic.</p>
      <h4>Barbarian (d12 Hit Die)</h4>
      <p><strong>Role:</strong> Tank, frontline damage dealer<br>
      <strong>Playstyle:</strong> Rage for damage resistance and bonus damage, high HP, reckless attacks<br>
      <strong>Best For:</strong> Players who want to be unkillable frontline warriors</p>

      <h4>Fighter (d10 Hit Die)</h4>
      <p><strong>Role:</strong> Versatile damage dealer, tank, or archer<br>
      <strong>Playstyle:</strong> Most attacks per turn (up to 4), Action Surge for nova rounds, highly customizable<br>
      <strong>Best For:</strong> Players who want consistent combat effectiveness with flexibility</p>

      <h4>Monk (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Mobile skirmisher, control<br>
      <strong>Playstyle:</strong> Fast movement, stunning strikes, ki-powered abilities, unarmored defense<br>
      <strong>Best For:</strong> Players who want martial arts mobility and battlefield control</p>

      <h4>Rogue (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Single-target damage, skill expert, scout<br>
      <strong>Playstyle:</strong> Massive Sneak Attack damage, expertise in skills, evasion, cunning action mobility<br>
      <strong>Best For:</strong> Players who want to excel at skills and deliver devastating single attacks</p>`
    },
    {
      id: "half-casters",
      title: "Half-Casters (Martial + Magic)",
      content: `<p>These classes blend weapon combat with spellcasting, gaining spell slots more slowly than full casters.</p>
      <h4>Paladin (d10 Hit Die)</h4>
      <p><strong>Role:</strong> Tank, support, burst damage<br>
      <strong>Spellcasting:</strong> Charisma-based, slots up to 5th level<br>
      <strong>Playstyle:</strong> Divine Smite for massive burst, aura of protection (+CHA to all saves), lay on hands healing<br>
      <strong>Best For:</strong> Players who want to be holy warriors protecting allies and smiting evil</p>

      <h4>Ranger (d10 Hit Die)</h4>
      <p><strong>Role:</strong> Damage dealer, scout, utility caster<br>
      <strong>Spellcasting:</strong> Wisdom-based, slots up to 5th level<br>
      <strong>Playstyle:</strong> Hunter's Mark/Favored Foe, exploration bonuses, nature magic (Pass Without Trace, Conjure Animals)<br>
      <strong>Best For:</strong> Players who want wilderness expertise and focused damage (Note: Use Tasha's optional features)</p>

      <h4>Artificer (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Support, utility, crafter<br>
      <strong>Spellcasting:</strong> Intelligence-based, slots up to 5th level<br>
      <strong>Playstyle:</strong> Infuse magic items, Flash of Genius to boost rolls, tool expertise, replicate magic items<br>
      <strong>Best For:</strong> Players who want to create magical items and solve problems with inventions</p>`
    },
    {
      id: "full-casters",
      title: "Full Casters (Primary Spellcasters)",
      content: `<p>These classes have full spell slot progression, gaining access to powerful 9th level spells.</p>
      <h4>Wizard (d6 Hit Die)</h4>
      <p><strong>Role:</strong> Blaster, controller, utility<br>
      <strong>Spellcasting:</strong> Intelligence-based, largest spell list in game<br>
      <strong>Playstyle:</strong> Prepare different spells daily, ritual casting, learn spells from scrolls/books, arcane traditions<br>
      <strong>Best For:</strong> Players who want maximum magical versatility and preparation</p>

      <h4>Cleric (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Healer, support, surprisingly strong damage/tank<br>
      <strong>Spellcasting:</strong> Wisdom-based, all domain spells always prepared<br>
      <strong>Playstyle:</strong> Channel Divinity, prepare spells daily, Spirit Guardians for damage, healing word/cure wounds<br>
      <strong>Best For:</strong> Players who want to heal, support, and still deal significant damage</p>

      <h4>Druid (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Controller, support, tank (via Wild Shape)<br>
      <strong>Spellcasting:</strong> Wisdom-based, nature-themed spells<br>
      <strong>Playstyle:</strong> Wild Shape into beasts, concentration control spells (Entangle, Spike Growth), summoning<br>
      <strong>Best For:</strong> Players who want shapeshifting and nature magic control</p>

      <h4>Bard (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Support, face, skill expert, utility<br>
      <strong>Spellcasting:</strong> Charisma-based, can steal spells from any class via Magical Secrets<br>
      <strong>Playstyle:</strong> Bardic Inspiration, Jack of All Trades, expertise in skills, incredible spell versatility<br>
      <strong>Best For:</strong> Players who want to be good at everything and support allies</p>

      <h4>Sorcerer (d6 Hit Die)</h4>
      <p><strong>Role:</strong> Blaster, face<br>
      <strong>Spellcasting:</strong> Charisma-based, limited spells known but metamagic<br>
      <strong>Playstyle:</strong> Metamagic (Quicken, Twin, Subtle spells), sorcery points, innate magic origin<br>
      <strong>Best For:</strong> Players who want to modify and enhance spells dynamically</p>`
    },
    {
      id: "pact-casters",
      title: "Pact Casters (Unique Casting)",
      content: `<h4>Warlock (d8 Hit Die)</h4>
      <p><strong>Role:</strong> Sustained damage, utility<br>
      <strong>Spellcasting:</strong> Charisma-based, few spell slots that recharge on short rest (all cast at highest level)<br>
      <strong>Playstyle:</strong> Eldritch Blast spam with Agonizing Blast, Eldritch Invocations for customization, Pact Boons<br>
      <strong>Best For:</strong> Players who want eldritch power with short rest recovery and customization<br>
      <strong>Note:</strong> Hexblade patron is extremely popular for melee builds using Charisma for attacks</p>`
    },
    {
      id: "gish-subclasses",
      title: "Gish Builds (Magic + Melee Hybrids)",
      content: `<p>These subclasses blend spellcasting with weapon combat for versatile hybrid characters:</p>
      <ul>
        <li><strong>Bladesinger (Wizard):</strong> High AC with Bladesong, Extra Attack with cantrip, INT-based melee</li>
        <li><strong>Eldritch Knight (Fighter):</strong> Wizard spells (abjuration/evocation focus), War Magic, weapon bond</li>
        <li><strong>Hexblade (Warlock):</strong> Charisma-based weapon attacks, medium armor, martial weapons</li>
        <li><strong>College of Swords/Valor (Bard):</strong> Martial weapons, Extra Attack, blade flourishes or combat inspiration</li>
        <li><strong>War/Forge Domain (Cleric):</strong> Heavy armor proficiency with full spellcasting</li>
      </ul>
      <p><strong>Gish Advantage:</strong> Can fight in melee when enemies close distance, cast spells at range when safe</p>`
    },
    {
      id: "party-roles",
      title: "Party Roles and Composition",
      content: `<h4>Tank/Frontline</h4>
      <p><strong>Best Classes:</strong> Barbarian (damage soak), Paladin (aura support), Fighter (versatile), Moon Druid (Wild Shape HP)<br>
      <strong>Key Features:</strong> High HP, good AC, abilities to protect allies or draw aggro</p>

      <h4>Damage Dealers</h4>
      <p><strong>Sustained:</strong> Fighter (4 attacks), Warlock (Eldritch Blast), Ranger (Hunter's Mark)<br>
      <strong>Burst:</strong> Paladin (Divine Smite), Rogue (Sneak Attack), Sorcerer (Quickened Fireball)<br>
      <strong>AoE:</strong> Wizard (Fireball), Druid (Conjure Animals), Cleric (Spirit Guardians)</p>

      <h4>Support/Healers</h4>
      <p><strong>Best Classes:</strong> Cleric (best healer), Bard (inspiration + buffs), Druid (healing + control)<br>
      <strong>Key Spells:</strong> Healing Word, Bless, Haste, Revivify, Greater Restoration</p>

      <h4>Controllers</h4>
      <p><strong>Best Classes:</strong> Wizard (huge spell list), Druid (area denial), Bard (enchantment/illusion)<br>
      <strong>Key Spells:</strong> Hypnotic Pattern, Wall of Force, Spike Growth, Slow, Polymorph</p>

      <h4>Skill Experts/Face</h4>
      <p><strong>Best Classes:</strong> Rogue (expertise x4), Bard (Jack of All Trades + expertise), Warlock (Charisma + invocations)<br>
      <strong>Key Features:</strong> High Charisma for persuasion/deception, expertise for guaranteed successes</p>`
    },
    {
      id: "choosing-class",
      title: "How to Choose Your Class",
      content: `<h4>Ask Yourself:</h4>
      <ul>
        <li><strong>Combat Style:</strong> Melee, ranged, or spells?</li>
        <li><strong>Complexity:</strong> Simple (Champion Fighter, Berserker Barbarian) vs complex (Wizard, Druid)?</li>
        <li><strong>Party Role:</strong> What does your party need?</li>
        <li><strong>Playstyle:</strong> Do you like resource management (spell slots) or consistent abilities?</li>
        <li><strong>Downtime:</strong> Many short rests (Warlock, Fighter good) or few rests (long rest classes better)?</li>
      </ul>

      <h4>Beginner-Friendly Classes:</h4>
      <ul>
        <li><strong>Fighter (Champion):</strong> Simple, effective, forgiving</li>
        <li><strong>Barbarian:</strong> Straightforward rage mechanics, hard to kill</li>
        <li><strong>Cleric (Life):</strong> Strong and versatile without overwhelming complexity</li>
        <li><strong>Warlock:</strong> Simple spell slot management, Eldritch Blast is easy to use</li>
      </ul>

      <h4>Advanced Classes:</h4>
      <ul>
        <li><strong>Wizard:</strong> Huge spell list requires system knowledge</li>
        <li><strong>Druid (Moon):</strong> Wild Shape requires knowing beast stat blocks</li>
        <li><strong>Bard:</strong> Requires understanding other classes to steal best spells</li>
        <li><strong>Multiclass builds:</strong> Requires careful planning and system mastery</li>
      </ul>`
    },
    {
      id: "power-rankings",
      title: "Relative Power Levels (Tier Rankings)",
      content: `<p><em>Note: All classes are viable. Tiers reflect optimization potential and common pain points.</em></p>

      <h4>S-Tier (Strongest Overall)</h4>
      <ul>
        <li><strong>Cleric (Twilight, Peace):</strong> Overpowered domain features + full casting</li>
        <li><strong>Paladin:</strong> Aura of Protection alone is game-changing</li>
        <li><strong>Wizard (Divination, Chronurgy):</strong> Largest spell list + powerful subclass features</li>
      </ul>

      <h4>A-Tier (Very Strong)</h4>
      <ul>
        <li><strong>Bard:</strong> Jack of all trades, Magical Secrets is incredible</li>
        <li><strong>Druid (Moon, Shepherd):</strong> Wild Shape tanking or summoning dominance</li>
        <li><strong>Warlock (Hexblade):</strong> Especially for multiclassing</li>
        <li><strong>Fighter (Echo Knight, Battle Master):</strong> Action economy and tactical options</li>
      </ul>

      <h4>B-Tier (Solid, Well-Balanced)</h4>
      <ul>
        <li><strong>Barbarian:</strong> Excellent tank but limited options outside combat</li>
        <li><strong>Sorcerer (Aberrant, Clockwork):</strong> Metamagic is strong but limited spells known hurts</li>
        <li><strong>Ranger (with Tasha's):</strong> Fixed by optional features, solid damage and utility</li>
        <li><strong>Rogue:</strong> Excellent skills and damage, but single attack limits ceiling</li>
        <li><strong>Artificer:</strong> Strong support but peaks mid-tier</li>
      </ul>

      <h4>C-Tier (Functional but Pain Points)</h4>
      <ul>
        <li><strong>Monk:</strong> Cool abilities but MAD (needs DEX, WIS, CON), ki-starved, low damage</li>
        <li><strong>Ranger (PHB version):</strong> Without Tasha's optional features, has significant weaknesses</li>
        <li><strong>Fighter (Champion):</strong> Simple but boring, weaker than other subclasses</li>
      </ul>

      <p><strong>Remember:</strong> Player skill and party synergy matter more than tier lists. A well-played Monk beats a poorly-played Paladin.</p>`
    }
  ],
  searchVolume: 33500
};
