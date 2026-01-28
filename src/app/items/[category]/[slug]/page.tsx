import { notFound } from "next/navigation";
import { EquipmentPageComponent, MagicItemPageComponent } from "@/components/ItemPage";
import { GenericPageComponent } from "@/components/GenericPage";
import { getAllItemSlugs, getItemPageBySlug } from "@/data/items-index";

export function generateStaticParams() {
  return getAllItemSlugs().map((s) => ({
    category: s.category,
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const result = getItemPageBySlug(slug);
  if (!result) return { title: "Items" };
  const data = result.data as { name: string; description?: string };
  return {
    title: `${data.name} — D&D 5e`,
    description: data.description || `Quick reference for ${data.name} in D&D 5e.`,
  };
}

export default async function ItemSlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const result = getItemPageBySlug(slug);
  if (!result) return notFound();

  if (result.type === "equipment") {
    return <EquipmentPageComponent data={result.data as Parameters<typeof EquipmentPageComponent>[0]["data"]} />;
  }

  if (result.type === "magicItem") {
    return <MagicItemPageComponent data={result.data as Parameters<typeof MagicItemPageComponent>[0]["data"]} />;
  }

  // Overview pages
  const d = result.data as {
    name: string;
    description: string;
    sections: { id: string; title: string; content: string }[];
  };

  const catLabel = result.type === "equipmentOverview" ? "Equipment & Weapons" : "Magic Items";
  const catKey = result.type === "equipmentOverview" ? "equipment" : "magic-items";

  return (
    <GenericPageComponent
      data={{ name: d.name, description: d.description, sections: d.sections }}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Items", href: "/items/" },
        { label: catLabel, href: `/items/${catKey}/` },
        { label: d.name },
      ]}
    />
  );
}
