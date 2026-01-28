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
      "Remember Arcane Trickster rogues get an enhanced version with invisible hand and bonus action control"
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
      "Trying to use the tremors to knock creatures prone - effects must be harmless",
      "Slamming doors on creatures to deal damage or restrict movement",
      "Forgetting it requires concentration-like management of three simultaneous effects"
    ],
    dmTips: [
      "This is excellent for intimidation checks and dramatic religious moments",
      "The booming voice can be heard clearly even in loud environments"
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
      "Target must be able to hear you - doesn't work on deafened creatures",
      "The disadvantage only applies to the next attack roll, not all attacks that turn",
      "Disadvantage applies even if the save succeeds - no, it must fail the save for any effect"
    ],
    dmTips: [
      "Encourage players to actually roleplay creative insults for added fun",
      "The disadvantage makes this one of the best defensive cantrips in the game"
    ],
    category: "cantrips",
    searchVolume: 8040,
    aliases: ["vicious-mockery"]
  }
];
