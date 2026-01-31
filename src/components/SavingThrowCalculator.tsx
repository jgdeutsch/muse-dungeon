"use client";

import { useState } from "react";

const ABILITIES = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"] as const;

// Common save DCs by challenge rating
const CR_TO_SAVE_DC: Record<string, number> = {
  "0": 10,
  "1/8": 11,
  "1/4": 11,
  "1/2": 11,
  "1": 12,
  "2": 12,
  "3": 12,
  "4": 13,
  "5": 14,
  "6": 14,
  "7": 15,
  "8": 15,
  "9": 16,
  "10": 16,
  "11": 17,
  "12": 17,
  "13": 18,
  "14": 18,
  "15": 18,
  "16": 19,
  "17": 19,
  "18": 19,
  "19": 19,
  "20": 19,
  "21": 20,
  "22": 20,
  "23": 20,
  "24": 21,
  "25": 21,
  "26": 21,
  "27": 22,
  "28": 22,
  "29": 22,
  "30": 23,
};

// Proficiency bonus by character level
const PROF_BY_LEVEL: Record<number, number> = {
  1: 2, 2: 2, 3: 2, 4: 2,
  5: 3, 6: 3, 7: 3, 8: 3,
  9: 4, 10: 4, 11: 4, 12: 4,
  13: 5, 14: 5, 15: 5, 16: 5,
  17: 6, 18: 6, 19: 6, 20: 6,
};

export function SavingThrowCalculator({ defaultDC }: { defaultDC?: number }) {
  const [open, setOpen] = useState(false);
  const [dc, setDC] = useState(defaultDC || 15);
  const [saveMod, setSaveMod] = useState(3);
  const [advantage, setAdvantage] = useState<"normal" | "advantage" | "disadvantage">("normal");
  const [result, setResult] = useState<{ roll: number; total: number; success: boolean; secondRoll?: number } | null>(null);

  const rollSave = () => {
    const roll1 = Math.floor(Math.random() * 20) + 1;
    const roll2 = Math.floor(Math.random() * 20) + 1;

    let finalRoll: number;
    let secondRoll: number | undefined;

    if (advantage === "advantage") {
      finalRoll = Math.max(roll1, roll2);
      secondRoll = roll1 === finalRoll ? roll2 : roll1;
    } else if (advantage === "disadvantage") {
      finalRoll = Math.min(roll1, roll2);
      secondRoll = roll1 === finalRoll ? roll2 : roll1;
    } else {
      finalRoll = roll1;
    }

    const total = finalRoll + saveMod;
    const success = total >= dc || finalRoll === 20;

    setResult({
      roll: finalRoll,
      total,
      success: finalRoll === 1 ? false : success,
      secondRoll,
    });
  };

  // Calculate success probability
  const getSuccessProbability = () => {
    const needed = Math.max(1, Math.min(20, dc - saveMod));

    if (advantage === "normal") {
      return Math.max(5, Math.min(95, (21 - needed) * 5));
    } else if (advantage === "advantage") {
      // P(at least one succeeds) = 1 - P(both fail)
      const failChance = (needed - 1) / 20;
      return Math.round((1 - failChance * failChance) * 100);
    } else {
      // P(both succeed)
      const successChance = (21 - needed) / 20;
      return Math.round(successChance * successChance * 100);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        Saving Throw Calculator
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
            Saving Throw
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* DC Input */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs text-[var(--text-dim)] mb-1">Save DC</label>
            <input
              type="number"
              min={1}
              max={30}
              value={dc}
              onChange={(e) => setDC(Math.min(30, Math.max(1, parseInt(e.target.value) || 10)))}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[var(--text-dim)] mb-1">Save Modifier</label>
            <input
              type="number"
              min={-5}
              max={20}
              value={saveMod}
              onChange={(e) => setSaveMod(parseInt(e.target.value) || 0)}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Advantage Toggle */}
        <div className="mb-5">
          <label className="block text-xs text-[var(--text-dim)] mb-2">Roll Type</label>
          <div className="flex gap-2">
            {(["normal", "advantage", "disadvantage"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setAdvantage(type)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                  advantage === type
                    ? type === "advantage"
                      ? "bg-[var(--green)] text-white"
                      : type === "disadvantage"
                      ? "bg-[var(--red)] text-white"
                      : "bg-[var(--accent)] text-white"
                    : "bg-[var(--bg)] border border-[var(--border)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Success Probability */}
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-3 mb-4 text-center">
          <div className="text-xs text-[var(--text-dim)]">Success Chance</div>
          <div className="text-xl font-bold">{getSuccessProbability()}%</div>
          <div className="text-xs text-[var(--text-dim)]">
            Need {Math.max(1, dc - saveMod)} or higher on d20
          </div>
        </div>

        {/* Roll Button */}
        <button
          onClick={rollSave}
          className="w-full py-3 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer mb-4"
        >
          Roll Saving Throw
        </button>

        {/* Result */}
        {result && (
          <div
            className={`rounded-lg p-4 border ${
              result.success
                ? "bg-[var(--green-bg)] border-[var(--green-border)]"
                : "bg-[var(--red-bg)] border-[var(--red-border)]"
            }`}
          >
            <div
              className={`text-2xl font-bold font-['Cinzel'] mb-1 ${
                result.success ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}
            >
              {result.roll === 20 ? "NAT 20!" : result.roll === 1 ? "NAT 1!" : result.success ? "Success!" : "Failed!"}
            </div>
            <div className="text-sm">
              <span className="font-bold">{result.total}</span>
              <span className="text-[var(--text-dim)]">
                {" "}= {result.roll}
                {result.secondRoll !== undefined && (
                  <span className="line-through ml-1 opacity-50">{result.secondRoll}</span>
                )}
                {saveMod >= 0 ? ` + ${saveMod}` : ` - ${Math.abs(saveMod)}`}
              </span>
              <span className="text-[var(--text-dim)]"> vs DC {dc}</span>
            </div>
          </div>
        )}

        {/* Quick DC Reference */}
        <div className="text-xs text-[var(--text-dim)] mt-4 pt-4 border-t border-[var(--border)]">
          <strong>Common DCs:</strong> Easy 10, Medium 15, Hard 20, Nearly Impossible 25+
        </div>
      </div>
    </div>
  );
}
