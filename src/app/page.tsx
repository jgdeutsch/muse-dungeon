import Link from "next/link";

const groups = [
  {
    id: "spells",
    icon: "\u2728",
    title: "Spells & Magic",
    count: "87 guides",
    color: "rgba(155, 107, 196, 0.15)",
    href: "/spells/",
    categories: [
      { name: "Cantrips", count: 9, href: "/spells/cantrips/" },
      { name: "Offensive Spells", count: 23, href: "/spells/offensive/" },
      { name: "Utility & Control", count: 31, href: "/spells/utility-control/" },
      { name: "Support & Healing", count: 9, href: "/spells/support-healing/" },
      { name: "Reaction & Defense", count: 5, href: "/spells/reaction-defense/" },
      { name: "Class Spell Lists", count: 9, href: "/spells/class-spell-lists/" },
    ],
  },
  {
    id: "characters",
    icon: "\u2694",
    title: "Character Options",
    count: "71 guides",
    color: "rgba(91, 141, 196, 0.15)",
    href: "/characters/",
    categories: [
      { name: "Classes & Subclasses", count: 24, href: "/characters/classes/" },
      { name: "Races & Species", count: 33, href: "/characters/races/" },
      { name: "Combat Maneuvers & Feats", count: 6, href: "/characters/feats/" },
      { name: "Character Creation Tools", count: 4, href: "/characters/creation/" },
    ],
  },
  {
    id: "monsters",
    icon: "\uD83D\uDC7A",
    title: "Monsters & Lore",
    count: "18 guides",
    color: "rgba(196, 91, 91, 0.15)",
    href: "/monsters/",
    categories: [
      { name: "Monsters & Creatures", count: 13, href: "/monsters/creatures/" },
      { name: "Lore & NPCs", count: 3, href: "/monsters/lore/" },
      { name: "Sourcebooks", count: 2, href: "/monsters/sourcebooks/" },
    ],
  },
  {
    id: "items",
    icon: "\uD83D\uDEE1",
    title: "Items & Gear",
    count: "15 guides",
    color: "rgba(201, 168, 76, 0.15)",
    href: "/items/",
    categories: [
      { name: "Equipment & Weapons", count: 9, href: "/items/equipment/" },
      { name: "Magic Items", count: 6, href: "/items/magic-items/" },
    ],
  },
  {
    id: "rules",
    icon: "\uD83D\uDCD6",
    title: "Rules & Systems",
    count: "17 guides",
    color: "rgba(91, 196, 122, 0.15)",
    href: "/rules/",
    categories: [
      { name: "Core Mechanics", count: 7, href: "/rules/core-mechanics/" },
      { name: "Game Terms & Backgrounds", count: 4, href: "/rules/game-terms/" },
      { name: "External Tools & Resources", count: 4, href: "/rules/tools-resources/" },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="inline-block text-xs uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)] rounded-full px-4 py-1 mb-6">
          D&amp;D 5e Quick Reference
        </div>
        <h1 className="font-['Cinzel'] text-4xl sm:text-5xl font-bold leading-tight mb-5 max-w-2xl mx-auto">
          Look it up <span className="text-[var(--accent)]">in seconds</span>,
          not minutes.
        </h1>
        <p className="text-lg text-[var(--text-dim)] max-w-xl mx-auto mb-8 leading-relaxed">
          Fast, scannable reference guides built for Dungeon Masters who need
          answers at the table &mdash; not textbook chapters.
        </p>
      </section>

      {/* Stats */}
      <div className="flex justify-center gap-10 py-8 mb-4 border-b border-[var(--border)]">
        {[
          { n: "208", l: "Reference Guides" },
          { n: "5", l: "Categories" },
          { n: "87", l: "Spells Covered" },
          { n: "24", l: "Classes & Subclasses" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-['Cinzel'] text-2xl font-bold text-[var(--accent)]">
              {s.n}
            </div>
            <div className="text-xs text-[var(--text-dim)] mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Groups */}
      {groups.map((g) => (
        <section key={g.id} id={g.id} className="py-10 border-t border-[var(--border)] first:border-t-0">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
              style={{ background: g.color }}
            >
              {g.icon}
            </div>
            <div>
              <Link href={g.href} className="no-underline">
                <div className="font-['Cinzel'] text-xl font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                  {g.title}
                </div>
              </Link>
              <div className="text-xs text-[var(--text-dim)]">{g.count}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {g.categories.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 no-underline text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors block"
              >
                <div className="text-sm font-semibold mb-1">{c.name}</div>
                <div className="text-xs text-[var(--text-dim)]">
                  {c.count} guides
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* About */}
      <section className="py-10 border-t border-[var(--border)]">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            Built for the DM seat
          </h2>
          <p className="text-[var(--text-dim)] text-sm mb-3 max-w-xl">
            You&apos;re mid-session. A player casts a spell you haven&apos;t used before.
            Another asks how grappling works. You need the answer{" "}
            <strong className="text-[var(--text)]">now</strong> &mdash; not a
            2,000-word article about the history of the rule.
          </p>
          <p className="text-[var(--text-dim)] text-sm mb-3 max-w-xl">
            <strong className="text-[var(--text)]">Muse Dungeon</strong> is a
            collection of 208 quick-reference guides designed for one purpose:
            helping Dungeon Masters look up D&amp;D 5e rules, spells, classes,
            monsters, and items in seconds.
          </p>
          <p className="text-[var(--text-dim)] text-sm max-w-xl">
            No ads. No pop-ups. No &ldquo;sign up to see the rest.&rdquo; Just the
            answer you need, formatted for a phone screen at the table.
          </p>
        </div>
      </section>
    </>
  );
}
