import { notFound } from "next/navigation";
import { GenericPageComponent } from "@/components/GenericPage";
import { getAllAnswerSlugs, getAnswerBySlug } from "@/data/answers";

export function generateStaticParams() {
  return getAllAnswerSlugs().map((s) => ({
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
  const answer = getAnswerBySlug(slug);
  if (!answer) return { title: "D&D 5e Answers" };
  return {
    title: `${answer.title} — D&D 5e`,
    description: answer.description,
  };
}

export default async function AnswerSlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const answer = getAnswerBySlug(slug);
  if (!answer) return notFound();

  const catLabels: Record<string, string> = {
    rules: "Rules Questions",
    "character-building": "Character Building",
    mechanics: "Game Mechanics",
    "dm-advice": "DM Advice",
  };

  // Transform relatedPages into a section for display
  const relatedResourcesSection = answer.relatedPages.length > 0 ? {
    id: "related-resources",
    title: "Related MuseDungeon Resources",
    content: answer.relatedPages
      .map((p) => `- **[${p.name}](https://musedungeon.com${p.url})** (${p.type})`)
      .join("\n"),
  } : null;

  const allSections = relatedResourcesSection
    ? [...answer.sections, relatedResourcesSection]
    : answer.sections;

  return (
    <GenericPageComponent
      data={{
        name: answer.title,
        description: answer.description,
        sections: allSections,
        commonMistakes: [],
        dmTips: [],
        faq: [
          {
            question: "What was the original question?",
            answer: answer.question,
          },
        ],
      }}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Answers", href: "/answers/" },
        {
          label: catLabels[answer.category] || answer.category,
          href: `/answers/${answer.category}/`,
        },
        { label: answer.title },
      ]}
    />
  );
}
