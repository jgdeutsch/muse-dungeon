import { Breadcrumb } from "./Breadcrumb";
import { AtAGlance } from "./AtAGlance";
import { JumpTo } from "./JumpTo";
import { Warning, Tip } from "./Warning";
import { Sources } from "./Sources";
import { AssignToCharacter } from "./AssignToCharacter";
import { AddMonsterToGame } from "./AddMonsterToGame";
import { FAQ, FAQItem } from "./FAQ";
import { TextWithEntityLinks } from "./TextWithEntityLinks";

type MonsterPageData = {
  slug: string;
  name: string;
  monsterName: string;
  challengeRating: string;
  type: string;
  size: string;
  alignment: string;
  armorClass: string;
  hitPoints: string;
  speed: string;
  abilities: { str: number; dex: number; con: number; int: number; wis: number; cha: number };
  keyAbilities: { name: string; description: string }[];
  tactics: string;
  encounterTips: string;
  loot: string;
  commonMistakes: string[];
  dmTips: string[];
  faq?: FAQItem[];
};

function mod(score: number) {
  const m = Math.floor((score - 10) / 2);
  return m >= 0 ? `+${m}` : `${m}`;
}

export function MonsterPageComponent({ data }: { data: MonsterPageData }) {
  const stats = [
    { label: "CR", value: data.challengeRating },
    { label: "Type", value: data.type },
    { label: "Size", value: data.size },
    { label: "Alignment", value: data.alignment },
    { label: "AC", value: data.armorClass },
    { label: "HP", value: data.hitPoints },
  ];

  const sections = [
    { id: "stats", label: "Ability Scores" },
    { id: "abilities", label: "Key Abilities" },
    { id: "tactics", label: "Tactics" },
    { id: "encounter", label: "Encounter Tips" },
    { id: "mistakes", label: "Common Mistakes" },
    { id: "tips", label: "DM Tips" },
    ...(data.faq && data.faq.length > 0 ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const a = data.abilities;
  const monsterSlug = data.monsterName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Monsters", href: "/monsters/" },
          { label: "Monsters & Creatures", href: "/monsters/creatures/" },
          { label: data.name },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2 leading-tight">
          {data.name}
        </h1>
        <p className="text-[var(--text-dim)] text-base leading-relaxed">
          {data.size} {data.type}, {data.alignment}
        </p>
      </div>

      <AtAGlance stats={stats} />
      <AddMonsterToGame
        monsterName={data.monsterName}
        monsterSlug={data.slug}
        hp={data.hitPoints.split(" ")[0]}
        ac={data.armorClass.split(" ")[0]}
      />
      <AssignToCharacter entryName={`Encounter: ${data.monsterName}`} entrySlug={data.slug} field="conditions" />

      {/* Speed */}
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-4 text-sm">
        <span className="font-bold text-[var(--accent)] text-xs uppercase tracking-wider">Speed</span>
        <span className="ml-3">{data.speed}</span>
      </div>

      <JumpTo sections={sections} />

      {/* Ability Scores */}
      <section id="stats" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Ability Scores
        </h2>
        <div className="grid grid-cols-6 gap-2 text-center">
          {(["str", "dex", "con", "int", "wis", "cha"] as const).map((ab) => (
            <div key={ab} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3">
              <div className="text-xs uppercase text-[var(--text-dim)] font-semibold">
                {ab}
              </div>
              <div className="text-lg font-bold">{a[ab]}</div>
              <div className="text-xs text-[var(--text-dim)]">{mod(a[ab])}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Abilities */}
      <section id="abilities" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Key Abilities
        </h2>
        <table className="ref-table">
          <thead>
            <tr>
              <th>Ability</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.keyAbilities.map((ab, i) => (
              <tr key={i}>
                <td className="font-medium text-[var(--text)]">{ab.name}</td>
                <td>
                  <TextWithEntityLinks text={ab.description} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Tactics */}
      <section id="tactics" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          How to Run This Monster
        </h2>
        <TextWithEntityLinks
          text={data.tactics}
          as="p"
          className="text-sm text-[var(--text-dim)] leading-relaxed"
        />
      </section>

      {/* Encounter Tips */}
      <section id="encounter" className="py-8 border-t border-[var(--border)]">
        <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
          Encounter Ideas
        </h2>
        <TextWithEntityLinks
          text={data.encounterTips}
          as="p"
          className="text-sm text-[var(--text-dim)] leading-relaxed"
        />
        {data.loot && (
          <div className="bg-[var(--accent-light)] border border-[var(--accent)] border-opacity-25 rounded-lg px-4 py-3 mt-4 text-sm">
            <div className="font-bold text-[var(--accent)] text-xs uppercase tracking-wider mb-1">
              Loot
            </div>
            <TextWithEntityLinks
              text={data.loot}
              as="div"
              className="text-[var(--text)]"
            />
          </div>
        )}
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
            name: `${data.monsterName} — D&D 5e Wikidot`,
            url: `https://dnd5e.wikidot.com/monster:${monsterSlug}`,
            note: "Full stat block",
          },
          {
            name: `${data.monsterName} — D&D Beyond`,
            url: `https://www.dndbeyond.com/monsters/${monsterSlug}`,
            note: "Official monster reference",
          },
          {
            name: `${data.monsterName} — Roll20 Compendium`,
            url: `https://roll20.net/compendium/dnd5e/${encodeURIComponent(data.monsterName)}`,
            note: "Structured stat block",
          },
        ]}
      />
    </>
  );
}
