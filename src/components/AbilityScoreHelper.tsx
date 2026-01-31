"use client";

import { useState, useMemo } from "react";

type RaceBonus = {
  ability: string;
  bonus: number;
};

// Common race ability score bonuses
const RACE_BONUSES: Record<string, RaceBonus[]> = {
  "human": [{ ability: "All", bonus: 1 }],
  "variant human": [{ ability: "Choice (2)", bonus: 1 }, { ability: "Choice", bonus: 1 }],
  "elf": [{ ability: "Dexterity", bonus: 2 }],
  "high elf": [{ ability: "Dexterity", bonus: 2 }, { ability: "Intelligence", bonus: 1 }],
  "wood elf": [{ ability: "Dexterity", bonus: 2 }, { ability: "Wisdom", bonus: 1 }],
  "dark elf": [{ ability: "Dexterity", bonus: 2 }, { ability: "Charisma", bonus: 1 }],
  "drow": [{ ability: "Dexterity", bonus: 2 }, { ability: "Charisma", bonus: 1 }],
  "dwarf": [{ ability: "Constitution", bonus: 2 }],
  "hill dwarf": [{ ability: "Constitution", bonus: 2 }, { ability: "Wisdom", bonus: 1 }],
  "mountain dwarf": [{ ability: "Constitution", bonus: 2 }, { ability: "Strength", bonus: 2 }],
  "halfling": [{ ability: "Dexterity", bonus: 2 }],
  "lightfoot halfling": [{ ability: "Dexterity", bonus: 2 }, { ability: "Charisma", bonus: 1 }],
  "stout halfling": [{ ability: "Dexterity", bonus: 2 }, { ability: "Constitution", bonus: 1 }],
  "gnome": [{ ability: "Intelligence", bonus: 2 }],
  "forest gnome": [{ ability: "Intelligence", bonus: 2 }, { ability: "Dexterity", bonus: 1 }],
  "rock gnome": [{ ability: "Intelligence", bonus: 2 }, { ability: "Constitution", bonus: 1 }],
  "half-elf": [{ ability: "Charisma", bonus: 2 }, { ability: "Choice (2)", bonus: 1 }],
  "half-orc": [{ ability: "Strength", bonus: 2 }, { ability: "Constitution", bonus: 1 }],
  "tiefling": [{ ability: "Charisma", bonus: 2 }, { ability: "Intelligence", bonus: 1 }],
  "dragonborn": [{ ability: "Strength", bonus: 2 }, { ability: "Charisma", bonus: 1 }],
  "aasimar": [{ ability: "Charisma", bonus: 2 }],
  "goliath": [{ ability: "Strength", bonus: 2 }, { ability: "Constitution", bonus: 1 }],
  "tabaxi": [{ ability: "Dexterity", bonus: 2 }, { ability: "Charisma", bonus: 1 }],
  "kenku": [{ ability: "Dexterity", bonus: 2 }, { ability: "Wisdom", bonus: 1 }],
  "lizardfolk": [{ ability: "Constitution", bonus: 2 }, { ability: "Wisdom", bonus: 1 }],
  "firbolg": [{ ability: "Wisdom", bonus: 2 }, { ability: "Strength", bonus: 1 }],
  "yuan-ti": [{ ability: "Charisma", bonus: 2 }, { ability: "Intelligence", bonus: 1 }],
  "tortle": [{ ability: "Strength", bonus: 2 }, { ability: "Wisdom", bonus: 1 }],
  "aarakocra": [{ ability: "Dexterity", bonus: 2 }, { ability: "Wisdom", bonus: 1 }],
  "genasi": [{ ability: "Constitution", bonus: 2 }],
  "custom lineage": [{ ability: "Choice", bonus: 2 }],
};

const ABILITIES = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

// Class recommendations based on primary ability scores
const CLASS_RECOMMENDATIONS: Record<string, string[]> = {
  Strength: ["Fighter", "Barbarian", "Paladin"],
  Dexterity: ["Rogue", "Monk", "Ranger", "Fighter"],
  Constitution: ["Any class benefits from Constitution"],
  Intelligence: ["Wizard", "Artificer"],
  Wisdom: ["Cleric", "Druid", "Monk", "Ranger"],
  Charisma: ["Bard", "Sorcerer", "Warlock", "Paladin"],
};

