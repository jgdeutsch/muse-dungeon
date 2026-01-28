export const reactionDefenseSpells: {
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
  category: "reaction-defense";
  searchVolume: number;
  aliases?: string[];
}[] = [
  {
    slug: "absorb-elements-5e",
    name: "Absorb Elements",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
    range: "Self",
    components: "S",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
    description: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
    damage: "1d6 (of triggering damage type)",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the bonus damage only applies to melee attacks, not spell attacks or ranged attacks",
      "Not realizing you get resistance to the triggering damage before it's applied",
      "Thinking the stored energy lasts more than one hit - it ends after the first melee hit",
      "Forgetting you only have until the start of your next turn to use the stored energy"
    ],
    dmTips: [
      "Excellent defensive option for spellcasters, especially against breath weapons and fireballs",
      "The resistance can turn a failed save from devastating to manageable",
      "Remind players they can use this even if they're not typically in melee - opportunity attacks count",
      "Great for gish characters who mix melee and spellcasting"
    ],
    category: "reaction-defense",
    searchVolume: 8200
  },
  {
    slug: "counterspell-5e",
    name: "Counterspell",
    level: "3rd",
    school: "Abjuration",
    castingTime: "1 reaction, which you take when you see a creature within 60 feet of you casting a spell",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
    commonMistakes: [
      "Forgetting you must see the creature casting the spell - can't counter if you can't see them",
      "Not making the ability check for spells of 4th level or higher",
      "Thinking the enemy gets a save - they don't, either your check succeeds or it doesn't",
      "Forgetting that you typically don't know what spell is being cast without Identify or similar features"
    ],
    dmTips: [
      "One of the most powerful defensive spells in the game, especially against enemy spellcasters",
      "The check DC is 10 + spell level (DC 14 for 4th level, DC 15 for 5th, etc.)",
      "Consider having multiple enemy spellcasters to drain the party's reactions and spell slots",
      "RAW, you don't know what spell is being cast unless you use a reaction to Identify it",
      "Counterspell can itself be countered, leading to counterspell chains"
    ],
    category: "reaction-defense",
    searchVolume: 10100,
    aliases: ["counterspell"]
  },
  {
    slug: "faerie-fire-5e",
    name: "Faerie Fire",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Druid"],
    description: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius. Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
    damage: null,
    savingThrow: "Dexterity",
    higherLevels: null,
    commonMistakes: [
      "Forgetting that creatures that save are not outlined and gain no penalty",
      "Not tracking that the light makes invisible creatures visible (and targetable)",
      "Thinking the advantage only applies to certain types of attacks - it's all attack rolls",
      "Forgetting the spell requires concentration"
    ],
    dmTips: [
      "Excellent for revealing invisible enemies or negating heavy obscurement",
      "The advantage on attack rolls for all party members makes this very powerful at low levels",
      "Great against enemies with high AC or those relying on invisibility",
      "The 20-foot cube can hit multiple enemies if positioned well"
    ],
    category: "reaction-defense",
    searchVolume: 12110
  },
  {
    slug: "shield-5e",
    name: "Shield",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the +5 AC applies to the attack that triggered the spell",
      "Not tracking that the bonus lasts until the start of your next turn, protecting against multiple attacks",
      "Thinking it requires concentration - it doesn't",
      "Not realizing it completely negates magic missile damage, not just grants a bonus"
    ],
    dmTips: [
      "One of the best defensive spells for wizards and sorcerers",
      "The +5 bonus can turn a hit into a miss retroactively, which feels great for players",
      "Can be cast multiple times per turn if the caster has multiple reactions (very rare)",
      "Smart enemies will try to drain spell slots by forcing repeated Shield casts",
      "Describe the shimmering barrier appearing just in time to deflect the blow"
    ],
    category: "reaction-defense",
    searchVolume: 7120
  },
  {
    slug: "silvery-barbs-5e",
    name: "Silvery Barbs",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 reaction, which you take when a creature you can see within 60 feet succeeds on an attack roll, ability check, or saving throw",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll. You can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one Silvery Barbs spell at a time.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the target must reroll and use the lower result - not just roll again and choose",
      "Not realizing you can give the advantage to yourself",
      "Thinking the advantage lasts for multiple rolls - it's only the next one within 1 minute",
      "Stacking multiple Silvery Barbs advantages on the same creature - only one can affect a creature at a time"
    ],
    dmTips: [
      "This spell is very powerful and controversial - consider whether it fits your table",
      "It can turn critical hits into misses and successful saves into failures",
      "The advantage rider is often overlooked but can be very impactful",
      "Some DMs ban this spell or limit it to once per short rest due to its power level",
      "Can lead to feel-bad moments when players constantly reroll enemy successes"
    ],
    category: "reaction-defense",
    searchVolume: 9700
  }
];
