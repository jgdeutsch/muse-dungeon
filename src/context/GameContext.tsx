"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type GameEntry = {
  name: string;
  slug?: string;
  category: "condition" | "spell" | "spell-known" | "item" | "feat" | "race";
};

export type SpellSlots = {
  [level: string]: { max: number; used: number };
};

export type GameCharacter = {
  id: string;
  name: string;
  className: string;
  classSlug: string;
  type: "player" | "npc";
  createdAt: number;
  level: number;
  hp: string;
  hpMax: string;
  hpTemp: string;
  ac: string;
  notes: string;
  conditions: GameEntry[];
  activeEffects: GameEntry[];
  spellsKnown: GameEntry[];
  items: GameEntry[];
  spellSlots: SpellSlots;
};

const DEFAULTS = { level: 1, hp: "", hpMax: "", hpTemp: "", ac: "", notes: "", conditions: [], activeEffects: [], spellsKnown: [], items: [], spellSlots: {} };

type GameState = {
  characters: GameCharacter[];
  addCharacter: (char: Pick<GameCharacter, "name" | "className" | "classSlug" | "type"> & Partial<Pick<GameCharacter, "hp" | "hpMax" | "ac" | "level">>) => void;
  updateCharacter: (id: string, updates: Partial<GameCharacter>) => void;
  removeCharacter: (id: string) => void;
  addEntryToCharacter: (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", entry: GameEntry) => void;
  removeEntryFromCharacter: (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", index: number) => void;
};

const GameContext = createContext<GameState>({
  characters: [],
  addCharacter: () => {},
  updateCharacter: () => {},
  removeCharacter: () => {},
  addEntryToCharacter: () => {},
  removeEntryFromCharacter: () => {},
});

const STORAGE_KEY = "muse-dungeon-game";

export function GameProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<GameCharacter[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const migrated = JSON.parse(raw).map((c: any) => ({
          ...DEFAULTS,
          ...c,
        })) as GameCharacter[];
        setCharacters(migrated);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    }
  }, [characters, hydrated]);

  const addCharacter = useCallback(
    (char: Pick<GameCharacter, "name" | "className" | "classSlug" | "type"> & Partial<Pick<GameCharacter, "hp" | "hpMax" | "ac" | "level">>) => {
      setCharacters((prev) => [
        ...prev,
        { ...DEFAULTS, ...char, id: crypto.randomUUID(), createdAt: Date.now() },
      ]);
    },
    []
  );

  const updateCharacter = useCallback((id: string, updates: Partial<GameCharacter>) => {
    setCharacters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
  }, []);

  const removeCharacter = useCallback((id: string) => {
    setCharacters((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const addEntryToCharacter = useCallback(
    (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", entry: GameEntry) => {
      setCharacters((prev) =>
        prev.map((c) =>
          c.id === charId ? { ...c, [field]: [...c[field], entry] } : c
        )
      );
    },
    []
  );

  const removeEntryFromCharacter = useCallback(
    (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", index: number) => {
      setCharacters((prev) =>
        prev.map((c) =>
          c.id === charId ? { ...c, [field]: c[field].filter((_, i) => i !== index) } : c
        )
      );
    },
    []
  );

  return (
    <GameContext.Provider
      value={{ characters, addCharacter, updateCharacter, removeCharacter, addEntryToCharacter, removeEntryFromCharacter }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
