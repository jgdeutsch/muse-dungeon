import Link from "next/link";
import { Breadcrumb } from "./Breadcrumb";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { AssignToCharacter } from "./AssignToCharacter";
import { FAQ, FAQItem } from "./FAQ";
import { EntityContent, EntityContentContainer } from "./EntityContent";

type GenericPageData = {
  name: string;
  description: string;
  sections: { id: string; title: string; content: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  faq?: FAQItem[];
};

type BreadcrumbItem = { label: string; href?: string };

type RelatedAnswer = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

export function GenericPageComponent({
  data,
  breadcrumbs,
  sources,
  assignField,
  assignSlug,
  relatedAnswers,
}: {
  data: GenericPageData;
  breadcrumbs: BreadcrumbItem[];
  sources?: { name: string; url: string; note?: string }[];
  assignField?: "conditions" | "activeEffects" | "spellsKnown" | "items";
  assignSlug?: string;
  relatedAnswers?: RelatedAnswer[];
}) {
  const sections = [
    ...data.sections.map((s) => ({ id: s.id, label: s.title })),
    ...(data.commonMistakes?.length ? [{ id: "mistakes", label: "Common Mistakes" }] : []),
    ...(data.dmTips?.length ? [{ id: "tips", label: "DM Tips" }] : []),
    ...(data.faq?.length ? [{ id: "faq", label: "FAQ" }] : []),
    ...(relatedAnswers?.length ? [{ id: "related-answers", label: "Related Q&A" }] : []),
    ...(sources?.length ? [{ id: "sources", label: "Sources" }] : []),
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          {data.name}
        </h1>
        <p className="text-[var(--text-dim)] text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      {assignField && (
        <AssignToCharacter entryName={data.name} entrySlug={assignSlug} field={assignField} />
      )}

      <JumpTo sections={sections} />

      <EntityContentContainer>
        {data.sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="py-8 border-t border-[var(--border)]"
          >
            <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
              {s.title}
            </h2>
            <EntityContent
              html={s.content}
              className="text-sm text-[var(--text-dim)] leading-relaxed [&_strong]:text-[var(--text)] [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1 [&_table]:ref-table [&_th]:text-left [&_th]:p-2 [&_td]:p-2"
            />
          </section>
        ))}
      </EntityContentContainer>

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

      {data.dmTips && data.dmTips.length > 0 && (
        <section id="tips" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            DM Tips
          </h2>
          {data.dmTips.map((t, i) => (
            <Tip key={i}>{t}</Tip>
          ))}
        </section>
      )}

      {data.faq && data.faq.length > 0 && <FAQ items={data.faq} />}

      {relatedAnswers && relatedAnswers.length > 0 && (
        <section id="related-answers" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            Related Questions & Answers
          </h2>
          <p className="text-sm text-[var(--text-dim)] mb-4">
            Community questions related to this topic:
          </p>
          <div className="space-y-3">
            {relatedAnswers.map((answer) => (
              <Link
                key={answer.slug}
                href={`/answers/${answer.category}/${answer.slug}/`}
                className="block p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <h3 className="font-semibold text-sm mb-1">{answer.title}</h3>
                <p className="text-xs text-[var(--text-dim)] line-clamp-2">
                  {answer.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {sources && sources.length > 0 && <Sources sources={sources} />}
    </>
  );
}
