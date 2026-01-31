import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Sources } from "./Sources";
import { FAQ, FAQItem } from "./FAQ";
import { TextWithEntityLinks } from "./TextWithEntityLinks";
import { FeatureChecker } from "./FeatureChecker";
import { RelatedAnswers, RelatedAnswer } from "./RelatedAnswers";

type FeaturePageData = {
  slug: string;
  name: string;
  parentClass: string;
  parentClassSlug: string | null;
  level: string;
  description: string;
  mechanics: string;
  faq?: FAQItem[];
};

export function FeaturePageComponent({ data, relatedAnswers }: { data: FeaturePageData; relatedAnswers?: RelatedAnswer[] }) {
  const stats = [
    { label: "Class", value: data.parentClass },
    { label: "Level", value: data.level },
  ];

  const sections = [
    { id: "mechanics", label: "How It Works" },
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    ...(relatedAnswers && relatedAnswers.length > 0 ? [{ id: "related-answers", label: "Related Q&A" }] : []),
    { id: "sources", label: "Sources" },
  ];

  // Generate search-friendly slug for external links
  const featureNameClean = data.name
    .toLowerCase()
    .replace(/ 5e$/, "")
    .replace(/\s+/g, "-");
  const parentClassSlugClean = data.parentClass.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: "Features", href: "/characters/features/" },
          ...(data.parentClassSlug
            ? [{ label: data.parentClass, href: `/characters/classes/${data.parentClassSlug}/` }]
            : []),
          { label: data.name },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          {data.name}
        </h1>
        <TextWithEntityLinks
          text={data.description}
          as="p"
          className="text-[var(--text-dim)] text-base leading-relaxed"
        />
      </div>

      {/* Parent Class Link */}
      {data.parentClassSlug && (
        <div className="mb-4 p-3 bg-[var(--surface)] rounded border border-[var(--border)]">
          <span className="text-[var(--text-dim)]">Part of the </span>
          <Link
            href={`/characters/classes/${data.parentClassSlug}/`}
            className="underline font-medium"
          >
            {data.parentClass}
          </Link>
          <span className="text-[var(--text-dim)]"> class</span>
        </div>
      )}

      {data.parentClass === "Multiple" && (
        <div className="mb-4 p-3 bg-[var(--surface)] rounded border border-[var(--border)]">
          <span className="text-[var(--text-dim)]">
            This feature is shared by multiple classes
          </span>
        </div>
      )}

      <AtAGlance stats={stats} />

      {/* DM Check Button */}
      <FeatureChecker
        feature={{
          name: data.name,
          parentClass: data.parentClass,
          level: data.level,
          mechanics: data.mechanics,
        }}
      />

      <JumpTo sections={sections} />

      {/* Mechanics */}
      <section id="mechanics" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          How It Works
        </h2>
        <div className="prose prose-invert max-w-none">
          <TextWithEntityLinks
            text={data.mechanics}
            as="p"
            className="text-[var(--text)] leading-relaxed"
          />
        </div>
      </section>

      {/* FAQ */}
      {data.faq && data.faq.length > 0 && <FAQ items={data.faq} />}

      {/* Related Answers */}
      {relatedAnswers && <RelatedAnswers answers={relatedAnswers} />}

      <Sources
        sources={[
          ...(data.parentClassSlug
            ? [
                {
                  name: `${data.parentClass} — D&D 5e Wikidot`,
                  url: `https://dnd5e.wikidot.com/class:${parentClassSlugClean}`,
                  note: "Full class features reference",
                },
              ]
            : []),
          {
            name: `${data.name.replace(/ 5e$/, "")} — Google Search`,
            url: `https://www.google.com/search?q=${encodeURIComponent(data.name + " dnd")}`,
            note: "Find more resources",
          },
          {
            name: "D&D Beyond Classes",
            url: "https://www.dndbeyond.com/classes",
            note: "Official class reference",
          },
        ]}
      />
    </>
  );
}
