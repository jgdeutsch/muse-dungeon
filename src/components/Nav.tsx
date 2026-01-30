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
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/spells/", label: "Spells" },
    { href: "/characters/", label: "Characters" },
    { href: "/monsters/", label: "Monsters" },
    { href: "/items/", label: "Items" },
    { href: "/rules/", label: "Rules" },
  ];

  return (
    <nav className="py-5 flex justify-between items-center border-b border-[var(--border)] relative">
      <Link
        href="/"
        className="font-['Cinzel'] text-lg font-semibold text-[var(--accent)] no-underline tracking-wide"
      >
        Muse Dungeon
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
            {link.label}
          </Link>
        ))}
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

      {/* Mobile: My Game + hamburger */}
      <div className="md:hidden flex items-center gap-3">
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
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[var(--text)] transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[var(--text)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[var(--text)] transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--bg)] border-b border-[var(--border)] py-4 px-5 flex flex-col gap-4 md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {!loading && (
            user ? (
              <div className="pt-2 border-t border-[var(--border)]">
                <div className="text-xs text-[var(--text-dim)] mb-2">{user.email}</div>
                <button
                  onClick={() => { signOut(); setMenuOpen(false); }}
                  className="text-xs text-[var(--red)] bg-transparent border-0 cursor-pointer p-0"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => { signIn(); setMenuOpen(false); }}
                className="text-xs text-[var(--text-dim)] bg-transparent border border-[var(--border)] rounded-lg px-3 py-1.5 cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors w-fit"
              >
                Sign in
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
