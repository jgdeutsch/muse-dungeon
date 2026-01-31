"use client";

import { useState } from "react";

type FeatData = {
  name: string;
  prerequisite?: string | null;
  benefit?: string;
  mechanics?: string;
  rules?: { step: string; detail: string }[];
};

export function FeatChecker({ feat }: { feat: FeatData }) {
  const [open, setOpen] = useState(false);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  // Generate checklist items based on feat data
  const checklistItems = generateChecklist(feat);

  const allChecked = checklistItems.every((item) => checks[item.id]);
  const checkedCount = checklistItems.filter((item) => checks[item.id]).length;

  const toggle = (id: string) => {
    setChecks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        DM Check: Can They Use {feat.name}?
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
            {feat.name} Check
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-[var(--text-dim)] mb-1">
            <span>Requirements</span>
            <span>{checkedCount}/{checklistItems.length}</span>
          </div>
          <div className="h-2 bg-[var(--bg)] rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${
                allChecked ? "bg-[var(--green)]" : "bg-[var(--accent)]"
              }`}
              style={{ width: `${(checkedCount / checklistItems.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div className="space-y-3 mb-5">
          {checklistItems.map((item) => (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                checks[item.id]
                  ? "bg-[var(--green-bg)] border-[var(--green-border)]"
                  : "bg-[var(--bg)] border-[var(--border)] hover:border-[var(--accent)]"
              }`}
            >
              <input
                type="checkbox"
                checked={checks[item.id] || false}
                onChange={() => toggle(item.id)}
                className="mt-0.5 w-4 h-4 accent-[var(--accent)]"
              />
              <div>
                <div className={`text-sm font-medium ${checks[item.id] ? "text-[var(--green)]" : ""}`}>
                  {item.label}
                </div>
                {item.detail && (
                  <div className="text-xs text-[var(--text-dim)] mt-1">
                    {item.detail}
                  </div>
                )}
              </div>
            </label>
          ))}
        </div>

        {/* Result */}
        <div
          className={`p-4 rounded-lg border ${
            allChecked
              ? "bg-[var(--green-bg)] border-[var(--green-border)]"
              : "bg-[var(--bg)] border-[var(--border)]"
          }`}
        >
          {allChecked ? (
            <div className="text-center">
              <div className="text-xl font-bold text-[var(--green)] font-['Cinzel']">
                Yes, They Can!
              </div>
              <p className="text-sm text-[var(--text-dim)] mt-1">
                All requirements met for {feat.name}
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--text-dim)]">
                Check Requirements
              </div>
              <p className="text-sm text-[var(--text-dim)] mt-1">
                {checklistItems.length - checkedCount} requirement{checklistItems.length - checkedCount !== 1 ? "s" : ""} remaining
              </p>
            </div>
          )}
        </div>

        {/* Reset */}
        <button
          onClick={() => setChecks({})}
          className="w-full mt-4 py-2 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-colors cursor-pointer"
        >
          Reset Checklist
        </button>
      </div>
    </div>
  );
}

function generateChecklist(feat: FeatData): { id: string; label: string; detail?: string }[] {
  const items: { id: string; label: string; detail?: string }[] = [];

  // Add prerequisite check if exists
  if (feat.prerequisite) {
    items.push({
      id: "prerequisite",
      label: "Meets Prerequisite",
      detail: feat.prerequisite,
    });
  }

  // If it's a combat maneuver with rules, create checklist from rules
  if (feat.rules && feat.rules.length > 0) {
    feat.rules.forEach((rule, i) => {
      items.push({
        id: `rule-${i}`,
        label: rule.step,
        detail: rule.detail.substring(0, 150) + (rule.detail.length > 150 ? "..." : ""),
      });
    });
  } else if (feat.mechanics) {
    // Extract key requirements from mechanics text
    const mechanics = feat.mechanics;

    // Look for common patterns in feat mechanics
    if (mechanics.toLowerCase().includes("attack action")) {
      items.push({
        id: "attack-action",
        label: "Taking the Attack action",
        detail: "Required to trigger this feat's effect",
      });
    }

    if (mechanics.toLowerCase().includes("bonus action")) {
      items.push({
        id: "bonus-action",
        label: "Has bonus action available",
        detail: "This feat uses your bonus action",
      });
    }

    if (mechanics.toLowerCase().includes("reaction")) {
      items.push({
        id: "reaction",
        label: "Has reaction available",
        detail: "This feat uses your reaction",
      });
    }

    if (mechanics.toLowerCase().includes("once per turn") || mechanics.toLowerCase().includes("once per round")) {
      items.push({
        id: "once-per-turn",
        label: "Haven't used this turn",
        detail: "Can only be used once per turn/round",
      });
    }

    // If we didn't find specific patterns, add generic checks
    if (items.length === 0 || (items.length === 1 && feat.prerequisite)) {
      items.push({
        id: "has-feat",
        label: `Has ${feat.name} feat`,
        detail: "Character must have selected this feat",
      });
      items.push({
        id: "situation-applies",
        label: "Situation allows use",
        detail: "The current combat/roleplay situation allows this feat",
      });
    }
  } else {
    // Fallback generic checklist
    items.push({
      id: "has-feat",
      label: `Has ${feat.name}`,
      detail: "Character has this feat or ability",
    });
    items.push({
      id: "situation-applies",
      label: "Situation allows use",
      detail: "Current situation meets requirements",
    });
  }

  return items;
}
