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

type RollResult = {
  dice: number[];
  dropped: number;
  total: number;
};

function roll4d6DropLowest(): RollResult {
  const dice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ];
  const sorted = [...dice].sort((a, b) => a - b);
  const dropped = sorted[0];
  const total = sorted[1] + sorted[2] + sorted[3];
  return { dice, dropped, total };
}

function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

// Racial bonuses for common races
const RACES: Record<string, Partial<Record<AbilityName, number>>> = {
  "None": {},
  "Custom (+2/+1)": { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
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
  "Half-Elf": { CHA: 2 },
  "Half-Orc": { STR: 2, CON: 1 },
  "Tiefling": { CHA: 2, INT: 1 },
  "Aasimar": { CHA: 2 },
  "Goliath": { STR: 2, CON: 1 },
  "Tabaxi": { DEX: 2, CHA: 1 },
};

export function StatRoller() {
  const [rolls, setRolls] = useState<(RollResult | null)[]>([null, null, null, null, null, null]);
  const [assignments, setAssignments] = useState<Record<AbilityName, number | null>>({
    STR: null,
    DEX: null,
    CON: null,
    INT: null,
    WIS: null,
    CHA: null,
  });
  const [race, setRace] = useState<string>("None");
  const [isRolling, setIsRolling] = useState(false);
  const [customBonuses, setCustomBonuses] = useState<Record<AbilityName, number>>({
    STR: 0,
    DEX: 0,
    CON: 0,
    INT: 0,
    WIS: 0,
    CHA: 0,
  });

  const rollAll = useCallback(() => {
    setIsRolling(true);
    // Animate the rolling
    let count = 0;
    const interval = setInterval(() => {
      setRolls([
        roll4d6DropLowest(),
        roll4d6DropLowest(),
        roll4d6DropLowest(),
        roll4d6DropLowest(),
        roll4d6DropLowest(),
        roll4d6DropLowest(),
      ]);
      count++;
      if (count >= 10) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 50);

    // Reset assignments
    setAssignments({
      STR: null,
      DEX: null,
      CON: null,
      INT: null,
      WIS: null,
      CHA: null,
    });
  }, []);

  const assignRoll = (rollIndex: number, ability: AbilityName) => {
    // Unassign the roll from any previous ability
    const newAssignments = { ...assignments };
    ABILITIES.forEach((a) => {
      if (newAssignments[a] === rollIndex) {
        newAssignments[a] = null;
      }
    });
    // Unassign any previous roll from this ability
    newAssignments[ability] = rollIndex;
    setAssignments(newAssignments);
  };

  const autoAssign = useCallback(() => {
    // Sort rolls by total, highest first
    const rollsWithIndex = rolls
      .map((r, i) => ({ roll: r, index: i }))
      .filter((r) => r.roll !== null)
      .sort((a, b) => (b.roll?.total || 0) - (a.roll?.total || 0));

    // Simple auto-assign: highest to STR, next to DEX, etc.
    const newAssignments: Record<AbilityName, number | null> = {
      STR: null,
      DEX: null,
      CON: null,
      INT: null,
      WIS: null,
      CHA: null,
    };

    ABILITIES.forEach((ability, i) => {
      if (rollsWithIndex[i]) {
        newAssignments[ability] = rollsWithIndex[i].index;
      }
    });

    setAssignments(newAssignments);
  }, [rolls]);

  const getRacialBonus = useCallback((ability: AbilityName): number => {
    if (race === "Custom (+2/+1)" || race === "Variant Human (+1/+1)") {
      return customBonuses[ability];
    }
    return RACES[race]?.[ability] || 0;
  }, [race, customBonuses]);

  const handleCustomBonus = (ability: AbilityName, value: number) => {
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

  const hasRolls = rolls.some((r) => r !== null);
  const totalStats = ABILITIES.reduce((sum, ability) => {
    const rollIndex = assignments[ability];
    if (rollIndex !== null && rolls[rollIndex]) {
      return sum + rolls[rollIndex]!.total + getRacialBonus(ability);
    }
    return sum;
  }, 0);

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--accent)]">
          Stat Roller (4d6 Drop Lowest)
        </h3>
        {hasRolls && (
          <div className="text-sm font-semibold px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">
            Total: {totalStats}
          </div>
        )}
      </div>

      {/* Roll button */}
      <button
        onClick={rollAll}
        disabled={isRolling}
        className="w-full py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer disabled:opacity-50 mb-5"
      >
        {isRolling ? "Rolling..." : hasRolls ? "Roll Again" : "Roll 4d6 Drop Lowest (x6)"}
      </button>

      {/* Rolled values */}
      {hasRolls && (
        <>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {rolls.map((roll, i) => {
              const isAssigned = ABILITIES.some((a) => assignments[a] === i);
              return (
                <div
                  key={i}
                  className={`p-3 rounded-lg border ${
                    isAssigned
                      ? "bg-[var(--accent)]/10 border-[var(--accent)]"
                      : "bg-[var(--bg)] border-[var(--border)]"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--text)]">
                      {roll?.total || "-"}
                    </div>
                    {roll && (
                      <div className="flex justify-center gap-1 mt-1">
                        {roll.dice.map((d, di) => (
                          <span
                            key={di}
                            className={`text-xs ${
                              d === roll.dropped
                                ? "text-[var(--red)] line-through"
                                : "text-[var(--text-dim)]"
                            }`}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-[10px] text-[var(--text-dim)] mt-1">
                      Roll #{i + 1}
                    </div>
                  </div>
                </div>
              );
            })}
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

          {/* Assignment grid */}
          <div className="space-y-2">
            {ABILITIES.map((ability) => {
              const assignedRoll = assignments[ability] !== null ? rolls[assignments[ability]!] : null;
              const racial = getRacialBonus(ability);
              const finalScore = assignedRoll ? assignedRoll.total + racial : null;
              const mod = finalScore ? getModifier(finalScore) : null;

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

                  {/* Roll selector */}
                  <select
                    value={assignments[ability] ?? ""}
                    onChange={(e) => {
                      if (e.target.value === "") return;
                      assignRoll(parseInt(e.target.value), ability);
                    }}
                    className="flex-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text)] cursor-pointer"
                  >
                    <option value="">Select roll...</option>
                    {rolls.map((roll, i) => (
                      roll && (
                        <option key={i} value={i}>
                          Roll #{i + 1}: {roll.total}
                        </option>
                      )
                    ))}
                  </select>

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
                      +{racial}
                    </div>
                  )}

                  {/* Final score */}
                  {finalScore !== null && (
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-[var(--text-dim)]">Final</div>
                        <div className="font-bold text-lg text-[var(--accent)]">{finalScore}</div>
                      </div>
                      <div className="w-10 text-center">
                        <div className="text-xs text-[var(--text-dim)]">Mod</div>
                        <div className={`font-bold text-lg ${mod! >= 0 ? "text-[var(--green)]" : "text-[var(--red)]"}`}>
                          {formatModifier(mod!)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Auto-assign button */}
          <button
            onClick={autoAssign}
            className="w-full mt-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
          >
            Auto-Assign (Highest First)
          </button>
        </>
      )}

      {/* Rules reminder */}
      <div className="mt-5 pt-4 border-t border-[var(--border)]">
        <div className="text-xs text-[var(--text-dim)]">
          <strong>How 4d6 Drop Lowest works:</strong> Roll 4 six-sided dice, drop the lowest die, and sum the remaining three. Repeat 6 times to generate your ability scores.
        </div>
      </div>
    </div>
  );
}
