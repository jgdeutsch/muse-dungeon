// Subclass pages data - generated from DataForSEO FAQ data
import type { FAQItem } from "./characters-classes";

export type SubclassPage = {
  slug: string;
  name: string;
  parentClass: string;
  parentClassSlug: string;
  category: "subclasses";
  source: string;
  subclassLevel: number;
  description: string;
  focus: string;
  keyFeatures?: { name: string; level: string; description: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  searchVolume: number;
  faq?: FAQItem[];
};

export const subclassPages: SubclassPage[] = [
  {
    slug: "alchemist-5e",
    name: "Alchemist 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "subclasses",
    source: "Eberron: Rising from the Last War",
    subclassLevel: 3,
    description: "Masters of potions and experimental elixirs who can create magical concoctions with unpredictable but beneficial effects. Alchemists focus on healing and support through their Experimental Elixir feature.",
    focus: "Healing and experimental elixirs with random effects",
    keyFeatures: [
      {
            "name": "Experimental Elixir",
            "level": "3rd",
            "description": "Create magical elixirs with random beneficial effects like healing, flight, or transformation during long rests or by expending spell slots."
      },
      {
            "name": "Alchemical Savant",
            "level": "5th",
            "description": "Add INT modifier to healing or damage from alchemist spells cast through alchemist's supplies."
      },
      {
            "name": "Restorative Reagents",
            "level": "9th",
            "description": "Elixirs grant temporary HP, and cast Lesser Restoration for free INT mod times per long rest."
      },
      {
            "name": "Chemical Mastery",
            "level": "15th",
            "description": "Resistance to acid and poison damage, immunity to poisoned condition. Cast Greater Restoration and Heal once each per long rest without slots."
      }
],
    commonMistakes: ["Forgetting you can spend a spell slot to create additional elixirs beyond the free one", "Not tracking which random elixir effect you rolled each long rest", "Overlooking that Alchemical Savant requires using alchemist's supplies as a spellcasting focus"],
    dmTips: ["The random elixir table adds fun unpredictability - lean into it narratively", "Alchemists excel at out-of-combat healing and utility", "Their spell list includes Healing Word and Mass Healing Word - excellent support"],
    searchVolume: 4800,
  },
  {
    slug: "armorer-5e",
    name: "Armorer 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Artificers who specialize in arcane armor, creating magical power suits that can switch between defensive Guardian mode and stealthy Infiltrator mode. Armorers are versatile tanks or infiltrators.",
    focus: "Arcane armor with Guardian or Infiltrator modes for tanking or stealth",
    keyFeatures: [
      {
            "name": "Arcane Armor",
            "level": "3rd",
            "description": "Turn any heavy armor into arcane armor that you're proficient with, can don/doff as an action, and can use as spellcasting focus."
      },
      {
            "name": "Armor Model",
            "level": "3rd",
            "description": "Choose Guardian (thunder gauntlets, temp HP, taunt) or Infiltrator (lightning launcher, speed, stealth) mode. Switch on short rest."
      },
      {
            "name": "Extra Attack",
            "level": "5th",
            "description": "Attack twice when taking the Attack action."
      },
      {
            "name": "Armor Modifications",
            "level": "9th",
            "description": "Armor counts as separate items for infusions - helmet, suit, boots, and weapon (4 infusions on one armor!)."
      },
      {
            "name": "Perfected Armor",
            "level": "15th",
            "description": "Guardian: pull enemies 30ft and knock prone. Infiltrator: deal extra lightning damage once per turn."
      }
],
    commonMistakes: ["Forgetting you can switch armor modes on a short rest", "Not using the Guardian mode's taunt effectively to protect allies", "Missing that Armor Modifications lets you stack 4 infusions on your armor"],
    dmTips: ["Guardian mode makes excellent tanks with forced disadvantage on attacking others", "Infiltrator mode has no stealth disadvantage in heavy armor - great for scouting", "The armor is flexible - encourage creative uses of both modes"],
    searchVolume: 5200,
  },
  {
    slug: "artillerist-5e",
    name: "Artillerist 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "subclasses",
    source: "Eberron: Rising from the Last War",
    subclassLevel: 3,
    description: "Artificers who specialize in creating magical turrets (Eldritch Cannons) that provide consistent damage and battlefield control. Artillerists are artillery support specialists.",
    focus: "Magical turrets for damage and battlefield control",
    keyFeatures: [
      {
            "name": "Eldritch Cannon",
            "level": "3rd",
            "description": "Create a Small or Tiny cannon with one of three modes: Flamethrower (cone damage), Force Ballista (ranged attack), or Protector (temp HP aura)."
      },
      {
            "name": "Arcane Firearm",
            "level": "5th",
            "description": "Turn a wand, staff, or rod into an arcane firearm that adds 1d8 to damage from artificer spells."
      },
      {
            "name": "Explosive Cannon",
            "level": "9th",
            "description": "Cannon damage increases by 1d8. Can detonate cannon as action for 3d8 force damage in 20ft radius."
      },
      {
            "name": "Fortified Position",
            "level": "15th",
            "description": "Create two cannons at once. You and allies within 10ft of cannon have half cover."
      }
],
    commonMistakes: ["Forgetting the cannon requires a bonus action to activate each turn", "Not repositioning the Tiny cannon (it can ride on your shoulder!)", "Overlooking that Arcane Firearm bonus applies to all artificer spell damage, not just cantrips"],
    dmTips: ["The Protector cannon's temp HP can significantly boost party durability", "Cannons have HP and can be destroyed - target them to challenge the artificer", "Two cannons at 15th level is very powerful - expect creative combinations"],
    searchVolume: 4500,
  },
  {
    slug: "battle-smith-5e",
    name: "Battle Smith 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "subclasses",
    source: "Eberron: Rising from the Last War",
    subclassLevel: 3,
    description: "Artificers who create a Steel Defender companion and can use Intelligence for weapon attacks. Battle Smiths are frontline combatants with a loyal construct ally.",
    focus: "Steel Defender companion and INT-based weapon attacks for frontline combat",
    keyFeatures: [
      {
            "name": "Battle Ready",
            "level": "3rd",
            "description": "Gain martial weapon proficiency and can use INT instead of STR or DEX for magic weapon attacks."
      },
      {
            "name": "Steel Defender",
            "level": "3rd",
            "description": "Create a loyal construct companion that fights alongside you, can be commanded with bonus action, and can impose disadvantage on attacks."
      },
      {
            "name": "Extra Attack",
            "level": "5th",
            "description": "Attack twice when taking the Attack action."
      },
      {
            "name": "Arcane Jolt",
            "level": "9th",
            "description": "INT mod times per long rest, deal extra 2d6 force damage or heal an ally for 2d6 within 30ft when you or defender hit."
      },
      {
            "name": "Improved Defender",
            "level": "15th",
            "description": "Defender gains +2 AC and Arcane Jolt damage/healing increases to 4d6."
      }
],
    commonMistakes: ["Forgetting the Steel Defender needs a bonus action to command each turn", "Not using the Defender's Deflect Attack reaction (imposes disadvantage)", "Missing that Battle Ready requires a magic weapon for INT-based attacks"],
    dmTips: ["The Steel Defender adds significant action economy - account for it in encounters", "Defender can be rebuilt during a long rest if destroyed, but costs spell slots", "INT-based attacks make Battle Smiths very SAD (single ability dependent)"],
    searchVolume: 8100,
    faq: [
      {
            "question": "What is the strongest artificer subclass?",
            "answer": "Far and away, the Alchemist is built to be the best Artificer subclass in D&D 5e for support. All of its features provide some way to buff or heal the party. From elixirs that provide new abilities to high-level healing spells other Artificers can't cast, the Alchemist is never short of ways to heal the party."
      },
      {
            "question": "What is the battle Smith sub class?",
            "answer": "Battle Smith is a weapon-oriented gish subclass that provides more battlefield presence thanks to their Steel Defender. They're the best artificer subclass if you want to use firearms, and are also solid with bows and melee weapons depending on your needs."
      },
      {
            "question": "Was Artificer removed from D&D 5e?",
            "answer": "We're guessing the truth lies somewhere in the middle. Artificer made it into 4th Edition, but was dropped [when] 5th Edition came out in 2014\"."
      },
      {
            "question": "Who is the god of artificer?",
            "answer": "The Gondar. The Gondar are clerics of Gond, god of invention and artifice. Also called The Wonderbringer, The Inspiration Divine, and The Holy Maker of All Things, he is ever-concerned with making real any theoretical concept or schematic, and has little concern for any complications or problems that arise therefrom."
      }
],
  },
  {
    slug: "path-of-the-berserker-5e",
    name: "Path of the Berserker 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "The quintessential rage-fueled barbarian who can enter a devastating Frenzy for bonus action attacks, risking exhaustion for maximum damage output.",
    focus: "Maximum damage output with Frenzy for bonus action attacks, risking exhaustion",
    keyFeatures: [
      {
            "name": "Frenzy",
            "level": "3rd",
            "description": "While raging, enter a frenzy to make a melee weapon attack as a bonus action each turn. Gain one level of exhaustion when rage ends."
      },
      {
            "name": "Mindless Rage",
            "level": "6th",
            "description": "Can't be charmed or frightened while raging. If charmed/frightened when entering rage, effect is suspended."
      },
      {
            "name": "Intimidating Presence",
            "level": "10th",
            "description": "Use action to frighten a creature within 30ft. WIS save or frightened until end of your next turn."
      },
      {
            "name": "Retaliation",
            "level": "14th",
            "description": "When you take damage from a creature within 5ft, use reaction to make a melee weapon attack against it."
      }
],
    commonMistakes: ["Using Frenzy every combat and accumulating crippling exhaustion levels", "Forgetting that Mindless Rage only works while you're actually raging", "Not tracking exhaustion levels carefully after each Frenzy"],
    dmTips: ["Exhaustion from Frenzy is brutal - one level per rage adds up fast", "Consider the 2024 PHB revision which reduced the exhaustion penalty", "Charm and fear immunity while raging makes them excellent against casters"],
    searchVolume: 6200,
    faq: [
      {
            "question": "What is the path of the Berserker 5e?",
            "answer": "The Path of the Berserker is the quintessential rage-fueled Barbarian, embodying pure, unfiltered battle frenzy. Introduced in the Player's Handbook, this subclass embraces bloodlust and reckless combat, pushing the limits of endurance and offensive power."
      },
      {
            "question": "Can you be charmed while raging?",
            "answer": "The Path of the Berserker Barbarian gains the Mindless Rage feature at 6th level. Beginning at 6th level, you can't be Charmed or Frightened while raging."
      },
      {
            "question": "What is the path of the best Barbarian?",
            "answer": "The Path of the Beast Barbarian in Tasha's Cauldron of Everything brings primal transformation to the table, allowing you to take on bestial traits when you rage. Instead of just swinging weapons, you sprout claws, fangs, tails, or other animalistic features, making you a savage predator on the battlefield."
      },
      {
            "question": "How many Path of the Berserker books are there?",
            "answer": "There are 5 books in this series."
      }
],
  },
  {
    slug: "path-of-the-totem-warrior-5e",
    name: "Path of the Totem Warrior 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Barbarians who channel animal spirits for diverse tactical benefits. Bear provides unmatched tankiness, Wolf enables pack tactics, and Eagle grants mobility.",
    focus: "Animal spirit powers granting tactical benefits (Bear for resistance, Wolf for pack tactics, Eagle for mobility)",
    keyFeatures: [
      {
            "name": "Spirit Seeker",
            "level": "3rd",
            "description": "Cast Beast Sense and Speak with Animals as rituals."
      },
      {
            "name": "Totem Spirit",
            "level": "3rd",
            "description": "Choose Bear (resist all damage except psychic while raging), Eagle (opportunity attacks have disadvantage, Dash as bonus action), or Wolf (allies have advantage vs enemies within 5ft of you)."
      },
      {
            "name": "Aspect of the Beast",
            "level": "6th",
            "description": "Gain out-of-combat benefits based on totem: Bear (double carry capacity), Eagle (see 1 mile clearly), Wolf (track at fast pace)."
      },
      {
            "name": "Totemic Attunement",
            "level": "14th",
            "description": "Combat benefits: Bear (enemies have disadvantage attacking others while you're within 5ft), Eagle (fly equal to speed while raging), Wolf (knock Large or smaller creatures prone on hit)."
      }
],
    commonMistakes: ["Forgetting you can mix and match different animal totems at each feature level", "Not positioning correctly to share Wolf totem's advantage with allies", "Overlooking that Bear totem doesn't resist psychic damage"],
    dmTips: ["Bear totem resistance to ALL damage (except psychic) makes them incredibly tanky", "Wolf totem effectively gives the whole party advantage on melee attacks", "Use psychic damage to challenge Bear totem barbarians"],
    searchVolume: 7800,
  },
  {
    slug: "path-of-the-ancestral-guardian-5e",
    name: "Path of the Ancestral Guardian 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Barbarians who call upon ancestral spirits to protect allies. The ultimate defender subclass that punishes enemies for attacking anyone but you.",
    focus: "Tank/defender using ancestral spirits to protect allies",
    keyFeatures: [
      {
            "name": "Ancestral Protectors",
            "level": "3rd",
            "description": "First creature you hit while raging has disadvantage on attacks against anyone but you, and others have resistance to its damage until your next turn."
      },
      {
            "name": "Spirit Shield",
            "level": "6th",
            "description": "When ally within 30ft takes damage, use reaction to reduce damage by 2d6 (scales to 4d6)."
      },
      {
            "name": "Consult the Spirits",
            "level": "10th",
            "description": "Cast Augury or Clairvoyance without spell slots or materials once per short rest."
      },
      {
            "name": "Vengeful Ancestors",
            "level": "14th",
            "description": "When using Spirit Shield, attacker takes force damage equal to damage reduced."
      }
],
    commonMistakes: ["Forgetting Ancestral Protectors only affects the FIRST creature you hit each turn", "Not using Spirit Shield reaction to protect squishy allies", "Missing that the protection effect ends at the start of your next turn, not the enemy's"],
    dmTips: ["This is arguably the best defender in the game - the debuff is powerful", "Enemies essentially must attack the barbarian or suffer major penalties", "Spirit Shield doesn't require rage, so it works even out of combat"],
    searchVolume: 4200,
    faq: [
      {
            "question": "Is Path of Ancestral Guardian good?",
            "answer": "The Path of the Ancestral Guardian is a strong choice for players who value defensive capabilities and protecting allies. Its unique features allow you to absorb damage and enhance your team's survivability, making it very effective in combat scenarios."
      },
      {
            "question": "Which Barbarian subclass does the most damage?",
            "answer": "Yep, Zealot has the highest damage across an adventuring day. Berzerk has the highest nova, and usually is the best option for many tables that only have 2-4 combats in an adventuring day."
      },
      {
            "question": "What's the best class to pair with Barbarian?",
            "answer": "Fighter.\nRogue.\nDruid.\nPaladin.\nBard.\nWarlock."
      }
],
  },
  {
    slug: "path-of-the-zealot-5e",
    name: "Path of the Zealot 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Divine warriors who channel holy fury, dealing extra radiant or necrotic damage and becoming nearly impossible to kill permanently.",
    focus: "Divine fury adding radiant/necrotic damage, extremely hard to kill",
    keyFeatures: [
      {
            "name": "Divine Fury",
            "level": "3rd",
            "description": "First creature you hit each turn while raging takes extra 1d6+half barbarian level radiant or necrotic damage."
      },
      {
            "name": "Warrior of the Gods",
            "level": "3rd",
            "description": "Spells that restore you to life (not Revivify) don't require material components."
      },
      {
            "name": "Fanatical Focus",
            "level": "6th",
            "description": "Reroll a failed saving throw once per rage."
      },
      {
            "name": "Zealous Presence",
            "level": "10th",
            "description": "As bonus action, give up to 10 allies within 60ft advantage on attacks and saves until your next turn. Once per long rest."
      },
      {
            "name": "Rage Beyond Death",
            "level": "14th",
            "description": "While raging, dropping to 0 HP doesn't knock you unconscious. You still make death saves and die if you fail 3 or have damage equal to max HP. Only die when rage ends if still at 0."
      }
],
    commonMistakes: ["Forgetting Divine Fury only triggers on the FIRST creature hit each turn", "Not leveraging the free resurrection benefit with party clerics", "Using Rage Beyond Death recklessly without a plan to be healed before rage ends"],
    dmTips: ["Zealots deal consistent extra damage every turn - account for this in CR calculations", "Rage Beyond Death at 14th level makes them nearly unkillable - use massive damage or status effects", "Free resurrections make Zealots excellent for high-lethality campaigns"],
    searchVolume: 5800,
    faq: [
      {
            "question": "What is the path of the zealot 5e?",
            "answer": "The Path of the Zealot Barbarian is one of the best Barbarian subclasses in D&D 5e, offering high damage, tanking, and divine resilience. If you want to become the ultimate unstoppable warrior, unkillable and unrelenting, this is the subclass for you!"
      },
      {
            "question": "What book is Path of the Zealot in?",
            "answer": "Introducing the Barbarian: Path of the Zealot in 'Xanathar's Guide To Everything' | Dungeons & Dragons."
      },
      {
            "question": "Which barbarian subclass does the most damage?",
            "answer": "Yep, Zealot has the highest damage across an adventuring day. Berzerk has the highest nova, and usually is the best option for many tables that only have 2-4 combats in an adventuring day."
      }
],
  },
  {
    slug: "path-of-the-beast-5e",
    name: "Path of the Beast 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Barbarians who transform during rage, sprouting natural weapons like claws, fangs, or a tail. Versatile melee options with unique tactical benefits.",
    focus: "Shapeshifting natural weapons (claws, tail, bite) for versatile combat",
    keyFeatures: [
      {
            "name": "Form of the Beast",
            "level": "3rd",
            "description": "When raging, manifest one natural weapon: Bite (1d8+healing on hit below half HP), Claws (1d6 each, extra attack), or Tail (1d8 reach, +1d8 AC reaction)."
      },
      {
            "name": "Bestial Soul",
            "level": "6th",
            "description": "Natural weapons count as magical. Choose swim speed, climb speed, or extended jump distance."
      },
      {
            "name": "Infectious Fury",
            "level": "10th",
            "description": "When you hit with natural weapon, target makes WIS save or takes 2d12 psychic damage OR attacks a creature you choose."
      },
      {
            "name": "Call the Hunt",
            "level": "14th",
            "description": "When raging, willing allies within 30ft gain 1d6 damage bonus on attacks. You gain 5 temp HP per creature that accepts."
      }
],
    commonMistakes: ["Forgetting to choose which natural weapon to manifest each rage", "Not using the Tail's +1d8 AC reaction - it's excellent defense", "Missing that Claws get an extra attack, making them the best damage option for TWF builds"],
    dmTips: ["Beast barbarians are very versatile - different situations call for different weapons", "Bite's healing triggers often at low HP, making them self-sustaining", "Infectious Fury can turn enemies against each other - dramatic moments!"],
    searchVolume: 5100,
  },
  {
    slug: "path-of-wild-magic-5e",
    name: "Path of Wild Magic 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Barbarians infused with chaotic magical energy who trigger wild magic surges while raging. Unpredictable but always beneficial effects.",
    focus: "Chaotic magical effects triggered during rage",
    keyFeatures: [
      {
            "name": "Magic Awareness",
            "level": "3rd",
            "description": "Detect magic and other features within 60ft as action, proficiency bonus times per long rest."
      },
      {
            "name": "Wild Surge",
            "level": "3rd",
            "description": "Roll d8 when raging for random magical effect: shadow tentacles, teleport, spirit flare, retribution, weapon magic, healing aura, spell resistance, or flower explosion."
      },
      {
            "name": "Bolstering Magic",
            "level": "6th",
            "description": "Touch creature to grant 1d3 bonus to attacks/ability checks for 10 min OR restore spell slot (d3 level). PB uses per long rest."
      },
      {
            "name": "Unstable Backlash",
            "level": "10th",
            "description": "When damaged or failing save while raging, use reaction to roll new Wild Surge, replacing current effect."
      },
      {
            "name": "Controlled Surge",
            "level": "14th",
            "description": "Roll twice on Wild Surge table and choose which effect to use."
      }
],
    commonMistakes: ["Treating Wild Surges as unreliable - all 8 effects are beneficial", "Forgetting Bolstering Magic can restore caster spell slots - huge utility", "Not using Unstable Backlash when the current Wild Surge effect isn't useful"],
    dmTips: ["Wild Magic Barbarian adds fun randomness without the downside risks of Wild Magic Sorcerer", "Bolstering Magic makes them excellent support for caster parties", "The surges are always helpful, just in different ways - embrace the chaos"],
    searchVolume: 3900,
    faq: [
      {
            "question": "Is Wild Magic barbarian a strong subclass?",
            "answer": "Compared to other Barbarian subclasses, Wild Magic Barbarians are unpredictable and adaptable, making them one of the most fun and unique playstyles in D&D 5e. Embrace the Chaos! Wild Surges are random, but they ALWAYS help in some way. Bolstering Magic is powerful."
      },
      {
            "question": "What is the path of the best barbarian?",
            "answer": "The Path of the Beast Barbarian in Tasha's Cauldron of Everything brings primal transformation to the table, allowing you to take on bestial traits when you rage. Instead of just swinging weapons, you sprout claws, fangs, tails, or other animalistic features, making you a savage predator on the battlefield."
      },
      {
            "question": "What is the weakest barbarian subclass?",
            "answer": "Dwarven Barbarians that don spiked armor and charge into enemy lines, impaling their enemies with the armor they wear, known as Kuldjargh or Axe Idiot to their own kind, is the worst Barbarian subclass, and probably the worst subclass in the game (yes, even worse than pre updated Beast Master)."
      },
      {
            "question": "Which barbarian subclass does the most damage?",
            "answer": "Yep, Zealot has the highest damage across an adventuring day. Berzerk has the highest nova, and usually is the best option for many tables that only have 2-4 combats in an adventuring day."
      }
],
  },
  {
    slug: "college-of-lore-5e",
    name: "College of Lore 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "The ultimate skill monkey bards who gain extra proficiencies, Cutting Words to debuff enemies, and early access to Magical Secrets at 6th level.",
    focus: "Ultimate skill monkey with Cutting Words and early Magical Secrets at 6th level",
    keyFeatures: [
      {
            "name": "Bonus Proficiencies",
            "level": "3rd",
            "description": "Gain proficiency in any three skills of your choice."
      },
      {
            "name": "Cutting Words",
            "level": "3rd",
            "description": "Use reaction and Bardic Inspiration die to subtract from enemy's attack roll, ability check, or damage roll."
      },
      {
            "name": "Additional Magical Secrets",
            "level": "6th",
            "description": "Learn two spells from any class, 4 levels earlier than other bards get Magical Secrets."
      },
      {
            "name": "Peerless Skill",
            "level": "14th",
            "description": "Add Bardic Inspiration die to your own ability checks."
      }
],
    commonMistakes: ["Hoarding Bardic Inspiration instead of using Cutting Words frequently", "Not taking powerful spells from other classes with early Magical Secrets", "Forgetting Cutting Words can reduce damage, not just attack rolls"],
    dmTips: ["Lore Bards are incredibly versatile - expect them to have answers for many situations", "Early Magical Secrets means they might have Counterspell or Fireball by 6th level", "With 6 extra skills, they'll have high bonuses in nearly everything"],
    searchVolume: 5400,
  },
  {
    slug: "college-of-valor-5e",
    name: "College of Valor 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Combat-oriented bards who gain medium armor, shields, martial weapons, and Extra Attack. Their Combat Inspiration lets allies boost AC or damage.",
    focus: "Combat-oriented with medium armor, shields, Extra Attack, and combat inspiration",
    keyFeatures: [
      {
            "name": "Bonus Proficiencies",
            "level": "3rd",
            "description": "Gain proficiency with medium armor, shields, and martial weapons."
      },
      {
            "name": "Combat Inspiration",
            "level": "3rd",
            "description": "Bardic Inspiration recipients can add die to weapon damage roll OR to AC against one attack."
      },
      {
            "name": "Extra Attack",
            "level": "6th",
            "description": "Attack twice when taking the Attack action."
      },
      {
            "name": "Battle Magic",
            "level": "14th",
            "description": "When you cast a bard spell as action, make one weapon attack as bonus action."
      }
],
    commonMistakes: ["Trying to be a frontline fighter instead of a combat support caster", "Forgetting Combat Inspiration can boost AC, not just damage", "Not using Battle Magic to combine spellcasting with weapon attacks"],
    dmTips: ["Valor Bards are durable support casters, not pure martials", "Extra Attack at 6th keeps them competitive in melee", "Battle Magic at 14th makes them very efficient action economy-wise"],
    searchVolume: 4100,
    faq: [
      {
            "question": "What is the College of Valor D&D?",
            "answer": "The College of Valor Bard is a bold and inspiring warrior-poet in Dungeons & Dragons 5th Edition (D&D 5e). This subclass blends martial prowess with magical support, making it an excellent choice for players who want to fight on the front lines while uplifting their allies."
      },
      {
            "question": "Which Bard subclass is the most fun?",
            "answer": "1: eloquence not only is the most charismatic bard, it also has the best bardic inspiration feature. Knocking down enemy saves is often the difference between ending an encounter and wasting your turn. And you can use it for allies too. You and the WL will be best friends if you can get their spells to stick."
      },
      {
            "question": "What is the best species for a valor Bard?",
            "answer": "Elf (High Elf or Wood Elf)\n High Elf Lineage \u2013 is a great pick if you're a valor bard as it gives you access to a cantrip from the Wizard's spell list; such as Booming Blade. It also gives you Misty Step, which isn't on the Bard's Spell list. A decent choice for any bard, an excellent pick for a valor bard."
      }
],
  },
  {
    slug: "college-of-glamour-5e",
    name: "College of Glamour 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Fey-touched bards who can grant temporary HP and reposition allies, charm audiences, and eventually become nearly untouchable through sheer presence.",
    focus: "Fey charm and battlefield repositioning with temporary HP",
    keyFeatures: [
      {
            "name": "Mantle of Inspiration",
            "level": "3rd",
            "description": "As bonus action, spend Bardic Inspiration to give up to 5 allies 5+bard level temp HP and free movement without opportunity attacks."
      },
      {
            "name": "Enthralling Performance",
            "level": "3rd",
            "description": "After 1 minute of performing, charm humanoids in 60ft who fail WIS save for 1 hour."
      },
      {
            "name": "Mantle of Majesty",
            "level": "6th",
            "description": "Cast Command as bonus action without slots while concentrating on unearthly appearance for 1 minute. Once per long rest."
      },
      {
            "name": "Unbreakable Majesty",
            "level": "14th",
            "description": "As bonus action, gain majestic presence for 1 minute. First attack against you each turn requires CHA save or must target someone else and wastes attack on failure."
      }
],
    commonMistakes: ["Forgetting Mantle of Inspiration lets allies move without provoking opportunity attacks", "Not using Enthralling Performance for social infiltration and manipulation", "Overlooking that Mantle of Majesty's Command doesn't use concentration (the appearance does)"],
    dmTips: ["Glamour Bards excel at repositioning the party mid-combat", "Enthralling Performance is excellent for social encounters", "Unbreakable Majesty at 14th makes them very hard to focus down"],
    searchVolume: 3700,
  },
  {
    slug: "college-of-swords-5e",
    name: "College of Swords 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Dexterous melee bards who use Blade Flourishes to enhance attacks with defensive, mobile, or slashing options. Elegant warrior-performers.",
    focus: "Dexterous melee fighter with Blade Flourishes for offense and defense",
    keyFeatures: [
      {
            "name": "Bonus Proficiencies",
            "level": "3rd",
            "description": "Medium armor and scimitar proficiency. Can use weapon as spellcasting focus."
      },
      {
            "name": "Fighting Style",
            "level": "3rd",
            "description": "Choose Dueling (+2 damage) or Two-Weapon Fighting (add modifier to off-hand damage)."
      },
      {
            "name": "Blade Flourish",
            "level": "3rd",
            "description": "Once per turn when you hit, add Bardic Inspiration to damage and choose: Defensive (+die to AC until next turn), Slashing (hit another creature within 5ft), or Mobile (push 5ft and add die to movement)."
      },
      {
            "name": "Extra Attack",
            "level": "6th",
            "description": "Attack twice when taking the Attack action."
      },
      {
            "name": "Master's Flourish",
            "level": "14th",
            "description": "Use d6 for Blade Flourish instead of expending Bardic Inspiration."
      }
],
    commonMistakes: ["Using Blade Flourish every attack and running out of Bardic Inspiration", "Forgetting you can use your weapon as a spellcasting focus", "Not waiting for Master's Flourish at 14th to spam flourishes freely"],
    dmTips: ["Swords Bards are melee skirmishers, not tanks - they need to stay mobile", "Defensive Flourish can stack with Shield spell for very high AC", "At 14th level, free d6 flourishes every turn makes them very efficient"],
    searchVolume: 4800,
  },
  {
    slug: "college-of-whispers-5e",
    name: "College of Whispers 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Sinister bards specializing in espionage, fear, and identity theft. They deal psychic damage and can steal a creature's appearance after killing them.",
    focus: "Espionage and psychic damage, stealing identities",
    keyFeatures: [
      {
            "name": "Psychic Blades",
            "level": "3rd",
            "description": "When you hit with weapon attack, expend Bardic Inspiration to deal extra psychic damage (2d6, scaling to 8d6)."
      },
      {
            "name": "Words of Terror",
            "level": "3rd",
            "description": "After 1 minute talking to humanoid, they're frightened of a creature you choose for 1 hour on failed WIS save."
      },
      {
            "name": "Mantle of Whispers",
            "level": "6th",
            "description": "When a humanoid dies within 30ft, capture their shadow. Use action to assume their appearance for 1 hour and gain basic info about their life."
      },
      {
            "name": "Shadow Lore",
            "level": "14th",
            "description": "Whisper to creature for 1 minute, then they're charmed and obey you for 8 hours on failed WIS save. Once per long rest."
      }
],
    commonMistakes: ["Using Psychic Blades instead of giving Bardic Inspiration to allies", "Forgetting Mantle of Whispers requires the creature to die within 30ft", "Not leveraging Words of Terror for social manipulation before combat"],
    dmTips: ["Whispers Bards are spy characters - give them infiltration opportunities", "Mantle of Whispers creates excellent roleplay scenarios", "Psychic Blades competes with giving inspiration - it's a tradeoff"],
    searchVolume: 3200,
  },
  {
    slug: "college-of-eloquence-5e",
    name: "College of Eloquence 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Master orators with guaranteed minimum rolls on Persuasion and Deception, plus improved Bardic Inspiration that returns on failure.",
    focus: "Master persuader with minimum rolls and unsettling words",
    keyFeatures: [
      {
            "name": "Silver Tongue",
            "level": "3rd",
            "description": "Treat any Persuasion or Deception check roll of 9 or lower as a 10."
      },
      {
            "name": "Unsettling Words",
            "level": "3rd",
            "description": "As bonus action, creature within 60ft subtracts Bardic Inspiration from next save before your next turn."
      },
      {
            "name": "Unfailing Inspiration",
            "level": "6th",
            "description": "If ally uses your Bardic Inspiration and still fails, they keep the die."
      },
      {
            "name": "Universal Speech",
            "level": "6th",
            "description": "Choose up to PB creatures within 60ft to understand your speech for 1 hour. PB uses per long rest."
      },
      {
            "name": "Infectious Inspiration",
            "level": "14th",
            "description": "When ally succeeds using your Bardic Inspiration, give another creature within 60ft inspiration as reaction. CHA mod uses per long rest."
      }
],
    commonMistakes: ["Forgetting Silver Tongue works on both Persuasion AND Deception", "Not using Unsettling Words to help allies land save-or-suck spells", "Overlooking that Unfailing Inspiration makes your inspiration nearly infinite"],
    dmTips: ["Eloquence Bards will succeed at nearly every social check - plan accordingly", "Unsettling Words + ally's save spell is a devastating combo", "This is widely considered the strongest bard subclass - expect high impact"],
    searchVolume: 4600,
    faq: [
      {
            "question": "Why is Eloquence Bard so good?",
            "answer": "And still doesn't succeed on the attack saving throw or check then they hold on to that die. And they can apply it to some other role later. This is also a nice feature."
      },
      {
            "question": "What makes the College of Eloquence unique?",
            "answer": "If you love the idea of using words to control the battlefield and the story, the College of Eloquence is for you. Eloquence Bards turn language into stagecraft. Let your Dungeons & Dragons dice mirror that polished poise so every persuasion check, Bardic Inspiration, and saving throw feels deliberate."
      },
      {
            "question": "Which Bard subclass is the most fun?",
            "answer": "1: eloquence not only is the most charismatic bard, it also has the best bardic inspiration feature. Knocking down enemy saves is often the difference between ending an encounter and wasting your turn. And you can use it for allies too. You and the WL will be best friends if you can get their spells to stick."
      },
      {
            "question": "Which Bard College does the most damage?",
            "answer": "The math looks right, for damage, the swords bard will be more consistent with the extra attack, while whispers bard is higher damage for a few rounds. Extra attack would help get sneak attack throughout the encounter. But both of them work well."
      }
],
  },
  {
    slug: "college-of-creation-5e",
    name: "College of Creation 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Bards who channel the Song of Creation to create objects from nothing and animate items to fight alongside them.",
    focus: "Creating objects and animating items with performance",
    keyFeatures: [
      {
            "name": "Mote of Potential",
            "level": "3rd",
            "description": "Bardic Inspiration creates a mote that adds effects: healing on ability checks, thunder damage to nearby enemies on attacks, or temp HP on saves."
      },
      {
            "name": "Performance of Creation",
            "level": "3rd",
            "description": "Create nonmagical item worth up to 20gp x bard level that lasts PB hours. Size increases with level."
      },
      {
            "name": "Animating Performance",
            "level": "6th",
            "description": "Animate Large or smaller nonmagical item as dancing item (stat block). Commands as bonus action. Once per long rest or 3rd+ slot."
      },
      {
            "name": "Creative Crescendo",
            "level": "14th",
            "description": "Create up to 5 items with Performance of Creation at once, one can be worth any gold amount."
      }
],
    commonMistakes: ["Forgetting Performance of Creation items disappear after a few hours", "Not using the Mote of Potential's specific bonuses for different roll types", "Overlooking that Creative Crescendo allows ONE item of unlimited value"],
    dmTips: ["Performance of Creation encourages creative problem-solving with conjured items", "The Dancing Item at 6th level is a useful combat summon", "At 14th, they can create very expensive items - set appropriate limits"],
    searchVolume: 2900,
    faq: [
      {
            "question": "What is College of Creation D&D?",
            "answer": "The College of Creation Bard is an imaginative and inspiring character in Dungeons & Dragons 5th Edition (D&D 5e). These Bards channel the Song of Creation, bringing objects and ideas to life to assist their allies. This subclass is ideal for players who love creativity and support-based gameplay."
      },
      {
            "question": "Is 2014 or 2024 Bard better?",
            "answer": "The 2024 Bard now gets earlier access to Expertise, utility improvements to Countercharm, and the major boosts to Magical Secrets and Font of Inspiration instead. The 2024 Player's Handbook presents three familiar subclasses for Bards and one brand-new one."
      },
      {
            "question": "What is the moat of potential?",
            "answer": "The Mote of Potential must stay within 5ft of whomever has that bardic inspiration. If the Mote is used on an attack roll \"Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters**."
      },
      {
            "question": "What's the best race for a Bard in 5e?",
            "answer": "Half-elves make the best bards. They get bonuses to CHA and any other two stats, and enjoy the best boons from the elven race, namely resistance to being charmed and immunity to magical sleep."
      }
],
  },
  {
    slug: "order-of-the-ghostslayer-5e",
    name: "Order of the Ghostslayer 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "subclasses",
    source: "Critical Role",
    subclassLevel: 3,
    description: "The oldest blood hunter order, specialized in destroying undead. Their rite damage ignores resistance and they can see invisible creatures.",
    focus: "Hunting undead with rite damage ignoring resistance and curse of the exorcist",
    keyFeatures: [
      {
            "name": "Rite of the Dawn",
            "level": "3rd",
            "description": "Learn radiant rite damage. Rite damage ignores resistance to the rite's damage type."
      },
      {
            "name": "Curse Specialist",
            "level": "3rd",
            "description": "Blood Curse of the Exorcist: bonus action to make undead, fey, or fiend subtract d4 from attacks and ability checks for 1 minute."
      },
      {
            "name": "Ethereal Step",
            "level": "7th",
            "description": "See into Ethereal Plane up to 30ft. As bonus action, briefly step into Ethereal Plane, moving through creatures and objects."
      },
      {
            "name": "Brand of Sundering",
            "level": "11th",
            "description": "Branded creatures vulnerable to your rite damage type."
      },
      {
            "name": "Blood Curse of the Exorcist (Amplified)",
            "level": "15th",
            "description": "Amplified version paralyzes the target instead."
      },
      {
            "name": "Rite Revival",
            "level": "18th",
            "description": "When reduced to 0 HP with active rite, drop to 1 HP instead. Once per long rest."
      }
],
    commonMistakes: ["Forgetting rite damage ignores resistance even against non-undead", "Not using the radiant rite against undead - it's especially effective", "Overlooking that Ethereal Step lets you phase through walls briefly"],
    dmTips: ["Ghostslayers excel in undead-heavy campaigns - give them those opportunities", "Resistance-ignoring damage is powerful against many creatures", "At higher levels, Brand of Sundering makes them devastating against single targets"],
    searchVolume: 2800,
    faq: [
      {
            "question": "What does Order of the Ghostslayer do?",
            "answer": "The order of the Ghostslayer is a subclass of Blood Hunter which characters in Reth'car can become. The Ghostslayers originate from the Ghostslayer Dawnwardens, who specialize in destroying the undead in combat."
      },
      {
            "question": "What is the strongest blood hunter subclass?",
            "answer": "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
            "question": "What is the path of the Ghostslayer?",
            "answer": "The Order of the Ghostslayer is the oldest of the orders, having originally rediscovered the secrets of blood magic and refined them for combat against the scourge of undeath. Those who chose to follow the Ghostslayer path were those who had an obsession with death and being close to it."
      },
      {
            "question": "Was Blood Hunter made for Vin Diesel?",
            "answer": "Matt created the Witch Hunter class for Vin Diesel when they did their D&Diesel video to promote The Last Witch Hunter. He enjoyed the idea of the class, but wanted to make it more suitable for every day D&D usage, so he tweaked it and eventually created the blood hunter."
      }
],
  },
  {
    slug: "order-of-the-profane-soul-5e",
    name: "Order of the Profane Soul 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "subclasses",
    source: "Critical Role",
    subclassLevel: 3,
    description: "Blood hunters who make pacts with lesser evil powers for limited warlock-style spellcasting. Choose a patron that grants bonus rite effects.",
    focus: "Warlock pact magic for limited spellcasting and rite focus",
    keyFeatures: [
      {
            "name": "Pact Magic",
            "level": "3rd",
            "description": "Gain warlock spellcasting (2 cantrips, 2 spells, scales slowly). Spell slots recharge on short rest."
      },
      {
            "name": "Rite Focus",
            "level": "3rd",
            "description": "Use weapon as spellcasting focus while rite is active. Gain bonus based on patron (Archfey: charm, Fiend: fire damage, Great Old One: psychic damage, etc)."
      },
      {
            "name": "Revealed Arcana",
            "level": "7th",
            "description": "Gain one spell from expanded spell list based on patron, castable without slot once per long rest."
      },
      {
            "name": "Unsealed Arcana",
            "level": "15th",
            "description": "Gain another free spell from expanded list based on patron."
      },
      {
            "name": "Soul Syphon",
            "level": "18th",
            "description": "When you reduce creature to 0 HP with rite-enhanced attack, regain one spell slot."
      }
],
    commonMistakes: ["Expecting full warlock spellcasting - Profane Soul has fewer slots and slower progression", "Forgetting the patron bonus effect only works while rite is active", "Not choosing spells that complement the martial blood hunter playstyle"],
    dmTips: ["This creates a MAD character needing DEX/STR, INT/WIS, and now CHA or INT for spells", "The patron choice adds significant flavor and mechanical variance", "Short rest spell recovery is powerful in dungeon-crawl campaigns"],
    searchVolume: 2400,
    faq: [
      {
            "question": "What is the order of the profane soul?",
            "answer": "The order of the profane soul is a 3rd party subclass for the blood hunter class. It's been created by Matt Mercer of Critical Role and while it's featured on D&D Beyond, you should still check with your DM if you want to use it for your character."
      },
      {
            "question": "What is the strongest blood hunter subclass?",
            "answer": "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
            "question": "Why did Matt Mercer make Blood Hunter?",
            "answer": "It was based on his character from the movie The Last Witch Hunter, with inspiration from The Witcher series of books and games. Looking back on the one-shot, Matt saw potential to build a full and standalone class option that uses health as its main resource."
      },
      {
            "question": "What stats to prioritize for Blood Hunter?",
            "answer": "What are the key stats to focus on when building a Blood Hunter? Blood Hunters benefit primarily from high Dexterity for attack and defense, Constitution for durability, and Intelligence or Wisdom depending on the chosen subclass and role."
      }
],
  },
  {
    slug: "order-of-the-mutant-5e",
    name: "Order of the Mutant 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "subclasses",
    source: "Critical Role",
    subclassLevel: 3,
    description: "Blood hunters who use mutagenic formulas to temporarily enhance their bodies, gaining powerful buffs with corresponding side effects.",
    focus: "Mutagenic formulas granting temporary physical enhancements with side effects",
    keyFeatures: [
      {
            "name": "Formulas",
            "level": "3rd",
            "description": "Learn 3 mutagen formulas (more at higher levels). Create mutagens during short rest."
      },
      {
            "name": "Mutagencraft",
            "level": "3rd",
            "description": "As bonus action, consume mutagen for benefit and drawback lasting until short rest. Can have one active (more later)."
      },
      {
            "name": "Strange Metabolism",
            "level": "7th",
            "description": "Immunity to poison damage and poisoned condition. Can end mutagen early as bonus action."
      },
      {
            "name": "Brand of Axiom",
            "level": "11th",
            "description": "Branded creature can't move more than 30ft from you, teleportation fails, and can't become invisible/hidden."
      },
      {
            "name": "Blood Curse of Corrosion",
            "level": "15th",
            "description": "New blood curse that deals acid damage and reduces AC."
      },
      {
            "name": "Exalted Mutation",
            "level": "18th",
            "description": "One mutagen's drawback doesn't affect you."
      }
],
    commonMistakes: ["Ignoring mutagen drawbacks - they're significant debuffs", "Not preparing the right mutagens for expected challenges", "Forgetting you can end mutagens early at 7th level"],
    dmTips: ["The Witcher inspiration is strong - lean into the alchemist fantasy", "Mutagen choices create interesting tactical decisions", "The drawbacks are real - exploit them if targeting a Mutant blood hunter"],
    searchVolume: 2100,
    faq: [
      {
            "question": "What is the strongest blood hunter subclass?",
            "answer": "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
            "question": "Why did Matt Mercer make blood Hunter?",
            "answer": "It was based on his character from the movie The Last Witch Hunter, with inspiration from The Witcher series of books and games. Looking back on the one-shot, Matt saw potential to build a full and standalone class option that uses health as its main resource."
      },
      {
            "question": "What is the Order of the Lycan?",
            "answer": "The Order of the Lycan allows Blood Hunters to tap into their inner animalistic nature, transforming into half-human, half-wolf hybrids. With heightened senses, razor-sharp claws, and powerful bite attacks, these ferocious warriors become fearsome foes on the battlefield."
      },
      {
            "question": "What is the hunters bane ritual?",
            "answer": "Known as the Blut\u00e4ndun ritual in the blood hunter order, the Hunter's Bane is an alchemical concoction, its exact origins lost to time, which forever alters the drinker's life force. Not all who drink the Hunter's Bane live through the ordeal, and those who do survive can take a week to recover."
      }
],
  },
  {
    slug: "order-of-the-lycan-5e",
    name: "Order of the Lycan 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "subclasses",
    source: "Critical Role",
    subclassLevel: 3,
    description: "Blood hunters who embrace controlled lycanthropy, transforming into powerful hybrid forms with natural weapons and regeneration.",
    focus: "Controlled lycanthropy transformation for melee power and regeneration",
    keyFeatures: [
      {
            "name": "Heightened Senses",
            "level": "3rd",
            "description": "Advantage on Perception checks using hearing or smell."
      },
      {
            "name": "Hybrid Transformation",
            "level": "3rd",
            "description": "As bonus action, transform for 1 hour or until ended. Gain claws (1d6+STR), bonus unarmed strikes, advantage on STR checks/saves, +1 AC."
      },
      {
            "name": "Bloodlust",
            "level": "3rd",
            "description": "When damaged in hybrid form below half HP, make WIS save or attack nearest creature. Becomes easier to control with level."
      },
      {
            "name": "Stalker's Prowess",
            "level": "7th",
            "description": "Climb speed, 10ft extra movement, standing from prone costs 5ft."
      },
      {
            "name": "Advanced Transformation",
            "level": "11th",
            "description": "Regenerate HP at start of turn in hybrid form if above 0 HP and not touching silver."
      },
      {
            "name": "Brand of the Voracious",
            "level": "15th",
            "description": "Branded creature takes extra damage when you have advantage."
      },
      {
            "name": "Hybrid Mastery",
            "level": "18th",
            "description": "+2 AC in hybrid form, regenerate even at 0 HP (still make death saves)."
      }
],
    commonMistakes: ["Underestimating Bloodlust - it can turn you against allies at low HP", "Forgetting the claws are your primary weapons, not regular weapons", "Not leveraging advantage on STR checks for grappling"],
    dmTips: ["Bloodlust creates dramatic roleplay moments - embrace them", "Silver weapons bypass regeneration - save them for Lycans", "The transformation is powerful but requires control - good character arc material"],
    searchVolume: 4200,
  },
  {
    slug: "life-domain-5e",
    name: "Life Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "The quintessential healer domain with heavy armor and maximized healing spells.",
    focus: "Best healing in game with bonus healing and heavy armor proficiency",
    searchVolume: 6100,
  },
  {
    slug: "light-domain-5e",
    name: "Light Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Blaster clerics who control light and fire, with powerful offensive options.",
    focus: "Radiant damage and control with Warding Flare and fireball",
    searchVolume: 4300,
    faq: [
      {
            "question": "Are light domain Clerics good?",
            "answer": "Cleric being a powerful class in general allows Light Domain Clerics to focus on blast damages and still has decent survivability with relatively low cost, which makes them stand out. They are very well balanced, to the point they may be just below the best subclasses, like Chronurgy Wizard and Twilight Domain Clerics."
      },
      {
            "question": "What is the Cleric domain of light 5e?",
            "answer": "The Light Domain Cleric is one of the most dynamic cleric subclasses in Dungeons & Dragons 5e. With access to radiant and fire magic, powerful control features, and strong defensive tools, it allows players to be both an avenger of the gods and a protector of their party."
      },
      {
            "question": "What is the best race for a light domain Cleric?",
            "answer": "Humans, half elves, Aasimars and tieflings are the best races for versatility and can be whatever class and are pretty much the most common races for clerics."
      },
      {
            "question": "What is the strongest Cleric domain?",
            "answer": "Twilight Domain is pretty generally considered the \"best\" domain... or at the very least, the most broken. But Tempest and Death are generally well respected, although the Grave domain is probably more popular than Death and has a similar feel."
      }
],
  },
  {
    slug: "war-domain-5e",
    name: "War Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Battle clerics with heavy armor, martial weapons, and divine strike.",
    focus: "Martial combat with bonus attacks and heavy armor",
    searchVolume: 3800,
  },
  {
    slug: "trickery-domain-5e",
    name: "Trickery Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Deceptive clerics with illusory duplicates and stealth support spells.",
    focus: "Stealth and illusions with duplicate and pass without trace",
    searchVolume: 3200,
  },
  {
    slug: "tempest-domain-5e",
    name: "Tempest Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Storm clerics who maximize lightning and thunder damage with heavy armor.",
    focus: "Lightning and thunder damage with Destructive Wrath maximizing damage",
    searchVolume: 4500,
  },
  {
    slug: "knowledge-domain-5e",
    name: "Knowledge Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Scholarly clerics with extra proficiencies and divination magic.",
    focus: "Skills and information gathering with expertise and read thoughts",
    searchVolume: 2600,
  },
  {
    slug: "nature-domain-5e",
    name: "Nature Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Nature priests with druid cantrips and heavy armor proficiency.",
    focus: "Druid-like abilities with heavy armor",
    searchVolume: 2100,
  },
  {
    slug: "grave-domain-5e",
    name: "Grave Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Guardians of death's balance who prevent premature death and empower critical hits.",
    focus: "Death prevention with spare the dying range and vulnerability on crits",
    searchVolume: 4100,
    faq: [
      {
            "question": "Is Grave Domain cleric good?",
            "answer": "The Grave Domain Cleric is an exceptional support and damage amplifier, ensuring fallen allies rise while sending enemies to the afterlife faster. If you want to walk the line between life and death, healing and destruction, this subclass is for you."
      },
      {
            "question": "Are grave domain clerics evil?",
            "answer": "On the other hand, Grave Clerics are typically good guy clerics who focus on STOPPING undead and making sure that the souls of the dead are respected and protected from desecration. A grave cleric would watch over a graveyard, a death cleric would lead an army of undead."
      },
      {
            "question": "Is grave domain the same as death domain?",
            "answer": "Grave Domain is a direct opposite to Death Domain, it's not a matter of one having slightly different abilites. Grave Domain clerics are stereotypically followers of Kelemvor, The Raven Queen etc and are extremely anti-undead. They are diametrically opposite in their views of necromancy."
      }
],
  },
  {
    slug: "forge-domain-5e",
    name: "Forge Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Smith clerics who create magic items and become increasingly armored.",
    focus: "Crafting and AC bonuses with heavy armor",
    searchVolume: 4800,
  },
  {
    slug: "order-domain-5e",
    name: "Order Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Lawful clerics who grant allies reaction attacks when casting support spells.",
    focus: "Commanding allies to attack when you cast spells on them",
    searchVolume: 2400,
    faq: [
      {
            "question": "Is order domain cleric good?",
            "answer": "Compared to other Clerics, Order Clerics are more tactical and control-oriented, excelling in leading and supporting a melee-heavy party. Cast buffs on allies before their turns \u2013 Voice of Authority grants them an immediate free attack."
      },
      {
            "question": "What order do cleric ability scores go in?",
            "answer": "First, Wisdom should be your highest ability score, followed by Strength or Constitution. Wisdom is the Cleric's spellcasting modifier so it should be the highest."
      },
      {
            "question": "What are the Order cleric's domain spells?",
            "answer": "1st. command, heroism.\n3rd. enhance ability, hold person.\n5th. mass healing word, slow.\n7th. compulsion, locate creature.\n9th. commune, dominate person."
      }
],
  },
  {
    slug: "peace-domain-5e",
    name: "Peace Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Harmony clerics with powerful party-wide bonuses considered overpowered by many.",
    focus: "Extremely powerful support with Emboldening Bond granting d4 to saves/checks",
    searchVolume: 3900,
  },
  {
    slug: "twilight-domain-5e",
    name: "Twilight Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Night clerics with massive temp HP auras, widely considered the strongest domain.",
    focus: "Overpowered darkvision sharing and temp HP aura",
    searchVolume: 5200,
    faq: [
      {
            "question": "Is Twilight cleric a good healer?",
            "answer": "This ability lets them be the best healer without needing healing spells so they can also focus on damage while passively healing everyone. This is is one feature of the twilight cleric they also get 300ft dark vision, the ability to give advantage on initiative, and martial weapon/heavy armor proficiency at level 1!"
      },
      {
            "question": "What is the Twilight Domain in cleric?",
            "answer": "The Twilight Domain Cleric is a divine guardian of the boundary between light and darkness, bringing comfort to allies and terror to enemies."
      },
      {
            "question": "What is the strongest cleric domain?",
            "answer": "Twilight Domain is pretty generally considered the \"best\" domain... or at the very least, the most broken. But Tempest and Death are generally well respected, although the Grave domain is probably more popular than Death and has a similar feel."
      }
],
  },
  {
    slug: "circle-of-the-land-5e",
    name: "Circle of the Land 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Traditional caster druids with Natural Recovery and terrain-based bonus spells.",
    focus: "Spell recovery and bonus spells based on terrain type",
    searchVolume: 3100,
    faq: [
      {
            "question": "Is Circle of the Land good in D&D?",
            "answer": "The Circle of the Land Druid is the best full spellcasting Druid subclass, excelling at battlefield control, healing, and nature-based utility. If you want to play as a spell-focused druid who channels the raw power of the land, this subclass is for you."
      },
      {
            "question": "What does Circle of the Land do?",
            "answer": "The Circle of the Land comprises mystics and sages who safeguard ancient knowledge and rites. These Druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of their communities."
      },
      {
            "question": "Does Circle of the Land get Owlbear?",
            "answer": "The Circle of the Land Druid, like the Wizard, offers some powerful control spells, on top of its own unique tools. Baldur's Gate 3 has a unique take on the Wild Shape feature, giving the Druid access to some very powerful control tools from the Spider form's web and damage from the Owlbear form."
      }
],
  },
  {
    slug: "circle-of-the-moon-5e",
    name: "Circle of the Moon 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Shapeshifting druids with powerful beast forms and elemental transformations.",
    focus: "Combat Wild Shape with higher CR and bonus action transformation",
    searchVolume: 7200,
    faq: [
      {
            "question": "Is Circle of the moon good in D&D?",
            "answer": "The feature is less good as you get higher but you're still a druid with tons of useful/impactful spells. Yeah, I was referring to the wild shapes being super strong. After 5 it falls off and is more on par with other classes. It's still very useful and on top of their spell casting, it's an excellent class."
      },
      {
            "question": "What is the Circle of the moon 5e?",
            "answer": "The Circle of the Moon Druid is one of the strongest melee-focused Druids in D&D 5e, excelling at combat survivability, exploration, and primal adaptability. If you want to transform into the mightiest creatures of the wild and dominate the battlefield with raw animal power, this subclass is for you."
      },
      {
            "question": "What is the point of Circle of the moon?",
            "answer": "And they will bend. The light and as that light bends. It makes a perfect ring. As those lights go into the ice or go into the water particles. So let's put me in here uh I don't have my glasses."
      },
      {
            "question": "Is Circle of the moon a hard game?",
            "answer": "A difficult game compared to other Castlevania games. Limited items and powerful enemies make this game even more challenging to complete. The DSS gameplay system also adds to the unique and engaging feel of this game."
      }
],
  },
  {
    slug: "circle-of-dreams-5e",
    name: "Circle of Dreams 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 2,
    description: "Feywild-touched druids with healing, teleportation, and dream magic.",
    focus: "Fey healing and teleportation with bonus action heal pool",
    searchVolume: 2400,
    faq: [
      {
            "question": "Is Circle of Dreams a strong druid subclass?",
            "answer": "Overall, Circle of Dreams reinforces the Druid's identity of being a strong support class. Is there room for improvement? Sure. For one, it might be nice to have received an expanded spell list. But all that means is that it's still a good subclass for a great class."
      },
      {
            "question": "What is the Circle of Dreams D&D?",
            "answer": "The Circle of Dreams Druid is a mystical guardian of the Feywild, dreams, and healing energy, wielding nature's magic to protect, heal, and travel between worlds."
      },
      {
            "question": "What book is Circle of Dreams druid in?",
            "answer": "The Druid's Circle of Dreams subclass is from Xanathar's Guide to Everything (which also contains a number of other subclasses for the various classes)."
      }
],
  },
  {
    slug: "circle-of-the-shepherd-5e",
    name: "Circle of the Shepherd 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 2,
    description: "Beast-focused druids who enhance summoned creatures and allies with spirit totems.",
    focus: "Summoning and buffing beasts/fey with spirit totems",
    searchVolume: 3800,
  },
  {
    slug: "circle-of-spores-5e",
    name: "Circle of Spores 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 2,
    description: "Fungal druids who deal necrotic damage and animate the dead.",
    focus: "Necrotic damage aura and zombie animation instead of Wild Shape",
    searchVolume: 4100,
  },
  {
    slug: "circle-of-stars-5e",
    name: "Circle of Stars 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 2,
    description: "Celestial druids who assume Starry Forms for reliable healing, damage, or concentration.",
    focus: "Starry Form constellations for healing, damage, or concentration advantage",
    searchVolume: 4600,
  },
  {
    slug: "circle-of-wildfire-5e",
    name: "Circle of Wildfire 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 2,
    description: "Fire druids with a Wildfire Spirit companion for damage and tactical teleportation.",
    focus: "Fire spirit companion for damage and teleportation",
    searchVolume: 3900,
  },
  {
    slug: "champion-5e",
    name: "Champion 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "The simplest martial subclass with expanded critical range and athletic abilities.",
    focus: "Simple but effective with improved critical range and remarkable athlete",
    searchVolume: 5600,
  },
  {
    slug: "battle-master-5e",
    name: "Battle Master 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Tactical fighters with superiority dice and combat maneuvers for every situation.",
    focus: "Tactical superiority dice and maneuvers for versatile combat options",
    searchVolume: 8900,
    faq: [
      {
            "question": "What does Battle Master do in 5e?",
            "answer": "The Battle Master Fighter is one of the most customizable and tactical martial subclasses in D&D 5e, excelling at damage, battlefield control, and combat strategy. If you want to play as a highly skilled warrior who uses intelligence and technique to dominate fights, this subclass is for you."
      },
      {
            "question": "Is the Battlemaster a good mech?",
            "answer": "It's slower, well armored, and not particularly well armed \u2013 but that doesn't matter if you're bringing this. It only exists to run double-master, and if you're doing that it's a decent pick."
      },
      {
            "question": "What is the most powerful feat in 5e?",
            "answer": "Generally best feats (these are mostly dependent upon build, not necessarily universally amazing): Lucky, Great Weapon Master, Sharpshooter, Polearm Master, Sentinel, War Caster."
      }
],
  },
  {
    slug: "arcane-archer-5e",
    name: "Arcane Archer 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Magical archers who infuse arrows with arcane effects.",
    focus: "Magical arrows with various effects like seeking and bursting",
    searchVolume: 4800,
  },
  {
    slug: "cavalier-5e",
    name: "Cavalier 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Mounted knights who protect allies and punish enemies who ignore them.",
    focus: "Mounted combat and ally protection with mark abilities",
    searchVolume: 3200,
  },
  {
    slug: "samurai-5e",
    name: "Samurai 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Disciplined warriors who gain advantage and temp HP through sheer will.",
    focus: "Fighting Spirit for temp HP and advantage, elegant warrior",
    searchVolume: 4100,
  },
  {
    slug: "echo-knight-5e",
    name: "Echo Knight 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Explorer's Guide to Wildemount",
    subclassLevel: 3,
    description: "Mysterious warriors who manifest echoes of themselves from other timelines.",
    focus: "Shadow echo for positioning, flanking, and extra attacks",
    searchVolume: 7800,
    faq: [
      {
            "question": "Is the Echo Knight official?",
            "answer": "Echo Knight is in Explorers Guide to Wildemount, which makes it legal for Critical Role campaigns only. You cannot play an Echo Knight in the Forgotten Realms content."
      },
      {
            "question": "What is the best race for Echo Knight?",
            "answer": "Since Echo Knights focus on mobility and combat versatility, the best races include: Shadar-Kai Elf \u2013 Bonus teleportation and necrotic resistance. Goliath \u2013 Increases Strength and Constitution while giving damage reduction. Variant Human \u2013 Gain a free feat at level 1, such as Sentinel or Polearm Master."
      },
      {
            "question": "What can an Echo Knight do?",
            "answer": "Powers and Abilities. Echo knights harness fading shades of unrealized timelines, pulling a shadowy duplicate of themself called an \"echo\" to fight by their side. The echoes are somewhat fragile, but the echo knight can summon another at any time."
      },
      {
            "question": "Does Echo Knight count as an ally?",
            "answer": "Your echo is neither a character nor an ally. The echo knight's description says \u201cany attack you make with that action can originate from your space or the echo's space.\u201d"
      }
],
  },
  {
    slug: "psi-warrior-5e",
    name: "Psi Warrior 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Psychic warriors who shield allies, move objects, and enhance attacks.",
    focus: "Psionic powers for defense, mobility, and force damage",
    searchVolume: 3400,
  },
  {
    slug: "rune-knight-5e",
    name: "Rune Knight 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Rune-carving fighters who grow to Large size and wield giant magic.",
    focus: "Giant runes for size increase, elemental powers, and utility",
    searchVolume: 5100,
  },
  {
    slug: "way-of-the-open-hand-5e",
    name: "Way of the Open Hand 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Classic martial artists with improved Flurry of Blows and the Quivering Palm.",
    focus: "Enhanced Flurry of Blows with knock prone, push, or prevent reactions",
    searchVolume: 3800,
    faq: [
      {
            "question": "Is the way of open hand monk good?",
            "answer": "The Way of the Open Hand Monk is one of the most powerful and effective martial subclasses in D&D 5e. With the updated 2024 Player's Handbook changes carrying into 2025, Monks overall have gained small but meaningful buffs that improve survivability and ki management."
      },
      {
            "question": "What are the weaknesses of monk of the open hand?",
            "answer": "I assume you're going to pick up pushing attack so you launch someone 35ft with flurry of blows. The downsides are that your damage will be pretty bad if you're going unarmed/using a monk weapon that can't interact with sharpshooter and you won't have the defences to last long in melee."
      },
      {
            "question": "What is the most fun monk subclass?",
            "answer": "Way of Mercy\n Presented as a mask wearing grim healer, using their knowledge of the body and life force to bring healing to their friends and pain to their enemies, the Way of Mercy is one of the coolest Monk subclasses, but it's also our pick for most powerful."
      }
],
  },
  {
    slug: "way-of-shadow-5e",
    name: "Way of Shadow 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Ninja monks who teleport through shadows and cast darkness spells.",
    focus: "Shadow teleportation and minor illusion for ninja-style play",
    searchVolume: 4200,
    faq: [
      {
            "question": "What is the way of the shadow in 5e?",
            "answer": "The Way of Shadow Monk is one of the most unique and versatile subclasses in D&D 5e, excelling at stealth-based combat, teleportation, and battlefield manipulation. If you want to play as a deadly ninja-style warrior who thrives in darkness and shadows, this subclass is for you!"
      },
      {
            "question": "What is the most fun Monk subclass?",
            "answer": "Way of Mercy\n Presented as a mask wearing grim healer, using their knowledge of the body and life force to bring healing to their friends and pain to their enemies, the Way of Mercy is one of the coolest Monk subclasses, but it's also our pick for most powerful."
      }
],
  },
  {
    slug: "way-of-the-four-elements-5e",
    name: "Way of the Four Elements 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Avatar-style monks who spend ki to cast elemental spells.",
    focus: "Elemental disciplines for spellcasting using ki points",
    searchVolume: 3100,
  },
  {
    slug: "way-of-the-drunken-master-5e",
    name: "Way of the Drunken Master 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Deceptive monks who use unpredictable movements to avoid attacks.",
    focus: "Unpredictable movement and free disengaging after Flurry",
    searchVolume: 3400,
  },
  {
    slug: "way-of-the-kensei-5e",
    name: "Way of the Kensei 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Weapon masters who treat chosen weapons as monk weapons.",
    focus: "Mastery of chosen weapons with enhanced attacks and defense",
    searchVolume: 3700,
  },
  {
    slug: "way-of-the-sun-soul-5e",
    name: "Way of the Sun Soul 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Light monks with radiant ranged attacks and searing damage abilities.",
    focus: "Radiant ranged attacks and explosive ki abilities",
    searchVolume: 2800,
    faq: [
      {
            "question": "What is the way of the sun soul?",
            "answer": "The Way of the Sun Soul Monk is a radiant warrior who harnesses the power of light and energy, turning their martial arts into ranged radiant blasts."
      },
      {
            "question": "What is the most fun Monk subclass?",
            "answer": "Way of Mercy\n Presented as a mask wearing grim healer, using their knowledge of the body and life force to bring healing to their friends and pain to their enemies, the Way of Mercy is one of the coolest Monk subclasses, but it's also our pick for most powerful."
      }
],
  },
  {
    slug: "way-of-mercy-5e",
    name: "Way of Mercy 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Plague doctor monks who heal allies and harm enemies with touch.",
    focus: "Healing and harming with Hands of Healing and Harm",
    searchVolume: 4600,
    faq: [
      {
            "question": "What is the way of mercy in 5e?",
            "answer": "The Way of Mercy Monk is one of the most unique and versatile Monk subclasses in D&D 5e, excelling at healing, status removal, and necrotic damage. If you want to play as a combat medic who balances life and death with every strike, this subclass is for you!"
      },
      {
            "question": "What is the best race for the Monk way of mercy?",
            "answer": "The best race for Monk is typically anything with innate flight. But if those are banned, as they so often are, then Variant Human, Custom Lineage, and Half-Elf are some of the top choices."
      },
      {
            "question": "Why do Way of Mercy monks wear masks?",
            "answer": "Religious reasons, they act in the name of their deity and need to hide their face as to not gain a reputation of themselves. This makes their actions more selfless."
      }
],
  },
  {
    slug: "way-of-the-astral-self-5e",
    name: "Way of the Astral Self 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Monks who manifest astral projections for extended reach and new abilities.",
    focus: "Astral arms for reach, deflection, and WIS-based attacks",
    searchVolume: 3200,
  },
  {
    slug: "oath-of-devotion-5e",
    name: "Oath of Devotion 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "The archetypal holy warrior with radiant damage and anti-fiend abilities.",
    focus: "Classic holy knight with Sacred Weapon and protection from charm",
    searchVolume: 4100,
    faq: [
      {
            "question": "What does the Oath of devotion do?",
            "answer": "The Oath of Devotion grants holy spells that enhance combat, defense, and support. Key Spells: Protection from Evil and Good (3rd Level) \u2013 Prevents possession, charm, or fright effects. Sanctuary (3rd Level) \u2013 Shield an ally from attacks unless enemies pass a saving throw."
      },
      {
            "question": "Is the Oath of devotion any good?",
            "answer": "It's entirely serviceable. Not the best oath by any means, but you still have smite, meaning you won't be a burden in combat. Plus, you get sacred weapon at level 3 which mean you ain't missing melee attacks, which is pretty nice."
      },
      {
            "question": "What breaks the Oath of devotion?",
            "answer": "Lying, cruelty, attacking non-hostile npcs, are all actions that will break the Oath of Devotion."
      }
],
  },
  {
    slug: "oath-of-the-ancients-5e",
    name: "Oath of the Ancients 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Fey-touched paladins with an aura granting spell damage resistance.",
    focus: "Nature-themed with resistance to spell damage aura",
    searchVolume: 4400,
    faq: [
      {
            "question": "Is the Oath of Ancients good in D&D 5e?",
            "answer": "The Oath of the Ancients Paladin is one of the most resilient and supportive Paladin subclasses in D&D 5e, excelling at damage resistance, battlefield control, and nature-themed divine magic."
      }
],
  },
  {
    slug: "oath-of-vengeance-5e",
    name: "Oath of Vengeance 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Relentless hunters who mark enemies for destruction.",
    focus: "Aggressive hunter with advantage on attacks against marked target",
    searchVolume: 5800,
    faq: [
      {
            "question": "Is oath of Vengeance good in 5e?",
            "answer": "The Oath of Vengeance Paladin is one of the most aggressive and damage-focused subclasses in D&D 5e, excelling at single-target elimination, battlefield mobility, and relentless pursuit of enemies. If you want to play as a Paladin who delivers divine justice with unstoppable force, this subclass is for you!"
      },
      {
            "question": "Does allying with Gortash break oath?",
            "answer": "Gortash offers you a new oath of flesh and blood. The paladin option is for you as a paladin to uphold this new oath. So accepting the new oath breaks your current oath."
      },
      {
            "question": "What breaks the oath of vengeance in D&D?",
            "answer": "The Oath of Vengeance tenets can be as easily violated as any other: Fight the Great Evil : If the player backs down from a challenge and allows a great evil to go unopposed (even if the player thought they weren't in a position to oppose it), they've violated their oath."
      },
      {
            "question": "Are Oathbreaker Paladins stronger?",
            "answer": "Ancients is stronger generally. Oathbreaker can do some fun shenanigans stuff with a party of their undead attacking with bows from range at middle-higher levels. But the damage resistance from ancients aura is just so much better than the aura of hate that buffs undead and fiends."
      }
],
  },
  {
    slug: "oathbreaker-5e",
    name: "Oathbreaker 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Dungeon Master's Guide",
    subclassLevel: 3,
    description: "Fallen paladins who embrace darkness and empower undead allies.",
    focus: "Evil paladin controlling undead with aura boosting fiends/undead",
    searchVolume: 6200,
    faq: [
      {
            "question": "How does oathbreaker work in 5e?",
            "answer": "Its basically the 5e version of what we used to call the Blackguard, or Antipaladin. An oathbreaker is a paladin who breaks their sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart been extinguished. Only darkness remains."
      },
      {
            "question": "Is Oathbreaker more powerful?",
            "answer": "As oathbreakers continued to hone and harness the malice within their hearts, their combat prowess, along with those of malign allies, were made more potent and devastating."
      },
      {
            "question": "What does \"oathbreaker\" really mean?",
            "answer": "Oathbreakers are specifically intended to be evil paladins who broke their oath and gained new power through a darker and more evil method (mainly intended to be a villain made by the DM), but a lot of the community saw oathbreakers as simply what happens when an oath is broken."
      }
],
  },
  {
    slug: "oath-of-conquest-5e",
    name: "Oath of Conquest 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Tyrant paladins who use fear to lock enemies in place.",
    focus: "Fear-based control reducing enemy speed to 0 in aura",
    searchVolume: 5100,
    faq: [
      {
            "question": "What does the Oath of conquest do?",
            "answer": "The Oath of Conquest spell list is built around fear, damage mitigation, and punishing enemies for daring to attack you. Key Spells: Armor of Agathys (3rd Level) \u2013 Gives temporary hit points and deals damage when hit. Command (3rd Level) \u2013 Force enemies to kneel, grovel, or flee."
      },
      {
            "question": "What is the best race for Oath of Conquest paladin?",
            "answer": "So Dragonborn's probably the best race for a Conquest Paladin by far, especially since Dragon Fear is a half feat so you don't have to forgo progression in your ability scores to take it. It also scales off of Charisma instead of Constitution like the other breath weapons, which is good for you."
      },
      {
            "question": "Is conquest better than other paladin oaths?",
            "answer": "Yes, all paladins are good. The sub class doesn't change enough about the class to affect that. The fear thing is nice but honestly I use the guided strike more, what makes Conquest good is access to spiritual weapon spell, it effectively give you a third attack, though you can't smite with it of course."
      }
],
  },
  {
    slug: "oath-of-redemption-5e",
    name: "Oath of Redemption 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Peaceful paladins who protect others and seek to redeem enemies.",
    focus: "Pacifist protector reflecting damage and taking hits for allies",
    searchVolume: 3200,
    faq: [
      {
            "question": "Is the Oath of Redemption a good subclass?",
            "answer": "The Oath of Redemption Paladin is one of the most unique and support-focused Paladin subclasses in D&D 5e, excelling at damage mitigation, healing, and peaceful resolutions. If you want to play a divine protector, a peacekeeper, or a Paladin who seeks redemption for themselves or others, this subclass is for you!"
      },
      {
            "question": "What is the strongest paladin subclass?",
            "answer": "5 D&D's Oathbreaker Paladins Are Powerful, But Complicated. ...\n4 D&D's Oath Of Conquest Paladins Are Ruthless Warriors. ...\n3 D&D's Oath Of Vengeance Paladins Embody Righteous Anger. ...\n2 D&D's Oath Of Devotion Paladins Are Paragons Of Virtue. ...\n1 Oath Of The Ancients Is D&D's Most Powerful Paladin Subclass."
      },
      {
            "question": "Are Oathbreaker Paladins any good?",
            "answer": "Yes, Oathbreaker is generally the best subclass of Paladin for Lockadin, if you're going for the classic 7 Paladin / 5 Warlock Split. If you're going for something with fewer than 7 levels in Paladin, Vengeance would be better."
      },
      {
            "question": "What are the tenets of the Oath of Redemption?",
            "answer": "The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice. Peace. Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace."
      }
],
  },
  {
    slug: "oath-of-glory-5e",
    name: "Oath of Glory 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Heroic athletes who inspire allies with legendary deeds.",
    focus: "Athletic hero with speed boosts and legendary athletics",
    searchVolume: 2900,
  },
  {
    slug: "oath-of-the-watchers-5e",
    name: "Oath of the Watchers 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Vigilant paladins who guard against extraplanar threats.",
    focus: "Anti-extraplanar with initiative bonuses and mental save aura",
    searchVolume: 2600,
    faq: [
      {
            "question": "What is the oath of the watchers oath?",
            "answer": "The Oath of the Watchers Paladin is a guardian of reality, sworn to protect the world from extraplanar threats like fiends, aberrations, fey, and celestials."
      },
      {
            "question": "What is the Oath of the Watchers based upon?",
            "answer": "The Oath of the Watchers binds paladins to protect mortal realms from the predations of extraplanar creatures, many of which can lay waste to mortal soldiers. Thus, the Watchers hone their minds, spirits, and bodies to be the ultimate weapons against such threats."
      }
],
  },
  {
    slug: "hunter-5e",
    name: "Hunter 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Classic rangers with customizable combat abilities against various foes.",
    focus: "Versatile combat choices against single targets or hordes",
    searchVolume: 3800,
    faq: [
      {
            "question": "Is Hunter a good ranger subclass?",
            "answer": "And then you have this weird. Counterattack/gimmick. Route this route is all about turning the tables on your prey."
      }
],
  },
  {
    slug: "beast-master-5e",
    name: "Beast Master 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Player's Handbook/Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Rangers with loyal beast companions, improved significantly in Tasha's.",
    focus: "Animal companion that fights alongside you",
    searchVolume: 5400,
  },
  {
    slug: "gloom-stalker-5e",
    name: "Gloom Stalker 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Shadow hunters who are invisible in darkness and devastating on first turns.",
    focus: "Invisibility in darkness with ambush damage and extra attack on first turn",
    searchVolume: 6800,
  },
  {
    slug: "horizon-walker-5e",
    name: "Horizon Walker 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Planar rangers who teleport in combat and deal force damage.",
    focus: "Planar travel and teleportation with force damage",
    searchVolume: 3400,
    faq: [
      {
            "question": "Is Horizon Walker good in 5e?",
            "answer": "Horizon Walker is perfectly serviceable as a Ranger archetype... and with a decent build can be a strong mid-ranged damage dealer, or possibly a decent mobile front-liner. Haste is a wonderful spell addition to the Ranger chassis, and pairs well with Hunter's Mark."
      },
      {
            "question": "What is the best race for a Horizon Walker?",
            "answer": "Eladrin Elf \u2013 Built-in teleportation and Dexterity bonuses.\nShadar-Kai Elf \u2013 Teleportation + resistance to necrotic damage.\nTabaxi \u2013 Feline Agility allows double movement speed."
      },
      {
            "question": "What are the weaknesses of a Horizon Walker?",
            "answer": "The main downside of Horizon Walker is their earlier abilities are pretty weak compared to their later abilities which don't necessarily make up for it, but they're just a solid pick all around and will work just fine in the average campaign."
      },
      {
            "question": "What is a Horizon Walker D&D?",
            "answer": "And lower planes and a passport with more weird stamps than a certified. Fatalist. That's the actual name of a stamp. Collector. Not a Anyway well congratulations. You might be a horizon walker. But"
      }
],
  },
  {
    slug: "monster-slayer-5e",
    name: "Monster Slayer 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Specialized hunters who study and counter supernatural creatures.",
    focus: "Anti-monster with extra damage and counterspell-like ability",
    searchVolume: 2800,
    faq: [
      {
            "question": "What is the best race for monster Slayer Ranger?",
            "answer": "Recommended Races\n Since Monster Slayers rely on Dexterity, Wisdom, and resisting magic, the best races include: Shadar-Kai Elf \u2013 Resistance to necrotic damage, teleportation, and high Dexterity. Firbolg \u2013 Thematically fitting as a protector against supernatural creatures."
      },
      {
            "question": "Is there a Monster Hunter class in D&D?",
            "answer": "The Monster Hunter Class\n These martial combatants live or die by their sword, bow, or hands. They turn encounters against dangerous creatures into hard-fought victories by relying on training, knowledge, and sheer grit. They don't have divine magic like Paladins and aren't in tune with the natural world like Rangers."
      },
      {
            "question": "Can I play as a monster in D&D?",
            "answer": "Yes it's possible, either in-game through an effect like polymorph or (with DM approval) a race based on a monster."
      }
],
  },
  {
    slug: "fey-wanderer-5e",
    name: "Fey Wanderer 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Feywild-touched rangers with charm abilities and psychic attacks.",
    focus: "Charm and fear with psychic damage and WIS to CHA checks",
    searchVolume: 3600,
  },
  {
    slug: "swarmkeeper-5e",
    name: "Swarmkeeper 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Rangers bonded with nature spirits manifesting as helpful swarms.",
    focus: "Swarm of creatures for damage, movement, and defense",
    searchVolume: 2900,
  },
  {
    slug: "drakewarden-5e",
    name: "Drakewarden 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "subclasses",
    source: "Fizban's Treasury of Dragons",
    subclassLevel: 3,
    description: "Dragon-bonded rangers with a growing drake companion.",
    focus: "Drake companion that grows stronger and can be ridden",
    searchVolume: 4200,
  },
  {
    slug: "thief-5e",
    name: "Thief 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Classic rogues with bonus action item use and enhanced climbing/stealth.",
    focus: "Fast hands, second-story work, and supreme stealth",
    searchVolume: 3200,
    faq: [
      {
            "question": "Is Thief a good rogue subclass?",
            "answer": "Thief - he is great combat medic, universally useful and his lvl 17 ability is the best amongst all Rogue subclasses (maybe the best in whole game)."
      },
      {
            "question": "Is a rogue a thief in D&D?",
            "answer": "In 2nd edition the term \"Rogue\" first appeared, used to describe the group of classes made up of those individuals \"living by their wits day to day-often at the expense of others.\" In the core rules, these \"rogue\" classes were the thief and the bard."
      },
      {
            "question": "What is the strongest rogue build?",
            "answer": "Arcane Trickster is the strongest Rogue and the strongest ability is likely the level 9 one. Automatic disadvantage on saves for all enemies is just great and you have built-in Haste + double Sneak Attack in addition to Boom Blade if you get your Concentration free (say, Sentinel + Mirror Image)."
      },
      {
            "question": "Does Thief Rogue get two bonus actions in 5e?",
            "answer": "Action. So at the end of the day it breaks down like. This no cunning action does not grant a rogue a second bonus action in the pencil. And paper version nor does it in Balders's Gate."
      }
],
  },
  {
    slug: "assassin-5e",
    name: "Assassin 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Deadly killers with automatic critical hits on surprised enemies.",
    focus: "Devastating surprise attacks with auto-crits and infiltration",
    searchVolume: 4800,
  },
  {
    slug: "arcane-trickster-5e",
    name: "Arcane Trickster 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 3,
    description: "Magical rogues with limited wizard spellcasting and enhanced Mage Hand.",
    focus: "Illusion and enchantment magic with invisible Mage Hand",
    searchVolume: 5600,
  },
  {
    slug: "inquisitive-5e",
    name: "Inquisitive 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Detective rogues who use Insight to enable Sneak Attack.",
    focus: "Investigation and insight for sneak attack without advantage",
    searchVolume: 2400,
  },
  {
    slug: "mastermind-5e",
    name: "Mastermind 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Tactical rogues who support allies with ranged Help actions.",
    focus: "Ranged Help action and tactical manipulation",
    searchVolume: 2100,
    faq: [
      {
            "question": "Is Mastermind rogue good?",
            "answer": "Compared to other Rogues, Masterminds are the best at controlling information, aiding allies in fights, and outmaneuvering enemies both in and out of combat. Always use Help as a bonus action \u2013 Grant allies advantage every turn for extra Sneak Attack damage."
      },
      {
            "question": "How do I optimize my rogue's damage?",
            "answer": "But if you don't want to rely on any basic skills then you can also go for the shadow. Explosions. Speaking about imbuments imbuments are an extremely great way to increase your damage with rogues."
      }
],
  },
  {
    slug: "scout-5e",
    name: "Scout 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Wilderness rogues with free movement reactions and survival skills.",
    focus: "Skirmisher mobility and nature expertise",
    searchVolume: 2600,
  },
  {
    slug: "swashbuckler-5e",
    name: "Swashbuckler 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 3,
    description: "Dashing duelists who enable Sneak Attack without allies nearby.",
    focus: "Fancy footwork and Sneak Attack in one-on-one duels",
    searchVolume: 5200,
  },
  {
    slug: "phantom-5e",
    name: "Phantom 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Death-touched rogues who deal necrotic damage and gain ghost abilities.",
    focus: "Death-touched with bonus damage and temporary skill proficiencies",
    searchVolume: 3400,
    faq: [
      {
            "question": "Is the phantom rogue good?",
            "answer": "Why Play a Phantom Rogue? Best Rogue for Harnessing the Dead's Knowledge \u2013 Gain skills and abilities from spirits. Unmatched Utility in and out of Combat \u2013 Steal skills, deal necrotic damage, and summon ghostly allies. Strong Thematic Roleplaying Potential \u2013 A mysterious rogue touched by the afterlife."
      },
      {
            "question": "Which rogue is better, 2014 or 2024?",
            "answer": "In summary, the two version of the rogues are generally the same(except for those few extra options) but only because I am using three major options from 2014 (race, background, and subclass). If I were forced to only use 2024 options, the 2024 version of the closest options would be notably more powerful."
      },
      {
            "question": "What is the best species for a rogue?",
            "answer": "As for races, Dexterity is the most important ability for a rogue, so it's advantageous to choose a race that gets a bonus in that. Halflings, elves, and tabaxi make good rogues for this reason, as do goblins, kobolds, and kenku. Humans and half-elves work well also, due to their versatility."
      },
      {
            "question": "What are some good rogue multiclass options?",
            "answer": "Rogue pairs well with A LOT. Barbarian can work surprisingly well. Adding thicc beef, and allowing you to sneak attack on the regular, a truly unbeatable evasion. Fighter in theory can allow you to trigger a sneak attack twice a round for massive nova damage option and, of course fighting style."
      }
],
  },
  {
    slug: "soulknife-5e",
    name: "Soulknife 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 3,
    description: "Psionic rogues with summoned psychic blades and mental powers.",
    focus: "Psychic blades and psi-powered abilities",
    searchVolume: 4100,
    faq: [
      {
            "question": "Is Soulknife Rogue good in 5e?",
            "answer": "The Soulknife Rogue is one of the most unique, stealthy, and versatile subclasses in D&D 5e, excelling at psychic combat, telepathic teamwork, and assassinations with psionic blades."
      },
      {
            "question": "Does Soulknife increase damage?",
            "answer": "Furious Charge: The soulknife deals an additional 2 points of damage on every attack made at the end of a charge. The increased damage is only 1 per attack for off-hand attacks, but becomes 3 per attack when wielding her mind blade two-handed."
      }
],
  },
  {
    slug: "draconic-bloodline-5e",
    name: "Draconic Bloodline 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Dragon-blooded sorcerers with natural armor and elemental affinity.",
    focus: "Dragon ancestry granting AC, damage bonus, and resistance",
    searchVolume: 5400,
  },
  {
    slug: "wild-magic-5e",
    name: "Wild Magic 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Chaos sorcerers with unpredictable magic surges and luck bending.",
    focus: "Chaotic surges and luck manipulation with Tides of Chaos",
    searchVolume: 6200,
    faq: [
      {
            "question": "Are wild magic Sorcerers good?",
            "answer": "Great for Roleplaying \u2013 Wild Magic adds unique story moments and interactions. Surprisingly Strong Buffs \u2013 Surges can grant flight, free spellcasting, or extra defenses. More Sorcery Points Through Luck \u2013 Tides of Chaos lets you gain advantage frequently."
      },
      {
            "question": "What's the best race for a wild magic sorcerer?",
            "answer": "Race The first Race that works well for the Sorcerer Class is the Wood Half-Elf. Wood Half-Elves have Darkvision to see and attack better in dark places. They even gain Fleet of Foot to be able to move more effectively in encounters as well as Mask of the Wild to become Proficient in Stealth."
      },
      {
            "question": "Does Wild Magic Sorcerer trigger itself?",
            "answer": "Wild-Magic Sorcerer's ability won't apply to Wild-Magic Sorcerer itself ; the ability functions only on the battlefield, not on the stack (C.R. 113.6)."
      },
      {
            "question": "What is the wild magic subclass of sorcerer?",
            "answer": "Wild Magic is one of the Subclasses of Sorcerer. These Sorcerers are capable of using the chaos of their magic to unleash various unexpected effects that can be helpful or chaotic. They also have the ability to gain Advantage on rolls, in exchange for their magic becoming more erratic and surging more often."
      }
],
  },
  {
    slug: "divine-soul-5e",
    name: "Divine Soul 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Blessed sorcerers with access to both sorcerer and cleric spells.",
    focus: "Access to cleric spell list and divine magic",
    searchVolume: 5800,
    faq: [
      {
            "question": "Is Divine soul a strong D&D subclass?",
            "answer": "Unlike other Sorcerers, Divine Souls have access to healing magic, divine protection, and enhanced survivability, making them one of the most flexible and powerful Sorcerer subclasses in D&D 5e."
      },
      {
            "question": "What is the best race for divine soul sorcerer?",
            "answer": "Races that provides extra spells are always a good option (Tiefling, Drow, High Elf). Goblins makes a rather interesting choice with their bonus actions and Fury."
      },
      {
            "question": "What is divine soul in D&D?",
            "answer": "Divine Souls are sorcerers whose bloodline comes from the gods. In D&D 5e, all sorcerers are descended from an exotic or otherworldly bloodline\u2014and that bloodline is the source of their innate magical powers."
      },
      {
            "question": "What is a divine soul?",
            "answer": "\u200b1. A divine soul is \u200b an embodiment of God's wisdom and completely free of negative and waste thoughts. \u200b2. It is absolutely pure\u200b and viceless\u200b, with God's pure thoughts and feelings influencing its thoughts and feelings continuously."
      }
],
  },
  {
    slug: "shadow-magic-5e",
    name: "Shadow Magic 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Shadow-touched sorcerers with darkness abilities and a spectral hound.",
    focus: "Darkness powers, hound of ill omen, and shadow form",
    searchVolume: 4100,
    faq: [
      {
            "question": "What is Shadow magic sorcerer?",
            "answer": "The Shadow Magic Sorcerer is a master of darkness, deception, and supernatural resilience, drawing power from the Shadowfell."
      },
      {
            "question": "How good is Shadow magic?",
            "answer": "Shadow spells are AMAZING, but only if you are dedicated to illusion. Multiple saves and vulnerability to SR makes them a bad choice for a casual caster. However their flexibility more than make up for that."
      },
      {
            "question": "Is Shadow magic sorcerer evil?",
            "answer": "Shadow magic was very rare and its nature and philosophy were poorly understood. Some felt that its dark powers meant it was inherently evil, or at least inextricably linked with evil \u2014the curse of the Shadowking gave quite some credence to this notion."
      }
],
  },
  {
    slug: "storm-sorcery-5e",
    name: "Storm Sorcery 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Storm sorcerers who fly after casting and control weather.",
    focus: "Lightning and thunder with fly speed after casting",
    searchVolume: 3200,
  },
  {
    slug: "aberrant-mind-5e",
    name: "Aberrant Mind 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Psychic sorcerers with psionic spells and mental communication.",
    focus: "Psionic spells cast with sorcery points and telepathy",
    searchVolume: 4800,
    faq: [
      {
            "question": "Is the Aberrant Mind Sorcerer a strong subclass?",
            "answer": "Yes this subclass is perfect if you want to play as a regular person without powers or anything fantastical about them prior to the game, which you can't really with the other classes/subclasses."
      },
      {
            "question": "What book is Aberrant mind in?",
            "answer": "The Aberrant Mind Sorcerer is found in the book \" Tasha's Cauldron of Everything.\" This sourcebook expands on various D&D subclasses and introduces the unique abilities of the Aberrant Mind Sorcerer."
      },
      {
            "question": "What is the best Metamagic for aberrant sorcerer?",
            "answer": "I will always recommend taking the two best Metamagic features immediately \u2013 Heightened Spell and and Quickened Spell. Heightened Spell is excellent to make any spell with saving throws much harder for enemies to pass, especially useful for spells that have no effect if the enemy passes the save."
      }
],
  },
  {
    slug: "clockwork-soul-5e",
    name: "Clockwork Soul 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Lawful sorcerers who restore balance and negate advantage/disadvantage.",
    focus: "Order magic with advantage/disadvantage cancellation",
    searchVolume: 3900,
  },
  {
    slug: "the-fiend-5e",
    name: "The Fiend 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Devil or demon patrons granting temp HP and hellfire abilities.",
    focus: "Temp HP on kills and fire damage with Hurl Through Hell",
    searchVolume: 4600,
  },
  {
    slug: "the-great-old-one-5e",
    name: "The Great Old One 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Eldritch patrons granting telepathy and sanity-breaking powers.",
    focus: "Telepathy and psychic damage with mind-affecting abilities",
    searchVolume: 3800,
    faq: [
      {
            "question": "What defines a Great Old One warlock?",
            "answer": "The Great Old One Warlock is a spellcaster who has made a pact with an unfathomable, cosmic entity, drawing power from beings beyond mortal comprehension."
      },
      {
            "question": "How powerful is the Great Old One?",
            "answer": "Cataclysmic but not necessarily malevolent, the Great Old Ones have the power to end the world on a whim, but never actively seek the destruction of humanity. Perhaps it is due to their vast power \u2014 to a Great Old One, humanity just is not worth the trouble of extermination."
      },
      {
            "question": "Who is the strongest warlock in D&D?",
            "answer": "The Genie may very well be the most powerful and most well designed of the warlock subclasses. Unique to it is the choice of multiple subclasses, with interesting features throughout and some good spell choices on top. You get a list of universal Genie spells, and a list for each of the genie kinds."
      },
      {
            "question": "Who are the Great Old Ones in D&D?",
            "answer": "The Great Old One's are a cosmic force more so than a tangible being. They are so immensely powerful and beyond comprehension of mortals. C'thulu is but one of these god-like beings. To their human worshipers, GOOs are so powerful that only a few are even aware of their existence."
      }
],
  },
  {
    slug: "the-archfey-5e",
    name: "The Archfey 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 1,
    description: "Fey patrons granting charm, teleportation, and illusion abilities.",
    focus: "Charm and teleportation with fey magic",
    searchVolume: 3200,
  },
  {
    slug: "the-hexblade-5e",
    name: "The Hexblade 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Shadowfell weapon patrons enabling CHA-based melee combat.",
    focus: "CHA-based weapon attacks and powerful Hexblade's Curse",
    searchVolume: 9200,
  },
  {
    slug: "the-celestial-5e",
    name: "The Celestial 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 1,
    description: "Divine patrons granting healing and radiant damage abilities.",
    focus: "Healing abilities and radiant damage from celestial patron",
    searchVolume: 3100,
    faq: [
      {
            "question": "Is the celestial warlock a strong subclass?",
            "answer": "Compared to other Warlocks, Celestial Warlocks are the most versatile, offering strong healing without sacrificing offense. Use Healing Light frequently \u2013 Bonus action healing keeps your party alive."
      },
      {
            "question": "Is Celestial warlock a good healer?",
            "answer": "The Celestial Warlock is a great choice for support and healer players. Its level 1 creates great value in providing powerful healing which grows in power the more you level up. As such, where most warlocks see a few level dip, the celestial warlock can hold its own as a full build."
      },
      {
            "question": "What deities empower celestial Warlocks?",
            "answer": "And Celestial Warlocks do not typically get their power from gods; they get it from lesser celestials, such as a high-powered angel or even a unicorn. But there's nothing stopping you, simultaneously, as having a god for a patron."
      }
],
  },
  {
    slug: "the-fathomless-5e",
    name: "The Fathomless 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Ocean patrons granting tentacle abilities and aquatic powers.",
    focus: "Tentacle attacks and cold damage with underwater breathing",
    searchVolume: 2800,
  },
  {
    slug: "the-genie-5e",
    name: "The Genie 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 1,
    description: "Genie patrons with vessel sanctuaries and elemental affinities.",
    focus: "Genie vessel refuge and elemental damage based on genie type",
    searchVolume: 4400,
    faq: [
      {
            "question": "Why is Genie warlock good?",
            "answer": "Compared to other Warlocks, Genie Warlocks are the best at balancing offense, defense, and mobility, making them ideal for tactical players. Use your Genie's Vessel often \u2013 Hide inside it for safety and healing between fights. Elemental Gift makes you hard to kill \u2013 Choose spells that complement your resistances."
      },
      {
            "question": "What is the most powerful warlock class in D&D?",
            "answer": "The Genie may very well be the most powerful and most well designed of the warlock subclasses. Unique to it is the choice of multiple subclasses, with interesting features throughout and some good spell choices on top. You get a list of universal Genie spells, and a list for each of the genie kinds."
      },
      {
            "question": "What are the characteristics of a genie warlock?",
            "answer": "With their Genie Lord's Favor, a warlock sworn to the Genie Lord has somewhat more survivability than others, and can extend that additional protection to their allies. As they increase in power, their Release Energy ability can also deal an impressive amount of damage."
      },
      {
            "question": "Can a genie warlock grant wishes?",
            "answer": "Including costly components the spell simply takes effect as part of this. Action. Once you use this feature you can't use it again until you finish 1d4 long rests."
      }
],
  },
  {
    slug: "the-undead-5e",
    name: "The Undead 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "subclasses",
    source: "Van Richten's Guide to Ravenloft",
    subclassLevel: 1,
    description: "Undead patrons granting fear abilities and necrotic power.",
    focus: "Form of Dread transformation with fear and necrotic abilities",
    searchVolume: 3600,
    faq: [
      {
            "question": "Is the undead warlock a strong subclass?",
            "answer": "Unlike other Warlocks, Undead Warlocks can assume a terrifying undead form, gain resistance to necrotic damage, and weaken enemies through sheer supernatural presence, making them one of the best survivability-focused and fear-based Warlock subclasses in D&D 5e."
      },
      {
            "question": "Is undead a good race for Warlock?",
            "answer": "Undead would be a perfectly fine warlock. The fear resistant racial is also nice."
      },
      {
            "question": "What D&D book has undead Warlock?",
            "answer": "Most warlock patrons are otherworldly entities, demigods, or esoteric creatures of legend. The Undead, introduced in Van Richten's Guide to Ravenloft, offers a gothic horror flair to the list. This is an ancient being that death has no power over, such as Azalin, Lord Soth, and even Strahd von Zarovich himself."
      },
      {
            "question": "How can I optimize my undead warlock?",
            "answer": "To optimize it, going only 2 levels of warlock for agonizing blast and Eldritch Mind likely would be best. You would still get the frighten effect of Undead Warlock which and the uses are tied to proficiency bonus. Then return to sorcerer again and don't look back."
      }
],
  },
  {
    slug: "school-of-abjuration-5e",
    name: "School of Abjuration 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Protective wizards with a rechargeable magical shield.",
    focus: "Arcane Ward shield and enhanced protective spells",
    searchVolume: 2800,
    faq: [
      {
            "question": "What is the magic school abjuration?",
            "answer": "Abjuration is a school of magic 1 that deals in protective spells and the suppression of others' magic. Magic of this school creates physical or magical barriers, negates magical or physical abilities, harms trespassers, or even banishes the target of the spell to another plane of existence."
      },
      {
            "question": "What is the best race for an abjuration wizard?",
            "answer": "Best races for a DnD Abjuration Wizard\n DnD Gnomes are our top choice of race for an Abjuration Wizard. You get that crucial ability score increase for your Intelligence early on, and you have advantage on Intelligence, Wisdom, and Charisma saving throws against magic. That'll help you stay well-defended."
      },
      {
            "question": "What is the abjuration subclass in 5e?",
            "answer": "The School of Abjuration Wizard is one of the most resilient, defensive, and anti-magic-focused Wizard subclasses in D&D 5e, excelling at shutting down enemy spells, absorbing damage, and ensuring their allies stay alive."
      }
],
  },
  {
    slug: "school-of-conjuration-5e",
    name: "School of Conjuration 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Summoner wizards who create objects and teleport freely.",
    focus: "Summoning and teleportation with minor conjuration",
    searchVolume: 2400,
  },
  {
    slug: "school-of-divination-5e",
    name: "School of Divination 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Prophet wizards with Portent dice that can replace any d20.",
    focus: "Portent dice to replace any d20 roll",
    searchVolume: 4200,
    faq: [
      {
            "question": "How does divination compare to other wizard schools?",
            "answer": "A wizard who specialized in divination was known as a diviner. A diviner had a less restrictive range of spells than other specialist wizards and only needed forsake one other school of magic, rather than the normal two, and no other specialist could choose divination as a forsaken school."
      },
      {
            "question": "What are the limitations of divination in 5e?",
            "answer": "The drawbacks of divination wizards include their reliance on obtaining foresight, which can lead to fewer offensive capabilities compared to other wizards."
      }
],
  },
  {
    slug: "school-of-enchantment-5e",
    name: "School of Enchantment 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Mind wizards who enhance charm spells and redirect attacks.",
    focus: "Enhanced charm spells and redirecting attacks",
    searchVolume: 2100,
    faq: [
      {
            "question": "What school of magic is enchantment?",
            "answer": "The enchantment school had two subschools: charm and compulsion. A wizard who specializes in enchantment is known as an enchanter or enchantress."
      },
      {
            "question": "Is enchantment wizard good?",
            "answer": "These abilities make Enchantment Wizards some of the most powerful controllers in the game, capable of locking down enemies and shaping entire social encounters with magic. Primary: Intelligence \u2013 Boosts spellcasting and Enchantment spell save DCs."
      },
      {
            "question": "Do enchantment wizards need charisma?",
            "answer": "Why do they need high charisma for enchantments? yes. because of the skills. be a half-elf with on of the +1s in INT and you will be fine, or just make sure your Charisma is at least a 10."
      }
],
  },
  {
    slug: "school-of-evocation-5e",
    name: "School of Evocation 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Blaster wizards who protect allies from their own AoE damage.",
    focus: "Sculpt Spells to protect allies and maximize damage",
    searchVolume: 3800,
    faq: [
      {
            "question": "What is school of evocation D&D?",
            "answer": "The evocation school of magic included spells that manipulated energy or tapped an unseen source of power in order to produce a desired end. In effect, they created something out of nothing. Many of these spells produced spectacular effects, and evocation spells could deal large amounts of damage."
      },
      {
            "question": "What's the difference between evocation & other schools?",
            "answer": "Evocation. Represented by a brilliant red, the school of Evocation prioritises the manipulation of energies and elements, often to strike and harm others. In opposition to the school of Abjuration, they teach that if one can kill their foe before they strike, you have no need of defence."
      },
      {
            "question": "What are the 7 schools of magic in D&D?",
            "answer": "Since unifying the study of Magic under the IMPERIAL METRIC system during the Spellcraft Revolution at the turn of the 20th century, 7 Schools of Magic exist: Evocation, Transmutation, Conjuration, Abjuration, Divination, Enchantment and Illusion."
      },
      {
            "question": "What are the 8 schools of magic?",
            "answer": "In most approaches to arcane theory, magic of all kinds, be it arcane, divine or from some other source, can be classified as being part of one of eight types, or schools. The eight schools are abjuration, conjuration, divination, enchantment, evocation, illusion, necromancy, and transmutation."
      }
],
  },
  {
    slug: "school-of-illusion-5e",
    name: "School of Illusion 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Trickster wizards whose illusions become increasingly real.",
    focus: "Enhanced illusions that become semi-real",
    searchVolume: 3100,
  },
  {
    slug: "school-of-necromancy-5e",
    name: "School of Necromancy 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Death wizards who raise and enhance undead servants.",
    focus: "Undead creation with enhanced minions",
    searchVolume: 4600,
    faq: [
      {
            "question": "What school of magic is necromancy 5e?",
            "answer": "The School of Necromancy Wizard is one of the most sustainable, minion-focused, and dark magic-based Wizard subclasses in D&D 5e, excelling at raising undead, draining life, and overwhelming foes with sheer numbers."
      },
      {
            "question": "What is the best race for a necromancer 5e?",
            "answer": "First, we have your race, I would suggest Yuan-ti, variant human, or tiefling for your race. Tiefling and Yuan-ti are powerful races that fit the standard mold for 5e necromancers. Meanwhile human is a good choice for feats such as lucky, or for roleplay aspects like a ritual caster (cleric)."
      },
      {
            "question": "Is there a necromancer class in D&D 5e?",
            "answer": "If necromancer isn't your initial class, here are the proficiencies you gain when you take your first level as a necromancer: Dagger, Quarterstaff, Sickle, Scythe (Glaive). Spell Slots. Add all your levels in the necromancer class to the appropriate levels from other classes to determine your available spell slots."
      },
      {
            "question": "Who is the god of necromancy 5e?",
            "answer": "Velsharoon the Archmage of Necromancy, also known as the Vaunted, is a fictional deity of the Forgotten Realms Dungeons & Dragons campaign setting. Velsharoon is the undead demigod of necromancy, necromancers, evil liches, lichdom and undeath."
      }
],
  },
  {
    slug: "school-of-transmutation-5e",
    name: "School of Transmutation 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Player's Handbook",
    subclassLevel: 2,
    description: "Transformation wizards with a magical stone granting bonuses.",
    focus: "Shapeshifting and matter manipulation with Transmuter's Stone",
    searchVolume: 2600,
    faq: [
      {
            "question": "What is the school of transmutation?",
            "answer": "The transmutation school of magic consisted of spells that changed the physical properties of some creature, thing, or condition."
      },
      {
            "question": "What is the best race for a transmutation wizard?",
            "answer": "Recommended Races\n Since Transmutation Wizards rely on Intelligence, adaptability, and physical modifications, the best races include: Gnome (Rock or Forest) \u2013 Superior Intelligence bonus and magical resistance. Warforged \u2013 High Constitution and resistances make them great at self-modification."
      },
      {
            "question": "What is transmutation DND 5E?",
            "answer": "Transmutation spells change the properties of a creature, object, or environment. They might turn an enemy into a harmless creature, bolster the strength of an ally, make an object move at the caster's command, or enhance a creature's innate healing abilities to rapidly recover from injury."
      }
],
  },
  {
    slug: "war-magic-5e",
    name: "War Magic 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Xanathar's Guide to Everything",
    subclassLevel: 2,
    description: "Battle wizards with defensive reactions and enhanced counterspells.",
    focus: "Combat reactions with AC/save boosts and power surge",
    searchVolume: 3400,
  },
  {
    slug: "chronurgy-magic-5e",
    name: "Chronurgy Magic 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Explorer's Guide to Wildemount",
    subclassLevel: 2,
    description: "Time wizards who manipulate initiative and freeze moments.",
    focus: "Time manipulation with Chronal Shift and bottled time",
    searchVolume: 4800,
  },
  {
    slug: "graviturgy-magic-5e",
    name: "Graviturgy Magic 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Explorer's Guide to Wildemount",
    subclassLevel: 2,
    description: "Gravity wizards who manipulate weight and density.",
    focus: "Gravity manipulation for movement control and damage",
    searchVolume: 2900,
    faq: [
      {
            "question": "Is there gravity magic in D&D 5E?",
            "answer": "Unlike other Wizards, Graviturgy Wizards specialize in battlefield control through gravity-based abilities, making them one of the most unique and strategic subclasses in D&D 5e. If you love the idea of manipulating weight, increasing mobility, and controlling enemy positioning, this subclass is for you!"
      },
      {
            "question": "What school of magic is graviturgy?",
            "answer": "Graviturgy Magic is a dunamantic school of wizardry that is studied in the Kryn Dynasty. Depiction of a graviturgy wizard from Explorer's Guide to Wildemount, page 185. This subclass was published in Explorer's Guide to Wildemount."
      },
      {
            "question": "What is gravity magic called?",
            "answer": "Gravity Magic (\u91cd\u529b\u9b54\u6cd5, J\u016bryoku Mah\u014d) is a type of Magic where the magician orders the Rukh that produce Magoi to change into Gravity Magic. Gravity Magic is a sub-type of the seventh type of Magic, Strength Magic."
      }
],
  },
  {
    slug: "order-of-scribes-5e",
    name: "Order of Scribes 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "subclasses",
    source: "Tasha's Cauldron of Everything",
    subclassLevel: 2,
    description: "Book wizards with living spellbooks that swap damage types.",
    focus: "Awakened Spellbook with damage type swapping",
    searchVolume: 3200,
  }
];

// Subclass overview page
export const subclassOverview = {
  slug: "subclasses-5e",
  name: "D&D 5e Subclasses",
  category: "subclasses" as const,
  description: "Complete guide to all subclasses in D&D 5e. Find your perfect character build with detailed guides for every class specialization.",
  sections: [
    {
      id: "overview",
      title: "Understanding Subclasses",
      content: "<p>Subclasses (also called archetypes, paths, domains, or schools) are specializations that define how your character plays within their base class. Most classes choose their subclass at 1st, 2nd, or 3rd level, and it shapes your abilities for the rest of your adventuring career.</p><p>This guide covers all official subclasses from the Player's Handbook, Xanathar's Guide to Everything, Tasha's Cauldron of Everything, and other sourcebooks.</p>"
    },
    {
      id: "choosing",
      title: "Choosing a Subclass",
      content: "<p><strong>Consider your party role:</strong> Are you the tank, healer, damage dealer, or support? Different subclasses excel at different roles.</p><p><strong>Match your playstyle:</strong> Do you want simplicity (Champion Fighter) or complexity (Battle Master)? Do you prefer melee or ranged?</p><p><strong>Think about flavor:</strong> Subclasses often have strong themes. An Oath of Vengeance Paladin plays very differently from an Oath of Redemption Paladin, even with similar mechanics.</p>"
    }
  ],
  searchVolume: 12000,
};
