import { notFound, redirect } from "next/navigation";
import { ClassPageComponent } from "@/components/ClassPage";
import { RacePageComponent } from "@/components/RacePage";
import { SubclassPageComponent } from "@/components/SubclassPage";
import { FeaturePageComponent } from "@/components/FeaturePage";
import { GenericPageComponent } from "@/components/GenericPage";
import { CreationToolPageComponent } from "@/components/CreationToolPage";
import {
  getAllCharacterSlugs,
  getCharacterPageBySlug,
} from "@/data/characters-index";
import { getAnswersRelatedTo } from "@/data/answers";

export function generateStaticParams() {
  return getAllCharacterSlugs().map((s) => ({
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
  const result = getCharacterPageBySlug(slug);
  if (!result) return { title: "Character Options" };

  if (result.type === "redirect") return { title: "Redirecting..." };

  const data = result.data as { name: string; description?: string };
  return {
    title: `${data.name} — D&D 5e`,
    description: data.description || `Quick reference for ${data.name} in D&D 5e.`,
  };
}

export default async function CharacterSlugPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug, category } = await params;
  const result = getCharacterPageBySlug(slug);
  if (!result) return notFound();

  if (result.type === "redirect") {
    const r = result.data as { redirectTo: string; category: string };
    return redirect(`/characters/${r.category}/${r.redirectTo}/`);
  }

  // Get related answers for this page
  const pageUrl = `/characters/${category}/${slug}/`;
  const relatedAnswers = getAnswersRelatedTo(pageUrl).map((a) => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    description: a.description,
  }));

  if (result.type === "class") {
    return <ClassPageComponent data={result.data as Parameters<typeof ClassPageComponent>[0]["data"]} relatedAnswers={relatedAnswers} />;
  }

  if (result.type === "subclass") {
    return <SubclassPageComponent data={result.data as Parameters<typeof SubclassPageComponent>[0]["data"]} relatedAnswers={relatedAnswers} />;
  }

  if (result.type === "race") {
    return <RacePageComponent data={result.data as Parameters<typeof RacePageComponent>[0]["data"]} relatedAnswers={relatedAnswers} />;
  }

  if (result.type === "feature") {
    return <FeaturePageComponent data={result.data as Parameters<typeof FeaturePageComponent>[0]["data"]} relatedAnswers={relatedAnswers} />;
  }

  // Creation tool pages with interactive calculators
  if (result.type === "creation") {
    const creationData = result.data as {
      name: string;
      description: string;
      tool?: "pointBuy" | "statRoller" | "standardArray";
      sections: { id: string; title: string; content: string }[];
      commonMistakes?: string[];
      dmTips?: string[];
      faq?: { question: string; answer: string }[];
    };

    if (creationData.tool) {
      return (
        <CreationToolPageComponent
          data={creationData}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Characters", href: "/characters/" },
            { label: "Character Creation Tools", href: "/characters/creation/" },
            { label: creationData.name },
          ]}
          relatedAnswers={relatedAnswers}
        />
      );
    }
  }

  // All other types use GenericPageComponent
  const d = result.data as {
    name: string;
    description: string;
    sections?: { id: string; title: string; content: string }[];
    commonMistakes?: string[];
    dmTips?: string[];
    rules?: { step: string; detail: string }[];
    slug: string;
    category?: string;
  };

  // For combat maneuvers, convert rules to sections
  let sections = d.sections || [];
  if (result.type === "combat" && d.rules) {
    sections = [
      {
        id: "rules",
        title: "Step-by-Step Rules",
        content: d.rules
          .map(
            (r) =>
              `<p><strong>${r.step}</strong></p><p>${r.detail}</p>`
          )
          .join(""),
      },
    ];
  }

  // For feat pages, convert to sections
  if (result.type === "feat") {
    const feat = d as unknown as {
      name: string;
      description: string;
      prerequisite: string | null;
      benefit: string;
      mechanics: string;
      synergies: string[];
      commonMistakes: string[];
      dmTips: string[];
    };
    sections = [
      {
        id: "benefit",
        title: "Benefit",
        content: `<p>${feat.benefit}</p>`,
      },
      {
        id: "mechanics",
        title: "Mechanics",
        content: `<p>${feat.mechanics}</p>`,
      },
      {
        id: "synergies",
        title: "Synergies",
        content: `<ul>${feat.synergies.map((s) => `<li>${s}</li>`).join("")}</ul>`,
      },
    ];
  }

  // For class features, link back to the specific class page
  const classFeature = result.type === "classFeature" ? result.data as { className: string } : null;
  const classSlug = classFeature?.className?.toLowerCase();

  const categoryLabel =
    result.type === "creation"
      ? "Character Creation Tools"
      : result.type === "featOverview" || result.type === "feat" || result.type === "combat"
      ? "Combat Maneuvers & Feats"
      : result.type === "classFeature" && classFeature?.className
      ? classFeature.className
      : "Characters";

  const categoryHref =
    result.type === "creation"
      ? "/characters/creation/"
      : result.type === "featOverview" || result.type === "feat" || result.type === "combat"
      ? "/characters/feats/"
      : result.type === "classFeature" && classSlug
      ? `/characters/classes/${classSlug}-5e/`
      : "/characters/";

  return (
    <GenericPageComponent
      data={{
        name: d.name,
        description: d.description,
        sections,
        commonMistakes: d.commonMistakes,
        dmTips: d.dmTips,
      }}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Characters", href: "/characters/" },
        { label: categoryLabel, href: categoryHref },
        { label: d.name },
      ]}
      relatedAnswers={relatedAnswers}
    />
  );
}
