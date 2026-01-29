import { FAQItem } from "../components/FAQ";

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
  faq?: FAQItem[];
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
    faq: [
      {
        question: "Does Absorb Elements work against multiple damage types in one attack?",
        answer: "You can only absorb one damage type per casting. If a dragon's breath deals fire AND cold, you choose which one to resist. You'd need multiple castings (and reactions) for multiple damage types."
      },
      {
        question: "Can I use the extra damage on a melee spell attack?",
        answer: "No! The bonus damage only applies to 'melee attacks' - weapon attacks. Shocking Grasp or Inflict Wounds are melee SPELL attacks, not melee weapon attacks, so they don't get the bonus damage."
      },
      {
        question: "Does Absorb Elements work if I succeed on my saving throw?",
        answer: "Yes! The trigger is 'when you take damage.' Even if you take only half damage from a successful save, you still take damage, so Absorb Elements activates. The resistance applies to whatever damage you would take."
      },
      {
        question: "Can I hold the charge and use the damage later?",
        answer: "Only until the start of your next turn. If you don't make a melee attack by then, the stored energy dissipates. You can't save it for multiple rounds - use it or lose it."
      },
      {
        question: "Does Absorb Elements work against environmental damage like lava?",
        answer: "Yes, as long as the damage type is acid, cold, fire, lightning, or thunder. Stepping in lava (fire damage) or being struck by natural lightning triggers Absorb Elements, giving you resistance."
      }
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
    faq: [
      {
        question: "Can I identify what spell is being cast before deciding to Counterspell?",
        answer: "RAW, no! Identifying a spell being cast requires your reaction (via Xanathar's rules). Since Counterspell also uses your reaction, you must choose blind. Some DMs allow identifying low-level spells automatically."
      },
      {
        question: "Can Counterspell be Counterspelled?",
        answer: "Yes! If two spellcasters can see each other and both have Counterspell prepared, they can counter each other's Counterspells. This can lead to dramatic 'Counterspell chains' in high-level play."
      },
      {
        question: "Does Counterspell work on innate spellcasting or spell-like abilities?",
        answer: "If the ability says 'the creature casts [spell name]' it can be countered. If it just mimics an effect without technically being spellcasting (like a dragon's breath weapon), it cannot be countered."
      },
      {
        question: "What ability do I use for the Counterspell check?",
        answer: "Your spellcasting ability modifier! Wizards use INT, Sorcerers use CHA, etc. The DC is 10 + the target spell's level. With +5 modifier, you'd need to roll 8+ to counter a 7th-level spell."
      },
      {
        question: "Can I Counterspell a spell cast from behind total cover?",
        answer: "No. Counterspell requires you to 'see a creature within 60 feet casting a spell.' If the caster has total cover, you can't see them, and can't Counterspell. Positioning matters!"
      }
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
    faq: [
      {
        question: "Does Faerie Fire reveal invisible creatures?",
        answer: "Yes! Affected creatures 'can't benefit from being invisible' for the duration. They still have the invisible condition, but attacks against them don't have disadvantage and they're targetable - the glow makes them visible."
      },
      {
        question: "Can Faerie Fire be seen through fog or darkness?",
        answer: "The creatures shed dim light in a 10-foot radius. In magical darkness, the light is suppressed. In fog or mundane darkness, you can see the glow but not necessarily the creature clearly - DM discretion applies."
      },
      {
        question: "Does Faerie Fire give advantage on spell attacks too?",
        answer: "Yes! 'Any attack roll against an affected creature has advantage.' This includes melee attacks, ranged attacks, and spell attacks. Eldritch Blast and Scorching Ray benefit just as much as sword swings."
      },
      {
        question: "What happens if a creature enters the area after the spell is cast?",
        answer: "Nothing! Only creatures 'in the area when the spell is cast' must save. Creatures entering later aren't affected. The spell doesn't create a persistent zone - it's a one-time effect on initial targets."
      },
      {
        question: "Can the affected creature turn the glow off?",
        answer: "No. They can try to hide behind cover, but the glow persists for the duration. The only ways to end it early are to dispel it, have the caster drop concentration, or use something like Greater Restoration."
      }
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
    faq: [
      {
        question: "Can I cast Shield after I know the attack roll but before damage?",
        answer: "Yes! The trigger is 'when you are hit by an attack.' You know you're hit before damage is rolled. Cast Shield, and the +5 AC applies retroactively - if 17 hit you and Shield makes your AC 18, the attack now misses."
      },
      {
        question: "Does Shield stack with other AC bonuses?",
        answer: "Yes! Shield's +5 bonus stacks with everything - Mage Armor, Shield of Faith, Haste, etc. A wizard with Mage Armor (13+DEX) and Shield gains +5 on top for potentially 20+ AC."
      },
      {
        question: "Does Shield work against all attacks until my next turn?",
        answer: "Yes! The +5 bonus lasts 'until the start of your next turn.' Multiple enemies attacking you all face the higher AC. This makes Shield excellent when surrounded by multiple foes."
      },
      {
        question: "Can I cast Shield if I'm already wearing a shield (the equipment)?",
        answer: "The spell Shield works regardless of equipment. However, wizards and sorcerers typically can't wear shields without proficiency (and even then, can't cast spells with somatic components while holding one without War Caster)."
      },
      {
        question: "Does Shield completely negate Magic Missile?",
        answer: "Yes! The spell says you 'take no damage from magic missile' - not reduced damage, NO damage. Magic Missile's auto-hit doesn't work against Shield. This is one of the few hard counters to Magic Missile."
      }
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
    faq: [
      {
        question: "Why is Silvery Barbs considered so powerful?",
        answer: "For a 1st-level slot, you force disadvantage (reroll, take lower) on ANY d20 roll AND give an ally advantage. It can turn crits to misses, make enemies fail saves against Hold Person, or help land crucial attacks - all as a reaction."
      },
      {
        question: "Can I use Silvery Barbs on my own failed save?",
        answer: "No. The trigger is when a creature SUCCEEDS. You can't use it on your own failures. However, you CAN give yourself the advantage buff if you choose yourself as the creature who gains advantage."
      },
      {
        question: "Does Silvery Barbs work against Legendary Resistance?",
        answer: "Yes, but with a catch. The creature must first succeed on the save (triggering Silvery Barbs), reroll and potentially fail, THEN use Legendary Resistance. You can drain LR uses this way, but they can still choose to succeed."
      },
      {
        question: "Can the forced reroll turn a critical hit into a miss?",
        answer: "Potentially! A natural 20 rerolled might come up as 8. If that 8 + modifiers doesn't beat your AC, it misses. This is one reason Silvery Barbs is so controversial - it can negate crits for a 1st-level slot."
      },
      {
        question: "Does Silvery Barbs stack with other reroll effects?",
        answer: "Different rules! Silvery Barbs forces a reroll and uses the lower. Disadvantage also means roll twice, take lower. But you can't stack multiple 'take the lower' effects - roll once, take that result."
      }
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
    faq: [
      {
        question: "Can I use Hellish Rebuke when damaged by a spell?",
        answer: "Yes! The trigger is 'being damaged by a creature' - it doesn't specify weapon attacks. Fireball from an enemy wizard, a dragon's breath weapon, or even fall damage pushed by an enemy can all trigger Hellish Rebuke."
      },
      {
        question: "Does Hellish Rebuke work if I'm knocked unconscious by the damage?",
        answer: "Debated! Some argue you can still use your reaction before falling unconscious. Others say being at 0 HP means you're incapacitated and can't take reactions. Check with your DM - many allow it as a 'last gasp' revenge."
      },
      {
        question: "Can Hellish Rebuke target the creature even if they're now behind cover?",
        answer: "You must be able to 'see' the creature within 60 feet. If they damaged you and then ducked behind total cover, you might not be able to target them. However, most damage sources don't allow the attacker to hide afterward."
      },
      {
        question: "Does Hellish Rebuke scale well for Warlocks?",
        answer: "Yes! Warlocks cast at their highest slot level automatically. At 5th level with 3rd-level slots, Hellish Rebuke deals 4d10 (avg 22) as a reaction. At 9th level with 5th-level slots, it's 6d10 (avg 33)!"
      },
      {
        question: "Can I cast Hellish Rebuke and Shield in the same round?",
        answer: "No. Both require your reaction, and you only get one reaction per round. You must choose: avoid the damage with Shield, or take the damage and punish them with Hellish Rebuke. Choose wisely!"
      }
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
    faq: [
      {
        question: "What creature types does Protection from Evil and Good protect against?",
        answer: "Aberrations, celestials, elementals, fey, fiends, and undead. NOT humanoids, beasts, dragons, giants, monstrosities, oozes, or plants. Despite the name, it's about creature type, not moral alignment."
      },
      {
        question: "Does this spell end possession that's already in effect?",
        answer: "Not automatically. If already possessed/charmed/frightened by a valid creature type, you get 'advantage on any new saving throw against the relevant effect.' You'll need to make saves to break free, but with advantage."
      },
      {
        question: "Can ghosts and similar undead still possess a protected creature?",
        answer: "They can try, but the target can't be possessed by them. The spell provides immunity to new possession from listed creature types. Any possession attempt simply fails."
      },
      {
        question: "Does the material component get consumed?",
        answer: "Yes! The spell consumes the holy water or powdered silver/iron. Each casting costs components. Stock up before heading into fiend-heavy areas or undead dungeons."
      },
      {
        question: "Is Protection from Evil and Good worth concentration?",
        answer: "Situationally, absolutely! Against a vampire's charm, a ghost's possession, or a powerful demon's attacks, the protection is invaluable. Against a pack of wolves? Completely useless. Know your enemies."
      }
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
    faq: [
      {
        question: "Does Armor of Agathys damage trigger for each melee attack that hits me?",
        answer: "Yes, but only while you have the temp HP! Each melee hit triggers the cold damage, but once the temp HP are depleted, the damage stops. With 15 temp HP, you might take 3-4 hits before it runs out."
      },
      {
        question: "What happens if I take more damage than my temp HP in one hit?",
        answer: "The attacker still takes the cold damage, then your temp HP are gone and the damage effect ends. For example: you have 10 temp HP, take 25 damage. Attacker takes 10 cold damage, you lose all temp HP and take 15 real damage."
      },
      {
        question: "Does Armor of Agathys scale with Warlock Pact slots?",
        answer: "Yes! Warlocks cast at highest slot level, so at level 5 (3rd-level slots), it's 15 temp HP and 15 damage. At level 9 (5th-level slots), it's 25 temp HP and 25 damage. Incredibly powerful scaling!"
      },
      {
        question: "Can I stack Armor of Agathys with other sources of temp HP?",
        answer: "Temporary HP never stack. If you have Armor of Agathys temp HP and gain temp HP from another source, you choose which to keep. However, the Armor of Agathys damage only triggers while its specific temp HP remain."
      },
      {
        question: "Does Armor of Agathys work with Hexblade or melee Warlock builds?",
        answer: "Perfectly! Frontline Warlocks love this spell. You WANT to be hit in melee because each hit punishes the attacker. Combine with medium armor and a shield for a tanky warlock who hurts anyone who touches them."
      }
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
    faq: [
      {
        question: "Does Mage Armor stack with Unarmored Defense?",
        answer: "No! Both set your base AC to a formula. Mage Armor: 13 + DEX. Barbarian Unarmored Defense: 10 + DEX + CON. Monk: 10 + DEX + WIS. You choose one calculation, you don't add them together."
      },
      {
        question: "Can I wear a shield with Mage Armor?",
        answer: "Yes, if you have shield proficiency! Shields aren't armor - Mage Armor only fails if you 'don armor.' A +2 shield stacks with Mage Armor for 15 + DEX AC. However, most wizards lack shield proficiency."
      },
      {
        question: "If I put on armor, does Mage Armor end permanently?",
        answer: "Yes, 'the spell ends if the target dons armor.' To get it back, you'd need to remove the armor and cast Mage Armor again. Plan your equipment before casting!"
      },
      {
        question: "Can I cast Mage Armor on a Monk or Barbarian?",
        answer: "You can, but it might not help. A Monk with 16 DEX and 16 WIS has AC 16 from Unarmored Defense. Mage Armor would give 13 + 3 = 16. Only helpful if their secondary stat is lower than 13."
      },
      {
        question: "Is Mage Armor or Shield of Faith better?",
        answer: "Different spells! Mage Armor lasts 8 hours with no concentration (+3 AC over base). Shield of Faith lasts 10 minutes with concentration (+2 AC). Mage Armor for all-day protection, Shield of Faith for specific combats."
      }
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
    faq: [
      {
        question: "What's the difference between warm shield and chill shield?",
        answer: "Warm shield gives cold resistance and deals fire damage. Chill shield gives fire resistance and deals cold damage. Choose based on what enemies you expect to face - fire-breathing dragon? Take chill shield for fire resistance."
      },
      {
        question: "Does Fire Shield's damage trigger on ranged attacks?",
        answer: "No! Only 'whenever a creature within 5 feet of you hits you with a melee attack.' Ranged attacks from outside 5 feet don't trigger the damage. Enemies can avoid the damage by staying at range."
      },
      {
        question: "Can Fire Shield and Armor of Agathys work together?",
        answer: "Yes! Both trigger on melee hits and deal different damage types. A creature hitting you in melee would take Fire Shield's 2d8 fire/cold AND Armor of Agathys's cold damage (while you have the temp HP)."
      },
      {
        question: "Does the light from Fire Shield affect stealth or Darkness spells?",
        answer: "Yes! You shed bright light in a 10-foot radius. This makes stealth nearly impossible and might interact with Darkness (DM discretion on whether nonmagical light penetrates magical darkness). Plan accordingly."
      },
      {
        question: "Is Fire Shield worth a 4th-level slot?",
        answer: "Situationally excellent! No concentration, 10-minute duration, provides resistance AND retributive damage. Against fire-using enemies with a chill shield, or melee-heavy encounters, it's fantastic. Against mixed or ranged enemies, less so."
      }
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
    faq: [
      {
        question: "Does Stoneskin protect against magical weapons?",
        answer: "No! Stoneskin only provides resistance to 'nonmagical bludgeoning, piercing, and slashing damage.' A +1 sword bypasses this entirely. At higher levels where magic weapons are common, Stoneskin becomes much less useful."
      },
      {
        question: "Does Stoneskin protect against unarmed strikes?",
        answer: "Yes, unless the attacker's unarmed strikes count as magical (like a Monk's Ki-Empowered Strikes at level 6). Natural weapons from beasts and most monsters are also nonmagical and resisted."
      },
      {
        question: "Is the 100 gp diamond dust consumed?",
        answer: "Yes! Each casting consumes 100 gp worth of diamond dust. This is a significant ongoing cost and one reason Stoneskin isn't cast casually. Stock up before extended dungeon delves."
      },
      {
        question: "Is Stoneskin worth concentration at 4th level?",
        answer: "Situationally. Against hordes of nonmagical enemies (goblins, wolves, zombies), it's excellent. But the concentration competes with powerful 4th-level spells like Greater Invisibility or Polymorph. Know your encounter."
      },
      {
        question: "Does Stoneskin affect the creature's appearance?",
        answer: "The spell says flesh turns 'as hard as stone' but doesn't specify visible changes. RAW is ambiguous - DMs might describe a stone-like texture or coloring, or it might be purely a magical effect with no visible change."
      }
    ],
    category: "reaction-defense",
    searchVolume: 8100
  }
];
