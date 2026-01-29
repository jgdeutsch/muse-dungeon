import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { AddRaceToGame } from "./AddRaceToGame";
import { AssignToCharacter } from "./AssignToCharacter";
import { FAQ, FAQItem } from "./FAQ";

type RacePageData = {
  slug: string;
  name: string;
  raceName: string;
  abilityScores: string;
  size: string;
  speed: string;
  languages: string;
  source: string;
  description: string;
  traits: { name: string; description: string }[];
  subraces: { name: string; bonus: string }[] | null;
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
};

export function RacePageComponent({ data }: { data: RacePageData }) {
  const stats = [
    { label: "Ability Scores", value: data.abilityScores },
    { label: "Size", value: data.size },
    { label: "Speed", value: data.speed },
    { label: "Languages", value: data.languages },
    { label: "Source", value: data.source },
  ];

  const sections = [
    { id: "traits", label: "Racial Traits" },
    ...(data.subraces ? [{ id: "subraces", label: "Subraces" }] : []),
    { id: "mistakes", label: "Common Mistakes" },
    { id: "tips", label: "DM Tips" },
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const raceSlug = data.raceName.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Characters", href: "/characters/" },
          { label: "Races & Species", href: "/characters/races/" },
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
      <AddRaceToGame raceName={data.raceName} raceSlug={data.slug} />
      <AssignToCharacter entryName={data.raceName} entrySlug={data.slug} field="conditions" />
      <JumpTo sections={sections} />

      {/* Racial Traits */}
      <section id="traits" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Racial Traits
        </h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Trait</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.traits.map((t, i) => (
              <tr key={i}>
                <td className="font-medium text-[var(--text)]">{t.name}</td>
                <td>{t.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Subraces */}
      {data.subraces && (
        <section id="subraces" className="py-8 border-t border-[var(--border)]">
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
            Subraces
          </h2>
          <table className="ref-table">
            <thead>
              <tr>
                <th>Subrace</th>
                <th>Bonus</th>
              </tr>
            </thead>
            <tbody>
              {data.subraces.map((s, i) => (
                <tr key={i}>
                  <td className="font-medium text-[var(--text)]">{s.name}</td>
                  <td>{s.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

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
            name: `${data.raceName} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/lineage:${raceSlug}`,
            note: "Full SRD race text",
          },
          {
            name: `${data.raceName} — D&D Beyond`,
            url: `https://www.dndbeyond.com/races/${raceSlug}`,
            note: "Official race reference",
          },
          {
            name: `${data.raceName} Handbook — RPGBOT`,
            url: `https://rpgbot.net/dnd5/characters/races/${raceSlug}/`,
            note: "Race optimization guide",
          },
        ]}
      />
    </>
  );
}
