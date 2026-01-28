"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { allSpells } from "@/data/spells-index";
import { classPages } from "@/data/characters-classes";
import { racePages } from "@/data/characters-races";
import { featPages } from "@/data/characters-other";
import { monsterPages } from "@/data/monsters-index";
import { equipmentPages, magicItemPages } from "@/data/items-index";
import { rulePages } from "@/data/rules-index";

type SearchEntry = { name: string; href: string; type: string };

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const s of allSpells)
    entries.push({ name: s.name, href: `/spells/${s.category}/${s.slug}/`, type: "Spell" });
  for (const c of classPages)
    entries.push({ name: c.name, href: `/characters/classes/${c.slug}/`, type: "Class" });
  for (const r of racePages)
    entries.push({ name: r.name, href: `/characters/races/${r.slug}/`, type: "Race" });
  for (const f of featPages)
    entries.push({ name: f.name, href: `/characters/feats/${f.slug}/`, type: "Feat" });
  for (const m of monsterPages)
    entries.push({ name: m.name, href: `/monsters/creatures/${m.slug}/`, type: "Monster" });
  for (const e of equipmentPages)
    entries.push({ name: e.name, href: `/items/equipment/${e.slug}/`, type: "Item" });
  for (const mi of magicItemPages)
    entries.push({ name: mi.name, href: `/items/magic-items/${mi.slug}/`, type: "Magic Item" });
  for (const r of rulePages)
    entries.push({ name: r.name, href: `/rules/${r.category}/${r.slug}/`, type: r.category === "conditions" ? "Condition" : "Rule" });

  return entries;
}

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const index = useMemo(buildIndex, []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return index
      .filter((e) => e.name.toLowerCase().includes(q))
      .slice(0, 12);
  }, [query, index]);

  useEffect(() => {
    setSelected(0);
  }, [results]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Global keyboard shortcut: "/" to focus search
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function go(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    else if (e.key === "Enter" && results[selected]) { e.preventDefault(); go(results[selected].href); }
    else if (e.key === "Escape") { setOpen(false); inputRef.current?.blur(); }
  }

  const typeColors: Record<string, string> = {
    Spell: "var(--accent)",
    Class: "#e6a020",
    Race: "#20b880",
    Feat: "#c070e0",
    Monster: "#e05050",
    Item: "#60a0e0",
    "Magic Item": "#a060e0",
    Rule: "#90908a",
    Condition: "#e08040",
  };

  return (
    <div ref={ref} className="relative">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder='Search spells, monsters, classes, items, rules...  (press "/")'
        className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none focus:border-[var(--accent)] transition-colors"
      />
      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-lg z-50 overflow-hidden max-h-[360px] overflow-y-auto">
          {results.map((r, i) => (
            <button
              key={r.href}
              onMouseDown={() => go(r.href)}
              onMouseEnter={() => setSelected(i)}
              className={`w-full text-left px-3 py-2 flex items-center justify-between border-0 bg-transparent cursor-pointer text-[var(--text)] transition-colors ${
                i === selected ? "bg-[var(--bg-card)]" : ""
              }`}
            >
              <span className="text-sm truncate">{r.name}</span>
              <span
                className="text-[10px] font-semibold uppercase tracking-wide ml-2 shrink-0"
                style={{ color: typeColors[r.type] || "var(--text-dim)" }}
              >
                {r.type}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
