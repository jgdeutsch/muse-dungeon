import type { RulePage } from "./rules";

export const conditionPages: RulePage[] = [
  {
    slug: "blinded-condition-5e",
    name: "Blinded Condition 5e",
    category: "conditions",
    description: "A blinded creature can't see and automatically fails any ability check that requires sight.",
    searchVolume: 3200,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A blinded creature can't see and automatically fails any ability check that requires sight.</li><li>Attack rolls against the creature have <strong>advantage</strong>, and the creature's attack rolls have <strong>disadvantage</strong>.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>Blindness can be caused by spells like <strong>Blindness/Deafness</strong>, <strong>Color Spray</strong>, and <strong>Darkness</strong> (if the creature can't see through magical darkness). Environmental effects such as fog, smoke, or being in a completely dark area without darkvision also cause this condition.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Blinded creatures can still hear, so abilities that rely on hearing still work.</li><li>Blinded effectively cancels out the Invisible condition — both get advantage and disadvantage on attacks against each other, which cancel out.</li><li>A blinded spellcaster can still cast spells that don't require them to see the target.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Forgetting that blinded creatures can still make attacks — they just have disadvantage",
      "Not giving advantage on attacks against blinded creatures",
      "Assuming blinded means the creature can't move — it can, it just can't see",
    ],
    dmTips: [
      "Describe what the blinded character hears and feels to keep them engaged",
      "Remember that many monsters have blindsight or tremorsense and are unaffected",
    ],
  },
  {
    slug: "charmed-condition-5e",
    name: "Charmed Condition 5e",
    category: "conditions",
    description: "A charmed creature can't attack the charmer and the charmer has advantage on social checks against it.",
    searchVolume: 2900,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.</li><li>The charmer has <strong>advantage</strong> on any ability check to interact socially with the creature.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>Spells like <strong>Charm Person</strong>, <strong>Charm Monster</strong>, <strong>Hypnotic Pattern</strong>, and <strong>Suggestion</strong>. Some creatures like Vampires and Succubi have innate charm abilities.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Charmed does NOT mean mind-controlled — the creature still acts on its own, it just treats the charmer as a friend.</li><li>The charmed creature can still attack the charmer's allies.</li><li>Many charmed effects end if the charmer or their allies harm the creature.</li><li>Elves and half-elves have advantage on saves against being charmed (Fey Ancestry).</li></ul>`,
      },
    ],
    commonMistakes: [
      "Treating charmed as full mind control — it only prevents attacking the charmer and gives social advantage",
      "Forgetting the charmed creature can still attack the charmer's allies",
      "Not ending the charm when the charmer's allies damage the creature (if the spell says so)",
    ],
    dmTips: [
      "Charmed is one of the most misunderstood conditions — be clear about what it does and doesn't do",
      "Have NPCs react realistically when a charm ends and they realize what happened",
    ],
  },
  {
    slug: "deafened-condition-5e",
    name: "Deafened Condition 5e",
    category: "conditions",
    description: "A deafened creature can't hear and automatically fails any ability check that requires hearing.",
    searchVolume: 1800,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A deafened creature can't hear and automatically fails any ability check that requires hearing.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>The <strong>Blindness/Deafness</strong> spell can cause deafness. Thunderwave and similar loud effects might temporarily deafen at DM discretion. Some monster abilities also cause deafness.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Deafened has relatively minor combat impact compared to other conditions.</li><li>A deafened caster can still cast spells with verbal components — they can speak, they just can't hear.</li><li>Deafened creatures can't be affected by abilities that require the target to hear (like some bardic features).</li><li>Thunder damage is not related to the deafened condition mechanically.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Thinking deafened creatures can't cast spells with verbal components — they can still speak",
      "Making deafened too punishing in combat — it mainly affects perception checks",
    ],
    dmTips: [
      "Use deafness for dramatic effect — the chaos of battle goes silent, creating tension",
      "Consider how deafened affects communication and coordination with the party",
    ],
  },
  {
    slug: "frightened-condition-5e",
    name: "Frightened Condition 5e",
    category: "conditions",
    description: "A frightened creature has disadvantage on ability checks and attack rolls while it can see the source of its fear.",
    searchVolume: 3600,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A frightened creature has <strong>disadvantage on ability checks and attack rolls</strong> while the source of its fear is within line of sight.</li><li>The creature <strong>can't willingly move closer</strong> to the source of its fear.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>Spells like <strong>Fear</strong>, <strong>Cause Fear</strong>, and <strong>Phantasmal Killer</strong>. Dragon's <strong>Frightful Presence</strong>, the Conquest Paladin's <strong>Conquering Presence</strong>, and the Berserker Barbarian's <strong>Intimidating Presence</strong>.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>The disadvantage only applies while the source is in line of sight — break line of sight to fight normally.</li><li>The creature CAN move away from or laterally to the source, just not closer.</li><li>Immunity to the frightened condition (like Berserker's Mindless Rage) prevents all effects.</li><li>Devotion Paladin's Aura of Courage makes nearby allies immune.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Applying disadvantage even when the creature can't see the source of fear — it only applies while in line of sight",
      "Thinking frightened means the creature must flee — it just can't move closer",
      "Forgetting the creature can still attack, just with disadvantage",
    ],
    dmTips: [
      "Frightened is great for making encounters feel dangerous without being lethal",
      "Use environmental features to break line of sight and give players tactical options",
    ],
  },
  {
    slug: "grappled-condition-5e",
    name: "Grappled Condition 5e",
    category: "conditions",
    description: "A grappled creature's speed becomes 0 and it can't benefit from any bonus to its speed.",
    searchVolume: 4100,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A grappled creature's speed becomes <strong>0</strong>, and it can't benefit from any bonus to its speed.</li><li>The condition ends if the grappler is incapacitated.</li><li>The condition also ends if an effect removes the grappled creature from the reach of the grappler (e.g., Thunderwave).</li></ul>`,
      },
      {
        id: "grappling-rules",
        title: "How Grappling Works",
        content: `<ul><li><strong>Initiate:</strong> Use the Attack action to make a special melee attack (replaces one attack). Make a <strong>Strength (Athletics)</strong> check contested by the target's <strong>Strength (Athletics) or Dexterity (Acrobatics)</strong> (target's choice).</li><li><strong>Escape:</strong> A grappled creature can use its action to escape. <strong>Strength (Athletics) or Dexterity (Acrobatics)</strong> vs. the grappler's <strong>Strength (Athletics)</strong>.</li><li><strong>Moving:</strong> The grappler can drag or carry the creature, but their speed is halved (unless the creature is 2+ sizes smaller).</li></ul>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Grappled does NOT give advantage or disadvantage on attacks — combine with the <strong>Shove</strong> action (prone) for advantage.</li><li>A grappled+prone creature has speed 0 (from grapple) and can't stand up (standing requires speed) — a powerful combo.</li><li>Grappling requires a free hand.</li><li>You can grapple creatures up to one size larger than you.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Thinking grappling gives advantage on attacks — it doesn't by itself, use shove+grapple combo",
      "Forgetting that grappling uses Athletics, not an attack roll",
      "Not allowing the target to choose Athletics or Acrobatics to escape",
    ],
    dmTips: [
      "Grapple+shove prone is one of the strongest martial combos — reward players who use it",
      "Large monsters can grapple multiple creatures at once",
    ],
  },
  {
    slug: "incapacitated-condition-5e",
    name: "Incapacitated Condition 5e",
    category: "conditions",
    description: "An incapacitated creature can't take actions or reactions.",
    searchVolume: 2600,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>An incapacitated creature <strong>can't take actions or reactions</strong>.</li></ul><p>This is the base condition that several other conditions include (stunned, paralyzed, unconscious, petrified).</p>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>Rarely applied on its own — it's typically part of other conditions. Some effects like <strong>Hypnotic Pattern</strong> (incapacitated while charmed by it) and certain monster abilities apply it directly.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>An incapacitated creature CAN still move (unless another effect prevents it).</li><li>An incapacitated creature CAN still speak (unless another effect prevents it).</li><li>Concentration spells end if the caster becomes incapacitated.</li><li>An incapacitated grappler automatically releases their grapple.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Thinking incapacitated means unconscious — it only prevents actions and reactions",
      "Forgetting that incapacitated creatures can still move and speak",
      "Not ending concentration when a caster becomes incapacitated",
    ],
    dmTips: [
      "Incapacitated is the building block condition — understand it well since stunned, paralyzed, and unconscious all include it",
    ],
  },
  {
    slug: "invisible-condition-5e",
    name: "Invisible Condition 5e",
    category: "conditions",
    description: "An invisible creature is impossible to see without magic or a special sense. It has advantage on attacks and attacks against it have disadvantage.",
    searchVolume: 3800,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>An invisible creature is <strong>impossible to see</strong> without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by noise or tracks.</li><li>Attack rolls against the creature have <strong>disadvantage</strong>, and the creature's attack rolls have <strong>advantage</strong>.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p><strong>Invisibility</strong> and <strong>Greater Invisibility</strong> spells. <strong>Potion of Invisibility</strong>. Some creatures have innate invisibility. The <strong>Hide</strong> action doesn't make you invisible — it makes you hidden (different thing).</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Regular Invisibility ends when you attack or cast a spell. Greater Invisibility does not.</li><li>Invisible does NOT mean undetectable — creatures can still hear, smell, or feel you.</li><li>Attacking an invisible creature you can't see: you must guess the square. If wrong, you miss automatically (DM may not reveal this).</li><li>See Invisibility, Truesight, Blindsight, and Tremorsense can all detect invisible creatures.</li><li>Faerie Fire outlines invisible creatures, negating the invisibility's combat benefits.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Treating invisible as undetectable — enemies can still hear you and know your general area",
      "Forgetting that regular Invisibility ends when you attack or cast a spell",
      "Not having enemies use Perception checks to locate invisible creatures by sound",
    ],
    dmTips: [
      "Describe environmental cues — footprints in dust, displaced air, splashing in puddles",
      "Use Faerie Fire or See Invisibility to counter invisible enemies and teach players these tools exist",
    ],
  },
  {
    slug: "paralyzed-condition-5e",
    name: "Paralyzed Condition 5e",
    category: "conditions",
    description: "A paralyzed creature is incapacitated, can't move or speak, automatically fails Str/Dex saves, and attacks within 5 ft are auto-crits.",
    searchVolume: 3400,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A paralyzed creature is <strong>incapacitated</strong> (can't take actions or reactions) and can't move or speak.</li><li>The creature automatically <strong>fails Strength and Dexterity saving throws</strong>.</li><li>Attack rolls against the creature have <strong>advantage</strong>.</li><li>Any attack that hits the creature from within 5 feet is a <strong>critical hit</strong>.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p><strong>Hold Person</strong> (humanoids only), <strong>Hold Monster</strong> (any creature), <strong>Ghoul's Claws</strong> (paralysis on failed Con save), and some poisons.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Paralyzed is one of the most devastating conditions — auto-crits from melee make it extremely dangerous.</li><li>Hold Person allows a new save at the end of each turn.</li><li>Elves are immune to the Ghoul's paralysis (but not Hold Person).</li><li>Paralyzed ends concentration spells since it includes incapacitated.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Forgetting the auto-crit on melee attacks — this is what makes paralyzed so devastating",
      "Applying auto-crits to ranged attacks — only attacks from within 5 feet auto-crit",
      "Not giving the creature a new save each turn (for spells that allow it)",
    ],
    dmTips: [
      "Hold Person on a key enemy can swing an entire encounter — use it on players sparingly",
      "Ghouls are terrifying at low levels because of paralysis — telegraph the danger",
    ],
  },
  {
    slug: "petrified-condition-5e",
    name: "Petrified Condition 5e",
    category: "conditions",
    description: "A petrified creature is turned to stone, incapacitated, and unaware of its surroundings. It has resistance to all damage.",
    searchVolume: 2100,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A petrified creature is transformed, along with any nonmagical objects it's wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.</li><li>The creature is <strong>incapacitated</strong>, can't move or speak, and is unaware of its surroundings.</li><li>Attack rolls against the creature have <strong>advantage</strong>.</li><li>The creature automatically <strong>fails Strength and Dexterity saving throws</strong>.</li><li>The creature has <strong>resistance to all damage</strong>.</li><li>The creature is immune to <strong>poison and disease</strong> (existing poison/disease is suspended).</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p><strong>Flesh to Stone</strong> spell (gradual petrification over multiple saves), <strong>Basilisk's</strong> petrifying gaze, <strong>Medusa's</strong> petrifying gaze, <strong>Cockatrice's</strong> bite, and <strong>Beholder's</strong> petrification ray.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li><strong>Greater Restoration</strong> can end petrification.</li><li>The resistance to all damage means a petrified creature is actually somewhat protected.</li><li>Time doesn't pass for the petrified creature — useful for story hooks.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Forgetting resistance to all damage — petrified creatures are harder to destroy than you'd think",
      "Not tracking the gradual petrification from Flesh to Stone (multiple saves over turns)",
    ],
    dmTips: [
      "Petrification is a great story device — discovering petrified adventurers hints at danger ahead",
      "Give players clear warning signs before a basilisk or medusa encounter",
    ],
  },
  {
    slug: "poisoned-condition-5e",
    name: "Poisoned Condition 5e",
    category: "conditions",
    description: "A poisoned creature has disadvantage on attack rolls and ability checks.",
    searchVolume: 3100,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A poisoned creature has <strong>disadvantage on attack rolls and ability checks</strong>.</li></ul><p>Note: The poisoned condition is separate from poison damage. You can take poison damage without being poisoned, and being poisoned doesn't necessarily deal damage.</p>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>Many monster attacks (Giant Spiders, Poisonous Snakes, Wyverns), <strong>poisons</strong> applied to weapons, <strong>Ray of Sickness</strong> spell, <strong>Cloudkill</strong>, Assassin's poison, and poisoned food/drink.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li><strong>Dwarves</strong> have advantage on saves against poison and resistance to poison damage (Dwarven Resilience).</li><li><strong>Protection from Poison</strong> spell suppresses the condition and gives advantage on saves.</li><li><strong>Lesser Restoration</strong> cures the poisoned condition.</li><li>Many creatures (undead, constructs, fiends) are <strong>immune</strong> to the poisoned condition.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Confusing poison damage with the poisoned condition — they're separate mechanics",
      "Forgetting that many creature types are immune to the poisoned condition",
      "Not distinguishing between the many types of poisons in the DMG",
    ],
    dmTips: [
      "Poisoned is a common condition that's easy to apply and moderate in impact — good for low-level encounters",
      "Make antidotes available as loot to encourage resource management",
    ],
  },
  {
    slug: "prone-condition-5e",
    name: "Prone Condition 5e",
    category: "conditions",
    description: "A prone creature's only movement option is to crawl. Melee attacks against it have advantage, but ranged attacks have disadvantage.",
    searchVolume: 4500,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A prone creature's only movement option is to <strong>crawl</strong> (1 ft costs 2 ft of movement).</li><li>The creature has <strong>disadvantage on attack rolls</strong>.</li><li>An attack roll against the creature has <strong>advantage if the attacker is within 5 feet</strong>. Otherwise, the attack roll has <strong>disadvantage</strong>.</li></ul>`,
      },
      {
        id: "standing-up",
        title: "Standing Up",
        content: `<p>Standing up costs movement equal to <strong>half your speed</strong>. You can't stand up if you don't have enough movement left. You can also drop prone for free on your turn (no movement cost).</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li><strong>Grapple + Prone</strong> is the classic combo: the creature can't stand because standing requires speed, and grappled sets speed to 0.</li><li>Prone is a <strong>disadvantage for ranged attackers</strong> — dropping prone against archers is a valid tactic.</li><li>Flying creatures that are knocked prone <strong>fall</strong> (unless they can hover).</li><li>The <strong>Shove</strong> action can knock a creature prone (Athletics vs. Athletics/Acrobatics).</li></ul>`,
      },
    ],
    commonMistakes: [
      "Giving melee advantage at all ranges — only within 5 feet. Ranged attacks have disadvantage against prone",
      "Forgetting that standing up costs half your speed, not half your movement remaining",
      "Not knocking flying creatures out of the sky when they're knocked prone",
    ],
    dmTips: [
      "Prone is a great tactical condition — reward players who use the terrain and shove action",
      "Flying enemies are especially vulnerable to effects that knock them prone",
    ],
  },
  {
    slug: "restrained-condition-5e",
    name: "Restrained Condition 5e",
    category: "conditions",
    description: "A restrained creature's speed becomes 0. Attack rolls against it have advantage, and its attack rolls and Dex saves have disadvantage.",
    searchVolume: 2800,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A restrained creature's speed becomes <strong>0</strong>, and it can't benefit from any bonus to its speed.</li><li>Attack rolls against the creature have <strong>advantage</strong>.</li><li>The creature's attack rolls have <strong>disadvantage</strong>.</li><li>The creature has <strong>disadvantage on Dexterity saving throws</strong>.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p><strong>Entangle</strong> spell, <strong>Web</strong> spell, <strong>Ensnaring Strike</strong>, <strong>Net</strong> weapon, grappling vines, and many monster abilities (Roper's tendrils, Giant Spider's web).</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Restrained is stronger than grappled — it adds advantage on attacks against the creature and disadvantage on their attacks and Dex saves.</li><li>The Entangle spell is a 1st-level spell that can restrain multiple creatures — very efficient.</li><li>Freedom of Movement makes you immune to being restrained.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Confusing restrained with grappled — restrained is significantly more punishing",
      "Forgetting disadvantage on Dex saves — this makes AoE spells more dangerous",
    ],
    dmTips: [
      "Restrained is a great condition for terrain-based encounters — webs, vines, quicksand",
      "Web and Entangle are fantastic low-level spells for both players and enemies",
    ],
  },
  {
    slug: "stunned-condition-5e",
    name: "Stunned Condition 5e",
    category: "conditions",
    description: "A stunned creature is incapacitated, can't move, can speak only falteringly, and automatically fails Str/Dex saves.",
    searchVolume: 3900,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>A stunned creature is <strong>incapacitated</strong> (can't take actions or reactions), can't move, and can speak only falteringly.</li><li>The creature automatically <strong>fails Strength and Dexterity saving throws</strong>.</li><li>Attack rolls against the creature have <strong>advantage</strong>.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p><strong>Stunning Strike</strong> (Monk), <strong>Power Word Stun</strong>, <strong>Contagion</strong> (Flesh Rot), <strong>Divine Word</strong>, <strong>Symbol</strong> (Stunning), Mind Flayer's <strong>Mind Blast</strong>, and various monster abilities.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Stunned is nearly as devastating as paralyzed — the main difference is no auto-crits.</li><li>Monk's Stunning Strike is one of the most powerful features in the game — it costs 1 ki point and can shut down any creature.</li><li>Concentration spells end when a caster is stunned (since it includes incapacitated).</li><li>Stunned creatures can't maintain grapples.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Confusing stunned with paralyzed — stunned does NOT give auto-crits from melee",
      "Forgetting that stunned includes incapacitated — no actions, no reactions",
      "Not ending concentration when a caster is stunned",
    ],
    dmTips: [
      "Stunning Strike is a player's best friend against boss monsters — plan for it",
      "Mind Flayers' Mind Blast can stun the entire party — extremely dangerous",
    ],
  },
  {
    slug: "unconscious-condition-5e",
    name: "Unconscious Condition 5e",
    category: "conditions",
    description: "An unconscious creature is incapacitated, can't move or speak, is unaware of its surroundings, drops what it's holding, and falls prone.",
    searchVolume: 2400,
    sections: [
      {
        id: "effect",
        title: "Effect",
        content: `<ul><li>An unconscious creature is <strong>incapacitated</strong>, can't move or speak, and is <strong>unaware of its surroundings</strong>.</li><li>The creature <strong>drops whatever it's holding</strong> and <strong>falls prone</strong>.</li><li>The creature automatically <strong>fails Strength and Dexterity saving throws</strong>.</li><li>Attack rolls against the creature have <strong>advantage</strong>.</li><li>Any attack that hits the creature from within 5 feet is a <strong>critical hit</strong>.</li></ul>`,
      },
      {
        id: "common-sources",
        title: "Common Sources",
        content: `<p>Dropping to <strong>0 hit points</strong> (non-lethal or death saves), <strong>Sleep</strong> spell, being knocked out, and some poisons or monster abilities.</p>`,
      },
      {
        id: "interactions",
        title: "Key Interactions",
        content: `<ul><li>Unconscious from 0 HP → death saving throws. Unconscious from Sleep → waking up takes an action from an ally or taking damage.</li><li>The auto-crit from melee (within 5 ft) means two failed death saves from a single melee hit on an unconscious PC at 0 HP.</li><li>An unconscious creature is also prone — ranged attacks from far away still have disadvantage.</li><li>Healing an unconscious creature at 0 HP restores consciousness immediately.</li></ul>`,
      },
    ],
    commonMistakes: [
      "Forgetting that melee hits on unconscious creatures are auto-crits — this means 2 death save failures",
      "Not dropping the creature prone when they fall unconscious",
      "Attacking unconscious creatures at range without noting the prone disadvantage",
    ],
    dmTips: [
      "Intelligent enemies may attack downed PCs to finish them off — use this sparingly for tension",
      "The Sleep spell bypasses hit points entirely — terrifying at low levels, less so at high levels",
    ],
  },
];
