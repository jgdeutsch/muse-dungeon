import { FAQItem } from "../components/FAQ";

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
  faq?: FAQItem[];
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
    faq: [
      {
        question: "Does Aid stack with temporary hit points?",
        answer: "Yes! Aid increases your actual hit point maximum, not temporary HP. So you can have Aid's bonus HP AND temporary hit points from another source like Heroism - they work independently."
      },
      {
        question: "What happens when Aid ends - do I lose hit points?",
        answer: "When Aid ends, your hit point maximum returns to normal. If your current HP exceeds your new maximum, it drops to match. But if you've taken damage and your current HP is below your normal max, nothing happens."
      },
      {
        question: "Can Aid bring back an unconscious ally?",
        answer: "Yes! If an ally is at 0 HP, casting Aid on them increases both their max AND current HP by 5+, bringing them back to consciousness. It's like a healing spell in this case."
      },
      {
        question: "Is Aid considered healing for purposes of abilities like Life Transference?",
        answer: "No, Aid isn't technically healing - it increases hit point maximum and current hit points simultaneously. Effects that boost healing (like Disciple of Life) don't apply to Aid."
      },
      {
        question: "Can I cast Aid on myself?",
        answer: "Yes! You can choose up to three creatures within 30 feet, and 'yourself' counts as a valid target. Many clerics include themselves in the Aid buff for pre-combat preparation."
      }
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
    faq: [
      {
        question: "Does Bless work on initiative rolls?",
        answer: "No, initiative is a Dexterity check, not an attack roll or saving throw. Bless only applies to attack rolls and saving throws, so it won't help with initiative."
      },
      {
        question: "Can I cast Bless on myself?",
        answer: "Yes! You can choose up to three creatures within 30 feet, including yourself. Many clerics buff themselves along with two allies to benefit from the attack and save bonuses."
      },
      {
        question: "Does Bless stack with Bardic Inspiration?",
        answer: "Yes! They're separate effects from different sources. A character can add both a Bless d4 and a Bardic Inspiration die to the same attack roll or saving throw."
      },
      {
        question: "Do I add the d4 before or after I roll?",
        answer: "You roll the d4 at the same time as your d20 for the attack or save. RAW, you add it to the total - you don't get to see the d20 result first and then decide whether to use Bless (the d4 is always added)."
      },
      {
        question: "Is Bless or Bane better?",
        answer: "It depends! Bless affects 3 allies for attacks AND saves. Bane affects 3 enemies but allows a save and only penalizes attacks and saves. Bless is generally more reliable since it can't be resisted, but Bane can be devastating against enemy spellcasters."
      }
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
    faq: [
      {
        question: "Can I cast Cure Wounds on myself?",
        answer: "Yes! The spell says 'a creature you touch' and you can touch yourself. It's a common use for clerics and other healers who need emergency self-healing."
      },
      {
        question: "Does Cure Wounds work on unconscious allies?",
        answer: "Absolutely! In fact, that's one of its most common uses. Healing an unconscious ally at 0 HP brings them back to consciousness with however much HP the spell restores."
      },
      {
        question: "Why would I use Cure Wounds over Healing Word?",
        answer: "Cure Wounds heals more (1d8 vs 1d4) and scales better at higher levels. Use it out of combat when the bonus action of Healing Word doesn't matter, or when you need maximum healing in one spell."
      },
      {
        question: "Can Cure Wounds heal undead allies like a vampire spawn companion?",
        answer: "No, the spell explicitly has no effect on undead or constructs. To heal undead, you'd need spells like Inflict Wounds (which damages living but could be ruled to heal undead in some interpretations) or class features."
      },
      {
        question: "Does Life Domain's Disciple of Life feature work with Cure Wounds?",
        answer: "Yes! Disciple of Life adds 2 + spell level to healing spells. So a 1st-level Cure Wounds becomes 1d8 + WIS modifier + 3 extra HP, making Life Clerics exceptional healers."
      }
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
    faq: [
      {
        question: "Does Guidance work on initiative rolls?",
        answer: "Yes! Initiative is a Dexterity ability check, and Guidance works on any ability check. However, you'd need to have Guidance active before combat starts, which requires knowing combat is coming."
      },
      {
        question: "Can I add Guidance to my own ability checks?",
        answer: "Yes, but you need to touch yourself to cast it (which you can do), and you must maintain concentration. Many players have their cleric constantly cast Guidance on the party's skill-monkey before checks."
      },
      {
        question: "Does Guidance stack with Bardic Inspiration?",
        answer: "Yes! They're from different sources and neither says it can't stack. You can add both a Guidance d4 and a Bardic Inspiration die to the same ability check."
      },
      {
        question: "Can I cast Guidance after I see my roll but before the DM says if it succeeds?",
        answer: "No, Guidance must be active BEFORE you make the ability check. The spell ends when you use the d4, so you can't cast it reactively after rolling. You need to have it up in advance."
      },
      {
        question: "Is constantly casting Guidance annoying or against the rules?",
        answer: "It's legal RAW, but can slow down gameplay. Many DMs rule that Guidance's verbal/somatic components are noticeable, making it inappropriate in social situations or stealth. Discuss expectations with your table."
      }
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
    faq: [
      {
        question: "Can I cast Healing Word and another spell on the same turn?",
        answer: "Yes, but with limits! If you cast Healing Word (bonus action), you can only cast a cantrip with your action, not another leveled spell. So Healing Word + Toll the Dead works, but Healing Word + Guiding Bolt doesn't."
      },
      {
        question: "Is Healing Word better than Cure Wounds?",
        answer: "For combat, usually yes! The bonus action economy and 60-foot range outweigh the lower healing (1d4 vs 1d8). You can attack/cast a cantrip AND heal. Out of combat, Cure Wounds heals more per slot."
      },
      {
        question: "Does Healing Word require line of sight?",
        answer: "Yes! It says 'a creature of your choice that you can see within range.' You can't heal someone around a corner or behind total cover even though the range is 60 feet."
      },
      {
        question: "Can I use Healing Word on myself?",
        answer: "Yes! You can see yourself and you're within range (0 feet from yourself). It's a great emergency self-heal when you're low on HP but still want to use your action for something else."
      },
      {
        question: "Why is 'yo-yo healing' with Healing Word so effective?",
        answer: "When an ally drops to 0 HP, even 1 HP gets them back in the fight with their full action economy. Since being at 1 HP vs 50 HP doesn't affect what you can do, bringing someone up with minimal healing is very efficient."
      }
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
    faq: [
      {
        question: "Does Heroism's temp HP stack each turn?",
        answer: "No! Temporary HP never stacks. Each turn you get fresh temp HP equal to your spellcasting modifier, but it replaces any remaining temp HP from the previous turn. If you had 3 temp HP left and gain 4, you now have 4, not 7."
      },
      {
        question: "Can Heroism's temp HP exceed the target's hit point maximum?",
        answer: "Temp HP effectively adds to your current HP pool but doesn't actually increase your maximum. You can have temp HP even when at full health - it's like an extra buffer that gets used first."
      },
      {
        question: "Does the frightened immunity remove an existing frightened condition?",
        answer: "Yes! Being immune to a condition means you can't have that condition. If you're frightened and then become immune via Heroism, the frightened condition immediately ends."
      },
      {
        question: "Is Heroism or Aid better for pre-combat buffing?",
        answer: "They serve different purposes! Aid lasts 8 hours (no concentration) and gives a one-time HP boost. Heroism requires concentration but gives ongoing temp HP and frightened immunity. Use Aid for exploration, Heroism for specific dangerous fights."
      },
      {
        question: "Can I cast Heroism on multiple targets?",
        answer: "At base level, it's touch range and one target. But at higher levels, you can target one additional creature per slot level above 1st. At 3rd level, you could buff 3 allies with frightened immunity and temp HP."
      }
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
    faq: [
      {
        question: "Can Mending repair a broken magic item's magical properties?",
        answer: "No. Mending can repair the physical structure of a magic item (fixing a cracked staff, mending a torn cloak), but it cannot restore lost magical properties. A destroyed magic item loses its magic permanently."
      },
      {
        question: "Can I use Mending on a warforged or other construct PC?",
        answer: "RAW, Mending repairs objects, not creatures. Warforged are creatures, not objects. However, many DMs allow Mending to provide minor healing (like 1 HP) to constructs as a house rule, since normal healing spells don't work on them."
      },
      {
        question: "Does Mending work on broken bones or wounds?",
        answer: "No, Mending only repairs objects. Living tissue is not an object - you need actual healing spells for injuries. The spell explicitly mentions things like 'broken chain link' and 'torn cloak,' not body parts."
      },
      {
        question: "Can I Mend something that's been disintegrated?",
        answer: "No. Mending requires you to touch the break or tear - both pieces must exist. Disintegrate turns things to dust, destroying them entirely. There's nothing left to mend together."
      },
      {
        question: "How many castings does it take to repair a fully broken sword?",
        answer: "If broken into two pieces with a break under 1 foot, one casting. If shattered into many pieces, you'd need multiple castings - one per break. The DM decides how many breaks exist based on the damage."
      }
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
    faq: [
      {
        question: "Does Revivify work if the creature was beheaded or dismembered?",
        answer: "No. The spell explicitly can't restore missing body parts. If someone was decapitated or lost their heart, Revivify won't work - you'd need Resurrection or True Resurrection, which can restore missing parts."
      },
      {
        question: "What exactly counts as 'dying' for the 1-minute time limit?",
        answer: "The creature must have died within the last minute (10 rounds of combat). The timer starts when they actually die (fail 3 death saves or take massive damage), not when they fell to 0 HP."
      },
      {
        question: "Can I Revivify someone who died of old age?",
        answer: "No, the spell explicitly cannot return to life a creature that died of old age. This represents the natural end of a lifespan that even magic respects (though Wish or True Resurrection might work)."
      },
      {
        question: "Does Revivify remove negative conditions the creature had when they died?",
        answer: "No. Unlike higher-level resurrection spells, Revivify brings you back with 1 HP and no condition removal. If you were poisoned when you died, you're still poisoned when you come back."
      },
      {
        question: "Can I use Revivify on an undead creature that was 'killed'?",
        answer: "This is debated! An undead creature that's reduced to 0 HP is destroyed, not 'dead' in the traditional sense. Most DMs rule Revivify doesn't work on undead since they were already dead - they need different magic."
      }
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
    faq: [
      {
        question: "Does casting a healing spell on an enemy break Sanctuary?",
        answer: "No! Sanctuary only ends if you make an attack or cast a spell that 'affects an enemy.' Healing spells target allies, so casting Cure Wounds on your downed fighter doesn't end Sanctuary."
      },
      {
        question: "What happens if an enemy fails the Sanctuary save but has no other targets?",
        answer: "They lose the attack or spell. The creature must choose a new target or lose the attack/spell entirely. If there's no valid alternative target, the attack is simply wasted."
      },
      {
        question: "Does Sanctuary protect against area of effect spells like Fireball?",
        answer: "No. The spell explicitly states it doesn't protect from area effects. Fireball doesn't target you specifically - it targets a point in space. Sanctuary only forces saves when you're directly targeted."
      },
      {
        question: "Can I cast Sanctuary on myself?",
        answer: "Yes! Many clerics do this to safely move around the battlefield healing allies. As long as you only cast beneficial spells and don't attack, Sanctuary stays up and enemies must save to target you."
      },
      {
        question: "Does dealing damage with Spirit Guardians break Sanctuary?",
        answer: "Yes. Spirit Guardians affects enemies (deals damage), so casting it or having it active when enemies enter the area counts as affecting an enemy, ending Sanctuary. Cast Spirit Guardians before Sanctuary, and it still ends Sanctuary when it damages anyone."
      }
    ],
    category: "support-healing",
    searchVolume: 10040
  },
  {
    slug: "mass-healing-word-5e",
    name: "Mass Healing Word",
    level: "3rd",
    school: "Evocation",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.",
    commonMistakes: [
      "Forgetting it's a bonus action - you can still cast a cantrip",
      "Not maximizing the 6-target potential",
      "Forgetting to add spellcasting modifier to each target's healing",
      "Using it when single-target healing would be more efficient"
    ],
    dmTips: [
      "Excellent for getting multiple downed allies back into the fight",
      "The bonus action economy makes this incredible value",
      "Best used when multiple allies need healing, not just one",
      "Can turn the tide of a losing battle by restoring the whole party at once"
    ],
    faq: [
      {
        question: "Can I cast Mass Healing Word and another spell on the same turn?",
        answer: "Only a cantrip! Since Mass Healing Word is a bonus action spell, you're limited to cantrips for your action on that turn. You can't cast Mass Healing Word and then Guiding Bolt."
      },
      {
        question: "Does the spellcasting modifier add to each target or just once total?",
        answer: "Each target! Every creature you target heals 1d4 + your spellcasting ability modifier. With 6 targets and a +5 modifier, that's 6d4 + 30 total healing across the party."
      },
      {
        question: "Is Mass Healing Word or Mass Cure Wounds better?",
        answer: "Different uses! Mass Healing Word is a bonus action with less healing (1d4 each). Mass Cure Wounds is an action with more healing (3d8 each). Use Mass Healing Word in combat to maintain action economy; Mass Cure Wounds when healing is the priority."
      },
      {
        question: "Do all targets need to be within 60 feet of me, or each other?",
        answer: "Within 60 feet of YOU. The targets don't need to be near each other at all. You could heal one ally 10 feet away and another 55 feet away in opposite directions."
      },
      {
        question: "Can I include myself as one of the six targets?",
        answer: "Yes! You can see yourself and you're within range. Mass Healing Word is great when you and multiple allies are all wounded - heal the whole group including yourself with one bonus action."
      }
    ],
    category: "support-healing",
    searchVolume: 7200
  },
  {
    slug: "prayer-of-healing-5e",
    name: "Prayer of Healing",
    level: "2nd",
    school: "Evocation",
    castingTime: "10 minutes",
    range: "30 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting the 10-minute casting time - not for combat",
      "Not using it during short rests for efficient healing",
      "Trying to cast it in dangerous areas without protection",
      "Not maximizing the 6-target potential"
    ],
    dmTips: [
      "Perfect for post-combat healing or during short rests",
      "Much more efficient than multiple castings of Cure Wounds",
      "The 10-minute casting means it's vulnerable to interruption",
      "Great way to restore the party between encounters"
    ],
    faq: [
      {
        question: "Can Prayer of Healing be used during combat?",
        answer: "Technically yes, but the 10-minute casting time makes it impractical. You'd need 100 consecutive rounds of combat without losing concentration or being interrupted. It's designed for out-of-combat use."
      },
      {
        question: "Does the healing roll once and apply to all targets, or separately?",
        answer: "RAW is unclear, but most DMs roll once and apply that result to all targets. This is faster and maintains the 'wave of healing' flavor. Some tables prefer individual rolls for variety."
      },
      {
        question: "Can I cast Prayer of Healing during a short rest?",
        answer: "Yes! This is the intended use. The 10-minute casting time fits within a short rest, and it's much more efficient than individual Cure Wounds casts. It conserves spell slots while topping everyone off."
      },
      {
        question: "Is Prayer of Healing or Healing Spirit more efficient?",
        answer: "Prayer of Healing heals more total HP in less time (2d8+mod × 6 targets in 10 minutes). Healing Spirit heals over time but requires concentration and movement. Prayer of Healing is usually more efficient for pure HP restoration."
      },
      {
        question: "Do targets need to remain within 30 feet for the full casting time?",
        answer: "Yes! Targets must be within range when you complete the spell. If someone walks away during the 10-minute casting, they won't receive healing. Keep the party together during the cast."
      }
    ],
    category: "support-healing",
    searchVolume: 6800
  },
  {
    slug: "healing-spirit-5e",
    name: "Healing Spirit",
    level: "2nd",
    school: "Conjuration",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Druid", "Ranger"],
    description: "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice). Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears. As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting the spirit has a limited number of heals",
      "Not moving the spirit to maximize healing opportunities",
      "Forgetting allies need to enter or start their turn in the space to be healed",
      "Not tracking how many times the spirit has healed"
    ],
    dmTips: [
      "Extremely efficient healing over time",
      "Can be used in or out of combat",
      "Moving the spirit is a bonus action, allowing tactical positioning",
      "Total healing can be substantial (10d6 + with a +5 modifier at 2nd level)"
    ],
    faq: [
      {
        question: "How many times can Healing Spirit heal total?",
        answer: "1 + your spellcasting ability modifier times (minimum twice). With a +5 modifier, that's 6 heals total. This limit was added in errata to prevent the 'conga line' exploit where parties would chain-walk through it."
      },
      {
        question: "Can multiple creatures be healed in one round by Healing Spirit?",
        answer: "Yes! If multiple creatures enter the spirit's space or start their turn there on different turns in the round, each can be healed (counting against the total heal limit). This is great for group healing."
      },
      {
        question: "Can I heal the same creature multiple times per round?",
        answer: "No. A creature can only be healed when it 'moves into the spirit's space for the first time on a turn OR starts its turn there.' That's once per turn per creature, not multiple times from movement tricks."
      },
      {
        question: "Do I choose when the spirit heals, or is it automatic?",
        answer: "You choose! 'You CAN cause the spirit to restore 1d6 hit points.' This is optional (no action required), so you control whether each healing happens - useful for conserving heals for those who need them most."
      },
      {
        question: "Was Healing Spirit nerfed? Why?",
        answer: "Yes, via errata. Originally, it had no heal limit, letting parties 'conga line' through it repeatedly out of combat for unlimited healing. The heal limit (1 + spellcasting mod) was added to balance it while keeping it useful."
      }
    ],
    category: "support-healing",
    searchVolume: 6400
  },
  {
    slug: "lesser-restoration-5e",
    name: "Lesser Restoration",
    level: "2nd",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    description: "You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it doesn't cure exhaustion or petrification",
      "Not using it to remove paralysis or blindness in combat",
      "Thinking it restores hit points - it only removes conditions",
      "Forgetting you can choose disease OR condition"
    ],
    dmTips: [
      "Essential for removing debilitating conditions",
      "Paralysis removal can save allies from certain death",
      "Poison condition removal is more common than people realize",
      "Keep diseases interesting by making some require multiple castings or higher-level magic"
    ],
    faq: [
      {
        question: "Can Lesser Restoration cure exhaustion?",
        answer: "No! Lesser Restoration only removes blinded, deafened, paralyzed, or poisoned conditions, plus diseases. Exhaustion requires Greater Restoration (and even that only removes one level per casting)."
      },
      {
        question: "Does Lesser Restoration end ongoing poison damage?",
        answer: "It ends the poisoned CONDITION (disadvantage on attacks and ability checks), but doesn't necessarily stop ongoing poison damage. Some effects deal damage separately from the condition - check the specific poison's description."
      },
      {
        question: "Can Lesser Restoration cure magical diseases?",
        answer: "Usually yes! The spell doesn't distinguish between magical and mundane diseases. However, some powerful magical afflictions (like lycanthropy) specify they require Remove Curse or Greater Restoration instead."
      },
      {
        question: "What's the difference between Lesser and Greater Restoration?",
        answer: "Lesser Restoration (2nd level) handles: blinded, deafened, paralyzed, poisoned, and diseases. Greater Restoration (5th level) handles: exhaustion, charmed, petrified, curses, ability score reduction, and HP maximum reduction."
      },
      {
        question: "Can I cast Lesser Restoration on myself while paralyzed?",
        answer: "No. Paralysis incapacitates you and prevents you from speaking or moving. Since Lesser Restoration requires verbal and somatic components, you can't cast it while paralyzed - an ally must help you."
      }
    ],
    category: "support-healing",
    searchVolume: 9400
  },
  {
    slug: "greater-restoration-5e",
    name: "Greater Restoration",
    level: "5th",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (diamond dust worth at least 100 gp, which the spell consumes)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid"],
    description: "You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target: One effect that charmed or petrified the target, one curse, including the target's attunement to a cursed magic item, any reduction to one of the target's ability scores, or one effect reducing the target's hit point maximum.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the 100 gp material component that is consumed",
      "Thinking it removes all exhaustion levels - only one level per casting",
      "Not using it to remove cursed item attunement",
      "Forgetting it can restore ability score reductions"
    ],
    dmTips: [
      "The go-to spell for removing serious conditions and curses",
      "The material cost makes it significant but not prohibitive",
      "Can remove petrification, making basilisk encounters less deadly",
      "Consider whether curses are narrative-important before allowing easy removal"
    ],
    faq: [
      {
        question: "Can Greater Restoration cure all levels of exhaustion at once?",
        answer: "No! Greater Restoration only reduces exhaustion by ONE level per casting. A character with 5 levels of exhaustion would need 5 separate castings (and 500 gp in diamond dust) to fully recover."
      },
      {
        question: "Does Greater Restoration end attunement to a cursed item?",
        answer: "Yes! This is one of its explicit uses. Once the attunement ends, the creature is no longer compelled to keep the item and can get rid of it. However, the item itself remains cursed."
      },
      {
        question: "Can Greater Restoration cure madness effects?",
        answer: "Some DMs allow it for certain madness effects, treating them as a 'charm' effect or similar. RAW, madness from sources like demons or certain spells isn't explicitly listed but often falls under 'debilitating effect' interpretation."
      },
      {
        question: "What's the 100 gp diamond dust - can I reuse it?",
        answer: "No, the spell consumes the material component. Each casting costs 100 gp in diamond dust. Stock up if you expect to need it regularly! The cost is the main balancing factor for this powerful spell."
      },
      {
        question: "Does Greater Restoration end Feeblemind?",
        answer: "Yes! Feeblemind reduces Intelligence and Charisma scores, and Greater Restoration can end 'any reduction to one of the target's ability scores.' This is one of the few ways to cure Feeblemind before the 30-day save."
      }
    ],
    category: "support-healing",
    searchVolume: 8100
  },
  {
    slug: "mass-cure-wounds-5e",
    name: "Mass Cure Wounds",
    level: "5th",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid"],
    description: "A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.",
    commonMistakes: [
      "Forgetting it requires an action, not bonus action like Mass Healing Word",
      "Not positioning to catch all wounded allies in the 30-foot radius",
      "Forgetting to add spellcasting modifier to each target",
      "Using it when only one or two allies need healing"
    ],
    dmTips: [
      "Excellent for emergency party-wide healing",
      "Best used when multiple allies are significantly wounded",
      "The 30-foot radius sphere allows good positioning flexibility",
      "Average healing is around 17 per creature at 5th level, which is solid"
    ],
    faq: [
      {
        question: "Can enemies be caught in the Mass Cure Wounds radius?",
        answer: "You CHOOSE up to six creatures in the area - enemies won't be healed unless you want them to be. You have complete control over who benefits from the healing wave."
      },
      {
        question: "Does Mass Cure Wounds require a clear path to targets?",
        answer: "The spell creates a point of origin, and targets must be in the 30-foot radius sphere. RAW doesn't require line of effect to each target, but some DMs rule that total cover blocks healing."
      },
      {
        question: "Is Mass Cure Wounds or Mass Healing Word better?",
        answer: "Different tools! Mass Cure Wounds (action, 3d8+mod) heals significantly more. Mass Healing Word (bonus action, 1d4+mod) maintains action economy. Use Mass Cure Wounds when healing is the priority, Mass Healing Word when you need to do something else."
      },
      {
        question: "Can I target fewer than 6 creatures if I want?",
        answer: "Yes! 'Up to six creatures' means you can target 1, 3, 5, or any number up to 6. There's no requirement to maximize targets - sometimes you only need to heal a few people."
      },
      {
        question: "Does the 30-foot radius sphere go through walls?",
        answer: "A sphere spreads around corners but typically doesn't go through total cover like solid walls. The point you choose must be within 60 feet of you, and targets must be within 30 feet of that point with no total cover."
      }
    ],
    category: "support-healing",
    searchVolume: 6900
  },
  {
    slug: "heal-5e",
    name: "Heal",
    level: "6th",
    school: "Evocation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Druid"],
    description: "Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.",
    commonMistakes: [
      "Forgetting it removes blindness, deafness, and diseases in addition to healing",
      "Not using it on downed allies - 70 HP is usually more than their max",
      "Thinking it requires touch - it has 60-foot range",
      "Not considering the additional condition removal when choosing targets"
    ],
    dmTips: [
      "One of the best pure healing spells in the game",
      "The flat 70 HP means it's reliable and doesn't require rolling",
      "Condition removal is a significant bonus",
      "Great for emergency healing when an ally is in critical danger"
    ],
    faq: [
      {
        question: "Why does Heal have a flat number instead of dice?",
        answer: "The flat 70 HP ensures reliability - no bad rolls when you absolutely need the healing. At 6th level, this is more than most martials' full HP. The consistency makes it perfect for emergencies."
      },
      {
        question: "Does Heal's condition removal happen before or after the HP restoration?",
        answer: "They happen simultaneously as part of the same effect. This means a blinded creature is cured and healed in one action - you don't have to choose between healing and condition removal."
      },
      {
        question: "Can Heal remove blindness/deafness caused by the Blindness/Deafness spell?",
        answer: "Yes! Heal ends blindness and deafness regardless of source. This includes the Blindness/Deafness spell, monster abilities, or any other effect causing those conditions."
      },
      {
        question: "Is Heal better than multiple lower-level healing spells?",
        answer: "For single-target healing, often yes! 70 HP beats almost any combination of lower-level slots. However, if multiple allies need healing, Mass Cure Wounds or multiple Healing Words might be more efficient overall."
      },
      {
        question: "Does the 60-foot range require line of sight?",
        answer: "Yes! 'A creature that you can see within range' requires both range AND sight. You can't Heal someone around a corner or through fog/darkness unless you have ways to see them."
      }
    ],
    category: "support-healing",
    searchVolume: 11200
  },
  {
    slug: "death-ward-5e",
    name: "Death Ward",
    level: "4th",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "8 hours",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "You touch a creature and grant it a measure of protection from death. The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends. If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it only works once and then ends",
      "Not pre-casting it before dangerous encounters",
      "Thinking it prevents damage - it just prevents dropping below 1 HP once",
      "Not realizing it protects against instant death effects like Power Word Kill"
    ],
    dmTips: [
      "Excellent insurance policy for dangerous encounters",
      "The 8-hour duration means it can be cast well before danger",
      "Protection from instant death effects is extremely valuable at high levels",
      "Consider using this on important NPCs in dangerous situations"
    ],
    faq: [
      {
        question: "Does Death Ward protect against Power Word Kill?",
        answer: "Yes! Power Word Kill instantly kills a creature with 100 HP or less without dealing damage. Death Ward explicitly negates 'an effect that would kill it instantaneously without dealing damage' - this is exactly what it's for."
      },
      {
        question: "What happens if Death Ward triggers during massive damage?",
        answer: "If damage would drop you to 0 HP, Death Ward kicks in and you stay at 1 HP instead. Any excess damage beyond what would drop you to 0 is negated - you don't take the leftover damage."
      },
      {
        question: "Can Death Ward trigger multiple times?",
        answer: "No, the spell ends after triggering once. 'The first time the target would drop to 0 hit points... the spell ends.' You need a new casting for additional protection."
      },
      {
        question: "Does Death Ward work against Disintegrate?",
        answer: "Partially. Disintegrate deals damage AND kills if it drops you to 0 HP. Death Ward triggers, leaving you at 1 HP instead of 0 - so you survive and aren't disintegrated, since you never actually reached 0 HP."
      },
      {
        question: "Can I have multiple Death Wards active?",
        answer: "RAW, you could have multiple Death Wards from different casters (not concentration, doesn't say only one). However, only one would trigger per death-prevention event, and then you'd need to track which spell ended."
      }
    ],
    category: "support-healing",
    searchVolume: 7600
  },
  {
    slug: "shield-of-faith-5e",
    name: "Shield of Faith",
    level: "1st",
    school: "Abjuration",
    castingTime: "1 bonus action",
    range: "60 feet",
    components: "V, S, M (a small parchment with a bit of holy text written on it)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it requires concentration",
      "Not using it pre-combat on the party's tank",
      "Underestimating how powerful +2 AC is in 5e",
      "Not tracking the 10-minute duration in exploration"
    ],
    dmTips: [
      "Simple but effective defensive buff",
      "The bonus action casting makes it easy to use",
      "+2 AC is very significant in 5e's bounded accuracy system",
      "Great for protecting the party's front line fighter"
    ],
    faq: [
      {
        question: "Does Shield of Faith stack with the Shield spell?",
        answer: "Yes! Shield of Faith (+2 AC) is a sustained buff, while Shield (+5 AC) is a reaction. They stack perfectly - a character can have both active simultaneously for +7 total AC against one attack."
      },
      {
        question: "Can I cast Shield of Faith on myself?",
        answer: "Yes! The spell targets 'a creature of your choice within range' and you're within range of yourself. Clerics often self-cast this when they expect to be targeted or need to maintain concentration on themselves."
      },
      {
        question: "Does the +2 AC affect all types of attacks?",
        answer: "Yes! AC affects any attack roll made against you - melee, ranged, spell attacks, everything. The +2 bonus applies equally to all attacks for the duration."
      },
      {
        question: "Is Shield of Faith or Bless better for a party?",
        answer: "Different purposes! Shield of Faith gives +2 AC to ONE creature. Bless gives +1d4 (average +2.5) to attacks AND saves for THREE creatures. Bless is usually better for group buffing, Shield of Faith for protecting one key target."
      },
      {
        question: "What happens if I lose concentration on Shield of Faith?",
        answer: "The shimmering field disappears and the +2 AC bonus immediately ends. Your target's AC returns to normal. This can happen from taking damage and failing a CON save, casting another concentration spell, or being incapacitated."
      }
    ],
    category: "support-healing",
    searchVolume: 9800
  },
  {
    slug: "warding-bond-5e",
    name: "Warding Bond",
    level: "2nd",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration)",
    duration: "1 hour",
    concentration: false,
    ritual: false,
    classes: ["Cleric"],
    description: "This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage. The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting you take the same damage as the target",
      "Not considering that resistance halves the target's damage but you take full damage",
      "Forgetting the 60-foot range limitation",
      "Not having the 50 gp platinum rings available"
    ],
    dmTips: [
      "High risk, high reward protection spell",
      "Best used on squishy allies who don't take much damage",
      "You effectively take more total damage than if the target didn't have resistance",
      "Can be deadly for the caster if used carelessly"
    ],
    faq: [
      {
        question: "How does the damage sharing in Warding Bond actually work?",
        answer: "The target has resistance, taking half damage. But you take the SAME amount they take (the halved amount), not the original. So if they'd take 20 damage, they take 10, and you take 10. Total: 20 damage split between you."
      },
      {
        question: "Wait, doesn't that mean we take MORE total damage than without the spell?",
        answer: "No, it's the same total! Without Warding Bond: target takes 20. With Warding Bond: target takes 10, you take 10, total = 20. The difference is who takes the damage and the +1 AC/saves bonus."
      },
      {
        question: "Does Warding Bond require concentration?",
        answer: "No! It's not a concentration spell. However, it does require you to stay within 60 feet of the target. If you separate by more than 60 feet, the spell ends. Also ends if either creature drops to 0 HP."
      },
      {
        question: "Do I need to keep the platinum rings after casting?",
        answer: "Yes! Both you AND the target must wear the rings for the duration. The rings aren't consumed (unlike some material components), but if either ring is removed, the spell ends."
      },
      {
        question: "Can the damage I take from Warding Bond be reduced or resisted?",
        answer: "Yes! The damage you take is just normal damage - if you have resistance to that damage type, you'd take half of what gets passed to you. A cleric with fire resistance takes only 5 damage from their bonded ally's 10 fire damage."
      }
    ],
    category: "support-healing",
    searchVolume: 6200
  },
  {
    slug: "beacon-of-hope-5e",
    name: "Beacon of Hope",
    level: "3rd",
    school: "Abjuration",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Cleric"],
    description: "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the maximum healing applies to all healing, including potions",
      "Not using it before casting healing spells for maximum efficiency",
      "Forgetting the advantage on death saving throws",
      "Not realizing you can choose any number of creatures"
    ],
    dmTips: [
      "Excellent setup spell before a tough fight",
      "Maximized healing makes all healing spells incredibly efficient",
      "Advantage on death saves can save multiple party members",
      "Pairs wonderfully with Prayer of Healing or Mass Cure Wounds"
    ],
    faq: [
      {
        question: "Does Beacon of Hope maximize healing from potions?",
        answer: "Yes! Potions of Healing involve regaining hit points, so the maximum healing clause applies. A Potion of Healing (2d4+2) becomes a guaranteed 10 HP, and a Greater Healing Potion (4d4+4) becomes 20 HP."
      },
      {
        question: "Does the max healing apply to self-healing abilities like Second Wind?",
        answer: "Yes! Second Wind restores 1d10 + fighter level HP, so it's maximized to 10 + level. Any effect that causes the target to 'regain hit points' gets maximized under Beacon of Hope."
      },
      {
        question: "Can I target enemies with Beacon of Hope?",
        answer: "Yes, you 'choose any number of creatures within range.' You could theoretically buff enemies, but why would you? The spell has no negative effects to impose on foes - it's pure support."
      },
      {
        question: "Does advantage on death saves stack with other sources?",
        answer: "You can't stack advantage - having it from multiple sources still gives you one advantage. However, Beacon of Hope affects ALL your targets, so the whole party gets this protection rather than one person."
      },
      {
        question: "What's the best spell to combo with Beacon of Hope?",
        answer: "Mass Cure Wounds! At 5th level, it normally heals 3d8+mod (avg 17). With Beacon of Hope, it heals 24+mod (guaranteed 29 with +5 mod). That's 70% more healing on a multi-target spell!"
      }
    ],
    category: "support-healing",
    searchVolume: 6600
  },
  {
    slug: "aura-of-vitality-5e",
    name: "Aura of Vitality",
    level: "3rd",
    school: "Evocation",
    castingTime: "1 action",
    range: "Self (30-foot radius)",
    components: "V",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting you can heal every turn with a bonus action",
      "Not using it out of combat for maximum efficiency",
      "Forgetting the aura moves with you",
      "Not maximizing the 10 rounds of potential healing"
    ],
    dmTips: [
      "Potentially heal 20d6 total over the duration (average 70 HP)",
      "Excellent for sustained healing during or after combat",
      "The bonus action economy means you can still take normal actions",
      "One of the most efficient healing spells at this level"
    ],
    faq: [
      {
        question: "Can I heal a different creature each turn with Aura of Vitality?",
        answer: "Yes! Each turn you use your bonus action to heal 'one creature in the aura.' You can choose a different creature each time - spreading healing across the whole party over the duration."
      },
      {
        question: "What's the maximum total healing from Aura of Vitality?",
        answer: "Over 10 rounds (1 minute), you can heal 10 times for 2d6 each = 20d6 total, averaging 70 HP. This is incredibly efficient for a 3rd-level spell, especially distributed across multiple allies."
      },
      {
        question: "Does the aura move with me automatically?",
        answer: "Yes! The aura 'moves with you, centered on you.' You don't need to use actions to maintain position - just move normally and the 30-foot radius moves with you, keeping allies in range."
      },
      {
        question: "Can I use Aura of Vitality out of combat?",
        answer: "Absolutely! Unlike some spells, there's no combat restriction. Cast it after a fight and spend 1 minute healing the party 2d6 at a time. It's extremely efficient for post-combat restoration."
      },
      {
        question: "Does Aura of Vitality work with Life Domain's Disciple of Life?",
        answer: "Yes! Each 2d6 healing triggers Disciple of Life, adding 2 + 3 (spell level) = 5 extra HP per heal. That's 2d6+5 per bonus action, totaling 20d6+50 over the full duration!"
      }
    ],
    category: "support-healing",
    searchVolume: 5800
  },
  {
    slug: "heroes-feast-5e",
    name: "Heroes' Feast",
    level: "6th",
    school: "Conjuration",
    castingTime: "10 minutes",
    range: "30 feet",
    components: "V, S, M (a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Druid"],
    description: "You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consume and disappears at the end of that time, and the beneficial effects don't set in until this hour is over. Up to twelve creatures can partake of the feast. A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the 1-hour consumption time",
      "Not using it before big encounters due to preparation time",
      "Forgetting the 1,000 gp cost",
      "Not tracking the 24-hour duration of benefits"
    ],
    dmTips: [
      "Perfect pre-boss fight preparation spell",
      "The immunity to frightened is valuable against dragons and other fear effects",
      "The HP boost and advantages make the whole party more effective",
      "The 1,000 gp cost makes this feel special and important"
    ],
    faq: [
      {
        question: "Can we eat Heroes' Feast during a short rest?",
        answer: "Yes, with planning! The feast takes 1 hour to consume, which matches short rest duration. However, benefits don't kick in until the hour ends, so you can't use the HP boost during that rest. Cast it, eat during rest, get benefits after."
      },
      {
        question: "Does the HP maximum increase stack with Aid?",
        answer: "Yes! Aid increases max HP by 5+ and Heroes' Feast increases it by 2d10. They're separate effects from different spells. A character can benefit from both for a significant HP boost before a major battle."
      },
      {
        question: "What happens to the extra HP when Heroes' Feast ends after 24 hours?",
        answer: "Like Aid, your hit point maximum returns to normal. If your current HP exceeds the new (lower) maximum, your current HP drops to match. The bonus HP simply expires with the spell."
      },
      {
        question: "Can I cast Heroes' Feast and then take a long rest for the benefits?",
        answer: "You can, but the 24-hour duration starts when you finish eating (after 1 hour). If you long rest 8 hours, you'll only have 15 hours of benefits left. Better to cast it the morning of the big fight."
      },
      {
        question: "Is the 1,000 gp bowl consumed or reusable?",
        answer: "The spell CONSUMES the gem-encrusted bowl. Every casting costs 1,000 gp. This is intentional balance - Heroes' Feast is extremely powerful, so the cost prevents casual use. Save it for truly important battles."
      }
    ],
    category: "support-healing",
    searchVolume: 5400
  }
];
