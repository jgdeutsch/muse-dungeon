import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { FAQ, FAQItem } from "./FAQ";
import { TextWithEntityLinks } from "./TextWithEntityLinks";
import { RelatedAnswers, RelatedAnswer } from "./RelatedAnswers";
import { SpellSlotCalculator } from "./SpellSlotCalculator";

// Spellcasting classes that should show spell slot calculator
const SPELLCASTING_CLASSES = [
  "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard",
  "Artificer"
];

type SubclassPageData = {
  slug: string;
  name: string;
  parentClass: string;
  parentClassSlug: string;
  source: string;
  subclassLevel: number;
  description: string;
  focus: string;
  keyFeatures?: { name: string; level: string; description: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  faq?: FAQItem[];
};

export function SubclassPageComponent({ data, relatedAnswers }: { data: SubclassPageData; relatedAnswers?: RelatedAnswer[] }) {
  const stats = [
    { label: "Parent Class", value: data.parentClass },
    { label: "Subclass Level", value: `${data.subclassLevel}rd level` },
    { label: "Source", value: data.source },
    { label: "Focus", value: data.focus },
  ];

  const sections = [
    ...(data.keyFeatures && data.keyFeatures.length > 0
      ? [{ id: "features", label: "Key Features" }]
      : []),
    ...(data.commonMistakes && data.commonMistakes.length > 0
      ? [{ id: "mistakes", label: "Common Mistakes" }]
      : []),
    ...(data.dmTips && data.dmTips.length > 0
      ? [{ id: "tips", label: "DM Tips" }]
      : []),
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    ...(relatedAnswers && relatedAnswers.length > 0 ? [{ id: "related-answers", label: "Related Q&A" }] : []),
    { id: "sources", label: "Sources" },
  ];

  // Generate wikidot slug for source links
  const wikidotSlug = data.name
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
          { label: "Subclasses", href: "/characters/subclasses/" },
          { label: data.parentClass, href: `/characters/classes/${data.parentClassSlug}/` },
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

      <AtAGlance stats={stats} />

      {/* Spell Slot Calculator for spellcasting class subclasses */}
      {SPELLCASTING_CLASSES.includes(data.parentClass) && (
        <SpellSlotCalculator className={data.parentClass} />
      )}

      <JumpTo sections={sections} />

      {/* Key Features */}
      {data.keyFeatures && data.keyFeatures.length > 0 && (
        <section id="features" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            Key Features
          </h2>
          <table className="ref-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Level</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.keyFeatures.map((f, i) => (
                <tr key={i}>
                  <td className="font-medium text-[var(--text)]">{f.name}</td>
                  <td>{f.level}</td>
                  <td>
                    <TextWithEntityLinks text={f.description} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Common Mistakes */}
      {data.commonMistakes && data.commonMistakes.length > 0 && (
        <section id="mistakes" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            Common Mistakes
          </h2>
          {data.commonMistakes.map((m, i) => (
            <Warning key={i}>{m}</Warning>
          ))}
        </section>
      )}

      {/* DM Tips */}
      {data.dmTips && data.dmTips.length > 0 && (
        <section id="tips" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">DM Tips</h2>
          {data.dmTips.map((t, i) => (
            <Tip key={i}>{t}</Tip>
          ))}
        </section>
      )}

      {/* FAQ */}
      {data.faq && data.faq.length > 0 && <FAQ items={data.faq} />}

      {/* Related Answers */}
      {relatedAnswers && <RelatedAnswers answers={relatedAnswers} />}

      <Sources
        sources={[
          {
            name: `${data.parentClass}: ${data.name.replace(/ 5e$/, "")} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/${parentClassSlugClean}:${wikidotSlug}`,
            note: "Full SRD subclass text",
          },
          {
            name: `${data.parentClass} — D&D Beyond`,
            url: `https://www.dndbeyond.com/classes/${parentClassSlugClean}`,
            note: "Official class reference",
          },
        ]}
      />
    </>
  );
}
