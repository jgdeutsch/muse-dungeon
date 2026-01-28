"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type GameCharacter = {
  id: string;
  name: string;
  className: string;
  classSlug: string;
  type: "player" | "npc";
  createdAt: number;
  level: number;
  hp: string;
  ac: string;
  notes: string;
};

type GameState = {
  characters: GameCharacter[];
  addCharacter: (char: Omit<GameCharacter, "id" | "createdAt" | "level" | "hp" | "ac" | "notes">) => void;
  updateCharacter: (id: string, updates: Partial<GameCharacter>) => void;
  removeCharacter: (id: string) => void;
};

const GameContext = createContext<GameState>({
  characters: [],
  addCharacter: () => {},
  updateCharacter: () => {},
  removeCharacter: () => {},
});

const STORAGE_KEY = "muse-dungeon-game";

export function GameProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<GameCharacter[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Migrate old entries missing new fields
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const migrated = parsed.map((c: any) => ({
          level: 1,
          hp: "",
          ac: "",
          notes: "",
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
    (char: Omit<GameCharacter, "id" | "createdAt" | "level" | "hp" | "ac" | "notes">) => {
      setCharacters((prev) => [
        ...prev,
        { ...char, id: crypto.randomUUID(), createdAt: Date.now(), level: 1, hp: "", ac: "", notes: "" },
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

  return (
    <GameContext.Provider value={{ characters, addCharacter, updateCharacter, removeCharacter }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
