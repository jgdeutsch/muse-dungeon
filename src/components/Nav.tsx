"use client";

import Link from "next/link";
import { useGame } from "@/context/GameContext";
import { useAuth } from "@/context/AuthContext";

export function Nav() {
  const { characters } = useGame();
  const { user, loading, authError, signIn, signOut } = useAuth();
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
        {!loading && (
          user ? (
            <button
              onClick={signOut}
              className="flex items-center gap-1.5 bg-transparent border border-[var(--border)] rounded-full pl-1 pr-3 py-1 cursor-pointer hover:border-[var(--accent)] transition-colors"
              title={`Signed in as ${user.displayName}`}
            >
              {user.photoURL ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.photoURL} alt="" className="w-5 h-5 rounded-full" referrerPolicy="no-referrer" />
              ) : (
                <span className="w-5 h-5 rounded-full bg-[var(--accent)] text-white text-[10px] flex items-center justify-center font-bold">
                  {(user.displayName || "U")[0]}
                </span>
              )}
              <span className="text-[11px] text-[var(--text-dim)]">
                {(user.displayName || "User").split(" ")[0]}
              </span>
            </button>
          ) : (
            <div className="flex flex-col items-end gap-1">
              <button
                onClick={signIn}
                className="text-xs text-[var(--text-dim)] bg-transparent border border-[var(--border)] rounded-lg px-3 py-1.5 cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                Sign in
              </button>
              {authError && (
                <div className="text-[10px] text-[var(--red)] max-w-[200px] text-right">
                  {authError}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </nav>
  );
}
