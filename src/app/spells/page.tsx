import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { spellsByCategory, categoryMeta, allSpells } from "@/data/spells-index";

export const metadata = {
  title: "Spells & Magic",
  description:
    "D&D 5e spell quick reference guides for Dungeon Masters. Cantrips, offensive, utility, healing, and defensive spells — all in one place.",
};

export default function SpellsIndex() {
  const categories = Object.entries(spellsByCategory);

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Spells" }]} />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          Spells &amp; Magic
        </h1>
        <p className="text-[var(--text-dim)]">
          {allSpells.length} quick-reference spell guides for Dungeon Masters.
          Find the spell, check the stats, get back to the game.
        </p>
      </div>

      {categories.map(([key, spells]) => {
        const meta = categoryMeta[key];
        return (
          <section
            key={key}
            className="py-8 border-t border-[var(--border)]"
          >
            <Link href={`/spells/${key}/`} className="no-underline">
              <h2 className="font-['Cinzel'] text-xl font-semibold mb-1 text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                {meta?.title || key}
              </h2>
            </Link>
            <p className="text-sm text-[var(--text-dim)] mb-4">
              {meta?.description} &mdash; {spells.length} guides
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {spells
                .sort((a, b) => b.searchVolume - a.searchVolume)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/spells/${s.category}/${s.slug}/`}
                    className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2.5 no-underline text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors block"
                  >
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-xs text-[var(--text-dim)]">
                      {s.level} &middot; {s.school}
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
