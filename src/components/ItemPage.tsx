import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { AssignToCharacter } from "./AssignToCharacter";
import { FAQ, FAQItem } from "./FAQ";

type EquipmentData = {
  slug: string;
  name: string;
  itemType: string;
  cost: string;
  weight: string;
  description: string;
  mechanics: string;
  properties: string[];
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
};

type MagicItemData = {
  slug: string;
  name: string;
  rarity: string;
  attunement: boolean;
  itemType: string;
  description: string;
  mechanics: string;
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
};

export function EquipmentPageComponent({ data }: { data: EquipmentData }) {
  const stats = [
    { label: "Type", value: data.itemType },
    { label: "Cost", value: data.cost },
    { label: "Weight", value: data.weight },
  ];

  const sections = [
    { id: "mechanics", label: "Mechanics" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "tips", label: "DM Tips" },
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const itemSlug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Items", href: "/items/" },
          { label: "Equipment & Weapons", href: "/items/equipment/" },
          { label: data.name },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          {data.name}
        </h1>
        <p className="text-[var(--text-dim)] text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      <AtAGlance stats={stats} />
      <AssignToCharacter entryName={data.name} entrySlug={data.slug} field="items" />

      {data.properties.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {data.properties.map((p) => (
            <span
              key={p}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-3 py-1 text-xs text-[var(--text-dim)]"
            >
              {p}
            </span>
          ))}
        </div>
      )}

      <JumpTo sections={sections} />

      <section id="mechanics" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Mechanics
        </h2>
        <p className="text-sm text-[var(--text-dim)] leading-relaxed">
          {data.mechanics}
        </p>
      </section>

      <section id="mistakes" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Common Mistakes
        </h2>
        {data.commonMistakes.map((m, i) => (
          <Warning key={i}>{m}</Warning>
        ))}
      </section>

      <section id="tips" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">DM Tips</h2>
        {data.dmTips.map((t, i) => (
          <Tip key={i}>{t}</Tip>
        ))}
      </section>

      {data.faq && data.faq.length > 0 && <FAQ items={data.faq} />}

      <Sources
        sources={[
          {
            name: `${data.name} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/equipment:${itemSlug}`,
            note: "SRD reference",
          },
          {
            name: `${data.name} — D&D Beyond`,
            url: `https://www.dndbeyond.com/equipment/${itemSlug}`,
            note: "Official reference",
          },
        ]}
      />
    </>
  );
}

export function MagicItemPageComponent({ data }: { data: MagicItemData }) {
  const stats = [
    { label: "Type", value: data.itemType },
    { label: "Rarity", value: data.rarity },
    { label: "Attunement", value: data.attunement ? "Required" : "Not required" },
  ];

  const sections = [
    { id: "mechanics", label: "Mechanics" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "tips", label: "DM Tips" },
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const itemSlug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Items", href: "/items/" },
          { label: "Magic Items", href: "/items/magic-items/" },
          { label: data.name },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          {data.name}
        </h1>
        <p className="text-[var(--text-dim)] text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      <AtAGlance stats={stats} />
      <AssignToCharacter entryName={data.name} entrySlug={data.slug} field="items" />
      <JumpTo sections={sections} />

      <section id="mechanics" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          How It Works
        </h2>
        <p className="text-sm text-[var(--text-dim)] leading-relaxed">
          {data.mechanics}
        </p>
      </section>

      <section id="mistakes" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Common Mistakes
        </h2>
        {data.commonMistakes.map((m, i) => (
          <Warning key={i}>{m}</Warning>
        ))}
      </section>

      <section id="tips" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">DM Tips</h2>
        {data.dmTips.map((t, i) => (
          <Tip key={i}>{t}</Tip>
        ))}
      </section>

      {data.faq && data.faq.length > 0 && <FAQ items={data.faq} />}

      <Sources
        sources={[
          {
            name: `${data.name} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/wondrous-items:${itemSlug}`,
            note: "SRD reference",
          },
          {
            name: `${data.name} — D&D Beyond`,
            url: `https://www.dndbeyond.com/magic-items/${itemSlug}`,
            note: "Official reference",
          },
        ]}
      />
    </>
  );
}
