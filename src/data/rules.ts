export type RulePage = {
  slug: string;
  name: string;
  category: "core-mechanics" | "tools-resources" | "game-terms" | "general";
  description: string;
  sections: { id: string; title: string; content: string }[];
  commonMistakes: string[];
  dmTips: string[];
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
    ]
  },
  {
    slug: "exhaustion-5e",
    name: "Exhaustion 5e",
    category: "core-mechanics",
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
    ]
  }
];
