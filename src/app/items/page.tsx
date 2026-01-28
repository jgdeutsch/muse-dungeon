import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "Items & Gear — D&D 5e",
  description:
    "D&D 5e equipment, weapons, armor, and magic items quick reference for Dungeon Masters.",
};

const categories = [
  {
    key: "equipment",
    title: "Equipment & Weapons",
    description: "Armor, weapons, and adventuring gear stats at a glance.",
    count: 9,
  },
  {
    key: "magic-items",
    title: "Magic Items",
    description: "Rarity, attunement, and mechanics for popular magic items.",
    count: 6,
  },
];

export default function ItemsIndex() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Items" }]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          Items &amp; Gear
        </h1>
        <p className="text-[var(--text-dim)]">
          15 quick-reference guides for equipment, weapons, and magic items.
        </p>
      </div>

      {categories.map((cat) => (
        <section
          key={cat.key}
          className="py-8 border-t border-[var(--border)]"
        >
          <Link href={`/items/${cat.key}/`} className="no-underline">
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
