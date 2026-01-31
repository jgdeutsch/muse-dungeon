"use client";

import { useState, useMemo } from "react";

// Spell slots by class level for full casters
const FULL_CASTER_SLOTS: Record<number, number[]> = {
  1: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  2: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  4: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  5: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  6: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  7: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  8: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  9: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  10: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  11: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  12: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  13: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  14: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  15: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  16: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
};

// Half casters (Paladin, Ranger)
const HALF_CASTER_SLOTS: Record<number, number[]> = {
  1: [0, 0, 0, 0, 0],
  2: [2, 0, 0, 0, 0],
  3: [3, 0, 0, 0, 0],
  4: [3, 0, 0, 0, 0],
  5: [4, 2, 0, 0, 0],
  6: [4, 2, 0, 0, 0],
  7: [4, 3, 0, 0, 0],
  8: [4, 3, 0, 0, 0],
  9: [4, 3, 2, 0, 0],
  10: [4, 3, 2, 0, 0],
  11: [4, 3, 3, 0, 0],
  12: [4, 3, 3, 0, 0],
  13: [4, 3, 3, 1, 0],
  14: [4, 3, 3, 1, 0],
  15: [4, 3, 3, 2, 0],
  16: [4, 3, 3, 2, 0],
  17: [4, 3, 3, 3, 1],
  18: [4, 3, 3, 3, 1],
  19: [4, 3, 3, 3, 2],
  20: [4, 3, 3, 3, 2],
};

// Third casters (Eldritch Knight, Arcane Trickster)
const THIRD_CASTER_SLOTS: Record<number, number[]> = {
  1: [0, 0, 0, 0],
  2: [0, 0, 0, 0],
  3: [2, 0, 0, 0],
  4: [3, 0, 0, 0],
  5: [3, 0, 0, 0],
  6: [3, 0, 0, 0],
  7: [4, 2, 0, 0],
  8: [4, 2, 0, 0],
  9: [4, 2, 0, 0],
  10: [4, 3, 0, 0],
  11: [4, 3, 0, 0],
  12: [4, 3, 0, 0],
  13: [4, 3, 2, 0],
  14: [4, 3, 2, 0],
  15: [4, 3, 2, 0],
  16: [4, 3, 3, 0],
  17: [4, 3, 3, 0],
  18: [4, 3, 3, 0],
  19: [4, 3, 3, 1],
  20: [4, 3, 3, 1],
};

// Warlock pact slots
const WARLOCK_SLOTS: Record<number, { slots: number; level: number }> = {
  1: { slots: 1, level: 1 },
  2: { slots: 2, level: 1 },
  3: { slots: 2, level: 2 },
  4: { slots: 2, level: 2 },
  5: { slots: 2, level: 3 },
  6: { slots: 2, level: 3 },
  7: { slots: 2, level: 4 },
  8: { slots: 2, level: 4 },
  9: { slots: 2, level: 5 },
  10: { slots: 2, level: 5 },
  11: { slots: 3, level: 5 },
  12: { slots: 3, level: 5 },
  13: { slots: 3, level: 5 },
  14: { slots: 3, level: 5 },
  15: { slots: 3, level: 5 },
  16: { slots: 3, level: 5 },
  17: { slots: 4, level: 5 },
  18: { slots: 4, level: 5 },
  19: { slots: 4, level: 5 },
  20: { slots: 4, level: 5 },
};

type CasterType = "full" | "half" | "third" | "warlock";

const CASTER_CLASSES: Record<string, CasterType> = {
  bard: "full",
  cleric: "full",
  druid: "full",
  sorcerer: "full",
  wizard: "full",
  paladin: "half",
  ranger: "half",
  warlock: "warlock",
  artificer: "half",
  "eldritch knight": "third",
  "arcane trickster": "third",
  fighter: "third",
  rogue: "third",
};

