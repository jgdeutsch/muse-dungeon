"use client";

import { Breadcrumb } from "./Breadcrumb";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { FAQ, FAQItem } from "./FAQ";
import { EntityContent, EntityContentContainer } from "./EntityContent";
import { PointBuyCalculator } from "./PointBuyCalculator";
import { StatRoller } from "./StatRoller";
import { StandardArrayAssigner } from "./StandardArrayAssigner";
import { RelatedAnswers, RelatedAnswer } from "./RelatedAnswers";

type ToolType = "pointBuy" | "statRoller" | "standardArray" | null;

type CreationToolPageData = {
  name: string;
  description: string;
  tool?: ToolType;
  sections: { id: string; title: string; content: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
  faq?: FAQItem[];
};

type BreadcrumbItem = { label: string; href?: string };

export function CreationToolPageComponent({
  data,
  breadcrumbs,
  sources,
  relatedAnswers,
}: {
  data: CreationToolPageData;
  breadcrumbs: BreadcrumbItem[];
  sources?: { name: string; url: string; note?: string }[];
  relatedAnswers?: RelatedAnswer[];
}) {
  const sections = [
    ...(data.tool ? [{ id: "tool", label: "Calculator" }] : []),
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

      <JumpTo sections={sections} />

      {/* Interactive Tool */}
      {data.tool && (
        <section id="tool" className="py-4">
          {data.tool === "pointBuy" && <PointBuyCalculator />}
          {data.tool === "statRoller" && <StatRoller />}
          {data.tool === "standardArray" && <StandardArrayAssigner />}
        </section>
      )}

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

      {relatedAnswers && <RelatedAnswers answers={relatedAnswers} />}

      {sources && sources.length > 0 && <Sources sources={sources} />}
    </>
  );
}
