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
    faq: [
      {
        question: "Can a blinded creature still make attacks?",
        answer: "Yes! Blinded creatures can still attack - they just have disadvantage on attack rolls. They can target creatures they can hear or otherwise detect. The DM may require them to guess a square for targets they can't locate."
      },
      {
        question: "Does blinding an invisible creature cancel out the advantages?",
        answer: "Yes, essentially. A blinded attacker has disadvantage (can't see target), and an invisible defender gives attackers disadvantage. When both are blind/invisible to each other, the advantage and disadvantage cancel out - both attack normally."
      },
      {
        question: "Can a blinded spellcaster still cast spells?",
        answer: "Many spells require you to 'see' the target and can't be cast while blinded. However, spells targeting yourself, touching a creature, or affecting an area you can designate (like 'within 30 feet') can still be cast. Check each spell's targeting requirements."
      },
      {
        question: "Does the Darkness spell blind creatures inside it?",
        answer: "Creatures without special senses (darkvision doesn't help in magical darkness) effectively have the blinded condition while in the Darkness spell's area. They can't see, auto-fail sight-based checks, have disadvantage on attacks, and attacks against them have advantage."
      },
      {
        question: "How does blindsight or tremorsense interact with the blinded condition?",
        answer: "Creatures with blindsight or tremorsense can 'see' without using sight, so they ignore the combat penalties of being blinded against creatures within their special sense range. They still auto-fail sight-based ability checks like reading."
      }
    ]
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
    faq: [
      {
        question: "Can a charmed creature still attack the charmer's allies?",
        answer: "Yes! The charmed condition only prevents attacking or targeting the charmer specifically with harmful effects. The charmed creature can freely attack the charmer's allies, cast harmful spells on them, or take any other hostile action against anyone except the charmer."
      },
      {
        question: "Does the target know they were charmed after it ends?",
        answer: "For Charm Person specifically, yes - the spell states the target knows it was charmed when the effect ends. Other charm effects vary - check the specific spell or ability. This is why charming someone and then being hostile can backfire socially."
      },
      {
        question: "What does 'treats the charmer as a friendly acquaintance' actually mean?",
        answer: "The charmed creature views the charmer favorably - like a friend or ally - and won't attack them. However, 'friendly' doesn't mean 'obedient.' They won't follow suicidal orders, betray deeply-held beliefs, or do things they'd never do for a friend. It's not mind control."
      },
      {
        question: "Does Fey Ancestry (elves/half-elves) make them immune to charm?",
        answer: "No, Fey Ancestry gives advantage on saving throws against being charmed, not immunity. Elves and half-elves can still be charmed - they're just more resistant. Full immunity to charmed is rarer and found on creatures like Devotion Paladins (via aura) or certain monsters."
      },
      {
        question: "Can you charm a creature that's already charmed by someone else?",
        answer: "Yes, unless a specific effect says otherwise. A creature can be charmed by multiple sources simultaneously. They can't attack any of their charmers, and each charmer has advantage on social checks. This can create interesting situations with competing influences."
      }
    ]
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
    faq: [
      {
        question: "Can a deafened creature cast spells with verbal components?",
        answer: "Yes! The verbal component requires the caster to speak, not hear. A deafened spellcaster can still vocalize the magical words needed for spells. They just can't hear themselves or anything else. Deafened doesn't affect spellcasting."
      },
      {
        question: "Does thunder damage deafen creatures?",
        answer: "Not automatically by the rules - thunder damage and the deafened condition are separate mechanics. However, some specific effects (like critical hits from thunder or DM rulings for extremely loud sounds) might cause temporary deafness. Check the specific spell or effect."
      },
      {
        question: "How does deafened affect Perception checks?",
        answer: "A deafened creature automatically fails any ability check that requires hearing. This includes hearing approaching enemies, listening at doors, or perceiving whispered conversations. Visual Perception is unaffected. Passive Perception for sound-based detection fails."
      },
      {
        question: "Can a deafened creature be affected by Bardic Inspiration?",
        answer: "Bardic Inspiration requires the target to 'hear' the bard. A deafened creature cannot receive Bardic Inspiration dice. Similarly, any ability that requires the target to hear you (like Command spell) won't work on deafened creatures."
      },
      {
        question: "Is deafened a common or useful condition to inflict?",
        answer: "It's relatively rare and situationally useful. Deafened has minimal combat impact (no attack/save penalties), making it weaker than most conditions. It's mainly useful for preventing communication, blocking hearing-required abilities, or creating dramatic/stealth moments."
      }
    ]
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
    faq: [
      {
        question: "Does the disadvantage apply if I close my eyes or look away?",
        answer: "The condition states 'while the source of its fear is within line of sight.' If you can't see the source (eyes closed, behind cover, turned around), the disadvantage doesn't apply. However, willingly looking away might require an action or DM ruling."
      },
      {
        question: "Can a frightened creature run toward the source to attack, then retreat?",
        answer: "No, a frightened creature 'can't willingly move closer' to the source of its fear. You cannot move closer at all while frightened, even if you plan to move away afterward. You can attack from your current position (with disadvantage) or move away/laterally."
      },
      {
        question: "What's the difference between frightened and the Fear spell?",
        answer: "Frightened is the condition with disadvantage and can't-move-closer effects. The Fear spell causes the frightened condition PLUS forces you to Dash away. Other sources of frightened (like Frightful Presence) only apply the base condition without the forced fleeing."
      },
      {
        question: "How does Aura of Courage interact with frightened?",
        answer: "A Paladin's Aura of Courage (10th level) makes the paladin and allies within 10 feet immune to the frightened condition. This is immunity - they can't be frightened while in the aura, and existing frightened conditions are suppressed while in range."
      },
      {
        question: "Does Mindless Rage make Barbarians immune to frightened?",
        answer: "Yes, while raging, a Berserker Barbarian with Mindless Rage (6th level) can't be charmed or frightened. If they were already frightened before raging, the effect is suspended during the rage. It returns when rage ends if the duration hasn't expired."
      }
    ]
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
    faq: [
      {
        question: "Does grappling give advantage on attack rolls?",
        answer: "No! Grappled only reduces speed to 0. To get advantage on attacks, combine grappling with the Shove action to knock the target prone. A grappled+prone creature can't stand up (needs speed) and attackers within 5 feet have advantage against prone targets."
      },
      {
        question: "Can I grapple with two hands full (weapon and shield)?",
        answer: "No, grappling requires a free hand. You need at least one empty hand to grab and hold a creature. You can grapple while holding a one-handed weapon, but not while wielding a two-handed weapon or holding a weapon and shield."
      },
      {
        question: "What size creatures can I grapple?",
        answer: "You can grapple creatures up to one size larger than you. A Medium creature can grapple up to Large. Features like the Rune Knight's Giant's Might or Enlarge spell can increase your size, letting you grapple bigger creatures."
      },
      {
        question: "How does escaping a grapple work?",
        answer: "The grappled creature uses their action to attempt escape. They make a Strength (Athletics) OR Dexterity (Acrobatics) check - their choice - contested by the grappler's Strength (Athletics). Success ends the grapple. This costs their action for the turn."
      },
      {
        question: "Can I move while grappling a creature?",
        answer: "Yes, but your speed is halved while dragging or carrying the grappled creature (unless they're two or more sizes smaller than you). You move and bring them with you. This is great for dragging enemies into hazards or away from allies."
      }
    ]
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
    faq: [
      {
        question: "Can an incapacitated creature still move?",
        answer: "Yes! Incapacitated only prevents taking actions and reactions. The creature can still move normally unless another effect (like stunned, paralyzed, or unconscious) also restricts movement. Pure incapacitated is rare - it's usually part of worse conditions."
      },
      {
        question: "What happens to concentration when incapacitated?",
        answer: "Concentration ends immediately when you become incapacitated. This is automatic - no Constitution save allowed. Any spell you were concentrating on ends. This is why conditions that incapacitate (stunned, paralyzed, unconscious) are so devastating to casters."
      },
      {
        question: "Can an incapacitated creature speak?",
        answer: "Yes, unless another effect prevents it. Pure incapacitated only blocks actions and reactions. The creature can speak, make noise, and communicate normally. Paralyzed and unconscious add the restriction of being unable to speak."
      },
      {
        question: "Does incapacitated end grapples?",
        answer: "If a grappler becomes incapacitated, their grapple ends automatically. The rules state 'The condition ends if the grappler is incapacitated.' This makes conditions that incapacitate very useful against grapplers."
      },
      {
        question: "What's the difference between incapacitated and stunned?",
        answer: "Incapacitated only prevents actions and reactions. Stunned includes incapacitated PLUS: can't move, can speak only falteringly, auto-fail Str/Dex saves, and attacks against you have advantage. Stunned is significantly worse than pure incapacitated."
      }
    ]
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
    faq: [
      {
        question: "Can enemies still attack me while I'm invisible?",
        answer: "Yes, but with disadvantage. Enemies can still hear you, smell you, or notice other signs. They might guess your square or use area effects. If they know your location, they attack with disadvantage. If they guess wrong, the attack automatically misses."
      },
      {
        question: "What's the difference between Invisibility and Greater Invisibility?",
        answer: "Regular Invisibility ends when you attack or cast a spell (concentration, up to 1 hour). Greater Invisibility does NOT end when you attack or cast - you stay invisible the whole time (concentration, up to 1 minute). Greater Invisibility is much more powerful in combat."
      },
      {
        question: "Does attacking while invisible give advantage?",
        answer: "Yes! An invisible creature has advantage on attack rolls because the target can't see them. With Greater Invisibility, you get advantage on every attack. With regular Invisibility, you get advantage on your first attack, then the spell ends."
      },
      {
        question: "How do I find an invisible creature?",
        answer: "Use Perception (hearing, smell) to detect their location. Area effects don't require seeing the target. Spells like Faerie Fire, See Invisibility, or True Seeing reveal them. Blindsight and Tremorsense detect them. Flour, paint, or water can reveal their position."
      },
      {
        question: "Can invisible creatures be targeted by spells?",
        answer: "Many spells require you to 'see' the target - these can't target invisible creatures. However, spells targeting 'a creature' or 'a point you can see' (for area effects) can still affect invisible creatures. Check each spell's targeting requirements."
      }
    ]
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
    faq: [
      {
        question: "Do attacks within 5 feet of a paralyzed creature automatically crit?",
        answer: "Yes! Any attack that hits a paralyzed creature from within 5 feet is automatically a critical hit. Combined with advantage on the attack, this makes paralysis devastatingly dangerous. A melee attacker almost certainly hits and deals double damage dice."
      },
      {
        question: "What's the difference between paralyzed and stunned?",
        answer: "Both prevent actions/movement and give attackers advantage. The key difference: paralyzed gives AUTO-CRITS on melee hits, stunned does not. Paralyzed also prevents all speech, while stunned allows faltering speech. Paralyzed is significantly more dangerous."
      },
      {
        question: "Can elves be paralyzed by Hold Person?",
        answer: "Yes! Elves are immune to the Ghoul's paralysis specifically (which calls out that elves are immune), but they are NOT immune to Hold Person or other paralysis effects. Fey Ancestry doesn't protect against paralysis - only sleep and charm."
      },
      {
        question: "How do you end paralysis from Hold Person?",
        answer: "Hold Person allows a new Wisdom saving throw at the end of each of the target's turns. Success ends the paralysis. Alternatively, the caster losing concentration ends it. There's no other escape - you can't use an action to break free like with grappling."
      },
      {
        question: "Does paralysis affect my death saves?",
        answer: "If you're at 0 HP and paralyzed, attacks within 5 feet that hit are auto-crits, causing 2 death save failures instead of 1. Since attackers also have advantage, a paralyzed character at 0 HP is in extreme danger of dying quickly."
      }
    ]
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
    faq: [
      {
        question: "How do you cure petrification?",
        answer: "Greater Restoration (5th-level spell) ends petrification. Some monster stat blocks mention specific cures (basilisk blood for basilisk petrification). The Wish spell can also cure it. Without magic, petrification is permanent - the creature becomes a statue forever."
      },
      {
        question: "What happens to a petrified creature's equipment?",
        answer: "Nonmagical objects the creature wears or carries are transformed along with them into stone. Magic items are not transformed - they typically fall to the ground or remain in the stone form (DM's discretion). When cured, nonmagical items return to normal."
      },
      {
        question: "Can you destroy a petrified creature?",
        answer: "Yes, but it's harder than you'd think. Petrified creatures have resistance to ALL damage. They also weigh 10x normal and are solid stone. If destroyed while petrified, they're dead - curing the petrification later doesn't help a shattered statue."
      },
      {
        question: "Does time pass for a petrified creature?",
        answer: "No! The creature 'ceases aging' and is 'unaware of its surroundings.' From their perspective, no time passes. They could be petrified for centuries and wake up moments later from their point of view. This makes petrification useful for story hooks."
      },
      {
        question: "How does Flesh to Stone's gradual petrification work?",
        answer: "The creature is restrained on a failed save. It must make Constitution saves at the end of each turn: 3 failures = petrified permanently, 3 successes = spell ends. This takes multiple rounds, giving allies time to break the caster's concentration."
      }
    ]
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
    faq: [
      {
        question: "What's the difference between poison damage and the poisoned condition?",
        answer: "They're separate mechanics. Poison damage is a damage type (like fire or slashing). The poisoned condition gives disadvantage on attacks and ability checks. You can take poison damage without being poisoned, and being poisoned doesn't deal damage by itself."
      },
      {
        question: "Which creatures are immune to the poisoned condition?",
        answer: "Many creature types: undead, constructs, most fiends, and many aberrations. Dwarves aren't immune but have advantage on saves and resistance to poison damage. Check the creature's stat block for immunities - it's one of the most commonly resisted conditions."
      },
      {
        question: "How do you cure the poisoned condition?",
        answer: "Lesser Restoration removes poisoned instantly. Protection from Poison suppresses it and gives advantage on future poison saves. Some poisons end after a specific duration. Antidotes (if available) typically end specific poisons. Long rests usually end poison effects."
      },
      {
        question: "Does poisoned affect saving throws?",
        answer: "No! Poisoned only gives disadvantage on attack rolls and ability checks. Saving throws are NOT ability checks, so poisoned doesn't affect saves. This is a common misconception - poisoned is less debilitating than many think."
      },
      {
        question: "Can you be poisoned multiple times for stacking effects?",
        answer: "The poisoned condition doesn't stack - you're either poisoned or not. However, different poison sources might deal poison damage (which does add up) or have additional effects beyond the condition. Multiple sources might also extend the duration."
      }
    ]
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
    faq: [
      {
        question: "Do ranged attacks have advantage or disadvantage against prone creatures?",
        answer: "Disadvantage! Attacks against a prone creature have advantage only if the attacker is within 5 feet. Ranged attacks (and melee attacks from farther than 5 feet) have disadvantage. Dropping prone against archers is a valid defensive tactic."
      },
      {
        question: "How much does standing up from prone cost?",
        answer: "Standing up costs movement equal to half your maximum speed. If your speed is 30 feet, standing costs 15 feet of movement. If you don't have enough movement left, you can't stand up that turn. This is not 'half your remaining movement' - it's half your speed."
      },
      {
        question: "What happens when a flying creature is knocked prone?",
        answer: "A flying creature knocked prone falls immediately, unless it can hover or is held aloft by magic (like the Fly spell). Falling deals 1d6 damage per 10 feet. This makes knocking flyers prone extremely effective - especially against dragons."
      },
      {
        question: "Can I drop prone for free?",
        answer: "Yes! Dropping prone costs no movement. You can drop prone anytime during your move for free. This lets you drop prone after moving, attack at disadvantage, then stay down for defense against ranged attackers on their turns."
      },
      {
        question: "Why is grapple + prone so powerful?",
        answer: "A grappled creature has speed 0. Standing from prone requires spending movement. With no speed, they can't spend movement to stand. The creature is stuck prone (advantage for melee attackers) and can't escape without first breaking the grapple."
      }
    ]
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
    faq: [
      {
        question: "What's the difference between restrained and grappled?",
        answer: "Grappled only sets speed to 0. Restrained sets speed to 0 AND gives attackers advantage, the creature's attacks have disadvantage, and the creature has disadvantage on Dex saves. Restrained is significantly more punishing than grappled."
      },
      {
        question: "Can I still cast spells while restrained?",
        answer: "Yes! Restrained doesn't prevent actions - you can still cast spells, make attacks (with disadvantage), and take other actions normally. You just can't move, have disadvantage on attacks, and enemies have advantage on you. Somatic components still work."
      },
      {
        question: "How do you escape being restrained?",
        answer: "It depends on the source. Entangle and Web require a Strength check as an action to escape. A Net requires using an action to make a DC 10 Strength check or dealing 5 slashing damage to the net. Check the specific effect for escape rules."
      },
      {
        question: "Does Freedom of Movement prevent restrained?",
        answer: "Yes! Freedom of Movement makes you immune to the restrained condition and prevents your movement from being reduced. It's an excellent counter to Web, Entangle, and grapple-heavy enemies. The spell lasts 1 hour with no concentration."
      },
      {
        question: "Why is restrained so dangerous for spellcasters?",
        answer: "Disadvantage on Dexterity saves makes area-of-effect spells like Fireball more dangerous to restrained creatures. They're more likely to take full damage. Combined with advantage on attacks against them, restrained casters are very vulnerable."
      }
    ]
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
    faq: [
      {
        question: "What's the difference between stunned and paralyzed?",
        answer: "Both are devastating, but paralyzed is worse. Both: incapacitated, can't move, auto-fail Str/Dex saves, attackers have advantage. Paralyzed adds: can't speak at all, and melee attacks within 5 feet AUTO-CRIT. Stunned allows faltering speech and no auto-crits."
      },
      {
        question: "Can a creature save against Stunning Strike multiple times per round?",
        answer: "A Monk can attempt Stunning Strike on each hit. Each requires 1 ki point and a Constitution save by the target. A high-level Monk can potentially force 4+ saves in one turn. The target saves against each one separately."
      },
      {
        question: "Does stunned end concentration?",
        answer: "Yes, automatically. Stunned includes the incapacitated condition, and becoming incapacitated ends concentration instantly. There's no save - the spell just ends. This makes stunning enemy casters extremely effective."
      },
      {
        question: "Why is Stunning Strike considered so powerful?",
        answer: "It costs only 1 ki point, targets Constitution (often high, but not always), can be attempted on every hit, and stunned is extremely debilitating. A stunned boss loses their turn, auto-fails Str/Dex saves, and takes attacks at advantage. It can trivialize encounters."
      },
      {
        question: "How do monsters typically cause stunned?",
        answer: "Mind Flayer's Mind Blast (Intelligence save, stuns everyone in a cone), Divine Word spell, Power Word Stun, and various legendary monster abilities. Monster-inflicted stuns often affect multiple targets or have no save on low-HP creatures."
      }
    ]
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
    faq: [
      {
        question: "What's the difference between unconscious from 0 HP and unconscious from Sleep?",
        answer: "From 0 HP: you make death saving throws, and damage causes failed saves. From Sleep: you're stable, taking damage wakes you up (no death saves), and an ally can use their action to wake you. Sleep is much less dangerous than dropping to 0 HP."
      },
      {
        question: "Do melee attacks on unconscious creatures automatically crit?",
        answer: "Yes! Any attack that hits an unconscious creature from within 5 feet is automatically a critical hit. Combined with advantage on the attack roll, this means near-certain hits for double damage dice. At 0 HP, this means 2 death save failures per hit."
      },
      {
        question: "Does an unconscious creature automatically fall prone?",
        answer: "Yes, an unconscious creature drops what they're holding and falls prone. This means ranged attacks actually have disadvantage (prone), partially offsetting the advantage (unconscious). The auto-crit only applies within 5 feet anyway."
      },
      {
        question: "How do you wake someone who is unconscious?",
        answer: "From Sleep: an ally can use their action to shake/slap them awake, or they take any damage. From 0 HP: any healing wakes them immediately (even 1 HP). Stabilizing (Medicine check or Spare the Dying) doesn't wake them - only healing does."
      },
      {
        question: "Can unconscious creatures make saving throws?",
        answer: "They automatically fail Strength and Dexterity saves. Other saves (Constitution, Wisdom, Intelligence, Charisma) are rolled normally - the creature's mind/body still resists even while unconscious. Death saves are a special type of save made at 0 HP."
      }
    ]
  },
];
