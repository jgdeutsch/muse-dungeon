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
        content: `<p>Your alignment should reflect your character's personality and values, not restrict their actions. Characters can act against their alignment occasionally without changing it.</p><p>Some class features (like <a href=\"/characters/classes/paladin-5e/\">paladins</a>) may have alignment requirements. Discuss with your DM how strictly alignment is enforced in your campaign.</p>`
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
        question: "Can a <a href=\"/characters/classes/paladin-5e/\">Paladin</a> be any alignment in 5e?",
        answer: "Yes! Unlike older editions, 5e <a href=\"/characters/classes/paladin-5e/\">Paladins</a> can be any alignment based on their oath. An Oath of Devotion Paladin is typically Lawful Good, but an Oathbreaker is often Evil, and other oaths fit various alignments. The oath defines the paladin more than alignment."
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
        answer: "It depends on your class: Strength for melee <a href=\"/characters/classes/fighter-5e/\">fighters</a>, Dexterity for <a href=\"/characters/classes/rogue-5e/\">rogues</a> and ranged fighters, Constitution for everyone (HP), Intelligence for <a href=\"/characters/classes/wizard-5e/\">wizards</a>, Wisdom for <a href=\"/characters/classes/cleric-5e/\">clerics</a>/<a href=\"/characters/classes/druid-5e/\">druids</a>, and Charisma for <a href=\"/characters/classes/bard-5e/\">bards</a>/<a href=\"/characters/classes/sorcerer-5e/\">sorcerers</a>/<a href=\"/characters/classes/warlock-5e/\">warlocks</a>/<a href=\"/characters/classes/paladin-5e/\">paladins</a>. Check your class's spellcasting ability if you cast spells."
      },
      {
        question: "Can ability scores go above 20?",
        answer: "Normally no - 20 is the cap for player characters through standard advancement. However, some magic items (like the <a href=\"/items/belt-of-giant-strength-5e/\">Belt of Giant Strength</a> or Tome of Clear Thought) and high-level class features (like the <a href=\"/characters/classes/barbarian-5e/\">Barbarian's</a> Primal Champion) can push scores above 20, sometimes to 22, 24, or even 30."
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
    description: "Complete guide to the <a href=\"/rules/core-mechanics/exhaustion-5e/\">exhaustion</a> condition in D&D 5e, with all six levels and their effects.",
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
        content: `<p>Common sources: going without food/water, extreme temperatures, forced marches, certain spells and abilities (like Frenzy <a href=\"/characters/classes/barbarian-5e/\">barbarian</a> rage).</p><p><a href=\"/spells/support-healing/greater-restoration-5e/\">Greater Restoration</a> removes one level of exhaustion instantly.</p>`
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
        answer: "A long rest removes ONE level of exhaustion (provided you have food and water). The spell <a href=\"/spells/support-healing/greater-restoration-5e/\">Greater Restoration</a> also removes one level instantly. There's no quick way to remove multiple levels - recovering from severe exhaustion takes days of rest, making it a serious condition."
      },
      {
        question: "Do exhaustion effects stack?",
        answer: "Yes, effects are cumulative. At exhaustion level 3, you have disadvantage on ability checks (level 1), half speed (level 2), AND disadvantage on attack rolls and saving throws (level 3). This makes high exhaustion levels devastating."
      },
      {
        question: "What causes exhaustion besides lack of food and water?",
        answer: "Many sources: Berserker <a href=\"/characters/classes/barbarian-5e/\">Barbarian's</a> Frenzy (1 level after rage), forced marches (Con save or 1 level per hour beyond 8), extreme heat/cold, certain spells like <a href=\"/spells/offensive/sickening-radiance-5e/\">Sickening Radiance</a>, some monster abilities, and resurrection spells like <a href=\"/spells/support-healing/raise-dead-5e/\">Raise Dead</a> cause exhaustion."
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
        content: `<p>A creature takes <strong>1d6 bludgeoning damage for every 10 feet fallen</strong>, up to a maximum of 20d6 (200 feet or higher).</p><p>The creature lands <a href=\"/rules/conditions/prone-condition-5e/\">prone</a> unless it avoids taking damage. No save to reduce damage normally, but features like <a href=\"/characters/classes/monk-5e/\">Monk's</a> Slow Fall can reduce it.</p>`
      },
      {
        id: "falling-speed",
        title: "Falling Speed and Reactions",
        content: `<p>A creature falls 500 feet per round instantly. The fall happens at the start of the next turn if knocked <a href=\"/rules/conditions/prone-condition-5e/\">prone</a> mid-turn.</p><p>Reactions like <a href=\"/spells/utility-control/feather-fall-5e/\">Feather Fall</a> can be used while falling. Spells with falling components resolve before landing.</p>`
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
        answer: "No, by RAW there's no saving throw to reduce fall damage. You take 1d6 per 10 feet fallen automatically. However, features like <a href=\"/characters/classes/monk-5e/\">Monk's</a> Slow Fall, the <a href=\"/spells/utility-control/feather-fall-5e/\">Feather Fall</a> spell, or flying can reduce or prevent the damage entirely."
      },
      {
        question: "What's the maximum fall damage in 5e?",
        answer: "20d6 bludgeoning damage (averaging 70 damage) is the maximum, reached at 200 feet. Falls beyond 200 feet don't increase damage. This cap prevents terminal velocity from being instantly lethal to high-level characters."
      },
      {
        question: "Does fall damage apply if I jump down voluntarily?",
        answer: "Yes, fall damage applies to any fall over 10 feet, voluntary or not. However, you can reduce this by jumping (Athletics check) which can extend your safe landing distance. A high-level <a href=\"/characters/classes/monk-5e/\">Monk</a> with Slow Fall can safely drop significant distances."
      },
      {
        question: "Can I use a reaction while falling?",
        answer: "Yes! Reactions like casting <a href=\"/spells/utility-control/feather-fall-5e/\">Feather Fall</a> can be used during a fall. Since falling 500 feet happens instantly (not over multiple turns), you need to react immediately. This makes Feather Fall valuable for any party exploring heights."
      },
      {
        question: "Do you land <a href=\"/rules/conditions/prone-condition-5e/\">prone</a> after taking fall damage?",
        answer: "Yes, a creature lands <a href=\"/rules/conditions/prone-condition-5e/\">prone</a> after taking any fall damage, unless it somehow avoids taking the damage entirely (like with <a href=\"/spells/utility-control/feather-fall-5e/\">Feather Fall</a> or Slow Fall reducing damage to 0). This means enemies can get advantage on melee attacks against you until you stand up."
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
        content: `<table class="stat-table"><thead><tr><th>Class</th><th>Requirement</th></tr></thead><tbody><tr><td><a href="/characters/classes/barbarian-5e/">Barbarian</a></td><td>Strength 13</td></tr><tr><td><a href="/characters/classes/bard-5e/">Bard</a></td><td>Charisma 13</td></tr><tr><td><a href="/characters/classes/cleric-5e/">Cleric</a></td><td>Wisdom 13</td></tr><tr><td><a href="/characters/classes/druid-5e/">Druid</a></td><td>Wisdom 13</td></tr><tr><td><a href="/characters/classes/fighter-5e/">Fighter</a></td><td>Strength or Dexterity 13</td></tr><tr><td><a href="/characters/classes/monk-5e/">Monk</a></td><td>Dexterity 13 and Wisdom 13</td></tr><tr><td><a href="/characters/classes/paladin-5e/">Paladin</a></td><td>Strength 13 and Charisma 13</td></tr><tr><td><a href="/characters/classes/ranger-5e/">Ranger</a></td><td>Dexterity 13 and Wisdom 13</td></tr><tr><td><a href="/characters/classes/rogue-5e/">Rogue</a></td><td>Dexterity 13</td></tr><tr><td><a href="/characters/classes/sorcerer-5e/">Sorcerer</a></td><td>Charisma 13</td></tr><tr><td><a href="/characters/classes/warlock-5e/">Warlock</a></td><td>Charisma 13</td></tr><tr><td><a href="/characters/classes/wizard-5e/">Wizard</a></td><td>Intelligence 13</td></tr></tbody></table>`
      },
      {
        id: "spell-slots",
        title: "Multiclass Spell Slots",
        content: `<p>Add full caster levels (<a href=\"/characters/classes/bard-5e/\">Bard</a>, <a href=\"/characters/classes/cleric-5e/\">Cleric</a>, <a href=\"/characters/classes/druid-5e/\">Druid</a>, <a href=\"/characters/classes/sorcerer-5e/\">Sorcerer</a>, <a href=\"/characters/classes/wizard-5e/\">Wizard</a>) at full value. Add half-caster levels (<a href=\"/characters/classes/paladin-5e/\">Paladin</a>, <a href=\"/characters/classes/ranger-5e/\">Ranger</a>) divided by 2. Add one-third casters (Arcane Trickster, Eldritch Knight) divided by 3. Round down.</p><p>Use the Multiclass Spellcaster table with your combined caster level. You still learn/prepare spells as each class separately.</p>`
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
        answer: "Yes! You must meet the ability score prerequisites for BOTH your current class and the new class you want to take. For example, a <a href=\"/characters/classes/fighter-5e/\">Fighter</a> (Str 13) wanting to multiclass into <a href=\"/characters/classes/wizard-5e/\">Wizard</a> needs both Str 13 (or Dex 13) AND Int 13."
      },
      {
        question: "What proficiencies do I get when multiclassing?",
        answer: "You get LIMITED proficiencies when multiclassing - not the full list from level 1. Each class grants specific multiclass proficiencies (listed in PHB Chapter 6). For example, multiclassing into <a href=\"/characters/classes/fighter-5e/\">Fighter</a> gives only light/medium armor, shields, and simple/martial weapons - not heavy armor."
      },
      {
        question: "How do spell slots work with multiclassing?",
        answer: "Add your full caster levels (<a href=\"/characters/classes/bard-5e/\">Bard</a>, <a href=\"/characters/classes/cleric-5e/\">Cleric</a>, <a href=\"/characters/classes/druid-5e/\">Druid</a>, <a href=\"/characters/classes/sorcerer-5e/\">Sorcerer</a>, <a href=\"/characters/classes/wizard-5e/\">Wizard</a>), half your half-caster levels (<a href=\"/characters/classes/paladin-5e/\">Paladin</a>, <a href=\"/characters/classes/ranger-5e/\">Ranger</a>, rounded down), and one-third your Eldritch Knight/Arcane Trickster levels (rounded down). Use that total with the Multiclass Spellcaster table. You can use any slot for any spell you know."
      },
      {
        question: "Can I cast higher-level spells with multiclass spell slots?",
        answer: "You can use higher-level slots to cast spells you know at higher levels (like upcasting <a href=\"/spells/support-healing/cure-wounds-5e/\">Cure Wounds</a>), but you can only LEARN/PREPARE spells based on each individual class's level. A <a href=\"/characters/classes/cleric-5e/\">Cleric</a> 5/<a href=\"/characters/classes/wizard-5e/\">Wizard</a> 5 has 5th-level slots but can only learn 3rd-level spells from each class."
      },
      {
        question: "Does multiclassing delay Extra Attack?",
        answer: "Yes, significantly. Extra Attack requires 5 levels in a single class (<a href=\"/characters/classes/fighter-5e/\">Fighter</a>, <a href=\"/characters/classes/barbarian-5e/\">Barbarian</a>, <a href=\"/characters/classes/monk-5e/\">Monk</a>, <a href=\"/characters/classes/paladin-5e/\">Paladin</a>, <a href=\"/characters/classes/ranger-5e/\">Ranger</a>). A Fighter 3/<a href=\"/characters/classes/rogue-5e/\">Rogue</a> 2 is level 5 but won't have Extra Attack until Fighter 5. This is a major reason multiclassing can weaken martial characters."
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
    description: "The Wild Magic Surge table for Wild Magic <a href=\"/characters/classes/sorcerer-5e/\">Sorcerers</a> in D&D 5e, with random magical effects from d100 rolls.",
    searchVolume: 11540,
    sections: [
      {
        id: "wild-magic-surge",
        title: "Wild Magic Surge (d100)",
        content: `<table class="stat-table"><thead><tr><th>d100</th><th>Effect</th></tr></thead><tbody><tr><td>01-02</td><td>Roll again; both effects occur</td></tr><tr><td>03-04</td><td>You teleport 60 feet to a random space</td></tr><tr><td>05-06</td><td><a href="/spells/offensive/fireball-5e/">Fireball</a> centered on you (3rd-level)</td></tr><tr><td>07-08</td><td>Cast <a href="/spells/offensive/magic-missile-5e/">Magic Missile</a> (5th-level)</td></tr><tr><td>09-10</td><td>You turn into a potted plant until start of next turn</td></tr><tr><td>11-12</td><td>Cast <a href="/spells/utility-control/levitate-5e/">Levitate</a> on yourself</td></tr><tr><td>13-14</td><td>Unicorn appears within 5 feet for 1 minute</td></tr><tr><td>15-16</td><td>You grow a long beard made of feathers</td></tr><tr><td>17-18</td><td>You regain your lowest-level expended spell slot</td></tr><tr><td>19-20</td><td>All creatures within 30 feet <a href="/rules/conditions/invisible-condition-5e/">invisible</a> for 1 minute</td></tr></tbody></table><p>Roll on this table when the DM calls for a Wild Magic Surge (typically when you roll a 1 on d20 after casting a spell).</p>`
      },
      {
        id: "triggering-surge",
        title: "Triggering a Surge",
        content: `<p>After a Wild Magic <a href=\"/characters/classes/sorcerer-5e/\">Sorcerer</a> casts a 1st-level or higher spell, the DM can have them roll a d20. On a 1, roll on the Wild Magic Surge table.</p><p>Some DMs increase surge frequency. The sorcerer can also trigger surges using Tides of Chaos.</p>`
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
        answer: "After a Wild Magic <a href=\"/characters/classes/sorcerer-5e/\">Sorcerer</a> casts a 1st-level spell or higher, the DM can have them roll a d20. On a 1, roll on the Wild Magic Surge table. Using Tides of Chaos guarantees a surge on your next spell (DM's choice when). The exact trigger frequency is up to your DM."
      },
      {
        question: "Can Wild Magic Surge kill my character?",
        answer: "Potentially! Roll 05-06 casts <a href=\"/spells/offensive/fireball-5e/\">Fireball</a> centered on yourself (8d6 fire damage in 20-foot radius). At low levels, this can down or kill your character and nearby allies. Most effects are harmless or beneficial, but the danger is part of the subclass's appeal."
      },
      {
        question: "Does the <a href=\"/characters/classes/sorcerer-5e/\">Sorcerer</a> control Wild Magic Surge effects?",
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
        content: `<table class="stat-table"><thead><tr><th>Language</th><th>Typical Speakers</th><th>Script</th></tr></thead><tbody><tr><td>Common</td><td><a href="/characters/races/human-5e/">Humans</a></td><td>Common</td></tr><tr><td>Dwarvish</td><td><a href="/characters/races/dwarf-5e/">Dwarves</a></td><td>Dwarvish</td></tr><tr><td>Elvish</td><td><a href="/characters/races/elf-5e/">Elves</a></td><td>Elvish</td></tr><tr><td>Giant</td><td>Ogres, Giants</td><td>Dwarvish</td></tr><tr><td>Gnomish</td><td><a href="/characters/races/gnome-5e/">Gnomes</a></td><td>Dwarvish</td></tr><tr><td>Goblin</td><td><a href="/monsters/creatures/goblin-5e/">Goblinoids</a></td><td>Dwarvish</td></tr><tr><td>Halfling</td><td><a href="/characters/races/halfling-5e/">Halflings</a></td><td>Common</td></tr><tr><td>Orc</td><td><a href="/monsters/creatures/orc-5e/">Orcs</a></td><td>Dwarvish</td></tr></tbody></table>`
      },
      {
        id: "exotic-languages",
        title: "Exotic Languages",
        content: `<table class="stat-table"><thead><tr><th>Language</th><th>Typical Speakers</th></tr></thead><tbody><tr><td>Abyssal</td><td>Demons</td></tr><tr><td>Celestial</td><td>Celestials</td></tr><tr><td>Draconic</td><td>Dragons, <a href="/characters/races/dragonborn-5e/">Dragonborn</a></td></tr><tr><td>Deep Speech</td><td><a href="/monsters/creatures/mind-flayer-5e/">Mind Flayers</a>, <a href="/monsters/creatures/beholder-5e/">Beholders</a></td></tr><tr><td>Infernal</td><td>Devils</td></tr><tr><td>Primordial</td><td>Elementals (includes Aquan, Auran, Ignan, Terran)</td></tr><tr><td>Sylvan</td><td>Fey creatures</td></tr><tr><td>Undercommon</td><td>Underdark traders</td></tr></tbody></table><p>Thieves' Cant is a secret language used by <a href="/characters/classes/rogue-5e/">rogues</a> for hidden messages.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting to choose background and racial languages",
      "Not considering language barriers during roleplay",
      "Overlooking the Comprehend Languages spell for language puzzles"
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
        answer: "A secret language all <a href=\"/characters/classes/rogue-5e/\">Rogues</a> know, used to hide messages in normal conversation and leave coded symbols. It's not a full language - you still need a shared language to use it. Thieves' Cant lets rogues identify each other and communicate covertly in plain sight."
      },
      {
        question: "How does <a href=\"/spells/utility-control/comprehend-languages-5e/\">Comprehend Languages</a> work?",
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
        answer: "Thieves' tools are required to pick locks and disarm certain traps - you literally can't attempt these without them (unlike most tools where you can try at disadvantage). <a href=\"/characters/classes/rogue-5e/\">Rogues</a> start proficient. They're the most mechanically impactful tool proficiency for adventurers."
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
  },

  // =============================================================================
  // SPELLCASTING MECHANICS
  // =============================================================================

  {
    slug: "spell-slots-5e",
    name: "Spell Slots",
    category: "core-mechanics",
    description: "Spell slots are the resource that limits how many spells you can cast. Understanding spell slot management is crucial for playing any spellcaster effectively.",
    searchVolume: 14500,
    sections: [
      {
        id: "overview",
        title: "What Are Spell Slots?",
        content: `<p>Spell slots represent your capacity to channel magical energy. When you cast a spell (except cantrips), you expend a spell slot of the spell's level or higher.</p>

<p><strong>Key Concepts:</strong></p>
<ul>
<li>Spell slots are separate from spells known/prepared</li>
<li>Slots are like "fuel" - spells are like "programs"</li>
<li>You can cast the same spell multiple times if you have slots</li>
<li>Slots come in levels (1st through 9th)</li>
</ul>

<p><strong>What Spell Slots Are NOT:</strong></p>
<ul>
<li>They're not how many spells you know</li>
<li>They're not how many spells you can prepare</li>
<li>They don't determine which spells you can learn</li>
<li>Cantrips don't use spell slots (they're free!)</li>
</ul>`
      },
      {
        id: "slots-by-level",
        title: "Spell Slots by Class Level",
        content: `<p>Full casters (<a href="/characters/classes/wizard-5e/">Wizard</a>, <a href="/characters/classes/cleric-5e/">Cleric</a>, <a href="/characters/classes/druid-5e/">Druid</a>, <a href="/characters/classes/bard-5e/">Bard</a>, <a href="/characters/classes/sorcerer-5e/">Sorcerer</a>) share a spell slot progression:</p>

<table class="ref-table">
<thead><tr><th>Level</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th></tr></thead>
<tbody>
<tr><td>1st</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>3rd</td><td>4</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>5th</td><td>4</td><td>3</td><td>2</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>9th</td><td>4</td><td>3</td><td>3</td><td>3</td><td>1</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
<tr><td>13th</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>—</td><td>—</td></tr>
<tr><td>17th</td><td>4</td><td>3</td><td>3</td><td>3</td><td>2</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>20th</td><td>4</td><td>3</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>1</td><td>1</td></tr>
</tbody>
</table>

<p><strong>Pattern to Remember:</strong></p>
<ul>
<li>You always have more low-level slots than high-level</li>
<li>New spell levels unlock at odd class levels (3, 5, 7, 9, etc.)</li>
<li>Maximum is 4 slots at 1st level</li>
</ul>`
      },
      {
        id: "upcasting",
        title: "Upcasting Spells",
        content: `<p>You can cast any spell using a higher-level slot than its base level. This is called "upcasting" or "casting at a higher level."</p>

<p><strong>Why Upcast?</strong></p>
<ul>
<li>Many spells gain extra effects at higher levels</li>
<li>Use low-level slots when you're out of high-level ones</li>
<li>Flexibility in resource management</li>
</ul>

<p><strong>Common Upcasting Examples:</strong></p>
<ul>
<li><a href="/spells/offensive/magic-missile-5e/">Magic Missile</a> (1st level): Base 3 darts, +1 dart per level</li>
<li><a href="/spells/offensive/fireball-5e/">Fireball</a> (3rd level): 8d6 base, +1d6 per level</li>
<li><a href="/spells/utility-control/hold-person-5e/">Hold Person</a> (2nd level): 1 target, +1 target per level</li>
</ul>

<p><strong>Not All Spells Upcast Well:</strong> Some spells like <a href="/spells/reaction-defense/shield-5e/">Shield</a> or <a href="/spells/utility-control/misty-step-5e/">Misty Step</a> don't improve with higher slots. Check the spell description for "At Higher Levels."</p>`
      },
      {
        id: "recovering-slots",
        title: "Recovering Spell Slots",
        content: `<p><strong><a href="/rules/core-mechanics/long-rest-5e/">Long Rest</a> Recovery:</strong></p>
<ul>
<li>Recover ALL expended spell slots</li>
<li>This is the primary recovery method</li>
<li>Takes 8 hours (at least 6 hours sleep)</li>
</ul>

<p><strong>Class-Specific Recovery:</strong></p>
<ul>
<li><a href="/characters/classes/wizard-5e/">Wizard</a> Arcane Recovery: Once per day after a <a href="/rules/core-mechanics/short-rest-5e/">short rest</a>, recover slots totaling half wizard level</li>
<li><a href="/characters/classes/sorcerer-5e/">Sorcerer</a> Font of Magic: Convert sorcery points to slots (and vice versa)</li>
<li><a href="/characters/classes/warlock-5e/">Warlock</a> Pact Magic: Recover all slots on short rest (but have fewer slots)</li>
<li><a href="/characters/classes/cleric-5e/">Cleric</a> (some domains) and <a href="/characters/classes/druid-5e/">Druid</a> (Land): Once per short rest recovery</li>
</ul>`
      },
      {
        id: "slot-management",
        title: "Spell Slot Management Tips",
        content: `<p><strong>The Adventuring Day:</strong></p>
<ul>
<li>Assume 2-3 short rests, 6-8 encounters</li>
<li>Don't blow all your slots in the first fight</li>
<li>Save your highest slots for emergencies</li>
</ul>

<p><strong>Resource Allocation:</strong></p>
<ul>
<li>Cantrips for weak enemies (free!)</li>
<li>1st-2nd level for regular combat</li>
<li>3rd-4th level for tough fights</li>
<li>5th+ level for boss encounters or emergencies</li>
</ul>

<p><strong>Communication:</strong></p>
<ul>
<li>Tell your party how many slots you have left</li>
<li>Coordinate with other casters</li>
<li>Let the party know when you need to rest</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Confusing spell slots with spells prepared/known",
      "Forgetting to track spell slot expenditure",
      "Blowing all high-level slots in the first encounter",
      "Not using short rest recovery features (Arcane Recovery, etc.)",
      "Hoarding slots and never casting powerful spells"
    ],
    dmTips: [
      "Track spellcaster spell slots to know when they're depleted",
      "Multiple encounters per day challenges spell slot resources",
      "Single-encounter days make spellcasters very powerful",
      "Short rest recovery features make some casters stronger in long days"
    ]
  },
  {
    slug: "spellbook-5e",
    name: "Spellbook",
    category: "core-mechanics",
    description: "The wizard's spellbook is their most valuable possession, containing the magical formulas they've learned. Understanding how spellbooks work is essential for playing or running a wizard.",
    searchVolume: 8200,
    sections: [
      {
        id: "overview",
        title: "What Is a Spellbook?",
        content: `<p>A spellbook is a leather-bound tome containing the magical formulas (not the power itself) needed to cast <a href="/characters/classes/wizard-5e/">wizard</a> spells. It represents years of research and study.</p>

<p><strong>Starting Spellbook Contents:</strong></p>
<ul>
<li>6 wizard spells of your choice (1st level)</li>
<li>These represent the fruits of your apprenticeship</li>
<li>Choose carefully - these define your early playstyle</li>
</ul>

<p><strong>The Spellbook Is Not Magical:</strong></p>
<ul>
<li>It's just a book with formulas written in it</li>
<li>The wizard provides the magical power</li>
<li>If lost or destroyed, you lose access to those spells (until copied from another source)</li>
<li>This is why smart wizards make backup copies!</li>
</ul>`
      },
      {
        id: "adding-spells",
        title: "Adding Spells to Your Spellbook",
        content: `<p><strong>Free Spells on Level Up:</strong></p>
<ul>
<li>Gain 2 wizard spells of your choice each level</li>
<li>Must be of a level you can cast</li>
<li>No gold cost - represents independent research</li>
<li>This is the primary way to expand your spellbook</li>
</ul>

<p><strong>Copying from Scrolls or Other Spellbooks:</strong></p>
<ul>
<li>Find a spell scroll or another wizard's spellbook</li>
<li>Spend 2 hours per spell level copying it</li>
<li>Spend 50 gp per spell level on inks and materials</li>
<li>Make no check - copying always succeeds if you meet the level requirement</li>
<li>The scroll is consumed in the process</li>
<li>Another wizard's book is not consumed</li>
</ul>

<table class="ref-table">
<thead><tr><th>Spell Level</th><th>Time</th><th>Cost</th></tr></thead>
<tbody>
<tr><td>1st</td><td>2 hours</td><td>50 gp</td></tr>
<tr><td>2nd</td><td>4 hours</td><td>100 gp</td></tr>
<tr><td>3rd</td><td>6 hours</td><td>150 gp</td></tr>
<tr><td>5th</td><td>10 hours</td><td>250 gp</td></tr>
<tr><td>9th</td><td>18 hours</td><td>450 gp</td></tr>
</tbody>
</table>`
      },
      {
        id: "preparing-spells",
        title: "Preparing Spells from Your Spellbook",
        content: `<p><strong>Daily Preparation:</strong></p>
<ul>
<li>After a <a href="/rules/core-mechanics/long-rest-5e/">long rest</a>, choose which spells to prepare</li>
<li>Number of prepared spells = Intelligence modifier + wizard level</li>
<li>Prepared spells must be in your spellbook</li>
<li>You can change your prepared list each day</li>
</ul>

<p><strong>Why This Matters:</strong></p>
<ul>
<li>Your spellbook might have 50 spells</li>
<li>But you can only prepare 15-20 at a time</li>
<li>Choose based on what you expect to face</li>
<li>Versatility is the wizard's strength</li>
</ul>

<p><strong>Spells Always Prepared (Sort Of):</strong></p>
<ul>
<li>Cantrips are always "prepared" (you know them)</li>
<li><a href="/rules/core-mechanics/ritual-casting-5e/">Ritual</a> spells can be cast unprepared (if you have the book)</li>
<li>This makes ritual spells extra valuable for wizards</li>
</ul>`
      },
      {
        id: "protecting-your-spellbook",
        title: "Protecting Your Spellbook",
        content: `<p><strong>Backup Copies:</strong></p>
<ul>
<li>Copying from your own spellbook costs 1 hour and 10 gp per spell level</li>
<li>Half the time and cost of copying from other sources</li>
<li>Smart wizards keep a backup in a safe location</li>
<li>Some leave copies with their former master or a trusted ally</li>
</ul>

<p><strong>Physical Protection:</strong></p>
<ul>
<li>Keep it in a waterproof container</li>
<li>Consider fire-resistant materials</li>
<li>A Bag of Holding protects against most environmental damage</li>
<li>Never let it out of your sight in dangerous territory</li>
</ul>

<p><strong>Magical Protection:</strong></p>
<ul>
<li>Some DMs allow magical protections (traps, locks)</li>
<li>Illusory Script can hide the contents</li>
<li>Arcane Lock on a carrying case</li>
<li>Nystul's Magic Aura to hide its magical nature</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting that copying spells costs time AND gold",
      "Not keeping a backup spellbook in a safe location",
      "Thinking you can prepare any wizard spell (must be in your book)",
      "Forgetting to update prepared spells after long rests",
      "Leaving your spellbook unguarded during adventures"
    ],
    dmTips: [
      "Enemy spellbooks make great loot - let wizards find and copy spells",
      "Threatening the spellbook creates tension without being unfair",
      "A destroyed spellbook is a major setback - use sparingly",
      "Remember the time and gold costs when players find new spells"
    ]
  },
  {
    slug: "ritual-casting-5e",
    name: "Ritual Casting",
    category: "core-mechanics",
    description: "Ritual casting allows certain spellcasters to cast spells without expending spell slots by taking extra time. This is one of the most valuable features for conserving resources.",
    searchVolume: 6800,
    sections: [
      {
        id: "overview",
        title: "What Is Ritual Casting?",
        content: `<p>Ritual casting lets you cast a spell with the "ritual" tag without using a <a href="/rules/core-mechanics/spell-slots-5e/">spell slot</a>. The tradeoff is time - ritual casting takes 10 minutes longer than normal.</p>

<p><strong>Key Benefits:</strong></p>
<ul>
<li>Save spell slots for combat</li>
<li>Cast utility spells freely out of combat</li>
<li>Access spells you haven't prepared (<a href="/characters/classes/wizard-5e/">wizard</a> only!)</li>
<li>Perfect for exploration and roleplay situations</li>
</ul>

<p><strong>The Wizard's Unique Advantage:</strong></p>
<ul>
<li>Most ritual casters must have the spell prepared</li>
<li>Wizards can ritual cast ANY ritual spell in their <a href="/rules/core-mechanics/spellbook-5e/">spellbook</a></li>
<li>This makes wizards the best ritual casters in the game</li>
<li>Collect ritual spells even if you'd never prepare them!</li>
</ul>`
      },
      {
        id: "how-it-works",
        title: "How Ritual Casting Works",
        content: `<p><strong>Time Required:</strong></p>
<ul>
<li>Add 10 minutes to the normal casting time</li>
<li><a href="/spells/utility-control/detect-magic-5e/">Detect Magic</a>: Action (6 seconds) becomes 10 minutes and 6 seconds</li>
<li>Most rituals are already 1 minute or 10 minutes base</li>
</ul>

<p><strong>What You Need:</strong></p>
<ul>
<li>The spell must have the "ritual" tag</li>
<li>Wizards: The spell must be in your spellbook</li>
<li>Other casters: The spell must be prepared</li>
<li>You must still provide any material components</li>
<li>Concentration is NOT required during the ritual</li>
</ul>

<p><strong>What Doesn't Change:</strong></p>
<ul>
<li>Range, targets, and effects work normally</li>
<li>Duration works normally</li>
<li>Component requirements (V, S, M) remain the same</li>
</ul>`
      },
      {
        id: "best-ritual-spells",
        title: "Best Ritual Spells",
        content: `<p><strong>Must-Have Rituals:</strong></p>
<ul>
<li><a href="/spells/utility-control/detect-magic-5e/">Detect Magic</a> (1st): Find magic items, traps, invisible creatures</li>
<li><a href="/spells/utility-control/find-familiar-5e/">Find Familiar</a> (1st): Permanent companion, scout, Help action</li>
<li><a href="/spells/utility-control/identify-5e/">Identify</a> (1st): Learn properties of magic items</li>
<li>Comprehend Languages (1st): Understand any language</li>
<li>Tiny Hut (3rd): Safe long rest anywhere</li>
</ul>

<p><strong>Other Valuable Rituals:</strong></p>
<ul>
<li>Alarm (1st): Safe short rests</li>
<li>Unseen Servant (1st): Utility helper</li>
<li>Phantom Steed (3rd): Fast travel</li>
<li>Water Breathing (3rd): Underwater exploration</li>
<li>Contact Other Plane (5th): Information gathering</li>
</ul>`
      },
      {
        id: "who-can-ritual-cast",
        title: "Which Classes Can Ritual Cast?",
        content: `<p><strong>Natural Ritual Casters:</strong></p>
<ul>
<li><a href="/characters/classes/wizard-5e/">Wizard</a>: Any ritual in spellbook (no preparation needed!)</li>
<li><a href="/characters/classes/cleric-5e/">Cleric</a>: Any prepared ritual</li>
<li><a href="/characters/classes/druid-5e/">Druid</a>: Any prepared ritual</li>
<li><a href="/characters/classes/bard-5e/">Bard</a>: Any known ritual</li>
</ul>

<p><strong>Feat Access:</strong></p>
<ul>
<li>Ritual Caster feat: Choose a class, learn 2 rituals, find more</li>
<li>Works like wizard - can cast from book without preparing</li>
<li>Great for non-casters wanting utility</li>
</ul>

<p><strong>Cannot Ritual Cast (without feat):</strong></p>
<ul>
<li><a href="/characters/classes/sorcerer-5e/">Sorcerer</a>: No ritual casting feature</li>
<li><a href="/characters/classes/warlock-5e/">Warlock</a>: No ritual casting (but Pact of the Tome fixes this)</li>
<li><a href="/characters/classes/paladin-5e/">Paladin</a>: No ritual casting</li>
<li><a href="/characters/classes/ranger-5e/">Ranger</a>: No ritual casting</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting wizards can ritual cast without preparing the spell",
      "Trying to ritual cast spells without the ritual tag",
      "Using spell slots on ritual spells when time isn't critical",
      "Not collecting ritual spells just because you'd never prepare them"
    ],
    dmTips: [
      "Create time pressure when you want to prevent ritual abuse",
      "Ritual casting Detect Magic is standard practice - plan for it",
      "Tiny Hut ritual makes wilderness rests very safe - adjust encounters",
      "Let wizards find ritual spells to copy - it's a class feature"
    ]
  },
  {
    slug: "short-rest-5e",
    name: "Short Rest",
    category: "core-mechanics",
    description: "A short rest is a period of at least 1 hour during which characters catch their breath. Understanding short rests is essential for pacing encounters and managing resources.",
    searchVolume: 9200,
    sections: [
      {
        id: "overview",
        title: "What Is a Short Rest?",
        content: `<p>A short rest is a period of downtime, at least 1 hour long, during which characters do nothing more strenuous than eating, drinking, reading, and tending to wounds.</p>

<p><strong>Duration:</strong></p>
<ul>
<li>Minimum 1 hour</li>
<li>No maximum specified (but longer becomes a <a href="/rules/core-mechanics/long-rest-5e/">long rest</a> alternative)</li>
<li>Interrupted by combat, walking, or other strenuous activity</li>
</ul>

<p><strong>What You Can Do During a Short Rest:</strong></p>
<ul>
<li>Light activity (reading, talking, eating)</li>
<li>Attune to magic items (requires short rest)</li>
<li>Spend Hit Dice to heal</li>
<li>Use class features that recharge on short rest</li>
</ul>

<p><strong>What Interrupts a Short Rest:</strong></p>
<ul>
<li>Combat</li>
<li>Casting most spells</li>
<li>Walking any significant distance</li>
<li>Strenuous physical activity</li>
<li>Taking damage</li>
</ul>`
      },
      {
        id: "hit-dice",
        title: "Spending Hit Dice",
        content: `<p><strong>What Are Hit Dice?</strong></p>
<ul>
<li>You have Hit Dice equal to your level</li>
<li>Die size depends on class (d6 for <a href="/characters/classes/wizard-5e/">wizard</a>, d12 for <a href="/characters/classes/barbarian-5e/">barbarian</a>)</li>
<li>They're a healing resource</li>
</ul>

<p><strong>Using Hit Dice on Short Rest:</strong></p>
<ul>
<li>At the end of a short rest, spend any number of Hit Dice</li>
<li>Roll each die and add Constitution modifier</li>
<li>Regain that many hit points</li>
<li>Can decide after each roll whether to spend more</li>
</ul>

<p><strong>Example (5th-level Wizard with +2 Con):</strong></p>
<ul>
<li>You have 5d6 Hit Dice</li>
<li>Spend 2d6, roll 4 + 3 = 7, plus 4 (Con mod × 2) = 11 HP recovered</li>
<li>You now have 3d6 Hit Dice remaining</li>
</ul>

<p><strong>Hit Dice Recovery:</strong></p>
<ul>
<li>Regain spent Hit Dice on <a href="/rules/core-mechanics/long-rest-5e/">long rest</a></li>
<li>Recover half your total (minimum 1) on long rest</li>
<li>10th-level character recovers 5 Hit Dice on long rest</li>
</ul>`
      },
      {
        id: "short-rest-features",
        title: "Class Features on Short Rest",
        content: `<p><strong>Recharge on Short Rest:</strong></p>
<ul>
<li><a href="/characters/classes/wizard-5e/">Wizard</a> Arcane Recovery (once per day)</li>
<li><a href="/characters/classes/warlock-5e/">Warlock</a> Pact Magic (all slots)</li>
<li><a href="/characters/classes/fighter-5e/">Fighter</a> Second Wind, Action Surge</li>
<li><a href="/characters/classes/monk-5e/">Monk</a> Ki Points (all)</li>
<li><a href="/characters/classes/bard-5e/">Bard</a> Bardic Inspiration (some subclasses)</li>
<li><a href="/characters/classes/druid-5e/">Druid</a> Wild Shape uses</li>
<li>Channel Divinity (<a href="/characters/classes/cleric-5e/">Cleric</a>, <a href="/characters/classes/paladin-5e/">Paladin</a>)</li>
</ul>

<p><strong>Why Some Classes Love Short Rests:</strong></p>
<ul>
<li>Warlocks, Fighters, and Monks are "short rest classes"</li>
<li>They recover most of their power on short rests</li>
<li>Long adventuring days favor these classes</li>
<li>Wizards and Clerics are "long rest classes" - they need overnight to fully recover</li>
</ul>`
      },
      {
        id: "short-rest-strategy",
        title: "Short Rest Strategy",
        content: `<p><strong>When to Short Rest:</strong></p>
<ul>
<li>After difficult encounters</li>
<li>When Hit Dice can recover significant HP</li>
<li>When classes have short-rest abilities depleted</li>
<li>When you need to attune to new magic items</li>
</ul>

<p><strong>When NOT to Short Rest:</strong></p>
<ul>
<li>Time-sensitive situations</li>
<li>When enemies might reinforce or escape</li>
<li>When you're at full resources</li>
<li>When a long rest is imminent and feasible</li>
</ul>

<p><strong>Party Balance:</strong></p>
<ul>
<li>2-3 short rests per long rest is the intended design</li>
<li>This balances short-rest and long-rest classes</li>
<li>"Nova and rest" playstyle hurts short-rest classes</li>
<li>Communicate with your party about resting needs</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting to use Arcane Recovery or other short-rest features",
      "Not tracking Hit Dice spent and recovered",
      "Skipping short rests when party members need them",
      "Taking too many short rests (slows the game)",
      "Forgetting that attunement requires a short rest"
    ],
    dmTips: [
      "Build in natural short rest opportunities (safe rooms, story beats)",
      "Time pressure limits resting and creates tension",
      "Wandering monster checks discourage rest abuse",
      "2-3 short rests per long rest is the intended design"
    ]
  },
  {
    slug: "long-rest-5e",
    name: "Long Rest",
    category: "core-mechanics",
    description: "A long rest is a period of extended downtime, at least 8 hours long, during which characters sleep and recover. Long rests restore most class resources including all spell slots.",
    searchVolume: 8800,
    sections: [
      {
        id: "overview",
        title: "What Is a Long Rest?",
        content: `<p>A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps or performs light activity.</p>

<p><strong>Requirements:</strong></p>
<ul>
<li>At least 8 hours total</li>
<li>At least 6 hours must be sleeping</li>
<li>Up to 2 hours of light activity (reading, talking, keeping watch)</li>
<li>No strenuous activity (walking, fighting, casting spells)</li>
</ul>

<p><strong>What a Long Rest Restores:</strong></p>
<ul>
<li>All hit points</li>
<li>All expended <a href="/rules/core-mechanics/spell-slots-5e/">spell slots</a></li>
<li>Hit Dice: half your total level (minimum 1)</li>
<li>Most class features that say "once per long rest"</li>
</ul>

<p><strong>Frequency Limit:</strong></p>
<ul>
<li>Only one long rest per 24-hour period</li>
<li>Must have at least 1 HP to benefit from long rest</li>
<li>If you're at 0 HP, you're making death saves, not resting!</li>
</ul>`
      },
      {
        id: "interruption",
        title: "Long Rest Interruption",
        content: `<p><strong>What Interrupts a Long Rest:</strong></p>
<ul>
<li>1 hour or more of walking</li>
<li>Fighting</li>
<li>Casting spells</li>
<li>Similar adventuring activity</li>
<li>Strenuous activity lasting more than 1 hour</li>
</ul>

<p><strong>The 1-Hour Grace Period:</strong></p>
<ul>
<li>Brief interruptions (under 1 hour total) don't reset the rest</li>
<li>A single combat encounter typically doesn't ruin the rest</li>
<li>But multiple encounters or extended activity does</li>
</ul>

<table class="ref-table">
<thead><tr><th>Activity</th><th>Interrupts Rest?</th></tr></thead>
<tbody>
<tr><td>30-minute combat</td><td>No</td></tr>
<tr><td>Two 30-minute combats</td><td>Yes (over 1 hour total)</td></tr>
<tr><td>2-hour watch</td><td>Yes</td></tr>
<tr><td>Casting one spell</td><td>No</td></tr>
<tr><td>Studying <a href="/rules/core-mechanics/spellbook-5e/">spellbook</a> for 2 hours</td><td>No (light activity)</td></tr>
<tr><td>Walking 2 miles</td><td>Yes</td></tr>
</tbody>
</table>`
      },
      {
        id: "preparing-spells",
        title: "Preparing Spells After Long Rest",
        content: `<p><strong>What Spellcasters Do:</strong></p>
<ul>
<li>You can change your prepared spell list after a long rest</li>
<li>Requires 1 minute per spell level for each new spell</li>
<li>This is part of the long rest, not additional time</li>
<li>You don't have to change spells - keep the same list if you want</li>
</ul>

<p><strong>Classes That Prepare Spells:</strong></p>
<ul>
<li><a href="/characters/classes/wizard-5e/">Wizard</a>: Prepare from <a href="/rules/core-mechanics/spellbook-5e/">spellbook</a> (Int + level spells)</li>
<li><a href="/characters/classes/cleric-5e/">Cleric</a>: Prepare from full class list (Wis + level spells)</li>
<li><a href="/characters/classes/druid-5e/">Druid</a>: Prepare from full class list (Wis + level spells)</li>
<li><a href="/characters/classes/paladin-5e/">Paladin</a>: Prepare from full class list (Cha + half level spells)</li>
</ul>

<p><strong>Classes That Don't Prepare (Known Spells):</strong></p>
<ul>
<li><a href="/characters/classes/sorcerer-5e/">Sorcerer</a>, <a href="/characters/classes/bard-5e/">Bard</a>, <a href="/characters/classes/ranger-5e/">Ranger</a>, <a href="/characters/classes/warlock-5e/">Warlock</a></li>
<li>They know a fixed number of spells</li>
<li>Can only change spells when leveling up</li>
</ul>`
      },
      {
        id: "resting-safely",
        title: "Resting Safely",
        content: `<p><strong>Spells for Safe Rests:</strong></p>
<ul>
<li>Tiny Hut (3rd level): 10-foot dome, nothing can enter - <a href="/rules/core-mechanics/ritual-casting-5e/">ritual</a> cast it!</li>
<li>Alarm (1st level): 20-foot cube, alerts to intruders - ritual!</li>
<li>Rope Trick (2nd level): Extradimensional space, but only 1 hour</li>
</ul>

<p><strong>Watch Rotation:</strong></p>
<ul>
<li><a href="/characters/races/elf-5e/">Elves</a> only need 4 hours (trance) - they can take longer watches</li>
<li>2-hour watches for 4-person parties</li>
<li>The watcher does light activity, still benefits from rest</li>
</ul>

<p><strong>Safe Locations:</strong></p>
<ul>
<li>Inns and taverns</li>
<li>Allied camps or settlements</li>
<li>Fortified positions</li>
<li>Cleared dungeon rooms (lock the door!)</li>
</ul>`
      },
      {
        id: "dm-rest-management",
        title: "Rest Pacing and Balance",
        content: `<p><strong>The Intended Design:</strong></p>
<ul>
<li>6-8 medium/hard encounters per long rest</li>
<li>2-3 <a href="/rules/core-mechanics/short-rest-5e/">short rests</a> between long rests</li>
<li>This challenges resource management</li>
</ul>

<p><strong>The "5-Minute Adventuring Day":</strong></p>
<ul>
<li>Party blows all resources in one fight, then rests</li>
<li>Makes long-rest classes (<a href="/characters/classes/wizard-5e/">wizards</a>, <a href="/characters/classes/cleric-5e/">clerics</a>) overpowered</li>
<li>Makes short-rest classes (<a href="/characters/classes/fighter-5e/">fighters</a>, <a href="/characters/classes/warlock-5e/">warlocks</a>) feel weak</li>
<li>Combat narrative tools to prevent this</li>
</ul>

<p><strong>Time Pressure Solutions:</strong></p>
<ul>
<li>Kidnapped victim with a deadline</li>
<li>Ritual that completes at midnight</li>
<li>Enemy reinforcements arriving</li>
<li>Changing environment (rising water, closing walls)</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting to prepare new spells after long rest",
      "Not recovering Hit Dice on long rest (half total, rounded down)",
      "Allowing long rests in dangerous locations without consequence",
      "Forgetting the 24-hour limit between long rests",
      "Not tracking the 1-hour interruption threshold"
    ],
    dmTips: [
      "Use time pressure to prevent rest abuse without being punitive",
      "Tiny Hut makes wilderness rests trivial - plan accordingly",
      "Multiple encounters per long rest is key to balanced gameplay",
      "Consider narrative consequences when parties rest frequently"
    ]
  },

  // =============================================================================
  // CORE COMBAT MECHANICS
  // =============================================================================

  {
    slug: "advantage-disadvantage-5e",
    name: "Advantage & Disadvantage",
    category: "core-mechanics",
    description: "Advantage and disadvantage are the core mechanics that modify dice rolls in D&D 5e. Roll twice, take the higher (advantage) or lower (disadvantage) result.",
    searchVolume: 12500,
    aliases: ["advantage-5e", "disadvantage-5e"],
    sections: [
      {
        id: "overview",
        title: "How Advantage and Disadvantage Work",
        content: `<p>When you have <strong>advantage</strong>, roll two d20s and use the higher result. When you have <strong>disadvantage</strong>, roll two d20s and use the lower result.</p>

<p><strong>Key Rules:</strong></p>
<ul>
<li>Applies to attack rolls, ability checks, and saving throws</li>
<li>Multiple sources of advantage don't stack (you still only roll twice)</li>
<li>Multiple sources of disadvantage don't stack</li>
<li><strong>If you have both advantage AND disadvantage, they cancel out</strong> - roll normally with one d20</li>
</ul>

<p><strong>The Cancellation Rule:</strong></p>
<ul>
<li>Even if you have 3 sources of advantage and 1 of disadvantage, they ALL cancel</li>
<li>You roll a single d20 as normal</li>
<li>This is intentional to keep the system simple</li>
</ul>`
      },
      {
        id: "common-sources",
        title: "Common Sources of Advantage",
        content: `<p><strong>Attack Rolls with Advantage:</strong></p>
<ul>
<li>Attacking a <a href="/rules/conditions/prone-condition-5e/">prone</a> target from within 5 feet</li>
<li>Attacking an <a href="/rules/conditions/invisible-condition-5e/">invisible</a> or unseen target (who can't see you)</li>
<li>Attacking a <a href="/rules/conditions/paralyzed-condition-5e/">paralyzed</a>, <a href="/rules/conditions/stunned-condition-5e/">stunned</a>, <a href="/rules/conditions/unconscious-condition-5e/">unconscious</a>, or <a href="/rules/conditions/restrained-condition-5e/">restrained</a> creature</li>
<li><a href="/characters/classes/rogue-5e/">Rogue's</a> Steady Aim feature</li>
<li><a href="/characters/classes/barbarian-5e/">Barbarian's</a> Reckless Attack</li>
<li>Help action from an ally</li>
<li>Flanking (optional rule)</li>
</ul>

<p><strong>Ability Checks with Advantage:</strong></p>
<ul>
<li>Help action from an ally</li>
<li><a href="/characters/classes/bard-5e/">Bardic Inspiration</a> features</li>
<li>Many spells and class features</li>
</ul>

<p><strong>Saving Throws with Advantage:</strong></p>
<ul>
<li><a href="/characters/races/gnome-5e/">Gnome's</a> Gnome Cunning (vs. magic)</li>
<li><a href="/characters/races/halfling-5e/">Halfling's</a> Brave (vs. frightened)</li>
<li>Various class features and spells</li>
</ul>`
      },
      {
        id: "disadvantage-sources",
        title: "Common Sources of Disadvantage",
        content: `<p><strong>Attack Rolls with Disadvantage:</strong></p>
<ul>
<li>Attacking a <a href="/rules/conditions/prone-condition-5e/">prone</a> target from more than 5 feet away</li>
<li>Attacking when <a href="/rules/conditions/blinded-condition-5e/">blinded</a></li>
<li>Attacking when <a href="/rules/conditions/poisoned-condition-5e/">poisoned</a></li>
<li>Attacking when <a href="/rules/conditions/restrained-condition-5e/">restrained</a></li>
<li>Ranged attacks at long range</li>
<li>Ranged attacks within 5 feet of a hostile creature</li>
<li>Using a weapon you're not proficient with</li>
<li>Wearing armor you're not proficient with</li>
</ul>

<p><strong>Ability Checks with Disadvantage:</strong></p>
<ul>
<li><a href="/rules/conditions/exhaustion-5e/">Exhaustion</a> level 1</li>
<li>Heavy obscurement (Perception)</li>
<li>DM-imposed circumstances</li>
</ul>

<p><strong>Saving Throws with Disadvantage:</strong></p>
<ul>
<li><a href="/rules/conditions/exhaustion-5e/">Exhaustion</a> level 3</li>
<li>Certain spell effects</li>
</ul>`
      },
      {
        id: "statistics",
        title: "The Math Behind Advantage",
        content: `<p><strong>Statistical Impact:</strong></p>
<ul>
<li>Advantage is roughly equivalent to +5 on average</li>
<li>Disadvantage is roughly equivalent to -5 on average</li>
<li>The actual bonus varies based on the target number</li>
</ul>

<p><strong>Critical Hit Probability:</strong></p>
<ul>
<li>Normal roll: 5% chance of natural 20</li>
<li>With advantage: ~9.75% chance of natural 20</li>
<li>With disadvantage: ~0.25% chance of natural 20</li>
</ul>

<p><strong>Why This Matters:</strong></p>
<ul>
<li>Advantage is extremely powerful for crit-fishing builds</li>
<li>Disadvantage makes critical hits very rare</li>
<li><a href="/characters/classes/rogue-5e/">Rogues</a> especially benefit from advantage (Sneak Attack)</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Thinking multiple sources of advantage stack",
      "Forgetting that any disadvantage cancels all advantage",
      "Not knowing ranged attacks within 5 feet have disadvantage",
      "Forgetting that wearing non-proficient armor causes disadvantage on ALL attacks"
    ],
    dmTips: [
      "Use advantage/disadvantage instead of small +/- modifiers",
      "Grant advantage for creative player actions",
      "Remember that advantage cancels disadvantage completely",
      "Advantage is roughly +5 - use that for mental math"
    ]
  },
  {
    slug: "proficiency-bonus-5e",
    name: "Proficiency Bonus",
    category: "core-mechanics",
    description: "The proficiency bonus is added to attack rolls, ability checks, and saving throws when you're proficient. It scales with character level from +2 to +6.",
    searchVolume: 9800,
    sections: [
      {
        id: "overview",
        title: "What Is Proficiency Bonus?",
        content: `<p>Your proficiency bonus represents your training and experience. It's a number that scales with your total character level, not class level.</p>

<table class="ref-table">
<thead><tr><th>Character Level</th><th>Proficiency Bonus</th></tr></thead>
<tbody>
<tr><td>1-4</td><td>+2</td></tr>
<tr><td>5-8</td><td>+3</td></tr>
<tr><td>9-12</td><td>+4</td></tr>
<tr><td>13-16</td><td>+5</td></tr>
<tr><td>17-20</td><td>+6</td></tr>
</tbody>
</table>

<p><strong>Key Points:</strong></p>
<ul>
<li>Based on TOTAL character level (not individual class levels)</li>
<li>Increases every 4 levels</li>
<li>Multiclass characters use their combined level</li>
</ul>`
      },
      {
        id: "when-to-add",
        title: "When to Add Proficiency Bonus",
        content: `<p><strong>Attack Rolls:</strong></p>
<ul>
<li>Weapons you're proficient with</li>
<li>Spell attacks (if you're a spellcaster)</li>
</ul>

<p><strong>Ability Checks:</strong></p>
<ul>
<li>Skills you're proficient in</li>
<li>Tools you're proficient with</li>
</ul>

<p><strong>Saving Throws:</strong></p>
<ul>
<li>Saving throws your class grants proficiency in</li>
<li>Saving throws gained from feats or other features</li>
</ul>

<p><strong>Spell Save DC:</strong></p>
<ul>
<li>8 + proficiency bonus + spellcasting ability modifier</li>
</ul>`
      },
      {
        id: "expertise",
        title: "Expertise (Double Proficiency)",
        content: `<p>Some features let you double your proficiency bonus for certain checks:</p>

<p><strong>Classes with Expertise:</strong></p>
<ul>
<li><a href="/characters/classes/rogue-5e/">Rogue</a>: 2 skills at level 1, 2 more at level 6</li>
<li><a href="/characters/classes/bard-5e/">Bard</a>: 2 skills at level 3, 2 more at level 10</li>
<li><a href="/characters/classes/ranger-5e/">Ranger</a> (Canny): 1 skill</li>
</ul>

<p><strong>Other Sources:</strong></p>
<ul>
<li>Skill Expert feat: Expertise in one skill</li>
<li>Prodigy feat (human/half-elf/half-orc): Expertise in one skill</li>
<li>Some subclass features</li>
</ul>

<p><strong>Example:</strong> A level 5 <a href="/characters/classes/rogue-5e/">Rogue</a> with +4 Dexterity and Expertise in Stealth rolls: d20 + 4 (Dex) + 6 (double proficiency) = d20 + 10</p>`
      }
    ],
    commonMistakes: [
      "Adding proficiency to damage rolls (it only applies to attack rolls)",
      "Forgetting to add proficiency to spell attack rolls",
      "Using class level instead of total character level for multiclass",
      "Adding proficiency to ability checks when not proficient"
    ],
    dmTips: [
      "Proficiency increases at levels 5, 9, 13, and 17",
      "Bounded accuracy means proficiency matters more at low levels",
      "Expertise breaks bounded accuracy - plan accordingly",
      "Remember NPCs also scale their proficiency by CR"
    ]
  },
  {
    slug: "saving-throws-5e",
    name: "Saving Throws",
    category: "core-mechanics",
    description: "Saving throws represent your ability to resist spells, traps, poison, and other threats. Each class starts proficient in two saving throws.",
    searchVolume: 11200,
    sections: [
      {
        id: "overview",
        title: "How Saving Throws Work",
        content: `<p><strong>Formula:</strong> d20 + ability modifier + proficiency bonus (if proficient)</p>

<p>When something targets you with an effect that allows a save, you roll the die and try to meet or exceed the DC (Difficulty Class).</p>

<p><strong>Success typically means:</strong></p>
<ul>
<li>Taking half damage (for damage effects)</li>
<li>Negating the effect entirely</li>
<li>Reduced duration or severity</li>
</ul>

<p><strong>Spell Save DC:</strong></p>
<ul>
<li>8 + proficiency bonus + spellcasting ability modifier</li>
<li>Ranges from DC 13 (level 1) to DC 19+ (high levels)</li>
</ul>`
      },
      {
        id: "six-saves",
        title: "The Six Saving Throws",
        content: `<p><strong>"Big Three" (Common Saves):</strong></p>
<ul>
<li><strong>Dexterity:</strong> Dodging area effects, traps, dragon breath</li>
<li><strong>Constitution:</strong> Resisting poison, disease, maintaining <a href="/rules/core-mechanics/concentration-5e/">concentration</a></li>
<li><strong>Wisdom:</strong> Resisting charm, fear, mental intrusion</li>
</ul>

<p><strong>"Little Three" (Rare Saves):</strong></p>
<ul>
<li><strong>Strength:</strong> Resisting being pushed, grappled, or restrained</li>
<li><strong>Intelligence:</strong> Resisting mental attacks, illusions (rare)</li>
<li><strong>Charisma:</strong> Resisting banishment, possession, some charms</li>
</ul>

<p><strong>Why This Matters:</strong></p>
<ul>
<li>Classes get one "strong" save and one "weak" save</li>
<li>Wisdom saves are extremely important (common save, scary effects)</li>
<li>Dexterity and Constitution saves come up constantly</li>
</ul>`
      },
      {
        id: "class-proficiencies",
        title: "Class Saving Throw Proficiencies",
        content: `<table class="ref-table">
<thead><tr><th>Class</th><th>Saving Throws</th></tr></thead>
<tbody>
<tr><td><a href="/characters/classes/barbarian-5e/">Barbarian</a></td><td>Strength, Constitution</td></tr>
<tr><td><a href="/characters/classes/bard-5e/">Bard</a></td><td>Dexterity, Charisma</td></tr>
<tr><td><a href="/characters/classes/cleric-5e/">Cleric</a></td><td>Wisdom, Charisma</td></tr>
<tr><td><a href="/characters/classes/druid-5e/">Druid</a></td><td>Intelligence, Wisdom</td></tr>
<tr><td><a href="/characters/classes/fighter-5e/">Fighter</a></td><td>Strength, Constitution</td></tr>
<tr><td><a href="/characters/classes/monk-5e/">Monk</a></td><td>Strength, Dexterity</td></tr>
<tr><td><a href="/characters/classes/paladin-5e/">Paladin</a></td><td>Wisdom, Charisma</td></tr>
<tr><td><a href="/characters/classes/ranger-5e/">Ranger</a></td><td>Strength, Dexterity</td></tr>
<tr><td><a href="/characters/classes/rogue-5e/">Rogue</a></td><td>Dexterity, Intelligence</td></tr>
<tr><td><a href="/characters/classes/sorcerer-5e/">Sorcerer</a></td><td>Constitution, Charisma</td></tr>
<tr><td><a href="/characters/classes/warlock-5e/">Warlock</a></td><td>Wisdom, Charisma</td></tr>
<tr><td><a href="/characters/classes/wizard-5e/">Wizard</a></td><td>Intelligence, Wisdom</td></tr>
</tbody>
</table>`
      },
      {
        id: "improving-saves",
        title: "Improving Your Saving Throws",
        content: `<p><strong>Feats:</strong></p>
<ul>
<li>Resilient: Gain proficiency in one saving throw</li>
<li>Lucky: Reroll any d20 (limited uses)</li>
</ul>

<p><strong>Spells and Features:</strong></p>
<ul>
<li><a href="/spells/support-healing/bless-5e/">Bless</a>: +1d4 to saving throws</li>
<li><a href="/characters/classes/paladin-5e/">Paladin's</a> Aura of Protection: +Charisma modifier to saves within 10 feet</li>
<li><a href="/characters/classes/monk-5e/">Monk's</a> Diamond Soul (14th): Proficiency in all saving throws</li>
</ul>

<p><strong>Magic Items:</strong></p>
<ul>
<li>Cloak of Protection: +1 to saves</li>
<li>Ring of Protection: +1 to saves</li>
<li>Various legendary items</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Confusing saving throws with ability checks",
      "Forgetting to add proficiency when proficient",
      "Not knowing which ability a save uses (it's stated in the effect)",
      "Thinking high Constitution helps with Wisdom saves"
    ],
    dmTips: [
      "Target weak saves for challenging encounters",
      "Remember most PCs have poor Intelligence and Charisma saves",
      "Legendary Resistance exists because bosses need it",
      "Saving throw proficiency matters more at high levels"
    ]
  },
  {
    slug: "attack-rolls-5e",
    name: "Attack Rolls",
    category: "core-mechanics",
    description: "Attack rolls determine whether your attack hits a target. Roll d20, add modifiers, and compare to the target's Armor Class (AC).",
    searchVolume: 10500,
    sections: [
      {
        id: "overview",
        title: "How Attack Rolls Work",
        content: `<p><strong>Formula:</strong> d20 + ability modifier + proficiency bonus (if proficient)</p>

<p>Roll the d20, add your modifiers, and compare to the target's <a href="/rules/core-mechanics/armor-class-5e/">Armor Class (AC)</a>. If your total equals or exceeds the AC, you hit!</p>

<p><strong>Melee Weapon Attacks:</strong></p>
<ul>
<li>Use Strength modifier (usually)</li>
<li>Finesse weapons: Choose Strength OR Dexterity</li>
</ul>

<p><strong>Ranged Weapon Attacks:</strong></p>
<ul>
<li>Use Dexterity modifier</li>
<li>Thrown weapons: Use Strength (or Dex if finesse)</li>
</ul>

<p><strong>Spell Attacks:</strong></p>
<ul>
<li>Use your spellcasting ability modifier</li>
<li><a href="/characters/classes/wizard-5e/">Wizard</a>: Intelligence</li>
<li><a href="/characters/classes/cleric-5e/">Cleric</a>/<a href="/characters/classes/druid-5e/">Druid</a>: Wisdom</li>
<li><a href="/characters/classes/sorcerer-5e/">Sorcerer</a>/<a href="/characters/classes/warlock-5e/">Warlock</a>/<a href="/characters/classes/bard-5e/">Bard</a>: Charisma</li>
</ul>`
      },
      {
        id: "critical-hits",
        title: "Critical Hits and Misses",
        content: `<p><strong>Natural 20 (Critical Hit):</strong></p>
<ul>
<li>Always hits, regardless of AC</li>
<li>Double all damage dice (not modifiers)</li>
<li>Example: 2d6+4 becomes 4d6+4</li>
</ul>

<p><strong>Natural 1 (Critical Miss):</strong></p>
<ul>
<li>Always misses, regardless of modifiers</li>
<li>No additional penalties by RAW</li>
<li>Some tables use fumble tables (house rule)</li>
</ul>

<p><strong>Critical Hit Math:</strong></p>
<ul>
<li>Roll damage dice twice (or double the dice rolled)</li>
<li>Add modifiers once</li>
<li>Add extra dice from features (Sneak Attack, Smite) and double those too</li>
</ul>`
      },
      {
        id: "modifiers",
        title: "Attack Roll Modifiers",
        content: `<p><strong>Always Added:</strong></p>
<ul>
<li>Ability modifier (Str, Dex, or spellcasting ability)</li>
<li>Proficiency bonus (if proficient with weapon/spell)</li>
</ul>

<p><strong>Situational Bonuses:</strong></p>
<ul>
<li>Magic weapon bonus (+1, +2, +3)</li>
<li><a href="/spells/support-healing/bless-5e/">Bless</a> spell: +1d4</li>
<li>Bardic Inspiration: +1d6/d8/d10/d12</li>
<li>Fighting Style (Archery): +2 to ranged attacks</li>
</ul>

<p><strong><a href="/rules/core-mechanics/advantage-disadvantage-5e/">Advantage/Disadvantage</a>:</strong></p>
<ul>
<li>Roll 2d20, take higher (advantage) or lower (disadvantage)</li>
<li>Roughly equivalent to ±5</li>
<li>They cancel each other out</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Adding proficiency to damage (it's only for attack rolls)",
      "Forgetting proficiency bonus on spell attacks",
      "Using the wrong ability modifier for the weapon type",
      "Double-counting modifiers on critical hits"
    ],
    dmTips: [
      "AC 15-17 is typical for mid-level monsters",
      "High AC makes combat feel swingy",
      "Critical hits should feel exciting - describe them!",
      "Remember ranged attacks within 5 feet have disadvantage"
    ]
  },
  {
    slug: "armor-class-5e",
    name: "Armor Class (AC)",
    category: "core-mechanics",
    description: "Armor Class represents how hard you are to hit. Attacks must meet or exceed your AC to hit you.",
    searchVolume: 14200,
    aliases: ["ac-5e"],
    sections: [
      {
        id: "overview",
        title: "How Armor Class Works",
        content: `<p>When an attack targets you, the attacker rolls d20 + modifiers. If the total <strong>equals or exceeds</strong> your AC, the attack hits.</p>

<p><strong>Base AC Calculations:</strong></p>
<ul>
<li><strong>Unarmored:</strong> 10 + Dexterity modifier</li>
<li><strong>Light Armor:</strong> Armor base + Dexterity modifier</li>
<li><strong>Medium Armor:</strong> Armor base + Dexterity modifier (max +2)</li>
<li><strong>Heavy Armor:</strong> Armor base (no Dex)</li>
</ul>

<p><strong>Shields:</strong> +2 AC (requires proficiency)</p>`
      },
      {
        id: "armor-types",
        title: "Armor Types and AC",
        content: `<table class="ref-table">
<thead><tr><th>Armor</th><th>AC</th><th>Dex Bonus</th><th>Stealth</th></tr></thead>
<tbody>
<tr><td colspan="4"><strong>Light Armor</strong></td></tr>
<tr><td>Padded</td><td>11</td><td>Full</td><td>Disadvantage</td></tr>
<tr><td>Leather</td><td>11</td><td>Full</td><td>—</td></tr>
<tr><td>Studded Leather</td><td>12</td><td>Full</td><td>—</td></tr>
<tr><td colspan="4"><strong>Medium Armor</strong></td></tr>
<tr><td>Hide</td><td>12</td><td>Max +2</td><td>—</td></tr>
<tr><td>Chain Shirt</td><td>13</td><td>Max +2</td><td>—</td></tr>
<tr><td>Scale Mail</td><td>14</td><td>Max +2</td><td>Disadvantage</td></tr>
<tr><td>Breastplate</td><td>14</td><td>Max +2</td><td>—</td></tr>
<tr><td>Half Plate</td><td>15</td><td>Max +2</td><td>Disadvantage</td></tr>
<tr><td colspan="4"><strong>Heavy Armor</strong></td></tr>
<tr><td>Ring Mail</td><td>14</td><td>None</td><td>Disadvantage</td></tr>
<tr><td>Chain Mail</td><td>16</td><td>None</td><td>Disadvantage</td></tr>
<tr><td>Splint</td><td>17</td><td>None</td><td>Disadvantage</td></tr>
<tr><td>Plate</td><td>18</td><td>None</td><td>Disadvantage</td></tr>
</tbody>
</table>`
      },
      {
        id: "alternative-ac",
        title: "Alternative AC Calculations",
        content: `<p>Some features provide alternative AC calculations. You can only use ONE at a time:</p>

<p><strong>Class Features:</strong></p>
<ul>
<li><a href="/characters/classes/barbarian-5e/">Barbarian</a> Unarmored Defense: 10 + Dex + Con</li>
<li><a href="/characters/classes/monk-5e/">Monk</a> Unarmored Defense: 10 + Dex + Wis</li>
<li>Draconic <a href="/characters/classes/sorcerer-5e/">Sorcerer</a>: 13 + Dex (no armor)</li>
</ul>

<p><strong>Spells:</strong></p>
<ul>
<li><a href="/spells/reaction-defense/mage-armor-5e/">Mage Armor</a>: 13 + Dex (no armor)</li>
<li>Barkskin: AC can't be less than 16</li>
</ul>

<p><strong>Important:</strong> Alternative calculations don't stack. Choose the best one. Shields and other AC BONUSES stack with any calculation.</p>`
      },
      {
        id: "improving-ac",
        title: "Ways to Improve AC",
        content: `<p><strong>Equipment:</strong></p>
<ul>
<li>Better armor</li>
<li>Shield (+2)</li>
<li>Magic armor (+1, +2, +3)</li>
<li>Magic shields (+1, +2, +3)</li>
</ul>

<p><strong>Spells (Bonuses):</strong></p>
<ul>
<li><a href="/spells/reaction-defense/shield-5e/">Shield</a> (reaction): +5 AC until next turn</li>
<li>Shield of Faith: +2 AC for 10 minutes</li>
<li><a href="/spells/utility-control/haste-5e/">Haste</a>: +2 AC</li>
</ul>

<p><strong>Other Sources:</strong></p>
<ul>
<li>Fighting Style (Defense): +1 AC in armor</li>
<li>Cloak/Ring of Protection: +1 AC each</li>
<li><a href="/rules/core-mechanics/cover-5e/">Cover</a>: +2 (half) or +5 (three-quarters)</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Stacking multiple AC calculations instead of choosing one",
      "Forgetting medium armor caps Dex bonus at +2",
      "Not knowing heavy armor has Strength requirements",
      "Forgetting shields require proficiency to use effectively"
    ],
    dmTips: [
      "AC 15 is a reasonable baseline for most encounters",
      "Very high AC (20+) can make combat tedious",
      "Remember to use saving throw spells against high-AC targets",
      "Cover is often forgotten but very impactful"
    ]
  },
  {
    slug: "actions-in-combat-5e",
    name: "Actions in Combat",
    category: "core-mechanics",
    description: "On your turn, you can take one action, one bonus action (if available), move, and interact with one object. Understanding your action options is key to tactical combat.",
    searchVolume: 8900,
    aliases: ["combat-actions-5e"],
    sections: [
      {
        id: "overview",
        title: "What You Can Do On Your Turn",
        content: `<p><strong>Every Turn You Get:</strong></p>
<ul>
<li><strong>One Action</strong> - Attack, Cast a Spell, Dash, etc.</li>
<li><strong>Movement</strong> - Up to your speed (usually 30 feet)</li>
<li><strong>One Free Object Interaction</strong> - Draw a weapon, open a door</li>
<li><strong>One Bonus Action</strong> - Only if you have a feature that grants one</li>
<li><strong>Talking</strong> - Brief utterances (free)</li>
</ul>

<p><strong>Outside Your Turn:</strong></p>
<ul>
<li><strong>One Reaction</strong> - <a href="/rules/core-mechanics/opportunity-attacks-5e/">Opportunity attack</a>, <a href="/spells/reaction-defense/shield-5e/">Shield</a> spell, etc.</li>
</ul>

<p>You can split your movement before and after your action.</p>`
      },
      {
        id: "action-options",
        title: "Standard Actions",
        content: `<p><strong>Attack:</strong> Make one weapon attack (or more with Extra Attack)</p>

<p><strong>Cast a Spell:</strong> Cast a spell with a casting time of 1 action</p>

<p><strong>Dash:</strong> Gain extra movement equal to your speed</p>

<p><strong>Disengage:</strong> Your movement doesn't provoke <a href="/rules/core-mechanics/opportunity-attacks-5e/">opportunity attacks</a></p>

<p><strong>Dodge:</strong> Attacks against you have <a href="/rules/core-mechanics/advantage-disadvantage-5e/">disadvantage</a>, you have advantage on Dex saves</p>

<p><strong>Help:</strong> Give an ally <a href="/rules/core-mechanics/advantage-disadvantage-5e/">advantage</a> on their next check or attack</p>

<p><strong>Hide:</strong> Make a Stealth check to become hidden</p>

<p><strong>Ready:</strong> Prepare an action to trigger later (uses your reaction)</p>

<p><strong>Search:</strong> Make a Perception or Investigation check</p>

<p><strong>Use an Object:</strong> Interact with something requiring an action</p>`
      },
      {
        id: "bonus-actions",
        title: "Bonus Actions",
        content: `<p><strong>You only get a bonus action if something grants it:</strong></p>
<ul>
<li>Two-weapon fighting (attack with off-hand)</li>
<li><a href="/characters/classes/rogue-5e/">Rogue</a> Cunning Action (Dash, Disengage, or Hide)</li>
<li><a href="/characters/classes/monk-5e/">Monk</a> Martial Arts/Ki features</li>
<li>Spells with "1 bonus action" casting time</li>
<li>Class features that specify bonus action</li>
</ul>

<p><strong>Important Rules:</strong></p>
<ul>
<li>Only ONE bonus action per turn</li>
<li>Can't substitute action for bonus action or vice versa</li>
<li>If you cast a bonus action spell, you can only cast cantrips as your action</li>
</ul>`
      },
      {
        id: "reactions",
        title: "Reactions",
        content: `<p><strong>One reaction per round (resets at start of your turn):</strong></p>
<ul>
<li><a href="/rules/core-mechanics/opportunity-attacks-5e/">Opportunity Attacks</a> - When an enemy leaves your reach</li>
<li><a href="/spells/reaction-defense/shield-5e/">Shield</a> spell - +5 AC when hit</li>
<li><a href="/spells/reaction-defense/counterspell-5e/">Counterspell</a> - Negate an enemy spell</li>
<li><a href="/spells/utility-control/feather-fall-5e/">Feather Fall</a> - When you or allies fall</li>
<li>Readied actions - Trigger you specified</li>
<li>Class features (Uncanny Dodge, etc.)</li>
</ul>

<p><strong>You can take a reaction on your own turn</strong> (like opportunity attack against someone fleeing from you).</p>`
      }
    ],
    commonMistakes: [
      "Thinking everyone gets a bonus action every turn",
      "Substituting actions for bonus actions",
      "Forgetting the bonus action spell rule for casting",
      "Not using the Dodge action when appropriate",
      "Forgetting you can Ready an action"
    ],
    dmTips: [
      "Remind players they can Dodge, Help, or Ready",
      "Disengage is underutilized but very useful",
      "Cunning Action makes Rogues extremely mobile",
      "Ready action can enable creative tactics"
    ]
  },
  {
    slug: "opportunity-attacks-5e",
    name: "Opportunity Attacks",
    category: "core-mechanics",
    description: "Opportunity attacks let you strike enemies who carelessly leave your reach. They use your reaction and can control the battlefield.",
    searchVolume: 7600,
    sections: [
      {
        id: "overview",
        title: "When Can You Make an Opportunity Attack?",
        content: `<p>You can make an opportunity attack when a hostile creature <strong>that you can see</strong> moves <strong>out of your reach</strong>.</p>

<p><strong>Requirements:</strong></p>
<ul>
<li>The creature must leave your reach voluntarily</li>
<li>You must be able to see the creature</li>
<li>You must have your reaction available</li>
<li>You must be able to make melee attacks</li>
</ul>

<p><strong>The Attack:</strong></p>
<ul>
<li>Make ONE melee weapon attack</li>
<li>Uses your reaction</li>
<li>Interrupts the creature's movement</li>
<li>Normal attack and damage</li>
</ul>`
      },
      {
        id: "avoiding-opportunity-attacks",
        title: "How to Avoid Opportunity Attacks",
        content: `<p><strong>Disengage Action:</strong></p>
<ul>
<li>Your movement doesn't provoke opportunity attacks for the rest of the turn</li>
<li>Costs your action (unless you have a feature like Cunning Action)</li>
</ul>

<p><strong>Forced Movement:</strong></p>
<ul>
<li>Being pushed, pulled, or teleported doesn't provoke</li>
<li>Spells like <a href="/spells/offensive/thunderwave-5e/">Thunderwave</a> push without provoking</li>
<li>Grapple-and-drag doesn't provoke for the dragged creature</li>
</ul>

<p><strong>Teleportation:</strong></p>
<ul>
<li><a href="/spells/utility-control/misty-step-5e/">Misty Step</a>, <a href="/spells/utility-control/dimension-door-5e/">Dimension Door</a>, etc. don't provoke</li>
<li>You're not "moving out of reach" - you're disappearing</li>
</ul>

<p><strong>Other Methods:</strong></p>
<ul>
<li>Become <a href="/rules/conditions/invisible-condition-5e/">invisible</a> (can't be seen)</li>
<li>Knock the enemy <a href="/rules/conditions/prone-condition-5e/">prone</a> first</li>
<li>Move only within their reach (not out of it)</li>
</ul>`
      },
      {
        id: "special-features",
        title: "Special Opportunity Attack Features",
        content: `<p><strong>Class Features:</strong></p>
<ul>
<li><a href="/characters/classes/fighter-5e/">Fighter</a> (Cavalier): Mark enemies, bonus opportunity attacks</li>
<li>Polearm Master feat: Opportunity attack when enemy ENTERS reach</li>
<li>Sentinel feat: Target's speed becomes 0 when you hit</li>
<li>War Caster feat: Cast a spell instead of weapon attack</li>
</ul>

<p><strong>Extended Reach:</strong></p>
<ul>
<li>Polearms (10 ft reach) increase opportunity attack range</li>
<li><a href="/characters/classes/barbarian-5e/">Bugbear</a> reach extends on your turn only</li>
</ul>

<p><strong>Powerful Combo:</strong></p>
<ul>
<li>Polearm Master + Sentinel = enemies can't approach you easily</li>
<li>They provoke when entering reach, get stopped if you hit</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Making opportunity attacks when enemies move within your reach",
      "Forgetting opportunity attacks when using ranged weapons in melee",
      "Not realizing Disengage prevents ALL opportunity attacks that turn",
      "Thinking forced movement provokes opportunity attacks"
    ],
    dmTips: [
      "Smart enemies use Disengage or forced movement",
      "Opportunity attacks create tactical positioning",
      "Sentinel feat is very powerful - plan encounters accordingly",
      "Remind players they can Ready attacks for different triggers"
    ]
  },
  {
    slug: "hit-points-hit-dice-5e",
    name: "Hit Points & Hit Dice",
    category: "core-mechanics",
    description: "Hit points measure how much damage you can take before falling unconscious. Hit Dice determine your starting HP and can be spent to heal during short rests.",
    searchVolume: 9400,
    aliases: ["hp-5e", "hit-dice-5e"],
    sections: [
      {
        id: "overview",
        title: "Understanding Hit Points",
        content: `<p>Hit points represent a combination of physical durability, will to live, and luck. When you reach 0 HP, you fall <a href="/rules/conditions/unconscious-condition-5e/">unconscious</a> and start making <a href="/rules/core-mechanics/death-saves-5e/">death saving throws</a>.</p>

<p><strong>Starting HP at 1st Level:</strong></p>
<ul>
<li>Maximum roll of your class's Hit Die + Constitution modifier</li>
<li><a href="/characters/classes/wizard-5e/">Wizard</a> (d6) with +2 Con: 6 + 2 = 8 HP</li>
<li><a href="/characters/classes/barbarian-5e/">Barbarian</a> (d12) with +3 Con: 12 + 3 = 15 HP</li>
</ul>

<p><strong>HP at Higher Levels:</strong></p>
<ul>
<li>Roll your Hit Die OR take the average (rounded up)</li>
<li>Add Constitution modifier per level</li>
<li>Most players take the average for consistency</li>
</ul>`
      },
      {
        id: "hit-dice-by-class",
        title: "Hit Dice by Class",
        content: `<table class="ref-table">
<thead><tr><th>Hit Die</th><th>Classes</th><th>Average per Level</th></tr></thead>
<tbody>
<tr><td>d6</td><td><a href="/characters/classes/sorcerer-5e/">Sorcerer</a>, <a href="/characters/classes/wizard-5e/">Wizard</a></td><td>4</td></tr>
<tr><td>d8</td><td><a href="/characters/classes/bard-5e/">Bard</a>, <a href="/characters/classes/cleric-5e/">Cleric</a>, <a href="/characters/classes/druid-5e/">Druid</a>, <a href="/characters/classes/monk-5e/">Monk</a>, <a href="/characters/classes/rogue-5e/">Rogue</a>, <a href="/characters/classes/warlock-5e/">Warlock</a></td><td>5</td></tr>
<tr><td>d10</td><td><a href="/characters/classes/fighter-5e/">Fighter</a>, <a href="/characters/classes/paladin-5e/">Paladin</a>, <a href="/characters/classes/ranger-5e/">Ranger</a></td><td>6</td></tr>
<tr><td>d12</td><td><a href="/characters/classes/barbarian-5e/">Barbarian</a></td><td>7</td></tr>
</tbody>
</table>

<p><strong>Hit Dice Are Also a Resource:</strong></p>
<ul>
<li>You have Hit Dice equal to your level</li>
<li>Spend them during <a href="/rules/core-mechanics/short-rest-5e/">short rests</a> to heal</li>
<li>Recover half (rounded down, minimum 1) on <a href="/rules/core-mechanics/long-rest-5e/">long rest</a></li>
</ul>`
      },
      {
        id: "using-hit-dice",
        title: "Spending Hit Dice",
        content: `<p><strong>During a <a href="/rules/core-mechanics/short-rest-5e/">Short Rest</a>:</strong></p>
<ul>
<li>Spend any number of Hit Dice</li>
<li>Roll each die, add Constitution modifier</li>
<li>Regain that many hit points</li>
<li>Decide after each roll whether to spend more</li>
</ul>

<p><strong>Example (Level 5 <a href="/characters/classes/fighter-5e/">Fighter</a>, +3 Con):</strong></p>
<ul>
<li>You have 5d10 Hit Dice</li>
<li>Spend 2d10: Roll 7 + 4 = 11, plus 6 (Con × 2) = 17 HP healed</li>
<li>3d10 remaining for later</li>
</ul>

<p><strong>Recovery:</strong></p>
<ul>
<li>Long rest recovers half your total Hit Dice (minimum 1)</li>
<li>Level 7 character recovers 3 Hit Dice per long rest</li>
<li>You can't exceed your maximum Hit Dice</li>
</ul>`
      },
      {
        id: "temporary-hp",
        title: "Temporary Hit Points",
        content: `<p><strong>How Temporary HP Works:</strong></p>
<ul>
<li>A buffer that absorbs damage first</li>
<li>Doesn't stack - take the higher value</li>
<li>Lasts until depleted or you finish a long rest</li>
<li>Can't be healed - only replaced with higher amount</li>
</ul>

<p><strong>Common Sources:</strong></p>
<ul>
<li><a href="/spells/reaction-defense/armor-of-agathys-5e/">Armor of Agathys</a> (<a href="/characters/classes/warlock-5e/">Warlock</a>)</li>
<li>Heroism spell</li>
<li>False Life spell</li>
<li>Inspiring Leader feat</li>
<li><a href="/characters/classes/fighter-5e/">Fighter</a> (Champion) at 18th level</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Rolling HP at 1st level instead of taking maximum",
      "Forgetting to add Con modifier when leveling up",
      "Stacking temporary hit points (you take the higher)",
      "Not recovering Hit Dice on long rest",
      "Confusing Hit Dice with hit points"
    ],
    dmTips: [
      "Average HP keeps game balance predictable",
      "Constitution is valuable for everyone",
      "Track player Hit Dice to know their healing capacity",
      "Tough feat adds 2 HP per level - significant for low-HP classes"
    ]
  },
  {
    slug: "death-saves-5e",
    name: "Death Saving Throws",
    category: "core-mechanics",
    description: "When you drop to 0 hit points, you make death saving throws to determine if you stabilize or die. Three successes stabilize you; three failures kill you.",
    searchVolume: 8700,
    aliases: ["death-saving-throws-5e"],
    sections: [
      {
        id: "overview",
        title: "How Death Saves Work",
        content: `<p>When you start your turn at 0 HP, you make a death saving throw - a special saving throw not associated with any ability score.</p>

<p><strong>The Roll:</strong></p>
<ul>
<li>Roll d20 (no modifiers usually)</li>
<li>10 or higher = Success</li>
<li>9 or lower = Failure</li>
</ul>

<p><strong>Tracking Results:</strong></p>
<ul>
<li>Three successes = You stabilize (stop making saves)</li>
<li>Three failures = You die</li>
<li>Successes and failures don't need to be consecutive</li>
<li>All are reset when you regain any HP</li>
</ul>

<p><strong>Natural 1 and 20:</strong></p>
<ul>
<li><strong>Natural 1:</strong> Counts as TWO failures</li>
<li><strong>Natural 20:</strong> You regain 1 HP and wake up!</li>
</ul>`
      },
      {
        id: "damage-at-zero",
        title: "Taking Damage at 0 HP",
        content: `<p><strong>Damage While Dying:</strong></p>
<ul>
<li>Any damage causes one automatic death save failure</li>
<li>Critical hits (attacks from within 5 feet on unconscious targets) cause TWO failures</li>
<li>Damage equal to your max HP = instant death</li>
</ul>

<p><strong>Example:</strong></p>
<ul>
<li>You're at 0 HP with 1 success, 0 failures</li>
<li>An enemy hits you: Now 1 success, 1 failure</li>
<li>Another enemy crits you: Now 1 success, 3 failures = Dead</li>
</ul>

<p><strong>Massive Damage:</strong></p>
<ul>
<li>If damage reduces you to 0 AND remaining damage equals or exceeds your max HP, you die instantly</li>
<li>Example: 30 max HP, at 10 HP, take 40 damage = instant death (30 remaining after reaching 0)</li>
</ul>`
      },
      {
        id: "healing-and-stabilizing",
        title: "Saving a Dying Character",
        content: `<p><strong>Healing Spells:</strong></p>
<ul>
<li>Any healing brings you to at least 1 HP</li>
<li><a href="/spells/support-healing/healing-word-5e/">Healing Word</a> is excellent (bonus action, 60 ft range)</li>
<li>Character immediately wakes up and can act</li>
</ul>

<p><strong>Medicine Check (Stabilize):</strong></p>
<ul>
<li>DC 10 Wisdom (Medicine) check as an action</li>
<li>Success: Character stabilizes (stops making saves)</li>
<li>They remain at 0 HP, unconscious, for 1d4 hours</li>
</ul>

<p><strong>Healer's Kit:</strong></p>
<ul>
<li>Automatically stabilizes without a check</li>
<li>10 uses per kit, costs 5 gp</li>
<li>No proficiency required</li>
</ul>

<p><strong>Spare the Dying Cantrip:</strong></p>
<ul>
<li>Touch range, action</li>
<li>Automatically stabilizes</li>
<li>Available to <a href="/characters/classes/cleric-5e/">Clerics</a></li>
</ul>`
      },
      {
        id: "stable-creatures",
        title: "Stabilized Creatures",
        content: `<p><strong>What Stabilized Means:</strong></p>
<ul>
<li>No longer making death saves</li>
<li>Still at 0 HP, still unconscious</li>
<li>Will regain 1 HP after 1d4 hours</li>
</ul>

<p><strong>Important Notes:</strong></p>
<ul>
<li>Taking any damage restarts death saves</li>
<li>Any healing wakes them up immediately</li>
<li>They can't take actions while stabilized</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Adding modifiers to death saves (usually none)",
      "Forgetting that natural 20 = wake up at 1 HP",
      "Not counting crits as 2 failures",
      "Thinking stabilized means conscious",
      "Forgetting death saves reset when healed"
    ],
    dmTips: [
      "Most intelligent enemies won't attack unconscious PCs",
      "Death saves should feel tense - roll in the open",
      "Remember the massive damage instant death rule",
      "Healing Word is specifically designed for this situation"
    ]
  },
  {
    slug: "initiative-5e",
    name: "Initiative",
    category: "core-mechanics",
    description: "Initiative determines the order of turns in combat. Roll d20 + Dexterity modifier at the start of combat to establish turn order.",
    searchVolume: 8100,
    sections: [
      {
        id: "overview",
        title: "Rolling Initiative",
        content: `<p><strong>At the Start of Combat:</strong></p>
<ul>
<li>Everyone rolls d20 + Dexterity modifier</li>
<li>Higher results go first</li>
<li>Ties: Compare Dexterity scores, or the DM decides</li>
</ul>

<p><strong>Formula:</strong> d20 + Dexterity modifier + any bonuses</p>

<p><strong>The Initiative Order:</strong></p>
<ul>
<li>Established at the start, remains the same throughout combat</li>
<li>Creatures act in order from highest to lowest</li>
<li>After the lowest initiative, return to the highest</li>
<li>Each pass through is one "round" (~6 seconds)</li>
</ul>`
      },
      {
        id: "modifying-initiative",
        title: "Initiative Bonuses",
        content: `<p><strong>Class Features:</strong></p>
<ul>
<li><a href="/characters/classes/bard-5e/">Bard</a> (Jack of All Trades): +half proficiency</li>
<li><a href="/characters/classes/barbarian-5e/">Barbarian</a> (Feral Instinct): Advantage on initiative</li>
<li><a href="/characters/classes/ranger-5e/">Ranger</a> (Dread Ambusher): +Wisdom modifier</li>
<li><a href="/characters/classes/fighter-5e/">Fighter</a> (Champion 7th): +half proficiency</li>
</ul>

<p><strong>Feats:</strong></p>
<ul>
<li>Alert: +5 to initiative, can't be surprised</li>
</ul>

<p><strong>Magic Items:</strong></p>
<ul>
<li>Weapon of Warning: Advantage on initiative</li>
<li>Various items grant bonuses</li>
</ul>

<p><strong>Spells:</strong></p>
<ul>
<li>Gift of Alacrity: +1d8 to initiative</li>
</ul>`
      },
      {
        id: "surprise",
        title: "Surprise",
        content: `<p><strong>What Is Surprise?</strong></p>
<ul>
<li>When one side is unaware combat is starting</li>
<li>Determined by comparing Stealth vs. passive Perception</li>
<li>Surprised creatures can't act on their first turn</li>
</ul>

<p><strong>How Surprise Works:</strong></p>
<ul>
<li>Everyone still rolls initiative</li>
<li>Surprised creatures can't move, take actions, or reactions until their first turn ends</li>
<li>After their turn ends, they can use reactions normally</li>
</ul>

<p><strong>Important:</strong></p>
<ul>
<li>There's no "surprise round" - just the surprised condition</li>
<li>Some creatures may be surprised while others aren't</li>
<li>Alert feat prevents being surprised</li>
</ul>`
      },
      {
        id: "initiative-variants",
        title: "Initiative Variants",
        content: `<p><strong>Side Initiative (Group Initiative):</strong></p>
<ul>
<li>All PCs act on one initiative, all monsters on another</li>
<li>Faster but less tactical</li>
<li>Can create "alpha strike" situations</li>
</ul>

<p><strong>Passive Initiative:</strong></p>
<ul>
<li>10 + Dex modifier (no roll)</li>
<li>Speeds up combat start</li>
<li>Less exciting but consistent</li>
</ul>

<p><strong>Delaying:</strong></p>
<ul>
<li>Not in RAW 5e</li>
<li>Use Ready action to act later with a trigger</li>
<li>Some DMs allow delaying as a house rule</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting Dexterity modifier on initiative",
      "Thinking there's a 'surprise round' (there isn't)",
      "Not realizing surprised creatures can react after their turn",
      "Trying to delay initiative (not RAW in 5e)"
    ],
    dmTips: [
      "Pre-roll monster initiative for faster starts",
      "Group identical monsters on one initiative",
      "High Dex characters should feel rewarded with early turns",
      "Alert feat is very powerful - it's working as intended"
    ]
  },
  {
    slug: "concentration-5e",
    name: "Concentration",
    category: "core-mechanics",
    description: "Concentration is a mechanic that limits how many powerful spells you can maintain at once. Breaking concentration ends the spell immediately.",
    searchVolume: 11800,
    sections: [
      {
        id: "overview",
        title: "What Is Concentration?",
        content: `<p>Many powerful spells require concentration to maintain. While concentrating:</p>

<ul>
<li>The spell continues its effect</li>
<li>You can only concentrate on ONE spell at a time</li>
<li>Casting another concentration spell ends the first</li>
<li>Certain events can break your concentration</li>
</ul>

<p><strong>Spells that require concentration say so in their description.</strong></p>

<p><strong>Examples of Concentration Spells:</strong></p>
<ul>
<li><a href="/spells/support-healing/bless-5e/">Bless</a></li>
<li><a href="/spells/utility-control/hold-person-5e/">Hold Person</a></li>
<li><a href="/spells/utility-control/haste-5e/">Haste</a></li>
<li><a href="/spells/utility-control/invisibility-5e/">Invisibility</a></li>
<li>Flaming Sphere</li>
</ul>`
      },
      {
        id: "concentration-checks",
        title: "Concentration Checks",
        content: `<p><strong>When You Take Damage:</strong></p>
<ul>
<li>Make a Constitution saving throw</li>
<li>DC = 10 or half the damage taken, whichever is higher</li>
<li>Success = maintain concentration</li>
<li>Failure = spell ends immediately</li>
</ul>

<p><strong>Examples:</strong></p>
<ul>
<li>Take 15 damage: DC 10 (half of 15 is 7.5, but minimum is 10)</li>
<li>Take 30 damage: DC 15 (half of 30)</li>
<li>Take 50 damage: DC 25 (half of 50)</li>
</ul>

<p><strong>Multiple Damage Sources:</strong></p>
<ul>
<li>Each source requires a separate check</li>
<li><a href="/spells/offensive/magic-missile-5e/">Magic Missile</a> = 3 checks (one per dart)</li>
<li>One failed check = concentration lost</li>
</ul>`
      },
      {
        id: "breaking-concentration",
        title: "Other Ways to Lose Concentration",
        content: `<p><strong>Automatic Concentration Loss:</strong></p>
<ul>
<li>Being incapacitated or killed</li>
<li>Being affected by certain conditions</li>
<li>Casting another concentration spell</li>
</ul>

<p><strong>Conditions That Break Concentration:</strong></p>
<ul>
<li><a href="/rules/conditions/incapacitated-condition-5e/">Incapacitated</a></li>
<li><a href="/rules/conditions/paralyzed-condition-5e/">Paralyzed</a></li>
<li><a href="/rules/conditions/petrified-condition-5e/">Petrified</a></li>
<li><a href="/rules/conditions/stunned-condition-5e/">Stunned</a></li>
<li><a href="/rules/conditions/unconscious-condition-5e/">Unconscious</a></li>
</ul>

<p><strong>Voluntary End:</strong></p>
<ul>
<li>You can end concentration at any time (no action required)</li>
<li>Useful for switching to a different concentration spell</li>
</ul>`
      },
      {
        id: "improving-concentration",
        title: "Improving Concentration Saves",
        content: `<p><strong>Constitution:</strong></p>
<ul>
<li>High Con improves your saves</li>
<li>Important for spellcasters who concentrate often</li>
</ul>

<p><strong>Proficiency:</strong></p>
<ul>
<li><a href="/characters/classes/sorcerer-5e/">Sorcerer</a> and <a href="/characters/classes/cleric-5e/">Cleric</a> have Con save proficiency</li>
<li>Resilient (Constitution) feat adds proficiency</li>
</ul>

<p><strong>War Caster Feat:</strong></p>
<ul>
<li><a href="/rules/core-mechanics/advantage-disadvantage-5e/">Advantage</a> on concentration saves</li>
<li>Cast spells with hands full</li>
<li>Opportunity attacks can be spells</li>
</ul>

<p><strong>Other Helps:</strong></p>
<ul>
<li>Lucky feat for rerolls</li>
<li><a href="/spells/support-healing/bless-5e/">Bless</a> (if someone else casts it)</li>
<li>Avoiding damage entirely (cover, positioning)</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Maintaining two concentration spells at once",
      "Forgetting to roll concentration when taking damage",
      "Using DC 10 even when damage is high (it's 10 OR half damage)",
      "Forgetting each damage source requires a separate check"
    ],
    dmTips: [
      "Target concentration casters to make battles dynamic",
      "Magic Missile forces 3 concentration checks",
      "Remind players they can end concentration voluntarily",
      "War Caster is practically mandatory for some builds"
    ]
  },
  {
    slug: "cover-5e",
    name: "Cover",
    category: "core-mechanics",
    description: "Cover provides bonuses to AC and Dexterity saving throws. Understanding cover rules adds tactical depth to combat.",
    searchVolume: 6200,
    sections: [
      {
        id: "overview",
        title: "Types of Cover",
        content: `<p>Cover is determined by obstacles between you and the attacker. There are three levels:</p>

<table class="ref-table">
<thead><tr><th>Cover Type</th><th>AC Bonus</th><th>Dex Save Bonus</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Half Cover</td><td>+2</td><td>+2</td><td>Low wall, furniture, another creature</td></tr>
<tr><td>Three-Quarters</td><td>+5</td><td>+5</td><td>Portcullis, arrow slit, thick tree</td></tr>
<tr><td>Total Cover</td><td>Can't be targeted</td><td>—</td><td>Completely concealed</td></tr>
</tbody>
</table>

<p><strong>Total Cover:</strong> You can't be targeted directly by attacks or spells that require you to be seen. Area effects may still reach you.</p>`
      },
      {
        id: "determining-cover",
        title: "Determining Cover",
        content: `<p><strong>The Line Method:</strong></p>
<ul>
<li>Draw a line from any corner of the attacker's space to any corner of the target's space</li>
<li>If the line passes through an obstacle, the target has cover</li>
<li>If it passes through another creature, half cover at minimum</li>
</ul>

<p><strong>Creatures as Cover:</strong></p>
<ul>
<li>A creature provides half cover to targets behind it</li>
<li>This applies to allies and enemies</li>
<li>Smart positioning uses this</li>
</ul>

<p><strong>DM Judgment:</strong></p>
<ul>
<li>DM determines cover based on the situation</li>
<li>Partial obstruction = half cover</li>
<li>Mostly blocked = three-quarters</li>
<li>Completely blocked = total cover</li>
</ul>`
      },
      {
        id: "using-cover",
        title: "Using Cover Tactically",
        content: `<p><strong>Ranged Combat:</strong></p>
<ul>
<li>Archers should fight from behind cover</li>
<li>Step out, attack, step back behind cover</li>
<li>Windows and arrow slits provide three-quarters cover</li>
</ul>

<p><strong>Against Spells:</strong></p>
<ul>
<li>Cover helps against Dex save spells (<a href="/spells/offensive/fireball-5e/">Fireball</a>, <a href="/spells/offensive/lightning-bolt-5e/">Lightning Bolt</a>)</li>
<li>Total cover blocks line-of-sight spells entirely</li>
<li>Some spells can curve around cover</li>
</ul>

<p><strong>Creating Cover:</strong></p>
<ul>
<li>Flip tables for half cover</li>
<li><a href="/spells/offensive/wall-of-fire-5e/">Wall</a> spells create cover</li>
<li>Pile up bodies (grim but effective)</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting cover applies to Dex saves too",
      "Not using other creatures as cover",
      "Forgetting ranged attackers can have cover too",
      "Thinking total cover blocks all spell effects (area spells still work)"
    ],
    dmTips: [
      "Describe terrain that provides cover",
      "Smart enemies use cover extensively",
      "+5 AC from three-quarters cover is huge",
      "Cover creates dynamic, tactical combat"
    ]
  },
  {
    slug: "damage-types-5e",
    name: "Damage Types",
    category: "core-mechanics",
    description: "D&D 5e has 13 damage types. Creatures may have resistances, immunities, or vulnerabilities to specific types.",
    searchVolume: 7800,
    sections: [
      {
        id: "physical-damage",
        title: "Physical Damage Types",
        content: `<p><strong>Bludgeoning:</strong></p>
<ul>
<li>Blunt force: maces, clubs, falling</li>
<li>Many creatures resist non-magical bludgeoning</li>
</ul>

<p><strong>Piercing:</strong></p>
<ul>
<li>Puncture wounds: arrows, spears, bites</li>
<li>Often resisted by same creatures as bludgeoning</li>
</ul>

<p><strong>Slashing:</strong></p>
<ul>
<li>Cuts: swords, axes, claws</li>
<li>The third "physical" damage type</li>
</ul>

<p><strong>Important Note:</strong> Many resistances/immunities specify "from nonmagical attacks." Magic weapons bypass this.</p>`
      },
      {
        id: "elemental-damage",
        title: "Elemental Damage Types",
        content: `<p><strong>Fire:</strong> Flames and heat. Very common damage type, but many creatures resist it.</p>

<p><strong>Cold:</strong> Freezing temperatures. Fewer resistances than fire.</p>

<p><strong>Lightning:</strong> Electrical damage. Relatively few resistances.</p>

<p><strong>Thunder:</strong> Sonic/concussive force. Often paired with forced movement.</p>

<p><strong>Acid:</strong> Corrosive damage. Can destroy objects.</p>

<p><strong>Poison:</strong> Toxic damage. MOST resisted/immune damage type. Many creatures immune.</p>`
      },
      {
        id: "special-damage",
        title: "Special Damage Types",
        content: `<p><strong>Radiant:</strong></p>
<ul>
<li>Holy/divine energy</li>
<li>Effective against undead and fiends</li>
<li>Very few creatures resist it</li>
</ul>

<p><strong>Necrotic:</strong></p>
<ul>
<li>Life-draining energy</li>
<li>Undead often immune</li>
<li>Can reduce max HP (some effects)</li>
</ul>

<p><strong>Force:</strong></p>
<ul>
<li>Pure magical energy (<a href="/spells/offensive/magic-missile-5e/">Magic Missile</a>, <a href="/spells/offensive/eldritch-blast-5e/">Eldritch Blast</a>)</li>
<li>NOTHING is resistant or immune to force damage</li>
<li>The most reliable damage type</li>
</ul>

<p><strong>Psychic:</strong></p>
<ul>
<li>Mental damage</li>
<li>Mindless creatures often immune</li>
<li>Bypasses most physical defenses</li>
</ul>`
      },
      {
        id: "resistance-vulnerability",
        title: "Resistances, Immunities, and Vulnerabilities",
        content: `<p><strong>Resistance:</strong></p>
<ul>
<li>Take half damage from that type</li>
<li>Applied after all other modifiers</li>
<li>Common: fire resistance on Tieflings</li>
</ul>

<p><strong>Immunity:</strong></p>
<ul>
<li>Take no damage from that type</li>
<li>Common: poison immunity on undead</li>
</ul>

<p><strong>Vulnerability:</strong></p>
<ul>
<li>Take double damage from that type</li>
<li>Rare in 5e</li>
<li>Example: Skeletons vulnerable to bludgeoning</li>
</ul>

<p><strong>Stacking:</strong></p>
<ul>
<li>Multiple resistances don't stack</li>
<li>Resistance + vulnerability = normal damage</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Thinking 'magical' is a damage type (it's not)",
      "Assuming poison damage is common (actually heavily resisted)",
      "Forgetting resistance halves damage AFTER modifiers",
      "Not checking monster stat blocks for resistances"
    ],
    dmTips: [
      "Force damage is king - nothing resists it",
      "Poison damage is often useless against many monster types",
      "Fire is common but widely resisted",
      "Let players learn resistances through trial and error"
    ]
  },
  {
    slug: "ability-checks-5e",
    name: "Ability Checks",
    category: "core-mechanics",
    description: "Ability checks determine success when attempting tasks that have a chance of failure. Roll d20 + ability modifier + proficiency (if applicable) vs. a Difficulty Class (DC).",
    searchVolume: 8400,
    sections: [
      {
        id: "overview",
        title: "How Ability Checks Work",
        content: `<p><strong>Formula:</strong> d20 + ability modifier + proficiency bonus (if proficient)</p>

<p>The DM sets a Difficulty Class (DC). If your total meets or exceeds the DC, you succeed.</p>

<table class="ref-table">
<thead><tr><th>DC</th><th>Difficulty</th></tr></thead>
<tbody>
<tr><td>5</td><td>Very Easy</td></tr>
<tr><td>10</td><td>Easy</td></tr>
<tr><td>15</td><td>Medium</td></tr>
<tr><td>20</td><td>Hard</td></tr>
<tr><td>25</td><td>Very Hard</td></tr>
<tr><td>30</td><td>Nearly Impossible</td></tr>
</tbody>
</table>`
      },
      {
        id: "skills",
        title: "Skills and Ability Checks",
        content: `<p>Skills represent specialized training in certain types of checks:</p>

<p><strong>Strength:</strong> Athletics</p>
<p><strong>Dexterity:</strong> Acrobatics, Sleight of Hand, Stealth</p>
<p><strong>Intelligence:</strong> Arcana, History, Investigation, Nature, Religion</p>
<p><strong>Wisdom:</strong> Animal Handling, Insight, Medicine, Perception, Survival</p>
<p><strong>Charisma:</strong> Deception, Intimidation, Performance, Persuasion</p>

<p><strong>Proficiency:</strong> If proficient in a skill, add your proficiency bonus. Otherwise, just add the ability modifier.</p>`
      },
      {
        id: "passive-checks",
        title: "Passive Checks",
        content: `<p><strong>Formula:</strong> 10 + ability modifier + proficiency bonus (if proficient)</p>

<p>Passive checks represent constant awareness or competence without actively trying.</p>

<p><strong>Common Uses:</strong></p>
<ul>
<li>Passive Perception: Noticing hidden creatures or traps</li>
<li>Passive Investigation: Spotting unusual details</li>
<li>Passive Insight: Sensing lies or emotions</li>
</ul>

<p><strong>Modifiers:</strong></p>
<ul>
<li><a href="/rules/core-mechanics/advantage-disadvantage-5e/">Advantage</a> on the check: +5 to passive</li>
<li><a href="/rules/core-mechanics/advantage-disadvantage-5e/">Disadvantage</a> on the check: -5 to passive</li>
</ul>`
      },
      {
        id: "contests",
        title: "Contested Checks",
        content: `<p>When two creatures oppose each other, both roll and compare totals.</p>

<p><strong>Examples:</strong></p>
<ul>
<li>Grappling: Athletics vs. Athletics or Acrobatics</li>
<li>Hiding: Stealth vs. Perception</li>
<li>Shoving: Athletics vs. Athletics or Acrobatics</li>
<li>Lying: Deception vs. Insight</li>
</ul>

<p><strong>Ties:</strong> The situation remains unchanged (defender wins).</p>`
      }
    ],
    commonMistakes: [
      "Rolling for trivial tasks that should auto-succeed",
      "Forgetting passive Perception exists",
      "Using the wrong ability for a skill check",
      "Calling for checks when failure isn't meaningful"
    ],
    dmTips: [
      "Only call for checks when failure is possible and interesting",
      "DC 15 is appropriate for most moderately difficult tasks",
      "Let players describe how they use skills creatively",
      "Use passive checks to keep the game flowing"
    ]
  },
  {
    slug: "grappling-5e",
    name: "Grappling & Shoving",
    category: "core-mechanics",
    description: "Grappling and shoving are special melee attacks that can restrain enemies or knock them prone. They use contested ability checks instead of attack rolls.",
    searchVolume: 6800,
    sections: [
      {
        id: "grappling",
        title: "How Grappling Works",
        content: `<p><strong>To Grapple:</strong></p>
<ul>
<li>Use the Attack action to make a grapple attempt</li>
<li>Replaces one of your attacks (if you have Extra Attack)</li>
<li>Target must be no more than one size larger than you</li>
<li>You need a free hand</li>
</ul>

<p><strong>The Contest:</strong></p>
<ul>
<li>Your Athletics check vs. target's Athletics OR Acrobatics (their choice)</li>
<li>If you win, the target is grappled</li>
</ul>

<p><strong>The <a href="/rules/conditions/grappled-condition-5e/">Grappled</a> Condition:</strong></p>
<ul>
<li>Target's speed becomes 0</li>
<li>No other penalties</li>
<li>You can move at half speed, dragging the target</li>
<li>Your attacks against them are NOT at advantage (unless you also shove them <a href="/rules/conditions/prone-condition-5e/">prone</a>)</li>
</ul>`
      },
      {
        id: "shoving",
        title: "How Shoving Works",
        content: `<p><strong>To Shove:</strong></p>
<ul>
<li>Use the Attack action to make a shove attempt</li>
<li>Replaces one of your attacks (if you have Extra Attack)</li>
<li>Target must be no more than one size larger than you</li>
</ul>

<p><strong>Choose One Effect:</strong></p>
<ul>
<li>Push target 5 feet away from you</li>
<li>Knock target <a href="/rules/conditions/prone-condition-5e/">prone</a></li>
</ul>

<p><strong>The Contest:</strong></p>
<ul>
<li>Your Athletics check vs. target's Athletics OR Acrobatics</li>
<li>If you win, the shove effect happens</li>
</ul>`
      },
      {
        id: "combos",
        title: "Grapple + Shove Combo",
        content: `<p><strong>The Classic Combo:</strong></p>
<ol>
<li>Grapple the target (first attack)</li>
<li>Shove them <a href="/rules/conditions/prone-condition-5e/">prone</a> (second attack with Extra Attack)</li>
</ol>

<p><strong>Why This Is Powerful:</strong></p>
<ul>
<li>Prone: Attacks from within 5 feet have <a href="/rules/core-mechanics/advantage-disadvantage-5e/">advantage</a></li>
<li>Grappled: Speed 0, so they can't stand up!</li>
<li>They're stuck on the ground while you and allies pummel them</li>
</ul>

<p><strong>Requirements:</strong></p>
<ul>
<li>Extra Attack (or bonus action grapple via <a href="/characters/classes/fighter-5e/">Grappler</a> feat)</li>
<li>Good Athletics modifier</li>
<li>Strength-based character</li>
</ul>`
      },
      {
        id: "escaping",
        title: "Escaping a Grapple",
        content: `<p><strong>To Escape:</strong></p>
<ul>
<li>Use your action to attempt escape</li>
<li>Your Athletics OR Acrobatics vs. grappler's Athletics</li>
<li>If you win, you escape (no longer grappled)</li>
</ul>

<p><strong>Other Ways to End Grapple:</strong></p>
<ul>
<li>Grappler is incapacitated</li>
<li>You're moved out of reach by an effect (not your own movement)</li>
<li>Teleportation spells</li>
<li>Grappler chooses to release you</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Thinking grappling gives you advantage on attacks (it doesn't alone)",
      "Forgetting you need a free hand to grapple",
      "Trying to grapple a creature more than one size larger",
      "Forgetting grappled creature's speed is 0, not just reduced"
    ],
    dmTips: [
      "Grapple+prone is a powerful martial combo - let it shine",
      "Monsters can grapple too - use it against players",
      "Athletics is underrated - reward players who invest in it",
      "Size matters - Large creatures are excellent grapplers"
    ]
  },
  {
    slug: "darkvision-light-5e",
    name: "Darkvision & Light",
    category: "core-mechanics",
    description: "Darkvision allows creatures to see in darkness, but with limitations. Understanding light and vision rules is important for stealth and exploration.",
    searchVolume: 7200,
    aliases: ["darkvision-5e", "light-5e"],
    sections: [
      {
        id: "light-levels",
        title: "Light Levels",
        content: `<p><strong>Bright Light:</strong></p>
<ul>
<li>Normal vision</li>
<li>No penalties</li>
<li>Sources: daylight, torches within radius, <a href="/spells/cantrips/light-5e/">Light</a> spell</li>
</ul>

<p><strong>Dim Light (Lightly Obscured):</strong></p>
<ul>
<li><a href="/rules/core-mechanics/advantage-disadvantage-5e/">Disadvantage</a> on Perception checks relying on sight</li>
<li>Shadows, twilight, torch's outer radius</li>
</ul>

<p><strong>Darkness (Heavily Obscured):</strong></p>
<ul>
<li>Effectively <a href="/rules/conditions/blinded-condition-5e/">blinded</a></li>
<li>Can't see anything</li>
<li>Auto-fail sight-based checks</li>
<li>Attacks against you have advantage, yours have disadvantage</li>
</ul>`
      },
      {
        id: "darkvision",
        title: "How Darkvision Works",
        content: `<p><strong>What Darkvision Does:</strong></p>
<ul>
<li>See in <strong>darkness</strong> as if it were <strong>dim light</strong> (within range)</li>
<li>See in <strong>dim light</strong> as if it were <strong>bright light</strong></li>
<li>Vision is in shades of gray (no color)</li>
</ul>

<p><strong>Range:</strong> Usually 60 feet (some races have 120 feet)</p>

<p><strong>Key Limitation:</strong></p>
<ul>
<li>Darkness becomes dim light, NOT bright light</li>
<li>Still have disadvantage on Perception checks in darkness</li>
<li>Enemies can still hide in darkness from you more easily</li>
</ul>

<p><strong>Races with Darkvision:</strong></p>
<ul>
<li><a href="/characters/races/dwarf-5e/">Dwarves</a>, <a href="/characters/races/elf-5e/">Elves</a>, <a href="/characters/races/gnome-5e/">Gnomes</a>, <a href="/characters/races/half-elf-5e/">Half-Elves</a>, <a href="/characters/races/half-orc-5e/">Half-Orcs</a>, <a href="/characters/races/tiefling-5e/">Tieflings</a></li>
<li><a href="/characters/races/human-5e/">Humans</a>, <a href="/characters/races/halfling-5e/">Halflings</a>, and <a href="/characters/races/dragonborn-5e/">Dragonborn</a> do NOT have darkvision</li>
</ul>`
      },
      {
        id: "special-vision",
        title: "Other Vision Types",
        content: `<p><strong>Superior Darkvision (120 ft):</strong></p>
<ul>
<li>Drow, Deep Gnomes, some subclasses</li>
<li>Works the same, just longer range</li>
</ul>

<p><strong>Blindsight:</strong></p>
<ul>
<li>Perceive surroundings without sight</li>
<li>Not affected by darkness or invisibility</li>
<li>Common on bats, oozes, some monsters</li>
</ul>

<p><strong>Truesight:</strong></p>
<ul>
<li>See in magical and normal darkness</li>
<li>See invisible creatures</li>
<li>Automatically detect illusions</li>
<li>Very rare (high-level spell effect)</li>
</ul>

<p><strong>Devil's Sight (<a href="/characters/classes/warlock-5e/">Warlock</a> invocation):</strong></p>
<ul>
<li>See normally in magical and nonmagical darkness</li>
<li>120-foot range</li>
<li>Combos well with Darkness spell</li>
</ul>`
      },
      {
        id: "light-spells",
        title: "Light Sources and Spells",
        content: `<p><strong>Common Light Sources:</strong></p>
<ul>
<li>Torch: 20 ft bright, 20 ft dim (lasts 1 hour)</li>
<li>Lantern: 30 ft bright, 30 ft dim</li>
<li><a href="/spells/cantrips/light-5e/">Light</a> cantrip: 20 ft bright, 20 ft dim</li>
<li>Dancing Lights: 10 ft dim each</li>
</ul>

<p><strong>Spells Affecting Light:</strong></p>
<ul>
<li>Darkness: Creates magical darkness (darkvision doesn't work)</li>
<li>Daylight: 60 ft bright light</li>
<li><a href="/spells/cantrips/dancing-lights-5e/">Dancing Lights</a>: Dim light only</li>
</ul>

<p><strong>Important:</strong> Darkness spell blocks normal darkvision. Only special abilities like Devil's Sight or Truesight can see through it.</p>`
      }
    ],
    commonMistakes: [
      "Thinking darkvision lets you see normally in darkness (it's still dim light)",
      "Forgetting darkvision is grayscale only",
      "Assuming all races have darkvision",
      "Not knowing Darkness spell blocks normal darkvision"
    ],
    dmTips: [
      "Darkvision doesn't mean light sources are useless",
      "Use darkness tactically against darkvision-heavy parties",
      "Remember Perception disadvantage in dim light (even with darkvision in darkness)",
      "Characters without darkvision should matter sometimes"
    ]
  }
];
