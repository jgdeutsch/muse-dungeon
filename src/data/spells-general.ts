export type SpellOverviewPage = {
  slug: string;
  name: string;
  description: string;
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
  category: "general";
  searchVolume: number;
};

export const spellOverview: SpellOverviewPage = {
  slug: "5e-spells",
  name: "D&D 5e Spells — How Spellcasting Works",
  description: "Complete guide to spellcasting in D&D 5e, covering spell slots, concentration, components, casting times, and common rules questions. Essential reference for players and DMs.",
  category: "general",
  searchVolume: 6590,
  sections: [
    {
      id: "spell-slots",
      title: "Spell Slots and Spellcasting",
      content: `<p>Spell slots are the resource you expend to cast spells. Each spell has a level (0-9), and you must use a spell slot of that level or higher to cast it.</p>

<p><strong>Key Rules:</strong></p>
<ul>
  <li>Casting a spell at a higher level than its base level is called "upcasting" and often increases its power</li>
  <li>Cantrips (0-level spells) can be cast at will without expending spell slots</li>
  <li>You regain all expended spell slots when you finish a long rest (some classes like warlocks and wizards have special recovery features)</li>
  <li>Full casters (wizard, cleric, druid, bard, sorcerer) get 9th-level slots at 17th level</li>
  <li>Half casters (paladin, ranger) get 5th-level slots at 17th level and progress slower</li>
  <li>Third casters (Eldritch Knight, Arcane Trickster) get 4th-level slots at 19th level</li>
</ul>

<p><strong>Multiclass Spellcasting:</strong> When multiclassing spellcasters, you add together your levels in different spellcasting classes using the table in the Player's Handbook. Full casters count as their level, half casters count as half their level (rounded down), and third casters count as one-third their level (rounded down). This determines your spell slot progression, but you still learn/prepare spells based on each individual class level.</p>`
    },
    {
      id: "spell-vs-character-level",
      title: "Spell Level vs. Character Level",
      content: `<p>One of the most common points of confusion for new players: <strong>spell level and character level are completely different things.</strong></p>

<p><strong>Character Level:</strong> Your total level in your class(es). A 5th-level wizard is character level 5.</p>

<p><strong>Spell Level:</strong> The power tier of a spell, ranging from 0 (cantrips) to 9. Fireball is a 3rd-level spell regardless of who casts it.</p>

<p><strong>Examples:</strong></p>
<ul>
  <li>A 1st-level wizard can only cast 1st-level spells (and cantrips)</li>
  <li>A 5th-level wizard can cast up to 3rd-level spells</li>
  <li>A 20th-level wizard can cast up to 9th-level spells</li>
  <li>Fireball is always a "3rd-level spell" even when cast by a 20th-level wizard</li>
</ul>

<p>When a spell says "at higher levels," it means when you use a higher-level spell slot to cast it, not when you gain character levels.</p>`
    },
    {
      id: "concentration",
      title: "Concentration Rules",
      content: `<p>Many powerful spells require concentration to maintain. You can only concentrate on one spell at a time.</p>

<p><strong>Concentration Rules:</strong></p>
<ul>
  <li>If you cast another concentration spell, the first one immediately ends</li>
  <li>You can choose to drop concentration at any time (no action required)</li>
  <li>When you take damage, you must make a Constitution saving throw to maintain concentration</li>
  <li>DC = 10 or half the damage taken, whichever is higher</li>
  <li>Taking damage from multiple sources requires separate saves for each instance</li>
  <li>Being <a href="/rules/conditions/incapacitated-condition-5e/">incapacitated</a> or killed automatically breaks concentration</li>
</ul>

<p><strong>Common Concentration Spells:</strong></p>
<ul>
  <li>Bless, Hunter's Mark, Hex (buffs/debuffs)</li>
  <li>Haste, Polymorph (transformations)</li>
  <li>Hypnotic Pattern, Web, Entangle (crowd control)</li>
  <li>Spirit Guardians, Call Lightning (sustained damage)</li>
</ul>

<p><strong>Important:</strong> Effects that don't say "concentration" in their duration don't require concentration. Mage Armor, Bless (once cast), and Aid all last their full duration without concentration.</p>`
    },
    {
      id: "components",
      title: "Spell Components (V, S, M)",
      content: `<p>Every spell requires components to cast: Verbal (V), Somatic (S), and/or Material (M).</p>

<p><strong>Verbal Components:</strong></p>
<ul>
  <li>Requires speaking in a clear, commanding voice</li>
  <li>Cannot cast if silenced, gagged, or in a Silence spell</li>
  <li>NPCs can hear you casting (unless you have Subtle Spell metamagic)</li>
</ul>

<p><strong>Somatic Components:</strong></p>
<ul>
  <li>Requires at least one hand free to make gestures</li>
  <li>If you're holding a weapon and shield, you cannot cast somatic spells without War Caster feat or sheathing/dropping items</li>
  <li>The hand holding a spellcasting focus or material components can also perform somatic components</li>
</ul>

<p><strong>Material Components:</strong></p>
<ul>
  <li>Most materials can be replaced with a spellcasting focus (wand, staff, holy symbol, etc.) or component pouch</li>
  <li>If the material has a listed <strong>gold cost</strong>, you need the actual component (focus doesn't work)</li>
  <li>If the material is <strong>consumed</strong>, you need to provide it each time (e.g., 300gp diamond for Revivify)</li>
  <li>A focus hand or pouch hand can also perform somatic components for that spell</li>
</ul>

<p><strong>Common Confusion:</strong> A cleric with a shield and mace can cast spells by putting their holy symbol on their shield - the hand holding the shield with holy symbol counts as both material and somatic components. A wizard with staff and free hand can cast anything. A sword-and-shield fighter with Eldritch Knight struggles without War Caster feat.</p>`
    },
    {
      id: "ritual-casting",
      title: "Ritual Casting",
      content: `<p>Spells with the "ritual" tag can be cast as rituals, taking 10 extra minutes but not expending a spell slot.</p>

<p><strong>Class Differences:</strong></p>
<ul>
  <li><strong>Wizards:</strong> Can ritual cast any spell in their spellbook with the ritual tag, even if not prepared</li>
  <li><strong>Clerics and Druids:</strong> Can ritual cast any prepared spell with the ritual tag</li>
  <li><strong>Bards and Sorcerers:</strong> Bards can ritual cast known spells with the ritual tag (sorcerers cannot ritual cast at all without special features)</li>
  <li><strong>Warlocks:</strong> Can only ritual cast with the Book of Ancient Secrets invocation</li>
  <li><strong>Paladins and Rangers:</strong> Cannot ritual cast without special subclass features</li>
</ul>

<p><strong>Common Ritual Spells:</strong></p>
<ul>
  <li>Detect Magic (check for magical auras)</li>
  <li>Identify (learn magic item properties)</li>
  <li>Comprehend Languages (understand any spoken language)</li>
  <li>Find Familiar (wizard only - summon permanent familiar)</li>
  <li>Leomund's Tiny Hut (create shelter for long rest)</li>
</ul>

<p><strong>Why It Matters:</strong> Ritual casting lets you use utility spells without expending precious spell slots. Always ritual cast Detect Magic when you have 10 minutes to spare.</p>`
    },
    {
      id: "spell-save-dc",
      title: "Spell Save DC",
      content: `<p>When you cast a spell that forces a target to make a saving throw, they roll against your Spell Save DC.</p>

<p><strong>Formula:</strong></p>
<p><code>Spell Save DC = 8 + proficiency bonus + spellcasting ability modifier</code></p>

<p><strong>Examples:</strong></p>
<ul>
  <li><strong>5th-level <a href="/characters/classes/wizard-5e/">Wizard</a> (Int 18):</strong> 8 + 3 (proficiency) + 4 (Int mod) = <strong>DC 15</strong></li>
  <li><strong>10th-level <a href="/characters/classes/cleric-5e/">Cleric</a> (Wis 20):</strong> 8 + 4 (proficiency) + 5 (Wis mod) = <strong>DC 17</strong></li>
  <li><strong>3rd-level <a href="/characters/classes/warlock-5e/">Warlock</a> (Cha 16):</strong> 8 + 2 (proficiency) + 3 (Cha mod) = <strong>DC 13</strong></li>
</ul>

<p><strong>Spellcasting Ability by Class:</strong></p>
<ul>
  <li><strong>Intelligence:</strong> <a href="/characters/classes/wizard-5e/">Wizard</a>, Eldritch Knight, Arcane Trickster</li>
  <li><strong>Wisdom:</strong> <a href="/characters/classes/cleric-5e/">Cleric</a>, <a href="/characters/classes/druid-5e/">Druid</a>, <a href="/characters/classes/ranger-5e/">Ranger</a></li>
  <li><strong>Charisma:</strong> <a href="/characters/classes/bard-5e/">Bard</a>, <a href="/characters/classes/paladin-5e/">Paladin</a>, <a href="/characters/classes/sorcerer-5e/">Sorcerer</a>, <a href="/characters/classes/warlock-5e/">Warlock</a></li>
</ul>

<p><strong>Important:</strong> Your spell save DC applies to all your spells - you don't roll anything when enemies make saves. The target makes the d20 roll and must meet or exceed your DC to succeed.</p>`
    },
    {
      id: "spell-attack-modifier",
      title: "Spell Attack Modifier",
      content: `<p>Some spells require you to make a spell attack roll to hit the target (like Fire Bolt or Shocking Grasp).</p>

<p><strong>Formula:</strong></p>
<p><code>Spell Attack Bonus = proficiency bonus + spellcasting ability modifier</code></p>

<p><strong>Examples:</strong></p>
<ul>
  <li><strong>5th-level <a href="/characters/classes/wizard-5e/">Wizard</a> (Int 18):</strong> 3 (proficiency) + 4 (Int mod) = <strong>+7 to hit</strong></li>
  <li><strong>10th-level <a href="/characters/classes/cleric-5e/">Cleric</a> (Wis 20):</strong> 4 (proficiency) + 5 (Wis mod) = <strong>+9 to hit</strong></li>
  <li><strong>3rd-level <a href="/characters/classes/warlock-5e/">Warlock</a> (Cha 16):</strong> 2 (proficiency) + 3 (Cha mod) = <strong>+5 to hit</strong></li>
</ul>

<p><strong>How It Works:</strong></p>
<ul>
  <li>You roll 1d20 + your spell attack bonus</li>
  <li>If the result meets or exceeds the target's AC, you hit</li>
  <li>Critical hits (natural 20) and critical misses (natural 1) apply normally</li>
  <li>Advantage/disadvantage from features like Faerie Fire or Invisibility apply</li>
</ul>

<p><strong>Common Spell Attack Spells:</strong></p>
<ul>
  <li>Fire Bolt, Ray of Frost, Eldritch Blast (cantrips)</li>
  <li>Chromatic Orb, Guiding Bolt, Inflict Wounds (1st level)</li>
  <li>Scorching Ray, Spiritual Weapon (2nd level)</li>
</ul>`
    },
    {
      id: "bonus-action-spells",
      title: "Bonus Action Spell Restrictions",
      content: `<p>This is one of the most misunderstood rules in D&D 5e. If you cast a spell using a bonus action, you can only cast cantrips with your action on the same turn.</p>

<p><strong>The Rule:</strong></p>
<p>If you cast a spell (of any level) as a bonus action, the only other spell you can cast that turn is a cantrip with a casting time of 1 action.</p>

<p><strong>Legal Combinations:</strong></p>
<ul>
  <li>Bonus action: Healing Word (1st level) → Action: Fire Bolt (cantrip) ✓</li>
  <li>Bonus action: Misty Step (2nd level) → Action: Eldritch Blast (cantrip) ✓</li>
  <li>Action: Fireball (3rd level) → Reaction: Shield (1st level) ✓ (reaction is not affected by this rule)</li>
</ul>

<p><strong>Illegal Combinations:</strong></p>
<ul>
  <li>Bonus action: Healing Word → Action: Cure Wounds ✗</li>
  <li>Bonus action: Misty Step → Action: Fireball ✗</li>
  <li>Quickened Spell (<a href="/characters/classes/sorcerer-5e/">Sorcerer</a>): Fireball → Action: Counterspell ✗</li>
</ul>

<p><strong>Common Mistakes:</strong></p>
<ul>
  <li>Thinking you can only cast one spell per turn (you can cast action spell + reaction spell like Shield)</li>
  <li>Forgetting the restriction applies even if you upcast a cantrip-level spell as a bonus action</li>
  <li>Not realizing this applies to Quickened Spell metamagic - if you quicken a leveled spell, you can only cantrip with your action</li>
</ul>

<p><strong>Action Surge Exception:</strong> Fighters with Action Surge can cast two leveled spells with their actions as long as neither is a bonus action spell.</p>`
    },
    {
      id: "prepared-vs-known",
      title: "Prepared Spells vs. Known Spells",
      content: `<p>Different spellcasting classes learn magic differently. Some prepare spells daily from a larger list, while others know a fixed set of spells.</p>

<p><strong>Prepared Spellcasters (<a href="/characters/classes/cleric-5e/">Clerics</a>, <a href="/characters/classes/druid-5e/">Druids</a>, <a href="/characters/classes/paladin-5e/">Paladins</a>, <a href="/characters/classes/wizard-5e/">Wizards</a>):</strong></p>
<ul>
  <li>Have access to their entire class spell list (wizards use their spellbook)</li>
  <li>Prepare a number of spells after each long rest: <strong>spellcasting modifier + class level</strong> (half class level for paladins)</li>
  <li>Can only cast prepared spells (except rituals for some classes)</li>
  <li>Can change their prepared spells completely after each long rest</li>
  <li>Subclass/domain spells are always prepared and don't count against the limit</li>
</ul>

<p><strong>Known Spellcasters (<a href="/characters/classes/bard-5e/">Bards</a>, <a href="/characters/classes/ranger-5e/">Rangers</a>, <a href="/characters/classes/sorcerer-5e/">Sorcerers</a>, <a href="/characters/classes/warlock-5e/">Warlocks</a>):</strong></p>
<ul>
  <li>Learn a specific number of spells based on their level (see class table)</li>
  <li>Can cast any known spell using available spell slots</li>
  <li>Can only change one known spell when they gain a class level</li>
  <li>Choose carefully - swapping spells is very limited</li>
</ul>

<p><strong>Examples:</strong></p>
<ul>
  <li><strong>5th-level <a href="/characters/classes/cleric-5e/">Cleric</a> (Wis 16):</strong> Prepares 3 + 5 = 8 spells from entire cleric list, plus domain spells always prepared</li>
  <li><strong>5th-level <a href="/characters/classes/sorcerer-5e/">Sorcerer</a> (Cha 18):</strong> Knows exactly 6 spells total from sorcerer list, can't change until next level</li>
  <li><strong>5th-level <a href="/characters/classes/wizard-5e/">Wizard</a> (Int 18):</strong> Has 14 spells in spellbook (6 starting + 8 from levels), prepares 4 + 5 = 9 spells each day</li>
</ul>

<p><strong>Strategic Considerations:</strong></p>
<ul>
  <li>Prepared casters should adjust their spells based on expected challenges (dungeon vs. social encounter)</li>
  <li>Known casters need versatile, reliable spells since they can't adapt easily</li>
  <li>Wizards can learn unlimited spells in their spellbook by copying from scrolls and other spellbooks</li>
</ul>`
    },
    {
      id: "common-mistakes",
      title: "Common Spellcasting Mistakes",
      content: `<p>Here are the most frequent spellcasting errors DMs see at tables, with the correct rulings.</p>

<p><strong>1. Concentration Stacking</strong></p>
<p>❌ Wrong: "I cast Bless, then cast Shield of Faith while maintaining Bless."<br>
✓ Right: Bless ends immediately when you cast Shield of Faith (both require concentration).</p>

<p><strong>2. Bonus Action Spell + Leveled Spell</strong></p>
<p>❌ Wrong: "I cast Healing Word as a bonus action, then Cure Wounds as my action."<br>
✓ Right: If you cast any bonus action spell, you can only cast cantrips with your action that turn.</p>

<p><strong>3. Ritual Casting = No Components</strong></p>
<p>❌ Wrong: "I ritual cast so I don't need material components."<br>
✓ Right: Ritual casting only removes the spell slot cost. You still need all components (V, S, M).</p>

<p><strong>4. Upcasting Cantrips</strong></p>
<p>❌ Wrong: "I use a 3rd-level spell slot to make Fire Bolt stronger."<br>
✓ Right: Cantrips can't use spell slots. They scale automatically with total character level, not spell slots.</p>

<p><strong>5. Spell Level = Character Level</strong></p>
<p>❌ Wrong: "I'm 5th level so Fireball does 5d6 damage."<br>
✓ Right: Fireball always does 8d6 (it's a 3rd-level spell). Character level doesn't directly affect spell damage.</p>

<p><strong>6. Preparing = Learning</strong></p>
<p>❌ Wrong: "My wizard prepares 9 spells, so that's all I know."<br>
✓ Right: Wizards know all spells in their spellbook and prepare a subset. They can learn unlimited spells by copying.</p>

<p><strong>7. Counterspell Auto-Succeeds</strong></p>
<p>❌ Wrong: "I cast Counterspell so their spell fails."<br>
✓ Right: Counterspell auto-succeeds only against spells of 3rd level or lower. Higher level spells require an ability check (DC 10 + spell level).</p>

<p><strong>8. Spell Attacks Auto-Hit</strong></p>
<p>❌ Wrong: "I cast Scorching Ray and it automatically hits for 6d6."<br>
✓ Right: Spell attack spells require attack rolls against AC, just like weapon attacks. You can miss.</p>

<p><strong>9. Spell Range = AoE Size</strong></p>
<p>❌ Wrong: "Fireball has 150ft range so it can hit enemies 150ft away in a 150ft area."<br>
✓ Right: Range is how far away the center point can be. Fireball is a 20ft-radius sphere centered on a point within 150ft.</p>

<p><strong>10. Reaction Spells Interrupt Actions</strong></p>
<p>❌ Wrong: "I cast Shield before they roll to attack."<br>
✓ Right: Shield is cast after you know the attack would hit. The attack roll happens first, then you decide to cast Shield.</p>`
    },
    {
      id: "spellcasting-focus",
      title: "Spellcasting Focuses and Component Pouches",
      content: `<p>Most spellcasters use a spellcasting focus or component pouch to handle material components.</p>

<p><strong>Spellcasting Focus Options by Class:</strong></p>
<ul>
  <li><strong>Arcane Focus:</strong> Wizards, Sorcerers, Warlocks (crystal, orb, rod, staff, wand)</li>
  <li><strong>Druidic Focus:</strong> Druids (sprig of mistletoe, totem, wooden staff, yew wand)</li>
  <li><strong>Holy Symbol:</strong> Clerics, Paladins (amulet, emblem on shield, reliquary)</li>
  <li><strong>Musical Instrument:</strong> Bards (any instrument they're proficient with)</li>
</ul>

<p><strong>Component Pouch:</strong></p>
<ul>
  <li>Works for any spellcaster as an alternative to a class-specific focus</li>
  <li>Contains all common material components</li>
  <li>Functions identically to a spellcasting focus mechanically</li>
</ul>

<p><strong>What Focuses DON'T Replace:</strong></p>
<ul>
  <li>Materials with a listed gold piece cost (e.g., 300gp diamond for Revivify)</li>
  <li>Materials that are consumed by the spell (e.g., powdered silver for Magic Circle)</li>
  <li>If the spell lists a cost OR consumption, you need the actual component</li>
</ul>

<p><strong>Somatic Components + Focus:</strong></p>
<ul>
  <li>The hand holding your focus or component pouch can perform somatic components for that spell</li>
  <li>A cleric with a shield bearing a holy symbol can cast spells with S and M components</li>
  <li>A wizard holding a staff can perform S components with the staff hand</li>
  <li>If a spell has ONLY somatic components (no material), you need a completely free hand</li>
</ul>

<p><strong>Lost or Broken Focus:</strong></p>
<ul>
  <li>If you lose your focus, you cannot cast spells with material components (unless you have the actual materials)</li>
  <li>Focuses are not consumed or depleted - they work indefinitely</li>
  <li>Common costs: Arcane focus 5-20gp, Holy symbol 5gp, Component pouch 25gp</li>
</ul>`
    }
  ]
};
