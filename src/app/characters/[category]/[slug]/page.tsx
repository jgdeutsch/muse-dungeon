import { notFound, redirect } from "next/navigation";
import { ClassPageComponent } from "@/components/ClassPage";
import { RacePageComponent } from "@/components/RacePage";
import { SubclassPageComponent } from "@/components/SubclassPage";
import { FeaturePageComponent } from "@/components/FeaturePage";
import { GenericPageComponent } from "@/components/GenericPage";
import { CreationToolPageComponent } from "@/components/CreationToolPage";
import { FeatPageComponent, CombatManeuverPageComponent } from "@/components/FeatPage";
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

  // Feat pages with FeatChecker tool
  if (result.type === "feat") {
    return <FeatPageComponent data={result.data as Parameters<typeof FeatPageComponent>[0]["data"]} relatedAnswers={relatedAnswers} />;
  }

  // Combat maneuver pages with FeatChecker tool
  if (result.type === "combat") {
    return <CombatManeuverPageComponent data={result.data as Parameters<typeof CombatManeuverPageComponent>[0]["data"]} relatedAnswers={relatedAnswers} />;
  }

  // Class feature pages should use FeaturePageComponent
  if (result.type === "classFeature") {
    const cfData = result.data as {
      slug: string;
      name: string;
      description: string;
      className: string;
      featureLevel: string;
      sections: { id: string; title: string; content: string }[];
      commonMistakes?: string[];
      dmTips?: string[];
    };
    const classSlugFromName = cfData.className.toLowerCase().replace(/\s+/g, "-") + "-5e";
    return (
      <FeaturePageComponent
        data={{
          slug: cfData.slug,
          name: cfData.name,
          parentClass: cfData.className,
          parentClassSlug: classSlugFromName,
          level: cfData.featureLevel,
          description: cfData.description,
          mechanics: cfData.sections.map(s => s.content).join(" "),
        }}
        relatedAnswers={relatedAnswers}
      />
    );
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

  // All other types use GenericPageComponent (creation, featOverview, raceOverview, classOverview)
  const d = result.data as {
    name: string;
    description: string;
    sections?: { id: string; title: string; content: string }[];
    commonMistakes?: string[];
    dmTips?: string[];
    slug: string;
  };

  const sections = d.sections || [];

  const categoryLabel =
    result.type === "creation"
      ? "Character Creation Tools"
      : result.type === "featOverview"
      ? "Combat Maneuvers & Feats"
      : "Characters";

  const categoryHref =
    result.type === "creation"
      ? "/characters/creation/"
      : result.type === "featOverview"
      ? "/characters/feats/"
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
