"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useGame, type GameCharacter, type GameEntry, type SpellSlots, type DeathSaves } from "@/context/GameContext";
import { Breadcrumb } from "@/components/Breadcrumb";
import { allSpells } from "@/data/spells-index";
import { equipmentPages, magicItemPages } from "@/data/items-index";
import { rulePages } from "@/data/rules-index";
import { monsterPages } from "@/data/monsters-index";
import { racePages, featPages, combatPages } from "@/data/characters-index";

// ---------------------------------------------------------------------------
// Catalog — a unified searchable list of everything a DM can add
// ---------------------------------------------------------------------------

type CatalogEntry = {
  name: string;
  slug: string;
  kind: "spell" | "item" | "condition" | "dnd-condition" | "feat" | "race";
  field: "conditions" | "activeEffects" | "spellsKnown" | "items";
  detail: string; // short subtitle
  href: string;
};

function buildCatalog(): CatalogEntry[] {
  const catalog: CatalogEntry[] = [];

  for (const s of allSpells) {
    // as known spell
    catalog.push({
      name: s.name,
      slug: s.slug,
      kind: "spell",
      field: "spellsKnown",
      detail: `${s.level} ${s.school}`,
      href: `/spells/${s.category}/${s.slug}/`,
    });
    // as active effect
    catalog.push({
      name: s.name,
      slug: s.slug,
      kind: "spell",
      field: "activeEffects",
      detail: `${s.level} ${s.school} — as effect`,
      href: `/spells/${s.category}/${s.slug}/`,
    });
  }

  for (const e of equipmentPages) {
    catalog.push({
      name: e.name,
      slug: e.slug,
      kind: "item",
      field: "items",
      detail: `${e.itemType} · ${e.cost}`,
      href: `/items/equipment/${e.slug}/`,
    });
  }

  for (const m of magicItemPages) {
    catalog.push({
      name: m.name,
      slug: m.slug,
      kind: "item",
      field: "items",
      detail: `${m.rarity} magic item`,
      href: `/items/magic-items/${m.slug}/`,
    });
  }

  for (const r of rulePages) {
    if (r.category === "conditions") {
      // D&D conditions go into the "conditions" field with "dnd-condition" kind
      catalog.push({
        name: r.name.replace(/ 5e$/, "").replace(/ Condition$/, ""),
        slug: r.slug,
        kind: "dnd-condition",
        field: "conditions",
        detail: r.description.slice(0, 60) + (r.description.length > 60 ? "…" : ""),
        href: `/rules/${r.category}/${r.slug}/`,
      });
    } else {
      catalog.push({
        name: r.name,
        slug: r.slug,
        kind: "condition",
        field: "conditions",
        detail: r.description.slice(0, 60) + (r.description.length > 60 ? "…" : ""),
        href: `/rules/${r.category}/${r.slug}/`,
      });
    }
  }

  for (const r of racePages) {
    catalog.push({
      name: r.raceName,
      slug: r.slug,
      kind: "race",
      field: "conditions",
      detail: `${r.size} · ${r.speed} · ${r.abilityScores}`,
      href: `/characters/races/${r.slug}/`,
    });
  }

  for (const f of featPages) {
    catalog.push({
      name: f.name,
      slug: f.slug,
      kind: "feat",
      field: "conditions",
      detail: f.prerequisite ? `Prereq: ${f.prerequisite}` : "No prerequisite",
      href: `/characters/feats/${f.slug}/`,
    });
  }

  for (const c of combatPages) {
    catalog.push({
      name: c.name,
      slug: c.slug,
      kind: "feat",
      field: "conditions",
      detail: c.description.slice(0, 60) + (c.description.length > 60 ? "…" : ""),
      href: `/characters/feats/${c.slug}/`,
    });
  }

  // Monsters are added from their own pages, not from the character search

  return catalog;
}

let _catalog: CatalogEntry[] | null = null;
function getCatalog() {
  if (!_catalog) _catalog = buildCatalog();
  return _catalog;
}

type TabKey = "spells" | "items" | "conditions" | "effects" | "feats" | "races" | "rules";

const TABS: { key: TabKey; label: string; field?: CatalogEntry["field"]; kinds?: string[] }[] = [
  { key: "conditions", label: "Conditions", field: "conditions", kinds: ["dnd-condition"] },
  { key: "spells", label: "Spells", field: "spellsKnown", kinds: ["spell"] },
  { key: "effects", label: "Effects", field: "activeEffects" },
  { key: "items", label: "Items", field: "items" },
  { key: "feats", label: "Feats", kinds: ["feat"] },
  { key: "races", label: "Races", kinds: ["race"] },
  { key: "rules", label: "Rules", field: "conditions", kinds: ["condition"] },
];

