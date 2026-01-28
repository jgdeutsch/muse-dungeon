"use client";

import { useState } from "react";
import { useGame } from "@/context/GameContext";

export function AddToGameButton({
  className,
  classSlug,
}: {
  className: string;
  classSlug: string;
}) {
  const { addCharacter } = useGame();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState<"player" | "npc">("player");
  const [added, setAdded] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    addCharacter({ name: name.trim(), className, classSlug, type });
    setAdded(name.trim());
    setName("");
    setOpen(false);
    setTimeout(() => setAdded(null), 3000);
  }

  return (
    <div className="my-4">
      {added && (
        <div className="flex items-center gap-2 bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green)] rounded-lg px-4 py-2 mb-3 text-sm font-medium">
          <span>&#10003;</span> Added <strong>{added}</strong> ({className}) to your game
        </div>
      )}

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-lg px-5 py-2.5 text-sm font-semibold cursor-pointer border-0 hover:opacity-90 transition-opacity"
        >
          <span>+</span> Add {className} to My Game
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4"
        >
          <div className="text-sm font-semibold mb-3">
            Add a {className} to your game
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Character name..."
            autoFocus
            className="w-full border border-[var(--border)] rounded-lg px-3 py-2 text-sm bg-[var(--bg)] text-[var(--text)] outline-none focus:border-[var(--accent)] mb-3"
          />

          <div className="flex gap-1 mb-4">
            {(["player", "npc"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className={`flex-1 text-sm py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  type === t
                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                    : "bg-[var(--bg)] text-[var(--text-dim)] border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                {t === "player" ? "Player" : "NPC"}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={!name.trim()}
              className="bg-[var(--accent)] text-white rounded-lg px-4 py-2 text-sm font-semibold cursor-pointer border-0 hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              Add to Game
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--text-dim)] cursor-pointer bg-transparent border-0 hover:text-[var(--text)]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
