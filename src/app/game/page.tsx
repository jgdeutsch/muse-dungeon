"use client";

import { useState } from "react";
import Link from "next/link";
import { useGame, type GameCharacter, type GameEntry, type SpellSlots } from "@/context/GameContext";
import { Breadcrumb } from "@/components/Breadcrumb";

function EntryList({
  label,
  entries,
  field,
  charId,
  color,
}: {
  label: string;
  entries: GameEntry[];
  field: "conditions" | "activeEffects" | "spellsKnown" | "items";
  charId: string;
  color: string;
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
            className="inline-flex items-center gap-1 bg-[var(--bg)] border border-[var(--border)] rounded-full px-3 py-1 text-xs"
          >
            <span className="text-[var(--text)]">{e.name}</span>
            <button
              onClick={() => removeEntryFromCharacter(charId, field, i)}
              className="text-[var(--text-dim)] hover:text-[var(--red)] cursor-pointer bg-transparent border-0 text-xs leading-none ml-0.5"
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

  function longRest() {
    const reset: SpellSlots = {};
    for (const l of SLOT_LEVELS) {
      if (slots[l]?.max) reset[l] = { max: slots[l].max, used: 0 };
    }
    updateCharacter(charId, { spellSlots: reset });
  }

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--purple)" }}>
          Spell Slots
        </div>
        <div className="flex gap-2">
          {activeSlots.length > 0 && (
            <button
              onClick={longRest}
              className="text-[10px] text-[var(--green)] cursor-pointer bg-transparent border-0 hover:underline"
            >
              Long Rest (restore all)
            </button>
          )}
          <button
            onClick={() => setEditing(!editing)}
            className="text-[10px] text-[var(--accent)] cursor-pointer bg-transparent border-0 hover:underline"
          >
            {editing ? "Done" : "Configure"}
          </button>
        </div>
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
        <div className="space-y-1.5">
          {activeSlots.map((l) => {
            const s = slots[l];
            return (
              <div key={l} className="flex items-center gap-2">
                <span className="text-xs text-[var(--text-dim)] w-10 shrink-0">Lvl {l}</span>
                <div className="flex gap-1">
                  {Array.from({ length: s.max }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => toggleUsed(l, i)}
                      className={`w-5 h-5 rounded border cursor-pointer transition-colors ${
                        i < s.used
                          ? "bg-[var(--text-dim)] border-[var(--text-dim)]"
                          : "bg-[var(--purple)] border-[var(--purple)]"
                      }`}
                      title={i < s.used ? "Used" : "Available"}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-[var(--text-dim)]">
                  {s.max - s.used}/{s.max}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CharacterDetail({
  char,
  onClose,
}: {
  char: GameCharacter;
  onClose: () => void;
}) {
  const { updateCharacter, removeCharacter } = useGame();
  const [name, setName] = useState(char.name);
  const [level, setLevel] = useState(String(char.level));
  const [hp, setHp] = useState(char.hp);
  const [hpMax, setHpMax] = useState(char.hpMax || "");
  const [hpTemp, setHpTemp] = useState(char.hpTemp || "");
  const [ac, setAc] = useState(char.ac);
  const [notes, setNotes] = useState(char.notes);
  const [type, setType] = useState(char.type);
  const [saved, setSaved] = useState(false);

  function save() {
    updateCharacter(char.id, {
      name: name.trim() || char.name,
      level: parseInt(level) || 1,
      hp,
      hpMax,
      hpTemp,
      ac,
      notes,
      type,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleRemove() {
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

      {saved && (
        <div className="flex items-center gap-2 bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] rounded-lg px-3 py-1.5 mb-4 text-xs font-medium">
          &#10003; Saved
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="col-span-3">
          <label className="text-xs text-[var(--text-dim)] block mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Level</label>
          <input
            value={level}
            onChange={(e) => setLevel(e.target.value)}
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
                onClick={() => setType(t)}
                className={`flex-1 text-sm py-2 rounded-lg border cursor-pointer transition-colors ${
                  type === t
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
          <label className="text-xs text-[var(--text-dim)] block mb-1">Current HP</label>
          <input
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            placeholder="e.g. 45"
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Max HP</label>
          <input
            value={hpMax}
            onChange={(e) => setHpMax(e.target.value)}
            placeholder="e.g. 52"
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Temp HP</label>
          <input
            value={hpTemp}
            onChange={(e) => setHpTemp(e.target.value)}
            placeholder="0"
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
        <div>
          <label className="text-xs text-[var(--text-dim)] block mb-1">Armor Class</label>
          <input
            value={ac}
            onChange={(e) => setAc(e.target.value)}
            placeholder="e.g. 18"
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
          />
        </div>
      </div>

      {/* Conditions, Effects, Spells, Items */}
      <div className="mb-4 border-t border-[var(--border)] pt-4">
        <EntryList label="Conditions" entries={char.conditions} field="conditions" charId={char.id} color="var(--red)" />
        <EntryList label="Active Spell Effects" entries={char.activeEffects} field="activeEffects" charId={char.id} color="var(--purple)" />
        <EntryList label="Known Spells" entries={char.spellsKnown} field="spellsKnown" charId={char.id} color="var(--blue)" />
        <EntryList label="Items" entries={char.items} field="items" charId={char.id} color="var(--orange)" />
        <SpellSlotTracker charId={char.id} slots={char.spellSlots || {}} />

        {totalEntries === 0 && Object.keys(char.spellSlots || {}).length === 0 && (
          <p className="text-xs text-[var(--text-dim)] italic">
            No conditions, spells, or items tracked yet. Browse{" "}
            <Link href="/spells/" className="text-[var(--accent)] underline">spells</Link>,{" "}
            <Link href="/items/" className="text-[var(--accent)] underline">items</Link>, or{" "}
            <Link href="/rules/" className="text-[var(--accent)] underline">rules</Link>{" "}
            and use &ldquo;Give to a character&rdquo; to assign them here.
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="text-xs text-[var(--text-dim)] block mb-1">
          DM Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Motivations, secrets, quest hooks..."
          className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)] resize-y"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={save}
          className="bg-[var(--accent)] text-white rounded-lg px-5 py-2 text-sm font-semibold cursor-pointer border-0 hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>
        <button
          onClick={handleRemove}
          className="text-xs text-[var(--red)] cursor-pointer bg-transparent border-0 hover:underline"
        >
          Remove from game
        </button>
      </div>
    </div>
  );
}

export default function GamePage() {
  const { characters } = useGame();
  const [openId, setOpenId] = useState<string | null>(null);

  const players = characters.filter((c) => c.type === "player");
  const npcs = characters.filter((c) => c.type === "npc");

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
          Track your campaign&apos;s players and NPCs. Click a character to edit details, view conditions, spells, and items.
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
    </>
  );
}
