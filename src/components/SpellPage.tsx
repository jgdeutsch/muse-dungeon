import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { SpellChecker } from "./SpellChecker";

type Spell = {
  slug: string;
  name: string;
  level: string;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  classes: string[];
  description: string;
  damage: string | null;
  savingThrow: string | null;
  higherLevels: string | null;
  commonMistakes: string[];
  dmTips: string[];
  category: string;
};

const categoryLabels: Record<string, string> = {
  cantrips: "Cantrips",
  offensive: "Offensive Spells",
  "utility-control": "Utility & Control",
  "support-healing": "Support & Healing",
  "reaction-defense": "Reaction & Defense",
};

export function SpellPage({ spell }: { spell: Spell }) {
  const catLabel = categoryLabels[spell.category] || spell.category;

  const sections = [
    { id: "mechanics", label: "Mechanics" },
    ...(spell.damage ? [{ id: "damage", label: "Damage" }] : []),
    ...(spell.higherLevels
      ? [{ id: "higher-levels", label: "At Higher Levels" }]
      : []),
    { id: "mistakes", label: "Common Mistakes" },
    { id: "tips", label: "DM Tips" },
    { id: "sources", label: "Sources" },
  ];

  const stats = [
    { label: "Level", value: spell.level },
    { label: "School", value: spell.school },
    { label: "Casting Time", value: spell.castingTime },
    { label: "Range", value: spell.range },
    { label: "Duration", value: spell.duration },
    {
      label: "Concentration",
      value: spell.concentration ? "Yes" : "No",
    },
  ];

  const slugName = spell.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spells", href: "/spells/" },
          { label: catLabel, href: `/spells/${spell.category}/` },
          { label: spell.name },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          {spell.name}
        </h1>
        <p className="text-[var(--text-dim)] text-[0.95rem]">
          {spell.description}
        </p>
      </div>

      <AtAGlance stats={stats} />
      <SpellChecker spell={spell} />
      <JumpTo sections={sections} />

      {/* Mechanics */}
      <section id="mechanics" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          How {spell.name} Works
        </h2>
        <table className="ref-table">
          <tbody>
            <tr>
              <th>Casting Time</th>
              <td>{spell.castingTime}</td>
            </tr>
            <tr>
              <th>Range</th>
              <td>{spell.range}</td>
            </tr>
            <tr>
              <th>Components</th>
              <td>{spell.components}</td>
            </tr>
            <tr>
              <th>Duration</th>
              <td>
                {spell.duration}
                {spell.concentration && (
                  <span className="ml-2 text-[var(--orange)] text-xs font-semibold">
                    CONCENTRATION
                  </span>
                )}
              </td>
            </tr>
            {spell.ritual && (
              <tr>
                <th>Ritual</th>
                <td className="text-[var(--green)]">
                  Yes — can be cast without a spell slot (adds 10 minutes)
                </td>
              </tr>
            )}
            {spell.savingThrow && (
              <tr>
                <th>Saving Throw</th>
                <td>{spell.savingThrow}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Available to:</h3>
          <div className="flex flex-wrap gap-1.5">
            {spell.classes.map((c) => (
              <span
                key={c}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-full px-3 py-1 text-xs text-[var(--text-dim)]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Damage */}
      {spell.damage && (
        <section id="damage" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            Damage
          </h2>
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4">
            <span className="text-lg font-bold text-[var(--accent)]">
              {spell.damage}
            </span>
            {spell.savingThrow && (
              <span className="text-[var(--text-dim)] text-sm ml-3">
                ({spell.savingThrow})
              </span>
            )}
          </div>
        </section>
      )}

      {/* Higher Levels */}
      {spell.higherLevels && (
        <section
          id="higher-levels"
          className="py-8 border-t border-[var(--border)]"
        >
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            At Higher Levels
          </h2>
          <p className="text-[var(--text-dim)] text-sm">{spell.higherLevels}</p>
        </section>
      )}

      {/* Common Mistakes */}
      <section id="mistakes" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Common Mistakes
        </h2>
        {spell.commonMistakes.map((m, i) => (
          <Warning key={i}>{m}</Warning>
        ))}
      </section>

      {/* DM Tips */}
      <section id="tips" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">DM Tips</h2>
        {spell.dmTips.map((t, i) => (
          <Tip key={i}>{t}</Tip>
        ))}
      </section>

      {/* Sources */}
      <Sources
        sources={[
          {
            name: `${spell.name} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/spell:${slugName}`,
            note: "Full SRD text",
          },
          {
            name: `${spell.name} — Roll20 Compendium`,
            url: `https://roll20.net/compendium/dnd5e/${encodeURIComponent(spell.name)}`,
            note: "Structured reference",
          },
          {
            name: `${spell.name} — D&D Beyond`,
            url: `https://www.dndbeyond.com/spells/${slugName}`,
            note: "Official digital reference",
          },
        ]}
      />
    </>
  );
}
