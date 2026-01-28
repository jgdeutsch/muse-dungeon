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
  },
  {
    slug: "hellish-rebuke-5e",
    name: "Hellish Rebuke",
    level: "1st",
    school: "Evocation",
    castingTime: "1 reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Warlock"],
    description: "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.",
    damage: "2d10 fire",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting it's a reaction when you take damage, not when you're attacked",
      "Not using it because you're saving spell slots - it's excellent damage for a 1st-level spell",
      "Thinking you can use it after taking damage from any source - the creature must be within 60 feet and visible",
      "Forgetting it scales well with higher spell slots"
    ],
    dmTips: [
      "Iconic warlock spell that makes attacking them dangerous",
      "Average damage of 11 at 1st level is excellent",
      "Can discourage enemies from focusing the warlock",
      "The fire damage is thematic but can be resisted by some creatures"
    ],
    category: "reaction-defense",
    searchVolume: 11400
  },
  {
    slug: "protection-from-evil-and-good-5e",
    name: "Protection from Evil and Good",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (holy water or powdered silver and iron, which the spell consumes)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Paladin", "Warlock", "Wizard"],
    description: "Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead. The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can't be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it doesn't work against humanoids, beasts, or most common enemies",
      "Not using it when facing the specific creature types it protects against",
      "Thinking it prevents all charm/fear/possession - only from the listed creature types",
      "Forgetting it requires concentration"
    ],
    dmTips: [
      "Very situational but powerful when facing extraplanar creatures",
      "Essential for dealing with possession or charm effects",
      "The disadvantage on attacks can save lives against powerful fiends or undead",
      "Consider telegraphing when this spell would be useful"
    ],
    category: "reaction-defense",
    searchVolume: 8600
  },
  {
    slug: "armor-of-agathys-5e",
    name: "Armor of Agathys",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a cup of water)",
    duration: "1 hour",
    concentration: false,
    ritual: false,
    classes: ["Warlock"],
    description: "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.",
    damage: "5 cold (when hit in melee)",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the damage only triggers on melee attacks, not ranged",
      "Thinking the damage continues after the temp HP are gone - it doesn't",
      "Not realizing this scales incredibly well at higher levels",
      "Forgetting it lasts 1 hour without concentration"
    ],
    dmTips: [
      "One of the best warlock defensive spells, especially at higher levels",
      "At 5th level (using a 3rd-level slot), grants 15 temp HP and deals 15 damage per hit",
      "Encourages enemies to use ranged attacks instead of melee",
      "The cold damage is automatic - no save or attack roll needed"
    ],
    category: "reaction-defense",
    searchVolume: 9200
  },
  {
    slug: "mage-armor-5e",
    name: "Mage Armor",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a piece of cured leather)",
    duration: "8 hours",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking it stacks with armor - it doesn't work if the target is wearing armor",
      "Not casting it at the start of the day for 8 hours of protection",
      "Forgetting it sets base AC to 13 + Dex, which might be lower than some calculations",
      "Thinking it requires concentration - it lasts 8 hours without concentration"
    ],
    dmTips: [
      "Essential spell for wizards and sorcerers with no armor",
      "With +3 Dex it gives AC 16, which is decent",
      "The 8-hour duration means it should almost always be active",
      "Can be cast on other unarmored allies like monks"
    ],
    category: "reaction-defense",
    searchVolume: 14800
  },
  {
    slug: "fire-shield-5e",
    name: "Fire Shield",
    level: "4th",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a bit of phosphorus or a firefly)",
    duration: "10 minutes",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it. The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage. In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a chill shield.",
    damage: "2d8 fire or cold (when hit in melee)",
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the damage only triggers on melee attacks within 5 feet",
      "Not choosing the shield type based on expected enemy damage",
      "Forgetting it sheds light, which can be a disadvantage for stealth",
      "Thinking the damage requires a reaction - it's automatic"
    ],
    dmTips: [
      "Excellent defensive spell that provides both resistance and damage",
      "The damage is automatic - no save for the attacker",
      "Can discourage melee attackers from targeting the caster",
      "The light emission can be both helpful and problematic depending on situation"
    ],
    category: "reaction-defense",
    searchVolume: 7400
  },
  {
    slug: "stoneskin-5e",
    name: "Stoneskin",
    level: "4th",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (diamond dust worth 100 gp, which the spell consumes)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
    description: "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it only protects against nonmagical physical damage",
      "Not considering the 100 gp material cost",
      "Thinking it protects against magical weapons - it doesn't",
      "Forgetting it requires concentration, competing with other powerful spells"
    ],
    dmTips: [
      "Very useful at lower levels, less so at higher levels when magic weapons are common",
      "The material cost makes it feel significant",
      "Great for protecting the party tank in dungeons with many nonmagical threats",
      "Consider whether the concentration is worth it compared to other options"
    ],
    category: "reaction-defense",
    searchVolume: 8100
  }
];
