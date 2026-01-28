"use client";

import { useState } from "react";
import Link from "next/link";
import { useGame, type GameCharacter } from "@/context/GameContext";
import { Breadcrumb } from "@/components/Breadcrumb";

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
  const [ac, setAc] = useState(char.ac);
  const [notes, setNotes] = useState(char.notes);
  const [type, setType] = useState(char.type);
  const [saved, setSaved] = useState(false);

  function save() {
    updateCharacter(char.id, {
      name: name.trim() || char.name,
      level: parseInt(level) || 1,
      hp,
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

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="col-span-2">
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
          <label className="text-xs text-[var(--text-dim)] block mb-1">Hit Points</label>
          <input
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            placeholder="e.g. 45/52"
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

      <div className="mb-4">
        <label className="text-xs text-[var(--text-dim)] block mb-1">
          DM Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Motivations, secrets, quest hooks, inventory..."
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
          Track your campaign&apos;s players and NPCs. Click a character to edit their details.
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
                      className="w-full text-left flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-2 cursor-pointer hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-colors"
                    >
                      <div>
                        <div className="text-sm font-semibold">{c.name}</div>
                        <div className="text-xs text-[var(--text-dim)]">
                          {c.className}
                          {c.level > 1 && <> &middot; Lvl {c.level}</>}
                          {c.hp && <> &middot; HP {c.hp}</>}
                          {c.ac && <> &middot; AC {c.ac}</>}
                        </div>
                      </div>
                      <span className="text-xs text-[var(--text-dim)]">Edit &rarr;</span>
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
