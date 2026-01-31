"use client";

import { useState, useCallback } from "react";

type KeyAbility = {
  name: string;
  description: string;
};

// Parse dice notation like "2d6+3" or "1d10" or "3d8+5 slashing"
function parseDice(text: string): { count: number; sides: number; modifier: number; damageType?: string }[] {
  const results: { count: number; sides: number; modifier: number; damageType?: string }[] = [];
  // Match patterns like "2d6+3", "1d10-2", "3d8", with optional damage type after
  const diceRegex = /(\d+)d(\d+)(?:\s*([+-])\s*(\d+))?(?:\s+(\w+))?/gi;
  let match;

  while ((match = diceRegex.exec(text)) !== null) {
    const count = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const sign = match[3] === "-" ? -1 : 1;
    const modValue = match[4] ? parseInt(match[4]) * sign : 0;
    const damageType = match[5];

    results.push({ count, sides, modifier: modValue, damageType });
  }

  return results;
}

// Extract attack info from ability description
function extractAttacks(abilities: KeyAbility[]): { name: string; dice: string; toHit?: string; damageType?: string }[] {
  const attacks: { name: string; dice: string; toHit?: string; damageType?: string }[] = [];

  for (const ability of abilities) {
    const desc = ability.description;

    // Look for "Hit:" sections with damage dice
    const hitMatch = desc.match(/Hit:\s*(\d+)\s*\(([^)]+)\)\s*(\w+)?\s*damage/i);
    if (hitMatch) {
      const diceNotation = hitMatch[2];
      const damageType = hitMatch[3];

      // Extract to-hit bonus
      const toHitMatch = desc.match(/([+-]\d+)\s*to\s*hit/i);
      const toHit = toHitMatch ? toHitMatch[1] : undefined;

      attacks.push({
        name: ability.name,
        dice: diceNotation,
        toHit,
        damageType,
      });
    }
  }

  return attacks;
}

function rollDice(count: number, sides: number): number[] {
  const rolls: number[] = [];
  for (let i = 0; i < count; i++) {
    rolls.push(Math.floor(Math.random() * sides) + 1);
  }
  return rolls;
}

export function DamageRoller({ abilities, monsterName }: { abilities: KeyAbility[]; monsterName: string }) {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<{ attack: string; rolls: number[]; modifier: number; total: number; damageType?: string; toHit?: number; hitRoll?: number } | null>(null);

  const attacks = extractAttacks(abilities);

  const rollAttack = useCallback((attack: { name: string; dice: string; toHit?: string; damageType?: string }) => {
    const parsed = parseDice(attack.dice);
    if (parsed.length === 0) return;

    const firstDice = parsed[0];
    const rolls = rollDice(firstDice.count, firstDice.sides);
    const total = rolls.reduce((a, b) => a + b, 0) + firstDice.modifier;

    // Roll to hit if applicable
    let hitRoll: number | undefined;
    let toHitValue: number | undefined;
    if (attack.toHit) {
      toHitValue = parseInt(attack.toHit);
      hitRoll = Math.floor(Math.random() * 20) + 1;
    }

    setResults({
      attack: attack.name,
      rolls,
      modifier: firstDice.modifier,
      total: Math.max(0, total),
      damageType: attack.damageType || firstDice.damageType,
      toHit: toHitValue,
      hitRoll,
    });
  }, []);

  const rollCustom = useCallback((dice: string) => {
    const parsed = parseDice(dice);
    if (parsed.length === 0) return;

    const firstDice = parsed[0];
    const rolls = rollDice(firstDice.count, firstDice.sides);
    const total = rolls.reduce((a, b) => a + b, 0) + firstDice.modifier;

    setResults({
      attack: "Custom Roll",
      rolls,
      modifier: firstDice.modifier,
      total: Math.max(0, total),
      damageType: firstDice.damageType,
    });
  }, []);

  if (attacks.length === 0) {
    return null;
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-2 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--red)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        Quick Damage Roller
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
          <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--red)]">
            {monsterName} Attacks
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Attack Buttons */}
        <div className="space-y-2 mb-5">
          {attacks.map((attack, i) => (
            <button
              key={i}
              onClick={() => rollAttack(attack)}
              className="w-full p-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-left hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <div className="font-semibold text-sm">{attack.name}</div>
              <div className="text-xs text-[var(--text-dim)]">
                {attack.toHit && <span className="mr-2">{attack.toHit} to hit</span>}
                <span>{attack.dice} {attack.damageType && attack.damageType} damage</span>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Dice Buttons */}
        <div className="mb-5">
          <div className="text-xs text-[var(--text-dim)] mb-2">Quick Dice:</div>
          <div className="flex flex-wrap gap-2">
            {["1d4", "1d6", "1d8", "1d10", "1d12", "2d6", "2d8", "3d6", "4d6"].map((dice) => (
              <button
                key={dice}
                onClick={() => rollCustom(dice)}
                className="px-3 py-1 bg-[var(--bg)] border border-[var(--border)] rounded text-xs hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                {dice}
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {results && (
          <div className="bg-[var(--red-bg)] border border-[var(--red-border)] rounded-lg p-4">
            <div className="text-sm font-semibold mb-2">{results.attack}</div>

            {results.hitRoll !== undefined && results.toHit !== undefined && (
              <div className="mb-3 pb-3 border-b border-[var(--border)]">
                <div className="text-xs text-[var(--text-dim)] mb-1">Attack Roll</div>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold ${results.hitRoll === 20 ? "text-[var(--green)]" : results.hitRoll === 1 ? "text-[var(--red)]" : ""}`}>
                    {results.hitRoll === 20 ? "NAT 20!" : results.hitRoll === 1 ? "NAT 1" : results.hitRoll + results.toHit}
                  </span>
                  <span className="text-xs text-[var(--text-dim)]">
                    ({results.hitRoll} + {results.toHit})
                  </span>
                </div>
              </div>
            )}

            <div className="text-xs text-[var(--text-dim)] mb-1">
              Damage{results.hitRoll === 20 ? " (CRIT - double dice!)" : ""}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-[var(--red)]">
                {results.hitRoll === 20 ? (results.total + results.rolls.reduce((a, b) => a + b, 0)) : results.total}
              </span>
              {results.damageType && (
                <span className="text-sm text-[var(--text-dim)]">{results.damageType}</span>
              )}
            </div>
            <div className="text-xs text-[var(--text-dim)] mt-1">
              Rolls: [{results.rolls.join(", ")}]{results.modifier !== 0 && ` ${results.modifier >= 0 ? "+" : ""}${results.modifier}`}
              {results.hitRoll === 20 && ` × 2 dice = ${results.rolls.reduce((a, b) => a + b, 0) * 2} + ${results.modifier}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
