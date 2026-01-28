"use client";

import { useState } from "react";
import Link from "next/link";
import { useGame, type GameEntry } from "@/context/GameContext";

type AssignField = "conditions" | "activeEffects" | "spellsKnown" | "items";

const fieldLabels: Record<AssignField, string> = {
  conditions: "condition",
  activeEffects: "active effect",
  spellsKnown: "known spell",
  items: "item",
};

export function AssignToCharacter({
  entryName,
  entrySlug,
  field,
}: {
  entryName: string;
  entrySlug?: string;
  field: AssignField;
}) {
  const { characters, addEntryToCharacter } = useGame();
  const [open, setOpen] = useState(false);
  const [assigned, setAssigned] = useState<string | null>(null);

  if (characters.length === 0 && !open) {
    return null; // Don't show if no game characters exist
  }

  const entry: GameEntry = {
    name: entryName,
    slug: entrySlug,
    category: field === "spellsKnown" ? "spell-known" : field === "activeEffects" ? "spell" : field === "conditions" ? "condition" : "item",
  };

  function handleAssign(charId: string, charName: string) {
    addEntryToCharacter(charId, field, entry);
    setAssigned(charName);
    setOpen(false);
    setTimeout(() => setAssigned(null), 3000);
  }

  return (
    <div className="my-4">
      {assigned && (
        <div className="flex items-center gap-2 bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] rounded-lg px-4 py-2 mb-3 text-sm font-medium">
          <span>&#10003;</span> Added <strong>{entryName}</strong> to <strong>{assigned}</strong>
        </div>
      )}

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-2 text-sm text-[var(--text)] cursor-pointer hover:border-[var(--accent)] hover:bg-[var(--bg-card-hover)] transition-colors"
        >
          <span className="text-[var(--accent)]">+</span> Give to a character
        </button>
      ) : (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">
              Add &ldquo;{entryName}&rdquo; as {fieldLabels[field]}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-[var(--text-dim)] cursor-pointer bg-transparent border-0 hover:text-[var(--text)]"
            >
              Cancel
            </button>
          </div>

          {characters.length === 0 ? (
            <div className="text-sm text-[var(--text-dim)]">
              No characters in your game yet.{" "}
              <Link href="/characters/classes/" className="text-[var(--accent)] underline">
                Add one from a class page
              </Link>
            </div>
          ) : (
            <div className="space-y-1.5">
              {characters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleAssign(c.id, c.name)}
                  className="w-full text-left flex items-center justify-between bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 cursor-pointer hover:border-[var(--accent)] transition-colors"
                >
                  <div>
                    <span className="text-sm font-medium">{c.name}</span>
                    <span className="text-xs text-[var(--text-dim)] ml-2">
                      {c.className} · {c.type === "player" ? "Player" : "NPC"}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--accent)]">+ Add</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
