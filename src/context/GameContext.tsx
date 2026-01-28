"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "./AuthContext";

export type GameEntry = {
  name: string;
  slug?: string;
  category: "condition" | "spell" | "spell-known" | "item" | "feat" | "race";
};

export type SpellSlots = {
  [level: string]: { max: number; used: number };
};

export type DeathSaves = {
  successes: number; // 0-3
  failures: number;  // 0-3
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
  deathSaves: DeathSaves;
};

const DEFAULTS = { level: 1, hp: "", hpMax: "", hpTemp: "", ac: "", notes: "", conditions: [], activeEffects: [], spellsKnown: [], items: [], spellSlots: {}, deathSaves: { successes: 0, failures: 0 } };

type Toast = { id: number; message: string };

type GameState = {
  characters: GameCharacter[];
  toasts: Toast[];
  addCharacter: (char: Pick<GameCharacter, "name" | "className" | "classSlug" | "type"> & Partial<Pick<GameCharacter, "hp" | "hpMax" | "ac" | "level">>) => void;
  updateCharacter: (id: string, updates: Partial<GameCharacter>) => void;
  removeCharacter: (id: string) => void;
  addEntryToCharacter: (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", entry: GameEntry) => void;
  removeEntryFromCharacter: (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", index: number) => void;
};

const GameContext = createContext<GameState>({
  characters: [],
  toasts: [],
  addCharacter: () => {},
  updateCharacter: () => {},
  removeCharacter: () => {},
  addEntryToCharacter: () => {},
  removeEntryFromCharacter: () => {},
});

const STORAGE_KEY = "muse-dungeon-game";

export function GameProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [characters, setCharacters] = useState<GameCharacter[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastId = useRef(0);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Toast helper — shows a brief message
  const toast = useCallback((message: string) => {
    const id = ++toastId.current;
    setToasts((prev) => [...prev.slice(-4), { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2000);
  }, []);

  // Hydrate from localStorage first, then overlay Firestore if signed in
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

  // Load from Firestore when user signs in
  useEffect(() => {
    if (!user || !hydrated) return;
    (async () => {
      try {
        const snap = await getDoc(doc(db, "games", user.uid));
        if (snap.exists()) {
          const remote = snap.data().characters as GameCharacter[];
          if (remote && remote.length > 0) {
            // Merge: if local is empty, use remote. Otherwise keep local (user was working offline).
            setCharacters((local) => {
              if (local.length === 0) return remote.map((c) => ({ ...DEFAULTS, ...c }));
              return local;
            });
            toast("Game loaded from cloud");
          }
        }
      } catch (e) {
        console.error("Firestore load error:", e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, hydrated]);

  // Save to localStorage immediately, debounce Firestore writes
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));

    if (user) {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(async () => {
        try {
          await setDoc(doc(db, "games", user.uid), { characters, updatedAt: Date.now() });
        } catch (e) {
          console.error("Firestore save error:", e);
        }
      }, 1500);
    }
  }, [characters, hydrated, user]);

  const addCharacter = useCallback(
    (char: Pick<GameCharacter, "name" | "className" | "classSlug" | "type"> & Partial<Pick<GameCharacter, "hp" | "hpMax" | "ac" | "level">>) => {
      setCharacters((prev) => [
        ...prev,
        { ...DEFAULTS, ...char, id: crypto.randomUUID(), createdAt: Date.now() },
      ]);
      toast(`${char.name} added`);
    },
    [toast]
  );

  const updateCharacter = useCallback((id: string, updates: Partial<GameCharacter>) => {
    setCharacters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c))
    );
    // Debounced toast for field edits — don't spam on every keystroke
  }, []);

  const removeCharacter = useCallback((id: string) => {
    setCharacters((prev) => {
      const removed = prev.find((c) => c.id === id);
      if (removed) toast(`${removed.name} removed`);
      return prev.filter((c) => c.id !== id);
    });
  }, [toast]);

  const addEntryToCharacter = useCallback(
    (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", entry: GameEntry) => {
      setCharacters((prev) =>
        prev.map((c) =>
          c.id === charId ? { ...c, [field]: [...c[field], entry] } : c
        )
      );
      toast(`${entry.name} added`);
    },
    [toast]
  );

  const removeEntryFromCharacter = useCallback(
    (charId: string, field: "conditions" | "activeEffects" | "spellsKnown" | "items", index: number) => {
      setCharacters((prev) => {
        const char = prev.find((c) => c.id === charId);
        if (char) {
          const entry = char[field][index];
          if (entry) toast(`${entry.name} removed`);
        }
        return prev.map((c) =>
          c.id === charId ? { ...c, [field]: c[field].filter((_, i) => i !== index) } : c
        );
      });
    },
    [toast]
  );

  return (
    <GameContext.Provider
      value={{ characters, toasts, addCharacter, updateCharacter, removeCharacter, addEntryToCharacter, removeEntryFromCharacter }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
