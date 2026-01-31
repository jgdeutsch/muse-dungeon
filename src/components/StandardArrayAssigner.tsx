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

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

// Racial bonuses
const RACES: Record<string, Partial<Record<AbilityName, number>>> = {
  "None": {},
  "Custom (+2/+1)": {},
  "Human (+1 all)": { STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1 },
  "Variant Human (+1/+1)": {},
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

// Recommended assignments per class
const CLASS_RECOMMENDATIONS: Record<string, AbilityName[]> = {
  "Barbarian": ["STR", "CON", "DEX", "WIS", "CHA", "INT"],
  "Bard": ["CHA", "DEX", "CON", "WIS", "INT", "STR"],
  "Cleric": ["WIS", "CON", "STR", "DEX", "CHA", "INT"],
  "Druid": ["WIS", "CON", "DEX", "INT", "CHA", "STR"],
  "Fighter (STR)": ["STR", "CON", "DEX", "WIS", "CHA", "INT"],
  "Fighter (DEX)": ["DEX", "CON", "STR", "WIS", "CHA", "INT"],
  "Monk": ["DEX", "WIS", "CON", "STR", "CHA", "INT"],
  "Paladin": ["STR", "CHA", "CON", "WIS", "DEX", "INT"],
  "Ranger": ["DEX", "WIS", "CON", "INT", "STR", "CHA"],
  "Rogue": ["DEX", "CON", "INT", "WIS", "CHA", "STR"],
  "Sorcerer": ["CHA", "CON", "DEX", "WIS", "INT", "STR"],
  "Warlock": ["CHA", "CON", "DEX", "WIS", "INT", "STR"],
  "Wizard": ["INT", "CON", "DEX", "WIS", "CHA", "STR"],
  "Artificer": ["INT", "CON", "DEX", "WIS", "CHA", "STR"],
};

function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function StandardArrayAssigner() {
  const [assignments, setAssignments] = useState<Record<AbilityName, number | null>>({
    STR: null,
    DEX: null,
    CON: null,
    INT: null,
    WIS: null,
    CHA: null,
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

  const getUsedValues = (): number[] => {
    return Object.values(assignments).filter((v): v is number => v !== null);
  };

  const getAvailableValues = (): number[] => {
    const used = getUsedValues();
    return STANDARD_ARRAY.filter((v) => !used.includes(v));
  };

  const assignValue = (ability: AbilityName, value: number | null) => {
    // If assigning a new value, make sure to unassign it from any other ability
    const newAssignments = { ...assignments };
    if (value !== null) {
      ABILITIES.forEach((a) => {
        if (newAssignments[a] === value) {
          newAssignments[a] = null;
        }
      });
    }
    newAssignments[ability] = value;
    setAssignments(newAssignments);
  };

  const applyClassRecommendation = (className: string) => {
    const order = CLASS_RECOMMENDATIONS[className];
    if (!order) return;

    const newAssignments: Record<AbilityName, number | null> = {
      STR: null,
      DEX: null,
      CON: null,
      INT: null,
      WIS: null,
      CHA: null,
    };

    order.forEach((ability, i) => {
      newAssignments[ability] = STANDARD_ARRAY[i];
    });

    setAssignments(newAssignments);
  };

  const resetAssignments = () => {
    setAssignments({
      STR: null,
      DEX: null,
      CON: null,
      INT: null,
      WIS: null,
      CHA: null,
    });
  };

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

  const allAssigned = ABILITIES.every((a) => assignments[a] !== null);

  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--accent)]">
          Standard Array Assigner
        </h3>
        <div className="text-sm font-semibold px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">
          15, 14, 13, 12, 10, 8
        </div>
      </div>

      {/* Class recommendations */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
          Quick Assign by Class
        </label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(CLASS_RECOMMENDATIONS).map((className) => (
            <button
              key={className}
              onClick={() => applyClassRecommendation(className)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] transition-all cursor-pointer"
            >
              {className}
            </button>
          ))}
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

      {/* Available values */}
      {!allAssigned && (
        <div className="mb-4">
          <div className="text-xs font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
            Available Values
          </div>
          <div className="flex gap-2">
            {getAvailableValues().map((v) => (
              <div
                key={v}
                className="w-10 h-10 rounded-lg bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center font-bold text-[var(--text)]"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assignment grid */}
      <div className="space-y-2">
        {ABILITIES.map((ability) => {
          const base = assignments[ability];
          const racial = getRacialBonus(ability);
          const final = base !== null ? base + racial : null;
          const mod = final !== null ? getModifier(final) : null;

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

              {/* Value selector */}
              <select
                value={base ?? ""}
                onChange={(e) => {
                  const val = e.target.value === "" ? null : parseInt(e.target.value);
                  assignValue(ability, val);
                }}
                className="flex-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm text-[var(--text)] cursor-pointer"
              >
                <option value="">Select value...</option>
                {STANDARD_ARRAY.map((v) => (
                  <option
                    key={v}
                    value={v}
                    disabled={getUsedValues().includes(v) && assignments[ability] !== v}
                  >
                    {v}
                  </option>
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
              {final !== null && (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-[var(--text-dim)]">Final</div>
                    <div className="font-bold text-lg text-[var(--accent)]">{final}</div>
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

      {/* Reset button */}
      <button
        onClick={resetAssignments}
        className="w-full mt-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
      >
        Reset Assignments
      </button>

      {/* Info */}
      <div className="mt-5 pt-4 border-t border-[var(--border)]">
        <div className="text-xs text-[var(--text-dim)]">
          <strong>Standard Array:</strong> A balanced set of ability scores (15, 14, 13, 12, 10, 8) for fair, predictable character creation. Assign each value to one ability score.
        </div>
      </div>
    </div>
  );
}
