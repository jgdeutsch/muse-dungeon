import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "Monsters & Lore — D&D 5e",
  description:
    "D&D 5e monster stat blocks, lore guides, and sourcebook references for Dungeon Masters.",
};

const categories = [
  {
    key: "creatures",
    title: "Monsters & Creatures",
    description:
      "Stat blocks, tactics, and encounter tips for iconic D&D monsters.",
    count: 13,
  },
  {
    key: "lore",
    title: "Lore & NPCs",
    description: "Gods, famous NPCs, and world lore quick references.",
    count: 3,
  },
  {
    key: "sourcebooks",
    title: "Sourcebooks",
    description: "What's inside each sourcebook and who it's for.",
    count: 2,
  },
];

export default function MonstersIndex() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Monsters" }]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          Monsters &amp; Lore
        </h1>
        <p className="text-[var(--text-dim)]">
          18 quick-reference guides for monsters, lore, and sourcebooks.
        </p>
      </div>

      {categories.map((cat) => (
        <section
          key={cat.key}
          className="py-8 border-t border-[var(--border)]"
        >
          <Link href={`/monsters/${cat.key}/`} className="no-underline">
            <h2 className="font-['Cinzel'] text-xl font-semibold mb-1 text-[var(--text)] hover:text-[var(--accent)] transition-colors">
              {cat.title}
            </h2>
          </Link>
          <p className="text-sm text-[var(--text-dim)]">
            {cat.description} &mdash; {cat.count} guides
          </p>
        </section>
      ))}
    </>
  );
}
