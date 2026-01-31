/**
 * Additional Character Options Data
 * Includes feats, combat maneuvers, character creation tools, and redirects
 */

export type FeatPage = {
  slug: string;
  name: string;
  category: "feats";
  description: string;
  prerequisite: string | null;
  benefit: string;
  mechanics: string;
  synergies: string[];
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
  aliases?: string[];
};

export type FeatOverviewPage = {
  slug: string;
  name: string;
  category: "feats";
  description: string;
  sections: { id: string; title: string; content: string }[];
  searchVolume: number;
  aliases?: string[];
};

export type CombatManeuverPage = {
  slug: string;
  name: string;
  category: "feats";
  description: string;
  rules: { step: string; detail: string }[];
  commonMistakes: string[];
  dmTips: string[];
  searchVolume: number;
};

export type CreationToolPage = {
  slug: string;
  name: string;
  category: "creation";
  description: string;
  tool?: "pointBuy" | "statRoller" | "standardArray";
  sections: { id: string; title: string; content: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  faq?: { question: string; answer: string }[];
  searchVolume: number;
};

export type RedirectEntry = {
  slug: string;
  redirectTo: string;
  category: string;
  searchVolume: number;
};

export type ClassFeaturePage = {
  slug: string;
  name: string;
  category: "classes";
  className: string;
  featureLevel: string;
  description: string;
  sections: { id: string; title: string; content: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  searchVolume: number;
};

// =============================================================================
// FEAT OVERVIEW
// =============================================================================

export const featOverview: FeatOverviewPage = {
  slug: "dnd-feats",
  name: "D&D 5e Feats",
  category: "feats",
  description: "Complete guide to feats in D&D 5e. Learn how feats work, when to take them instead of ability score improvements, and browse popular feat choices for every build.",
  searchVolume: 11490,
  aliases: ["feats-5e"],
  sections: [
    {
      id: "what-are-feats",
      title: "What Are Feats?",
      content: `Feats are optional character customization options that provide special abilities, bonuses, or features. They represent specialized training or natural talents that set your character apart.

**Key Points:**
- Feats are an optional rule (PHB Chapter 6)
- Most campaigns allow feats - check with your DM
- You gain feats at certain levels instead of Ability Score Improvements
- Some feats have prerequisites (ability scores, race, or class features)
- Each feat can only be taken once unless stated otherwise`
    },
    {
      id: "when-to-take-feats",
      title: "When Can You Take Feats?",
      content: `You can choose a feat instead of an Ability Score Improvement at these levels:

**Standard Classes:**
- Levels 4, 8, 12, 16, and 19

**Fighter:**
- Levels 4, 6, 8, 12, 14, 16, and 19 (gets extra ASIs)

**Rogue:**
- Levels 4, 8, 10, 12, 16, and 19 (extra ASI at 10th level)

**Variant Human:**
- Start with one feat at 1st level

**Custom Lineage (Tasha's):**
- Start with one feat at 1st level`
    },
    {
      id: "feat-vs-asi",
      title: "Feat vs Ability Score Improvement?",
      content: `Choosing between a feat and a +2 to ability scores is one of the most important decisions in 5e.

**Take an ASI if:**
- Your primary ability score is below 18 or 20
- You're a spellcaster who needs spell save DC/attack bonus
- Your build depends heavily on a specific ability modifier
- You're at lower levels (4-8) and need fundamental capability

**Take a Feat if:**
- Your primary score is already 18+ or capped at 20
- The feat directly enables your character concept
- The feat provides significant tactical options (PAM, GWM, Sharpshooter, Sentinel)
- You need a specific capability your class lacks
- The feat includes a half-feat bonus that rounds up an odd ability score

**Popular Half-Feats** (give +1 to an ability score):
- Resilient: +1 to any ability score + proficiency in that save
- Skill Expert: +1 to any ability score + expertise in a skill
- Fey Touched: +1 INT/WIS/CHA + two spells
- Shadow Touched: +1 INT/WIS/CHA + two spells
- Observant: +1 INT or WIS + passive Perception/Investigation boost
- Crusher/Piercer/Slasher: +1 STR or DEX + damage type bonuses`
    },
    {
      id: "popular-feats",
      title: "Most Popular Feats",
      content: `**Combat Powerhouses:**
- **Polearm Master**: Bonus action attacks and opportunity attacks when enemies enter reach
- **Great Weapon Master**: Trade accuracy for massive damage (+10 per hit)
- **Sharpshooter**: Ranged equivalent of GWM, ignore cover and long range
- **Crossbow Expert**: Remove loading property, ignore melee disadvantage, bonus action attacks
- **Sentinel**: Lock down enemies and protect allies with powerful opportunity attacks

**Spellcaster Favorites:**
- **War Caster**: Advantage on concentration, cast spells as opportunity attacks, somatic components with weapons
- **Resilient (Constitution)**: Proficiency in CON saves for concentration
- **Alert**: +5 initiative, can't be surprised
- **Lucky**: Reroll any d20 three times per long rest
- **Fey Touched/Shadow Touched**: Extra spells and ASI

**Defensive Options:**
- **Heavy Armor Master**: Reduce incoming nonmagical physical damage by 3
- **Tough**: +2 HP per level (retroactive)
- **Shield Master**: Bonus action shove, add shield AC to DEX saves, take no damage on successful DEX saves

**Utility and Skills:**
- **Skill Expert**: Expertise in one skill, proficiency in another, +1 ASI
- **Observant**: Passive Perception/Investigation +5, read lips
- **Mobile**: +10 movement, ignore difficult terrain when dashing, avoid opportunity attacks after melee attacks
- **Telekinetic**: +1 ASI, invisible mage hand, bonus action shove`
    },
    {
      id: "feat-combinations",
      title: "Powerful Feat Combinations",
      content: `Some feats synergize extremely well together:

**Polearm Master + Sentinel:**
- Stop enemies at 10 feet away with opportunity attacks
- They can't move closer even if they hit
- Creates a "death zone" around you

**Great Weapon Master + Polearm Master:**
- Bonus action attack from PAM increases GWM proc chances
- More attacks = more chances to land the -5/+10 hits
- Massive damage potential

**Crossbow Expert + Sharpshooter:**
- Bonus action hand crossbow attacks
- Use Sharpshooter's -5/+10 on all attacks
- Ignore cover and range penalties
- Best ranged damage in the game

**War Caster + Resilient (Constitution):**
- Advantage on concentration saves
- Proficiency in CON saves
- Nearly unbreakable concentration

**Mobile + Sentinel:**
- Hit and run tactics
- Can escape without opportunity attacks
- Stop enemies who try to ignore you

**Elven Accuracy + Samurai or Champion:**
- Reroll one attack die when you have advantage
- Samurai grants advantage at will
- Champion crits on 19-20
- Devastating critical hit chance`
    },
    {
      id: "racial-feats",
      title: "Racial Feats",
      content: `Some feats require specific races (from Xanathar's Guide):

**Dwarven Fortitude** (Dwarf):
- Spend Hit Die when you take Dodge action
- Heal while dodging

**Elven Accuracy** (Elf or Half-Elf):
- Reroll one attack die when you have advantage
- +1 DEX, INT, WIS, or CHA
- Incredible for crit-fishing builds

**Fade Away** (Gnome):
- Reaction to become invisible when taking damage
- Requires advantage to hit you
- +1 DEX or INT

**Squat Nimbleness** (Dwarf or Small race):
- +5 movement speed
- +1 STR or DEX
- Advantage on escape attempts

**Dragon Fear/Dragon Hide** (Dragonborn):
- Dragon Fear: Frightening presence ability
- Dragon Hide: Natural armor and retractable claws

**Orcish Fury** (Half-Orc):
- Extra damage die once per short rest
- Boost Relentless Endurance
- +1 STR or CON`
    },
    {
      id: "dm-guidance",
      title: "DM Guidance on Feats",
      content: `**Balancing Feats in Your Game:**

**Power Level Considerations:**
- Feats like GWM, Sharpshooter, PAM, and Sentinel are significantly stronger than others
- These "power feats" can overshadow players who choose flavorful but weaker options
- Consider if everyone in your party has access to similarly powerful options

**Addressing Imbalance:**
- Buff weaker feats in your game
- Provide magic items that replicate feat effects for players who took ASIs
- Design encounters that challenge different character strengths
- Remember that feat users sacrificed ASIs and may lag in other areas

**Variant Human Concerns:**
- Starting with a feat at 1st level is very powerful
- Consider whether this overshadows other racial choices
- Some groups ban Variant Human or allow all races a free feat at 1st level

**Homebrew Feats:**
- Be cautious with homebrew feats - they're difficult to balance
- Compare to existing feats for power level
- Consider playtesting in one-shots first
- Half-feats (+1 ASI) are generally safer than full feats

**Feat-Based Campaigns:**
- Consider giving everyone a free feat at 1st level
- Creates more character diversity
- Allows cool concepts without sacrificing ASIs
- Makes martial characters more interesting`
    }
  ]
};

// =============================================================================
// FEAT PAGES
// =============================================================================

export const featPages: FeatPage[] = [
  {
    slug: "polearm-master-5e",
    name: "Polearm Master",
    category: "feats",
    description: "Complete guide to the Polearm Master feat in D&D 5e. Learn how to maximize bonus action attacks, control the battlefield with opportunity attacks, and dominate melee combat.",
    prerequisite: null,
    benefit: "You can keep your enemies at bay with reach weapons and gain bonus action attacks with polearms.",
    mechanics: `When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you gain two significant benefits:

**Bonus Action Attack:**
You can use a bonus action to make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack but deals 1d4 bludgeoning damage (or 1d6 if the weapon has the versatile property and you're wielding it with two hands).

**Opportunity Attack on Entry:**
While you are wielding a glaive, halberd, pike, quarterstaff, or spear, other creatures provoke an opportunity attack from you when they enter your reach.

**Important Details:**
- The bonus action attack works with glaive, halberd, quarterstaff, or spear only
- The opportunity attack on entry works with glaive, halberd, pike, quarterstaff, or spear
- Pike is included for the opportunity attack but NOT the bonus action attack
- You must be wielding the weapon to trigger the entry opportunity attack
- The bonus action attack requires you to take the Attack action on your turn with only that weapon
- Two-weapon fighting does NOT work with Polearm Master (can't make both bonus actions)`,
    synergies: [
      "Sentinel feat - Stop enemies 10 feet away and reduce their speed to 0, creating a denial zone",
      "Great Weapon Master feat - More attacks means more chances to land the -5/+10 power attack",
      "Great Weapon Fighting style - Reroll 1s and 2s on damage dice for all attacks including bonus action",
      "Dueling fighting style - +2 damage works with quarterstaff and spear when wielded in one hand",
      "Tunnel Fighter fighting style (UA) - Make unlimited opportunity attacks, devastating with PAM",
      "Battle Master maneuvers - More attacks means more chances to use maneuvers like Trip Attack",
      "Paladin Divine Smite - Bonus action attack is another smite opportunity",
      "Barbarian Rage - Extra rage damage on the bonus action attack too",
      "Hex/Hunter's Mark - Extra damage applies to the bonus action attack",
      "Spear + Shield build - Use Dueling style with spear and shield for defense and damage"
    ],
    commonMistakes: [
      "Thinking pike works with the bonus action attack - it only works for the opportunity attack feature",
      "Trying to use two-weapon fighting with Polearm Master - both use your bonus action, only one can be used per turn",
      "Forgetting the bonus action attack only works if you attack with ONLY that polearm on your turn",
      "Not positioning to make enemies walk through your threatened area to reach allies",
      "Missing that the opportunity attack triggers when enemies ENTER reach, not leave it (you get both entering and leaving)",
      "Forgetting the bonus action attack uses 1d4 damage, not the weapon's full damage die",
      "Thinking you need to use a reach weapon - quarterstaff and spear work but don't have reach",
      "Not realizing the 1d4 becomes 1d6 when using a quarterstaff or spear two-handed (versatile property applies)"
    ],
    dmTips: [
      "Flying enemies and ranged attackers counter this feat significantly - mix up enemy tactics",
      "Difficult terrain and obstacles can prevent enemies from needing to enter reach",
      "Enemies with reach weapons or long weapons can match the polearm user's range",
      "Intelligent enemies learn to Disengage or use ranged attacks after getting hit",
      "Grappling the polearm user shuts down the reach advantage",
      "Provide opportunities for the feat to shine with narrow corridors or chokepoints",
      "Area control matters - design encounters where protecting a position is valuable",
      "Consider adding magic polearms to your loot tables for PAM users",
      "Swarms and multiple weak enemies make this feat feel very powerful",
      "Remember that the player gets an opportunity attack when enemies enter reach, which is when they're typically not expecting it"
    ],
    searchVolume: 11020
  },
  {
    slug: "great-weapon-master-5e",
    name: "Great Weapon Master",
    category: "feats",
    description: "Complete guide to the Great Weapon Master feat in D&D 5e. Learn how to maximize the power attack feature, trigger bonus action attacks, and build devastating melee damage dealers.",
    prerequisite: null,
    benefit: "You can sacrifice accuracy for massive damage bonuses and gain bonus action attacks when you score critical hits or reduce enemies to 0 HP.",
    mechanics: `Great Weapon Master provides two powerful benefits when wielding heavy melee weapons:

**Power Attack (-5/+10):**
Before you make a melee attack with a heavy weapon that you're proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.

**Bonus Action Attack:**
When you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.

**Important Details:**
- Power attack works with greatsword, greataxe, maul, pike, glaive, halberd, and other heavy weapons
- You decide to use power attack before rolling, not after seeing the result
- The +10 damage is flat bonus, not extra dice (not multiplied on crits)
- Bonus action attack works with any melee weapon, not just heavy weapons
- You can use power attack on the bonus action attack as well
- Power attack applies to each attack separately if you have Extra Attack`,
    synergies: [
      "Polearm Master feat - Bonus action attack from PAM gives more chances to trigger GWM's bonus attack",
      "Barbarian Reckless Attack - Advantage offsets the -5 penalty, making power attack more reliable",
      "Battle Master Precision Attack - Add superiority die to attack roll when you really need to hit",
      "Bless spell - +1d4 to attack rolls helps offset the -5 penalty",
      "Samurai Fighting Spirit - Advantage on all attacks for one turn makes power attack very strong",
      "Champion Improved Critical - More crits means more bonus action attacks",
      "Great Weapon Fighting style - Reroll 1s and 2s on damage dice, maximizing that +10 bonus",
      "Elven Accuracy - If you can get advantage (half-elf/elf only), triple advantage for better hit chance",
      "Paladin Divine Smite - The +10 damage stacks with smites for devastating single hits"
    ],
    commonMistakes: [
      "Using power attack when you need a low roll to hit - only use it when your bonus is high enough",
      "Forgetting the bonus action attack works with any melee weapon, not just heavy weapons",
      "Not realizing you can choose whether to use power attack on each individual attack with Extra Attack",
      "Thinking the +10 damage is multiplied on critical hits - it's a flat bonus, not dice",
      "Using power attack against high-AC enemies when you're unlikely to hit",
      "Forgetting to declare power attack before rolling the attack",
      "Not using power attack against low-AC enemies where you'd hit anyway"
    ],
    dmTips: [
      "This feat dramatically increases damage output - design encounters with more HP or more enemies",
      "High-AC enemies naturally counter GWM - use a mix of AC values to keep things interesting",
      "The bonus action attack makes this feat very powerful against groups of weak enemies",
      "GWM users struggle against enemies with high AC and few HP (they miss and waste the -5)",
      "Consider that GWM users will kill minions and get extra attacks - balance accordingly",
      "Magic items that grant advantage (like a Cloak of Displacement) make GWM extremely powerful",
      "This feat is significantly stronger than most others - other players might feel overshadowed",
      "Environmental effects that impose disadvantage shut down GWM effectively"
    ],
    searchVolume: 8900,
    aliases: ["gwm-5e"]
  },
  {
    slug: "sharpshooter-5e",
    name: "Sharpshooter",
    category: "feats",
    description: "Complete guide to the Sharpshooter feat in D&D 5e. Master long-range combat, ignore cover penalties, and deal massive damage with ranged weapons.",
    prerequisite: null,
    benefit: "You ignore cover and long range penalties with ranged weapons, and can sacrifice accuracy for devastating damage bonuses.",
    mechanics: `Sharpshooter grants three powerful benefits when using ranged weapons:

**Ignore Long Range:**
Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.

**Ignore Cover:**
Your ranged weapon attacks ignore half cover and three-quarters cover.

**Power Shot (-5/+10):**
Before you make a ranged weapon attack, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.

**Important Details:**
- Works with bows, crossbows, and other ranged weapons (not thrown weapons by RAW, DM discretion)
- Power shot decision is made before rolling, not after
- The +10 damage is a flat bonus, not extra dice
- Applies to each attack separately if you have Extra Attack
- Does not work with spell attacks, only weapon attacks
- Cover ignoring includes enemies hiding behind allies`,
    synergies: [
      "Crossbow Expert feat - Bonus action hand crossbow attacks give more chances for power shot",
      "Archery fighting style - +2 to attack rolls helps offset the -5 penalty significantly",
      "Elven Accuracy - Triple advantage for half-elves and elves makes power shot much more reliable",
      "Fighter Action Surge - Double your attacks in one turn, all with +10 damage if you want",
      "Samurai Fighting Spirit - Advantage on all attacks offsets the -5 penalty",
      "Ranger Hunter's Mark - Extra 1d6 damage stacks with the +10 from Sharpshooter",
      "Bless spell - +1d4 to attack rolls helps land those power shots",
      "Lucky feat - Reroll missed attacks to salvage important power shots",
      "Precision Attack (Battle Master) - Add superiority die when you need to hit"
    ],
    commonMistakes: [
      "Using power shot against high-AC enemies when you're unlikely to hit anyway",
      "Forgetting you can toggle power shot on or off for each attack with Extra Attack",
      "Not taking advantage of ignoring cover - position yourself for clear shots",
      "Thinking it works with thrown weapons - RAW it only works with ranged weapons",
      "Using power shot when you have disadvantage - the penalty makes it even harder to hit",
      "Not declaring power shot before rolling the attack",
      "Forgetting that cover ignoring doesn't help against total cover"
    ],
    dmTips: [
      "Sharpshooter is the ranged equivalent of Great Weapon Master - very powerful",
      "High-AC enemies and distance can make Sharpshooter users struggle",
      "Total cover still works - encourage enemies to use it",
      "Wind, fog, and magical darkness impose disadvantage, countering Sharpshooter",
      "Enemies can ready actions to take cover when the archer attacks",
      "This feat makes ranged attackers extremely powerful against low-AC targets",
      "Consider enemies closing distance or using ranged attacks to pressure archers",
      "The cover-ignoring feature can trivialize many tactical situations - plan accordingly"
    ],
    searchVolume: 7200,
    aliases: ["ss-5e"]
  },
  {
    slug: "war-caster-5e",
    name: "War Caster",
    category: "feats",
    description: "Complete guide to the War Caster feat in D&D 5e. Master spellcasting in armor, maintain concentration under fire, and punish enemies with spell opportunity attacks.",
    prerequisite: "The ability to cast at least one spell",
    benefit: "You gain advantage on concentration saves, can perform somatic components with weapons or shields, and can cast spells as opportunity attacks.",
    mechanics: `War Caster provides three benefits crucial for front-line spellcasters:

**Advantage on Concentration:**
You have advantage on Constitution saving throws that you make to maintain concentration on a spell when you take damage.

**Somatic Components with Full Hands:**
You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.

**Spell Opportunity Attack:**
When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.

**Important Details:**
- Concentration advantage stacks with other sources of advantage
- The somatic component benefit allows shield + weapon spellcasting
- Spell opportunity attacks can use any single-target spell (Booming Blade, Inflict Wounds, etc.)
- You still need a free hand for material components if they have a cost
- The spell must target only that creature (no AoE spells)`,
    synergies: [
      "Resilient (Constitution) feat - Proficiency in CON saves plus advantage makes concentration nearly unbreakable",
      "Cleric/Paladin builds - Cast while using shield and weapon without War Caster component pouches",
      "Booming Blade/Green-Flame Blade cantrips - Excellent spell opportunity attacks with rider damage",
      "Polearm Master - Trigger opportunity attacks when enemies enter reach, then cast at them",
      "Sentinel feat - Lock down enemies and cast spells when they try to escape",
      "Bladesinger/Eldritch Knight/Swords Bard - Essential for gish builds",
      "Counterspell - More concentration saves passed means keeping your spells active"
    ],
    commonMistakes: [
      "Thinking you need War Caster to cast with a shield - you only need it if you can't use a component pouch or focus",
      "Forgetting the spell opportunity attack must target only that creature",
      "Not realizing spell opportunity attacks use spell slots",
      "Using AoE spells for opportunity attacks - they must be single-target",
      "Forgetting you still need material components with a cost",
      "Not utilizing the spell opportunity attack feature - it's incredibly powerful"
    ],
    dmTips: [
      "War Caster makes concentration spellcasters much harder to disrupt",
      "Spell opportunity attacks can be devastating - Inflict Wounds as a reaction is brutal",
      "This feat is essential for gish builds to function properly",
      "Consider that War Caster users can lock down areas with reach + spell attacks",
      "Multiple small hits are better for breaking concentration than one big hit",
      "Counterspell and Dispel Magic still work against War Caster users",
      "This feat makes front-line clerics and paladins significantly more durable"
    ],
    searchVolume: 6500
  },
  {
    slug: "sentinel-5e",
    name: "Sentinel",
    category: "feats",
    description: "Complete guide to the Sentinel feat in D&D 5e. Lock down enemies, protect allies, and control the battlefield with devastating opportunity attacks.",
    prerequisite: null,
    benefit: "You can stop enemies in their tracks with opportunity attacks, punish foes who ignore you, and protect allies from harm.",
    mechanics: `Sentinel provides three powerful defensive and control benefits:

**Opportunity Attack Stops Movement:**
When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. This stops any movement they had remaining.

**Attack Creatures Who Attack Allies:**
When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature.

**Ignore Disengage:**
Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.

**Important Details:**
- Reducing speed to 0 stops movement from all sources (including flying)
- You can only use your reaction once per round
- The ally protection feature triggers on the attack, not when the ally is hit
- Works with reach weapons for 10-foot control zones
- Disengage immunity makes you extremely dangerous to flee from`,
    synergies: [
      "Polearm Master feat - The ultimate combo: stop enemies 10 feet away when they enter your reach",
      "Tunnel Fighter fighting style (UA) - Make unlimited opportunity attacks per round",
      "Great Weapon Master - Extra attacks when you drop enemies with opportunity attacks",
      "Battle Master maneuvers - Add effects to your opportunity attacks",
      "Barbarian Reckless Attack - More likely to hit with opportunity attacks",
      "Protection fighting style - Stack with Sentinel to be the ultimate defender",
      "Cavalier Fighter - Synergizes perfectly with the subclass features"
    ],
    commonMistakes: [
      "Thinking you can use both features in the same reaction - you only get one reaction per round",
      "Forgetting that allies with Sentinel don't trigger your ally protection feature",
      "Not positioning yourself between enemies and allies to maximize opportunities",
      "Missing that reducing speed to 0 stops flying creatures and makes them fall",
      "Thinking Sentinel lets you make more than one reaction per round",
      "Not realizing Disengage immunity applies even if enemies Disengage first"
    ],
    dmTips: [
      "Sentinel trivializes many monster tactics - enemies can't just walk past the front line",
      "Intelligent enemies learn to target the Sentinel user or use ranged attacks",
      "Multiple enemies can overwhelm Sentinel (only one reaction per round)",
      "Forced movement (shoves, spells) bypasses Sentinel completely",
      "Sentinel + Polearm Master creates a 10-foot 'no-go zone' that's very powerful",
      "Consider giving enemies abilities that counter Sentinel (teleportation, forced movement)",
      "This feat makes defenders extremely effective at their job"
    ],
    searchVolume: 5800
  },
  {
    slug: "lucky-5e",
    name: "Lucky",
    category: "feats",
    description: "Complete guide to the Lucky feat in D&D 5e. Reroll critical dice rolls, turn failures into successes, and bend probability in your favor three times per day.",
    prerequisite: null,
    benefit: "You have 3 luck points that let you reroll any d20 roll you make or that's made against you, potentially turning failures into successes.",
    mechanics: `Lucky gives you a pool of 3 luck points that recharge on a long rest:

**Reroll Your D20:**
You can spend a luck point to reroll any attack roll, ability check, or saving throw you make. You can choose to use this after seeing the die result but before the DM tells you whether you succeed or fail. You choose which roll to use.

**Force Enemy Reroll:**
When an attack roll is made against you, you can spend a luck point to force the attacker to reroll. You choose which roll the attacker must use.

**Luck Points:**
You have 3 luck points. You regain expended luck points when you finish a long rest.

**Important Details:**
- You can use Lucky after rolling but before knowing the outcome
- Works on any d20 roll (attacks, saves, checks)
- Can be used even if you have advantage or disadvantage
- When used with advantage/disadvantage, you roll a third die and choose any of the three
- Does not work with death saving throws (RAW they are saving throws, so it does work - this is hotly debated)`,
    synergies: [
      "Great Weapon Master/Sharpshooter - Reroll missed power attacks",
      "Divination Wizard Portent - Combine with Portent for ultimate dice control",
      "Halfling racial trait - Stack with Halfling's Lucky racial feature",
      "Bless spell - Reroll and add 1d4, or add 1d4 then potentially reroll",
      "Champion Fighter - Reroll attacks to fish for critical hits on 19-20",
      "Paladin - Reroll saving throws for yourself and allies with Aura of Protection"
    ],
    commonMistakes: [
      "Thinking you must decide before rolling - you can wait until after you see the roll",
      "Not using Lucky on critical saving throws that could kill you",
      "Saving luck points for 'the perfect moment' and never using them",
      "Forgetting you can use Lucky when enemies attack you",
      "Thinking Lucky doesn't work with advantage/disadvantage - it gives you a third die to choose from",
      "Not realizing Lucky is per long rest, not per short rest"
    ],
    dmTips: [
      "Lucky is one of the most powerful feats - it bends probability significantly",
      "Three uses per day is limiting but can swing critical moments",
      "Lucky on death saves is controversial - establish your ruling in session zero",
      "This feat rewards players for taking risks (GWM, dangerous stunts)",
      "Multiple encounters per long rest dilutes Lucky's power",
      "Lucky can trivialize carefully-planned challenges - be prepared for it",
      "Some DMs ban Lucky for being too powerful - discuss in advance"
    ],
    searchVolume: 5200
  },
  {
    slug: "resilient-5e",
    name: "Resilient",
    category: "feats",
    description: "Complete guide to the Resilient feat in D&D 5e. Gain proficiency in a saving throw and round up an odd ability score for improved survivability.",
    prerequisite: null,
    benefit: "You increase one ability score by 1 and gain proficiency in saving throws using that ability, significantly improving your defenses.",
    mechanics: `Resilient is a half-feat that improves both your ability scores and saving throws:

**Ability Score Increase:**
Choose one ability score. You increase that score by 1, to a maximum of 20.

**Saving Throw Proficiency:**
You gain proficiency in saving throws using the chosen ability.

**Common Choices:**
- **Resilient (Constitution):** Most popular choice for concentration saves and general survivability
- **Resilient (Wisdom):** Excellent for avoiding mind control, charm, and fear effects
- **Resilient (Dexterity):** Strong for avoiding fireballs and other AoE damage

**Important Details:**
- You can only take this feat once per ability score
- Proficiency bonus applies to all saves with that ability
- Works best with odd ability scores (13→14 gains you +1 modifier)
- Stacks with other features that improve saves (Aura of Protection, Bless, etc.)`,
    synergies: [
      "War Caster feat - Resilient (CON) + War Caster = nearly unbreakable concentration",
      "Spellcasters with concentration - Resilient (CON) is essential for maintaining key spells",
      "Paladin Aura of Protection - Stacks with proficiency for incredible saves",
      "Bless spell - Add 1d4 on top of proficiency bonus",
      "Classes without CON save proficiency - Wizards, Sorcerers, Artificers benefit greatly",
      "Odd ability scores - Turn 13 or 15 into 14 or 16 for better modifiers"
    ],
    commonMistakes: [
      "Taking Resilient in a save you're already proficient in - you can't do this",
      "Not considering which saves are most common in your campaign",
      "Taking Resilient with an even ability score - better to use a normal ASI",
      "Forgetting that proficiency bonus increases as you level up",
      "Not coordinating with your party - multiple people taking the same Resilient is fine but consider coverage"
    ],
    dmTips: [
      "Resilient (CON) dramatically improves spellcaster durability - plan accordingly",
      "Saving throws are common, so this feat provides consistent value",
      "Different saves are appropriate for different campaigns (WIS for mind control, DEX for traps)",
      "This feat helps shore up weak saves that enemies might target",
      "Consider what saves your encounters emphasize - adjust if needed",
      "Resilient is a 'hidden' power boost that doesn't seem as flashy but is very strong"
    ],
    searchVolume: 4800
  },
  {
    slug: "alert-5e",
    name: "Alert",
    category: "feats",
    description: "Complete guide to the Alert feat in D&D 5e. Never be surprised, always act first in combat, and keep your party safe with superior awareness.",
    prerequisite: null,
    benefit: "You gain a massive bonus to initiative, cannot be surprised while conscious, and hidden attackers gain no advantage against you.",
    mechanics: `Alert provides three benefits that ensure you're ready for danger:

**+5 Initiative Bonus:**
You gain a +5 bonus to initiative rolls. This is one of the largest numerical bonuses in the game.

**Can't Be Surprised:**
You can't be surprised while you are conscious.

**No Advantage from Hidden Attackers:**
Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you.

**Important Details:**
- +5 initiative means you almost always go first in combat
- Immunity to surprise means ambushes don't affect you
- Hidden attackers lose advantage but you're still unaware of their location
- Works even if other party members are surprised
- You still can't act if you're incapacitated`,
    synergies: [
      "Assassin Rogue - Surprise immunity prevents enemies from avoiding your auto-crits",
      "Gloom Stalker Ranger - Stack initiative bonuses for incredible turn order",
      "War Wizard Tactical Wit - +5 from Alert + INT modifier to initiative",
      "Gift of Alacrity spell - Even more initiative bonus",
      "Chronurgy Wizard - Act first and control the battlefield",
      "Swashbuckler Rogue - Add CHA to initiative on top of Alert",
      "Battle Master Commander's Strike - Act first and set up allies"
    ],
    commonMistakes: [
      "Thinking Alert makes you detect hidden creatures - you still need Perception",
      "Forgetting that surprise prevention only helps if you're conscious",
      "Not using your high initiative to buff allies or debuff enemies before they act",
      "Assuming Alert makes you immune to being unaware - you still need to see threats",
      "Missing that hidden attackers lose advantage but aren't revealed"
    ],
    dmTips: [
      "Alert trivializes many ambush encounters - plan accordingly",
      "High initiative doesn't mean much in social or exploration encounters",
      "One player always going first can feel repetitive - consider initiative variants",
      "This feat is extremely strong for builds that rely on going first (Assassins)",
      "Alert users can serve as the party's warning system",
      "Consider encounters where going first isn't as valuable (distant enemies, etc.)",
      "This feat is consistent value in every combat"
    ],
    searchVolume: 4100
  },
  {
    slug: "tough-5e",
    name: "Tough",
    category: "feats",
    description: "Complete guide to the Tough feat in D&D 5e. Gain massive HP increases, improve survivability, and become nearly unkillable with this simple but powerful feat.",
    prerequisite: null,
    benefit: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.",
    mechanics: `Tough is a straightforward feat that dramatically increases your durability:

**Retroactive HP Increase:**
Your hit point maximum increases by twice your level when you take this feat. If you take it at 4th level, you immediately gain 8 HP.

**Ongoing HP Increase:**
Whenever you gain a level, your hit point maximum increases by an additional 2 HP beyond your normal Hit Die + CON modifier.

**The Math:**
- At level 4: +8 HP
- At level 8: +16 HP
- At level 12: +24 HP
- At level 20: +40 HP

**Important Details:**
- This is retroactive - you get HP for all previous levels
- It's equivalent to +2 CON for HP purposes, but doesn't improve CON saves
- Works with temporary HP and other HP increases
- Affects your maximum HP, not current HP`,
    synergies: [
      "Barbarian Rage - More HP means more time spent raging and tanking",
      "Bear Totem Barbarian - Resistance to damage makes the extra HP even more valuable",
      "Hill Dwarf - Stack with Dwarven Toughness for incredible HP",
      "Abjuration Wizard Arcane Ward - More HP to survive while your ward recharges",
      "Front-line fighters - Anyone who takes hits benefits",
      "Durable feat - Stack for even more HP",
      "False Life spell - More base HP means bigger buffer"
    ],
    commonMistakes: [
      "Thinking Tough increases CON saves or checks - it only affects HP",
      "Taking Tough instead of increasing CON - CON gives saves, checks, and HP",
      "Not realizing it's retroactive - you get the HP for all levels immediately",
      "Taking Tough on classes with high Hit Dice (d10 or d12) - they already have good HP",
      "Forgetting that prevention is better than HP - AC and saves matter more"
    ],
    dmTips: [
      "Tough makes characters survive longer but doesn't make encounters harder",
      "This feat is most impactful on low-HP classes (Wizards, Sorcerers)",
      "Consider that extra HP just prolongs fights - adjust encounter difficulty",
      "Tough is simple and boring but very effective",
      "This feat is a 'safe' choice that always provides value",
      "Players who keep getting knocked out will appreciate Tough"
    ],
    searchVolume: 3900
  },
  {
    slug: "crossbow-expert-5e",
    name: "Crossbow Expert",
    category: "feats",
    description: "Complete guide to the Crossbow Expert feat in D&D 5e. Master crossbow combat, make bonus action attacks with hand crossbows, and eliminate loading and melee penalties.",
    prerequisite: null,
    benefit: "You ignore crossbow loading times, can make bonus action attacks with hand crossbows, and fire in melee without disadvantage.",
    mechanics: `Crossbow Expert provides three benefits that make crossbows extremely powerful:

**Ignore Loading Property:**
You ignore the loading property of crossbows with which you are proficient. This allows you to fire multiple times with Extra Attack.

**No Melee Disadvantage:**
Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.

**Hand Crossbow Bonus Action:**
When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.

**Important Details:**
- The bonus action attack works even if you attack with the same hand crossbow
- You need a free hand to load the hand crossbow (even with this feat)
- Works best with two hand crossbows or a hand crossbow and a free hand
- No melee disadvantage applies to all ranged attacks, not just crossbows
- Loading ignore means heavy crossbow becomes viable with Extra Attack`,
    synergies: [
      "Sharpshooter feat - The ultimate ranged damage combo: bonus attacks + power shot",
      "Archery fighting style - +2 to hit makes Sharpshooter power attacks more reliable",
      "Fighter Extra Attack - More attacks with hand crossbow",
      "Action Surge - Double your attacks including bonus action",
      "Battlemaster maneuvers - More attacks means more maneuver opportunities",
      "Hunter's Mark/Hex - Extra bonus action attack means more chances for extra damage"
    ],
    commonMistakes: [
      "Thinking you can dual-wield hand crossbows - you need a free hand to load",
      "Forgetting you need to attack with a one-handed weapon to trigger the bonus action",
      "Not realizing the bonus action attack can be with the same hand crossbow you just fired",
      "Thinking loading ignore works without proficiency - you must be proficient",
      "Missing that melee disadvantage elimination works for all ranged attacks, not just crossbows",
      "Not having enough ammunition tracked"
    ],
    dmTips: [
      "Crossbow Expert + Sharpshooter is the highest consistent ranged damage in the game",
      "This build is very powerful and can overshadow other characters",
      "Enemies in melee can no longer shut down ranged attackers easily",
      "Consider environmental challenges (wind, cover) to balance",
      "Disarming hand crossbows shuts down this build",
      "This feat makes ranged characters extremely powerful in all situations"
    ],
    searchVolume: 3700,
    aliases: ["cbe-5e"]
  },
  {
    slug: "mobile-5e",
    name: "Mobile",
    category: "feats",
    description: "Complete guide to the Mobile feat in D&D 5e. Increase your speed, ignore difficult terrain when dashing, and strike enemies without fear of opportunity attacks.",
    prerequisite: null,
    benefit: "You gain increased movement speed, can dash through difficult terrain easily, and avoid opportunity attacks from enemies you attack.",
    mechanics: `Mobile provides three benefits that enhance your mobility in combat:

**+10 Speed:**
Your speed increases by 10 feet. This applies to all your movement modes (walking, climbing, swimming).

**Dash Ignores Difficult Terrain:**
When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.

**Avoid Opportunity Attacks:**
When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not.

**Important Details:**
- Speed increase stacks with other bonuses (Longstrider, Haste, etc.)
- Opportunity attack avoidance works even if you miss the attack
- You must make a melee attack, not just threaten - ranged attacks don't count
- Works perfectly for hit-and-run tactics
- Doesn't prevent opportunity attacks from other creatures you didn't attack`,
    synergies: [
      "Rogue Cunning Action - Dash as bonus action and attack without retaliation",
      "Monk Step of the Wind - Enhanced mobility stacks perfectly",
      "Swashbuckler Rogue - Already have free disengage, speed boost is still great",
      "Tabaxi Feline Agility - Double your already-increased speed",
      "Haste spell - 50+ foot movement becomes normal",
      "Booming Blade - Hit and run away, if they follow they take damage",
      "Scout Rogue - Stack with Skirmisher for incredible mobility"
    ],
    commonMistakes: [
      "Thinking you don't provoke from anyone - only creatures you attacked",
      "Forgetting you need to make a melee attack, not just be in melee",
      "Not using hit-and-run tactics to maximize the feat's benefits",
      "Missing that Dash difficult terrain ignore only works when you Dash",
      "Thinking the speed boost doesn't apply when mounted - it does",
      "Not realizing you can attack multiple enemies and avoid opportunity attacks from all of them"
    ],
    dmTips: [
      "Mobile characters can kite enemies and control engagement range",
      "Difficult terrain and obstacles still matter, just less during Dash",
      "Mobile works well for scout and skirmisher characters",
      "High mobility can make it hard for slow enemies to engage",
      "Consider ranged enemies and forced movement to challenge Mobile users",
      "This feat enables unique hit-and-run playstyles"
    ],
    searchVolume: 3200
  },
  {
    slug: "observant-5e",
    name: "Observant",
    category: "feats",
    description: "Complete guide to the Observant feat in D&D 5e. Boost your Perception and Investigation, read lips, and never miss hidden details with this half-feat.",
    prerequisite: null,
    benefit: "You increase your Intelligence or Wisdom by 1 and gain a massive +5 bonus to passive Perception and Investigation, plus the ability to read lips.",
    mechanics: `Observant is a half-feat that dramatically improves your awareness:

**Ability Score Increase:**
Increase your Intelligence or Wisdom score by 1, to a maximum of 20.

**+5 Passive Perception and Investigation:**
Your passive Wisdom (Perception) and passive Intelligence (Investigation) scores each increase by 5.

**Read Lips:**
If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.

**Important Details:**
- +5 passive scores is huge - you'll notice almost everything
- Passive scores are used when you're not actively searching
- Lip reading works at any distance you can see clearly
- Works best with odd WIS or INT scores (13→14 for better modifier)
- DMs use passive Perception to determine what you notice automatically`,
    synergies: [
      "Rogue/Ranger builds - Excellent for scouts and investigators",
      "Inquisitive Rogue - Stack with Eye for Detail for incredible investigation",
      "Perception expertise - 20+ passive Perception at mid-levels",
      "Dungeon Delver feat - Find traps and hidden doors constantly",
      "Alert feat - Never surprised and always notice threats",
      "Wisdom-based classes - Clerics, Druids, Rangers benefit from WIS increase"
    ],
    commonMistakes: [
      "Thinking Observant makes you automatically detect everything - DM still sets DCs",
      "Not using passive scores - remind your DM of your high passives",
      "Taking Observant with an even ability score - less efficient",
      "Forgetting about the lip reading feature - it's very useful for espionage",
      "Not coordinating with party - one person with high Perception might be enough"
    ],
    dmTips: [
      "Observant trivializes hidden details and traps - plan for it",
      "Passive Perception 20+ notices almost everything - use very high DCs for hidden things",
      "Lip reading can bypass many information-hiding tactics",
      "This feat rewards careful description and environmental storytelling",
      "Consider invisible or silent threats to challenge Observant users",
      "High passive scores mean you should proactively tell players what they notice"
    ],
    searchVolume: 2800
  },
  {
    slug: "ritual-caster-5e",
    name: "Ritual Caster",
    category: "feats",
    description: "Complete guide to the Ritual Caster feat in D&D 5e. Gain a ritual book, learn ritual spells from any class, and expand your utility without using spell slots.",
    prerequisite: "Intelligence or Wisdom 13 or higher",
    benefit: "You gain a ritual book and can learn ritual spells from your chosen class, casting them without expending spell slots.",
    mechanics: `Ritual Caster grants you access to ritual spells from a chosen class:

**Choose a Class:**
Choose one class: Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard. You must have an Intelligence or Wisdom score of 13 or higher.

**Ritual Book:**
You acquire a ritual book holding two 1st-level ritual spells from your chosen class. You can cast these spells as rituals (adding 10 minutes to casting time) without preparing them.

**Learn New Rituals:**
If you come across a written spell (in a spellbook or scroll), you can add it to your ritual book if:
- It's a ritual spell
- It's from your chosen class's spell list
- Its level is no more than half your character level (rounded up)
- You spend 2 hours and 50 gp per spell level copying it

**Important Details:**
- You don't use spell slots to cast these spells
- You must cast them as rituals (10 extra minutes)
- Intelligence-based classes use INT for spellcasting ability, Wisdom-based use WIS
- You can't cast these spells normally, only as rituals
- The book is a physical object that can be lost or stolen`,
    synergies: [
      "Wizard Ritual Caster - Get Cleric rituals (Ceremony, Augury) for utility",
      "Martial classes - Gain spellcasting without multiclassing",
      "Detect Magic, Identify - Essential utility rituals",
      "Find Familiar - Excellent reconnaissance",
      "Leomund's Tiny Hut - Free long rests in safety",
      "Water Breathing, Water Walk - Exploration enablers"
    ],
    commonMistakes: [
      "Thinking you can cast the spells normally - ritual casting only",
      "Forgetting the 10-minute ritual casting time",
      "Not protecting your ritual book - it can be destroyed",
      "Choosing a class without good ritual spells",
      "Not realizing you can learn more rituals from scrolls and spellbooks",
      "Missing that spell level is capped at half your character level"
    ],
    dmTips: [
      "Ritual Caster adds incredible utility without costing spell slots",
      "Time-sensitive situations prevent ritual casting",
      "Consider providing ritual spell scrolls as loot",
      "The ritual book can be a story item (lost, stolen, etc.)",
      "This feat is less powerful in combat-heavy campaigns",
      "Wizard is usually the best choice for spell variety"
    ],
    searchVolume: 2600
  },
  {
    slug: "spell-sniper-5e",
    name: "Spell Sniper",
    category: "feats",
    description: "Complete guide to the Spell Sniper feat in D&D 5e. Double your spell range, ignore cover with spell attacks, and learn a bonus attack cantrip.",
    prerequisite: "The ability to cast at least one spell",
    benefit: "You double the range of spell attacks, ignore cover, and learn one attack cantrip from any class's spell list.",
    mechanics: `Spell Sniper enhances your spellcasting range and precision:

**Double Spell Attack Range:**
When you cast a spell that requires you to make an attack roll, the spell's range is doubled.

**Ignore Cover:**
Your ranged spell attacks ignore half cover and three-quarters cover.

**Learn Attack Cantrip:**
You learn one cantrip that requires an attack roll. Choose the cantrip from any class's spell list. Your spellcasting ability for this cantrip depends on the class you chose: Charisma for Bard, Sorcerer, or Warlock; Wisdom for Cleric or Druid; Intelligence for Wizard.

**Important Details:**
- Only affects spells with attack rolls, not saving throws
- Range doubling applies to both normal and long range
- Works with Eldritch Blast, Fire Bolt, Scorching Ray, etc.
- The bonus cantrip can be from any class
- Cover ignoring doesn't work on total cover`,
    synergies: [
      "Eldritch Blast - 240-foot range with Agonizing Blast and Repelling Blast",
      "Warlock Eldritch Spear - 600-foot Eldritch Blast range",
      "Sorcerer Distant Spell - Quadruple range on spell attacks",
      "War Caster - Cast spells as opportunity attacks with doubled range (if reach)",
      "Scorching Ray, Chromatic Orb - All spell attacks benefit",
      "Crossclass cantrips - Wizards can get Eldritch Blast, Clerics can get Fire Bolt"
    ],
    commonMistakes: [
      "Thinking it affects saving throw spells - attack rolls only",
      "Not realizing the cantrip can be from any class",
      "Forgetting that range doubling applies to all spell attacks",
      "Taking this feat when you mostly use saving throw spells",
      "Missing that cover ignoring is very powerful in many combats",
      "Not coordinating with your build - Warlocks benefit most"
    ],
    dmTips: [
      "Spell Sniper enables extreme-range sniping with Eldritch Blast",
      "600-foot range Eldritch Blast can trivialize some encounters",
      "Cover becomes less useful against Spell Sniper users",
      "Consider environmental limits (walls, fog, darkness) to range",
      "This feat is strong for Warlocks, mediocre for most others",
      "Long-range spell attacks can make positioning matter less"
    ],
    searchVolume: 2400
  },
  {
    slug: "defensive-duelist-5e",
    name: "Defensive Duelist",
    category: "feats",
    description: "Complete guide to the Defensive Duelist feat in D&D 5e. Use finesse weapons to parry attacks, boost your AC as a reaction, and avoid devastating hits.",
    prerequisite: "Dexterity 13 or higher",
    benefit: "When wielding a finesse weapon, you can use your reaction to add your proficiency bonus to AC against one melee attack, potentially causing it to miss.",
    mechanics: `Defensive Duelist lets you parry incoming attacks with finesse weapons:

**Parry Reaction:**
When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you.

**The Math:**
- Level 1-4: +2 AC
- Level 5-8: +3 AC
- Level 9-12: +4 AC
- Level 13-16: +5 AC
- Level 17-20: +6 AC

**Important Details:**
- You must be wielding the finesse weapon (rapier, shortsword, dagger, etc.)
- Works only against melee attacks, not ranged or spells
- Declared after the hit is announced but before damage
- Uses your reaction (no opportunity attacks that round)
- Scales with level via proficiency bonus`,
    synergies: [
      "Riposte maneuver (Battle Master) - Defensive reaction synergy",
      "Swashbuckler Rogue - Already using finesse weapons",
      "Dexterity-based fighters and rogues - Natural fit",
      "Shield spell - Different triggers, can use both in different rounds",
      "Uncanny Dodge - Use Defensive Duelist to avoid the hit entirely, Uncanny Dodge if you still get hit",
      "Evasion - Defensive Duelist for melee, Evasion for ranged saves"
    ],
    commonMistakes: [
      "Thinking it works against ranged attacks - melee only",
      "Forgetting you need to be wielding a finesse weapon",
      "Not using it because you want to save your reaction - preventing damage is valuable",
      "Missing that it can turn hits into misses, avoiding critical hits",
      "Thinking it lasts for more than one attack",
      "Not realizing proficiency bonus scales, making this better at higher levels"
    ],
    dmTips: [
      "Defensive Duelist is strong but uses the reaction, so it's balanced",
      "Multiple attacks per round limit its effectiveness",
      "High-damage single attacks make this feat shine",
      "This feat is better at higher levels due to proficiency scaling",
      "Consider it when balancing finesse weapon users vs. two-handed weapons",
      "Defensive Duelist can prevent critical hits by making them miss"
    ],
    searchVolume: 2100
  },
  {
    slug: "mage-slayer-5e",
    name: "Mage Slayer",
    category: "feats",
    description: "Complete guide to the Mage Slayer feat in D&D 5e. Punish spellcasters, disrupt concentration, and make enemy mages regret getting close to you.",
    prerequisite: null,
    benefit: "You excel at disrupting spellcasters, gaining reaction attacks when they cast, imposing disadvantage on concentration saves, and gaining advantage on saves against close-range spells.",
    mechanics: `Mage Slayer provides three anti-caster benefits:

**Reaction Attack on Casting:**
When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.

**Concentration Disruption:**
When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.

**Advantage on Saves:**
You have advantage on saving throws against spells cast by creatures within 5 feet of you.

**Important Details:**
- Reaction attack happens before the spell completes
- Works even if the spell doesn't target you
- Concentration disadvantage stacks with other effects
- Save advantage only against spells cast within 5 feet
- Helps shut down enemy spellcasters in melee`,
    synergies: [
      "Sentinel feat - Lock down casters and prevent their escape",
      "Barbarian Rage - Advantage on saves already, close gap quickly",
      "Mobile feat - Close distance to casters and avoid opportunity attacks",
      "Counterspell - Different mechanism, similar goal of stopping spells",
      "War Caster - If you're a gish, counter enemy casters",
      "Tunnel Fighter (UA) - Multiple reaction attacks per round"
    ],
    commonMistakes: [
      "Thinking the reaction attack can counterspell - it happens after the spell is cast",
      "Not positioning yourself next to enemy spellcasters",
      "Forgetting the concentration disadvantage applies whenever you damage them",
      "Missing that save advantage only works within 5 feet",
      "Taking this feat when your campaign has few spellcasters",
      "Not realizing the reaction can damage them before the spell resolves (but doesn't stop the spell)"
    ],
    dmTips: [
      "Mage Slayer is campaign-dependent - more valuable if many enemies cast spells",
      "Intelligent casters will avoid melee with Mage Slayer users",
      "Teleportation, Misty Step, and Dimension Door help casters escape",
      "This feat is niche but powerful when applicable",
      "Consider mixing melee and ranged casters to challenge Mage Slayer builds",
      "Reaction attack can interrupt some spells if damage breaks concentration on a previous spell"
    ],
    searchVolume: 1900
  },
  {
    slug: "inspiring-leader-5e",
    name: "Inspiring Leader",
    category: "feats",
    description: "Complete guide to the Inspiring Leader feat in D&D 5e. Grant temporary HP to your entire party, boost survivability, and lead your allies to victory.",
    prerequisite: "Charisma 13 or higher",
    benefit: "You can spend 10 minutes inspiring your companions, granting them temporary hit points equal to your level + Charisma modifier.",
    mechanics: `Inspiring Leader allows you to bolster your allies before battle:

**Inspiring Speech:**
You can spend 10 minutes giving an inspiring speech. Choose up to six friendly creatures (which can include yourself) within 30 feet who can see or hear you and who can understand you.

**Temporary HP:**
Each creature gains temporary hit points equal to your level + your Charisma modifier.

**The Math:**
- Level 4, CHA 16 (+3): 7 temp HP per person = 42 HP total
- Level 8, CHA 18 (+4): 12 temp HP per person = 72 HP total
- Level 12, CHA 20 (+5): 17 temp HP per person = 102 HP total

**Important Details:**
- Can be used during short rests
- Temporary HP lasts until it's lost or you finish a long rest
- Temporary HP doesn't stack (if you use this twice, they take the higher value)
- Free HP for the whole party before every combat
- Scales with your level and Charisma`,
    synergies: [
      "Bard/Paladin/Warlock - Natural CHA builds benefit",
      "Twilight Cleric - Stack temp HP sources (though temp HP doesn't stack, you can refresh)",
      "Heroism spell - Different source of temp HP",
      "Bear Totem Barbarian - Resistance makes temp HP worth twice as much",
      "Aura of Protection (Paladin) - Keep allies alive to benefit from the aura"
    ],
    commonMistakes: [
      "Thinking temp HP stacks - it doesn't, you take the higher value",
      "Not using this during short rests - free HP before every encounter",
      "Forgetting temp HP expires after a long rest",
      "Not maximizing Charisma to get the most out of this feat",
      "Using this when the party already has temp HP from another source",
      "Missing that it works on yourself too"
    ],
    dmTips: [
      "Inspiring Leader grants significant HP padding for the entire party",
      "Multiple encounters per short rest dilute this feat's value",
      "This feat dramatically improves party survivability in deadly encounters",
      "Consider it when balancing encounter difficulty",
      "Encouraging short rests lets the party use this more often",
      "This feat is stronger in parties of 5-6 than small parties"
    ],
    searchVolume: 1800
  },
  {
    slug: "elemental-adept-5e",
    name: "Elemental Adept",
    category: "feats",
    description: "Complete guide to the Elemental Adept feat in D&D 5e. Pierce through resistances, reroll low damage dice, and specialize in a damage type for consistent spell damage.",
    prerequisite: "The ability to cast at least one spell",
    benefit: "Spells you cast ignore resistance to your chosen damage type, and you can reroll 1s on damage dice for that element.",
    mechanics: `Elemental Adept enhances spells of a chosen damage type:

**Choose an Element:**
Choose one damage type: acid, cold, fire, lightning, or thunder.

**Ignore Resistance:**
Spells you cast ignore resistance to damage of the chosen type. Note: This does not bypass immunity.

**Reroll 1s:**
When you roll damage for a spell you cast that deals damage of the chosen type, you can treat any 1 on a damage die as a 2.

**Multiple Elements:**
You can select this feat multiple times, choosing a different damage type each time.

**Important Details:**
- Only affects spells, not other sources of elemental damage
- Rerolling 1s happens automatically (treat 1s as 2s)
- Resistance ignoring means half damage becomes full damage
- Does not work against immunity
- Best for casters who focus on one element`,
    synergies: [
      "Evocation Wizard - Focus on one element (usually fire) for blasting",
      "Draconic Sorcerer - Add CHA to damage of your chosen element",
      "Scribes Wizard - Change damage types to benefit from Elemental Adept",
      "Tempest Cleric - Maximize lightning/thunder damage",
      "Fireball, Lightning Bolt - Classic damage spells benefit greatly",
      "Empowered Spell (Sorcerer) - Reroll more dice, then 1s become 2s"
    ],
    commonMistakes: [
      "Thinking it bypasses immunity - it only ignores resistance",
      "Not focusing your spell selection on the chosen element",
      "Taking this when few enemies resist your element",
      "Forgetting the 1s automatically become 2s (not a choice)",
      "Taking this on a utility caster who doesn't deal much damage",
      "Not coordinating with your DM about what resistance you'll face"
    ],
    dmTips: [
      "Elemental Adept is campaign-dependent - more valuable if enemies have resistances",
      "Fire is the most commonly resisted element, making fire Elemental Adept valuable",
      "This feat discourages you from varying spell damage types",
      "Consider enemy types when planning your campaign (fire-resistant enemies reduce this feat's value)",
      "Rerolling 1s is a small but consistent damage boost",
      "This feat is very powerful against resistant enemies, mediocre otherwise"
    ],
    searchVolume: 1700
  },
  {
    slug: "skulker-5e",
    name: "Skulker",
    category: "feats",
    description: "Complete guide to the Skulker feat in D&D 5e. Hide in light obscurement, conceal your position when you miss with ranged attacks, and see through dim light perfectly.",
    prerequisite: "Dexterity 13 or higher",
    benefit: "You can hide more easily, maintain stealth after missed ranged attacks, and see through dim light without penalty.",
    mechanics: `Skulker enhances your stealth and perception capabilities:

**Hide in Light Obscurement:**
You can try to hide when you are lightly obscured from the creature from which you are hiding (such as dim light, patchy fog, or moderate foliage).

**Missed Attacks Don't Reveal:**
When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.

**Dim Light Vision:**
You can see in dim light within 60 feet of you as if it were bright light.

**Important Details:**
- Light obscurement includes dim light, allowing indoor/nighttime hiding
- Missing ranged attacks normally reveals your position - this prevents that
- Dim light vision doesn't grant darkvision (can't see in total darkness)
- Works best for stealth-focused characters
- Synergizes with hiding and sniping tactics`,
    synergies: [
      "Rogue Sneak Attack - Hide, attack, stay hidden if you miss",
      "Sharpshooter feat - Long-range sniping from concealment",
      "Ranger - Natural explorer and stealth focus",
      "Wood Elf - Mask of the Wild lets you hide in natural phenomena",
      "Gloom Stalker Ranger - Invisible in darkness, hide in dim light with Skulker",
      "Pass Without Trace - Enhance stealth checks while hiding",
      "Assassin Rogue - Stay hidden for surprise rounds"
    ],
    commonMistakes: [
      "Thinking you can hide in plain sight - you still need light obscurement",
      "Forgetting that hitting with an attack still reveals your position",
      "Not utilizing dim light hiding in indoor environments",
      "Thinking dim light vision is darkvision - it's not",
      "Taking this feat on characters who don't use stealth regularly",
      "Missing that ranged weapon attacks only - spells still reveal you if you miss"
    ],
    dmTips: [
      "Skulker enables persistent sniping from concealment",
      "Indoor environments with torches create many dim light hiding spots",
      "Missing attacks no longer punishes stealthy characters as much",
      "This feat is campaign-dependent - more valuable in stealth-heavy games",
      "Consider lighting conditions in your encounters",
      "Skulker makes dim light much more favorable to stealthy characters"
    ],
    searchVolume: 1500
  },
  {
    slug: "tavern-brawler-5e",
    name: "Tavern Brawler",
    category: "feats",
    description: "Complete guide to the Tavern Brawler feat in D&D 5e. Master unarmed combat, improvise weapons, and grapple enemies as a bonus action after hitting them.",
    prerequisite: null,
    benefit: "You increase Strength or Constitution by 1, become proficient with improvised weapons and unarmed strikes, and can grapple as a bonus action when you hit with unarmed or improvised attacks.",
    mechanics: `Tavern Brawler is a half-feat that enhances unarmed and improvised combat:

**Ability Score Increase:**
Increase your Strength or Constitution score by 1, to a maximum of 20.

**Improvised Weapon Proficiency:**
You are proficient with improvised weapons.

**Unarmed Strike Damage:**
Your unarmed strike uses a d4 for damage.

**Bonus Action Grapple:**
When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.

**Important Details:**
- Improvised weapons include chairs, bottles, tools, etc.
- Bonus action grapple only triggers when you hit
- Works with Strength-based builds
- Best with odd STR or CON scores (13→14)
- Unarmed strikes count as melee weapon attacks`,
    synergies: [
      "Grappler feat - Restrain grappled enemies",
      "Barbarian Rage - Extra damage on unarmed strikes and grapple checks",
      "Shield Master - Shove and grapple combo",
      "Rune Knight Fighter - Grapple as a giant",
      "Monk - Already have unarmed strikes, this adds grappling",
      "Athletics expertise - Ensure grapple success"
    ],
    commonMistakes: [
      "Thinking improvised weapons are better than actual weapons - they're usually 1d4",
      "Forgetting you need to hit to trigger the bonus action grapple",
      "Not realizing unarmed strikes work with this feat",
      "Taking this feat when you won't use improvised weapons or grappling",
      "Missing that the d4 unarmed strike is worse than Monk martial arts",
      "Not coordinating with grapple builds (Shield Master, Grappler feat)"
    ],
    dmTips: [
      "Tavern Brawler enables fun tavern brawl scenes",
      "Improvised weapons add flavor but aren't mechanically better than real weapons",
      "Grappling can control enemies effectively with this feat",
      "This feat is more about flavor and versatility than raw power",
      "Encourage creative use of environment as improvised weapons",
      "Tavern Brawler builds are fun but not optimized"
    ],
    searchVolume: 1400
  },
  {
    slug: "grappler-5e",
    name: "Grappler",
    category: "feats",
    description: "Complete guide to the Grappler feat in D&D 5e. Pin enemies, gain advantage on attacks against grappled foes, and become a master wrestler.",
    prerequisite: "Strength 13 or higher",
    benefit: "You gain advantage on attacks against creatures you're grappling and can restrain them, though you also become restrained in the process.",
    mechanics: `Grappler enhances your ability to control enemies through grappling:

**Advantage on Grappled Creatures:**
You have advantage on attack rolls against a creature you are grappling.

**Pin Action:**
You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.

**Important Details:**
- Advantage applies to attack rolls, not damage
- Pinning restrains both you and the target
- Restrained creatures have disadvantage on attack rolls and DEX saves
- Attacks against restrained creatures have advantage
- Pinning uses your action, so plan accordingly
- You must already be grappling to use the pin action`,
    synergies: [
      "Tavern Brawler feat - Grapple as bonus action after unarmed strike",
      "Shield Master - Shove prone after grappling for more advantage",
      "Barbarian Rage - Advantage on STR checks makes grappling easier",
      "Rune Knight Fighter - Grapple huge creatures",
      "Athletics expertise - Ensure grapple and pin success",
      "Enlarge/Reduce spell - Become larger to grapple bigger creatures"
    ],
    commonMistakes: [
      "Thinking the advantage is free - you need to be grappling",
      "Not realizing pinning restrains you too - this is often a bad trade",
      "Forgetting you can't pin until you've already established a grapple",
      "Missing that you can grapple + attack with Extra Attack, then pin next turn",
      "Not using shove prone + grapple combo for better advantage",
      "Taking this feat when you don't build for grappling (high STR, Athletics proficiency)"
    ],
    dmTips: [
      "Grappler is generally considered weak compared to other feats",
      "Pinning restrains the user too, which is rarely worth it",
      "Grappling builds work better with Tavern Brawler and high Athletics",
      "Consider buffing this feat or allowing the pin to not restrain the user",
      "Multiple enemies can overwhelm grapplers",
      "This feat is more about control than damage"
    ],
    searchVolume: 1300
  }
];

// =============================================================================
// COMBAT MANEUVER PAGES
// =============================================================================

export const combatPages: CombatManeuverPage[] = [
  {
    slug: "grapple-5e",
    name: "Grappling",
    category: "feats",
    description: "Complete guide to grappling in D&D 5e. Learn the rules for grappling, how to escape grapples, and tactics for building a grappler character.",
    rules: [
      {
        step: "Choose a Target",
        detail: "The target must be no more than one size larger than you (e.g., Medium creatures can grapple Large or smaller). The target must be within your reach."
      },
      {
        step: "Use the Attack Action",
        detail: "Instead of making an attack roll, you use one of your attacks to attempt a grapple. If you have multiple attacks (from Extra Attack), you can grapple with one and attack normally with others."
      },
      {
        step: "Make a Grapple Check",
        detail: "Make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (target chooses which)."
      },
      {
        step: "On Success - Target is Grappled",
        detail: "The target's speed becomes 0 and can't benefit from any bonus to speed. The grapple ends if you are incapacitated, if an effect removes the grappled creature from your reach, or if you release them (no action required)."
      },
      {
        step: "Moving with a Grappled Target",
        detail: "You can drag or carry the grappled creature with you, but your speed is halved unless the creature is two or more sizes smaller than you."
      },
      {
        step: "Escaping a Grapple",
        detail: "The grappled creature can use its action to attempt to escape by making a Strength (Athletics) or Dexterity (Acrobatics) check contested by your Strength (Athletics) check."
      },
      {
        step: "Attacking While Grappling",
        detail: "Both you and the grappled creature can attack normally. Grappling doesn't restrain or prevent attacks - it only reduces speed to 0."
      }
    ],
    commonMistakes: [
      "Thinking grappling prevents the target from attacking - it only reduces speed to 0",
      "Forgetting you can use Extra Attack to grapple multiple times or grapple + attack",
      "Not realizing you can grapple with one hand and attack with a weapon in the other",
      "Thinking you need a free hand only while maintaining the grapple - you do, you can't grapple with weapons in both hands",
      "Missing that size matters - you can only grapple creatures up to one size larger",
      "Not dragging grappled enemies away from allies or into hazards (your speed is halved, but it's often worth it)",
      "Forgetting that Shove and Grapple work together - grapple, then shove prone for massive advantage on attacks",
      "Not using Athletics checks to escape grapples when you have a better STR than DEX",
      "Thinking grappling requires two hands - one hand can maintain a grapple",
      "Not considering that flying creatures fall if their speed becomes 0 while airborne"
    ],
    dmTips: [
      "Grappling can trivialize single large enemies if not accounted for - give bosses legendary resistance or high Athletics",
      "Remember that creatures with multiple limbs (like a spider) can grapple multiple targets",
      "Grapple + Shove prone is a devastating combo - the prone creature has disadvantage on attacks and can't stand up (speed is 0)",
      "Huge and larger creatures can grapple multiple Medium creatures without penalty",
      "Swallow attacks often work like improved grapples - use them on dedicated grapplers",
      "Grease, difficult terrain, and environmental hazards become more dangerous when combined with grappling",
      "An invisible grappler is terrifying - grappled creatures can't see where to attack",
      "Water combat makes grappling deadly if grapplers can breathe underwater",
      "Consider adding magic items that enhance grappling (Gauntlets of Ogre Power, Belt of Giant Strength)",
      "Grappling works wonderfully for bodyguard characters protecting allies - they can lock down threats"
    ],
    searchVolume: 13330
  },
  {
    slug: "sneak-attack-5e",
    name: "Sneak Attack",
    category: "feats",
    description: "Complete guide to Sneak Attack in D&D 5e. Learn when you can use Sneak Attack, how much damage it deals, and strategies for maximizing this core Rogue feature.",
    rules: [
      {
        step: "Qualify for Sneak Attack",
        detail: "You must be using a finesse or ranged weapon. You can use Sneak Attack once per turn (not once per round - this matters for opportunity attacks)."
      },
      {
        step: "Meet ONE of Two Conditions",
        detail: "**Option A - Advantage:** You have advantage on the attack roll. OR **Option B - Ally Adjacent:** Another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll."
      },
      {
        step: "Hit with Your Attack",
        detail: "Sneak Attack only applies if your attack hits. If you miss, no Sneak Attack damage is dealt."
      },
      {
        step: "Deal Extra Damage",
        detail: "Add your Sneak Attack dice to the attack's damage. The damage is the same type as the weapon. You can only use Sneak Attack once per turn, even if you hit multiple times."
      },
      {
        step: "Sneak Attack Damage by Level",
        detail: "1st: 1d6 | 3rd: 2d6 | 5th: 3d6 | 7th: 4d6 | 9th: 5d6 | 11th: 6d6 | 13th: 7d6 | 15th: 8d6 | 17th: 9d6 | 19th: 10d6"
      },
      {
        step: "Critical Hits",
        detail: "If your Sneak Attack is a critical hit, you roll all the Sneak Attack dice twice, just like the weapon damage dice."
      }
    ],
    commonMistakes: [
      "Thinking you need advantage when an ally is adjacent - you need advantage OR an adjacent ally, not both",
      "Missing that Sneak Attack works on opportunity attacks since it's once per turn, not per round",
      "Not realizing that hiding for advantage is often unnecessary if allies are in melee",
      "Thinking you can't Sneak Attack with a bow when allies are in melee - ranged weapons qualify, and ally adjacency counts",
      "Forgetting that you need a finesse or ranged weapon - strength-based melee doesn't work",
      "Not using Sneak Attack because you think the enemy knows you're there - 'sneak' attack is a misnomer, it's precision damage",
      "Thinking you can split Sneak Attack damage across multiple hits - it applies to one attack per turn",
      "Missing that Steady Aim (Tasha's) gives you advantage as a bonus action, enabling Sneak Attack",
      "Not readying your action to attack on someone else's turn for a second Sneak Attack in a round",
      "Forgetting that magic items like Flame Tongue count as finesse if the base weapon is finesse"
    ],
    dmTips: [
      "Sneak Attack is balanced to be a Rogue's main damage source - don't nerf it by requiring actual hiding/surprise",
      "The once per turn limit means Rogues aren't overpowered with Extra Attack, but they can get it twice in a round with reactions",
      "Create opportunities for Rogues to use Cunning Action (Hide/Disengage) to gain advantage",
      "Rogues deal big damage in one hit - describe it cinematically with vital strikes, finding weak points, etc.",
      "Consider that Sneak Attack doesn't work if the Rogue has disadvantage, so darkness, prone, etc. shut it down",
      "Allies going down can disable Sneak Attack if the Rogue relies on ally adjacency instead of advantage",
      "Invisible enemies or heavy obscurement can shut down Sneak Attack",
      "Opportunity attacks with Sneak Attack are powerful - be aware when moving past Rogues",
      "Critical hits on Sneak Attack can result in massive burst damage (20d6+ at high levels)",
      "Rogues excel in single-target damage, but struggle with multiple enemies - design encounters accordingly"
    ],
    searchVolume: 9010
  },
  {
    slug: "two-weapon-fighting-5e",
    name: "Two-Weapon Fighting",
    category: "feats",
    description: "Complete guide to two-weapon fighting in D&D 5e. Learn the rules for dual wielding, when to take the Two-Weapon Fighting style, and how to build an effective dual wielder.",
    rules: [
      {
        step: "Requirements",
        detail: "You must be wielding two light melee weapons, one in each hand. Both weapons must have the 'light' property (such as shortsword, scimitar, dagger, handaxe)."
      },
      {
        step: "Take the Attack Action",
        detail: "On your turn, use the Attack action to attack with one of your weapons (your main-hand weapon). This can be multiple attacks if you have Extra Attack."
      },
      {
        step: "Bonus Action Attack",
        detail: "After taking the Attack action, you can use a bonus action to attack with your off-hand weapon."
      },
      {
        step: "Off-Hand Damage",
        detail: "You don't add your ability modifier to the damage of the bonus action attack UNLESS the modifier is negative. If you have the Two-Weapon Fighting style, you DO add your ability modifier."
      },
      {
        step: "One Attack Only",
        detail: "The bonus action grants only one attack, even if you have Extra Attack. Your main hand can attack multiple times, but your off-hand only attacks once."
      },
      {
        step: "Two-Weapon Fighting Style (Optional)",
        detail: "Fighters, Paladins, and Rangers can take the Two-Weapon Fighting style, which allows adding your ability modifier to the bonus action attack's damage."
      },
      {
        step: "Dual Wielder Feat (Optional)",
        detail: "This feat removes the 'light' requirement (allowing d8 weapons), grants +1 AC while dual wielding, and allows drawing/stowing two weapons at once."
      }
    ],
    commonMistakes: [
      "Adding ability modifier to off-hand damage without the Two-Weapon Fighting style",
      "Thinking Extra Attack applies to both weapons - only your main hand gets multiple attacks",
      "Not realizing both weapons must be light unless you have the Dual Wielder feat",
      "Forgetting you can't use your bonus action for anything else (Cunning Action, spells, etc.) if you dual wield",
      "Missing that you need a free hand to interact with objects or grapple while dual wielding",
      "Not drawing both weapons on turn 1 (requires the Dual Wielder feat or using your action)",
      "Thinking two-weapon fighting is better than other fighting styles at high levels (it often falls behind)",
      "Not considering that shields provide better AC than the +1 from Dual Wielder",
      "Forgetting you can choose not to make the bonus action attack and save it for something else",
      "Missing that off-hand attacks still benefit from things like Hunter's Mark, Hex, and Divine Smite"
    ],
    dmTips: [
      "Two-weapon fighting is most powerful at lower levels when the bonus action attack represents a larger damage increase",
      "At higher levels, Great Weapon Master and Polearm Master often outpace dual wielding in damage",
      "Dual wielding is iconic and cool - consider providing magic weapons that make it competitive",
      "The bonus action economy is precious - dual wielders sacrifice versatility for damage",
      "Consider homebrew to buff dual wielding: let the off-hand attack be part of the Attack action instead of a bonus action",
      "Some classes benefit more than others: Fighters and Rangers get the most from it, while Rogues don't benefit much (they only get one Sneak Attack anyway)",
      "Magic items that trigger on-hit effects (Flame Tongue, Frost Brand) make dual wielding more powerful",
      "Environmental challenges like climbing, swimming, or needing to hold objects are harder for dual wielders",
      "Dual wielding gives more attacks, which means more chances to hit with smites, poison, or other on-hit effects",
      "Consider that Dual Wielder feat + two rapiers is only slightly better than a greatsword, but costs a feat"
    ],
    searchVolume: 8080
  }
];

// =============================================================================
// CHARACTER CREATION TOOL PAGES
// =============================================================================

export const creationPages: CreationToolPage[] = [
  {
    slug: "dnd-character-creator",
    name: "D&D Character Creator",
    category: "creation",
    description: "Complete guide to creating D&D 5e characters. Learn the step-by-step process, find online tools, and get tips for building your perfect character.",
    searchVolume: 27700,
    sections: [
      {
        id: "creation-steps",
        title: "Character Creation Steps",
        content: `Follow these steps to create your D&D 5e character:

**1. Choose a Race**
Your race determines your ability score increases, size, speed, and special traits. Popular choices include Human (versatile), Elf (graceful and long-lived), Dwarf (hardy and resilient), and Halfling (lucky and brave).

**2. Choose a Class**
Your class is your character's profession and determines most of your abilities. Fighters excel in combat, Wizards cast powerful spells, Rogues are skilled and sneaky, and Clerics heal and support.

**3. Determine Ability Scores**
Use one of three methods:
- **Standard Array**: 15, 14, 13, 12, 10, 8 (assign to your six abilities)
- **Point Buy**: Start with 27 points and buy scores from 8 to 15
- **Roll 4d6 Drop Lowest**: Roll 4 dice, drop the lowest, do this 6 times

**4. Describe Your Character**
Choose alignment, personality traits, ideals, bonds, and flaws. Consider your backstory and how you fit into the campaign world.

**5. Choose Equipment**
Either take the starting equipment listed in your class, or roll for starting gold and buy equipment from the PHB.

**6. Final Details**
Calculate your Armor Class, initiative, attack bonuses, spell save DC (if applicable), and passive Perception. Write down your racial traits and class features.`
      },
      {
        id: "online-tools",
        title: "Online Character Creation Tools",
        content: `Several tools make character creation easier:

**D&D Beyond** (https://www.dndbeyond.com)
- Official digital toolset by Wizards of the Coast
- Guided character creation with all official content
- Requires purchase of digital books for full content
- Mobile app available
- Excellent for beginners

**Orcpub** (Legacy, no longer maintained)
- Free character builder
- Clean interface
- Limited content updates

**Roll20 Character Sheet**
- Integrated with Roll20 virtual tabletop
- Free basic character sheets
- Charactermancer tool guides creation
- Best if you're playing on Roll20

**Fast Character** (fastcharacter.com)
- Quick pre-generated characters
- Good for one-shots or quick starts
- Less customization

**Paper Character Sheets**
- Download official PDFs from Wizards of the Coast
- Fill out by hand
- Traditional but requires rule knowledge

**Tips for Digital Tools:**
- Check with your DM about which sources are allowed
- Keep a backup of your character (PDF export)
- Understand the rules, don't just click buttons
- Digital tools may have bugs - verify calculations`
      },
      {
        id: "ability-scores",
        title: "Ability Score Methods",
        content: `Three official methods for determining ability scores:

**Standard Array: 15, 14, 13, 12, 10, 8**
- Most balanced method
- Everyone has equal stats
- Good for balanced parties
- Assign these six numbers to your six abilities
- Add racial bonuses after assignment

**Point Buy (27 Points)**
- Start with all scores at 8
- Spend points to increase scores
- Maximum base score is 15 before racial bonuses
- Point costs: 9 (1), 10 (2), 11 (3), 12 (4), 13 (5), 14 (7), 15 (9)
- Most customizable method
- Prevents dump stats if desired

**Roll 4d6 Drop Lowest**
- Roll 4d6, drop the lowest die, sum the remaining three
- Repeat six times
- Assign results to abilities as desired
- Add racial bonuses
- Most random method
- Can result in very powerful or very weak characters
- Some DMs allow rerolls if total is too low

**Recommended Approach:**
For new players, use Standard Array or Point Buy to avoid confusion and ensure balanced characters.`
      },
      {
        id: "common-builds",
        title: "Popular Character Builds",
        content: `Starting builds for common character archetypes:

**Tank/Defender:**
- Race: Mountain Dwarf, Goliath, Dragonborn
- Class: Fighter (Defense style) or Paladin
- High STR and CON, use heavy armor and shield
- Protect allies and control the front line

**Damage Dealer:**
- Race: Half-Orc, Human
- Class: Fighter (Great Weapon Fighting), Barbarian
- High STR, use two-handed weapons
- Feat: Great Weapon Master

**Ranged Attacker:**
- Race: Wood Elf, Lightfoot Halfling
- Class: Fighter (Archery style) or Ranger
- High DEX, use longbow or crossbow
- Feat: Sharpshooter

**Spellcaster (Blaster):**
- Race: High Elf, Tiefling
- Class: Wizard (Evocation) or Sorcerer
- High INT or CHA
- Focus on damage spells like Fireball

**Healer/Support:**
- Race: Hill Dwarf, Aasimar
- Class: Cleric (Life Domain)
- High WIS, medium armor
- Prepare healing and buff spells

**Skill Monkey:**
- Race: Half-Elf, Human (Variant)
- Class: Rogue or Bard
- High DEX and CHA/INT
- Take expertise in key skills

**Multiclass (Advanced):**
- Wait until at least 5th level before multiclassing
- Popular combos: Paladin/Hexblade, Fighter/Rogue, Cleric/Druid
- Requires planning and system mastery`
      },
      {
        id: "new-player-tips",
        title: "Tips for New Players",
        content: `**Before Creating Your Character:**
- Talk to your DM about the campaign setting and tone
- Coordinate with other players to create a balanced party
- Ask about starting level (usually 1st or 3rd)
- Confirm which books and sources are allowed
- Discuss whether the DM allows homebrew

**Creating Your First Character:**
- Keep it simple: Fighter, Cleric, or Rogue are great first classes
- Avoid multiclassing until you understand single-class mechanics
- Use Standard Array or Point Buy for ability scores
- Choose spells that have clear, straightforward effects
- Write down what your abilities do - you'll forget otherwise

**Ability Score Priority:**
- Prioritize your class's primary ability (STR for Fighter, INT for Wizard, etc.)
- Constitution is important for everyone (determines HP)
- Don't dump ability scores below 8 unless you're ready for the roleplay challenges

**Common Pitfalls:**
- Don't create a "lone wolf" character who won't work with the party
- Avoid evil alignments unless the DM specifically allows them
- Don't optimize at the expense of fun - this is collaborative storytelling
- Remember that your character should have reasons to adventure

**Session Zero:**
- Attend session zero if your DM holds one
- Discuss character connections and party dynamics
- Understand the campaign's themes and expectations
- Ask questions about the world and your character's place in it`
      },
      {
        id: "character-advancement",
        title: "Leveling Up Your Character",
        content: `**When You Gain a Level:**
1. Increase your Hit Points (roll Hit Die + CON modifier, or take the average)
2. Gain new class features (check your class table)
3. If you're a spellcaster, you may learn new spells or gain spell slots
4. At certain levels, gain an Ability Score Improvement or feat
5. Proficiency bonus increases at specific levels (5th, 9th, 13th, 17th)

**Tracking Experience:**
- **Milestone Leveling**: DM tells you when you level (most common)
- **Experience Points**: Track XP from defeated creatures and challenges
- **Session-Based**: Level up every X sessions

**Multiclassing:**
- When you gain a level, you can choose to take a level in a different class
- Must meet multiclass prerequisites (usually 13+ in specific ability scores)
- Consult multiclassing rules in PHB Chapter 6
- Not recommended for new players

**Retraining:**
- Some DMs allow retraining choices (spells, feats, etc.)
- Discuss with your DM if you're unhappy with a choice
- Usually limited to one change per level
- Full character rebuilds are usually only at low levels

**Planning Ahead:**
- Know what features you're working toward
- Plan feat choices around your build concept
- Don't worry about perfect optimization - adaptability is more valuable
- Your character will change based on the campaign events anyway`
      }
    ],
    commonMistakes: [
      "Creating a 'lone wolf' character who has no reason to work with the party — D&D is collaborative, make sure your character wants to adventure with others",
      "Choosing options without understanding them — read your racial traits, class features, and spells before finalizing your character",
      "Neglecting Constitution — every character needs HP, don't dump CON even if it's not your primary stat",
      "Writing a massive backstory the DM can't use — keep it to 2-3 paragraphs with hooks the DM can incorporate",
      "Picking a race/class combo that doesn't synergize — while any combo can work, fighting against your racial bonuses makes the game harder"
    ],
    dmTips: [
      "Hold a Session Zero to align expectations — discuss character concepts, party composition, and campaign tone before anyone finalizes characters",
      "Offer guidance on stat generation — Point Buy is best for balanced parties, rolling works for groups okay with power differences",
      "Review character sheets before the first session — catch mistakes early and ensure everyone understands their abilities",
      "Connect character backstories to your world — ask players for loose hooks you can weave into the campaign"
    ],
    faq: [
      { question: "What's the best class for beginners?", answer: "Fighter and Barbarian are great for martial simplicity. Champion Fighter is especially beginner-friendly with straightforward features. For spellcasters, try Light Cleric or Circle of the Moon Druid — both are forgiving and effective." },
      { question: "Should I roll for stats or use Point Buy?", answer: "Point Buy gives consistent, balanced characters. Rolling is more exciting but can result in very powerful or very weak characters. For your first character, Point Buy or Standard Array is recommended." },
      { question: "How do I choose a background?", answer: "Pick one that fits your character's story and gives useful skill proficiencies. Soldier, Acolyte, Criminal, and Sage are versatile choices that work with many concepts." },
      { question: "Can I change my character after we start playing?", answer: "Most DMs allow changes in the first few sessions while you're learning. After that, major changes usually require story justification. Always ask your DM — they want you to have fun." },
      { question: "Do I need to buy the Player's Handbook?", answer: "The Basic Rules are free at D&D Beyond and cover core options. The PHB adds more races, classes, backgrounds, and spells. Many groups share books, and digital versions are available." }
    ]
  },
  {
    slug: "dnd-character-sheet",
    name: "D&D Character Sheet",
    category: "creation",
    description: "Complete guide to D&D 5e character sheets. Learn what every section means, download character sheet PDFs, and find digital alternatives.",
    searchVolume: 99550,
    sections: [
      {
        id: "character-sheet-overview",
        title: "Character Sheet Overview",
        content: `The D&D 5e character sheet is divided into several sections:

**Header Section:**
- Character Name, Class & Level, Background, Player Name
- Race, Alignment, Experience Points

**Core Stats (Left Side):**
- Six Ability Scores (STR, DEX, CON, INT, WIS, CHA)
- Ability Modifiers (the number you add to rolls)
- Saving Throw bonuses (proficient saves are marked)
- Skill bonuses (proficient skills are marked)
- Passive Perception (10 + Perception bonus)

**Combat Stats (Center):**
- Armor Class (AC): How hard you are to hit
- Initiative: Bonus to initiative rolls (usually DEX modifier)
- Speed: How far you move on your turn
- Hit Points: Current HP, Maximum HP, Temporary HP
- Hit Dice: Roll these during short rests to heal
- Death Saves: Mark successes and failures when at 0 HP

**Attacks & Spellcasting (Center):**
- Weapon attacks with attack bonus and damage
- Spellcasting information if you're a caster

**Equipment & Proficiencies (Right Side):**
- Equipment list and carried gear
- Proficiencies and Languages
- Features & Traits (class and racial abilities)

**Personality & Background (Back Page):**
- Personality Traits, Ideals, Bonds, Flaws
- Backstory and character description
- Additional features and traits`
      },
      {
        id: "filling-out-sheet",
        title: "How to Fill Out Your Character Sheet",
        content: `**Step 1: Basic Information**
Write your character name, class, level, race, background, and alignment at the top. Add your player name and experience points (if tracking XP).

**Step 2: Ability Scores**
Fill in your six ability scores in the large boxes. Calculate and write the modifiers in the circles (score - 10, then divide by 2, round down).

**Step 3: Proficiency Bonus**
Your proficiency bonus is based on your level:
- Levels 1-4: +2
- Levels 5-8: +3
- Levels 9-12: +4
- Levels 13-16: +5
- Levels 17-20: +6

**Step 4: Saving Throws**
For each ability, if you're proficient in that save (from your class), mark the circle and add your proficiency bonus + ability modifier. Otherwise, just add the ability modifier.

**Step 5: Skills**
For each skill, add the ability modifier. If you're proficient (from class/background), mark the circle and add your proficiency bonus too. If you have expertise, add proficiency bonus twice.

**Step 6: Passive Perception**
Calculate as 10 + your Perception skill bonus. This is what DMs use to determine what you notice without actively looking.

**Step 7: Combat Stats**
- AC: Base AC from armor + DEX modifier (up to armor's limit) + shield bonus
- Initiative: Your DEX modifier
- Speed: From your race (usually 30 ft for most races)
- Hit Points: Maximum is your Hit Die (from class) + CON modifier at 1st level, then add Hit Die roll + CON modifier each level
- Hit Dice: You have a number equal to your character level

**Step 8: Attacks**
List your weapons with:
- Attack bonus = proficiency + STR or DEX modifier (if proficient with weapon)
- Damage = weapon damage die + STR or DEX modifier
- Include any magical bonuses

**Step 9: Equipment**
List all your gear and equipment. Track your carrying capacity (STR score × 15 pounds for medium load).

**Step 10: Features & Traits**
Write down all your racial traits and class features. Include a brief description of what they do.

**Step 11: Personality (Back Page)**
Fill in your personality traits, ideals, bonds, and flaws from your background. Write a brief backstory.`
      },
      {
        id: "download-sheets",
        title: "Where to Download Character Sheets",
        content: `**Official Wizards of the Coast Character Sheets:**
- Available as free PDF downloads on the D&D website
- Standard Character Sheet (most common)
- Alternate Character Sheet (different layout)
- Class-specific sheets for some classes

**Download Links:**
Visit the official D&D website (dnd.wizards.com) and look for "Character Sheets" in the resources section.

**Types of Sheets:**
- **Standard Sheet**: Traditional layout, two pages
- **Form-Fillable PDF**: Type directly into the PDF
- **Editable Sheet**: Use Adobe Acrobat or PDF editor
- **Printer-Friendly**: Black and white, saves ink

**Third-Party Character Sheets:**
- **More Purple More Better**: Popular alternative sheet design
- **Class-Specific Sheets**: Optimized layouts for each class
- **Simplified Sheets**: Beginner-friendly with fewer sections
- **Spell Slot Trackers**: Separate sheets for spell management

**Digital Character Sheets:**
- **D&D Beyond**: Official digital character sheet
- **Roll20**: Integrated with virtual tabletop
- **Fantasy Grounds**: VTT with character management
- **Foundry VTT**: Modern VTT system
- **Fight Club 5e / Game Master 5e** (iOS apps)
- **Fifth Edition Character Sheet** (Android app)

**Printing Tips:**
- Print on cardstock for durability
- Use page protectors and dry-erase markers for tracking HP, spell slots, etc.
- Laminate for ultimate reusability
- Print multiple copies for backup`
      },
      {
        id: "tracking-during-play",
        title: "Tracking Information During Play",
        content: `**What Changes Frequently:**
- Current Hit Points
- Temporary Hit Points
- Spell Slots (for casters)
- Class Resources (Rage, Ki, Channel Divinity, etc.)
- Ammunition count
- Consumable items (potions, scrolls)
- Prepared spells (for prepared casters)
- Death saves (when at 0 HP)

**Tracking Methods:**

**Physical Sheets:**
- Use pencil for permanent info, pen only for rarely-changing details
- Use scratch paper or sticky notes for frequently-changing values
- Put character sheet in page protector, use dry-erase marker
- Use paperclips or tokens to mark current HP, spell slots
- Laminate and use dry-erase markers

**Digital Tracking:**
- Use D&D Beyond on a tablet or phone
- Use dedicated dice rolling and tracking apps
- Use spreadsheet apps for complex calculations
- Keep notes app open for session notes

**Mixed Approach:**
- Physical sheet for reference, digital for tracking
- Paper sheet for abilities, app for HP and resources
- Use battle mat for positioning, sheet for stats

**During Combat:**
- Track initiative order separately
- Mark conditions and status effects clearly
- Keep frequently-used abilities readily accessible
- Pre-roll damage for multi-attack turns to speed play

**Between Sessions:**
- Update your sheet with new levels, items, or abilities
- Review and prepare spells (for prepared casters)
- Calculate changes from new magic items
- Back up your character (photo, PDF, or digital backup)`
      },
      {
        id: "special-sheets",
        title: "Specialized Character Sheets",
        content: `**Spellcaster Sheets:**
Many classes need additional spell tracking. Consider using:
- Spell card deck (physical or digital)
- Separate spell sheet listing all known/prepared spells
- Spell slot tracker sheet
- Spellbook app on phone/tablet

**Spellcasting Sheet Sections:**
- Spellcasting Ability and Modifier
- Spell Save DC (8 + proficiency + spellcasting modifier)
- Spell Attack Bonus (proficiency + spellcasting modifier)
- Spell Slots by level (track used/remaining)
- Known or prepared spells by level
- Ritual spells (don't need to prepare for Wizards)

**Animal Companion / Familiar Sheets:**
Rangers, Druids, and some other classes need companion tracking:
- Separate mini character sheet for companions
- Track companion HP, AC, attacks
- List companion abilities and features
- Note whether companion acts independently or on your turn

**Inventory Management:**
For loot-heavy campaigns:
- Detailed inventory sheet with item descriptions
- Carrying capacity calculator
- Gold/currency tracker
- Magic item attunement slots (maximum 3)

**Campaign-Specific Sheets:**
- Waterdeep: Dragon Heist has renown and faction trackers
- Curse of Strahd has dark gifts and curses
- Some campaigns track survival mechanics (food, water, exhaustion)
- Some DMs use inspiration or hero point systems

**Multiclass Sheets:**
- Track spell slots by multiclass total, not individual classes
- List class features from each class separately
- Note which proficiencies came from each class
- Track Hit Dice separately by class`
      },
      {
        id: "common-mistakes",
        title: "Common Character Sheet Mistakes",
        content: `**Calculation Errors:**
- Forgetting to add proficiency bonus to proficient skills/saves
- Not updating proficiency bonus when leveling up
- Adding proficiency to attack rolls for weapons you're not proficient with
- Calculating AC incorrectly (forgetting armor limits on DEX bonus)
- Not adding ability modifier to damage rolls

**Missing Information:**
- Not writing down what class features do
- Forgetting to track limited-use abilities (uses per rest)
- Not noting spell components or concentration requirements
- Missing passive Perception calculation
- Forgetting to list tool and language proficiencies

**Outdated Information:**
- Not updating max HP when leveling up
- Forgetting new class features at new levels
- Not adjusting saves/skills when ability scores increase
- Keeping dead character's items without DM approval
- Not removing used consumables

**Rules Confusion:**
- Adding ability modifier to Two-Weapon Fighting off-hand damage without the fighting style
- Thinking AC is the number you need to roll (it's what enemies need to beat)
- Not understanding the difference between attack rolls and damage rolls
- Forgetting temporary HP doesn't stack (you take the higher amount)
- Not knowing that death saves reset to zero when you're healed

**Organization Issues:**
- Writing too small or illegibly
- Not organizing features by frequency of use
- Cluttered sheet with too many notes
- Not having quick reference for most-used abilities
- Forgetting to bring important reference materials

**Quick Fixes:**
- Keep eraser and spare pencils
- Take a photo of your sheet as backup
- Review your sheet before each session
- Ask DM or other players if unsure about calculations
- Use online calculators to verify complex math`
      }
    ],
    commonMistakes: [
      "Calculating modifiers wrong — the formula is (Ability Score - 10) ÷ 2, rounded down. A 15 gives +2, not +5",
      "Forgetting proficiency bonus — proficient saves and skills add your proficiency bonus (+2 at level 1) on top of the ability modifier",
      "Not updating HP when leveling — maximum HP increases each level by your Hit Die roll (or average) plus CON modifier",
      "Leaving AC blank or wrong — AC = 10 + DEX modifier (unarmored), or armor's base AC + DEX modifier (up to armor limit) + shield"
    ],
    dmTips: [
      "Require players to bring updated character sheets to each session — review new characters before play begins",
      "Keep copies of character sheets in case players forget theirs — a quick phone photo works in a pinch",
      "For new players, sit with them during character creation to explain each section as they fill it out"
    ],
    faq: [
      { question: "Where do I get a character sheet?", answer: "Download official sheets free from D&D Beyond or Wizards of the Coast. D&D Beyond also offers free digital character sheets with auto-calculations." },
      { question: "What's the difference between ability score and modifier?", answer: "The ability score is the raw number (like 14 Strength). The modifier is what you add to rolls, calculated as (score - 10) ÷ 2 rounded down. A 14 gives a +2 modifier." },
      { question: "Do I need to fill out the whole sheet?", answer: "Fill out everything relevant to your current level. Leave sections like 'Death Saves' empty until needed. The personality section is optional but helps roleplay." },
      { question: "How do I calculate my attack bonus?", answer: "Attack bonus = ability modifier (STR for melee, DEX for ranged or finesse) + proficiency bonus (if proficient with the weapon). Most characters are proficient with their weapons." }
    ]
  },
  {
    slug: "dnd-characters",
    name: "D&D Characters",
    category: "creation",
    description: "Complete guide to D&D 5e characters. Learn about character creation, character development, roleplaying tips, and building memorable characters for your campaign.",
    searchVolume: 8140,
    sections: [
      {
        id: "what-makes-character",
        title: "What Makes a Great D&D Character?",
        content: `A great D&D character is more than just stats on a sheet. The best characters combine:

**Mechanical Effectiveness:**
- Competent at something useful to the party
- Able to contribute in combat and out of combat
- Doesn't have crippling weaknesses from poor choices
- Has a path for growth and improvement

**Compelling Personality:**
- Distinct voice and mannerisms
- Clear motivations and goals
- Interesting quirks or habits
- Memorable catchphrases or behaviors

**Party Integration:**
- Reasons to adventure with the group
- Connections to other party members
- Doesn't steal spotlight or overshadow others
- Contributes to group decisions and roleplay

**Story Potential:**
- Backstory hooks the DM can use
- Character flaws that create interesting moments
- Room for character growth and development
- Ties to the campaign world

**Balance:**
- Not an edgelord who trusts no one
- Not a joke character that gets old fast
- Not a perfect hero with no weaknesses
- Not a mechanical build with no personality

**The Golden Rule:**
Create a character you'd enjoy sitting next to at the table if someone else was playing them.`
      },
      {
        id: "character-concepts",
        title: "Character Concept Ideas",
        content: `Start with a simple concept and build from there:

**Archetype-Based:**
- The Grizzled Veteran: Seen too much, back for one last job
- The Eager Rookie: Wide-eyed and ready to prove themselves
- The Reluctant Hero: Dragged into adventure, secretly wants to be there
- The Seeker: Looking for lost knowledge, person, or artifact
- The Exile: Cast out from homeland, seeking redemption or revenge
- The Protector: Dedicated to keeping others safe
- The Trickster: Always looking for an angle or a laugh

**Contradiction-Based:**
- Cowardly Fighter who fights to overcome fear
- Atheist Cleric who channels divine power grudgingly
- Noble Barbarian who embodies cultured rage
- Illiterate Wizard who memorizes everything
- Lawful Good Rogue who steals from the corrupt
- Pacifist Monk who only fights to defend

**Relationship-Based:**
- Seeking a lost relative or friend
- Hunting the person who wronged them
- Following in a mentor's footsteps
- Running from arranged marriage or obligation
- Searching for their true family/heritage

**Goal-Based:**
- Earn enough gold to save their village
- Become the greatest [class] in the land
- Collect rare specimens or artifacts
- Map the unmapped world
- Prove a theory or discover lost knowledge
- Redeem a family name

**Flip the Trope:**
- Charismatic, social Wizard
- Intelligent, strategic Barbarian
- Heavily armored, defensive Rogue
- Brutal, aggressive Bard
- Urban Ranger who tracks people in cities
- Non-religious Paladin devoted to an ideal rather than a god`
      },
      {
        id: "backstory-tips",
        title: "Writing Character Backstories",
        content: `**The Right Length:**
- Keep it to 1-2 pages maximum
- Include the essential information first
- Expand only if your DM requests more detail
- Leave room for the DM to add to your story

**Essential Elements:**
- Where you're from and your early life
- The event that made you become an adventurer
- What you want now (short-term and long-term goals)
- Who you care about (NPCs the DM can use)
- What you fear or what troubles you

**What to Avoid:**
- Orphan with dead family (overdone, gives DM nothing to work with)
- "Most powerful/skilled/legendary" character (let that emerge through play)
- Detailed history that contradicts the campaign setting
- Extensive backstory that happened entirely solo
- Tragedy upon tragedy with no hope or lightness

**The "Leave Blanks" Method:**
Instead of defining everything, leave hooks:
- "I trained under a master swordsman whose name I've never revealed..."
- "I owe a debt to someone powerful, and one day they'll collect..."
- "I'm searching for [blank], though I don't know what it is yet..."
- "There's a reason I left home, but I haven't told anyone..."

**Collaborative Backstories:**
- Connect your character to another PC's backstory
- Make shared history with another player
- Create mutual goals or conflicts
- Build in existing relationships

**Questions to Answer:**
1. Why did you become an adventurer?
2. What do you want that you can't get by staying home?
3. Who do you care about?
4. What's your greatest fear?
5. What's something people always misunderstand about you?
6. What's a secret only you know?
7. What's the worst thing you've ever done?
8. What's the best thing you've ever done?

**Pitch Your Character:**
Can you describe your character in one sentence? That's your hook.
- "A cowardly knight trying to live up to his family's legacy."
- "A cheerful necromancer who just wants to help people (with undead labor)."
- "A disgraced noble investigator seeking one last chance at redemption."`
      },
      {
        id: "roleplay-tips",
        title: "Roleplaying Your Character",
        content: `**Finding Your Character's Voice:**
- You don't need to use an accent (but you can if it's fun)
- Focus on word choice and speech patterns
- Consider tempo: fast and excited vs slow and measured
- Add verbal tics or catchphrases sparingly
- Be consistent once you find something that works

**Body Language and Mannerisms:**
- Sit differently when in character
- Use gestures that fit your character
- Make eye contact (or avoid it) as your character would
- Mirror your character's confidence or nervousness

**Making Choices In-Character:**
- Ask "What would my character do?" not "What's optimal?"
- Accept consequences of character-driven choices
- Don't be afraid to make mistakes in character
- Remember that character flaws create interesting stories

**Engaging with Other Characters:**
- Give other players spotlight time
- Build on others' roleplay
- Create callbacks to previous moments
- Let others have the cool moments too

**Avoiding Common Pitfalls:**
- Don't make every conversation about your character
- Don't force your character voice if it's not working
- Don't use "It's what my character would do" to justify being disruptive
- Don't be afraid to break character briefly for table talk

**The Spectrum of Roleplay:**
- First Person: Speaking as your character ("I draw my sword")
- Third Person: Describing your character ("He draws his sword")
- Narration: Summarizing actions ("I search the room")

All three are valid. Use what feels natural for the moment.

**Developing Your Character Over Time:**
- Let experiences change your character
- Build relationships with NPCs and PCs
- Evolve goals as you learn more about the world
- Don't be afraid to retire a character if their story reaches a natural conclusion`
      },
      {
        id: "character-progression",
        title: "Character Development Through Play",
        content: `**Mechanical Progression:**
- Level up when appropriate (milestone or XP)
- Gain new abilities and features
- Improve ability scores or take feats
- Acquire magic items and equipment
- Develop combat tactics and strategies

**Narrative Progression:**
- Character goals evolve or get achieved
- Relationships deepen with party members
- Backstory elements get resolved
- New motivations emerge from campaign events
- Character worldview changes from experiences

**Types of Character Arcs:**
- **Growth Arc**: Character overcomes a flaw or fear
- **Fall Arc**: Character succumbs to temptation or corruption
- **Flat Arc**: Character stays true to their beliefs and changes the world around them
- **Positive Change Arc**: Character becomes better than they were
- **Disillusionment Arc**: Character's worldview is shattered and rebuilt

**Tracking Character Development:**
- Keep session notes from your character's perspective
- Update bonds, ideals, and flaws as they change
- Note significant moments and how they affected your character
- Track relationships with NPCs (improve or worsen over time)
- Mark when your character learns something important about the world

**When to Retire a Character:**
- Their story has reached a natural conclusion
- They've achieved their primary goal
- The character no longer fits the campaign direction
- You're no longer having fun playing them
- The character's story demands they leave the party (marriage, kingship, death)

**Introducing a New Character:**
- Discuss with your DM about when and how
- Create connections to the existing party
- Don't try to recreate your previous character
- Let your new character learn about the party naturally
- Give them a reason to join the existing quest

**Memorable Character Moments:**
- Heroic sacrifices
- Achieving long-term goals
- Dramatic failures and how you recover
- Unexpected character connections
- Times you surprised yourself with a choice
- Character-defining decisions that echo throughout the campaign`
      },
      {
        id: "party-dynamics",
        title: "Playing Well With Others",
        content: `**Creating Party Cohesion:**
- Establish shared goals or connections
- Find reasons your characters work together
- Respect other players' spotlight moments
- Build on others' ideas and roleplay
- Create callbacks to previous sessions

**Handling Party Conflict:**
- Inter-character conflict can be fun if everyone's comfortable
- Never let player conflict masquerade as character conflict
- Discuss boundaries in session zero
- Resolve conflicts in interesting ways, not extended arguments
- Remember the party ultimately needs to stay together

**Balancing Spotlight:**
- Not every session is about every character
- Let others have their moments
- Find ways to support other characters' stories
- Ask questions about other characters
- Celebrate other players' successes

**Party Roles:**
Most parties benefit from variety:
- **Tank/Defender**: Frontline, high AC/HP
- **Damage Dealer**: Focus on dealing damage
- **Healer/Support**: Keep party alive and buffed
- **Controller**: Battlefield control, debuffs enemies
- **Face**: Handles social situations
- **Skill Monkey**: Handles skill checks and exploration
- **Scout**: Stealth, perception, reconnaissance

**Flexible Roles:**
Don't feel locked into one role. Many characters can cover multiple areas, and parties can succeed with unconventional compositions.

**Red Flags to Avoid:**
- "My character works alone" (then why are you in a party?)
- Stealing from the party
- PvP without player consent
- Hogging the spotlight constantly
- Ignoring party decisions
- "It's what my character would do" as excuse for disruptive behavior
- Making characters that can't function in the campaign type

**Being a Good Party Member:**
- Share loot fairly
- Communicate your plans
- Ask for others' input
- Heal and help allies
- Have your character care about the other PCs
- Make choices that move the story forward
- Be present and engaged at the table`
      }
    ]
  },
  {
    slug: "dnd-point-buy",
    name: "D&D Point Buy Calculator",
    category: "creation",
    tool: "pointBuy",
    description: "Interactive Point Buy calculator for D&D 5e. Spend your 27 points, apply racial bonuses, and optimize your ability scores with our free tool.",
    searchVolume: 8790,
    sections: [
      {
        id: "point-buy-rules",
        title: "Point Buy Rules",
        content: `Point Buy is an ability score generation method that gives players 27 points to spend on ability scores.

**Basic Rules:**
- You have 27 points to spend
- All ability scores start at 8
- You can increase scores by spending points
- Maximum score is 15 before racial bonuses
- Minimum score is 8 (you can't go lower)

**Point Costs:**
- Score 9: 1 point (8→9)
- Score 10: 2 points (8→10)
- Score 11: 3 points (8→11)
- Score 12: 4 points (8→12)
- Score 13: 5 points (8→13)
- Score 14: 7 points (8→14)
- Score 15: 9 points (8→15)

**Notice:** Higher scores cost more points. Going from 13 to 14 costs 2 points, but going from 14 to 15 costs 2 more points (total 4 for that +1 modifier).

**After Point Buy:**
Apply racial bonuses after spending your points. This can bring scores above 15 at 1st level.

**Why Use Point Buy?**
- More balanced than rolling
- More flexible than Standard Array
- Prevents extremely high or low stats
- Fair for all players
- Allows customization within balanced limits`
      },
      {
        id: "point-buy-strategies",
        title: "Point Buy Strategies",
        content: `**Common Approaches:**

**The "Two High" Method:**
- Put 15 in your primary stat (9 points)
- Put 14 in your secondary stat (7 points)
- Put 14 in another useful stat (7 points)
- Put 12 in a fourth stat (4 points)
- Leave two stats at 8
- Total: 27 points
- Result: 15, 14, 14, 12, 8, 8

**The "Balanced" Method:**
- Avoid dump stats (nothing below 10)
- Put 15 in primary stat (9 points)
- Put 14 in secondary stat (7 points)
- Spread remaining 11 points across other stats
- Result: 15, 14, 12, 11, 10, 10 or similar

**The "Rounded" Method (Half-Feat Strategy):**
- Aim for odd numbers to maximize half-feat benefits
- Put 15 in primary stat (gets rounded to 16 with half-feat)
- Put 13, 13, 13 in other useful stats (can all become 14 eventually)
- Result: 15, 13, 13, 13, 10, 8 or similar

**Class-Specific Examples:**

**Fighter (Strength-based):**
- STR 15, CON 14, DEX 14, WIS 10, INT 8, CHA 8
- With Mountain Dwarf: STR 17, CON 16, excellent survivability

**Wizard:**
- INT 15, DEX 14, CON 14, WIS 12, CHA 8, STR 8
- With High Elf: INT 17, DEX 16, DEX 16, great defense and casting

**Rogue:**
- DEX 15, CON 14, INT 14, WIS 10, CHA 8, STR 8
- With Lightfoot Halfling: DEX 17, CON 14, great for Arcane Trickster

**Cleric:**
- WIS 15, CON 14, STR 14, DEX 10, INT 8, CHA 8
- With Hill Dwarf: WIS 16, CON 15, durable support

**Warlock:**
- CHA 15, CON 14, DEX 14, INT 10, WIS 8, STR 8
- With Half-Elf: CHA 17, CON 15, DEX 15, strong all-around

**The "Max Min" Method:**
- Maximize primary stat and minimize dump stats
- Put 15 in primary (9 points)
- Put 15 in secondary (9 points)
- Put 13 in tertiary (5 points)
- Put 10 in fourth (2 points)
- Put 10 in fifth (2 points)
- Leave one at 8
- Total: 27 points
- Result: 15, 15, 13, 10, 10, 8`
      },
      {
        id: "point-buy-calculators",
        title: "Point Buy Calculators",
        content: `**Online Point Buy Calculators:**

**Chicken Dinner's Point Buy Calculator**
- Most popular and user-friendly
- Shows point costs clearly
- Can apply racial bonuses
- Mobile-friendly
- URL: chicken-dinner.com/5e/5e-point-buy.html

**D&D Beyond Character Builder**
- Official integrated calculator
- Part of full character creation
- Shows final stats with racial bonuses
- Requires D&D Beyond account

**Orcpub Character Builder**
- Integrated into character builder
- Legacy tool (no longer maintained)
- Still functional

**5e Point Buy Calculator (mobile apps)**
- Various apps available on iOS and Android
- Search "5e point buy" in app stores
- Good for on-the-go planning

**Spreadsheet Calculators:**
- Many available on Reddit and Google Sheets
- Can customize for houserules
- Good for experimenting with builds

**Manual Calculation:**
Simply use the point costs listed above:
1. Start with all scores at 8
2. Add points based on desired final scores
3. Ensure total doesn't exceed 27
4. Verify no score exceeds 15
5. Apply racial bonuses

**Using Calculators Effectively:**
- Try multiple combinations before committing
- Consider racial bonuses (use races that boost your key stats)
- Think about your 4th level ASI or feat
- Plan for odd scores if you want half-feats
- Don't stress about perfection - most arrays work fine`
      },
      {
        id: "point-buy-vs-other-methods",
        title: "Point Buy vs Other Methods",
        content: `**Point Buy vs Standard Array:**

**Standard Array: 15, 14, 13, 12, 10, 8**
- Pre-determined scores
- Faster (no decisions needed)
- Equivalent to a specific point buy spread
- Less flexible than point buy

Point Buy is strictly better IF you want customization. You can recreate Standard Array with point buy, but you can also do other combinations.

**Point Buy vs Rolling (4d6 Drop Lowest):**

**Rolling Advantages:**
- Can get stats higher than 15
- Exciting and random
- Potential for very powerful characters
- Traditional method

**Rolling Disadvantages:**
- Can get very weak stats
- Unbalanced party (some players much stronger)
- Feels bad if you roll poorly
- Can't optimize freely

**Point Buy Advantages:**
- Perfectly balanced
- Reliable minimum power level
- Everyone has fair starting point
- Can plan your build

**Point Buy Disadvantages:**
- Can't get stats above 15 before racial bonuses
- Less excitement from randomness
- No chance of exceptional stats

**DM Considerations:**

**When to Use Point Buy:**
- You want balanced party
- Players are experienced and want to optimize
- Campaign is challenging
- You want predictable power levels

**When to Use Standard Array:**
- New players who might be overwhelmed
- Quick character creation
- You want balanced party with no decisions

**When to Allow Rolling:**
- You're okay with power imbalance
- Players enjoy gambling
- Campaign is sandbox/low stakes
- You can adjust difficulty on the fly
- You have safety nets (reroll if total too low, use Standard Array if unhappy, etc.)

**Hybrid Approaches:**
- Roll, but can use Standard Array if rolls are bad
- Roll, but minimum 72 total (sum of all six scores)
- Roll as a group, everyone uses the same array
- Point buy with 30 points instead of 27
- Point buy with max of 16 instead of 15`
      },
      {
        id: "optimizing-point-buy",
        title: "Optimizing Point Buy",
        content: `**General Optimization Principles:**

**Maximize Your Primary Stat:**
- Always put 15 in your most important ability
- Use races that boost that stat (+2 racial bonus)
- Result: 17 at 1st level, can reach 20 by 8th level

**Value of 14 vs 15:**
- 14 costs 7 points, gives +2 modifier
- 15 costs 9 points, gives +2 modifier
- The +1 score difference only matters for:
  - Eventual ASI efficiency
  - Multiclass prerequisites
  - Breaking grapples (raw score used)
- Usually better to put 14 in secondary stats, save 2 points

**Dump Stats vs Balanced:**
- Leaving stats at 8 gives more points for important stats
- But -1 modifier can hurt in unexpected situations
- "Safe" dump stats by class:
  - Martials: INT, CHA (sometimes WIS)
  - Casters: STR, sometimes DEX (if using Mage Armor)
  - Everyone needs CON for HP

**Even vs Odd Scores:**
- Modifiers only change every 2 points
- 14 and 15 both give +2 modifier
- Odd scores are "wasted" at 1st level
- BUT odd scores pair well with half-feats (+1 ASI)
- If you plan to take Resilient (CON), consider 13 CON instead of 14

**Race Selection for Optimization:**
- Choose race based on ability score synergy
- +2/+1 races (standard): Match to your primary/secondary stats
- Custom Lineage (Tasha's): Put +2 anywhere, incredibly flexible
- Variant Human: +1/+1 anywhere, plus feat at 1st level

**Most Efficient Point Buy Arrays:**

**Maximum Main Stat (15+2 racial = 17):**
- 15, 14, 14, 12, 8, 8 (27 points)
- Best for SAD (Single Ability Dependent) classes
- Leaves two dump stats

**Balanced No Dumps:**
- 15, 14, 13, 12, 10, 8 (27 points)
- Only one dump stat
- Good for skill-heavy characters

**Double Main Stats (MAD builds):**
- 15, 15, 13, 10, 8, 8 (27 points)
- For Monk (DEX/WIS) or Paladin (STR/CHA) or Barbarian (STR/CON)
- Needs race that boosts both main stats

**Odd Score Strategy (Half-Feat Planning):**
- 15, 15, 15, 8, 8, 8 (27 points)
- Terrible at 1st level (wasted modifiers)
- Amazing if you plan three half-feats
- High risk, high reward

**Defensive Optimization:**
- Never dump CON (HP is too valuable)
- Consider 14 DEX even for heavy armor users (max medium armor benefit)
- WIS saves are common, don't dump WIS lightly

**The "16 at Level 1" Priority:**
If your race gives +2 to your main stat, you start with 17 (15+2). This means:
- 18 at 4th level (one ASI)
- 20 at 8th level (two ASIs)
- You're ahead of the curve on your main stat

**When NOT to Optimize:**
- Your character concept requires specific stats
- You want to roleplay certain strengths/weaknesses
- Your party needs specific roles filled
- You're playing a low-stakes campaign
- Optimization isn't fun for you

Remember: The difference between optimized and unoptimized characters is usually small. D&D 5e is fairly forgiving. Play what sounds fun!`
      }
    ],
    commonMistakes: [
      "Spending points before deciding on a race — always check racial bonuses first since a +2 bonus can push your 15 to 17",
      "Ignoring odd scores — a 15 becomes useful when paired with a +1 racial bonus (making 16) or a half-feat later",
      "Dumping Constitution — every class needs HP, don't go below 12 CON even as a caster",
      "Maxing too many stats — you only need 1-2 high stats, spread the rest based on saving throws and skills you'll actually use"
    ],
    dmTips: [
      "Point Buy ensures party balance — recommend it for new groups or campaigns where power disparity would be problematic",
      "Consider allowing 30 points instead of 27 for heroic campaigns where you want characters to feel powerful from the start",
      "If a player wants to roll but gets bad stats, offer Point Buy as a safety net rather than endless rerolls"
    ],
    faq: [
      { question: "Can I start with a 16 or higher using Point Buy?", answer: "Not with base points alone — the maximum base score is 15. However, after applying racial bonuses (+1 or +2), you can reach 16 or 17 at 1st level." },
      { question: "What's the best Point Buy array?", answer: "15, 14, 14, 12, 8, 8 is popular for focused builds. For SAD classes needing one main stat, this maximizes your primary while keeping two decent secondaries." },
      { question: "Is Point Buy better than rolling?", answer: "It's different, not better. Point Buy guarantees balanced, predictable stats. Rolling can give higher highs (or lower lows) and adds excitement. Most organized play uses Point Buy for fairness." },
      { question: "How do I calculate Point Buy manually?", answer: "Start all six abilities at 8. Then spend points: 9 costs 1 point, 10 costs 2, 11 costs 3, 12 costs 4, 13 costs 5, 14 costs 7, and 15 costs 9. Your total spent must equal 27." }
    ]
  },
  {
    slug: "dnd-stat-roller",
    name: "D&D Stat Roller (4d6 Drop Lowest)",
    category: "creation",
    tool: "statRoller",
    description: "Roll ability scores using the classic 4d6 drop lowest method. Our interactive stat roller generates all six scores with full transparency on each die rolled.",
    searchVolume: 6100,
    sections: [
      {
        id: "4d6-rules",
        title: "How 4d6 Drop Lowest Works",
        content: `The 4d6 drop lowest method is the most popular way to roll ability scores in D&D 5e.

**The Process:**
1. Roll four six-sided dice (4d6)
2. Remove the lowest die result
3. Sum the remaining three dice
4. This gives you one ability score (range: 3-18)
5. Repeat this process six times for all six ability scores

**Example Roll:**
- You roll: 4, 6, 2, 5
- Drop the lowest (2)
- Sum the rest: 4 + 6 + 5 = **15**

**After Rolling:**
- Assign each of your six results to your six ability scores however you want
- Apply racial bonuses to the final assigned scores
- There's no rule requiring you to assign them in order`
      },
      {
        id: "probability",
        title: "Probability and Statistics",
        content: `**Expected Results:**
The average result for 4d6 drop lowest is approximately **12.24** per ability score, with a total array average around **73.5**.

**Score Probabilities:**
- **18**: ~1.6% (rare but exciting)
- **17**: ~4.2%
- **16**: ~7.3%
- **15**: ~10.1%
- **14**: ~12.3%
- **13**: ~13.3%
- **12**: ~13.0%
- **11**: ~11.4%
- **10**: ~9.4%
- **9 or lower**: ~17.4%

**What This Means:**
- Most results fall between 10-15
- Getting an 18 is exciting but not expected
- Getting multiple scores below 10 is uncommon
- The "drop lowest" mechanic skews results higher than straight 3d6

**Comparing to Other Methods:**
- **Standard Array (72 total)**: 4d6 drop lowest averages slightly higher
- **Point Buy (72-75 equivalent)**: Rolling can exceed point buy's 15 maximum
- **3d6 straight (average 10.5 per stat)**: 4d6 drop lowest is significantly better`
      },
      {
        id: "variant-rules",
        title: "Variant Rolling Methods",
        content: `Many groups modify the standard rolling method. Here are common variants:

**Roll 4d6 Drop Lowest (Standard):**
- As described above
- Most common method
- PHB official method

**3d6 Straight:**
- Roll 3d6 and take the total
- More random, lower average
- "Old school" D&D feel
- Can result in very weak characters

**4d6 Drop Lowest, Reroll 1s:**
- Any 1s are rerolled before dropping
- Higher average scores
- Minimum score is 6 instead of 3

**Roll 4d6 Seven Times, Drop Lowest Array:**
- Roll seven sets of 4d6 drop lowest
- Discard your worst result
- Gives one "free" bad roll

**Group Array:**
- One player rolls six stats
- Everyone uses the same array
- Ensures party balance while keeping randomness

**Roll Two Arrays, Pick One:**
- Roll two complete sets of stats
- Choose which array to use
- Safety net for bad rolls

**Minimum Total Rule:**
- If your total (sum of all six) is below a threshold (often 70 or 72), reroll everything
- Prevents extremely weak characters

**DM Considerations:**
Before rolling, discuss with your DM which method they prefer and what safety nets exist for poor rolls.`
      },
      {
        id: "assigning-stats",
        title: "Assigning Your Rolls",
        content: `**Priority by Class:**

After rolling, you need to assign each number to an ability. Here's general guidance:

**Primary Stat First:**
- **Barbarian, Fighter (melee)**: Strength
- **Ranger, Rogue, Fighter (ranged)**: Dexterity
- **Wizard, Artificer**: Intelligence
- **Cleric, Druid, Monk**: Wisdom
- **Bard, Paladin, Sorcerer, Warlock**: Charisma

**Constitution is Always Second:**
Every character needs hit points. Put your second-best roll in Constitution.

**Dump Stats:**
Your lowest rolls typically go to stats your class doesn't use:
- Casters can usually dump Strength
- Barbarians can dump Intelligence
- Dexterity is hard to dump (AC, initiative, common saves)
- Wisdom is risky to dump (many dangerous effects target WIS saves)

**Example Assignment (Fighter):**
Rolls: 16, 14, 13, 12, 10, 8
- STR: 16 (primary attack stat)
- CON: 14 (HP and concentration)
- DEX: 13 (AC in medium armor, initiative)
- WIS: 12 (saving throws)
- CHA: 10 (social situations)
- INT: 8 (dump stat)

**Consider Racial Bonuses:**
If your race gives +2 DEX and you rolled 16, 15, 14, 13, 10, 8:
- You might put 14 in DEX (becomes 16 with racial)
- Put 16 in your secondary stat
- This spreads your power more evenly`
      },
      {
        id: "rolling-etiquette",
        title: "Rolling Etiquette",
        content: `**Table Rules:**

**Roll in Front of the Group:**
Most DMs require stats be rolled where everyone can see. This prevents "miraculously good" home rolls.

**Use Designated Dice:**
Some tables require specific dice or a dice roller app to prevent loaded dice (even unintentional manufacturing defects).

**Accept What You Roll:**
Part of the fun of rolling is embracing randomness. A character with 8 Charisma is an opportunity for roleplay, not a failure.

**Discuss Rerolls Beforehand:**
Before anyone rolls, the group should agree on:
- What happens if someone rolls terribly?
- Is there a minimum total allowed?
- Can you use Standard Array as a backup?

**Don't Cheat:**
Seriously. It's a game with friends. Nobody cares if your Wizard has 18 INT instead of 16. Rolling high doesn't make you a better player.

**Celebrate and Commiserate:**
Rolling stats is a shared experience. Cheer for good rolls, sympathize with bad ones. It builds party camaraderie before the game even starts.

**Record Everything:**
Write down your stats immediately. Take a photo if using physical dice. You don't want disputes later about what you rolled.`
      }
    ],
    commonMistakes: [
      "Rolling stats at home alone — most DMs require witnessed rolls to prevent 'suspiciously good' stats",
      "Assigning stats before considering racial bonuses — a +2 racial can change which ability gets your highest roll",
      "Thinking low stats ruin a character — a 6 Intelligence Fighter can be hilarious and memorable",
      "Rerolling without DM permission — the rules for handling bad stat totals vary by table"
    ],
    dmTips: [
      "Set clear expectations before rolling: minimum totals, reroll policies, and whether Standard Array is a backup option",
      "Consider having everyone roll in the same session to make it a shared experience and prevent outlier 'home rolls'",
      "If one player rolls significantly better/worse than others, consider letting them adjust one stat by 2 points to balance the party"
    ],
    faq: [
      { question: "What's the minimum and maximum possible with 4d6 drop lowest?", answer: "Minimum is 3 (four 1s, drop one, sum three 1s). Maximum is 18 (four 6s, drop one, sum three 6s). The realistic range is typically 6-17." },
      { question: "Should I reroll if my stats are bad?", answer: "That depends on your DM's rules. Common policies include: reroll if total is below 70, use Standard Array as backup, or just play what you rolled. Ask before rolling." },
      { question: "Can I rearrange my rolls after assigning them?", answer: "Yes, until you finalize your character. You assign rolls to abilities in any order you choose, and can change your mind during character creation." },
      { question: "Is rolling better than Point Buy?", answer: "Rolling has higher variance — you might get better stats (or worse). Point Buy guarantees consistent, balanced stats. Neither is 'better,' just different experiences." }
    ]
  },
  {
    slug: "dnd-standard-array",
    name: "D&D Standard Array Assigner",
    category: "creation",
    tool: "standardArray",
    description: "Assign the D&D 5e Standard Array (15, 14, 13, 12, 10, 8) to your abilities with our interactive tool. Includes class-specific recommendations and racial bonus calculations.",
    searchVolume: 4400,
    sections: [
      {
        id: "standard-array-basics",
        title: "What is the Standard Array?",
        content: `The Standard Array is a pre-determined set of six ability scores you can use instead of rolling or using Point Buy.

**The Standard Array:**
**15, 14, 13, 12, 10, 8**

**How to Use It:**
1. Assign each of these six numbers to one of your six ability scores (Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma)
2. Each number can only be used once
3. Apply your racial bonuses after assignment

**Why Use Standard Array?**
- **Fast**: No decisions about point allocation
- **Balanced**: Every Standard Array character has the same power level
- **Simple**: Great for new players
- **Fair**: No lucky or unlucky rolls

**Official Source:**
Standard Array is found in the Player's Handbook, Chapter 1, under "Determine Ability Scores."`
      },
      {
        id: "class-recommendations",
        title: "Recommended Assignments by Class",
        content: `**Melee Martial Classes:**

**Barbarian**: STR 15, CON 14, DEX 13, WIS 12, CHA 10, INT 8
- Strength for attacks and Reckless Attack
- Constitution for HP and Unarmored Defense
- Dexterity for AC and initiative

**Fighter (Strength)**: STR 15, CON 14, DEX 13, WIS 12, CHA 10, INT 8
- Similar to Barbarian
- WIS helps with Perception and saves

**Paladin**: STR 15, CHA 14, CON 13, WIS 12, DEX 10, INT 8
- Strength and Charisma are both essential
- Smites key off Charisma for spell slots

**Dexterity Martial Classes:**

**Fighter (Dexterity)**: DEX 15, CON 14, WIS 13, STR 12, CHA 10, INT 8
- Archery or finesse weapons
- WIS for saves and Perception

**Ranger**: DEX 15, WIS 14, CON 13, INT 12, STR 10, CHA 8
- Wisdom powers spellcasting
- INT helps with Nature/Survival

**Rogue**: DEX 15, CON 14, WIS 13, INT 12, CHA 10, STR 8
- All about Dexterity
- INT for Investigation, WIS for Perception

**Monk**: DEX 15, WIS 14, CON 13, STR 12, INT 10, CHA 8
- DEX and WIS are both crucial
- CON third for ki-powered survival

**Spellcasters:**

**Wizard**: INT 15, DEX 14, CON 13, WIS 12, CHA 10, STR 8
- Intelligence is everything
- DEX for AC (no armor)

**Sorcerer**: CHA 15, CON 14, DEX 13, WIS 12, INT 10, STR 8
- Charisma drives all abilities
- CON for concentration

**Warlock**: CHA 15, CON 14, DEX 13, WIS 12, INT 10, STR 8
- Same as Sorcerer
- Very consistent

**Bard**: CHA 15, DEX 14, CON 13, WIS 12, INT 10, STR 8
- Charisma for spells and skills
- DEX for light armor AC

**Cleric**: WIS 15, CON 14, STR 13, DEX 12, CHA 10, INT 8
- Wisdom powers everything
- STR for heavy armor clerics

**Druid**: WIS 15, CON 14, DEX 13, INT 12, CHA 10, STR 8
- Wisdom for spells and Wild Shape DCs
- CON for concentration`
      },
      {
        id: "standard-array-vs-other",
        title: "Standard Array vs Other Methods",
        content: `**Standard Array vs Point Buy:**

Standard Array IS Point Buy, frozen at one specific allocation.

**Point Buy Equivalent:**
The Standard Array (15, 14, 13, 12, 10, 8) costs exactly 27 points:
- 15 = 9 points
- 14 = 7 points
- 13 = 5 points
- 12 = 4 points
- 10 = 2 points
- 8 = 0 points
- **Total: 27 points**

**When Point Buy is Better:**
- You want 15, 15 in two stats (costs 18 points, leaving 9 for others)
- You want to avoid dump stats entirely
- Your build needs a specific unusual array

**When Standard Array is Better:**
- You're new to the system
- You want fast character creation
- The DM requires it for simplicity

**Standard Array vs Rolling:**

**Standard Array Guarantees:**
- No score above 15 (before racials)
- No score below 8
- Total of 72 points (15+14+13+12+10+8)

**Rolling Offers:**
- Potential for 16, 17, or even 18
- Risk of multiple low scores
- Excitement and randomness
- Average total around 73-74 (slightly higher)

**The Trade-off:**
Rolling might give you an 18, but it might also give you multiple scores under 10. Standard Array is safe and predictable.`
      },
      {
        id: "racial-synergy",
        title: "Racial Bonus Synergy",
        content: `**Maximizing Racial Bonuses:**

Your racial bonus determines where to put your 15.

**+2 to Primary Stat Races:**
Put your 15 in the stat that gets +2 racial. This gives you 17 at level 1.

**Examples:**
- **Mountain Dwarf** (+2 STR, +2 CON): 15→17 STR, 14→16 CON. Amazing for martials.
- **High Elf** (+2 DEX, +1 INT): 15→17 DEX, 13→14 INT. Great for Eldritch Knight or Bladesinger.
- **Half-Elf** (+2 CHA, +1/+1 choice): 15→17 CHA, then +1 to two other stats. Incredibly versatile.
- **Variant Human** (+1/+1 choice + feat): Put +1 where it rounds up a score. The feat is the real prize.

**Tasha's Custom Lineage:**
+2 anywhere, one feat. Put the +2 on your 15 for a clean 17 in any stat, then take a powerful feat.

**Common Race/Class Combos:**

| Class | Recommended Race | Result |
|-------|------------------|--------|
| Barbarian | Half-Orc | 17 STR, 15 CON |
| Fighter | Custom Lineage | 17 in main stat + feat |
| Paladin | Half-Elf | 17 CHA, +1 to STR and CON |
| Ranger | Wood Elf | 17 DEX, 14 WIS |
| Rogue | Lightfoot Halfling | 17 DEX |
| Wizard | High Elf | 16 INT, 17 DEX |
| Cleric | Hill Dwarf | 16 WIS, 16 CON |
| Warlock | Tiefling | 17 CHA, 14 INT |`
      },
      {
        id: "level-progression",
        title: "Ability Score Progression",
        content: `**Planning Ahead with Standard Array:**

Starting with Standard Array, here's how your abilities progress:

**ASI Schedule:**
Most classes get Ability Score Improvements at levels 4, 8, 12, 16, and 19.

**Getting to 20:**
Starting with 15 + 2 racial = 17
- Level 4: +2 = 19
- Level 8: +1 (or +2 and take feat) = 20

You can max your primary stat by level 8, leaving later ASIs for feats.

**The Odd Score Strategy:**
Standard Array includes 15 and 13 — both odd numbers.

**Why This Matters:**
- Odd scores "waste" a point (15 gives same +2 modifier as 14)
- BUT odd scores pair perfectly with half-feats

**Half-Feats to Consider:**
- **Resilient** (+1 to chosen ability, proficiency in that save)
- **Fey Touched** (+1 CHA/INT/WIS, free spells)
- **Shadow Touched** (+1 CHA/INT/WIS, free spells)
- **Skill Expert** (+1 to any ability, expertise)
- **Chef** (+1 CON or WIS, healing treats)

**Example Progression (Fighter with 15 STR):**
- Level 1: 15 STR (17 with +2 racial)
- Level 4: Take Great Weapon Master (feat, STR stays 17)
- Level 6: Fighter Extra ASI → STR 19
- Level 8: STR 20 or take Sentinel
- Level 12+: Pick up feats freely

**Variant Human Exception:**
V. Human gets +1/+1 and a feat at level 1. Consider putting +1 on your 15 for 16, then using your level 4 ASI for +2 to reach 18. Slower to 20, but you get a feat earlier.`
      }
    ],
    commonMistakes: [
      "Putting 15 in a stat without a racial bonus — always align your highest score with your +2 racial to reach 17",
      "Ignoring Constitution — never assign 8 to CON unless you have a very specific build reason",
      "Assigning randomly — Standard Array has exactly enough power for a strong character, so assignment strategy matters",
      "Forgetting that 13 and 15 are odd — plan to round them up with half-feats or racial bonuses"
    ],
    dmTips: [
      "Standard Array is excellent for new players — it removes decision paralysis while still creating competent characters",
      "For one-shots or drop-in games, require Standard Array for fast, balanced character creation",
      "Consider offering Standard Array as a 'safety net' when players roll poorly"
    ],
    faq: [
      { question: "Is Standard Array weaker than rolling?", answer: "On average, slightly. 4d6 drop lowest averages about 73.5 total vs Standard Array's 72. But rolling can give you worse results — Standard Array guarantees a decent character." },
      { question: "Can I use Standard Array for every ability score method?", answer: "The DM chooses which methods are available. Most DMs allow Standard Array as an option alongside rolling or Point Buy." },
      { question: "What if I want two 15s?", answer: "Standard Array only has one 15. If you need two high stats, use Point Buy instead (15, 15, 13, 10, 8, 8 is possible with 27 points)." },
      { question: "Do I apply racial bonuses before or after assigning?", answer: "After. First assign the six Standard Array numbers to your six abilities, then add your racial bonuses on top." }
    ]
  }
];

// =============================================================================
// CLASS FEATURES (WIZARD)
// =============================================================================

export const classFeaturePages: ClassFeaturePage[] = [
  {
    slug: "arcane-recovery-5e",
    name: "Arcane Recovery",
    category: "classes",
    className: "Wizard",
    featureLevel: "1st",
    description: "Arcane Recovery is a core Wizard feature that lets you regain expended spell slots during a short rest, giving Wizards an edge in resource management over other full casters.",
    searchVolume: 2900,
    sections: [
      {
        id: "how-it-works",
        title: "How Arcane Recovery Works",
        content: `<p><strong>Once per day</strong> when you finish a <strong>short rest</strong>, you can recover expended spell slots. The spell slots recovered must have a combined level equal to or less than <strong>half your wizard level (rounded up)</strong>.</p>

<p><strong>Key Restrictions:</strong></p>
<ul>
  <li>You cannot recover 6th level or higher spell slots</li>
  <li>You can only use this feature once per day (resets on long rest)</li>
  <li>Must be during a short rest (not just any downtime)</li>
</ul>

<p><strong>Recovery by Wizard Level:</strong></p>
<table class="ref-table">
  <tr><th>Wizard Level</th><th>Max Slot Levels Recovered</th><th>Example Combinations</th></tr>
  <tr><td>1st-2nd</td><td>1</td><td>One 1st-level slot</td></tr>
  <tr><td>3rd-4th</td><td>2</td><td>Two 1st-level slots OR one 2nd-level</td></tr>
  <tr><td>5th-6th</td><td>3</td><td>One 3rd-level OR one 2nd + one 1st</td></tr>
  <tr><td>7th-8th</td><td>4</td><td>One 4th-level OR two 2nd-level slots</td></tr>
  <tr><td>9th-10th</td><td>5</td><td>One 5th-level OR various combos</td></tr>
</table>`
      },
      {
        id: "optimal-use",
        title: "Optimal Use Strategies",
        content: `<p><strong>Early Levels (1-4):</strong> Recovery matters most here when spell slots are scarce. A 3rd level wizard recovering a 2nd level slot effectively gets 50% more Web or Misty Step casts per day.</p>

<p><strong>Mid Levels (5-10):</strong> Use Arcane Recovery to refresh your workhorse spells like Fireball or Counterspell. Don't save it for the "perfect moment" - use it during your first short rest.</p>

<p><strong>Higher Levels (11+):</strong> The 5th-level slot cap starts to feel limiting. Prioritize recovering multiple lower-level slots for utility spells like Shield and Absorb Elements.</p>

<p><strong>Pro Tip:</strong> Coordinate with your party to take short rests. Arcane Recovery is only useful if your party actually rests - communicate your resource needs!</p>`
      }
    ],
    commonMistakes: [
      "Trying to recover 6th level or higher slots (maximum is 5th level slots)",
      "Using Arcane Recovery multiple times per day (it's once per day only)",
      "Forgetting it must be during a short rest, not just during downtime",
      "Not tracking your wizard level correctly when calculating recovery amount"
    ],
    dmTips: [
      "Arcane Recovery is a significant resource advantage - plan encounter days with 2-3 short rests to let wizards shine",
      "The feature encourages multiple encounters per adventuring day over single big fights",
      "Wizards without short rest opportunities lose a major class feature"
    ]
  },
  {
    slug: "arcane-tradition-5e",
    name: "Arcane Tradition",
    category: "classes",
    className: "Wizard",
    featureLevel: "2nd",
    description: "Arcane Tradition is the Wizard's subclass feature, representing specialization in one of the eight schools of magic or other magical disciplines. Your choice shapes your playstyle and grants unique abilities.",
    searchVolume: 1800,
    sections: [
      {
        id: "overview",
        title: "What is an Arcane Tradition?",
        content: `<p>At 2nd level, Wizards choose an <strong>Arcane Tradition</strong> - their school of magical specialization. This choice grants:</p>
<ul>
  <li><strong>Savant:</strong> Copy spells from your chosen school at half time and gold cost</li>
  <li><strong>Unique Features:</strong> Special abilities at levels 2, 6, 10, and 14</li>
  <li><strong>Playstyle Definition:</strong> Each school fundamentally changes how you approach problems</li>
</ul>

<p><strong>Important:</strong> Your Arcane Tradition doesn't limit what spells you can learn - you can still learn any wizard spell. It just makes your specialty school spells cheaper to copy and gives you bonus features.</p>`
      },
      {
        id: "schools",
        title: "The Eight Schools of Magic",
        content: `<p><strong>Player's Handbook Schools:</strong></p>
<ul>
  <li><strong>Abjuration:</strong> Protective magic, Arcane Ward absorbs damage - great for survivability</li>
  <li><strong>Conjuration:</strong> Summoning and teleportation - excellent utility and action economy</li>
  <li><strong>Divination:</strong> Portent dice replace any d20 roll - arguably the most powerful subclass</li>
  <li><strong>Enchantment:</strong> Mind control and charms - powerful in social situations</li>
  <li><strong>Evocation:</strong> Damage spells with Sculpt Spells to protect allies from your Fireballs</li>
  <li><strong>Illusion:</strong> Creative problem-solving, illusions become semi-real at higher levels</li>
  <li><strong>Necromancy:</strong> Undead minions and life drain - build your own army</li>
  <li><strong>Transmutation:</strong> Change matter, Transmuter's Stone provides flexible buffs</li>
</ul>

<p><strong>Other Sourcebook Traditions:</strong></p>
<ul>
  <li><strong>War Magic</strong> (XGtE): Defensive boosts, good for survivability-focused wizards</li>
  <li><strong>Chronurgy</strong> (EGtW): Time manipulation, force rerolls, extremely powerful</li>
  <li><strong>Graviturgy</strong> (EGtW): Gravity control for battlefield manipulation</li>
  <li><strong>Order of Scribes</strong> (TCoE): Spellbook utility, change damage types</li>
  <li><strong>Bladesinging</strong> (TCoE): Melee wizard combat, high AC and mobility</li>
</ul>`
      },
      {
        id: "choosing",
        title: "Choosing Your Tradition",
        content: `<p><strong>For Optimization:</strong></p>
<ul>
  <li><strong>Divination</strong> - Portent is the best subclass feature in the game</li>
  <li><strong>Chronurgy</strong> - Time manipulation is incredibly powerful</li>
  <li><strong>Abjuration</strong> - Arcane Ward makes you surprisingly tanky</li>
</ul>

<p><strong>For Flavor/Fun:</strong></p>
<ul>
  <li><strong>Necromancy</strong> - If you want a skeleton army</li>
  <li><strong>Illusion</strong> - For creative, out-of-the-box solutions</li>
  <li><strong>Bladesinging</strong> - For the sword-wielding wizard fantasy</li>
</ul>

<p><strong>For New Players:</strong></p>
<ul>
  <li><strong>Evocation</strong> - Simple and effective, Sculpt Spells solves "friendly fire"</li>
  <li><strong>Abjuration</strong> - Harder to kill, more forgiving of positioning mistakes</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Thinking your Arcane Tradition limits what spells you can learn (it doesn't)",
      "Forgetting the Savant feature that halves copying costs for your school",
      "Not considering how your tradition affects your spell selection priorities"
    ],
    dmTips: [
      "Include spell scrolls from the wizard's chosen school as treasure",
      "Create encounters that let specialty features shine (illusions for illusionists, etc.)",
      "Remember that each school has specific identity - NPCs might recognize a wizard's specialty"
    ]
  },
  {
    slug: "spell-mastery-5e",
    name: "Spell Mastery",
    category: "classes",
    className: "Wizard",
    featureLevel: "18th",
    description: "Spell Mastery allows high-level Wizards to cast one 1st-level and one 2nd-level spell at will, without expending spell slots - representing true mastery over basic arcana.",
    searchVolume: 1200,
    sections: [
      {
        id: "how-it-works",
        title: "How Spell Mastery Works",
        content: `<p>At 18th level, you choose <strong>one 1st-level spell</strong> and <strong>one 2nd-level spell</strong> from your spellbook. You can cast these spells at their lowest level <strong>without expending a spell slot</strong> and without having them prepared.</p>

<p><strong>Key Points:</strong></p>
<ul>
  <li>You can still cast these spells using higher-level slots for increased effect</li>
  <li>You can change your chosen spells by spending 8 hours studying your spellbook</li>
  <li>The spells must be wizard spells in your spellbook</li>
  <li>This essentially gives you two at-will spells</li>
</ul>`
      },
      {
        id: "best-choices",
        title: "Best Spell Choices",
        content: `<p><strong>Top 1st-Level Choices:</strong></p>
<ul>
  <li><strong>Shield:</strong> +5 AC as a reaction, at will - you become nearly untouchable</li>
  <li><strong>Detect Magic:</strong> Constant magical awareness without using ritual time</li>
  <li><strong>Magic Missile:</strong> Guaranteed damage, breaks concentration</li>
  <li><strong>Disguise Self:</strong> Infinite disguises for infiltration</li>
</ul>

<p><strong>Top 2nd-Level Choices:</strong></p>
<ul>
  <li><strong>Invisibility:</strong> At-will invisibility is incredibly powerful for scouting</li>
  <li><strong>Misty Step:</strong> Bonus action teleport at will - unmatched mobility</li>
  <li><strong>Detect Thoughts:</strong> Read minds infinitely for social encounters</li>
  <li><strong>Mirror Image:</strong> Free defensive buff every combat</li>
</ul>

<p><strong>Recommended Combo:</strong> Shield + Invisibility or Shield + Misty Step covers both defense and mobility at will.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting you can still upcast these spells with higher slots",
      "Not realizing you can change your chosen spells (it just takes 8 hours)",
      "Choosing spells you rarely cast instead of high-use utility spells"
    ],
    dmTips: [
      "At-will Shield fundamentally changes encounter math - plan accordingly",
      "This feature makes 18th level wizards extremely hard to pin down",
      "Consider what infinite uses of specific spells mean for your narrative"
    ]
  },
  {
    slug: "signature-spells-5e",
    name: "Signature Spells",
    category: "classes",
    className: "Wizard",
    featureLevel: "20th",
    description: "Signature Spells is the Wizard's capstone feature at 20th level, granting two 3rd-level spells that are always prepared and can each be cast once without slots per short rest.",
    searchVolume: 880,
    sections: [
      {
        id: "how-it-works",
        title: "How Signature Spells Works",
        content: `<p>At 20th level, you choose <strong>two 3rd-level wizard spells</strong> from your spellbook as your Signature Spells.</p>

<p><strong>Benefits:</strong></p>
<ul>
  <li>These spells are <strong>always prepared</strong> and don't count against your prepared spell limit</li>
  <li>You can cast each of them <strong>once at 3rd level without expending a spell slot</strong></li>
  <li>These free casts recharge on a <strong>short or long rest</strong></li>
  <li>You can still cast them using regular spell slots as normal</li>
</ul>

<p>Combined with Spell Mastery, a 20th level wizard has: 2 at-will spells + 2 always-prepared spells with free daily casts = incredible resource efficiency.</p>`
      },
      {
        id: "best-choices",
        title: "Best Signature Spell Choices",
        content: `<p><strong>Top Picks:</strong></p>
<ul>
  <li><strong>Counterspell:</strong> Free counterspell every short rest is invaluable against casters</li>
  <li><strong>Fireball:</strong> Free AoE damage every short rest - always useful</li>
  <li><strong>Dispel Magic:</strong> Always-prepared utility for dealing with magical effects</li>
  <li><strong>Fly:</strong> Free flight is excellent mobility</li>
  <li><strong>Haste:</strong> Buff your martial ally at no cost</li>
</ul>

<p><strong>Recommended Combo:</strong> Counterspell + Fireball covers both offensive and defensive needs, and both scale reasonably when upcast.</p>`
      }
    ],
    commonMistakes: [
      "Thinking the free casts are once per long rest (they're per short rest)",
      "Forgetting these spells are always prepared - frees up preparation slots",
      "Choosing niche spells instead of broadly useful 3rd-level options"
    ],
    dmTips: [
      "20th level wizards have tremendous staying power with these features",
      "Free Counterspell per short rest significantly impacts caster encounters",
      "This is the wizard capstone - let players feel the mastery it represents"
    ]
  },
  {
    slug: "arcane-ward-5e",
    name: "Arcane Ward",
    category: "classes",
    className: "Wizard",
    featureLevel: "2nd (School of Abjuration)",
    description: "Arcane Ward is the signature feature of the School of Abjuration, creating a magical barrier that absorbs damage and makes the typically fragile wizard surprisingly durable.",
    searchVolume: 2400,
    sections: [
      {
        id: "how-it-works",
        title: "How Arcane Ward Works",
        content: `<p>When you cast an <strong>abjuration spell of 1st level or higher</strong>, you create a magical ward around yourself with hit points equal to <strong>twice your wizard level + your Intelligence modifier</strong>.</p>

<p><strong>Ward Mechanics:</strong></p>
<ul>
  <li>The ward has its own hit points separate from yours</li>
  <li>When you take damage, the ward takes the damage first</li>
  <li>If the damage exceeds the ward's remaining HP, you take the overflow</li>
  <li>The ward regains HP equal to <strong>twice the spell level</strong> each time you cast an abjuration spell</li>
  <li>The ward's maximum HP is twice your wizard level + INT modifier</li>
</ul>

<p><strong>Ward HP by Level (assuming +4 INT at low levels, +5 at higher):</strong></p>
<table class="ref-table">
  <tr><th>Wizard Level</th><th>Max Ward HP</th></tr>
  <tr><td>2nd</td><td>8 HP</td></tr>
  <tr><td>5th</td><td>14 HP</td></tr>
  <tr><td>10th</td><td>25 HP</td></tr>
  <tr><td>15th</td><td>35 HP</td></tr>
  <tr><td>20th</td><td>45 HP</td></tr>
</table>`
      },
      {
        id: "optimal-use",
        title: "Building and Maintaining Your Ward",
        content: `<p><strong>Abjuration Spells to Charge Your Ward:</strong></p>
<ul>
  <li><strong>Shield (1st):</strong> Restores 2 HP - good value for a reaction spell</li>
  <li><strong>Alarm (1st, Ritual):</strong> Cast as ritual before combat to pre-charge ward for free</li>
  <li><strong>Counterspell (3rd):</strong> Restores 6 HP while stopping enemy spells</li>
  <li><strong>Dispel Magic (3rd):</strong> Restores 6 HP with strong utility</li>
  <li><strong>Banishment (4th):</strong> Restores 8 HP, removes a threat</li>
</ul>

<p><strong>Pro Tips:</strong></p>
<ul>
  <li>Ritual cast Alarm during short rests to fully recharge your ward</li>
  <li>The ward is essentially extra HP that regenerates - you're tankier than you look</li>
  <li>At higher levels, Projected Ward lets you protect allies too</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting to charge the ward before combat (ritual cast Alarm!)",
      "Not tracking ward HP separately from character HP",
      "Thinking the ward blocks all damage (it's absorbed, not prevented)",
      "Forgetting that casting any abjuration spell restores the ward"
    ],
    dmTips: [
      "Abjuration wizards are significantly tankier than other wizards - adjust targeting",
      "The ward regenerates - sustained damage is better than spike damage",
      "At 6th level, Projected Ward lets them protect squishy allies"
    ]
  },
  {
    slug: "portent-dice-5e",
    name: "Portent Dice",
    category: "classes",
    className: "Wizard",
    featureLevel: "2nd (School of Divination)",
    description: "Portent dice are the signature feature of the School of Divination and is widely considered one of the most powerful subclass abilities in D&D 5e. They let you replace any d20 roll with pre-rolled dice.",
    searchVolume: 3600,
    sections: [
      {
        id: "how-it-works",
        title: "How Portent Works",
        content: `<p>When you finish a <strong>long rest</strong>, roll <strong>two d20s</strong> and record the numbers. You can replace <strong>any attack roll, saving throw, or ability check</strong> made by you or a creature you can see with one of these rolls.</p>

<p><strong>Key Rules:</strong></p>
<ul>
  <li>You must declare using Portent <strong>before the roll is made</strong></li>
  <li>Works on ANY creature you can see - allies or enemies</li>
  <li>The creature uses your die instead of rolling - no modifiers change</li>
  <li>At 14th level (Greater Portent), you roll <strong>three d20s</strong></li>
</ul>

<p><strong>Strategic Value:</strong></p>
<ul>
  <li><strong>High rolls (15-20):</strong> Save for critical moments - important saves, key attacks</li>
  <li><strong>Low rolls (1-5):</strong> Force enemy failures on saves against your best spells</li>
  <li><strong>Mid rolls (6-14):</strong> Use situationally - sometimes a 10 guarantees success</li>
</ul>`
      },
      {
        id: "best-uses",
        title: "Best Uses for Portent",
        content: `<p><strong>High Portent Dice:</strong></p>
<ul>
  <li>Guarantee a saving throw against a deadly effect (dragon breath, Dominate Person)</li>
  <li>Ensure the rogue's Sneak Attack hits</li>
  <li>Auto-succeed on crucial ability checks (Counterspell check, grapple)</li>
</ul>

<p><strong>Low Portent Dice:</strong></p>
<ul>
  <li>Force failed saves on Hold Person, Polymorph, or Banishment</li>
  <li>Make the BBEG fail a concentration check</li>
  <li>Ensure enemy attacks miss (before they roll)</li>
</ul>

<p><strong>Combat Combo Example:</strong> Roll a 3 on Portent. Cast Hold Monster on the boss. Before they roll their save, declare you're using Portent. They get a 3 on the save and are paralyzed. Your entire party gets advantage and auto-crits in melee.</p>`
      }
    ],
    commonMistakes: [
      "Using Portent after a die is rolled (must be declared before the roll)",
      "Forgetting you can use it on enemy rolls, not just allies",
      "Hoarding Portent dice - use them or lose them at your next long rest",
      "Not communicating with your party about when to use your dice"
    ],
    dmTips: [
      "Portent can trivialize single saving throw effects - use legendary resistance or multiple saves",
      "The diviner knows the future - give them prophetic visions and hints",
      "This ability is strongest against bosses with single big effects"
    ]
  },
  {
    slug: "sculpt-spells-5e",
    name: "Sculpt Spells",
    category: "classes",
    className: "Wizard",
    featureLevel: "2nd (School of Evocation)",
    description: "Sculpt Spells is the signature feature of the School of Evocation, allowing you to protect allies from your area-of-effect damage spells like Fireball.",
    searchVolume: 2100,
    sections: [
      {
        id: "how-it-works",
        title: "How Sculpt Spells Works",
        content: `<p>When you cast an <strong>evocation spell that affects other creatures you can see</strong>, you can choose a number of them equal to <strong>1 + the spell's level</strong>. These creatures <strong>automatically succeed</strong> on their saving throws and take <strong>no damage</strong> if they would normally take half on a success.</p>

<p><strong>Key Points:</strong></p>
<ul>
  <li>Works only on evocation spells (check the spell school)</li>
  <li>Protected creatures must be ones you can see</li>
  <li>Number protected = 1 + spell level (so 4 creatures for Fireball)</li>
  <li>They take ZERO damage, not half - even if the spell normally deals half on success</li>
</ul>

<p><strong>Creatures Protected by Spell Level:</strong></p>
<table class="ref-table">
  <tr><th>Spell Level</th><th>Creatures Protected</th><th>Example Spell</th></tr>
  <tr><td>1st</td><td>2</td><td>Burning Hands</td></tr>
  <tr><td>2nd</td><td>3</td><td>Shatter</td></tr>
  <tr><td>3rd</td><td>4</td><td>Fireball</td></tr>
  <tr><td>4th</td><td>5</td><td>Ice Storm</td></tr>
  <tr><td>5th</td><td>6</td><td>Cone of Cold</td></tr>
</table>`
      },
      {
        id: "tactics",
        title: "Tactical Applications",
        content: `<p><strong>The Classic Combo:</strong> Drop Fireball centered on the melee fighter surrounded by enemies. Your fighter takes 0 damage while everything else takes 8d6. This is why Evocation wizards are beloved by frontline fighters.</p>

<p><strong>Best Spells for Sculpt Spells:</strong></p>
<ul>
  <li><strong>Fireball:</strong> The classic - huge AoE, protect 4 allies</li>
  <li><strong>Cone of Cold:</strong> Even bigger area, protect 6 allies</li>
  <li><strong>Shatter:</strong> Good early option, protect 3 allies</li>
  <li><strong>Synaptic Static:</strong> Psychic damage + INT save debuff</li>
</ul>

<p><strong>Important:</strong> This doesn't protect creatures from secondary effects - if a spell has conditions beyond damage (like Sickening Radiance's exhaustion), protected creatures still auto-succeed but might have other consequences from being in the area.</p>`
      }
    ],
    commonMistakes: [
      "Trying to use Sculpt Spells on non-evocation spells (check the school!)",
      "Forgetting to count the number of protected creatures correctly",
      "Thinking it works on yourself (it protects 'other creatures')",
      "Not realizing protected creatures take ZERO damage, not half"
    ],
    dmTips: [
      "Sculpt Spells dramatically changes AoE encounter dynamics",
      "The evocation wizard's party will cluster together - area denial is less effective",
      "This makes the wizard more aggressive with positioning"
    ]
  },
  // =========================================================================
  // WIZARD SUBCLASSES (Schools of Magic)
  // =========================================================================
  {
    slug: "school-of-abjuration-5e",
    name: "School of Abjuration",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Abjuration focuses on protective magic, creating wards and barriers. Abjuration wizards are surprisingly durable thanks to their Arcane Ward feature, making them excellent support casters who can survive frontline threats.",
    searchVolume: 4200,
    sections: [
      {
        id: "overview",
        title: "School of Abjuration Overview",
        content: `<p>Abjuration wizards specialize in protective and defensive magic. While wizards are typically fragile, the Abjuration school's <strong>Arcane Ward</strong> feature creates a regenerating magical shield that absorbs damage, making you surprisingly tanky for a d6 hit die class.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Abjuration Savant (2nd):</strong> Copy abjuration spells in half the time and gold</li>
  <li><strong>Arcane Ward (2nd):</strong> Create a damage-absorbing ward when casting abjuration spells</li>
  <li><strong>Projected Ward (6th):</strong> Use your ward to protect allies within 30 feet</li>
  <li><strong>Improved Abjuration (10th):</strong> Add proficiency to Counterspell and Dispel Magic checks</li>
  <li><strong>Spell Resistance (14th):</strong> Advantage on saves vs spells, resistance to spell damage</li>
</ul>`
      },
      {
        id: "best-spells",
        title: "Best Abjuration Spells",
        content: `<p><strong>Ward-Building Spells:</strong></p>
<ul>
  <li><strong>Shield (1st):</strong> Reaction +5 AC AND restores 2 ward HP</li>
  <li><strong>Alarm (1st, Ritual):</strong> Free ward charges before combat</li>
  <li><strong>Absorb Elements (1st):</strong> Halve incoming elemental damage + 2 ward HP</li>
  <li><strong>Counterspell (3rd):</strong> Stop enemy spells + restore 6 ward HP</li>
  <li><strong>Dispel Magic (3rd):</strong> Remove magical effects + 6 ward HP</li>
  <li><strong>Banishment (4th):</strong> Remove a threat + restore 8 ward HP</li>
</ul>

<p><strong>Pro Tip:</strong> Ritual cast Alarm during short rests to fully recharge your ward before the next encounter. It costs nothing!</p>`
      },
      {
        id: "playstyle",
        title: "Playstyle and Tactics",
        content: `<p><strong>Combat Role:</strong> You're a tanky support wizard who can take hits that would drop other casters. Position yourself where you can protect allies with Projected Ward while maintaining concentration on important spells.</p>

<p><strong>Key Tactics:</strong></p>
<ul>
  <li>Pre-charge your ward with ritual Alarm before dangerous encounters</li>
  <li>Use Shield liberally - it's both defense AND ward restoration</li>
  <li>At 6th level, protect your party's squishy members with Projected Ward</li>
  <li>Your Improved Abjuration makes you the best Counterspeller in the game</li>
  <li>At 14th level, Spell Resistance makes you nearly immune to enemy casters</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting to pre-charge Arcane Ward with ritual Alarm before combat",
      "Not tracking ward HP separately from character HP",
      "Forgetting that Projected Ward uses YOUR ward HP to protect allies",
      "Not taking advantage of Improved Abjuration's bonus to Counterspell checks"
    ],
    dmTips: [
      "Abjuration wizards can absorb significant damage - don't underestimate their tankiness",
      "They excel at protecting allies - spread damage across the party",
      "Their Improved Abjuration makes Counterspell very reliable - consider multiple enemy casters",
      "Spell Resistance at 14th makes them nearly immune to magic - use non-spell threats"
    ]
  },
  {
    slug: "school-of-conjuration-5e",
    name: "School of Conjuration",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Conjuration focuses on summoning creatures and objects, as well as teleportation magic. Conjurers excel at creating distractions, summoning allies, and battlefield mobility through teleportation.",
    searchVolume: 3100,
    sections: [
      {
        id: "overview",
        title: "School of Conjuration Overview",
        content: `<p>Conjuration wizards specialize in summoning and teleportation. While not as flashy as Evocation or as powerful as Divination, Conjuration offers excellent utility and action economy through summoned creatures and objects.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Conjuration Savant (2nd):</strong> Copy conjuration spells at half cost/time</li>
  <li><strong>Minor Conjuration (2nd):</strong> Create small objects out of nothing (action)</li>
  <li><strong>Benign Transposition (6th):</strong> Teleport 30 ft or swap with willing ally</li>
  <li><strong>Focused Conjuration (10th):</strong> Concentration on conjuration spells can't be broken by damage</li>
  <li><strong>Durable Summons (14th):</strong> Summoned creatures gain 30 temporary HP</li>
</ul>`
      },
      {
        id: "best-spells",
        title: "Best Conjuration Spells",
        content: `<p><strong>Essential Conjuration Spells:</strong></p>
<ul>
  <li><strong>Find Familiar (1st, Ritual):</strong> Scouting, Help action, spell delivery</li>
  <li><strong>Misty Step (2nd):</strong> Bonus action teleport for escapes</li>
  <li><strong>Web (2nd):</strong> Excellent battlefield control</li>
  <li><strong>Conjure Animals (3rd):</strong> 8 wolves = 8 attacks with pack tactics</li>
  <li><strong>Dimension Door (4th):</strong> 500 ft teleport, bring an ally</li>
  <li><strong>Conjure Elemental (5th):</strong> Powerful elemental ally</li>
  <li><strong>Teleport (7th):</strong> Long-distance travel</li>
</ul>

<p><strong>Note:</strong> Focused Conjuration at 10th level means your summoned creatures can't accidentally disappear when you take damage!</p>`
      },
      {
        id: "minor-conjuration",
        title: "Creative Minor Conjuration Uses",
        content: `<p>Minor Conjuration creates a non-magical object up to 3 feet on a side and 10 lbs. It glows faintly and lasts 1 hour or until it takes damage.</p>

<p><strong>Creative Uses:</strong></p>
<ul>
  <li>Create a key you've seen before (duplicate keys)</li>
  <li>Conjure a ladder, rope, or simple tool</li>
  <li>Make a distraction or decoy object</li>
  <li>Create exact replicas of documents or maps</li>
  <li>Produce light sources in a pinch</li>
</ul>

<p><strong>Limitations:</strong> Objects are visibly magical (faint glow), can't create valuable materials, and disappear if damaged or after 1 hour.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting Minor Conjuration objects glow and are obviously magical",
      "Not utilizing Benign Transposition to save allies or reposition",
      "Overlooking that Focused Conjuration makes summon concentration unbreakable by damage",
      "Not pre-summoning creatures before combat when possible"
    ],
    dmTips: [
      "Conjure Animals with 8 wolves can slow combat significantly - consider theater-of-mind",
      "Minor Conjuration rewards creativity - allow reasonable uses",
      "Focused Conjuration makes summons very reliable - plan accordingly",
      "Benign Transposition enables clever positioning - watch for teleport cheese"
    ]
  },
  {
    slug: "school-of-divination-5e",
    name: "School of Divination",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Divination grants the iconic Portent feature - widely considered one of the most powerful subclass abilities in all of D&D 5e. Divination wizards can literally see the future and manipulate fate.",
    searchVolume: 5800,
    sections: [
      {
        id: "overview",
        title: "School of Divination Overview",
        content: `<p>Divination is often considered the <strong>strongest wizard subclass</strong> because of Portent. The ability to replace any d20 roll with a pre-determined result is incredibly powerful, especially with low rolls that force enemy save failures.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Divination Savant (2nd):</strong> Copy divination spells at half cost/time</li>
  <li><strong>Portent (2nd):</strong> Roll 2d20 after long rest; replace any d20 roll you can see</li>
  <li><strong>Expert Divination (6th):</strong> Recover spell slots when casting divination spells</li>
  <li><strong>The Third Eye (10th):</strong> See invisible, ethereal, read any language, or 60ft darkvision</li>
  <li><strong>Greater Portent (14th):</strong> Roll 3d20 for Portent instead of 2</li>
</ul>`
      },
      {
        id: "portent-strategy",
        title: "Mastering Portent",
        content: `<p><strong>Using High Rolls (15+):</strong></p>
<ul>
  <li>Guarantee a crucial saving throw against dragon breath or Dominate Person</li>
  <li>Ensure an ally's important attack hits</li>
  <li>Pass a critical ability check (Counterspell, grapple, persuasion)</li>
</ul>

<p><strong>Using Low Rolls (1-5):</strong></p>
<ul>
  <li>Force enemy to fail a save against Hold Person, Polymorph, or Banishment</li>
  <li>Make the boss fail a concentration check</li>
  <li>Ensure an enemy attack misses a vulnerable ally</li>
</ul>

<p><strong>The Power Play:</strong> Cast Hold Monster on the boss. Before they roll, declare you're using your Portent 3. They're paralyzed. Your party gets advantage and auto-crits in melee. Encounter trivialized.</p>`
      },
      {
        id: "best-spells",
        title: "Best Divination Spells",
        content: `<p><strong>Essential Divination Spells:</strong></p>
<ul>
  <li><strong>Detect Magic (1st, Ritual):</strong> Essential utility, triggers Expert Divination</li>
  <li><strong>Identify (1st, Ritual):</strong> Learn item properties</li>
  <li><strong>See Invisibility (2nd):</strong> Counter invisible enemies</li>
  <li><strong>Clairvoyance (3rd):</strong> Remote sensing</li>
  <li><strong>Arcane Eye (4th):</strong> Invisible scouting sensor</li>
  <li><strong>Scrying (5th):</strong> Spy on anyone anywhere</li>
</ul>

<p><strong>Expert Divination Combo:</strong> Cast a divination spell, recover a lower-level slot. Cast Detect Magic (1st), recover nothing. Cast Clairvoyance (3rd), recover a 2nd level slot. Efficient slot management!</p>`
      }
    ],
    commonMistakes: [
      "Using Portent AFTER a die is rolled (must be declared before)",
      "Hoarding Portent dice - use them or lose them at your next long rest",
      "Forgetting you can use Portent on enemy rolls, not just allies",
      "Not communicating with your party about when to use your Portent dice"
    ],
    dmTips: [
      "Portent can trivialize single saving throw effects - use legendary resistance",
      "Give diviners prophetic dreams and visions for roleplay flavor",
      "The feature is strongest against bosses with big save-or-suck effects",
      "Consider encounters with multiple threats rather than single big enemies"
    ]
  },
  {
    slug: "school-of-enchantment-5e",
    name: "School of Enchantment",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Enchantment focuses on mind-affecting magic, charming creatures and manipulating their actions. Enchanters excel in social situations and can turn enemies into allies with their magical influence.",
    searchVolume: 2400,
    sections: [
      {
        id: "overview",
        title: "School of Enchantment Overview",
        content: `<p>Enchantment wizards specialize in charm and mind control magic. While less effective against creatures immune to charm, enchanters can dramatically change social encounters and turn combat on its head by converting enemies to their side.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Enchantment Savant (2nd):</strong> Copy enchantment spells at half cost/time</li>
  <li><strong>Hypnotic Gaze (2nd):</strong> Action to charm a creature within 5 ft, incapacitating them</li>
  <li><strong>Instinctive Charm (6th):</strong> Reaction to redirect an attack targeting you</li>
  <li><strong>Split Enchantment (10th):</strong> Single-target enchantments can target two creatures</li>
  <li><strong>Alter Memories (14th):</strong> Make charmed creatures forget being charmed</li>
</ul>`
      },
      {
        id: "best-spells",
        title: "Best Enchantment Spells",
        content: `<p><strong>Essential Enchantment Spells:</strong></p>
<ul>
  <li><strong>Charm Person (1st):</strong> Social manipulation, twin with Split Enchantment</li>
  <li><strong>Sleep (1st):</strong> Powerful at low levels against groups</li>
  <li><strong>Hold Person (2nd):</strong> Paralyze humanoids, devastating with Split</li>
  <li><strong>Suggestion (2nd):</strong> Reasonable commands, incredibly versatile</li>
  <li><strong>Enemies Abound (3rd):</strong> Turn enemies against each other</li>
  <li><strong>Dominate Person (5th):</strong> Full control of a humanoid</li>
  <li><strong>Mass Suggestion (6th):</strong> Affect 12 creatures at once</li>
  <li><strong>Dominate Monster (8th):</strong> Control any creature type</li>
</ul>

<p><strong>Split Enchantment Synergy:</strong> Hold Person on two targets at once. Your melee allies auto-crit both. Dominate Person on two enemies means two new allies fighting for you.</p>`
      },
      {
        id: "playstyle",
        title: "Playstyle and Limitations",
        content: `<p><strong>When Enchantment Shines:</strong></p>
<ul>
  <li>Social encounters - charming guards, nobles, merchants</li>
  <li>Humanoid-heavy campaigns (Hold Person, Dominate Person)</li>
  <li>Roleplay-focused games with intrigue and manipulation</li>
  <li>Splitting powerful single-target spells</li>
</ul>

<p><strong>Limitations to Consider:</strong></p>
<ul>
  <li>Many creatures are immune to charm (undead, constructs, some fiends)</li>
  <li>Elves and half-elves have advantage on charm saves</li>
  <li>Hypnotic Gaze requires you to be within 5 feet (dangerous for a wizard)</li>
  <li>Less effective in dungeon-crawl campaigns fighting monsters</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Trying to enchant creatures immune to charm (undead, constructs)",
      "Using Hypnotic Gaze at 5ft range when enemies could attack you",
      "Forgetting that Split Enchantment works on any single-target enchantment",
      "Not using Alter Memories to hide your magical manipulation"
    ],
    dmTips: [
      "Enchantment wizards can trivialize social encounters - have backup plans",
      "Include charm-immune enemies to challenge them sometimes",
      "Alter Memories at 14th is incredibly powerful - NPCs won't remember manipulation",
      "Split Enchantment makes single-target spells very efficient"
    ]
  },
  {
    slug: "school-of-evocation-5e",
    name: "School of Evocation",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Evocation focuses on destructive elemental magic. Evocation wizards are the classic 'blaster' casters, and their Sculpt Spells feature lets them drop Fireballs on their allies without dealing damage to them.",
    searchVolume: 4800,
    sections: [
      {
        id: "overview",
        title: "School of Evocation Overview",
        content: `<p>Evocation is the quintessential blaster wizard subclass. While wizards have many powerful options beyond damage, Evocation excels at one thing: safely dealing massive AoE damage with <strong>Sculpt Spells</strong> protecting your allies.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Evocation Savant (2nd):</strong> Copy evocation spells at half cost/time</li>
  <li><strong>Sculpt Spells (2nd):</strong> Protect allies from your AoE evocation spells</li>
  <li><strong>Potent Cantrip (6th):</strong> Cantrips deal half damage on successful saves</li>
  <li><strong>Empowered Evocation (10th):</strong> Add INT mod to evocation spell damage</li>
  <li><strong>Overchannel (14th):</strong> Maximize damage of 5th level or lower spell (with risk)</li>
</ul>`
      },
      {
        id: "sculpt-spells",
        title: "Mastering Sculpt Spells",
        content: `<p><strong>How It Works:</strong> When you cast an evocation spell affecting creatures you can see, choose (1 + spell level) creatures. They automatically succeed on their saves and take <strong>zero damage</strong>.</p>

<p><strong>Protected Creatures by Spell Level:</strong></p>
<table class="ref-table">
  <tr><th>Spell Level</th><th>Protected</th><th>Example</th></tr>
  <tr><td>1st</td><td>2</td><td>Burning Hands</td></tr>
  <tr><td>2nd</td><td>3</td><td>Shatter</td></tr>
  <tr><td>3rd</td><td>4</td><td>Fireball</td></tr>
  <tr><td>4th</td><td>5</td><td>Ice Storm</td></tr>
  <tr><td>5th</td><td>6</td><td>Cone of Cold</td></tr>
</table>

<p><strong>The Classic Move:</strong> Your Fighter is surrounded by 6 orcs. Drop Fireball centered on them. Fighter takes 0 damage. Orcs take 8d6 fire damage. Fighter loves you forever.</p>`
      },
      {
        id: "best-spells",
        title: "Best Evocation Spells",
        content: `<p><strong>Essential Evocation Spells:</strong></p>
<ul>
  <li><strong>Fire Bolt (Cantrip):</strong> Reliable damage, benefits from Potent Cantrip</li>
  <li><strong>Magic Missile (1st):</strong> Auto-hit, great for concentration checks</li>
  <li><strong>Shatter (2nd):</strong> Thunder AoE, good against constructs/objects</li>
  <li><strong>Fireball (3rd):</strong> The iconic wizard spell, huge AoE</li>
  <li><strong>Lightning Bolt (3rd):</strong> Line damage, different geometry than Fireball</li>
  <li><strong>Ice Storm (4th):</strong> AoE damage plus difficult terrain</li>
  <li><strong>Cone of Cold (5th):</strong> Massive cone of cold damage</li>
  <li><strong>Chain Lightning (6th):</strong> Bouncing damage to multiple targets</li>
</ul>

<p><strong>Empowered Evocation:</strong> At 10th level with +5 INT, your Fireballs deal 8d6+5 damage. Magic Missile becomes 3d4+3+15 (each dart adds INT). Significant boost!</p>`
      }
    ],
    commonMistakes: [
      "Trying to use Sculpt Spells on non-evocation spells (check the spell school!)",
      "Thinking Sculpt Spells protects yourself (it's 'other creatures')",
      "Forgetting protected creatures take ZERO damage, not half",
      "Overusing Overchannel and taking too much necrotic damage"
    ],
    dmTips: [
      "Sculpt Spells fundamentally changes party positioning - they'll cluster together",
      "Evocation wizards are aggressive with AoE - spread enemies out",
      "Empowered Evocation at 10th boosts damage significantly",
      "Overchannel at 14th can one-shot many threats but is risky to spam"
    ]
  },
  {
    slug: "school-of-illusion-5e",
    name: "School of Illusion",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Illusion specializes in deceiving the senses. Illusion wizards are highly creative casters whose effectiveness depends heavily on player ingenuity and DM interpretation of illusion spells.",
    searchVolume: 3200,
    sections: [
      {
        id: "overview",
        title: "School of Illusion Overview",
        content: `<p>Illusion is a subclass that rewards creative thinking. Your features make illusions more convincing and eventually semi-real. Success depends on how you describe your illusions and how your DM adjudicates them.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Illusion Savant (2nd):</strong> Copy illusion spells at half cost/time</li>
  <li><strong>Improved Minor Illusion (2nd):</strong> Create both sound AND image simultaneously</li>
  <li><strong>Malleable Illusions (6th):</strong> Change the nature of illusions as an action</li>
  <li><strong>Illusory Self (10th):</strong> Reaction to create duplicate that causes attack to miss</li>
  <li><strong>Illusory Reality (14th):</strong> Make one object in your illusion REAL for 1 minute</li>
</ul>`
      },
      {
        id: "illusory-reality",
        title: "The Power of Illusory Reality",
        content: `<p>At 14th level, Illusory Reality lets you make one non-animate, non-damaging object in your illusion <strong>real</strong> for 1 minute. This is incredibly powerful:</p>

<p><strong>Examples:</strong></p>
<ul>
  <li>Create a real bridge over a chasm</li>
  <li>Make a real cage trapping enemies</li>
  <li>Conjure a real wall blocking pursuit</li>
  <li>Create a real platform for tactical advantage</li>
  <li>Make a real door or window in a wall</li>
</ul>

<p><strong>Limitations:</strong> Can't create animate objects (no living creatures) or directly damaging objects (no spike traps). But a cage that someone walks into? That's just a cage.</p>`
      },
      {
        id: "best-spells",
        title: "Best Illusion Spells",
        content: `<p><strong>Essential Illusion Spells:</strong></p>
<ul>
  <li><strong>Minor Illusion (Cantrip):</strong> Improved version creates sound + image</li>
  <li><strong>Silent Image (1st):</strong> Visual illusion you can move</li>
  <li><strong>Disguise Self (1st):</strong> Change your appearance</li>
  <li><strong>Invisibility (2nd):</strong> Classic stealth option</li>
  <li><strong>Mirror Image (2nd):</strong> Great defensive option</li>
  <li><strong>Major Image (3rd):</strong> Full sensory illusion</li>
  <li><strong>Phantasmal Force (2nd):</strong> Illusion that deals psychic damage</li>
  <li><strong>Mirage Arcane (7th):</strong> Terrain-scale illusions</li>
  <li><strong>Simulacrum (7th):</strong> Create a duplicate of a creature</li>
</ul>

<p><strong>Tip:</strong> Malleable Illusions lets you change any illusion with duration 1+ minutes. Cast Major Image once, then reshape it endlessly as needed.</p>`
      }
    ],
    commonMistakes: [
      "Not describing illusions in detail (vague illusions are less believable)",
      "Forgetting Malleable Illusions lets you reshape existing illusions",
      "Trying to make Illusory Reality create damaging or animate objects",
      "Not discussing illusion expectations with your DM before playing"
    ],
    dmTips: [
      "Illusion effectiveness varies heavily by DM - set expectations early",
      "Reward creative illusion uses - the subclass is about player ingenuity",
      "Illusory Reality is very powerful at 14th - it can bypass many obstacles",
      "Consider requiring Investigation checks to disbelieve clever illusions"
    ]
  },
  {
    slug: "school-of-necromancy-5e",
    name: "School of Necromancy",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Necromancy focuses on magic dealing with life, death, and undeath. Necromancers can raise armies of undead minions and drain life force from their enemies to sustain themselves.",
    searchVolume: 4500,
    sections: [
      {
        id: "overview",
        title: "School of Necromancy Overview",
        content: `<p>Necromancy wizards command the forces of death itself. Your signature ability is raising and commanding undead minions, giving you excellent action economy. You also gain survivability through life-draining abilities.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Necromancy Savant (2nd):</strong> Copy necromancy spells at half cost/time</li>
  <li><strong>Grim Harvest (2nd):</strong> Regain HP when you kill with spells</li>
  <li><strong>Undead Thralls (6th):</strong> Animate Dead creates stronger, more durable minions</li>
  <li><strong>Inured to Undeath (10th):</strong> Resistance to necrotic damage, HP max can't be reduced</li>
  <li><strong>Command Undead (14th):</strong> Permanently control an undead creature</li>
</ul>`
      },
      {
        id: "undead-army",
        title: "Building Your Undead Army",
        content: `<p><strong>Animate Dead (3rd level):</strong> Creates 1 skeleton or zombie. Lasts 24 hours but requires daily recasting to maintain control.</p>

<p><strong>Army Building Math:</strong></p>
<ul>
  <li>Each casting animates 1 undead or reasserts control over up to 4</li>
  <li>Upcasting adds 2 additional undead per slot level above 3rd</li>
  <li>At 5th level spell slot: animate 1 + 4 = 5 undead, or control up to 12</li>
</ul>

<p><strong>Undead Thralls Bonuses (6th level):</strong></p>
<ul>
  <li>Add your proficiency bonus to damage rolls</li>
  <li>Add your wizard level to their maximum HP</li>
  <li>A 10th level necromancer's zombies have 32 HP instead of 22</li>
</ul>

<p><strong>Pro Tip:</strong> Skeletons have ranged attacks (shortbows) and are better for most situations. Zombies have Undead Fortitude but are melee-only.</p>`
      },
      {
        id: "best-spells",
        title: "Best Necromancy Spells",
        content: `<p><strong>Essential Necromancy Spells:</strong></p>
<ul>
  <li><strong>Chill Touch (Cantrip):</strong> Prevents healing, good vs undead enemies</li>
  <li><strong>False Life (1st):</strong> Temporary HP buffer</li>
  <li><strong>Ray of Sickness (1st):</strong> Damage + poisoned condition</li>
  <li><strong>Animate Dead (3rd):</strong> Your core army-building spell</li>
  <li><strong>Vampiric Touch (3rd):</strong> Drain HP, synergizes with melee situations</li>
  <li><strong>Blight (4th):</strong> Solid single-target damage</li>
  <li><strong>Danse Macabre (5th):</strong> Quickly raise 5 undead from nearby corpses</li>
  <li><strong>Create Undead (6th):</strong> Upgrade to ghouls, ghasts, wights, mummies</li>
  <li><strong>Finger of Death (7th):</strong> Massive damage, killed humanoids rise as zombies</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting to recast Animate Dead daily to maintain control",
      "Not tracking each undead's HP separately",
      "Creating so many undead that combat takes forever",
      "Forgetting Grim Harvest only works on spells YOU cast that kill"
    ],
    dmTips: [
      "Undead armies can bog down combat - consider group initiative for minions",
      "Social consequences of leading undead around (towns don't like necromancers)",
      "Command Undead at 14th can permanently steal powerful undead enemies",
      "Finger of Death creates permanent zombie followers - this can snowball"
    ]
  },
  {
    slug: "school-of-transmutation-5e",
    name: "School of Transmutation",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The School of Transmutation focuses on changing the properties of creatures and objects. Transmuters are versatile support casters with the unique Transmuter's Stone that provides flexible buffs.",
    searchVolume: 2200,
    sections: [
      {
        id: "overview",
        title: "School of Transmutation Overview",
        content: `<p>Transmutation is a versatile support subclass focused on transformation magic. Your Transmuter's Stone provides a flexible buff that can be changed with each long rest, adapting to your party's needs.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Transmutation Savant (2nd):</strong> Copy transmutation spells at half cost/time</li>
  <li><strong>Minor Alchemy (2nd):</strong> Transform materials (wood, stone, iron, copper, silver)</li>
  <li><strong>Transmuter's Stone (6th):</strong> Create a stone that grants one of four benefits</li>
  <li><strong>Shapechanger (10th):</strong> Cast Polymorph on yourself without a spell slot</li>
  <li><strong>Master Transmuter (14th):</strong> Consume stone for major effects (transmute, heal, raise dead, youth)</li>
</ul>`
      },
      {
        id: "transmuters-stone",
        title: "Transmuter's Stone Options",
        content: `<p>At 6th level, you can create a stone (8 hours) that grants one of these benefits to whoever carries it:</p>

<ul>
  <li><strong>Darkvision 60 ft:</strong> Give to party members who lack it</li>
  <li><strong>Speed +10 ft:</strong> Excellent for melee characters or escapes</li>
  <li><strong>Constitution save proficiency:</strong> Helps concentration checks</li>
  <li><strong>Resistance to acid/cold/fire/lightning/thunder:</strong> Match upcoming threats</li>
</ul>

<p><strong>Tactical Use:</strong> Change the stone's benefit each long rest based on expected challenges. Fighting a dragon? Give fire resistance. Dungeon crawling? Darkvision. Need concentration? Con save proficiency.</p>

<p><strong>Note:</strong> You can give the stone to an ally - the benefit transfers to whoever holds it.</p>`
      },
      {
        id: "best-spells",
        title: "Best Transmutation Spells",
        content: `<p><strong>Essential Transmutation Spells:</strong></p>
<ul>
  <li><strong>Expeditious Retreat (1st):</strong> Bonus action Dash every turn</li>
  <li><strong>Feather Fall (1st):</strong> Save the party from falls</li>
  <li><strong>Longstrider (1st):</strong> +10 speed for an hour</li>
  <li><strong>Alter Self (2nd):</strong> Change appearance, natural weapons, or breathe water</li>
  <li><strong>Enlarge/Reduce (2nd):</strong> Size manipulation with combat applications</li>
  <li><strong>Fly (3rd):</strong> Essential mobility spell</li>
  <li><strong>Haste (3rd):</strong> Incredibly powerful buff</li>
  <li><strong>Polymorph (4th):</strong> Transform creatures, free with Shapechanger at 10th</li>
  <li><strong>True Polymorph (9th):</strong> Permanent transformation</li>
</ul>

<p><strong>Shapechanger (10th):</strong> Once per short rest, Polymorph yourself without a slot. Turn into a Giant Ape (157 HP, +9 attacks) for emergencies!</p>`
      }
    ],
    commonMistakes: [
      "Forgetting to change Transmuter's Stone benefits based on upcoming challenges",
      "Not giving the stone to allies who benefit most from its current buff",
      "Overlooking free Polymorph from Shapechanger (once per short rest)",
      "Using Master Transmuter too early - the stone takes 8 hours to recreate"
    ],
    dmTips: [
      "Transmuter's Stone is flexible - reward players who change it strategically",
      "Shapechanger at 10th gives emergency Giant Ape form - it's like a second HP pool",
      "Master Transmuter at 14th can Raise Dead without diamonds - significant utility",
      "Minor Alchemy has creative uses - turning stone to wood, wood to iron, etc."
    ]
  },
  {
    slug: "war-magic-5e",
    name: "War Magic",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "War Magic wizards blend magical offense with defensive techniques. This subclass from Xanathar's Guide offers excellent survivability through AC and save bonuses, making it ideal for wizards who find themselves in dangerous situations.",
    searchVolume: 3800,
    sections: [
      {
        id: "overview",
        title: "War Magic Overview",
        content: `<p>War Magic is a defensive subclass that makes wizards harder to kill. You sacrifice some offensive power for consistent survivability through AC boosts and saving throw bonuses.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Arcane Deflection (2nd):</strong> Reaction for +2 AC or +4 to a save (limits next turn to cantrips)</li>
  <li><strong>Tactical Wit (2nd):</strong> Add INT to initiative rolls</li>
  <li><strong>Power Surge (6th):</strong> Deal extra force damage once per turn</li>
  <li><strong>Durable Magic (10th):</strong> +2 AC and saves while concentrating</li>
  <li><strong>Deflecting Shroud (14th):</strong> Arcane Deflection deals damage to nearby enemies</li>
</ul>`
      },
      {
        id: "arcane-deflection",
        title: "Mastering Arcane Deflection",
        content: `<p><strong>How It Works:</strong> When hit by an attack or fail a save, use your reaction for +2 AC (potentially turning a hit into a miss) or +4 to the save (potentially turning failure to success).</p>

<p><strong>The Limitation:</strong> After using Arcane Deflection, you can only cast cantrips until the end of your next turn. No leveled spells!</p>

<p><strong>When to Use It:</strong></p>
<ul>
  <li>Against attacks that barely hit (within 1-2 of your AC)</li>
  <li>Against saves you failed by 4 or less</li>
  <li>When you were planning to cast cantrips anyway</li>
  <li>When survival is more important than your next spell</li>
</ul>

<p><strong>Synergy:</strong> At 14th level, Deflecting Shroud deals (wizard level / 2) force damage to enemies within 10 ft when you use Arcane Deflection. Defense becomes offense!</p>`
      },
      {
        id: "tactical-advantages",
        title: "Combat Advantages",
        content: `<p><strong>Tactical Wit (+INT to Initiative):</strong></p>
<ul>
  <li>With +5 INT and +2 DEX, you have +7 initiative</li>
  <li>Going first means landing control spells before enemies act</li>
  <li>First-turn Hypnotic Pattern or Web can trivialize encounters</li>
</ul>

<p><strong>Durable Magic (+2 AC and saves while concentrating):</strong></p>
<ul>
  <li>Maintain concentration on Haste, Polymorph, or Wall of Force more reliably</li>
  <li>Stacks with Shield and other bonuses</li>
  <li>Essentially permanent while you have concentration spells running</li>
</ul>

<p><strong>Playstyle:</strong> War Magic wizards control the battlefield from turn one, then maintain concentration spells while being very hard to kill. You trade explosive damage for consistent defensive value.</p>`
      }
    ],
    commonMistakes: [
      "Using Arcane Deflection when you need to cast a leveled spell next turn",
      "Forgetting you still have full cantrip access after Arcane Deflection",
      "Not maintaining concentration spells to benefit from Durable Magic",
      "Overlooking Power Surge's bonus damage (small but adds up)"
    ],
    dmTips: [
      "War Magic wizards are very hard to kill - they have layered defenses",
      "Their high initiative means they often act first - plan for this",
      "Arcane Deflection's cantrip limitation rarely matters after 10th level",
      "Target them with effects that don't trigger AC or saves (auto-damage, conditions)"
    ]
  },
  {
    slug: "chronurgy-magic-5e",
    name: "Chronurgy Magic",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "Chronurgy Magic from Explorer's Guide to Wildemount focuses on time manipulation. Often considered one of the most powerful wizard subclasses, Chronurgy lets you force rerolls, freeze creatures in time, and store spells for later.",
    searchVolume: 6200,
    sections: [
      {
        id: "overview",
        title: "Chronurgy Magic Overview",
        content: `<p>Chronurgy is widely considered one of the <strong>strongest wizard subclasses</strong> alongside Divination. Time manipulation gives you powerful control over combat outcomes and the ability to store spells for later use.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Chronal Shift (2nd):</strong> Force a reroll on any d20 within 30 ft (2/long rest)</li>
  <li><strong>Temporal Awareness (2nd):</strong> Add INT to initiative</li>
  <li><strong>Momentary Stasis (6th):</strong> Freeze a creature in time (incapacitated, speed 0)</li>
  <li><strong>Arcane Abeyance (10th):</strong> Store a spell in a bead for anyone to use later</li>
  <li><strong>Convergent Future (14th):</strong> Decide if an attack/save/check succeeds or fails</li>
</ul>`
      },
      {
        id: "chronal-shift",
        title: "Mastering Chronal Shift",
        content: `<p><strong>How It Works:</strong> When a creature you can see within 30 ft makes an attack, ability check, or saving throw, you can use your reaction to force them to reroll and use the new result.</p>

<p><strong>Key Advantages over Portent:</strong></p>
<ul>
  <li>You see the original roll before deciding to use it</li>
  <li>Works on ANY d20 roll, not limited to pre-rolled results</li>
  <li>Twice per long rest is often enough for clutch moments</li>
</ul>

<p><strong>Best Uses:</strong></p>
<ul>
  <li>Enemy rolled high on a save against your Hold Person? Reroll.</li>
  <li>Enemy crit your ally? Force a reroll.</li>
  <li>Ally just barely failed a crucial save? Reroll for another chance.</li>
</ul>`
      },
      {
        id: "arcane-abeyance",
        title: "Arcane Abeyance: Storing Spells",
        content: `<p>At 10th level, when you cast a spell of 4th level or lower, you can store it in a tiny bead instead of having it take effect. The bead lasts 1 hour or until used.</p>

<p><strong>Anyone can use the bead</strong> as an action to release the spell, using YOUR spellcasting ability and concentration.</p>

<p><strong>Powerful Applications:</strong></p>
<ul>
  <li>Give the Fighter a bead with Haste - they cast it on themselves as an action</li>
  <li>Store Counterspell for an ally to use when you're out of reactions</li>
  <li>Pre-cast Web or Hypnotic Pattern before combat, release as an action</li>
  <li>Give healing spells to martial allies for emergencies</li>
</ul>

<p><strong>Combo:</strong> Store a concentration spell in a bead. Give it to an ally. You maintain concentration on one spell, they maintain another using your stored spell. Two concentration spells active!</p>`
      }
    ],
    commonMistakes: [
      "Using Chronal Shift on unimportant rolls (save it for clutch moments)",
      "Forgetting Arcane Abeyance spells use YOUR concentration when released",
      "Not pre-storing spells in beads before anticipated combat",
      "Underestimating Momentary Stasis's tactical value for setup"
    ],
    dmTips: [
      "Chronurgy is extremely powerful - consider it tier 1 alongside Divination",
      "Chronal Shift can swing combat dramatically - expect clutch saves",
      "Arcane Abeyance enables double concentration through allies",
      "Convergent Future at 14th is essentially a guaranteed success/failure"
    ]
  },
  {
    slug: "graviturgy-magic-5e",
    name: "Graviturgy Magic",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "Graviturgy Magic from Explorer's Guide to Wildemount manipulates gravity to control the battlefield. Graviturgists excel at movement control, giving allies advantage and imposing disadvantage on enemies through gravitational manipulation.",
    searchVolume: 3400,
    sections: [
      {
        id: "overview",
        title: "Graviturgy Magic Overview",
        content: `<p>Graviturgy focuses on controlling gravity to manipulate movement and combat. While less flashy than Chronurgy, Graviturgy provides consistent battlefield control and support through gravitational manipulation.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Adjust Density (2nd):</strong> Halve or double a creature's weight for 1 minute</li>
  <li><strong>Gravity Well (6th):</strong> Move creatures 5 ft when you hit them with spells</li>
  <li><strong>Violent Attraction (10th):</strong> Boost or pull attacks/falling damage</li>
  <li><strong>Event Horizon (14th):</strong> Create 30 ft radius of difficult terrain and damage</li>
</ul>`
      },
      {
        id: "adjust-density",
        title: "Adjust Density Tactics",
        content: `<p><strong>Halve Weight (Advantage on Strength checks/saves):</strong></p>
<ul>
  <li>Help your Grappler grapple more reliably</li>
  <li>Make allies harder to shove or knock prone</li>
  <li>Reduce falling damage (at DM discretion)</li>
</ul>

<p><strong>Double Weight (Disadvantage on Strength checks/saves, -10 ft speed):</strong></p>
<ul>
  <li>Slow down charging enemies</li>
  <li>Make enemies easier to grapple/shove</li>
  <li>Increase falling damage (DM discretion)</li>
</ul>

<p><strong>Note:</strong> This affects weight, not mass. Some DMs interpret this to affect falling damage, others don't. Clarify before play.</p>`
      },
      {
        id: "violent-attraction",
        title: "Violent Attraction Applications",
        content: `<p>At 10th level, when a creature within 60 ft hits with a weapon attack, you can use your reaction to increase damage by 1d10. Or, when a creature falls within 60 ft, increase falling damage by 2d10.</p>

<p><strong>Weapon Damage Boost:</strong></p>
<ul>
  <li>Boost your Fighter's critical hit</li>
  <li>Add damage to your Rogue's Sneak Attack</li>
  <li>Support any martial ally's attacks</li>
  <li>Uses: INT mod per long rest</li>
</ul>

<p><strong>Falling Damage Combo:</strong></p>
<ul>
  <li>Cast Reverse Gravity - enemies fall up, then fall down</li>
  <li>Use Telekinesis to drop enemies</li>
  <li>Graviturgy-exclusive spell Gravity Sinkhole can cause falls</li>
  <li>Extra 2d10 falling damage adds up!</li>
</ul>`
      }
    ],
    commonMistakes: [
      "Forgetting Adjust Density's concentration requirement limits other spells",
      "Not using Gravity Well to pull enemies into hazards or AoE effects",
      "Undervaluing the support potential of Violent Attraction's damage boost",
      "Not discussing Adjust Density's effect on falling damage with your DM"
    ],
    dmTips: [
      "Graviturgy is strong support but less individually powerful than Chronurgy",
      "Gravity Well's forced movement can combo with ally abilities",
      "Adjust Density interpretations vary - set expectations early",
      "Event Horizon at 14th creates a powerful damage/control zone"
    ]
  },
  {
    slug: "order-of-scribes-5e",
    name: "Order of Scribes",
    category: "classes",
    className: "Wizard",
    featureLevel: "Subclass (2nd level)",
    description: "The Order of Scribes from Tasha's Cauldron of Everything features an awakened spellbook as a sentient companion. Scribes wizards can swap damage types, cast rituals faster, and manifest their spellbook as a creature.",
    searchVolume: 4100,
    sections: [
      {
        id: "overview",
        title: "Order of Scribes Overview",
        content: `<p>Order of Scribes is a unique subclass centered on your spellbook becoming a sentient magical item. You gain excellent utility through damage type swapping and faster ritual casting.</p>

<p><strong>Key Features:</strong></p>
<ul>
  <li><strong>Wizardly Quill (2nd):</strong> Magical quill for fast, costless spell copying</li>
  <li><strong>Awakened Spellbook (2nd):</strong> Swap spell damage types, cast rituals in normal time</li>
  <li><strong>Manifest Mind (6th):</strong> Project spellbook as a spectral mind, cast through it</li>
  <li><strong>Master Scrivener (10th):</strong> Create spell scrolls more efficiently</li>
  <li><strong>One with the Word (14th):</strong> Spellbook can negate damage/turn by erasing spells</li>
</ul>`
      },
      {
        id: "awakened-spellbook",
        title: "Awakened Spellbook Powers",
        content: `<p><strong>Damage Type Swapping:</strong> When you cast a wizard spell that deals damage, you can swap the damage type to match another spell of the same level in your spellbook.</p>

<p><strong>Practical Applications:</strong></p>
<ul>
  <li>Turn Fireball into Cold-ball, Lightning-ball, or Thunder-ball</li>
  <li>Bypass fire immunity by swapping to a different type</li>
  <li>Optimize damage against specific enemy resistances/vulnerabilities</li>
  <li>Coordinate with allies who can impose vulnerabilities</li>
</ul>

<p><strong>Example:</strong> Fighting a fire-immune demon? Your spellbook has Lightning Bolt (3rd). Cast Fireball but swap to lightning damage. Full damage against the demon!</p>

<p><strong>Ritual Casting Speed:</strong> Rituals normally take 10 extra minutes. With Awakened Spellbook, you cast them at normal casting time. Detect Magic as an action!</p>`
      },
      {
        id: "manifest-mind",
        title: "Manifest Mind Tactics",
        content: `<p>At 6th level, you can conjure your spellbook's mind as a spectral form. It hovers, has 60 ft darkvision, and you can cast spells as though you were in its space.</p>

<p><strong>Tactical Uses:</strong></p>
<ul>
  <li>Scout around corners without risking yourself</li>
  <li>Cast spells from behind full cover</li>
  <li>Deliver touch spells from 300+ feet away</li>
  <li>See invisible creatures (if you have See Invisibility)</li>
</ul>

<p><strong>Limitations:</strong></p>
<ul>
  <li>Uses = proficiency bonus per long rest</li>
  <li>Must stay within 300 ft of you</li>
  <li>Costs a spell slot when you cast through it</li>
</ul>

<p><strong>Combo:</strong> Position Manifest Mind, then cast Fireball centered on it. Full damage AoE from safety, with swapped damage type if needed.</p>`
      }
    ],
    commonMistakes: [
      "Forgetting you need a spell of the same level to swap damage types",
      "Not preparing a variety of damage type spells for swapping options",
      "Underusing ritual casting speed - it's incredibly useful",
      "Forgetting Manifest Mind costs a spell slot when casting through it"
    ],
    dmTips: [
      "Damage swapping makes Scribes wizards very versatile against resistances",
      "Fast rituals mean more utility without combat cost",
      "Manifest Mind enables safe spellcasting - position matters less",
      "One with the Word at 14th can negate massive damage by sacrificing spells"
    ]
  }
];

// NOTE: Spellbook, Ritual Casting, Spell Slots, Short Rest, and Long Rest
// have been moved to rules.ts under "core-mechanics" category

// =============================================================================
// CLASS REDIRECTS
// =============================================================================

export const characterRedirects: RedirectEntry[] = [
  {
    slug: "5e-bard",
    redirectTo: "bard-5e",
    category: "classes",
    searchVolume: 38500
  },
  {
    slug: "5e-rogue",
    redirectTo: "rogue-5e",
    category: "classes",
    searchVolume: 22370
  },
  {
    slug: "5e-wizard",
    redirectTo: "wizard-5e",
    category: "classes",
    searchVolume: 27310
  }
];

// =============================================================================
// MONSTERS OVERVIEW
// =============================================================================

export const monstersOverview: CreationToolPage = {
  slug: "dnd-monsters",
  name: "D&D Monsters",
  category: "creation",
  description: "Complete guide to monsters in D&D 5e. Learn how to read monster stat blocks, find monsters by CR, and run memorable combat encounters.",
  searchVolume: 3250,
  sections: [
    {
      id: "monster-basics",
      title: "Understanding Monster Stat Blocks",
      content: `Monster stat blocks contain all the information you need to run a creature in combat.

**Header Information:**
- **Name and Type**: Creature type (aberration, beast, dragon, etc.) and size
- **Alignment**: Typical alignment (individual creatures may vary)
- **Armor Class**: Number attack rolls must meet or exceed to hit
- **Hit Points**: Average HP and the dice formula (e.g., 45 HP = 6d10+12)
- **Speed**: How far the creature moves (walking, flying, swimming, climbing, burrowing)

**Ability Scores:**
Six abilities just like player characters: STR, DEX, CON, INT, WIS, CHA
Modifiers are shown in parentheses

**Other Stats:**
- **Saving Throws**: Only lists proficient saves
- **Skills**: Only lists proficient skills
- **Damage Resistances/Immunities**: Takes half damage or no damage from certain types
- **Condition Immunities**: Can't be affected by certain conditions
- **Senses**: Darkvision, blindsight, tremorsense, etc. Always includes passive Perception
- **Languages**: What the creature can speak and understand
- **Challenge Rating (CR)**: Power level, determines XP reward

**Special Traits:**
Passive abilities always active (like Magic Resistance, Pack Tactics, Legendary Resistance)

**Actions:**
What the creature can do on its turn (attacks, spells, special abilities)

**Reactions (if any):**
Actions taken in response to triggers (like opportunity attacks or counterspell)

**Legendary Actions (if any):**
Powerful creatures get 3 legendary actions per round, used at the end of other turns

**Lair Actions (if any):**
Special environmental effects in the creature's lair, occur on initiative count 20`
    },
    {
      id: "challenge-rating",
      title: "Challenge Rating (CR)",
      content: `Challenge Rating represents a monster's difficulty and determines XP rewards.

**What CR Means:**
A CR X creature is a medium-difficulty encounter for a party of four X-level characters.
- CR 1 = appropriate for four 1st-level characters
- CR 5 = appropriate for four 5th-level characters
- CR 20 = appropriate for four 20th-level characters

**CR and XP Rewards:**
- CR 0 (10 XP) - CR 1/8 (25 XP) - CR 1/4 (50 XP) - CR 1/2 (100 XP)
- CR 1 (200 XP) - CR 2 (450 XP) - CR 3 (700 XP) - CR 4 (1,100 XP)
- CR 5 (1,800 XP) - CR 6 (2,300 XP) - CR 7 (2,900 XP) - CR 8 (3,900 XP)
- CR 9 (5,000 XP) - CR 10 (5,900 XP) - CR 11 (7,200 XP) - CR 12 (8,400 XP)
- CR 13 (10,000 XP) - CR 14 (11,500 XP) - CR 15 (13,000 XP) - CR 16 (15,000 XP)
- CR 17 (18,000 XP) - CR 18 (20,000 XP) - CR 19 (22,000 XP) - CR 20 (25,000 XP)
- CR 21 (33,000 XP) - CR 22 (41,000 XP) - CR 23 (50,000 XP) - CR 24 (62,000 XP)
- CR 25 (75,000 XP) - CR 26 (90,000 XP) - CR 27 (105,000 XP) - CR 28 (120,000 XP)
- CR 29 (135,000 XP) - CR 30 (155,000 XP)

**Building Encounters by CR:**
Use the encounter building rules in the DMG:
1. Determine XP thresholds for your party (based on character levels)
2. Total the XP of monsters you want to use
3. Apply multiplier based on number of monsters (more monsters = harder fight)
4. Compare to party thresholds (Easy, Medium, Hard, Deadly)

**CR Isn't Perfect:**
- Assumes average tactics and luck
- Doesn't account for magic items, rests, terrain
- Glass cannon monsters (high damage, low HP) are swingy
- Some CR ratings are notoriously wrong (shadows, intellect devourers)
- Party composition matters (all damage vs balanced)

**Adjusting Difficulty:**
- Lower-CR monsters in groups can overwhelm action economy
- Terrain and objectives change difficulty significantly
- Legendary creatures punch above their CR
- CR 1/4 and below are minions, die very quickly at mid-levels`
    },
    {
      id: "monster-types",
      title: "Monster Types",
      content: `Creatures are organized into types based on their nature:

**Aberrations:**
Utterly alien beings from beyond reality. Mind flayers, beholders, aboleths.
- Often have psychic abilities
- Resist or immune to charm
- Weird and unsettling tactics

**Beasts:**
Natural animals and mundane creatures. Wolves, bears, giant spiders.
- No special resistances usually
- Straightforward tactics
- Used for wilderness encounters

**Celestials:**
Good-aligned beings from the Upper Planes. Angels, pegasi, couatls.
- Often resist radiant and nonmagical weapons
- Healing and supportive abilities
- Fight fiends and undead

**Constructs:**
Animated objects and artificial beings. Golems, animated armor, modrons.
- Immune to poison and psychic usually
- Don't need to eat, sleep, or breathe
- Follow orders literally

**Dragons:**
Winged reptilian creatures of great power. Dragons are iconic D&D monsters.
- Breath weapons
- High intelligence (most of them)
- Lair actions and legendary actions for adults and older
- Chromatic (evil) and Metallic (good) varieties

**Elementals:**
Beings of pure elemental matter. Fire elementals, water elementals, air/earth elementals.
- Immune to poison and exhaustion
- Resist damage from their element
- Vulnerable to opposite element (sometimes)

**Fey:**
Magical creatures from the Feywild. Pixies, sprites, hags, satyrs.
- Tricky and unpredictable
- Magical abilities
- Love bargains and wordplay

**Fiends:**
Evil beings from the Lower Planes. Demons, devils, yugoloths.
- Resist fire and nonmagical weapons usually
- Corrupting influence
- Devils (lawful evil) vs Demons (chaotic evil)

**Giants:**
Huge humanoids of great strength. Storm giants, hill giants, frost giants.
- Simple but devastating attacks
- Rock throwing
- Based on environments (fire giants in volcanoes, etc.)

**Humanoids:**
People! Humans, elves, dwarves, orcs, goblins, kobolds.
- Most common enemy type
- Use tactics and equipment
- Often organized in groups

**Monstrosities:**
Frightening creatures of unnatural origin. Chimeras, basilisks, owlbears.
- Grab bag category
- Often have special attacks (petrification, etc.)
- Varied and weird

**Oozes:**
Amorphous creatures that dissolve organic matter. Gelatinous cubes, black puddings.
- Immune to many conditions
- Split when hit by certain attacks
- Corrode equipment

**Plants:**
Animated vegetation. Shambling mounds, treants, awakened shrubs.
- Vulnerable to fire usually
- Blend in with environment
- Slow but durable

**Undead:**
Once-living creatures animated by dark magic. Zombies, skeletons, vampires, liches.
- Immune to poison
- Don't need to eat, sleep, or breathe
- Vulnerable to radiant damage and Turn Undead
- Intelligent undead are terrifying

**Monster Tags:**
Some monsters have additional tags:
- **Shapechanger**: Can change form
- **Titan**: Incredibly powerful and ancient`
    },
    {
      id: "running-monsters",
      title: "Running Monsters in Combat",
      content: `**Bringing Monsters to Life:**

**Use Personality:**
- Intelligent monsters have goals, fears, and tactics
- Beasts act on instinct (protect young, flee when wounded)
- Describe monsters' actions dramatically
- Give them catchphrases or mannerisms

**Use Tactics:**
- Intelligent enemies use cover and positioning
- They target vulnerable party members (casters)
- They flee, surrender, or call for help when losing
- They use terrain and environmental hazards

**Vary Actions:**
- Don't just use Multiattack every turn
- Use special abilities and traits
- Ready actions or take the Dodge/Disengage/Dash actions
- Legendary and lair actions make combat dynamic

**Manage Action Economy:**
- Multiple enemies get multiple turns
- Use legendary actions to balance boss fights
- Don't bog down combat with too many monsters

**Track Resources:**
- Monitor HP (describe bloodied state at half HP)
- Track limited-use abilities (recharge 5-6, per day abilities)
- Note conditions affecting monsters
- Use average damage for speed (or roll if you prefer)

**Make Combat Interesting:**
- Add objectives beyond "kill everything"
- Use terrain features (cover, elevation, hazards)
- Have enemies arrive in waves
- Environmental effects (collapsing ceiling, rising water)
- Time pressure (ritual completing, hostage in danger)

**Retreat and Morale:**
- Most creatures flee when reduced to 25% HP
- Mindless creatures fight to the death
- Intelligent creatures surrender if offered mercy
- Some fanatics never retreat

**Adjusting on the Fly:**
- If the fight is too easy, reinforcements arrive
- If it's too hard, enemies flee or make mistakes
- Fudge HP totals if needed for story (but don't make a habit of it)
- Let players' cool ideas succeed sometimes even if technically unlikely`
    },
    {
      id: "memorable-monsters",
      title: "Creating Memorable Monster Encounters",
      content: `**Make It More Than Combat:**

**Give Monsters Context:**
- Why are they here?
- What do they want?
- What happens if the party leaves them alone?
- How do they relate to the larger story?

**Foreshadowing:**
- Show signs of the monster before the encounter
- Claw marks, destroyed wagons, survivor testimonies
- Build tension before the reveal
- First appearance should be dramatic

**Signature Monsters:**
- Recurring enemies create investment
- The goblin who keeps escaping
- The villain's lieutenant who shows up repeatedly
- Building to a final confrontation

**Environmental Storytelling:**
- Monsters should fit their environment
- Lair tells story (bones, treasure, territorial marks)
- What do monsters eat? Where do they sleep?
- Make the lair a character in the fight

**Monster Modifications:**
- Add class levels to make unique enemies
- Give monsters magic items
- Reskin existing monsters for new creatures
- Create "elite" versions with more HP and abilities

**Social Monsters:**
- Not all monsters attack on sight
- Some can be negotiated with
- Monsters have communities and relationships
- Consider capture, bribery, or alliance

**Legendary Encounters:**
- True bosses need legendary actions and lair actions
- Multi-phase fights keep things fresh
- Minions or environmental hazards help
- Give bosses ways to control the battlefield

**After the Encounter:**
- What do the bodies tell the players?
- What can be harvested (monster parts, loot)?
- Who comes to investigate (monster's allies, scavengers)?
- How does the victory/defeat affect the world?`
    },
    {
      id: "monster-resources",
      title: "Finding and Using Monsters",
      content: `**Official Monster Sources:**

**Monster Manual:**
- Core monster book
- 350+ creatures from CR 0 to CR 30
- Essential for every DM

**Volo's Guide to Monsters:**
- Deep dives on specific monster types
- Mind flayers, beholders, hags, etc.
- Includes many new monsters

**Mordenkainen's Tome of Foes:**
- Devils, demons, and other planar creatures
- Elves and dwarves (monsters and lore)
- High-CR monsters for epic campaigns

**Other Official Books:**
- Most adventure books include new monsters
- Settings books (Ravenloft, Eberron, etc.) have themed creatures
- Mythic Odysseys, Monsters of the Multiverse, etc.

**Online Resources:**

**D&D Beyond:**
- Searchable monster database
- Filter by CR, type, size, environment
- Requires purchase of digital books

**Kobold Fight Club (KFC):**
- Encounter building tool
- Calculates difficulty
- Filters and randomizes
- Free

**Improved Initiative:**
- Combat tracker
- Monster stats included
- Roll20 integration

**The Monsters Know What They're Doing:**
- Blog analyzing monster tactics
- How to run monsters intelligently
- Excellent for DM improvement

**Homebrew Monsters:**
- r/UnearthedArcana (Reddit)
- DM's Guild
- Homebrewery
- GM Binder

**Creating Your Own:**
- Use the DMG's monster creation guidelines
- Reskin existing monsters (fast and balanced)
- Adjust HP, damage, and abilities to fit your CR target
- Playtest with your group

**Organized Storage:**
- Note cards for common monsters
- Digital notes by environment/theme
- Bookmark frequently-used monsters
- Create custom encounter lists`
    }
  ]
};
