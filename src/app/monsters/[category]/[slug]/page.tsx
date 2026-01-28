import { notFound } from "next/navigation";
import { MonsterPageComponent } from "@/components/MonsterPage";
import { GenericPageComponent } from "@/components/GenericPage";
import { getAllMonsterSlugs, getMonsterPageBySlug } from "@/data/monsters-index";

export function generateStaticParams() {
  return getAllMonsterSlugs().map((s) => ({
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
  const result = getMonsterPageBySlug(slug);
  if (!result) return { title: "Monsters" };
  const data = result.data as { name: string; description?: string };
  return {
    title: `${data.name} — D&D 5e`,
    description: data.description || `Quick reference for ${data.name} in D&D 5e.`,
  };
}

export default async function MonsterSlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const result = getMonsterPageBySlug(slug);
  if (!result) return notFound();

  if (result.type === "monster") {
    return <MonsterPageComponent data={result.data as Parameters<typeof MonsterPageComponent>[0]["data"]} />;
  }

  if (result.type === "lore") {
    const d = result.data as {
      name: string;
      description: string;
      sections: { id: string; title: string; content: string }[];
      commonMistakes: string[];
      dmTips: string[];
    };
    return (
      <GenericPageComponent
        data={d}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Monsters", href: "/monsters/" },
          { label: "Lore & NPCs", href: "/monsters/lore/" },
          { label: d.name },
        ]}
      />
    );
  }

  if (result.type === "sourcebook") {
    const d = result.data as {
      name: string;
      description: string;
      publisher: string;
      releaseYear: number;
      keyContent: { name: string; description: string }[];
      bestFor: string[];
    };
    return (
      <GenericPageComponent
        data={{
          name: d.name,
          description: d.description,
          sections: [
            {
              id: "overview",
              title: "Overview",
              content: `<p>Published by <strong>${d.publisher}</strong> in ${d.releaseYear}.</p>`,
            },
            {
              id: "contents",
              title: "Key Contents",
              content: d.keyContent
                .map((k) => `<p><strong>${k.name}</strong> — ${k.description}</p>`)
                .join(""),
            },
            {
              id: "best-for",
              title: "Best For",
              content: `<ul>${d.bestFor.map((b) => `<li>${b}</li>`).join("")}</ul>`,
            },
          ],
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Monsters", href: "/monsters/" },
          { label: "Sourcebooks", href: "/monsters/sourcebooks/" },
          { label: d.name },
        ]}
      />
    );
  }

  return notFound();
}