export function AbilityScoreHelper({ raceName }: { raceName: string }) {
  const [open, setOpen] = useState(false);
  const [baseScores, setBaseScores] = useState<Record<string, number>>({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  // Normalize race name and find bonuses
  const normalizedRace = raceName.toLowerCase().replace(/ 5e$/i, "").trim();
  const raceBonuses = useMemo(() => {
    // Try exact match first
    if (RACE_BONUSES[normalizedRace]) return RACE_BONUSES[normalizedRace];

    // Try partial match
    for (const [race, bonuses] of Object.entries(RACE_BONUSES)) {
      if (normalizedRace.includes(race) || race.includes(normalizedRace)) {
        return bonuses;
      }
    }

    // Default: Tasha's rules (any +2/+1 or +1/+1/+1)
    return [{ ability: "Choice", bonus: 2 }, { ability: "Choice", bonus: 1 }];
  }, [normalizedRace]);

  // Calculate final scores
  const finalScores = useMemo(() => {
    const scores = { ...baseScores };

    for (const bonus of raceBonuses) {
      if (bonus.ability === "All") {
        for (const ab of ABILITIES) {
          scores[ab] = (scores[ab] || 10) + bonus.bonus;
        }
      } else if (!bonus.ability.includes("Choice")) {
        scores[bonus.ability] = (scores[bonus.ability] || 10) + bonus.bonus;
      }
    }

    return scores;
  }, [baseScores, raceBonuses]);

  // Get modifier
  const getMod = (score: number) => {
    const m = Math.floor((score - 10) / 2);
    return m >= 0 ? `+${m}` : `${m}`;
  };

  // Get recommended classes based on bonuses
  const recommendedClasses = useMemo(() => {
    const classes = new Set<string>();
    for (const bonus of raceBonuses) {
      if (bonus.ability !== "All" && !bonus.ability.includes("Choice") && bonus.bonus >= 2) {
        const recs = CLASS_RECOMMENDATIONS[bonus.ability];
        if (recs) recs.forEach((c) => classes.add(c));
      }
    }
    return Array.from(classes);
  }, [raceBonuses]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--green)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        Ability Score Calculator
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
          <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--green)]">
            Ability Scores
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Race Bonuses Display */}
        <div className="bg-[var(--green-bg)] border border-[var(--green-border)] rounded-lg p-3 mb-4">
          <div className="text-xs font-semibold text-[var(--green)] uppercase tracking-wider mb-2">
            Racial Bonuses
          </div>
          <div className="flex flex-wrap gap-2">
            {raceBonuses.map((bonus, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-[var(--bg)] rounded text-sm"
              >
                {bonus.ability} +{bonus.bonus}
              </span>
            ))}
          </div>
        </div>

        {/* Base Score Inputs */}
        <div className="mb-5">
          <div className="text-xs text-[var(--text-dim)] mb-2">
            Enter your base scores (before racial bonuses):
          </div>
          <div className="grid grid-cols-3 gap-2">
            {ABILITIES.map((ab) => (
              <div key={ab} className="text-center">
                <label className="block text-xs text-[var(--text-dim)] mb-1">
                  {ab.slice(0, 3)}
                </label>
                <input
                  type="number"
                  min={3}
                  max={18}
                  value={baseScores[ab]}
                  onChange={(e) =>
                    setBaseScores((prev) => ({
                      ...prev,
                      [ab]: Math.min(18, Math.max(3, parseInt(e.target.value) || 10)),
                    }))
                  }
                  className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-2 py-1 text-center text-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Final Scores */}
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4 mb-4">
          <div className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
            Final Ability Scores
          </div>
          <div className="grid grid-cols-6 gap-2 text-center">
            {ABILITIES.map((ab) => {
              const baseVal = baseScores[ab];
              const finalVal = finalScores[ab];
              const increased = finalVal > baseVal;

              return (
                <div key={ab}>
                  <div className="text-xs text-[var(--text-dim)] uppercase">
                    {ab.slice(0, 3)}
                  </div>
                  <div
                    className={`text-lg font-bold ${
                      increased ? "text-[var(--green)]" : ""
                    }`}
                  >
                    {finalVal}
                  </div>
                  <div className="text-xs text-[var(--text-dim)]">
                    {getMod(finalVal)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Class Recommendations */}
        {recommendedClasses.length > 0 && (
          <div className="text-xs text-[var(--text-dim)] border-t border-[var(--border)] pt-3">
            <strong>Good class fits:</strong> {recommendedClasses.join(", ")}
          </div>
        )}

        {/* Tasha's Note */}
        <div className="text-xs text-[var(--text-dim)] mt-3 pt-3 border-t border-[var(--border)]">
          <strong>Tasha's Rules:</strong> Any race can use +2/+1 or +1/+1/+1 to any abilities instead of fixed bonuses.
        </div>
      </div>
    </div>
  );
}
