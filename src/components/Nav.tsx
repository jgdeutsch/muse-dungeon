"use client";

import Link from "next/link";
import { useGame } from "@/context/GameContext";

export function Nav() {
  const { characters } = useGame();
  const count = characters.length;

  return (
    <nav className="py-5 flex justify-between items-center border-b border-[var(--border)]">
      <Link
        href="/"
        className="font-['Cinzel'] text-lg font-semibold text-[var(--accent)] no-underline tracking-wide"
      >
        Muse Dungeon
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/spells/" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
          Spells
        </Link>
        <Link href="/characters/" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
          Characters
        </Link>
        <Link href="/monsters/" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
          Monsters
        </Link>
        <Link href="/items/" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
          Items
        </Link>
        <Link href="/rules/" className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
          Rules
        </Link>
        <Link
          href="/game/"
          className="text-sm font-semibold text-[var(--accent)] no-underline hover:opacity-80 transition-opacity flex items-center gap-1.5"
        >
          My Game
          {count > 0 && (
            <span className="bg-[var(--accent)] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
