import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { AddToGameButton } from "./AddToGameButton";
import { FAQ, FAQItem } from "./FAQ";

type ClassPageData = {
  slug: string;
  name: string;
  className: string;
  hitDie: string;
  primaryAbility: string;
  savingThrows: string;
  armorProf: string;
  weaponProf: string;
  spellcasting: string | null;
  description: string;
  keyFeatures: { name: string; level: string; description: string }[];
  subclasses: { name: string; source: string; focus: string }[];
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
};

export function ClassPageComponent({ data }: { data: ClassPageData }) {
  const stats = [
    { label: "Hit Die", value: data.hitDie },
    { label: "Primary Ability", value: data.primaryAbility },
    { label: "Saving Throws", value: data.savingThrows },
    { label: "Armor", value: data.armorProf },
    { label: "Weapons", value: data.weaponProf },
    ...(data.spellcasting
      ? [{ label: "Spellcasting", value: data.spellcasting }]
      : []),
  ];

  const sections = [
    { id: "features", label: "Key Features" },
    { id: "subclasses", label: "Subclasses" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "tips", label: "DM Tips" },
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const classSlug = data.className.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: "Classes & Subclasses", href: "/characters/classes/" },
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

      <AddToGameButton className={data.className} classSlug={data.slug} />

      <AtAGlance stats={stats} />
      <JumpTo sections={sections} />

      {/* Key Features */}
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
                <td>{f.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Subclasses */}
      <section id="subclasses" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Subclasses
        </h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Subclass</th>
              <th>Source</th>
              <th>Focus</th>
            </tr>
          </thead>
          <tbody>
            {data.subclasses.map((s, i) => (
              <tr key={i}>
                <td className="font-medium text-[var(--text)]">{s.name}</td>
                <td>{s.source}</td>
                <td>{s.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Common Mistakes */}
      <section id="mistakes" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Common Mistakes
        </h2>
        {data.commonMistakes.map((m, i) => (
          <Warning key={i}>{m}</Warning>
        ))}
      </section>

      {/* DM Tips */}
      <section id="tips" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">DM Tips</h2>
        {data.dmTips.map((t, i) => (
          <Tip key={i}>{t}</Tip>
        ))}
      </section>

      {/* FAQ */}
      {data.faq && data.faq.length > 0 && <FAQ items={data.faq} />}

      <Sources
        sources={[
          {
            name: `${data.className} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/class:${classSlug}`,
            note: "Full SRD class text",
          },
          {
            name: `${data.className} — D&D Beyond`,
            url: `https://www.dndbeyond.com/classes/${classSlug}`,
            note: "Official class reference",
          },
          {
            name: `${data.className} Guide — RPGBOT`,
            url: `https://rpgbot.net/dnd5/characters/classes/${classSlug}/`,
            note: "Class optimization guide",
          },
        ]}
      />
    </>
  );
}
