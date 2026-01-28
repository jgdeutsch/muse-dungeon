"use client";

import { useState } from "react";
import Link from "next/link";
import { useGame } from "@/context/GameContext";

export function AddMonsterToGame({
  monsterName,
  monsterSlug,
  hp,
  ac,
}: {
  monsterName: string;
  monsterSlug: string;
  hp: string;
  ac: string;
}) {
  const { addCharacter } = useGame();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(monsterName);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    const trimmed = name.trim() || monsterName;
    addCharacter({
      name: trimmed,
      className: monsterName,
      classSlug: monsterSlug,
      type: "npc",
      hp: hp,
      hpMax: hp,
      ac: ac,
    });
    setAdded(true);
    setOpen(false);
    setName(monsterName);
    setTimeout(() => setAdded(false), 3000);
  }

  return (
    <div className="my-4">
      {added && (
        <div className="flex items-center gap-2 bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] rounded-lg px-4 py-2 mb-3 text-sm font-medium">
          <span>&#10003;</span> Added <strong>{monsterName}</strong> to your game as NPC &mdash;{" "}
          <Link href="/game/" className="text-[var(--green)] underline font-semibold">View your party &rarr;</Link>
        </div>
      )}

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-lg px-4 py-2.5 text-sm font-semibold cursor-pointer border-0 hover:opacity-90 transition-opacity"
        >
          <span>+</span> Add {monsterName} to My Game
        </button>
      ) : (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4">
          <div className="text-sm font-semibold mb-3">
            Add {monsterName} as NPC
          </div>
          <div className="mb-3">
            <label className="text-xs text-[var(--text-dim)] block mb-1">
              Name this {monsterName}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={monsterName}
              className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
              autoFocus
            />
            <div className="text-[11px] text-[var(--text-dim)] mt-1">
              HP {hp} &middot; AC {ac} will be pre-filled
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="bg-[var(--accent)] text-white rounded-lg px-4 py-2 text-sm font-semibold cursor-pointer border-0 hover:opacity-90 transition-opacity"
            >
              Add to Game
            </button>
            <button
              onClick={() => setOpen(false)}
              className="bg-[var(--bg)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm text-[var(--text-dim)] cursor-pointer hover:text-[var(--text)] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
