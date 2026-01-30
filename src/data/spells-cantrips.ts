import { FAQItem } from "../components/FAQ";

export const cantrips: {
  slug: string;
  name: string;
  level: string;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  classes: string[];
  description: string;
  damage: string | null;
  savingThrow: string | null;
  higherLevels: string | null;
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
  category: "cantrips" | "offensive";
  searchVolume: number;
  aliases?: string[];
}[] = [
  {
    slug: "blade-ward-5e",
    name: "Blade Ward",
    level: "Cantrip",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking it works against spell damage - it only protects against weapon attacks",
      "Using it when you need to attack that turn - it uses your action so you can't cast attack spells",
      "Forgetting it only lasts until the end of your next turn, not a full minute"
    ],
    dmTips: [
      "This spell is rarely optimal in combat since taking the Dodge action is usually better",
      "Consider allowing creative uses like using it before intentionally triggering a trap"
    ],
    faq: [
      {
        question: "Is Blade Ward good in 5e?",
        answer: "Generally no. Using your action for Blade Ward means you can't attack or cast other spells. The Dodge action is usually better since it imposes disadvantage on all attacks against you, not just weapon attacks. It's situational at best."
      },
      {
        question: "Does Blade Ward work against spell attacks?",
        answer: "No. Blade Ward only provides resistance against bludgeoning, piercing, and slashing damage from weapon attacks. Spell attacks like Fire Bolt or Eldritch Blast are not affected, nor is any spell damage."
      },
      {
        question: "Can I attack and use Blade Ward in the same turn?",
        answer: "Not normally. Blade Ward requires your action, so you can't also use the Attack action. However, a Sorcerer could Quicken a spell as a bonus action and then cast Blade Ward with their action."
      },
      {
        question: "How long does Blade Ward last?",
        answer: "Until the end of your next turn, which is typically 1 round. This means if you cast it on your turn, you're protected during the enemy turn and until the end of your following turn."
      },
      {
        question: "Does Blade Ward stack with resistance from other sources?",
        answer: "No. Resistances don't stack in 5e. If you already have resistance to bludgeoning, piercing, or slashing damage (like a Barbarian's Rage), Blade Ward provides no additional benefit against those damage types."
      }
    ],
    category: "cantrips",
    searchVolume: 16570
  },
  {
    slug: "chill-touch-5e",
    name: "Chill Touch",
    level: "Cantrip",
    school: "Necromancy",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.",
    damage: "1d8 necrotic (increases by 1d8 at 5th, 11th, and 17th level)",
    savingThrow: null,
    higherLevels: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    commonMistakes: [
      "Despite the name, it deals necrotic damage, not cold damage",
      "The healing prevention affects ALL healing, including potions and spell healing",
      "It requires a ranged spell attack roll, it's not a saving throw"
    ],
    dmTips: [
      "This is extremely effective against trolls and other creatures with regeneration",
      "The disadvantage against undead makes it tactically valuable in undead-heavy campaigns"
    ],
    faq: [
      {
        question: "Does Chill Touch deal cold damage?",
        answer: "No, despite the name. Chill Touch deals necrotic damage, not cold damage. The 'chill' refers to the chill of the grave, not temperature. This is one of the most common misconceptions about the spell."
      },
      {
        question: "Does Chill Touch stop all healing?",
        answer: "Yes, until the start of your next turn. The target can't regain hit points from any source - spells, potions, class features, regeneration, or any other means. This makes it incredibly effective against trolls and other regenerating creatures."
      },
      {
        question: "Does Chill Touch require touch?",
        answer: "No. Despite the name, Chill Touch has a range of 120 feet and uses a ranged spell attack. You create a ghostly skeletal hand that appears near the target. You don't touch anything personally."
      },
      {
        question: "How does Chill Touch work against undead?",
        answer: "Against undead, Chill Touch provides an extra benefit: the undead has disadvantage on attack rolls against you until the end of your next turn. This makes it tactically valuable in undead-heavy encounters."
      },
      {
        question: "Can Chill Touch be Twinned by Sorcerers?",
        answer: "Yes. Chill Touch targets a single creature and doesn't have a range of self, so it qualifies for Twinned Spell metamagic. You can hit two targets with one casting for 1 sorcery point."
      }
    ],
    category: "cantrips",
    searchVolume: 110
  },
  {
    slug: "mage-hand-5e",
    name: "Mage Hand",
    level: "Cantrip",
    school: "Conjuration",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand, moving it up to 30 feet and using it to manipulate objects, open unlocked doors or containers, stow or retrieve items, or pour contents out of a vial.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Trying to use it in combat - it can't attack, activate magic items, or carry more than 10 pounds",
      "Forgetting you need to use your action each turn to control it after the initial casting",
      "Moving it more than 30 feet from you in a single turn - it vanishes if it goes beyond 30 feet"
    ],
    dmTips: [
      "Allow creative uses like pulling levers, checking for traps, or delivering small items",
      "Remember Arcane Trickster Rogues get an enhanced version with invisible hand and bonus action control"
    ],
    faq: [
      {
        question: "Can Mage Hand attack or deal damage?",
        answer: "No. The spell explicitly states it can't attack, activate magic items, or carry more than 10 pounds. It's purely a utility spell for manipulating objects and performing simple tasks."
      },
      {
        question: "Can Mage Hand open locked doors or disarm traps?",
        answer: "It can open unlocked doors and containers. For locked doors, it can turn keys if you have one. For traps, ask your DM - it can trigger simple pressure plates but complex mechanisms may require ability checks."
      },
      {
        question: "How does Arcane Trickster's Mage Hand Legerdemain work?",
        answer: "Arcane Tricksters get an upgraded Mage Hand that's <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a>, controllable as a bonus action, can pick locks and disarm traps (with thieves' tools), and can plant/retrieve objects from creatures. Much more powerful than the base spell."
      },
      {
        question: "Can Mage Hand hold a torch or light source?",
        answer: "Yes, as long as the light source weighs 10 pounds or less. A torch weighs 1 pound, so it works perfectly. The hand can carry it around to illuminate areas you're exploring."
      },
      {
        question: "Does Mage Hand require concentration?",
        answer: "No. Mage Hand lasts 1 minute without concentration. However, you must use your action each turn to control it (move it and manipulate objects). The initial casting also requires an action."
      }
    ],
    category: "cantrips",
    searchVolume: 12630
  },
  {
    slug: "minor-illusion-5e",
    name: "Minor Illusion",
    level: "Cantrip",
    school: "Illusion",
    castingTime: "1 action",
    range: "30 feet",
    components: "S, M (a bit of fleece)",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You create a sound or an image of an object within range that lasts for the duration. The illusion ends if you dismiss it or cast the spell again. If you create a sound, its volume can range from a whisper to a scream and can be any sound you choose. If you create an image, it must be no larger than a 5-foot cube and is purely visual - it has no sound, smell, or other sensory effects. Physical interaction reveals it as an illusion.",
    damage: null,
    savingThrow: "Investigation check to discern it's an illusion",
    higherLevels: null,
    commonMistakes: [
      "Creating images that move or make sound - the illusion is completely static",
      "Making images larger than a 5-foot cube or trying to create multiple objects at once",
      "Forgetting that physical interaction automatically reveals it - you can't hide behind it from attacks"
    ],
    dmTips: [
      "Reward creative uses like creating distractions, fake walls, or alarming sounds",
      "A creature must use its action to make an Investigation check to determine it's an illusion"
    ],
    faq: [
      {
        question: "Can Minor Illusion create an image that moves?",
        answer: "No. The image is completely static and cannot move. You can create an image of a person, but they would stand perfectly still like a statue. This is a key limitation compared to higher-level illusion spells."
      },
      {
        question: "Can I hide inside a Minor Illusion?",
        answer: "Technically yes, but physical interaction reveals the illusion. A creature can walk through it, and attacks pass through. You might hide briefly, but any investigation or contact reveals the trick."
      },
      {
        question: "Does Minor Illusion make sound and images together?",
        answer: "No. Each casting creates EITHER a sound OR an image, not both. If you want a speaking person illusion, you'd need Silent Image (1st level) or higher. This is why the 5-foot cube image has no sound."
      },
      {
        question: "How do creatures see through Minor Illusion?",
        answer: "Creatures must use their action to make an Investigation check against your spell save DC. Physical interaction (touching it, walking through it) automatically reveals it as an illusion."
      },
      {
        question: "Can Minor Illusion provide cover?",
        answer: "No. While it can block line of sight momentarily, attacks and effects pass through it. A creature shooting through a Minor Illusion wall hits normally - the illusion provides no actual cover bonus."
      }
    ],
    category: "cantrips",
    searchVolume: 10540
  },
  {
    slug: "prestidigitation-5e",
    name: "Prestidigitation",
    level: "Cantrip",
    school: "Transmutation",
    castingTime: "1 action",
    range: "10 feet",
    components: "V, S",
    duration: "Up to 1 hour",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of several instantaneous or lasting effects within range: a harmless sensory effect, light or snuff a small flame, clean or soil an object no larger than 1 cubic foot, chill/warm/flavor up to 1 cubic foot of nonliving material for 1 hour, make a color/mark/symbol appear on an object or surface for 1 hour, or create a nonmagical trinket or illusory image that fits in your hand and lasts until the end of your next turn. You can have up to three non-instantaneous effects active at once.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Trying to create damaging effects or use it as an attack - all effects must be harmless",
      "Attempting to affect creatures or living material - it only affects nonliving matter",
      "Creating more than three non-instantaneous effects at once"
    ],
    dmTips: [
      "This is the ultimate utility cantrip - encourage creative uses for flavor and minor conveniences",
      "Draw the line at effects that would replace actual spells or give mechanical advantages"
    ],
    faq: [
      {
        question: "What can Prestidigitation actually do?",
        answer: "It can: create harmless sensory effects, light/snuff small flames, clean/soil small objects, chill/warm/flavor 1 cubic foot of material for 1 hour, create marks/symbols for 1 hour, or create small trinkets/illusions lasting until end of your next turn. Up to 3 non-instantaneous effects at once."
      },
      {
        question: "Can Prestidigitation deal damage or affect creatures?",
        answer: "No. All effects must be harmless and non-threatening. You cannot heat something to burning, create a choking smell, or affect living creatures directly. It's purely for utility and flavor."
      },
      {
        question: "Can Prestidigitation create food or drink?",
        answer: "No. It can flavor existing food/drink and warm or chill it, but cannot create food from nothing. The trinkets it creates are clearly magical and not suitable for consumption or material value."
      },
      {
        question: "What's the difference between Prestidigitation and Thaumaturgy?",
        answer: "Prestidigitation (arcane casters) focuses on small tricks and conveniences. Thaumaturgy (Clerics) creates dramatic divine manifestations like booming voice, trembling ground, and slamming doors. Druidcraft is the druid equivalent."
      },
      {
        question: "Can Prestidigitation clean blood or poison?",
        answer: "It can clean blood as dirt/grime from objects up to 1 cubic foot. For poison, ask your DM - cleaning visible residue is reasonable, but neutralizing active poison on a weapon typically requires actual cleaning or magic."
      }
    ],
    category: "cantrips",
    searchVolume: 9310
  },
  {
    slug: "thaumaturgy-5e",
    name: "Thaumaturgy",
    level: "Cantrip",
    school: "Transmutation",
    castingTime: "1 action",
    range: "30 feet",
    components: "V",
    duration: "Up to 1 minute",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of several instantaneous or lasting effects: your voice booms up to three times as loud for 1 minute, you cause flames to flicker/brighten/dim/change color for 1 minute, you cause harmless tremors in the ground for 1 minute, you create an instantaneous sound originating from a point of your choice, you instantaneously cause a door or window to fly open or slam shut, or you alter the appearance of your eyes for 1 minute. You can have up to three non-instantaneous effects active at once.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Trying to use the tremors to knock creatures <a href=\"/rules/conditions/prone-condition-5e/\">prone</a> - effects must be harmless",
      "Slamming doors on creatures to deal damage or restrict movement",
      "Forgetting it requires concentration-like management of three simultaneous effects"
    ],
    dmTips: [
      "This is excellent for intimidation checks and dramatic religious moments",
      "The booming voice can be heard clearly even in loud environments"
    ],
    faq: [
      {
        question: "What can Thaumaturgy do?",
        answer: "It creates divine manifestations: voice booms 3x louder, flames flicker/change color, harmless ground tremors, instantaneous sounds, doors/windows slam open/shut, or alter your eye appearance. Up to 3 non-instantaneous effects (1 minute each)."
      },
      {
        question: "Can Thaumaturgy deal damage or knock creatures prone?",
        answer: "No. The ground tremors are explicitly harmless - they can't knock creatures <a href=\"/rules/conditions/prone-condition-5e/\">prone</a>, trigger traps, or cause any mechanical effect. Similarly, slamming doors can't damage creatures or trap them."
      },
      {
        question: "Does Thaumaturgy give advantage on Intimidation checks?",
        answer: "RAW, no automatic advantage. However, most DMs grant advantage when dramatically using booming voice, trembling ground, and glowing eyes together. Discuss with your DM how they want to handle it."
      },
      {
        question: "Is Thaumaturgy the same as Prestidigitation?",
        answer: "No. Thaumaturgy is Cleric-exclusive and creates dramatic divine manifestations. Prestidigitation (arcane casters) creates small tricks and conveniences. Thaumaturgy is better for intimidation; Prestidigitation is more versatile for utility."
      },
      {
        question: "Can Thaumaturgy unlock or break doors?",
        answer: "No. It can only cause unlocked doors or windows to fly open or slam shut. It cannot unlock locked doors, break hinges, or force open stuck doors. The effect is purely dramatic, not forceful."
      }
    ],
    category: "cantrips",
    searchVolume: 22080,
    aliases: ["thaumaturgy"]
  },
  {
    slug: "thorn-whip-5e",
    name: "Thorn Whip",
    level: "Cantrip",
    school: "Transmutation",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (the stem of a plant with thorns)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Druid"],
    description: "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull it up to 10 feet closer to you.",
    damage: "1d6 piercing (increases by 1d6 at 5th, 11th, and 17th level)",
    savingThrow: null,
    higherLevels: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    commonMistakes: [
      "Thinking it has 30 feet range - it's a melee spell attack with 30-foot reach",
      "Trying to pull Huge or larger creatures - only works on Large or smaller",
      "Forgetting the pull is optional - you can choose not to pull if it would be disadvantageous"
    ],
    dmTips: [
      "Excellent for environmental kills - pull enemies into hazards, off cliffs, or into spike growth",
      "The pull happens after damage, so it doesn't affect the attack roll"
    ],
    faq: [
      {
        question: "Is Thorn Whip a melee or ranged spell attack?",
        answer: "Melee spell attack with 30-foot reach. This is important because melee attacks don't have disadvantage when enemies are adjacent, but you also can't use it within 5 feet of an enemy with the Crossbow Expert feat benefit."
      },
      {
        question: "Can Thorn Whip pull flying creatures to the ground?",
        answer: "Yes! If the creature is within 10 feet of the ground, you can pull it down. This causes falling damage and knocks it <a href=\"/rules/conditions/prone-condition-5e/\">prone</a>. One of the best uses of Thorn Whip against flying enemies."
      },
      {
        question: "Does the pull from Thorn Whip trigger opportunity attacks?",
        answer: "No. Forced movement (like Thorn Whip's pull) doesn't trigger opportunity attacks. Only voluntary movement using your own movement, action, or reaction triggers opportunity attacks."
      },
      {
        question: "Can I pull enemies into hazards with Thorn Whip?",
        answer: "Yes! This is the spell's best tactical use. Pull enemies into Spike Growth, Spirit Guardians, off cliffs, into pits, through fire, or into other environmental hazards. The 10-foot pull can be devastating."
      },
      {
        question: "Is the Thorn Whip pull optional?",
        answer: "Yes. You can choose not to pull the creature if it would be disadvantageous (like pulling an enemy closer to wounded allies). The pull happens only if you want it to after the damage is dealt."
      }
    ],
    category: "cantrips",
    searchVolume: 5850
  },
  {
    slug: "vicious-mockery-5e",
    name: "Vicious Mockery",
    level: "Cantrip",
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard"],
    description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
    damage: "1d4 psychic (increases by 1d4 at 5th, 11th, and 17th level)",
    savingThrow: "Wisdom",
    higherLevels: "The spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
    commonMistakes: [
      "Target must be able to hear you - doesn't work on <a href=\"/rules/conditions/deafened-condition-5e/\">deafened</a> creatures",
      "The disadvantage only applies to the next attack roll, not all attacks that turn",
      "Disadvantage applies even if the save succeeds - no, it must fail the save for any effect"
    ],
    dmTips: [
      "Encourage players to actually roleplay creative insults for added fun",
      "The disadvantage makes this one of the best defensive cantrips in the game"
    ],
    faq: [
      {
        question: "Does Vicious Mockery work on creatures that don't understand you?",
        answer: "Yes! The spell only requires that the target can hear you, not understand you. The magical enchantment carries the insult's sting regardless of language barriers. However, <a href=\"/rules/conditions/deafened-condition-5e/\">deafened</a> creatures are immune."
      },
      {
        question: "Is Vicious Mockery a good cantrip?",
        answer: "Yes, one of the best. While 1d4 damage is low, the disadvantage on the next attack roll is powerful. Against a boss monster, negating one attack can save a party member from massive damage. It's defensive value over damage."
      },
      {
        question: "Does the disadvantage apply if the target saves?",
        answer: "No. Both the damage AND the disadvantage only apply if the target fails the Wisdom saving throw. A successful save negates the entire effect - no damage and no disadvantage."
      },
      {
        question: "Do I have to actually insult the target out loud?",
        answer: "The spell has only verbal components and targets a creature that 'can hear you.' Most DMs expect you to actually speak the insult, and many encourage creative roleplay. Some tables have lists of funny D&D insults ready."
      },
      {
        question: "Can Vicious Mockery affect multiple targets?",
        answer: "No, it targets one creature. However, with Twinned Spell metamagic, a Bard/Sorcerer multiclass could hit two targets. The College of Lore's Cutting Words is a separate ability that provides similar debuffs."
      }
    ],
    category: "cantrips",
    searchVolume: 8040,
    aliases: ["vicious-mockery"]
  },
  {
    slug: "toll-the-dead-5e",
    name: "Toll the Dead",
    level: "Cantrip",
    school: "Necromancy",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Warlock", "Wizard"],
    description: "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.",
    damage: "1d8 necrotic (1d12 if target is wounded), increases by 1 die at 5th, 11th, and 17th level",
    savingThrow: "Wisdom",
    higherLevels: "The spell's damage increases by one die when you reach 5th level (2d8/2d12), 11th level (3d8/3d12), and 17th level (4d8/4d12).",
    commonMistakes: [
      "Forgetting to check if the target is wounded - 1d12 is significantly better than 1d8",
      "Not realizing 'missing hit points' means any damage, even 1 HP",
      "Thinking the save difficulty changes based on damage die - it's always the same DC"
    ],
    dmTips: [
      "One of the best damage cantrips when enemies are wounded",
      "Encourage players to save this for wounded enemies to maximize the 1d12 damage",
      "The bell sound adds great flavor - describe it ominously"
    ],
    faq: [
      {
        question: "When does Toll the Dead deal d12 vs d8 damage?",
        answer: "1d8 if the target is at full HP, 1d12 if the target is missing ANY hit points. Even 1 HP of damage makes them 'wounded' for the d12. This makes it one of the highest-damage cantrips against injured targets."
      },
      {
        question: "Is Toll the Dead better than Sacred Flame?",
        answer: "Usually yes. Toll the Dead has higher average damage (especially the d12), same range, and Wisdom saves are similar. However, Sacred Flame ignores cover and deals radiant damage (better vs undead). Choose based on situation."
      },
      {
        question: "Does Toll the Dead require sight?",
        answer: "Yes. You must 'point at one creature you can see.' This means it doesn't work against <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> creatures or through total cover, unlike some spells that only require knowing a creature's location."
      },
      {
        question: "Can allies 'wound' enemies to trigger the d12?",
        answer: "Yes! A common tactic is having another party member deal even 1 damage first (via Magic Missile, arrows, etc.), then following up with Toll the Dead for the d12 damage. Coordinate with your party."
      },
      {
        question: "What classes get Toll the Dead?",
        answer: "Cleric, Warlock, and Wizard can all learn Toll the Dead. It's from Xanathar's Guide to Everything. For Clerics especially, it's often their best damage cantrip option alongside Sacred Flame."
      }
    ],
    category: "cantrips",
    searchVolume: 14200
  },
  {
    slug: "dancing-lights-5e",
    name: "Dancing Lights",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it requires concentration - can't maintain it while concentrating on other spells",
      "Not enforcing the 20-foot distance limit between lights",
      "Thinking the lights provide bright light - they only provide dim light",
      "Forgetting you need a bonus action to move the lights after initial casting"
    ],
    dmTips: [
      "Great for scouting ahead or creating distractions",
      "The humanoid form can be used to trick enemies or simulate an ally",
      "Dim light still provides vision for creatures with darkvision",
      "Creative players will use this in clever ways - encourage it"
    ],
    faq: [
      {
        question: "Why does Dancing Lights require concentration?",
        answer: "Dancing Lights requires concentration because you're actively controlling multiple light sources. This is a significant downside compared to the Light cantrip, which lasts 1 hour without concentration."
      },
      {
        question: "Can Dancing Lights create a convincing humanoid form?",
        answer: "The humanoid form is glowing and vaguely humanoid, not detailed. It might fool enemies at a distance or in dim conditions, but close inspection reveals it's just light. DM discretion on specific uses."
      },
      {
        question: "What's the practical difference between Dancing Lights and Light?",
        answer: "Light: No concentration, 1 hour, brighter (20ft bright/20ft dim), attached to object. Dancing Lights: Concentration, 1 minute, dimmer (10ft dim only), movable with bonus action. Light is usually better for dungeon exploration."
      },
      {
        question: "Can Dancing Lights scout around corners?",
        answer: "Yes! You can move lights up to 60 feet per bonus action, and they can go around corners and through openings. Great for checking ahead without risking yourself, though enemies will see the lights coming."
      },
      {
        question: "Do all four lights need to stay together?",
        answer: "Each light must stay within 20 feet of another light from the same casting. You can spread them out somewhat, but not beyond this limit. If a light exceeds this distance or the spell's range, it winks out."
      }
    ],
    category: "cantrips",
    searchVolume: 9200
  },
  {
    slug: "light-5e",
    name: "Light",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "Touch",
    components: "V, M (a firefly or phosphorescent moss)",
    duration: "1 hour",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Sorcerer", "Wizard"],
    description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
    damage: null,
    savingThrow: "Dexterity (if targeting hostile creature's equipment)",
    higherLevels: null,
    commonMistakes: [
      "Forgetting hostile creatures get a save if you target their equipment",
      "Not realizing the light can be any color you choose",
      "Thinking it requires concentration - it lasts 1 hour without concentration",
      "Forgetting the object must be no larger than 10 feet in any dimension"
    ],
    dmTips: [
      "Perfect replacement for torches without tying up a hand",
      "Can be cast on enemy shields or armor to make them easier to see and track",
      "The color choice allows for creative signaling or identification systems",
      "Very useful in dungeons but can give away the party's position"
    ],
    faq: [
      {
        question: "Can Light be cast on a weapon or shield?",
        answer: "Yes! Any object up to 10 feet in any dimension works. Casting Light on your weapon, shield, or holy symbol is common. You keep a hand free since the light source is attached to equipment you're already holding."
      },
      {
        question: "Can you cast Light on an enemy?",
        answer: "You can try to cast it on an object they're holding or wearing. They get a Dexterity saving throw to avoid it. If they fail, their armor, weapon, or pack glows, making them easy to track even if <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> or hiding."
      },
      {
        question: "Does Light require concentration?",
        answer: "No! This is Light's major advantage over Dancing Lights. Light lasts 1 hour with no concentration, freeing you to concentrate on other spells while maintaining illumination."
      },
      {
        question: "Can you change the Light color after casting?",
        answer: "RAW, you choose the color when you cast it. You'd need to recast the spell to change colors. However, this is often house-ruled to allow color changes since it's purely cosmetic."
      },
      {
        question: "Does covering the lit object dispel the spell?",
        answer: "No. Covering the object with something opaque (like a cloak or bag) blocks the light but doesn't end the spell. Remove the cover and the light shines again. This is useful for quick stealth moments."
      }
    ],
    category: "cantrips",
    searchVolume: 16800
  },
  {
    slug: "ray-of-frost-5e",
    name: "Ray of Frost",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
    damage: "1d8 cold (increases by 1d8 at 5th, 11th, and 17th level)",
    savingThrow: null,
    higherLevels: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    commonMistakes: [
      "Forgetting the speed reduction only lasts until the start of your next turn",
      "Not applying the speed reduction even when damage is resisted or reduced",
      "Thinking multiple hits stack the speed reduction - it doesn't stack",
      "Not considering that 10-foot reduction might prevent enemies from reaching targets"
    ],
    dmTips: [
      "The speed reduction makes this excellent for kiting enemies or protecting allies",
      "Good against fast enemies or those trying to close distance",
      "Cold damage is less commonly resisted than fire but still fairly common",
      "The secondary effect makes this more valuable than similar damage cantrips"
    ],
    faq: [
      {
        question: "How good is Ray of Frost compared to Fire Bolt?",
        answer: "Fire Bolt deals more damage (1d10 vs 1d8) and has longer range (120ft vs 60ft). However, Ray of Frost's speed reduction can be tactically valuable, keeping enemies from reaching your party or escaping. Choose based on situation."
      },
      {
        question: "Does the speed reduction stack if I hit multiple times?",
        answer: "No. Multiple hits don't stack the speed reduction - it remains 10 feet. However, the reduction resets each time, so hitting again extends how long they're slowed."
      },
      {
        question: "Can Ray of Frost reduce speed below zero?",
        answer: "Speed can't go below 0. A creature with 10-foot speed hit by Ray of Frost would have 0 speed. Combined with other slow effects, you can completely immobilize creatures."
      },
      {
        question: "Does Ray of Frost work on flying creatures?",
        answer: "Yes! The speed reduction applies to all movement including flying speed. A creature with 30ft flying speed would have 20ft flying speed until the start of your next turn. Great for keeping flyers in range."
      },
      {
        question: "Is the speed reduction applied even if damage is resisted?",
        answer: "Yes. The speed reduction triggers on a hit, regardless of how much damage is dealt. Even if the target has cold resistance or immunity, the speed reduction still applies (though immune creatures take no damage)."
      }
    ],
    category: "cantrips",
    searchVolume: 11400
  },
  {
    slug: "spare-the-dying-5e",
    name: "Spare the Dying",
    level: "Cantrip",
    school: "Necromancy",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Using this instead of a healing spell when healing would be better",
      "Forgetting it requires touch - you must be adjacent to the dying creature",
      "Not realizing this takes your action - Healing Word is often better since it's a bonus action",
      "Thinking it restores hit points - it only stabilizes at 0 HP"
    ],
    dmTips: [
      "Useful when out of spell slots but an ally is dying",
      "Grave Domain clerics can cast this as a bonus action at range, making it much more valuable",
      "Generally outclassed by Healing Word but free to use as a cantrip",
      "Good for NPCs or when resources are extremely limited"
    ],
    faq: [
      {
        question: "Is Spare the Dying worth taking?",
        answer: "It's situational. Healing Word is usually better since it restores HP AND stabilizes, plus it's a bonus action with 60ft range. However, Spare the Dying is a cantrip (unlimited uses) and Grave Clerics get a much-improved version."
      },
      {
        question: "Does Spare the Dying restore any hit points?",
        answer: "No. It only stabilizes the creature at 0 HP. The creature remains <a href=\"/rules/conditions/unconscious-condition-5e/\">unconscious</a> and doesn't regain consciousness until they receive actual healing. It just stops death saving throws."
      },
      {
        question: "Can Spare the Dying be used on undead or constructs?",
        answer: "No. The spell explicitly states it has no effect on undead or constructs. It only works on living creatures - most humanoids, beasts, and other organic creatures."
      },
      {
        question: "How does Grave Cleric improve Spare the Dying?",
        answer: "Grave Domain Clerics can cast Spare the Dying as a bonus action with a range of 30 feet instead of touch. This makes it dramatically more useful - stabilize an ally and still take your action to attack or cast another spell."
      },
      {
        question: "Why use Spare the Dying instead of a Medicine check?",
        answer: "Spare the Dying automatically succeeds (no roll needed), while a Medicine check to stabilize is DC 10 and can fail. When an ally's life is on the line, guaranteed success is valuable, especially if you have low Wisdom."
      }
    ],
    category: "cantrips",
    searchVolume: 8900
  },
  {
    slug: "shape-water-5e",
    name: "Shape Water",
    level: "Cantrip",
    school: "Transmutation",
    castingTime: "1 action",
    range: "30 feet",
    components: "S",
    duration: "Instantaneous or 1 hour",
    concentration: false,
    ritual: false,
    classes: ["Druid", "Sorcerer", "Wizard"],
    description: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways: You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction; you cause the water to form into simple shapes and animate at your direction (lasts 1 hour); you change the water's color or opacity (lasts 1 hour); or you freeze the water, provided there are no creatures in it (lasts 1 hour). If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Trying to create more than two non-instantaneous effects at once",
      "Attempting to freeze water with creatures in it - this doesn't work",
      "Thinking you can create water - this only manipulates existing water",
      "Forgetting the cube is only 5 feet - that's about 30 gallons of water"
    ],
    dmTips: [
      "One of the most creative utility cantrips if players think outside the box",
      "Can create ice bridges, color-code areas, or create simple water sculptures",
      "The instantaneous movement can douse small fires or move liquids",
      "Freezing water can create slippery ice patches or seal small openings"
    ],
    faq: [
      {
        question: "Can Shape Water create ice weapons or tools?",
        answer: "You can freeze water into shapes, but the ice has normal ice properties - it's slippery, brittle, and melts. DMs may allow simple tools, but ice weapons would likely break on first use and deal no extra damage."
      },
      {
        question: "Can Shape Water move water with creatures in it?",
        answer: "You can move water up to 5 feet instantaneously, but this won't forcibly move creatures. The water flows around them. You also cannot freeze water with creatures in it per the spell's explicit restriction."
      },
      {
        question: "Does Shape Water work on potions or blood?",
        answer: "Potions are typically magical liquids, not water, so no. Blood is debatable - it contains water but isn't pure water. Most DMs rule it doesn't work on blood. Ask your DM for their interpretation."
      },
      {
        question: "Can Shape Water create a bridge of ice?",
        answer: "In theory yes, but the 5-foot cube limit means small bridges. Ice lasts 1 hour, so temporary crossings work. The ice would need to be thick enough to support weight - DM discretion on weight limits."
      },
      {
        question: "How does Shape Water interact with being underwater?",
        answer: "Underwater, you could move water to create currents, change opacity to obscure areas, or freeze patches. Creative players can use it for underwater signaling, creating air pockets (when combined with air), or temporary barriers."
      }
    ],
    category: "cantrips",
    searchVolume: 7600
  },
  {
    slug: "sword-burst-5e",
    name: "Sword Burst",
    level: "Cantrip",
    school: "Conjuration",
    castingTime: "1 action",
    range: "Self (5-foot radius)",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "You create a momentary circle of spectral blades that sweep around you. Each creature within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage.",
    damage: "1d6 force (increases by 1d6 at 5th, 11th, and 17th level)",
    savingThrow: "Dexterity",
    higherLevels: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    commonMistakes: [
      "Forgetting it hits ALL creatures within 5 feet, including allies",
      "Thinking it has longer range - it only affects creatures within 5 feet of you",
      "Not realizing force damage is rarely resisted, making this valuable",
      "Forgetting only verbal component is needed - good when hands are bound"
    ],
    dmTips: [
      "Useful when surrounded by enemies, similar to Thunderclap",
      "Be cautious about friendly fire if allies are adjacent",
      "Force damage makes this reliable against most creatures",
      "Good emergency option for spellcasters stuck in melee"
    ],
    faq: [
      {
        question: "Does Sword Burst hit allies?",
        answer: "Yes. It affects ALL creatures within 5 feet, including allies. Be careful when party members are adjacent to you. Unlike some AoE spells, there's no way to exclude allies from the effect."
      },
      {
        question: "Is Sword Burst good for Eldritch Knights or Bladesingers?",
        answer: "Yes! Melee spellcasters benefit most since they're likely surrounded by enemies. Force damage is rarely resisted, and it scales with character level. Combined with War Magic or Song of Defense, it's solid."
      },
      {
        question: "How does Sword Burst compare to Thunderclap?",
        answer: "Both are 5-foot radius AoE cantrips. Sword Burst deals force damage (rarely resisted) with Dex save. Thunderclap deals thunder damage (more commonly resisted) with Con save and is audible 100ft away. Sword Burst is usually better."
      },
      {
        question: "Can Sword Burst be Twinned?",
        answer: "No. Twinned Spell requires targeting a single creature. Sword Burst affects an area (all creatures within 5 feet), so it doesn't qualify for Twinned Spell metamagic regardless of how many creatures are affected."
      },
      {
        question: "What classes get Sword Burst?",
        answer: "Sorcerer, Warlock, and Wizard can learn Sword Burst. It's from Sword Coast Adventurer's Guide/Tasha's Cauldron. Eldritch Knights and Arcane Tricksters can also take it since it's on the Wizard list."
      }
    ],
    category: "cantrips",
    searchVolume: 5400
  }
];
