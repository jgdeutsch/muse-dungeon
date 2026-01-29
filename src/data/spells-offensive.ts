import { FAQItem } from "../components/FAQ";

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
  faq?: FAQItem[];
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
    faq: [
      {
        question: "Does Blight work on all creatures or just plants?",
        answer: "Blight works on any living creature except undead and constructs. It deals 8d8 necrotic damage to humanoids, beasts, and other living targets. Plant creatures just take extra punishment (disadvantage on save, maximum damage)."
      },
      {
        question: "What happens when Blight targets a regular plant?",
        answer: "Nonmagical plants that aren't creatures (trees, bushes, crops) don't get a saving throw - they simply wither and die instantly. This can clear vegetation, destroy enemy food supplies, or create dramatic effects."
      },
      {
        question: "Is Blight good against Treants?",
        answer: "Excellent! Treants are plant creatures, so they make the Constitution save with disadvantage AND take maximum damage (64 necrotic) on a failed save. It's one of the best spells for fighting plant monsters."
      },
      {
        question: "Can Blight affect plant creatures like Blights or Shambling Mounds?",
        answer: "Yes. Any creature with the Plant type makes their save with disadvantage and takes maximum damage. This includes Blights, Shambling Mounds, Treants, Myconids, Wood Woads, and Vegepygmies."
      },
      {
        question: "Does Blight scale well at higher levels?",
        answer: "It gains 1d8 per spell level above 4th. At 5th level it's 9d8, at 9th level it's 13d8. The scaling is decent but not exceptional. Against plant creatures, the maximum damage effect makes it devastating at any level."
      }
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
    faq: [
      {
        question: "Can you use Booming Blade with Extra Attack?",
        answer: "No. Booming Blade requires the Cast a Spell action, which includes making one melee attack. It replaces the Attack action entirely. Fighters with Extra Attack only get the single Booming Blade attack."
      },
      {
        question: "Does Booming Blade work with opportunity attacks?",
        answer: "Not normally - opportunity attacks use your reaction, not an action. However, with the War Caster feat, you can cast a spell (including Booming Blade) instead of making a normal opportunity attack."
      },
      {
        question: "Does forced movement trigger Booming Blade's extra damage?",
        answer: "No. Only willing movement triggers the thunder damage. Spells like Thunderwave, Dissonant Whispers (controversial), or Repelling Blast that force movement don't trigger it. The target must choose to move."
      },
      {
        question: "Can Rogues use Sneak Attack with Booming Blade?",
        answer: "Yes! Booming Blade involves making a melee weapon attack, which can trigger Sneak Attack if you meet the requirements (advantage or ally adjacent). This makes it excellent for Arcane Tricksters."
      },
      {
        question: "Does Booming Blade work with Two-Weapon Fighting?",
        answer: "Partially. You can cast Booming Blade with your main hand, but you can't make the bonus action off-hand attack because Booming Blade uses your action (not Attack action). The off-hand attack requires the Attack action."
      }
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
    faq: [
      {
        question: "What happens if Disintegrate reduces a creature to 0 HP?",
        answer: "The creature is completely disintegrated into fine gray dust along with everything nonmagical they're wearing and carrying. Only True Resurrection or Wish can bring them back - Revivify, Raise Dead, and Resurrection won't work."
      },
      {
        question: "What happens if the target makes their Dex save?",
        answer: "Nothing. Unlike most spells that deal half damage on a successful save, Disintegrate is all-or-nothing. A successful save means zero damage. This makes it risky but devastating when it lands."
      },
      {
        question: "Can Disintegrate destroy a Wall of Force?",
        answer: "Yes! Disintegrate automatically destroys any creation of magical force (like Wall of Force, Forcecage, or Resilient Sphere) without a save or damage roll. It's one of the few counters to these powerful spells."
      },
      {
        question: "Do magic items survive Disintegrate?",
        answer: "Yes. Magic items are not destroyed and fall in the pile of dust. This includes magic weapons, armor, rings, and other magical equipment the creature was carrying or wearing."
      },
      {
        question: "Can Disintegrate be used on objects or terrain?",
        answer: "Yes. It can target objects and automatically disintegrates a 10-foot cube of nonmagical object. It can create holes in walls, destroy doors, or eliminate obstacles. Very versatile beyond just combat."
      }
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
    faq: [
      {
        question: "Can non-Warlocks learn Eldritch Blast?",
        answer: "Only through multiclassing into Warlock or certain race/feat combinations. The Spell Sniper feat can't grant it (Warlock has no attack roll cantrips eligible). Magic Initiate (Warlock) works but won't scale with character level."
      },
      {
        question: "How does Agonizing Blast work with multiple beams?",
        answer: "Agonizing Blast adds your Charisma modifier to EACH beam that hits. At 17th level with 4 beams, that's potentially +20 damage (with +5 CHA) on top of 4d10. This is why Eldritch Blast is so powerful."
      },
      {
        question: "Can you split Eldritch Blast beams between targets?",
        answer: "Yes! Starting at 5th level when you get 2 beams, you can direct each beam at the same target or different targets. Each beam requires its own attack roll. Great for finishing off multiple weak enemies."
      },
      {
        question: "Does Eldritch Blast scale with Warlock level or character level?",
        answer: "Character level. A Fighter 17/Warlock 1 gets 4 beams. However, invocations like Agonizing Blast require Warlock levels to obtain. The beams scale, but the best enhancements require Warlock investment."
      },
      {
        question: "What are the best Eldritch Invocations for Eldritch Blast?",
        answer: "Agonizing Blast (+CHA to damage) is essential. Repelling Blast (push 10ft) adds control. Lance of Lethargy (reduce speed) enhances control. Eldritch Spear (300ft range) is situational but fun."
      }
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
    faq: [
      {
        question: "Is Fire Bolt the best damage cantrip?",
        answer: "It's among the best. 1d10 damage with 120ft range is excellent. Toll the Dead can deal 1d12 to wounded targets, and Eldritch Blast with invocations exceeds it. But Fire Bolt is a solid, reliable choice available to most arcane casters."
      },
      {
        question: "Can Fire Bolt light torches and start fires?",
        answer: "Yes! It can target objects, and flammable objects that aren't worn or carried ignite when hit. Light torches, burn ropes, ignite oil, set fire to hay bales - lots of utility beyond just damage."
      },
      {
        question: "Does Fire Bolt work well in most campaigns?",
        answer: "Fire damage is commonly resisted (devils, red dragons, fire elementals) but Fire Bolt's d10 damage and range make it reliable. Have a backup damage type for fire-immune enemies, but it's a great primary cantrip."
      },
      {
        question: "Can Fire Bolt be Twinned with Metamagic?",
        answer: "Yes! Fire Bolt targets a single creature and doesn't have a range of self, so it qualifies for Twinned Spell. Hit two enemies for 1 sorcery point - great value for a cantrip."
      },
      {
        question: "How does Fire Bolt compare to other damage cantrips?",
        answer: "Fire Bolt: 1d10 fire, 120ft range, can ignite objects. Toll the Dead: 1d8/1d12 necrotic, 60ft, Wis save. Ray of Frost: 1d8 cold, 60ft, slows target. Sacred Flame: 1d8 radiant, 60ft, ignores cover. Each has situational advantages."
      }
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
    faq: [
      {
        question: "How big is Fireball's area of effect?",
        answer: "20-foot radius sphere (40-foot diameter). That's roughly 8 squares in each direction from center on a grid. It's easy to hit allies accidentally. The fire also spreads around corners, so ducking behind a pillar won't help."
      },
      {
        question: "Why is Fireball considered overpowered?",
        answer: "8d6 (average 28) damage is intentionally high for a 3rd-level spell. The designers made it powerful because it's iconic D&D. Compare to Lightning Bolt (same damage but harder to position) or other 3rd-level spells."
      },
      {
        question: "Can I Sculpt Spells to protect allies in Fireball?",
        answer: "Evocation Wizards can! Sculpt Spells lets you choose creatures equal to 1 + spell level (4 for Fireball) to automatically succeed on their saves and take no damage. Essential for Fireball-happy Evokers."
      },
      {
        question: "Does Fireball set everything on fire?",
        answer: "It ignites flammable objects that aren't worn or carried. Furniture, papers, hay, wooden structures - all catch fire. Worn clothing and held items are protected. This can cause massive collateral damage."
      },
      {
        question: "Can enemies see Fireball coming?",
        answer: "Yes. A bright streak travels from your finger to the target point before exploding. Enemies with reactions might be able to respond, and it reveals your position. The explosion point must be within 150 feet."
      }
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
    faq: [
      {
        question: "How does Green-Flame Blade compare to Booming Blade?",
        answer: "Green-Flame Blade deals guaranteed damage to a second target (if one exists). Booming Blade's extra damage only triggers if the target moves. GFB is better against groups; BB is better for locking down single targets."
      },
      {
        question: "Does the secondary target of Green-Flame Blade get a save?",
        answer: "No. If you hit the primary target, the secondary target automatically takes fire damage (your spellcasting modifier at low levels, scaling up). There's no attack roll or save for the secondary damage."
      },
      {
        question: "Can I choose not to hit a secondary target?",
        answer: "Yes. The secondary damage is optional ('you can cause green fire to leap'). If allies are clustered with enemies, you can skip the secondary damage. It's not forced."
      },
      {
        question: "Does Green-Flame Blade work with Sneak Attack?",
        answer: "Yes! Like Booming Blade, it involves making a melee weapon attack. If you meet Sneak Attack requirements (advantage or ally adjacent), you can add Sneak Attack damage to the primary target."
      },
      {
        question: "Can I use Green-Flame Blade with a reach weapon?",
        answer: "The Tasha's Cauldron version requires the target be within 5 feet, so no. The original SCAG version had 'range: 5 feet' which was interpreted differently. Use the Tasha's version - 5 feet only."
      }
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
    faq: [
      {
        question: "Is Guiding Bolt the best 1st-level damage spell?",
        answer: "For single-target damage, yes. 4d6 radiant (average 14) is the highest at 1st level, plus granting advantage on the next attack adds significant value. It's a Cleric staple for good reason."
      },
      {
        question: "Who gets advantage from Guiding Bolt?",
        answer: "The next attack roll made against the target by ANY creature - not just the caster. Coordinate with your party's heavy hitter (Paladin smite, Rogue sneak attack) for maximum value."
      },
      {
        question: "How long does Guiding Bolt's advantage last?",
        answer: "Until the end of your next turn. So if you cast it on your turn, the advantage persists through enemy turns and until your next turn ends. Plan accordingly to not waste it."
      },
      {
        question: "Can Guiding Bolt miss and still grant advantage?",
        answer: "No. You must hit with the ranged spell attack for any effect. If you miss, no damage and no advantage. The 'dim light glittering' only appears on a hit."
      },
      {
        question: "Does Guiding Bolt scale well at higher levels?",
        answer: "It adds 1d6 per spell level, which is decent. At 3rd level it deals 6d6 (average 21), competitive with other options. However, the advantage doesn't improve, so it's often best at lower levels."
      }
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
    faq: [
      {
        question: "Does Ice Knife's explosion happen if I miss?",
        answer: "Yes! The explosion happens regardless of whether the initial attack hits or misses. Only the 1d10 piercing damage requires a hit. The 2d6 cold AoE always triggers at the target's location."
      },
      {
        question: "Does the primary target have to save against the explosion?",
        answer: "Yes. Even if you hit them with the piercing damage, they still must make the Dex save against the explosion or take an additional 2d6 cold. They can take both damage types from one casting."
      },
      {
        question: "What's Ice Knife's total potential damage?",
        answer: "If you hit and target fails the save: 1d10 piercing + 2d6 cold = average 14.5 damage to primary target. Plus potential 2d6 cold to nearby creatures. Great value for a 1st-level slot."
      },
      {
        question: "Can Ice Knife hit allies near the target?",
        answer: "Yes. Everyone within 5 feet of the target (including allies) must make the Dex save or take cold damage. Be careful in close quarters combat where your allies might be adjacent to enemies."
      },
      {
        question: "Does Ice Knife scale well at higher levels?",
        answer: "The cold damage increases by 1d6 per level (but not the piercing). At 3rd level it's 1d10+4d6 (average 20.5). Decent scaling, but other spells often become better choices at higher levels."
      }
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
    faq: [
      {
        question: "Is Lightning Bolt better than Fireball?",
        answer: "Usually no. Same damage (8d6) but Fireball's 20ft radius sphere is easier to position than a 100ft line. However, Lightning Bolt excels in corridors where enemies are lined up - it can potentially hit more targets."
      },
      {
        question: "Does Lightning Bolt originate from me?",
        answer: "Yes. It's a 100-foot line starting from you in a direction you choose. Unlike Fireball (point within 150ft), you must position yourself carefully. The line is 5 feet wide."
      },
      {
        question: "Can Lightning Bolt hit allies between me and enemies?",
        answer: "Yes! Everyone in the 100-foot line must save, including allies. Plan your positioning carefully or have allies move out of the way. This is a significant tactical limitation."
      },
      {
        question: "Does Lightning Bolt go through walls or obstacles?",
        answer: "No. The bolt stops at full cover (solid walls). However, it can pass through openings. It also ignites flammable objects in its path that aren't worn or carried."
      },
      {
        question: "Can I angle Lightning Bolt to hit more enemies?",
        answer: "You choose the direction, and it extends 100 feet in a straight line. You cannot bend or curve it. Good positioning and knowing enemy formations is key to maximizing targets hit."
      }
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
    faq: [
      {
        question: "Does Magic Missile automatically hit?",
        answer: "Yes. No attack roll or saving throw. Each dart automatically hits its target. The only things that can stop it are Shield spell (complete immunity), Brooch of Shielding, or total cover (target must be visible)."
      },
      {
        question: "How does Magic Missile interact with concentration?",
        answer: "Each dart causes a separate concentration check. Three darts = three DC 10 checks (or higher if dart does 22+ damage, which is impossible with Magic Missile). Great for breaking enemy concentration."
      },
      {
        question: "Should I roll damage once or per dart?",
        answer: "RAW is ambiguous. Most tables roll 1d4+1 per dart for varied results. Some (including certain Sage Advice) suggest rolling once and applying to all darts. Ask your DM which method they use."
      },
      {
        question: "Can Magic Missile target objects or just creatures?",
        answer: "RAW, it only targets creatures. You cannot use it to destroy objects, break locks, or trigger environmental hazards. Some DMs allow targeting objects as a house rule."
      },
      {
        question: "How does Shield spell block Magic Missile?",
        answer: "The Shield spell grants complete immunity to Magic Missile damage. All darts are blocked. The caster doesn't need to target the protected creature differently - they just can't damage them this casting."
      }
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
    faq: [
      {
        question: "Does Mind Sliver's save penalty apply if the target makes the initial save?",
        answer: "No. The -1d4 penalty to the next saving throw only applies if the target fails the Intelligence saving throw against Mind Sliver. If they save successfully, they take no damage and receive no penalty."
      },
      {
        question: "How long does the Mind Sliver penalty last?",
        answer: "The -1d4 penalty lasts until the end of your next turn and applies only to the target's next saving throw during that time. After one save (whether they pass or fail), the penalty is consumed."
      },
      {
        question: "Can Mind Sliver stack with other sources of save penalties?",
        answer: "Yes. Mind Sliver's -1d4 stacks with other penalties like Bane (-1d4), Synaptic Static (-1d6), or features that impose disadvantage. These penalties make powerful follow-up spells much more likely to land."
      },
      {
        question: "Why is Mind Sliver considered one of the best cantrips?",
        answer: "Mind Sliver offers excellent team synergy by setting up save-or-suck spells like Hold Person, Banishment, or Polymorph. The Intelligence save targets a generally weak save, and the penalty (averaging -2.5) significantly affects bounded accuracy math."
      },
      {
        question: "What's the best tactical use of Mind Sliver?",
        answer: "Coordinate with teammates. Cast Mind Sliver before an ally uses a powerful save-based spell on the same target. Works especially well with initiative manipulation or when acting right before the party's control caster."
      }
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
    faq: [
      {
        question: "When does Moonbeam deal damage?",
        answer: "Moonbeam deals damage when a creature enters the area for the first time on a turn OR starts its turn there. Importantly, placing the beam on a creature when you first cast it doesn't cause immediate damage - they must enter it or start their turn in it."
      },
      {
        question: "Can you move Moonbeam onto enemies to trigger damage?",
        answer: "Yes! Using your bonus action to move the beam onto an enemy counts as them 'entering for the first time on a turn.' This is key to maximizing Moonbeam's damage output - move it onto enemies on your turn."
      },
      {
        question: "How does Moonbeam affect shapechangers?",
        answer: "Shapechangers make their Constitution save with disadvantage. If they fail, they take full damage AND instantly revert to their original form, unable to change shape again while in the light. Devastating against werewolves and vampires in mist form."
      },
      {
        question: "Does Moonbeam follow the caster or stay in place?",
        answer: "Moonbeam stays where you place it - it doesn't follow you. However, you can use a bonus action on your turn to move the beam up to 60 feet, allowing you to reposition it tactically throughout the fight."
      },
      {
        question: "Can a creature take Moonbeam damage multiple times per round?",
        answer: "A creature can take damage when they start their turn in it (once) and when they enter it for the first time on a turn. If moved out and back in on different turns, they'd take damage each time they enter. Maximum twice per round with clever play."
      }
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
    faq: [
      {
        question: "Does Power Word Kill allow a saving throw?",
        answer: "No. There is no saving throw, attack roll, or resistance. If the target has 100 hit points or fewer, they simply die. This is one of only a few spells with absolutely no way to resist the effect once the HP threshold is met."
      },
      {
        question: "What happens if the target has more than 100 HP?",
        answer: "The spell has no effect whatsoever. Your 9th-level spell slot is consumed with zero result. This is why knowing (or accurately estimating) the target's current HP is critical before casting."
      },
      {
        question: "Can Legendary Resistance stop Power Word Kill?",
        answer: "No. Legendary Resistance lets creatures choose to succeed on a saving throw. Since Power Word Kill doesn't involve a saving throw, Legendary Resistance provides no protection against it."
      },
      {
        question: "Does immunity to the charmed condition protect against Power Word Kill?",
        answer: "No. Despite being an Enchantment spell, Power Word Kill is not a charm effect. Immunity to being charmed, frightened, or even death effects (like undead immunity to certain spells) doesn't protect against this spell."
      },
      {
        question: "How can you tell if an enemy has 100 HP or less?",
        answer: "You can't know for certain without metagaming. Options include: the 'Bloodied' condition (half HP), battle damage assessment, asking the DM for hints, or using spells/features that reveal creature status. Some DMs allow Intelligence checks."
      }
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
    faq: [
      {
        question: "Does Sacred Flame require line of sight?",
        answer: "Yes. You must be able to see the creature within range. However, the unique property of Sacred Flame is that the target gains no benefit from cover for the saving throw - the flame descends from above, bypassing physical barriers."
      },
      {
        question: "Why does Sacred Flame ignore cover?",
        answer: "The flame descends from above rather than traveling in a straight line. RAW, this means creatures behind walls, in trenches, or using shield cover still have to make the full Dexterity save without the typical cover bonuses (+2 or +5)."
      },
      {
        question: "Is Sacred Flame an attack roll or saving throw?",
        answer: "Sacred Flame requires a Dexterity saving throw, not an attack roll. This is significant: it works better against high-AC, low-DEX targets (like heavily armored knights) and worse against agile enemies."
      },
      {
        question: "Can Sacred Flame damage objects?",
        answer: "RAW, Sacred Flame targets 'a creature,' so it cannot target objects directly. However, some DMs allow it for flavor (lighting torches, igniting flammables). Ask your DM for their ruling."
      },
      {
        question: "How does Sacred Flame compare to Toll the Dead?",
        answer: "Toll the Dead deals more damage (d8/d12 vs d8) and targets Wisdom (often similar to Dex). Sacred Flame's advantage is ignoring cover, which is situationally powerful. Toll the Dead is generally preferred for raw damage."
      }
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
    faq: [
      {
        question: "Which creatures have disadvantage on Shatter's saving throw?",
        answer: "Creatures made of inorganic material such as stone, crystal, or metal have disadvantage. This includes most constructs (golems, animated armor), earth elementals, and gargoyles. It doesn't apply to creatures merely wearing metal armor."
      },
      {
        question: "Can Shatter destroy objects?",
        answer: "Yes! Nonmagical objects that aren't being worn or carried take damage if in the spell's area. This makes Shatter excellent for breaking doors, windows, locks, or containers. Objects don't get saving throws."
      },
      {
        question: "How big is Shatter's area of effect?",
        answer: "Shatter affects a 10-foot-radius sphere (20-foot diameter). This is smaller than many expect - roughly a 4-square diameter circle on a standard battle map. Position carefully to hit multiple targets."
      },
      {
        question: "Does Shatter damage allies?",
        answer: "Yes. Shatter affects 'each creature' in the area with no exception for allies. Position carefully and communicate with your party to avoid friendly fire."
      },
      {
        question: "Is Shatter effective against specific enemy types?",
        answer: "Very effective against constructs and earth-based creatures (disadvantage on saves). Also great for encounters with crystal creatures, animated objects, or in environments with destructible terrain. Thunder damage is rarely resisted."
      }
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
    faq: [
      {
        question: "What triggers advantage on Shocking Grasp attacks?",
        answer: "You have advantage if the target is wearing armor made of metal. This means plate, chain mail, splint, ring mail, chain shirt, breastplate, half plate, or scale mail (if metal). Leather, hide, padded, or natural armor don't qualify."
      },
      {
        question: "How does Shocking Grasp help with escape?",
        answer: "On a hit, the target can't take reactions until the start of its next turn. This means they cannot make opportunity attacks, so you can safely move away without provoking. Perfect for squishy casters who get cornered."
      },
      {
        question: "Does Shocking Grasp prevent all reactions?",
        answer: "Yes. The target can't take ANY reactions - this includes opportunity attacks, Shield, Counterspell, Absorb Elements, Hellish Rebuke, and any other reaction abilities. Very powerful for tactical play."
      },
      {
        question: "Can Shocking Grasp be used with reach weapons or abilities?",
        answer: "No. Shocking Grasp has a range of Touch, requiring melee range. However, if you have a feature that extends your melee range (like Reach spell metamagic or certain class features), it would apply."
      },
      {
        question: "How does Shocking Grasp compare to other melee cantrips?",
        answer: "Lower damage than Booming Blade or Green-Flame Blade (which add weapon damage), but Shocking Grasp offers advantage against armored foes and reaction denial. Best as an escape tool rather than primary damage."
      }
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
    faq: [
      {
        question: "Does Spirit Guardians move with the caster?",
        answer: "Yes! The spirits flit around you to a distance of 15 feet, moving wherever you go. This means moving toward enemies can force them to enter your aura and take damage, while retreating keeps the protection around you."
      },
      {
        question: "When does Spirit Guardians deal damage?",
        answer: "Creatures take damage when they enter the area for the first time on a turn OR start their turn there. Moving into enemy groups on your turn forces them to 'enter' your aura, triggering damage immediately."
      },
      {
        question: "Can I exclude allies from Spirit Guardians?",
        answer: "Yes, but only when you cast the spell. You designate any number of creatures you can see to be unaffected. You cannot change this designation later, so plan ahead for summoned creatures or allies who might arrive."
      },
      {
        question: "Is Spirit Guardians radiant or necrotic damage?",
        answer: "It depends on your alignment. Good or neutral casters deal radiant damage (spirits appear angelic/fey). Evil casters deal necrotic damage (spirits appear fiendish). The damage type is determined by your alignment, not choice."
      },
      {
        question: "Why is Spirit Guardians considered so powerful?",
        answer: "It combines excellent sustained AoE damage (3d8/round), crowd control (half speed), and scales well (+1d8 per level). The damage triggers multiple times per round against groups, and the speed reduction prevents enemies from escaping."
      }
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
    faq: [
      {
        question: "Does Spiritual Weapon require concentration?",
        answer: "No! This is one of Spiritual Weapon's biggest strengths. You can maintain Spirit Guardians, Bless, or another concentration spell while using Spiritual Weapon for additional damage each turn."
      },
      {
        question: "Can I attack when I first cast Spiritual Weapon?",
        answer: "Yes. When you cast the spell, you can immediately make a melee spell attack against a creature within 5 feet of where the weapon appears. This attack is part of the casting action, not a separate bonus action."
      },
      {
        question: "What action does Spiritual Weapon use after casting?",
        answer: "After the initial cast (which uses your action), moving the weapon and attacking uses your bonus action. This leaves your action free for casting other spells, using items, or taking other actions."
      },
      {
        question: "Can Spiritual Weapon be attacked or destroyed?",
        answer: "No. The weapon is spectral/magical and can't be targeted by attacks. It doesn't occupy space, doesn't provide cover, and can't be dispelled by anything other than Dispel Magic. It exists purely to attack."
      },
      {
        question: "What form can Spiritual Weapon take?",
        answer: "Any form you choose - it doesn't have to be a traditional weapon. Many clerics flavor it as their deity's symbol, a spectral animal, or something thematic. The form is purely aesthetic and doesn't affect mechanics."
      }
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
    faq: [
      {
        question: "Does Thunderclap hit allies?",
        answer: "Yes. Thunderclap affects 'each creature other than you' within 5 feet, including allies. There's no way to exclude friendly creatures, so be careful when party members are in melee range."
      },
      {
        question: "How loud is Thunderclap?",
        answer: "The sound can be heard up to 100 feet away. This makes it extremely unsuitable for stealth situations - it will alert guards, monsters in nearby rooms, and anyone in the general vicinity."
      },
      {
        question: "What's the actual range of Thunderclap?",
        answer: "5 feet in all directions from you - a 10-foot diameter circle with you at the center. This is melee range, meaning you need to be surrounded or in close combat for Thunderclap to be worthwhile."
      },
      {
        question: "Is Thunderclap a good cantrip choice?",
        answer: "Situationally. It's useful when surrounded by multiple enemies, but the small area, Constitution save (often high), loud noise, and hitting allies make it niche. Better options exist for most situations."
      },
      {
        question: "How does Thunderclap compare to Sword Burst?",
        answer: "Both are similar melee AoE cantrips. Sword Burst deals force damage (rarely resisted) with a Dex save, while Thunderclap deals thunder damage with a Con save. Thunderclap has the 100-foot audible warning as a drawback."
      }
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
    faq: [
      {
        question: "How does Thunderwave's cube shape work?",
        answer: "It's a 15-foot cube originating from you - you're at one edge, and the cube extends outward in a direction you choose. This means it's 15 feet wide, 15 feet tall, and 15 feet in the direction you aim. You're NOT in the center."
      },
      {
        question: "Can Thunderwave push enemies into hazards?",
        answer: "Yes! Creatures that fail the save are pushed 10 feet away from you. Position yourself to push enemies off cliffs, into pits, lava, spike traps, or other environmental hazards for extra damage or instant kills."
      },
      {
        question: "How loud is Thunderwave?",
        answer: "The thunderous boom is audible out to 300 feet - louder than Thunderclap. This will alert everything in most dungeon complexes. Do not use if stealth matters."
      },
      {
        question: "Does Thunderwave affect objects?",
        answer: "Yes. Unsecured objects completely within the area are automatically pushed 10 feet away. This includes furniture, debris, and items enemies might be using for cover. Secured objects (bolted down, held) aren't affected."
      },
      {
        question: "Can I target Thunderwave to avoid hitting allies?",
        answer: "Somewhat. Since it's a cube extending from you (not centered on you), you can aim it to minimize friendly fire. Position yourself carefully so allies are behind you or to the side of the cube's direction."
      }
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
    faq: [
      {
        question: "Which side of Wall of Fire deals damage?",
        answer: "Only one side, chosen when you cast the spell. Creatures within 10 feet of the dangerous side or inside the wall take 5d8 fire damage. The other side deals no damage. Strategic placement is crucial."
      },
      {
        question: "When does Wall of Fire deal damage?",
        answer: "Damage occurs: 1) When the wall first appears (Dex save for creatures in its space), 2) When a creature enters the wall or the 10-foot danger zone for the first time on a turn, 3) When a creature ends its turn in those areas."
      },
      {
        question: "Can allies pass through Wall of Fire safely?",
        answer: "No. The wall damages everyone who enters it, regardless of allegiance. Allies must go around, through safe side's 10-foot zone, or take the damage. Plan wall placement to avoid trapping your party."
      },
      {
        question: "What are the two shape options for Wall of Fire?",
        answer: "Straight wall: Up to 60 feet long, 20 feet high, 1 foot thick. Ring wall: Up to 20 feet in diameter, 20 feet high, 1 foot thick. The ring can trap creatures inside or create a protected zone."
      },
      {
        question: "Is Wall of Fire opaque?",
        answer: "Yes, the wall is completely opaque, blocking line of sight. Creatures on opposite sides can't see each other through it. This can disrupt enemy spellcasters who need to see their targets."
      }
    ],
    category: "offensive",
    searchVolume: 4690
  },
  {
    slug: "chromatic-orb-5e",
    name: "Chromatic Orb",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "90 feet",
    components: "V, S, M (a diamond worth at least 50 gp)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.",
    damage: "3d8 (acid, cold, fire, lightning, poison, or thunder)",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the 50 gp diamond material component - it's not consumed but must be present",
      "Not choosing the damage type strategically based on enemy resistances",
      "Thinking you can change damage type after seeing if it hits - choose before rolling",
      "Not realizing this is one of the highest damage 1st-level attack spells"
    ],
    dmTips: [
      "Excellent damage for 1st level with the flexibility of six damage types",
      "The material component requirement can be a story hook - finding the diamond",
      "Smart players will use Identify or knowledge checks to exploit enemy vulnerabilities",
      "Scales very well when upcast"
    ],
    faq: [
      {
        question: "Does Chromatic Orb consume its material component?",
        answer: "No. The 50 gp diamond is required but not consumed. You only need to acquire it once, then can cast Chromatic Orb indefinitely. However, you must have the diamond in hand or in a component pouch/focus."
      },
      {
        question: "When do you choose Chromatic Orb's damage type?",
        answer: "You choose the damage type (acid, cold, fire, lightning, poison, or thunder) when you cast the spell, before making the attack roll. You cannot wait to see if you hit before deciding."
      },
      {
        question: "How does Chromatic Orb's damage compare to other 1st-level spells?",
        answer: "At 3d8 (average 13.5), Chromatic Orb is one of the highest-damage single-target 1st-level spells. Only Inflict Wounds (3d10, average 16.5) deals more, but requires touch range."
      },
      {
        question: "What's the best damage type to choose for Chromatic Orb?",
        answer: "Depends on the enemy. Generally: Thunder (least commonly resisted), Lightning (good all-around), Cold (many creatures vulnerable). Fire is commonly resisted, Poison is very commonly resisted. Know your enemies."
      },
      {
        question: "Can Twinned Spell work with Chromatic Orb?",
        answer: "Yes! Chromatic Orb targets a single creature and qualifies for Twinned Spell. This makes it excellent for Sorcerers - twin it for 6d8 total damage across two targets at the cost of 1 sorcery point."
      }
    ],
    category: "offensive",
    searchVolume: 8900
  },
  {
    slug: "scorching-ray-5e",
    name: "Scorching Ray",
    level: "2nd",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.",
    damage: "2d6 fire per ray (3 rays total)",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting each ray requires a separate attack roll",
      "Not splitting rays between targets when tactical",
      "Rolling all damage at once instead of per ray (matters for resistance)",
      "Forgetting you can target the same creature multiple times"
    ],
    dmTips: [
      "Great for consistent damage, especially when you can get advantage",
      "Each ray hitting triggers separate concentration checks",
      "Can be devastating when combined with features that add damage per hit",
      "Fire damage is commonly resisted, so keep that in mind"
    ],
    faq: [
      {
        question: "How many attack rolls does Scorching Ray require?",
        answer: "One attack roll per ray - 3 attacks at base level, plus one additional ray for each spell slot level above 2nd. Each ray is resolved independently: separate attack roll, separate damage roll."
      },
      {
        question: "Can all Scorching Ray beams target the same creature?",
        answer: "Yes. You can hurl all rays at one target or split them between multiple targets. Concentrating all rays on a single high-priority target maximizes burst damage potential."
      },
      {
        question: "How does Scorching Ray interact with concentration?",
        answer: "Each ray that hits triggers a separate concentration check. Three hits = three DC 10 concentration checks (or higher if individual ray deals 22+ damage). Excellent for breaking enemy caster concentration."
      },
      {
        question: "Does Scorching Ray work with features that trigger on spell hits?",
        answer: "Yes, and this is where it shines. Features like Hexblade's Curse (+proficiency per hit), Hex (+1d6 per hit), or Empowered Evocation trigger for each ray. Multiple rays = multiple triggers."
      },
      {
        question: "Is Scorching Ray affected by disadvantage or advantage?",
        answer: "Each ray uses its own attack roll, so advantage/disadvantage applies to all rays. This makes Scorching Ray particularly strong when you have advantage (3+ chances to crit) but risky with disadvantage."
      }
    ],
    category: "offensive",
    searchVolume: 9700
  },
  {
    slug: "inflict-wounds-5e",
    name: "Inflict Wounds",
    level: "1st",
    school: "Necromancy",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.",
    damage: "3d10 necrotic",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting you need to be in melee range (touch) to use this",
      "Not realizing this is one of the highest single-target damage spells at 1st level",
      "Thinking it automatically hits - it requires a melee spell attack roll",
      "Using this instead of a ranged option when positioning is dangerous"
    ],
    dmTips: [
      "Highest average damage for a 1st-level single-target spell (16.5 damage)",
      "Risky for squishy clerics but devastating when it hits",
      "Great for frontline clerics or when used with reach features",
      "Upcast at higher levels, this remains competitive damage-wise"
    ],
    faq: [
      {
        question: "Why is Inflict Wounds considered so powerful for a 1st-level spell?",
        answer: "At 3d10 (average 16.5 damage), Inflict Wounds has the highest average damage of any 1st-level single-target spell. The trade-off is touch range, putting the caster in melee danger."
      },
      {
        question: "Does Inflict Wounds automatically hit?",
        answer: "No. You must make a melee spell attack roll against the target's AC. On a miss, the spell slot is consumed with no effect. The high damage potential comes with the risk of missing."
      },
      {
        question: "Can Inflict Wounds be used with reach features?",
        answer: "RAW, touch spells require you to be within reach of the target. Features that extend melee reach (like Bugbear's Long-Limbed) might extend this, but consult your DM. Most rulings keep it at 5 feet."
      },
      {
        question: "How does Inflict Wounds scale when upcast?",
        answer: "Damage increases by 1d10 per spell level above 1st. At 5th level, it deals 7d10 (average 38.5), making it competitive with higher-level damage spells while remaining slot-efficient."
      },
      {
        question: "Is Inflict Wounds good for clerics?",
        answer: "Situationally excellent. Domain clerics with heavy armor and good AC (War, Life, Forge) can safely enter melee. For squishy clerics, the touch range is risky. Best used when you have advantage or the enemy is restrained."
      }
    ],
    category: "offensive",
    searchVolume: 7800
  },
  {
    slug: "witch-bolt-5e",
    name: "Witch Bolt",
    level: "1st",
    school: "Evocation",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a twig from a tree that has been struck by lightning)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you.",
    damage: "1d12 lightning initially, then 1d12 automatic each turn",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting the automatic damage requires your action each turn",
      "Not tracking the 30-foot range limit - spell ends if target moves beyond it",
      "Thinking upcast damage applies to repeated damage - only affects initial hit",
      "Not realizing any cover or leaving range immediately ends the spell"
    ],
    dmTips: [
      "Generally considered weak because it consumes concentration and action economy",
      "Best used against stationary or restrained enemies",
      "The automatic damage never misses, which can be useful against high AC foes",
      "Enemies can break the spell by moving away or getting behind cover"
    ],
    faq: [
      {
        question: "Is Witch Bolt a good spell?",
        answer: "Generally considered weak. It requires concentration, consumes your action each turn, has short range (30 ft), and ends if the target gets cover or moves away. There are usually better options for your spell slot and action economy."
      },
      {
        question: "Does upcasting Witch Bolt increase the sustained damage?",
        answer: "No! This is a major drawback. Upcasting only increases the initial 1d12 damage. The automatic damage each subsequent turn stays at 1d12 regardless of spell slot used. This makes upcasting very inefficient."
      },
      {
        question: "What breaks the Witch Bolt connection?",
        answer: "The spell ends if: you use your action for anything other than maintaining the damage, the target moves beyond 30 feet, or the target gains total cover from you. Smart enemies will simply move away or duck behind a wall."
      },
      {
        question: "When is Witch Bolt actually useful?",
        answer: "Against restrained, paralyzed, or otherwise immobilized enemies who can't break the connection. Also decent against high-AC foes since the sustained damage is automatic after the initial hit."
      },
      {
        question: "Does the sustained Witch Bolt damage require an attack roll?",
        answer: "No. After the initial hit, the damage on subsequent turns is automatic - no attack roll, no saving throw. As long as you maintain the spell with your action, the target takes 1d12 lightning damage automatically."
      }
    ],
    category: "offensive",
    searchVolume: 6400
  },
  {
    slug: "meteor-swarm-5e",
    name: "Meteor Swarm",
    level: "9th",
    school: "Evocation",
    castingTime: "1 action",
    range: "1 mile",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once. The spell damages objects in the area and ignites flammable objects that aren't being worn or carried.",
    damage: "20d6 fire + 20d6 bludgeoning",
    savingThrow: "Dexterity",
    higherLevels: null,
    commonMistakes: [
      "Forgetting creatures in overlapping spheres are only affected once",
      "Not considering the massive 1-mile range for battlefield-scale destruction",
      "Overlooking that the spell deals both fire and bludgeoning damage",
      "Not accounting for the 40-foot radius - each sphere affects a huge area"
    ],
    dmTips: [
      "The highest damage spell in the game with 40d6 total (average 140 damage)",
      "Can target four separate areas, making it incredible for crowd control",
      "The 1-mile range means it can be used as artillery or for distant threats",
      "This is a campaign-ending spell that should feel truly epic when cast"
    ],
    faq: [
      {
        question: "How much damage does Meteor Swarm actually deal?",
        answer: "20d6 fire + 20d6 bludgeoning = 40d6 total (average 140 damage, or 70 on a successful save). This is the highest damage spell in the game. The split damage types help bypass single-element resistances."
      },
      {
        question: "Can Meteor Swarm's spheres overlap?",
        answer: "Yes, but a creature in overlapping areas is only affected once. You cannot stack damage by placing meteors on top of each other. Spread them out to hit more targets across a larger battlefield."
      },
      {
        question: "Why is Meteor Swarm's range 1 mile?",
        answer: "The extreme range allows it to function as magical artillery. You can bombard enemy fortifications, approaching armies, or distant threats from complete safety. This is a siege weapon spell."
      },
      {
        question: "What's the total area Meteor Swarm can cover?",
        answer: "Each of the four meteors creates a 40-foot-radius sphere (80-foot diameter). Placed separately, this can affect a massive area - effectively controlling an entire battlefield or devastating a large formation."
      },
      {
        question: "Can Meteor Swarm damage structures?",
        answer: "Yes. The spell damages objects in the area and ignites flammable objects that aren't worn or carried. This can level buildings, destroy fortifications, and cause widespread environmental destruction."
      }
    ],
    category: "offensive",
    searchVolume: 5600
  },
  {
    slug: "chain-lightning-5e",
    name: "Chain Lightning",
    level: "6th",
    school: "Evocation",
    castingTime: "1 action",
    range: "150 feet",
    components: "V, S, M (a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts. A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.",
    damage: "10d8 lightning",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.",
    commonMistakes: [
      "Forgetting the secondary targets must be within 30 feet of the primary target",
      "Thinking each creature can only be hit once - the primary can be hit by another arc",
      "Not maximizing targets - you can hit up to 4 creatures total",
      "Forgetting each target makes their own save independently"
    ],
    dmTips: [
      "Excellent against grouped enemies, potentially hitting 4 targets for 10d8 each",
      "The primary target is chosen by you, but the chain targets must be nearest",
      "Describe the lightning dramatically arcing between targets",
      "Consider environmental effects - water, metal, etc."
    ],
    faq: [
      {
        question: "How does Chain Lightning choose secondary targets?",
        answer: "You choose the primary target. The three bolts then leap to targets within 30 feet of the primary target. You can choose which creatures (or objects) the bolts jump to, within that range restriction."
      },
      {
        question: "Can Chain Lightning hit the same creature multiple times?",
        answer: "No. Each target can only be struck by one bolt. The primary target is hit once, and each of the three secondary targets is hit once. Maximum of 4 creatures affected (or 3 if you don't hit a secondary target)."
      },
      {
        question: "Does each Chain Lightning target make their own save?",
        answer: "Yes. Each of the up to 4 targets makes their own Dexterity saving throw independently. Some may fail (full 10d8 damage) while others succeed (half damage)."
      },
      {
        question: "How does Chain Lightning scale when upcast?",
        answer: "Each slot level above 6th adds one additional bolt that can leap from the primary target. At 9th level, you'd have 6 bolts hitting up to 7 total targets - devastating against groups."
      },
      {
        question: "Can Chain Lightning target objects?",
        answer: "Yes. A target can be a creature or an object. This allows you to chain the lightning through objects to reach enemies, or destroy multiple items. Objects automatically fail Dexterity saves."
      }
    ],
    category: "offensive",
    searchVolume: 6900
  },
  {
    slug: "flame-strike-5e",
    name: "Flame Strike",
    level: "5th",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (pinch of sulfur)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.",
    damage: "4d6 fire + 4d6 radiant",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.",
    commonMistakes: [
      "Forgetting it deals both fire and radiant damage",
      "Not considering the 40-foot height when casting indoors",
      "Forgetting allies in the area also need to save",
      "Not choosing which damage type increases when upcasting"
    ],
    dmTips: [
      "A classic cleric damage spell with excellent flavor",
      "The mix of fire and radiant damage means most creatures are vulnerable to at least one type",
      "Great for dealing with groups of enemies",
      "Describe the divine fire dramatically descending from above"
    ],
    faq: [
      {
        question: "Why does Flame Strike deal two damage types?",
        answer: "Flame Strike deals 4d6 fire + 4d6 radiant. The split damage types mean creatures resistant to fire still take full radiant damage, and vice versa. Only creatures resistant to BOTH types reduce total damage significantly."
      },
      {
        question: "How does Flame Strike's upcast damage work?",
        answer: "When upcast, the damage increases by 1d6 for each slot level above 5th, and you choose whether the extra die is fire or radiant. This lets you customize the split based on enemy vulnerabilities."
      },
      {
        question: "What's the area of effect for Flame Strike?",
        answer: "A 10-foot-radius, 40-foot-high cylinder. That's a 20-foot diameter circle. The height rarely matters outdoors but can be relevant in rooms with high ceilings or when targeting flying creatures."
      },
      {
        question: "How does Flame Strike compare to Fireball?",
        answer: "Fireball at 5th level deals 10d6 fire (average 35) in a 20-ft radius. Flame Strike deals 4d6+4d6 (average 28) in a 10-ft radius. Fireball has better damage and area, but Flame Strike's radiant damage bypasses common fire resistance."
      },
      {
        question: "Does Flame Strike hit allies in the area?",
        answer: "Yes. Like most AoE spells, Flame Strike affects all creatures in the cylinder, including allies. Position carefully or use features like Sculpt Spells (Evocation Wizard) to protect party members."
      }
    ],
    category: "offensive",
    searchVolume: 7200
  },
  {
    slug: "cone-of-cold-5e",
    name: "Cone of Cold",
    level: "5th",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (60-foot cone)",
    components: "V, S, M (a small crystal or glass cone)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one. A creature killed by this spell becomes a frozen statue until it thaws.",
    damage: "8d8 cold",
    savingThrow: "Constitution",
    higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
    commonMistakes: [
      "Forgetting it's a 60-foot cone originating from you, not a point",
      "Not accounting for the width of the cone at maximum range",
      "Forgetting frozen statues can be toppled and shattered for gruesome effect",
      "Not positioning to maximize targets hit by the cone"
    ],
    dmTips: [
      "Excellent AoE damage spell for 5th level",
      "The frozen statue effect is mostly flavor but can be narratively significant",
      "Good damage type with decent scaling",
      "Positioning is key - you need to be in a good spot to hit multiple enemies"
    ],
    faq: [
      {
        question: "How wide is Cone of Cold at maximum range?",
        answer: "A 60-foot cone is 60 feet long and 60 feet wide at its end (forming a 60-60-60 isoceles triangle from above). This is a massive area - roughly 12 squares wide at the far end on a standard grid."
      },
      {
        question: "What happens to creatures killed by Cone of Cold?",
        answer: "A creature killed by the spell becomes a frozen statue until it thaws. This is mostly flavor but can have narrative implications - frozen bodies can be shattered, preserved, or used as obstacles."
      },
      {
        question: "Why does Cone of Cold use a Constitution save?",
        answer: "Constitution saves tend to be higher than Dexterity for many creatures, making Cone of Cold slightly less reliable than Dex-save spells like Fireball. However, Con-save spells bypass Evasion and similar Dex-based defenses."
      },
      {
        question: "How does Cone of Cold compare to other 5th-level AoE spells?",
        answer: "8d8 (average 36) is solid damage. Cold damage is less commonly resisted than fire. The cone shape requires good positioning but can hit many enemies. Competitive with Synaptic Static, Cloudkill, and upcast Fireball."
      },
      {
        question: "Does Cone of Cold work indoors?",
        answer: "Yes, though the 60-foot cone requires significant space. In tight corridors, you might not be able to use its full area. The cone originates from you, so you can aim it in any direction."
      }
    ],
    category: "offensive",
    searchVolume: 6800
  },
  {
    slug: "finger-of-death-5e",
    name: "Finger of Death",
    level: "7th",
    school: "Necromancy",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much damage on a successful one. A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.",
    damage: "7d8 + 30 necrotic",
    savingThrow: "Constitution",
    higherLevels: "When you cast this spell using a spell slot of 8th level or higher, the damage increases by 2d8 for each slot level above 7th.",
    commonMistakes: [
      "Forgetting the flat +30 damage bonus - average damage is 61.5",
      "Not tracking zombies created by the spell",
      "Thinking non-humanoids can become zombies - only humanoids",
      "Forgetting the zombie is permanent and doesn't require concentration"
    ],
    dmTips: [
      "Excellent single-target damage with great average (61.5)",
      "The zombie creation is a significant bonus effect",
      "Evil NPCs should definitely use this - it's narratively perfect",
      "The permanent zombie control can lead to interesting roleplay moments"
    ],
    faq: [
      {
        question: "How much damage does Finger of Death actually deal?",
        answer: "7d8 + 30 necrotic damage on a failed save (average 61.5), or half on a success (average 30.75). The flat +30 makes this one of the highest single-target damage spells in the game."
      },
      {
        question: "Does Finger of Death's zombie effect work on any creature?",
        answer: "No. Only humanoids killed by the spell rise as zombies. Non-humanoid creatures (dragons, beasts, aberrations, etc.) just die normally. The zombie creation is limited to humanoid targets."
      },
      {
        question: "How does the zombie creation work?",
        answer: "A humanoid killed by Finger of Death rises at the start of your next turn as a zombie permanently under your command. No concentration required, no time limit - they follow your verbal orders forever (or until destroyed)."
      },
      {
        question: "Can you build a zombie army with Finger of Death?",
        answer: "Yes! Since the zombies are permanent and don't require concentration or spell slots to maintain, you can accumulate zombies over time. This is a classic evil wizard strategy."
      },
      {
        question: "Does Finger of Death's damage scale when upcast?",
        answer: "Yes. When cast with an 8th-level slot or higher, the damage increases by 2d8 per level above 7th. At 9th level, that's 11d8 + 30 (average 79.5 damage)."
      }
    ],
    category: "offensive",
    searchVolume: 5900
  },
  {
    slug: "crown-of-madness-5e",
    name: "Crown of Madness",
    level: "2nd",
    school: "Enchantment",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes. The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach. On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends.",
    damage: "Target's weapon damage",
    savingThrow: "Wisdom",
    higherLevels: null,
    commonMistakes: [
      "Forgetting you must use your action each turn to maintain control",
      "Not realizing the target gets a save at the end of each of its turns",
      "Thinking you control the target's movement - you only control their attack action",
      "Forgetting the target must attack before moving on its turn"
    ],
    dmTips: [
      "Generally considered weak due to action economy and repeated saves",
      "Can be useful for turning a strong melee enemy against their allies",
      "The iron crown visual is great for flavor",
      "Better in situations where you can maintain concentration safely"
    ],
    faq: [
      {
        question: "Is Crown of Madness a good spell?",
        answer: "Generally considered weak. It requires concentration, costs your action each turn to maintain, only forces one melee attack, allows repeated saves, and gives the target normal movement. There are usually better 2nd-level options."
      },
      {
        question: "How does the 'attack before moving' restriction work?",
        answer: "On its turn, the charmed target must use its action to make a melee attack before it can move. You choose the attack target (must be within reach). After attacking, the creature can move and use bonus actions normally."
      },
      {
        question: "Can Crown of Madness force a creature to attack its ally?",
        answer: "Yes, but only if an ally is within the target's melee reach when its turn starts. You mentally choose the attack target. If no valid target is within reach, the creature acts normally on its turn."
      },
      {
        question: "Does the target know they're being controlled?",
        answer: "The spell doesn't specify, but the twisted iron crown on their head and madness in their eyes are visible. Most DMs rule the target is aware something is wrong but compelled to attack anyway."
      },
      {
        question: "Why must you use your action to maintain Crown of Madness?",
        answer: "This is the spell's biggest weakness. You must spend your action each turn to maintain control. Miss one action (Counterspelled, incapacitated, choose to do something else), and the spell ends immediately."
      }
    ],
    category: "offensive",
    searchVolume: 4800
  },
  {
    slug: "heat-metal-5e",
    name: "Heat Metal",
    level: "2nd",
    school: "Transmutation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a piece of iron and a flame)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Druid"],
    description: "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn't drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.",
    damage: "2d8 fire",
    savingThrow: "Constitution (to avoid dropping object)",
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting the damage can be repeated each turn with a bonus action",
      "Not realizing worn armor can't be easily dropped - causing ongoing damage",
      "Thinking the creature can choose to take the disadvantage instead of dropping - they must save",
      "Forgetting it requires concentration"
    ],
    dmTips: [
      "Devastating against armored enemies who can't easily remove their armor",
      "Can force enemies to drop weapons, disarming them",
      "Bonus action economy makes this great paired with normal actions",
      "Very effective against constructs and creatures that rely on metal equipment"
    ],
    faq: [
      {
        question: "Can enemies drop armor to escape Heat Metal damage?",
        answer: "Most armor takes significant time to remove (heavy armor: 10 minutes, medium: 5 minutes, light: 1 minute). During combat, armored enemies essentially cannot escape the ongoing damage - they're trapped in their own equipment."
      },
      {
        question: "What happens if the target fails the Constitution save?",
        answer: "If holding the heated object, they must drop it if they can. If they can't drop it (like worn armor), they have disadvantage on attack rolls and ability checks until the start of your next turn. They still take the damage either way."
      },
      {
        question: "Does Heat Metal require concentration?",
        answer: "Yes, concentration up to 1 minute. But the repeated damage uses your bonus action, not your action. This means you can cast other non-concentration spells while maintaining Heat Metal's damage."
      },
      {
        question: "Can Heat Metal target natural armor or claws?",
        answer: "No. Heat Metal targets 'manufactured metal objects' - created items, not natural features. A warforged's body might qualify (DM discretion), but a dragon's scales or a monster's natural weapons don't."
      },
      {
        question: "What are the best targets for Heat Metal?",
        answer: "Heavily armored enemies (knights, guards), creatures with metal weapons they rely on, shield-users, and constructs made of metal. Devastating against plate-armored fighters who can't easily escape."
      }
    ],
    category: "offensive",
    searchVolume: 6500
  },
  {
    slug: "cloud-of-daggers-5e",
    name: "Cloud of Daggers",
    level: "2nd",
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a sliver of glass)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there.",
    damage: "4d4 slashing",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting the damage is automatic - no save or attack roll",
      "Not realizing enemies can trigger it when forced into the area",
      "Thinking the cloud moves - it stays in one place",
      "Forgetting it's only a 5-foot cube - very small area"
    ],
    dmTips: [
      "Best used in chokepoints or when you can force enemies through it",
      "Automatic damage makes it reliable despite low average (10 damage)",
      "Can be combined with forced movement effects for multiple triggers",
      "The 5-foot cube is tiny - position carefully"
    ],
    faq: [
      {
        question: "Does Cloud of Daggers deal damage automatically?",
        answer: "Yes! No attack roll or saving throw. Any creature that enters the area or starts its turn there takes 4d4 slashing damage automatically. This makes it reliable but requires good placement."
      },
      {
        question: "Can Cloud of Daggers trigger multiple times per round?",
        answer: "Potentially. It triggers when a creature enters for the first time on a turn OR starts its turn there. If an enemy is pushed/pulled through it on your turn, then starts their turn in it, they'd take damage twice."
      },
      {
        question: "How small is Cloud of Daggers' area?",
        answer: "A 5-foot cube - one square on a standard battle grid. This is very small. The spell is best used in doorways, chokepoints, or combined with forced movement to push enemies through it repeatedly."
      },
      {
        question: "Does Cloud of Daggers move or follow enemies?",
        answer: "No. Once placed, Cloud of Daggers stays in that exact location for the duration. It doesn't follow targets or move. Enemies can simply walk around it if there's space."
      },
      {
        question: "How does Cloud of Daggers scale when upcast?",
        answer: "Damage increases by 2d4 for each slot level above 2nd. At 5th level, it deals 10d4 (average 25) automatic damage - significant for a guaranteed hit. Great with forced movement combos."
      }
    ],
    category: "offensive",
    searchVolume: 5200
  }
];
