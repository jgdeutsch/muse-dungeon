"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useGame } from "@/context/GameContext";
import { useAuth } from "@/context/AuthContext";
import type { User } from "firebase/auth";

function UserMenu({ user, signOut }: { user: User; signOut: () => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
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
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-lg py-1 min-w-[160px] z-50">
          <div className="px-3 py-2 border-b border-[var(--border)]">
            <div className="text-xs font-medium truncate">{user.displayName}</div>
            <div className="text-[10px] text-[var(--text-dim)] truncate">{user.email}</div>
          </div>
          <button
            onClick={() => { signOut(); setOpen(false); }}
            className="w-full text-left px-3 py-2 text-xs text-[var(--red)] bg-transparent border-0 cursor-pointer hover:bg-[var(--bg-card)] transition-colors"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

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
            <UserMenu user={user} signOut={signOut} />
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
