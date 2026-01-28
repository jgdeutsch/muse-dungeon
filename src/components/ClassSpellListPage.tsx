import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import type { SpellListPage } from "@/data/spells-class-lists";

export function ClassSpellListPage({ data }: { data: SpellListPage }) {
  const stats = [
    { label: "Casting Stat", value: data.castingStat },
    { label: "Spell List Type", value: data.spellListType },
    { label: "Prepare Formula", value: data.prepareFormula },
    { label: "Ritual Casting", value: data.ritualCasting ? "Yes" : "No" },
    { label: "Cantrips Known", value: data.cantripsKnown },
  ];

  const classSlug = data.className.toLowerCase();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spells", href: "/spells/" },
          { label: "Class Spell Lists", href: "/spells/class-spell-lists/" },
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

      {/* Unique Mechanic */}
      <div className="bg-[var(--accent-light)] border border-[var(--accent)] border-opacity-25 rounded-lg px-4 py-3 my-4 text-sm">
        <div className="font-bold text-[var(--accent)] text-xs uppercase tracking-wider mb-1">
          Unique Mechanic
        </div>
        <div className="text-[var(--text)]">{data.uniqueMechanic}</div>
      </div>

      {/* Key Spells */}
      <section className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Key Spells
        </h2>
        <p className="text-sm text-[var(--text-dim)] mb-4">
          The most impactful spells on the {data.className} list and why they matter.
        </p>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Spell</th>
              <th>Level</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {data.keySpells.map((s, i) => (
              <tr key={i}>
                <td className="font-medium text-[var(--text)]">{s.name}</td>
                <td>{s.level}</td>
                <td>{s.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Common Mistakes */}
      <section className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Common Mistakes
        </h2>
        {data.commonMistakes.map((m, i) => (
          <Warning key={i}>{m}</Warning>
        ))}
      </section>

      {/* DM Tips */}
      <section className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          DM Tips
        </h2>
        {data.dmTips.map((t, i) => (
          <Tip key={i}>{t}</Tip>
        ))}
      </section>

      <Sources
        sources={[
          {
            name: `${data.className} Spells — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/spells:${classSlug}`,
            note: "Full SRD spell list",
          },
          {
            name: `${data.className} — D&D Beyond`,
            url: `https://www.dndbeyond.com/classes/${classSlug}`,
            note: "Official class reference",
          },
          {
            name: `${data.className} Spell List — RPGBOT`,
            url: `https://rpgbot.net/dnd5/characters/classes/${classSlug}/spells/`,
            note: "Spell ratings and analysis",
          },
        ]}
      />
    </>
  );
}