export function SpellSlotCalculator({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(5);

  // Determine caster type from class name
  const normalizedClass = className.toLowerCase().replace(/ 5e$/i, "").trim();
  const casterType = CASTER_CLASSES[normalizedClass] || "full";

  const slots = useMemo(() => {
    if (casterType === "warlock") {
      const w = WARLOCK_SLOTS[level];
      return { pact: w, regular: [] };
    }

    let slotTable: Record<number, number[]>;
    switch (casterType) {
      case "half":
        slotTable = HALF_CASTER_SLOTS;
        break;
      case "third":
        slotTable = THIRD_CASTER_SLOTS;
        break;
      default:
        slotTable = FULL_CASTER_SLOTS;
    }

    return { regular: slotTable[level] || [], pact: null };
  }, [level, casterType]);

  // Calculate spell save DC and attack bonus
  const spellcastingAbility = useMemo(() => {
    switch (normalizedClass) {
      case "wizard":
      case "artificer":
      case "eldritch knight":
      case "arcane trickster":
      case "fighter":
      case "rogue":
        return "Intelligence";
      case "cleric":
      case "druid":
      case "ranger":
        return "Wisdom";
      case "bard":
      case "paladin":
      case "sorcerer":
      case "warlock":
        return "Charisma";
      default:
        return "Charisma";
    }
  }, [normalizedClass]);

  const profBonus = Math.ceil(level / 4) + 1;

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        Spell Slot Calculator
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--accent)]">
            Spell Slots
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Class Info */}
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3 mb-4">
          <div className="text-sm font-semibold capitalize">{normalizedClass}</div>
          <div className="text-xs text-[var(--text-dim)]">
            {casterType === "full"
              ? "Full Caster"
              : casterType === "half"
              ? "Half Caster"
              : casterType === "third"
              ? "Third Caster"
              : "Pact Magic"}{" "}
            • {spellcastingAbility}-based
          </div>
        </div>

        {/* Level Selector */}
        <div className="mb-5">
          <label className="block text-xs text-[var(--text-dim)] mb-1">Class Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                Level {n}
              </option>
            ))}
          </select>
        </div>

        {/* Spell Slots Display */}
        {casterType === "warlock" && slots.pact ? (
          <div className="bg-[var(--accent-light)] border border-[var(--accent)] rounded-lg p-4 mb-4">
            <div className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
              Pact Magic
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{slots.pact.slots}</div>
                <div className="text-xs text-[var(--text-dim)]">Pact Slots</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">Level {slots.pact.level}</div>
                <div className="text-xs text-[var(--text-dim)]">Slot Level</div>
              </div>
            </div>
            <div className="text-xs text-[var(--text-dim)] mt-3 pt-3 border-t border-[var(--border)]">
              Pact slots recharge on a short rest
            </div>
          </div>
        ) : (
          <div className="mb-4">
            <div className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
              Spell Slots per Long Rest
            </div>
            <div className="grid grid-cols-3 gap-2">
              {slots.regular.map((count, idx) => (
                count > 0 && (
                  <div
                    key={idx}
                    className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3 text-center"
                  >
                    <div className="text-xs text-[var(--text-dim)]">Level {idx + 1}</div>
                    <div className="text-xl font-bold">{count}</div>
                  </div>
                )
              ))}
            </div>
            {slots.regular.every((c) => c === 0) && (
              <div className="text-center text-[var(--text-dim)] py-4">
                No spell slots at this level
              </div>
            )}
          </div>
        )}

        {/* Spellcasting Stats */}
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4">
          <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-3">
            Spellcasting Reference
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-xs text-[var(--text-dim)]">Ability</div>
              <div className="font-semibold">{spellcastingAbility}</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)]">Prof. Bonus</div>
              <div className="font-semibold">+{profBonus}</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)]">Save DC</div>
              <div className="font-semibold">8 + Prof + {spellcastingAbility.slice(0, 3)} mod</div>
            </div>
            <div>
              <div className="text-xs text-[var(--text-dim)]">Attack Bonus</div>
              <div className="font-semibold">Prof + {spellcastingAbility.slice(0, 3)} mod</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
