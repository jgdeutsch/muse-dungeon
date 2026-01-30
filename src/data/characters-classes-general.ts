export type ClassesOverviewPage = {
  slug: string;
  name: string;
  description: string;
  searchVolume: number;
  sections: { id: string; title: string; content: string }[];
};

export const classesOverview: ClassesOverviewPage = {
  slug: "dnd-classes",
  name: "D&D 5e Classes Overview",
  description: "Complete guide to all 13 D&D 5e classes. Compare spellcasting vs martial classes, find the best class for your playstyle, and understand core class mechanics.",
  searchVolume: 6370,
  sections: [
    {
      id: "overview",
      title: "The 13 Core Classes",
      content: `<p>D&D 5e features 13 core classes, each with unique mechanics and playstyles. Classes are divided into <strong>martial classes</strong> (focus on weapons and physical prowess) and <strong>spellcasting classes</strong> (use magic).</p>

<p><strong>Martial Classes:</strong></p>
<ul>
  <li><strong>Barbarian:</strong> Rage-fueled warriors with massive HP and damage resistance</li>
  <li><strong>Fighter:</strong> Versatile weapon masters with the most attacks per turn</li>
  <li><strong>Monk:</strong> Unarmed combatants who use ki energy for supernatural abilities</li>
  <li><strong>Rogue:</strong> Stealthy skill experts who deal massive Sneak Attack damage</li>
</ul>

<p><strong>Full Spellcasters (9th-level spells):</strong></p>
<ul>
  <li><strong>Bard:</strong> Charismatic support casters with the most versatile spell list</li>
  <li><strong>Cleric:</strong> Divine healers and holy warriors with domain-based specialization</li>
  <li><strong>Druid:</strong> Nature spellcasters who transform into animals</li>
  <li><strong>Sorcerer:</strong> Innate magic users who manipulate spells with Metamagic</li>
  <li><strong>Warlock:</strong> Pact-bound casters with few spell slots that recharge on short rest</li>
  <li><strong>Wizard:</strong> Scholarly mages with the largest spell list and spellbook customization</li>
</ul>

<p><strong>Half Spellcasters (5th-level spells):</strong></p>
<ul>
  <li><strong>Artificer:</strong> Magical inventors who infuse items with magic</li>
  <li><strong>Paladin:</strong> Holy warriors who smite foes with divine magic</li>
  <li><strong>Ranger:</strong> Wilderness hunters who blend martial skill with nature magic</li>
</ul>

<p>Each class has multiple <strong>subclasses</strong> (chosen at 1st, 2nd, or 3rd level) that further define your character's abilities and role.</p>`
    },
    {
      id: "comparison-table",
      title: "Class Comparison Table",
      content: `<div style="overflow-x: auto;">
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; font-size: 14px;">
  <thead>
    <tr style="background-color: #f0f0f0;">
      <th>Class</th>
      <th>Role</th>
      <th>Hit Die</th>
      <th>Primary Ability</th>
      <th>Spellcasting</th>
      <th>Armor</th>
      <th>Complexity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Artificer</strong></td>
      <td>Support / Utility</td>
      <td>d8</td>
      <td>Intelligence</td>
      <td>Half (Int)</td>
      <td>Medium</td>
      <td>High</td>
    </tr>
    <tr>
      <td><strong>Barbarian</strong></td>
      <td>Tank / Damage</td>
      <td>d12</td>
      <td>Strength</td>
      <td>None</td>
      <td>Medium</td>
      <td>Low</td>
    </tr>
    <tr>
      <td><strong>Bard</strong></td>
      <td>Support / Face</td>
      <td>d8</td>
      <td>Charisma</td>
      <td>Full (Cha)</td>
      <td>Light</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><strong>Cleric</strong></td>
      <td>Healer / Support</td>
      <td>d8</td>
      <td>Wisdom</td>
      <td>Full (Wis)</td>
      <td>Medium*</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><strong>Druid</strong></td>
      <td>Control / Support</td>
      <td>d8</td>
      <td>Wisdom</td>
      <td>Full (Wis)</td>
      <td>Medium</td>
      <td>High</td>
    </tr>
    <tr>
      <td><strong>Fighter</strong></td>
      <td>Damage / Tank</td>
      <td>d10</td>
      <td>Str or Dex</td>
      <td>None*</td>
      <td>Heavy</td>
      <td>Low</td>
    </tr>
    <tr>
      <td><strong>Monk</strong></td>
      <td>Damage / Mobility</td>
      <td>d8</td>
      <td>Dex & Wis</td>
      <td>None*</td>
      <td>None</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><strong>Paladin</strong></td>
      <td>Tank / Damage</td>
      <td>d10</td>
      <td>Str & Cha</td>
      <td>Half (Cha)</td>
      <td>Heavy</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><strong>Ranger</strong></td>
      <td>Damage / Utility</td>
      <td>d10</td>
      <td>Dex & Wis</td>
      <td>Half (Wis)</td>
      <td>Medium</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><strong>Rogue</strong></td>
      <td>Damage / Skills</td>
      <td>d8</td>
      <td>Dexterity</td>
      <td>None*</td>
      <td>Light</td>
      <td>Low</td>
    </tr>
    <tr>
      <td><strong>Sorcerer</strong></td>
      <td>Damage / Blaster</td>
      <td>d6</td>
      <td>Charisma</td>
      <td>Full (Cha)</td>
      <td>None</td>
      <td>High</td>
    </tr>
    <tr>
      <td><strong>Warlock</strong></td>
      <td>Damage / Utility</td>
      <td>d8</td>
      <td>Charisma</td>
      <td>Pact Magic</td>
      <td>Light*</td>
      <td>High</td>
    </tr>
    <tr>
      <td><strong>Wizard</strong></td>
      <td>Control / Utility</td>
      <td>d6</td>
      <td>Intelligence</td>
      <td>Full (Int)</td>
      <td>None</td>
      <td>High</td>
    </tr>
  </tbody>
</table>
</div>

<p style="margin-top: 10px;"><small>* Some domains/subclasses grant heavy armor (Cleric), spellcasting (Eldritch Knight Fighter, Arcane Trickster Rogue, Four Elements Monk), or medium armor/shields (Hexblade Warlock)</small></p>

<p><strong>Complexity Key:</strong></p>
<ul>
  <li><strong>Low:</strong> Straightforward mechanics, easy for beginners (Barbarian, Fighter, Rogue)</li>
  <li><strong>Medium:</strong> Some resource management or tactical decisions (Bard, Cleric, Monk, Paladin, Ranger)</li>
  <li><strong>High:</strong> Complex mechanics, spellcasting, or many options (Artificer, Druid, Sorcerer, Warlock, Wizard)</li>
</ul>`
    },
    {
      id: "choosing-a-class",
      title: "How to Choose a Class",
      content: `<p>Choosing your class is one of the most important character creation decisions. Here's how to find the right fit:</p>

<p><strong>1. Decide Your Role</strong></p>
<ul>
  <li><strong>Damage Dealer:</strong> Fighter, Paladin, Barbarian, Ranger, Rogue, Warlock</li>
  <li><strong>Tank/Defender:</strong> Barbarian, Fighter, Paladin, Moon Druid (via Wild Shape)</li>
  <li><strong>Healer:</strong> Cleric (especially Life Domain), Druid, Bard, Paladin</li>
  <li><strong>Support/Buffer:</strong> Bard, Cleric, Artificer, Druid</li>
  <li><strong>Crowd Control:</strong> Wizard, Druid, Bard, Sorcerer</li>
  <li><strong>Skill Expert/Face:</strong> Rogue, Bard, Ranger</li>
  <li><strong>Utility Caster:</strong> Wizard, Cleric, Artificer, Bard</li>
</ul>

<p><strong>2. Consider Complexity</strong></p>
<ul>
  <li><strong>New to D&D?</strong> Start with Fighter, Barbarian, or Rogue. Simple mechanics, effective in combat.</li>
  <li><strong>Comfortable with rules?</strong> Try Ranger, Paladin, Monk, Cleric, or Bard. Moderate complexity with rewarding choices.</li>
  <li><strong>Love optimization?</strong> Wizard, Sorcerer, Druid, Warlock, or Artificer offer deep customization.</li>
</ul>

<p><strong>3. Match Your Playstyle</strong></p>
<ul>
  <li><strong>Love melee combat:</strong> Barbarian, Fighter, Paladin, Monk</li>
  <li><strong>Prefer ranged attacks:</strong> Ranger, Fighter (Archery), Rogue, Warlock</li>
  <li><strong>Want to cast spells:</strong> Wizard, Sorcerer, Cleric, Druid, Bard, Warlock</li>
  <li><strong>Hybrid warrior-caster:</strong> Paladin, Ranger, Artificer, Eldritch Knight, Bladesinger</li>
  <li><strong>Stealthy infiltrator:</strong> Rogue, Ranger (Gloom Stalker), Monk (Shadow)</li>
  <li><strong>Social character:</strong> Bard, Rogue, Warlock, Paladin</li>
  <li><strong>Survivalist:</strong> Ranger, Druid, Barbarian</li>
</ul>

<p><strong>4. Think About Resources</strong></p>
<ul>
  <li><strong>Short rest classes:</strong> Warlock, Fighter, Monk — recharge quickly, excel in multiple fights per day</li>
  <li><strong>Long rest classes:</strong> Wizard, Sorcerer, Paladin — powerful but need rests to recharge</li>
  <li><strong>No resources:</strong> Fighter (after 2nd level has few limited abilities), Rogue — consistent every fight</li>
</ul>

<p><strong>5. Don't Worry About Optimization</strong></p>
<p>Every class is viable and fun. The "best" class is the one that excites you. Your party doesn't need a perfect composition — D&D is flexible and rewards creativity over min-maxing.</p>

<p><strong>Popular First-Time Picks:</strong></p>
<ul>
  <li><strong>Fighter (Champion):</strong> Easy to learn, effective at all levels, great for learning combat</li>
  <li><strong>Cleric (Life Domain):</strong> Powerful healer, durable, straightforward spellcasting</li>
  <li><strong>Rogue (any):</strong> Fun skill-based gameplay, satisfying Sneak Attack damage</li>
  <li><strong>Wizard (Evocation):</strong> Classic spellcaster fantasy, huge spell list for utility and damage</li>
</ul>`
    },
    {
      id: "martial-vs-caster",
      title: "Martial vs. Spellcasting Classes",
      content: `<p>Understanding the difference between martial and spellcasting classes helps you choose the right fit.</p>

<p><strong>Martial Classes (Barbarian, Fighter, Monk, Rogue)</strong></p>
<p><strong>Strengths:</strong></p>
<ul>
  <li>Consistent damage every round without resource management</li>
  <li>Higher hit points and better armor (typically)</li>
  <li>Simpler to play — fewer decisions in combat</li>
  <li>Don't need to track spell slots, prepared spells, or concentration</li>
  <li>Excel at sustained combat across multiple fights</li>
  <li>Reliable — your sword always works, spells can be countered or resisted</li>
</ul>

<p><strong>Weaknesses:</strong></p>
<ul>
  <li>Limited out-of-combat utility (except Rogue)</li>
  <li>Less versatility — if your weapon doesn't solve it, you're stuck</li>
  <li>Difficulty with flying, <a href="/rules/conditions/invisible-condition-5e/">invisible</a>, or heavily armored enemies</li>
  <li>Can feel repetitive ("I attack again") compared to spell variety</li>
</ul>

<p><strong>Spellcasting Classes (Bard, Cleric, Druid, Sorcerer, Warlock, Wizard)</strong></p>
<p><strong>Strengths:</strong></p>
<ul>
  <li>Incredible versatility — spells for combat, utility, exploration, and social situations</li>
  <li>Can solve problems martials can't: flight, invisibility, mind control, teleportation</li>
  <li>Scale dramatically at higher levels with powerful high-level spells</li>
  <li>Control the battlefield with area effects and crowd control</li>
  <li>Healing and support capabilities</li>
</ul>

<p><strong>Weaknesses:</strong></p>
<ul>
  <li>Resource-dependent — out of spell slots means limited options</li>
  <li>Lower hit points and armor class (typically)</li>
  <li>More complex — must manage spell selection, concentration, components, positioning</li>
  <li>Less effective in multiple back-to-back fights without rests</li>
  <li>Can be shut down by Counterspell, Silence, or anti-magic zones</li>
</ul>

<p><strong>Half-Casters (Artificer, Paladin, Ranger)</strong></p>
<p>These classes blend martial and spellcasting:</p>
<ul>
  <li>Strong weapon attacks with spell support</li>
  <li>Fewer spell slots than full casters, but still versatile</li>
  <li>Good balance of durability and utility</li>
  <li>Paladin and Ranger get spells at 2nd level, slower progression</li>
  <li>Best of both worlds for players who want magic without full commitment</li>
</ul>

<p><strong>The Linear Warriors vs. Quadratic Wizards Debate</strong></p>
<p>A common discussion: martial classes shine at low levels (levels 1-4) with consistent damage and survivability. Spellcasters become exponentially stronger at high levels (11+) with spells like Wall of Force, Forcecage, and Wish that can trivialize challenges.</p>

<p>However, 5e balances this better than previous editions. Martial classes remain competitive with Extra Attack, consistent damage, and subclass features. The best approach: play what's fun, not what's "optimal."</p>

<p><strong>Party Composition Tips</strong></p>
<ul>
  <li>You don't need a "perfect" party composition — any combination works</li>
  <li>Having at least one character with healing helps, but healing potions can fill the gap</li>
  <li>Mix of martial and spellcasting is ideal for balanced challenges</li>
  <li>Overlapping roles is fine — two rogues or two clerics can work great</li>
  <li>Consider covering key skills: Perception, Investigation, Stealth, Persuasion, Arcana</li>
</ul>`
    },
    {
      id: "multiclassing",
      title: "Multiclassing Basics",
      content: `<p>Multiclassing lets you take levels in multiple classes, creating hybrid characters. It's an optional rule that adds complexity but opens unique builds.</p>

<p><strong>How Multiclassing Works:</strong></p>
<ul>
  <li>When you gain a level, you can choose to take it in a different class</li>
  <li>You must meet the ability score prerequisites for both your current class and the new class (typically 13 in the primary ability)</li>
  <li>You gain the new class's features but not all starting proficiencies</li>
  <li>Your character level is the sum of all class levels (Fighter 5 / Wizard 3 = level 8 character)</li>
</ul>

<p><strong>Common Multiclass Combinations:</strong></p>
<ul>
  <li><strong>Paladin / Warlock (Hexblade):</strong> Charisma-based weapon attacks, short rest spell slots for smites, Eldritch Blast</li>
  <li><strong>Fighter / Wizard (Bladesinger or War Magic):</strong> Action Surge for spellcasting, armor proficiency, Extra Attack</li>
  <li><strong>Rogue / Fighter:</strong> Extra Attack, Action Surge, more survivability for Sneak Attack</li>
  <li><strong>Barbarian / Fighter:</strong> Rage + Action Surge for massive nova damage</li>
  <li><strong>Sorcerer / Warlock:</strong> Quickened Eldritch Blast, short rest spell slots for Metamagic, Hexblade for armor</li>
  <li><strong>Cleric / Druid:</strong> Combine spell lists, double prepared spells, heavy armor + Wild Shape</li>
  <li><strong>Bard / Paladin:</strong> Jack of All Trades for initiative, Smite with bard slots, great face character</li>
</ul>

<p><strong>Multiclassing Spell Slots:</strong></p>
<p>If you multiclass spellcasters, calculate your spell slots using the multiclass spellcaster table:</p>
<ul>
  <li>Full casters (Bard, Cleric, Druid, Sorcerer, Wizard) count as their full level</li>
  <li>Half casters (Artificer, Paladin, Ranger) count as half their level (rounded down)</li>
  <li>Third casters (Eldritch Knight, Arcane Trickster) count as one-third their level (rounded down)</li>
  <li>Warlock Pact Magic does NOT combine — it remains separate</li>
</ul>

<p><strong>Example:</strong> A Wizard 5 / Cleric 3 character has 8 caster levels (5 + 3), granting 4/3/3/2 spell slots (1st/2nd/3rd/4th level slots).</p>

<p><strong>Important:</strong> You still learn and prepare spells based on each class individually. A Wizard 5 / Cleric 3 knows 3rd-level wizard spells and 2nd-level cleric spells separately, even though they have 4th-level spell slots.</p>

<p><strong>Multiclassing Pitfalls:</strong></p>
<ul>
  <li><strong>Delayed power spikes:</strong> You'll miss out on higher-level features like Extra Attack, 5th-level spells, or capstone abilities</li>
  <li><strong>Multiple Ability Dependencies (MAD):</strong> Needing high Str, Dex, Con, Wis, Int, and Cha spreads your ability scores thin</li>
  <li><strong>Complexity:</strong> Tracking features from multiple classes is harder than single-class characters</li>
  <li><strong>Lost capstones:</strong> 20th-level single-class features are powerful — multiclassing means you'll never get them</li>
</ul>

<p><strong>Should You Multiclass?</strong></p>
<p>Multiclassing is optional and not necessary for a strong character. Single-class characters are simpler and often more powerful. Only multiclass if:</p>
<ul>
  <li>You have a specific character concept that requires it</li>
  <li>You're comfortable with the added complexity</li>
  <li>Your DM allows it (it's an optional rule)</li>
  <li>You understand you're sacrificing some power for versatility</li>
</ul>

<p>For new players, sticking with a single class for your first character is recommended.</p>`
    },
    {
      id: "subclasses",
      title: "Subclasses and Specialization",
      content: `<p>Every class has subclasses (also called archetypes, domains, paths, or circles) that define your specialization.</p>

<p><strong>When You Choose:</strong></p>
<ul>
  <li><strong>1st level:</strong> Cleric (Domain), Sorcerer (Origin), Warlock (Patron)</li>
  <li><strong>2nd level:</strong> Druid (Circle), Wizard (Arcane Tradition)</li>
  <li><strong>3rd level:</strong> Barbarian (Path), Bard (College), Fighter (Archetype), Monk (Way), Paladin (Oath), Ranger (Conclave), Rogue (Archetype), Artificer (Specialist)</li>
</ul>

<p><strong>Why Subclasses Matter:</strong></p>
<p>Subclasses radically change how your class plays. The difference between a Life Cleric (healer) and a War Cleric (melee fighter) is as significant as choosing between different classes.</p>

<p><strong>Examples of Subclass Variety:</strong></p>

<p><strong>Fighter:</strong></p>
<ul>
  <li><strong>Champion:</strong> Simple critical hit expansion for straightforward play</li>
  <li><strong>Battle Master:</strong> Tactical maneuvers for control and utility</li>
  <li><strong>Eldritch Knight:</strong> Wizard spellcasting for magical defense and offense</li>
  <li><strong>Echo Knight:</strong> Summon echo for teleportation and positioning tricks</li>
</ul>

<p><strong>Wizard:</strong></p>
<ul>
  <li><strong>Evocation:</strong> Damage-focused blaster who protects allies from friendly fire</li>
  <li><strong>Divination:</strong> Fortune-teller with Portent dice to control outcomes</li>
  <li><strong>Abjuration:</strong> Defensive specialist with arcane ward and counterspells</li>
  <li><strong>Bladesinger:</strong> Sword-and-spell duelist with high AC and melee capability</li>
</ul>

<p><strong>Cleric:</strong></p>
<ul>
  <li><strong>Life:</strong> Maximum healing output for dedicated support</li>
  <li><strong>Light:</strong> Fire and radiant damage blaster with defensive reactions</li>
  <li><strong>Forge:</strong> Craft magical items, immune to fire, tank with heavy armor</li>
  <li><strong>Trickery:</strong> Stealth and illusion focus for roguelike gameplay</li>
</ul>

<p><strong>Subclass Resources:</strong></p>
<ul>
  <li><strong>Player's Handbook (PHB):</strong> 2-3 subclasses per class (the classics)</li>
  <li><strong>Xanathar's Guide to Everything (XGE):</strong> Additional options for every class</li>
  <li><strong>Tasha's Cauldron of Everything (TCE):</strong> More modern options, often stronger than PHB</li>
  <li><strong>Other sourcebooks:</strong> Setting-specific subclasses (Eberron, Ravnica, etc.)</li>
</ul>

<p><strong>Choosing Your Subclass:</strong></p>
<ul>
  <li>Read all available options before committing — subclass choice is (usually) permanent</li>
  <li>Consider your party composition — if you have three blasters, maybe support is needed</li>
  <li>Match your character concept — pick what fits your story, not just mechanics</li>
  <li>Ask your DM what sourcebooks are allowed — not all tables permit every supplement</li>
  <li>Don't stress — almost every subclass is viable and fun</li>
</ul>

<p><strong>Can You Change Subclass?</strong></p>
<p>RAW (Rules As Written), you cannot change your subclass after choosing it. However, some DMs allow retraining during downtime or when your character has a significant story reason. Discuss with your DM if you're unhappy with your choice.</p>`
    }
  ]
};
