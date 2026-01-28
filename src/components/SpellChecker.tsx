"use client";

import { useState, useCallback } from "react";

type SpellInfo = {
  name: string;
  level: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  concentration: boolean;
  ritual: boolean;
  classes: string[];
};

type Step = {
  question: string;
  yesNext: number | "pass";
  noNext: number | "fail";
  failReason?: string;
};

function buildSteps(spell: SpellInfo): Step[] {
  const steps: Step[] = [];
  let i = 0;

  // 1 — Class check
  steps.push({
    question: `Is the caster one of these classes: ${spell.classes.join(", ")}?`,
    yesNext: -1, // patched below
    noNext: "fail",
    failReason: `${spell.name} is only on the ${spell.classes.join(", ")} spell list${spell.classes.length > 1 ? "s" : ""}.`,
  });
  i++;

  // 2 — Spell slot (skip for cantrips)
  if (spell.level !== "Cantrip") {
    const slotLevel = parseInt(spell.level);
    steps[i - 1].yesNext = i;
    steps.push({
      question: `Does the caster have a level ${slotLevel}+ spell slot available (or is this a ritual)?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `${spell.name} requires a level ${slotLevel} or higher spell slot${spell.ritual ? " (unless cast as a ritual)" : ""}.`,
    });
    i++;
  }

  // 3 — Known/prepared
  if (spell.level !== "Cantrip") {
    steps[i - 1].yesNext = i;
    steps.push({
      question: `Does the caster have ${spell.name} prepared or known?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `The caster must have ${spell.name} prepared or in their list of known spells.`,
    });
    i++;
  }

  // 4 — Components: V
  if (spell.components.includes("V")) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Can the caster speak freely? (Verbal component required)",
      yesNext: -1,
      noNext: "fail",
      failReason: `${spell.name} has a verbal component — the caster can't be silenced, gagged, or in an area of Silence.`,
    });
    i++;
  }

  // 5 — Components: S
  if (spell.components.includes("S")) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Does the caster have at least one free hand? (Somatic component required)",
      yesNext: -1,
      noNext: "fail",
      failReason: `${spell.name} has a somatic component — the caster needs a free hand (or can use the hand holding a focus/material component).`,
    });
    i++;
  }

  // 6 — Components: M
  if (spell.components.includes("M")) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Does the caster have the material component or an arcane focus?",
      yesNext: -1,
      noNext: "fail",
      failReason: `${spell.name} requires material components. A component pouch or arcane focus can substitute for materials without a listed gold cost.`,
    });
    i++;
  }

  // 7 — Casting time: reaction
  if (spell.castingTime.toLowerCase().includes("reaction")) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Has the trigger for this reaction occurred?",
      yesNext: -1,
      noNext: "fail",
      failReason: `${spell.name} is a reaction spell — the specific trigger must happen before it can be cast.`,
    });
    i++;

    steps[i - 1].yesNext = i;
    steps.push({
      question: "Does the caster still have their reaction available this round?",
      yesNext: -1,
      noNext: "fail",
      failReason: "Each creature gets only one reaction per round. If it's been used, they can't cast this until their next turn.",
    });
    i++;
  }

  // 8 — Casting time: bonus action
  if (spell.castingTime.toLowerCase().includes("bonus")) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Has the caster avoided casting another non-cantrip spell this turn?",
      yesNext: -1,
      noNext: "fail",
      failReason: "If a bonus action spell is cast, the only other spell that can be cast that turn is a cantrip with a casting time of 1 action.",
    });
    i++;
  }

  // 9 — Concentration
  if (spell.concentration) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Is the caster free of any other concentration spell?",
      yesNext: -1,
      noNext: "fail",
      failReason: "A caster can only concentrate on one spell at a time. Casting this spell ends concentration on any previous spell.",
    });
    i++;
  }

  // 10 — Range
  if (spell.range !== "Self" && spell.range !== "Unlimited") {
    steps[i - 1].yesNext = i;
    steps.push({
      question: `Is the target/point within ${spell.range}?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `The target must be within ${spell.range} of the caster.`,
    });
    i++;
  }

  // patch the last step's yesNext to "pass"
  steps[i - 1].yesNext = "pass";

  return steps;
}

export function SpellChecker({ spell }: { spell: SpellInfo }) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<{ pass: boolean; reason?: string } | null>(null);

  const steps = buildSteps(spell);

  const reset = useCallback(() => {
    setStepIndex(0);
    setResult(null);
  }, []);

  const handleAnswer = (yes: boolean) => {
    const step = steps[stepIndex];
    const next = yes ? step.yesNext : step.noNext;
    if (next === "pass") {
      setResult({ pass: true });
    } else if (next === "fail") {
      setResult({ pass: false, reason: step.failReason });
    } else {
      setStepIndex(next);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => { setOpen(true); reset(); }}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-[#111118] hover:brightness-110 transition-all cursor-pointer"
      >
        Will the spell work?
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl max-w-md w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--accent)]">
            {spell.name}
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {result === null ? (
          <>
            {/* Progress */}
            <div className="flex gap-1 mb-5">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 rounded-full ${
                    idx < stepIndex
                      ? "bg-[var(--green)]"
                      : idx === stepIndex
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--border)]"
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <p className="text-[var(--text)] text-sm leading-relaxed mb-6">
              {steps[stepIndex].question}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 py-2.5 rounded-lg font-semibold text-sm bg-[var(--green)] text-[#111118] hover:brightness-110 transition-all cursor-pointer"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 py-2.5 rounded-lg font-semibold text-sm bg-[var(--red)] text-[#111118] hover:brightness-110 transition-all cursor-pointer"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Result */}
            <div className={`rounded-lg p-5 mb-5 ${
              result.pass
                ? "bg-[rgba(96,208,128,0.1)] border border-[rgba(96,208,128,0.3)]"
                : "bg-[rgba(208,96,96,0.1)] border border-[rgba(208,96,96,0.3)]"
            }`}>
              <div className={`text-2xl font-bold font-['Cinzel'] mb-2 ${
                result.pass ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}>
                {result.pass ? "Yes, it works!" : "No, it won't work"}
              </div>
              <p className="text-[var(--text-dim)] text-sm leading-relaxed">
                {result.pass
                  ? `All checks passed — ${spell.name} can be cast.`
                  : result.reason}
              </p>
            </div>

            <button
              onClick={reset}
              className="w-full py-2.5 rounded-lg font-semibold text-sm bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer"
            >
              Check Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