function AddEntrySearch({
  charId,
  charName,
}: {
  charId: string;
  charName: string;
}) {
  const { addEntryToCharacter } = useGame();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<TabKey>("conditions");
  const [query, setQuery] = useState("");
  const [added, setAdded] = useState<string | null>(null);

  const catalog = useMemo(() => getCatalog(), []);

  const filtered = useMemo(() => {
    const activeTab = TABS.find((t) => t.key === tab)!;
    let list = catalog;
    if (activeTab.field) list = list.filter((e) => e.field === activeTab.field);
    if (activeTab.kinds) list = list.filter((e) => activeTab.kinds!.includes(e.kind));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((e) => e.name.toLowerCase().includes(q) || e.detail.toLowerCase().includes(q));
    }
    return list.slice(0, 30);
  }, [catalog, tab, query]);

  function handleAdd(entry: CatalogEntry) {
    const catMap: Record<string, GameEntry["category"]> = {
      spell: "spell",
      item: "item",
      feat: "feat",
      race: "race",
      "dnd-condition": "condition",
    };
    const gameEntry: GameEntry = {
      name: entry.name,
      slug: entry.slug,
      category: entry.kind === "spell" && entry.field === "spellsKnown"
        ? "spell-known"
        : catMap[entry.kind] || "condition",
    };
    addEntryToCharacter(charId, entry.field, gameEntry);
    setAdded(entry.name);
    setTimeout(() => setAdded(null), 2000);
  }

  if (!open) {
    return (
      <div className="mb-4">
        {added && (
          <div className="flex items-center gap-2 bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] rounded-lg px-3 py-1.5 mb-3 text-xs font-medium">
            &#10003; Added <strong>{added}</strong> to {charName}
          </div>
        )}
        <button
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-[var(--bg)] border-2 border-dashed border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--text-dim)] cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          <span className="text-lg leading-none">+</span> Add spell, item, condition, or effect
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 bg-[var(--bg)] border border-[var(--accent)] rounded-xl overflow-hidden">
      {added && (
        <div className="flex items-center gap-2 bg-[var(--green-bg)] text-[var(--green)] px-4 py-1.5 text-xs font-medium">
          &#10003; Added <strong>{added}</strong>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <span className="text-sm font-semibold">Add to {charName}</span>
        <button
          onClick={() => { setOpen(false); setQuery(""); }}
          className="text-xs text-[var(--text-dim)] cursor-pointer bg-transparent border-0 hover:text-[var(--text)]"
        >
          &#10005; Close
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 px-4 pb-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => { setTab(t.key); setQuery(""); }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer border transition-colors ${
              tab === t.key
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "bg-[var(--bg-card)] text-[var(--text-dim)] border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="px-4 pb-2">
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${TABS.find((t) => t.key === tab)?.label.toLowerCase()}…`}
          className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg-card)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
        />
      </div>

      {/* Results */}
      <div className="max-h-64 overflow-y-auto px-2 pb-2">
        {filtered.length === 0 ? (
          <div className="text-xs text-[var(--text-dim)] text-center py-6">
            No results{query ? ` for "${query}"` : ""}
          </div>
        ) : (
          filtered.map((entry, i) => (
            <button
              key={`${entry.slug}-${entry.field}-${i}`}
              onClick={() => handleAdd(entry)}
              className="w-full text-left flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-[var(--bg-card)] transition-colors bg-transparent border-0"
            >
              <div className="min-w-0">
                <div className="text-sm font-medium text-[var(--text)] truncate">{entry.name}</div>
                <div className="text-[11px] text-[var(--text-dim)] truncate">{entry.detail}</div>
              </div>
              <span className="text-xs text-[var(--accent)] shrink-0 ml-2">+ Add</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Content Modal — shows full page content when clicking an entry tag
// ---------------------------------------------------------------------------

function ContentModal({
  entry,
  onClose,
}: {
  entry: GameEntry;
  onClose: () => void;
}) {
  // Find the content from data sources
  const content = useMemo(() => {
    const slug = entry.slug;
    if (!slug) return null;

    // Try spells
    const spell = allSpells.find((s) => s.slug === slug);
    if (spell) {
      return {
        title: spell.name,
        href: `/spells/${spell.category}/${spell.slug}/`,
        sections: [
          { label: "Level", value: spell.level },
          { label: "School", value: spell.school },
          { label: "Casting Time", value: spell.castingTime },
          { label: "Range", value: spell.range },
          { label: "Components", value: spell.components },
          { label: "Duration", value: spell.duration + (spell.concentration ? " (Concentration)" : "") },
          ...(spell.damage ? [{ label: "Damage", value: spell.damage }] : []),
          ...(spell.savingThrow ? [{ label: "Save", value: spell.savingThrow }] : []),
        ],
        description: spell.description,
        higherLevels: spell.higherLevels,
        classes: spell.classes,
      };
    }

    // Try equipment
    const eq = equipmentPages.find((e) => e.slug === slug);
    if (eq) {
      return {
        title: eq.name,
        href: `/items/equipment/${eq.slug}/`,
        sections: [
          { label: "Type", value: eq.itemType },
          { label: "Cost", value: eq.cost },
          { label: "Weight", value: eq.weight },
        ],
        description: eq.description,
        mechanics: eq.mechanics,
      };
    }

    // Try magic items
    const mi = magicItemPages.find((m) => m.slug === slug);
    if (mi) {
      return {
        title: mi.name,
        href: `/items/magic-items/${mi.slug}/`,
        sections: [
          { label: "Rarity", value: mi.rarity },
          { label: "Type", value: mi.itemType },
          { label: "Attunement", value: mi.attunement ? "Required" : "No" },
        ],
        description: mi.description,
        mechanics: mi.mechanics,
      };
    }

    // Try rules
    const rule = rulePages.find((r) => r.slug === slug);
    if (rule) {
      return {
        title: rule.name,
        href: `/rules/${rule.category}/${rule.slug}/`,
        sections: [],
        description: rule.description,
        htmlSections: rule.sections,
      };
    }

    // Try monsters
    const monster = monsterPages.find((m) => m.slug === slug);
    if (monster) {
      return {
        title: monster.monsterName,
        href: `/monsters/creatures/${monster.slug}/`,
        sections: [
          { label: "CR", value: monster.challengeRating },
          { label: "Type", value: `${monster.size} ${monster.type}` },
          { label: "Alignment", value: monster.alignment },
          { label: "AC", value: monster.armorClass },
          { label: "HP", value: monster.hitPoints },
          { label: "Speed", value: monster.speed },
        ],
        description: monster.tactics,
        abilities: monster.abilities,
        keyAbilities: monster.keyAbilities,
      };
    }

    // Try races
    const race = racePages.find((r) => r.slug === slug);
    if (race) {
      return {
        title: race.raceName,
        href: `/characters/races/${race.slug}/`,
        sections: [
          { label: "Ability Scores", value: race.abilityScores },
          { label: "Size", value: race.size },
          { label: "Speed", value: race.speed },
          { label: "Languages", value: race.languages },
          { label: "Source", value: race.source },
        ],
        description: race.description,
        traits: race.traits,
      };
    }

    // Try feats
    const feat = featPages.find((f) => f.slug === slug);
    if (feat) {
      return {
        title: feat.name,
        href: `/characters/feats/${feat.slug}/`,
        sections: [
          ...(feat.prerequisite ? [{ label: "Prerequisite", value: feat.prerequisite }] : []),
        ],
        description: feat.description,
        benefit: feat.benefit,
        mechanics: feat.mechanics,
        synergies: feat.synergies,
      };
    }

    // Try combat maneuvers
    const combat = combatPages.find((c) => c.slug === slug);
    if (combat) {
      return {
        title: combat.name,
        href: `/characters/feats/${combat.slug}/`,
        sections: [],
        description: combat.description,
        rules: combat.rules,
      };
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry.slug]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!content) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
        <div className="bg-[var(--bg)] rounded-2xl p-6 max-w-lg w-[90vw] text-center" onClick={(e) => e.stopPropagation()}>
          <p className="text-sm text-[var(--text-dim)] mb-4">No detailed content found for &ldquo;{entry.name}&rdquo;.</p>
          <button onClick={onClose} className="bg-[var(--accent)] text-white rounded-lg px-4 py-2 text-sm cursor-pointer border-0">
            Close
          </button>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = content as any;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto py-8 px-4" onClick={onClose}>
      <div
        className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 pb-3 border-b border-[var(--border)]">
          <div>
            <h2 className="font-['Cinzel'] text-xl font-bold leading-tight">{content.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--text-dim)] hover:text-[var(--text)] cursor-pointer bg-transparent border-0 text-lg leading-none ml-4 shrink-0"
          >
            &#10005;
          </button>
        </div>

        {/* Stat grid */}
        {content.sections.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[var(--border)]">
            {content.sections.map((s: { label: string; value: string }) => (
              <div key={s.label} className="bg-[var(--bg)] px-4 py-2.5">
                <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] mb-0.5">{s.label}</div>
                <div className="text-sm font-medium">{s.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <p className="text-sm text-[var(--text-dim)] leading-relaxed">{content.description}</p>

          {/* Spell-specific */}
          {c.higherLevels && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--purple)] mb-1">At Higher Levels</div>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">{c.higherLevels}</p>
            </div>
          )}
          {c.classes && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-1">Classes</div>
              <p className="text-sm">{c.classes.join(", ")}</p>
            </div>
          )}

          {/* Item mechanics */}
          {c.mechanics && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-1">Mechanics</div>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">{c.mechanics}</p>
            </div>
          )}

          {/* Monster abilities */}
          {c.abilities && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">Ability Scores</div>
              <div className="grid grid-cols-6 gap-2">
                {(["str", "dex", "con", "int", "wis", "cha"] as const).map((ab) => (
                  <div key={ab} className="text-center bg-[var(--bg-card)] border border-[var(--border)] rounded-lg py-2">
                    <div className="text-[10px] uppercase text-[var(--text-dim)]">{ab}</div>
                    <div className="text-sm font-bold">{c.abilities[ab]}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {c.keyAbilities && c.keyAbilities.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">Key Abilities</div>
              <div className="space-y-2">
                {c.keyAbilities.map((a: { name: string; description: string }) => (
                  <div key={a.name} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3">
                    <div className="text-sm font-semibold mb-1">{a.name}</div>
                    <p className="text-xs text-[var(--text-dim)] leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Race traits */}
          {c.traits && c.traits.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">Racial Traits</div>
              <div className="space-y-2">
                {c.traits.map((t: { name: string; description: string }) => (
                  <div key={t.name} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3">
                    <div className="text-sm font-semibold mb-1">{t.name}</div>
                    <p className="text-xs text-[var(--text-dim)] leading-relaxed">{t.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feat benefit & synergies */}
          {c.benefit && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--green)] mb-1">Benefit</div>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">{c.benefit}</p>
            </div>
          )}
          {c.synergies && c.synergies.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-1">Synergies</div>
              <ul className="list-disc pl-5 text-sm text-[var(--text-dim)] space-y-0.5">
                {c.synergies.map((s: string, i: number) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}

          {/* Combat maneuver rules */}
          {c.rules && c.rules.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">Rules</div>
              <div className="space-y-2">
                {c.rules.map((r: { step: string; detail: string }, i: number) => (
                  <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3">
                    <div className="text-sm font-semibold mb-1">{r.step}</div>
                    <p className="text-xs text-[var(--text-dim)] leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rule HTML sections */}
          {c.htmlSections && c.htmlSections.map((s: { id: string; title: string; content: string }) => (
            <div key={s.id}>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-1">{s.title}</div>
              <div
                className="text-sm text-[var(--text-dim)] leading-relaxed [&_strong]:text-[var(--text)] [&_p]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-2 [&_li]:mb-0.5 [&_table]:ref-table [&_th]:text-left [&_th]:p-2 [&_td]:p-2"
                dangerouslySetInnerHTML={{ __html: s.content }}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--border)] px-5 py-3 flex justify-between items-center">
          <Link
            href={content.href}
            className="text-xs text-[var(--accent)] hover:underline"
          >
            View full page &rarr;
          </Link>
          <button
            onClick={onClose}
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-1.5 text-sm text-[var(--text)] cursor-pointer hover:bg-[var(--bg-card-hover)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Entry List — clickable tags that open the content modal
// ---------------------------------------------------------------------------

function EntryList({
  label,
  entries,
  field,
  charId,
  color,
  onViewEntry,
}: {
  label: string;
  entries: GameEntry[];
  field: "conditions" | "activeEffects" | "spellsKnown" | "items";
  charId: string;
  color: string;
  onViewEntry: (entry: GameEntry) => void;
}) {
  const { removeEntryFromCharacter } = useGame();

  if (entries.length === 0) return null;

  return (
    <div className="mb-3">
      <div className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color }}>
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {entries.map((e, i) => (
          <span
            key={`${e.name}-${i}`}
            className="inline-flex items-center gap-1 bg-[var(--bg)] border border-[var(--border)] rounded-full pl-1 pr-1.5 py-0.5 text-xs group"
          >
            <button
              onClick={() => onViewEntry(e)}
              className="text-[var(--text)] cursor-pointer bg-transparent border-0 text-xs hover:text-[var(--accent)] transition-colors px-1.5 py-0.5"
              title={`View ${e.name}`}
            >
              {e.name}
            </button>
            <button
              onClick={() => removeEntryFromCharacter(charId, field, i)}
              className="text-[var(--text-dim)] hover:text-[var(--red)] cursor-pointer bg-transparent border-0 text-[10px] leading-none opacity-50 group-hover:opacity-100 transition-opacity"
              title="Remove"
            >
              &#10005;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Death Saves Tracker
// ---------------------------------------------------------------------------

function DeathSavesTracker({ charId, saves }: { charId: string; saves: DeathSaves }) {
  const { updateCharacter } = useGame();
  const ds = saves || { successes: 0, failures: 0 };

  function toggleSave(type: "successes" | "failures", index: number) {
    const cur = ds[type];
    const next = index < cur ? index : index + 1;
    updateCharacter(charId, { deathSaves: { ...ds, [type]: Math.min(next, 3) } });
  }

  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3">
      <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] mb-2 font-semibold text-center">
        Death Saves
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--green)] font-medium w-16">Successes</span>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => toggleSave("successes", i)}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-colors ${
                  i < ds.successes
                    ? "bg-[var(--green)] border-[var(--green)]"
                    : "bg-transparent border-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--red)] font-medium w-16">Failures</span>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => toggleSave("failures", i)}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-colors ${
                  i < ds.failures
                    ? "bg-[var(--red)] border-[var(--red)]"
                    : "bg-transparent border-[var(--border)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Spell Slot Tracker — with Remaining / Max columns
// ---------------------------------------------------------------------------

const SLOT_LEVELS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function SpellSlotTracker({ charId, slots }: { charId: string; slots: SpellSlots }) {
  const { updateCharacter } = useGame();
  const [editing, setEditing] = useState(false);

  const activeSlots = SLOT_LEVELS.filter((l) => slots[l] && slots[l].max > 0);

  function setMax(level: string, max: number) {
    const next = { ...slots, [level]: { max, used: slots[level]?.used || 0 } };
    if (max <= 0) delete next[level];
    updateCharacter(charId, { spellSlots: next });
  }

  function toggleUsed(level: string, index: number) {
    const cur = slots[level] || { max: 0, used: 0 };
    const newUsed = index < cur.used ? index : index + 1;
    updateCharacter(charId, {
      spellSlots: { ...slots, [level]: { ...cur, used: Math.min(newUsed, cur.max) } },
    });
  }

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>
          Spell Slots
        </div>
        <button
          onClick={() => setEditing(!editing)}
          className="text-[10px] text-[var(--accent)] cursor-pointer bg-transparent border-0 hover:underline"
        >
          {editing ? "Done" : "Configure"}
        </button>
      </div>

      {editing ? (
        <div className="grid grid-cols-3 gap-2">
          {SLOT_LEVELS.map((l) => (
            <div key={l} className="flex items-center gap-2">
              <span className="text-xs text-[var(--text-dim)] w-8">Lvl {l}</span>
              <input
                type="number"
                min="0"
                max="9"
                value={slots[l]?.max || 0}
                onChange={(e) => setMax(l, parseInt(e.target.value) || 0)}
                className="w-12 border border-[var(--border)] rounded px-1.5 py-1 text-xs bg-[var(--bg)] text-[var(--text)] outline-none text-center"
              />
            </div>
          ))}
        </div>
      ) : activeSlots.length === 0 ? (
        <p className="text-xs text-[var(--text-dim)] italic">
          No spell slots configured. Click &ldquo;Configure&rdquo; to set slot counts.
        </p>
      ) : (
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[3rem_1fr_3.5rem_3.5rem] gap-px bg-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-semibold">
            <div className="bg-[var(--bg-card)] px-2 py-1.5">Level</div>
            <div className="bg-[var(--bg-card)] px-2 py-1.5">Slots</div>
            <div className="bg-[var(--bg-card)] px-2 py-1.5 text-center">Left</div>
            <div className="bg-[var(--bg-card)] px-2 py-1.5 text-center">Max</div>
          </div>
          {/* Rows */}
          {activeSlots.map((l) => {
            const s = slots[l];
            const remaining = s.max - s.used;
            return (
              <div key={l} className="grid grid-cols-[3rem_1fr_3.5rem_3.5rem] gap-px bg-[var(--border)]">
                <div className="bg-[var(--bg)] px-2 py-2 text-xs font-medium text-[var(--text)]">{l}</div>
                <div className="bg-[var(--bg)] px-2 py-2 flex gap-1 items-center">
                  {Array.from({ length: s.max }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => toggleUsed(l, i)}
                      className={`w-4 h-4 rounded border cursor-pointer transition-colors ${
                        i < s.used
                          ? "bg-[var(--text-dim)] border-[var(--text-dim)]"
                          : "bg-[var(--purple)] border-[var(--purple)]"
                      }`}
                      title={i < s.used ? "Used" : "Available"}
                    />
                  ))}
                </div>
                <div className={`bg-[var(--bg)] px-2 py-2 text-xs text-center font-bold ${remaining === 0 ? "text-[var(--red)]" : "text-[var(--green)]"}`}>
                  {remaining}
                </div>
                <div className="bg-[var(--bg)] px-2 py-2 text-xs text-center text-[var(--text-dim)]">
                  {s.max}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Remove Confirmation Modal — requires typing REMOVE to confirm
// ---------------------------------------------------------------------------

function RemoveConfirmModal({
  charName,
  onConfirm,
  onCancel,
}: {
  charName: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onCancel]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onCancel}>
      <div
        className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 max-w-sm w-[90vw] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-['Cinzel'] text-lg font-bold mb-2">Remove Character</h3>
        <p className="text-sm text-[var(--text-dim)] mb-1">
          You are about to permanently remove <strong className="text-[var(--text)]">{charName}</strong> from your game. All tracked spells, items, conditions, and notes for this character will be lost.
        </p>
        <p className="text-sm text-[var(--text-dim)] mb-4">
          This action is <strong className="text-[var(--red)]">not reversible</strong>.
        </p>
        <label className="text-xs text-[var(--text-dim)] block mb-1.5">
          Type <strong className="text-[var(--text)] font-mono">REMOVE</strong> to confirm
        </label>
        <input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && value === "REMOVE") onConfirm();
          }}
          placeholder="REMOVE"
          className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg-card)] text-[var(--text)] outline-none focus:border-[var(--red)] font-mono tracking-wider mb-4"
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm bg-[var(--bg-card)] border border-[var(--border)] rounded-lg cursor-pointer text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={value !== "REMOVE"}
            className={`px-4 py-2 text-sm rounded-lg border-0 cursor-pointer transition-colors ${
              value === "REMOVE"
                ? "bg-[var(--red)] text-white hover:opacity-90"
                : "bg-[var(--bg-card)] text-[var(--text-dim)] cursor-not-allowed opacity-50"
            }`}
          >
            Remove permanently
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Character Detail — the expanded edit view
// ---------------------------------------------------------------------------

function CharacterDetail({
  char,
  onClose,
  onViewEntry,
}: {
  char: GameCharacter;
  onClose: () => void;
  onViewEntry: (entry: GameEntry) => void;
}) {
  const { updateCharacter, removeCharacter } = useGame();

  function upd(updates: Partial<GameCharacter>) {
    updateCharacter(char.id, updates);
  }

  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  function handleRemoveConfirmed() {
    removeCharacter(char.id);
    onClose();
  }

  const totalEntries =
    char.conditions.length + char.activeEffects.length + char.spellsKnown.length + char.items.length;

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[var(--accent)]">
            {char.className}
          </span>
          <span className="text-xs text-[var(--text-dim)]">
            &middot; {char.type === "player" ? "Player" : "NPC"}
          </span>
          {totalEntries > 0 && (
            <span className="text-xs text-[var(--text-dim)]">
              &middot; {totalEntries} tracked
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-sm text-[var(--text-dim)] cursor-pointer bg-transparent border-0 hover:text-[var(--text)]"
        >
          &#10005; Close
        </button>
      </div>

      {/* Top row: Name, Level, Type, AC */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="col-span-3">
          <label className="text-xs text-[var(--text-dim)] block mb-1">Name</label>
          <input
            value={char.name}
            onChange={(e) => upd({ name: e.target.value })}
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Level</label>
          <input
            value={char.level}
            onChange={(e) => upd({ level: parseInt(e.target.value) || 1 })}
            type="number"
            min="1"
            max="20"
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Type</label>
          <div className="flex gap-1">
            {(["player", "npc"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => upd({ type: t })}
                className={`flex-1 text-sm py-2 rounded-lg border cursor-pointer transition-colors ${
                  char.type === t
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "bg-[var(--bg)] text-[var(--text-dim)] border-[var(--border)]"
                }`}
              >
                {t === "player" ? "Player" : "NPC"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Armor Class</label>
          <input
            value={char.ac}
            onChange={(e) => upd({ ac: e.target.value })}
            placeholder="e.g. 18"
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
      </div>

      {/* HP Block — grouped like 5e character sheet */}
      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4 mb-4">
        <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] font-semibold mb-3 text-center">Hit Points</div>
        {/* HP Max */}
        <div className="mb-2">
          <div className="flex items-center gap-2">
            <label className="text-xs text-[var(--text-dim)] w-24 shrink-0">Hit Point Maximum</label>
            <input
              value={char.hpMax}
              onChange={(e) => upd({ hpMax: e.target.value })}
              placeholder="e.g. 52"
              className="flex-1 border border-[var(--border)] rounded-lg px-3 py-1.5 text-sm bg-[var(--bg-card)] text-[var(--text)] outline-none focus:border-[var(--accent)] text-center font-bold"
            />
          </div>
        </div>
        {/* Current HP — large */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3 mb-2">
          <input
            value={char.hp}
            onChange={(e) => upd({ hp: e.target.value })}
            placeholder="0"
            className="w-full text-center text-2xl font-bold bg-transparent text-[var(--text)] outline-none border-0"
          />
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] text-center mt-1">Current Hit Points</div>
        </div>
        {/* Temp HP */}
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-3 mb-3">
          <input
            value={char.hpTemp}
            onChange={(e) => upd({ hpTemp: e.target.value })}
            placeholder="0"
            className="w-full text-center text-lg font-bold bg-transparent text-[var(--text)] outline-none border-0"
          />
          <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] text-center mt-1">Temporary Hit Points</div>
        </div>
        {/* Death Saves */}
        <DeathSavesTracker charId={char.id} saves={char.deathSaves || { successes: 0, failures: 0 }} />
      </div>

      {/* Rest Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            // Short Rest: clear temp HP, reset death saves
            upd({ hpTemp: "", deathSaves: { successes: 0, failures: 0 } });
          }}
          className="flex-1 bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm font-semibold cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-[var(--text)]"
        >
          Short Rest
        </button>
        <button
          onClick={() => {
            // Long Rest: HP to max, clear temp HP, reset death saves, restore all spell slots
            const resetSlots: SpellSlots = {};
            for (const l of SLOT_LEVELS) {
              if (char.spellSlots?.[l]?.max) resetSlots[l] = { max: char.spellSlots[l].max, used: 0 };
            }
            upd({
              hp: char.hpMax || char.hp,
              hpTemp: "",
              deathSaves: { successes: 0, failures: 0 },
              spellSlots: resetSlots,
            });
          }}
          className="flex-1 bg-[var(--accent)] text-white border border-[var(--accent)] rounded-lg px-4 py-2.5 text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity"
        >
          Long Rest
        </button>
      </div>

      {/* Conditions, Effects, Spells, Items */}
      <div className="mb-4 border-t border-[var(--border)] pt-4">
        <EntryList label="Conditions" entries={char.conditions} field="conditions" charId={char.id} color="var(--red)" onViewEntry={onViewEntry} />
        <EntryList label="Active Spell Effects" entries={char.activeEffects} field="activeEffects" charId={char.id} color="var(--purple)" onViewEntry={onViewEntry} />
        <EntryList label="Known Spells" entries={char.spellsKnown} field="spellsKnown" charId={char.id} color="var(--blue)" onViewEntry={onViewEntry} />
        <EntryList label="Items" entries={char.items} field="items" charId={char.id} color="var(--orange)" onViewEntry={onViewEntry} />
        <SpellSlotTracker charId={char.id} slots={char.spellSlots || {}} />

        {/* Add Entry Search */}
        <AddEntrySearch charId={char.id} charName={char.name} />

        {totalEntries === 0 && Object.keys(char.spellSlots || {}).length === 0 && (
          <p className="text-xs text-[var(--text-dim)] italic">
            Use the button above to add spells, items, conditions, or effects. You can also browse{" "}
            <Link href="/spells/" className="text-[var(--accent)] underline">spells</Link>,{" "}
            <Link href="/items/" className="text-[var(--accent)] underline">items</Link>, or{" "}
            <Link href="/rules/" className="text-[var(--accent)] underline">rules</Link>{" "}
            and use &ldquo;Give to a character&rdquo; from any page.
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="text-xs text-[var(--text-dim)] block mb-1">
          DM Notes
        </label>
        <textarea
          value={char.notes}
          onChange={(e) => upd({ notes: e.target.value })}
          rows={3}
          placeholder="Motivations, secrets, quest hooks..."
          className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)] resize-y"
        />
      </div>

      <div className="flex items-center justify-end">
        <button
          onClick={() => setShowRemoveConfirm(true)}
          className="text-xs text-[var(--red)] cursor-pointer bg-transparent border-0 hover:underline"
        >
          Remove from game
        </button>
      </div>

      {showRemoveConfirm && (
        <RemoveConfirmModal
          charName={char.name}
          onConfirm={handleRemoveConfirmed}
          onCancel={() => setShowRemoveConfirm(false)}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Game Page
// ---------------------------------------------------------------------------

export default function GamePage() {
  const { characters } = useGame();
  const [openId, setOpenId] = useState<string | null>(null);
  const [modalEntry, setModalEntry] = useState<GameEntry | null>(null);

  const players = characters.filter((c) => c.type === "player");
  const npcs = characters.filter((c) => c.type === "npc");

  const onViewEntry = useCallback((entry: GameEntry) => {
    setModalEntry(entry);
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "My Game" },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">My Game</h1>
        <p className="text-[var(--text-dim)]">
          Track your campaign&apos;s players and NPCs. Click a character to edit details, add spells, items, and conditions.
        </p>
      </div>

      {characters.length > 0 && (
        <div className="flex gap-6 py-4 mb-2">
          {[
            { n: players.length, l: "Players" },
            { n: npcs.length, l: "NPCs" },
            { n: characters.length, l: "Total" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-['Cinzel'] text-2xl font-bold text-[var(--accent)]">
                {s.n}
              </div>
              <div className="text-xs text-[var(--text-dim)]">{s.l}</div>
            </div>
          ))}
        </div>
      )}

      {characters.length === 0 ? (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 text-center my-8">
          <div className="text-4xl mb-4">&#9876;</div>
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-2">
            No characters yet
          </h2>
          <p className="text-[var(--text-dim)] text-sm mb-4">
            Browse class guides and add players or NPCs to start tracking your
            campaign.
          </p>
          <Link
            href="/characters/classes/"
            className="inline-block bg-[var(--accent)] text-white rounded-lg px-5 py-2.5 text-sm font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            Browse Classes
          </Link>
        </div>
      ) : (
        <>
          {[
            { label: "Players", list: players },
            { label: "NPCs", list: npcs },
          ]
            .filter((g) => g.list.length > 0)
            .map((group) => (
              <section
                key={group.label}
                className="py-6 border-t border-[var(--border)]"
              >
                <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
                  {group.label}
                </h2>
                {group.list.map((c) =>
                  openId === c.id ? (
                    <CharacterDetail
                      key={c.id}
                      char={c}
                      onClose={() => setOpenId(null)}
                      onViewEntry={onViewEntry}
                    />
                  ) : (
                    <button
                      key={c.id}
                      onClick={() => setOpenId(c.id)}
                      className="w-full text-left bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-2 cursor-pointer hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">{c.name}</div>
                          <div className="text-xs text-[var(--text-dim)]">
                            {c.className}
                            {c.level > 1 && <> &middot; Lvl {c.level}</>}
                            {(c.hp || c.hpMax) && <> &middot; HP {c.hp || "?"}/{c.hpMax || "?"}</>}
                            {c.hpTemp && <> (+{c.hpTemp} temp)</>}
                            {c.ac && <> &middot; AC {c.ac}</>}
                          </div>
                        </div>
                        <span className="text-xs text-[var(--text-dim)]">Edit &rarr;</span>
                      </div>
                      {/* Inline tag summary */}
                      {(c.conditions.length > 0 || c.activeEffects.length > 0 || c.spellsKnown.length > 0 || c.items.length > 0) && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {c.conditions.map((e, i) => (
                            <span key={`c${i}`} className="text-[10px] bg-[var(--red-bg)] text-[var(--red)] border border-[var(--red-border)] rounded-full px-2 py-0.5">
                              {e.name}
                            </span>
                          ))}
                          {c.activeEffects.map((e, i) => (
                            <span key={`a${i}`} className="text-[10px] bg-purple-50 text-[var(--purple)] border border-purple-200 rounded-full px-2 py-0.5">
                              {e.name}
                            </span>
                          ))}
                          {c.spellsKnown.length > 0 && (
                            <span className="text-[10px] bg-blue-50 text-[var(--blue)] border border-blue-200 rounded-full px-2 py-0.5">
                              {c.spellsKnown.length} spell{c.spellsKnown.length !== 1 && "s"}
                            </span>
                          )}
                          {c.items.length > 0 && (
                            <span className="text-[10px] bg-orange-50 text-[var(--orange)] border border-orange-200 rounded-full px-2 py-0.5">
                              {c.items.length} item{c.items.length !== 1 && "s"}
                            </span>
                          )}
                        </div>
                      )}
                    </button>
                  )
                )}
              </section>
            ))}
        </>
      )}

      {/* Content Modal */}
      {modalEntry && (
        <ContentModal entry={modalEntry} onClose={() => setModalEntry(null)} />
      )}
    </>
  );
}
