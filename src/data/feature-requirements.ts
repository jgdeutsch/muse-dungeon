// Auto-generated feature requirements data from DataForSEO
// DO NOT EDIT MANUALLY - regenerate with scripts/process-feature-requirements.py

export type FeatureStep = {
  question: string;
  failReason: string;
  invertedLogic?: boolean; // If true, "Yes" means fail instead of pass
};

export type FeatureRequirements = {
  slug: string;
  name: string;
  parentClass: string;
  steps: FeatureStep[];
  paaQuestions: { question: string; answer: string }[];
};

export const featureRequirements: Record<string, FeatureRequirements> = {
  "magical-tinkering-5e": {
    "slug": "magical-tinkering-5e",
    "name": "Magical Tinkering",
    "parentClass": "Artificer",
    "steps": [
      {
        "question": "Is the character a Artificer of at least 1st level?",
        "failReason": "Magical Tinkering is a Artificer feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Magical Tinkering requires an action to use."
      },
      {
        "question": "Is the target/point within 5 feet?",
        "failReason": "Magical Tinkering has a range of 5 feet."
      }
    ],
    "paaQuestions": []
  },
  "infuse-item-5e": {
    "slug": "infuse-item-5e",
    "name": "Infuse Item",
    "parentClass": "Artificer",
    "steps": [
      {
        "question": "Is the character a Artificer of at least 1st level?",
        "failReason": "Infuse Item is a Artificer feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Infuse Item has limited uses that recover after a long rest."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does infuse item work in 5e?",
        "answer": "As specified in the infusions. Description if the item requires attunement you can attune yourself to it the instant you infuse the item."
      },
      {
        "question": "How does infusion work artificer?",
        "answer": "You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. [...] If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies."
      },
      {
        "question": "Can infusions be used on multiple items?",
        "answer": "An infusion works only on a nonmagical item. Putting an infusion in an object makes it magical. You therefore can't put a second infusion in the item; it's now magical."
      },
      {
        "question": "When can artificers change known infusions?",
        "answer": "Artificers can change their known infusions each level. Ask player for a list of their known infusions so you are not caught unaware in the future. At 6th level the artificer knows 6 infusion. 1- Radiant weapon (6th level) 2- Bag of holding (2nd level) 3- Cloak of Elven Kind (6th level) Can know up to 3 more."
      }
    ]
  },
  "flash-of-genius-5e": {
    "slug": "flash-of-genius-5e",
    "name": "Flash of Genius",
    "parentClass": "Artificer",
    "steps": [
      {
        "question": "Is the character a Artificer of at least 1st level?",
        "failReason": "Flash of Genius is a Artificer feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Flash of Genius is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Flash of Genius has a range of 30 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "Can you use Flash of Genius on Death Saves?",
        "answer": "The D&D artificer's Flash of Genius works on death saving throws."
      }
    ]
  },
  "magic-item-savant-5e": {
    "slug": "magic-item-savant-5e",
    "name": "Magic Item Savant",
    "parentClass": "Artificer",
    "steps": [
      {
        "question": "Is the character a Artificer of at least 1st level?",
        "failReason": "Magic Item Savant is a Artificer feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Magic Item Savant is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Magic Item Savant requires an attack to be made."
      },
      {
        "question": "Is the character free of other concentration effects?",
        "failReason": "A creature can only concentrate on one effect at a time."
      }
    ],
    "paaQuestions": [
      {
        "question": "Can you use Flash of Genius after the roll?",
        "answer": "What is the timing of Flash of Genius? You use Flash of Genius immediately after the triggering d20 is rolled and before any of the effects of the roll are applied. Unless a rule tells you otherwise, a reaction occurs immediately after its trigger."
      }
    ]
  },
  "soul-of-artifice-5e": {
    "slug": "soul-of-artifice-5e",
    "name": "Soul of Artifice",
    "parentClass": "Artificer",
    "steps": [
      {
        "question": "Is the character a Artificer of at least 1st level?",
        "failReason": "Soul of Artifice is a Artificer feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Soul of Artifice is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Soul of Artifice requires an action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does artifice work?",
        "answer": "How does it work? arTIfiCE uses software bugs in the calculator's code to be able to execute assembly. A light \"shell\" is run allowing you to choose which program to launch. Exploit source codes are available over time on the GitHub repo."
      },
      {
        "question": "Can you use Flash of Genius after the roll?",
        "answer": "What is the timing of Flash of Genius? You use Flash of Genius immediately after the triggering d20 is rolled and before any of the effects of the roll are applied. Unless a rule tells you otherwise, a reaction occurs immediately after its trigger."
      }
    ]
  },
  "rage-5e": {
    "slug": "rage-5e",
    "name": "Rage",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Rage is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Does the character have Rages remaining?",
        "failReason": "Rage has limited uses that recover after a long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Rage requires a bonus action to use."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Rage is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Rage cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "When can I use my reaction 5e?",
        "answer": "It's pretty clear, you can use your reaction anytime, provided the trigger is appropriate. You then regain your reaction at the start of the next turn."
      }
    ]
  },
  "unarmored-defense-5e": {
    "slug": "unarmored-defense-5e",
    "name": "Unarmored Defense",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Unarmored Defense is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Is the character wearing no armor?",
        "failReason": "Unarmored Defense only works while not wearing armor."
      }
    ],
    "paaQuestions": []
  },
  "reckless-attack-5e": {
    "slug": "reckless-attack-5e",
    "name": "Reckless Attack",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Reckless Attack is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Reckless Attack is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Reckless Attack only applies to melee attacks."
      }
    ],
    "paaQuestions": [
      {
        "question": "How to use reckless attack 5e?",
        "answer": "The wording on the Reckless Attack on DND Beyond is this ``When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn..."
      },
      {
        "question": "How does a reckless attack work?",
        "answer": "Reckless Attack is a level 2 barbarian class feature. For one turn, barbarians can make all Strength-based melee attacks with advantage. When a barbarian uses Reckless Attack, enemies have advantage on attack rolls against them until the barbarian's next turn."
      },
      {
        "question": "Can you use a reckless attack on a reaction?",
        "answer": "In the Reaction menu, you can toggle Reckless Attack so that the game asks on every hit whether you want to apply it if you would benefit from the Advantage."
      },
      {
        "question": "Can you use a reckless attack on thrown weapons?",
        "answer": "In the other camp, the Reckless Attack feature specifies only melee weapon attacks, and since throwing a melee weapon with the thrown property is making an attack with a melee weapon, it counts, and can therefore use the advantage."
      }
    ]
  },
  "danger-sense-5e": {
    "slug": "danger-sense-5e",
    "name": "Danger Sense",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Danger Sense is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Danger Sense has limited uses that recover after a long rest."
      },
      {
        "question": "Can the character see the target?",
        "failReason": "Danger Sense requires the character to see the target."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does danger sense work in 5e?",
        "answer": "Danger Sense\n At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells."
      },
      {
        "question": "Does danger sense work in combat?",
        "answer": "Yes, as long as the barbarian can see the effect\n As clarified in the Sage Advice Compendium: Does the barbarian's Danger Sense work against breath weapons and enemies' special abilities? A barbarian's Danger Sense benefits the Dexterity saving throw against any effect that the barbarian can see."
      }
    ]
  },
  "feral-instinct-5e": {
    "slug": "feral-instinct-5e",
    "name": "Feral Instinct",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Feral Instinct is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Feral Instinct requires a bonus action to use."
      },
      {
        "question": "Is the character currently raging?",
        "failReason": "Feral Instinct only works while the character is raging."
      },
      {
        "question": "Is the target/point within 5 feet?",
        "failReason": "Feral Instinct has a range of 5 feet."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Feral Instinct cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Feral Instinct work in 5e?",
        "answer": "Feral Instinct\n By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
      }
    ]
  },
  "brutal-critical-5e": {
    "slug": "brutal-critical-5e",
    "name": "Brutal Critical",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Brutal Critical is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Brutal Critical only applies to melee attacks."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does brutal critical work in 5e?",
        "answer": "Brutal Critical\n Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
      },
      {
        "question": "How does brutal critical work with a greatsword?",
        "answer": "It deals one extra dice. A critical with a greatsword deals 4d6 damage, and with brutal critical it's 5d6. Otherwise, the greatsword would be better than a greataxe for everything. The greatsword has higher average damage, but the greataxe is better at criticals."
      }
    ]
  },
  "relentless-rage-5e": {
    "slug": "relentless-rage-5e",
    "name": "Relentless Rage",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Relentless Rage is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Does the character have Rages remaining?",
        "failReason": "Relentless Rage has limited uses that recover after a short or long rest."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Relentless Rage cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does relentless rage work?",
        "answer": "The Barbarian however gets Relentless rage, an ability that when you are brought to 0 HP while raging, you can make a DC 10 con save to instead be at 1 HP. The DC increases by 5 every time you use it (and is reset at a short or long rest)."
      }
    ]
  },
  "persistent-rage-5e": {
    "slug": "persistent-rage-5e",
    "name": "Persistent Rage",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Persistent Rage is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Persistent Rage requires a bonus action to use."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Persistent Rage cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does persistent rage work?",
        "answer": "Persistent Rage is a relic power that players can harness at the mysterious monolith. Once harnessed, players will generate adrenaline when outside of combat at a rate of 5% every 1.2 seconds, instead of having it drained. It costs 3,000 chronotes to activate and uses 150 monolith energy."
      }
    ]
  },
  "indomitable-might-5e": {
    "slug": "indomitable-might-5e",
    "name": "Indomitable Might",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Indomitable Might is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Is the character currently raging?",
        "failReason": "Indomitable Might only works while the character is raging."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does indomitable might work in 5e?",
        "answer": "Indomitable Might\n Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
      }
    ]
  },
  "primal-champion-5e": {
    "slug": "primal-champion-5e",
    "name": "Primal Champion",
    "parentClass": "Barbarian",
    "steps": [
      {
        "question": "Is the character a Barbarian of at least 1st level?",
        "failReason": "Primal Champion is a Barbarian feature gained at 1st level."
      },
      {
        "question": "Is the character currently raging?",
        "failReason": "Primal Champion only works while the character is raging."
      },
      {
        "question": "Is the target/point within 60 feet?",
        "failReason": "Primal Champion has a range of 60 feet."
      },
      {
        "question": "Is the character free of other concentration effects?",
        "failReason": "A creature can only concentrate on one effect at a time."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Primal Champion cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": []
  },
  "bardic-inspiration-5e": {
    "slug": "bardic-inspiration-5e",
    "name": "Bardic Inspiration",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Bardic Inspiration is a Bard feature gained at 1st level."
      },
      {
        "question": "Does the character have Bardic Inspiration dice remaining?",
        "failReason": "Bardic Inspiration has limited uses that recover after a long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Bardic Inspiration requires a bonus action to use."
      },
      {
        "question": "Is the target/point within 60 feet?",
        "failReason": "Bardic Inspiration has a range of 60 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does bardic inspiration work in D&D 5e?",
        "answer": "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6."
      },
      {
        "question": "When can you use inspiration 5e?",
        "answer": "Inspiration is awarded for cool things you do/say. The player may use it for advantage on any roll (including another player's roll), to cause an enemy to roll with disadvantage, or to change a regular hit into a critical hit."
      }
    ]
  },
  "jack-of-all-trades-5e": {
    "slug": "jack-of-all-trades-5e",
    "name": "Jack of All Trades",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Jack of All Trades is a Bard feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": [
      {
        "question": "What does jack of all trades apply to?",
        "answer": "The book says it applies to any ability check that does not already include proficiency. 5y. Caleb Tipton. Any ability check that doesn't already apply your proficiency bonus. So you can make ability checks with tools at half proficiency using jack of all trades."
      },
      {
        "question": "How does the jack of all trades work?",
        "answer": "A jack of all trades is a master but in a specific way.\n A jack of all trades can master a specific process that can apply to different fields of talent. Or they are \u2014 as the Wikipedia entry explains it \u2014 a \u201cmaster of integration,\u201d uniting knowledge and skills from several disciplines in a cohesive way."
      },
      {
        "question": "How to use jack of all trades in D&D?",
        "answer": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
      },
      {
        "question": "Does jack of all trades apply to weapons?",
        "answer": "This also affects the amount of weapons available for use, especially the second rank. For example, using any silenced sidearm (excluding the Silenced 9mm) with level two of Jack of All Trades prevents the player from equipping any primary weapons or using any other skills."
      }
    ]
  },
  "song-of-rest-5e": {
    "slug": "song-of-rest-5e",
    "name": "Song of Rest",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Song of Rest is a Bard feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Song of Rest has limited uses that recover after a short or long rest."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Song of Rest work in 5e?",
        "answer": "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra 1d6 hit points."
      },
      {
        "question": "How many times can you use the Song of rest?",
        "answer": "Song of Rest is an action available to bards at level 2. This ability allows the bard to rejuvenate their party as if they took a Short Rest. It is usable once per Long Rest."
      },
      {
        "question": "Can Song of Rest stack?",
        "answer": "RAW, as others have said, no, they don't stack."
      }
    ]
  },
  "font-of-inspiration-5e": {
    "slug": "font-of-inspiration-5e",
    "name": "Font of Inspiration",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Font of Inspiration is a Bard feature gained at 1st level."
      },
      {
        "question": "Does the character have Bardic Inspiration dice remaining?",
        "failReason": "Font of Inspiration has limited uses that recover after a short or long rest."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Font of Inspiration requires an attack to be made."
      }
    ],
    "paaQuestions": []
  },
  "countercharm-5e": {
    "slug": "countercharm-5e",
    "name": "Countercharm",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Countercharm is a Bard feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Countercharm requires an action to use."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Countercharm has a range of 30 feet."
      },
      {
        "question": "Is the character free of other concentration effects?",
        "failReason": "A creature can only concentrate on one effect at a time."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Countercharm cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Countercharm work in 5e?",
        "answer": "As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit."
      }
    ]
  },
  "magical-secrets-5e": {
    "slug": "magical-secrets-5e",
    "name": "Magical Secrets",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Magical Secrets is a Bard feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": []
  },
  "superior-inspiration-5e": {
    "slug": "superior-inspiration-5e",
    "name": "Superior Inspiration",
    "parentClass": "Bard",
    "steps": [
      {
        "question": "Is the character a Bard of at least 1st level?",
        "failReason": "Superior Inspiration is a Bard feature gained at 1st level."
      },
      {
        "question": "Does the character have Bardic Inspiration dice remaining?",
        "failReason": "Superior Inspiration has limited uses that recover after a short or long rest."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Superior Inspiration requires an attack to be made."
      }
    ],
    "paaQuestions": []
  },
  "channel-divinity-5e": {
    "slug": "channel-divinity-5e",
    "name": "Channel Divinity",
    "parentClass": "Cleric",
    "steps": [
      {
        "question": "Is the character a Cleric of at least 1st level?",
        "failReason": "Channel Divinity is a Cleric feature gained at 1st level."
      },
      {
        "question": "Does the character have Channel Divinity uses remaining?",
        "failReason": "Channel Divinity has limited uses that recover after a short or long rest."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Channel Divinity requires an action to use."
      },
      {
        "question": "Is the character currently raging?",
        "failReason": "Channel Divinity only works while the character is raging."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Channel Divinity has a range of 30 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "Can you use channel divinity while raging?",
        "answer": "Yes, they can use a Channel Divinity option while raging.\n As you've noted, Channel Divinity is not a spell. Rage only prevents casting a spell or concentrating on one. As such, raging does not prevent you from using your Channel Divinity in any way..."
      },
      {
        "question": "Can you use Channel Divinity as an action?",
        "answer": "Channel Divinity: Preserve Life\n As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them."
      }
    ]
  },
  "turn-undead-5e": {
    "slug": "turn-undead-5e",
    "name": "Turn Undead",
    "parentClass": "Cleric",
    "steps": [
      {
        "question": "Is the character a Cleric of at least 1st level?",
        "failReason": "Turn Undead is a Cleric feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Turn Undead requires an action to use."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Turn Undead has a range of 30 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Turn Undead work in 5e?",
        "answer": "How does Turn Undead 5e work? As an action, Clerics can present their holy symbol and speak a prayer against the undead. Each undead within 30 feet of the cleric must make a Wisdom saving throw. Those who fail are 'turned' for one minute or, until they take any damage."
      }
    ]
  },
  "destroy-undead-5e": {
    "slug": "destroy-undead-5e",
    "name": "Destroy Undead",
    "parentClass": "Cleric",
    "steps": [
      {
        "question": "Is the character a Cleric of at least 1st level?",
        "failReason": "Destroy Undead is a Cleric feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Destroy undead work in 5e?",
        "answer": "Destroy UndeadA\n Starting at 5th level, when an undead of CR 1/2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
      }
    ]
  },
  "divine-intervention-5e": {
    "slug": "divine-intervention-5e",
    "name": "Divine Intervention",
    "parentClass": "Cleric",
    "steps": [
      {
        "question": "Is the character a Cleric of at least 1st level?",
        "failReason": "Divine Intervention is a Cleric feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Divine Intervention has limited uses that recover after a long rest."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Divine Intervention is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Divine Intervention requires an action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "Does divine intervention automatically work at level 20?",
        "answer": "At 20th level, a cleric's call for intervention succeeds automatically without a dice roll."
      },
      {
        "question": "How many times can you use divine intervention in D&D 5E?",
        "answer": "The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest."
      }
    ]
  },
  "divine-strike-5e": {
    "slug": "divine-strike-5e",
    "name": "Divine Strike",
    "parentClass": "Cleric",
    "steps": [
      {
        "question": "Is the character a Cleric of at least 1st level?",
        "failReason": "Divine Strike is a Cleric feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Divine Strike has limited uses that recover after a long rest."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Divine Strike only applies to melee attacks."
      }
    ],
    "paaQuestions": [
      {
        "question": "Does divine strike work with true strike?",
        "answer": "Yes, it works. However potent cantrip doesn't work with true strike because it's not a cleric cantrip. Unless your subclass provides it as a cleric cantrip."
      },
      {
        "question": "How often can you use divine strike?",
        "answer": "Divine Strike is a weapon action available to level 8 Clerics of the following Domains: Life, Trickery, Nature, Tempest, and War. It is usable once per turn and deals 1d8 additional damage upon a weapon strike (either melee or ranged) of a type dependent on the chosen domain."
      }
    ]
  },
  "wild-shape-5e": {
    "slug": "wild-shape-5e",
    "name": "Wild Shape",
    "parentClass": "Druid",
    "steps": [
      {
        "question": "Is the character a Druid of at least 1st level?",
        "failReason": "Wild Shape is a Druid feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Wild Shape has limited uses that recover after a short or long rest."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Wild Shape requires an action to use."
      },
      {
        "question": "Is the beast form valid for the druid's level? (CR and type restrictions)",
        "failReason": "Wild Shape limits beast CR and type (flying/swimming) based on druid level."
      }
    ],
    "paaQuestions": [
      {
        "question": "When can I wildshape?",
        "answer": "Wild Shape. Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest."
      },
      {
        "question": "When can druids have wild shape to fly?",
        "answer": "Officially a druid cannot turn into a creature with a fly speed until level 8."
      }
    ]
  },
  "beast-spells-5e": {
    "slug": "beast-spells-5e",
    "name": "Beast Spells",
    "parentClass": "Druid",
    "steps": [
      {
        "question": "Is the character a Druid of at least 1st level?",
        "failReason": "Beast Spells is a Druid feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Beast Spells requires an action to use."
      },
      {
        "question": "Is the target/point within 90 feet?",
        "failReason": "Beast Spells has a range of 90 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "What are the requirements for spells in D&D?",
        "answer": "Spell Components\n Spells may require verbal (V), somatic (S), or material (M) components. Verbal components require you to make audible noise, and somatic components involve hand movements. If you have weapons or a shield in hand, you may need to drop them temporarily to perform somatic components."
      }
    ]
  },
  "archdruid-5e": {
    "slug": "archdruid-5e",
    "name": "Archdruid",
    "parentClass": "Druid",
    "steps": [
      {
        "question": "Is the character a Druid of at least 1st level?",
        "failReason": "Archdruid is a Druid feature gained at 1st level."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Archdruid only applies to melee attacks."
      }
    ],
    "paaQuestions": []
  },
  "second-wind-5e": {
    "slug": "second-wind-5e",
    "name": "Second Wind",
    "parentClass": "Fighter",
    "steps": [
      {
        "question": "Is the character a Fighter of at least 1st level?",
        "failReason": "Second Wind is a Fighter feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Second Wind has limited uses that recover after a short or long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Second Wind requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "When can you use second wind?",
        "answer": "Second Wind does not activate if you already suffer from the Broken Status Effect. When you heal another Survivor for the equivalent of 1 Health State, Second Wind activates: The next time you are unhooked or unhook yourself, you suffer from the Broken Status Effect until Second Wind deactivates."
      },
      {
        "question": "When can you use second wind D&D?",
        "answer": "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
      },
      {
        "question": "Can second wind be used out of combat?",
        "answer": "You can use Second Wind outside of combat\n You can take any action (other than actual fighting) outside of combat, and therefore you can also use Second Wind outside of combat."
      }
    ]
  },
  "action-surge-5e": {
    "slug": "action-surge-5e",
    "name": "Action Surge",
    "parentClass": "Fighter",
    "steps": [
      {
        "question": "Is the character a Fighter of at least 1st level?",
        "failReason": "Action Surge is a Fighter feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Action Surge has limited uses that recover after a short or long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Action Surge requires a bonus action to use."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Action Surge only applies to melee attacks."
      }
    ],
    "paaQuestions": [
      {
        "question": "When can you use action surge?",
        "answer": "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you must finish a short or long rest before you can use it again."
      },
      {
        "question": "How often can action surge be used?",
        "answer": "The only limitation on Action Surge is that it can be only used once per turn (at 17th level, when you gain a second use of this ability). The only limitation on Haste is what kind of Action can be used- Attack (one weapon attack only*), Dash, Disengage, Hide, or Use an Object action."
      }
    ]
  },
  "indomitable-5e": {
    "slug": "indomitable-5e",
    "name": "Indomitable",
    "parentClass": "Fighter",
    "steps": [
      {
        "question": "Is the character a Fighter of at least 1st level?",
        "failReason": "Indomitable is a Fighter feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Indomitable has limited uses that recover after a long rest."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does indomitable might work in 5e?",
        "answer": "Indomitable Might\n Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
      }
    ]
  },
  "martial-arts-5e": {
    "slug": "martial-arts-5e",
    "name": "Martial Arts",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Martial Arts is a Monk feature gained at 1st level."
      },
      {
        "question": "Is the character using a monk weapon or unarmed strike?",
        "failReason": "This feature requires using monk weapons or unarmed strikes."
      }
    ],
    "paaQuestions": [
      {
        "question": "How to use martial arts D&D?",
        "answer": "Martial Arts\n You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table."
      },
      {
        "question": "What are the fundamental requirements of martial arts?",
        "answer": "The four fundamental requirements of martial art are often referred to as the \"four pillars\" of martial arts training. These pillars include technique, physical conditioning, mental conditioning, and strategy."
      }
    ]
  },
  "ki-5e": {
    "slug": "ki-5e",
    "name": "Ki",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Ki is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Ki requires a bonus action to use."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Ki is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Ki only applies to melee attacks."
      },
      {
        "question": "Is the target/point within 5 feet?",
        "failReason": "Ki has a range of 5 feet."
      },
      {
        "question": "Is the character using a monk weapon or unarmed strike?",
        "failReason": "This feature requires using monk weapons or unarmed strikes."
      }
    ],
    "paaQuestions": [
      {
        "question": "How to use ki as a monk?",
        "answer": "Monks can spend Ki Points to perform various actions, such as using their Step of the Wind to dash or disengage as a bonus action, or using their Stunning Strike to incapacitate their foes. As Monks gain levels, they unlock additional Ki features, expanding their options in combat and exploration."
      },
      {
        "question": "When can I use my bonus action in D&D?",
        "answer": "You can only take a bonus. Action when a spell. Ability or other class feature specifically. Allows you to do so some classes are going to have a whole bunch of bonus. Actions."
      },
      {
        "question": "Can you use KI points on opportunity attacks?",
        "answer": "You can spend 1 ki to increase your reach by 5 feet when you make a melee weapon attack with a monk weapon (excluding unarmed strikes). This cannot increase your range for opportunity attacks."
      }
    ]
  },
  "flurry-of-blows-5e": {
    "slug": "flurry-of-blows-5e",
    "name": "Flurry of Blows",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Flurry of Blows is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have Ki points remaining?",
        "failReason": "Flurry of Blows has limited uses that recover after a long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Flurry of Blows requires a bonus action to use."
      },
      {
        "question": "Is the target/point within 10 feet?",
        "failReason": "Flurry of Blows has a range of 10 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does flurry of blows work in 5e?",
        "answer": "Flurry of Blows\n Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
      },
      {
        "question": "Do you need to be unarmed to use flurry of blows?",
        "answer": "A monk applies his full Strength bonus to his damage rolls for all successful attacks made with flurry of blows, whether the attacks are made with an off-hand or with a weapon wielded in both hands. A monk may substitute disarm, sunder, and trip combat maneuvers for unarmed attacks as part of a flurry of blows."
      },
      {
        "question": "Can you use astral arms for flurry of blows?",
        "answer": "A reach of 10 feet is a significant advantage, and if your wisdom modifier is your highest modifier, it means more damage. Since you only get 1 bonus action per turn, you may not use flurry of blows if you use the astral arms to attack with your bonus action."
      }
    ]
  },
  "patient-defense-5e": {
    "slug": "patient-defense-5e",
    "name": "Patient Defense",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Patient Defense is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Patient Defense requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does patient defense work in 5e?",
        "answer": "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
      }
    ]
  },
  "step-of-the-wind-5e": {
    "slug": "step-of-the-wind-5e",
    "name": "Step of the Wind",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Step of the Wind is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Step of the Wind requires a bonus action to use."
      },
      {
        "question": "Is the target/point within 160 feet?",
        "failReason": "Step of the Wind has a range of 160 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Step of the Wind work in 5e?",
        "answer": "Step of the Wind\n You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
      }
    ]
  },
  "deflect-missiles-5e": {
    "slug": "deflect-missiles-5e",
    "name": "Deflect Missiles",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Deflect Missiles is a Monk feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Deflect Missiles is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character making a weapon attack?",
        "failReason": "Deflect Missiles only applies to weapon attacks."
      },
      {
        "question": "Is the target/point within 20 feet?",
        "failReason": "Deflect Missiles has a range of 20 feet."
      },
      {
        "question": "Is the character using a monk weapon or unarmed strike?",
        "failReason": "This feature requires using monk weapons or unarmed strikes."
      },
      {
        "question": "Does the character have a free hand?",
        "failReason": "Deflect Missiles requires a free hand."
      }
    ],
    "paaQuestions": [
      {
        "question": "Does deflect missile work on an Eldritch blast?",
        "answer": "While these increases the utility of Deflect Missile, it still only works against ranged attacks. So while spells like Firebolt and Eldritch Blast fall under this, attacks like Fireball do not."
      },
      {
        "question": "How does a deflect attack work?",
        "answer": "When an attack roll hits you and its damage includes Bludgeoning, Piercing, or Slashing damage, you can take a Reaction to reduce the attack's total damage against you. The reduction equals 1d10 plus your Dexterity modier and Monk level."
      }
    ]
  },
  "slow-fall-5e": {
    "slug": "slow-fall-5e",
    "name": "Slow Fall",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Slow Fall is a Monk feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Slow Fall is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the target/point within 8 feet?",
        "failReason": "Slow Fall has a range of 8 feet."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Slow Fall cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does slow fall work in 5e?",
        "answer": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
      },
      {
        "question": "How does slow fall work?",
        "answer": "The affected entity falls at a much slower rate than normal, with a terminal velocity of 9.8 m/s, and is unable to take fall damage when falling. However, the entity still takes damage from using an ender pearl. In addition, the entity cannot turn farmland into dirt by jumping on it."
      }
    ]
  },
  "stunning-strike-5e": {
    "slug": "stunning-strike-5e",
    "name": "Stunning Strike",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Stunning Strike is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have Ki points remaining?",
        "failReason": "Stunning Strike has limited uses that recover after a long rest."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Stunning Strike is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Stunning Strike only applies to melee attacks."
      },
      {
        "question": "Is the character using a monk weapon or unarmed strike?",
        "failReason": "This feature requires using monk weapons or unarmed strikes."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Stunning Strike cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does stun work in 5e?",
        "answer": "The stunned condition in D&D 5e causes characters to become incapacitated and dazed, leaving them unable to take actions or reactions, move, or speak clearly. It leaves characters vulnerable to attack and can last for a round or longer, depending on the spell or effect causing it."
      }
    ]
  },
  "ki-empowered-strikes-5e": {
    "slug": "ki-empowered-strikes-5e",
    "name": "Ki-Empowered Strikes",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Ki-Empowered Strikes is a Monk feature gained at 1st level."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Ki-Empowered Strikes only applies to melee attacks."
      }
    ],
    "paaQuestions": []
  },
  "evasion-5e": {
    "slug": "evasion-5e",
    "name": "Evasion",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Evasion is a Monk feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Evasion is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Evasion cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does evasion work in 5e?",
        "answer": "The Rogue ability that helps with spells or effects like Fireball or any other effect that allows you to make a Dexterity Save for half damage is Evasion. Evasion just means you only take half damage from Fireball (and others) if you fail the Dex Save or avoid all damage if you succeed the save."
      },
      {
        "question": "How many times can I use evasion?",
        "answer": "There aren't any written limits on how often evasion works."
      },
      {
        "question": "Does evasion work from behind?",
        "answer": "Won't let you dodge attacks made from behind, and does not work at all when you're stunned."
      }
    ]
  },
  "stillness-of-mind-5e": {
    "slug": "stillness-of-mind-5e",
    "name": "Stillness of Mind",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Stillness of Mind is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Stillness of Mind requires a bonus action to use."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Stillness of Mind requires an action to use."
      }
    ],
    "paaQuestions": []
  },
  "diamond-soul-5e": {
    "slug": "diamond-soul-5e",
    "name": "Diamond Soul",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Diamond Soul is a Monk feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": []
  },
  "empty-body-5e": {
    "slug": "empty-body-5e",
    "name": "Empty Body",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Empty Body is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Empty Body requires an action to use."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Empty Body has a range of 30 feet."
      },
      {
        "question": "Is the character free of other concentration effects?",
        "failReason": "A creature can only concentrate on one effect at a time."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does the monk's empty body feature work?",
        "answer": "\" Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\""
      }
    ]
  },
  "perfect-self-5e": {
    "slug": "perfect-self-5e",
    "name": "Perfect Self",
    "parentClass": "Monk",
    "steps": [
      {
        "question": "Is the character a Monk of at least 1st level?",
        "failReason": "Perfect Self is a Monk feature gained at 1st level."
      },
      {
        "question": "Does the character have Ki points remaining?",
        "failReason": "Perfect Self has limited uses that recover after a long rest."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Perfect Self requires an action to use."
      },
      {
        "question": "Is the character wearing no armor?",
        "failReason": "Perfect Self only works while not wearing armor."
      }
    ],
    "paaQuestions": []
  },
  "divine-sense-5e": {
    "slug": "divine-sense-5e",
    "name": "Divine Sense",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Divine Sense is a Paladin feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Divine Sense requires a bonus action to use."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Divine Sense requires an action to use."
      },
      {
        "question": "Is the target/point within 60 feet?",
        "failReason": "Divine Sense has a range of 60 feet."
      }
    ],
    "paaQuestions": []
  },
  "lay-on-hands-5e": {
    "slug": "lay-on-hands-5e",
    "name": "Lay on Hands",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Lay on Hands is a Paladin feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Lay on Hands requires an action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "Can I use Lay on Hands on myself in D&D 5e?",
        "answer": "You can absolutely use Lay on Hands on yourself."
      },
      {
        "question": "Can Lay on Hands be used on yourself?",
        "answer": "Paladins can use the lay on hands ability on themselves as a swift action without needing to actually make contact with themselves - they're always in contact with themselves, so it just uses up a swift action to make the ability go off after the conscious decision is made."
      }
    ]
  },
  "divine-smite-5e": {
    "slug": "divine-smite-5e",
    "name": "Divine Smite",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Divine Smite is a Paladin feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Divine Smite requires a bonus action to use."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Divine Smite requires an action to use."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Divine Smite only applies to melee attacks."
      },
      {
        "question": "Is the character free of other concentration effects?",
        "failReason": "A creature can only concentrate on one effect at a time."
      },
      {
        "question": "Does the character have a spell slot available?",
        "failReason": "Divine Smite requires expending a spell slot."
      },
      {
        "question": "Did the character just hit with a melee weapon attack?",
        "failReason": "Divine Smite can only be used when hitting with a melee weapon attack."
      }
    ],
    "paaQuestions": [
      {
        "question": "When can you use divine smite?",
        "answer": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8."
      },
      {
        "question": "Can you use divine smite with true strike?",
        "answer": "Yeah it does. Divine smite takes a BA, whereas True Strike takes an Action and is a cantrip so it doesn't break any rules."
      }
    ]
  },
  "aura-of-protection-5e": {
    "slug": "aura-of-protection-5e",
    "name": "Aura of Protection",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Aura of Protection is a Paladin feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Aura of Protection requires an action to use."
      },
      {
        "question": "Is the target/point within 10 feet?",
        "failReason": "Aura of Protection has a range of 10 feet."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Aura of Protection cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Aura of Protection work in 5e?",
        "answer": "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1)."
      },
      {
        "question": "Does Aura of Protection apply to Charisma saves?",
        "answer": "You use your Cha modifier for Charisma saves (and Proficiency bonus if you're proficient with Charisma saving throws). In addition to that, the Paladin's Aura of Protection adds his Cha modifier to saving throws, so yes, you would be using 2x Cha modifier + Proficiency bonus to a Paladin's Charisma saving throws."
      },
      {
        "question": "How does protection work with auras?",
        "answer": "702.16c A permanent or player with protection can't be enchanted by Auras that have the stated quality. Such Auras attached to the permanent or player with protection will be put into their owners' graveyards as a state-based action. (See rule 704, \u201cState-Based Actions.\u201d)"
      }
    ]
  },
  "aura-of-courage-5e": {
    "slug": "aura-of-courage-5e",
    "name": "Aura of Courage",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Aura of Courage is a Paladin feature gained at 1st level."
      },
      {
        "question": "Is the target/point within 10 feet?",
        "failReason": "Aura of Courage has a range of 10 feet."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Aura of Courage work?",
        "answer": "Aura of Courage is one of the beneficial conditions that can be applied to a creature. Conditions alter capabilities and state of any creature in various ways. Aura of Courage is also a level 10 class feature of all Paladins. The paladin applies this aura to all allies within 2 cells of him."
      }
    ]
  },
  "improved-divine-smite-5e": {
    "slug": "improved-divine-smite-5e",
    "name": "Improved Divine Smite",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Improved Divine Smite is a Paladin feature gained at 1st level."
      },
      {
        "question": "Is the character making a melee attack?",
        "failReason": "Improved Divine Smite only applies to melee attacks."
      },
      {
        "question": "Does the character have a spell slot available?",
        "failReason": "Divine Smite requires expending a spell slot."
      },
      {
        "question": "Did the character just hit with a melee weapon attack?",
        "failReason": "Divine Smite can only be used when hitting with a melee weapon attack."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does improved divine smite work?",
        "answer": "Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
      }
    ]
  },
  "cleansing-touch-5e": {
    "slug": "cleansing-touch-5e",
    "name": "Cleansing Touch",
    "parentClass": "Paladin",
    "steps": [
      {
        "question": "Is the character a Paladin of at least 1st level?",
        "failReason": "Cleansing Touch is a Paladin feature gained at 1st level."
      },
      {
        "question": "Does the character have Channel Divinity uses remaining?",
        "failReason": "Cleansing Touch has limited uses that recover after a short or long rest."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Cleansing Touch requires an action to use."
      }
    ],
    "paaQuestions": []
  },
  "favored-enemy-5e": {
    "slug": "favored-enemy-5e",
    "name": "Favored Enemy",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Favored Enemy is a Ranger feature gained at 1st level."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Favored Enemy requires an attack to be made."
      },
      {
        "question": "Is the character free of other concentration effects?",
        "failReason": "A creature can only concentrate on one effect at a time."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does favored enemy work in 5e?",
        "answer": "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all."
      },
      {
        "question": "How does favoured foe work?",
        "answer": "When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your concentration (as if you were concentrating on a spell)."
      }
    ]
  },
  "natural-explorer-5e": {
    "slug": "natural-explorer-5e",
    "name": "Natural Explorer",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Natural Explorer is a Ranger feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Natural Explorer work?",
        "answer": "When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn't slow your group's travel."
      }
    ]
  },
  "primeval-awareness-5e": {
    "slug": "primeval-awareness-5e",
    "name": "Primeval Awareness",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Primeval Awareness is a Ranger feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Primeval Awareness requires an action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does primeval awareness work?",
        "answer": "For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead."
      }
    ]
  },
  "hide-in-plain-sight-5e": {
    "slug": "hide-in-plain-sight-5e",
    "name": "Hide in Plain Sight",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Hide in Plain Sight is a Ranger feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": []
  },
  "vanish-5e": {
    "slug": "vanish-5e",
    "name": "Vanish",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Vanish is a Ranger feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Vanish requires a bonus action to use."
      },
      {
        "question": "Can the character see the target?",
        "failReason": "Vanish requires the character to see the target."
      }
    ],
    "paaQuestions": []
  },
  "feral-senses-5e": {
    "slug": "feral-senses-5e",
    "name": "Feral Senses",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Feral Senses is a Ranger feature gained at 1st level."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Feral Senses has a range of 30 feet."
      }
    ],
    "paaQuestions": []
  },
  "foe-slayer-5e": {
    "slug": "foe-slayer-5e",
    "name": "Foe Slayer",
    "parentClass": "Ranger",
    "steps": [
      {
        "question": "Is the character a Ranger of at least 1st level?",
        "failReason": "Foe Slayer is a Ranger feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Foe Slayer has limited uses that recover after a long rest."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Foe Slayer requires an attack to be made."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does favored foe work in 5e?",
        "answer": "\u201c The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you increase that damage by 1d4. You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\u201d"
      }
    ]
  },
  "sneak-attack-5e": {
    "slug": "sneak-attack-5e",
    "name": "Sneak Attack",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Sneak Attack is a Rogue feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Sneak Attack has limited uses that recover after a long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Sneak Attack requires a bonus action to use."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Sneak Attack requires an attack to be made."
      },
      {
        "question": "Is the target/point within 30 feet?",
        "failReason": "Sneak Attack has a range of 30 feet."
      },
      {
        "question": "Is the character using a finesse or ranged weapon?",
        "failReason": "This feature requires a finesse or ranged weapon."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Sneak Attack cannot be used while incapacitated or unconscious."
      },
      {
        "question": "Does the character have advantage OR is an ally within 5 feet of the target?",
        "failReason": "Sneak Attack requires advantage on the attack, OR an enemy of the target within 5 feet of it."
      },
      {
        "question": "Is the character using a finesse or ranged weapon?",
        "failReason": "Sneak Attack only works with finesse or ranged weapons."
      }
    ],
    "paaQuestions": [
      {
        "question": "When can you use sneak attack 5e?",
        "answer": "Sneak Attack\n The attack must use a finesse or a ranged weapon. You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll."
      }
    ]
  },
  "cunning-action-5e": {
    "slug": "cunning-action-5e",
    "name": "Cunning Action",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Cunning Action is a Rogue feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Cunning Action requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does cunning action work in 5e?",
        "answer": "Cunning Action\n Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
      }
    ]
  },
  "uncanny-dodge-5e": {
    "slug": "uncanny-dodge-5e",
    "name": "Uncanny Dodge",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Uncanny Dodge is a Rogue feature gained at 1st level."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Uncanny Dodge is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Uncanny Dodge requires an attack to be made."
      },
      {
        "question": "Can the character see the target?",
        "failReason": "Uncanny Dodge requires the character to see the target."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does Uncanny Dodge work in 5e?",
        "answer": "It reads: Uncanny Dodge: Starting at 5th level, when an attacker you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
      }
    ]
  },
  "reliable-talent-5e": {
    "slug": "reliable-talent-5e",
    "name": "Reliable Talent",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Reliable Talent is a Rogue feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": [
      {
        "question": "How does reliable talent work in 5e?",
        "answer": "Reliable Talent\n By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
      },
      {
        "question": "Does reliable talent apply to half proficiency?",
        "answer": "Unless you are somehow proficient in initiative (via some homebrew thingy), Reliable Talent does not apply. And Rogue/Bards with Jack of All Trades CAN add half of their proficiency bonus to initiative but CANNOT utilize Reliable Talent again because it's not an actual skill/proficiency."
      }
    ]
  },
  "blindsense-5e": {
    "slug": "blindsense-5e",
    "name": "Blindsense",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Blindsense is a Rogue feature gained at 1st level."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Blindsense requires an attack to be made."
      },
      {
        "question": "Is the target/point within 10 feet?",
        "failReason": "Blindsense has a range of 10 feet."
      }
    ],
    "paaQuestions": []
  },
  "slippery-mind-5e": {
    "slug": "slippery-mind-5e",
    "name": "Slippery Mind",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Slippery Mind is a Rogue feature gained at 1st level."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Slippery Mind requires an attack to be made."
      },
      {
        "question": "Is the target/point within 5 feet?",
        "failReason": "Slippery Mind has a range of 5 feet."
      },
      {
        "question": "Is the character using a finesse or ranged weapon?",
        "failReason": "This feature requires a finesse or ranged weapon."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Slippery Mind cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": []
  },
  "elusive-5e": {
    "slug": "elusive-5e",
    "name": "Elusive",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Elusive is a Rogue feature gained at 1st level."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Elusive requires an attack to be made."
      },
      {
        "question": "Is the target/point within 5 feet?",
        "failReason": "Elusive has a range of 5 feet."
      },
      {
        "question": "Is the character using a finesse or ranged weapon?",
        "failReason": "This feature requires a finesse or ranged weapon."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Elusive cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": []
  },
  "stroke-of-luck-5e": {
    "slug": "stroke-of-luck-5e",
    "name": "Stroke of Luck",
    "parentClass": "Rogue",
    "steps": [
      {
        "question": "Is the character a Rogue of at least 1st level?",
        "failReason": "Stroke of Luck is a Rogue feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": [
      {
        "question": "How does luck work in 5e?",
        "answer": "The Luck System\n Every time a character misses an attack or a saving throw, they gain one luck point. They can only hold up to five luck points. If they gain a sixth luck point, they roll 1d4 and that's how many luck points they have now. They can spend one luck point to get +1 to a D20 roll after they roll."
      }
    ]
  },
  "font-of-magic-5e": {
    "slug": "font-of-magic-5e",
    "name": "Font of Magic",
    "parentClass": "Sorcerer",
    "steps": [
      {
        "question": "Is the character a Sorcerer of at least 1st level?",
        "failReason": "Font of Magic is a Sorcerer feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Font of Magic requires a bonus action to use."
      }
    ],
    "paaQuestions": []
  },
  "sorcery-points-5e": {
    "slug": "sorcery-points-5e",
    "name": "Sorcery Points",
    "parentClass": "Sorcerer",
    "steps": [
      {
        "question": "Is the character a Sorcerer of at least 1st level?",
        "failReason": "Sorcery Points is a Sorcerer feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Sorcery Points requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How to use sorcery points 5e?",
        "answer": "You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels. Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn."
      }
    ]
  },
  "flexible-casting-5e": {
    "slug": "flexible-casting-5e",
    "name": "Flexible Casting",
    "parentClass": "Sorcerer",
    "steps": [
      {
        "question": "Is the character a Sorcerer of at least 1st level?",
        "failReason": "Flexible Casting is a Sorcerer feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Flexible Casting requires a bonus action to use."
      }
    ],
    "paaQuestions": []
  },
  "metamagic-5e": {
    "slug": "metamagic-5e",
    "name": "Metamagic",
    "parentClass": "Sorcerer",
    "steps": [
      {
        "question": "Is the character a Sorcerer of at least 1st level?",
        "failReason": "Metamagic is a Sorcerer feature gained at 1st level."
      },
      {
        "question": "Does the character have Sorcery Points remaining?",
        "failReason": "Metamagic has limited uses that recover after a long rest."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Metamagic is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      }
    ],
    "paaQuestions": [
      {
        "question": "How often can I use Metamagic?",
        "answer": "As many times as you wish, as long as you have the sorcery points. But you couldn't, for example, double-twin a spell to hit four opponents or double-empower a spell. you can pick one meta magic per spell but you can use the same metamagic as often as you like provided you can pay for it ."
      },
      {
        "question": "Can metamagic be used on non-sorcerer spells?",
        "answer": "Yes. There is nothing in Metamagic (or Flexible Casting) descriptions that limit either to be only for sorcerer spells. Any spell slots created with Flexible casting are for the shared spell slots with other casters (except warlocks) can be used for casting any spell the character knows or prepares."
      }
    ]
  },
  "sorcerous-restoration-5e": {
    "slug": "sorcerous-restoration-5e",
    "name": "Sorcerous Restoration",
    "parentClass": "Sorcerer",
    "steps": [
      {
        "question": "Is the character a Sorcerer of at least 1st level?",
        "failReason": "Sorcerous Restoration is a Sorcerer feature gained at 1st level."
      },
      {
        "question": "Does the character have Sorcery Points remaining?",
        "failReason": "Sorcerous Restoration has limited uses that recover after a short or long rest."
      }
    ],
    "paaQuestions": []
  },
  "pact-magic-5e": {
    "slug": "pact-magic-5e",
    "name": "Pact Magic",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Pact Magic is a Warlock feature gained at 1st level."
      },
      {
        "question": "Does the character have spell slots remaining?",
        "failReason": "Pact Magic has limited uses that recover after a short or long rest."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Pact Magic requires an attack to be made."
      }
    ],
    "paaQuestions": []
  },
  "eldritch-invocations-5e": {
    "slug": "eldritch-invocations-5e",
    "name": "Eldritch Invocations",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Eldritch Invocations is a Warlock feature gained at 1st level."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Eldritch Invocations requires an attack to be made."
      }
    ],
    "paaQuestions": []
  },
  "pact-of-the-blade-5e": {
    "slug": "pact-of-the-blade-5e",
    "name": "Pact of the Blade",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Pact of the Blade is a Warlock feature gained at 1st level."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Pact of the Blade requires an action to use."
      },
      {
        "question": "Is the target/point within 5 feet?",
        "failReason": "Pact of the Blade has a range of 5 feet."
      },
      {
        "question": "Does the character have a free hand?",
        "failReason": "Pact of the Blade requires a free hand."
      },
      {
        "question": "Is the character free of conditions like Incapacitated or Unconscious?",
        "failReason": "Pact of the Blade cannot be used while incapacitated or unconscious."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does pact of the Blade work in D&D 5e?",
        "answer": "Pact of the Blade grants several key benefits\n The weapon uses the warlock's Charisma modifier for attack and damage rolls instead of Strength or Dexterity. Various Eldritch Invocations enhance the pact weapon's power. The weapon disappears if the warlock is incapacitated or dies. They can also dismiss it anytime."
      }
    ]
  },
  "pact-of-the-chain-5e": {
    "slug": "pact-of-the-chain-5e",
    "name": "Pact of the Chain",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Pact of the Chain is a Warlock feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Pact of the Chain requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does pact of the chain work in 5e?",
        "answer": "The pact of the chain states \" when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own.\" Ergo, while your pact familiar does act on it's own, it cannot attack."
      }
    ]
  },
  "pact-of-the-tome-5e": {
    "slug": "pact-of-the-tome-5e",
    "name": "Pact of the Tome",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Pact of the Tome is a Warlock feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Pact of the Tome requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does pact of the tome work in 5e?",
        "answer": "Pact of the Tome\n Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will."
      }
    ]
  },
  "mystic-arcanum-5e": {
    "slug": "mystic-arcanum-5e",
    "name": "Mystic Arcanum",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Mystic Arcanum is a Warlock feature gained at 1st level."
      },
      {
        "question": "Does the character have spell slots remaining?",
        "failReason": "Mystic Arcanum has limited uses that recover after a long rest."
      }
    ],
    "paaQuestions": []
  },
  "eldritch-master-5e": {
    "slug": "eldritch-master-5e",
    "name": "Eldritch Master",
    "parentClass": "Warlock",
    "steps": [
      {
        "question": "Is the character a Warlock of at least 1st level?",
        "failReason": "Eldritch Master is a Warlock feature gained at 1st level."
      },
      {
        "question": "Does the character have spell slots remaining?",
        "failReason": "Eldritch Master has limited uses that recover after a short or long rest."
      }
    ],
    "paaQuestions": []
  },
  "arcane-recovery-5e": {
    "slug": "arcane-recovery-5e",
    "name": "Arcane Recovery",
    "parentClass": "Wizard",
    "steps": [
      {
        "question": "Is the character a Wizard of at least 1st level?",
        "failReason": "Arcane Recovery is a Wizard feature gained at 1st level."
      },
      {
        "question": "Does the character have spell slots remaining?",
        "failReason": "Arcane Recovery has limited uses that recover after a short or long rest."
      }
    ],
    "paaQuestions": [
      {
        "question": "Does Arcane Recovery work with ritual spells?",
        "answer": "(4) The arcane ward is recharged by casting abjuration spells, It recharges 2hp x the level of abjuration spell cast. In 5e the wizard can recharge it by ritually casting alarm without expending spell slots or use the sheild spell in combat to recharge it."
      }
    ]
  },
  "spell-mastery-5e": {
    "slug": "spell-mastery-5e",
    "name": "Spell Mastery",
    "parentClass": "Wizard",
    "steps": [
      {
        "question": "Is the character a Wizard of at least 1st level?",
        "failReason": "Spell Mastery is a Wizard feature gained at 1st level."
      },
      {
        "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
        "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
        "invertedLogic": true
      }
    ],
    "paaQuestions": [
      {
        "question": "How does spell mastery work?",
        "answer": "Spell mastery is an ability word that gives a card different or additional characteristics if its controller has 2 or more instant or sorcery cards in their graveyard."
      },
      {
        "question": "What are the requirements for spells in D&D?",
        "answer": "Spell Components\n Spells may require verbal (V), somatic (S), or material (M) components. Verbal components require you to make audible noise, and somatic components involve hand movements. If you have weapons or a shield in hand, you may need to drop them temporarily to perform somatic components."
      }
    ]
  },
  "signature-spells-5e": {
    "slug": "signature-spells-5e",
    "name": "Signature Spells",
    "parentClass": "Wizard",
    "steps": [
      {
        "question": "Is the character a Wizard of at least 1st level?",
        "failReason": "Signature Spells is a Wizard feature gained at 1st level."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Signature Spells requires a bonus action to use."
      },
      {
        "question": "Does the character have their action available this turn?",
        "failReason": "Signature Spells requires an action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does signature spell work?",
        "answer": "So you do get one spell per per rank. As you are adventuring. And you can change these spells out you can change your signature spell you can change the spells in your spellertoire."
      },
      {
        "question": "What are the requirements for spells in D&D?",
        "answer": "Spell Components\n Spells may require verbal (V), somatic (S), or material (M) components. Verbal components require you to make audible noise, and somatic components involve hand movements. If you have weapons or a shield in hand, you may need to drop them temporarily to perform somatic components."
      }
    ]
  },
  "crimson-rite-5e": {
    "slug": "crimson-rite-5e",
    "name": "Crimson Rite",
    "parentClass": "Blood Hunter",
    "steps": [
      {
        "question": "Is the character a Blood Hunter of at least 1st level?",
        "failReason": "Crimson Rite is a Blood Hunter feature gained at 1st level."
      },
      {
        "question": "Does the character have uses of this feature remaining?",
        "failReason": "Crimson Rite has limited uses that recover after a short or long rest."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Crimson Rite requires a bonus action to use."
      }
    ],
    "paaQuestions": [
      {
        "question": "How many times can you use Crimson Rite?",
        "answer": "Limit the number of times the rite can be casted in a single weapon, based on the level of the weapon: Normal weapon: 1 crimson rite. +1 magical weapon: 2 crimson rite. +2 magical weapon: 3 crimson rite."
      }
    ]
  },
  "blood-maledict-5e": {
    "slug": "blood-maledict-5e",
    "name": "Blood Maledict",
    "parentClass": "Blood Hunter",
    "steps": [
      {
        "question": "Is the character a Blood Hunter of at least 1st level?",
        "failReason": "Blood Maledict is a Blood Hunter feature gained at 1st level."
      },
      {
        "question": "Does the character have Channel Divinity uses remaining?",
        "failReason": "Blood Maledict has limited uses that recover after a short or long rest."
      }
    ],
    "paaQuestions": [
      {
        "question": "How does blood Maledict work?",
        "answer": "Each time you use your Blood Maledict feature, you choose which curse to invoke from the curses you know. While invoking a blood curse, but before it affects the target, you can choose to amplify the curse by taking necrotic damage equal to one roll of your hemocraft die. This damage can't be reduced in any way."
      }
    ]
  },
  "extra-attack-5e": {
    "slug": "extra-attack-5e",
    "name": "Extra Attack",
    "parentClass": "Multiple",
    "steps": [
      {
        "question": "Does the character have access to Extra Attack from their class?",
        "failReason": "Extra Attack must be gained from a class that grants it."
      },
      {
        "question": "Does the character have their bonus action available this turn?",
        "failReason": "Extra Attack requires a bonus action to use."
      },
      {
        "question": "Has the appropriate trigger occurred for this reaction?",
        "failReason": "Extra Attack is a reaction that requires a specific trigger."
      },
      {
        "question": "Does the character have their reaction available this round?",
        "failReason": "Each creature only gets one reaction per round."
      }
    ],
    "paaQuestions": []
  },
  "fighting-style-5e": {
    "slug": "fighting-style-5e",
    "name": "Fighting Style",
    "parentClass": "Multiple",
    "steps": [
      {
        "question": "Does the character have access to Fighting Style from their class?",
        "failReason": "Fighting Style must be gained from a class that grants it."
      },
      {
        "question": "Is the character making an attack or has hit a target?",
        "failReason": "Fighting Style requires an attack to be made."
      }
    ],
    "paaQuestions": []
  }
};

