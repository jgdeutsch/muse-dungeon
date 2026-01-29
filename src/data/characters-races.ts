import { FAQItem } from "../components/FAQ";

export type RacePage = {
  slug: string;
  name: string;
  raceName: string;
  category: "races";
  abilityScores: string;
  size: string;
  speed: string;
  languages: string;
  source: string;
  description: string;
  traits: { name: string; description: string }[];
  subraces: { name: string; bonus: string }[] | null;
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
  searchVolume: number;
  aliases?: string[];
};

export type RaceOverviewPage = {
  slug: string;
  name: string;
  category: "races";
  description: string;
  sections: { id: string; title: string; content: string }[];
  searchVolume: number;
};

export const racePages: RacePage[] = [
  {
    slug: "aasimar-5e",
    name: "Aasimar 5e",
    raceName: "Aasimar",
    category: "races",
    abilityScores: "+2 Charisma",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Celestial",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Aasimar are mortals who carry a spark of the Upper Planes within their souls. They are descended from humans with a touch of celestial power, often serving as champions against evil. Most aasimar are born from human parents, and they live their early years unaware of their celestial heritage until their guiding spirit makes contact.",
    traits: [
      {
        name: "Celestial Resistance",
        description: "You have resistance to necrotic damage and radiant damage."
      },
      {
        name: "Healing Hands",
        description: "As an action, you can touch a creature and roll a number of d4s equal to your proficiency bonus. The creature regains hit points equal to the total. Once you use this trait, you can't use it again until you finish a long rest."
      },
      {
        name: "Light Bearer",
        description: "You know the Light cantrip. Charisma is your spellcasting ability for it."
      },
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      }
    ],
    subraces: [
      {
        name: "Protector Aasimar",
        bonus: "+1 Wisdom. Radiant Soul: Starting at 3rd level, you can use your action to sprout spectral wings and gain a flying speed of 30 feet for 1 minute. Once per turn, you can deal extra radiant damage equal to your level when you deal damage to a target."
      },
      {
        name: "Scourge Aasimar",
        bonus: "+1 Constitution. Radiant Consumption: Starting at 3rd level, you can use your action to unleash divine energy. For 1 minute, you shed bright light in a 10-foot radius, deal radiant damage equal to half your level to yourself and enemies within 10 feet at the start of each of your turns."
      },
      {
        name: "Fallen Aasimar",
        bonus: "+1 Strength. Necrotic Shroud: Starting at 3rd level, you can use your action to sprout skeletal wings. For 1 minute, creatures within 10 feet must succeed on a Charisma saving throw or become frightened. Once per turn, you can deal extra necrotic damage equal to your level."
      }
    ],
    commonMistakes: [
      "Forgetting that Healing Hands scales with proficiency bonus, not character level",
      "Thinking aasimar transformations last all day (they're 1 minute duration)",
      "Assuming all aasimar are good-aligned (Fallen Aasimar exist)",
      "Not tracking the long rest requirement for racial abilities"
    ],
    dmTips: [
      "Aasimar work well in campaigns with celestial or fiendish themes",
      "Consider having their celestial guide appear in dreams or visions to provide plot hooks",
      "The three subraces offer very different playstyles - Protector for mobility, Scourge for damage, Fallen for control",
      "Radiant resistance is powerful against certain undead and fiends"
    ],
    faq: [
      {
        question: "What is the best class for Aasimar in 5e?",
        answer: "Paladins and Clerics are top choices due to the +2 Charisma bonus and thematic celestial connection. Warlocks and Sorcerers also benefit greatly. The Healing Hands ability complements any support role, while the transformation abilities add damage for martial builds."
      },
      {
        question: "Can Aasimar fly permanently?",
        answer: "No. Protector Aasimar gain a 30-foot flying speed only during their Radiant Soul transformation, which lasts just 1 minute (10 combat rounds) and requires a long rest to recharge. This is a limited combat ability, not permanent flight."
      },
      {
        question: "What's the difference between Aasimar subraces?",
        answer: "Protector Aasimar get flight and radiant damage for offense/mobility. Scourge Aasimar deal AoE radiant damage (including to themselves) for sustained damage. Fallen Aasimar frighten enemies and deal necrotic damage for crowd control. Choose based on your playstyle."
      },
      {
        question: "Do Aasimar have to be good-aligned?",
        answer: "No. While most Aasimar have celestial heritage pushing them toward good, Fallen Aasimar explicitly represent those who've turned from their celestial purpose. Any Aasimar can be any alignment based on their choices and experiences."
      },
      {
        question: "How does Healing Hands work in 5e?",
        answer: "As an action, touch a creature and roll d4s equal to your proficiency bonus. The creature regains that many hit points. It recharges on a long rest. It's not as powerful as Lay on Hands but provides useful emergency healing for non-healer classes."
      }
    ],
    searchVolume: 15420
  },
  {
    slug: "bugbear-5e",
    name: "Bugbear 5e",
    raceName: "Bugbear",
    category: "races",
    abilityScores: "+2 Strength, +1 Dexterity",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Goblin",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Bugbears are large, hairy goblinoids born for battle and mayhem. Despite their intimidating appearance, they move with surprising stealth. Bugbears rely on stealth and strength to overcome foes, preferring ambushes and overwhelming brute force. They are larger and stronger than their goblin and hobgoblin cousins.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Long-Limbed",
        description: "When you make a melee attack on your turn, your reach for it is 5 feet greater than normal."
      },
      {
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      },
      {
        name: "Sneaky",
        description: "You are proficient in the Stealth skill."
      },
      {
        name: "Surprise Attack",
        description: "If you hit a creature with an attack roll, the creature takes an extra 2d6 damage if it hasn't taken a turn yet in the current combat."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting the extra reach from Long-Limbed applies only on your turn",
      "Applying Surprise Attack damage more than once per combat per creature",
      "Thinking Surprise Attack only works when hidden (it works if target hasn't acted yet)",
      "Not using the Stealth proficiency to set up ambushes"
    ],
    dmTips: [
      "Bugbears excel as ambush predators - encourage creative positioning",
      "The extra reach creates interesting tactical opportunities with opportunity attacks",
      "Surprise Attack is devastating at low levels but scales poorly - consider supplementing with class features",
      "Great for players who want to play against type (sneaky brute archetype)"
    ],
    faq: [
      {
        question: "What is the best class for Bugbear in 5e?",
        answer: "Rogues are exceptional - Surprise Attack stacks with Sneak Attack for devastating first-round damage. Fighters and Barbarians benefit from Strength and reach. Assassin Rogues are particularly deadly, potentially dealing Sneak Attack + Surprise Attack + Assassinate all on round one."
      },
      {
        question: "How does Bugbear Long-Limbed work?",
        answer: "On your turn, your melee attacks have 5 feet extra reach. A longsword normally has 5-foot reach; for a Bugbear, it's 10 feet on their turn. This doesn't apply to opportunity attacks or attacks outside your turn. It's excellent for hitting enemies from safety."
      },
      {
        question: "Does Surprise Attack work every combat?",
        answer: "Surprise Attack triggers when you hit a creature that hasn't taken a turn yet in that combat. This works in the first round if you act before the target, regardless of whether they were 'surprised.' High initiative helps trigger this consistently."
      },
      {
        question: "Can Bugbears be stealthy despite their size?",
        answer: "Yes! Bugbears have proficiency in Stealth despite being Medium size. Combined with their Surprise Attack trait, they're designed for ambush tactics. Their lore describes them as surprisingly quiet hunters despite their bulk."
      },
      {
        question: "How big are Bugbears in 5e?",
        answer: "Bugbears are Medium size but count as Large for carrying capacity due to Powerful Build. They typically stand 7-8 feet tall and weigh 250-350 pounds. Despite their size, they're sneaky and fit through Medium-sized spaces."
      }
    ],
    searchVolume: 14530
  },
  {
    slug: "changeling-5e",
    name: "Changeling 5e",
    raceName: "Changeling",
    category: "races",
    abilityScores: "+2 Charisma, +1 to one other ability score",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, two other languages of your choice",
    source: "Eberron: Rising from the Last War",
    description: "Changelings are masters of disguise, able to shift their appearance at will. They are humanoids with a gift for deception and adaptation. In their natural form, changelings have pale skin, colorless eyes, and white or silver hair. They use their shapeshifting abilities to blend into any society or situation.",
    traits: [
      {
        name: "Shapechanger",
        description: "As an action, you can change your appearance and voice to match any humanoid you've seen. You determine the specifics of the changes, including coloration, hair length, and sex. You can adjust your height and weight, but not so much that your size changes. You can make yourself appear as a member of another race, though none of your game statistics change. Your clothing and equipment aren't changed. You stay in the new form until you use an action to revert or until you die."
      },
      {
        name: "Changeling Instincts",
        description: "You gain proficiency with two of the following skills: Deception, Insight, Intimidation, or Persuasion."
      },
      {
        name: "Divergent Persona",
        description: "You gain proficiency with one tool of your choice. Define a unique persona associated with that proficiency: establish the name, race, gender, age, and other details. While in a form that matches your persona, your proficiency bonus is doubled for any check using that tool."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Thinking Shapechanger changes ability scores or racial traits",
      "Forgetting that equipment doesn't change with you",
      "Not establishing Divergent Persona details with the DM beforehand",
      "Assuming you can mimic specific individuals perfectly without having seen them",
      "Forgetting that magical detection can reveal your true nature"
    ],
    dmTips: [
      "Work with changeling players to establish boundaries on shapeshifting in your campaign",
      "Encourage them to develop multiple personas with backstories",
      "Changelings work best in intrigue and social-focused campaigns",
      "Remember that changing appearance is an action, not a bonus action",
      "Consider how NPCs react to discovering a changeling's true nature"
    ],
    faq: [
      {
        question: "What is the best class for Changeling in 5e?",
        answer: "Bards, Rogues, and Warlocks excel due to the +2 Charisma and shapeshifting synergy. Bards gain incredible infiltration abilities. Rogues combine disguises with stealth. Face characters and spies benefit enormously from at-will appearance changes without spell slots."
      },
      {
        question: "Can Changelings copy specific people?",
        answer: "Yes, Changelings can mimic any humanoid they've seen, including specific individuals. However, they copy appearance only - not memories, mannerisms, or voice patterns. Convincingly impersonating someone requires roleplaying skill and possibly Deception checks."
      },
      {
        question: "Does Changeling shapeshifting require concentration?",
        answer: "No. Shapechanger is not a spell and doesn't require concentration. You maintain your form indefinitely until you choose to change again (as an action) or die. This makes it far more reliable than Disguise Self."
      },
      {
        question: "Can Changelings change their size?",
        answer: "Changelings can adjust height and weight but cannot change their size category. They remain Medium. They can appear as a tall human or a short elf but can't become Small like a halfling or Large like a goliath."
      },
      {
        question: "What is Divergent Persona?",
        answer: "You create a permanent alternate identity with a specific tool proficiency. When in that persona's form, your proficiency bonus is doubled for that tool - similar to Expertise. Great for crafting, forgery, or specialized infiltration roles."
      }
    ],
    searchVolume: 29150,
    aliases: ["changeling-dnd"]
  },
  {
    slug: "dragonborn-5e",
    name: "Dragonborn 5e",
    raceName: "Dragonborn",
    category: "races",
    abilityScores: "+2 Strength, +1 Charisma",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Draconic",
    source: "Player's Handbook / Fizban's Treasury of Dragons",
    description: "Dragonborn are proud, honorable warriors born from the blood of dragons. They stand tall and proud, covered in draconic scales with coloration that hints at their draconic ancestry. Dragonborn are torn between their devotion to clan and kin, and their destiny to serve dragonkind. Most seek to prove themselves worthy through great deeds and personal honor.",
    traits: [
      {
        name: "Draconic Ancestry",
        description: "Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type."
      },
      {
        name: "Breath Weapon",
        description: "You can use your action to exhale destructive energy based on your draconic ancestry. Each creature in the area must make a saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature takes 2d6 damage on a failed save, and half as much on a success. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After using your breath weapon, you can't use it again until you complete a short or long rest."
      },
      {
        name: "Damage Resistance",
        description: "You have resistance to the damage type associated with your draconic ancestry."
      }
    ],
    subraces: [
      {
        name: "Black Dragon Ancestry",
        bonus: "Acid damage, 5 by 30 ft. line (Dex save)"
      },
      {
        name: "Blue Dragon Ancestry",
        bonus: "Lightning damage, 5 by 30 ft. line (Dex save)"
      },
      {
        name: "Brass Dragon Ancestry",
        bonus: "Fire damage, 5 by 30 ft. line (Dex save)"
      },
      {
        name: "Bronze Dragon Ancestry",
        bonus: "Lightning damage, 5 by 30 ft. line (Dex save)"
      },
      {
        name: "Copper Dragon Ancestry",
        bonus: "Acid damage, 5 by 30 ft. line (Dex save)"
      },
      {
        name: "Gold Dragon Ancestry",
        bonus: "Fire damage, 15 ft. cone (Dex save)"
      },
      {
        name: "Green Dragon Ancestry",
        bonus: "Poison damage, 15 ft. cone (Con save)"
      },
      {
        name: "Red Dragon Ancestry",
        bonus: "Fire damage, 15 ft. cone (Dex save)"
      },
      {
        name: "Silver Dragon Ancestry",
        bonus: "Cold damage, 15 ft. cone (Con save)"
      },
      {
        name: "White Dragon Ancestry",
        bonus: "Cold damage, 15 ft. cone (Con save)"
      }
    ],
    commonMistakes: [
      "Forgetting the breath weapon recharges on a short rest, not just long rest",
      "Not positioning properly for line vs cone breath weapons",
      "Forgetting to add proficiency bonus to breath weapon DC",
      "Thinking damage resistance makes you immune",
      "Not tracking breath weapon damage scaling at levels 6, 11, and 16"
    ],
    dmTips: [
      "The breath weapon is powerful at low levels but falls off - consider magical items that enhance it",
      "Dragonborn culture emphasizes honor and clan - create opportunities for moral dilemmas",
      "The damage resistance is situational but very useful against certain enemies",
      "Consider introducing dragon NPCs that react to the dragonborn's ancestry",
      "Fizban's offers the Gem and Metallic/Chromatic variants with different abilities"
    ],
    faq: [
      {
        question: "What is the best class for Dragonborn in 5e?",
        answer: "Paladins are iconic - Strength and Charisma bonuses align perfectly, and breath weapon adds AoE damage. Fighters and Sorcerers also excel. The Fizban's Dragonborn variants open up more options with Constitution bonuses and improved breath weapons."
      },
      {
        question: "How does Dragonborn breath weapon work?",
        answer: "As an action, exhale in a line or cone (based on ancestry). Creatures in the area make a Dex or Con save (DC = 8 + Con mod + proficiency). Failed saves take 2d6 damage (scaling at levels 6, 11, 16), half on success. Recharges on short or long rest."
      },
      {
        question: "Which Dragonborn ancestry is best?",
        answer: "Fire (Red/Gold/Brass) is most versatile since fire damage is widely useful. Cold (Silver/White) hits many monsters. Lightning (Blue/Bronze) is good but less common. Poison (Green) faces many immunities. Choose based on campaign setting or flavor preference."
      },
      {
        question: "Do Dragonborn have tails?",
        answer: "The PHB describes Dragonborn without tails, but many players and DMs prefer them with tails for flavor. This is a cosmetic choice with no mechanical impact. Check with your DM about their world's Dragonborn appearance."
      },
      {
        question: "What's the difference between PHB and Fizban's Dragonborn?",
        answer: "Fizban's Dragonborn get improved breath weapons (bonus action, proficiency bonus uses per long rest), flight or other abilities at 5th level, and different stat bonuses. The PHB version uses an action and recharges on short rest. Fizban's is generally considered stronger."
      }
    ],
    searchVolume: 37700,
    aliases: ["dragonborn-5e-alt"]
  },
  {
    slug: "drow-5e",
    name: "Drow 5e",
    raceName: "Drow",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Charisma",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Elvish",
    source: "Player's Handbook",
    description: "Drow, also known as dark elves, are a subrace of elves that dwell in the Underdark. Descended from an ancient elven civilization corrupted by the spider goddess Lolth, drow are notorious for their cruelty and prowess in magic. They have jet-black skin and pale hair, and their eyes are typically red, purple, or pale blue. Those who escape the Underdark often struggle to overcome their dark heritage.",
    traits: [
      {
        name: "Superior Darkvision",
        description: "Your darkvision has a radius of 120 feet."
      },
      {
        name: "Sunlight Sensitivity",
        description: "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
      },
      {
        name: "Drow Magic",
        description: "You know the Dancing Lights cantrip. When you reach 3rd level, you can cast Faerie Fire once per long rest. When you reach 5th level, you can cast Darkness once per long rest. Charisma is your spellcasting ability for these spells."
      },
      {
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Trance",
        description: "Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day, gaining the same benefit as a human does from 8 hours of sleep."
      },
      {
        name: "Drow Weapon Training",
        description: "You have proficiency with rapiers, shortswords, and hand crossbows."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Sunlight Sensitivity applies in direct sunlight only, not all bright light",
      "Not tracking the level requirements for Faerie Fire (3rd) and Darkness (5th)",
      "Thinking Trance means elves don't need rest at all",
      "Forgetting Superior Darkvision is 120 feet, not the standard 60 feet",
      "Not using Darkness strategically (it blocks vision for allies too)"
    ],
    dmTips: [
      "Sunlight Sensitivity is a significant drawback - consider campaign setting carefully",
      "Drow escaping the Underdark make excellent character arc material",
      "The combination of Faerie Fire and advantage is very powerful",
      "Darkness can be game-breaking if combined with Devil's Sight - plan accordingly",
      "Consider how surface-dwellers react to drow due to their reputation",
      "Lolth's influence and drow society provide rich roleplay opportunities"
    ],
    faq: [
      {
        question: "What is Sunlight Sensitivity and how bad is it?",
        answer: "Drow have disadvantage on attack rolls and Perception checks in direct sunlight. This is significant for outdoor adventures. Workarounds include fighting at night, in shade, or underground. Some DMs rule overcast days don't trigger it. Discuss with your DM."
      },
      {
        question: "What is the best class for Drow in 5e?",
        answer: "Rogues excel - Dexterity bonus, weapon proficiencies, and Faerie Fire grants advantage for Sneak Attack. Rangers, Warlocks (especially Hexblade), and melee Sorcerers also work well. Darkness + Devil's Sight (Warlock) creates a powerful combo."
      },
      {
        question: "Can Drow see in magical darkness?",
        answer: "No. Superior Darkvision (120 feet) only works in nonmagical darkness. The Darkness spell creates magical darkness that even Drow can't see through. The Warlock's Devil's Sight invocation is needed to see in magical darkness."
      },
      {
        question: "Are all Drow evil?",
        answer: "No. While Drow society in the Forgotten Realms is typically evil and Lolth-worshipping, individual Drow can be any alignment. Famous good Drow include Drizzt Do'Urden. Drow who leave the Underdark often struggle against their culture's expectations."
      },
      {
        question: "How does Drow Magic work?",
        answer: "At 1st level: Dancing Lights cantrip. At 3rd level: Faerie Fire 1/long rest. At 5th level: Darkness 1/long rest. Charisma is the spellcasting ability. These are cast without spell slots and don't require material components."
      }
    ],
    searchVolume: 40510,
    aliases: ["drow-5e-alt"]
  },
  {
    slug: "dwarf-5e",
    name: "Dwarf 5e",
    raceName: "Dwarf",
    category: "races",
    abilityScores: "+2 Constitution",
    size: "Medium",
    speed: "25 ft.",
    languages: "Common, Dwarvish",
    source: "Player's Handbook",
    description: "Dwarves are a short, stocky race known for their skill in warfare, mining, and craftsmanship. They stand between 4 and 5 feet tall, but are broad and compact, often weighing as much as a human. Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Dwarven Resilience",
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage."
      },
      {
        name: "Dwarven Combat Training",
        description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer."
      },
      {
        name: "Tool Proficiency",
        description: "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools."
      },
      {
        name: "Stonecunning",
        description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check."
      },
      {
        name: "Dwarven Toughness (Hill Dwarf)",
        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
      },
      {
        name: "Dwarven Armor Training (Mountain Dwarf)",
        description: "You have proficiency with light and medium armor."
      }
    ],
    subraces: [
      {
        name: "Hill Dwarf",
        bonus: "+1 Wisdom. Dwarven Toughness: Your hit point maximum increases by 1 per level."
      },
      {
        name: "Mountain Dwarf",
        bonus: "+2 Strength. Dwarven Armor Training: Proficiency with light and medium armor."
      }
    ],
    commonMistakes: [
      "Forgetting that speed is not reduced by heavy armor (dwarven trait)",
      "Not applying the double proficiency bonus from Stonecunning correctly",
      "Thinking Dwarven Toughness gives extra hit dice (it's just +1 HP per level)",
      "Forgetting to choose a tool proficiency during character creation",
      "Assuming all dwarves have armor proficiency (only Mountain Dwarves)"
    ],
    dmTips: [
      "Dwarven culture revolves around clan, tradition, and craftsmanship - create NPCs that embody these values",
      "Hill Dwarves make excellent clerics and druids, Mountain Dwarves are perfect for gish builds",
      "The poison resistance is useful against many low-level threats",
      "Consider ancient dwarven ruins and stonework as plot elements that Stonecunning can reveal",
      "Dwarven holds and clan politics provide rich campaign material"
    ],
    faq: [
      {
        question: "What is the best class for Dwarf in 5e?",
        answer: "Hill Dwarves excel as Clerics (Wisdom bonus + extra HP). Mountain Dwarves are incredible for Wizards and Sorcerers (armor proficiency without multiclassing). Fighters and Barbarians benefit from Constitution. Both subraces are highly versatile."
      },
      {
        question: "What's the difference between Hill and Mountain Dwarves?",
        answer: "Hill Dwarves get +1 Wisdom and +1 HP per level (Dwarven Toughness). Mountain Dwarves get +2 Strength and proficiency with light/medium armor. Hill Dwarves are tankier casters; Mountain Dwarves are armored gish characters or straight martials."
      },
      {
        question: "Does heavy armor slow Dwarves down?",
        answer: "No. Dwarves' 25-foot speed isn't reduced by wearing heavy armor, unlike other races. This makes Dwarves excellent for heavily-armored builds without needing the 15 Strength normally required to avoid the speed penalty."
      },
      {
        question: "How does Stonecunning work?",
        answer: "When making History checks related to stonework origin, you're considered proficient and add double your proficiency bonus. This helps identify dwarven craftsmanship, determine a structure's age, or recognize stonework traps. It's situational but flavorful."
      },
      {
        question: "Can Dwarves be Wizards?",
        answer: "Yes, and Mountain Dwarves make excellent Wizards! The +2 Strength is wasted, but free medium armor proficiency is huge for a squishy caster. You can have 17+ AC while casting spells without multiclassing. Hill Dwarf's extra HP also helps."
      }
    ],
    searchVolume: 4700
  },
  {
    slug: "earth-genasi-5e",
    name: "Earth Genasi 5e",
    raceName: "Earth Genasi",
    category: "races",
    abilityScores: "+2 Constitution, +1 Strength",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Primordial",
    source: "Elemental Evil Player's Companion / Monsters of the Multiverse",
    description: "Earth genasi are patient, stubborn, and contemplative in their decision-making. Marked by their connection to the Elemental Plane of Earth, they are strong and resilient. Their skin can appear in various earth tones with crystalline or metallic features. Earth genasi are unmoved by most forms of persuasion and are as steady as stone.",
    traits: [
      {
        name: "Earth Walk",
        description: "You can move across difficult terrain made of earth or stone without expending extra movement."
      },
      {
        name: "Merge with Stone",
        description: "You can cast the Pass Without Trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
      },
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Earth Walk only works on earth/stone difficult terrain, not all difficult terrain",
      "Not utilizing Pass Without Trace for the whole party (it affects all creatures within 30 feet)",
      "Thinking Merge with Stone makes you incorporeal (it's just Pass Without Trace)",
      "Forgetting the long rest limitation on Merge with Stone"
    ],
    dmTips: [
      "Earth genasi work well in mountain, underground, or earthen-themed campaigns",
      "Pass Without Trace is incredibly powerful for stealth-based parties",
      "Their patient, stoic nature makes for interesting roleplay opportunities",
      "Consider introducing other genasi or planar-touched NPCs",
      "Earth Walk is situationally very useful in rocky or mountainous terrain"
    ],
    faq: [
      {
        question: "What is the best class for Earth Genasi in 5e?",
        answer: "Fighters, Barbarians, and melee Clerics benefit from Constitution and Strength. Any class appreciates Pass Without Trace for party stealth. Druids and Rangers fit the elemental nature thematically. The Constitution bonus helps any frontline build."
      },
      {
        question: "How powerful is Pass Without Trace?",
        answer: "Extremely powerful. It gives +10 to Stealth checks for all creatures within 30 feet for 1 hour, with no concentration. This often means the entire party can sneak past enemies. Getting this once per long rest for free is excellent utility."
      },
      {
        question: "What does Earth Walk do?",
        answer: "You ignore difficult terrain made of earth or stone. This includes rocky ground, rubble, uneven stone floors, and similar surfaces. It doesn't help with ice, mud, vegetation, or magical difficult terrain - only earth and stone specifically."
      },
      {
        question: "What are the different types of Genasi?",
        answer: "There are four Genasi subraces corresponding to the four elements: Earth, Fire, Water, and Air. Each has different ability bonuses and innate spellcasting based on their elemental plane connection. Earth Genasi are the most durable with Constitution focus."
      },
      {
        question: "Do Earth Genasi need to breathe?",
        answer: "Yes, Earth Genasi breathe normally. Only Water Genasi have special breathing abilities (amphibious). Earth Genasi have earth-themed abilities like ignoring rocky difficult terrain and casting Pass Without Trace, but normal breathing requirements."
      }
    ],
    searchVolume: 10330
  },
  {
    slug: "eladrin-5e",
    name: "Eladrin 5e",
    raceName: "Eladrin",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Intelligence",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Elvish",
    source: "Mordenkainen's Tome of Foes / Monsters of the Multiverse",
    description: "Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic. They are deeply connected to the changing seasons, with their appearance and mood shifting to reflect the season they embody. Eladrin can change their season after finishing a long rest, aligning themselves with spring, summer, autumn, or winter.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
      },
      {
        name: "Fey Step",
        description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a short or long rest. When you reach 3rd level, your Fey Step gains an additional effect based on your season."
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Trance",
        description: "Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day."
      }
    ],
    subraces: [
      {
        name: "Spring Eladrin",
        bonus: "After using Fey Step, you can touch one willing creature within 5 feet. That creature can teleport to an unoccupied space within 5 feet of your destination."
      },
      {
        name: "Summer Eladrin",
        bonus: "After using Fey Step, each creature of your choice within 5 feet of you takes fire damage equal to your proficiency bonus."
      },
      {
        name: "Autumn Eladrin",
        bonus: "After using Fey Step, up to two creatures of your choice within 10 feet must succeed on a Wisdom saving throw (DC 8 + proficiency + Intelligence modifier) or be charmed by you for 1 minute or until you or your companions damage them."
      },
      {
        name: "Winter Eladrin",
        bonus: "After using Fey Step, one creature of your choice within 5 feet must succeed on a Wisdom saving throw (DC 8 + proficiency + Intelligence modifier) or be frightened of you until the end of your next turn."
      }
    ],
    commonMistakes: [
      "Forgetting Fey Step recharges on a short rest, not just long rest",
      "Not tracking which season you're currently in",
      "Trying to use seasonal effects before reaching 3rd level",
      "Forgetting Fey Step is a bonus action, allowing you to attack on the same turn",
      "Not choosing season after each long rest (it can be changed)"
    ],
    dmTips: [
      "Eladrin personalities should reflect their current season - encourage roleplay",
      "The teleport is tactically versatile - works for escape, positioning, or closing distance",
      "Feywild connections provide excellent plot hooks and NPC opportunities",
      "Each season offers different tactical options - Spring for ally mobility, Summer for damage, Autumn for control, Winter for defense",
      "Consider how changing seasons affects the character's demeanor and decisions"
    ],
    faq: [
      {
        question: "What is the best class for Eladrin in 5e?",
        answer: "Rogues, Fighters, and Rangers benefit from Dexterity. The Fey Step teleport enhances any melee or mobile class. Wizards appreciate the Intelligence bonus. Bladesinger Wizards are particularly strong with Eladrin's teleport and stats."
      },
      {
        question: "How does Eladrin Fey Step work?",
        answer: "As a bonus action, teleport up to 30 feet to an unoccupied space you can see. Recharges on short or long rest. At 3rd level, gain an additional effect based on your current season: Spring brings an ally, Summer deals fire damage, Autumn charms, Winter frightens."
      },
      {
        question: "Can Eladrin change their season?",
        answer: "Yes. After each long rest, you can choose which season you embody: Spring, Summer, Autumn, or Winter. This changes your appearance, personality tendencies, and Fey Step's additional effect. You're not locked into one season permanently."
      },
      {
        question: "Which Eladrin season is best?",
        answer: "It depends on your role. Autumn is often considered strongest for its charm effect. Summer adds damage. Winter provides defense with frighten. Spring helps allies reposition. The ability to change daily means you can adapt to situations."
      },
      {
        question: "Are Eladrin considered Elves?",
        answer: "Yes. Eladrin are an elf subrace native to the Feywild. They have all standard elf traits: Darkvision, Fey Ancestry, Keen Senses, and Trance. They count as elves for prerequisites, magic items, and any effect that targets elves."
      }
    ],
    searchVolume: 17900
  },
  {
    slug: "firbolg-5e",
    name: "Firbolg 5e",
    raceName: "Firbolg",
    category: "races",
    abilityScores: "+2 Wisdom, +1 Strength",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Elvish, Giant",
    source: "Volo's Guide to Monsters",
    description: "Firbolgs are forest guardians who prefer to remain hidden from other races. These gentle giants stand 7 to 8 feet tall with fur-covered skin in earth tones. Firbolg tribes are deeply connected to the forests and see themselves as caretakers of nature. They are peaceful and prefer to use magic and cunning to avoid detection rather than violence.",
    traits: [
      {
        name: "Firbolg Magic",
        description: "You can cast Detect Magic and Disguise Self with this trait, using Wisdom as your spellcasting ability. Once you cast either spell, you can't cast it again with this trait until you finish a short or long rest. When you use this version of Disguise Self, you can seem up to 3 feet shorter than normal."
      },
      {
        name: "Hidden Step",
        description: "As a bonus action, you can magically turn invisible until the start of your next turn or until you attack, make a damage roll, or force someone to make a saving throw. Once you use this trait, you can't use it again until you finish a short or long rest."
      },
      {
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      },
      {
        name: "Speech of Beast and Leaf",
        description: "You have the ability to communicate in a limited manner with beasts and plants. They can understand the meaning of your words, though you have no special ability to understand them in return. You have advantage on Charisma checks to influence them."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Hidden Step ends if you attack or force a saving throw",
      "Not using Disguise Self to appear shorter (useful for blending in)",
      "Thinking Speech of Beast and Leaf allows you to understand animals (it doesn't give you that ability)",
      "Forgetting both Firbolg Magic spells recharge on a short rest",
      "Not taking advantage of the free Detect Magic for scouting"
    ],
    dmTips: [
      "Firbolgs make excellent druids and rangers with their nature-focused abilities",
      "Their peaceful nature creates interesting roleplay opportunities in combat-heavy campaigns",
      "Hidden Step is very powerful for escaping or repositioning",
      "Consider forest spirits, nature threats, or ecological disasters as plot hooks",
      "Firbolg clans can be reclusive but protective of their territories",
      "The combination of Detect Magic and Disguise Self provides excellent utility"
    ],
    faq: [
      {
        question: "What is the best class for Firbolg in 5e?",
        answer: "Druids are the iconic choice - Wisdom bonus and nature theme align perfectly. Clerics (especially Nature domain) and Rangers also excel. Their magic abilities complement spellcasters. The Strength bonus helps melee Druids and Rangers."
      },
      {
        question: "How does Firbolg Hidden Step work?",
        answer: "As a bonus action, turn invisible until the start of your next turn, or until you attack, deal damage, or force a saving throw. Recharges on short or long rest. Great for escaping danger, repositioning, or setting up ambushes."
      },
      {
        question: "How tall are Firbolgs?",
        answer: "Firbolgs are gentle giants standing 7-8 feet tall, though they're still Medium size. They have cow-like or bearish features with fur-covered skin in earth tones. Despite their size, they're gentle forest guardians who prefer avoiding conflict."
      },
      {
        question: "Can Firbolgs talk to animals?",
        answer: "Partially. Speech of Beast and Leaf lets you communicate simple ideas to beasts and plants - they understand you. However, you can't understand them in return. You also have advantage on Charisma checks to influence beasts and plants."
      },
      {
        question: "What magic can Firbolgs use?",
        answer: "Firbolg Magic grants Detect Magic and a special Disguise Self (can appear up to 3 feet shorter). Both use Wisdom and recharge on short rest. This makes them excellent scouts who can detect magical threats and disguise themselves when needed."
      }
    ],
    searchVolume: 38200
  },
  {
    slug: "githyanki-5e",
    name: "Githyanki 5e",
    raceName: "Githyanki",
    category: "races",
    abilityScores: "+2 Strength, +1 Intelligence",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Gith",
    source: "Mordenkainen's Tome of Foes / Monsters of the Multiverse",
    description: "Githyanki are psionic warriors who dwell on the Astral Plane, riding red dragons and raiding across the planes. They were once slaves of the mind flayers until they won their freedom through bloody rebellion. Now they are fierce warriors trained from birth in combat and psionic arts. Githyanki society is militaristic and hierarchical, led by their lich-queen Vlaakith.",
    traits: [
      {
        name: "Astral Knowledge",
        description: "You can mystically access a reservoir of experiences of entities connected to the Astral Plane. Whenever you finish a long rest, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook, as you momentarily project your consciousness into the Astral Plane. These proficiencies last until the end of your next long rest."
      },
      {
        name: "Githyanki Psionics",
        description: "You know the Mage Hand cantrip (the hand is invisible). Starting at 3rd level, you can cast Jump once with this trait, and you regain the ability to do so when you finish a long rest. Starting at 5th level, you can cast Misty Step once with this trait, and you regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells."
      },
      {
        name: "Psychic Resilience",
        description: "You have resistance to psychic damage."
      },
      {
        name: "Martial Prodigy (Volo's version)",
        description: "You have proficiency with light and medium armor and shortswords, longswords, and greatswords."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting to choose new proficiencies after each long rest with Astral Knowledge",
      "Not tracking the level requirements for Jump (3rd) and Misty Step (5th)",
      "Forgetting the Mage Hand is invisible (great for stealth and sleight of hand)",
      "Not utilizing Misty Step for tactical positioning once available",
      "Overlooking psychic resistance against mind flayers and other psionic threats"
    ],
    dmTips: [
      "Githyanki have a deep hatred of mind flayers - use this for plot hooks",
      "Astral Knowledge is incredibly flexible - it can solve many skill gaps temporarily",
      "Their militaristic culture values strength and loyalty to Vlaakith",
      "Consider introducing githzerai as rivals or mind flayers as ancient enemies",
      "The Astral Plane connection provides unique planar travel opportunities",
      "Red dragon riders and astral ships make for epic high-level encounters"
    ],
    faq: [
      {
        question: "What is the best class for Githyanki in 5e?",
        answer: "Fighters, Paladins, and Eldritch Knights excel with Strength and Intelligence bonuses plus armor proficiency. Wizards appreciate the armor and Misty Step. The weapon proficiencies help any class. Psi Warriors are thematically perfect."
      },
      {
        question: "How does Astral Knowledge work?",
        answer: "After each long rest, gain proficiency in one skill and one weapon or tool of your choice until your next long rest. This incredible flexibility lets you fill party gaps. Need Investigation today? Stealth tomorrow? Astral Knowledge adapts."
      },
      {
        question: "What's the difference between Githyanki and Githzerai?",
        answer: "Both escaped mind flayer enslavement but chose different paths. Githyanki are militaristic warriors dwelling on the Astral Plane, riding red dragons. Githzerai are contemplative monks living in Limbo, focused on mental discipline. They're often rivals."
      },
      {
        question: "What psionic abilities do Githyanki have?",
        answer: "Githyanki Psionics grants: Mage Hand cantrip (invisible hand) at 1st level, Jump once per long rest at 3rd level, and Misty Step once per long rest at 5th level. Intelligence is the spellcasting ability. These don't require material components."
      },
      {
        question: "Do Githyanki get free armor proficiency?",
        answer: "Yes, in the Volo's Guide version. Martial Prodigy grants proficiency with light and medium armor plus shortswords, longswords, and greatswords. The Monsters of the Multiverse version replaces this with Astral Knowledge for skill flexibility."
      }
    ],
    searchVolume: 22660
  },
  {
    slug: "gnome-5e",
    name: "Gnome 5e",
    raceName: "Gnome",
    category: "races",
    abilityScores: "+2 Intelligence",
    size: "Small",
    speed: "25 ft.",
    languages: "Common, Gnomish",
    source: "Player's Handbook",
    description: "Gnomes are small, intelligent humanoids with a boundless energy for living. Standing 3 to 4 feet tall, gnomes are recognizable by their love of invention, exploration, and discovery. They delight in all forms of investigation and learning. A gnome's life is a series of adventures and investigations, filled with curiosity about how things work and why things happen.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Gnome Cunning",
        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
      },
      {
        name: "Small",
        description: "Your size is Small. Small creatures have disadvantage with heavy weapons."
      }
    ],
    subraces: [
      {
        name: "Forest Gnome",
        bonus: "+1 Dexterity. Natural Illusionist: You know the Minor Illusion cantrip. Intelligence is your spellcasting ability for it. Speak with Small Beasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts."
      },
      {
        name: "Rock Gnome",
        bonus: "+1 Constitution. Artificer's Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, add twice your proficiency bonus. Tinker: You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp)."
      },
      {
        name: "Deep Gnome (Svirfneblin)",
        bonus: "+1 Dexterity. Superior Darkvision: Your darkvision has a radius of 120 feet. Stone Camouflage: You have advantage on Stealth checks to hide in rocky terrain."
      }
    ],
    commonMistakes: [
      "Forgetting Gnome Cunning applies to ALL mental saves against magic (very powerful)",
      "Not tracking Tinker device limits (only 3 active at once)",
      "Thinking Small size prevents you from using weapons (only heavy weapons have disadvantage)",
      "Forgetting Forest Gnomes can only communicate simple ideas with small beasts",
      "Not using Stone Camouflage when playing Deep Gnomes in appropriate terrain"
    ],
    dmTips: [
      "Gnome Cunning makes them very resistant to spellcasters - excellent for high-magic campaigns",
      "Forest Gnomes make great illusionists and tricksters",
      "Rock Gnomes are perfect for artificers or inventive characters",
      "Deep Gnomes work well in Underdark campaigns",
      "Encourage creative uses of Tinker - wind-up toys can be useful distractions",
      "Gnomish communities often value innovation and curiosity"
    ],
    faq: [
      {
        question: "What is the best class for Gnome in 5e?",
        answer: "Wizards and Artificers excel with the +2 Intelligence. Forest Gnomes make great Illusion Wizards. Rock Gnomes fit Artificer perfectly. Gnome Cunning's magic resistance benefits any class, especially those weak to save-or-suck spells."
      },
      {
        question: "How powerful is Gnome Cunning?",
        answer: "Extremely powerful. Advantage on ALL Intelligence, Wisdom, and Charisma saves against magic covers most dangerous spells. Hold Person, Dominate, Banishment, Charm - gnomes resist them all. It's arguably the best defensive racial trait in 5e."
      },
      {
        question: "What's the difference between Gnome subraces?",
        answer: "Forest Gnomes get +1 Dex, Minor Illusion cantrip, and beast communication. Rock Gnomes get +1 Con, Tinker ability, and Artificer's Lore. Deep Gnomes (Svirfneblin) get +1 Dex, 120-foot Superior Darkvision, and Stone Camouflage."
      },
      {
        question: "Can Gnomes use heavy weapons?",
        answer: "Technically yes, but Small creatures have disadvantage on attack rolls with Heavy weapons. This makes greatswords and greataxes suboptimal. Gnomes should use non-Heavy weapons like longswords (versatile), rapiers, or ranged weapons."
      },
      {
        question: "What can Rock Gnome Tinker create?",
        answer: "Three options: a clockwork toy that moves 5 feet each turn for 1 minute, a fire starter (produces flame like a lighter), or a music box that plays one song. You can have up to three devices active. Creative uses include distractions and firestarters."
      }
    ],
    searchVolume: 10470,
    aliases: ["dnd-gnome"]
  },
  {
    slug: "goliath-5e",
    name: "Goliath 5e",
    raceName: "Goliath",
    category: "races",
    abilityScores: "+2 Strength, +1 Constitution",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Giant",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Goliaths are massive creatures standing 7 to 8 feet tall, weighing between 280 and 340 pounds. They are driven by a fierce competitive spirit and seek to prove themselves through physical challenges. Native to mountain peaks, goliaths view survival as a measure of self-worth. Their skin is mottled with dark and light patches, and they have bony protrusions across their bodies.",
    traits: [
      {
        name: "Natural Athlete",
        description: "You have proficiency in the Athletics skill."
      },
      {
        name: "Stone's Endurance",
        description: "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short or long rest."
      },
      {
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      },
      {
        name: "Mountain Born",
        description: "You have resistance to cold damage. You're also acclimated to high altitude, including elevations above 20,000 feet."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Stone's Endurance recharges on a short rest, not just long rest",
      "Not using your reaction efficiently (Stone's Endurance competes with opportunity attacks)",
      "Forgetting to add Constitution modifier to the d12 roll",
      "Thinking Powerful Build increases damage or size category for other purposes",
      "Not leveraging cold resistance in appropriate environments"
    ],
    dmTips: [
      "Stone's Endurance can prevent a character from dropping to 0 HP - very powerful at low levels",
      "Goliaths thrive in mountain and cold-weather campaigns",
      "Their competitive nature creates great roleplay opportunities",
      "Consider challenges, contests, and trials of strength as plot elements",
      "Goliath tribes often have strict hierarchies based on prowess",
      "The combination of Strength, Constitution, and Stone's Endurance makes them excellent tanks"
    ],
    faq: [
      {
        question: "What is the best class for Goliath in 5e?",
        answer: "Barbarians are the iconic choice - Strength and Constitution bonuses align perfectly, and Stone's Endurance stacks with Rage's damage resistance. Fighters, Paladins, and melee Rangers also excel. Any frontline build benefits from their durability."
      },
      {
        question: "How does Stone's Endurance work?",
        answer: "When you take damage, use your reaction to roll 1d12 + Constitution modifier and reduce the damage by that amount. Recharges on short or long rest. At low levels, this can completely negate an attack. At higher levels, it's a solid damage reduction."
      },
      {
        question: "How big are Goliaths?",
        answer: "Goliaths stand 7-8 feet tall and weigh 280-340 pounds. Despite this, they're Medium size. Powerful Build means they count as Large for carrying capacity and push/drag/lift limits. They're the largest common Medium race."
      },
      {
        question: "Do Goliaths have cold resistance?",
        answer: "Yes. Mountain Born grants resistance to cold damage and immunity to high altitude effects. This makes them excellent for cold-weather or mountain campaigns. They're also acclimated to elevations above 20,000 feet."
      },
      {
        question: "What is Goliath culture like?",
        answer: "Goliaths are fiercely competitive, valuing fair competition and self-sufficiency. Tribe members who can't contribute are often left behind. They see life as a constant contest of skill. This creates interesting roleplay about honor, competition, and proving oneself."
      }
    ],
    searchVolume: 11420
  },
  {
    slug: "hadozee-5e",
    name: "Hadozee 5e",
    raceName: "Hadozee",
    category: "races",
    abilityScores: "+2 Dexterity, +1 to one other ability score",
    size: "Medium or Small",
    speed: "30 ft., climb 30 ft.",
    languages: "Common, one other language",
    source: "Spelljammer: Adventures in Space",
    description: "Hadozee are simian humanoids with winglike flaps of skin that stretch between their arms and legs, allowing them to glide through the air. They are natural sailors and explorers, having taken to the stars aboard spelljamming ships. Hadozee are gregarious and brave, always ready for the next adventure. Their fur ranges from brown to black, and they have remarkable agility.",
    traits: [
      {
        name: "Dexterous Feet",
        description: "As a bonus action, you can use your feet to manipulate an object, open or close a door or container, or pick up or set down a Tiny object."
      },
      {
        name: "Glide",
        description: "If you are not incapacitated or wearing heavy armor, you can extend your skin membranes to glide. When you do so, you can perform the following aerial movements: you can move 5 feet horizontally for every 1 foot you descend in the air, at no movement cost to you; and when you would take damage from a fall, you can use your reaction to reduce the fall damage you take by an amount equal to your proficiency bonus times 10."
      },
      {
        name: "Hadozee Resilience",
        description: "The magic that runs in your veins heightens your natural defenses. When you take damage, you can use your reaction to roll a d6. Add your proficiency bonus to the number rolled, and reduce the damage you take by an amount equal to that total. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Glide only works when not wearing heavy armor",
      "Not using the 5:1 horizontal movement ratio effectively",
      "Forgetting Hadozee Resilience uses scale with proficiency bonus",
      "Not using Dexterous Feet for creative problem solving",
      "Thinking Glide provides actual flight (you must descend)"
    ],
    dmTips: [
      "Hadozee are perfect for Spelljammer campaigns but work in any setting with vertical terrain",
      "Glide allows for dramatic entrances and creative combat positioning",
      "Dexterous Feet enables unique skill check possibilities",
      "Their sailing background makes them natural navigators and explorers",
      "Consider tall structures, cliffs, and aerial combat to showcase their abilities",
      "Hadozee Resilience provides consistent damage reduction throughout the day"
    ],
    faq: [
      {
        question: "Can Hadozee fly?",
        answer: "No, but they can glide. When falling, Hadozee move 5 feet horizontally for every 1 foot descended. They can also reduce fall damage by proficiency bonus times 10 as a reaction. This isn't true flight - you must start from height and always descend."
      },
      {
        question: "What is the best class for Hadozee in 5e?",
        answer: "Rogues and Rangers benefit from Dexterity. Their climb speed helps any melee class position tactically. Monks appreciate both Dexterity and climb speed. The glide ability benefits ambush-focused characters who can attack from above."
      },
      {
        question: "How does Hadozee Resilience work?",
        answer: "When you take damage, use your reaction to roll 1d6 + proficiency bonus and reduce the damage by that amount. You can use this a number of times equal to your proficiency bonus, regaining uses on a long rest. Scales well at higher levels."
      },
      {
        question: "What can Hadozee feet do?",
        answer: "Dexterous Feet lets you use a bonus action for simple manipulations: open/close doors or containers, pick up or set down Tiny objects. You can't wield weapons or perform precise tasks. It's useful for grabbing items mid-combat without using your action."
      },
      {
        question: "Are Hadozee from Spelljammer?",
        answer: "Yes. Hadozee originated in the Spelljammer setting as space-faring simian creatures who serve as crew members on spelljamming vessels. They're natural sailors and explorers. However, they can be played in any D&D setting with DM approval."
      }
    ],
    searchVolume: 7310
  },
  {
    slug: "halfling-5e",
    name: "Halfling 5e",
    raceName: "Halfling",
    category: "races",
    abilityScores: "+2 Dexterity",
    size: "Small",
    speed: "25 ft.",
    languages: "Common, Halfling",
    source: "Player's Handbook",
    description: "Halflings are a small, cheerful race known for their luck and courage. Standing about 3 feet tall, they are practical people who value home, hearth, and comfort. Despite their size, halflings are remarkably brave and resourceful. They are affable and get along well with most races. Halflings are adept at fitting into communities of other races and making themselves useful.",
    traits: [
      {
        name: "Lucky",
        description: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
      },
      {
        name: "Brave",
        description: "You have advantage on saving throws against being frightened."
      },
      {
        name: "Halfling Nimbleness",
        description: "You can move through the space of any creature that is of a size larger than yours."
      },
      {
        name: "Small",
        description: "Your size is Small. Small creatures have disadvantage with heavy weapons."
      }
    ],
    subraces: [
      {
        name: "Lightfoot Halfling",
        bonus: "+1 Charisma. Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
      },
      {
        name: "Stout Halfling",
        bonus: "+1 Constitution. Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage."
      }
    ],
    commonMistakes: [
      "Forgetting Lucky only rerolls natural 1s, not just any low roll",
      "Not using Halfling Nimbleness to move through ally spaces tactically",
      "Thinking Naturally Stealthy lets you hide anywhere (you need to be obscured by a larger creature)",
      "Not taking advantage of Lucky on critical saving throws",
      "Forgetting disadvantage on heavy weapons due to Small size"
    ],
    dmTips: [
      "Lucky is one of the most powerful racial abilities - it prevents critical failures",
      "Lightfoot Halflings make excellent rogues and infiltrators",
      "Stout Halflings are surprisingly tough with their poison resistance",
      "Halfling communities value comfort, food, and family - create cozy villages",
      "Their small size allows for creative problem-solving in tight spaces",
      "Brave makes them surprisingly effective against fear-based enemies"
    ],
    faq: [
      {
        question: "What is the best class for Halfling in 5e?",
        answer: "Rogues are exceptional thanks to +2 Dexterity and Lucky preventing critical failures on Sneak Attack rolls. Lightfoot Halflings can hide behind allies. Rangers, Monks, and Bards also benefit greatly from the Dexterity bonus and Lucky trait."
      },
      {
        question: "How does Halfling Lucky work in 5e?",
        answer: "When you roll a natural 1 on any attack roll, ability check, or saving throw, you can reroll that die and must use the new result. This only triggers on natural 1s, not on low totals. It's one of the most consistently useful racial traits in the game."
      },
      {
        question: "What's the difference between Lightfoot and Stout Halfling?",
        answer: "Lightfoot Halflings get +1 Charisma and can hide behind larger creatures, making them ideal rogues and social characters. Stout Halflings get +1 Constitution plus poison resistance and advantage on poison saves, making them tougher and great for front-line builds."
      },
      {
        question: "Can Halflings use heavy weapons?",
        answer: "Technically yes, but with disadvantage on all attacks due to their Small size. Heavy weapons like greatswords and heavy crossbows are designed for Medium or larger creatures. Stick to finesse weapons, longbows, or other non-heavy options for best results."
      },
      {
        question: "How does Halfling Nimbleness work?",
        answer: "You can move through the space of any creature larger than you (Medium or bigger). This includes enemies and allies. You can't end your turn in their space, but you can pass through to reach better positions or escape without provoking opportunity attacks from that creature."
      }
    ],
    searchVolume: 17270
  },
  {
    slug: "hobgoblin-5e",
    name: "Hobgoblin 5e",
    raceName: "Hobgoblin",
    category: "races",
    abilityScores: "+2 Constitution, +1 Intelligence",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Goblin",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Hobgoblins are disciplined warriors who value martial training and military organization above all else. They are larger and stronger than their goblin cousins, standing nearly 6 feet tall with dark orange or red-orange skin. Hobgoblin society is built around a strict military hierarchy where honor and discipline are paramount. They believe that life is a constant struggle for supremacy.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Fey Ancestry",
        description: "You have advantage on saving throws you make to avoid or end the charmed condition on yourself."
      },
      {
        name: "Fey Gift",
        description: "You can use this trait to take the Help action as a bonus action, and you can do so a number of times equal to your proficiency bonus. You regain all expended uses when you finish a long rest. Starting at 3rd level, choose one of the options below each time you use this trait: Hospitality (you and the target gain temporary HP equal to 1d6 + proficiency bonus), Passage (you and target gain +10 feet walking speed), or Spite (if the target hits with an attack, they can deal extra psychic damage equal to 1d6 + proficiency bonus)."
      },
      {
        name: "Fortune from the Many",
        description: "If you miss with an attack roll or fail an ability check or saving throw, you can draw on your bonds of reciprocity to gain a bonus equal to the number of allies you can see within 30 feet (maximum +3). You can use this trait a number of times equal to your proficiency bonus."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Fortune from the Many only works with visible allies",
      "Not tracking the proficiency bonus scaling on Fey Gift uses",
      "Choosing the wrong Fey Gift option for the situation",
      "Forgetting to use Help action as bonus action with Fey Gift",
      "Not coordinating with allies to maximize Fortune from the Many"
    ],
    dmTips: [
      "Hobgoblins work best in team-focused parties where they can use Fortune from the Many",
      "Their military background creates interesting roleplay for discipline vs. chaos",
      "Fey Gift's versatility makes them excellent support characters",
      "Consider hobgoblin legions, war bands, or military structures as antagonists or allies",
      "The Help action as a bonus action is very powerful for martial builds",
      "Their methodical nature contrasts well with more chaotic party members"
    ],
    faq: [
      {
        question: "What is the best class for Hobgoblin in 5e?",
        answer: "Fighters and Eldritch Knights benefit from +2 Constitution and +1 Intelligence. Artificers are excellent thematically. The bonus action Help from Fey Gift works great with martial classes, while Fortune from the Many rewards party-oriented builds."
      },
      {
        question: "How does Hobgoblin Fortune from the Many work?",
        answer: "When you miss an attack, fail a check, or fail a save, you gain a bonus equal to the number of visible allies within 30 feet (max +3). This applies AFTER you see the result, potentially turning failures into successes. Uses equal to proficiency bonus per long rest."
      },
      {
        question: "What's the difference between old and new Hobgoblin?",
        answer: "The Monsters of the Multiverse version replaced Saving Face and Martial Training with Fey Gift and Fortune from the Many. The new version is more flexible and powerful, adding bonus action Help with benefits plus a reroll mechanic instead of flat bonuses and weapon proficiencies."
      },
      {
        question: "Are Hobgoblins good or evil in 5e?",
        answer: "Hobgoblins aren't inherently evil in 5e, especially post-Monsters of the Multiverse. While hobgoblin societies often have harsh militaristic cultures, player characters can be any alignment. Their fey ancestry connects them to neutral fey rather than evil entities."
      },
      {
        question: "How does Hobgoblin Fey Gift work?",
        answer: "Take the Help action as a bonus action, proficiency bonus times per long rest. At 3rd level, add a benefit: Hospitality (temp HP), Passage (+10 speed), or Spite (extra psychic damage on hit). You choose the benefit each time you use it."
      }
    ],
    searchVolume: 9590
  },
  {
    slug: "kalashtar-5e",
    name: "Kalashtar 5e",
    raceName: "Kalashtar",
    category: "races",
    abilityScores: "+2 Wisdom, +1 Charisma",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Quori, one other language",
    source: "Eberron: Rising from the Last War",
    description: "Kalashtar are a compound race created from the union of humanity and renegade spirits from the plane of dreams. They are hunted by the nightmarish quori of Dal Quor, who seek to destroy them. Kalashtar appear human but have a spiritual presence that manifests as grace and wisdom. They are naturally psionic and often seem serene and thoughtful, as two minds share one body in perfect harmony.",
    traits: [
      {
        name: "Dual Mind",
        description: "You have advantage on all Wisdom saving throws."
      },
      {
        name: "Mental Discipline",
        description: "You have resistance to psychic damage."
      },
      {
        name: "Mind Link",
        description: "You can speak telepathically to any creature you can see within 60 feet. You don't need to share a language with the creature, but the creature must be able to understand at least one language. As an action, you can give that creature the ability to speak telepathically back to you until the start of your next turn."
      },
      {
        name: "Severed from Dreams",
        description: "Kalashtar sleep, but they don't connect to the plane of dreams. They are immune to spells and other magical effects that require you to dream, like the Dream spell."
      },
      {
        name: "Psychic Glamour",
        description: "Choose one of the following skills: Insight, Intimidation, Performance, or Persuasion. You have advantage on all ability checks you make with that skill."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Mind Link requires an action to allow two-way communication",
      "Not choosing a skill for Psychic Glamour during character creation",
      "Thinking telepathy works at unlimited range (it's 60 feet)",
      "Forgetting Dual Mind only applies to Wisdom saves, not all mental saves",
      "Not leveraging dream immunity in campaigns with dream-based threats"
    ],
    dmTips: [
      "Kalashtar are perfect for Eberron or campaigns involving psychic/dream elements",
      "The quori hunters make excellent recurring villains",
      "Dual Mind makes them incredibly resilient against druids, clerics, and Wisdom-based effects",
      "Mind Link enables perfect stealth communication for the party",
      "Consider dream quests or nightmares as plot elements they're uniquely positioned to handle",
      "Their dual nature provides rich roleplay opportunities"
    ],
    faq: [
      {
        question: "What is the best class for Kalashtar in 5e?",
        answer: "Clerics and Druids benefit most from +2 Wisdom. Aberrant Mind Sorcerers fit thematically with the psionic nature. The advantage on Wisdom saves makes them exceptional against mind control, making any class viable when facing psychic threats."
      },
      {
        question: "How does Kalashtar Mind Link work?",
        answer: "You can speak telepathically to any creature within 60 feet that you can see. They don't need to share a language but must understand at least one. As an action, you can grant them the ability to respond telepathically until the start of your next turn."
      },
      {
        question: "Are Kalashtar immune to sleep?",
        answer: "No, Kalashtar can still be affected by magical sleep effects. However, they are immune to the Dream spell and other effects that require connecting to the dream plane specifically. They sleep normally but don't dream."
      },
      {
        question: "What is the Kalashtar spirit?",
        answer: "Each Kalashtar shares their body with a quori spirit from the plane of dreams. This spirit grants their psionic abilities and dual consciousness. The spirit doesn't control them but provides wisdom and the Dual Mind advantage on Wisdom saves."
      },
      {
        question: "Can Kalashtar read minds with telepathy?",
        answer: "No. Kalashtar telepathy only allows sending thoughts to others and optionally receiving their responses. It's not mind reading. You project words to a creature; you can't read their private thoughts or detect lies through this ability."
      }
    ],
    searchVolume: 23420
  },
  {
    slug: "kenku-5e",
    name: "Kenku 5e",
    raceName: "Kenku",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Wisdom",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Auran (can only speak using Mimicry)",
    source: "Volo's Guide to Monsters",
    description: "Kenku are cursed avian humanoids who have lost their wings and their voices. They are covered in black feathers and have talons for hands. Due to an ancient curse, kenku can only speak by mimicking sounds they have heard. They are natural thieves and scouts, often living on the fringes of society. Despite their curse, kenku are clever and resourceful, using their mimicry to great effect.",
    traits: [
      {
        name: "Expert Duplication",
        description: "When you copy writing or craftwork produced by yourself or someone else, you have advantage on ability checks you make to produce an exact duplicate."
      },
      {
        name: "Kenku Recall",
        description: "Thanks to your supernaturally good memory, you have proficiency in two skills of your choice. Moreover, when you make an ability check using any skill in which you have proficiency, you can give yourself advantage on the check before rolling the d20. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      },
      {
        name: "Mimicry",
        description: "You can accurately mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations only with a successful Wisdom (Insight) check against a DC of 8 + your proficiency bonus + your Charisma modifier."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Not roleplaying the inability to speak original words (must mimic)",
      "Forgetting Kenku Recall gives advantage a limited number of times per long rest",
      "Not using Expert Duplication for forgery and counterfeiting opportunities",
      "Thinking Mimicry automatically fools people (they can make Insight checks)",
      "Not being creative with Mimicry for deception and infiltration"
    ],
    dmTips: [
      "Kenku roleplaying can be challenging - work with players to make it fun, not frustrating",
      "Allow them to build a 'phrase bank' of sounds they've heard",
      "Their curse makes them tragic figures - explore themes of lost identity",
      "Mimicry is excellent for espionage and heist scenarios",
      "Kenku Recall makes them incredibly skilled - they can excel at any proficiency",
      "Consider quests to break their curse as major character arcs",
      "Expert Duplication can be pivotal in investigation or crime-focused campaigns"
    ],
    faq: [
      {
        question: "How do Kenku speak in 5e?",
        answer: "Kenku can only speak by mimicking sounds they've heard before. They string together phrases, sounds, and voices to communicate. They cannot create original speech. Most DMs allow a 'phrase bank' system where players collect useful phrases during play."
      },
      {
        question: "What is the best class for Kenku in 5e?",
        answer: "Rogues are ideal with +2 Dexterity and Kenku Recall's advantage on skill checks. Bards, Rangers, and Monks also benefit. Mimicry combined with Rogue infiltration abilities creates an excellent spy character."
      },
      {
        question: "Can Kenku fly in 5e?",
        answer: "No. Kenku lost their ability to fly due to an ancient curse. They have vestigial wings that cannot support flight. The curse also took their original voices. Some Kenku dedicate their lives to finding ways to break this curse."
      },
      {
        question: "How does Kenku Mimicry work?",
        answer: "You can perfectly replicate any sound you've heard, including voices, music, or noises. Creatures can identify it as mimicry only with a Wisdom (Insight) check against DC 8 + proficiency bonus + Charisma modifier. It's excellent for deception."
      },
      {
        question: "What is Kenku Recall?",
        answer: "You gain two skill proficiencies of your choice and can give yourself advantage on any proficient skill check a number of times equal to your proficiency bonus per long rest. This makes Kenku extremely versatile skill monkeys."
      }
    ],
    searchVolume: 40630
  },
  {
    slug: "kobold-5e",
    name: "Kobold 5e",
    raceName: "Kobold",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Strength",
    size: "Small",
    speed: "30 ft.",
    languages: "Common, Draconic",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Kobolds are small, reptilian humanoids who consider themselves distant cousins of dragons. Standing 2 to 3 feet tall, they have scaly skin, horns, and small tails. Kobolds are often underestimated due to their size, but they are cunning trap-makers and fierce when working together. They overcome their physical limitations through clever tactics, traps, and overwhelming numbers.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Draconic Cry",
        description: "As a bonus action, you let out a cry at your enemies within 10 feet of you. Until the start of your next turn, you and your allies have advantage on attack rolls against any of those enemies who could hear the cry. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      },
      {
        name: "Kobold Legacy",
        description: "You have proficiency in one of the following skills of your choice: Arcana, Investigation, Medicine, Sleight of Hand, or Survival."
      },
      {
        name: "Draconic Sorcery (alternative)",
        description: "You know one cantrip from the sorcerer spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for it (choose when you select this race)."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Pack Tactics was removed in Monsters of the Multiverse",
      "Not using Draconic Cry before attacking (it's a bonus action)",
      "Thinking Draconic Cry affects all enemies (only those within 10 feet)",
      "Not choosing a skill proficiency for Kobold Legacy",
      "Forgetting disadvantage on attacks in sunlight (removed in newer version)"
    ],
    dmTips: [
      "Kobolds are most effective when working with allies due to Draconic Cry",
      "They make excellent trap-makers and dungeon designers in-world",
      "Their dragon worship can lead to interesting storylines with dragons",
      "Kobold warrens and trap-filled lairs are classic dungeon environments",
      "Despite their small size, they're tactically brilliant",
      "Consider kobold NPCs as comedic relief or surprisingly competent foes"
    ],
    faq: [
      {
        question: "What is the best class for Kobold in 5e?",
        answer: "Rogues and Rangers excel with +2 Dexterity. Artificers and Sorcerers work well with Draconic Sorcery. Draconic Cry gives advantage to allies, making Kobolds great support characters in any martial party composition."
      },
      {
        question: "Do Kobolds still have Pack Tactics in 5e?",
        answer: "No. Monsters of the Multiverse removed Pack Tactics (and Sunlight Sensitivity) from playable Kobolds. They now have Draconic Cry instead, which grants advantage to the whole party against nearby enemies as a bonus action."
      },
      {
        question: "How does Kobold Draconic Cry work?",
        answer: "As a bonus action, all enemies within 10 feet that can hear you become marked. Until your next turn, you AND your allies have advantage on attacks against those enemies. Uses equal to proficiency bonus per long rest. Excellent for alpha strikes."
      },
      {
        question: "Are Kobolds related to dragons?",
        answer: "Kobolds believe they're descended from dragons and revere them as near-deities. While not biologically related, their draconic features (scales, horns) and ability to choose Draconic Sorcery reinforce this connection. Many serve dragons willingly."
      },
      {
        question: "What size are Kobolds in 5e?",
        answer: "Kobolds are Small, standing 2-3 feet tall. This means disadvantage on heavy weapons but ability to move through larger creatures' spaces. Their size makes them excellent at squeezing into tight spaces and hiding."
      }
    ],
    searchVolume: 9260
  },
  {
    slug: "lizardfolk-5e",
    name: "Lizardfolk 5e",
    raceName: "Lizardfolk",
    category: "races",
    abilityScores: "+2 Constitution, +1 Wisdom",
    size: "Medium",
    speed: "30 ft., swim 30 ft.",
    languages: "Common, Draconic",
    source: "Volo's Guide to Monsters",
    description: "Lizardfolk are reptilian humanoids who inhabit swamps and marshes. They think and act with a cold, alien logic that is often difficult for warm-blooded races to understand. Lizardfolk see life as a constant struggle for survival where emotions are weaknesses. Standing 6 to 7 feet tall with tough scales, they are pragmatic hunters who waste nothing and view all creatures as potential threats or food.",
    traits: [
      {
        name: "Bite",
        description: "Your fanged maw is a natural weapon, which you can use to make unarmed strikes. If you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      },
      {
        name: "Cunning Artisan",
        description: "As part of a short rest, you can harvest bone and hide from a slain beast, construct, dragon, monstrosity, or plant creature of size Small or larger to create one of the following items: a shield, a club, a javelin, or 1d4 darts or blowgun needles. To use this trait, you need a blade, such as a dagger, or appropriate artisan's tools, such as leatherworker's tools."
      },
      {
        name: "Hold Breath",
        description: "You can hold your breath for up to 15 minutes at a time."
      },
      {
        name: "Hunter's Lore",
        description: "You gain proficiency with two of the following skills of your choice: Animal Handling, Nature, Perception, Stealth, and Survival."
      },
      {
        name: "Natural Armor",
        description: "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
      },
      {
        name: "Hungry Jaws",
        description: "In battle, you can throw yourself into a vicious feeding frenzy. As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points equal to your Constitution modifier (minimum of 1), and you can't use this trait again until you finish a short or long rest."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Natural Armor works with shields",
      "Not using Cunning Artisan during short rests to save money on equipment",
      "Thinking Hungry Jaws can be used every turn (it's once per short/long rest)",
      "Not choosing two skills for Hunter's Lore",
      "Forgetting the Bite attack uses Strength modifier, not Dexterity"
    ],
    dmTips: [
      "Lizardfolk's alien psychology makes for fascinating roleplay",
      "They excel in swamp and aquatic environments",
      "Natural Armor makes them good for monks and barbarians",
      "Cunning Artisan encourages creative use of monster corpses",
      "Their pragmatic worldview can create interesting party dynamics",
      "Consider survival-focused adventures where their skills shine",
      "Hold Breath is excellent for underwater exploration"
    ],
    faq: [
      {
        question: "What is the best class for Lizardfolk in 5e?",
        answer: "Barbarians and Druids benefit most from +2 Constitution and +1 Wisdom. Natural Armor stacks excellently with Barbarian's Unarmored Defense calculation. Rangers and Monks also work well. Hungry Jaws gives bonus action damage."
      },
      {
        question: "How does Lizardfolk Natural Armor work?",
        answer: "Your base AC is 13 + Dexterity modifier when not wearing armor. This stacks with shields. It's better than studded leather at +2 Dex or lower. You can still wear armor if it provides higher AC than your natural armor."
      },
      {
        question: "Can Lizardfolk use their Bite attack with Extra Attack?",
        answer: "Yes. Bite is a natural weapon that counts as an unarmed strike, dealing 1d6 + Strength piercing damage. You can use it with Extra Attack, and it's useful when disarmed. Hungry Jaws is a separate bonus action Bite with temp HP."
      },
      {
        question: "What is Lizardfolk Cunning Artisan?",
        answer: "During any short rest, you can craft a shield, club, javelin, or 1d4 darts from a slain beast, dragon, monstrosity, construct, or plant creature of Small size or larger. You need a blade or appropriate tools. Free equipment from monster corpses."
      },
      {
        question: "How do Lizardfolk think differently?",
        answer: "Lizardfolk are emotionally detached and coldly logical. They don't understand sarcasm, sentimentality, or unnecessary attachment. All creatures are assessed as threats, tools, or food. This alien mindset creates unique roleplay opportunities."
      }
    ],
    searchVolume: 11230,
    aliases: ["lizardfolk-5e-alt"]
  },
  {
    slug: "loxodon-5e",
    name: "Loxodon 5e",
    raceName: "Loxodon",
    category: "races",
    abilityScores: "+2 Constitution, +1 Wisdom",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Loxodon",
    source: "Guildmasters' Guide to Ravnica",
    description: "Loxodons are humanoid elephants, standing between 7 and 8 feet tall with thick, leathery skin and large, fan-like ears. They are calm, wise, and deliberate in their actions. Native to Ravnica, loxodons value community, patience, and long-term thinking. Their trunk gives them a unique advantage in manipulating objects, and their natural armor makes them remarkably durable.",
    traits: [
      {
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      },
      {
        name: "Loxodon Serenity",
        description: "You have advantage on saving throws against being charmed or frightened."
      },
      {
        name: "Natural Armor",
        description: "You have thick, leathery skin. When you aren't wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor."
      },
      {
        name: "Trunk",
        description: "You can grasp things with your trunk, and you can use it as a snorkel. It has a reach of 5 feet, and it can lift a number of pounds equal to five times your Strength score. You can use it to do the following simple tasks: lift, drop, hold, push, or pull an object or a creature; open or close a door or a container; grapple someone; or make an unarmed strike. Your DM might allow other simple tasks to be added to that list of options. It can't wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell."
      },
      {
        name: "Keen Smell",
        description: "Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Thinking the trunk can wield weapons or perform somatic components",
      "Not using the trunk for grappling or object manipulation",
      "Forgetting Natural Armor scales with Constitution",
      "Not leveraging Keen Smell for tracking and investigation",
      "Thinking Loxodon Serenity applies to all Wisdom saves (only charm and fear)"
    ],
    dmTips: [
      "Loxodons work well in Ravnica settings but can be adapted to other campaigns",
      "Their calm demeanor makes them excellent clerics, monks, or druids",
      "The trunk provides creative problem-solving opportunities",
      "Natural Armor makes them durable without heavy armor",
      "Their size and presence make them natural leaders",
      "Consider their long lifespans and patient worldview in roleplay",
      "Keen Smell is excellent for investigation and tracking scenarios"
    ],
    faq: [
      {
        question: "What is the best class for Loxodon in 5e?",
        answer: "Clerics and Druids benefit from +2 Constitution and +1 Wisdom. Monks work excellently with Natural Armor scaling off Constitution. Barbarians also benefit from the Constitution bonus and can use Natural Armor as an alternative to Unarmored Defense."
      },
      {
        question: "How does Loxodon Natural Armor work?",
        answer: "Your base AC is 12 + Constitution modifier when unarmored, and it stacks with shields. Unlike Lizardfolk (Dex-based), Loxodon armor scales with Con, making them naturally tankier. Great for builds that dump Dexterity."
      },
      {
        question: "What can Loxodons do with their trunk?",
        answer: "The trunk can grasp objects, open doors, grapple, make unarmed strikes, and act as a snorkel. It lifts 5x Strength score in pounds with 5-foot reach. It cannot wield weapons, use shields, operate tools, or cast spells with somatic components."
      },
      {
        question: "Can Loxodons grapple with their trunk?",
        answer: "Yes! The trunk can grapple, giving you a free hand for weapons or shields while restraining enemies. Combined with their Constitution bonus and large size, Loxodons make excellent grapplers without sacrificing offense."
      },
      {
        question: "Are Loxodons only in Ravnica?",
        answer: "While native to the Ravnica setting, Loxodons can be adapted to any campaign. They might be rare travelers, exist in their own communities, or be exotic visitors. Their wise, patient nature fits many settings beyond Ravnica."
      }
    ],
    searchVolume: 10480
  },
  {
    slug: "shadar-kai-5e",
    name: "Shadar-Kai 5e",
    raceName: "Shadar-Kai",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Constitution",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Elvish",
    source: "Mordenkainen's Tome of Foes",
    description: "Shadar-kai are elves who were transformed by the Shadowfell, becoming bound to that plane of shadow and gloom. They appear as pale, dark-haired elves with hollow eyes. Living in the Shadowfell has made them grim and practical, and they struggle against the soul-numbing effects of their home plane. Many seek intense experiences to feel truly alive and fight off the emotional emptiness.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Necrotic Resistance",
        description: "You have resistance to necrotic damage."
      },
      {
        name: "Blessing of the Raven Queen",
        description: "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't do so again until you finish a long rest. Starting at 3rd level, you also gain resistance to all damage when you teleport using this trait. The resistance lasts until the start of your next turn. During that time, you appear ghostly and translucent."
      },
      {
        name: "Trance",
        description: "Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting the damage resistance only lasts until the start of your next turn",
      "Using Blessing of the Raven Queen before reaching 3rd level (no resistance yet)",
      "Not positioning the teleport to maximize the one-turn damage resistance",
      "Forgetting it's a once-per-long-rest ability (very limited use)",
      "Not leveraging necrotic resistance against undead"
    ],
    dmTips: [
      "Shadar-kai struggle with emotional numbness - explore this in roleplay",
      "The teleport + damage resistance is excellent for hit-and-run tactics",
      "Their connection to the Raven Queen provides plot hooks about death and fate",
      "Shadowfell origins make them perfect for dark, gloomy campaigns",
      "They seek intense experiences - create opportunities for dramatic moments",
      "Necrotic resistance is valuable in undead-heavy campaigns",
      "Their grim pragmatism contrasts well with more optimistic characters"
    ],
    faq: [
      {
        question: "What is the best class for Shadar-Kai in 5e?",
        answer: "Rogues excel with +2 Dexterity and the teleport for repositioning. Rangers and Fighters also work well. The teleport + damage resistance combo makes Shadar-Kai excellent for hit-and-run tactics with any martial class."
      },
      {
        question: "How does Blessing of the Raven Queen work?",
        answer: "As a bonus action, teleport up to 30 feet. Once per long rest. At 3rd level and above, you also gain resistance to ALL damage until the start of your next turn after teleporting. Appears ghostly during this time."
      },
      {
        question: "Are Shadar-Kai elves?",
        answer: "Yes. Shadar-Kai are an elf subrace transformed by long exposure to the Shadowfell. They retain elven traits like Fey Ancestry, Keen Senses, Darkvision, and Trance. They're often called 'shadow elves' and serve the Raven Queen."
      },
      {
        question: "Can Shadar-Kai feel emotions?",
        answer: "Yes, but the Shadowfell dampens emotions over time. Shadar-Kai struggle against emotional numbness and often seek intense experiences (extreme sports, passionate art, combat) to feel alive. This creates rich roleplay opportunities."
      },
      {
        question: "Who is the Raven Queen?",
        answer: "The Raven Queen is a mysterious goddess of death, fate, and memory who rules the Shadowfell. Shadar-Kai serve her and receive her blessing. She's neither good nor evil - she opposes undeath and guards the transition of souls."
      }
    ],
    searchVolume: 10130
  },
  {
    slug: "tabaxi-5e",
    name: "Tabaxi 5e",
    raceName: "Tabaxi",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Charisma",
    size: "Medium",
    speed: "30 ft., climb 30 ft.",
    languages: "Common, one other language",
    source: "Volo's Guide to Monsters",
    description: "Tabaxi are feline humanoids driven by curiosity and wanderlust. Hailing from distant lands, they are natural explorers and storytellers who travel far and wide in search of interesting tales and treasures. Tabaxi have cat-like features including fur, tails, and retractable claws. They are agile, curious, and often mercurial in their interests, quickly moving from one obsession to another.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Feline Agility",
        description: "Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns."
      },
      {
        name: "Cat's Claws",
        description: "Because of your claws, you have a climbing speed of 30 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      },
      {
        name: "Cat's Talent",
        description: "You have proficiency in the Perception and Stealth skills."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Feline Agility requires you to move 0 feet on a turn to recharge (you can't just stand still and then move)",
      "Not using the climb speed for tactical positioning",
      "Thinking Feline Agility doubles your movement speed permanently",
      "Not taking advantage of free Perception and Stealth proficiency",
      "Forgetting Cat's Claws uses Strength, not Dexterity"
    ],
    dmTips: [
      "Tabaxi curiosity drives them to explore - use this for plot hooks",
      "Feline Agility makes them excellent scouts and skirmishers",
      "Their cat-like nature should influence personality and behavior",
      "Consider introducing other tabaxi with different obsessions",
      "The climb speed opens up vertical combat and exploration options",
      "Their wanderlust means they often arrive in new places with stories to share",
      "Cat-like quirks (distraction by shiny objects, grooming, etc.) add flavor"
    ],
    faq: [
      {
        question: "What is the best class for Tabaxi in 5e?",
        answer: "Rogues are ideal with +2 Dexterity, +1 Charisma, free Stealth proficiency, and climb speed for positioning. Monks also excel with Feline Agility doubling their already high mobility. Rangers and Bards work well too."
      },
      {
        question: "How does Tabaxi Feline Agility work?",
        answer: "When you move on your turn, you can double your speed until end of turn. To recharge it, you must spend an entire turn moving 0 feet (you can still take actions). Then it's available again. Doesn't stack with other speed doublers."
      },
      {
        question: "Can Tabaxi use Feline Agility every turn?",
        answer: "No. After using Feline Agility, you must move 0 feet on a subsequent turn to recharge it. You can take actions, bonus actions, and reactions - just no movement. Then it recharges for future use."
      },
      {
        question: "Do Tabaxi have claws in 5e?",
        answer: "Yes. Cat's Claws provide a climb speed of 30 feet AND natural weapons dealing 1d4 + Strength slashing damage. The claws use Strength, not Dexterity, so they're mainly useful for climbing rather than combat for most Tabaxi builds."
      },
      {
        question: "How fast can a Tabaxi move?",
        answer: "Base speed is 30 feet. With Feline Agility doubled: 60 feet. A Monk Tabaxi at level 10 has 50 feet base, doubled to 100 feet. Add Dash action: 200 feet in one turn. With Haste and boots: potentially 280+ feet per turn."
      }
    ],
    searchVolume: 16300
  },
  {
    slug: "tiefling-5e",
    name: "Tiefling 5e",
    raceName: "Tiefling",
    category: "races",
    abilityScores: "+2 Charisma, +1 Intelligence",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Infernal",
    source: "Player's Handbook",
    description: "Tieflings are humans with fiendish heritage, bearing physical marks of their infernal bloodline such as horns, tails, and unusual skin colors. Their appearance and heritage often lead to mistrust and prejudice from others. Despite their dark ancestry, tieflings can be of any alignment and often struggle against the stereotypes placed upon them. They are clever, charismatic, and resilient in the face of adversity.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Hellish Resistance",
        description: "You have resistance to fire damage."
      },
      {
        name: "Infernal Legacy",
        description: "You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell once as a 2nd-level spell. When you reach 5th level, you can cast the Darkness spell once. You must finish a long rest to cast these spells again with this trait. Charisma is your spellcasting ability for these spells."
      }
    ],
    subraces: [
      {
        name: "Asmodeus Tiefling",
        bonus: "+1 Intelligence. Standard Infernal Legacy (Thaumaturgy, Hellish Rebuke, Darkness)."
      },
      {
        name: "Baalzebul Tiefling",
        bonus: "+1 Intelligence. Legacy of Maladomini: Thaumaturgy cantrip, Ray of Sickness at 3rd level, Crown of Madness at 5th level."
      },
      {
        name: "Dispater Tiefling",
        bonus: "+1 Dexterity. Legacy of Dis: Thaumaturgy cantrip, Disguise Self at 3rd level, Detect Thoughts at 5th level."
      },
      {
        name: "Fierna Tiefling",
        bonus: "+1 Wisdom. Legacy of Phlegethos: Friends cantrip, Charm Person at 3rd level, Suggestion at 5th level."
      },
      {
        name: "Glasya Tiefling",
        bonus: "+1 Dexterity. Legacy of Malbolge: Minor Illusion cantrip, Disguise Self at 3rd level, Invisibility at 5th level."
      },
      {
        name: "Levistus Tiefling",
        bonus: "+1 Constitution. Legacy of Stygia: Ray of Frost cantrip, Armor of Agathys at 3rd level, Darkness at 5th level."
      },
      {
        name: "Mammon Tiefling",
        bonus: "+1 Intelligence. Legacy of Minauros: Mage Hand cantrip, Tenser's Floating Disk at 3rd level, Arcane Lock at 5th level."
      },
      {
        name: "Mephistopheles Tiefling",
        bonus: "+1 Intelligence. Legacy of Cania: Mage Hand cantrip, Burning Hands at 3rd level, Flame Blade at 5th level."
      },
      {
        name: "Zariel Tiefling",
        bonus: "+1 Strength. Legacy of Avernus: Thaumaturgy cantrip, Searing Smite at 3rd level, Branding Smite at 5th level."
      }
    ],
    commonMistakes: [
      "Forgetting Hellish Rebuke is cast at 2nd level, not 1st level",
      "Not tracking the level requirements for legacy spells (3rd and 5th level)",
      "Assuming all tieflings are evil or devil-worshippers",
      "Not using Thaumaturgy for intimidation or dramatic flair",
      "Forgetting the variant tiefling subraces from Mordenkainen's Tome of Foes"
    ],
    dmTips: [
      "Tieflings face prejudice - use this to create meaningful roleplay moments",
      "Fire resistance is common but very useful",
      "Hellish Rebuke is excellent for reaction-based retaliation",
      "Different infernal bloodlines offer very different playstyles",
      "Consider fiendish ancestry as a source of plot complications or opportunities",
      "Zariel tieflings make excellent paladins and fighters",
      "Glasya tieflings are perfect for rogues and infiltrators",
      "Their struggle against stereotypes provides rich character development"
    ],
    faq: [
      {
        question: "What is the best class for Tiefling in 5e?",
        answer: "Warlocks, Sorcerers, and Bards thrive with +2 Charisma. Paladins make excellent Zariel Tieflings (+1 Strength, smite spells). Glasya Tieflings (+1 Dex, illusion spells) excel as Rogues. Choose your subrace to match your class."
      },
      {
        question: "How many Tiefling subraces are there?",
        answer: "Nine official variants in Mordenkainen's Tome of Foes, each tied to an archdevil: Asmodeus (default), Baalzebul, Dispater, Fierna, Glasya, Levistus, Mammon, Mephistopheles, and Zariel. Each gets different ability bonuses and spells."
      },
      {
        question: "Are all Tieflings evil?",
        answer: "No. Tieflings have fiendish heritage but free will. They can be any alignment. Many struggle against prejudice and stereotypes, deliberately choosing good to defy expectations. Their ancestry doesn't determine their morality."
      },
      {
        question: "What spells do Tieflings get?",
        answer: "Default (Asmodeus) Tieflings get Thaumaturgy at 1st level, Hellish Rebuke (2nd-level cast) at 3rd, and Darkness at 5th. Variant subraces replace these with different spell progressions themed to their archdevil patron."
      },
      {
        question: "Why do Tieflings have fire resistance?",
        answer: "Hellish Resistance grants fire resistance due to their infernal bloodline. Devils and the Nine Hells are strongly associated with fire. This resistance applies to all fire damage sources, making it one of the most useful resistances in the game."
      }
    ],
    searchVolume: 90380,
    aliases: ["dnd-tiefling"]
  },
  {
    slug: "warforged-5e",
    name: "Warforged 5e",
    raceName: "Warforged",
    category: "races",
    abilityScores: "+2 Constitution, +1 to one other ability score",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, one other language",
    source: "Eberron: Rising from the Last War",
    description: "Warforged are sentient constructs created for war but now seeking purpose in a world at peace. Built from wood, metal, and stone, they have humanoid forms with mechanical features. Warforged don't need to eat, drink, or breathe, and they don't age naturally. Created during the Last War in Eberron, they are now exploring what it means to have free will and find their place in society.",
    traits: [
      {
        name: "Constructed Resilience",
        description: "You were created to have remarkable fortitude. You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You don't need to eat, drink, or breathe. You are immune to disease. You don't need to sleep, and magic can't put you to sleep."
      },
      {
        name: "Sentry's Rest",
        description: "When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but it doesn't render you unconscious, and you can see and hear as normal."
      },
      {
        name: "Integrated Protection",
        description: "Your body has built-in defensive layers, which can be enhanced with armor: You gain a +1 bonus to Armor Class. You can don only armor with which you have proficiency. To don armor, you must incorporate it into your body over 1 hour, during which you remain in contact with the armor. To doff armor, you must spend 1 hour removing it. You can rest while donning or doffing armor in this way. While you live, your armor can't be removed from your body against your will."
      },
      {
        name: "Specialized Design",
        description: "You gain one skill proficiency and one tool proficiency of your choice."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting warforged still need long rests (6 hours of Sentry's Rest)",
      "Thinking warforged are immune to poison (they have advantage and resistance, not immunity)",
      "Not accounting for the 1-hour donning/doffing time for armor",
      "Forgetting the +1 AC bonus from Integrated Protection",
      "Not choosing a skill and tool proficiency for Specialized Design",
      "Thinking warforged can't be healed by normal healing (they can)"
    ],
    dmTips: [
      "Warforged work best in Eberron but can be adapted to any setting with magical constructs",
      "Their quest for identity and purpose provides excellent character development",
      "Constructed Resilience makes them excellent for harsh environments",
      "Sentry's Rest means they can keep watch without exhaustion",
      "Consider exploring themes of sentience, free will, and what it means to be alive",
      "They don't need food/water - useful for survival situations",
      "The armor integration mechanic prevents easy disarming",
      "Warforged make great tanks with their natural AC bonus and Constitution boost"
    ],
    faq: [
      {
        question: "What is the best class for Warforged in 5e?",
        answer: "Fighters, Artificers, and Paladins excel with +2 Constitution and Integrated Protection's +1 AC bonus. Any class benefits from their resilience. Place the +1 in your class's primary ability score for optimization."
      },
      {
        question: "Can Warforged be healed in 5e?",
        answer: "Yes! Despite being constructs, Warforged are living creatures and can be healed by all normal means: Cure Wounds, healing potions, Hit Dice, etc. They're also affected by spells targeting creatures. Mending doesn't heal them."
      },
      {
        question: "Do Warforged need to sleep?",
        answer: "No. Warforged don't need to sleep (magic can't put them to sleep either). However, they still need 6 hours of Sentry's Rest during a long rest, during which they remain conscious and aware but inactive."
      },
      {
        question: "How does Warforged Integrated Protection work?",
        answer: "You get +1 AC permanently. You can incorporate armor by spending 1 hour with it (during a rest). Once integrated, armor can't be removed against your will while alive. Armor proficiency requirements still apply."
      },
      {
        question: "Are Warforged immune to poison?",
        answer: "No, but they're highly resistant. They have resistance to poison damage (half damage) and advantage on saves against being poisoned. They can still be poisoned - they're just very hard to poison effectively."
      }
    ],
    searchVolume: 16350,
    aliases: ["warforged-dnd"]
  },
  {
    slug: "human-5e",
    name: "Human 5e",
    raceName: "Human",
    category: "races",
    abilityScores: "+1 to all ability scores",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, one extra of your choice",
    source: "Player's Handbook",
    description: "Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. Humans reach adulthood in their late teens and rarely live even a single century. Their short lifespans push them to achieve as much as they can in the years they are given, making them natural adventurers and pioneers.",
    traits: [
      {
        name: "Ability Score Increase",
        description: "All ability scores increase by 1, making humans exceptionally versatile for any class."
      },
      {
        name: "Extra Language",
        description: "You can speak, read, and write one extra language of your choice. Humans typically learn the languages of other peoples they deal with."
      },
      {
        name: "Skills (Variant Human)",
        description: "If using the variant human option, you gain +1 to two ability scores of your choice, proficiency in one skill of your choice, and one feat at 1st level."
      }
    ],
    subraces: [
      {
        name: "Standard Human",
        bonus: "+1 to all six ability scores. One extra language."
      },
      {
        name: "Variant Human",
        bonus: "+1 to two different ability scores of your choice. Proficiency in one skill of your choice. One feat of your choice at 1st level."
      }
    ],
    commonMistakes: [
      "Forgetting that variant human is an optional rule that requires DM approval",
      "Not utilizing the free feat strategically for variant humans",
      "Overlooking the versatility of +1 to all stats for multiclass builds"
    ],
    dmTips: [
      "Variant humans are exceptionally powerful due to the 1st-level feat",
      "Standard humans work well for multiclass characters that need multiple ability scores",
      "Humans' adaptability makes them suitable for any role or class",
      "Their short lifespans create urgency in character motivations"
    ],
    faq: [
      {
        question: "Should I play Standard Human or Variant Human?",
        answer: "Variant Human is generally stronger due to the 1st-level feat (like Sentinel, Polearm Master, or Lucky). Standard Human is better for multiclass builds needing many ability scores above 13. Variant requires DM approval as an optional rule."
      },
      {
        question: "What are the best feats for Variant Human?",
        answer: "Sentinel for melee control, Polearm Master for opportunity attacks, Great Weapon Master or Sharpshooter for damage, Lucky for versatility, War Caster for spellcasters, and Resilient (Constitution) for concentration saves."
      },
      {
        question: "Why play Human instead of another race?",
        answer: "Variant Humans get a feat at level 1 that other races don't get until level 4. Standard Humans have no dump stats, ideal for MAD (Multiple Ability Dependent) builds. Humans also have great roleplay versatility."
      },
      {
        question: "Do Humans have any special abilities?",
        answer: "Standard Humans get +1 to ALL six ability scores. Variant Humans get +1 to two scores, one skill proficiency, and one feat. They lack darkvision and resistance but compensate with versatility and flexibility."
      },
      {
        question: "What language should Variant Humans take?",
        answer: "Choose based on your campaign: Elvish and Dwarvish are common. Draconic is useful for dragon-heavy campaigns. Undercommon or Deep Speech for Underdark adventures. Ask your DM what languages will be most useful."
      }
    ],
    searchVolume: 14200,
    aliases: ["human-race-5e", "dnd-human"]
  },
  {
    slug: "elf-high-5e",
    name: "Elf (High Elf) 5e",
    raceName: "Elf (High Elf)",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Intelligence",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Elvish, one extra of your choice",
    source: "Player's Handbook",
    description: "High elves are graceful, intelligent beings with a keen mind and mastery of basic magic. They have a special affinity for the arcane arts and prize knowledge and scholarship. High elves live in elegant cities carved from ancient forests or gleaming towers. They have fair skin with golden, silver, or black hair and eyes of gold, silver, or blue. High elves can live over 700 years.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
      },
      {
        name: "Trance",
        description: "Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day, gaining the same benefit as a human does from 8 hours of sleep."
      },
      {
        name: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow."
      },
      {
        name: "Cantrip",
        description: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
      },
      {
        name: "Extra Language",
        description: "You can speak, read, and write one extra language of your choice."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Trance only requires 4 hours, allowing elves to take full watch shifts",
      "Not choosing a useful cantrip that complements your class",
      "Thinking Fey Ancestry protects against all enchantment spells (only charm and magical sleep)",
      "Not leveraging the free weapon proficiencies for non-martial classes"
    ],
    dmTips: [
      "High elves make excellent wizards, artificers, and eldritch knights",
      "The free wizard cantrip provides excellent utility for any class",
      "Weapon proficiencies enable effective gish (magic/martial hybrid) builds",
      "Their long lifespans mean they have centuries of experience and perspective",
      "Consider ancient elven ruins, libraries, and magical academies as plot hooks"
    ],
    faq: [
      {
        question: "What is the best class for High Elf in 5e?",
        answer: "Wizards are the classic choice with +1 Intelligence and a free wizard cantrip. Bladesinger Wizards, Eldritch Knights, and Arcane Trickster Rogues also benefit greatly. Any Dexterity-based class works with +2 Dex."
      },
      {
        question: "What cantrip should High Elves take?",
        answer: "Booming Blade or Green-Flame Blade for melee characters (if allowed). Minor Illusion for utility. Prestidigitation for roleplay. Fire Bolt for ranged damage. Mind Sliver for debuffing. Choose based on your class and playstyle."
      },
      {
        question: "How does Elf Trance work?",
        answer: "Elves meditate for 4 hours instead of sleeping 8. This counts as a long rest. They remain semi-conscious during Trance, gaining the benefits of sleep without full unconsciousness. Great for keeping watch."
      },
      {
        question: "What's the difference between High Elf and Wood Elf?",
        answer: "High Elves get +1 Intelligence, a wizard cantrip, extra language, and weapon proficiency. Wood Elves get +1 Wisdom, faster speed (35 ft), and Mask of the Wild (hide in natural obscurement). High Elves are arcane; Wood Elves are naturalists."
      },
      {
        question: "How long do High Elves live?",
        answer: "Elves can live over 700 years. They reach physical maturity around 25 but aren't considered adults until around 100, when they've had time to fully explore themselves. This longevity affects their worldview and patience."
      }
    ],
    searchVolume: 12300,
    aliases: ["high-elf-5e", "elf-5e"]
  },
  {
    slug: "half-elf-5e",
    name: "Half-Elf 5e",
    raceName: "Half-Elf",
    category: "races",
    abilityScores: "+2 Charisma, +1 to two other ability scores",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Elvish, one extra of your choice",
    source: "Player's Handbook",
    description: "Half-elves combine what some say are the best qualities of their elf and human parents. They have human curiosity, inventiveness, and ambition tempered by elven refined senses, love of nature, and artistic tastes. Walking in two worlds but truly belonging to neither, half-elves combine the best features of both races. They live about 180 years and mature at the same rate as humans.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
      },
      {
        name: "Skill Versatility",
        description: "You gain proficiency in two skills of your choice."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Not optimizing the flexible +1 bonuses to complement your class",
      "Forgetting to choose two skill proficiencies during character creation",
      "Overlooking half-elf's exceptional versatility for any class or build"
    ],
    dmTips: [
      "Half-elves are among the most versatile races mechanically",
      "The Charisma bonus and skill proficiencies make them excellent bards, paladins, sorcerers, and warlocks",
      "Their dual heritage creates interesting roleplay about belonging and identity",
      "Skill Versatility helps fill party gaps in skills",
      "Consider themes of acceptance, prejudice, and finding one's place in the world"
    ],
    faq: [
      {
        question: "What is the best class for Half-Elf in 5e?",
        answer: "Paladins, Bards, Sorcerers, and Warlocks all benefit from +2 Charisma. The flexible +1 bonuses let you optimize for any class. Half-Elves are one of the most versatile races for nearly any build."
      },
      {
        question: "Why are Half-Elves considered good in 5e?",
        answer: "+2 Charisma and +1 to two other abilities provides excellent flexibility. Two free skill proficiencies fill gaps. Darkvision, Fey Ancestry (charm/sleep resistance), and an extra language round out a very strong package."
      },
      {
        question: "Do Half-Elves have Trance?",
        answer: "No. Standard Half-Elves don't have Trance - they sleep like humans. However, the SCAG variants can trade Skill Versatility for elven traits including a version of Trance. Check with your DM about these optional variants."
      },
      {
        question: "What skills should Half-Elves take?",
        answer: "Fill party gaps: Perception is always valuable. Persuasion complements Charisma classes. Stealth helps most parties. Athletics if no one has it. Choose skills your class doesn't provide that fit your character concept."
      },
      {
        question: "How long do Half-Elves live?",
        answer: "Half-Elves live about 180 years, much longer than humans but shorter than full elves. They mature at the same rate as humans, reaching adulthood in their late teens. This lifespan creates unique perspectives on mortality."
      }
    ],
    searchVolume: 9600,
    aliases: ["half-elf-race-5e", "halfelf-5e"]
  },
  {
    slug: "half-orc-5e",
    name: "Half-Orc 5e",
    raceName: "Half-Orc",
    category: "races",
    abilityScores: "+2 Strength, +1 Constitution",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Orc",
    source: "Player's Handbook",
    description: "Half-orcs' grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. They are between 6 and 7 feet tall and weigh between 180 and 250 pounds. Whether united under the leadership of a mighty warlock or fighting for survival, half-orcs are natural adventurers drawn to the adventuring life as a means of escaping prejudice.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Menacing",
        description: "You gain proficiency in the Intimidation skill."
      },
      {
        name: "Relentless Endurance",
        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
      },
      {
        name: "Savage Attacks",
        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Relentless Endurance only works once per long rest",
      "Not tracking when Relentless Endurance has been used",
      "Thinking Savage Attacks doubles all damage dice (it only adds one extra weapon die)",
      "Not utilizing Intimidation proficiency for social encounters"
    ],
    dmTips: [
      "Half-orcs are exceptional barbarians, fighters, and paladins",
      "Relentless Endurance is a powerful survival tool that can turn the tide of battle",
      "Savage Attacks scales well with larger weapon damage dice (greatswords, greataxes)",
      "Their orcish heritage often leads to prejudice - use this for character development",
      "Consider themes of overcoming stereotypes and proving one's worth"
    ],
    faq: [
      {
        question: "What is the best class for Half-Orc in 5e?",
        answer: "Barbarians are ideal with +2 Strength, +1 Constitution, and Savage Attacks synergizing with Brutal Critical. Fighters and Paladins also excel. Relentless Endurance keeps you fighting when others would fall."
      },
      {
        question: "How does Half-Orc Savage Attacks work?",
        answer: "When you score a critical hit with a melee weapon, add one extra weapon damage die to the critical damage. A greatsword crit normally does 4d6 + Str; Half-Orcs deal 5d6 + Str. Stacks with Barbarian's Brutal Critical."
      },
      {
        question: "How does Relentless Endurance work?",
        answer: "When reduced to 0 HP but not killed outright, drop to 1 HP instead. Once per long rest. This triggers automatically when you would fall unconscious. It doesn't work against instant-death effects or massive damage kills."
      },
      {
        question: "Can Half-Orcs be good-aligned?",
        answer: "Absolutely. Half-Orcs can be any alignment. Many struggle against negative stereotypes and actively choose to be forces for good. Their heritage doesn't determine their morality - their choices do."
      },
      {
        question: "What weapon should Half-Orcs use?",
        answer: "Greataxes (1d12) maximize Savage Attacks by adding a d12 on crits. Greatswords (2d6) have higher average damage normally. For Barbarians stacking Brutal Critical, Greataxe's single large die becomes increasingly powerful."
      }
    ],
    searchVolume: 8900,
    aliases: ["half-orc-race-5e", "halforc-5e"]
  },
  {
    slug: "orc-5e",
    name: "Orc 5e",
    raceName: "Orc",
    category: "races",
    abilityScores: "+2 Strength, +1 Constitution",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Orc",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Orcs are savage raiders and pillagers with stooped postures, piggish faces, and prominent teeth. They are larger and bulkier than humans, standing 6 to 7 feet tall. In Eberron and other settings, orcs have rich cultures as noble warriors and spiritual leaders. Playable orcs in 5e represent those who have broken free from the influence of Gruumsh or come from more civilized orc tribes.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Adrenaline Rush",
        description: "You can take the Dash action as a bonus action. When you do so, you gain a number of temporary hit points equal to your proficiency bonus. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      },
      {
        name: "Powerful Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
      },
      {
        name: "Relentless Endurance",
        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once you use this trait, you can't use it again until you finish a long rest."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Adrenaline Rush grants temporary HP when used",
      "Not tracking the number of Adrenaline Rush uses (scales with proficiency bonus)",
      "Thinking Relentless Endurance can be used multiple times per day",
      "Not using Adrenaline Rush for tactical repositioning"
    ],
    dmTips: [
      "Orcs make excellent barbarians, fighters, and front-line warriors",
      "Adrenaline Rush provides both mobility and survivability",
      "The combination of Relentless Endurance and temporary HP makes them very durable",
      "Consider non-stereotypical orc characters that challenge expectations",
      "In Eberron, orcs have a rich druidic tradition and complex culture"
    ],
    faq: [
      {
        question: "What is the best class for Orc in 5e?",
        answer: "Barbarians and Fighters excel with +2 Strength, +1 Constitution. Adrenaline Rush's bonus action Dash with temp HP synergizes with aggressive melee builds. Paladins and any strength-based martial class work well."
      },
      {
        question: "What's the difference between Orc and Half-Orc?",
        answer: "Orcs get Adrenaline Rush (bonus action Dash + temp HP, scales with proficiency) and Powerful Build. Half-Orcs get Savage Attacks (extra crit damage) and Intimidation proficiency. Half-Orcs are crit-focused; Orcs are mobility-focused."
      },
      {
        question: "How does Orc Adrenaline Rush work?",
        answer: "As a bonus action, take the Dash action and gain temporary HP equal to your proficiency bonus. Uses equal proficiency bonus per long rest. Great for closing gaps or escaping while staying healthy."
      },
      {
        question: "Are Orcs always evil in 5e?",
        answer: "No. While classic D&D portrayed orcs as evil, modern 5e treats them as any other playable race. Eberron orcs have noble druidic traditions. Player characters can be any alignment regardless of ancestry."
      },
      {
        question: "Do Orcs have Relentless Endurance?",
        answer: "Yes! Monsters of the Multiverse Orcs have both Adrenaline Rush AND Relentless Endurance (drop to 1 HP instead of 0, once per long rest). This makes them very durable melee combatants."
      }
    ],
    searchVolume: 7800,
    aliases: ["orc-race-5e", "dnd-orc"]
  },
  {
    slug: "tortle-5e",
    name: "Tortle 5e",
    raceName: "Tortle",
    category: "races",
    abilityScores: "+2 Strength, +1 Wisdom",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Aquan",
    source: "The Tortle Package / Monsters of the Multiverse",
    description: "Tortles are humanoid tortoises native to warm coastal regions. They have natural shells that provide excellent protection, and they are surprisingly strong despite their peaceful demeanor. Most tortles live simple lives as fishers, farmers, and rangers, but some are driven by wanderlust to explore the world. Tortles mature quickly, reaching adulthood by age 15, but can live up to 50 years.",
    traits: [
      {
        name: "Claws",
        description: "Your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike."
      },
      {
        name: "Hold Breath",
        description: "You can hold your breath for up to 1 hour at a time."
      },
      {
        name: "Natural Armor",
        description: "Your shell provides ample protection. When you aren't wearing armor, your AC is 17. You gain no benefit from wearing armor, but if you are using a shield, you can apply the shield's bonus as normal."
      },
      {
        name: "Nature's Intuition",
        description: "You gain proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, Perception, Stealth, or Survival."
      },
      {
        name: "Shell Defense",
        description: "You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and can't increase, you have disadvantage on Dexterity saving throws, you can't take reactions, and the only action you can take is a bonus action to emerge from your shell."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Thinking Natural Armor can stack with worn armor (it cannot)",
      "Not using Shell Defense as an emergency survival tool",
      "Forgetting you're prone while in your shell",
      "Not choosing a skill proficiency for Nature's Intuition"
    ],
    dmTips: [
      "Tortles have an excellent base AC of 17, making them great for monks, barbarians, and druids",
      "Shell Defense is a powerful last-resort defensive option",
      "Their hold breath ability makes them natural aquatic explorers",
      "Tortles' peaceful nature and wanderlust create interesting character motivations",
      "The natural armor means they don't need to invest in armor proficiencies or equipment"
    ],
    faq: [
      {
        question: "What is the best class for Tortle in 5e?",
        answer: "Druids are ideal - 17 AC in Wild Shape! Monks and Barbarians work well since their Unarmored Defense typically can't match 17 AC until high levels. Clerics and any class that doesn't need Dexterity for AC benefits greatly."
      },
      {
        question: "How does Tortle Natural Armor work?",
        answer: "Your AC is 17, period. Doesn't matter what your Dexterity is. You CAN use a shield for 19 AC total. You CANNOT benefit from wearing armor (but why would you?). This lets you dump Dexterity without sacrificing defense."
      },
      {
        question: "Can Tortles wear armor?",
        answer: "Technically yes, but you gain no benefit. Your natural armor of 17 AC replaces any worn armor's AC calculation. Shields still work normally (+2 AC). Magical armor properties that don't affect AC calculation may still apply."
      },
      {
        question: "How does Shell Defense work?",
        answer: "As an action, withdraw into your shell for +4 AC (21 or 23 with shield!), advantage on Str/Con saves. You're prone, can't move, have disadvantage on Dex saves, can't take reactions. Bonus action to emerge. Emergency survival option."
      },
      {
        question: "How long can Tortles hold their breath?",
        answer: "One hour. This is ten times longer than the normal 1 + Con modifier minutes. Excellent for underwater exploration, surviving gas attacks, or operating in environments without air."
      }
    ],
    searchVolume: 13400,
    aliases: ["tortle-race-5e", "turtle-5e"]
  },
  {
    slug: "yuan-ti-pureblood-5e",
    name: "Yuan-Ti Pureblood 5e",
    raceName: "Yuan-Ti Pureblood",
    category: "races",
    abilityScores: "+2 Charisma, +1 Intelligence",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Abyssal, Draconic",
    source: "Volo's Guide to Monsters",
    description: "Yuan-ti purebloods are the most human-appearing of the yuan-ti, a race of serpentine humanoids. They can pass for human with minimal effort, though they often have forked tongues, snake eyes, patches of scales, or a faintly reptilian scent. Yuan-ti are cunning manipulators who view other races as tools or food. Pureblood adventurers often infiltrate human society or seek to break free from their cruel heritage.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Magic Resistance",
        description: "You have advantage on saving throws against spells and other magical effects."
      },
      {
        name: "Poison Immunity",
        description: "You are immune to poison damage and the poisoned condition."
      },
      {
        name: "Innate Spellcasting",
        description: "You know the Poison Spray cantrip. You can cast Animal Friendship an unlimited number of times with this trait, but you can target only snakes with it. Starting at 3rd level, you can cast Suggestion once with this trait. You regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Magic Resistance applies to all magical effects, not just spells",
      "Not using Animal Friendship to recruit snake allies",
      "Forgetting Suggestion becomes available at 3rd level",
      "Overlooking how powerful poison immunity is against certain enemies"
    ],
    dmTips: [
      "Yuan-ti purebloods are exceptionally powerful due to Magic Resistance",
      "They make excellent sorcerers, warlocks, and bards",
      "Poison immunity is very strong in campaigns with poison-using enemies",
      "Consider the moral implications of playing a creature from an evil society",
      "Suggestion is a powerful control spell - be prepared for creative uses",
      "Their infiltration abilities create interesting espionage opportunities"
    ],
    faq: [
      {
        question: "Why are Yuan-Ti Purebloods considered overpowered?",
        answer: "Magic Resistance (advantage on ALL saves vs magic) is arguably the strongest racial trait in 5e. Combined with poison immunity and free Suggestion at 3rd level, they have no weaknesses. Many DMs ban or restrict them."
      },
      {
        question: "What is the best class for Yuan-Ti Pureblood?",
        answer: "Warlocks, Sorcerers, and Bards benefit from +2 Charisma for spellcasting. Paladins gain excellent saves plus Magic Resistance. Rogues can use Suggestion for infiltration. Any class benefits from Magic Resistance."
      },
      {
        question: "How does Yuan-Ti Magic Resistance work?",
        answer: "You have advantage on saving throws against spells AND other magical effects. This includes breath weapons, magical traps, and abilities that count as magical. It's the broadest resistance in the game."
      },
      {
        question: "Are Yuan-Ti always evil?",
        answer: "Traditionally yuan-ti society is evil and xenophobic, but player characters can be any alignment. Many yuan-ti purebloods adventure after rejecting their society's cruelty or seeking to understand other races."
      },
      {
        question: "Can Yuan-Ti use Suggestion on anyone?",
        answer: "Yes. Unlike Animal Friendship (snakes only), Suggestion works on any creature that can understand you. Once per long rest starting at 3rd level. A powerful social tool with many creative applications."
      }
    ],
    searchVolume: 10200,
    aliases: ["yuan-ti-5e", "yuanti-pureblood"]
  },
  {
    slug: "satyr-5e",
    name: "Satyr 5e",
    raceName: "Satyr",
    category: "races",
    abilityScores: "+2 Charisma, +1 Dexterity",
    size: "Medium",
    speed: "35 ft.",
    languages: "Common, Sylvan",
    source: "Mythic Odysseys of Theros / Monsters of the Multiverse",
    description: "Satyrs are fey creatures from the Feywild with the upper body of a humanoid and the legs and horns of a goat. They are known for their love of revelry, music, and mischief. Satyrs embody freedom and joy, living in the moment and encouraging others to cast aside their worries. They are skilled musicians and performers who delight in bringing laughter and celebration wherever they go.",
    traits: [
      {
        name: "Ram",
        description: "You can use your head and horns to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d6 + your Strength modifier."
      },
      {
        name: "Magic Resistance",
        description: "You have advantage on saving throws against spells and other magical effects."
      },
      {
        name: "Mirthful Leaps",
        description: "Whenever you make a long jump or a high jump, you can roll a d8 and add the number rolled to the number of feet you cover, even when making a standing jump. This extra distance costs movement as normal."
      },
      {
        name: "Reveler",
        description: "You have proficiency in the Performance and Persuasion skills, and you have proficiency with one musical instrument of your choice."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Magic Resistance applies to all spells and magical effects",
      "Not using Mirthful Leaps for tactical positioning or exploration",
      "Forgetting to choose a musical instrument proficiency",
      "Not leveraging the increased 35-foot movement speed"
    ],
    dmTips: [
      "Satyrs make excellent bards, warlocks, and rogues",
      "Magic Resistance is incredibly powerful - one of the best racial traits",
      "Their fey nature and love of revelry create interesting roleplay opportunities",
      "The extra movement speed and jumping ability makes them mobile skirmishers",
      "Consider how their carefree attitude contrasts with serious party members",
      "They work well in Feywild-themed campaigns or as outsiders in mortal lands"
    ],
    faq: [
      {
        question: "Why are Satyrs considered strong in 5e?",
        answer: "Magic Resistance (advantage on all magic saves) is one of the best racial traits. Plus 35-foot speed, free Persuasion and Performance, and they count as Fey (not humanoid), making them immune to many spells like Hold Person."
      },
      {
        question: "What is the best class for Satyr in 5e?",
        answer: "Bards are perfect with +2 Charisma, free Performance/Persuasion, and instrument proficiency. Warlocks and Sorcerers benefit from Charisma and Magic Resistance. Rogues work well with +1 Dexterity and extra speed."
      },
      {
        question: "Are Satyrs considered Fey?",
        answer: "Yes! Satyrs are Fey creatures, not humanoids. This makes them immune to spells that specifically target humanoids (Hold Person, Charm Person, Crown of Madness, etc.). A significant defensive advantage."
      },
      {
        question: "How does Mirthful Leaps work?",
        answer: "Add 1d8 feet to any long or high jump, even from standing. This uses movement as normal but lets you clear larger gaps. Great for reaching ledges, crossing chasms, or tactical positioning."
      },
      {
        question: "Do Satyrs have Magic Resistance?",
        answer: "Yes. Satyrs have advantage on saving throws against spells and other magical effects. This is identical to Yuan-Ti Magic Resistance and is one of the most powerful racial traits available."
      }
    ],
    searchVolume: 8100,
    aliases: ["satyr-race-5e", "dnd-satyr"]
  },
  {
    slug: "harengon-5e",
    name: "Harengon 5e",
    raceName: "Harengon",
    category: "races",
    abilityScores: "+2 to one ability score, +1 to another",
    size: "Medium or Small",
    speed: "30 ft.",
    languages: "Common, one other of your choice",
    source: "The Wild Beyond the Witchlight",
    description: "Harengon are humanoid rabbits that originated in the Feywild. They are blessed with supernatural luck and have an uncanny knack for escaping danger. Harengon are joyful, energetic, and quick-witted, with powerful legs built for leaping. Their connection to the Feywild gives them a mercurial temperament and a love of freedom. Harengon adventurers are driven by curiosity and a desire to see what lies around the next corner.",
    traits: [
      {
        name: "Hare-Trigger",
        description: "You can add your proficiency bonus to your initiative rolls."
      },
      {
        name: "Leporine Senses",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Lucky Footwork",
        description: "When you fail a Dexterity saving throw, you can use your reaction to roll a d4 and add it to the save, potentially turning the failure into a success. You can't use this reaction if you're prone or your speed is 0."
      },
      {
        name: "Rabbit Hop",
        description: "As a bonus action, you can jump a number of feet equal to five times your proficiency bonus, without provoking opportunity attacks. You can use this trait only if your speed is greater than 0. You can use it a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting to add proficiency bonus to initiative",
      "Not using Lucky Footwork to avoid fireballs and other Dexterity saves",
      "Forgetting Rabbit Hop doesn't provoke opportunity attacks",
      "Not tracking the number of Rabbit Hop uses (scales with proficiency bonus)"
    ],
    dmTips: [
      "Harengon's initiative bonus makes them excellent for going first in combat",
      "Rabbit Hop provides exceptional mobility without provoking attacks",
      "Lucky Footwork is great for avoiding area-of-effect spells",
      "Their fey origins work well in Feywild or whimsical campaigns",
      "Consider their energetic, curious nature in roleplay",
      "The combination of mobility and lucky saves makes them excellent scouts"
    ],
    faq: [
      {
        question: "What is the best class for Harengon in 5e?",
        answer: "Any class benefits from flexible ability scores. Rogues love the initiative bonus for Sneak Attack priority. Rangers and Fighters benefit from going first. Rabbit Hop synergizes with mobile builds."
      },
      {
        question: "How does Hare-Trigger work?",
        answer: "Add your proficiency bonus to all initiative rolls. At level 1 that's +2, scaling to +6 at high levels. This is always-on, no resource cost, making Harengon consistently fast to act in combat."
      },
      {
        question: "How does Rabbit Hop work?",
        answer: "As a bonus action, jump up to 5x your proficiency bonus in feet (10-30 feet). This jump doesn't provoke opportunity attacks. Uses equal to proficiency bonus per long rest. Great for repositioning safely."
      },
      {
        question: "How does Lucky Footwork work?",
        answer: "When you fail a Dexterity save, use your reaction to add 1d4 to the roll. Can turn failures into successes. Doesn't work while prone or at 0 speed. Excellent against Fireballs and similar effects."
      },
      {
        question: "Are Harengon Fey?",
        answer: "No. Despite originating from the Feywild, Harengon are Humanoids, not Fey creatures. They don't have the Fey type immunity to spells like Hold Person that Satyrs have."
      }
    ],
    searchVolume: 9500,
    aliases: ["harengon-race-5e", "rabbit-folk-5e"]
  },
  {
    slug: "owlin-5e",
    name: "Owlin 5e",
    raceName: "Owlin",
    category: "races",
    abilityScores: "+2 to one ability score, +1 to another",
    size: "Medium or Small",
    speed: "30 ft.",
    languages: "Common, one other of your choice",
    source: "Strixhaven: A Curriculum of Chaos",
    description: "Owlin are humanoid owls with keen senses and silent flight. They are naturally inquisitive and wise, with a love of learning and knowledge. Owlin have feathered bodies, taloned hands, and large, expressive eyes. Their connection to the night gives them excellent vision in darkness. Owlin are often scholars, sages, or guardians of ancient knowledge.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Flight",
        description: "Thanks to your wings, you have a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor."
      },
      {
        name: "Silent Feathers",
        description: "You have proficiency in the Stealth skill."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting flight doesn't work in medium or heavy armor",
      "Not utilizing the superior 120-foot darkvision",
      "Forgetting to use Stealth proficiency for silent flight approaches",
      "Not leveraging flight for exploration and combat positioning"
    ],
    dmTips: [
      "Owlin's flight is extremely powerful - be prepared to design encounters that challenge it",
      "The 120-foot darkvision is superior to most other races",
      "They make excellent scouts, spellcasters, and ranged attackers",
      "Their scholarly nature works well for wizard, cleric, or druid characters",
      "Consider vertical dungeon design to make their flight more interesting",
      "Silent flight combined with Stealth makes them exceptional infiltrators"
    ],
    faq: [
      {
        question: "What is the best class for Owlin in 5e?",
        answer: "Wizards, Sorcerers, and Warlocks can rain spells from above with safety. Rogues combine flight with Stealth for perfect assassination setups. Rangers get excellent scouting ability. Any ranged class benefits enormously."
      },
      {
        question: "Can Owlins fly in armor?",
        answer: "Only in light armor. Flight doesn't work in medium or heavy armor. This pushes Owlin toward Dexterity builds, light armor classes, or Unarmored Defense options like Monk or Barbarian."
      },
      {
        question: "How good is 120-foot darkvision?",
        answer: "Twice as good as standard 60-foot darkvision. You can see enemies before they see you, excellent for scouting. Combined with flight and Stealth proficiency, Owlin are the ultimate scouts."
      },
      {
        question: "Is Owlin flight permanent?",
        answer: "Yes, with the armor restriction. Your flying speed equals your walking speed (30 feet base). No daily uses or duration limits. You can fly all day every day as long as you're in light or no armor."
      },
      {
        question: "Are Owlin overpowered?",
        answer: "Many consider unrestricted flight powerful. It trivializes some encounters and exploration challenges. DMs should design encounters accounting for flight. The medium/heavy armor restriction balances it somewhat."
      }
    ],
    searchVolume: 7200,
    aliases: ["owlin-race-5e", "owl-folk-5e"]
  },
  {
    slug: "minotaur-5e",
    name: "Minotaur 5e",
    raceName: "Minotaur",
    category: "races",
    abilityScores: "+2 Strength, +1 Constitution",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common, Minotaur",
    source: "Guildmasters' Guide to Ravnica / Monsters of the Multiverse",
    description: "Minotaurs are powerful humanoids with the head and horns of a bull. They stand over 6 feet tall with muscular builds. Minotaurs are natural warriors who value strength and honor. In Ravnica, they are members of various guilds, particularly the Boros Legion and Gruul Clans. Minotaurs have an innate sense of direction and never get lost, making them excellent guides and explorers.",
    traits: [
      {
        name: "Horns",
        description: "Your horns are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier."
      },
      {
        name: "Goring Rush",
        description: "Immediately after you take the Dash action on your turn and move at least 20 feet, you can make one melee attack with your Horns as a bonus action."
      },
      {
        name: "Hammering Horns",
        description: "Immediately after you hit a creature with a melee attack as part of the Attack action on your turn, you can use a bonus action to attempt to push that target with your horns. The target must be no more than one size larger than you and within 5 feet of you. It must make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Strength modifier. If it fails, you push it up to 10 feet away from you."
      },
      {
        name: "Labyrinthine Recall",
        description: "You always know which direction is north, and you have advantage on any Wisdom (Survival) check you make to navigate or track."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Goring Rush requires both the Dash action and 20 feet of movement",
      "Not using Hammering Horns for battlefield control",
      "Thinking both Goring Rush and Hammering Horns can be used on the same turn (they both use bonus actions)",
      "Not leveraging Labyrinthine Recall for exploration"
    ],
    dmTips: [
      "Minotaurs make excellent barbarians, fighters, and paladins",
      "Goring Rush and Hammering Horns provide excellent mobility and control",
      "Their natural weapons are useful when disarmed",
      "Labyrinthine Recall makes them invaluable in maze-like dungeons",
      "Consider themes of honor, strength, and overcoming bestial stereotypes",
      "They work well in Ravnica or any setting with monstrous playable races"
    ],
    faq: [
      {
        question: "What is the best class for Minotaur in 5e?",
        answer: "Barbarians and Fighters maximize +2 Strength. Goring Rush synergizes with aggressive combat styles. Paladins benefit from the Constitution and have extra attack. Any martial class works excellently."
      },
      {
        question: "How does Goring Rush work?",
        answer: "After taking the Dash action and moving at least 20 feet toward a target, you can make a bonus action horn attack (1d6 + Str). Requires both Dash AND 20 feet of movement. Great for closing distance and dealing damage."
      },
      {
        question: "How does Hammering Horns work?",
        answer: "After hitting with a melee attack, bonus action to force a Strength save (8 + Prof + Str). On failure, push the target up to 10 feet. Target must be within one size of you. Excellent battlefield control."
      },
      {
        question: "Can I use both Goring Rush and Hammering Horns?",
        answer: "Not on the same turn - both require your bonus action. Choose based on situation: Goring Rush when closing distance, Hammering Horns when you need to push enemies (off cliffs, into hazards, away from allies)."
      },
      {
        question: "Do Minotaurs get lost?",
        answer: "Never! Labyrinthine Recall means you always know which way is north and have advantage on Survival checks to navigate or track. Immune to maze-based puzzles and traps. True to their mythological connection to labyrinths."
      }
    ],
    searchVolume: 11900,
    aliases: ["minotaur-race-5e", "dnd-minotaur"]
  },
  {
    slug: "centaur-5e",
    name: "Centaur 5e",
    raceName: "Centaur",
    category: "races",
    abilityScores: "+2 Strength, +1 Wisdom",
    size: "Medium",
    speed: "40 ft.",
    languages: "Common, Sylvan",
    source: "Guildmasters' Guide to Ravnica / Monsters of the Multiverse",
    description: "Centaurs are half-human, half-horse creatures with the upper body of a humanoid and the lower body of a horse. They are nomadic warriors and hunters who roam open plains and forests. Centaurs value freedom, nature, and physical prowess. Their equine bodies give them exceptional speed and power. In Ravnica, they are primarily members of the Selesnya Conclave and Gruul Clans.",
    traits: [
      {
        name: "Charge",
        description: "If you move at least 30 feet straight toward a target and then hit it with a melee weapon attack on the same turn, you can immediately follow that attack with a bonus action, making one attack against the target with your hooves."
      },
      {
        name: "Hooves",
        description: "Your hooves are natural melee weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d6 + your Strength modifier."
      },
      {
        name: "Equine Build",
        description: "You count as one size larger when determining your carrying capacity and the weight you can push or drag. In addition, any climb that requires hands and feet is especially difficult for you because of your equine legs. When you make such a climb, each foot of movement costs you 4 extra feet, instead of the normal 1 extra foot. Finally, a Medium or smaller creature can ride on your equine back if you allow it. In such a situation, you continue to act independently, not as a controlled mount."
      },
      {
        name: "Survivor",
        description: "You have proficiency in one of the following skills of your choice: Animal Handling, Medicine, Nature, or Survival."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Charge requires 30 feet of straight movement toward the target",
      "Not using the natural hooves attack for bonus damage",
      "Thinking Equine Build allows you to be a controlled mount (you act independently)",
      "Not accounting for the climbing penalty",
      "Forgetting to choose a skill proficiency for Survivor"
    ],
    dmTips: [
      "Centaurs have the fastest base speed of common player races at 40 feet",
      "They make excellent barbarians, fighters, rangers, and druids",
      "Charge provides bonus damage on aggressive charges",
      "The ability to carry allies creates interesting tactical options",
      "Their equine nature creates challenges with stairs, ladders, and tight spaces",
      "Consider how their size and build affects dungeon exploration and social situations"
    ],
    faq: [
      {
        question: "What is the best class for Centaur in 5e?",
        answer: "Cavaliers (Fighter) are perfect thematically. Barbarians and Paladins maximize +2 Strength. Druids benefit from +1 Wisdom and nature connection. Rangers excel as mobile skirmishers with 40-foot speed."
      },
      {
        question: "How fast are Centaurs?",
        answer: "40 feet base speed - the fastest common player race. With Dash, that's 80 feet per turn. Combined with Charge for bonus damage, Centaurs are devastating mobile strikers."
      },
      {
        question: "Can Centaurs climb ladders?",
        answer: "Poorly. Equine Build means climbing that requires hands and feet costs 4 extra feet per foot climbed. A 10-foot ladder costs 50 feet of movement. Centaurs struggle with vertical obstacles."
      },
      {
        question: "Can other players ride a Centaur?",
        answer: "Yes, if you allow it. Medium or smaller creatures can ride your equine back. You act independently, not as a controlled mount. The rider can attack but you choose your own movement and actions."
      },
      {
        question: "How does Centaur Charge work?",
        answer: "Move at least 30 feet straight toward a target, then hit with a melee weapon attack. You can then make a bonus action hoof attack (1d6 + Str). Requires straight-line movement toward the specific target."
      }
    ],
    searchVolume: 9300,
    aliases: ["centaur-race-5e", "dnd-centaur"]
  },
  {
    slug: "triton-5e",
    name: "Triton 5e",
    raceName: "Triton",
    category: "races",
    abilityScores: "+1 Strength, +1 Constitution, +1 Charisma",
    size: "Medium",
    speed: "30 ft., swim 30 ft.",
    languages: "Common, Primordial",
    source: "Volo's Guide to Monsters / Monsters of the Multiverse",
    description: "Tritons are aquatic humanoids native to the Elemental Plane of Water who guard the ocean depths from evil. They have blue-green skin, fins, and webbed hands and feet. Tritons are guardians and protectors who view themselves as caretakers of the sea. They are proud, sometimes arrogant, and believe it is their duty to protect the surface world from the horrors of the deep.",
    traits: [
      {
        name: "Amphibious",
        description: "You can breathe air and water."
      },
      {
        name: "Control Air and Water",
        description: "You can cast Fog Cloud with this trait. Starting at 3rd level, you can cast Gust of Wind with it, and starting at 5th level, you can also cast Wall of Water with it. Once you cast any of these spells with this trait, you can't cast that spell with it again until you finish a long rest. You can also cast these spells using any spell slots you have of the appropriate level. Charisma is your spellcasting ability for these spells."
      },
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light and in darkness as if it were dim light."
      },
      {
        name: "Emissary of the Sea",
        description: "You can communicate simple ideas to any Beast, Elemental, or Monstrosity that has a swimming speed. It can understand your words, though you have no special ability to understand it in return."
      },
      {
        name: "Guardians of the Depths",
        description: "You have resistance to cold damage, and you ignore any of the drawbacks caused by a deep, underwater environment."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting tritons can breathe both air and water (fully amphibious)",
      "Not tracking the level requirements for Control Air and Water spells",
      "Thinking Emissary of the Sea allows full conversation (only simple ideas)",
      "Not leveraging cold resistance in appropriate environments",
      "Forgetting they ignore underwater combat penalties and pressure"
    ],
    dmTips: [
      "Tritons excel in aquatic campaigns and coastal adventures",
      "They make great paladins, fighters, and clerics",
      "Their guardianship mentality creates interesting roleplay as protectors",
      "Control Air and Water provides excellent utility spells",
      "Emissary of the Sea helps with aquatic creatures and elementals",
      "Consider their pride and duty as sources of character motivation",
      "Guardians of the Depths makes them immune to underwater hazards"
    ],
    faq: [
      {
        question: "What is the best class for Triton in 5e?",
        answer: "Paladins benefit from +1 to Strength, Constitution, AND Charisma. Fighters and Barbarians use the physical stats well. Warlocks and Sorcerers can utilize Charisma for Control Air and Water spells."
      },
      {
        question: "Can Tritons breathe underwater?",
        answer: "Yes! Tritons are fully amphibious - they can breathe both air and water indefinitely. They also have a 30-foot swim speed and ignore underwater pressure/depth penalties with Guardians of the Depths."
      },
      {
        question: "How does Emissary of the Sea work?",
        answer: "You can communicate simple ideas to any Beast, Elemental, or Monstrosity with a swim speed. They understand you, but you don't automatically understand them. Useful for aquatic diplomacy and avoiding combat."
      },
      {
        question: "What spells do Tritons get?",
        answer: "Fog Cloud at 1st level, Gust of Wind at 3rd, Wall of Water at 5th. Each once per long rest OR using appropriate spell slots. Charisma is your spellcasting ability. Useful utility and control options."
      },
      {
        question: "Are Tritons arrogant?",
        answer: "Stereotypically, yes. Triton culture sees themselves as noble guardians protecting surface-dwellers from deep-sea horrors. They may seem proud or condescending initially, but this is often played for character growth."
      }
    ],
    searchVolume: 8500,
    aliases: ["triton-race-5e", "dnd-triton"]
  },
  {
    slug: "shifter-5e",
    name: "Shifter 5e",
    raceName: "Shifter",
    category: "races",
    abilityScores: "+2 Dexterity, +1 varies by subrace",
    size: "Medium",
    speed: "30 ft.",
    languages: "Common",
    source: "Eberron: Rising from the Last War",
    description: "Shifters are descended from humans and lycanthropes, bearing a bestial aspect that they can temporarily enhance. They have elongated canines, pointed ears, and subtle animalistic features. Shifters can shift to enhance their physical abilities, taking on more pronounced bestial traits. They are passionate and quick to anger, but also fiercely loyal. Different shifter subraces reflect different lycanthropic ancestries.",
    traits: [
      {
        name: "Darkvision",
        description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light."
      },
      {
        name: "Keen Senses",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Shifting",
        description: "As a bonus action, you can assume a more bestial appearance. This transformation lasts for 1 minute, until you die, or until you revert to your normal appearance as a bonus action. When you shift, you gain temporary hit points equal to 2 times your proficiency bonus. You can shift a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. Whenever you shift, you gain additional benefits based on your shifter subrace."
      }
    ],
    subraces: [
      {
        name: "Beasthide Shifter",
        bonus: "+1 Constitution. While shifting, you gain a +1 bonus to AC and can use your reaction to reduce damage you take by 1d6."
      },
      {
        name: "Longtooth Shifter",
        bonus: "+1 Strength. While shifting, you can use your elongated fangs to make unarmed strikes as a bonus action. If you hit, you deal 1d6 + Strength modifier piercing damage."
      },
      {
        name: "Swiftstride Shifter",
        bonus: "+1 Charisma. While shifting, your walking speed increases by 10 feet, and you can move up to 10 feet as a reaction when a creature ends its turn within 5 feet of you."
      },
      {
        name: "Wildhunt Shifter",
        bonus: "+1 Wisdom. While shifting, you have advantage on Wisdom checks and no creature within 30 feet can make an attack roll with advantage against you unless you're incapacitated."
      }
    ],
    commonMistakes: [
      "Forgetting Shifting lasts for 1 minute (10 rounds of combat)",
      "Not tracking the number of shifts available (scales with proficiency bonus)",
      "Forgetting to gain temporary HP when shifting",
      "Not utilizing subrace-specific shifting benefits effectively",
      "Thinking shifting is a permanent transformation"
    ],
    dmTips: [
      "Shifters work best in Eberron but can fit other settings with lycanthropy",
      "Each subrace suits different playstyles - Beasthide for tanks, Longtooth for melee damage, Swiftstride for mobility, Wildhunt for scouts",
      "Shifting provides a powerful combat boost a few times per day",
      "Their lycanthropic heritage creates interesting roleplay about control and instinct",
      "Consider prejudice against shifters due to their lycanthropic connection",
      "Temporary HP from shifting helps survive dangerous encounters"
    ],
    faq: [
      {
        question: "What is the best class for Shifter in 5e?",
        answer: "Depends on subrace: Beasthide for Barbarians/Fighters (tank), Longtooth for Monks/Barbarians (damage), Swiftstride for Rogues/Rangers (mobility), Wildhunt for Druids/Rangers (scout/support). All get +2 Dex."
      },
      {
        question: "How long does Shifting last?",
        answer: "1 minute (10 rounds of combat), until you die, or until you use a bonus action to revert. You can shift a number of times equal to your proficiency bonus per long rest. Each shift grants temporary HP."
      },
      {
        question: "Which Shifter subrace is best?",
        answer: "Wildhunt is arguably strongest - negating advantage on attacks against you is extremely powerful defensively. Longtooth provides consistent bonus action damage. Beasthide is the tankiest. Swiftstride offers best mobility."
      },
      {
        question: "Are Shifters immune to lycanthropy?",
        answer: "No. Despite descending from lycanthropes, Shifters can still contract lycanthropy. However, their heritage might influence how a DM handles this narratively. Some DMs give advantage on saves against lycanthropy."
      },
      {
        question: "How does Wildhunt Shifter's ability work?",
        answer: "While shifted, no creature within 30 feet can have advantage on attack rolls against you (unless you're incapacitated). This negates Pack Tactics, flanking, attacking from invisibility, and many monster abilities."
      }
    ],
    searchVolume: 8900,
    aliases: ["shifter-race-5e", "dnd-shifter"]
  },
  {
    slug: "grung-5e",
    name: "Grung 5e",
    raceName: "Grung",
    category: "races",
    abilityScores: "+2 Dexterity, +1 Constitution",
    size: "Small",
    speed: "25 ft., climb 25 ft.",
    languages: "Grung",
    source: "One Grung Above",
    description: "Grungs are poisonous frog-like amphibious humanoids that live in trees in tropical rainforests. They are territorial, hierarchical, and organized by caste based on skin color. Grungs secrete poison through their skin, making them dangerous to touch. They are excellent climbers and can leap great distances. Most grung societies are insular and hostile to outsiders, but adventuring grungs have left their tribes to explore the world.",
    traits: [
      {
        name: "Arboreal Alertness",
        description: "You have proficiency in the Perception skill."
      },
      {
        name: "Standing Leap",
        description: "Your long jump is up to 25 feet and your high jump is up to 15 feet, with or without a running start."
      },
      {
        name: "Water Dependency",
        description: "If you fail to immerse yourself in water for at least 1 hour during a day, you suffer one level of exhaustion at the end of that day. You can recover from this exhaustion only through magic or by immersing yourself in water for at least 1 hour."
      },
      {
        name: "Poisonous Skin",
        description: "Any creature that grapples you or otherwise comes into direct contact with your skin must succeed on a DC 12 Constitution saving throw or become poisoned for 1 minute. A poisoned creature no longer in direct contact with you can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can also apply this poison to any piercing weapon as part of an attack with that weapon, though when you hit, the poison replicates the effects of a successful application of the weapon's original poison."
      }
    ],
    subraces: null,
    commonMistakes: [
      "Forgetting Water Dependency requires daily immersion (can be deadly in deserts)",
      "Not using Standing Leap for tactical positioning",
      "Forgetting Poisonous Skin affects creatures that grapple you",
      "Not applying poison to weapons in combat",
      "Overlooking the challenges of being Small size"
    ],
    dmTips: [
      "Grungs are challenging to play due to Water Dependency - ensure water is accessible",
      "Their poisonous skin makes them dangerous grapplers",
      "Standing Leap provides excellent mobility in vertical terrain",
      "They make great monks, rogues, and rangers",
      "Consider how their need for water affects adventure planning",
      "Their tribal, caste-based society creates interesting backstory options",
      "The poison DC doesn't scale, so it becomes less effective at higher levels"
    ],
    faq: [
      {
        question: "What is the best class for Grung in 5e?",
        answer: "Monk is excellent - Dex/Con bonuses align perfectly, unarmed strikes can deliver poison, and mobility complements Standing Leap. Rogue works well for stealth/mobility. Ranger fits thematically. Fighter or ranged builds also benefit from the Dex bonus."
      },
      {
        question: "How does Grung Water Dependency work?",
        answer: "You must immerse yourself in water for at least 1 hour each day or gain one level of exhaustion at day's end. This exhaustion can ONLY be removed by magic or another hour of water immersion - regular long rests won't help. Plan water access carefully."
      },
      {
        question: "Can I poison my weapons as a Grung?",
        answer: "Yes! As part of an attack with a piercing weapon, you can apply your Poisonous Skin poison to it. On a hit, the target must make a DC 12 Con save or be poisoned for 1 minute. This makes crossbows, bows, and rapiers particularly effective."
      },
      {
        question: "How does Standing Leap work for Grungs?",
        answer: "You can long jump up to 25 feet and high jump up to 15 feet without needing a running start. This is exceptional mobility - you can leap over enemies, reach elevated positions, and escape danger easily. Great for hit-and-run tactics."
      },
      {
        question: "Are Grungs official D&D content?",
        answer: "Grungs come from 'One Grung Above,' a charity supplement for Extra Life. They're considered official content but may require DM approval since they're not in the core books. Their Water Dependency makes them challenging to play in certain campaigns."
      }
    ],
    searchVolume: 6800,
    aliases: ["grung-race-5e", "frog-folk-5e"]
  }
];

export const raceOverviews: RaceOverviewPage[] = [
  {
    slug: "dnd-5e-races",
    name: "D&D 5e Races",
    category: "races",
    description: "A comprehensive guide to all playable races in Dungeons & Dragons 5th Edition. This overview covers the diverse options available to players, from classic races like humans, elves, and dwarves to exotic choices like aasimar, warforged, and hadozee. Understanding racial traits, ability score bonuses, and special features is crucial for character creation and optimization.",
    sections: [
      {
        id: "choosing-a-race",
        title: "Choosing a Race",
        content: "Your choice of race is one of the most important decisions in character creation. Races provide ability score increases, special traits, proficiencies, and sometimes spells. Consider your desired class, playstyle, and character concept. Some races excel in specific roles (like mountain dwarves for fighters or high elves for wizards), while others offer versatility. Don't feel constrained by stereotypes - any race can play any class effectively in 5e."
      },
      {
        id: "core-races",
        title: "Core Races",
        content: "The Player's Handbook includes nine core races: humans, elves (including high elves, wood elves, and drow), dwarves (hill and mountain), halflings (lightfoot and stout), dragonborn, gnomes (forest and rock), half-elves, half-orcs, and tieflings. These races are universally available and form the foundation of most D&D worlds. They're well-balanced, thoroughly playtested, and work in any campaign setting."
      },
      {
        id: "expanded-races",
        title: "Expanded Races",
        content: "Beyond the core races, supplements like Volo's Guide to Monsters, Xanathar's Guide to Everything, Mordenkainen's Tome of Foes, and Tasha's Cauldron of Everything introduce dozens of additional options. These include monstrous races (like goblinoids and kobolds), planar-touched beings (aasimar, genasi), and unique options like warforged and changelings. Always check with your DM about which races are allowed in your campaign."
      },
      {
        id: "racial-traits",
        title: "Understanding Racial Traits",
        content: "Racial traits include ability score increases, size, speed, languages, darkvision, resistances, and special abilities. Ability scores are crucial for class effectiveness. Speed affects mobility in combat. Darkvision is useful in dungeons. Resistances protect against common damage types. Special abilities like lucky (halfling), relentless endurance (half-orc), or fey step (eladrin) provide unique tactical options. Consider how these traits synergize with your class features."
      },
      {
        id: "tashas-custom-origins",
        title: "Tasha's Custom Origins",
        content: "Tasha's Cauldron of Everything introduced optional rules for customizing your origin. These rules allow you to: move ability score increases to different abilities, replace racial skill proficiencies, replace weapon/armor/tool proficiencies, and replace languages. This flexibility lets you play any race/class combination effectively without sacrificing optimization. Discuss with your DM whether these optional rules are available in your game."
      },
      {
        id: "monsters-of-the-multiverse",
        title: "Monsters of the Multiverse Updates",
        content: "Mordenkainen Presents: Monsters of the Multiverse updated many races with new mechanics. Changes include: ability score increases moved to +2/+1 or +1/+1/+1 (player choice), streamlined traits, removal of problematic features, and scaling abilities based on proficiency bonus. These versions are generally more flexible and balanced. If playing an updated race, use the Monsters of the Multiverse version unless your DM specifies otherwise."
      },
      {
        id: "race-and-roleplay",
        title: "Race and Roleplay",
        content: "Your character's race influences but doesn't define their personality. Consider cultural background, life experiences, and personal choices. A drow raised on the surface differs greatly from one raised in the Underdark. A warforged grappling with sentience has a unique perspective. Use racial traits as inspiration for character development, not constraints. Subvert stereotypes, explore tensions between heritage and identity, and create memorable, three-dimensional characters."
      },
      {
        id: "optimization-tips",
        title: "Race Selection for Optimization",
        content: "For optimization: match ability score increases to your primary and secondary stats. Prioritize special abilities that complement your class (like cunning action synergy with halfling's naturally stealthy or a dragonborn's breath weapon for crowd control). Consider proficiencies - extra weapon or armor proficiencies can enable multiclass builds. Resistances become more valuable at higher levels. Remember that fun and concept should outweigh pure optimization - a well-played 'suboptimal' character outperforms a poorly-played optimized one."
      }
    ],
    searchVolume: 148790
  },
  {
    slug: "dnd-species",
    name: "D&D Species",
    category: "races",
    description: "An exploration of the species system in D&D, covering how 'species' is increasingly used alongside or instead of 'race' in modern D&D discourse. This guide examines the terminology shift, its implications, and how species work mechanically in 5th Edition and beyond.",
    sections: [
      {
        id: "race-vs-species",
        title: "Race vs. Species Terminology",
        content: "Dungeons & Dragons has historically used 'race' to describe playable ancestries like elves, dwarves, and humans. In recent years, there's been a shift toward using 'species' instead. This change reflects a desire to move away from real-world racial connotations and more accurately describe the biological differences between, say, a human and a dragonborn. One D&D (the next evolution of D&D) will officially use 'species' as the primary term."
      },
      {
        id: "what-is-a-species",
        title: "What is a Species in D&D?",
        content: "In D&D, a species refers to your character's biological ancestry - whether they're human, elven, dwarven, draconic, or something else entirely. Species determines physical traits: size, speed, lifespan, physical abilities, and innate capabilities. Unlike real-world species, D&D species can often interbreed (half-elves, half-orcs), blur the line between biology and magic (tieflings, aasimar), and include wholly constructed beings (warforged). Species is distinct from culture, upbringing, and personal choice."
      },
      {
        id: "species-mechanics",
        title: "Species Mechanics in 5e",
        content: "Mechanically, species (races) provide: ability score increases or flexible bonuses, size category (Small or Medium), base walking speed, special movement types (climb, swim, fly), darkvision or other senses, damage resistances or immunities, proficiencies (skills, tools, weapons, armor), innate spellcasting, and unique abilities. These traits are always active and can't be changed (unlike class features). They form the foundation of your character's capabilities."
      },
      {
        id: "biological-vs-cultural",
        title: "Biological vs. Cultural Traits",
        content: "Modern D&D design separates biological species traits from cultural elements. For example, a dwarf's physical resilience and darkvision are biological, but their proficiency with battleaxes and knowledge of stonework are cultural. Tasha's Cauldron and Monsters of the Multiverse embrace this by making many proficiencies optional. An elf raised by dwarves might not have elven weapon training but could have dwarven cultural knowledge instead. This separation allows for more diverse and realistic characters."
      },
      {
        id: "species-diversity",
        title: "Diversity of Species",
        content: "D&D features an incredible variety of species: humanoid mammals (humans, elves, dwarves, halflings, gnomes, shifters), reptilian and draconic (dragonborn, lizardfolk, kobolds, tortles), avian (aarakocra, kenku), planar-touched (aasimar, tieflings, genasi), fey-influenced (eladrin, fairies, harengon, satyr), aquatic (tritons, sea elves, locathah), monstrous (goblinoids, orcs, minotaurs, centaurs), artificial constructs (warforged, autognomes), and unique origins (changelings, kalashtar, reborn). This diversity enables endless character concepts."
      },
      {
        id: "one-dnd-changes",
        title: "One D&D and Species Evolution",
        content: "One D&D (D&D's next iteration) is making significant changes to how species work. Key updates include: 'race' officially renamed to 'species', standardized ability score increases (+2 and +1, or three +1s, applied to any abilities), more consistent trait design, clearer separation of biological and cultural features, and expanded options for customization. These changes aim to make character creation more flexible while maintaining the unique feel of each species. The playtest process is ongoing, so expect refinements."
      },
      {
        id: "choosing-your-species",
        title: "Choosing Your Species",
        content: "When selecting a species, consider: mechanical synergy with your class (ability scores, traits), the character concept and story you want to tell, how your species fits into the campaign world, physical characteristics (size, appearance, lifespan), special abilities that excite you (flight, shapechanging, innate magic), and potential for interesting roleplay. Don't feel locked into stereotypes - the most memorable characters often subvert expectations. A cowardly dragonborn or a bookish half-orc can be more interesting than archetypes."
      },
      {
        id: "species-in-worldbuilding",
        title: "Species in Worldbuilding",
        content: "Different campaign settings handle species in unique ways. Forgotten Realms features many species living in cosmopolitan cities with distinct cultural homelands. Eberron includes unique species like warforged and changelings integral to its themes. Dark Sun is harsh and limits available species. Ravnica is dominated by guilds that cross species lines. Spelljammer spans wildspace with bizarre species. When creating characters, consider how your species fits into the setting's history, politics, and culture. Work with your DM to integrate your character's background into the world."
      }
    ],
    searchVolume: 24100
  }
];
