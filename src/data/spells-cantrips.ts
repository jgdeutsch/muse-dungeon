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
    category: "cantrips",
    searchVolume: 5400
  }
];
