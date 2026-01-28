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
  sections: { id: string; title: string; content: string }[];
  searchVolume: number;
};

export type RedirectEntry = {
  slug: string;
  redirectTo: string;
  category: string;
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
    name: "D&D Point Buy",
    category: "creation",
    description: "Complete guide to the Point Buy system in D&D 5e. Learn how to spend your 27 points, find point buy calculators, and optimize your ability scores.",
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
    ]
  }
];

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
