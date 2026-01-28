"use client";

import { useGame } from "@/context/GameContext";

export function Toasts() {
  const { toasts } = useGame();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] text-xs font-medium rounded-lg px-4 py-2.5 shadow-lg animate-[toast-in_0.25s_ease-out]"
        >
          <span className="text-[var(--green)] mr-1.5">&#10003;</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}
