import Link from "next/link";

export function Nav() {
  return (
    <nav className="py-5 flex justify-between items-center border-b border-[var(--border)]">
      <Link
        href="/"
        className="font-['Cinzel'] text-lg font-semibold text-[var(--accent)] no-underline tracking-wide"
      >
        Muse Dungeon
      </Link>
      <div className="flex gap-6">
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
      </div>
    </nav>
  );
}
