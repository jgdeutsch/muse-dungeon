#!/usr/bin/env python3
"""
Generate characters-features.ts from DataForSEO FAQ data.
"""

import json

# Load FAQ data
with open('/tmp/feature-faqs-clean.json', 'r') as f:
    faq_data = json.load(f)

# Comprehensive feature data with descriptions and details
FEATURE_DATA = {
    # Artificer Features
    "magical tinkering 5e": {
        "description": "Magical Tinkering allows Artificers to imbue tiny objects with minor magical properties like light, sound, odor, or recorded messages. A versatile utility feature for creative problem-solving.",
        "mechanics": "Touch a Tiny nonmagical object to grant it one property: shed light (5ft), emit recorded message/sound, emit odor, or display static visual. Lasts indefinitely. Can affect INT mod objects at once.",
        "searchVolume": 1900,
    },
    "infuse item 5e": {
        "description": "Infuse Item is the Artificer's signature feature, allowing them to create temporary magic items by infusing mundane objects with magical properties during long rests.",
        "mechanics": "Learn infusion recipes and can have 2 infusions active at level 2, scaling to 6 at level 18. Create magic items like Enhanced Weapon (+1), Bag of Holding, or Homunculus Servant.",
        "searchVolume": 4500,
    },
    "flash of genius 5e": {
        "description": "Flash of Genius lets Artificers use their reaction to add their Intelligence modifier to an ally's ability check or saving throw within 30 feet.",
        "mechanics": "Use reaction when creature within 30ft makes ability check or saving throw. Add INT modifier to the roll. Usable INT modifier times per long rest.",
        "searchVolume": 3200,
    },
    "magic item savant 5e": {
        "description": "Magic Item Savant allows Artificers to attune to up to 5 magic items at once and ignore all class, race, spell, and level requirements on magic items.",
        "mechanics": "At 14th level, attune to 5 items instead of 3. Ignore all requirements on magic items when attuning or using them.",
        "searchVolume": 1100,
    },
    "soul of artifice 5e": {
        "description": "Soul of Artifice is the Artificer's 20th level capstone, granting +1 to all saving throws per attuned magic item and a death-defying ability.",
        "mechanics": "+1 bonus to saving throws per magic item attuned (up to +6). When reduced to 0 HP, can end one infusion to drop to 1 HP instead.",
        "searchVolume": 900,
    },

    # Barbarian Features
    "rage 5e": {
        "description": "Rage is the Barbarian's core feature - entering a battle fury that grants bonus damage, resistance to physical damage, and advantage on Strength checks and saves.",
        "mechanics": "Bonus action to enter rage. Gain: melee damage bonus (+2 to +4), resistance to bludgeoning/piercing/slashing, advantage on STR checks/saves. Lasts 1 minute, ends early if unconscious or don't attack/take damage.",
        "searchVolume": 14800,
    },
    "unarmored defense barbarian 5e": {
        "description": "Barbarian's Unarmored Defense sets AC to 10 + DEX modifier + CON modifier when not wearing armor, allowing them to tank without heavy armor.",
        "mechanics": "While not wearing armor, AC = 10 + DEX mod + CON mod. Can use a shield and still benefit. Does not stack with other AC calculations.",
        "searchVolume": 3900,
    },
    "reckless attack 5e": {
        "description": "Reckless Attack allows Barbarians to throw caution aside, gaining advantage on all melee attacks for a turn at the cost of giving enemies advantage against them.",
        "mechanics": "When making first attack on your turn, can attack recklessly. Gain advantage on all melee weapon attacks using STR that turn. Attack rolls against you have advantage until your next turn.",
        "searchVolume": 8100,
    },
    "danger sense 5e": {
        "description": "Danger Sense gives Barbarians advantage on Dexterity saving throws against effects they can see, helping them avoid traps and area spells.",
        "mechanics": "Advantage on DEX saves against effects you can see (spells, traps). Doesn't work if blinded, deafened, or incapacitated.",
        "searchVolume": 4400,
    },
    "primal path 5e": {
        "description": "Primal Path is the Barbarian's subclass choice at 3rd level, defining the source and nature of their rage - from totemic spirits to ancestral guardians.",
        "mechanics": "Choose subclass at 3rd level. Options: Berserker (frenzy), Totem Warrior (animal spirits), Ancestral Guardian (spirit protectors), Zealot (divine fury), Beast (natural weapons), Wild Magic (chaotic effects).",
        "searchVolume": 2200,
    },
    "extra attack barbarian 5e": {
        "description": "At 5th level, Barbarians gain Extra Attack, allowing them to attack twice whenever they take the Attack action on their turn.",
        "mechanics": "When taking Attack action, can attack twice instead of once. Stacks with bonus action attacks from features like Frenzy or Polearm Master.",
        "searchVolume": 1800,
    },
    "fast movement barbarian 5e": {
        "description": "Fast Movement increases the Barbarian's speed by 10 feet while not wearing heavy armor, helping them close distance with enemies.",
        "mechanics": "Speed increases by 10 feet while not wearing heavy armor. Stacks with racial speed bonuses and other movement increases.",
        "searchVolume": 1200,
    },
    "feral instinct 5e": {
        "description": "Feral Instinct gives Barbarians advantage on initiative and the ability to act normally even when surprised, as long as they rage first.",
        "mechanics": "Advantage on initiative rolls. If surprised, can act normally by entering rage first (uses rage and bonus action).",
        "searchVolume": 2100,
    },
    "brutal critical 5e": {
        "description": "Brutal Critical adds extra weapon damage dice when Barbarians score critical hits, making their crits devastatingly powerful.",
        "mechanics": "Roll 1 additional weapon damage die on critical hits at 9th level. Increases to 2 extra dice at 13th and 3 at 17th level.",
        "searchVolume": 3600,
    },
    "relentless rage 5e": {
        "description": "Relentless Rage allows Barbarians to avoid dropping to 0 HP while raging by succeeding on a Constitution saving throw.",
        "mechanics": "If reduced to 0 HP while raging, make DC 10 CON save to drop to 1 HP instead. DC increases by 5 each time until long rest.",
        "searchVolume": 2400,
    },
    "persistent rage 5e": {
        "description": "Persistent Rage prevents the Barbarian's rage from ending early due to not attacking or taking damage - only unconsciousness stops it.",
        "mechanics": "Rage only ends early if you fall unconscious or choose to end it. No longer need to attack or take damage each round.",
        "searchVolume": 1500,
    },
    "indomitable might 5e": {
        "description": "Indomitable Might allows Barbarians to use their Strength score as the minimum roll for Strength checks, making them reliably powerful.",
        "mechanics": "If Strength check total is less than your Strength score, use that score instead. Effectively sets a floor for all STR checks.",
        "searchVolume": 1800,
    },
    "primal champion 5e": {
        "description": "Primal Champion is the Barbarian's 20th level capstone, increasing Strength and Constitution by 4 each (max 24).",
        "mechanics": "STR and CON increase by 4. Maximum for these scores becomes 24. Effectively +2 to attack, damage, AC, HP, and CON saves.",
        "searchVolume": 1600,
    },

    # Bard Features
    "bardic inspiration 5e": {
        "description": "Bardic Inspiration is the Bard's signature feature, granting allies bonus dice they can add to ability checks, attack rolls, or saving throws.",
        "mechanics": "Bonus action to give creature within 60ft a Bardic Inspiration die (d6, scaling to d12). They can add it to one ability check, attack roll, or save within 10 minutes. CHA mod uses per long rest (short rest at 5th).",
        "searchVolume": 9700,
    },
    "jack of all trades 5e": {
        "description": "Jack of All Trades adds half the Bard's proficiency bonus to any ability check that doesn't already include their proficiency bonus.",
        "mechanics": "Add half proficiency bonus (rounded down) to any ability check not using proficiency. Includes initiative! Also applies to counterspell/dispel magic checks.",
        "searchVolume": 6200,
    },
    "song of rest 5e": {
        "description": "Song of Rest allows Bards to help allies regain extra hit points during short rests through soothing music or oration.",
        "mechanics": "During short rest, friendly creatures who hear your performance regain extra HP equal to your Bardic Inspiration die when spending Hit Dice.",
        "searchVolume": 3800,
    },
    "bard college 5e": {
        "description": "Bard College is the Bard's subclass choice at 3rd level, representing the tradition or style of performance they've mastered.",
        "mechanics": "Choose subclass at 3rd level. Options: Lore (knowledge/skills), Valor (combat), Glamour (fey charm), Swords (blade flourishes), Whispers (psychic fear), Eloquence (speech), Creation (animate objects).",
        "searchVolume": 2900,
    },
    "expertise bard 5e": {
        "description": "Expertise allows Bards to double their proficiency bonus for two skill proficiencies, becoming exceptionally skilled in chosen areas.",
        "mechanics": "Choose 2 skill proficiencies. Your proficiency bonus is doubled for any check using them. Gain 2 more expertise choices at 10th level.",
        "searchVolume": 2100,
    },
    "font of inspiration 5e": {
        "description": "Font of Inspiration allows Bards to regain all expended Bardic Inspiration uses on a short rest instead of only on a long rest.",
        "mechanics": "At 5th level, regain all Bardic Inspiration uses when you finish a short or long rest (previously long rest only).",
        "searchVolume": 1800,
    },
    "countercharm 5e": {
        "description": "Countercharm lets Bards use their action to perform music that gives allies advantage on saves against being frightened or charmed.",
        "mechanics": "Action to start performance lasting until end of your next turn. You and friendly creatures within 30ft have advantage on saves vs frightened/charmed.",
        "searchVolume": 2400,
    },
    "magical secrets 5e": {
        "description": "Magical Secrets allows Bards to learn spells from any class's spell list, dramatically expanding their magical versatility.",
        "mechanics": "At 10th, 14th, and 18th level, learn 2 spells from any class. They count as bard spells. Popular picks: Counterspell, Find Greater Steed, Wish.",
        "searchVolume": 5400,
    },
    "superior inspiration 5e": {
        "description": "Superior Inspiration ensures Bards always have at least one Bardic Inspiration die available when rolling initiative.",
        "mechanics": "At 20th level, when you roll initiative and have no Bardic Inspiration uses remaining, you regain one use.",
        "searchVolume": 1100,
    },

    # Cleric Features
    "divine domain 5e": {
        "description": "Divine Domain is the Cleric's subclass, representing the aspect of their deity they channel - from Life and Light to War and Trickery.",
        "mechanics": "Choose domain at 1st level. Gain domain spells (always prepared), bonus proficiencies, and unique features at 1st, 2nd, 6th, 8th, and 17th levels.",
        "searchVolume": 3200,
    },
    "channel divinity cleric 5e": {
        "description": "Channel Divinity allows Clerics to channel divine energy for powerful effects, including the universal Turn Undead and domain-specific powers.",
        "mechanics": "Use once per short/long rest (twice at 6th, three times at 18th). Turn Undead is universal; each domain grants additional options.",
        "searchVolume": 4800,
    },
    "turn undead 5e": {
        "description": "Turn Undead is a Channel Divinity option all Clerics get, forcing undead creatures to flee for 1 minute on a failed Wisdom save.",
        "mechanics": "Action to present holy symbol. Undead within 30ft must make WIS save or be turned for 1 minute (flee, can't approach within 30ft).",
        "searchVolume": 6500,
    },
    "destroy undead 5e": {
        "description": "Destroy Undead enhances Turn Undead to instantly destroy weak undead creatures that fail their saving throw.",
        "mechanics": "Undead that fail Turn Undead save are destroyed if CR is at or below threshold: CR 1/2 (5th), CR 1 (8th), CR 2 (11th), CR 3 (14th), CR 4 (17th).",
        "searchVolume": 3100,
    },
    "divine intervention 5e": {
        "description": "Divine Intervention allows Clerics to call upon their deity for miraculous aid, with a chance of success based on level.",
        "mechanics": "Action to describe assistance needed and roll percentile dice. If roll ≤ cleric level, deity intervenes (DM chooses effect). Usable once per 7 days (auto-success at 20th).",
        "searchVolume": 4200,
    },
    "divine strike 5e": {
        "description": "Divine Strike (for martial domains) adds extra damage to weapon attacks, while Potent Spellcasting (for caster domains) adds WIS to cantrip damage.",
        "mechanics": "At 8th level, once per turn add 1d8 damage (type varies by domain) to weapon attack. Increases to 2d8 at 14th level.",
        "searchVolume": 2600,
    },

    # Druid Features
    "druidic 5e": {
        "description": "Druidic is the secret language of druids, allowing them to communicate with other druids and leave hidden messages in nature.",
        "mechanics": "Know Druidic language. Can speak it and leave hidden messages others can't detect without magic. Other druids automatically spot messages.",
        "searchVolume": 2100,
    },
    "wild shape 5e": {
        "description": "Wild Shape is the Druid's signature feature, allowing them to transform into beasts they've seen, gaining new forms for combat or utility.",
        "mechanics": "Action to transform into beast you've seen. CR and movement limits by level. Gain beast's HP as temp HP. Can't cast spells but concentration continues. 2 uses per short rest.",
        "searchVolume": 18500,
    },
    "druid circle 5e": {
        "description": "Druid Circle is the Druid's subclass choice at 2nd level, determining how they connect with nature - from lunar shapeshifting to spore manipulation.",
        "mechanics": "Choose circle at 2nd level. Options: Land (terrain spells), Moon (combat wild shape), Dreams (healing), Shepherd (summoning), Spores (necrotic), Stars (starry forms), Wildfire (fire spirit).",
        "searchVolume": 2800,
    },
    "timeless body druid 5e": {
        "description": "Timeless Body makes Druids age 10 times slower and immune to being magically aged, representing their deep connection to nature's cycles.",
        "mechanics": "At 18th level, age 1 year for every 10 that pass. Can't be magically aged.",
        "searchVolume": 1100,
    },
    "beast spells 5e": {
        "description": "Beast Spells allows high-level Druids to cast spells while in Wild Shape, performing verbal and somatic components in beast form.",
        "mechanics": "At 18th level, can cast spells in Wild Shape. Can perform verbal/somatic components but not material (unless worth nothing and not consumed).",
        "searchVolume": 1800,
    },
    "archdruid 5e": {
        "description": "Archdruid is the Druid's 20th level capstone, granting unlimited Wild Shape uses and the ability to ignore material components.",
        "mechanics": "Unlimited Wild Shape uses. Can ignore verbal, somatic, and material components (unless consumed or have gold cost) for druid spells.",
        "searchVolume": 1600,
    },

    # Fighter Features
    "fighting style fighter 5e": {
        "description": "Fighting Style gives Fighters a specialized combat technique at 1st level, defining their approach to battle.",
        "mechanics": "Choose one style: Archery (+2 ranged), Defense (+1 AC in armor), Dueling (+2 damage one-handed), GWF (reroll 1s/2s two-handed), Protection (impose disadvantage), Two-Weapon Fighting (add ability mod to off-hand).",
        "searchVolume": 5200,
    },
    "second wind 5e": {
        "description": "Second Wind allows Fighters to heal themselves as a bonus action, regaining hit points equal to 1d10 + fighter level.",
        "mechanics": "Bonus action to regain 1d10 + fighter level HP. One use per short or long rest.",
        "searchVolume": 6800,
    },
    "action surge 5e": {
        "description": "Action Surge is the Fighter's most powerful feature, granting an additional action on their turn for devastating burst damage.",
        "mechanics": "On your turn, take one additional action. One use per short/long rest (two uses at 17th level). Legendary for nova damage rounds.",
        "searchVolume": 12400,
    },
    "martial archetype 5e": {
        "description": "Martial Archetype is the Fighter's subclass choice at 3rd level, defining their specialized combat training and abilities.",
        "mechanics": "Choose archetype at 3rd level. Options: Champion (crits), Battle Master (maneuvers), Eldritch Knight (magic), Arcane Archer (magic arrows), Cavalier (mounted), Samurai (fighting spirit), Echo Knight (echo), Psi Warrior (psychic), Rune Knight (giant runes).",
        "searchVolume": 2900,
    },
    "extra attack fighter 5e": {
        "description": "Fighters get Extra Attack at 5th level and unique additional attacks at 11th (3 attacks) and 20th level (4 attacks).",
        "mechanics": "Attack twice at 5th level. Three attacks at 11th. Four attacks at 20th. Only class to get more than 2 attacks from this feature.",
        "searchVolume": 2400,
    },
    "indomitable 5e": {
        "description": "Indomitable allows Fighters to reroll a failed saving throw, potentially turning defeat into survival.",
        "mechanics": "Reroll a saving throw you fail. Must use the new roll. One use per long rest (two at 13th, three at 17th).",
        "searchVolume": 3500,
    },

    # Monk Features
    "unarmored defense monk 5e": {
        "description": "Monk's Unarmored Defense sets AC to 10 + DEX modifier + WIS modifier when not wearing armor or using a shield.",
        "mechanics": "While not wearing armor or shield, AC = 10 + DEX mod + WIS mod. Different from Barbarian version (uses WIS instead of CON).",
        "searchVolume": 3200,
    },
    "martial arts 5e": {
        "description": "Martial Arts allows Monks to use DEX for unarmed strikes and monk weapons, use a d4+ for damage, and make bonus action unarmed strikes.",
        "mechanics": "Use DEX instead of STR for monk weapons/unarmed. Unarmed damage is d4 (scaling to d10). When attacking with monk weapon/unarmed, bonus action unarmed strike.",
        "searchVolume": 7800,
    },
    "ki 5e": {
        "description": "Ki is the Monk's resource pool for powering special abilities like Flurry of Blows, Patient Defense, and Step of the Wind.",
        "mechanics": "Ki points equal to monk level. Regain all on short/long rest. Ki save DC = 8 + proficiency + WIS mod. Powers many monk abilities.",
        "searchVolume": 8900,
    },
    "flurry of blows 5e": {
        "description": "Flurry of Blows allows Monks to spend 1 ki to make two unarmed strikes as a bonus action after attacking.",
        "mechanics": "After taking Attack action, spend 1 ki to make 2 unarmed strikes as bonus action (instead of 1 from Martial Arts).",
        "searchVolume": 6100,
    },
    "patient defense 5e": {
        "description": "Patient Defense lets Monks spend 1 ki to take the Dodge action as a bonus action, becoming harder to hit.",
        "mechanics": "Spend 1 ki to Dodge as bonus action. Attack rolls against you have disadvantage, advantage on DEX saves.",
        "searchVolume": 3400,
    },
    "step of the wind 5e": {
        "description": "Step of the Wind allows Monks to spend 1 ki to Dash or Disengage as a bonus action and double jump distance.",
        "mechanics": "Spend 1 ki to Dash or Disengage as bonus action. Jump distance doubled for the turn.",
        "searchVolume": 3100,
    },
    "unarmored movement 5e": {
        "description": "Unarmored Movement increases the Monk's speed while not wearing armor, eventually allowing them to run on walls and water.",
        "mechanics": "Speed +10ft at 2nd level (scaling to +30ft at 18th). At 9th level, can run on vertical surfaces and water without falling if ending turn on solid ground.",
        "searchVolume": 2800,
    },
    "monastic tradition 5e": {
        "description": "Monastic Tradition is the Monk's subclass choice at 3rd level, defining the style and philosophy of their martial training.",
        "mechanics": "Choose tradition at 3rd level. Options: Open Hand (combat), Shadow (stealth/magic), Four Elements (elemental bending), Drunken Master (evasion), Kensei (weapons), Sun Soul (radiant), Mercy (healing/harm), Astral Self (astral arms).",
        "searchVolume": 2200,
    },
    "deflect missiles 5e": {
        "description": "Deflect Missiles allows Monks to use their reaction to reduce ranged weapon attack damage and potentially catch and throw the projectile back.",
        "mechanics": "Reaction to reduce ranged weapon damage by 1d10 + DEX + monk level. If reduced to 0, can spend 1 ki to throw it back (monk weapon attack, 20/60 range).",
        "searchVolume": 4200,
    },
    "slow fall 5e": {
        "description": "Slow Fall allows Monks to use their reaction to reduce falling damage by 5 times their monk level.",
        "mechanics": "Reaction to reduce falling damage by 5 × monk level. At 20th level, reduces by 100 damage.",
        "searchVolume": 2400,
    },
    "extra attack monk 5e": {
        "description": "At 5th level, Monks gain Extra Attack, allowing them to attack twice when taking the Attack action.",
        "mechanics": "Attack twice when taking Attack action. Combined with Flurry of Blows, monks can make 4 attacks per turn.",
        "searchVolume": 1600,
    },
    "stunning strike 5e": {
        "description": "Stunning Strike is one of the most powerful Monk features, allowing them to spend ki to potentially stun enemies on a hit.",
        "mechanics": "When hitting with melee weapon attack, spend 1 ki. Target must make CON save or be stunned until end of your next turn. Extremely powerful crowd control.",
        "searchVolume": 8400,
    },
    "ki-empowered strikes 5e": {
        "description": "Ki-Empowered Strikes makes the Monk's unarmed strikes count as magical for overcoming resistance and immunity.",
        "mechanics": "At 6th level, unarmed strikes count as magical for overcoming resistance/immunity to nonmagical attacks.",
        "searchVolume": 2100,
    },
    "evasion monk 5e": {
        "description": "Evasion allows Monks to take no damage on successful DEX saves against effects that deal half damage on success.",
        "mechanics": "When subjected to effect allowing DEX save for half damage: success = no damage, failure = half damage. Doesn't work if incapacitated.",
        "searchVolume": 2600,
    },
    "stillness of mind 5e": {
        "description": "Stillness of Mind lets Monks use their action to end one effect causing them to be charmed or frightened.",
        "mechanics": "Action to end one effect on yourself that's causing charmed or frightened condition.",
        "searchVolume": 1800,
    },
    "purity of body 5e": {
        "description": "Purity of Body makes Monks immune to disease and poison, representing their purified and disciplined body.",
        "mechanics": "At 10th level, immune to disease and poison damage/condition.",
        "searchVolume": 1600,
    },
    "tongue of the sun and moon 5e": {
        "description": "Tongue of the Sun and Moon allows Monks to understand and be understood by any creature that speaks a language.",
        "mechanics": "At 13th level, understand all spoken languages and any creature that speaks can understand you.",
        "searchVolume": 1400,
    },
    "diamond soul 5e": {
        "description": "Diamond Soul gives Monks proficiency in all saving throws and the ability to spend ki to reroll failed saves.",
        "mechanics": "At 14th level, proficient in all saving throws. Can spend 1 ki to reroll a failed save.",
        "searchVolume": 2800,
    },
    "timeless body monk 5e": {
        "description": "Timeless Body eliminates the Monk's need for food and water and makes them immune to aging effects.",
        "mechanics": "At 15th level, don't need food or water. Don't suffer frailty of old age and can't be magically aged.",
        "searchVolume": 1200,
    },
    "empty body 5e": {
        "description": "Empty Body allows Monks to become invisible and resistant to all damage except force by spending ki.",
        "mechanics": "Spend 4 ki to become invisible for 1 minute with resistance to all damage except force. Can also spend 8 ki to cast Astral Projection (self only).",
        "searchVolume": 2200,
    },
    "perfect self 5e": {
        "description": "Perfect Self ensures Monks always have at least 4 ki points when rolling initiative with none remaining.",
        "mechanics": "At 20th level, when rolling initiative with no ki points, regain 4 ki points.",
        "searchVolume": 1100,
    },

    # Paladin Features
    "divine sense 5e": {
        "description": "Divine Sense allows Paladins to detect celestials, fiends, and undead within 60 feet, as well as consecrated or desecrated ground.",
        "mechanics": "Action to detect celestials/fiends/undead within 60ft and consecrated/desecrated areas. Know type and location but not identity. 1 + CHA mod uses per long rest.",
        "searchVolume": 4100,
    },
    "lay on hands 5e": {
        "description": "Lay on Hands gives Paladins a pool of healing power they can use to restore HP or cure diseases and poisons.",
        "mechanics": "Pool of HP equal to 5 × paladin level. Touch to restore HP from pool. Can spend 5 HP from pool to cure disease or neutralize poison instead.",
        "searchVolume": 7200,
    },
    "fighting style paladin 5e": {
        "description": "Fighting Style gives Paladins a specialized combat technique at 2nd level, complementing their divine abilities.",
        "mechanics": "Choose one style at 2nd level: Defense (+1 AC), Dueling (+2 damage one-handed), Great Weapon Fighting (reroll 1s/2s), Protection (impose disadvantage).",
        "searchVolume": 2400,
    },
    "divine smite 5e": {
        "description": "Divine Smite is the Paladin's signature burst damage feature, expending spell slots to deal massive radiant damage on weapon hits.",
        "mechanics": "When hitting with melee weapon, expend spell slot to deal +2d8 radiant (+1d8 per slot level above 1st, max 5d8). +1d8 vs undead/fiends. Can decide after hit.",
        "searchVolume": 14200,
    },
    "sacred oath 5e": {
        "description": "Sacred Oath is the Paladin's subclass choice at 3rd level, representing the divine oath that defines their code and powers.",
        "mechanics": "Choose oath at 3rd level. Options: Devotion (classic), Ancients (nature), Vengeance (punishment), Oathbreaker (evil), Conquest (domination), Redemption (peace), Glory (heroism), Watchers (extraplanar threats).",
        "searchVolume": 3400,
    },
    "channel divinity paladin 5e": {
        "description": "Channel Divinity gives Paladins access to powerful divine abilities that vary by Sacred Oath, usable once per short rest.",
        "mechanics": "Use once per short/long rest. Each oath grants unique options. Common options include boosting attacks, frightening enemies, or empowering allies.",
        "searchVolume": 2800,
    },
    "extra attack paladin 5e": {
        "description": "At 5th level, Paladins gain Extra Attack, allowing two attacks per Attack action for more smite opportunities.",
        "mechanics": "Attack twice when taking Attack action. Combined with Divine Smite, paladins can deal massive nova damage.",
        "searchVolume": 1400,
    },
    "aura of protection 5e": {
        "description": "Aura of Protection adds the Paladin's Charisma modifier to all saving throws for the paladin and nearby allies.",
        "mechanics": "You and friendly creatures within 10ft add your CHA mod to saving throws (min +1). Radius increases to 30ft at 18th level. Requires consciousness.",
        "searchVolume": 5800,
    },
    "aura of courage 5e": {
        "description": "Aura of Courage makes the Paladin and nearby allies immune to being frightened while the Paladin is conscious.",
        "mechanics": "You and friendly creatures within 10ft can't be frightened while you're conscious. Radius increases to 30ft at 18th level.",
        "searchVolume": 2600,
    },
    "improved divine smite 5e": {
        "description": "Improved Divine Smite adds 1d8 radiant damage to all melee weapon hits, making every attack holy and powerful.",
        "mechanics": "At 11th level, all melee weapon attacks deal +1d8 radiant damage. This is in addition to (not instead of) Divine Smite.",
        "searchVolume": 3200,
    },
    "cleansing touch 5e": {
        "description": "Cleansing Touch allows Paladins to end spells on willing creatures or themselves using their action.",
        "mechanics": "Action to end one spell on yourself or willing creature you touch. CHA mod uses per long rest.",
        "searchVolume": 1800,
    },

    # Ranger Features
    "favored enemy 5e": {
        "description": "Favored Enemy gives Rangers expertise in tracking and knowledge about specific creature types, with language bonuses.",
        "mechanics": "Choose 1 type (or 2 humanoid races). Advantage on Survival to track and INT checks to recall info. Learn one language spoken by favored enemy.",
        "searchVolume": 5400,
    },
    "natural explorer 5e": {
        "description": "Natural Explorer makes Rangers experts in specific terrain types, gaining significant travel and survival benefits.",
        "mechanics": "Choose 1 terrain type. In favored terrain: difficult terrain doesn't slow group, can't get lost, alert to danger, double foraging, detailed info while tracking.",
        "searchVolume": 3800,
    },
    "fighting style ranger 5e": {
        "description": "Fighting Style gives Rangers a specialized combat technique at 2nd level, typically focused on ranged or two-weapon combat.",
        "mechanics": "Choose one style: Archery (+2 ranged), Defense (+1 AC), Dueling (+2 damage one-handed), Two-Weapon Fighting (add ability mod to off-hand), Druidic Warrior (druid cantrips).",
        "searchVolume": 2100,
    },
    "ranger archetype 5e": {
        "description": "Ranger Archetype is the Ranger's subclass choice at 3rd level, defining their specialized combat or exploration style.",
        "mechanics": "Choose archetype at 3rd level. Options: Hunter (combat), Beast Master (companion), Gloom Stalker (darkness), Horizon Walker (planes), Monster Slayer (anti-monster), Fey Wanderer (fey), Swarmkeeper (swarm), Drakewarden (drake).",
        "searchVolume": 2400,
    },
    "primeval awareness 5e": {
        "description": "Primeval Awareness allows Rangers to spend spell slots to sense nearby aberrations, celestials, dragons, elementals, fey, fiends, and undead.",
        "mechanics": "Spend spell slot to sense creature types within 1 mile (6 miles in favored terrain) for 1 minute per slot level. Know presence but not number/location.",
        "searchVolume": 2800,
    },
    "extra attack ranger 5e": {
        "description": "At 5th level, Rangers gain Extra Attack, allowing two attacks per Attack action.",
        "mechanics": "Attack twice when taking Attack action. Combined with Hunter's Mark, rangers can deal solid sustained damage.",
        "searchVolume": 1200,
    },
    "land's stride 5e": {
        "description": "Land's Stride allows Rangers to move through difficult terrain without penalty and gain advantage on saves against magical plants.",
        "mechanics": "Nonmagical difficult terrain doesn't slow you. Can pass through nonmagical plants without damage. Advantage on saves vs magically created/manipulated plants.",
        "searchVolume": 1800,
    },
    "hide in plain sight 5e": {
        "description": "Hide in Plain Sight allows Rangers to camouflage themselves for a significant bonus to Stealth checks while stationary.",
        "mechanics": "Spend 1 minute creating camouflage. While still against solid surface, +10 to Stealth checks. Moving or taking damage ends it.",
        "searchVolume": 2200,
    },
    "vanish 5e": {
        "description": "Vanish allows Rangers to use the Hide action as a bonus action and become untrackable by nonmagical means.",
        "mechanics": "At 14th level, Hide as bonus action. Can't be tracked by nonmagical means unless you choose to leave a trail.",
        "searchVolume": 1600,
    },
    "feral senses 5e": {
        "description": "Feral Senses allows Rangers to sense invisible creatures and fight without disadvantage against unseen foes.",
        "mechanics": "At 18th level, no disadvantage to attack creatures you can't see. Know location of invisible creatures within 30ft if not hidden.",
        "searchVolume": 1400,
    },
    "foe slayer 5e": {
        "description": "Foe Slayer is the Ranger's 20th level capstone, adding Wisdom modifier to attack or damage against favored enemies.",
        "mechanics": "Once per turn, add WIS mod to attack roll OR damage roll against favored enemy.",
        "searchVolume": 1100,
    },

    # Rogue Features
    "expertise rogue 5e": {
        "description": "Expertise allows Rogues to double their proficiency bonus for two skill proficiencies, becoming masters of their chosen skills.",
        "mechanics": "Choose 2 skill or thieves' tools proficiencies. Proficiency bonus doubled for checks using them. Gain 2 more at 6th level.",
        "searchVolume": 3800,
    },
    "sneak attack 5e": {
        "description": "Sneak Attack is the Rogue's primary damage feature, adding extra dice to attacks made with advantage or against enemies near allies.",
        "mechanics": "Once per turn, add extra damage (1d6 at 1st, scaling to 10d6 at 19th) to finesse/ranged weapon attack with advantage OR when enemy of target is within 5ft. Don't need advantage if ally is adjacent.",
        "searchVolume": 22100,
    },
    "thieves cant 5e": {
        "description": "Thieves' Cant is the secret language of rogues, allowing them to communicate covertly and understand criminal symbols.",
        "mechanics": "Know Thieves' Cant. Can communicate secretly in normal conversation. Understand symbols/codes used by criminals to mark locations.",
        "searchVolume": 4200,
    },
    "cunning action 5e": {
        "description": "Cunning Action allows Rogues to Dash, Disengage, or Hide as a bonus action, giving them exceptional mobility and stealth.",
        "mechanics": "Bonus action to Dash, Disengage, or Hide. Enables hit-and-run tactics and repositioning every turn.",
        "searchVolume": 7600,
    },
    "roguish archetype 5e": {
        "description": "Roguish Archetype is the Rogue's subclass choice at 3rd level, defining their specialized criminal or adventuring expertise.",
        "mechanics": "Choose archetype at 3rd level. Options: Thief (climbing/items), Assassin (surprise damage), Arcane Trickster (magic), Inquisitive (insight), Mastermind (social), Scout (nature), Swashbuckler (dueling), Phantom (death), Soulknife (psychic).",
        "searchVolume": 2600,
    },
    "uncanny dodge 5e": {
        "description": "Uncanny Dodge allows Rogues to use their reaction to halve the damage from an attack they can see.",
        "mechanics": "Reaction when attacker you can see hits you. Halve the attack's damage against you.",
        "searchVolume": 6800,
    },
    "evasion rogue 5e": {
        "description": "Evasion allows Rogues to take no damage on successful DEX saves against effects that deal half damage on success.",
        "mechanics": "When subjected to effect allowing DEX save for half damage: success = no damage, failure = half damage. Doesn't work if incapacitated.",
        "searchVolume": 3400,
    },
    "reliable talent 5e": {
        "description": "Reliable Talent means Rogues treat any roll of 9 or lower as a 10 on proficient ability checks, making them incredibly consistent.",
        "mechanics": "At 11th level, when making ability check using proficient skill, treat d20 roll of 9 or lower as 10.",
        "searchVolume": 4800,
    },
    "blindsense 5e": {
        "description": "Blindsense allows Rogues to sense invisible or hidden creatures within 10 feet, making them hard to ambush.",
        "mechanics": "At 14th level, know location of hidden or invisible creatures within 10ft, as long as you can hear.",
        "searchVolume": 2200,
    },
    "slippery mind 5e": {
        "description": "Slippery Mind gives Rogues proficiency in Wisdom saving throws, protecting against mental effects.",
        "mechanics": "At 15th level, gain proficiency in Wisdom saving throws.",
        "searchVolume": 1800,
    },
    "elusive 5e": {
        "description": "Elusive prevents attackers from gaining advantage against the Rogue while they're not incapacitated.",
        "mechanics": "At 18th level, no attack roll has advantage against you while you aren't incapacitated.",
        "searchVolume": 1600,
    },
    "stroke of luck 5e": {
        "description": "Stroke of Luck is the Rogue's 20th level capstone, allowing them to turn a miss into a hit or a failed check into a 20.",
        "mechanics": "If attack misses, turn it into a hit. Or if failing ability check, treat d20 roll as 20. One use per short/long rest.",
        "searchVolume": 1400,
    },

    # Sorcerer Features
    "sorcerous origin 5e": {
        "description": "Sorcerous Origin is the Sorcerer's subclass, representing the source of their innate magical power.",
        "mechanics": "Choose origin at 1st level. Options: Draconic (dragon blood), Wild Magic (chaos), Divine Soul (divine), Shadow (shadowfell), Storm (tempest), Aberrant Mind (psychic), Clockwork Soul (order).",
        "searchVolume": 2800,
    },
    "font of magic 5e": {
        "description": "Font of Magic gives Sorcerers their Sorcery Point pool, which powers Metamagic and can be converted to/from spell slots.",
        "mechanics": "Sorcery points equal to sorcerer level. Regain all on long rest. Can convert spell slots to points (slot level = points) or points to slots.",
        "searchVolume": 3600,
    },
    "sorcery points 5e": {
        "description": "Sorcery Points are the Sorcerer's resource for Metamagic and Flexible Casting, equal to sorcerer level.",
        "mechanics": "Pool equals sorcerer level. Powers Metamagic options. Can create spell slots: 2 points = 1st level, 3 = 2nd, 5 = 3rd, 6 = 4th, 7 = 5th (max).",
        "searchVolume": 5800,
    },
    "flexible casting 5e": {
        "description": "Flexible Casting allows Sorcerers to convert spell slots into Sorcery Points and vice versa.",
        "mechanics": "Bonus action to convert spell slot to points (points = slot level) or points to slot (2/3/5/6/7 points for 1st-5th level). Created slots vanish on long rest.",
        "searchVolume": 2400,
    },
    "metamagic 5e": {
        "description": "Metamagic allows Sorcerers to modify their spells in powerful ways by spending Sorcery Points.",
        "mechanics": "Learn 2 options at 3rd level (more later). Popular options: Quickened (cast as bonus action), Twinned (target second creature), Subtle (no verbal/somatic), Heightened (disadvantage on save).",
        "searchVolume": 9200,
    },
    "sorcerous restoration 5e": {
        "description": "Sorcerous Restoration is the Sorcerer's 20th level capstone, regaining 4 sorcery points on every short rest.",
        "mechanics": "At 20th level, regain 4 sorcery points when finishing a short rest.",
        "searchVolume": 1100,
    },

    # Warlock Features
    "otherworldly patron 5e": {
        "description": "Otherworldly Patron is the Warlock's subclass, representing the powerful entity that grants them their magic.",
        "mechanics": "Choose patron at 1st level. Options: Fiend (fire/temp HP), Great Old One (psychic), Archfey (charm), Hexblade (weapons), Celestial (healing), Fathomless (water), Genie (elemental), Undead (necrotic).",
        "searchVolume": 2600,
    },
    "pact magic 5e": {
        "description": "Pact Magic is the Warlock's unique spellcasting system with few slots that regenerate on short rests and always cast at max level.",
        "mechanics": "1-4 spell slots (all same level) that regenerate on short rest. All spells cast at highest slot level available. Different from regular spellcasting.",
        "searchVolume": 6400,
    },
    "eldritch invocations 5e": {
        "description": "Eldritch Invocations are customizable abilities Warlocks gain, enhancing spells, granting at-will magic, or providing passive benefits.",
        "mechanics": "Learn 2 at 2nd level (more later). Popular: Agonizing Blast (+CHA to Eldritch Blast), Devil's Sight (see in magical darkness), Mask of Many Faces (at-will Disguise Self).",
        "searchVolume": 8100,
    },
    "pact boon 5e": {
        "description": "Pact Boon gives Warlocks a special gift from their patron at 3rd level - a familiar, weapon, or magical tome.",
        "mechanics": "Choose at 3rd level: Pact of the Chain (improved familiar), Pact of the Blade (summon weapon), Pact of the Tome (extra cantrips), Pact of the Talisman (bonus to checks).",
        "searchVolume": 4200,
    },
    "pact of the blade 5e": {
        "description": "Pact of the Blade allows Warlocks to summon a magical weapon and eventually use Charisma for attacks with it.",
        "mechanics": "Action to create pact weapon in hand (any melee weapon form). Can bond with magic weapon. With Hex Warrior (Hexblade) or Improved Pact Weapon, use CHA for attacks.",
        "searchVolume": 5800,
    },
    "pact of the chain 5e": {
        "description": "Pact of the Chain gives Warlocks an enhanced familiar with special forms like imps, pseudodragons, or quasits.",
        "mechanics": "Learn Find Familiar. Can choose special forms: imp, pseudodragon, quasit, sprite. Can forgo attack to let familiar attack as reaction.",
        "searchVolume": 4600,
    },
    "pact of the tome 5e": {
        "description": "Pact of the Tome gives Warlocks a Book of Shadows containing three cantrips from any class's spell list.",
        "mechanics": "Gain Book of Shadows with 3 cantrips from any class. They count as warlock cantrips. With Book of Ancient Secrets invocation, can add rituals.",
        "searchVolume": 3800,
    },
    "pact of the talisman 5e": {
        "description": "Pact of the Talisman gives Warlocks a magical amulet that adds a d4 to failed ability checks.",
        "mechanics": "Gain talisman. When wearer fails ability check, add d4 to roll (potentially turning failure to success). PB uses per long rest.",
        "searchVolume": 2100,
    },
    "mystic arcanum 5e": {
        "description": "Mystic Arcanum gives Warlocks access to high-level spells (6th-9th) usable once per long rest without using spell slots.",
        "mechanics": "At 11th/13th/15th/17th level, choose one spell of 6th/7th/8th/9th level. Can cast each once per long rest without slot.",
        "searchVolume": 3400,
    },
    "eldritch master 5e": {
        "description": "Eldritch Master is the Warlock's 20th level capstone, allowing them to regain all Pact Magic slots by entreating their patron.",
        "mechanics": "Spend 1 minute entreating patron. Regain all Pact Magic spell slots. One use per long rest.",
        "searchVolume": 1200,
    },

    # Wizard Features
    "spellcasting wizard 5e": {
        "description": "Wizard Spellcasting uses Intelligence and a spellbook system where prepared spells are chosen each day from known spells.",
        "mechanics": "INT-based full caster. Know spells = 6 + 2 per level. Prepare INT mod + wizard level spells per day from spellbook. Can copy new spells into book.",
        "searchVolume": 4200,
    },
    "arcane recovery 5e": {
        "description": "Arcane Recovery allows Wizards to regain expended spell slots during a short rest once per day.",
        "mechanics": "Once per day during short rest, recover spell slots with combined level ≤ half wizard level (rounded up). Can't recover 6th+ level slots.",
        "searchVolume": 4800,
    },
    "arcane tradition 5e": {
        "description": "Arcane Tradition is the Wizard's subclass, representing their school of magical specialization.",
        "mechanics": "Choose at 2nd level. Schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, Transmutation. Also: War Magic, Chronurgy, Graviturgy, Bladesinging, Order of Scribes.",
        "searchVolume": 3600,
    },
    "spell mastery 5e": {
        "description": "Spell Mastery allows Wizards to cast one 1st-level and one 2nd-level spell at will without expending slots.",
        "mechanics": "At 18th level, choose one 1st-level and one 2nd-level wizard spell. Can cast them at lowest level without expending slot or having prepared.",
        "searchVolume": 2400,
    },
    "signature spells 5e": {
        "description": "Signature Spells gives Wizards two 3rd-level spells they always have prepared and can cast once each without slots.",
        "mechanics": "At 20th level, choose two 3rd-level wizard spells. Always prepared, don't count against prepared limit. Can cast each once at 3rd level without slot per short/long rest.",
        "searchVolume": 1600,
    },

    # Blood Hunter Features
    "hunter's bane 5e": {
        "description": "Hunter's Bane gives Blood Hunters advantage on tracking and identifying fiends, fey, and undead.",
        "mechanics": "Advantage on Survival checks to track and INT checks to recall information about fey, fiends, and undead.",
        "searchVolume": 1800,
    },
    "blood maledict 5e": {
        "description": "Blood Maledict allows Blood Hunters to curse enemies with powerful blood curses, often at the cost of their own HP.",
        "mechanics": "Use blood curses on creatures. Can amplify curses by taking damage. Learn more curses as you level. Uses per long rest = INT mod (or more).",
        "searchVolume": 2100,
    },
    "crimson rite 5e": {
        "description": "Crimson Rite allows Blood Hunters to imbue their weapons with elemental damage at the cost of their own health.",
        "mechanics": "Bonus action to activate rite, taking damage = your level. Weapon deals extra damage (1d4 to 1d10) of rite's element. Lasts until rest or dropped.",
        "searchVolume": 2800,
    },
    "blood hunter order 5e": {
        "description": "Blood Hunter Order is the subclass choice, defining the Blood Hunter's supernatural specialty.",
        "mechanics": "Choose at 3rd level. Orders: Ghostslayer (radiant/undead), Profane Soul (warlock pact), Mutant (mutagencraft), Lycan (lycanthropy).",
        "searchVolume": 1600,
    },
    "dark augmentation 5e": {
        "description": "Dark Augmentation increases Blood Hunter speed and gives them advantage on saves against being frightened or magic that ages them.",
        "mechanics": "At 7th level, speed +5ft and advantage on saves vs frightened and magical aging.",
        "searchVolume": 900,
    },
    "brand of castigation 5e": {
        "description": "Brand of Castigation marks enemies, causing them to take psychic damage when they deal damage.",
        "mechanics": "When hitting with rite-active weapon, can brand target (no save). When branded creature damages you, it takes psychic damage = INT mod.",
        "searchVolume": 1100,
    },
    "grim psychometry 5e": {
        "description": "Grim Psychometry allows Blood Hunters to read the history of objects by touching them, gaining visions of significant events.",
        "mechanics": "Meditate on object for 1 minute to gain visions of significant events involving it. DM determines what you see.",
        "searchVolume": 800,
    },
    "dark velocity 5e": {
        "description": "Dark Velocity gives Blood Hunters additional speed and the ability to walk on walls and ceilings.",
        "mechanics": "While rite active: speed +10ft, can walk on walls and ceilings (fall if turn ends there without climbing/holding on).",
        "searchVolume": 700,
    },
    "hardened soul 5e": {
        "description": "Hardened Soul gives Blood Hunters immunity to being frightened and advantage on saves against being charmed.",
        "mechanics": "At 14th level, immune to frightened condition. Advantage on saves against being charmed.",
        "searchVolume": 600,
    },
    "sanguine mastery 5e": {
        "description": "Sanguine Mastery is the Blood Hunter's capstone, rerolling Crimson Rite damage and recovering when dropping to 0 HP.",
        "mechanics": "Reroll any Crimson Rite damage die once per attack. When dropping to 0 HP, can choose to drop to 1 HP instead and gain blood curse use.",
        "searchVolume": 500,
    },

    # Shared/Multiple Class Features
    "extra attack 5e": {
        "description": "Extra Attack allows martial classes to attack twice when taking the Attack action, significantly increasing damage output.",
        "mechanics": "At 5th level, attack twice when taking Attack action. Fighters get additional attacks at 11th (3) and 20th (4) level.",
        "searchVolume": 8800,
    },
    "fighting style 5e": {
        "description": "Fighting Style grants a specialized combat technique to martial classes, defining their preferred combat approach.",
        "mechanics": "Choose one style (varies by class). Common options: Archery (+2 ranged), Defense (+1 AC), Dueling (+2 damage), Great Weapon Fighting (reroll 1s/2s), Protection, Two-Weapon Fighting.",
        "searchVolume": 7200,
    },
    "spellcasting 5e": {
        "description": "Spellcasting is the feature that grants spellcasting ability to magic-using classes, each with unique casting rules.",
        "mechanics": "Varies by class. Full casters (wizard, cleric, etc.): spell slots scale to 9th level. Half casters (paladin, ranger): slower progression. Warlocks use Pact Magic instead.",
        "searchVolume": 6500,
    },
    "evasion 5e": {
        "description": "Evasion allows Monks and Rogues to take no damage on successful DEX saves that normally deal half damage.",
        "mechanics": "When subjected to effect allowing DEX save for half damage: success = no damage, failure = half damage. Doesn't work if incapacitated.",
        "searchVolume": 5200,
    },
    "unarmored defense 5e": {
        "description": "Unarmored Defense allows Barbarians and Monks to calculate AC without armor using different ability modifiers.",
        "mechanics": "Barbarian: 10 + DEX + CON. Monk: 10 + DEX + WIS. Can use shield (Barbarian only). Doesn't stack with armor or other AC calculations.",
        "searchVolume": 6800,
    },
    "channel divinity 5e": {
        "description": "Channel Divinity is a shared feature between Clerics and Paladins that lets them channel divine power for special effects.",
        "mechanics": "Clerics get Turn Undead + domain options (2-3 uses). Paladins get oath-specific options (1 use per short rest). Both recharge on short rest.",
        "searchVolume": 5600,
    },
}

