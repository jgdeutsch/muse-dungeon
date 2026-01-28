import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  classPages,
  racePages,
  featOverview,
  featPages,
  combatPages,
  creationPages,
  characterCategoryMeta,
} from "@/data/characters-index";

export function generateStaticParams() {
  return [
    { category: "classes" },
    { category: "races" },
    { category: "feats" },
    { category: "creation" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = characterCategoryMeta[category];
  if (meta) return { title: `${meta.title} — D&D 5e`, description: meta.description };
  return { title: "Characters" };
}

export default async function CharacterCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = characterCategoryMeta[category];
  if (!meta) return notFound();

  let items: { slug: string; name: string; subtitle: string }[] = [];

  if (category === "classes") {
    items = classPages
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .map((c) => ({
        slug: c.slug,
        name: c.name,
        subtitle: `${c.hitDie} · ${c.primaryAbility}`,
      }));
  } else if (category === "races") {
    items = racePages
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .map((r) => ({
        slug: r.slug,
        name: r.name,
        subtitle: `${r.size} · ${r.speed}`,
      }));
  } else if (category === "feats") {
    const allFeats = [
      ...featPages.map((f) => ({
        slug: f.slug,
        name: f.name,
        subtitle: f.prerequisite || "No prerequisite",
        sv: f.searchVolume,
      })),
      ...combatPages.map((c) => ({
        slug: c.slug,
        name: c.name,
        subtitle: "Combat Maneuver",
        sv: c.searchVolume,
      })),
      {
        slug: featOverview.slug,
        name: featOverview.name,
        subtitle: "Overview of all feats",
        sv: featOverview.searchVolume,
      },
    ];
    items = allFeats
      .sort((a, b) => b.sv - a.sv)
      .map((f) => ({ slug: f.slug, name: f.name, subtitle: f.subtitle }));
  } else if (category === "creation") {
    items = creationPages
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .map((c) => ({
        slug: c.slug,
        name: c.name,
        subtitle: "Creation Tool",
      }));
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: meta.title },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          {meta.title}
        </h1>
        <p className="text-[var(--text-dim)]">
          {meta.description} &mdash; {items.length} guides
        </p>
      </div>

      <div className="py-6">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/characters/${category}/${item.slug}/`}
            className="flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-2 no-underline text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors"
          >
            <div>
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-xs text-[var(--text-dim)]">
                {item.subtitle}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
