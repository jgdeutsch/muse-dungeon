"use client";

import { useState } from "react";
import { useGame } from "@/context/GameContext";

export function AddRaceToGame({
  raceName,
  raceSlug,
}: {
  raceName: string;
  raceSlug: string;
}) {
  const { addCharacter } = useGame();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState<"player" | "npc">("player");
  const [added, setAdded] = useState(false);

  function handleAdd() {
    const trimmed = name.trim() || `${raceName} Character`;
    addCharacter({
      name: trimmed,
      className: raceName,
      classSlug: raceSlug,
      type,
    });
    setAdded(true);
    setOpen(false);
    setName("");
    setTimeout(() => setAdded(false), 3000);
  }

  return (
    <div className="my-4">
      {added && (
        <div className="flex items-center gap-2 bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] rounded-lg px-4 py-2 mb-3 text-sm font-medium">
          <span>&#10003;</span> Added <strong>{raceName}</strong> character to your game
        </div>
      )}

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-lg px-4 py-2.5 text-sm font-semibold cursor-pointer border-0 hover:opacity-90 transition-opacity"
        >
          <span>+</span> Add {raceName} to My Game
        </button>
      ) : (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4">
          <div className="text-sm font-semibold mb-3">
            Add {raceName} Character
          </div>
          <div className="mb-3">
            <label className="text-xs text-[var(--text-dim)] block mb-1">
              Character Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`e.g. Thorin the ${raceName}`}
              className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)]"
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label className="text-xs text-[var(--text-dim)] block mb-1">
              Type
            </label>
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
