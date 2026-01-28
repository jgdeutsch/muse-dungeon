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
    description: "You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, with advantage if you or your companions are fighting it. If it fails, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    commonMistakes: [
      "Thinking charmed means mind control - it only makes them friendly, not obedient",
      "Forgetting the target knows it was charmed when the spell ends",
      "Not giving advantage on the save when the party is hostile or in combat",
      "Assuming charmed creatures will fight for you or endanger themselves"
    ],
    dmTips: [
      "Charmed creatures are friendly but not stupid - they won't give away critical secrets immediately",
      "Describe the charm wearing off and the target realizing what happened for dramatic effect",
      "Remember that harmful actions from companions also break the spell",
      "This is great for social encounters but can trivialize some interactions if overused"
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
    description: "Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the spell must succeed on a Strength saving throw or become restrained by the entangling plants until the spell ends. A restrained creature can use its action to make a Strength check against your spell save DC. On a success, it frees itself. When the spell ends, the conjured plants wilt away.",
    damage: null,
    savingThrow: "Strength",
    higherLevels: null,
    commonMistakes: [
      "Forgetting the area becomes difficult terrain even for creatures that save",
      "Not allowing restrained creatures to use their action to attempt escape",
      "Thinking creatures that enter the area later are automatically restrained - they're not, only at casting",
      "Forgetting this requires plants/ground - doesn't work on stone floors or in midair"
    ],
    dmTips: [
      "Describe the plants vividly - grasping vines, thorny brambles, or writhing roots",
      "Remember the area is difficult terrain for allies too, creating tactical decisions",
      "Great for controlling choke points or protecting fleeing NPCs",
      "Consider whether the environment has sufficient vegetation for the spell to work"
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
      "Track concentration carefully - losing it means the target is stunned for a round",
      "The lethargy effect can be devastating if concentration breaks at a critical moment",
      "Consider the dramatic description of supernatural speed and then sudden exhaustion"
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
    description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
    damage: null,
    savingThrow: "Wisdom",
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
    commonMistakes: [
      "Forgetting that paralyzed creatures auto-fail Strength and Dexterity saves",
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
    description: "A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.",
    damage: null,
    savingThrow: null,
    higherLevels: "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    commonMistakes: [
      "Forgetting the spell ends immediately when the target attacks or casts a spell",
      "Thinking invisible means undetectable - creatures can still be heard, smelled, or leave tracks",
      "Not enforcing that dropped items become visible",
      "Assuming invisibility grants advantage on all attacks - only if the attacker is unseen"
    ],
    dmTips: [
      "Invisible creatures still make noise, have a scent, and leave footprints",
      "Enemies can make Perception checks to notice signs of invisible creatures",
      "Remember that attacking ends the spell, so it's great for positioning but not sustained combat",
      "Describe how NPCs react to invisible party members - confusion, alarm, sweeping attacks"
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
      "Thinking it makes you invisible - it only grants a Stealth bonus",
      "Forgetting that the bonus applies to ongoing Stealth checks, not just the initial one"
    ],
    dmTips: [
      "This spell is incredibly powerful for group stealth, making whole parties excellent at infiltration",
      "The +10 bonus means even heavy armor wearers can be stealthy",
      "Remember creatures must stay within 30 feet of the caster to maintain the bonus",
      "Consider how enemies react when they find no tracks despite knowing intruders were present"
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
    description: "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.",
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
    description: "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the next creature. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren't affected by this spell.",
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
    description: "You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell. The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.",
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
    description: "You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell. Creature: You can try to move a Huge or smaller creature. The target must make a Strength check contested by your spellcasting ability check. If you win, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. Object: You can try to move an object that weighs up to 1,000 pounds. If the object isn't being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell. If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature's Strength check. If you succeed, you pull the object away and can move it up to 30 feet.",
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
      "The restrained condition is powerful - advantage for attackers, disadvantage for the target",
      "Consider having enemies target the caster's concentration when someone is held telekinetically"
    ],
    category: "utility-control",
    searchVolume: 5800
  }
];
