import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { rulePages, ruleCategoryMeta } from "@/data/rules-index";

export function generateStaticParams() {
  return [
    { category: "core-mechanics" },
    { category: "game-terms" },
    { category: "tools-resources" },
    { category: "general" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = ruleCategoryMeta[category];
  if (meta) return { title: `${meta.title} — D&D 5e`, description: meta.description };
  return { title: "Rules" };
}

export default async function RuleCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = ruleCategoryMeta[category];

  const filtered = rulePages.filter((r) => r.category === category);
  if (filtered.length === 0 && !meta) return notFound();

  const title = meta?.title || "Rules";
  const description = meta?.description || "";

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Rules", href: "/rules/" },
          { label: title },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          {title}
        </h1>
        <p className="text-[var(--text-dim)]">
          {description} {filtered.length > 0 && <>&mdash; {filtered.length} guides</>}
        </p>
      </div>

      <div className="py-6">
        {filtered
          .sort((a, b) => b.searchVolume - a.searchVolume)
          .map((rule) => (
            <Link
              key={rule.slug}
              href={`/rules/${category}/${rule.slug}/`}
              className="flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-2 no-underline text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors"
            >
              <div>
                <div className="text-sm font-semibold">{rule.name}</div>
                <div className="text-xs text-[var(--text-dim)]">
                  {rule.description.slice(0, 80)}...
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
