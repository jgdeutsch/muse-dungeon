"use client";

import { useState, useCallback } from "react";

type AbilityName = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

const ABILITIES: AbilityName[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

const ABILITY_FULL_NAMES: Record<AbilityName, string> = {
  STR: "Strength",
  DEX: "Dexterity",
  CON: "Constitution",
  INT: "Intelligence",
  WIS: "Wisdom",
  CHA: "Charisma",
};

// Point costs for ability scores 8-15 (official 5e rules)
const POINT_COSTS: Record<number, number> = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
};

// Racial bonuses for common races
const RACES: Record<string, Partial<Record<AbilityName, number>>> = {
  "None": {},
  "Custom (+2/+1)": { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 }, // User picks
  "Human (+1 all)": { STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1 },
  "Variant Human (+1/+1)": { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
  "Dwarf (Hill)": { CON: 2, WIS: 1 },
  "Dwarf (Mountain)": { CON: 2, STR: 2 },
  "Elf (High)": { DEX: 2, INT: 1 },
  "Elf (Wood)": { DEX: 2, WIS: 1 },
  "Elf (Drow)": { DEX: 2, CHA: 1 },
  "Halfling (Lightfoot)": { DEX: 2, CHA: 1 },
  "Halfling (Stout)": { DEX: 2, CON: 1 },
  "Dragonborn": { STR: 2, CHA: 1 },
  "Gnome (Forest)": { INT: 2, DEX: 1 },
  "Gnome (Rock)": { INT: 2, CON: 1 },
  "Half-Elf": { CHA: 2 }, // +1 to two others (simplified)
  "Half-Orc": { STR: 2, CON: 1 },
  "Tiefling": { CHA: 2, INT: 1 },
  "Aasimar": { CHA: 2 },
  "Goliath": { STR: 2, CON: 1 },
  "Tabaxi": { DEX: 2, CHA: 1 },
  "Kenku": { DEX: 2, WIS: 1 },
  "Firbolg": { WIS: 2, STR: 1 },
  "Triton": { STR: 1, CON: 1, CHA: 1 },
};

function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function PointBuyCalculator() {
  const [scores, setScores] = useState<Record<AbilityName, number>>({
    STR: 8,
    DEX: 8,
    CON: 8,
    INT: 8,
    WIS: 8,
    CHA: 8,
  });
  const [race, setRace] = useState<string>("None");
  const [customBonuses, setCustomBonuses] = useState<Record<AbilityName, number>>({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  });

  // Calculate total points spent
  const pointsSpent = ABILITIES.reduce((sum, ability) => sum + POINT_COSTS[scores[ability]], 0);
  const pointsRemaining = 27 - pointsSpent;

  // Get racial bonuses
  const getRacialBonus = useCallback((ability: AbilityName): number => {
    if (race === "Custom (+2/+1)" || race === "Variant Human (+1/+1)") {
      return customBonuses[ability];
    }
    return RACES[race]?.[ability] || 0;
  }, [race, customBonuses]);

  // Calculate final scores with racial bonuses
  const getFinalScore = (ability: AbilityName): number => {
    return scores[ability] + getRacialBonus(ability);
  };

  const handleIncrement = (ability: AbilityName) => {
    const current = scores[ability];
    if (current >= 15) return;
    const costIncrease = POINT_COSTS[current + 1] - POINT_COSTS[current];
    if (pointsRemaining >= costIncrease) {
      setScores({ ...scores, [ability]: current + 1 });
    }
  };

  const handleDecrement = (ability: AbilityName) => {
    const current = scores[ability];
    if (current <= 8) return;
    setScores({ ...scores, [ability]: current - 1 });
  };

  const handleReset = () => {
    setScores({ STR: 8, DEX: 8, CON: 8, INT: 8, WIS: 8, CHA: 8 });
    setRace("None");
    setCustomBonuses({ STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 });
  };

  const handleStandardArray = () => {
    // Standard array: 15, 14, 13, 12, 10, 8
    setScores({ STR: 15, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 8 });
  };

  const handleCustomBonus = (ability: AbilityName, value: number) => {
    // Validate total custom bonuses
    const newBonuses = { ...customBonuses, [ability]: value };
    const total = ABILITIES.reduce((sum, a) => sum + newBonuses[a], 0);

    const maxTotal = race === "Custom (+2/+1)" ? 3 : race === "Variant Human (+1/+1)" ? 2 : 0;

    if (total <= maxTotal) {
      setCustomBonuses(newBonuses);
    }
  };

  const isCustomRace = race === "Custom (+2/+1)" || race === "Variant Human (+1/+1)";
  const customMax = race === "Custom (+2/+1)" ? 2 : race === "Variant Human (+1/+1)" ? 1 : 0;
  const customTotal = ABILITIES.reduce((sum, a) => sum + customBonuses[a], 0);
  const customRemaining = (race === "Custom (+2/+1)" ? 3 : race === "Variant Human (+1/+1)" ? 2 : 0) - customTotal;

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--accent)]">
          Point Buy Calculator
        </h3>
        <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
          pointsRemaining > 0
            ? "bg-[var(--accent)]/20 text-[var(--accent)]"
            : pointsRemaining === 0
            ? "bg-[var(--green-bg)] text-[var(--green)]"
            : "bg-[var(--red-bg)] text-[var(--red)]"
        }`}>
          {pointsRemaining} / 27 points
        </div>
      </div>

      {/* Race selector */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
          Race / Species
        </label>
        <select
          value={race}
          onChange={(e) => {
            setRace(e.target.value);
            setCustomBonuses({ STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 });
          }}
          className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text)] cursor-pointer"
        >
          {Object.keys(RACES).map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {isCustomRace && (
          <div className="mt-2 text-xs text-[var(--text-dim)]">
            Assign bonuses below ({customRemaining} remaining, max +{customMax} per ability)
          </div>
        )}
      </div>

      {/* Ability scores */}
      <div className="space-y-3">
        {ABILITIES.map((ability) => {
          const base = scores[ability];
          const racial = getRacialBonus(ability);
          const final = getFinalScore(ability);
          const mod = getModifier(final);
          const cost = POINT_COSTS[base];

          return (
            <div
              key={ability}
              className="flex items-center gap-3 bg-[var(--bg)] rounded-lg p-3"
            >
              {/* Ability name */}
              <div className="w-12">
                <div className="font-bold text-[var(--text)]">{ability}</div>
                <div className="text-[10px] text-[var(--text-dim)]">
                  {ABILITY_FULL_NAMES[ability]}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(ability)}
                  disabled={base <= 8}
                  className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
                >
                  -
                </button>
                <div className="w-8 text-center font-bold text-lg text-[var(--text)]">
                  {base}
                </div>
                <button
                  onClick={() => handleIncrement(ability)}
                  disabled={base >= 15 || POINT_COSTS[base + 1] - POINT_COSTS[base] > pointsRemaining}
                  className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Custom race bonus selector */}
              {isCustomRace && (
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[var(--text-dim)]">+</span>
                  <select
                    value={customBonuses[ability]}
                    onChange={(e) => handleCustomBonus(ability, parseInt(e.target.value))}
                    className="w-12 bg-[var(--bg-card)] border border-[var(--border)] rounded px-1 py-1 text-xs text-[var(--text)] cursor-pointer"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    {customMax >= 2 && <option value={2}>2</option>}
                  </select>
                </div>
              )}

              {/* Racial bonus (non-custom) */}
              {!isCustomRace && racial > 0 && (
                <div className="text-xs text-[var(--green)] font-medium">
                  +{racial} race
                </div>
              )}

              {/* Final score */}
              <div className="ml-auto flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-[var(--text-dim)]">Final</div>
                  <div className="font-bold text-lg text-[var(--accent)]">{final}</div>
                </div>
                <div className="w-12 text-center">
                  <div className="text-xs text-[var(--text-dim)]">Mod</div>
                  <div className={`font-bold text-lg ${mod >= 0 ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
                    {formatModifier(mod)}
                  </div>
                </div>
                <div className="w-10 text-right text-xs text-[var(--text-dim)]">
                  {cost} pts
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick actions */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={handleStandardArray}
          className="flex-1 py-2 rounded-lg text-sm font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
        >
          Standard Array
        </button>
        <button
          onClick={handleReset}
          className="flex-1 py-2 rounded-lg text-sm font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
        >
          Reset All
        </button>
      </div>

      {/* Point cost reference */}
      <div className="mt-5 pt-4 border-t border-[var(--border)]">
        <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
          Point Cost Reference
        </div>
        <div className="flex flex-wrap gap-2">
          {[8, 9, 10, 11, 12, 13, 14, 15].map((score) => (
            <div key={score} className="text-xs text-[var(--text-dim)]">
              <span className="font-medium text-[var(--text)]">{score}</span>
              <span className="text-[var(--text-dim)]">={POINT_COSTS[score]}pt</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
