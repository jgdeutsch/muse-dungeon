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
    category: "support-healing",
    searchVolume: 5400
  }
];
