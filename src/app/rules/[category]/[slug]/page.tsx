import { notFound } from "next/navigation";
import { GenericPageComponent } from "@/components/GenericPage";
import { getAllRuleSlugs, getRulePageBySlug } from "@/data/rules-index";
import { getAnswersRelatedTo } from "@/data/answers";

export function generateStaticParams() {
  return getAllRuleSlugs().map((s) => ({
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
  const rule = getRulePageBySlug(slug);
  if (!rule) return { title: "Rules" };
  return {
    title: `${rule.name} — D&D 5e`,
    description: rule.description,
  };
}

export default async function RuleSlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const rule = getRulePageBySlug(slug);
  if (!rule) return notFound();

  const catLabels: Record<string, string> = {
    "core-mechanics": "Core Mechanics",
    "game-terms": "Game Terms & Backgrounds",
    "tools-resources": "External Tools & Resources",
    general: "General",
  };

  // Find related answers that link to this rule page
  const pageUrl = `/rules/${category}/${slug}/`;
  const relatedAnswers = getAnswersRelatedTo(pageUrl).map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    description: a.description,
  }));

  return (
    <GenericPageComponent
      data={{
        name: rule.name,
        description: rule.description,
        sections: rule.sections,
        commonMistakes: rule.commonMistakes,
        dmTips: rule.dmTips,
        faq: rule.faq,
      }}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Rules", href: "/rules/" },
        {
          label: catLabels[rule.category] || rule.category,
          href: `/rules/${rule.category}/`,
        },
        { label: rule.name },
      ]}
      assignField="conditions"
      assignSlug={rule.slug}
      relatedAnswers={relatedAnswers}
    />
  );
}
