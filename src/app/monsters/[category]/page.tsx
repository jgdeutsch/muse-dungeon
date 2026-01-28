import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  monsterPages,
  lorePages,
  sourcebookPages,
  monsterCategoryMeta,
} from "@/data/monsters-index";

export function generateStaticParams() {
  return [
    { category: "creatures" },
    { category: "lore" },
    { category: "sourcebooks" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = monsterCategoryMeta[category];
  if (meta) return { title: `${meta.title} — D&D 5e`, description: meta.description };
  return { title: "Monsters" };
}

export default async function MonsterCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = monsterCategoryMeta[category];
  if (!meta) return notFound();

  let items: { slug: string; name: string; subtitle: string }[] = [];

  if (category === "creatures") {
    items = monsterPages
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .map((m) => ({
        slug: m.slug,
        name: m.name,
        subtitle: `CR ${m.challengeRating} · ${m.type}`,
      }));
  } else if (category === "lore") {
    items = lorePages
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .map((l) => ({
        slug: l.slug,
        name: l.name,
        subtitle: l.description.slice(0, 60) + "...",
      }));
  } else if (category === "sourcebooks") {
    items = sourcebookPages
      .sort((a, b) => b.searchVolume - a.searchVolume)
      .map((s) => ({
        slug: s.slug,
        name: s.name,
        subtitle: `${s.publisher} · ${s.releaseYear}`,
      }));
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Monsters", href: "/monsters/" },
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
            href={`/monsters/${category}/${item.slug}/`}
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
