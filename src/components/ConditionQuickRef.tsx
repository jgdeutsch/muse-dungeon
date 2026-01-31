"use client";

import { useState } from "react";

// D&D 5e conditions with their effects
const CONDITIONS: Record<string, { effects: string[]; endCondition?: string; savingThrow?: string }> = {
  blinded: {
    effects: [
      "Can't see and automatically fails any check requiring sight",
      "Attack rolls against the creature have advantage",
      "The creature's attack rolls have disadvantage",
    ],
  },
  charmed: {
    effects: [
      "Can't attack the charmer or target them with harmful abilities/spells",
      "The charmer has advantage on social interaction checks",
    ],
  },
  deafened: {
    effects: [
      "Can't hear and automatically fails any check requiring hearing",
    ],
  },
  exhaustion: {
    effects: [
      "Level 1: Disadvantage on ability checks",
      "Level 2: Speed halved",
      "Level 3: Disadvantage on attack rolls and saving throws",
      "Level 4: Hit point maximum halved",
      "Level 5: Speed reduced to 0",
      "Level 6: Death",
    ],
    endCondition: "Long rest removes 1 level (with food/water)",
  },
  frightened: {
    effects: [
      "Disadvantage on ability checks and attack rolls while source of fear is in sight",
      "Can't willingly move closer to the source of fear",
    ],
  },
  grappled: {
    effects: [
      "Speed becomes 0 and can't benefit from speed bonuses",
      "Ends if grappler is incapacitated or moved out of reach",
    ],
    endCondition: "Action to escape: Athletics or Acrobatics vs grappler's Athletics",
  },
  incapacitated: {
    effects: [
      "Can't take actions or reactions",
    ],
  },
  invisible: {
    effects: [
      "Impossible to see without special sense or magic",
      "Counts as heavily obscured for hiding",
      "Attack rolls against the creature have disadvantage",
      "The creature's attack rolls have advantage",
    ],
  },
  paralyzed: {
    effects: [
      "Incapacitated and can't move or speak",
      "Automatically fails Strength and Dexterity saving throws",
      "Attack rolls against have advantage",
      "Any hit from within 5 feet is an automatic critical hit",
    ],
  },
  petrified: {
    effects: [
      "Transformed into inanimate substance with weight × 10",
      "Incapacitated, can't move or speak, unaware of surroundings",
      "Attack rolls against have advantage",
      "Automatically fails Strength and Dexterity saving throws",
      "Resistance to all damage",
      "Immune to poison and disease (existing ones suspended)",
    ],
  },
  poisoned: {
    effects: [
      "Disadvantage on attack rolls and ability checks",
    ],
  },
  prone: {
    effects: [
      "Can only crawl (1 ft costs 2 ft of movement)",
      "Disadvantage on attack rolls",
      "Attacks from within 5 ft have advantage against it",
      "Attacks from further than 5 ft have disadvantage against it",
    ],
    endCondition: "Stand up costs half of movement speed",
  },
  restrained: {
    effects: [
      "Speed becomes 0 and can't benefit from speed bonuses",
      "Attack rolls against the creature have advantage",
      "The creature's attack rolls have disadvantage",
      "Disadvantage on Dexterity saving throws",
    ],
  },
  stunned: {
    effects: [
      "Incapacitated, can't move, can only speak falteringly",
      "Automatically fails Strength and Dexterity saving throws",
      "Attack rolls against the creature have advantage",
    ],
  },
  unconscious: {
    effects: [
      "Incapacitated, can't move or speak, unaware of surroundings",
      "Drops whatever it's holding and falls prone",
      "Automatically fails Strength and Dexterity saving throws",
      "Attack rolls against have advantage",
      "Any hit from within 5 feet is an automatic critical hit",
    ],
  },
};

export function ConditionQuickRef({ conditionName }: { conditionName?: string }) {
  const [open, setOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(
    conditionName ? conditionName.toLowerCase() : null
  );

  // Normalize condition name for lookup
  const normalizedName = conditionName?.toLowerCase().replace(/[^a-z]/g, "");
  const isConditionPage = normalizedName && CONDITIONS[normalizedName];

  if (!open) {
    return (
      <button
        onClick={() => {
          setOpen(true);
          if (isConditionPage) {
            setSelectedCondition(normalizedName);
          }
        }}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--yellow)] text-black hover:brightness-110 transition-all cursor-pointer"
      >
        {isConditionPage ? "Condition Quick Reference" : "All Conditions Reference"}
      </button>
    );
  }

  const condition = selectedCondition ? CONDITIONS[selectedCondition] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--yellow)]">
            {selectedCondition ? selectedCondition.charAt(0).toUpperCase() + selectedCondition.slice(1) : "Conditions"}
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Condition Selector */}
        {!isConditionPage && (
          <div className="mb-4">
            <select
              value={selectedCondition || ""}
              onChange={(e) => setSelectedCondition(e.target.value || null)}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select a condition...</option>
              {Object.keys(CONDITIONS).sort().map((cond) => (
                <option key={cond} value={cond}>
                  {cond.charAt(0).toUpperCase() + cond.slice(1)}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Condition Details */}
        {condition && (
          <div className="space-y-4">
            <div className="bg-[var(--bg)] border border-[var(--border)] rounded-lg p-4">
              <div className="text-xs font-semibold text-[var(--yellow)] uppercase tracking-wider mb-3">
                Effects
              </div>
              <ul className="space-y-2">
                {condition.effects.map((effect, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-[var(--yellow)]">•</span>
                    <span>{effect}</span>
                  </li>
                ))}
              </ul>
            </div>

            {condition.endCondition && (
              <div className="bg-[var(--green-bg)] border border-[var(--green-border)] rounded-lg p-4">
                <div className="text-xs font-semibold text-[var(--green)] uppercase tracking-wider mb-2">
                  How to End
                </div>
                <p className="text-sm">{condition.endCondition}</p>
              </div>
            )}

            {condition.savingThrow && (
              <div className="bg-[var(--accent-light)] border border-[var(--accent)] rounded-lg p-4">
                <div className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                  Saving Throw
                </div>
                <p className="text-sm">{condition.savingThrow}</p>
              </div>
            )}
          </div>
        )}

        {/* Quick Reference Grid */}
        {!selectedCondition && (
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(CONDITIONS).sort().map((cond) => (
              <button
                key={cond}
                onClick={() => setSelectedCondition(cond)}
                className="p-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-left hover:border-[var(--yellow)] transition-colors cursor-pointer"
              >
                <div className="font-semibold text-sm capitalize">{cond}</div>
                <div className="text-xs text-[var(--text-dim)] truncate">
                  {CONDITIONS[cond].effects[0]}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Back Button */}
        {selectedCondition && !isConditionPage && (
          <button
            onClick={() => setSelectedCondition(null)}
            className="w-full mt-4 py-2 rounded-lg font-semibold text-sm bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
          >
            View All Conditions
          </button>
        )}
      </div>
    </div>
  );
}
