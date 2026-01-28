import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  spellsByCategory,
  categoryMeta,
  classSpellLists,
  spellOverview,
} from "@/data/spells-index";

export function generateStaticParams() {
  return [
    ...Object.keys(spellsByCategory).map((cat) => ({ category: cat })),
    { category: "class-spell-lists" },
    { category: "general" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (meta) {
    return { title: meta.title, description: meta.description };
  }
  if (category === "class-spell-lists") {
    return {
      title: "Class Spell Lists",
      description: "Quick reference spell lists for every spellcasting class in D&D 5e.",
    };
  }
  return { title: "Spells" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  // Class spell lists index
  if (category === "class-spell-lists") {
    return (
      <>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Spells", href: "/spells/" },
            { label: "Class Spell Lists" },
          ]}
        />
        <div className="pt-6 pb-2">
          <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
            Class Spell Lists
          </h1>
          <p className="text-[var(--text-dim)]">
            Quick reference spell lists for every spellcasting class in D&amp;D 5e.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-6">
          {classSpellLists.map((cl) => (
            <Link
              key={cl.slug}
              href={`/spells/class-spell-lists/${cl.slug}/`}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 no-underline text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors block"
            >
              <div className="text-sm font-semibold">{cl.name}</div>
              <div className="text-xs text-[var(--text-dim)]">{cl.className}</div>
            </Link>
          ))}
        </div>
      </>
    );
  }

  // General spells overview
  if (category === "general") {
    return (
      <>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Spells", href: "/spells/" },
            { label: "How Spells Work" },
          ]}
        />
        <div className="pt-6 pb-2">
          <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
            {spellOverview.name}
          </h1>
          <p className="text-[var(--text-dim)]">{spellOverview.description}</p>
        </div>
        {spellOverview.sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="py-8 border-t border-[var(--border)]"
          >
            <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
              {s.title}
            </h2>
            <div
              className="text-sm text-[var(--text-dim)] leading-relaxed [&_strong]:text-[var(--text)] [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1"
              dangerouslySetInnerHTML={{ __html: s.content }}
            />
          </section>
        ))}
      </>
    );
  }

  // Regular spell category
  const spells = spellsByCategory[category];
  const meta = categoryMeta[category];
  if (!spells || !meta) return notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spells", href: "/spells/" },
          { label: meta.title },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          {meta.title}
        </h1>
        <p className="text-[var(--text-dim)]">
          {meta.description} &mdash; {spells.length} guides
        </p>
      </div>

      <div className="py-6">
        {spells
          .sort((a, b) => b.searchVolume - a.searchVolume)
          .map((s) => (
            <Link
              key={s.slug}
              href={`/spells/${s.category}/${s.slug}/`}
              className="flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-2 no-underline text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors"
            >
              <div>
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="text-xs text-[var(--text-dim)]">
                  {s.level} &middot; {s.school}
                  {s.concentration && (
                    <span className="ml-2 text-[var(--orange)]">Concentration</span>
                  )}
                </div>
              </div>
              <div className="text-xs text-[var(--text-dim)]">
                {s.damage || s.duration}
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
