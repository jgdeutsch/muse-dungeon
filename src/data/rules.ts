import { FAQItem } from "../components/FAQ";

export type RulePage = {
  slug: string;
  name: string;
  category: "core-mechanics" | "tools-resources" | "game-terms" | "general" | "conditions";
  description: string;
  sections: { id: string; title: string; content: string }[];
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
  searchVolume: number;
  aliases?: string[];
};

export const rulePages: RulePage[] = [
  {
    slug: "dnd-alignments",
    name: "D&D Alignments",
    category: "core-mechanics",
    description: "Complete guide to the 9 alignment system in D&D 5e, from Lawful Good to Chaotic Evil.",
    searchVolume: 9020,
    sections: [
      {
        id: "alignment-grid",
        title: "The Nine Alignments",
        content: `<table class="stat-table"><thead><tr><th></th><th>Lawful</th><th>Neutral</th><th>Chaotic</th></tr></thead><tbody><tr><th>Good</th><td>Lawful Good</td><td>Neutral Good</td><td>Chaotic Good</td></tr><tr><th>Neutral</th><td>Lawful Neutral</td><td>True Neutral</td><td>Chaotic Neutral</td></tr><tr><th>Evil</th><td>Lawful Evil</td><td>Neutral Evil</td><td>Chaotic Evil</td></tr></tbody></table><p>Alignment represents a creature's moral and ethical outlook. The lawful-chaotic axis reflects attitude toward society and order, while good-evil reflects moral character.</p>`
      },
      {
        id: "choosing-alignment",
        title: "Choosing Your Alignment",
        content: `<p>Your alignment should reflect your character's personality and values, not restrict their actions. Characters can act against their alignment occasionally without changing it.</p><p>Some class features (like paladins) may have alignment requirements. Discuss with your DM how strictly alignment is enforced in your campaign.</p>`
      }
    ],
    commonMistakes: [
      "Treating alignment as rigid rules rather than guidelines",
      "Using alignment to justify disruptive behavior",
      "Forgetting that alignment can change over time"
    ],
    dmTips: [
      "Let players define what their alignment means for their character",
      "Use alignment for NPCs and monsters, but don't restrict player choice",
      "Consider removing alignment restrictions on classes if it fits your campaign"
    ],
    faq: [
      {
        question: "Does alignment affect gameplay mechanically in D&D 5e?",
        answer: "Very minimally compared to older editions. Some magic items and spells detect or interact with alignment, but there are no mechanical penalties for acting against your stated alignment. It's primarily a roleplay guide rather than a rules-based restriction."
      },
      {
        question: "Can a character change their alignment?",
        answer: "Yes! Alignment can change based on a character's actions and experiences. A Lawful Good paladin who commits evil acts might shift toward Neutral or even Evil over time. The DM typically tracks this and discusses significant shifts with the player."
      },
      {
        question: "What's the difference between Chaotic Good and Neutral Good?",
        answer: "Neutral Good characters do what's right regardless of laws or rules, but don't actively oppose structure. Chaotic Good characters actively value personal freedom and may intentionally break unjust laws. Robin Hood is the classic Chaotic Good example - breaking laws to do good."
      },
      {
        question: "Can a Paladin be any alignment in 5e?",
        answer: "Yes! Unlike older editions, 5e Paladins can be any alignment based on their oath. An Oath of Devotion Paladin is typically Lawful Good, but an Oathbreaker is often Evil, and other oaths fit various alignments. The oath defines the paladin more than alignment."
      },
      {
        question: "What does 'True Neutral' mean?",
        answer: "True Neutral characters don't feel strongly about law vs. chaos or good vs. evil. They might be balanced philosophers, pragmatic survivors who do what's necessary, or druids who value natural balance above moral concerns. It's not 'no personality' - it's nuanced moderation."
      }
    ]
  },
  {
    slug: "dnd-stats",
    name: "D&D Stats (Ability Scores)",
    category: "core-mechanics",
    description: "Guide to the six ability scores in D&D 5e: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.",
    searchVolume: 14010,
    sections: [
      {
        id: "six-abilities",
        title: "The Six Ability Scores",
        content: `<p><strong>Strength:</strong> Physical power, melee attacks, Athletics checks</p><p><strong>Dexterity:</strong> Agility, AC, ranged attacks, Stealth and Acrobatics</p><p><strong>Constitution:</strong> Endurance, hit points, concentration saves</p><p><strong>Intelligence:</strong> Reasoning, memory, Arcana and Investigation</p><p><strong>Wisdom:</strong> Awareness, intuition, Perception and Insight</p><p><strong>Charisma:</strong> Force of personality, Persuasion and Deception</p>`
      },
      {
        id: "modifiers",
        title: "Ability Modifiers",
        content: `<p>Ability modifiers are calculated as: <strong>(Score - 10) / 2, rounded down</strong></p><p>A score of 10-11 gives +0 modifier. Each 2 points above 10 increases the modifier by 1. Standard array: 15, 14, 13, 12, 10, 8.</p>`
      }
    ],
    commonMistakes: [
      "Rolling the ability score instead of adding the modifier",
      "Forgetting proficiency bonus on skill checks",
      "Not updating modifiers when ability scores change"
    ],
    dmTips: [
      "Remind new players to use modifiers, not raw scores",
      "Consider point buy or standard array for balanced parties",
      "Allow ability score improvements to reflect character growth"
    ],
    faq: [
      {
        question: "What's the difference between ability scores and ability modifiers?",
        answer: "Ability scores are the base numbers (typically 8-20) that represent your raw capability. Modifiers are derived from scores using the formula (Score - 10) / 2, rounded down. A score of 14 gives a +2 modifier. You almost always use the modifier, not the score, when making rolls."
      },
      {
        question: "Which ability score is most important for my class?",
        answer: "It depends on your class: Strength for melee fighters, Dexterity for rogues and ranged fighters, Constitution for everyone (HP), Intelligence for wizards, Wisdom for clerics/druids, and Charisma for bards/sorcerers/warlocks/paladins. Check your class's spellcasting ability if you cast spells."
      },
      {
        question: "Can ability scores go above 20?",
        answer: "Normally no - 20 is the cap for player characters through standard advancement. However, some magic items (like the Belt of Giant Strength or Tome of Clear Thought) and high-level class features (like the Barbarian's Primal Champion) can push scores above 20, sometimes to 22, 24, or even 30."
      },
      {
        question: "What's the standard array and when should I use it?",
        answer: "The standard array is 15, 14, 13, 12, 10, 8 - assign these numbers to your six abilities however you want. Use it when you want balanced characters without the variance of rolling. It's great for new players and ensures no one starts dramatically stronger or weaker than others."
      },
      {
        question: "How do I calculate my modifier if I have an odd score?",
        answer: "Use the formula (Score - 10) / 2, rounded down. An odd score like 15 gives (15-10)/2 = 2.5, which rounds down to +2. The same as a score of 14. This is why players often prioritize even scores - a 15 and 14 give the same modifier until you increase one."
      }
    ]
  },
  {
    slug: "exhaustion-5e",
    name: "Exhaustion 5e",
    category: "conditions",
    description: "Complete guide to the exhaustion condition in D&D 5e, with all six levels and their effects.",
    searchVolume: 14020,
    sections: [
      {
        id: "exhaustion-levels",
        title: "Exhaustion Levels",
        content: `<table class="stat-table"><thead><tr><th>Level</th><th>Effect</th></tr></thead><tbody><tr><td>1</td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td>Speed halved</td></tr><tr><td>3</td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td>Hit point maximum halved</td></tr><tr><td>5</td><td>Speed reduced to 0</td></tr><tr><td>6</td><td>Death</td></tr></tbody></table><p>Effects are cumulative. A long rest reduces exhaustion by 1 level (if you have food and water).</p>`
      },
      {
        id: "gaining-exhaustion",
        title: "Gaining Exhaustion",
        content: `<p>Common sources: going without food/water, extreme temperatures, forced marches, certain spells and abilities (like Frenzy barbarian rage).</p><p>Greater restoration removes one level of exhaustion instantly.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting that effects are cumulative",
      "Not tracking exhaustion from environmental hazards",
      "Allowing short rests to reduce exhaustion"
    ],
    dmTips: [
      "Use exhaustion for wilderness survival and time pressure",
      "Warn players before they risk exhaustion",
      "Track food/water in survival-focused campaigns"
    ],
    faq: [
      {
        question: "How do you remove exhaustion in 5e?",
        answer: "A long rest removes ONE level of exhaustion (provided you have food and water). The spell Greater Restoration also removes one level instantly. There's no quick way to remove multiple levels - recovering from severe exhaustion takes days of rest, making it a serious condition."
      },
      {
        question: "Do exhaustion effects stack?",
        answer: "Yes, effects are cumulative. At exhaustion level 3, you have disadvantage on ability checks (level 1), half speed (level 2), AND disadvantage on attack rolls and saving throws (level 3). This makes high exhaustion levels devastating."
      },
      {
        question: "What causes exhaustion besides lack of food and water?",
        answer: "Many sources: Berserker Barbarian's Frenzy (1 level after rage), forced marches (Con save or 1 level per hour beyond 8), extreme heat/cold, certain spells like Sickening Radiance, some monster abilities, and resurrection spells like Raise Dead cause exhaustion."
      },
      {
        question: "Can you die from exhaustion?",
        answer: "Yes! Level 6 exhaustion causes instant death - no death saves, just dead. This makes exhaustion one of the few conditions that can kill a character outright, and why tracking exhaustion carefully matters in survival scenarios."
      },
      {
        question: "Does a short rest help with exhaustion?",
        answer: "No, short rests do NOT reduce exhaustion levels. Only a long rest (with food and water) reduces exhaustion by one level, or the Greater Restoration spell. This is a common mistake - exhaustion requires significant recovery time."
      }
    ]
  },
  {
    slug: "fall-damage-5e",
    name: "Fall Damage 5e",
    category: "core-mechanics",
    description: "How fall damage works in D&D 5e: 1d6 per 10 feet fallen, maximum 20d6.",
    searchVolume: 8780,
    sections: [
      {
        id: "calculating-fall-damage",
        title: "Calculating Fall Damage",
        content: `<p>A creature takes <strong>1d6 bludgeoning damage for every 10 feet fallen</strong>, up to a maximum of 20d6 (200 feet or higher).</p><p>The creature lands prone unless it avoids taking damage. No save to reduce damage normally, but features like Monk's Slow Fall can reduce it.</p>`
      },
      {
        id: "falling-speed",
        title: "Falling Speed and Reactions",
        content: `<p>A creature falls 500 feet per round instantly. The fall happens at the start of the next turn if knocked prone mid-turn.</p><p>Reactions like Feather Fall can be used while falling. Spells with falling components resolve before landing.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting the 20d6 maximum cap",
      "Not allowing reactions during a fall",
      "Applying fall damage to flying creatures who simply descend"
    ],
    dmTips: [
      "Use environmental falls as dramatic terrain hazards",
      "Describe the fall for tension before rolling damage",
      "Consider fall damage for thrown creatures"
    ],
    faq: [
      {
        question: "Is there a saving throw to reduce fall damage?",
        answer: "No, by RAW there's no saving throw to reduce fall damage. You take 1d6 per 10 feet fallen automatically. However, features like Monk's Slow Fall, the Feather Fall spell, or flying can reduce or prevent the damage entirely."
      },
      {
        question: "What's the maximum fall damage in 5e?",
        answer: "20d6 bludgeoning damage (averaging 70 damage) is the maximum, reached at 200 feet. Falls beyond 200 feet don't increase damage. This cap prevents terminal velocity from being instantly lethal to high-level characters."
      },
      {
        question: "Does fall damage apply if I jump down voluntarily?",
        answer: "Yes, fall damage applies to any fall over 10 feet, voluntary or not. However, you can reduce this by jumping (Athletics check) which can extend your safe landing distance. A high-level Monk with Slow Fall can safely drop significant distances."
      },
      {
        question: "Can I use a reaction while falling?",
        answer: "Yes! Reactions like casting Feather Fall can be used during a fall. Since falling 500 feet happens instantly (not over multiple turns), you need to react immediately. This makes Feather Fall valuable for any party exploring heights."
      },
      {
        question: "Do you land prone after taking fall damage?",
        answer: "Yes, a creature lands prone after taking any fall damage, unless it somehow avoids taking the damage entirely (like with Feather Fall or Slow Fall reducing damage to 0). This means enemies can get advantage on melee attacks against you until you stand up."
      }
    ]
  },
  {
    slug: "multiclassing-5e",
    name: "Multiclassing 5e",
    category: "core-mechanics",
    description: "Complete guide to multiclassing in D&D 5e, including prerequisites, proficiencies, and spell slot calculation.",
    searchVolume: 7640,
    sections: [
      {
        id: "multiclass-prerequisites",
        title: "Multiclassing Prerequisites",
        content: `<table class="stat-table"><thead><tr><th>Class</th><th>Requirement</th></tr></thead><tbody><tr><td>Barbarian</td><td>Strength 13</td></tr><tr><td>Bard</td><td>Charisma 13</td></tr><tr><td>Cleric</td><td>Wisdom 13</td></tr><tr><td>Druid</td><td>Wisdom 13</td></tr><tr><td>Fighter</td><td>Strength or Dexterity 13</td></tr><tr><td>Monk</td><td>Dexterity 13 and Wisdom 13</td></tr><tr><td>Paladin</td><td>Strength 13 and Charisma 13</td></tr><tr><td>Ranger</td><td>Dexterity 13 and Wisdom 13</td></tr><tr><td>Rogue</td><td>Dexterity 13</td></tr><tr><td>Sorcerer</td><td>Charisma 13</td></tr><tr><td>Warlock</td><td>Charisma 13</td></tr><tr><td>Wizard</td><td>Intelligence 13</td></tr></tbody></table>`
      },
      {
        id: "spell-slots",
        title: "Multiclass Spell Slots",
        content: `<p>Add full caster levels (Bard, Cleric, Druid, Sorcerer, Wizard) at full value. Add half-caster levels (Paladin, Ranger) divided by 2. Add one-third casters (Arcane Trickster, Eldritch Knight) divided by 3. Round down.</p><p>Use the Multiclass Spellcaster table with your combined caster level. You still learn/prepare spells as each class separately.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting ability score prerequisites",
      "Miscalculating spell slots for multiclass casters",
      "Thinking multiclassing gives proficiencies from level 1"
    ],
    dmTips: [
      "Discuss multiclassing plans with players early",
      "Warn new players that multiclassing can weaken characters",
      "Consider story reasons for multiclassing"
    ],
    faq: [
      {
        question: "Do I need to meet prerequisites for both my original and new class?",
        answer: "Yes! You must meet the ability score prerequisites for BOTH your current class and the new class you want to take. For example, a Fighter (Str 13) wanting to multiclass into Wizard needs both Str 13 (or Dex 13) AND Int 13."
      },
      {
        question: "What proficiencies do I get when multiclassing?",
        answer: "You get LIMITED proficiencies when multiclassing - not the full list from level 1. Each class grants specific multiclass proficiencies (listed in PHB Chapter 6). For example, multiclassing into Fighter gives only light/medium armor, shields, and simple/martial weapons - not heavy armor."
      },
      {
        question: "How do spell slots work with multiclassing?",
        answer: "Add your full caster levels (Bard, Cleric, Druid, Sorcerer, Wizard), half your half-caster levels (Paladin, Ranger, rounded down), and one-third your Eldritch Knight/Arcane Trickster levels (rounded down). Use that total with the Multiclass Spellcaster table. You can use any slot for any spell you know."
      },
      {
        question: "Can I cast higher-level spells with multiclass spell slots?",
        answer: "You can use higher-level slots to cast spells you know at higher levels (like upcasting Cure Wounds), but you can only LEARN/PREPARE spells based on each individual class's level. A Cleric 5/Wizard 5 has 5th-level slots but can only learn 3rd-level spells from each class."
      },
      {
        question: "Does multiclassing delay Extra Attack?",
        answer: "Yes, significantly. Extra Attack requires 5 levels in a single class (Fighter, Barbarian, Monk, Paladin, Ranger). A Fighter 3/Rogue 2 is level 5 but won't have Extra Attack until Fighter 5. This is a major reason multiclassing can weaken martial characters."
      }
    ]
  },
  {
    slug: "passive-perception-5e",
    name: "Passive Perception 5e",
    category: "core-mechanics",
    description: "How passive Perception works in D&D 5e: 10 + Wisdom modifier + proficiency bonus (if applicable).",
    searchVolume: 7500,
    sections: [
      {
        id: "calculating-passive-perception",
        title: "Calculating Passive Perception",
        content: `<p><strong>Passive Perception = 10 + Wisdom modifier + proficiency bonus (if proficient)</strong></p><p>Add bonuses from features like Observant feat (+5) or advantage (+5 to passive scores). Subtract 5 for disadvantage.</p><p>The DM uses passive Perception to determine what characters notice without actively searching.</p>`
      },
      {
        id: "using-passive-perception",
        title: "When to Use Passive Perception",
        content: `<p>Use passive Perception for hidden creatures, traps, and clues the characters might notice naturally. Active Perception checks are for deliberate searching.</p><p>Passive Perception represents constant awareness. It prevents meta-gaming from failed rolls and keeps the game flowing.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting to add proficiency bonus",
      "Not using passive Perception for hidden enemies",
      "Calling for Perception checks when passive would reveal it"
    ],
    dmTips: [
      "Note party's passive Perceptions on your DM screen",
      "Use passive Perception to surprise players with discoveries",
      "Don't call for rolls if passive Perception already succeeds"
    ],
    faq: [
      {
        question: "What's the formula for passive Perception?",
        answer: "Passive Perception = 10 + Wisdom modifier + proficiency bonus (if proficient in Perception). Add +5 if you have advantage on Perception checks (like from the Observant feat), or subtract 5 for disadvantage. Most characters range from 9 to 20+."
      },
      {
        question: "When should the DM use passive Perception vs. asking for a roll?",
        answer: "Use passive Perception when characters aren't actively searching - walking through a room, having a conversation, or traveling. Call for active Perception rolls when characters specifically say they're searching or looking for something. Passive represents baseline awareness."
      },
      {
        question: "Can passive Perception be higher than a rolled Perception check?",
        answer: "Yes! A character with passive Perception 18 might roll a 12 on an active check. Some DMs let players use whichever is higher, others treat them as different types of awareness. Discuss this with your table - there's no official ruling requiring one approach."
      },
      {
        question: "Does the Observant feat add +5 to passive Perception?",
        answer: "Yes, the Observant feat adds +5 to both passive Perception AND passive Investigation. Combined with proficiency and high Wisdom, this can create passive Perception scores of 20+ that spot almost everything, making it a powerful feat for scouts."
      },
      {
        question: "How does passive Perception interact with Stealth?",
        answer: "When a creature tries to hide, they roll Stealth. If that roll beats a character's passive Perception, they're hidden from that character. No Perception roll needed - the hidden creature's Stealth roll is compared directly to passive Perception scores."
      }
    ]
  },
  {
    slug: "wild-magic-table-5e",
    name: "Wild Magic Table 5e",
    category: "core-mechanics",
    description: "The Wild Magic Surge table for Wild Magic Sorcerers in D&D 5e, with random magical effects from d100 rolls.",
    searchVolume: 11540,
    sections: [
      {
        id: "wild-magic-surge",
        title: "Wild Magic Surge (d100)",
        content: `<table class="stat-table"><thead><tr><th>d100</th><th>Effect</th></tr></thead><tbody><tr><td>01-02</td><td>Roll again; both effects occur</td></tr><tr><td>03-04</td><td>You teleport 60 feet to a random space</td></tr><tr><td>05-06</td><td>Fireball centered on you (3rd-level)</td></tr><tr><td>07-08</td><td>Cast Magic Missile (5th-level)</td></tr><tr><td>09-10</td><td>You turn into a potted plant until start of next turn</td></tr><tr><td>11-12</td><td>Cast Levitate on yourself</td></tr><tr><td>13-14</td><td>Unicorn appears within 5 feet for 1 minute</td></tr><tr><td>15-16</td><td>You grow a long beard made of feathers</td></tr><tr><td>17-18</td><td>You regain your lowest-level expended spell slot</td></tr><tr><td>19-20</td><td>All creatures within 30 feet invisible for 1 minute</td></tr></tbody></table><p>Roll on this table when the DM calls for a Wild Magic Surge (typically when you roll a 1 on d20 after casting a spell).</p>`
      },
      {
        id: "triggering-surge",
        title: "Triggering a Surge",
        content: `<p>After a Wild Magic Sorcerer casts a 1st-level or higher spell, the DM can have them roll a d20. On a 1, roll on the Wild Magic Surge table.</p><p>Some DMs increase surge frequency. The sorcerer can also trigger surges using Tides of Chaos.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting to roll for surges after spells",
      "Not having the table ready during sessions",
      "Ignoring surges that would be funny or dramatic"
    ],
    dmTips: [
      "Roll for surges more often to embrace the chaos",
      "Let surges create memorable story moments",
      "Have the full d100 table bookmarked or printed"
    ],
    faq: [
      {
        question: "When exactly do Wild Magic Surges trigger?",
        answer: "After a Wild Magic Sorcerer casts a 1st-level spell or higher, the DM can have them roll a d20. On a 1, roll on the Wild Magic Surge table. Using Tides of Chaos guarantees a surge on your next spell (DM's choice when). The exact trigger frequency is up to your DM."
      },
      {
        question: "Can Wild Magic Surge kill my character?",
        answer: "Potentially! Roll 05-06 casts Fireball centered on yourself (8d6 fire damage in 20-foot radius). At low levels, this can down or kill your character and nearby allies. Most effects are harmless or beneficial, but the danger is part of the subclass's appeal."
      },
      {
        question: "Does the Sorcerer control Wild Magic Surge effects?",
        answer: "No, effects happen automatically with no saves for the sorcerer (unless the effect specifically calls for one). You can't choose targets for beneficial effects either - they apply as written. You're at the mercy of chaos, which is the whole point."
      },
      {
        question: "How does Tides of Chaos interact with Wild Magic Surge?",
        answer: "Tides of Chaos gives you advantage on one roll, then the DM can trigger a Wild Magic Surge on any spell you cast before you finish a long rest. When the surge happens, you regain Tides of Chaos. This creates more frequent surges and more advantage uses."
      },
      {
        question: "Can I use expanded Wild Magic tables?",
        answer: "Many DMs use expanded d100 or d1000 tables from homebrew sources for more variety. The official table has 50 effects (each covering 2 numbers). Check with your DM - expanded tables add variety but may include effects that don't fit every campaign's tone."
      }
    ]
  },
  {
    slug: "dnd-beyond",
    name: "D&D Beyond",
    category: "tools-resources",
    description: "Guide to D&D Beyond, the official digital toolset for D&D 5e character creation, rules reference, and campaign management.",
    searchVolume: 770,
    sections: [
      {
        id: "what-is-dndbeyond",
        title: "What is D&D Beyond?",
        content: `<p>D&D Beyond is the official digital platform for D&D 5e. It includes a character builder, digital rulebooks, encounter builder, and mobile app.</p><p>Free features include basic character creation (SRD content only). Purchasing sourcebooks unlocks full content for character options, spells, and monsters.</p>`
      },
      {
        id: "key-features",
        title: "Key Features",
        content: `<p><strong>Character Builder:</strong> Step-by-step creation with automated calculations</p><p><strong>Digital Dice:</strong> Built-in dice roller with character sheet integration</p><p><strong>Content Sharing:</strong> Campaigns allow DMs to share purchased content with players</p>`
      }
    ],
    commonMistakes: [
      "Not joining the DM's campaign to access shared content",
      "Buying books individually instead of using content sharing",
      "Forgetting to sync characters between devices"
    ],
    dmTips: [
      "Use campaigns to share your purchased content with players",
      "Encourage players to use D&D Beyond for easy character management",
      "Utilize the encounter builder for combat tracking"
    ],
    faq: [
      {
        question: "Is D&D Beyond free to use?",
        answer: "Basic features are free: character creation with SRD content (limited races, classes, spells), basic digital tools, and homebrew creation. Full content requires purchasing digital sourcebooks. There's also an optional subscription for extras like unlimited characters and encounter tools."
      },
      {
        question: "How does content sharing work on D&D Beyond?",
        answer: "A DM with a Master Tier subscription can share ALL their purchased content with players in their campaign (up to 12 players). Players join the campaign and gain access to all the DM's books for character creation. This means only one person needs to buy each book."
      },
      {
        question: "Can I use D&D Beyond content in physical games?",
        answer: "Yes! D&D Beyond is a reference tool - you can look up rules, spells, and your character sheet during in-person games. Many groups use tablets or phones for character sheets while playing at a physical table. There's also a mobile app for convenience."
      },
      {
        question: "Do D&D Beyond purchases transfer to physical books?",
        answer: "No, digital purchases on D&D Beyond are separate from physical books. However, some bundles include both. The digital and physical products are distinct - buying the Player's Handbook on D&D Beyond doesn't give you the physical book or vice versa."
      },
      {
        question: "Can I import homebrew content into D&D Beyond?",
        answer: "Yes! D&D Beyond has robust homebrew tools for creating custom races, classes, subclasses, spells, items, and monsters. You can also browse and use homebrew created by other users. Homebrew doesn't require any subscription or purchase."
      }
    ]
  },
  {
    slug: "dnd-table",
    name: "D&D Table (Running a Table)",
    category: "tools-resources",
    description: "Guide to running a D&D table, including session zero, table rules, and creating a positive play environment.",
    searchVolume: 6300,
    sections: [
      {
        id: "session-zero",
        title: "Session Zero",
        content: `<p>Session Zero establishes table expectations before the campaign begins. Discuss themes, tone, content boundaries (using tools like Lines & Veils or X-Card), and player goals.</p><p>Cover logistics: schedule, session length, house rules, and character creation guidelines. Ensure everyone agrees on the type of campaign you're running.</p>`
      },
      {
        id: "table-rules",
        title: "Table Rules and Etiquette",
        content: `<p>Establish clear rules: respect speaking time, no phones during play, arrive on time, communicate absences. Define how rules disputes are handled (DM makes final call, discuss after session).</p><p>Create a safe, inclusive environment. Use safety tools like the X-Card for uncomfortable content. Encourage collaboration and celebrate player creativity.</p>`
      }
    ],
    commonMistakes: [
      "Skipping session zero and discovering player mismatches later",
      "Not establishing content boundaries upfront",
      "Letting one player dominate table time"
    ],
    dmTips: [
      "Hold a session zero for every campaign",
      "Revisit table expectations periodically",
      "Address problems privately and quickly"
    ],
    faq: [
      {
        question: "What should be covered in a Session Zero?",
        answer: "Key topics: campaign tone and themes, content boundaries (violence, romance, horror), character creation guidelines, table rules (phones, attendance), scheduling logistics, and player/character expectations. Use safety tools like Lines & Veils to establish what content is off-limits."
      },
      {
        question: "How many players is ideal for a D&D table?",
        answer: "4-5 players plus a DM is generally ideal. This provides enough variety for party composition while keeping combat manageable. 3 players can work but may struggle with some encounters. 6+ players slows combat significantly and reduces individual spotlight time."
      },
      {
        question: "What are X-Cards and Lines & Veils?",
        answer: "Safety tools for comfortable play. X-Card: anyone can tap a card to skip uncomfortable content, no explanation needed. Lines & Veils: 'lines' are hard limits that won't appear in the game; 'veils' can exist but happen off-screen. Discuss these in Session Zero."
      },
      {
        question: "How long should a typical D&D session be?",
        answer: "Most groups play 3-4 hour sessions. Shorter (2 hours) works for weeknight games but limits what you can accomplish. Longer sessions (5-6+ hours) can cause fatigue. Find what works for your group's schedules and attention spans. Build in short breaks."
      },
      {
        question: "How do you handle player absences?",
        answer: "Common approaches: the character fades into the background (simplest), another player runs them in combat only, or narrative reasons (character is scouting/guarding camp). Establish absence policies in Session Zero. Many groups require minimum attendance (e.g., 3 of 5 players) to run."
      }
    ]
  },
  {
    slug: "mcdm",
    name: "MCDM Productions",
    category: "tools-resources",
    description: "Guide to MCDM Productions, Matt Colville's company creating D&D supplements, videos, and the upcoming RPG.",
    searchVolume: 5820,
    sections: [
      {
        id: "mcdm-overview",
        title: "MCDM Overview",
        content: `<p>MCDM Productions, founded by Matt Colville, creates D&D 5e supplements and educational content. Best known for "Running the Game" YouTube series with DM advice.</p><p>Products include Strongholds & Followers, Kingdoms & Warfare (domain-level play), and Flee, Mortals! (monster book). Currently developing a new RPG system.</p>`
      },
      {
        id: "key-products",
        title: "Key Products",
        content: `<p><strong>Strongholds & Followers:</strong> Rules for player strongholds and followers</p><p><strong>Kingdoms & Warfare:</strong> Domain management and mass combat</p><p><strong>Flee, Mortals!:</strong> Monster book with action-oriented design</p>`
      }
    ],
    commonMistakes: [
      "Assuming MCDM products are official WotC content",
      "Not reading integration notes for 5e balance",
      "Missing the free content on YouTube"
    ],
    dmTips: [
      "Start with Running the Game videos for DM fundamentals",
      "Use action-oriented monsters for more dynamic combat",
      "Consider strongholds for high-level campaigns"
    ],
    faq: [
      {
        question: "What is MCDM's 'Running the Game' series?",
        answer: "A free YouTube series by Matt Colville covering DM fundamentals and advanced techniques. Topics include session prep, world building, handling problem players, creating villains, and running combat. It's widely considered one of the best resources for new and experienced DMs alike."
      },
      {
        question: "Are MCDM products compatible with D&D 5e?",
        answer: "Yes, Strongholds & Followers, Kingdoms & Warfare, and Flee, Mortals! are designed for D&D 5e. They add systems (strongholds, domain play, improved monsters) that integrate with standard 5e rules. MCDM is also developing their own RPG system as a separate product."
      },
      {
        question: "What are 'action-oriented' monsters?",
        answer: "A design philosophy from MCDM where boss monsters have special 'villain actions' that trigger at specific points in the initiative order, not just on their turn. This creates more dynamic boss fights with environmental changes, minion summons, or escalating abilities throughout the battle."
      },
      {
        question: "What's in Flee, Mortals!?",
        answer: "MCDM's monster book featuring redesigned monsters with action-oriented design, minion rules (weaker enemies that die in one hit), and companion rules. Monsters are designed to be more tactically interesting than standard Monster Manual entries, with unique abilities and dynamic encounters."
      },
      {
        question: "Is MCDM content official D&D material?",
        answer: "No, MCDM is a third-party publisher, not affiliated with Wizards of the Coast. Their products are high-quality supplements but aren't 'official' D&D content. Always check with your DM before using MCDM options in a game, as not all tables allow third-party content."
      }
    ]
  },
  {
    slug: "sage-advice",
    name: "Sage Advice",
    category: "tools-resources",
    description: "Guide to Sage Advice, the official D&D rules clarification compendium from Wizards of the Coast.",
    searchVolume: 5710,
    sections: [
      {
        id: "what-is-sage-advice",
        title: "What is Sage Advice?",
        content: `<p>Sage Advice is the official rules clarification resource from Wizards of the Coast. It includes the Sage Advice Compendium (PDF with official rulings) and Jeremy Crawford's tweets (unofficial but insightful).</p><p>The Compendium is updated periodically with errata and clarifications on commonly confused rules.</p>`
      },
      {
        id: "using-sage-advice",
        title: "Using Sage Advice",
        content: `<p>Download the latest Sage Advice Compendium from the Wizards website. Search for specific rules questions using Ctrl+F.</p><p>Remember: Sage Advice provides official interpretations, but your table can always rule differently. DM has final say.</p>`
      }
    ],
    commonMistakes: [
      "Treating old Crawford tweets as official errata",
      "Not checking the Compendium for commonly confused rules",
      "Using outdated versions of the Compendium"
    ],
    dmTips: [
      "Keep the latest Compendium downloaded for quick reference",
      "Cite Sage Advice when making rulings, then move on",
      "Don't let rules debates derail sessions"
    ],
    faq: [
      {
        question: "Are Jeremy Crawford's tweets official rulings?",
        answer: "No, not anymore. Crawford's tweets were once considered official, but Wizards of the Coast changed this policy. Only the Sage Advice Compendium PDF contains official rulings. Crawford's tweets are now considered unofficial (but often insightful) interpretations."
      },
      {
        question: "Where do I find the Sage Advice Compendium?",
        answer: "Download the latest version free from the official D&D website (dnd.wizards.com) under 'Resources.' It's a PDF that's updated periodically with new clarifications and errata. Bookmark it for quick reference during games."
      },
      {
        question: "Does my table have to follow Sage Advice rulings?",
        answer: "No! The DM always has final say at their table. Sage Advice provides official interpretations, but your table can rule differently if it fits your game better. Use Sage Advice as a reference, not a mandate. 'Rule of Cool' and fun trump strict RAW."
      },
      {
        question: "What's the difference between Sage Advice and errata?",
        answer: "Errata are official corrections to printed books - actual text changes. Sage Advice Compendium contains clarifications on how existing rules work without changing the text. Both are in the Compendium PDF. Errata fix mistakes; Sage Advice explains intent."
      },
      {
        question: "How often is Sage Advice updated?",
        answer: "Updates are irregular - sometimes months apart, sometimes after major releases. Check the version number and date on the PDF. Major book releases often come with new Sage Advice entries addressing common questions about new content."
      }
    ]
  },
  {
    slug: "dnd",
    name: "D&D (What is Dungeons & Dragons)",
    category: "general",
    description: "Introduction to Dungeons & Dragons, the world's most popular tabletop roleplaying game.",
    searchVolume: 12800,
    sections: [
      {
        id: "what-is-dnd",
        title: "What is D&D?",
        content: `<p>Dungeons & Dragons is a tabletop roleplaying game where players create characters and tell collaborative stories guided by a Dungeon Master (DM). Players describe their actions, roll dice to determine outcomes, and shape the narrative together.</p><p>The game uses rules to resolve actions, primarily the d20 system: roll a 20-sided die, add modifiers, and compare to a target number.</p>`
      },
      {
        id: "how-to-start",
        title: "How to Start Playing",
        content: `<p>Beginners should start with the Starter Set or Essentials Kit, which include simplified rules and ready-to-play adventures. Gather 3-5 players, designate a DM, and set aside 2-4 hours for a session.</p><p>Core books: Player's Handbook (character options), Dungeon Master's Guide (running games), Monster Manual (creatures). Only the DM needs all three; players just need the PHB.</p>`
      }
    ],
    commonMistakes: [
      "Trying to learn all rules before playing (just start!)",
      "Buying every book before knowing if you'll enjoy the game",
      "Thinking D&D requires perfect rule knowledge"
    ],
    dmTips: [
      "Start with a pre-written adventure for your first session",
      "Focus on fun over perfect rules adherence",
      "Explain that D&D is collaborative storytelling with dice"
    ],
    faq: [
      {
        question: "What do I need to play D&D for the first time?",
        answer: "Minimum: one set of polyhedral dice (or a dice app), paper for character sheets, and the Basic Rules (free PDF from Wizards). Ideally: the Starter Set or Essentials Kit which include dice, pre-made characters, rules, and an adventure. You need 3-6 total people including a DM."
      },
      {
        question: "Can I play D&D online?",
        answer: "Yes! Virtual tabletops like Roll20, Foundry VTT, and D&D Beyond's tools support online play. Use Discord or video chat for voice. Many groups play entirely online. You can find online groups through r/lfg, Roll20's game finder, or D&D Discord servers."
      },
      {
        question: "Do I need to buy all the books to play?",
        answer: "No! The Basic Rules are free and cover core gameplay. For a full group: only the DM really needs the Dungeon Master's Guide and Monster Manual. Players can share one Player's Handbook. Start with the Starter Set if you're unsure - it's a complete package."
      },
      {
        question: "Is D&D hard to learn?",
        answer: "The basics are simple: describe what you want to do, roll a d20, add a modifier. The DM handles most complexity. You'll learn rules as you play. Don't try to memorize everything first - that's what the books are for during play. Focus on your character's abilities."
      },
      {
        question: "What's the difference between a player and a DM?",
        answer: "Players each control one character, making decisions and rolling dice for that character. The Dungeon Master (DM) controls the world, NPCs, monsters, and story. The DM describes situations and adjudicates rules. It's a different experience - try both to see what you prefer!"
      }
    ]
  },
  {
    slug: "dungeons-and-dragons",
    name: "Dungeons & Dragons (Comprehensive Guide)",
    category: "general",
    description: "Comprehensive introduction to Dungeons & Dragons 5th Edition, covering gameplay, character creation, and core concepts.",
    searchVolume: 75150,
    sections: [
      {
        id: "dnd-overview",
        title: "D&D Overview",
        content: `<p>Dungeons & Dragons 5th Edition (2014) is a tabletop RPG where imagination and dice rolls determine the story. Players create fantasy characters—warriors, wizards, rogues—and embark on adventures in a shared world.</p><p>The Dungeon Master (DM) describes the world and plays NPCs and monsters. Players describe their character's actions, roll dice to determine success, and collaborate to overcome challenges through combat, exploration, and social interaction.</p>`
      },
      {
        id: "core-gameplay",
        title: "Core Gameplay Loop",
        content: `<p><strong>1. DM describes situation:</strong> "You enter a dark dungeon. You hear water dripping."</p><p><strong>2. Players declare actions:</strong> "I search for traps." "I ready my bow."</p><p><strong>3. DM determines outcome:</strong> "Roll a Perception check." Success/failure shapes what happens next.</p><p>Combat uses initiative order, turns, and tactical positioning on a grid or theater of mind.</p>`
      },
      {
        id: "getting-started",
        title: "Getting Started",
        content: `<p>New players: Try the Starter Set or Essentials Kit. They include dice, pre-made characters, and a beginner adventure. Alternatively, play online using Roll20 or Foundry VTT.</p><p>Find a group through local game stores, online communities (r/lfg), or start your own with friends. Sessions typically run 3-4 hours.</p>`
      }
    ],
    commonMistakes: [
      "Analysis paralysis from too many character options",
      "Thinking there's a 'right way' to play D&D",
      "Not communicating with your table about expectations"
    ],
    dmTips: [
      "Use pre-made adventures for your first campaign",
      "Say 'yes, and' or 'yes, but' to player ideas when possible",
      "Prep situations and NPCs, not exact outcomes"
    ],
    faq: [
      {
        question: "What edition is D&D currently on?",
        answer: "D&D 5th Edition (5e) released in 2014 is the current edition and what most people play. The 2024 revision (sometimes called 5.5e or One D&D) updates the core books while maintaining backward compatibility. Previous editions (4e, 3.5e, AD&D) are no longer officially supported but still played."
      },
      {
        question: "How long does a D&D campaign last?",
        answer: "Varies enormously. A short campaign might be 10-20 sessions. A full 1-20 level campaign could take 2-3 years of weekly play. Many groups run shorter arcs or modules (5-15 sessions). Session frequency and length affect total time. Discuss campaign length expectations in Session Zero."
      },
      {
        question: "Can I play D&D solo without a group?",
        answer: "There are solo play options: choose-your-own-adventure style modules, AI DM tools, journaling games inspired by D&D, and solo RPG systems. It's a different experience from group play, but possible. Some people use it to learn rules before joining a group."
      },
      {
        question: "What's the 'three pillars' of D&D gameplay?",
        answer: "Combat (fighting monsters), Exploration (discovering places and secrets), and Social Interaction (talking to NPCs, roleplay). Different campaigns emphasize different pillars. Combat-heavy dungeon crawls differ from political intrigue campaigns. Find what your table enjoys most."
      },
      {
        question: "Is there a 'wrong way' to play D&D?",
        answer: "As long as everyone at the table is having fun and comfortable, you're playing correctly. Some tables love tactical combat, others prefer pure roleplay, some play comedically, others seriously. House rules are fine. The 'right way' is whatever works for your group."
      }
    ]
  },
  {
    slug: "5e-languages",
    name: "5e Languages",
    category: "game-terms",
    description: "Complete list of languages in D&D 5e, including standard, exotic, and secret languages.",
    searchVolume: 10260,
    aliases: ["dnd-languages"],
    sections: [
      {
        id: "standard-languages",
        title: "Standard Languages",
        content: `<table class="stat-table"><thead><tr><th>Language</th><th>Typical Speakers</th><th>Script</th></tr></thead><tbody><tr><td>Common</td><td>Humans</td><td>Common</td></tr><tr><td>Dwarvish</td><td>Dwarves</td><td>Dwarvish</td></tr><tr><td>Elvish</td><td>Elves</td><td>Elvish</td></tr><tr><td>Giant</td><td>Ogres, Giants</td><td>Dwarvish</td></tr><tr><td>Gnomish</td><td>Gnomes</td><td>Dwarvish</td></tr><tr><td>Goblin</td><td>Goblinoids</td><td>Dwarvish</td></tr><tr><td>Halfling</td><td>Halflings</td><td>Common</td></tr><tr><td>Orc</td><td>Orcs</td><td>Dwarvish</td></tr></tbody></table>`
      },
      {
        id: "exotic-languages",
        title: "Exotic Languages",
        content: `<table class="stat-table"><thead><tr><th>Language</th><th>Typical Speakers</th></tr></thead><tbody><tr><td>Abyssal</td><td>Demons</td></tr><tr><td>Celestial</td><td>Celestials</td></tr><tr><td>Draconic</td><td>Dragons, Dragonborn</td></tr><tr><td>Deep Speech</td><td>Mind Flayers, Beholders</td></tr><tr><td>Infernal</td><td>Devils</td></tr><tr><td>Primordial</td><td>Elementals (includes Aquan, Auran, Ignan, Terran)</td></tr><tr><td>Sylvan</td><td>Fey creatures</td></tr><tr><td>Undercommon</td><td>Underdark traders</td></tr></tbody></table><p>Thieves' Cant is a secret language used by rogues for hidden messages.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting to choose background and racial languages",
      "Not considering language barriers during roleplay",
      "Overlooking Comprehend Languages spell for language puzzles"
    ],
    dmTips: [
      "Use language barriers as story hooks and puzzles",
      "Let players with rare languages shine in specific encounters",
      "Consider allowing Intelligence-based characters to learn extra languages"
    ],
    faq: [
      {
        question: "How many languages does my character start with?",
        answer: "All characters know Common plus languages from their race (varies by race). Your background may grant additional languages. Some classes and feats provide more. Check your race entry for specific languages - Elves know Elvish, Dwarves know Dwarvish, etc."
      },
      {
        question: "What's the difference between standard and exotic languages?",
        answer: "Standard languages (Common, Dwarvish, Elvish, etc.) are spoken by common races and easy to learn. Exotic languages (Abyssal, Celestial, Draconic, etc.) are spoken by rare creatures and typically require special circumstances to learn - DM approval may be needed."
      },
      {
        question: "Can I learn new languages during a campaign?",
        answer: "Yes! Downtime training rules let you learn a language by spending 250 days and 250 gp with a teacher. Some DMs reduce this. The Linguist feat grants 3 languages instantly. Backgrounds with the 'Researcher' feature sometimes help find teachers faster."
      },
      {
        question: "What is Thieves' Cant?",
        answer: "A secret language all Rogues know, used to hide messages in normal conversation and leave coded symbols. It's not a full language - you still need a shared language to use it. Thieves' Cant lets rogues identify each other and communicate covertly in plain sight."
      },
      {
        question: "How does Comprehend Languages work?",
        answer: "This 1st-level spell lets you understand any spoken or written language for 1 hour, but you can't speak or write it. It doesn't decode ciphers or reveal hidden messages. It's ritual-castable, so you don't need to expend a slot if you have 10 minutes."
      }
    ]
  },
  {
    slug: "5e-tools",
    name: "5e Tools (Tool Proficiencies)",
    category: "game-terms",
    description: "Complete guide to tool proficiencies in D&D 5e, including artisan's tools, gaming sets, and musical instruments.",
    searchVolume: 30160,
    sections: [
      {
        id: "tool-categories",
        title: "Tool Proficiency Categories",
        content: `<table class="stat-table"><thead><tr><th>Category</th><th>Examples</th></tr></thead><tbody><tr><td>Artisan's Tools</td><td>Smith's tools, Carpenter's tools, Alchemist's supplies</td></tr><tr><td>Gaming Sets</td><td>Playing card set, Dice set, Dragonchess set</td></tr><tr><td>Musical Instruments</td><td>Lute, Flute, Horn, Drum</td></tr><tr><td>Other Tools</td><td>Thieves' tools, Navigator's tools, Herbalism kit, Poisoner's kit</td></tr></tbody></table><p>Tool proficiency adds proficiency bonus to ability checks made using that tool. The relevant ability score depends on the task (e.g., Dexterity for lockpicking with thieves' tools).</p>`
      },
      {
        id: "using-tools",
        title: "Using Tool Proficiencies",
        content: `<p>Tool proficiencies can unlock creative solutions: smith's tools to repair armor mid-adventure, alchemist's supplies to identify potions, or cook's utensils to prepare a feast for bonuses.</p><p>Xanathar's Guide expands tool uses with specific applications and example DCs for each tool type.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting to add proficiency bonus when using tools",
      "Not tracking which tools the character physically owns",
      "Overlooking tool proficiencies gained from backgrounds"
    ],
    dmTips: [
      "Create challenges that reward diverse tool proficiencies",
      "Allow tool checks to replace some skill checks (cook's utensils for Persuasion at a feast)",
      "Let players describe creative tool uses for advantage or bonuses"
    ],
    faq: [
      {
        question: "What ability score do tool checks use?",
        answer: "It depends on the task! Lock picking with thieves' tools uses Dexterity. Forging documents with forgery kit might use Intelligence or Dexterity. Cooking a persuasive meal could use Wisdom. The DM decides based on the specific action - tools aren't tied to one ability."
      },
      {
        question: "Do I need to own a tool to use my proficiency?",
        answer: "Generally yes - proficiency means you know how to use the tool, but you need the actual tool to make checks. Exceptions exist: you might borrow tools or improvise. Track which tools your character actually carries. Most tools cost 5-50 gp and have weight."
      },
      {
        question: "What are artisan's tools good for?",
        answer: "Crafting items (with downtime), repairing equipment, earning money during downtime, and creative problem-solving. Smith's tools can repair metal armor, carpenter's tools can build barricades, brewer's supplies can identify (or create) poisons. Xanathar's Guide expands uses significantly."
      },
      {
        question: "What makes thieves' tools special?",
        answer: "Thieves' tools are required to pick locks and disarm certain traps - you literally can't attempt these without them (unlike most tools where you can try at disadvantage). Rogues start proficient. They're the most mechanically impactful tool proficiency for adventurers."
      },
      {
        question: "Can tool proficiencies stack with skill proficiencies?",
        answer: "Xanathar's Guide suggests that if both a tool and skill apply to a check, you might get advantage instead of adding both proficiency bonuses. For example, Investigation + Cartographer's tools when studying a map. Check with your DM - this is optional guidance, not a core rule."
      }
    ]
  },
  {
    slug: "backgrounds-5e",
    name: "Backgrounds 5e",
    category: "game-terms",
    description: "Guide to character backgrounds in D&D 5e, providing skill proficiencies, tools, and roleplay hooks.",
    searchVolume: 17360,
    sections: [
      {
        id: "background-mechanics",
        title: "What Backgrounds Provide",
        content: `<p>Backgrounds grant 2 skill proficiencies, tool or language proficiencies, starting equipment, and a special feature. They represent your character's life before adventuring.</p><p>The feature provides a roleplay benefit (like the Acolyte's Shelter of the Faithful) that can create story opportunities.</p>`
      },
      {
        id: "common-backgrounds",
        title: "Common Backgrounds",
        content: `<table class="stat-table"><thead><tr><th>Background</th><th>Skills</th><th>Feature</th></tr></thead><tbody><tr><td>Acolyte</td><td>Insight, Religion</td><td>Shelter of the Faithful</td></tr><tr><td>Criminal</td><td>Deception, Stealth</td><td>Criminal Contact</td></tr><tr><td>Folk Hero</td><td>Animal Handling, Survival</td><td>Rustic Hospitality</td></tr><tr><td>Noble</td><td>History, Persuasion</td><td>Position of Privilege</td></tr><tr><td>Sage</td><td>Arcana, History</td><td>Researcher</td></tr><tr><td>Soldier</td><td>Athletics, Intimidation</td><td>Military Rank</td></tr></tbody></table><p>Players can customize backgrounds by swapping skill proficiencies with DM approval.</p>`
      }
    ],
    commonMistakes: [
      "Choosing background only for mechanics, ignoring roleplay",
      "Not using background features during adventures",
      "Forgetting background equipment and starting gold"
    ],
    dmTips: [
      "Integrate background features into your story hooks",
      "Allow custom backgrounds that fit player concepts",
      "Use background bonds, ideals, flaws as story threads"
    ],
    faq: [
      {
        question: "Can I customize my background?",
        answer: "Yes! The PHB explicitly allows custom backgrounds. Choose any 2 skills, a total of 2 tool proficiencies and/or languages, and work with your DM on a feature. Write your own personality traits, ideals, bonds, and flaws. Custom backgrounds should match your character concept."
      },
      {
        question: "What are background features and how do I use them?",
        answer: "Background features are roleplay benefits, not combat abilities. Criminal Contact lets you message the underworld. Shelter of the Faithful means temples help you. Position of Privilege gives you social access. They create story opportunities - remind your DM to let you use them!"
      },
      {
        question: "Do background proficiencies stack with class proficiencies?",
        answer: "If your background gives a skill you already have from your class, you can choose a different skill from your class list instead. You don't get double proficiency - pick another skill. The same applies to tool and language proficiencies that overlap."
      },
      {
        question: "How important are bonds, ideals, and flaws?",
        answer: "They're roleplay guides, not mechanical requirements. Good players use them for character motivation and decision-making. Some DMs award Inspiration for playing to these traits. Write ones you'll actually enjoy roleplaying - don't pick flaws you'll ignore."
      },
      {
        question: "Which background is 'best'?",
        answer: "There's no best - it depends on your character and campaign. Criminals and Urchins get thieves' tools (useful). Acolytes and Sages provide information-gathering features. Soldiers have military connections. Choose based on your character's story and the proficiencies that fill gaps in your build."
      }
    ]
  }
];
