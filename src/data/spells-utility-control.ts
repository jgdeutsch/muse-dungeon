import { FAQItem } from "../components/FAQ";

export const utilityControlSpells: {
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
  category: "utility-control";
  searchVolume: number;
  aliases?: string[];
}[] = [
  {
    slug: "banishment-5e",
    name: "Banishment",
    level: "4th",
    school: "Abjuration",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (an item distasteful to the target)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Paladin", "Sorcerer", "Warlock", "Wizard"],
    description: "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished. If the target is native to a different plane, it is sent home and doesn't return if the spell lasts the full duration. Otherwise, the creature is sent to a harmless demiplane and returns when the spell ends.",
    damage: null,
    savingThrow: "Charisma",
    higherLevels: "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
    commonMistakes: [
      "Forgetting that banished creatures return to the same space (or nearest unoccupied space) when concentration ends",
      "Not tracking that native creatures are only permanently banished if concentration lasts the full minute",
      "Assuming extraplanar creatures can save again to return - they don't, they're gone for good if concentration lasts"
    ],
    dmTips: [
      "Great for removing a powerful enemy from combat temporarily or permanently if they're extraplanar",
      "Describe the demiplane flavor - gray void, misty realm, etc. to add atmosphere",
      "Remember this can be used on possessed creatures to separate them from possessing entities",
      "Consider having banished allies react negatively to being sent away without consent"
    ],
    faq: [
      {
        question: "What happens to extraplanar creatures when Banishment lasts the full minute?",
        answer: "They're permanently sent back to their home plane and don't return. This makes Banishment incredibly powerful against demons, devils, fey, elementals, and other creatures not native to the Material Plane."
      },
      {
        question: "Where do native creatures go when banished?",
        answer: "To a harmless demiplane where they're <a href=\"/rules/conditions/incapacitated-condition-5e/\">incapacitated</a>. When the spell ends (concentration breaks or 1 minute passes), they return to the space they left or nearest unoccupied space. They're not permanently removed."
      },
      {
        question: "Does the target get multiple saving throws?",
        answer: "No. One save when the spell is cast, and that's it. If they fail, they're banished for the duration. This is unlike many concentration spells that allow repeated saves."
      },
      {
        question: "Can you Banish willing creatures?",
        answer: "RAW, the target must make a Charisma saving throw. A willing creature can choose to fail the save, allowing tactical use to protect allies (send them to safety while you fight)."
      },
      {
        question: "What's the 'distasteful item' component?",
        answer: "Something the target finds repugnant - holy water for fiends, cold iron for fey, a bit of earth from its home plane. DMs often handwave this, but it can add flavor to preparation."
      }
    ],
    category: "utility-control",
    searchVolume: 6020
  },
  {
    slug: "call-lightning-5e",
    name: "Call Lightning",
    level: "3rd",
    school: "Conjuration",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Druid"],
    description: "A storm cloud appears in a 60-foot-radius cylinder centered on a point you can see 100 feet directly above you. When you cast the spell, choose a point beneath the cloud. A bolt of lightning flashes down dealing 3d10 lightning damage (Dex save for half). On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same or different point. If you are outdoors in stormy conditions, the damage increases by 1d10.",
    damage: "3d10 lightning (4d10 in storm)",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.",
    commonMistakes: [
      "Forgetting you need to use your action each turn to call down lightning - it's not automatic",
      "Not applying the bonus damage die when outdoors in a storm",
      "Thinking the cloud moves with you - it stays in place once created",
      "Forgetting that you choose the point beneath the cloud, not the cloud's location on later turns"
    ],
    dmTips: [
      "This spell is excellent sustained damage for druids in outdoor encounters",
      "The visual of repeated lightning strikes makes combat cinematic",
      "Consider whether the environment counts as 'stormy' - light rain probably doesn't qualify",
      "Remember enemies can ready actions to dodge when they see the caster targeting"
    ],
    faq: [
      {
        question: "Does Call Lightning deal damage when first cast?",
        answer: "Yes! When you cast the spell, you immediately call down one bolt of lightning as part of the casting. Then on subsequent turns, you use your action to call additional bolts."
      },
      {
        question: "Can Call Lightning be used indoors?",
        answer: "Usually no. The spell creates a storm cloud 100 feet above you, requiring at least 100 feet of clearance. In most dungeons or buildings, you can't form the cloud. Some DMs allow it in very large caverns."
      },
      {
        question: "What qualifies as 'stormy conditions' for the bonus damage?",
        answer: "Rain, thunderstorm, hurricane, or similar weather. Light drizzle probably doesn't count. The DM decides, but active storms with existing lightning clearly qualify. This makes the spell excellent for druids who can control weather."
      },
      {
        question: "Can the storm cloud be moved after casting?",
        answer: "No. The cloud stays where you create it. You choose where to call lightning within the cloud's area each turn, but the cloud itself is stationary. Plan your positioning accordingly."
      },
      {
        question: "How does Call Lightning's action economy work?",
        answer: "Initial cast: 1 action to create cloud and call first bolt. Each subsequent turn: 1 action to call another bolt. This means you're committed to using your action for lightning damage the entire duration (up to 10 minutes!)."
      }
    ],
    category: "utility-control",
    searchVolume: 9240
  },
  {
    slug: "catapult-5e",
    name: "Catapult",
    level: "1st",
    school: "Transmutation",
    castingTime: "1 action",
    range: "60 feet",
    components: "S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. The object and creature both take 3d8 bludgeoning damage.",
    damage: "3d8 bludgeoning",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects increases by 5 pounds and the damage increases by 1d8 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting that both the object and target take damage, potentially destroying the item",
      "Not enforcing the 1-5 pound weight limit - a sword is fine, a shield is too heavy",
      "Allowing objects being worn or carried to be catapulted",
      "Thinking the object can curve or change direction - it flies in a straight line only"
    ],
    dmTips: [
      "Creative players will try to catapult alchemist's fire, holy water, or caltrops - allow it for fun",
      "The spell is great for environmental storytelling - describe what objects are available",
      "Consider what happens when players catapult fragile objects through windows or at alarm systems",
      "This spell rewards tactical thinking about positioning and available ammunition"
    ],
    faq: [
      {
        question: "What objects can be used with Catapult?",
        answer: "Any object weighing 1-5 pounds that isn't being worn or carried. Common choices: rocks, daggers, flasks, books, bottles, skulls. Weight limit increases by 5 lbs per spell level above 1st."
      },
      {
        question: "Can Catapult launch potions, alchemist's fire, or similar items?",
        answer: "Yes! When the item strikes a creature or surface, both take 3d8 damage. A flask would break, releasing its contents. This allows creative use of consumables as projectile weapons."
      },
      {
        question: "Does the object continue past the target if they save?",
        answer: "Yes. If the Dex save succeeds, the object continues its 90-foot trajectory until it hits a solid surface or falls to the ground. You can potentially hit something behind the original target."
      },
      {
        question: "Can Catapult target an object in someone's space?",
        answer: "Yes, as long as the object isn't being worn or carried. A coin on the ground at someone's feet qualifies. However, you can't catapult items from someone's pockets or hands."
      },
      {
        question: "Does the launched object take damage too?",
        answer: "Yes! Both the object and creature take 3d8 bludgeoning damage. Fragile objects like glass bottles will likely shatter. This matters for items you want to recover after the spell."
      }
    ],
    category: "utility-control",
    searchVolume: 4900
  },
  {
    slug: "charm-person-5e",
    name: "Charm Person",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 hour",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
    description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, with advantage if you or your companions are fighting it. If it fails, it is <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    commonMistakes: [
      "Thinking <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> means mind control - it only makes them friendly, not obedient",
      "Forgetting the target knows it was charmed when the spell ends",
      "Not giving advantage on the save when the party is hostile or in combat",
      "Assuming charmed creatures will fight for you or endanger themselves"
    ],
    dmTips: [
      "<a href=\"/rules/conditions/charmed-condition-5e/\">Charmed</a> creatures are friendly but not stupid - they won't give away critical secrets immediately",
      "Describe the charm wearing off and the target realizing what happened for dramatic effect",
      "Remember that harmful actions from companions also break the spell",
      "This is great for social encounters but can trivialize some interactions if overused"
    ],
    faq: [
      {
        question: "Does Charm Person make the target obey commands?",
        answer: "No! A <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> creature regards you as a friendly acquaintance - like a casual friend. They won't obey orders, endanger themselves, give away secrets, or do anything they wouldn't do for a friendly stranger."
      },
      {
        question: "Does the target know they were charmed when it ends?",
        answer: "Yes. The spell explicitly states the creature knows it was <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> by you when the spell ends. This often creates enemies and can have social/political consequences."
      },
      {
        question: "Why does the target get advantage during combat?",
        answer: "If you or your companions are fighting the target, they get advantage on the save. This represents the hostility making it harder to form a friendly bond. Cast before combat starts for best results."
      },
      {
        question: "Does Charm Person work on non-humanoids?",
        answer: "No. Charm Person only works on humanoids. For beasts, use Animal Friendship. For any creature type, use Charm Monster (4th level). Always check creature type before casting."
      },
      {
        question: "Can I charm someone to get information?",
        answer: "Sort of. They'll be friendly and more willing to chat, but won't automatically reveal secrets or sensitive information. It helps with Persuasion checks but doesn't guarantee cooperation on risky topics."
      }
    ],
    category: "utility-control",
    searchVolume: 7320
  },
  {
    slug: "command-5e",
    name: "Command",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Paladin"],
    description: "You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, doesn't understand your language, or if your command is directly harmful to it. Common commands include Approach, Drop, Flee, Grovel, and Halt.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    commonMistakes: [
      "Giving multi-word or complex commands - it must be a single word",
      "Forgetting the creature must understand your language",
      "Trying commands that are directly harmful like 'Die' or 'Suicide' - these don't work",
      "Not realizing the effect only lasts until the end of the target's next turn"
    ],
    dmTips: [
      "Be flexible with creative one-word commands but enforce the spirit of the limitation",
      "Commands like 'Betray', 'Confess', or 'Surrender' can lead to great roleplay moments",
      "The short duration makes this spell tactically interesting without being overpowered",
      "Consider how NPCs might creatively interpret ambiguous commands"
    ],
    faq: [
      {
        question: "What one-word commands work with Command?",
        answer: "Common examples: Approach (move toward you), Drop (release held items), Flee (dash away), Grovel (fall <a href=\"/rules/conditions/prone-condition-5e/\">prone</a>, ends turn), Halt (stop moving, takes no actions). Creative options like 'Confess', 'Surrender', 'Sleep', or 'Strip' can work at DM discretion."
      },
      {
        question: "Why doesn't 'Die' work as a Command?",
        answer: "Command explicitly states it has no effect if the command is 'directly harmful to it.' Commands that would cause immediate death or obvious self-harm automatically fail. The target must be able to complete the command safely."
      },
      {
        question: "Does the target need to understand my language?",
        answer: "Yes. The spell has no effect if the target doesn't understand your language. This makes it ineffective against many beasts, aberrations, and creatures that only speak exotic languages you don't share."
      },
      {
        question: "How long does Command's effect last?",
        answer: "Only until the end of the target's next turn. They follow the command on their turn, then are free to act normally. This makes Command excellent for quick tactical advantages but not for extended control."
      },
      {
        question: "Can Command make someone attack their allies?",
        answer: "Potentially. A command like 'Attack' followed by pointing at their ally might work, though some DMs rule attacking allies as 'directly harmful to it' (harmful to its interests). Discuss interpretation with your DM."
      }
    ],
    category: "utility-control",
    searchVolume: 9330
  },
  {
    slug: "conjure-animals-5e",
    name: "Conjure Animals",
    level: "3rd",
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Druid", "Ranger"],
    description: "You summon fey spirits that take the form of beasts and appear in unoccupied spaces within range. Choose one of the following: one beast of CR 2 or lower, two beasts of CR 1 or lower, four beasts of CR 1/2 or lower, or eight beasts of CR 1/4 or lower. The beasts are friendly to you and your companions. Roll initiative for the summoned creatures as a group. They obey your verbal commands (no action required). Without commands, they defend themselves but take no other actions.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot.",
    commonMistakes: [
      "Players choosing specific animals - the DM chooses which beasts appear, fitting the environment",
      "Summoning animals that don't make sense for the location (sharks in a dungeon, etc.)",
      "Forgetting that commanding them requires verbal commands",
      "Not tracking that concentration breaks if you take damage"
    ],
    dmTips: [
      "To speed up play, have the player roll all attack/damage dice at once",
      "Consider limiting to 2-4 creatures maximum to keep combat moving",
      "Choose thematic animals - wolves in forests, giant spiders in caves, etc.",
      "This spell can slow combat significantly, so work with players to streamline their turns"
    ],
    faq: [
      {
        question: "Who chooses which animals are summoned?",
        answer: "RAW is debated. The spell says 'you summon fey spirits that take the form of beasts.' Sage Advice clarified the DM chooses the specific beasts. Many tables let the player choose within reason. Clarify with your DM before choosing this spell."
      },
      {
        question: "What's the most powerful option for Conjure Animals?",
        answer: "8 CR 1/4 beasts is often strongest due to action economy. Eight wolves get Pack Tactics and can knock enemies <a href=\"/rules/conditions/prone-condition-5e/\">prone</a>. Pixies (fey, not beasts) don't work. At higher levels, 16 or 32 wolves become devastating but slow gameplay."
      },
      {
        question: "How do you handle Conjure Animals without slowing combat?",
        answer: "Roll all attacks simultaneously, use average damage, group creatures' initiatives together, have stats pre-calculated, or limit summons to 4 creatures. Some DMs use swarm rules for large groups."
      },
      {
        question: "What happens to summoned animals when concentration ends?",
        answer: "They instantly disappear. They don't die (so no death throes or corpses to loot). If concentration is broken mid-combat, all summoned creatures vanish immediately."
      },
      {
        question: "Do summoned animals follow commands automatically?",
        answer: "You give verbal commands as a free action, and they obey. Without commands, they defend themselves but otherwise take no actions - they won't attack enemies on their own initiative."
      }
    ],
    category: "utility-control",
    searchVolume: 6430
  },
  {
    slug: "detect-magic-5e",
    name: "Detect Magic",
    level: "1st",
    school: "Divination",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: true,
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Wizard"],
    description: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking it automatically reveals everything - you must use an action to identify schools of magic",
      "Forgetting the 30-foot range limitation",
      "Not accounting for barriers that block the spell",
      "Assuming it detects invisible creatures - it only detects magic, not the creatures themselves"
    ],
    dmTips: [
      "Don't reveal every magic item immediately - let players investigate and use actions to learn more",
      "Use the school of magic to give hints about effects without spoiling surprises",
      "Remember that some magic is designed to be hidden from detection spells",
      "This is often cast as a ritual, so players should rarely burn spell slots for it"
    ],
    faq: [
      {
        question: "Can Detect Magic see through walls?",
        answer: "It can penetrate most barriers but is blocked by: 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt. Thinner barriers allow detection through them."
      },
      {
        question: "Does Detect Magic reveal <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> creatures?",
        answer: "It detects magic, including the magic making something invisible, but doesn't reveal the creature itself. You'd know 'there's illusion magic here' but not see the <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> creature's location precisely."
      },
      {
        question: "Can Detect Magic be cast as a ritual?",
        answer: "Yes! It has the ritual tag, meaning it can be cast without using a spell slot if you spend an extra 10 minutes casting. This is the most common way to use it during exploration."
      },
      {
        question: "What does Detect Magic actually tell you?",
        answer: "Initially, just presence of magic within 30 feet. Using your action, you see faint auras around magical objects/creatures and learn the school of magic (Abjuration, Conjuration, etc.). It doesn't identify specific effects."
      },
      {
        question: "Does Detect Magic work on innate abilities?",
        answer: "Innate magical abilities typically register as magic. A dragon's breath weapon is magical, as are innate spellcasting abilities. However, some abilities described as 'nonmagical' won't be detected."
      }
    ],
    category: "utility-control",
    searchVolume: 20110
  },
  {
    slug: "detect-thoughts-5e",
    name: "Detect Thoughts",
    level: "2nd",
    school: "Divination",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (a copper piece)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "For the duration, you can read the thoughts of creatures within 30 feet. You can use your action to focus on any one creature you can see. If the creature has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected. You initially learn the surface thoughts. As an action, you can probe deeper into the target's mind. If the target fails a Wisdom save, you gain insight into its reasoning, emotional state, and something important to it. The target knows you are probing into its mind.",
    damage: null,
    savingThrow: "Wisdom (only for deeper probe)",
    higherLevels: null,
    commonMistakes: [
      "Forgetting that probing deeper requires a Wisdom save and alerts the target",
      "Not enforcing the Intelligence 3+ requirement",
      "Thinking you can read all thoughts simultaneously - you focus on one creature at a time",
      "Assuming the spell works on creatures that don't speak language"
    ],
    dmTips: [
      "Surface thoughts should be what the creature is thinking right now, not their full plan",
      "Failed saves on deeper probes should reveal something meaningful but not everything",
      "Describe the intrusive feeling when someone probes deeper to create dramatic moments",
      "Consider having suspicious NPCs make Insight checks to notice the caster's intense focus"
    ],
    faq: [
      {
        question: "What are 'surface thoughts'?",
        answer: "Whatever the creature is actively thinking about right now - their current concerns, immediate desires, or reaction to the situation. Not deep memories or hidden plans, just what's on their mind in the moment."
      },
      {
        question: "When does the target know their mind is being probed?",
        answer: "Only when you use an action to probe deeper (requiring their Wisdom save). Reading surface thoughts is undetectable. If you only read surface thoughts, they never know you cast the spell."
      },
      {
        question: "Can Detect Thoughts find hidden creatures?",
        answer: "Yes! You can sense the presence of thinking creatures within 30 feet even if you can't see them. However, creatures with Int 3 or lower (most beasts) or who don't speak language are undetectable."
      },
      {
        question: "What does a failed deep probe save reveal?",
        answer: "You gain insight into reasoning (why they think what they think), emotional state (fear, greed, loyalty), and something important to them (a secret, a person, a goal). DM determines specifics."
      },
      {
        question: "Can a creature resist Detect Thoughts entirely?",
        answer: "Creatures with Int 3 or lower or who don't speak any language are immune. Those with high Wisdom can resist the deep probe. Some creatures have magic resistance or specific immunities to divination."
      }
    ],
    category: "utility-control",
    searchVolume: 7910
  },
  {
    slug: "dimension-door-5e",
    name: "Dimension Door",
    level: "4th",
    school: "Conjuration",
    castingTime: "1 action",
    range: "500 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction. You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. If you would arrive in a place already occupied by an object or creature, you and any creature traveling with you each take 4d6 force damage and the spell fails to teleport you.",
    damage: "4d6 force (if destination is occupied)",
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting you can only bring one other creature, not multiple",
      "Not enforcing the weight/size restrictions on passengers",
      "Allowing teleportation through barriers you can't see through unless the destination is visualized/described",
      "Forgetting the 4d6 force damage when arriving in an occupied space"
    ],
    dmTips: [
      "Great escape tool but also enables clever tactical positioning in combat",
      "If players teleport to unknown areas, describe what they find themselves in",
      "Consider having guards or enemies prepare for teleportation in high-security areas",
      "This spell enables great 'smash and grab' or rescue scenarios"
    ],
    faq: [
      {
        question: "Can you teleport through walls with Dimension Door?",
        answer: "Yes! You can teleport to any spot within 500 feet that you can see, visualize, or describe by distance/direction. You don't need line of sight - describing 'directly below me, 100 feet down' works."
      },
      {
        question: "What happens if you teleport into something solid?",
        answer: "Both you and any creature traveling with you take 4d6 force damage and the spell fails - you don't teleport. This makes teleporting to unknown locations risky."
      },
      {
        question: "Can you bring multiple creatures with Dimension Door?",
        answer: "No, only one willing creature of your size or smaller. They must be carrying their own gear. If you need to move multiple allies, you'll need multiple casters or different spells."
      },
      {
        question: "How does visualizing a destination work?",
        answer: "You picture a place you've been before or can clearly imagine. The DM may require you to have reasonably accurate knowledge of the location. Wildly inaccurate visualization might result in teleporting to an occupied space."
      },
      {
        question: "Can Dimension Door be counterspelled?",
        answer: "Yes, like any spell. It has only verbal components and instantaneous duration, so once you complete casting, you're gone. But the casting itself can be Counterspelled like normal."
      }
    ],
    category: "utility-control",
    searchVolume: 8950
  },
  {
    slug: "disguise-self-5e",
    name: "Disguise Self",
    level: "1st",
    school: "Illusion",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 hour",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The changes wrought by this spell fail to hold up to physical inspection. If you use this spell to add a hat, objects pass through it.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking it changes your actual body - it's an illusion that fails to physical inspection",
      "Changing body type dramatically (humanoid to quadruped, etc.)",
      "Forgetting the 1-foot height limit",
      "Not having NPCs make Investigation checks when they have reason to doubt the disguise"
    ],
    dmTips: [
      "Use Investigation checks (against your spell save DC) when NPCs are suspicious",
      "Physical contact should give away the illusion - describe touching someone's 'beard' and feeling smooth skin",
      "The spell is great for social infiltration but shouldn't trivialize all security",
      "Consider how voice, mannerisms, and knowledge factor into maintaining the disguise"
    ],
    faq: [
      {
        question: "Does Disguise Self change your voice?",
        answer: "No. It only creates a visual illusion. Your voice, scent, and mannerisms remain unchanged. Convincingly impersonating someone requires good acting (Deception checks) in addition to the visual disguise."
      },
      {
        question: "What happens if someone touches the illusion?",
        answer: "Physical interaction reveals it's an illusion. Touch someone's illusory beard and your hand passes through. At that point, the observer knows it's fake with no check required."
      },
      {
        question: "How tall/short can I make myself with Disguise Self?",
        answer: "Up to 1 foot taller or shorter than your actual height. You cannot dramatically change size. A 6-foot human could appear as short as 5 feet or as tall as 7 feet."
      },
      {
        question: "Can I disguise myself as a different creature type?",
        answer: "You must maintain the same basic arrangement of limbs. A humanoid can appear as a different humanoid but can't become a quadruped, serpent, or creature with a radically different body plan."
      },
      {
        question: "Does Disguise Self require concentration?",
        answer: "No! It lasts 1 hour without concentration, meaning you can maintain the disguise while casting other spells or if you take damage. It only ends early if you dismiss it or it's dispelled."
      }
    ],
    category: "utility-control",
    searchVolume: 8910
  },
  {
    slug: "dispel-magic-5e",
    name: "Dispel Magic",
    level: "3rd",
    school: "Abjuration",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Sorcerer", "Warlock", "Wizard"],
    description: "Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the spell ends.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
    commonMistakes: [
      "Forgetting to make ability checks for spells higher than 3rd level",
      "Not understanding that casting at higher levels automatically dispels equal-level spells",
      "Thinking it can dispel magical items - it only suppresses them temporarily in some cases",
      "Trying to counterspell and dispel in the same turn (both require actions)"
    ],
    dmTips: [
      "This spell is essential for removing problematic ongoing effects",
      "Have the check DC ready: it's 10 + spell level (DC 14 for 4th level, DC 15 for 5th, etc.)",
      "Consider whether complex magical effects have multiple spells that need individual dispelling",
      "Describe the magical energy fading or unraveling for dramatic effect"
    ],
    faq: [
      {
        question: "Does Dispel Magic end all spells on a target?",
        answer: "It ends one spell (if 3rd level or lower) or requires checks for higher-level spells. Multiple spells on the same target each require separate dispel attempts - one casting of Dispel Magic can potentially end multiple spells."
      },
      {
        question: "Can Dispel Magic end effects that aren't spells?",
        answer: "No. It only ends spells. Innate magical abilities, magic item effects, lair actions, and legendary actions are not spells and cannot be dispelled (unless specifically stated otherwise)."
      },
      {
        question: "What's the ability check DC for high-level spells?",
        answer: "DC = 10 + the spell's level. A 4th-level spell is DC 14, 5th-level is DC 15, up to 9th-level at DC 19. You use your spellcasting ability modifier for the check."
      },
      {
        question: "When should I upcast Dispel Magic?",
        answer: "Upcasting guarantees success against equal or lower level spells - no check needed. If you know the spell level, cast Dispel Magic at that level. When uncertain, higher is safer but costs more resources."
      },
      {
        question: "Can Dispel Magic stop a concentration spell?",
        answer: "Yes! If you successfully dispel a concentration spell, it ends immediately. This is often easier than trying to break the caster's concentration through damage."
      }
    ],
    category: "utility-control",
    searchVolume: 10040
  },
  {
    slug: "entangle-5e",
    name: "Entangle",
    level: "1st",
    school: "Conjuration",
    castingTime: "1 action",
    range: "90 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Druid"],
    description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or become <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> by the entangling plants until the spell ends. A restrained creature can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away.",
    damage: null,
    savingThrow: "Strength",
    higherLevels: null,
    commonMistakes: [
      "Forgetting the area becomes difficult terrain even for creatures that save",
      "Not allowing <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> creatures to use their action to attempt escape",
      "Thinking creatures that enter the area later are automatically restrained - they're not, only at casting",
      "Forgetting this requires plants/ground - doesn't work on stone floors or in midair"
    ],
    dmTips: [
      "Describe the plants vividly - grasping vines, thorny brambles, or writhing roots",
      "Remember the area is difficult terrain for allies too, creating tactical decisions",
      "Great for controlling choke points or protecting fleeing NPCs",
      "Consider whether the environment has sufficient vegetation for the spell to work"
    ],
    faq: [
      {
        question: "Do creatures that enter Entangle's area later get <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a>?",
        answer: "No. Only creatures in the area when you cast the spell must make the Strength save. Creatures entering later only deal with difficult terrain - they don't get restrained automatically."
      },
      {
        question: "What can <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> creatures do to escape?",
        answer: "Use their action to make a Strength check against your spell save DC. On success, they're no longer restrained. They can repeat this check each turn. No other actions can break free (like attacking the vines)."
      },
      {
        question: "Does Entangle work on stone or indoor floors?",
        answer: "RAW is ambiguous. The spell conjures 'weeds and vines' that 'sprout from the ground.' Most DMs require natural ground/soil. It probably doesn't work on solid stone floors or metal surfaces."
      },
      {
        question: "Is the difficult terrain effect useful even if everyone saves?",
        answer: "Yes! Even if all creatures save against being restrained, the entire 20-foot square becomes difficult terrain for the duration. This slows enemy movement and affects tactical positioning."
      },
      {
        question: "Does the <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> condition affect more than movement?",
        answer: "Yes! Restrained creatures have speed 0, attack rolls against them have advantage, their attack rolls have disadvantage, and they have disadvantage on Dexterity saving throws. It's a powerful debuff."
      }
    ],
    category: "utility-control",
    searchVolume: 6710
  },
  {
    slug: "glyph-of-warding-5e",
    name: "Glyph of Warding",
    level: "3rd",
    school: "Abjuration",
    castingTime: "1 hour",
    range: "Touch",
    components: "V, S, M (incense and powdered diamond worth 200 gp, consumed)",
    duration: "Until dispelled or triggered",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Wizard"],
    description: "You inscribe a glyph on a surface or within an object that can be closed to conceal it. If you choose a surface, the glyph can cover an area no larger than 10 feet in diameter. The glyph is nearly invisible (DC determined by your spell save DC to find it). You decide the trigger. When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere dealing 5d8 acid, cold, fire, lightning, or thunder damage (Dex save for half), or you can store a spell of 3rd level or lower in the glyph to be cast when triggered.",
    damage: "5d8 (chosen type)",
    savingThrow: "Dexterity",
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding.",
    commonMistakes: [
      "Forgetting the 200 gp material component that is consumed",
      "Trying to move the glyph - it becomes inactive if moved more than 10 feet from where it was cast",
      "Not setting a clear trigger condition",
      "Thinking stored spells can be concentration spells - they can, but no one maintains concentration"
    ],
    dmTips: [
      "Great for dungeon defense and lair preparation",
      "Consider having enemy spellcasters use this to protect important areas",
      "The 1-hour casting time means this is for preparation, not combat",
      "Creative uses include storing buff spells to trigger when allies enter an area"
    ],
    faq: [
      {
        question: "Why can't you move a Glyph of Warding after casting?",
        answer: "Moving the glyph more than 10 feet from where it was cast makes it inactive. This prevents players from inscribing glyphs on arrows or throwing them as grenades. It's designed for static defense, not mobile weaponry."
      },
      {
        question: "What spells can be stored in a Glyph of Warding?",
        answer: "Any spell of 3rd level or lower (or equal to your slot level when upcasting) that targets a single creature or area. The stored spell uses your stats but doesn't require your concentration even if it normally would."
      },
      {
        question: "Is the 200 gp diamond component consumed?",
        answer: "Yes. Each casting of Glyph of Warding consumes 200 gp worth of incense and powdered diamond. This makes multiple glyphs expensive and limits casual use."
      },
      {
        question: "How specific can the trigger be?",
        answer: "Very specific! 'When a creature other than me enters this room,' 'When someone speaks the word Phoenix,' 'When a non-elf opens this book.' Be precise - vague triggers may have unintended activations."
      },
      {
        question: "Can enemies see the glyph?",
        answer: "It's nearly invisible. Finding it requires an Intelligence (Investigation) check against your spell save DC. Most enemies won't know to look unless they have reason to suspect magical traps."
      }
    ],
    category: "utility-control",
    searchVolume: 6570
  },
  {
    slug: "haste-5e",
    name: "Haste",
    level: "3rd",
    school: "Transmutation",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S, M (a shaving of licorice root)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Allowing the extra action to be used for spells or full Attack actions - it's one weapon attack only",
      "Forgetting the lethargy penalty when the spell ends (no movement or actions until after next turn)",
      "Not applying the +2 AC bonus",
      "Thinking the doubled speed applies to all movement modes - it does, including fly/swim speeds if any"
    ],
    dmTips: [
      "This spell is incredibly powerful for martial characters in combat",
      "Track concentration carefully - losing it means the target is essentially <a href=\"/rules/conditions/stunned-condition-5e/\">stunned</a> for a round",
      "The lethargy effect can be devastating if concentration breaks at a critical moment",
      "Consider the dramatic description of supernatural speed and then sudden exhaustion"
    ],
    faq: [
      {
        question: "What can the extra action from Haste be used for?",
        answer: "Only: Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object. You cannot cast spells, use special abilities, make opportunity attacks, or take the full Attack action. One. Weapon. Attack."
      },
      {
        question: "What happens when Haste ends?",
        answer: "The target can't move or take actions until after its next turn. This lethargy effect happens whether the spell ends normally, concentration breaks, or it's dispelled. Getting Haste dropped mid-combat is devastating."
      },
      {
        question: "Does Haste stack with other speed increases?",
        answer: "Yes. Haste doubles your speed, so if you have 30 feet normally, you have 60. Additional speed bonuses (like Expeditious Retreat or Boots of Speed) apply to the doubled amount, resulting in very high mobility."
      },
      {
        question: "Can Haste be used on yourself?",
        answer: "Yes, but it requires concentration, and you're limited on what the extra action can do. Typically better cast on a martial character who can make the most of the extra weapon attack."
      },
      {
        question: "Does Extra Attack work with Haste's additional action?",
        answer: "No. The Haste action specifically allows only ONE weapon attack, regardless of Extra Attack features. Extra Attack applies to your normal Attack action, not the Haste action."
      }
    ],
    category: "utility-control",
    searchVolume: 12240
  },
  {
    slug: "hex-5e",
    name: "Hex",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 bonus action",
    range: "90 feet",
    components: "V, S, M (the petrified eye of a newt)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Warlock"],
    description: "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn to curse a new creature. A remove curse spell ends this effect.",
    damage: "1d6 necrotic (bonus damage)",
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain concentration for up to 8 hours. When you use a 5th-level slot or higher, you can maintain concentration for up to 24 hours.",
    commonMistakes: [
      "Forgetting the bonus damage only applies to attacks that hit, not spells (unless the spell involves an attack roll)",
      "Not choosing an ability for the disadvantage - it's a required part of the spell",
      "Thinking you can switch the cursed target at will - only when the current target dies",
      "Forgetting remove curse can end this effect"
    ],
    dmTips: [
      "Essential warlock spell that pairs perfectly with Eldritch Blast",
      "The ability check disadvantage is often underutilized - suggest Strength for grapples, Dexterity for stealth, etc.",
      "Track concentration carefully as warlocks often maintain this for entire combats",
      "At higher levels, all-day hex on a recurring villain can be very dramatic"
    ],
    faq: [
      {
        question: "Does Hex damage apply to each Eldritch Blast beam?",
        answer: "Yes! Each beam that hits deals +1d6 necrotic damage. At higher levels when you get multiple beams, Hex damage stacks beautifully - 4 beams means 4d6 extra damage per turn."
      },
      {
        question: "Can I move Hex to a new target at will?",
        answer: "No. You can only transfer Hex to a new creature when the current target drops to 0 HP. Then you use a bonus action on a subsequent turn to curse someone new."
      },
      {
        question: "What ability should I choose for the disadvantage?",
        answer: "It depends on the situation. Strength affects Athletics (grapples, shoves). Dexterity affects Stealth and initiative. Wisdom affects Perception. Choose based on what ability checks the target is likely to make."
      },
      {
        question: "Does Hex work with spell attacks?",
        answer: "Yes, if the spell requires an attack roll. Eldritch Blast, Shocking Grasp, and similar spells trigger Hex. Spells requiring saving throws (like Fireball) don't trigger Hex damage."
      },
      {
        question: "How long can I maintain Hex?",
        answer: "At 1st-2nd level: 1 hour. At 3rd-4th level: 8 hours. At 5th+ level: 24 hours. With Warlock's limited slots but short rest recovery, keeping Hex running all day is very viable."
      }
    ],
    category: "utility-control",
    searchVolume: 7470
  },
  {
    slug: "hold-person-5e",
    name: "Hold Person",
    level: "2nd",
    school: "Enchantment",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a small, straight piece of iron)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be <a href=\"/rules/conditions/paralyzed-condition-5e/\">paralyzed</a> for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
    commonMistakes: [
      "Forgetting that <a href=\"/rules/conditions/paralyzed-condition-5e/\">paralyzed</a> creatures auto-fail Strength and Dexterity saves",
      "Not remembering that attacks against paralyzed creatures have advantage",
      "Forgetting that hits against paralyzed creatures within 5 feet are automatic critical hits",
      "Trying to use on non-humanoids - this only works on humanoids"
    ],
    dmTips: [
      "This spell can completely shut down a humanoid enemy - very powerful for its level",
      "Paralysis means automatic crits for melee attackers, which can delete bosses quickly",
      "The repeated saves give the target a chance to break free, keeping it balanced",
      "Consider having enemy spellcasters use this against the party's fighter or barbarian"
    ],
    faq: [
      {
        question: "What does <a href=\"/rules/conditions/paralyzed-condition-5e/\">paralyzed</a> actually mean?",
        answer: "<a href=\"/rules/conditions/paralyzed-condition-5e/\">Paralyzed</a> creatures are <a href=\"/rules/conditions/incapacitated-condition-5e/\">incapacitated</a> (can't take actions or reactions), can't move or speak, automatically fail Strength and Dexterity saves, attacks against them have advantage, and hits from within 5 feet are automatic critical hits."
      },
      {
        question: "Does Hold Person work on all enemies?",
        answer: "No! It only works on humanoids. Dragons, giants, undead, fiends, and most monsters aren't humanoids. Use Hold Monster (5th level) for non-humanoid creatures."
      },
      {
        question: "When does the target get to save again?",
        answer: "At the end of each of its turns. So if you cast it, the target is paralyzed until the end of its next turn at minimum, then gets to save. Smart players time this for maximum party damage."
      },
      {
        question: "Can I target multiple creatures?",
        answer: "Yes, when upcast. Each slot level above 2nd adds one more target, but all targets must be within 30 feet of each other. Great for groups of humanoid enemies."
      },
      {
        question: "What's the difference between Hold Person and Hold Monster?",
        answer: "Hold Person (2nd level) only works on humanoids. Hold Monster (5th level) works on any creature. The 3-level difference is significant, so Hold Person is much more efficient when it applies."
      }
    ],
    category: "utility-control",
    searchVolume: 19970
  },
  {
    slug: "identify-5e",
    name: "Identify",
    level: "1st",
    school: "Divination",
    castingTime: "1 minute",
    range: "Touch",
    components: "V, S, M (a pearl worth 100 gp and an owl feather)",
    duration: "Instantaneous",
    concentration: false,
    ritual: true,
    classes: ["Bard", "Wizard"],
    description: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement, and how many charges it has. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking it reveals curses - identify doesn't reveal if an item is cursed",
      "Not accounting for the 1-minute casting time and touch requirement",
      "Forgetting it can be cast as a ritual, so the pearl isn't consumed",
      "Assuming it works at range - you must touch the item throughout the casting"
    ],
    dmTips: [
      "This spell speeds up magic item identification but doesn't reveal curses (use that for drama)",
      "Consider whether a short rest would allow identification anyway (DMG rules)",
      "Some items might have hidden properties that even identify doesn't reveal",
      "The ritual tag means players will almost always cast this as a ritual to save slots"
    ],
    faq: [
      {
        question: "Does Identify reveal curses?",
        answer: "No! This is a crucial limitation. Identify reveals properties, attunement requirements, charges, and affecting spells, but NOT curses. Many cursed items have their curse revealed only upon attunement."
      },
      {
        question: "Can I identify items without the spell?",
        answer: "Yes. The DMG optional rule allows identifying magic item properties during a short rest focused on that item. Many tables skip Identify entirely using this rule."
      },
      {
        question: "Is the 100 gp pearl consumed?",
        answer: "No. The component has a gold value but isn't consumed. Buy one pearl, use it forever. The owl feather also isn't consumed."
      },
      {
        question: "Can Identify reveal who created an item?",
        answer: "Not directly. It reveals what spell created an item (if any), but not the creator's identity. For that level of detail, you'd need Legend Lore or similar divination."
      },
      {
        question: "Can I cast Identify on a creature?",
        answer: "Yes! You can touch a creature to learn what spells are currently affecting it. Useful for diagnosing magical conditions, charms, or curses affecting allies or prisoners."
      }
    ],
    category: "utility-control",
    searchVolume: 100
  },
  {
    slug: "invisibility-5e",
    name: "Invisibility",
    level: "2nd",
    school: "Illusion",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (an eyelash encased in gum arabic)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "A creature you touch becomes <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting the spell ends immediately when the target attacks or casts a spell",
      "Thinking <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> means undetectable - creatures can still be heard, smelled, or leave tracks",
      "Not enforcing that dropped items become visible",
      "Assuming invisibility grants advantage on all attacks - only if the attacker is unseen"
    ],
    dmTips: [
      "<a href=\"/rules/conditions/invisible-condition-5e/\">Invisible</a> creatures still make noise, have a scent, and leave footprints",
      "Enemies can make Perception checks to notice signs of invisible creatures",
      "Remember that attacking ends the spell, so it's great for positioning but not sustained combat",
      "Describe how NPCs react to invisible party members - confusion, alarm, sweeping attacks"
    ],
    faq: [
      {
        question: "What breaks Invisibility?",
        answer: "Attacking or casting a spell. That's it. You can open doors, pick locks, move objects, speak, drink potions, and even shove creatures without breaking invisibility. Only attacks and spells end it."
      },
      {
        question: "Can enemies still detect an <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> creature?",
        answer: "Yes. Invisibility makes you unseen, not undetectable. Enemies can hear footsteps, smell you, notice disturbed objects, or feel you brush past. They attack with disadvantage if they know your location."
      },
      {
        question: "Do I get advantage on attacks while <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a>?",
        answer: "Yes, if the target can't see you. Being invisible means you're an unseen attacker, granting advantage on attack rolls. But remember, attacking ends the spell immediately."
      },
      {
        question: "What about Greater Invisibility?",
        answer: "Greater Invisibility (4th level) doesn't end when you attack or cast spells. It lasts the full duration regardless of what you do. Much more powerful for combat but two levels higher."
      },
      {
        question: "Can I make multiple creatures invisible?",
        answer: "Yes, when upcast. Each slot level above 2nd allows one additional target. All targets must be touched when casting. Great for infiltrating an entire party."
      }
    ],
    category: "utility-control",
    searchVolume: 10330,
    aliases: ["invisibility"]
  },
  {
    slug: "message-5e",
    name: "Message",
    level: "Cantrip",
    school: "Transmutation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a short piece of copper wire)",
    duration: "1 round",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking the message is telepathic - it's a whisper that can be heard if someone is listening closely",
      "Not enforcing the barrier restrictions",
      "Forgetting the target can choose to reply or ignore the message",
      "Assuming you can message anyone - you must be able to see them or know they're behind a barrier"
    ],
    dmTips: [
      "Great for stealth coordination and secret communication",
      "Consider having enemies with good Perception notice the whispering",
      "The spell enables creative tactical planning during combat",
      "Since it's a cantrip, players will use this frequently - don't slow down play adjudicating it"
    ],
    faq: [
      {
        question: "Can others hear the Message?",
        answer: "The casting involves a whisper, which nearby creatures might notice with a successful Perception check. The message itself is heard only by the target, and their reply whisper is heard only by you."
      },
      {
        question: "Does Message work through walls?",
        answer: "Yes, if you're familiar with the target and know they're beyond the barrier. However, it's blocked by magical silence, 1 foot of stone, 1 inch of metal, thin lead, or 3 feet of wood."
      },
      {
        question: "Can the target ignore the message?",
        answer: "Yes. The target hears the message and can reply, but isn't compelled to respond. They can simply ignore it. There's no saving throw involved."
      },
      {
        question: "Is Message telepathy?",
        answer: "No. Message creates a magical whisper that travels to the target. It's not true telepathy - the whispering component might be noticed, and it has physical barriers that block it."
      },
      {
        question: "Can I send a long message?",
        answer: "The spell lasts 1 round, which is about 6 seconds. You can whisper about 25 words in that time. Plan your message to be concise - you can't send essays."
      }
    ],
    category: "utility-control",
    searchVolume: 11710
  },
  {
    slug: "mirror-image-5e",
    name: "Mirror Image",
    level: "2nd",
    school: "Illusion",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the duplicates. Each time a creature targets you with an attack during the spell's duration, roll a d20 to determine whether the attack targets you or one of your duplicates. With three duplicates, you must roll a 6 or higher to change the target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher. A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Rolling to hit against duplicates - if a duplicate is targeted, it's automatically destroyed on a hit",
      "Not tracking how many duplicates remain",
      "Forgetting that area effects don't trigger the duplicate mechanic - they hit you directly",
      "Thinking the duplicates can be attacked individually - they can only be hit when randomly targeted"
    ],
    dmTips: [
      "This spell is excellent defense for squishy casters and doesn't require concentration",
      "Keep a d20 handy and roll openly when creatures attack the caster",
      "Describe duplicates being destroyed with flavor - shimmering and vanishing",
      "Remember that effects requiring saves target the caster directly, not duplicates"
    ],
    faq: [
      {
        question: "Does Mirror Image require concentration?",
        answer: "No! This is one of its biggest strengths. You can maintain Mirror Image alongside concentration spells, making it excellent defensive layering for spellcasters."
      },
      {
        question: "How does the duplicate targeting work?",
        answer: "When attacked, roll d20: with 3 duplicates, 6+ redirects to a duplicate; with 2, need 8+; with 1, need 11+. If redirected and the attack beats the duplicate's AC (10 + your Dex mod), it's destroyed."
      },
      {
        question: "Do area spells destroy duplicates?",
        answer: "No. Area effects, saving throw spells, and effects that don't require attack rolls ignore duplicates entirely and affect you directly. The duplicates are only relevant against targeted attacks."
      },
      {
        question: "Can creatures with blindsight or truesight see through Mirror Image?",
        answer: "Blindsight ignores Mirror Image entirely - you can't fool creatures that don't rely on sight. Truesight, however, doesn't specifically counter Mirror Image, though some DMs rule otherwise."
      },
      {
        question: "Do the duplicates move with me?",
        answer: "Yes. The duplicates move with you and mimic your actions, staying in your space. They don't occupy separate spaces and can't be targeted independently."
      }
    ],
    category: "utility-control",
    searchVolume: 60,
    aliases: ["mirror-image"]
  },
  {
    slug: "pass-without-trace-5e",
    name: "Pass Without Trace",
    level: "2nd",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Self",
    components: "V, S, M (ashes from burned mistletoe and spruce)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Druid", "Ranger"],
    description: "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the +10 bonus only applies to creatures within 30 feet of you",
      "Not tracking that creatures who leave the 30-foot radius lose the bonus",
      "Thinking it makes you <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> - it only grants a Stealth bonus",
      "Forgetting that the bonus applies to ongoing Stealth checks, not just the initial one"
    ],
    dmTips: [
      "This spell is incredibly powerful for group stealth, making whole parties excellent at infiltration",
      "The +10 bonus means even heavy armor wearers can be stealthy",
      "Remember creatures must stay within 30 feet of the caster to maintain the bonus",
      "Consider how enemies react when they find no tracks despite knowing intruders were present"
    ],
    faq: [
      {
        question: "How powerful is a +10 Stealth bonus?",
        answer: "Extremely powerful. A character with -1 Dexterity in heavy armor now has +9 Stealth. Even with disadvantage from armor, rolling twice and adding +9 beats most passive Perceptions. Whole parties become ninjas."
      },
      {
        question: "Does everyone need to stay near the caster?",
        answer: "Yes. The bonus only applies to creatures within 30 feet of you. If a scout moves too far ahead, they lose the +10 bonus and leave tracks again."
      },
      {
        question: "Does Pass Without Trace make you <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a>?",
        answer: "No. It grants a Stealth bonus and prevents tracking, but you're still visible. You still need to hide behind cover and stay out of line of sight."
      },
      {
        question: "Can enemies track us with magic?",
        answer: "Yes. The spell specifically states you 'can't be tracked except by magical means.' Spells like Locate Creature or scrying still work normally."
      },
      {
        question: "Does this work in combat?",
        answer: "The +10 bonus applies to Stealth checks, including hiding in combat. Combined with the Hide action, this can make rogues nearly impossible to find between attacks."
      }
    ],
    category: "utility-control",
    searchVolume: 6830
  },
  {
    slug: "polymorph-5e",
    name: "Polymorph",
    level: "4th",
    school: "Transmutation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a caterpillar cocoon)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Druid", "Sorcerer", "Wizard"],
    description: "This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics are replaced by the beast's statistics, but it retains its alignment and personality. The creature is limited in actions it can perform by the nature of its new form. It can't speak, cast spells, or take any action requiring hands or speech. The target's gear melds into the new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed.",
    damage: null,
    savingThrow: "Wisdom (unwilling creatures only)",
    higherLevels: null,
    commonMistakes: [
      "Polymorphing into creatures above the target's CR or level",
      "Allowing spellcasting or speech in beast form",
      "Forgetting that excess damage doesn't carry over when reverting",
      "Not enforcing that the creature uses the beast's mental stats (Intelligence, Wisdom, Charisma)"
    ],
    dmTips: [
      "Common forms: T-Rex (CR 8) for damage, Giant Ape (CR 7) for utility, Giant Owl (CR 1/4) for flyby scouting",
      "This spell is essentially bonus hit points equal to the new form's HP",
      "When used on enemies, low-CR forms like frogs or turtles effectively remove them from combat",
      "Consider whether beasts in the setting are available for the caster to have seen/know about"
    ],
    faq: [
      {
        question: "What are the best beast forms for Polymorph?",
        answer: "T-Rex (CR 8) for damage and HP, Giant Ape (CR 7) for HP and ranged rocks, Giant Elk (CR 2) for speed and charging, and Giant Owl (CR 1/4) for flying scouts. Match CR to target level."
      },
      {
        question: "Does damage carry over when Polymorph ends?",
        answer: "No. When the beast form drops to 0 HP, the creature reverts with the HP it had before transforming. Excess damage doesn't carry over. This makes Polymorph function as bonus hit points."
      },
      {
        question: "Can a polymorphed creature cast spells?",
        answer: "No. The creature is limited in actions by its new form's nature - it can't speak, cast spells, or take any action requiring hands or speech. Mental stats become the beast's stats."
      },
      {
        question: "Can I polymorph enemies?",
        answer: "Yes! Unwilling creatures make a Wisdom save. On failure, turn that dragon into a turtle. The enemy stays transformed until it drops to 0 HP (which you don't have to do) or concentration ends."
      },
      {
        question: "What's the difference between Polymorph and Wild Shape?",
        answer: "Polymorph: any beast up to target's CR/level, uses beast's mental stats, requires concentration. Wild Shape: limited beast options by Druid level, keeps your mental stats, no concentration. Polymorph is more flexible but riskier."
      }
    ],
    category: "utility-control",
    searchVolume: 16240
  },
  {
    slug: "silence-5e",
    name: "Silence",
    level: "2nd",
    school: "Illusion",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: true,
    classes: ["Bard", "Cleric", "Ranger"],
    description: "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are <a href=\"/rules/conditions/deafened-condition-5e/\">deafened</a> while entirely inside it. Casting a spell that includes a verbal component is impossible there.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting that the sphere can be centered on an object, allowing it to move",
      "Not enforcing that creatures must be entirely inside to be affected",
      "Allowing subtle spell to work - verbal components are impossible, even with Subtle Spell",
      "Forgetting it grants immunity to thunder damage for creatures inside"
    ],
    dmTips: [
      "Devastating against enemy spellcasters who rely on verbal components",
      "Can be centered on a moving creature or object to create a mobile silence zone",
      "Great for stealth approaches - breaking down doors or fighting quietly",
      "Remember that most spells have verbal components, so this shuts down most casting"
    ],
    faq: [
      {
        question: "Can you cast spells inside Silence?",
        answer: "Only spells without verbal components. Most spells have V components and are impossible inside Silence. Even Subtle Spell (Sorcerer metamagic) doesn't help - you physically cannot make verbal components there."
      },
      {
        question: "Can Silence be moved?",
        answer: "Yes! You can center Silence on an object. If someone carries that object, the silence zone moves with it. Cast it on a rock, have the fighter carry it, and chase down enemy casters."
      },
      {
        question: "Does Silence affect creatures partially inside?",
        answer: "No. Creatures must be entirely inside the sphere to be affected. A creature with one foot outside can still speak and cast verbal spells, though no sound travels into the zone."
      },
      {
        question: "Can you cast Silence as a ritual?",
        answer: "Yes! The ritual tag means you can cast it without using a spell slot, adding 10 minutes to the casting time. Great for setting up ambushes or quiet zones when you have time."
      },
      {
        question: "Does Silence block thunder damage?",
        answer: "Yes. Creatures entirely inside the sphere are immune to thunder damage. This is a niche but useful defensive application against Shatter, Thunderwave, and similar spells."
      }
    ],
    category: "utility-control",
    searchVolume: 6070
  },
  {
    slug: "simulacrum-5e",
    name: "Simulacrum",
    level: "7th",
    school: "Illusion",
    castingTime: "12 hours",
    range: "Touch",
    components: "V, S, M (snow or ice in quantity sufficient to make a life-size copy of the duplicated creature; some hair, fingernail clippings, or other piece of that creature's body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell)",
    duration: "Until dispelled",
    concentration: false,
    ritual: false,
    classes: ["Wizard"],
    description: "You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature's hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates. The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots. If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly. If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Allowing simulacrums to cast simulacrum to create infinite copies (this doesn't work - the duplicate lacks the spell slot)",
      "Not enforcing the 1,500 gp ruby cost",
      "Forgetting the simulacrum can't regain spell slots or level up",
      "Allowing multiple simulacrums at once - creating a new one destroys the old one"
    ],
    dmTips: [
      "This is a powerful but expensive spell primarily used for utility and backup",
      "The 12-hour casting time means it's preparation, not combat magic",
      "Consider the roleplay implications of creating a duplicate of yourself or an ally",
      "The spell is often used to create a duplicate of the caster to cast spells while the real caster is safe"
    ],
    faq: [
      {
        question: "Can a Simulacrum cast Simulacrum?",
        answer: "No. This is the key limitation preventing infinite simulacrums. The duplicate can't regain spell slots, so once it casts its copy of Simulacrum (if it has one), it can never cast it again."
      },
      {
        question: "How many simulacrums can you have?",
        answer: "One. Casting Simulacrum again instantly destroys any existing simulacrum you created. However, if someone else casts Simulacrum to copy you, that's not your simulacrum."
      },
      {
        question: "Can a Simulacrum recover spell slots?",
        answer: "No. It cannot regain expended spell slots by any means - not long rests, not items, nothing. Once spell slots are used, they're gone forever. Plan usage carefully."
      },
      {
        question: "What happens if the Simulacrum is damaged?",
        answer: "You can repair it in an alchemical laboratory using rare herbs and minerals costing 100 gp per hit point restored. It's expensive but necessary to maintain your duplicate."
      },
      {
        question: "Can I make a Simulacrum of someone else?",
        answer: "Yes! Any beast or humanoid within range during the 12-hour casting. You need some of their body (hair, fingernail). The duplicate obeys your commands, not the original's."
      }
    ],
    category: "utility-control",
    searchVolume: 6630
  },
  {
    slug: "sleep-5e",
    name: "Sleep",
    level: "1st",
    school: "Enchantment",
    castingTime: "1 action",
    range: "90 feet",
    components: "V, S, M (a pinch of fine sand, rose petals, or a cricket)",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring <a href=\"/rules/conditions/unconscious-condition-5e/\">unconscious</a> creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the next creature. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> aren't affected by this spell.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
    commonMistakes: [
      "Forgetting it affects creatures in ascending order of current (not maximum) hit points",
      "Not tracking that undead and creatures immune to charm are unaffected",
      "Thinking creatures get a saving throw - they don't, it's automatic if their HP is low enough",
      "Forgetting any damage wakes the creature immediately"
    ],
    dmTips: [
      "Extremely powerful at low levels, less useful as enemies have more HP",
      "Great for non-lethal takedowns and avoiding combat",
      "Roll the 5d8 openly to build tension about who will be affected",
      "At higher levels, upcast sleep can still be useful against swarms of weak enemies"
    ],
    faq: [
      {
        question: "Does Sleep allow a saving throw?",
        answer: "No! This is what makes it powerful. If a creature's current HP is low enough, they automatically fall asleep. No save, no attack roll - just <a href=\"/rules/conditions/unconscious-condition-5e/\">unconscious</a>."
      },
      {
        question: "What order does Sleep affect creatures?",
        answer: "Lowest current hit points first. Roll 5d8, then starting from the weakest creature in the area, subtract their HP from your total. Continue until you run out of HP to spend."
      },
      {
        question: "What wakes a sleeping creature?",
        answer: "Taking any damage, or another creature using an action to shake/slap them awake. The spell also ends after 1 minute. They don't wake up from loud noises alone."
      },
      {
        question: "Does Sleep work on undead?",
        answer: "No. Undead and creatures immune to the <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> condition are completely immune to Sleep. This includes vampires, zombies, skeletons, and many constructs."
      },
      {
        question: "Is Sleep good at higher levels?",
        answer: "It scales poorly. At 1st level, 5d8 (avg 22 HP) can knock out multiple goblins. But high-level enemies have hundreds of HP. Upcast for +2d8 per level against minions only."
      }
    ],
    category: "utility-control",
    searchVolume: 9180
  },
  {
    slug: "speak-with-animals-5e",
    name: "Speak with Animals",
    level: "1st",
    school: "Divination",
    castingTime: "1 action",
    range: "Self",
    components: "V, S",
    duration: "10 minutes",
    concentration: false,
    ritual: true,
    classes: ["Bard", "Druid", "Ranger"],
    description: "You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM's discretion.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Expecting beasts to have human-level intelligence and knowledge",
      "Forgetting that animals perceive the world differently (by scent, simple concepts, etc.)",
      "Not considering that animals might be uncooperative or want something in return",
      "Thinking all animals in an area will be friendly or helpful"
    ],
    dmTips: [
      "Roleplay animals with limited perspective - they don't understand politics, just 'scary man' or 'food'",
      "Animals remember things important to them: food sources, predators, territory",
      "Consider what the animal cares about and how players might persuade them",
      "This spell opens up creative problem-solving and should be rewarded with useful (if limited) information"
    ],
    faq: [
      {
        question: "How intelligent are animals when you speak with them?",
        answer: "They keep their normal intelligence (usually 1-4). They can describe what they've perceived but won't understand abstract concepts. A wolf understands 'scary human with fire' not 'the wizard cast Fireball.'"
      },
      {
        question: "Will animals automatically help you?",
        answer: "No. You can communicate, but animals have their own interests. You might need to persuade them, offer food, or make Charisma checks. A territorial bear won't become friendly just because you can talk to it."
      },
      {
        question: "Can I cast this as a ritual?",
        answer: "Yes! The ritual tag means you can cast without using a spell slot by adding 10 minutes to casting time. Since it lasts 10 minutes anyway, this is usually how it's cast."
      },
      {
        question: "What counts as a beast?",
        answer: "Normal animals: wolves, horses, birds, fish, insects, etc. Not monsters with the beast type that have magical or supernatural abilities. Check the creature type - it must specifically be 'beast.'"
      },
      {
        question: "Can animals lie to me?",
        answer: "Animals generally don't lie in the human sense, but they have limited understanding. A mouse might say an area is 'safe' because nothing threatened it, even if there's a trap that wouldn't affect mice."
      }
    ],
    category: "utility-control",
    searchVolume: 9060
  },
  {
    slug: "speak-with-dead-5e",
    name: "Speak with Dead",
    level: "3rd",
    school: "Necromancy",
    castingTime: "1 action",
    range: "10 feet",
    components: "V, S, M (burning incense)",
    duration: "10 minutes",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric"],
    description: "You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can't be undead. The spell fails if the corpse was the target of this spell within the last 10 days. Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Expecting the corpse to know things that happened after death",
      "Forgetting the corpse can lie if it was hostile to you in life",
      "Not enforcing the 5-question limit",
      "Thinking corpses without mouths can still answer - they can't"
    ],
    dmTips: [
      "Have the corpse answer based on its personality in life - a loyal guard might lie to protect secrets",
      "Answers should be from the corpse's perspective and knowledge, not omniscient",
      "Consider how long ago the creature died - memories might be hazy or incomplete",
      "This is a great investigation tool but shouldn't trivialize murder mysteries entirely"
    ],
    faq: [
      {
        question: "Can the corpse lie?",
        answer: "Yes! If the corpse was hostile to you in life or recognizes you as an enemy, it's under no compulsion to answer truthfully. A murdered guard might lie to protect their lord even in death."
      },
      {
        question: "Does the corpse know who killed it?",
        answer: "Only if it knew in life. If killed from behind by an unknown assailant, it might only know 'something hit me.' The corpse has no afterlife knowledge - only what it knew at death."
      },
      {
        question: "Can I cast this on really old corpses?",
        answer: "Yes, if it still has a mouth. Ancient skeletons without soft tissue can't form words. The state of decay matters - a mummified body might work, bare bones might not."
      },
      {
        question: "Why does it fail if cast within 10 days?",
        answer: "The corpse can only be targeted by this spell once per 10 days. This prevents repeatedly questioning the same corpse to extract all possible information. Plan your 5 questions carefully."
      },
      {
        question: "Does this work on undead?",
        answer: "No. The corpse 'can't be undead.' A zombie or skeleton is animated by magic and can't be targeted. You need an actual dead body, not an undead creature."
      }
    ],
    category: "utility-control",
    searchVolume: 5930
  },
  {
    slug: "suggestion-5e",
    name: "Suggestion",
    level: "2nd",
    school: "Enchantment",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, M (a snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
    duration: "Concentration, up to 8 hours",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: null,
    commonMistakes: [
      "Suggesting obviously harmful actions - these automatically fail",
      "Not making the suggestion sound reasonable from the target's perspective",
      "Forgetting the target must be able to hear and understand you",
      "Thinking the creature is charmed - it's not, it's just compelled to follow a reasonable suggestion"
    ],
    dmTips: [
      "The key word is 'reasonable' - judge from the creature's perspective, not objectively",
      "Creative wording can make seemingly harmful actions sound reasonable",
      "Examples: 'Give me your sword for safekeeping', 'Go back to town and wait for us', 'Forget you saw us here'",
      "This spell can bypass entire encounters with clever use"
    ],
    faq: [
      {
        question: "What makes a suggestion 'reasonable'?",
        answer: "Judge from the target's perspective, not objectively. 'Give me your sword for safekeeping' might be reasonable to a trusting ally. The more outlandish, the less likely it works. Obviously harmful acts fail automatically."
      },
      {
        question: "Can I suggest someone hurt themselves?",
        answer: "No. Asking a creature to 'stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act' ends the spell. However, indirect harm ('walk into that dark forest') might work."
      },
      {
        question: "How long does the suggestion last?",
        answer: "Up to 8 hours with concentration. The spell ends when the suggested activity is completed or the duration ends. 'Go home and stay there' could last all 8 hours."
      },
      {
        question: "Does the target know they were <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> afterward?",
        answer: "RAW, not automatically. Unlike some charm effects, Suggestion doesn't specify the target knows. DM discretion applies - they might rationalize their behavior or realize something was off."
      },
      {
        question: "What's the difference between Suggestion and Command?",
        answer: "Command (1st level): one-word command, lasts one turn, doesn't require reasonableness. Suggestion (2nd level): full sentence, up to 8 hours, must sound reasonable. Suggestion is more flexible but has more restrictions."
      }
    ],
    category: "utility-control",
    searchVolume: 10040
  },
  {
    slug: "wish-5e",
    name: "Wish",
    level: "9th",
    school: "Conjuration",
    castingTime: "1 action",
    range: "Self",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "Wish is the mightiest spell a mortal creature can cast. You can alter the very foundations of reality in accord with your desires. The basic use of this spell is to duplicate any other spell of 8th level or lower without needing components. The spell simply takes effect. Alternatively, you can create one of several effects: create up to 25,000 gp worth of nonmagical objects, allow up to 20 creatures to regain all hit points and end all effects from other spells, grant up to 10 creatures resistance to one damage type, grant up to 10 creatures immunity to a single spell or effect, or undo a single recent event by forcing a reroll. You might be able to achieve something beyond these examples. The DM has great latitude in ruling what occurs; the greater the wish, the greater the likelihood something goes wrong. The stress of casting this spell might mean you can never cast it again (33% chance) and suffer penalties until you finish a long rest.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Not understanding that anything beyond the stated uses is at DM discretion and can backfire",
      "Forgetting the 33% chance of never being able to cast Wish again if you do anything other than duplicate a spell",
      "Thinking duplicating a spell requires the material components - it doesn't",
      "Not enforcing the Strength penalty until long rest after non-standard uses"
    ],
    dmTips: [
      "For duplicating spells, this is straightforward - just let it happen",
      "For custom wishes, work with the player but be prepared to twist wording or have consequences",
      "The threat of losing Wish forever makes players think carefully about using it for custom effects",
      "This is a campaign-defining spell - embrace the chaos and drama it creates"
    ],
    faq: [
      {
        question: "Can I lose the ability to cast Wish permanently?",
        answer: "Yes. If you use Wish for anything other than duplicating a spell of 8th level or lower, there's a 33% chance you can never cast Wish again. This risk only applies to creative/custom uses."
      },
      {
        question: "What's the safest use of Wish?",
        answer: "Duplicating spells of 8th level or lower. No risk of losing Wish, no material components needed, no stress penalties. You can cast Simulacrum instantly, or any 8th-level spell without preparation."
      },
      {
        question: "Can DMs twist my wish?",
        answer: "Yes. For anything beyond the stated effects, the DM has 'great latitude.' Classic examples: wishing for wealth brings a dragon's hoard (and the dragon's attention). Word wishes carefully."
      },
      {
        question: "What penalties happen after using Wish creatively?",
        answer: "Your Strength drops to 3 (can't carry much, disadvantage on Strength checks/saves), you take 1d10 necrotic damage per spell level cast until a long rest, and you might never cast Wish again (33%)."
      },
      {
        question: "Can Wish bring back the dead?",
        answer: "Yes, but with risk. The stated effects include duplicating Resurrection (7th) safely. Wishing someone back without duplicating a spell invokes the stress penalties and 33% loss chance."
      }
    ],
    category: "utility-control",
    searchVolume: 6880
  },
  {
    slug: "control-water-5e",
    name: "Control Water",
    level: "4th",
    school: "Transmutation",
    castingTime: "1 action",
    range: "300 feet",
    components: "V, S, M (a drop of water and a pinch of dust)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Cleric", "Druid", "Wizard"],
    description: "Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one. Flood: You cause the water level to rise by as much as 20 feet. Part Water: You cause water in the area to move apart and create a trench up to 100 feet long, 20 feet wide, and 20 feet deep. Redirect Flow: You cause flowing water in the area to move in a direction you choose. Whirlpool: You create a whirlpool in the center of the area, 50 feet wide and 25 feet deep (Medium or smaller creatures must make a Strength save or be pulled 10 feet toward the center and take 2d8 bludgeoning damage).",
    damage: "2d8 bludgeoning (whirlpool only)",
    savingThrow: "Strength (whirlpool only)",
    higherLevels: null,
    commonMistakes: [
      "Forgetting you can change the effect each turn as an action",
      "Not enforcing the size limits of the controlled area",
      "Thinking it creates water - it only controls existing water",
      "Not tracking that the whirlpool damage/pull happens when creatures are in or enter the area"
    ],
    dmTips: [
      "This spell is incredibly powerful near bodies of water - parting rivers, flooding areas, etc.",
      "The Part Water effect is clearly inspired by biblical narratives and should feel epic",
      "Consider environmental effects - what happens to boats, docks, underwater creatures?",
      "Creative uses include draining moats, creating paths across lakes, or disrupting naval combat"
    ],
    faq: [
      {
        question: "Does Control Water create water?",
        answer: "No. It only controls existing freestanding water. You need a body of water - a river, lake, flooded area, etc. It won't conjure water from nothing or work on contained water like potions."
      },
      {
        question: "Can I change effects during the spell?",
        answer: "Yes! As an action on your turn, you can repeat the same effect or choose a different one. This means you can flood an area, then create a whirlpool, then part the water - all in one casting."
      },
      {
        question: "How big is the affected area?",
        answer: "A cube up to 100 feet on a side. That's enormous - most lakes, rivers, and flooded dungeons fit within this. The Whirlpool is 50 feet wide and 25 feet deep within that cube."
      },
      {
        question: "What happens to creatures underwater when I Part Water?",
        answer: "They're suddenly in air at the bottom of a 20-foot trench. Aquatic creatures might suffocate, and any creature falls 20 feet to the bottom. This can be devastating tactically."
      },
      {
        question: "Can the Flood effect damage structures?",
        answer: "The spell doesn't specify structural damage, but raising water 20 feet floods buildings, lifts boats, and creates chaos. DM discretion on secondary effects like waterlogged structures or swept-away objects."
      }
    ],
    category: "utility-control",
    searchVolume: 4200
  },
  {
    slug: "telekinesis-5e",
    name: "Telekinesis",
    level: "5th",
    school: "Transmutation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature: You can try to move a Huge or smaller creature. The target must make a Strength check contested by your spellcasting ability check. If you win, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> in your telekinetic grip. Object: You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell. If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away and can move it up to 30 feet.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it requires your action each round to maintain and move the target",
      "Allowing objects heavier than 1,000 pounds to be moved",
      "Not using contested checks for creatures and worn/carried objects",
      "Thinking you can use it to make melee attacks with objects - the spell doesn't grant attack actions"
    ],
    dmTips: [
      "Great for environmental puzzles and creative problem-solving",
      "Lifting creatures and dropping them can be devastating - they take fall damage",
      "The <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> condition is powerful - advantage for attackers, disadvantage for the target",
      "Consider having enemies target the caster's concentration when someone is held telekinetically"
    ],
    faq: [
      {
        question: "Can I throw creatures or objects to deal damage?",
        answer: "The spell moves targets up to 30 feet but doesn't explicitly grant attack actions. However, dropping a creature causes fall damage (1d6 per 10 feet). Dropping 30 feet = 3d6 damage, and they're <a href=\"/rules/conditions/prone-condition-5e/\">prone</a>."
      },
      {
        question: "Does Telekinesis require my action every round?",
        answer: "Yes. You must use your action each round to maintain control and move the target. If you don't use your action for Telekinesis, the target is no longer affected (though concentration continues)."
      },
      {
        question: "Can I move creatures through walls or other creatures?",
        answer: "No. You move them 'in any direction' but they can't pass through solid objects or occupied spaces. You can move them up, around corners, or through openings though."
      },
      {
        question: "What's the size/weight limit?",
        answer: "Creatures: Huge or smaller (no weight specified). Objects: up to 1,000 pounds. An adult dragon is too big, but you could lift a horse, a treasure chest, or most enemies."
      },
      {
        question: "Can enemies break free from Telekinesis?",
        answer: "Each round you try to affect a creature, they contest your spellcasting ability check with their Strength. If they win, they resist that round. The <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> condition only lasts until end of your next turn."
      }
    ],
    category: "utility-control",
    searchVolume: 5800
  },
  {
    slug: "misty-step-5e",
    name: "Misty Step",
    level: "2nd",
    school: "Conjuration",
    castingTime: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it only requires a bonus action - you can still cast a cantrip as your action",
      "Trying to teleport to spaces you can't see",
      "Not using it to escape <a href=\"/rules/conditions/grappled-condition-5e/\">grapples</a> or <a href=\"/rules/conditions/restrained-condition-5e/\">restraints</a> - teleportation frees you",
      "Forgetting it's only 30 feet, not unlimited"
    ],
    dmTips: [
      "One of the best mobility spells in the game due to bonus action casting",
      "Perfect for escaping <a href=\"/rules/conditions/grappled-condition-5e/\">grapples</a>, webs, or dangerous situations",
      "Can be used to reach high places, cross chasms, or bypass obstacles",
      "The silvery mist is great for description and atmosphere"
    ],
    faq: [
      {
        question: "Does Misty Step escape <a href=\"/rules/conditions/grappled-condition-5e/\">grapples</a>?",
        answer: "Yes! Teleportation doesn't require movement, so being <a href=\"/rules/conditions/grappled-condition-5e/\">grappled</a> or <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> doesn't prevent it. You vanish from the grappler's grip and reappear up to 30 feet away. Excellent escape tool."
      },
      {
        question: "Can I cast another spell the same turn?",
        answer: "Yes, but only a cantrip. When you cast a spell as a bonus action, you can only cast cantrips with your action that turn. So Misty Step + Firebolt works, but Misty Step + Fireball doesn't."
      },
      {
        question: "Can I Misty Step through walls or barriers?",
        answer: "You must see the destination. If you can't see through a wall, you can't teleport through it. However, you can teleport through bars, windows, or any barrier you can see past."
      },
      {
        question: "Does Misty Step trigger opportunity attacks?",
        answer: "No! Opportunity attacks require leaving someone's reach using your movement, action, or reaction. Teleportation doesn't use any of those - you simply vanish and reappear."
      },
      {
        question: "What if the space I'm teleporting to becomes occupied?",
        answer: "The spell requires an 'unoccupied space that you can see.' If someone moves there before you complete the spell, you'd need to choose a different destination or the spell might fail."
      }
    ],
    category: "utility-control",
    searchVolume: 15200
  },
  {
    slug: "fly-5e",
    name: "Fly",
    level: "3rd",
    school: "Transmutation",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a wing feather from any bird)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Warlock", "Wizard"],
    description: "You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
    commonMistakes: [
      "Forgetting the target falls when concentration breaks - this can be deadly",
      "Not tracking the 10-minute duration carefully",
      "Forgetting the 60-foot flying speed is quite fast",
      "Not considering fall damage if the spell ends while aloft"
    ],
    dmTips: [
      "Flight opens up three-dimensional combat and exploration",
      "Breaking the caster's concentration can be devastating if allies are high up",
      "Consider how flying changes encounter dynamics - ranged attacks become more important",
      "At higher levels, you can fly the whole party for amazing tactical options"
    ],
    faq: [
      {
        question: "What happens if Fly ends while I'm in the air?",
        answer: "You fall immediately and take 1d6 bludgeoning damage per 10 feet fallen. At 100 feet up, that's 10d6 damage. Breaking the caster's concentration can be lethal - stay aware of your altitude."
      },
      {
        question: "How fast is 60 feet of flying speed?",
        answer: "Very fast! Standard walking speed is 30 feet. Flying 60 feet means you can dash for 120 feet of movement - that's crossing a football field in 6 seconds. Highly mobile."
      },
      {
        question: "Can I hover with the Fly spell?",
        answer: "The spell grants flying speed but doesn't specify hovering. RAW, you might need to keep moving. Many DMs allow hovering, but check with yours. Without hovering, you fall if you don't move."
      },
      {
        question: "Can I fly while wearing heavy armor?",
        answer: "Yes! Fly grants a flying speed regardless of armor. However, if concentration breaks, you fall - and heavy armor wearers often can't Dexterity save well or have other ways to mitigate fall damage."
      },
      {
        question: "Can I give multiple creatures flight?",
        answer: "Yes, when upcast. At 4th level: 2 creatures. At 5th level: 3 creatures. And so on. Great for aerial assaults or party-wide tactical mobility."
      }
    ],
    category: "utility-control",
    searchVolume: 11800
  },
  {
    slug: "greater-invisibility-5e",
    name: "Greater Invisibility",
    level: "4th",
    school: "Illusion",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting this doesn't end when the target attacks - that's the key difference from Invisibility",
      "Not granting advantage on attack rolls for being an unseen attacker",
      "Not imposing disadvantage on attacks against the invisible creature",
      "Forgetting it still requires concentration"
    ],
    dmTips: [
      "Much more powerful than regular Invisibility due to persisting through attacks",
      "Devastating when used on a rogue or other damage dealer",
      "<a href=\"/rules/conditions/invisible-condition-5e/\">Invisible</a> creatures can still be detected through sound, scent, or tracks",
      "Can trivialize some encounters, so consider enemies with blindsight or tremorsense"
    ],
    faq: [
      {
        question: "Does Greater Invisibility end when you attack?",
        answer: "No! This is the key difference from regular Invisibility. Greater Invisibility persists through attacks and spellcasting, lasting the full minute (concentration permitting). This makes it far more powerful in combat."
      },
      {
        question: "Do I get advantage on all attacks while invisible?",
        answer: "Yes. You're an unseen attacker, so you have advantage on attack rolls. Enemies attack you with disadvantage because they can't see you (<a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> condition benefits). This stacks offensively and defensively."
      },
      {
        question: "Can enemies target me at all?",
        answer: "Yes, if they know your location. They can hear you, see your effects, or use abilities to locate you. They just attack with disadvantage. Area effects work normally against invisible creatures."
      },
      {
        question: "Why is Greater Invisibility a 4th-level spell?",
        answer: "Because it's essentially permanent advantage on attacks and disadvantage on attacks against you for a full minute. Cast it on a rogue and watch Sneak Attack devastate every round with double advantage dice."
      },
      {
        question: "Does True Seeing counter Greater Invisibility?",
        answer: "Yes. True Seeing lets a creature see <a href=\"/rules/conditions/invisible-condition-5e/\">invisible</a> creatures and objects. Creatures with blindsight also ignore invisibility entirely, perceiving you through other senses."
      }
    ],
    category: "utility-control",
    searchVolume: 8900
  },
  {
    slug: "web-5e",
    name: "Web",
    level: "2nd",
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a bit of spiderweb)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area. If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet. Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> as long as it remains in the webs or until it breaks free. A creature <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained. The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.",
    damage: "2d4 fire (if webs ignited)",
    savingThrow: "Dexterity",
    higherLevels: null,
    commonMistakes: [
      "Forgetting the webs need to be anchored or they collapse",
      "Not allowing creatures to use their action to escape with a Strength check",
      "Forgetting the webs are flammable - this can backfire or be used tactically",
      "Not tracking that the area is difficult terrain and lightly obscured"
    ],
    dmTips: [
      "Excellent crowd control spell that can completely shut down melee enemies",
      "The flammable property creates interesting tactical decisions",
      "Great for area denial and protecting chokepoints",
      "Consider the environment - needs anchoring points to work properly"
    ],
    faq: [
      {
        question: "Does Web need to be anchored to something?",
        answer: "Yes. Webs must be anchored between solid masses (walls, trees, floor/ceiling) or layered on a surface. If not properly anchored, the web collapses and the spell ends at the start of your next turn."
      },
      {
        question: "Can creatures escape from Web?",
        answer: "Yes. <a href=\"/rules/conditions/restrained-condition-5e/\">Restrained</a> creatures can use their action to make a Strength check against your spell save DC. On success, they're no longer <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> but still in difficult terrain and may need to save again."
      },
      {
        question: "What happens if you set Web on fire?",
        answer: "The webs are flammable! Any 5-foot cube exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire. You can clear the web but might hurt allies."
      },
      {
        question: "Do creatures automatically get restrained in Web?",
        answer: "Not always. Creatures make a Dexterity save when they start their turn in the webs OR enter them. On success, they're not <a href=\"/rules/conditions/restrained-condition-5e/\">restrained</a> - just in difficult terrain that lightly obscures the area."
      },
      {
        question: "How big is Web's area?",
        answer: "A 20-foot cube - that's 8,000 cubic feet of webbing. Layered on a surface it's only 5 feet deep. This can block hallways, trap groups, or create significant obstacles."
      }
    ],
    category: "utility-control",
    searchVolume: 10400
  },
  {
    slug: "hold-monster-5e",
    name: "Hold Monster",
    level: "5th",
    school: "Enchantment",
    castingTime: "1 action",
    range: "90 feet",
    components: "V, S, M (a small, straight piece of iron)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be <a href=\"/rules/conditions/paralyzed-condition-5e/\">paralyzed</a> for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.",
    commonMistakes: [
      "Forgetting it doesn't work on undead",
      "Not remembering attacks within 5 feet are automatic critical hits",
      "Forgetting <a href=\"/rules/conditions/paralyzed-condition-5e/\">paralyzed</a> creatures auto-fail Strength and Dexterity saves",
      "Not tracking that the target gets a save at the end of each of its turns"
    ],
    dmTips: [
      "Like Hold Person but works on any creature (except undead)",
      "Can completely remove a powerful enemy from combat",
      "Automatic crits from melee attacks make this devastating",
      "At higher levels, can shut down multiple enemies at once"
    ],
    faq: [
      {
        question: "What's the difference between Hold Monster and Hold Person?",
        answer: "Hold Person (2nd level) only works on humanoids. Hold Monster (5th level) works on any creature type except undead. The 3-level difference reflects the massive increase in valid targets."
      },
      {
        question: "What exactly does <a href=\"/rules/conditions/paralyzed-condition-5e/\">paralyzed</a> do?",
        answer: "<a href=\"/rules/conditions/incapacitated-condition-5e/\">Incapacitated</a> (no actions/reactions), can't move or speak, auto-fails Strength and Dexterity saves, attacks against have advantage, and hits from within 5 feet are automatic critical hits."
      },
      {
        question: "Why doesn't Hold Monster work on undead?",
        answer: "Undead are immune to many enchantment effects due to their nature. This balances the spell and encourages diverse party tactics. Use Turn Undead or radiant damage instead."
      },
      {
        question: "Can I target dragons, demons, or other big threats?",
        answer: "Yes! Unlike Hold Person, this works on dragons, fiends, aberrations, giants - nearly anything except undead. That's why it's 5th level. One failed save can end a boss fight."
      },
      {
        question: "Can I hold multiple monsters?",
        answer: "Yes, when upcast. At 6th level: 2 creatures. At 7th level: 3 creatures. They must be within 30 feet of each other. Devastating against non-undead enemy groups."
      }
    ],
    category: "utility-control",
    searchVolume: 7800
  },
  {
    slug: "feather-fall-5e",
    name: "Feather Fall",
    level: "1st",
    school: "Transmutation",
    castingTime: "1 reaction, which you take when you or a creature within 60 feet of you falls",
    range: "60 feet",
    components: "V, M (a small feather or piece of down)",
    duration: "1 minute",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting it's a reaction - can be cast even when surprised by a fall",
      "Not using it when allies are knocked off cliffs or flying ends",
      "Thinking it prevents all falling - creatures still descend at 60 feet per round",
      "Forgetting you can target up to 5 creatures"
    ],
    dmTips: [
      "Essential safety net for high-level adventurers",
      "Can be used offensively - let enemies fall then save yourself",
      "The 60 feet per round descent means very tall falls take multiple rounds",
      "Great insurance when exploring high places or fighting flying enemies"
    ],
    faq: [
      {
        question: "Can I cast Feather Fall after I've started falling?",
        answer: "Yes! It's a reaction triggered 'when you or a creature within 60 feet of you falls.' You can cast it mid-fall, even if surprised by a trapdoor or pushed off a cliff."
      },
      {
        question: "How slow is 60 feet per round?",
        answer: "Very slow! Normal falling is 500 feet per round. At 60 feet per round, a 300-foot fall takes 5 rounds (30 seconds). This gives time to prepare for landing or be rescued."
      },
      {
        question: "Can I target enemies with Feather Fall?",
        answer: "The spell says 'creatures' without the word 'willing,' so RAW you can. However, it prevents fall damage - this would typically help enemies, not harm them."
      },
      {
        question: "Does Feather Fall work if I'm <a href=\"/rules/conditions/unconscious-condition-5e/\">unconscious</a>?",
        answer: "You need to cast it as a reaction, which requires being conscious. If you're knocked <a href=\"/rules/conditions/unconscious-condition-5e/\">unconscious</a> mid-flight, you can't save yourself. An ally must cast it to save you."
      },
      {
        question: "Can I target 5 people falling from different heights?",
        answer: "Yes, as long as they're all within 60 feet of you and currently falling. You can save an entire party pushed off a cliff with one casting."
      }
    ],
    category: "utility-control",
    searchVolume: 9600
  },
  {
    slug: "levitate-5e",
    name: "Levitate",
    level: "2nd",
    school: "Transmutation",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "One creature or loose object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected. The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target's altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell's range.",
    damage: null,
    savingThrow: "Constitution (unwilling creatures)",
    higherLevels: null,
    commonMistakes: [
      "Forgetting levitated creatures can't move normally - they must push off surfaces",
      "Not using this offensively to remove melee enemies from combat",
      "Thinking you can move the target without using your action",
      "Forgetting the 20-foot height limit"
    ],
    dmTips: [
      "Can effectively remove melee-only enemies from combat",
      "Useful for crossing gaps or reaching high places",
      "Levitated creatures are sitting ducks for ranged attacks",
      "Consider how enemies might push off walls or throw things to move"
    ],
    faq: [
      {
        question: "Can a levitated creature move at all?",
        answer: "Only by pushing or pulling against fixed objects within reach, moving as if climbing. In an open field with nothing to grab, they're stuck floating. Indoors near walls, they can maneuver."
      },
      {
        question: "Can I use Levitate offensively?",
        answer: "Yes! Target an unwilling melee enemy (Constitution save). If they fail, lift them 20 feet up. They can't reach you with melee attacks and can't move unless they grab something."
      },
      {
        question: "What happens when Levitate ends?",
        answer: "The creature falls normally and takes fall damage if high enough. From 20 feet (max height), that's 2d6 damage. You can end concentration strategically to drop enemies."
      },
      {
        question: "Can the caster fly with Levitate?",
        answer: "Not really. You can move yourself up/down 20 feet as part of your movement, but horizontal movement requires pushing off surfaces. It's vertical mobility, not true flight."
      },
      {
        question: "Does Levitate work on objects?",
        answer: "Yes! One creature OR loose object up to 500 pounds. You can lift treasure chests, boulders, or other objects. Useful for puzzles and creative problem-solving."
      }
    ],
    category: "utility-control",
    searchVolume: 8700
  },
  {
    slug: "plane-shift-5e",
    name: "Plane Shift",
    level: "7th",
    school: "Conjuration",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence)",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    description: "You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle. You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.",
    damage: null,
    savingThrow: "Charisma (unwilling creature)",
    higherLevels: null,
    commonMistakes: [
      "Forgetting the forked rod must be attuned to the destination plane",
      "Not realizing unwilling creatures require both a melee spell attack AND a save",
      "Thinking you can precisely control where you appear - it's general area only",
      "Forgetting this can transport up to 9 creatures total"
    ],
    dmTips: [
      "Campaign-defining spell that enables planar adventures",
      "Can permanently remove enemies from the fight if they fail the save",
      "The material component creates interesting quest hooks",
      "Consider how planar travel affects the story and campaign structure"
    ],
    faq: [
      {
        question: "What's the tuning fork component for?",
        answer: "You need a forked metal rod (250+ gp) specifically attuned to your destination plane. Each plane requires a different fork. Acquiring these is often a quest hook or significant expense."
      },
      {
        question: "Can I banish enemies with Plane Shift?",
        answer: "Yes! Make a melee spell attack, then the target makes a Charisma save. On failure, they're transported to a random location on the plane you specify. They must find their own way back."
      },
      {
        question: "How precise is the destination?",
        answer: "General terms only - 'the City of Brass' or 'Dispater's palace.' You appear in or near the destination. For precision, use a teleportation circle's sigil sequence."
      },
      {
        question: "Can the whole party travel together?",
        answer: "Yes! Up to 8 willing creatures can link hands with you and travel together. That's a full adventuring party with room to spare."
      },
      {
        question: "What planes can I travel to?",
        answer: "Any plane of existence you have a tuning fork for: the Feywild, Shadowfell, Elemental Planes, Outer Planes (Heavens, Hells, etc.), or the Ethereal Plane. Your DM determines what forks are available."
      }
    ],
    category: "utility-control",
    searchVolume: 6200
  },
  {
    slug: "teleport-5e",
    name: "Teleport",
    level: "7th",
    school: "Conjuration",
    castingTime: "1 action",
    range: "10 feet",
    components: "V",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature. The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table to determine what happens based on your familiarity: Permanent circle (on target), Associated object (off target), Very familiar (similar area), Seen casually (mishap), Viewed once (mishap), Description (mishap), False destination (mishap).",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Not tracking familiarity with destinations carefully",
      "Forgetting mishaps can be deadly - appearing in a solid object",
      "Thinking you can teleport to places you've never been safely",
      "Not realizing teleportation circles make this spell completely reliable"
    ],
    dmTips: [
      "High-level transportation spell that changes how the party moves",
      "Mishaps should be consequential but not instant death",
      "Encourage players to establish teleportation circles in safe havens",
      "Consider how enemies might use or counter teleportation"
    ],
    faq: [
      {
        question: "How reliable is Teleport?",
        answer: "Depends on familiarity. Permanent teleportation circles: 100% safe. Very familiar locations: 24% mishap/similar area risk. Seen once: 43% mishap risk. Unknown: 50% mishap. Establish safe circles!"
      },
      {
        question: "What happens with a mishap?",
        answer: "Each creature takes 3d10 force damage, and the DM rerolls on the table. You might end up in a similar area, somewhere random, or mishap again (more damage). Very dangerous for unfamiliar destinations."
      },
      {
        question: "What makes a location 'very familiar'?",
        answer: "A place you've been very often, carefully studied, or can see when you cast the spell. Your home base, a frequently visited inn, or a location you're currently looking at through a window."
      },
      {
        question: "Can I teleport objects instead of creatures?",
        answer: "Yes! A single object that fits in a 10-foot cube and isn't held by an unwilling creature. Useful for moving treasure, supplies, or other large items."
      },
      {
        question: "What's the best way to use Teleport safely?",
        answer: "Establish permanent teleportation circles in safe havens and memorize their sigil sequences. Alternatively, always teleport to places you can currently see or have associated objects from."
      }
    ],
    category: "utility-control",
    searchVolume: 9100
  },
  {
    slug: "slow-5e",
    name: "Slow",
    level: "3rd",
    school: "Transmutation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a drop of molasses)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration. An affected target's speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. A creature affected by this spell makes another Wisdom saving throw at the end of each of its turns. On a successful save, the effect ends for it.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: null,
    commonMistakes: [
      "Forgetting it can affect up to 6 creatures - excellent against groups",
      "Not tracking all the effects - speed, AC, saves, reactions, actions, attacks, spells",
      "Thinking creatures can't act at all - they can, just much less effectively",
      "Forgetting affected creatures get saves at the end of each turn"
    ],
    dmTips: [
      "One of the best debuff spells in the game, affecting multiple aspects of combat",
      "Can completely shut down enemy spellcasters with the delayed casting",
      "The -2 to AC makes affected creatures much easier to hit",
      "Especially devastating against enemies with multiattack"
    ],
    faq: [
      {
        question: "How many effects does Slow actually impose?",
        answer: "A lot! Speed halved, -2 AC, -2 Dex saves, no reactions, only action OR bonus action (not both), max one attack per turn, and 50% chance spells are delayed. It's a comprehensive debuff."
      },
      {
        question: "Does Slow affect creatures with Multiattack?",
        answer: "Yes, devastatingly. Multiattack lets creatures make multiple attacks as one action, but Slow limits them to one attack regardless. That giant's three claw attacks become one."
      },
      {
        question: "How does the delayed spellcasting work?",
        answer: "When an affected creature tries to cast a spell with 1-action casting time, roll d20. On 11+, the spell doesn't take effect until their next turn, and they must use that turn's action to complete it."
      },
      {
        question: "Can affected creatures still use legendary actions?",
        answer: "The spell limits actions and bonus actions but doesn't specifically address legendary actions. Most DMs rule legendary actions still work, but check with yours."
      },
      {
        question: "How does Slow compare to Haste?",
        answer: "They're opposites. Haste buffs one ally significantly. Slow debuffs up to six enemies moderately. Against groups, Slow often has more total impact than Haste has on one target."
      }
    ],
    category: "utility-control",
    searchVolume: 8400
  },
  {
    slug: "fear-5e",
    name: "Fear",
    level: "3rd",
    school: "Illusion",
    castingTime: "1 action",
    range: "Self (30-foot cone)",
    components: "V, S, M (a white feather or the heart of a hen)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You project a phantasmal image of a creature's worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become <a href=\"/rules/conditions/frightened-condition-5e/\">frightened</a> for the duration. While <a href=\"/rules/conditions/frightened-condition-5e/\">frightened</a> by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn't have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: null,
    commonMistakes: [
      "Forgetting <a href=\"/rules/conditions/frightened-condition-5e/\">frightened</a> creatures drop what they're holding",
      "Not enforcing that creatures must use Dash to flee",
      "Allowing saves too easily - creature must end turn without line of sight to you",
      "Thinking creatures can attack while fleeing - they must use Dash action"
    ],
    dmTips: [
      "Can completely scatter enemy formations",
      "Dropping held items can disarm dangerous foes",
      "Enemies fleeing can trigger opportunity attacks from the party",
      "Consider the environment - creatures may flee into hazards"
    ],
    faq: [
      {
        question: "Do <a href=\"/rules/conditions/frightened-condition-5e/\">frightened</a> creatures drop their weapons?",
        answer: "Yes! The spell explicitly states creatures 'drop whatever they're holding.' This can disarm dangerous foes or cause them to drop spell focuses, making casting difficult."
      },
      {
        question: "Can <a href=\"/rules/conditions/frightened-condition-5e/\">frightened</a> creatures do anything besides flee?",
        answer: "Not really. They must use the Dash action to move away from you by the safest route on each turn. They can't attack, cast spells (besides Dash), or take other actions while fleeing."
      },
      {
        question: "When do creatures get to save again?",
        answer: "Only at the end of a turn where they end in a location without line of sight to you. If they can still see you, no save. Position yourself to keep eyes on fleeing enemies."
      },
      {
        question: "Does Fear provoke opportunity attacks?",
        answer: "Yes! Creatures fleeing must take the safest route, but if that route passes by party members, those party members can make opportunity attacks. Great combo potential."
      },
      {
        question: "How big is the 30-foot cone?",
        answer: "It extends 30 feet from you in a direction you choose, widening as it goes. At maximum range, it's about 30 feet wide. Can hit multiple enemies in a group."
      }
    ],
    category: "utility-control",
    searchVolume: 9800
  },
  {
    slug: "phantasmal-force-5e",
    name: "Phantasmal Force",
    level: "2nd",
    school: "Illusion",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (a bit of fleece)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Wizard"],
    description: "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs. The phantasm includes sound, temperature, and other stimuli, also evident only to the creature. The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends. While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. The phantasm can deal 1d6 psychic damage to the target on each of your turns if it is in or passes through the phantasm's area or interacts with it.",
    damage: "1d6 psychic (per turn)",
    savingThrow: "Intelligence",
    higherLevels: null,
    commonMistakes: [
      "Making the illusion too obviously fake - it should be believable",
      "Forgetting only the target can see and interact with it",
      "Not allowing the 1d6 psychic damage each turn when appropriate",
      "Thinking the target knows it's fake immediately - they rationalize illogical results"
    ],
    dmTips: [
      "Very versatile spell limited only by creativity",
      "The target's mind fills in details and rationalizes inconsistencies",
      "Can create fake enemies, hazards, bridges, or allies",
      "The psychic damage is a nice bonus but the control is the real power"
    ],
    faq: [
      {
        question: "Can the target tell the illusion isn't real?",
        answer: "Not automatically. They rationalize illogical outcomes - if they 'hit' an illusory enemy and it doesn't die, they might think it's resistant or they missed. They must use an action to investigate."
      },
      {
        question: "Does the 1d6 psychic damage happen every turn?",
        answer: "Only if the phantasm is in a position to deal damage (interacting with or passing through the target's space). An illusory fire they're standing in? Yes. An illusory wall they avoid? No."
      },
      {
        question: "Can I change the illusion after casting?",
        answer: "The spell doesn't mention changing it. Once created, the phantasm maintains its form. You'd need to drop concentration and cast again to create something different."
      },
      {
        question: "What makes a good Phantasmal Force illusion?",
        answer: "Something that logically restricts the target: a cage, quicksand, fire, chains, a pit. Or something that makes them waste actions: a fake enemy to 'fight.' Get creative!"
      },
      {
        question: "Why does it target Intelligence instead of Wisdom?",
        answer: "It's about mental acuity and logic, not willpower. Creatures with low Intelligence (beasts, some monsters) are more susceptible. High-Int creatures like wizards resist it better."
      }
    ],
    category: "utility-control",
    searchVolume: 6800
  },
  {
    slug: "major-image-5e",
    name: "Major Image",
    level: "3rd",
    school: "Illusion",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a bit of fleece)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    description: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench). As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and the other sensory qualities of the image become faint to the creature.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.",
    commonMistakes: [
      "Forgetting the illusion can move and change - much better than minor illusion",
      "Not using the full sensory experience - sound, smell, temperature",
      "Thinking the illusion has substance - physical interaction reveals it",
      "Not tracking that you need to use your action to move it"
    ],
    dmTips: [
      "Extremely versatile for creative players",
      "Can create illusory allies, monsters, environmental hazards, or obstacles",
      "At 6th level or higher, becomes permanent without concentration",
      "Encourage creative uses but remember physical interaction breaks the illusion"
    ],
    faq: [
      {
        question: "What's the difference between Major Image and Minor Illusion?",
        answer: "Major Image: up to 20-foot cube, includes sound/smell/temperature, can move, requires concentration. Minor Illusion: 5-foot cube, sound OR image (not both), can't move, no concentration. Major is much more versatile."
      },
      {
        question: "Can Major Image deal damage or have physical effects?",
        answer: "No. You can't create damaging heat/cold, deafening sounds, or sickening smells. The illusion seems real but has no physical substance - things pass through it."
      },
      {
        question: "How do creatures see through the illusion?",
        answer: "Physical interaction reveals it (passing through it), or using an action to make an Intelligence (Investigation) check against your spell save DC. Otherwise, it appears completely real."
      },
      {
        question: "Can I make the illusion move?",
        answer: "Yes! Use your action to move it anywhere within range (120 feet). You can alter its appearance as it moves so movement looks natural - a walking person, flying dragon, etc."
      },
      {
        question: "What happens at 6th level or higher?",
        answer: "The spell becomes permanent until dispelled and no longer requires concentration. You can create lasting illusions - permanent illusory guards, fake treasure, or environmental deceptions."
      }
    ],
    category: "utility-control",
    searchVolume: 7200
  },
  {
    slug: "conjure-woodland-beings-5e",
    name: "Conjure Woodland Beings",
    level: "4th",
    school: "Conjuration",
    castingTime: "1 action",
    range: "60 feet",
    components: "V, S, M (one holly berry per creature summoned)",
    duration: "Concentration, up to 1 hour",
    concentration: true,
    ritual: false,
    classes: ["Druid", "Ranger"],
    description: "You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: One fey creature of challenge rating 2 or lower, two fey creatures of challenge rating 1 or lower, four fey creatures of challenge rating 1/2 or lower, or eight fey creatures of challenge rating 1/4 or lower. A summoned creature disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.",
    commonMistakes: [
      "Players choosing specific creatures - DM chooses what appears",
      "Summoning too many creatures and slowing combat to a crawl",
      "Forgetting verbal commands are needed to direct them",
      "Not considering the environment when choosing what fey appear"
    ],
    dmTips: [
      "Choose thematically appropriate fey - pixies in forests, sprites near mushrooms, etc.",
      "Pixies with polymorph can be campaign-breaking - consider carefully",
      "To speed play, have the player roll all attacks/damage together",
      "Consider house-ruling a maximum number of creatures to keep combat moving"
    ],
    faq: [
      {
        question: "Does the player choose which fey creatures appear?",
        answer: "No. The DM chooses what appears within the CR restriction. The player chooses the number option (one CR 2, two CR 1, etc.), but the DM picks specific creatures. This prevents the infamous 'pixie spam' problem."
      },
      {
        question: "Why is this spell controversial?",
        answer: "Eight pixies can each cast Polymorph (concentration), potentially turning 8 party members into T-Rexes. Many DMs limit what appears or use Errata clarifications that give the DM creature choice."
      },
      {
        question: "Do summoned fey require concentration from the caster?",
        answer: "The Conjure Woodland Beings spell requires your concentration. But summoned creatures with their own concentration spells maintain their own concentration independently."
      },
      {
        question: "Can I give complex commands to summoned fey?",
        answer: "You give verbal commands (no action required). Fey are intelligent and can follow complex orders, but they're not puppets - they might interpret commands creatively based on their nature."
      },
      {
        question: "What happens when summoned fey reach 0 HP?",
        answer: "They disappear. They don't die in a way that leaves a body, and they can't be healed or resurrected once dismissed. They simply vanish back to the Feywild."
      }
    ],
    category: "utility-control",
    searchVolume: 5600
  },
  {
    slug: "plant-growth-5e",
    name: "Plant Growth",
    level: "3rd",
    school: "Transmutation",
    castingTime: "1 action or 8 hours",
    range: "150 feet",
    components: "V, S",
    duration: "Instantaneous",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Druid", "Ranger"],
    description: "This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits. If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves. You can exclude one or more areas of any size within the spell's area from being affected. If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the 1-action version creates extreme difficult terrain (4:1 movement cost)",
      "Not using the 8-hour version for narrative purposes",
      "Thinking it works in areas with no plants",
      "Forgetting you can exclude areas from the effect"
    ],
    dmTips: [
      "The 1-action combat version is brutal crowd control with huge radius",
      "The 8-hour version is great for helping communities and gaining favor",
      "Movement through the area is 1/4 normal speed, essentially immobilizing slow creatures",
      "Consider how this affects flying creatures (doesn't) and burrowing creatures (might)"
    ],
    faq: [
      {
        question: "How severe is the 4:1 movement cost?",
        answer: "Devastating. A creature with 30-foot speed can only move 7.5 feet per turn through the area. Combine with the 100-foot radius and you've created an enormous area of near-impassable terrain."
      },
      {
        question: "Does Plant Growth require concentration?",
        answer: "No! Both versions are instantaneous and don't require concentration. The overgrown plants are permanent until cleared naturally or magically. One of the best 'cast and forget' control spells."
      },
      {
        question: "What's the difference between the two versions?",
        answer: "1-action: 100-foot radius of difficult terrain (4:1 movement cost). 8-hours: half-mile radius of enriched farmland that doubles harvest yields for a year. Completely different uses."
      },
      {
        question: "Can I exclude allies from the difficult terrain?",
        answer: "Yes! You can exclude one or more areas of any size within the spell's area. Create paths for your allies while enemies struggle through overgrown vegetation."
      },
      {
        question: "Does Plant Growth work indoors?",
        answer: "Only where 'normal plants' exist. In a stone dungeon with no plants, nothing happens. In a forest clearing, overgrown garden, or greenhouse? Absolutely devastating."
      }
    ],
    category: "utility-control",
    searchVolume: 6400
  },
  {
    slug: "wall-of-force-5e",
    name: "Wall of Force",
    level: "5th",
    school: "Evocation",
    castingTime: "1 action",
    range: "120 feet",
    components: "V, S, M (a pinch of powder made by crushing a clear gemstone)",
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    ritual: false,
    classes: ["Wizard"],
    description: "An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by-10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice which side). Nothing can physically pass through the wall. It is immune to all damage and can't be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting the wall is immune to all damage except disintegrate",
      "Not realizing it blocks the Ethereal Plane too",
      "Thinking dispel magic works on it - it doesn't",
      "Forgetting creatures are pushed to one side when it appears, not trapped"
    ],
    dmTips: [
      "One of the best defensive and control spells in the game",
      "Can split battlefields, protect allies, or trap enemies",
      "The dome or sphere shapes can create safe zones",
      "Disintegrate is the only spell that can destroy it, making it nearly impenetrable"
    ],
    faq: [
      {
        question: "Can anything destroy Wall of Force?",
        answer: "Only Disintegrate destroys it instantly. It's immune to all damage and Dispel Magic doesn't work on it. Breaking the caster's concentration ends it, making that the main counterplay."
      },
      {
        question: "Can creatures teleport through Wall of Force?",
        answer: "No. Nothing can physically pass through it, and it extends into the Ethereal Plane. Teleportation, phasing, and ethereal travel all fail. It's truly impassable."
      },
      {
        question: "What shapes can the wall take?",
        answer: "A hemisphere dome (up to 10-foot radius), a sphere (up to 10-foot radius), or a flat surface of up to ten 10-foot-by-10-foot panels. Panels must be contiguous. Very flexible!"
      },
      {
        question: "Can I trap creatures inside?",
        answer: "If you create a dome or sphere around them, yes! But when the wall appears, creatures in its space are pushed to one side (your choice). They get pushed out before being trapped."
      },
      {
        question: "Can attacks or spells pass through Wall of Force?",
        answer: "Nothing passes through - it's completely impassable. No attacks, spells, breath weapons, or effects. It's essentially a forcefield. Both sides are equally blocked."
      }
    ],
    category: "utility-control",
    searchVolume: 6900
  },
  {
    slug: "globe-of-invulnerability-5e",
    name: "Globe of Invulnerability",
    level: "6th",
    school: "Abjuration",
    castingTime: "1 action",
    range: "Self (10-foot radius)",
    components: "V, S, M (a glass or crystal bead that shatters when the spell ends)",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Sorcerer", "Wizard"],
    description: "An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration. Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.",
    commonMistakes: [
      "Forgetting it only blocks spells cast from outside the barrier",
      "Not realizing allies inside can cast spells out",
      "Thinking it blocks all spells - only 5th level or lower (or higher when upcast)",
      "Forgetting the barrier is immobile - you can't move it"
    ],
    dmTips: [
      "Creates a safe zone against enemy spellcasters",
      "Allies inside can cast out, but enemies outside can't cast in",
      "Doesn't protect against physical attacks or spells cast from inside",
      "At higher levels, can block increasingly powerful spells"
    ],
    faq: [
      {
        question: "Does Globe of Invulnerability block all spells?",
        answer: "No, only spells of 5th level or lower cast from OUTSIDE the barrier. Spells cast from inside the globe work normally, and 6th+ level spells pass through. Upcast to block higher-level spells."
      },
      {
        question: "Can allies inside cast spells at enemies outside?",
        answer: "Yes! The barrier only blocks spells cast from outside coming in. Spells cast from inside going out work normally. This creates a powerful tactical advantage."
      },
      {
        question: "Does it block physical attacks?",
        answer: "No. Arrows, swords, breath weapons (non-spell), and other physical effects pass through normally. It only blocks spells - very different from Wall of Force."
      },
      {
        question: "Is the barrier mobile?",
        answer: "No. It's immobile and centered where you cast it. If you move, you might leave the protection. Plan your positioning carefully before casting."
      },
      {
        question: "What happens when upcast?",
        answer: "At 7th level: blocks 6th-level spells. At 8th level: blocks 7th-level spells. At 9th level: blocks 8th-level spells. Cast at 9th level, only Wish can affect you from outside."
      }
    ],
    category: "utility-control",
    searchVolume: 5400
  },
  {
    slug: "modify-memory-5e",
    name: "Modify Memory",
    level: "5th",
    school: "Enchantment",
    castingTime: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    concentration: true,
    ritual: false,
    classes: ["Bard", "Wizard"],
    description: "You attempt to reshape another creature's memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> by you for the duration. The <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> target is <a href=\"/rules/conditions/incapacitated-condition-5e/\">incapacitated</a> and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target's memories are modified. While this charm lasts, you can affect the target's memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity, reduce its clarity, or change its memory. You must speak to the target to describe how its memories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature's memory isn't altered. Otherwise, the modified memories take hold when the spell ends.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "If you cast this spell using a spell slot of 6th level or higher, you can alter the target's memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature's past (9th level).",
    commonMistakes: [
      "Trying to modify memories while in combat - target has advantage",
      "Forgetting the event must be 10 minutes or less",
      "Not describing the modified memory clearly",
      "Thinking you can modify any memory - base spell only works on last 24 hours"
    ],
    dmTips: [
      "Incredibly powerful for espionage, infiltration, and cover-ups",
      "The target's mind fills in gaps, so you don't need perfect details",
      "Can be used to make enemies forget alliances or create false memories of friendship",
      "At 9th level, can rewrite a creature's entire history"
    ],
    faq: [
      {
        question: "Can the target resist Modify Memory?",
        answer: "Yes, with a Wisdom save (advantage if fighting you). If they take damage or are targeted by another spell during the 1-minute concentration, the spell ends with no effect."
      },
      {
        question: "How long can the modified memory be?",
        answer: "Up to 10 minutes of a single event. You can't modify a full day's memories, just one 10-minute-or-less event within the time limit determined by spell level."
      },
      {
        question: "Does the target know their memory was modified?",
        answer: "Not usually. They believe the modified memory is real. Greater Restoration or similar magic can restore original memories, revealing the modification."
      },
      {
        question: "How far back can I modify memories?",
        answer: "Base (5th level): 24 hours. 6th level: 7 days. 7th level: 30 days. 8th level: 1 year. 9th level: any time in the creature's past. Campaign-defining at high levels."
      },
      {
        question: "Can I use this in combat?",
        answer: "Technically, but the target has advantage on the save, you need 1 minute of concentration while they're <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> and <a href=\"/rules/conditions/incapacitated-condition-5e/\">incapacitated</a>, and any damage ends it. Better for non-combat situations."
      }
    ],
    category: "utility-control",
    searchVolume: 5200
  },
  {
    slug: "geas-5e",
    name: "Geas",
    level: "5th",
    school: "Enchantment",
    castingTime: "1 minute",
    range: "60 feet",
    components: "V",
    duration: "30 days",
    concentration: false,
    ritual: false,
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Wizard"],
    description: "You place a magical command on a creature that you can see within range, forcing it to carry out some service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> by you for the duration. While the creature is <a href=\"/rules/conditions/charmed-condition-5e/\">charmed</a> by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell. You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends. You can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it.",
    damage: "5d10 psychic (if command disobeyed)",
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. When you use a 9th level spell slot, the spell lasts until it is ended by one of the spells mentioned above.",
    commonMistakes: [
      "Forgetting the 1-minute casting time - not for combat",
      "Issuing vague commands that can be interpreted away",
      "Not tracking the 30-day duration",
      "Thinking the damage prevents disobedience - it's a punishment, not prevention"
    ],
    dmTips: [
      "Great for forcing long-term service from NPCs",
      "The creature can still disobey, they just take damage",
      "At higher levels, becomes nearly permanent",
      "Can be a plot device - PCs might encounter NPCs under geas"
    ],
    faq: [
      {
        question: "Can the target disobey a Geas?",
        answer: "Yes! They take 5d10 psychic damage (once per day max) when acting against your command, but they CAN disobey. Geas compels through pain, not absolute control. Strong-willed targets might endure it."
      },
      {
        question: "Why is the casting time 1 minute?",
        answer: "To prevent combat use. You need a relatively helpless or willing target. It's designed for binding prisoners, recruiting allies, or enforcing agreements - not battlefield control."
      },
      {
        question: "How long does Geas last?",
        answer: "Base: 30 days. 7th-8th level: 1 year. 9th level: Until ended by specific spells (Remove Curse, Greater Restoration, Wish). At 9th level, it's essentially permanent."
      },
      {
        question: "What commands can I give?",
        answer: "Almost anything except 'certain death' commands. 'Serve me,' 'Protect this location,' 'Never reveal my secrets,' 'Complete this quest.' The more specific and reasonable, the better."
      },
      {
        question: "How do I remove a Geas?",
        answer: "Remove Curse, Greater Restoration, or Wish ends it. Otherwise, wait for the duration to expire (30 days base). The caster can also dismiss it voluntarily as an action."
      }
    ],
    category: "utility-control",
    searchVolume: 6100
  },
  {
    slug: "find-familiar-5e",
    name: "Find Familiar",
    level: "1st",
    school: "Conjuration",
    castingTime: "1 hour",
    range: "10 feet",
    components: "V, S, M (10 gp worth of charcoal, incense, and herbs consumed in a brass brazier)",
    duration: "Instantaneous",
    concentration: false,
    ritual: true,
    classes: ["Wizard"],
    description: "You gain the service of a familiar, a spirit that takes an animal form you choose. The familiar appears in an unoccupied space within range. It can be a bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. The familiar has the statistics of the chosen form, but is a celestial, fey, or fiend (your choice) instead of a beast. Your familiar acts independently but obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but can take other actions. When the familiar drops to 0 hit points, it disappears, leaving behind no physical form, and reappears after you cast this spell again. You can communicate telepathically with your familiar within 100 feet, and as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn (gaining any special senses the familiar has). As an action, you can dismiss your familiar to a pocket dimension or summon it from there to within 30 feet of you. You can only have one familiar at a time.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Forgetting that familiars can't attack (but can take Help action, deliver touch spells, etc.)",
      "Not using ritual casting - this spell doesn't need to consume a spell slot",
      "Forgetting the 10 gp material component is consumed each time you cast it",
      "Not tracking the 100-foot telepathy range",
      "Assuming the familiar dies when reduced to 0 HP - it just disappears and can be resummoned"
    ],
    dmTips: [
      "Familiars are incredible for scouting - especially owls with flyby and darkvision",
      "The familiar's ability to deliver touch spells is extremely powerful for wizards",
      "Consider the familiar as a character with personality, not just a tool",
      "Being able to see through familiar's eyes breaks many puzzles - plan accordingly",
      "Owl familiar with Help action every turn giving advantage is very strong in combat"
    ],
    faq: [
      {
        question: "What's the best familiar choice?",
        answer: "Owl is generally considered best: 60 ft. flying, Flyby (no opportunity attacks), darkvision 120 ft., and +3 Perception. It's perfect for scouting and using the Help action in combat. Cat is good for urban stealth, spider for climbing."
      },
      {
        question: "Can my familiar attack?",
        answer: "No. Familiars explicitly cannot attack. They CAN take the Help action (granting advantage to an ally), deliver touch spells, use the Search action, take the Dodge action, and use special abilities like grappling."
      },
      {
        question: "How does delivering touch spells work?",
        answer: "Your familiar can deliver a touch spell you cast if it's within 100 feet of you. You cast the spell, then the familiar can use its reaction to deliver it. The familiar must be in range to touch the target. This is incredibly useful for spells like Shocking Grasp or Vampiric Touch."
      },
      {
        question: "What happens when my familiar 'dies'?",
        answer: "It doesn't truly die - it disappears leaving no body. You can resummon it by casting Find Familiar again (1 hour, 10 gp). The same spirit returns in whatever form you choose. In the meantime, you have no familiar."
      },
      {
        question: "Can I change my familiar's form?",
        answer: "Yes! When you cast Find Familiar, you can choose a new form. It's still the same spirit, just different shape. Some wizards change forms based on the situation (owl for travel, spider for dungeon crawling, etc.)."
      }
    ],
    category: "utility-control",
    searchVolume: 14800,
    aliases: ["familiar-5e", "find familiar"]
  },
  {
    slug: "leomunds-tiny-hut-5e",
    name: "Leomund's Tiny Hut",
    level: "3rd",
    school: "Evocation",
    castingTime: "1 minute",
    range: "Self (10-foot-radius hemisphere)",
    components: "V, S, M (a small crystal bead)",
    duration: "8 hours",
    concentration: false,
    ritual: true,
    classes: ["Bard", "Wizard"],
    description: "A 10-foot-radius immobile dome of force springs into existence around and above you. The spell fails if a creature larger than you is in the area. Nine creatures of Medium size or smaller can fit inside. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through. The atmosphere inside is comfortable and dry, regardless of weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, but transparent from inside.",
    damage: null,
    savingThrow: null,
    higherLevels: null,
    commonMistakes: [
      "Thinking the Tiny Hut is indestructible (Dispel Magic removes it)",
      "Forgetting creatures inside when cast can freely pass through the dome",
      "Assuming you can attack from inside the dome (objects can't pass through either direction)",
      "Not realizing the caster must remain inside or the spell ends",
      "Thinking it blocks teleportation (it doesn't - enemies can teleport in)"
    ],
    dmTips: [
      "Tiny Hut makes safe long rests almost guaranteed - plan around this at higher levels",
      "Creatures inside at casting can leave and re-enter; creatures outside cannot enter at all",
      "You CAN dispel it - have enemy casters use Dispel Magic for dramatic effect",
      "Enemies can still surround the hut and attack when the party emerges",
      "Some DMs allow attacks from inside (Crawford has given conflicting rulings) - establish house rules early"
    ],
    faq: [
      {
        question: "Can we attack from inside Leomund's Tiny Hut?",
        answer: "RAW, no. 'Objects are barred from passing through' means arrows, spell effects, etc. can't exit. Some tables allow it since the dome is transparent from inside. Discuss with your DM."
      },
      {
        question: "Does Dispel Magic work on Tiny Hut?",
        answer: "Yes! Dispel Magic ends the hut immediately. Smart enemies will use this - the party isn't as safe as they think if facing spellcasters."
      },
      {
        question: "Can enemies teleport into the hut?",
        answer: "Yes. The hut blocks physical passage, not teleportation. Misty Step, Dimension Door, and similar spells can bypass it. Something to consider in high-magic settings."
      },
      {
        question: "What happens if the caster leaves?",
        answer: "The spell ends immediately. The caster must remain inside for the full duration. This means the wizard can't scout ahead while the party rests in the hut."
      },
      {
        question: "Can creatures dig under the hut?",
        answer: "The spell creates a hemisphere, not a full sphere. Creatures can theoretically tunnel under it (DM discretion). Most tables don't bother with this, but it's technically possible."
      }
    ],
    category: "utility-control",
    searchVolume: 8900,
    aliases: ["tiny-hut-5e", "tiny hut", "leomunds tiny hut"]
  }
];