def slugify(name):
    """Convert feature name to URL slug."""
    return name.lower().replace("'", "").replace(" ", "-") + "-5e"

def get_class_slug(class_name):
    """Get the slug for a class page."""
    if class_name == "Multiple":
        return None
    return class_name.lower().replace(" ", "-") + "-5e"

def main():
    output_lines = []
    output_lines.append('// Class Features data - generated from DataForSEO FAQ data')
    output_lines.append('import type { FAQItem } from "./characters-classes";')
    output_lines.append('')
    output_lines.append('export type FeaturePage = {')
    output_lines.append('  slug: string;')
    output_lines.append('  name: string;')
    output_lines.append('  parentClass: string;')
    output_lines.append('  parentClassSlug: string | null;')
    output_lines.append('  category: "features";')
    output_lines.append('  level: string;')
    output_lines.append('  description: string;')
    output_lines.append('  mechanics: string;')
    output_lines.append('  searchVolume: number;')
    output_lines.append('  faq?: FAQItem[];')
    output_lines.append('};')
    output_lines.append('')
    output_lines.append('export const featurePages: FeaturePage[] = [')

    for keyword, data in faq_data.items():
        feature_info = FEATURE_DATA.get(keyword, {})

        # Skip if no feature data defined
        if not feature_info:
            continue

        feature_name = data.get("feature_name", keyword.replace(" 5e", "").title())
        parent_class = data.get("parent_class", "Unknown")
        level = data.get("level", "Varies")

        slug = slugify(feature_name)
        class_slug = get_class_slug(parent_class)

        description = feature_info.get("description", f"{feature_name} is a class feature in D&D 5e.")
        mechanics = feature_info.get("mechanics", "")
        search_volume = feature_info.get("searchVolume", 1000)

        # Build FAQ from PAA data
        faq_items = []
        for paa in data.get("paa", [])[:4]:  # Limit to 4 FAQs
            if paa.get("question") and paa.get("answer_hint"):
                faq_items.append({
                    "question": paa["question"],
                    "answer": paa["answer_hint"]
                })

        output_lines.append('  {')
        output_lines.append(f'    slug: "{slug}",')
        output_lines.append(f'    name: "{feature_name} 5e",')
        output_lines.append(f'    parentClass: "{parent_class}",')
        output_lines.append(f'    parentClassSlug: {json.dumps(class_slug)},')
        output_lines.append('    category: "features",')
        output_lines.append(f'    level: "{level}",')
        output_lines.append(f'    description: {json.dumps(description)},')
        output_lines.append(f'    mechanics: {json.dumps(mechanics)},')
        output_lines.append(f'    searchVolume: {search_volume},')

        if faq_items:
            output_lines.append('    faq: [')
            for faq in faq_items:
                output_lines.append('      {')
                output_lines.append(f'        question: {json.dumps(faq["question"])},')
                output_lines.append(f'        answer: {json.dumps(faq["answer"])}')
                output_lines.append('      },')
            output_lines.append('    ],')

        output_lines.append('  },')

    output_lines.append('];')
    output_lines.append('')

    # Write to file
    with open('/Users/jeffy/muse-dungeon/src/data/characters-features.ts', 'w') as f:
        f.write('\n'.join(output_lines))

    print(f"Generated characters-features.ts with {len([k for k in faq_data if k in FEATURE_DATA])} features")

if __name__ == "__main__":
    main()
