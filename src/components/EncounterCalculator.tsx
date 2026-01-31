"use client";

import { useState, useMemo } from "react";

type MonsterInfo = {
  name: string;
  challengeRating: string;
  hitPoints: string;
  armorClass: string;
};

// XP by CR from DMG
const XP_BY_CR: Record<string, number> = {
  "0": 10,
  "1/8": 25,
  "1/4": 50,
  "1/2": 100,
  "1": 200,
  "2": 450,
  "3": 700,
  "4": 1100,
  "5": 1800,
  "6": 2300,
  "7": 2900,
  "8": 3900,
  "9": 5000,
  "10": 5900,
  "11": 7200,
  "12": 8400,
  "13": 10000,
  "14": 11500,
  "15": 13000,
  "16": 15000,
  "17": 18000,
  "18": 20000,
  "19": 22000,
  "20": 25000,
  "21": 33000,
  "22": 41000,
  "23": 50000,
  "24": 62000,
  "25": 75000,
  "26": 90000,
  "27": 105000,
  "28": 120000,
  "29": 135000,
  "30": 155000,
};

// XP thresholds by character level
const XP_THRESHOLDS: Record<number, { easy: number; medium: number; hard: number; deadly: number }> = {
  1: { easy: 25, medium: 50, hard: 75, deadly: 100 },
  2: { easy: 50, medium: 100, hard: 150, deadly: 200 },
  3: { easy: 75, medium: 150, hard: 225, deadly: 400 },
  4: { easy: 125, medium: 250, hard: 375, deadly: 500 },
  5: { easy: 250, medium: 500, hard: 750, deadly: 1100 },
  6: { easy: 300, medium: 600, hard: 900, deadly: 1400 },
  7: { easy: 350, medium: 750, hard: 1100, deadly: 1700 },
  8: { easy: 450, medium: 900, hard: 1400, deadly: 2100 },
  9: { easy: 550, medium: 1100, hard: 1600, deadly: 2400 },
  10: { easy: 600, medium: 1200, hard: 1900, deadly: 2800 },
  11: { easy: 800, medium: 1600, hard: 2400, deadly: 3600 },
  12: { easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
  13: { easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
  14: { easy: 1250, medium: 2500, hard: 3800, deadly: 5700 },
  15: { easy: 1400, medium: 2800, hard: 4300, deadly: 6400 },
  16: { easy: 1600, medium: 3200, hard: 4800, deadly: 7200 },
  17: { easy: 2000, medium: 3900, hard: 5900, deadly: 8800 },
  18: { easy: 2100, medium: 4200, hard: 6300, deadly: 9500 },
  19: { easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
  20: { easy: 2800, medium: 5700, hard: 8500, deadly: 12700 },
};

// Multipliers for multiple monsters
function getMultiplier(monsterCount: number, partySize: number): number {
  const adjustedCount = partySize < 3 ? monsterCount + 1 : partySize > 5 ? Math.max(1, monsterCount - 1) : monsterCount;

  if (adjustedCount === 1) return 1;
  if (adjustedCount === 2) return 1.5;
  if (adjustedCount <= 6) return 2;
  if (adjustedCount <= 10) return 2.5;
  if (adjustedCount <= 14) return 3;
  return 4;
}

export function EncounterCalculator({ monster }: { monster: MonsterInfo }) {
  const [open, setOpen] = useState(false);
  const [partySize, setPartySize] = useState(4);
  const [partyLevel, setPartyLevel] = useState(5);
  const [monsterCount, setMonsterCount] = useState(1);

  const calculation = useMemo(() => {
    const baseXP = XP_BY_CR[monster.challengeRating] || 0;
    const totalBaseXP = baseXP * monsterCount;
    const multiplier = getMultiplier(monsterCount, partySize);
    const adjustedXP = Math.floor(totalBaseXP * multiplier);

    const thresholds = XP_THRESHOLDS[partyLevel] || XP_THRESHOLDS[1];
    const partyEasy = thresholds.easy * partySize;
    const partyMedium = thresholds.medium * partySize;
    const partyHard = thresholds.hard * partySize;
    const partyDeadly = thresholds.deadly * partySize;

    let difficulty: "Trivial" | "Easy" | "Medium" | "Hard" | "Deadly";
    let color: string;

    if (adjustedXP >= partyDeadly) {
      difficulty = "Deadly";
      color = "var(--red)";
    } else if (adjustedXP >= partyHard) {
      difficulty = "Hard";
      color = "var(--yellow)";
    } else if (adjustedXP >= partyMedium) {
      difficulty = "Medium";
      color = "var(--accent)";
    } else if (adjustedXP >= partyEasy) {
      difficulty = "Easy";
      color = "var(--green)";
    } else {
      difficulty = "Trivial";
      color = "var(--text-dim)";
    }

    return {
      baseXP,
      totalBaseXP,
      multiplier,
      adjustedXP,
      difficulty,
      color,
      thresholds: { easy: partyEasy, medium: partyMedium, hard: partyHard, deadly: partyDeadly },
    };
  }, [monster.challengeRating, monsterCount, partySize, partyLevel]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        Encounter Calculator
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
            Encounter Calculator
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Monster Info */}
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3 mb-4">
          <div className="text-sm font-semibold">{monster.name}</div>
          <div className="text-xs text-[var(--text-dim)]">
            CR {monster.challengeRating} ({XP_BY_CR[monster.challengeRating]?.toLocaleString() || "?"} XP each)
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div>
            <label className="block text-xs text-[var(--text-dim)] mb-1">Party Size</label>
            <select
              value={partySize}
              onChange={(e) => setPartySize(Number(e.target.value))}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "player" : "players"}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-[var(--text-dim)] mb-1">Avg. Level</label>
            <select
              value={partyLevel}
              onChange={(e) => setPartyLevel(Number(e.target.value))}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>Level {n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-[var(--text-dim)] mb-1"># Monsters</label>
            <select
              value={monsterCount}
              onChange={(e) => setMonsterCount(Number(e.target.value))}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Result */}
        <div
          className="rounded-lg p-4 mb-4 border"
          style={{
            backgroundColor: `color-mix(in srgb, ${calculation.color} 15%, var(--bg))`,
            borderColor: calculation.color,
          }}
        >
          <div className="text-2xl font-bold font-['Cinzel'] mb-1" style={{ color: calculation.color }}>
            {calculation.difficulty}
          </div>
          <div className="text-sm text-[var(--text-dim)]">
            {calculation.adjustedXP.toLocaleString()} adjusted XP
            {calculation.multiplier > 1 && (
              <span className="text-xs ml-1">({calculation.totalBaseXP.toLocaleString()} &times; {calculation.multiplier})</span>
            )}
          </div>
        </div>

        {/* XP Thresholds */}
        <div className="text-xs text-[var(--text-dim)] mb-4">
          <div className="font-semibold mb-2">Party XP Thresholds:</div>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center p-2 bg-[var(--bg)] rounded">
              <div style={{ color: "var(--green)" }}>Easy</div>
              <div>{calculation.thresholds.easy.toLocaleString()}</div>
            </div>
            <div className="text-center p-2 bg-[var(--bg)] rounded">
              <div style={{ color: "var(--accent)" }}>Medium</div>
              <div>{calculation.thresholds.medium.toLocaleString()}</div>
            </div>
            <div className="text-center p-2 bg-[var(--bg)] rounded">
              <div style={{ color: "var(--yellow)" }}>Hard</div>
              <div>{calculation.thresholds.hard.toLocaleString()}</div>
            </div>
            <div className="text-center p-2 bg-[var(--bg)] rounded">
              <div style={{ color: "var(--red)" }}>Deadly</div>
              <div>{calculation.thresholds.deadly.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="text-xs text-[var(--text-dim)] border-t border-[var(--border)] pt-3">
          <strong>Tips:</strong> A deadly encounter may kill party members. An adventuring day typically has 6-8 medium/hard encounters.
        </div>
      </div>
    </div>
  );
}
