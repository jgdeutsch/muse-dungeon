// Class Features data - generated from DataForSEO FAQ data
import type { FAQItem } from "./characters-classes";

export type FeaturePage = {
  slug: string;
  name: string;
  parentClass: string;
  parentClassSlug: string | null;
  category: "features";
  level: string;
  description: string;
  mechanics: string;
  searchVolume: number;
  faq?: FAQItem[];
};

export const featurePages: FeaturePage[] = [
  {
    slug: "magical-tinkering-5e",
    name: "Magical Tinkering 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "features",
    level: "1st",
    description: "Magical Tinkering allows Artificers to imbue tiny objects with minor magical properties like light, sound, odor, or recorded messages. A versatile utility feature for creative problem-solving.",
    mechanics: "Touch a Tiny nonmagical object to grant it one property: shed light (5ft), emit recorded message/sound, emit odor, or display static visual. Lasts indefinitely. Can affect INT mod objects at once.",
    searchVolume: 1900,
  },
  {
    slug: "infuse-item-5e",
    name: "Infuse Item 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "features",
    level: "2nd",
    description: "Infuse Item is the Artificer's signature feature, allowing them to create temporary magic items by infusing mundane objects with magical properties during long rests.",
    mechanics: "Learn infusion recipes and can have 2 infusions active at level 2, scaling to 6 at level 18. Create magic items like Enhanced Weapon (+1), Bag of Holding, or Homunculus Servant.",
    searchVolume: 4500,
    faq: [
      {
        question: "How does infuse item work in 5e?",
        answer: "As specified in the infusions. Description if the item requires attunement you can attune yourself to it the instant you infuse the item."
      },
      {
        question: "Can you put multiple infusions on one item 5e?",
        answer: "\"Each of your infusions can only be in one object at a time. Moreover, no object can bear more than one of your infusions at a time.\""
      },
      {
        question: "How does infusion work artificer?",
        answer: "You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. [...] If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies."
      },
    ],
  },
  {
    slug: "flash-of-genius-5e",
    name: "Flash of Genius 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "features",
    level: "7th",
    description: "Flash of Genius lets Artificers use their reaction to add their Intelligence modifier to an ally's ability check or saving throw within 30 feet.",
    mechanics: "Use reaction when creature within 30ft makes ability check or saving throw. Add INT modifier to the roll. Usable INT modifier times per long rest.",
    searchVolume: 3200,
  },
  {
    slug: "magic-item-savant-5e",
    name: "Magic Item Savant 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "features",
    level: "14th",
    description: "Magic Item Savant allows Artificers to attune to up to 5 magic items at once and ignore all class, race, spell, and level requirements on magic items.",
    mechanics: "At 14th level, attune to 5 items instead of 3. Ignore all requirements on magic items when attuning or using them.",
    searchVolume: 1100,
  },
  {
    slug: "soul-of-artifice-5e",
    name: "Soul of Artifice 5e",
    parentClass: "Artificer",
    parentClassSlug: "artificer-5e",
    category: "features",
    level: "20th",
    description: "Soul of Artifice is the Artificer's 20th level capstone, granting +1 to all saving throws per attuned magic item and a death-defying ability.",
    mechanics: "+1 bonus to saving throws per magic item attuned (up to +6). When reduced to 0 HP, can end one infusion to drop to 1 HP instead.",
    searchVolume: 900,
    faq: [
      {
        question: "What is the soul of artifice?",
        answer: "Soul of Artifice. At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection : You gain a +1 bonus to all saving throws per magic item you are currently attuned to."
      },
      {
        question: "Was artificer removed from D&D 5e?",
        answer: "We're guessing the truth lies somewhere in the middle. Artificer made it into 4th Edition, but was dropped [when] 5th Edition came out in 2014\"."
      },
      {
        question: "Can you use Flash of Genius after the roll?",
        answer: "What is the timing of Flash of Genius? You use Flash of Genius immediately after the triggering d20 is rolled and before any of the effects of the roll are applied. Unless a rule tells you otherwise, a reaction occurs immediately after its trigger."
      },
    ],
  },
  {
    slug: "rage-5e",
    name: "Rage 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "1st",
    description: "Rage is the Barbarian's core feature - entering a battle fury that grants bonus damage, resistance to physical damage, and advantage on Strength checks and saves.",
    mechanics: "Bonus action to enter rage. Gain: melee damage bonus (+2 to +4), resistance to bludgeoning/piercing/slashing, advantage on STR checks/saves. Lasts 1 minute, ends early if unconscious or don't attack/take damage.",
    searchVolume: 14800,
    faq: [
      {
        question: "How does Rage work in 5e?",
        answer: "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn, targeted a hostile creature with a roar, or taken damage since then. You can also end your rage on your turn as a bonus action."
      },
      {
        question: "Does rage half all damage?",
        answer: "Rage gives resistance to all bludgeoning, slashing and piercing damage. so if a water elemental would use its slam, the barb would only take half damage. the hellhound would deal half piercing damage with the bite, but the barb would still take the full 2d6 fire damage, since he does not resist that."
      },
      {
        question: "What does rage make you resistant to?",
        answer: "The wording of rage is just \"resistance to bludgeoning, slashing and piercing damage.\" The rules note otherwise when there is otherwise; some monsters for example will specifically be resistant to buldgeoning, slashing, and piercing damage from non-magical attacks."
      },
      {
        question: "Is Rage a bonus action in D&D 5e?",
        answer: "On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor: You have advantage on Strength checks and Strength saving throws."
      },
    ],
  },
  {
    slug: "unarmored-defense-5e",
    name: "Unarmored Defense 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "1st",
    description: "Barbarian's Unarmored Defense sets AC to 10 + DEX modifier + CON modifier when not wearing armor, allowing them to tank without heavy armor.",
    mechanics: "While not wearing armor, AC = 10 + DEX mod + CON mod. Can use a shield and still benefit. Does not stack with other AC calculations.",
    searchVolume: 3900,
    faq: [
      {
        question: "How does Barbarian unarmored defense work?",
        answer: "The Unarmored Defense is compensation for not being able to, or not wanting to, equip magic armor. Normally, as a character advances, they'll get access to +1, +2, or even +3 armor. So instead of those bonuses, barbarians and monks can use a second ability score to increase protection."
      },
      {
        question: "How to calculate Barbarian unarmored defense?",
        answer: "Barbarians have unarmored defense so their AC is equal to 10 + your Dexterity modifier + your Constitution modifier."
      },
      {
        question: "What is the weakest Barbarian subclass?",
        answer: "Dwarven Barbarians that don spiked armor and charge into enemy lines, impaling their enemies with the armor they wear, known as Kuldjargh or Axe Idiot to their own kind, is the worst Barbarian subclass, and probably the worst subclass in the game (yes, even worse than pre updated Beast Master)."
      },
      {
        question: "Does Barbarian unarmored defense stack with natural armor?",
        answer: "edit: Thanks to the clarifications from commenters, it does not in fact stack in RAW, as PHB clarifies that when given multiple ways to calculate AC, you select which one to use."
      },
    ],
  },
  {
    slug: "reckless-attack-5e",
    name: "Reckless Attack 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "2nd",
    description: "Reckless Attack allows Barbarians to throw caution aside, gaining advantage on all melee attacks for a turn at the cost of giving enemies advantage against them.",
    mechanics: "When making first attack on your turn, can attack recklessly. Gain advantage on all melee weapon attacks using STR that turn. Attack rolls against you have advantage until your next turn.",
    searchVolume: 8100,
    faq: [
      {
        question: "How does reckless attack work in 5e?",
        answer: "Reckless Attack\n When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
      },
      {
        question: "Does reckless attack work with extra attack?",
        answer: "How does Reckless Attack work? Choose to do a Reckless Attack while making the first attack of your turn. When you decide to use Reckless Attack, announce it before making your first attack. Then, roll that attack (and additional attacks, if you have the Extra Attack feature) with advantage."
      },
      {
        question: "How does attack work in 5e?",
        answer: "And add your damage. Modifier. The total is subtracted from the target's. Hit points if the d20 roll for an attack is a 20 the attack hits regardless of any modifiers or the targets. AC."
      },
      {
        question: "Can you declare a reckless attack after rolling?",
        answer: "No, the barbarian must declare he is using reckless attack before he rolls any dice."
      },
    ],
  },
  {
    slug: "danger-sense-5e",
    name: "Danger Sense 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "2nd",
    description: "Danger Sense gives Barbarians advantage on Dexterity saving throws against effects they can see, helping them avoid traps and area spells.",
    mechanics: "Advantage on DEX saves against effects you can see (spells, traps). Doesn't work if blinded, deafened, or incapacitated.",
    searchVolume: 4400,
    faq: [
      {
        question: "How does danger sense work in 5e?",
        answer: "Danger Sense\n At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells."
      },
      {
        question: "Does danger sense work in combat?",
        answer: "Yes, as long as the barbarian can see the effect\n As clarified in the Sage Advice Compendium: Does the barbarian's Danger Sense work against breath weapons and enemies' special abilities? A barbarian's Danger Sense benefits the Dexterity saving throw against any effect that the barbarian can see."
      },
      {
        question: "What can a danger sense do?",
        answer: "The sense is almost precognitive, responding to intent or consequence rather than action alone. Even if a threat is obscured, silent, or seemingly harmless, the user perceives it with striking clarity, often in the form of a tightening chest, heightened reflexes, or even a flash of insight about where the danger lies."
      },
    ],
  },
  {
    slug: "primal-path-5e",
    name: "Primal Path 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "3rd",
    description: "Primal Path is the Barbarian's subclass choice at 3rd level, defining the source and nature of their rage - from totemic spirits to ancestral guardians.",
    mechanics: "Choose subclass at 3rd level. Options: Berserker (frenzy), Totem Warrior (animal spirits), Ancestral Guardian (spirit protectors), Zealot (divine fury), Beast (natural weapons), Wild Magic (chaotic effects).",
    searchVolume: 2200,
    faq: [
      {
        question: "What is the primal path feature 5e?",
        answer: "Primal Path\n At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
      },
      {
        question: "Which Barbarian subclass does the most damage?",
        answer: "Yep, Zealot has the highest damage across an adventuring day. Berzerk has the highest nova, and usually is the best option for many tables that only have 2-4 combats in an adventuring day."
      },
      {
        question: "Can you use a cantrip while raging?",
        answer: "You cannot cast spells while you are raging. This includes cantrips. You can, however, cast them while you are not raging."
      },
    ],
  },
  {
    slug: "extra-attack-5e",
    name: "Extra Attack 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "5th",
    description: "At 5th level, Barbarians gain Extra Attack, allowing them to attack twice whenever they take the Attack action on their turn.",
    mechanics: "When taking Attack action, can attack twice instead of once. Stacks with bonus action attacks from features like Frenzy or Polearm Master.",
    searchVolume: 1800,
    faq: [
      {
        question: "Do Barbarians get extra attack in 5e?",
        answer: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
      },
      {
        question: "How to calculate attack bonus Barbarian?",
        answer: "Default formula The basic attack bonus formula is: Ability Modifier + Proficiency + Enchanted Item Bonus + Class Features = Attack Bonus."
      },
      {
        question: "What is the extra attack rule in 5e?",
        answer: "What Is Extra Attack in D&D 5e? Extra Attack is a class feature that allows a character to make more than one attack when they take the Attack action on their turn. That's important, only the Attack action triggers Extra Attack. It does not apply to bonus actions, reactions, or casting spells."
      },
      {
        question: "How much extra damage does Barbarian rage do?",
        answer: "Your rage damage bonus starts at +2 and goes up to +4 as show in the Rage Damage Bonus colomn of the Barbarian class table. Your rage gives you advantage on STR checks and saving throws (you roll the d20 two times and take the higher), rather than a numerical bonus."
      },
    ],
  },
  {
    slug: "fast-movement-5e",
    name: "Fast Movement 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "5th",
    description: "Fast Movement increases the Barbarian's speed by 10 feet while not wearing heavy armor, helping them close distance with enemies.",
    mechanics: "Speed increases by 10 feet while not wearing heavy armor. Stacks with racial speed bonuses and other movement increases.",
    searchVolume: 1200,
    faq: [
      {
        question: "What is fast movement level 5 Barbarian?",
        answer: "Fast Movement\n Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
      },
      {
        question: "What increases movement speed in D&D 5e?",
        answer: "Certain special mounts, such as a pegasus or griffon, or special vehicles, such as a carpet of flying, allow you to travel more swiftly."
      },
      {
        question: "What creature in D&D has the most movement speed?",
        answer: "Tabaxi: just for the sheer force multiplier of Feline Agility, the 360 feet of movement offered to the Tabaxi takes the cake. ...\nTabaxi (climbing): It's the cat again!"
      },
      {
        question: "What D&D feats increase movement speed?",
        answer: "Athlete. Indirectly improves your movement speed by granting you climbing speed and reducing the amount of movement required to stand up from prone. Fey Teleportation. Indirectly improves speed by allowing you to move via teleportation."
      },
    ],
  },
  {
    slug: "feral-instinct-5e",
    name: "Feral Instinct 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "7th",
    description: "Feral Instinct gives Barbarians advantage on initiative and the ability to act normally even when surprised, as long as they rage first.",
    mechanics: "Advantage on initiative rolls. If surprised, can act normally by entering rage first (uses rage and bonus action).",
    searchVolume: 2100,
    faq: [
      {
        question: "How does Feral Instinct work in 5e?",
        answer: "Feral Instinct\n By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
      },
      {
        question: "Can you be frightened while raging?",
        answer: "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
      },
    ],
  },
  {
    slug: "brutal-critical-5e",
    name: "Brutal Critical 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "9th",
    description: "Brutal Critical adds extra weapon damage dice when Barbarians score critical hits, making their crits devastatingly powerful.",
    mechanics: "Roll 1 additional weapon damage die on critical hits at 9th level. Increases to 2 extra dice at 13th and 3 at 17th level.",
    searchVolume: 3600,
    faq: [
      {
        question: "What is brutal critical 5e?",
        answer: "Brutal Critical\n Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
      },
      {
        question: "Are brutal critical dice doubled?",
        answer: "Brutal Critical is additional dice rolled after determining the damage of a crit. They are not doubled. The same applies for half-orc Savage Attacker feature from the 2014 rules."
      },
      {
        question: "How does brutal critical work with a greatsword?",
        answer: "It deals one extra dice. A critical with a greatsword deals 4d6 damage, and with brutal critical it's 5d6. Otherwise, the greatsword would be better than a greataxe for everything. The greatsword has higher average damage, but the greataxe is better at criticals."
      },
    ],
  },
  {
    slug: "relentless-rage-5e",
    name: "Relentless Rage 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "11th",
    description: "Relentless Rage allows Barbarians to avoid dropping to 0 HP while raging by succeeding on a Constitution saving throw.",
    mechanics: "If reduced to 0 HP while raging, make DC 10 CON save to drop to 1 HP instead. DC increases by 5 each time until long rest.",
    searchVolume: 2400,
    faq: [
      {
        question: "How does relentless rage work?",
        answer: "The Barbarian however gets Relentless rage, an ability that when you are brought to 0 HP while raging, you can make a DC 10 con save to instead be at 1 HP. The DC increases by 5 every time you use it (and is reset at a short or long rest)."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "What is level 15 persistent rage?",
        answer: "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
      },
    ],
  },
  {
    slug: "persistent-rage-5e",
    name: "Persistent Rage 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "15th",
    description: "Persistent Rage prevents the Barbarian's rage from ending early due to not attacking or taking damage - only unconsciousness stops it.",
    mechanics: "Rage only ends early if you fall unconscious or choose to end it. No longer need to attack or take damage each round.",
    searchVolume: 1500,
    faq: [
      {
        question: "How does persistent rage work?",
        answer: "Persistent Rage is a relic power that players can harness at the mysterious monolith. Once harnessed, players will generate adrenaline when outside of combat at a rate of 5% every 1.2 seconds, instead of having it drained. It costs 3,000 chronotes to activate and uses 150 monolith energy."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "What is the difference between Infernal Puzzle Box and Persistent Rage?",
        answer: "The Persistent Rage relic now generates adrenaline when outside of combat, as the infernal puzzle box prevents adrenaline drain when outside of combat. When your adrenaline is full, an activated adrenaline urn now stores adrenaline generated by the Persistent Rage relic."
      },
      {
        question: "What is level 15 persistent rage?",
        answer: "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
      },
    ],
  },
  {
    slug: "indomitable-might-5e",
    name: "Indomitable Might 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "18th",
    description: "Indomitable Might allows Barbarians to use their Strength score as the minimum roll for Strength checks, making them reliably powerful.",
    mechanics: "If Strength check total is less than your Strength score, use that score instead. Effectively sets a floor for all STR checks.",
    searchVolume: 1800,
    faq: [
      {
        question: "How does indomitable might work in 5e?",
        answer: "Indomitable Might\n Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
      },
      {
        question: "Can you be frightened while raging?",
        answer: "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
      },
      {
        question: "Which Barbarian subclass does the most damage?",
        answer: "Yep, Zealot has the highest damage across an adventuring day. Berzerk has the highest nova, and usually is the best option for many tables that only have 2-4 combats in an adventuring day."
      },
    ],
  },
  {
    slug: "primal-champion-5e",
    name: "Primal Champion 5e",
    parentClass: "Barbarian",
    parentClassSlug: "barbarian-5e",
    category: "features",
    level: "20th",
    description: "Primal Champion is the Barbarian's 20th level capstone, increasing Strength and Constitution by 4 each (max 24).",
    mechanics: "STR and CON increase by 4. Maximum for these scores becomes 24. Effectively +2 to attack, damage, AC, HP, and CON saves.",
    searchVolume: 1600,
    faq: [
      {
        question: "What is the 20th level primal champion?",
        answer: "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
      },
      {
        question: "What is the 7th level Barbarian?",
        answer: "By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
      },
      {
        question: "Can you be frightened while raging?",
        answer: "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
      },
    ],
  },
  {
    slug: "bardic-inspiration-5e",
    name: "Bardic Inspiration 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "1st",
    description: "Bardic Inspiration is the Bard's signature feature, granting allies bonus dice they can add to ability checks, attack rolls, or saving throws.",
    mechanics: "Bonus action to give creature within 60ft a Bardic Inspiration die (d6, scaling to d12). They can add it to one ability check, attack roll, or save within 10 minutes. CHA mod uses per long rest (short rest at 5th).",
    searchVolume: 9700,
    faq: [
      {
        question: "What is bardic inspiration 5e?",
        answer: "In fifth edition Dungeons & Dragons, Bardic inspiration is a core class feature that allows Bards to use their musical talents to inspire their companions in battle, granting an ally an extra die roll which they can add to their attack roll, ability check, or saving throw."
      },
      {
        question: "How many bardic inspiration per level 5e?",
        answer: "Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest."
      },
      {
        question: "When to use bardic inspiration?",
        answer: "The best times are for saving throws or Cutting Words. Saving throws are more often than not only a few numbers different, so Bardic Inspiration can make a big difference. Cutting Words can reduce an attack to just below the AC of an ally. A good way to save someone from some damage."
      },
      {
        question: "What are the new Bardic inspiration rules?",
        answer: "Bardic Inspiration Is Now An Hour Long\n Instead of lasting 10 minutes, it now lasts an hour. That's like going from a 30-second jingle to a full-length rock opera. Bardic Inspiration now lasts a full hour instead of just 10 minutes. Use it even after failing a D20 Test, giving you more strategic options."
      },
    ],
  },
  {
    slug: "jack-of-all-trades-5e",
    name: "Jack of All Trades 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "2nd",
    description: "Jack of All Trades adds half the Bard's proficiency bonus to any ability check that doesn't already include their proficiency bonus.",
    mechanics: "Add half proficiency bonus (rounded down) to any ability check not using proficiency. Includes initiative! Also applies to counterspell/dispel magic checks.",
    searchVolume: 6200,
    faq: [
      {
        question: "What does jack of all trades apply to 5e?",
        answer: "The book says it applies to any ability check that does not already include proficiency. Any ability check that doesn't already apply your proficiency bonus. So you can make ability checks with tools at half proficiency using jack of all trades."
      },
      {
        question: "What does jack of all trades do in D&D?",
        answer: "Jack of All Trades gives the ability to \"... add half your proficiency bonus, rounded down, to any ability check you make...\" A spell such as Cure Wounds has the wording \"... + your spellcasting ability modifier.\"."
      },
      {
        question: "How does the jack of all trades work?",
        answer: "A jack of all trades is a master but in a specific way.\n A jack of all trades can master a specific process that can apply to different fields of talent. Or they are \u2014 as the Wikipedia entry explains it \u2014 a \u201cmaster of integration,\u201d uniting knowledge and skills from several disciplines in a cohesive way."
      },
    ],
  },
  {
    slug: "song-of-rest-5e",
    name: "Song of Rest 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "2nd",
    description: "Song of Rest allows Bards to help allies regain extra hit points during short rests through soothing music or oration.",
    mechanics: "During short rest, friendly creatures who hear your performance regain extra HP equal to your Bardic Inspiration die when spending Hit Dice.",
    searchVolume: 3800,
    faq: [
      {
        question: "How does Song of Rest work in 5e?",
        answer: "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra 1d6 hit points."
      },
      {
        question: "Is Song of Rest gone?",
        answer: "First\u2026 Goodbye, Song of Rest\n Before we get to the new, we need to make a bit of space. That means we need to pour one out for Song of Rest \u2013 officially making its exit for the 2024 edition."
      },
      {
        question: "Is Song of Rest a cantrip?",
        answer: "It's neither, it's an ability given to you by the class, a class feature - like cleric's Channel Divinity, or rogue's Sneak Attack, or fighter's Action Surge."
      },
      {
        question: "How does song of rest interact with hit dice?",
        answer: "For example, the Bard's Song of Rest lets your regain an extra 1D6 hit points when you spend one or more hit dice during a short rest. Once you've used a Hit Dice during a Short Rest it isn't recovered until you have a Long Rest (see How Do You Recover Hit Dice below)."
      },
    ],
  },
  {
    slug: "bard-college-5e",
    name: "Bard College 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "3rd",
    description: "Bard College is the Bard's subclass choice at 3rd level, representing the tradition or style of performance they've mastered.",
    mechanics: "Choose subclass at 3rd level. Options: Lore (knowledge/skills), Valor (combat), Glamour (fey charm), Swords (blade flourishes), Whispers (psychic fear), Eloquence (speech), Creation (animate objects).",
    searchVolume: 2900,
  },
  {
    slug: "expertise-5e",
    name: "Expertise 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "3rd",
    description: "Expertise allows Bards to double their proficiency bonus for two skill proficiencies, becoming exceptionally skilled in chosen areas.",
    mechanics: "Choose 2 skill proficiencies. Your proficiency bonus is doubled for any check using them. Gain 2 more expertise choices at 10th level.",
    searchVolume: 2100,
    faq: [
      {
        question: "Do bards get expertise in 5e?",
        answer: "Bards also gain the Expertise feature at 3rd level, selecting two skill proficiencies to apply double their proficiency bonus. At 10th level, they can choose two additional skills for Expertise. This allows Bards to tailor their skillset to suit their role, whether as a performer, negotiator, or knowledge expert."
      },
      {
        question: "How much does expertise add?",
        answer: "Expertise doubles your proficiency bonus so it would be D20 + 2 (Wisdom) + 4 (your proficiency bonus doubled). Proficiency bonus just goes up the higher your characters level while ability modifiers go up if you increase a star, get a certain feat or feature and sometimes magical items."
      },
      {
        question: "What is a lore bard best expertise?",
        answer: "Lore Bards excel at gathering knowledge, influencing NPCs, and providing versatile support to their party. With an array of spells, skills, and abilities, they can adapt to almost any situation. This subclass is ideal for players who enjoy problem-solving, storytelling, and playing a supportive yet impactful role."
      },
      {
        question: "How does expertise work in 5e?",
        answer: "Expertise: doubles your proficiency bonus for a specific skill (or tool), raising the static modifier. It improves every roll in that skill and scales with character level via proficiency. No randomness change."
      },
    ],
  },
  {
    slug: "font-of-inspiration-5e",
    name: "Font of Inspiration 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "5th",
    description: "Font of Inspiration allows Bards to regain all expended Bardic Inspiration uses on a short rest instead of only on a long rest.",
    mechanics: "At 5th level, regain all Bardic Inspiration uses when you finish a short or long rest (previously long rest only).",
    searchVolume: 1800,
    faq: [
      {
        question: "What is the font of inspiration?",
        answer: "\"font of inspiration\" is a correct and usable expression in written English and can be used to describe someone or something that provides a source of inspiration. For example: \"His lectures were a font of inspiration, and I was always inspired to pursue my dreams after hearing him speak.\""
      },
      {
        question: "What is the inspiration rule in 5e?",
        answer: "' Once you gain inspiration you will have it until you use it, and it allows you to gain advantage on an attack roll, ability check, or saving throw. You can even give your inspiration to someone else if you think they deserve it!"
      },
      {
        question: "What does \"D&D 5e\" mean?",
        answer: "DnD 5e is the current edition of Dungeons and Dragons, and has been in use for the past ten years. Most DnD discourse and virtually all products being published these days for DnD are for DnD 5e. If you see something for DnD 5e, but it isn't from WotC, then it may be some manner of homebrew supplement."
      },
    ],
  },
  {
    slug: "countercharm-5e",
    name: "Countercharm 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "6th",
    description: "Countercharm lets Bards use their action to perform music that gives allies advantage on saves against being frightened or charmed.",
    mechanics: "Action to start performance lasting until end of your next turn. You and friendly creatures within 30ft have advantage on saves vs frightened/charmed.",
    searchVolume: 2400,
    faq: [
      {
        question: "How does Countercharm work in 5e?",
        answer: "As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit."
      },
      {
        question: "How to counter charm 5e?",
        answer: "The duration of the charm spell running out.\nEntering combat with the charmed person or their allies.\nDoing damage to the charmed person or their allies.\nTargeting the charmed person or their allies with an aggressive spell.\nAsking the charmed person to betray their allies."
      },
      {
        question: "Is countercharm an action?",
        answer: "Countercharm is a class action available to bards at level 6. This ability allows bards to embolden their allies against charming and frightening effects."
      },
      {
        question: "How does counterspell work in 5e?",
        answer: "But in normal language, here's how 5e Counterspell works:\n As they are in the middle of casting, you yell out \"I cast Counterspell!\" You automatically cancel the DM's spell if it is 3rd level or lower. If it is a higher spell, then the DM has to roll a 10 + whatever level you cast Counterspell at."
      },
    ],
  },
  {
    slug: "magical-secrets-5e",
    name: "Magical Secrets 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "10th",
    description: "Magical Secrets allows Bards to learn spells from any class's spell list, dramatically expanding their magical versatility.",
    mechanics: "At 10th, 14th, and 18th level, learn 2 spells from any class. They count as bard spells. Popular picks: Counterspell, Find Greater Steed, Wish.",
    searchVolume: 5400,
  },
  {
    slug: "superior-inspiration-5e",
    name: "Superior Inspiration 5e",
    parentClass: "Bard",
    parentClassSlug: "bard-5e",
    category: "features",
    level: "20th",
    description: "Superior Inspiration ensures Bards always have at least one Bardic Inspiration die available when rolling initiative.",
    mechanics: "At 20th level, when you roll initiative and have no Bardic Inspiration uses remaining, you regain one use.",
    searchVolume: 1100,
    faq: [
      {
        question: "What is the inspiration rule in 5e?",
        answer: "' Once you gain inspiration you will have it until you use it, and it allows you to gain advantage on an attack roll, ability check, or saving throw. You can even give your inspiration to someone else if you think they deserve it!"
      },
      {
        question: "What is level 5 bardic inspiration?",
        answer: "Level 5: Font of Inspiration\n You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest. In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration."
      },
      {
        question: "Is 2014 or 2024 bard better?",
        answer: "The 2024 Bard now gets earlier access to Expertise, utility improvements to Countercharm, and the major boosts to Magical Secrets and Font of Inspiration instead. The 2024 Player's Handbook presents three familiar subclasses for Bards and one brand-new one."
      },
      {
        question: "Can you have two bardic inspirations?",
        answer: "Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. You can use this feature a number of times equal to your Charisma modifier (a minimum of once)."
      },
    ],
  },
  {
    slug: "divine-domain-5e",
    name: "Divine Domain 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "features",
    level: "1st",
    description: "Divine Domain is the Cleric's subclass, representing the aspect of their deity they channel - from Life and Light to War and Trickery.",
    mechanics: "Choose domain at 1st level. Gain domain spells (always prepared), bonus proficiencies, and unique features at 1st, 2nd, 6th, 8th, and 17th levels.",
    searchVolume: 3200,
    faq: [
      {
        question: "What is the divine domain feature 5e?",
        answer: "Divine Domain\n Choose one domain related to your deity. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
      },
      {
        question: "What are the 12 divine domains?",
        answer: "laserllama's Divine Domains (New & Updated) - Channel Celestial Power with 12 New Divine Domains for the Cleric Class: Beauty, Blood, Cataclysm, Chaos, Hearth, Luck, Mysticism, Poverty, Prosperity, Shadow, Thieves, and an Alternate Arcana Domain !"
      },
      {
        question: "What is the best race for a D\\&D cleric?",
        answer: "Humans, half elves, Aasimars and tieflings are the best races for versatility and can be whatever class and are pretty much the most common races for clerics."
      },
      {
        question: "What is a divine domain?",
        answer: "Divine domains were a specific areas of interest for deities, particularly to do with the magic and spells granted to their faithful. Clerics of a particular deity choose two of the deity's domains to focus upon, and gained access to extra spells within those domains."
      },
    ],
  },
  {
    slug: "channel-divinity-5e",
    name: "Channel Divinity 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "features",
    level: "2nd",
    description: "Channel Divinity allows Clerics to channel divine energy for powerful effects, including the universal Turn Undead and domain-specific powers.",
    mechanics: "Use once per short/long rest (twice at 6th, three times at 18th). Turn Undead is universal; each domain grants additional options.",
    searchVolume: 4800,
    faq: [
      {
        question: "Do clerics get channel divinity?",
        answer: "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain."
      },
      {
        question: "Can you use Paladin channel divinity for cleric?",
        answer: "You can use any the channel divinity options from any of your classes, but you only gain additional uses of Channel divinity by reaching a level in a class that would give you an extra use of the feature. So as a cleric1/paladin1 you have no uses, cleric2/paladin1 you have 1 use."
      },
      {
        question: "How often can you use channel divinity as a cleric?",
        answer: "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses. It's also listed on the cleric class table in parentheses at level 2, 6, and 18."
      },
      {
        question: "What is the strongest cleric domain?",
        answer: "Twilight Domain is pretty generally considered the \"best\" domain... or at the very least, the most broken. But Tempest and Death are generally well respected, although the Grave domain is probably more popular than Death and has a similar feel."
      },
    ],
  },
  {
    slug: "turn-undead-5e",
    name: "Turn Undead 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "features",
    level: "2nd",
    description: "Turn Undead is a Channel Divinity option all Clerics get, forcing undead creatures to flee for 1 minute on a failed Wisdom save.",
    mechanics: "Action to present holy symbol. Undead within 30ft must make WIS save or be turned for 1 minute (flee, can't approach within 30ft).",
    searchVolume: 6500,
    faq: [
      {
        question: "How do you turn undead in 5e?",
        answer: "Channel Divinity: Turn UndeadD\n As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage."
      },
      {
        question: "How does turn undead work?",
        answer: "Think of Turn Undead as a Fear spell for Undead. All undead creatures within 30' of the cleric have to make a wisdom saving throw. If they fail, they become terrified of the cleric, and will run away. It does not end the fight."
      },
      {
        question: "How many times can you turn undead in 5e?",
        answer: "A cleric can attempt to turn any undead they meet. There's no limit to how many times they can do this, however if they fail to turn one they cannot attempt to turn that same one again in the same encounter."
      },
      {
        question: "What level do clerics get turn undead?",
        answer: "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain."
      },
    ],
  },
  {
    slug: "destroy-undead-5e",
    name: "Destroy Undead 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "features",
    level: "5th",
    description: "Destroy Undead enhances Turn Undead to instantly destroy weak undead creatures that fail their saving throw.",
    mechanics: "Undead that fail Turn Undead save are destroyed if CR is at or below threshold: CR 1/2 (5th), CR 1 (8th), CR 2 (11th), CR 3 (14th), CR 4 (17th).",
    searchVolume: 3100,
    faq: [
      {
        question: "What does destroy undead cr 1/2 mean?",
        answer: "Creatures can have fractions as their CR. At 5th level, an undead of CR 1/2 or lower that fails the saving throw for Turn Undead will instead be instantly destroyed. ( Undead creatures with CR 1/2 or lower include skeletons, zombies, shadows, and warhorse skeletons)"
      },
      {
        question: "What works against undead?",
        answer: "One of your best tools against undead is your Divine Smite, not spells, because the smite does an extra 1D8 radiant damage against them, and is pretty much guaranteed, as opposed to spells that get a save or require concentration which means they can be lost without effecting much."
      },
      {
        question: "Does necrotic damage hurt undead in 5e?",
        answer: "In 5e, necrotic energy does not heal undead\n In fact, most undead will get damaged by necrotic energy, just like any other creature. There are only a handful of powerful undead like the Lich that even have damage resistance to it."
      },
      {
        question: "Can you frighten undead in 5e?",
        answer: "There's no rule that states undead in general are immune to being frightened so it depends on what specific undead creature you're attacking. Some undead do have immunity to the frightened condition while others don't."
      },
    ],
  },
  {
    slug: "divine-intervention-5e",
    name: "Divine Intervention 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "features",
    level: "10th",
    description: "Divine Intervention allows Clerics to call upon their deity for miraculous aid, with a chance of success based on level.",
    mechanics: "Action to describe assistance needed and roll percentile dice. If roll \u2264 cleric level, deity intervenes (DM chooses effect). Usable once per 7 days (auto-success at 20th).",
    searchVolume: 4200,
  },
  {
    slug: "divine-strike-5e",
    name: "Divine Strike 5e",
    parentClass: "Cleric",
    parentClassSlug: "cleric-5e",
    category: "features",
    level: "8th",
    description: "Divine Strike (for martial domains) adds extra damage to weapon attacks, while Potent Spellcasting (for caster domains) adds WIS to cantrip damage.",
    mechanics: "At 8th level, once per turn add 1d8 damage (type varies by domain) to weapon attack. Increases to 2d8 at 14th level.",
    searchVolume: 2600,
    faq: [
      {
        question: "How does divine strike work in 5e?",
        answer: "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
      },
      {
        question: "What is the difference between potent spellcasting and divine strikes?",
        answer: "Potent Casting makes cantrips better, but you still usually have a better tool in your arsenal in the form of leveled spells. Divine Strike takes another category of damage dealing and makes it viable, letting you take advantage of situations where making a weapon attack would be better than casting a spell."
      },
      {
        question: "Does divine strike work with true strike?",
        answer: "Yes, it works. However potent cantrip doesn't work with true strike because it's not a cleric cantrip. Unless your subclass provides it as a cleric cantrip."
      },
      {
        question: "How often can you use divine strike?",
        answer: "Divine Strike is a weapon action available to level 8 Clerics of the following Domains: Life, Trickery, Nature, Tempest, and War. It is usable once per turn and deals 1d8 additional damage upon a weapon strike (either melee or ranged) of a type dependent on the chosen domain."
      },
    ],
  },
  {
    slug: "druidic-5e",
    name: "Druidic 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "features",
    level: "1st",
    description: "Druidic is the secret language of druids, allowing them to communicate with other druids and leave hidden messages in nature.",
    mechanics: "Know Druidic language. Can speak it and leave hidden messages others can't detect without magic. Other druids automatically spot messages.",
    searchVolume: 2100,
    faq: [
      {
        question: "What is Druidic 5e?",
        answer: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
      },
      {
        question: "What is a Druid in 5e?",
        answer: "The druid is included as a character class in the 5th edition Player's Handbook (2014); druids utilize divine magic in this edition. Druid spells are typically devoted to communing with nature, interpreting or directing the weather, communicating with creatures and plants, and the like."
      },
      {
        question: "Do all druids know Druidic?",
        answer: "Druids learn it as a class feature. This means that all druids would at least know it. This is how everyone else can learn Druidic."
      },
    ],
  },
  {
    slug: "wild-shape-5e",
    name: "Wild Shape 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "features",
    level: "2nd",
    description: "Wild Shape is the Druid's signature feature, allowing them to transform into beasts they've seen, gaining new forms for combat or utility.",
    mechanics: "Action to transform into beast you've seen. CR and movement limits by level. Gain beast's HP as temp HP. Can't cast spells but concentration continues. 2 uses per short rest.",
    searchVolume: 18500,
  },
  {
    slug: "druid-circle-5e",
    name: "Druid Circle 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "features",
    level: "2nd",
    description: "Druid Circle is the Druid's subclass choice at 2nd level, determining how they connect with nature - from lunar shapeshifting to spore manipulation.",
    mechanics: "Choose circle at 2nd level. Options: Land (terrain spells), Moon (combat wild shape), Dreams (healing), Shepherd (summoning), Spores (necrotic), Stars (starry forms), Wildfire (fire spirit).",
    searchVolume: 2800,
    faq: [
      {
        question: "What is the best circle for a druid?",
        answer: "1.) Circle of Stars. ...\n2.) Circle of the Moon. ...\n3.) Circle of the Shepherd. ...\n4.) Circle of Wildfire. ...\n5.) Circle of Dreams. ...\n6.) Circle of Spores. ...\n7.) Circle of the Land."
      },
      {
        question: "What is the strongest druid build?",
        answer: "S. Mekuna's Pulverize. Mekuna. Pulverize. Ace.\nA. Shred. Ace. Cataclysm. Ace. Wolves - The Pack. Ace. Wrecking Ball Boulder. Ace.\nB. STORMSLIDE. Ace.\nC. Fleshrender. Ace."
      },
      {
        question: "What alignment are most druids in?",
        answer: "Throughout the history of Adnd, druids have been viewed as true Neutral. True, some leaned in one alignment direction or another, but druids were always supposed to retain their objectivity."
      },
      {
        question: "Can all druids wild shape?",
        answer: "Because wild shape is a utility feature for other druid subclasses, and only a combat feature for Moon druids. There's not much benefit to turning into a 1/4 cr panther in combat at level 2, and it only gets worse from there."
      },
    ],
  },
  {
    slug: "timeless-body-5e",
    name: "Timeless Body 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "features",
    level: "18th",
    description: "Timeless Body makes Druids age 10 times slower and immune to being magically aged, representing their deep connection to nature's cycles.",
    mechanics: "At 18th level, age 1 year for every 10 that pass. Can't be magically aged.",
    searchVolume: 1100,
    faq: [
      {
        question: "What is the \"Timeless Body\" concept?",
        answer: "Timeless Body is a Druid passive feature granted at level 18 in D&D 5e, which makes the character age only 1 year for every 10 years that pass."
      },
    ],
  },
  {
    slug: "beast-spells-5e",
    name: "Beast Spells 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "features",
    level: "18th",
    description: "Beast Spells allows high-level Druids to cast spells while in Wild Shape, performing verbal and somatic components in beast form.",
    mechanics: "At 18th level, can cast spells in Wild Shape. Can perform verbal/somatic components but not material (unless worth nothing and not consumed).",
    searchVolume: 1800,
  },
  {
    slug: "archdruid-5e",
    name: "Archdruid 5e",
    parentClass: "Druid",
    parentClassSlug: "druid-5e",
    category: "features",
    level: "20th",
    description: "Archdruid is the Druid's 20th level capstone, granting unlimited Wild Shape uses and the ability to ignore material components.",
    mechanics: "Unlimited Wild Shape uses. Can ignore verbal, somatic, and material components (unless consumed or have gold cost) for druid spells.",
    searchVolume: 1600,
  },
  {
    slug: "fighting-style-5e",
    name: "Fighting Style 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "features",
    level: "1st",
    description: "Fighting Style gives Fighters a specialized combat technique at 1st level, defining their approach to battle.",
    mechanics: "Choose one style: Archery (+2 ranged), Defense (+1 AC in armor), Dueling (+2 damage one-handed), GWF (reroll 1s/2s two-handed), Protection (impose disadvantage), Two-Weapon Fighting (add ability mod to off-hand).",
    searchVolume: 5200,
    faq: [
      {
        question: "What is the overall best fighting style?",
        answer: "Krav Maga is considered to be the deadliest martial art for self-defense due to its comprehensive approach. Brazilian Jiu-Jitsu, Krav Maga, Muay Thai, Boxing, Jeet Kune Do and other styles are among the top 10 deadliest martial arts in the world."
      },
      {
        question: "Is fighter a good D\\&D class for beginners?",
        answer: "Fighter is the best class for a beginner, there is very little they need to learn and can focus more on role play than learning what spells do and how spell slots work. If they really want to play a caster, they just need to spend a little time learning some stuff."
      },
    ],
  },
  {
    slug: "second-wind-5e",
    name: "Second Wind 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "features",
    level: "1st",
    description: "Second Wind allows Fighters to heal themselves as a bonus action, regaining hit points equal to 1d10 + fighter level.",
    mechanics: "Bonus action to regain 1d10 + fighter level HP. One use per short or long rest.",
    searchVolume: 6800,
  },
  {
    slug: "action-surge-5e",
    name: "Action Surge 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "features",
    level: "2nd",
    description: "Action Surge is the Fighter's most powerful feature, granting an additional action on their turn for devastating burst damage.",
    mechanics: "On your turn, take one additional action. One use per short/long rest (two uses at 17th level). Legendary for nova damage rounds.",
    searchVolume: 12400,
  },
  {
    slug: "martial-archetype-5e",
    name: "Martial Archetype 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "features",
    level: "3rd",
    description: "Martial Archetype is the Fighter's subclass choice at 3rd level, defining their specialized combat training and abilities.",
    mechanics: "Choose archetype at 3rd level. Options: Champion (crits), Battle Master (maneuvers), Eldritch Knight (magic), Arcane Archer (magic arrows), Cavalier (mounted), Samurai (fighting spirit), Echo Knight (echo), Psi Warrior (psychic), Rune Knight (giant runes).",
    searchVolume: 2900,
    faq: [
      {
        question: "What is martial archetype 5E?",
        answer: "Martial Archetype\n At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description."
      },
      {
        question: "What are the martial classes in D&D?",
        answer: "The classifications are as follows: Martial Classes: Barbarian, Fighter, Monk, Paladin, Ranger, Rogue. Full Caster Classes: Druid, Bard, Cleric, Wizard, Sorcerer, Warlock."
      },
      {
        question: "What is the best martial archetype?",
        answer: "Fighter is the best martial, and Echo is the best Fighter."
      },
    ],
  },
  {
    slug: "extra-attack-5e",
    name: "Extra Attack 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "features",
    level: "5th",
    description: "Fighters get Extra Attack at 5th level and unique additional attacks at 11th (3 attacks) and 20th level (4 attacks).",
    mechanics: "Attack twice at 5th level. Three attacks at 11th. Four attacks at 20th. Only class to get more than 2 attacks from this feature.",
    searchVolume: 2400,
    faq: [
      {
        question: "What is the extra attack rule in 5e?",
        answer: "What Is Extra Attack in D&D 5e? Extra Attack is a class feature that allows a character to make more than one attack when they take the Attack action on their turn. That's important, only the Attack action triggers Extra Attack. It does not apply to bonus actions, reactions, or casting spells."
      },
      {
        question: "How to calculate fighter attack bonus?",
        answer: "Default formula The basic attack bonus formula is: Ability Modifier + Proficiency + Enchanted Item Bonus + Class Features = Attack Bonus."
      },
      {
        question: "What is the bonus action for fighters?",
        answer: "On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
      },
    ],
  },
  {
    slug: "indomitable-5e",
    name: "Indomitable 5e",
    parentClass: "Fighter",
    parentClassSlug: "fighter-5e",
    category: "features",
    level: "9th",
    description: "Indomitable allows Fighters to reroll a failed saving throw, potentially turning defeat into survival.",
    mechanics: "Reroll a saving throw you fail. Must use the new roll. One use per long rest (two at 13th, three at 17th).",
    searchVolume: 3500,
    faq: [
      {
        question: "What is indomitable 5e?",
        answer: "Indomitable. Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level ..."
      },
      {
        question: "How does indomitable might work in 5e?",
        answer: "Indomitable Might\n Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
    ],
  },
  {
    slug: "unarmored-defense-5e",
    name: "Unarmored Defense 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "1st",
    description: "Monk's Unarmored Defense sets AC to 10 + DEX modifier + WIS modifier when not wearing armor or using a shield.",
    mechanics: "While not wearing armor or shield, AC = 10 + DEX mod + WIS mod. Different from Barbarian version (uses WIS instead of CON).",
    searchVolume: 3200,
    faq: [
      {
        question: "What is unarmored defense for monk?",
        answer: "Unarmored Defense\n Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
      },
      {
        question: "How do you calculate unarmored defense 5e?",
        answer: "Unarmored Defense: While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. Given the identical wording I'd say it doesn't stack. It's either one or the other."
      },
    ],
  },
  {
    slug: "martial-arts-5e",
    name: "Martial Arts 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "1st",
    description: "Martial Arts allows Monks to use DEX for unarmed strikes and monk weapons, use a d4+ for damage, and make bonus action unarmed strikes.",
    mechanics: "Use DEX instead of STR for monk weapons/unarmed. Unarmed damage is d4 (scaling to d10). When attacking with monk weapon/unarmed, bonus action unarmed strike.",
    searchVolume: 7800,
  },
  {
    slug: "ki-5e",
    name: "Ki 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "2nd",
    description: "Ki is the Monk's resource pool for powering special abilities like Flurry of Blows, Patient Defense, and Step of the Wind.",
    mechanics: "Ki points equal to monk level. Regain all on short/long rest. Ki save DC = 8 + proficiency + WIS mod. Powers many monk abilities.",
    searchVolume: 8900,
    faq: [
      {
        question: "Is KI part of the weave?",
        answer: "I treat ki as being a fundamental force of life that monks learn to master and manipulate. It can certainly be used to interact with the Weave (see: Shadow and Four Elements), but it isn't directly part of the Weave itself."
      },
      {
        question: "How many ki points per turn?",
        answer: "You can spend as many Ki points in 1 turn as you like providing you have an action, bonus action, or reaction available to expend a Ki point. Spending KP does not affect the number of actions, bonus actions, reactions, etc you get."
      },
      {
        question: "What does \"is a ki\" mean?",
        answer: "Ki is the energy of life, all living things have it, and spiritual and physical training can increase the stores of ki an individual can harness. DBZ characters use it to shoot energy blasts and fly, Hamon in JoJo's Bizarre Adventure is basically the same thing by another name."
      },
      {
        question: "Does KI count as magic?",
        answer: "Ki was variously considered to be similar to but distinct from the mental energy utilized in psionics, to be a form of psionic energy itself or a magical energy that worked with psionics, [ note 1 ] and finally as a wholly magical energy or one whose application created magical effects."
      },
    ],
  },
  {
    slug: "flurry-of-blows-5e",
    name: "Flurry of Blows 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "2nd",
    description: "Flurry of Blows allows Monks to spend 1 ki to make two unarmed strikes as a bonus action after attacking.",
    mechanics: "After taking Attack action, spend 1 ki to make 2 unarmed strikes as bonus action (instead of 1 from Martial Arts).",
    searchVolume: 6100,
    faq: [
      {
        question: "How does flurry of blows work in 5e?",
        answer: "Flurry of Blows\n Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
      },
      {
        question: "How many times do you roll for a flurry of blows?",
        answer: "Total of four rolls : Attack, Extra Attack, and two for Bonus Action Flurry of Blows. You can only use Flurry of Blows once per turn."
      },
      {
        question: "Can you use flurry of blows if you miss?",
        answer: "It doesn't matter if you miss or not. You can still flurry of blows or use your bonus action to attack. You just have to have made an attack with yoir action with a monk weapon or unarmed strike."
      },
    ],
  },
  {
    slug: "patient-defense-5e",
    name: "Patient Defense 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "2nd",
    description: "Patient Defense lets Monks spend 1 ki to take the Dodge action as a bonus action, becoming harder to hit.",
    mechanics: "Spend 1 ki to Dodge as bonus action. Attack rolls against you have disadvantage, advantage on DEX saves.",
    searchVolume: 3400,
    faq: [
      {
        question: "What is patient defense 5e?",
        answer: "Source: Free Basic Rules (2014) You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
      },
      {
        question: "What is patient defense?",
        answer: "Patient Defence is a Monk bonus action that allows them to enter a defensive stance to evade incoming attacks."
      },
      {
        question: "Is patient defense a bonus action?",
        answer: "Patient Defense: You can now Disengage as a Bonus Action for free, or spend a Focus Point to both Disengage and Dodge. Step of the Wind: Similarly, you can Dash as a Bonus Action for free, or spend a Focus Point to Disengage, Dash, and double your jump distance."
      },
    ],
  },
  {
    slug: "step-of-the-wind-5e",
    name: "Step of the Wind 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "2nd",
    description: "Step of the Wind allows Monks to spend 1 ki to Dash or Disengage as a bonus action and double jump distance.",
    mechanics: "Spend 1 ki to Dash or Disengage as bonus action. Jump distance doubled for the turn.",
    searchVolume: 3100,
    faq: [
      {
        question: "Does Step of the Wind take a KI point?",
        answer: "The ability of step of the wind is you spend the ki point as it says to take either the dash or disengage action. Since its stats you are spending the ki point to take either of those actions, then by using the ability, you have chosen to take either on of those actions. By doing so, you get the jump distance."
      },
      {
        question: "What is the most fun Monk subclass?",
        answer: "Way of Mercy\n Presented as a mask wearing grim healer, using their knowledge of the body and life force to bring healing to their friends and pain to their enemies, the Way of Mercy is one of the coolest Monk subclasses, but it's also our pick for most powerful."
      },
      {
        question: "What is the fastest Monk in D&D?",
        answer: "Thus in conclusion: The fastest Monk alive is a Hasted Tabaxi Monk with Fly cast upon them. If we go with the base information from earlier, 30 ft movement, 30 from Unarmed Movement, 10 from Mobile. And add in spells, haste for double, long strider for 10 ft, and transmuters Stone for 10 ft."
      },
    ],
  },
  {
    slug: "unarmored-movement-5e",
    name: "Unarmored Movement 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "2nd",
    description: "Unarmored Movement increases the Monk's speed while not wearing armor, eventually allowing them to run on walls and water.",
    mechanics: "Speed +10ft at 2nd level (scaling to +30ft at 18th). At 9th level, can run on vertical surfaces and water without falling if ending turn on solid ground.",
    searchVolume: 2800,
    faq: [
      {
        question: "How does unarmored movement work in 5e?",
        answer: "Unarmored Movement\n Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "Does unarmored movement affect climbing speed?",
        answer: "Yes, the speed boost applies to all speeds. From the movement and position section if the combat chapter of the rules: \"Your movement can include jumping, climbing, and swimming. These different modes of movement can be combined with walking, or they can constitute your entire move."
      },
    ],
  },
  {
    slug: "monastic-tradition-5e",
    name: "Monastic Tradition 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "3rd",
    description: "Monastic Tradition is the Monk's subclass choice at 3rd level, defining the style and philosophy of their martial training.",
    mechanics: "Choose tradition at 3rd level. Options: Open Hand (combat), Shadow (stealth/magic), Four Elements (elemental bending), Drunken Master (evasion), Kensei (weapons), Sun Soul (radiant), Mercy (healing/harm), Astral Self (astral arms).",
    searchVolume: 2200,
  },
  {
    slug: "deflect-missiles-5e",
    name: "Deflect Missiles 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "3rd",
    description: "Deflect Missiles allows Monks to use their reaction to reduce ranged weapon attack damage and potentially catch and throw the projectile back.",
    mechanics: "Reaction to reduce ranged weapon damage by 1d10 + DEX + monk level. If reduced to 0, can spend 1 ki to throw it back (monk weapon attack, 20/60 range).",
    searchVolume: 4200,
  },
  {
    slug: "slow-fall-5e",
    name: "Slow Fall 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "4th",
    description: "Slow Fall allows Monks to use their reaction to reduce falling damage by 5 times their monk level.",
    mechanics: "Reaction to reduce falling damage by 5 \u00d7 monk level. At 20th level, reduces by 100 damage.",
    searchVolume: 2400,
    faq: [
      {
        question: "How does slow fall work in 5e?",
        answer: "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
      },
      {
        question: "How does slow fall work?",
        answer: "The affected entity falls at a much slower rate than normal, with a terminal velocity of 9.8 m/s, and is unable to take fall damage when falling. However, the entity still takes damage from using an ender pearl. In addition, the entity cannot turn farmland into dirt by jumping on it."
      },
      {
        question: "Does slow falling negate fall damage?",
        answer: "Slow Falling is a status effect that causes the affected mob to fall slower and take no fall damage, but does not prevent ender pearl damage."
      },
    ],
  },
  {
    slug: "extra-attack-5e",
    name: "Extra Attack 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "5th",
    description: "At 5th level, Monks gain Extra Attack, allowing them to attack twice when taking the Attack action.",
    mechanics: "Attack twice when taking Attack action. Combined with Flurry of Blows, monks can make 4 attacks per turn.",
    searchVolume: 1600,
    faq: [
      {
        question: "What is the extra attack rule in 5e?",
        answer: "What Is Extra Attack in D&D 5e? Extra Attack is a class feature that allows a character to make more than one attack when they take the Attack action on their turn. That's important, only the Attack action triggers Extra Attack. It does not apply to bonus actions, reactions, or casting spells."
      },
      {
        question: "What do monks add to their attack roll?",
        answer: "You can use your DEX modifier instead of the STR modifier for attacks and damage rolls while using unarmed strikes or your monk weapon. Your unarmed strikes deal 1d4 damage, this d4 changes as you gain monk levels: to a d6 at level 5, to a d8 at level 11 and to a d10 at level 17."
      },
    ],
  },
  {
    slug: "stunning-strike-5e",
    name: "Stunning Strike 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "5th",
    description: "Stunning Strike is one of the most powerful Monk features, allowing them to spend ki to potentially stun enemies on a hit.",
    mechanics: "When hitting with melee weapon attack, spend 1 ki. Target must make CON save or be stunned until end of your next turn. Extremely powerful crowd control.",
    searchVolume: 8400,
    faq: [
      {
        question: "What is the 65% rule in D&D?",
        answer: "In 5e the chance of hitting is on average 65%. Based on that a +2 mod on AC reduces the chance to 55%. And a +9 mod to AC reduces the chance to hit to 20%. The three brackets represent you have a 65% chance to do minimum damage, 55% to do average damage and 20% to do max damage."
      },
      {
        question: "Does stunning strike give advantage?",
        answer: "So you can't look at the value of a single Stunning Strike, but rather in being able to repeat it in the same round, like casting multiple spells, and how it makes all of the rest of your attacks that round and the next round with advantage. (Which also makes it easier to reapply.)"
      },
      {
        question: "Does Stunned stop legendary actions?",
        answer: "Monsters with Legendary Actions are especially susceptible to being being Incapacitated \u2013 cannot take actions or reactions \u2013 and its dependent conditions Petrified, Paralyzed, Stunned), which also prevent its use of Legendary Actions."
      },
      {
        question: "What is the stunned rule in 5e?",
        answer: "Stunned. A stunned creature is incapacitated (see the condition), can't move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage."
      },
    ],
  },
  {
    slug: "ki-empowered-strikes-5e",
    name: "Ki-Empowered Strikes 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "6th",
    description: "Ki-Empowered Strikes makes the Monk's unarmed strikes count as magical for overcoming resistance and immunity.",
    mechanics: "At 6th level, unarmed strikes count as magical for overcoming resistance/immunity to nonmagical attacks.",
    searchVolume: 2100,
    faq: [
      {
        question: "What are KI empowered strikes?",
        answer: "I am playing a monk, and at level 6 I got Ki Empowered Strikes, which states: Your unarmed strikes count as magical for the purposes of overcoming resistance and immunity to non-magical attacks and damage."
      },
      {
        question: "What is monk level 13 tongue of the sun and moon?",
        answer: "The description of the monk's Tongue of the Sun and Moon feature states: Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
      },
      {
        question: "What is the fastest monk in D&D?",
        answer: "Thus in conclusion: The fastest Monk alive is a Hasted Tabaxi Monk with Fly cast upon them. If we go with the base information from earlier, 30 ft movement, 30 from Unarmed Movement, 10 from Mobile. And add in spells, haste for double, long strider for 10 ft, and transmuters Stone for 10 ft."
      },
    ],
  },
  {
    slug: "evasion-5e",
    name: "Evasion 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "7th",
    description: "Evasion allows Monks to take no damage on successful DEX saves against effects that deal half damage on success.",
    mechanics: "When subjected to effect allowing DEX save for half damage: success = no damage, failure = half damage. Doesn't work if incapacitated.",
    searchVolume: 2600,
    faq: [
      {
        question: "Do monks have evasion 5e?",
        answer: "Monk Evasion. At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell."
      },
      {
        question: "How does evasion work in 5e?",
        answer: "The Rogue ability that helps with spells or effects like Fireball or any other effect that allows you to make a Dexterity Save for half damage is Evasion. Evasion just means you only take half damage from Fireball (and others) if you fail the Dex Save or avoid all damage if you succeed the save."
      },
    ],
  },
  {
    slug: "stillness-of-mind-5e",
    name: "Stillness of Mind 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "7th",
    description: "Stillness of Mind lets Monks use their action to end one effect causing them to be charmed or frightened.",
    mechanics: "Action to end one effect on yourself that's causing charmed or frightened condition.",
    searchVolume: 1800,
    faq: [
      {
        question: "What is the 65% rule in D&D?",
        answer: "In 5e the chance of hitting is on average 65%. Based on that a +2 mod on AC reduces the chance to 55%. And a +9 mod to AC reduces the chance to hit to 20%. The three brackets represent you have a 65% chance to do minimum damage, 55% to do average damage and 20% to do max damage."
      },
      {
        question: "What is the meaning of stillness of mind?",
        answer: "Stillness, as described means that quiet state of calmness and lack of movement and more than anything else in terms of personal well-being, stillness does not mean immobility. It refers to the stilled mind and stilled emotions so that you may be conscious without being distracted."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "What is the easiest monk subclass?",
        answer: "If you want the absolute easiest subclass possible, go with Way of the Open Hand. No weapons or spells to worry about. You just punch people. And occasionally use your ki to punch real extra good."
      },
    ],
  },
  {
    slug: "purity-of-body-5e",
    name: "Purity of Body 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "10th",
    description: "Purity of Body makes Monks immune to disease and poison, representing their purified and disciplined body.",
    mechanics: "At 10th level, immune to disease and poison damage/condition.",
    searchVolume: 1600,
    faq: [
      {
        question: "Does purity of body give immunity to poison damage?",
        answer: "Does a monk's Purity of Body feature grant immunity to poison damage, the poisoned condition, or both? That feature grants immunity to both. As a result, a monk with Purity of Body can, for example, inhale a green dragon's poison breath unharmed."
      },
      {
        question: "What is Monk level 13 tongue of the sun and moon?",
        answer: "The description of the monk's Tongue of the Sun and Moon feature states: Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
      },
    ],
  },
  {
    slug: "tongue-of-the-sun-and-moon-5e",
    name: "Tongue of the Sun and Moon 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "13th",
    description: "Tongue of the Sun and Moon allows Monks to understand and be understood by any creature that speaks a language.",
    mechanics: "At 13th level, understand all spoken languages and any creature that speaks can understand you.",
    searchVolume: 1400,
    faq: [
      {
        question: "What is the most fun monk subclass?",
        answer: "Way of Mercy\n Presented as a mask wearing grim healer, using their knowledge of the body and life force to bring healing to their friends and pain to their enemies, the Way of Mercy is one of the coolest Monk subclasses, but it's also our pick for most powerful."
      },
      {
        question: "What is the fastest monk in D&D?",
        answer: "Thus in conclusion: The fastest Monk alive is a Hasted Tabaxi Monk with Fly cast upon them. If we go with the base information from earlier, 30 ft movement, 30 from Unarmed Movement, 10 from Mobile. And add in spells, haste for double, long strider for 10 ft, and transmuters Stone for 10 ft."
      },
    ],
  },
  {
    slug: "diamond-soul-5e",
    name: "Diamond Soul 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "14th",
    description: "Diamond Soul gives Monks proficiency in all saving throws and the ability to spend ki to reroll failed saves.",
    mechanics: "At 14th level, proficient in all saving throws. Can spend 1 ki to reroll a failed save.",
    searchVolume: 2800,
  },
  {
    slug: "timeless-body-5e",
    name: "Timeless Body 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "15th",
    description: "Timeless Body eliminates the Monk's need for food and water and makes them immune to aging effects.",
    mechanics: "At 15th level, don't need food or water. Don't suffer frailty of old age and can't be magically aged.",
    searchVolume: 1200,
    faq: [
      {
        question: "How does Timeless Body work in D&D?",
        answer: "In conclusion: Timeless Body still lets you age, and you may still die of old age naturally. However, due to your timeless body, you don't get the back pain or blurry vision that comes with senescence. They die suddenly, since they don't suffer any ill effects, they are fine one moment and dead from old age the next."
      },
      {
        question: "What is Monk level 13 tongue of the sun and moon?",
        answer: "The description of the monk's Tongue of the Sun and Moon feature states: Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
      },
    ],
  },
  {
    slug: "empty-body-5e",
    name: "Empty Body 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "18th",
    description: "Empty Body allows Monks to become invisible and resistant to all damage except force by spending ki.",
    mechanics: "Spend 4 ki to become invisible for 1 minute with resistance to all damage except force. Can also spend 8 ki to cast Astral Projection (self only).",
    searchVolume: 2200,
    faq: [
      {
        question: "How does an empty body work?",
        answer: "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage. Additionally, you can spend 8 ki points to cast the Astral Projection spell, without needing material components."
      },
    ],
  },
  {
    slug: "perfect-self-5e",
    name: "Perfect Self 5e",
    parentClass: "Monk",
    parentClassSlug: "monk-5e",
    category: "features",
    level: "20th",
    description: "Perfect Self ensures Monks always have at least 4 ki points when rolling initiative with none remaining.",
    mechanics: "At 20th level, when rolling initiative with no ki points, regain 4 ki points.",
    searchVolume: 1100,
  },
  {
    slug: "divine-sense-5e",
    name: "Divine Sense 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "1st",
    description: "Divine Sense allows Paladins to detect celestials, fiends, and undead within 60 feet, as well as consecrated or desecrated ground.",
    mechanics: "Action to detect celestials/fiends/undead within 60ft and consecrated/desecrated areas. Know type and location but not identity. 1 + CHA mod uses per long rest.",
    searchVolume: 4100,
    faq: [
      {
        question: "What does divine sense do in 5e?",
        answer: "Divine Sense is a paladin class feature available at level 1. As an action, paladins can activate Divine Sense to learn the location of any celestials, fiends, or undead within 60 feet. They can also learn the creature's type and the location of consecrated or desecrated places and objects."
      },
      {
        question: "How long does divine sense last?",
        answer: "As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover."
      },
      {
        question: "What are the limitations of divine sense?",
        answer: "Limited Range : Divine Sense has a range of 60 feet, which means it can only detect creatures within that radius. If the target is beyond this range, it won't be detected by Divine Sense. Limited Uses: Divine Sense has a limited number of uses per day, typically based on the paladin's level."
      },
      {
        question: "What happens when the divine sense is used?",
        answer: "As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity..."
      },
    ],
  },
  {
    slug: "lay-on-hands-5e",
    name: "Lay on Hands 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "1st",
    description: "Lay on Hands gives Paladins a pool of healing power they can use to restore HP or cure diseases and poisons.",
    mechanics: "Pool of HP equal to 5 \u00d7 paladin level. Touch to restore HP from pool. Can spend 5 HP from pool to cure disease or neutralize poison instead.",
    searchVolume: 7200,
    faq: [
      {
        question: "How does Lay on Hands work in 5e?",
        answer: "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it."
      },
      {
        question: "Can I use Lay on Hands on myself in D&D 5e?",
        answer: "You can absolutely use Lay on Hands on yourself."
      },
      {
        question: "Can Lay on Hands be used on yourself?",
        answer: "Paladins can use the lay on hands ability on themselves as a swift action without needing to actually make contact with themselves - they're always in contact with themselves, so it just uses up a swift action to make the ability go off after the conscious decision is made."
      },
    ],
  },
  {
    slug: "fighting-style-5e",
    name: "Fighting Style 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "2nd",
    description: "Fighting Style gives Paladins a specialized combat technique at 2nd level, complementing their divine abilities.",
    mechanics: "Choose one style at 2nd level: Defense (+1 AC), Dueling (+2 damage one-handed), Great Weapon Fighting (reroll 1s/2s), Protection (impose disadvantage).",
    searchVolume: 2400,
    faq: [
      {
        question: "Do paladins get a fighting style?",
        answer: "Fighting Style. Unfortunately, paladins do not get the same variety in fighting styles that fighters have. All of theirs are either defensive or melee-oriented, with the exception of Blessed Warrior (which will be discussed in the spells section, naturally)."
      },
      {
        question: "What is the best fighting style in 5E?",
        answer: "Archery * \u2013 Easily one of the best Fighting styles in 5E. This helps you hit better right from 1st level, and it mitigates the penalty for something like Sharpshooter."
      },
    ],
  },
  {
    slug: "divine-smite-5e",
    name: "Divine Smite 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "2nd",
    description: "Divine Smite is the Paladin's signature burst damage feature, expending spell slots to deal massive radiant damage on weapon hits.",
    mechanics: "When hitting with melee weapon, expend spell slot to deal +2d8 radiant (+1d8 per slot level above 1st, max 5d8). +1d8 vs undead/fiends. Can decide after hit.",
    searchVolume: 14200,
  },
  {
    slug: "sacred-oath-5e",
    name: "Sacred Oath 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "3rd",
    description: "Sacred Oath is the Paladin's subclass choice at 3rd level, representing the divine oath that defines their code and powers.",
    mechanics: "Choose oath at 3rd level. Options: Devotion (classic), Ancients (nature), Vengeance (punishment), Oathbreaker (evil), Conquest (domination), Redemption (peace), Glory (heroism), Watchers (extraplanar threats).",
    searchVolume: 3400,
    faq: [
      {
        question: "What does the sacred oath do in D&D?",
        answer: "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion."
      },
      {
        question: "How many times can a paladin use channel divinity?",
        answer: "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
      },
    ],
  },
  {
    slug: "channel-divinity-5e",
    name: "Channel Divinity 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "3rd",
    description: "Channel Divinity gives Paladins access to powerful divine abilities that vary by Sacred Oath, usable once per short rest.",
    mechanics: "Use once per short/long rest. Each oath grants unique options. Common options include boosting attacks, frightening enemies, or empowering allies.",
    searchVolume: 2800,
    faq: [
      {
        question: "How many channel divinity do paladins get in 5e?",
        answer: "When you take this oath at 3rd level, you gain the following two Channel Divinity options. Sacred Weapon: As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity."
      },
      {
        question: "Do Paladin and cleric channel divinity stack?",
        answer: "If you already have the Channel Divinity feature and gain a level in a class that also grants the feature, you gain the Channel Divinity effects granted by that class, but getting the feature again doesn't give you an additional use of it."
      },
      {
        question: "What does Channel Divinity do in 5e?",
        answer: "Channel Divinity\n At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain."
      },
      {
        question: "How many channel oath charges do paladins get?",
        answer: "Though paladins will only ever have a single charge available to them, it is replenished on a short or long rest."
      },
    ],
  },
  {
    slug: "extra-attack-5e",
    name: "Extra Attack 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "5th",
    description: "At 5th level, Paladins gain Extra Attack, allowing two attacks per Attack action for more smite opportunities.",
    mechanics: "Attack twice when taking Attack action. Combined with Divine Smite, paladins can deal massive nova damage.",
    searchVolume: 1400,
    faq: [
      {
        question: "Do paladins get extra attack 5e?",
        answer: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
      },
      {
        question: "How many attacks can a paladin have?",
        answer: "Most paladins can only get up to three attacks with Haste+extra attack. However, if your Paladin is dual-wielding light weapons, you can use your bonus action to make a fourth weapon attack with the weapon in your other hand, without any extra necessities (Extra attack+haste+bonus action=4 attacks)."
      },
      {
        question: "What is the extra attack rule in 5e?",
        answer: "What Is Extra Attack in D&D 5e? Extra Attack is a class feature that allows a character to make more than one attack when they take the Attack action on their turn. That's important, only the Attack action triggers Extra Attack. It does not apply to bonus actions, reactions, or casting spells."
      },
      {
        question: "What subclasses give extra attack?",
        answer: "There are 4 classes that can gain the Extra Attack feature by selecting certain subclasses and/or class options ( Artificer, Bard, Warlock, and Wizard.) The Bladesinger (wizard subclass) is the only option for a player that that wants Extra Attack and full-caster Spellcasting."
      },
    ],
  },
  {
    slug: "aura-of-protection-5e",
    name: "Aura of Protection 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "6th",
    description: "Aura of Protection adds the Paladin's Charisma modifier to all saving throws for the paladin and nearby allies.",
    mechanics: "You and friendly creatures within 10ft add your CHA mod to saving throws (min +1). Radius increases to 30ft at 18th level. Requires consciousness.",
    searchVolume: 5800,
    faq: [
      {
        question: "Is Aura of Protection always active?",
        answer: "Once activated, the aura lasts for as long as the class action is available to the character."
      },
      {
        question: "How does Aura of Protection work in 5e?",
        answer: "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1)."
      },
      {
        question: "How good is Aura of Protection?",
        answer: "Experts Agree: Aura Is #1 for Family Online Protection\n If the worst should happen, Aura's U.S.-based support team is available 24/7 \u2014 with every account covered by at least $1 million in identity theft insurance."
      },
    ],
  },
  {
    slug: "aura-of-courage-5e",
    name: "Aura of Courage 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "10th",
    description: "Aura of Courage makes the Paladin and nearby allies immune to being frightened while the Paladin is conscious.",
    mechanics: "You and friendly creatures within 10ft can't be frightened while you're conscious. Radius increases to 30ft at 18th level.",
    searchVolume: 2600,
    faq: [
      {
        question: "What does Aura of Courage do?",
        answer: "Aura of Courage cancels the frightened condition whether existing or not."
      },
      {
        question: "Is Aura of Courage a good deck?",
        answer: "Aura of Courage: This is a good deck out of the box, and it's easier to find on shelves. That being said, Galea isn't a *true* Aura deck, as she works with a smattering of equipment as well. Equipment will be expensive, like others have said. It's a good deck all around, but upgrading it will cost a pretty penny."
      },
      {
        question: "How many times can a paladin use channel divinity?",
        answer: "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
      },
    ],
  },
  {
    slug: "improved-divine-smite-5e",
    name: "Improved Divine Smite 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "11th",
    description: "Improved Divine Smite adds 1d8 radiant damage to all melee weapon hits, making every attack holy and powerful.",
    mechanics: "At 11th level, all melee weapon attacks deal +1d8 radiant damage. This is in addition to (not instead of) Divine Smite.",
    searchVolume: 3200,
    faq: [
      {
        question: "What is improved divine smite?",
        answer: "Improved Divine Smite applies to ALL melee weapon attacks, and doesn't pertain to the limit of the Divine Smite damage cap, because it doesn't say it does. It is an extra +1d8. (No action required.) Divine Smite applies to any melee weapon attack you decide to expend a 1st to 4th level spell slot for."
      },
      {
        question: "Is improved divine smite worth it?",
        answer: "Improved divine smite is extra damage, so it's nice. But it's not worth it spending all those levels on once you already have your auras. Sure, taking 12 straight levels in paladin is still a strong build, but choosing improved divine smite over multiclassing is never going to be the optimal choice."
      },
      {
        question: "How to increase divine smite damage?",
        answer: "Divine Smite's damage is fixed based on the level of the spell slot you use. The only ways to do more damage with it are to use higher level spell slots or get a critical hit."
      },
      {
        question: "Why was Divine smite nerfed?",
        answer: "Generally speaking, there was a consensus among many Dungeons & Dragons designers and players that a change was needed for the Divine Smite ability. However, some believe that a softer approach was warranted by limiting Divine Smite to once a turn instead of tying it to Bonus Actions."
      },
    ],
  },
  {
    slug: "cleansing-touch-5e",
    name: "Cleansing Touch 5e",
    parentClass: "Paladin",
    parentClassSlug: "paladin-5e",
    category: "features",
    level: "14th",
    description: "Cleansing Touch allows Paladins to end spells on willing creatures or themselves using their action.",
    mechanics: "Action to end one spell on yourself or willing creature you touch. CHA mod uses per long rest.",
    searchVolume: 1800,
    faq: [
      {
        question: "Can you clean yourself with prestidigitation?",
        answer: "However, it can't replace bathing, because player characters aren't objects; they're classed as creatures. No effect of the spell cleans a creature."
      },
      {
        question: "How many times can a paladin use channel divinity?",
        answer: "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
      },
      {
        question: "Which Oath is best for paladin?",
        answer: "You want to create. So if we're talking pure damage oathbreaker is probably the best because of aura of hate granting. Plus five damage to the paladin. At max charisma."
      },
    ],
  },
  {
    slug: "favored-enemy-5e",
    name: "Favored Enemy 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "1st",
    description: "Favored Enemy gives Rangers expertise in tracking and knowledge about specific creature types, with language bonuses.",
    mechanics: "Choose 1 type (or 2 humanoid races). Advantage on Survival to track and INT checks to recall info. Learn one language spoken by favored enemy.",
    searchVolume: 5400,
    faq: [
      {
        question: "How does favored enemy work in 5e?",
        answer: "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "What is the favored enemy bonus?",
        answer: "Specifics: The character gains a +1 bonus to any damage delivered to his favored enemy. He also receives a +1 bonus on listen, spot, and taunt checks against the favored enemy. These bonuses improve by +1 for every 5 levels that the ranger gains, but they do not improve for the Harper."
      },
    ],
  },
  {
    slug: "natural-explorer-5e",
    name: "Natural Explorer 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "1st",
    description: "Natural Explorer makes Rangers experts in specific terrain types, gaining significant travel and survival benefits.",
    mechanics: "Choose 1 terrain type. In favored terrain: difficult terrain doesn't slow group, can't get lost, alert to danger, double foraging, detailed info while tracking.",
    searchVolume: 3800,
  },
  {
    slug: "fighting-style-5e",
    name: "Fighting Style 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "2nd",
    description: "Fighting Style gives Rangers a specialized combat technique at 2nd level, typically focused on ranged or two-weapon combat.",
    mechanics: "Choose one style: Archery (+2 ranged), Defense (+1 AC), Dueling (+2 damage one-handed), Two-Weapon Fighting (add ability mod to off-hand), Druidic Warrior (druid cantrips).",
    searchVolume: 2100,
  },
  {
    slug: "ranger-archetype-5e",
    name: "Ranger Archetype 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "3rd",
    description: "Ranger Archetype is the Ranger's subclass choice at 3rd level, defining their specialized combat or exploration style.",
    mechanics: "Choose archetype at 3rd level. Options: Hunter (combat), Beast Master (companion), Gloom Stalker (darkness), Horizon Walker (planes), Monster Slayer (anti-monster), Fey Wanderer (fey), Swarmkeeper (swarm), Drakewarden (drake).",
    searchVolume: 2400,
  },
  {
    slug: "primeval-awareness-5e",
    name: "Primeval Awareness 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "3rd",
    description: "Primeval Awareness allows Rangers to spend spell slots to sense nearby aberrations, celestials, dragons, elementals, fey, fiends, and undead.",
    mechanics: "Spend spell slot to sense creature types within 1 mile (6 miles in favored terrain) for 1 minute per slot level. Know presence but not number/location.",
    searchVolume: 2800,
  },
  {
    slug: "extra-attack-5e",
    name: "Extra Attack 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "5th",
    description: "At 5th level, Rangers gain Extra Attack, allowing two attacks per Attack action.",
    mechanics: "Attack twice when taking Attack action. Combined with Hunter's Mark, rangers can deal solid sustained damage.",
    searchVolume: 1200,
    faq: [
      {
        question: "Does ranger get extra attack 5e?",
        answer: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
      },
      {
        question: "Does ranger have multiattack?",
        answer: "WIth Multiattack, yes. Once a Ranger obtains multiattack, it can attack twice with one action, in which they can shoot 2 times in one turn, using 2 arrows."
      },
      {
        question: "Does extra attack work with ranged?",
        answer: "Yes. It says that you cab attack twice instead of once when taking the Attack action. When you take the Attack action you make a weapon attack with a weapon you're holding. Nothing says that you can't attack with a ranged weapon."
      },
      {
        question: "What is the extra attack rule in 5e?",
        answer: "What Is Extra Attack in D&D 5e? Extra Attack is a class feature that allows a character to make more than one attack when they take the Attack action on their turn. That's important, only the Attack action triggers Extra Attack. It does not apply to bonus actions, reactions, or casting spells."
      },
    ],
  },
  {
    slug: "lands-stride-5e",
    name: "Land's Stride 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "8th",
    description: "Land's Stride allows Rangers to move through difficult terrain without penalty and gain advantage on saves against magical plants.",
    mechanics: "Nonmagical difficult terrain doesn't slow you. Can pass through nonmagical plants without damage. Advantage on saves vs magically created/manipulated plants.",
    searchVolume: 1800,
  },
  {
    slug: "hide-in-plain-sight-5e",
    name: "Hide in Plain Sight 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "10th",
    description: "Hide in Plain Sight allows Rangers to camouflage themselves for a significant bonus to Stealth checks while stationary.",
    mechanics: "Spend 1 minute creating camouflage. While still against solid surface, +10 to Stealth checks. Moving or taking damage ends it.",
    searchVolume: 2200,
    faq: [
      {
        question: "Can you hide in plain sight in 5e?",
        answer: "Yes, there is a way. In fact, doing just these things are explicitly listed as uses of Stealth (emphases mine): Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
    ],
  },
  {
    slug: "vanish-5e",
    name: "Vanish 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "14th",
    description: "Vanish allows Rangers to use the Hide action as a bonus action and become untrackable by nonmagical means.",
    mechanics: "At 14th level, Hide as bonus action. Can't be tracked by nonmagical means unless you choose to leave a trail.",
    searchVolume: 1600,
  },
  {
    slug: "feral-senses-5e",
    name: "Feral Senses 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "18th",
    description: "Feral Senses allows Rangers to sense invisible creatures and fight without disadvantage against unseen foes.",
    mechanics: "At 18th level, no disadvantage to attack creatures you can't see. Know location of invisible creatures within 30ft if not hidden.",
    searchVolume: 1400,
    faq: [
      {
        question: "What is the attack bonus for the Ranger?",
        answer: "You gain a +2 bonus to attack rolls you make with ranged weapons."
      },
      {
        question: "Does see invisibility negate invisibility?",
        answer: "It does not 'Negate' invisibility, as per the Dispel Magic spell, but while it lasts, the benefit is removed, because it then allows party members, other than you, to see the creature enough to hit and avoid normally."
      },
      {
        question: "How does umbral sight work in 5e?",
        answer: "Effectively what Umbral Sight does is allow them to be hidden from monsters that utilize Dark vision to see in the dark. While in the dark. Any source of light would cancel that out. Also, you can take attacks at an invisible creature."
      },
      {
        question: "Does invisibility count as total cover?",
        answer: "RAW: Invisibility is not Total Cover. RAW, if you're invisible and they don't know where you are, then they can only attack where they think you are. They can still make perception checks to determine your location and still attack you, at disadvantage, because they now know where you are."
      },
    ],
  },
  {
    slug: "foe-slayer-5e",
    name: "Foe Slayer 5e",
    parentClass: "Ranger",
    parentClassSlug: "ranger-5e",
    category: "features",
    level: "20th",
    description: "Foe Slayer is the Ranger's 20th level capstone, adding Wisdom modifier to attack or damage against favored enemies.",
    mechanics: "Once per turn, add WIS mod to attack roll OR damage roll against favored enemy.",
    searchVolume: 1100,
    faq: [
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "What is the 20th level Ranger?",
        answer: "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies."
      },
      {
        question: "How does favored foe work in 5e?",
        answer: "\u201c The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you increase that damage by 1d4. You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\u201d"
      },
    ],
  },
  {
    slug: "expertise-5e",
    name: "Expertise 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "1st",
    description: "Expertise allows Rogues to double their proficiency bonus for two skill proficiencies, becoming masters of their chosen skills.",
    mechanics: "Choose 2 skill or thieves' tools proficiencies. Proficiency bonus doubled for checks using them. Gain 2 more at 6th level.",
    searchVolume: 3800,
    faq: [
      {
        question: "How does expertise work for Rogues?",
        answer: "Rogue. The Rogue class is the quintessential expert in skill usage. At 1st level, Rogues gain the Expertise feature, allowing them to choose two skill proficiencies (or one skill and thieves' tools) to double their proficiency bonus. At 6th level, they can select two additional proficiencies for Expertise."
      },
      {
        question: "What is Rogue level 6 expertise?",
        answer: "Rogue: The Master of Expertise\n Level 6: They select two additional skills (or thieves' tools) to gain Expertise. Impact on Gameplay: Expertise allows Rogues to excel in critical skill checks such as Stealth, Sleight of Hand, and Perception, making them unparalleled scouts and infiltrators."
      },
      {
        question: "Do you get expertise when you multiclass into Rogue?",
        answer: "EDIT: For anyone wondering about this, I tested it out and the rogue's Expertise does work exactly like it does in the TTRPG. Multiclassing into rogue lets you choose two skills for expertise."
      },
      {
        question: "How much does expertise add?",
        answer: "Expertise doubles your proficiency bonus so it would be D20 + 2 (Wisdom) + 4 (your proficiency bonus doubled). Proficiency bonus just goes up the higher your characters level while ability modifiers go up if you increase a star, get a certain feat or feature and sometimes magical items."
      },
    ],
  },
  {
    slug: "sneak-attack-5e",
    name: "Sneak Attack 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "1st",
    description: "Sneak Attack is the Rogue's primary damage feature, adding extra dice to attacks made with advantage or against enemies near allies.",
    mechanics: "Once per turn, add extra damage (1d6 at 1st, scaling to 10d6 at 19th) to finesse/ranged weapon attack with advantage OR when enemy of target is within 5ft. Don't need advantage if ally is adjacent.",
    searchVolume: 22100,
    faq: [
      {
        question: "What is the sneak attack rule in 5e?",
        answer: "Sneak Attack\n The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll."
      },
      {
        question: "Is sneak attack 1d6 or 2d6?",
        answer: "The other thing you seem to be missing is that Sneak Attack is not an additional attack, but rather a damage boost to a rogue's regular attacks. It happens once per turn under certain conditions (once per turn, not once per round) and adds 1d6 damage to the attack, which later increases."
      },
      {
        question: "Is sneak attack only once per turn?",
        answer: "You can deal sneak attack damage with that reactive attack. Sneak attack is once per turn. So once it's used for one attack, it can't be used for another attack in the same turn. Keep in mind, this is once per turn, not once per round."
      },
      {
        question: "How does attacking from stealth work in 5e?",
        answer: "When a creature can't see you, you have advantage on attack rolls against it. If you are hidden\u2014both unseen and unheard\u2014when you make an attack, you give away your location when the attack hits or misses. While hidden from the enemy, you have advantage on your own attack rolls against it."
      },
    ],
  },
  {
    slug: "thieves-cant-5e",
    name: "Thieves' Cant 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "1st",
    description: "Thieves' Cant is the secret language of rogues, allowing them to communicate covertly and understand criminal symbols.",
    mechanics: "Know Thieves' Cant. Can communicate secretly in normal conversation. Understand symbols/codes used by criminals to mark locations.",
    searchVolume: 4200,
    faq: [
      {
        question: "What is thieves can't dnd 5e?",
        answer: "During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages."
      },
      {
        question: "What is the thieves cant ability?",
        answer: "The main use of thieves' cant was to communicate illicit activities, such as banditry, burglary, finding marks, and the discussion of ill-gotten loot."
      },
      {
        question: "How does thieves can't work?",
        answer: "Thieves Cant is more than just verbal. It can also consist of hand signals and body language, or the use of props. Two thieves could have a perfectly normal conversation over a cup of tea, with no code or incriminating language being spoken: Two teabags (Bank robbery)"
      },
      {
        question: "What is Thieves' cant called today?",
        answer: "Thieves' cant (also known as thieves' argot, rogues' cant, or peddler's French ) is a cant, cryptolect, or argot which was formerly used by thieves, beggars, and hustlers of various kinds in Great Britain and to a lesser extent in other English-speaking countries."
      },
    ],
  },
  {
    slug: "cunning-action-5e",
    name: "Cunning Action 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "2nd",
    description: "Cunning Action allows Rogues to Dash, Disengage, or Hide as a bonus action, giving them exceptional mobility and stealth.",
    mechanics: "Bonus action to Dash, Disengage, or Hide. Enables hit-and-run tactics and repositioning every turn.",
    searchVolume: 7600,
    faq: [
      {
        question: "What is cunning action 5e?",
        answer: "Cunning Action\n Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
      },
      {
        question: "Can you double dash with cunning action?",
        answer: "Yes, a rogue can dash then use cunning action to dash again as a bonus action. No, dash does not modify a PC's speed so the added movement does not stack."
      },
      {
        question: "How to use cunning action hide?",
        answer: "The way I've been ruling/playing it, the hider simply needs to go somewhere where they cannot be CLEARLY seen by the enemy. Perhaps they get behind an obstacle, get down in brush, hang over a ledge, or go somewhere dark. Then, they use a hide action, at which point they make a stealth roll and become hidden."
      },
      {
        question: "Is a cunning action to turn a situation to one's advantage?",
        answer: "ploy noun 1. a cunning plan or action designed to turn a situation to one's own advantage."
      },
    ],
  },
  {
    slug: "roguish-archetype-5e",
    name: "Roguish Archetype 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "3rd",
    description: "Roguish Archetype is the Rogue's subclass choice at 3rd level, defining their specialized criminal or adventuring expertise.",
    mechanics: "Choose archetype at 3rd level. Options: Thief (climbing/items), Assassin (surprise damage), Arcane Trickster (magic), Inquisitive (insight), Mastermind (social), Scout (nature), Swashbuckler (dueling), Phantom (death), Soulknife (psychic).",
    searchVolume: 2600,
    faq: [
      {
        question: "What are the roguish archetypes?",
        answer: "At 3rd level, a rogue gains the Roguish Archetype feature. The Roguish Archetypes here are available along with those offered in the Player's Handbook: the Bloodknife, Daredevil, Fencer, Gambler, Justicar, Ruffian, Saboteur, Skinchanger, and Surgeon. Also included is the Alternate Assassin."
      },
      {
        question: "What is the best roguish archetype?",
        answer: "Blademaster. ...\nBruiser. ...\nMist Walker. ...\nAdrenaline Junkie. ...\nGadgeteer. ...\nAssassin Variant: Master of Shadows. ...\nOutlaw. ...\nSniper. As a Sniper you are gifted at ranged combat, picking out an enemies weak points and attacking with deadly accuracy and power."
      },
      {
        question: "Do you gain the roguish archetype at level 2?",
        answer: "Roguish Archetype\n Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
      },
      {
        question: "Which rogue is better, 2014 or 2024?",
        answer: "In summary, the two version of the rogues are generally the same(except for those few extra options) but only because I am using three major options from 2014 (race, background, and subclass). If I were forced to only use 2024 options, the 2024 version of the closest options would be notably more powerful."
      },
    ],
  },
  {
    slug: "uncanny-dodge-5e",
    name: "Uncanny Dodge 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "5th",
    description: "Uncanny Dodge allows Rogues to use their reaction to halve the damage from an attack they can see.",
    mechanics: "Reaction when attacker you can see hits you. Halve the attack's damage against you.",
    searchVolume: 6800,
    faq: [
      {
        question: "How does Uncanny Dodge work in 5e?",
        answer: "It reads: Uncanny Dodge: Starting at 5th level, when an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
      },
      {
        question: "Is Uncanny Dodge every turn?",
        answer: "Rogue's uncanny dodge is a reaction so he can use it every turn? Unless you have a way to get more reactions, you only have one per round. You only get one reaction for round that resets at the start of your turn."
      },
      {
        question: "Can you uncanny dodge fireball?",
        answer: "No, Uncanny Dodge does not work for Fireball. Uncanny Dodge allows a rogue to halve the damage from an attack that requires an attack roll. Since Fireball requires a saving throw and not an attack roll, Uncanny Dodge cannot be used to reduce its damage However, rogues have another feature called Evasion that can help."
      },
      {
        question: "How good is Uncanny Dodge?",
        answer: "Uncanny dodge can be extremely helpful for dexterity-based builds in avoiding attacks from hidden creatures, as it allows retention of what could be a significant portion of their AC. The bonus to reflex saves versus traps is subject to the +20 saving throw cap."
      },
    ],
  },
  {
    slug: "evasion-5e",
    name: "Evasion 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "7th",
    description: "Evasion allows Rogues to take no damage on successful DEX saves against effects that deal half damage on success.",
    mechanics: "When subjected to effect allowing DEX save for half damage: success = no damage, failure = half damage. Doesn't work if incapacitated.",
    searchVolume: 3400,
    faq: [
      {
        question: "Do rogues get evasion?",
        answer: "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell."
      },
      {
        question: "How does evasion work in 5e?",
        answer: "When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
      },
      {
        question: "How many times can a rogue use evasion?",
        answer: "There aren't any written limits on how often evasion works."
      },
      {
        question: "Can you stack Uncanny Dodge and Evasion?",
        answer: "No. Uncanny dodge is for melee defense, evasion is for AOE defense. Kristopher Makrakis Uncanny dodge can be used against ranged attacks too."
      },
    ],
  },
  {
    slug: "reliable-talent-5e",
    name: "Reliable Talent 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "11th",
    description: "Reliable Talent means Rogues treat any roll of 9 or lower as a 10 on proficient ability checks, making them incredibly consistent.",
    mechanics: "At 11th level, when making ability check using proficient skill, treat d20 roll of 9 or lower as 10.",
    searchVolume: 4800,
  },
  {
    slug: "blindsense-5e",
    name: "Blindsense 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "14th",
    description: "Blindsense allows Rogues to sense invisible or hidden creatures within 10 feet, making them hard to ambush.",
    mechanics: "At 14th level, know location of hidden or invisible creatures within 10ft, as long as you can hear.",
    searchVolume: 2200,
    faq: [
      {
        question: "What is the blindsight rule in 5e?",
        answer: "Blindsight. A creature with blindsight can perceive its surroundings without relying on sight, within a specific radius. Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
      },
      {
        question: "Does BlindSense see invisibility?",
        answer: "This means that creatures with Blindsight can effectively see anything that isn't behind Total Cover, even if they have the Blinded condition or are in Darkness. Moreover, in that range, they can effectively see a creature that has the Invisible condition."
      },
      {
        question: "What is Blindsense in D&D?",
        answer: "Blindsense is a lesser ability that lets the creature notice things it cannot see, but without the precision of blindsight, using nonvisual senses, such as acute smell or hearing."
      },
      {
        question: "Is blindsight better than darkvision?",
        answer: "Blindsight has significant advantages over Darkvision, since it doesn't rely on the eyes and seeing, but relies on other senses, such as hearing or touch, or even magic."
      },
    ],
  },
  {
    slug: "slippery-mind-5e",
    name: "Slippery Mind 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "15th",
    description: "Slippery Mind gives Rogues proficiency in Wisdom saving throws, protecting against mental effects.",
    mechanics: "At 15th level, gain proficiency in Wisdom saving throws.",
    searchVolume: 1800,
    faq: [
      {
        question: "What is the slippery mind class feature?",
        answer: "A character with this feature can wriggle free from magical effects that would otherwise control or compel her. If the character is affected by an enchantment and fails her saving throw, she can attempt her saving throw again. She only gets this one extra chance to succeed at her saving throw."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "Is sneak attack 1d6 or 2d6?",
        answer: "The other thing you seem to be missing is that Sneak Attack is not an additional attack, but rather a damage boost to a rogue's regular attacks. It happens once per turn under certain conditions (once per turn, not once per round) and adds 1d6 damage to the attack, which later increases."
      },
    ],
  },
  {
    slug: "elusive-5e",
    name: "Elusive 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "18th",
    description: "Elusive prevents attackers from gaining advantage against the Rogue while they're not incapacitated.",
    mechanics: "At 18th level, no attack roll has advantage against you while you aren't incapacitated.",
    searchVolume: 1600,
    faq: [
      {
        question: "Is sneak attack 1d6 or 2d6?",
        answer: "The other thing you seem to be missing is that Sneak Attack is not an additional attack, but rather a damage boost to a rogue's regular attacks. It happens once per turn under certain conditions (once per turn, not once per round) and adds 1d6 damage to the attack, which later increases."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
    ],
  },
  {
    slug: "stroke-of-luck-5e",
    name: "Stroke of Luck 5e",
    parentClass: "Rogue",
    parentClassSlug: "rogue-5e",
    category: "features",
    level: "20th",
    description: "Stroke of Luck is the Rogue's 20th level capstone, allowing them to turn a miss into a hit or a failed check into a 20.",
    mechanics: "If attack misses, turn it into a hit. Or if failing ability check, treat d20 roll as 20. One use per short/long rest.",
    searchVolume: 1400,
    faq: [
      {
        question: "Does stroke of luck count as a crit?",
        answer: "In essence, a critical hit represents a stroke of luck, extraordinary skill, or a well-placed strike that bypasses a foe's defences, resulting in a more significant and often devastating blow."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
      {
        question: "How does luck work in D&D 5E?",
        answer: "Points. After you roll the dieice. But before the outcome is determined. You choose which of the d20s. Is used for the attack roll ability check or saving throw."
      },
      {
        question: "Is sneak attack 1d6 or 2d6?",
        answer: "The other thing you seem to be missing is that Sneak Attack is not an additional attack, but rather a damage boost to a rogue's regular attacks. It happens once per turn under certain conditions (once per turn, not once per round) and adds 1d6 damage to the attack, which later increases."
      },
    ],
  },
  {
    slug: "sorcerous-origin-5e",
    name: "Sorcerous Origin 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "features",
    level: "1st",
    description: "Sorcerous Origin is the Sorcerer's subclass, representing the source of their innate magical power.",
    mechanics: "Choose origin at 1st level. Options: Draconic (dragon blood), Wild Magic (chaos), Divine Soul (divine), Shadow (shadowfell), Storm (tempest), Aberrant Mind (psychic), Clockwork Soul (order).",
    searchVolume: 2800,
  },
  {
    slug: "font-of-magic-5e",
    name: "Font of Magic 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "features",
    level: "2nd",
    description: "Font of Magic gives Sorcerers their Sorcery Point pool, which powers Metamagic and can be converted to/from spell slots.",
    mechanics: "Sorcery points equal to sorcerer level. Regain all on long rest. Can convert spell slots to points (slot level = points) or points to slots.",
    searchVolume: 3600,
    faq: [
      {
        question: "Is font of magic a bonus action?",
        answer: "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
      },
      {
        question: "How is magic described in D&D?",
        answer: "At its most basic level, magic can be used to create a desired effect through the recitation of some form of incantation, combined with physical gesturing and the utilization of some material components or foci (\"Triad Magicium\" to earlier authors)."
      },
      {
        question: "What is the draconic subclass of sorcerer?",
        answer: "The Draconic Bloodline Sorcerer is a spellcaster infused with the raw power of dragons, channeling their magical ancestry into destructive spells, elemental resistance, and enhanced durability."
      },
    ],
  },
  {
    slug: "sorcery-points-5e",
    name: "Sorcery Points 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "features",
    level: "2nd",
    description: "Sorcery Points are the Sorcerer's resource for Metamagic and Flexible Casting, equal to sorcerer level.",
    mechanics: "Pool equals sorcerer level. Powers Metamagic options. Can create spell slots: 2 points = 1st level, 3 = 2nd, 5 = 3rd, 6 = 4th, 7 = 5th (max).",
    searchVolume: 5800,
    faq: [
      {
        question: "What are sorcery points 5e?",
        answer: "Think of Sorcery Points as being a bit like magic vouchers that you can cash in whenever you need to gain an extra spell slot. Sorcery Points can be used to do more than this when your character reaches higher levels, but at first their main use is to be exchanged for spell slots."
      },
      {
        question: "How to calculate sorcery points in D&D?",
        answer: "You have 2 sorcery points, and you gain one additional point every time you level up, to a maximum of 20 at level 20. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
      },
      {
        question: "How many sorcery points to regain a spell slot?",
        answer: "So it costs 2 points to get a 1st level slot, but you only get 1 point to turn it back. It costs 3 for a level 2, but you get 2 when you turn it back. 5 points > 3rd level > 3 points, 6 points > 4th level > 4 points, 7 points > 5th level > 5 points. Converting a Spell Slot to Sorcery Points."
      },
      {
        question: "What stat do sorcerers use?",
        answer: "Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability."
      },
    ],
  },
  {
    slug: "flexible-casting-5e",
    name: "Flexible Casting 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "features",
    level: "2nd",
    description: "Flexible Casting allows Sorcerers to convert spell slots into Sorcery Points and vice versa.",
    mechanics: "Bonus action to convert spell slot to points (points = slot level) or points to slot (2/3/5/6/7 points for 1st-5th level). Created slots vanish on long rest.",
    searchVolume: 2400,
    faq: [
      {
        question: "What is flexible casting D&D?",
        answer: "Flexible Casting lets you convert Spell Slots into Sorcery Points or from Points into Spell Slots. Let's say you've used up all of your Sorcery Points, but you want to do a Subtle Spell soon. As a Bonus Action you can use Flexible Casting to convert an unused spell slot to create some Sorcery Points."
      },
      {
        question: "What does \"D&D 5e\" mean?",
        answer: "DnD 5e is the current edition of Dungeons and Dragons, and has been in use for the past ten years. Most DnD discourse and virtually all products being published these days for DnD are for DnD 5e. If you see something for DnD 5e, but it isn't from WotC, then it may be some manner of homebrew supplement."
      },
      {
        question: "Is a 2014 or 2024 sorcerer better?",
        answer: "The most significant change to Spellcasting for Sorcerers in the 2024 Player's Handbook is they can prepare more spells than their 2014 counterparts could learn. In fact, once they reach level 3, Sorcerers now prepare just as many spells as the Druid, Bard, Cleric, and Wizard!"
      },
      {
        question: "Is Arcane Trickster half caster?",
        answer: "Half casters (Artificer, Paladin, and Ranger) gain new spell slots at precisely half the pace full casters (Bard, Cleric, Druid Sorcerer, and Wizard) do. There are also 1/3 casters (Arcane tricksters, Eldritch knights) which gain spell slots at one third the pace full casters do."
      },
    ],
  },
  {
    slug: "metamagic-5e",
    name: "Metamagic 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "features",
    level: "3rd",
    description: "Metamagic allows Sorcerers to modify their spells in powerful ways by spending Sorcery Points.",
    mechanics: "Learn 2 options at 3rd level (more later). Popular options: Quickened (cast as bonus action), Twinned (target second creature), Subtle (no verbal/somatic), Heightened (disadvantage on save).",
    searchVolume: 9200,
  },
  {
    slug: "sorcerous-restoration-5e",
    name: "Sorcerous Restoration 5e",
    parentClass: "Sorcerer",
    parentClassSlug: "sorcerer-5e",
    category: "features",
    level: "20th",
    description: "Sorcerous Restoration is the Sorcerer's 20th level capstone, regaining 4 sorcery points on every short rest.",
    mechanics: "At 20th level, regain 4 sorcery points when finishing a short rest.",
    searchVolume: 1100,
    faq: [
      {
        question: "What is sorcerous restoration?",
        answer: "Source: Free Basic Rules (2014) At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
      },
      {
        question: "Is a 2014 or 2024 sorcerer better?",
        answer: "The most significant change to Spellcasting for Sorcerers in the 2024 Player's Handbook is they can prepare more spells than their 2014 counterparts could learn. In fact, once they reach level 3, Sorcerers now prepare just as many spells as the Druid, Bard, Cleric, and Wizard!"
      },
      {
        question: "Can Sorcerers heal in 5e?",
        answer: "Unlike other Sorcerers, Divine Souls have access to healing magic, divine protection, and enhanced survivability, making them one of the most flexible and powerful Sorcerer subclasses in D&D 5e."
      },
      {
        question: "What does \"D&D 5e\" mean?",
        answer: "DnD 5e is the current edition of Dungeons and Dragons, and has been in use for the past ten years. Most DnD discourse and virtually all products being published these days for DnD are for DnD 5e. If you see something for DnD 5e, but it isn't from WotC, then it may be some manner of homebrew supplement."
      },
    ],
  },
  {
    slug: "otherworldly-patron-5e",
    name: "Otherworldly Patron 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "1st",
    description: "Otherworldly Patron is the Warlock's subclass, representing the powerful entity that grants them their magic.",
    mechanics: "Choose patron at 1st level. Options: Fiend (fire/temp HP), Great Old One (psychic), Archfey (charm), Hexblade (weapons), Celestial (healing), Fathomless (water), Genie (elemental), Undead (necrotic).",
    searchVolume: 2600,
    faq: [
      {
        question: "What does an otherworldly patron do?",
        answer: "Otherworldly Patrons\n The beings that serve as patrons for warlocks are mighty inhabitants of other planes of existence\u2014not gods, but almost godlike in their power. Various patrons give their warlocks access to different powers and invocations, and expect significant favors in return."
      },
      {
        question: "What does \"D&D 5e\" mean?",
        answer: "DnD 5e is the current edition of Dungeons and Dragons, and has been in use for the past ten years. Most DnD discourse and virtually all products being published these days for DnD are for DnD 5e. If you see something for DnD 5e, but it isn't from WotC, then it may be some manner of homebrew supplement."
      },
      {
        question: "Can archdevils be patrons?",
        answer: "The more famous archdevil patrons are the rulers of the 8 lesser layers of Hell (Asmodeus never recruits warlocks, as it is beneath his true divine power). Lesser known, but extremely powerful devils are also known to grant their profane power on a hapless mortal."
      },
      {
        question: "Could a hag be a warlock patron?",
        answer: "A Hag is likely too weak to be a Warlock patron. A patron needs to have godly, or at least demi-godly status to be powerful enough to bestow magical powers to a Warlock. You could have a patron that is a god of Hags, or something similar."
      },
    ],
  },
  {
    slug: "pact-magic-5e",
    name: "Pact Magic 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "1st",
    description: "Pact Magic is the Warlock's unique spellcasting system with few slots that regenerate on short rests and always cast at max level.",
    mechanics: "1-4 spell slots (all same level) that regenerate on short rest. All spells cast at highest slot level available. Different from regular spellcasting.",
    searchVolume: 6400,
    faq: [
      {
        question: "What is pact magic in D&D?",
        answer: "Pact Magic\n Your arcane research and the magic bestowed on you by your patron have given you facility with spells. Cantrips. You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."
      },
      {
        question: "Is pact weapon magical in 5e?",
        answer: "The pact weapon is magic and overcomes creature resistances. The warlock is automatically proficient with it. The weapon uses the warlock's Charisma modifier for attack and damage rolls instead of Strength or Dexterity. Various Eldritch Invocations enhance the pact weapon's power."
      },
      {
        question: "What D&D class makes a pact for magic?",
        answer: "Warlocks with a patron of the Archfey make pacts with powerful lords of Faerie, wild incarnations of the forces of nature, to gain their power. Those with the Fiend patron make deals and bargains with infernal powers such as Demon Lords and Princes of Hell for magic."
      },
    ],
  },
  {
    slug: "eldritch-invocations-5e",
    name: "Eldritch Invocations 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "2nd",
    description: "Eldritch Invocations are customizable abilities Warlocks gain, enhancing spells, granting at-will magic, or providing passive benefits.",
    mechanics: "Learn 2 at 2nd level (more later). Popular: Agonizing Blast (+CHA to Eldritch Blast), Devil's Sight (see in magical darkness), Mask of Many Faces (at-will Disguise Self).",
    searchVolume: 8100,
  },
  {
    slug: "pact-boon-5e",
    name: "Pact Boon 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "3rd",
    description: "Pact Boon gives Warlocks a special gift from their patron at 3rd level - a familiar, weapon, or magical tome.",
    mechanics: "Choose at 3rd level: Pact of the Chain (improved familiar), Pact of the Blade (summon weapon), Pact of the Tome (extra cantrips), Pact of the Talisman (bonus to checks).",
    searchVolume: 4200,
  },
  {
    slug: "pact-of-the-blade-5e",
    name: "Pact of the Blade 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "3rd",
    description: "Pact of the Blade allows Warlocks to summon a magical weapon and eventually use Charisma for attacks with it.",
    mechanics: "Action to create pact weapon in hand (any melee weapon form). Can bond with magic weapon. With Hex Warrior (Hexblade) or Improved Pact Weapon, use CHA for attacks.",
    searchVolume: 5800,
  },
  {
    slug: "pact-of-the-chain-5e",
    name: "Pact of the Chain 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "3rd",
    description: "Pact of the Chain gives Warlocks an enhanced familiar with special forms like imps, pseudodragons, or quasits.",
    mechanics: "Learn Find Familiar. Can choose special forms: imp, pseudodragon, quasit, sprite. Can forgo attack to let familiar attack as reaction.",
    searchVolume: 4600,
    faq: [
      {
        question: "How does pact of the chain work in 5e?",
        answer: "The pact of the chain states \" when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own.\" Ergo, while your pact familiar does act on it's own, it cannot attack."
      },
      {
        question: "Is pact of the blade or pact of the chain better?",
        answer: "Blade if you want to get up close and personal. You are not a front line Fighter but more like a Rogue or Monk. Chain if you want cool pet tricks. Tome is for extra spells."
      },
      {
        question: "What is the most powerful warlock in 5e?",
        answer: "The Genie may very well be the most powerful and most well designed of the warlock subclasses. Unique to it is the choice of multiple subclasses, with interesting features throughout and some good spell choices on top. You get a list of universal Genie spells, and a list for each of the genie kinds."
      },
    ],
  },
  {
    slug: "pact-of-the-tome-5e",
    name: "Pact of the Tome 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "3rd",
    description: "Pact of the Tome gives Warlocks a Book of Shadows containing three cantrips from any class's spell list.",
    mechanics: "Gain Book of Shadows with 3 cantrips from any class. They count as warlock cantrips. With Book of Ancient Secrets invocation, can add rituals.",
    searchVolume: 3800,
    faq: [
      {
        question: "How does pact of the tome work in 5e?",
        answer: "Pact of the Tome\n Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will."
      },
      {
        question: "How many cantrips do you get with Pact of the Tome?",
        answer: "Pact of the Tome adds three cantrips to the ones known by your Warlock and they can be chosen from any class's spell list and don't need to be from the same list."
      },
    ],
  },
  {
    slug: "pact-of-the-talisman-5e",
    name: "Pact of the Talisman 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "3rd",
    description: "Pact of the Talisman gives Warlocks a magical amulet that adds a d4 to failed ability checks.",
    mechanics: "Gain talisman. When wearer fails ability check, add d4 to roll (potentially turning failure to success). PB uses per long rest.",
    searchVolume: 2100,
  },
  {
    slug: "mystic-arcanum-5e",
    name: "Mystic Arcanum 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "11th",
    description: "Mystic Arcanum gives Warlocks access to high-level spells (6th-9th) usable once per long rest without using spell slots.",
    mechanics: "At 11th/13th/15th/17th level, choose one spell of 6th/7th/8th/9th level. Can cast each once per long rest without slot.",
    searchVolume: 3400,
    faq: [
      {
        question: "How does mystic arcanum work in 5e?",
        answer: "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum. You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
      },
      {
        question: "What is the most powerful warlock class?",
        answer: "The Genie may very well be the most powerful and most well designed of the warlock subclasses. Unique to it is the choice of multiple subclasses, with interesting features throughout and some good spell choices on top. You get a list of universal Genie spells, and a list for each of the genie kinds."
      },
      {
        question: "Does mystic arcanum count as a spell slot?",
        answer: "Keep in mind Mystic Arcanum doesn't use spell slots so those spells can be used together with other spells on your turn due to the new \"Only one spell per turn that uses a spell slot\" spellcasting rule."
      },
      {
        question: "Can mystic Arcanum be counterspelled?",
        answer: "It cannot be countered and is not modified by items, such as rod of the pact keeper, invocations, or feats."
      },
    ],
  },
  {
    slug: "eldritch-master-5e",
    name: "Eldritch Master 5e",
    parentClass: "Warlock",
    parentClassSlug: "warlock-5e",
    category: "features",
    level: "20th",
    description: "Eldritch Master is the Warlock's 20th level capstone, allowing them to regain all Pact Magic slots by entreating their patron.",
    mechanics: "Spend 1 minute entreating patron. Regain all Pact Magic spell slots. One use per long rest.",
    searchVolume: 1200,
  },
  {
    slug: "spellcasting-5e",
    name: "Spellcasting 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "features",
    level: "1st",
    description: "Wizard Spellcasting uses Intelligence and a spellbook system where prepared spells are chosen each day from known spells.",
    mechanics: "INT-based full caster. Know spells = 6 + 2 per level. Prepare INT mod + wizard level spells per day from spellbook. Can copy new spells into book.",
    searchVolume: 4200,
    faq: [
      {
        question: "How does spellcasting work for wizards?",
        answer: "Wizards get to pick two spells of a level they can cast (not including cantrips, which are tracked separately) every time they level up. They can also learn spells they find by copying them into their spellbook. These are their spells known."
      },
      {
        question: "What is the wizard spellcasting bonus?",
        answer: "Your spellcasting ability is the ability score that you use for your magic. As a wizard yours is intelligence , and as you mentioned before, the ability score is 16, and your spellcasting ability bonus is (+3) or equal to you intelligence ability score modifier."
      },
      {
        question: "What is a wizard's spellcasting modifier?",
        answer: "Each class has a Spellcasting Ability (either Int, Wis or Cha), and it makes your spells with that class more likely to succeed. For Wizards it's Int, so this character's spellcasting ability modifier is their Intelligence modifier (+4)."
      },
    ],
  },
  {
    slug: "arcane-recovery-5e",
    name: "Arcane Recovery 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "features",
    level: "1st",
    description: "Arcane Recovery allows Wizards to regain expended spell slots during a short rest once per day.",
    mechanics: "Once per day during short rest, recover spell slots with combined level \u2264 half wizard level (rounded up). Can't recover 6th+ level slots.",
    searchVolume: 4800,
    faq: [
      {
        question: "How many Arcane recovery?",
        answer: "A wizard receives a number of Arcane Recovery Charges equal to class level divided by two, rounded up. For example, a level 5 wizard will have 3 Arcane Recovery Charges total."
      },
      {
        question: "Why can't wizards heal D&D?",
        answer: "It might be just because the whole nature of life and healing magic is considered \"locked\" to the divine, and a wizard even trying to broach that type of magic would be grounds for heresy/smiting/being known as an agent of unnatural powers."
      },
      {
        question: "Can a simulacrum use Arcane Recovery?",
        answer: "No, Arcane Recovery would not work as its purpose is to recovery expended spell slots--which the simulacrum spell explicitly prohibits."
      },
    ],
  },
  {
    slug: "arcane-tradition-5e",
    name: "Arcane Tradition 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "features",
    level: "2nd",
    description: "Arcane Tradition is the Wizard's subclass, representing their school of magical specialization.",
    mechanics: "Choose at 2nd level. Schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, Transmutation. Also: War Magic, Chronurgy, Graviturgy, Bladesinging, Order of Scribes.",
    searchVolume: 3600,
    faq: [
      {
        question: "Which Arcane tradition is best?",
        answer: "Blood Arcana. ...\nArcane Polymath. ...\nAlchemist. ...\nChronomancer. ...\nSchool of Necromancy \u2014 Pale Master. ...\nAcademy Philosopher. ...\nNecromancer v2. ...\nGray Necromancer."
      },
      {
        question: "Are Arcane traditions subclasses?",
        answer: "An UPDATED Wizard Subclass that focuses on spell manipulation."
      },
      {
        question: "What is the wizard level 6 arcane tradition feature?",
        answer: "At level 6, you learn Dispel Magic and Counterspell (choose one or two other spells if one or both are already known). The spell DC for spells cast at a higher level than the spell slot you use is 8 + the spell level minus the level of the spell slot you use (8 + spell level - spell slot used)."
      },
    ],
  },
  {
    slug: "spell-mastery-5e",
    name: "Spell Mastery 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "features",
    level: "18th",
    description: "Spell Mastery allows Wizards to cast one 1st-level and one 2nd-level spell at will without expending slots.",
    mechanics: "At 18th level, choose one 1st-level and one 2nd-level wizard spell. Can cast them at lowest level without expending slot or having prepared.",
    searchVolume: 2400,
    faq: [
      {
        question: "How does spell mastery work?",
        answer: "Spell mastery is an ability word that gives a card different or additional characteristics if its controller has 2 or more instant or sorcery cards in their graveyard."
      },
      {
        question: "What is level 18 spell mastery?",
        answer: "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared."
      },
      {
        question: "What is the difference between spell intensity and spell mastery?",
        answer: "Mastery and intensity are basically the same thing, but the some of the traits that give mastery are army wide instead of character specific. Mastery of the elemental winds for example gives every mage in the army that 20% and it stacks up to double the initial spell power."
      },
    ],
  },
  {
    slug: "signature-spells-5e",
    name: "Signature Spells 5e",
    parentClass: "Wizard",
    parentClassSlug: "wizard-5e",
    category: "features",
    level: "20th",
    description: "Signature Spells gives Wizards two 3rd-level spells they always have prepared and can cast once each without slots.",
    mechanics: "At 20th level, choose two 3rd-level wizard spells. Always prepared, don't count against prepared limit. Can cast each once at 3rd level without slot per short/long rest.",
    searchVolume: 1600,
    faq: [
      {
        question: "How does signature spell work?",
        answer: "So you do get one spell per per rank. As you are adventuring. And you can change these spells out you can change your signature spell you can change the spells in your spellertoire."
      },
      {
        question: "What was Harry's signature spell?",
        answer: "Harry and the Patronus charm\n We're not going to deny that Expelliarmus was Harry's signature spell. Lupin said so, after all, and given it was the spell Harry used to ultimately defeat Voldemort, he was not wrong."
      },
      {
        question: "What is the most powerful spell in 5E?",
        answer: "True Polymorph.\nMeteor Swarm.\nInflict Wounds.\nAbi-Dalzim's Horrid Wilting.\nHealing Word.\nShield.\nTime Ravage.\nDetect Magic."
      },
      {
        question: "How many spells does a 3rd level wizard know?",
        answer: "That means at level 2 you will have a total of 8 spells, and at level 3 you will have a total of 10 spells. You can, however, learn new spells by finding them, usually in the spellbooks of other wizards or purchasing scrolls; this will be something you need to talk to your DM about."
      },
    ],
  },
  {
    slug: "hunters-bane-5e",
    name: "Hunter's Bane 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "1st",
    description: "Hunter's Bane gives Blood Hunters advantage on tracking and identifying fiends, fey, and undead.",
    mechanics: "Advantage on Survival checks to track and INT checks to recall information about fey, fiends, and undead.",
    searchVolume: 1800,
    faq: [
      {
        question: "How does Hunter's Bane work?",
        answer: "Known as the Blut\u00e4ndun ritual in the blood hunter order, the Hunter's Bane is an alchemical concoction, its exact origins lost to time, which forever alters the drinker's life force. Not all who drink the Hunter's Bane live through the ordeal, and those who do survive can take a week to recover."
      },
      {
        question: "What is the ritual of the hunter's bane?",
        answer: "The rite of the Hunter's Bane is one of the mysteries of the Moonspeaker druids ; it can only be performed when the moons are properly aligned, and if the aspirant lacks spiritual strength they will become a monster bound to the will of the Wild Heart."
      },
      {
        question: "What is the strongest blood hunter subclass?",
        answer: "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
        question: "How many times can you use Crimson Rite?",
        answer: "Limit the number of times the rite can be casted in a single weapon, based on the level of the weapon: Normal weapon: 1 crimson rite. +1 magical weapon: 2 crimson rite. +2 magical weapon: 3 crimson rite."
      },
    ],
  },
  {
    slug: "blood-maledict-5e",
    name: "Blood Maledict 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "1st",
    description: "Blood Maledict allows Blood Hunters to curse enemies with powerful blood curses, often at the cost of their own HP.",
    mechanics: "Use blood curses on creatures. Can amplify curses by taking damage. Learn more curses as you level. Uses per long rest = INT mod (or more).",
    searchVolume: 2100,
    faq: [
      {
        question: "How does blood maledict work?",
        answer: "Each time you use your Blood Maledict feature, you choose which curse to invoke from the curses you know. While invoking a blood curse, but before it affects the target, you can choose to amplify the curse by taking necrotic damage equal to one roll of your hemocraft die. This damage can't be reduced in any way."
      },
      {
        question: "What is the strongest blood hunter subclass?",
        answer: "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
        question: "How many times can you use blood maledict?",
        answer: "Beginning at 6th level, you can use your Blood Maledict feature twice, at 13th level you can use it three times between rests, and at 17th level, you can use it four times between rests. You regain all expended uses when you finish a short or long rest."
      },
      {
        question: "Are blood hunters good or evil?",
        answer: "Blood Hunters tend to have dark pasts and their Alignment mostly follows the Good or Neutral however some fall into the Evil aspects when they become selfish and use their powers for purposes other than their mission."
      },
    ],
  },
  {
    slug: "crimson-rite-5e",
    name: "Crimson Rite 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "2nd",
    description: "Crimson Rite allows Blood Hunters to imbue their weapons with elemental damage at the cost of their own health.",
    mechanics: "Bonus action to activate rite, taking damage = your level. Weapon deals extra damage (1d4 to 1d10) of rite's element. Lasts until rest or dropped.",
    searchVolume: 2800,
    faq: [
      {
        question: "How many times can you use Crimson Rite?",
        answer: "Limit the number of times the rite can be casted in a single weapon, based on the level of the weapon: Normal weapon: 1 crimson rite. +1 magical weapon: 2 crimson rite. +2 magical weapon: 3 crimson rite."
      },
      {
        question: "How does crimson rite work in D&D?",
        answer: "You can apply your Crimson Rite feature to your unarmed strikes, which you treat as one weapon. You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes, which deal 1d6 bludgeoning or slashing damage (your choice). This damage increases to 1d8 at 11th level."
      },
      {
        question: "What is the strongest blood hunter subclass?",
        answer: "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
        question: "How much damage does Crimson Rite do?",
        answer: "Earlier editions of the Blood Hunter class have this in the Crimson Rite description (this particular quote is from v. 1.3 at Geek & Sundry): While active, attacks from this weapon deal an additional 1d4 rite damage of the chosen elemental type. Rite damage is considered magical."
      },
    ],
  },
  {
    slug: "blood-hunter-order-5e",
    name: "Blood Hunter Order 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "3rd",
    description: "Blood Hunter Order is the subclass choice, defining the Blood Hunter's supernatural specialty.",
    mechanics: "Choose at 3rd level. Orders: Ghostslayer (radiant/undead), Profane Soul (warlock pact), Mutant (mutagencraft), Lycan (lycanthropy).",
    searchVolume: 1600,
  },
  {
    slug: "dark-augmentation-5e",
    name: "Dark Augmentation 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "7th",
    description: "Dark Augmentation increases Blood Hunter speed and gives them advantage on saves against being frightened or magic that ages them.",
    mechanics: "At 7th level, speed +5ft and advantage on saves vs frightened and magical aging.",
    searchVolume: 900,
    faq: [
      {
        question: "Is blood Hunter official D&D?",
        answer: "While not technically an official Dungeons and Dragons character option, the Blood Hunter was added to the Adventurer's Guild to mark the very first Finale on the server and add one of the most highly requested pieces of homebrew on the internet."
      },
      {
        question: "Is Bloodhunter strong?",
        answer: "You have advantage on Strength checks and Strength saving throws, and you have a +1 bonus to melee damage rolls. This bonus increases to +2 at 11th level and to +3 at 18th level."
      },
      {
        question: "Can blood hunters wear heavy armor?",
        answer: "Lack of Heavy Armor: Typically, Blood Hunters don't have access to heavy armor, which can make them less durable in direct melee combat than some other martial classes like Fighters or Paladins."
      },
    ],
  },
  {
    slug: "brand-of-castigation-5e",
    name: "Brand of Castigation 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "6th",
    description: "Brand of Castigation marks enemies, causing them to take psychic damage when they deal damage.",
    mechanics: "When hitting with rite-active weapon, can brand target (no save). When branded creature damages you, it takes psychic damage = INT mod.",
    searchVolume: 1100,
    faq: [
      {
        question: "How does brand of castigation work?",
        answer: "Your Brand of Castigation exposes a fragment of your foe's essence, leaving them vulnerable to your Crimson Rite feature. Whenever you hit a creature with a weapon for which you have an active crimson rite, you deal an additional 1d8 radiant damage."
      },
      {
        question: "How long does brand of castigation last?",
        answer: "Brand of Castigation\n Your brand lasts until you dismiss it, or you apply a brand to another creature. Your brand counts as a spell for the purposes of dispel magic, and the spell level is equal to half of your blood hunter level (maximum of 9th level spell)."
      },
      {
        question: "What is the strongest blood hunter subclass?",
        answer: "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
        question: "Why did Matt Mercer make Blood Hunter?",
        answer: "It was based on his character from the movie The Last Witch Hunter, with inspiration from The Witcher series of books and games. Looking back on the one-shot, Matt saw potential to build a full and standalone class option that uses health as its main resource."
      },
    ],
  },
  {
    slug: "grim-psychometry-5e",
    name: "Grim Psychometry 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "9th",
    description: "Grim Psychometry allows Blood Hunters to read the history of objects by touching them, gaining visions of significant events.",
    mechanics: "Meditate on object for 1 minute to gain visions of significant events involving it. DM determines what you see.",
    searchVolume: 800,
    faq: [
      {
        question: "What is grim psychometry?",
        answer: "As a mechanical class, sufficiently high level blood hunters have an ability known as Grim Psychometry, which gives them advantage on History checks to learn about the \"sinister or tragic history\" of an item they touch."
      },
      {
        question: "What is the strongest blood hunter subclass?",
        answer: "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
        question: "How many times can you use Crimson Rite?",
        answer: "Limit the number of times the rite can be casted in a single weapon, based on the level of the weapon: Normal weapon: 1 crimson rite. +1 magical weapon: 2 crimson rite. +2 magical weapon: 3 crimson rite."
      },
      {
        question: "Why did Matt Mercer make Blood Hunter?",
        answer: "It was based on his character from the movie The Last Witch Hunter, with inspiration from The Witcher series of books and games. Looking back on the one-shot, Matt saw potential to build a full and standalone class option that uses health as its main resource."
      },
    ],
  },
  {
    slug: "dark-velocity-5e",
    name: "Dark Velocity 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "10th",
    description: "Dark Velocity gives Blood Hunters additional speed and the ability to walk on walls and ceilings.",
    mechanics: "While rite active: speed +10ft, can walk on walls and ceilings (fall if turn ends there without climbing/holding on).",
    searchVolume: 700,
    faq: [
      {
        question: "Who is canonically autistic character in D&D?",
        answer: "Meet Asteria, D&D's first canonically autistic character."
      },
      {
        question: "What is the 27 rule in D&D?",
        answer: "Here's a breakdown of how it works: Each ability score (Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma) begins at a base score of 8. Players have 27 points to distribute among their ability scores."
      },
    ],
  },
  {
    slug: "hardened-soul-5e",
    name: "Hardened Soul 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "14th",
    description: "Hardened Soul gives Blood Hunters immunity to being frightened and advantage on saves against being charmed.",
    mechanics: "At 14th level, immune to frightened condition. Advantage on saves against being charmed.",
    searchVolume: 600,
    faq: [
      {
        question: "Why did Matt Mercer make Blood Hunter?",
        answer: "It was based on his character from the movie The Last Witch Hunter, with inspiration from The Witcher series of books and games. Looking back on the one-shot, Matt saw potential to build a full and standalone class option that uses health as its main resource."
      },
      {
        question: "How many times can you use Crimson Rite?",
        answer: "Limit the number of times the rite can be casted in a single weapon, based on the level of the weapon: Normal weapon: 1 crimson rite. +1 magical weapon: 2 crimson rite. +2 magical weapon: 3 crimson rite."
      },
      {
        question: "What does Blood Maledict do?",
        answer: "This is in regards to Blood Hunter's Blood Maledictions: \u201cWhen you use your Blood Maledict feature, you choose which curse to invoke. While invoking a blood curse, but before it affects the target, you may choose to amplify the curse by suffering damage equal to a roll of your crimson rite damage die."
      },
    ],
  },
  {
    slug: "sanguine-mastery-5e",
    name: "Sanguine Mastery 5e",
    parentClass: "Blood Hunter",
    parentClassSlug: "blood-hunter-5e",
    category: "features",
    level: "20th",
    description: "Sanguine Mastery is the Blood Hunter's capstone, rerolling Crimson Rite damage and recovering when dropping to 0 HP.",
    mechanics: "Reroll any Crimson Rite damage die once per attack. When dropping to 0 HP, can choose to drop to 1 HP instead and gain blood curse use.",
    searchVolume: 500,
    faq: [
      {
        question: "What is the strongest blood hunter subclass?",
        answer: "The Lycan is the arguably the strongest, this one will be absolutely fine. The only major downside is that because you're using your unarmed attack, cool magic weapons are off the table for you. Lycan is undeniably excellent though. The fantasy of the Mutant doesn't really come online until you get the level 18 power."
      },
      {
        question: "How many times can you use Crimson Rite?",
        answer: "Limit the number of times the rite can be casted in a single weapon, based on the level of the weapon: Normal weapon: 1 crimson rite. +1 magical weapon: 2 crimson rite. +2 magical weapon: 3 crimson rite."
      },
      {
        question: "Why did Matt Mercer make Blood Hunter?",
        answer: "It was based on his character from the movie The Last Witch Hunter, with inspiration from The Witcher series of books and games. Looking back on the one-shot, Matt saw potential to build a full and standalone class option that uses health as its main resource."
      },
      {
        question: "What does Blood Maledict do?",
        answer: "This is in regards to Blood Hunter's Blood Maledictions: \u201cWhen you use your Blood Maledict feature, you choose which curse to invoke. While invoking a blood curse, but before it affects the target, you may choose to amplify the curse by suffering damage equal to a roll of your crimson rite damage die."
      },
    ],
  },
  {
    slug: "extra-attack-5e",
    name: "Extra Attack 5e",
    parentClass: "Multiple",
    parentClassSlug: null,
    category: "features",
    level: "5th",
    description: "Extra Attack allows martial classes to attack twice when taking the Attack action, significantly increasing damage output.",
    mechanics: "At 5th level, attack twice when taking Attack action. Fighters get additional attacks at 11th (3) and 20th (4) level.",
    searchVolume: 8800,
    faq: [
      {
        question: "What is the extra attack rule in 5e?",
        answer: "What Is Extra Attack in D&D 5e? Extra Attack is a class feature that allows a character to make more than one attack when they take the Attack action on their turn. That's important, only the Attack action triggers Extra Attack. It does not apply to bonus actions, reactions, or casting spells."
      },
      {
        question: "How many times can I use extra attack?",
        answer: "Extra Attack gives you an extra attack when you take the Attack Action, so you can attack two times with one Action. Action Surge gives you an entire extra Action, so if you have Extra Attack, you can do that number of attacks again."
      },
      {
        question: "Does extra attack let you throw twice?",
        answer: "Yes. It says that you cab attack twice instead of once when taking the Attack action."
      },
    ],
  },
  {
    slug: "fighting-style-5e",
    name: "Fighting Style 5e",
    parentClass: "Multiple",
    parentClassSlug: null,
    category: "features",
    level: "1st-2nd",
    description: "Fighting Style grants a specialized combat technique to martial classes, defining their preferred combat approach.",
    mechanics: "Choose one style (varies by class). Common options: Archery (+2 ranged), Defense (+1 AC), Dueling (+2 damage), Great Weapon Fighting (reroll 1s/2s), Protection, Two-Weapon Fighting.",
    searchVolume: 7200,
    faq: [
      {
        question: "What is the fighting style in D&D?",
        answer: "You adopt a particular style of fighting as your specialty. Choose a fighting style from the list of optional features. You can't take the same Fighting Style option more than once, even if you get to choose again."
      },
      {
        question: "How many fighting styles do you get in 5E?",
        answer: "For a fighter in D&D 5e, I can take one fighting style as part of the character creation. At third level, I can choose a martial archetype (Champion) which will later (at 10th level) allow me to choose an additional fighting style."
      },
      {
        question: "What stat is fighting style?",
        answer: "Fighting Styles are one of the four primary methods of combat (the other three being Magics, Weapons, and Relics) and are based around the Strength stat."
      },
    ],
  },
  {
    slug: "spellcasting-5e",
    name: "Spellcasting 5e",
    parentClass: "Multiple",
    parentClassSlug: null,
    category: "features",
    level: "1st",
    description: "Spellcasting is the feature that grants spellcasting ability to magic-using classes, each with unique casting rules.",
    mechanics: "Varies by class. Full casters (wizard, cleric, etc.): spell slots scale to 9th level. Half casters (paladin, ranger): slower progression. Warlocks use Pact Magic instead.",
    searchVolume: 6500,
  },
  {
    slug: "evasion-5e",
    name: "Evasion 5e",
    parentClass: "Multiple",
    parentClassSlug: null,
    category: "features",
    level: "7th",
    description: "Evasion allows Monks and Rogues to take no damage on successful DEX saves that normally deal half damage.",
    mechanics: "When subjected to effect allowing DEX save for half damage: success = no damage, failure = half damage. Doesn't work if incapacitated.",
    searchVolume: 5200,
  },
  {
    slug: "unarmored-defense-5e",
    name: "Unarmored Defense 5e",
    parentClass: "Multiple",
    parentClassSlug: null,
    category: "features",
    level: "1st",
    description: "Unarmored Defense allows Barbarians and Monks to calculate AC without armor using different ability modifiers.",
    mechanics: "Barbarian: 10 + DEX + CON. Monk: 10 + DEX + WIS. Can use shield (Barbarian only). Doesn't stack with armor or other AC calculations.",
    searchVolume: 6800,
    faq: [
      {
        question: "What is your AC if you have no armor?",
        answer: "Without armor or a shield, your character's AC equals 10 + his or her Dexterity modifier. Keep in mind that this is simply the default way to calculate AC."
      },
      {
        question: "How do you calculate unarmored defense 5e?",
        answer: "Unarmored Defense: While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. Given the identical wording I'd say it doesn't stack. It's either one or the other."
      },
      {
        question: "Does unarmored defence stack?",
        answer: "It does not stack. You are forced to pick one base. You don't pick one it's whichever class you picked first is the unarmored defense you take. Some spells and class features give you a different way to calculate your AC."
      },
      {
        question: "Does natural armor work with unarmored defense?",
        answer: "No. You get the highest AC, from either Unarmored defense or Natural armor. It is not RAW that it stacks."
      },
    ],
  },
  {
    slug: "channel-divinity-5e",
    name: "Channel Divinity 5e",
    parentClass: "Multiple",
    parentClassSlug: null,
    category: "features",
    level: "2nd-3rd",
    description: "Channel Divinity is a shared feature between Clerics and Paladins that lets them channel divine power for special effects.",
    mechanics: "Clerics get Turn Undead + domain options (2-3 uses). Paladins get oath-specific options (1 use per short rest). Both recharge on short rest.",
    searchVolume: 5600,
  },
];
