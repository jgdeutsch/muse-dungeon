import { notFound } from "next/navigation";
import { SpellPage } from "@/components/SpellPage";
import { ClassSpellListPage } from "@/components/ClassSpellListPage";
import {
  getAllSpellSlugs,
  getSpellBySlug,
  classSpellLists,
} from "@/data/spells-index";

export function generateStaticParams() {
  const spellParams = getAllSpellSlugs().map((s) => ({
    category: s.category,
    slug: s.slug,
  }));

  const classListParams = classSpellLists.map((cl) => ({
    category: "class-spell-lists",
    slug: cl.slug,
  }));

  return [...spellParams, ...classListParams];
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}) {
  if (params.category === "class-spell-lists") {
    const list = classSpellLists.find((cl) => cl.slug === params.slug);
    if (list)
      return {
        title: `${list.name} — D&D 5e`,
        description: list.description,
      };
  }

  const spell = getSpellBySlug(params.slug);
  if (spell) {
    return {
      title: `${spell.name} — D&D 5e`,
      description: spell.description,
    };
  }
  return { title: "Spell" };
}

export default function SpellPageRoute({
  params,
}: {
  params: { category: string; slug: string };
}) {
  if (params.category === "class-spell-lists") {
    const list = classSpellLists.find((cl) => cl.slug === params.slug);
    if (!list) return notFound();
    return <ClassSpellListPage data={list} />;
  }

  const spell = getSpellBySlug(params.slug);
  if (!spell) return notFound();

  return <SpellPage spell={spell} />;
}
