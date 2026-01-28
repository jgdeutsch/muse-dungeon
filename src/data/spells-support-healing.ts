export const supportHealingSpells: {
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
  category: "support-healing";
  searchVolume: number;
  aliases?: string[];
}[] = [
  {
    slug: "aid-5e",
    name: "Aid",
    level: "2nd",
    school: "Abjuration",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a tiny strip of white cloth)",
    duration: "8 hours",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting that the spell increases both maximum and current hit points",
      "Not tracking that the bonus HP disappears when the spell ends (but doesn't reduce current HP below the new max)",
      "Thinking the spell can be used to heal - it increases max HP, not a healing effect",
      "Forgetting the 8-hour duration means it often lasts through multiple encounters"
    ],
    dmTips: [
      "This spell is excellent pre-combat buffing for the party",
      "At higher levels, the HP boost becomes very significant (+20 HP at 6th level slot)",
      "Unlike temporary HP, this stacks with other bonuses and can be healed",
      "Great for giving the party extra survivability before a big boss fight"
    ],
    category: "support-healing",
    searchVolume: 5120
  },
  {
    slug: "bless-5e",
    name: "Bless",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a sprinkling of holy water)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the d4 applies to both attack rolls AND saving throws",
      "Not reminding players to add the d4 - it's easy to forget in the heat of combat",
      "Thinking it requires an action to use the d4 - it's automatic whenever you roll",
      "Forgetting that concentration can be broken, ending the effect early"
    ],
    dmTips: [
      "One of the best 1st-level buffs in the game - the d4 adds up over multiple rolls",
      "Especially powerful in parties with many attacks (fighters, rogues, etc.)",
      "The saving throw bonus can be a lifesaver against debilitating effects",
      "Consider having NPC clerics cast this before major battles to show preparation"
    ],
    category: "support-healing",
    searchVolume: 9860
  },
  {
    slug: "cure-wounds-5e",
    name: "Cure Wounds",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    description: "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting to add the spellcasting ability modifier to the healing",
      "Trying to use it on undead or constructs",
      "Not realizing it requires touch - you must be adjacent to the target",
      "Thinking it can restore hit point maximum - it only heals current HP"
    ],
    dmTips: [
      "The most iconic healing spell in D&D",
      "In combat, Healing Word is often better due to bonus action and range",
      "Great for out-of-combat healing when you have time",
      "At higher levels, the healing scales well (5d8+modifier at 5th level)"
    ],
    category: "support-healing",
    searchVolume: 25050
  },
  {
    slug: "guidance-5e",
    name: "Guidance",
    level: "Cantrip",
    school: "Divination",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Druid"],
    description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Trying to use it in combat for attack rolls or saves - it only works on ability checks",
      "Forgetting it requires concentration, so you can't spam it on multiple people at once",
      "Not having the target declare they're using it before rolling the ability check",
      "Thinking the d4 can be added after seeing the result of the check (it can, but must be before knowing success/failure)"
    ],
    dmTips: [
      "One of the most-used cantrips in the game for good reason",
      "Can be cast right before ability checks like picking locks, searching, persuading, etc.",
      "The 1-minute duration means it can be cast right before entering a room or starting a conversation",
      "Consider whether constantly casting Guidance might annoy NPCs or take too much table time"
    ],
    category: "support-healing",
    searchVolume: 12080
  },
  {
    slug: "healing-word-5e",
    name: "Healing Word",
    level: "1st",
    school: "Evocation",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid"],
    description: "A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting to add the spellcasting ability modifier",
      "Not utilizing the bonus action economy - you can still cast a cantrip as your action",
      "Trying to use on undead or constructs",
      "Not realizing the 60-foot range makes it superior to Cure Wounds in combat"
    ],
    dmTips: [
      "The go-to combat healing spell due to bonus action casting and range",
      "Best used to bring downed allies back into the fight (yo-yo healing)",
      "The healing is less than Cure Wounds but the action economy makes it worth it",
      "Often more valuable to deal damage with your action and heal with bonus action"
    ],
    category: "support-healing",
    searchVolume: 150
  },
  {
    slug: "heroism-5e",
    name: "Heroism",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Paladin"],
    description: "A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the temporary HP refreshes at the start of each of the target's turns",
      "Not tracking that temporary HP doesn't stack - new temp HP replaces old",
      "Forgetting the immunity to frightened condition, which can be very powerful",
      "Thinking the temp HP is permanent - it disappears when the spell ends"
    ],
    dmTips: [
      "Great for frontline fighters who will take consistent damage",
      "The frightened immunity is clutch against dragons and other fear-inducing enemies",
      "Total temp HP over the full minute can be significant (10+ turns × modifier)",
      "Consider having paladin NPCs cast this before charging into battle"
    ],
    category: "support-healing",
    searchVolume: 7410
  },
  {
    slug: "mending-5e",
    name: "Mending",
    level: "Cantrip",
    school: "Transmutation",
    castingTime: "1 minute",
    range: "Touch",
    components: "V, S, M (two lodestones)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Wizard"],
    description: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Trying to repair magic items' magical properties - it only fixes physical damage",
      "Attempting to mend breaks larger than 1 foot",
      "Thinking it can restore destroyed objects - both pieces must be present",
      "Forgetting the 1-minute casting time"
    ],
    dmTips: [
      "Great utility cantrip for fixing broken equipment, torn maps, cracked vials, etc.",
      "Can be used creatively for puzzles - repairing broken mechanisms or torn letters",
      "Consider whether multiple castings can repair larger breaks (adjacent 1-foot sections)",
      "Useful for repairing damaged armor or weapons after combat"
    ],
    category: "support-healing",
    searchVolume: 8750
  },
  {
    slug: "revivify-5e",
    name: "Revivify",
    level: "3rd",
    school: "Necromancy",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (diamonds worth 300 gp, which the spell consumes)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the 1-minute time limit after death",
      "Not having the 300 gp diamond material component available",
      "Trying to revive creatures missing vital body parts (head, heart, etc.)",
      "Forgetting the diamond is consumed, not reusable"
    ],
    dmTips: [
      "This spell dramatically reduces lethality once the party reaches 5th level",
      "Consider whether diamonds are readily available for purchase in your setting",
      "The 1-minute timer creates tension when a PC dies - can they reach them in time?",
      "Some campaigns house-rule longer casting times to maintain death's stakes"
    ],
    category: "support-healing",
    searchVolume: 11930
  },
  {
    slug: "sanctuary-5e",
    name: "Sanctuary",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 bonus action",
    range: "30 feet",
    components: "V, S, M (a small silver mirror)",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball. If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: null,
    commonMistakes: [
      "Forgetting that attacking or casting harmful spells ends the spell immediately",
      "Not realizing area effects still work against the warded creature",
      "Thinking the save is made when casting Sanctuary - it's made when enemies try to target the warded creature",
      "Allowing the warded creature to attack or cast offensive cantrips - any hostile action ends it"
    ],
    dmTips: [
      "Excellent for protecting downed allies or fragile NPCs",
      "Can be used on a cleric to allow safe healing without being targeted",
      "Enemies who fail the save waste their action unless they can find another target",
      "Consider having smart enemies use area effects or attack other party members"
    ],
    category: "support-healing",
    searchVolume: 10040
  }
];
