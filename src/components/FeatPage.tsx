import { Breadcrumb } from "./Breadcrumb";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { FAQ, FAQItem } from "./FAQ";
import { FeatChecker } from "./FeatChecker";
import { TextWithEntityLinks } from "./TextWithEntityLinks";
import { RelatedAnswers, RelatedAnswer } from "./RelatedAnswers";

type FeatPageData = {
  slug: string;
  name: string;
  description: string;
  prerequisite: string | null;
  benefit: string;
  mechanics: string;
  synergies: string[];
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
};

type CombatManeuverPageData = {
  slug: string;
  name: string;
  description: string;
  rules: { step: string; detail: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  faq?: FAQItem[];
};

export function FeatPageComponent({
  data,
  relatedAnswers,
}: {
  data: FeatPageData;
  relatedAnswers?: RelatedAnswer[];
}) {
  const sections = [
    { id: "benefit", label: "Benefit" },
    { id: "mechanics", label: "Mechanics" },
    ...(data.synergies?.length ? [{ id: "synergies", label: "Synergies" }] : []),
    ...(data.commonMistakes?.length ? [{ id: "mistakes", label: "Common Mistakes" }] : []),
    ...(data.dmTips?.length ? [{ id: "tips", label: "DM Tips" }] : []),
    ...(data.faq?.length ? [{ id: "faq", label: "FAQ" }] : []),
    ...(relatedAnswers?.length ? [{ id: "related-answers", label: "Related Q&A" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const wikidotSlug = data.name
    .toLowerCase()
    .replace(/ 5e$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+$/, "");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: "Combat Maneuvers & Feats", href: "/characters/feats/" },
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

      {/* Prerequisite Badge */}
      {data.prerequisite && (
        <div className="mb-4 p-3 bg-[var(--surface)] rounded border border-[var(--border)]">
          <span className="text-[var(--text-dim)]">Prerequisite: </span>
          <span className="font-medium">{data.prerequisite}</span>
        </div>
      )}

      {/* DM Tool: Feat Checker */}
      <FeatChecker feat={data} />

      <JumpTo sections={sections} />

      {/* Benefit */}
      <section id="benefit" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">Benefit</h2>
        <TextWithEntityLinks
          text={data.benefit}
          as="p"
          className="text-sm text-[var(--text-dim)] leading-relaxed"
        />
      </section>

      {/* Mechanics */}
      <section id="mechanics" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">Mechanics</h2>
        <TextWithEntityLinks
          text={data.mechanics}
          as="p"
          className="text-sm text-[var(--text-dim)] leading-relaxed"
        />
      </section>

      {/* Synergies */}
      {data.synergies && data.synergies.length > 0 && (
        <section id="synergies" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">Synergies</h2>
          <ul className="space-y-2">
            {data.synergies.map((s, i) => (
              <li key={i} className="text-sm text-[var(--text-dim)] flex items-start gap-2">
                <span className="text-[var(--accent)]">*</span>
                <TextWithEntityLinks text={s} />
              </li>
            ))}
          </ul>
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
            name: `${data.name.replace(/ 5e$/, "")} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/feat:${wikidotSlug}`,
            note: "Full SRD feat text",
          },
          {
            name: "Feats — D&D Beyond",
            url: "https://www.dndbeyond.com/feats",
            note: "Official feat list",
          },
        ]}
      />
    </>
  );
}

export function CombatManeuverPageComponent({
  data,
  relatedAnswers,
}: {
  data: CombatManeuverPageData;
  relatedAnswers?: RelatedAnswer[];
}) {
  const sections = [
    { id: "rules", label: "Step-by-Step Rules" },
    ...(data.commonMistakes?.length ? [{ id: "mistakes", label: "Common Mistakes" }] : []),
    ...(data.dmTips?.length ? [{ id: "tips", label: "DM Tips" }] : []),
    ...(data.faq?.length ? [{ id: "faq", label: "FAQ" }] : []),
    ...(relatedAnswers?.length ? [{ id: "related-answers", label: "Related Q&A" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const wikidotSlug = data.name
    .toLowerCase()
    .replace(/ 5e$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+$/, "");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: "Combat Maneuvers & Feats", href: "/characters/feats/" },
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

      {/* DM Tool: Combat Maneuver Checker */}
      <FeatChecker feat={data} />

      <JumpTo sections={sections} />

      {/* Step-by-Step Rules */}
      <section id="rules" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Step-by-Step Rules
        </h2>
        <div className="space-y-4">
          {data.rules.map((rule, i) => (
            <div
              key={i}
              className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-[var(--text)]">{rule.step}</h3>
              </div>
              <TextWithEntityLinks
                text={rule.detail}
                as="p"
                className="text-sm text-[var(--text-dim)] leading-relaxed ml-10"
              />
            </div>
          ))}
        </div>
      </section>

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
            name: `${data.name.replace(/ 5e$/, "")} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/${wikidotSlug}`,
            note: "SRD reference",
          },
          {
            name: "Combat — D&D Beyond",
            url: "https://www.dndbeyond.com/sources/basic-rules/combat",
            note: "Official combat rules",
          },
        ]}
      />
    </>
  );
}
