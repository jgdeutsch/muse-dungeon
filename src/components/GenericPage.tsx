import { Breadcrumb } from "./Breadcrumb";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { AssignToCharacter } from "./AssignToCharacter";

type GenericPageData = {
  name: string;
  description: string;
  sections: { id: string; title: string; content: string }[];
  commonMistakes?: string[];
  dmTips?: string[];
};

type BreadcrumbItem = { label: string; href?: string };

export function GenericPageComponent({
  data,
  breadcrumbs,
  sources,
  assignField,
  assignSlug,
}: {
  data: GenericPageData;
  breadcrumbs: BreadcrumbItem[];
  sources?: { name: string; url: string; note?: string }[];
  assignField?: "conditions" | "activeEffects" | "spellsKnown" | "items";
  assignSlug?: string;
}) {
  const sections = [
    ...data.sections.map((s) => ({ id: s.id, label: s.title })),
    ...(data.commonMistakes?.length ? [{ id: "mistakes", label: "Common Mistakes" }] : []),
    ...(data.dmTips?.length ? [{ id: "tips", label: "DM Tips" }] : []),
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

      {data.sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="py-8 border-t border-[var(--border)]"
        >
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            {s.title}
          </h2>
          <div
            className="text-sm text-[var(--text-dim)] leading-relaxed [&_strong]:text-[var(--text)] [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1 [&_table]:ref-table [&_th]:text-left [&_th]:p-2 [&_td]:p-2"
            dangerouslySetInnerHTML={{ __html: s.content }}
          />
        </section>
      ))}

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

      {sources && sources.length > 0 && <Sources sources={sources} />}
    </>
  );
}
