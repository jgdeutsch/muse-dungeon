"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type GameCharacter = {
  id: string;
  name: string;
  className: string;
  classSlug: string;
  type: "player" | "npc";
  createdAt: number;
};

type GameState = {
  characters: GameCharacter[];
  addCharacter: (char: Omit<GameCharacter, "id" | "createdAt">) => void;
  removeCharacter: (id: string) => void;
};

const GameContext = createContext<GameState>({
  characters: [],
  addCharacter: () => {},
  removeCharacter: () => {},
});

const STORAGE_KEY = "muse-dungeon-game";

export function GameProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<GameCharacter[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCharacters(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    }
  }, [characters, hydrated]);

  const addCharacter = useCallback(
    (char: Omit<GameCharacter, "id" | "createdAt">) => {
      setCharacters((prev) => [
        ...prev,
        { ...char, id: crypto.randomUUID(), createdAt: Date.now() },
      ]);
    },
    []
  );

  const removeCharacter = useCallback((id: string) => {
    setCharacters((prev) => prev.filter((c) => c.id !== id));
  }, []);

  return (
    <GameContext.Provider value={{ characters, addCharacter, removeCharacter }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
