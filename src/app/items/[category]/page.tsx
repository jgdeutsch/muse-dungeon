import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  equipmentPages,
  equipmentOverviews,
  magicItemPages,
  magicItemOverview,
  itemCategoryMeta,
} from "@/data/items-index";

export function generateStaticParams() {
  return [{ category: "equipment" }, { category: "magic-items" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = itemCategoryMeta[category];
  if (meta) return { title: `${meta.title} — D&D 5e`, description: meta.description };
  return { title: "Items" };
}

export default async function ItemCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = itemCategoryMeta[category];
  if (!meta) return notFound();

  let items: { slug: string; name: string; subtitle: string }[] = [];

  if (category === "equipment") {
    items = [
      ...equipmentOverviews.map((e) => ({
        slug: e.slug,
        name: e.name,
        subtitle: "Overview",
        sv: e.searchVolume,
      })),
      ...equipmentPages.map((e) => ({
        slug: e.slug,
        name: e.name,
        subtitle: `${e.itemType} · ${e.cost}`,
        sv: e.searchVolume,
      })),
    ]
      .sort((a, b) => b.sv - a.sv)
      .map((i) => ({ slug: i.slug, name: i.name, subtitle: i.subtitle }));
  } else {
    items = [
      {
        slug: magicItemOverview.slug,
        name: magicItemOverview.name,
        subtitle: "Overview",
        sv: magicItemOverview.searchVolume,
      },
      ...magicItemPages.map((m) => ({
        slug: m.slug,
        name: m.name,
        subtitle: `${m.rarity} · ${m.attunement ? "Attunement" : "No attunement"}`,
        sv: m.searchVolume,
      })),
    ]
      .sort((a, b) => b.sv - a.sv)
      .map((i) => ({ slug: i.slug, name: i.name, subtitle: i.subtitle }));
  }

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Items", href: "/items/" },
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
            href={`/items/${category}/${item.slug}/`}
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
