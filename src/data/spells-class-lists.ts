export type SpellListPage = {
  slug: string;
  name: string;
  className: string;
  description: string;
  castingStat: string;
  spellListType: string;
  prepareFormula: string;
  ritualCasting: boolean;
  cantripsKnown: string;
  keySpells: { name: string; level: string; why: string }[];
  uniqueMechanic: string;
  commonMistakes: string[];
  dmTips: string[];
  category: "class-spell-lists";
  searchVolume: number;
};

export const classSpellLists: SpellListPage[] = [
  {
    slug: "5e-cleric-spells",
    name: "Cleric Spell List — D&D 5e",
    className: "Cleric",
    description: "Clerics are divine spellcasters who channel the power of their deity to heal allies, protect the faithful, and smite enemies. They have access to the entire cleric spell list and prepare a selection each day. Domain spells grant additional always-prepared spells based on their divine domain.",
    castingStat: "Wisdom",
    spellListType: "prepared",
    prepareFormula: "Wisdom modifier + cleric level",
    ritualCasting: true,
    cantripsKnown: "3 at 1st level, increasing to 5 at 10th level",
    keySpells: [
      {
        name: "Healing Word",
        level: "1st",
        why: "Bonus action ranged healing that can save dying allies from a distance"
      },
      {
        name: "Bless",
        level: "1st",
        why: "One of the best 1st-level buffs, adding 1d4 to attacks and saves for 3 targets"
      },
      {
        name: "Spiritual Weapon",
        level: "2nd",
        why: "Bonus action attack every turn with no concentration, excellent action economy"
      },
      {
        name: "Spirit Guardians",
        level: "3rd",
        why: "Powerful concentration AoE that slows enemies and deals constant damage"
      },
      {
        name: "Revivify",
        level: "3rd",
        why: "Brings dead allies back to life within 1 minute, requires 300gp diamond"
      },
      {
        name: "Death Ward",
        level: "4th",
        why: "Prevents the next instance of dropping to 0 HP, no concentration needed"
      },
      {
        name: "Greater Restoration",
        level: "5th",
        why: "Removes debilitating conditions like petrification and level reduction"
      },
      {
        name: "Heal",
        level: "6th",
        why: "Restores 70 HP as an action, the best emergency healing spell in the game"
      },
      {
        name: "Guidance",
        level: "Cantrip",
        why: "Add 1d4 to any ability check, spam it before skill checks for huge value"
      },
      {
        name: "Sacred Flame",
        level: "Cantrip",
        why: "Dexterity save cantrip that ignores cover, reliable damage option"
      }
    ],
    uniqueMechanic: "Domain spells are always prepared and don't count against your prepared spell limit. Clerics can also prepare spells with the ritual tag and cast them as rituals even if not prepared.",
    commonMistakes: [
      "Forgetting that domain spells are ALWAYS prepared - you don't choose them during daily prep",
      "Not using bonus action spells like Healing Word and Spiritual Weapon together effectively",
      "Wasting concentration on Lesser Restoration when it doesn't require concentration",
      "Attempting to cast two leveled spells in one turn when using bonus action spells",
      "Not ritually casting Detect Magic or Ceremony to preserve spell slots"
    ],
    dmTips: [
      "Clerics can change their prepared spells after a long rest - let players adjust for the adventure ahead",
      "Domain spells are thematic - use story hooks that reward clerics for leaning into their domain",
      "The 300gp material component for Revivify is consumed - track diamond availability in your world",
      "Spirit Guardians is very powerful in confined spaces - design tactical combat areas accordingly",
      "Clerics get Divine Intervention at 10th level - prepare for potential campaign-altering moments"
    ],
    category: "class-spell-lists",
    searchVolume: 6510
  },
  {
    slug: "5e-wizard-spells",
    name: "Wizard Spell List — D&D 5e",
    className: "Wizard",
    description: "Wizards are arcane scholars with the largest spell list in D&D 5e, mastering reality through study and intellect. They prepare spells from their spellbook each day and can learn new spells by copying them from scrolls and other spellbooks. Their versatility and raw magical power make them the ultimate spellcasters.",
    castingStat: "Intelligence",
    spellListType: "prepared",
    prepareFormula: "Intelligence modifier + wizard level",
    ritualCasting: true,
    cantripsKnown: "3 at 1st level, increasing to 5 at 10th level",
    keySpells: [
      {
        name: "Find Familiar",
        level: "1st",
        why: "Summons a familiar for scouting, delivering touch spells, and advantage through Help action"
      },
      {
        name: "Shield",
        level: "1st",
        why: "Reaction spell granting +5 AC until your next turn, can turn hits into misses"
      },
      {
        name: "Misty Step",
        level: "2nd",
        why: "Bonus action teleport 30ft, incredible mobility and escape tool"
      },
      {
        name: "Counterspell",
        level: "3rd",
        why: "Reaction to stop enemy spells, essential for high-level play"
      },
      {
        name: "Fireball",
        level: "3rd",
        why: "Iconic AoE damage spell hitting 20ft radius for 8d6 fire damage"
      },
      {
        name: "Hypnotic Pattern",
        level: "3rd",
        why: "Incapacitates multiple enemies with no repeated saves, concentration control spell"
      },
      {
        name: "Polymorph",
        level: "4th",
        why: "Transform ally into Giant Ape for temp HP or enemy into turtle to disable them"
      },
      {
        name: "Wall of Force",
        level: "5th",
        why: "Impenetrable wall that doesn't allow saves, no concentration, splits battlefield"
      },
      {
        name: "Minor Illusion",
        level: "Cantrip",
        why: "Create sound or image, limited only by creativity for utility and tactics"
      },
      {
        name: "Prestidigitation",
        level: "Cantrip",
        why: "Swiss army knife of minor magical effects for utility and roleplay"
      }
    ],
    uniqueMechanic: "Wizards learn new spells by copying them into their spellbook (50gp and 2 hours per spell level). They can cast any spell in their spellbook as a ritual without preparing it if it has the ritual tag. Arcane Recovery lets them recover spell slots once per day during a short rest (total spell levels = half wizard level rounded up).",
    commonMistakes: [
      "Not copying spells from scrolls and captured spellbooks - wizards should actively hunt for new spells",
      "Forgetting Arcane Recovery during short rests - it's once per long rest, so use it",
      "Preparing too many damage spells and not enough control/utility options",
      "Using concentration spells when you already have a better concentration spell active",
      "Not ritually casting Detect Magic, Alarm, or Comprehend Languages to preserve slots",
      "Forgetting that you can cast ritual spells from your spellbook without preparing them"
    ],
    dmTips: [
      "Place spell scrolls and enemy spellbooks as treasure to reward wizard investment in their class",
      "High-level wizards with Counterspell create magical duels - prepare interesting spell interactions",
      "Wall of Force has no saving throw and blocks everything except teleportation - plan enemy counters",
      "Wizards with Find Familiar can scout extensively - design areas with anti-scrying or familiar-resistant threats",
      "Simulacrum and Clone at high levels can break campaigns - establish world rules for these spells early"
    ],
    category: "class-spell-lists",
    searchVolume: 35110
  },
  {
    slug: "bard-spells-5e",
    name: "Bard Spell List — D&D 5e",
    className: "Bard",
    description: "Bards are charismatic spellcasters who weave magic through music, words, and performance. They know a limited selection of spells but can cast any spell they know without preparation. Bards excel at support, control, and utility magic, and their Magical Secrets feature allows them to steal spells from any class.",
    castingStat: "Charisma",
    spellListType: "known",
    prepareFormula: "N/A - Bards know a fixed number of spells and can cast any known spell",
    ritualCasting: true,
    cantripsKnown: "2 at 1st level, increasing to 4 at 10th level",
    keySpells: [
      {
        name: "Healing Word",
        level: "1st",
        why: "Bonus action ranged healing to revive fallen allies from a distance"
      },
      {
        name: "Faerie Fire",
        level: "1st",
        why: "Grant advantage on attacks against multiple enemies, excellent support spell"
      },
      {
        name: "Heat Metal",
        level: "2nd",
        why: "Forces armored enemies to drop weapons or take damage with disadvantage on attacks"
      },
      {
        name: "Hypnotic Pattern",
        level: "3rd",
        why: "Incapacitate multiple enemies, one of the best crowd control spells in the game"
      },
      {
        name: "Polymorph",
        level: "4th",
        why: "Versatile transformation spell for massive temp HP or disabling enemies"
      },
      {
        name: "Greater Invisibility",
        level: "4th",
        why: "Invisibility that doesn't break on attacks, enables powerful offensive strategies"
      },
      {
        name: "Mass Cure Wounds",
        level: "5th",
        why: "Heal multiple allies at once, valuable group healing option"
      },
      {
        name: "Counterspell",
        level: "3rd (via Magical Secrets)",
        why: "Not normally on bard list, but essential for high-level play - grab it early"
      },
      {
        name: "Vicious Mockery",
        level: "Cantrip",
        why: "Damage plus disadvantage on next attack as a cantrip, excellent debuff"
      },
      {
        name: "Minor Illusion",
        level: "Cantrip",
        why: "Creative utility and tactical options through sound or visual illusions"
      }
    ],
    uniqueMechanic: "Magical Secrets lets bards learn spells from any class spell list at 10th, 14th, and 18th level (some subclasses get more). This makes bards incredibly versatile. Bards also provide Bardic Inspiration dice to allies, and Jack of All Trades adds half proficiency to all ability checks.",
    commonMistakes: [
      "Choosing spells you can't swap easily - bards only change ONE spell per level, so choose carefully",
      "Not using Magical Secrets for powerful spells from other classes like Counterspell or Find Greater Steed",
      "Wasting concentration on low-impact spells when Hypnotic Pattern or Faerie Fire would be better",
      "Forgetting that ritual casting only works for KNOWN spells with the ritual tag, unlike clerics/wizards",
      "Overlooking non-combat spells like Enhance Ability and Comprehend Languages that shine in social encounters"
    ],
    dmTips: [
      "Bards thrive in social encounters - create NPCs, negotiations, and intrigue for them to shine",
      "Magical Secrets can poach game-changing spells - discuss power level expectations with players",
      "Heat Metal is devastating against armored foes in extended combat - balance encounter design",
      "Bards make excellent party faces - give them information-gathering and diplomacy opportunities",
      "College of Lore gets extra Magical Secrets at 6th level - prepare for early access to powerful spells"
    ],
    category: "class-spell-lists",
    searchVolume: 1550
  },
  {
    slug: "druid-spells-5e",
    name: "Druid Spell List — D&D 5e",
    className: "Druid",
    description: "Druids are primal spellcasters who draw magic from nature itself, commanding the elements, beasts, and plants. They prepare spells from the druid spell list each day and have excellent control, healing, and battlefield manipulation options. Wild Shape gives druids incredible versatility beyond spellcasting.",
    castingStat: "Wisdom",
    spellListType: "prepared",
    prepareFormula: "Wisdom modifier + druid level",
    ritualCasting: true,
    cantripsKnown: "2 at 1st level, increasing to 4 at 10th level",
    keySpells: [
      {
        name: "Goodberry",
        level: "1st",
        why: "Creates 10 berries that each restore 1 HP, incredible out-of-combat healing efficiency"
      },
      {
        name: "Entangle",
        level: "1st",
        why: "Restrains multiple enemies in an area with repeated saves, strong 1st-level control"
      },
      {
        name: "Healing Word",
        level: "1st",
        why: "Bonus action ranged healing to save dying allies without using your main action"
      },
      {
        name: "Pass Without Trace",
        level: "2nd",
        why: "Grant +10 to Stealth for the whole party, enabling ambushes and infiltration"
      },
      {
        name: "Heat Metal",
        level: "2nd",
        why: "Bonus action damage forcing armored enemies to drop items or suffer disadvantage"
      },
      {
        name: "Conjure Animals",
        level: "3rd",
        why: "Summon 8 beasts for action economy advantage, though DM chooses specific animals"
      },
      {
        name: "Call Lightning",
        level: "3rd",
        why: "Concentration AoE damage you can use every turn as a bonus action, very efficient"
      },
      {
        name: "Polymorph",
        level: "4th",
        why: "Transform for utility, massive temp HP buffer, or disable dangerous enemies"
      },
      {
        name: "Guidance",
        level: "Cantrip",
        why: "Add 1d4 to ability checks, spam this before any skill check for big value"
      },
      {
        name: "Produce Flame",
        level: "Cantrip",
        why: "Ranged attack cantrip that also provides light, good utility damage option"
      }
    ],
    uniqueMechanic: "Druids can ritual cast any prepared spell with the ritual tag. Wild Shape allows transformation into beasts, providing combat utility, scouting, and creative problem-solving. Circle of the Land druids get Natural Recovery to regain spell slots during short rest. Druids traditionally won't wear metal armor.",
    commonMistakes: [
      "Forgetting that Conjure Animals gives the DM choice of specific creatures, not the player",
      "Not combining Wild Shape scouting with spellcasting - you can't cast in beast form until high levels",
      "Wasting concentration on minor spells when Pass Without Trace or Call Lightning would be better",
      "Not preparing situational spells like Water Breathing or Plant Growth that solve specific challenges",
      "Overlooking ritual casting for Detect Magic, Speak with Animals, and other utility spells",
      "Casting Goodberry during combat instead of before adventuring - it's pre-combat preparation"
    ],
    dmTips: [
      "Conjure Animals summons can slow combat - discuss expectations about summon management",
      "Pass Without Trace makes stealth checks trivial for most parties - design around it or challenge it",
      "Druids have answers for many environmental challenges - create nature-based obstacles they can solve",
      "Wild Shape scouting is powerful - prepare for creative reconnaissance and infiltration",
      "Heat Metal has no save after initial casting - armored enemies might need to retreat or adapt"
    ],
    category: "class-spell-lists",
    searchVolume: 550
  },
  {
    slug: "paladin-spells-5e",
    name: "Paladin Spell List — D&D 5e",
    className: "Paladin",
    description: "Paladins are half-casters who blend martial prowess with divine magic, channeling their sacred oaths into powerful support and smiting spells. They prepare a small number of spells each day from the paladin spell list. Divine Smite, while not a spell, is their signature feature for burst damage.",
    castingStat: "Charisma",
    spellListType: "prepared",
    prepareFormula: "Charisma modifier + half paladin level (rounded down)",
    ritualCasting: false,
    cantripsKnown: "0 - Paladins do not learn cantrips",
    keySpells: [
      {
        name: "Bless",
        level: "1st",
        why: "Add 1d4 to attacks and saves for 3 allies, excellent use of concentration"
      },
      {
        name: "Shield of Faith",
        level: "1st",
        why: "Bonus action to grant +2 AC to yourself or an ally, strong defensive buff"
      },
      {
        name: "Find Steed",
        level: "2nd",
        why: "Summon a permanent loyal mount with shared spells, no concentration needed"
      },
      {
        name: "Aid",
        level: "2nd",
        why: "Increase max HP for 3 targets for 8 hours, no concentration, great pre-combat buff"
      },
      {
        name: "Lesser Restoration",
        level: "2nd",
        why: "Remove disease or conditions like paralyzed/poisoned, essential utility"
      },
      {
        name: "Aura of Vitality",
        level: "3rd",
        why: "Heal 2d6 as a bonus action for 1 minute, incredible out-of-combat healing efficiency"
      },
      {
        name: "Revivify",
        level: "3rd",
        why: "Bring dead allies back within 1 minute, requires consumed 300gp diamond"
      },
      {
        name: "Death Ward",
        level: "4th",
        why: "Prevent next drop to 0 HP, last 8 hours with no concentration"
      },
      {
        name: "Find Greater Steed",
        level: "4th (via Oath feature)",
        why: "Summon powerful mount like griffon or pegasus, massive upgrade to Find Steed"
      },
      {
        name: "Dispel Magic",
        level: "3rd",
        why: "End magical effects, essential utility for handling enemy buffs and hazards"
      }
    ],
    uniqueMechanic: "Divine Smite lets paladins expend spell slots to deal 2d8 radiant damage (+1d8 per spell level above 1st) on weapon hits, maxing at 5d8 (6d8 vs undead/fiends). Oath spells are always prepared and don't count against prepared limit. Paladins provide powerful auras to nearby allies starting at 6th level.",
    commonMistakes: [
      "Burning all spell slots on Divine Smite early in the day - save some for key utility spells",
      "Not using Find Steed for shared spell buffs - your mount benefits from your aura and spells",
      "Forgetting oath spells are ALWAYS prepared - they don't count against your preparation limit",
      "Wasting concentration on Shield of Faith when Bless helps the entire party more",
      "Not using Lay on Hands for healing and saving slots for smites - LoH is extremely efficient",
      "Attempting to cast spells while wielding shield and weapon without War Caster or component pouch"
    ],
    dmTips: [
      "Paladins have limited spell slots - encounters between rests tax their resources effectively",
      "Divine Smite can be declared AFTER seeing the attack roll - critical hits become devastating",
      "Find Greater Steed provides flying mounts - design vertical combat and aerial challenges",
      "Paladin auras are extremely powerful for allies - enemies should target paladins first",
      "Oath spell lists vary significantly by subclass - review player choices for power level",
      "Revivify's diamond component should be tracked - control availability for resurrection balance"
    ],
    category: "class-spell-lists",
    searchVolume: 9920
  },
  {
    slug: "ranger-spells-5e",
    name: "Ranger Spell List — D&D 5e",
    className: "Ranger",
    description: "Rangers are half-casters who blend martial combat with nature magic, specializing in tracking, survival, and fighting favored enemies. They know a limited selection of spells and can cast any known spell without preparation. Rangers excel at utility and mobility magic that enhances their exploration and combat effectiveness.",
    castingStat: "Wisdom",
    spellListType: "known",
    prepareFormula: "N/A - Rangers know a fixed number of spells and can cast any known spell",
    ritualCasting: false,
    cantripsKnown: "0 - Rangers do not learn cantrips",
    keySpells: [
      {
        name: "Hunter's Mark",
        level: "1st",
        why: "Extra 1d6 damage per hit plus tracking, though competes with other concentration spells"
      },
      {
        name: "Goodberry",
        level: "1st",
        why: "Create 10 berries healing 1 HP each, extremely efficient out-of-combat healing"
      },
      {
        name: "Absorb Elements",
        level: "1st",
        why: "Reaction to halve elemental damage and add it to your next melee attack"
      },
      {
        name: "Pass Without Trace",
        level: "2nd",
        why: "Grant entire party +10 Stealth, one of the best infiltration spells in the game"
      },
      {
        name: "Spike Growth",
        level: "2nd",
        why: "Difficult terrain dealing 2d4 damage per 5ft moved, excellent area denial"
      },
      {
        name: "Conjure Animals",
        level: "3rd",
        why: "Summon beasts for action economy, though DM chooses specific creatures"
      },
      {
        name: "Lightning Arrow",
        level: "3rd",
        why: "Turn one attack into AoE damage, good for clustered enemies"
      },
      {
        name: "Guardian of Nature",
        level: "4th",
        why: "Self-buff for advantage on attacks or tanking, excellent concentration option"
      },
      {
        name: "Conjure Woodland Beings",
        level: "4th",
        why: "Summon fey creatures including potentially powerful pixies (DM discretion)"
      },
      {
        name: "Swift Quiver",
        level: "5th",
        why: "Make 2 extra weapon attacks as bonus action, incredible for archers"
      }
    ],
    uniqueMechanic: "Rangers learn additional spells from their subclass (Ranger Conclave) that are always known and don't count against spells known. Rangers are skill experts with Expertise in certain skills (in Tasha's variant), and can use Primeval Awareness or Nature's Veil depending on features chosen.",
    commonMistakes: [
      "Overvaluing Hunter's Mark - it's good but not always better than other concentration spells",
      "Not swapping spells strategically - you can change one spell per level during long rest",
      "Forgetting that you can't ritual cast spells unlike clerics/druids - choose spells wisely",
      "Casting Conjure Animals in combat without knowing it slows down turns - discuss with DM first",
      "Not using utility spells like Pass Without Trace, Goodberry, and Absorb Elements enough",
      "Ignoring subclass spells when planning known spells - they're free additions to your list"
    ],
    dmTips: [
      "Rangers struggle in dungeon-heavy campaigns - include exploration and tracking challenges",
      "Pass Without Trace trivializes stealth for most parties - plan around or counter it occasionally",
      "Conjure spells give DM choice of creatures - establish expectations about summon power level",
      "Hunter's Mark requires bonus action each turn to switch - fast-moving combat reduces its value",
      "Tasha's Optional Features significantly improved rangers - discuss whether they're allowed",
      "Rangers have limited spells known - treasure spell scrolls are less useful than for wizards"
    ],
    category: "class-spell-lists",
    searchVolume: 340
  },
  {
    slug: "sorcerer-spells-5e",
    name: "Sorcerer Spell List — D&D 5e",
    className: "Sorcerer",
    description: "Sorcerers are innate spellcasters whose magic comes from bloodlines, cosmic forces, or magical accidents. They know fewer spells than wizards but can manipulate them using Metamagic for incredible flexibility. Sorcerers share most of their spell list with wizards but cannot ritual cast or change spells easily.",
    castingStat: "Charisma",
    spellListType: "known",
    prepareFormula: "N/A - Sorcerers know a fixed number of spells and can cast any known spell",
    ritualCasting: false,
    cantripsKnown: "4 at 1st level, increasing to 6 at 10th level",
    keySpells: [
      {
        name: "Shield",
        level: "1st",
        why: "Reaction for +5 AC, essential survival tool for low-AC sorcerers"
      },
      {
        name: "Mage Armor",
        level: "1st",
        why: "13 + Dex AC for 8 hours, necessary if you don't have armor proficiency"
      },
      {
        name: "Misty Step",
        level: "2nd",
        why: "Bonus action teleport, excellent mobility and escape combined with Metamagic"
      },
      {
        name: "Counterspell",
        level: "3rd",
        why: "Reaction to stop enemy spells, can be Subtle Spelled to be uncounterable"
      },
      {
        name: "Fireball",
        level: "3rd",
        why: "Iconic AoE damage, can Careful Spell to protect allies in the blast"
      },
      {
        name: "Hypnotic Pattern",
        level: "3rd",
        why: "Incapacitate multiple enemies, one of the best crowd control options"
      },
      {
        name: "Haste",
        level: "3rd",
        why: "Double movement, +2 AC, extra attack for martials, Twinned for 2 targets"
      },
      {
        name: "Polymorph",
        level: "4th",
        why: "Versatile transformation, can be Twinned for 2 Giant Apes"
      },
      {
        name: "Fire Bolt",
        level: "Cantrip",
        why: "Reliable ranged damage cantrip, 1d10 scaling to 4d10 at high levels"
      },
      {
        name: "Mind Sliver",
        level: "Cantrip",
        why: "Psychic damage plus -1d4 to next save, excellent setup for big spells"
      }
    ],
    uniqueMechanic: "Metamagic lets sorcerers modify spells using Sorcery Points: Quicken (cast as bonus action), Twin (target 2 creatures), Subtle (no components), Heighten (impose disadvantage on saves), Careful (allies auto-succeed), and more. Font of Magic converts spell slots to Sorcery Points and vice versa.",
    commonMistakes: [
      "Not learning Subtle Spell - it makes social casting and Counterspell wars unbeatable",
      "Choosing too many spells when you have very limited spells known - every choice matters critically",
      "Forgetting you can't ritual cast unlike wizards - don't pick Detect Magic or Find Familiar",
      "Not converting spell slots to Sorcery Points during short rests - Font of Magic is your flexibility",
      "Wasting Twinned Spell on spells that don't benefit from targeting 2 creatures",
      "Quickening spells without understanding bonus action spell restrictions (only cantrips as action)"
    ],
    dmTips: [
      "Subtle Spell breaks social encounters - NPCs can't detect spellcasting, plan accordingly",
      "Twinned Haste or Polymorph can create very powerful turns - balance encounters for nova potential",
      "Sorcerers have limited spells known - avoid giving spell scrolls they can't use as treasure",
      "Quickened Spell allows cantrip + spell in one turn - understand the action economy advantage",
      "Divine Soul and Clockwork Soul get expanded spell lists - review for power level concerns",
      "Sorcery Points are limited - encounters between short rests drain their best resource"
    ],
    category: "class-spell-lists",
    searchVolume: 610
  },
  {
    slug: "warlock-spells-5e",
    name: "Warlock Spell List — D&D 5e",
    className: "Warlock",
    description: "Warlocks are arcane spellcasters who forge pacts with powerful otherworldly entities for magical power. They have the fewest spell slots of any caster, but regain them on short rests and cast all spells at their highest available level. Eldritch Invocations and Pact Boons give warlocks incredible customization.",
    castingStat: "Charisma",
    spellListType: "known",
    prepareFormula: "N/A - Warlocks know a fixed number of spells and can cast any known spell",
    ritualCasting: false,
    cantripsKnown: "2 at 1st level, increasing to 4 at 10th level",
    keySpells: [
      {
        name: "Hex",
        level: "1st",
        why: "Extra 1d6 damage per hit plus disadvantage on ability checks, lasts 8 hours at higher levels"
      },
      {
        name: "Armor of Agathys",
        level: "1st",
        why: "Temp HP that deals cold damage to attackers, scales excellently with higher slots"
      },
      {
        name: "Darkness",
        level: "2nd",
        why: "Create magical darkness, combined with Devil's Sight for advantage on all attacks"
      },
      {
        name: "Invisibility",
        level: "2nd",
        why: "Turn invisible for utility, lasts 1 hour when upcast with warlock slots"
      },
      {
        name: "Hypnotic Pattern",
        level: "3rd",
        why: "Incapacitate multiple enemies, excellent crowd control with no repeated saves"
      },
      {
        name: "Counterspell",
        level: "3rd",
        why: "Stop enemy spells as reaction, though limited by few spell slots"
      },
      {
        name: "Hunger of Hadar",
        level: "3rd",
        why: "AoE difficult terrain that blinds and damages, excellent area denial"
      },
      {
        name: "Dimension Door",
        level: "4th",
        why: "Teleport 500ft with a passenger, incredible mobility and escape tool"
      },
      {
        name: "Eldritch Blast",
        level: "Cantrip",
        why: "The warlock's bread and butter - with Agonizing Blast it's the best damage cantrip"
      },
      {
        name: "Mind Sliver",
        level: "Cantrip",
        why: "Reduce saves by 1d4 to set up your limited spell slots for maximum impact"
      }
    ],
    uniqueMechanic: "Pact Magic gives warlocks only 2-4 spell slots that recharge on short rests, but all spells are cast at the highest slot level. Eldritch Invocations provide always-on abilities and spell-like effects. Mystic Arcanum grants one 6th-9th level spell each that recharges on long rest.",
    commonMistakes: [
      "Not taking Agonizing Blast invocation - it makes Eldritch Blast your primary damage source",
      "Choosing too many spells that require concentration when you have so few slots to use them",
      "Forgetting that spell slots recharge on SHORT rests - warlocks excel in multiple encounters per day",
      "Not using Eldritch Blast every turn when you have limited spell slots for other spells",
      "Picking ritual spells like Detect Magic when you can't ritual cast without Book of Ancient Secrets",
      "Wasting invocation choices on situational effects instead of always-useful options"
    ],
    dmTips: [
      "Warlocks thrive with multiple short rests per day - design adventuring days with 2-3 short rests",
      "Eldritch Blast with invocations is extremely consistent damage - balance around it as baseline",
      "Darkness + Devil's Sight combo can trivialize combat - use enemies with Blindsight or Tremorsense",
      "Hexblade dip is extremely powerful for multiclassing - discuss with players if this is allowed",
      "Mystic Arcanum limits high-level casting to once per day - plan climactic encounters accordingly",
      "Pact of the Chain familiars can scout and turn invisible - prepare for extensive reconnaissance"
    ],
    category: "class-spell-lists",
    searchVolume: 110
  },
  {
    slug: "wizard-spells-5e",
    name: "Wizard Spell List — D&D 5e",
    className: "Wizard",
    description: "Wizards are arcane scholars with the largest spell list in D&D 5e, mastering reality through study and intellect. They prepare spells from their spellbook each day and can learn new spells by copying them from scrolls and other spellbooks. Their versatility and raw magical power make them the ultimate spellcasters.",
    castingStat: "Intelligence",
    spellListType: "prepared",
    prepareFormula: "Intelligence modifier + wizard level",
    ritualCasting: true,
    cantripsKnown: "3 at 1st level, increasing to 5 at 10th level",
    keySpells: [
      {
        name: "Find Familiar",
        level: "1st",
        why: "Summons a familiar for scouting, delivering touch spells, and advantage through Help action"
      },
      {
        name: "Shield",
        level: "1st",
        why: "Reaction spell granting +5 AC until your next turn, can turn hits into misses"
      },
      {
        name: "Misty Step",
        level: "2nd",
        why: "Bonus action teleport 30ft, incredible mobility and escape tool"
      },
      {
        name: "Counterspell",
        level: "3rd",
        why: "Reaction to stop enemy spells, essential for high-level play"
      },
      {
        name: "Fireball",
        level: "3rd",
        why: "Iconic AoE damage spell hitting 20ft radius for 8d6 fire damage"
      },
      {
        name: "Hypnotic Pattern",
        level: "3rd",
        why: "Incapacitates multiple enemies with no repeated saves, concentration control spell"
      },
      {
        name: "Polymorph",
        level: "4th",
        why: "Transform ally into Giant Ape for temp HP or enemy into turtle to disable them"
      },
      {
        name: "Wall of Force",
        level: "5th",
        why: "Impenetrable wall that doesn't allow saves, no concentration, splits battlefield"
      },
      {
        name: "Minor Illusion",
        level: "Cantrip",
        why: "Create sound or image, limited only by creativity for utility and tactics"
      },
      {
        name: "Prestidigitation",
        level: "Cantrip",
        why: "Swiss army knife of minor magical effects for utility and roleplay"
      }
    ],
    uniqueMechanic: "Wizards learn new spells by copying them into their spellbook (50gp and 2 hours per spell level). They can cast any spell in their spellbook as a ritual without preparing it if it has the ritual tag. Arcane Recovery lets them recover spell slots once per day during a short rest (total spell levels = half wizard level rounded up).",
    commonMistakes: [
      "Not copying spells from scrolls and captured spellbooks - wizards should actively hunt for new spells",
      "Forgetting Arcane Recovery during short rests - it's once per long rest, so use it",
      "Preparing too many damage spells and not enough control/utility options",
      "Using concentration spells when you already have a better concentration spell active",
      "Not ritually casting Detect Magic, Alarm, or Comprehend Languages to preserve slots",
      "Forgetting that you can cast ritual spells from your spellbook without preparing them"
    ],
    dmTips: [
      "Place spell scrolls and enemy spellbooks as treasure to reward wizard investment in their class",
      "High-level wizards with Counterspell create magical duels - prepare interesting spell interactions",
      "Wall of Force has no saving throw and blocks everything except teleportation - plan enemy counters",
      "Wizards with Find Familiar can scout extensively - design areas with anti-scrying or familiar-resistant threats",
      "Simulacrum and Clone at high levels can break campaigns - establish world rules for these spells early"
    ],
    category: "class-spell-lists",
    searchVolume: 710
  }
];
