export const offensiveSpells: {
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
    slug: "blight-5e",
    name: "Blight",
    level: "4th",
    school: "Necromancy",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
    description: "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs. If you target a plant creature or a magical plant, it makes the saving throw with disadvantage and the spell deals maximum damage to it. If you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies.",
    damage: "8d8 necrotic",
    savingThrow: "Constitution",
    higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
    commonMistakes: [
      "Forgetting it doesn't affect undead or constructs at all",
      "Not recognizing plant creatures get disadvantage and take maximum damage",
      "Thinking it only affects plants - it works on any living creature"
    ],
    dmTips: [
      "This spell can instantly kill nonmagical plants, useful for clearing paths through vegetation",
      "Extremely effective against plant creatures like treants, blights, and shambling mounds"
    ],
    category: "offensive",
    searchVolume: 6410
  },
  {
    slug: "booming-blade-5e",
    name: "Booming Blade",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (5-foot radius)",
    components: "S, M (a melee weapon worth at least 1 sp)",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
    description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
    damage: "Weapon damage + 1d8 thunder (if target moves), scales at 5th (weapon + 1d8, +2d8 on move), 11th (weapon + 2d8, +3d8 on move), 17th (weapon + 3d8, +4d8 on move)",
    savingThrow: null,
    higherLevels: "At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and 17th level (3d8 and 4d8).",
    commonMistakes: [
      "Forgetting this uses your action to cast and make ONE attack - you can't use Extra Attack with it",
      "The secondary damage only triggers if the target willingly moves - forced movement doesn't count",
      "Thinking you can use this with opportunity attacks - it requires the Cast a Spell action"
    ],
    dmTips: [
      "Excellent for controlling enemy movement and punishing melee enemies who try to switch targets",
      "Works great with War Caster feat to cast it as an opportunity attack reaction"
    ],
    category: "offensive",
    searchVolume: 25160
  },
  {
    slug: "disintegrate-5e",
    name: "Disintegrate",
    level: "6th",
    school: "Transmutation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a lodestone and a pinch of dust)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by wall of force. A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a true resurrection or a wish spell.",
    damage: "10d6 + 40 force",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.",
    commonMistakes: [
      "Forgetting that a successful save means NO damage - it's all or nothing unlike most save spells",
      "Not realizing magic items survive disintegration - they fall in the dust pile",
      "Thinking any spell can revive a disintegrated creature - only true resurrection or wish work"
    ],
    dmTips: [
      "This can destroy magical force effects like wall of force and resilient sphere",
      "Average damage of 75 makes this extremely deadly - warn players about enemy casters with this"
    ],
    category: "offensive",
    searchVolume: 8710
  },
  {
    slug: "eldritch-blast-5e",
    name: "Eldritch Blast",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Warlock"],
    description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
    damage: "1d10 force per beam (2 beams at 5th, 3 at 11th, 4 at 17th)",
    savingThrow: null,
    higherLevels: "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
    commonMistakes: [
      "Forgetting each beam requires a separate attack roll - you don't roll once for all beams",
      "Not realizing you can split beams among multiple targets starting at 5th level",
      "Thinking Agonizing Blast adds damage once - it adds CHA modifier to EACH beam that hits"
    ],
    dmTips: [
      "This is the iconic warlock spell and becomes incredibly powerful with invocations",
      "Each beam can trigger concentration checks separately on the same target"
    ],
    category: "offensive",
    searchVolume: 17250
  },
  {
    slug: "fire-bolt-5e",
    name: "Fire Bolt",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Artificer", "Sorcerer", "Wizard"],
    description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
    damage: "1d10 fire (increases by 1d10 at 5th, 11th, and 17th level)",
    savingThrow: null,
    higherLevels: "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
    commonMistakes: [
      "Forgetting it can target objects - great for lighting torches, burning ropes, or igniting oil",
      "Not considering fire resistance/immunity - very common in many monsters",
      "Thinking it automatically ignites worn or carried objects - only unattended flammable objects"
    ],
    dmTips: [
      "One of the highest damage cantrips available with excellent range",
      "The object ignition can be used creatively for environmental effects"
    ],
    category: "offensive",
    searchVolume: 10140,
    aliases: ["firebolt-5e"]
  },
  {
    slug: "fireball-5e",
    name: "Fireball",
    level: "3rd",
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (a tiny ball of bat guano and sulfur)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.",
    damage: "8d6 fire",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
    commonMistakes: [
      "Forgetting it's a 20-foot radius (40-foot diameter) sphere - very easy to hit allies",
      "Not accounting for the streak traveling to the target point - it can be blocked by full cover",
      "Thinking you can control the shape - it's always a full sphere, even if part is in a wall"
    ],
    dmTips: [
      "The gold standard damage spell - intentionally overpowered for its level",
      "The fire spreads around corners, so creatures can't hide from it with partial cover"
    ],
    category: "offensive",
    searchVolume: 17150
  },
  {
    slug: "green-flame-blade-5e",
    name: "Green-Flame Blade",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (5-foot radius)",
    components: "S, M (a melee weapon worth at least 1 sp)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
    description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
    damage: "Weapon damage + spellcasting modifier fire (to second target), scales at 5th (weapon + 1d8 fire, second target takes 1d8 + mod), 11th (weapon + 2d8, second target 2d8 + mod), 17th (weapon + 3d8, second target 3d8 + mod)",
    savingThrow: null,
    higherLevels: "At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
    commonMistakes: [
      "Forgetting this uses your action for ONE attack - you can't use Extra Attack with it",
      "Thinking the secondary target gets a saving throw - the fire damage is automatic if primary attack hits",
      "Not realizing the second target must be within 5 feet of the first target, not you"
    ],
    dmTips: [
      "Better than booming blade when facing multiple clustered enemies",
      "The secondary target doesn't need to be an enemy - could accidentally hit allies"
    ],
    category: "offensive",
    searchVolume: 60
  },
  {
    slug: "guiding-bolt-5e",
    name: "Guiding Bolt",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.",
    damage: "4d6 radiant",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the advantage applies to ANY creature's next attack, not just the caster's",
      "Not coordinating with allies to take advantage of the free advantage on the target",
      "Thinking the light lasts longer than one round - advantage only until end of your next turn"
    ],
    dmTips: [
      "Highest damage 1st-level spell in the game with a powerful secondary effect",
      "The advantage can be saved for a powerful ally attack or used immediately"
    ],
    category: "offensive",
    searchVolume: 9160
  },
  {
    slug: "ice-knife-5e",
    name: "Ice Knife",
    level: "1st",
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    components: "S, M (a drop of water or piece of ice)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Druid", "Sorcerer", "Wizard"],
    description: "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage.",
    damage: "1d10 piercing (on hit) + 2d6 cold (to all within 5 feet)",
    savingThrow: "Dexterity (for explosion damage)",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the explosion happens even on a miss - only the piercing damage requires a hit",
      "Not realizing the initial target must also save against the explosion damage",
      "Thinking allies within 5 feet are safe - everyone in the area must make the save"
    ],
    dmTips: [
      "Good AoE damage for a 1st-level spell, especially effective against grouped enemies",
      "The explosion can hit allies, so positioning matters"
    ],
    category: "offensive",
    searchVolume: 6930
  },
  {
    slug: "lightning-bolt-5e",
    name: "Lightning Bolt",
    level: "3rd",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (100-foot line)",
    components: "V, S, M (a bit of fur and a rod of amber, crystal, or glass)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren't being worn or carried.",
    damage: "8d6 lightning",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
    commonMistakes: [
      "Forgetting it's a line originating from you, not a point - you choose the direction",
      "Not accounting for the 5-foot width when counting affected creatures",
      "Thinking you can bend the line - it must be perfectly straight"
    ],
    dmTips: [
      "Generally less useful than fireball due to the line shape, but better in corridors",
      "Can hit more creatures than fireball if they're lined up properly"
    ],
    category: "offensive",
    searchVolume: 8990
  },
  {
    slug: "magic-missile-5e",
    name: "Magic Missile",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
    damage: "3 darts, each dealing 1d4 + 1 force (3d4 + 3 total if all hit same target)",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
    commonMistakes: [
      "Rolling one d4 and multiplying - you should roll separately for each dart",
      "Forgetting it automatically hits - no attack roll or saving throw",
      "Thinking shield of faith or mage armor stops it - only the shield spell works"
    ],
    dmTips: [
      "Excellent for finishing off low-HP enemies or breaking concentration",
      "Each dart triggers a separate concentration check if all hit the same concentrating creature"
    ],
    category: "offensive",
    searchVolume: 12830
  },
  {
    slug: "mind-sliver-5e",
    name: "Mind Sliver",
    level: "Cantrip",
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.",
    damage: "1d6 psychic (increases by 1d6 at 5th, 11th, and 17th level)",
    savingThrow: "Intelligence",
    higherLevels: "This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    commonMistakes: [
      "Forgetting the penalty only applies to the next saving throw, not all saves",
      "Not coordinating with allies to follow up with a powerful save-or-suck spell",
      "Thinking the penalty applies even if the target makes the initial save - it doesn't"
    ],
    dmTips: [
      "Excellent setup for powerful save-based spells like hold person or banishment",
      "The 1d4 penalty averages to -2.5, which is very significant for bounded accuracy"
    ],
    category: "offensive",
    searchVolume: 6210
  },
  {
    slug: "moonbeam-5e",
    name: "Moonbeam",
    level: "2nd",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Druid"],
    description: "A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder. When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one. A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.",
    damage: "2d10 radiant",
    savingThrow: "Constitution",
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting you can use a bonus action to move the beam 60 feet each turn",
      "Not realizing 'enters for the first time on a turn' means moving it onto creatures triggers damage",
      "Thinking creatures take damage when you first cast it - they must start their turn there or enter it"
    ],
    dmTips: [
      "Extremely effective against shapechangers like werewolves and vampires in mist form",
      "Moving the beam onto enemies on your turn is key to maximizing damage"
    ],
    category: "offensive",
    searchVolume: 8430
  },
  {
    slug: "power-word-kill-5e",
    name: "Power Word Kill",
    level: "9th",
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.",
    damage: "Instant death if target has 100 HP or fewer",
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Not having a backup plan if the target has more than 100 HP - spell is completely wasted",
      "Forgetting there's no save or attack roll - if they have ≤100 HP, they just die",
      "Using it on creatures immune to being charmed - the spell works regardless of immunities"
    ],
    dmTips: [
      "This spell doesn't care about legendary resistances or immunities - it's not a charm or death effect",
      "Meta knowledge issue - players might know enemy HP, keep this in mind"
    ],
    category: "offensive",
    searchVolume: 9120,
    aliases: ["power-word-kill"]
  },
  {
    slug: "sacred-flame-5e",
    name: "Sacred Flame",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
    damage: "1d8 radiant (increases by 1d8 at 5th, 11th, and 17th level)",
    savingThrow: "Dexterity",
    higherLevels: "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    commonMistakes: [
      "Forgetting it ignores cover - one of the spell's key advantages",
      "Thinking it automatically hits - it still requires a saving throw",
      "Not using it against heavily armored enemies - save-based is often better than attack roll"
    ],
    dmTips: [
      "The cover-ignoring property makes this excellent against enemies behind obstacles",
      "Good choice against high-AC, low-DEX enemies like heavily armored foes"
    ],
    category: "offensive",
    searchVolume: 14500
  },
  {
    slug: "shatter-5e",
    name: "Shatter",
    level: "2nd",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a chip of mica)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area.",
    damage: "3d8 thunder",
    savingThrow: "Constitution",
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting creatures made of stone, crystal, or metal have disadvantage",
      "Not realizing it damages objects - can be used to break doors, windows, or containers",
      "Overlooking that it's a 10-foot radius (20-foot diameter) sphere - smaller than expected"
    ],
    dmTips: [
      "Very effective against constructs and earth elementals due to disadvantage",
      "Can be used creatively to destroy objects, break through barriers, or trigger alarms"
    ],
    category: "offensive",
    searchVolume: 18660
  },
  {
    slug: "shocking-grasp-5e",
    name: "Shocking Grasp",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
    damage: "1d8 lightning (increases by 1d8 at 5th, 11th, and 17th level)",
    savingThrow: null,
    higherLevels: "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
    commonMistakes: [
      "Forgetting the advantage applies to creatures in metal armor, not just touching metal",
      "Not using the reaction denial strategically - great for escaping without opportunity attacks",
      "Thinking it has reach - it requires you to touch the target (melee range)"
    ],
    dmTips: [
      "Perfect escape tool for squishy spellcasters surrounded by enemies",
      "The reaction denial also prevents counterspell, shield, and other reaction spells"
    ],
    category: "offensive",
    searchVolume: 7460
  },
  {
    slug: "spirit-guardians-5e",
    name: "Spirit Guardians",
    level: "3rd",
    school: "Conjuration",
    castingTime: "1 action",
    range: "Self (15-foot radius)",
    components: "V, S, M (a holy symbol)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Cleric"],
    description: "You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.",
    damage: "3d8 radiant or necrotic",
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
    commonMistakes: [
      "Forgetting it moves with you - enemies might take damage multiple times if you move strategically",
      "Not designating allies as unaffected - they take damage and have speed halved too",
      "Thinking it only damages on their turn - it also triggers when they enter for first time on a turn"
    ],
    dmTips: [
      "One of the best sustained damage spells in the game for clerics",
      "The speed reduction makes it excellent for controlling movement and preventing escapes"
    ],
    category: "offensive",
    searchVolume: 8230
  },
  {
    slug: "spiritual-weapon-5e",
    name: "Spiritual Weapon",
    level: "2nd",
    school: "Evocation",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier. As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose.",
    damage: "1d8 + spellcasting modifier force",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above 2nd.",
    commonMistakes: [
      "Forgetting it doesn't require concentration - you can use it with other concentration spells",
      "Not realizing you can attack when you first cast it as part of the casting",
      "Thinking it takes your action to attack with it - after initial cast, it only uses bonus action"
    ],
    dmTips: [
      "Excellent bonus action economy spell that adds consistent damage throughout combat",
      "The weapon's appearance can be any form - encourage creative descriptions"
    ],
    category: "offensive",
    searchVolume: 9230
  },
  {
    slug: "thunderclap-5e",
    name: "Thunderclap",
    level: "Cantrip",
    school: "Evocation",
    castingTime: "1 action",
    range: "5 feet",
    components: "S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
    description: "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within 5 feet of you other than you must succeed on a Constitution saving throw or take 1d6 thunder damage. The spell's area of effect includes all creatures within 5 feet, in all directions.",
    damage: "1d6 thunder (increases by 1d6 at 5th, 11th, and 17th level)",
    savingThrow: "Constitution",
    higherLevels: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    commonMistakes: [
      "Forgetting the sound can be heard 100 feet away - very loud and not stealthy",
      "Not realizing it hits all creatures within 5 feet including allies",
      "Thinking it has more range - it only affects creatures within 5 feet of you"
    ],
    dmTips: [
      "Good option when surrounded by multiple enemies in melee",
      "The loud noise can alert nearby enemies or be used as a signal"
    ],
    category: "offensive",
    searchVolume: 14760
  },
  {
    slug: "thunderwave-5e",
    name: "Thunderwave",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (15-foot cube)",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Druid", "Sorcerer", "Wizard"],
    description: "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet.",
    damage: "2d8 thunder",
    savingThrow: "Constitution",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting it's a 15-foot cube, not a radius - affects a square area in one direction",
      "Not realizing the push can move enemies into hazards or off ledges for extra damage",
      "Overlooking that it's extremely loud (300 feet) and will alert everyone nearby"
    ],
    dmTips: [
      "Excellent for creating space when surrounded or pushing enemies into environmental hazards",
      "The cube originates from you, so you choose which direction it extends"
    ],
    category: "offensive",
    searchVolume: 50
  },
  {
    slug: "wall-of-fire-5e",
    name: "Wall of Fire",
    level: "4th",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a small piece of phosphorus)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Druid", "Sorcerer", "Wizard"],
    description: "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration. When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save. One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.",
    damage: "5d8 fire",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
    commonMistakes: [
      "Forgetting only one side deals damage - choose the side strategically when casting",
      "Not realizing creatures take damage when entering or ending turn near the dangerous side",
      "Thinking allies can pass through safely - the wall damages everyone who enters it"
    ],
    dmTips: [
      "Excellent for battlefield control, creating zones enemies don't want to enter",
      "The ringed wall option can trap large creatures or protect the party"
    ],
    category: "offensive",
    searchVolume: 4690
  }
];
