"use client";

import { useState, useCallback, useMemo } from "react";
import { featureRequirements, type FeatureStep } from "@/data/feature-requirements";

type FeatureInfo = {
  name: string;
  parentClass: string;
  level: string;
  mechanics: string;
};

type Step = {
  question: string;
  yesNext: number | "pass" | "fail";
  noNext: number | "fail" | "pass";
  failReason: string;
};

function buildSteps(feature: FeatureInfo): Step[] {
  // Try to get web-sourced requirements
  const slug = feature.name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");
  const webRequirements = featureRequirements[slug];

  const featureNameClean = feature.name.replace(/ 5e$/i, "");

  // If we have web-sourced steps, use them
  if (webRequirements && webRequirements.steps.length > 0) {
    const steps: Step[] = webRequirements.steps.map((webStep, index, arr) => {
      const isLast = index === arr.length - 1;
      const hasInvertedLogic = (webStep as FeatureStep & { invertedLogic?: boolean }).invertedLogic;

      return {
        question: webStep.question,
        yesNext: hasInvertedLogic ? "fail" : (isLast ? "pass" : index + 1),
        noNext: hasInvertedLogic ? (isLast ? "pass" : index + 1) : "fail",
        failReason: webStep.failReason,
      };
    });

    return steps;
  }

  // Fallback: Build steps from mechanics text analysis
  const steps: Step[] = [];
  let i = 0;

  const mechanics = feature.mechanics.toLowerCase();
  const hasLimitedUse = mechanics.includes("per long rest") ||
                        mechanics.includes("per short rest") ||
                        mechanics.includes("times per") ||
                        mechanics.includes("uses equal") ||
                        mechanics.includes("regain all") ||
                        mechanics.includes("ki point") ||
                        mechanics.includes("sorcery point") ||
                        mechanics.includes("spell slot") ||
                        mechanics.includes("channel divinity") ||
                        mechanics.includes("bardic inspiration") ||
                        mechanics.includes("rage");

  const isReaction = mechanics.includes("reaction");
  const isBonusAction = mechanics.includes("bonus action");
  const requiresConcentration = mechanics.includes("concentration");
  const hasRange = mechanics.match(/(\d+)\s*(feet|ft|foot)/i);
  const requiresAttack = mechanics.includes("attack roll") || mechanics.includes("melee attack") || mechanics.includes("weapon attack");

  // 1 — Class/Level check
  if (feature.parentClass !== "Multiple") {
    steps.push({
      question: `Is the character a ${feature.parentClass} of at least ${feature.level} level?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `${featureNameClean} is a ${feature.parentClass} feature gained at ${feature.level} level.`,
    });
    i++;
  } else {
    steps.push({
      question: `Does the character have access to ${featureNameClean} from their class?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `${featureNameClean} must be gained from a class that grants it.`,
    });
    i++;
  }

  // 2 — Limited use check
  if (hasLimitedUse) {
    steps[i - 1].yesNext = i;

    let resourceName = "uses of this feature";
    if (mechanics.includes("ki point")) resourceName = "Ki points";
    else if (mechanics.includes("sorcery point")) resourceName = "Sorcery Points";
    else if (mechanics.includes("rage")) resourceName = "Rages";
    else if (mechanics.includes("channel divinity")) resourceName = "Channel Divinity uses";
    else if (mechanics.includes("bardic inspiration")) resourceName = "Bardic Inspiration dice";
    else if (mechanics.includes("spell slot")) resourceName = "spell slots";
    else if (mechanics.includes("superiority")) resourceName = "Superiority Dice";

    steps.push({
      question: `Does the character have ${resourceName} remaining?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `The character needs available ${resourceName} to use ${featureNameClean}.`,
    });
    i++;
  }

  // 3 — Reaction timing
  if (isReaction) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Has the trigger for this reaction occurred?",
      yesNext: -1,
      noNext: "fail",
      failReason: `${featureNameClean} is a reaction — the specific trigger must happen first.`,
    });
    i++;

    steps[i - 1].yesNext = i;
    steps.push({
      question: "Does the character still have their reaction available this round?",
      yesNext: -1,
      noNext: "fail",
      failReason: "Each creature gets only one reaction per round.",
    });
    i++;
  }

  // 4 — Bonus action check
  if (isBonusAction) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Does the character have their bonus action available this turn?",
      yesNext: -1,
      noNext: "fail",
      failReason: `${featureNameClean} requires a bonus action, and each creature only gets one per turn.`,
    });
    i++;
  }

  // 5 — Attack required
  if (requiresAttack) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Is the character making an attack (or has made one this turn)?",
      yesNext: -1,
      noNext: "fail",
      failReason: `${featureNameClean} requires an attack to be made.`,
    });
    i++;
  }

  // 6 — Concentration
  if (requiresConcentration) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Is the character free of other concentration effects?",
      yesNext: -1,
      noNext: "fail",
      failReason: "A creature can only concentrate on one effect at a time.",
    });
    i++;
  }

  // 7 — Range check
  if (hasRange) {
    const rangeMatch = mechanics.match(/(\d+)\s*(feet|ft|foot)/i);
    const range = rangeMatch ? rangeMatch[1] : "the required";
    steps[i - 1].yesNext = i;
    steps.push({
      question: `Is the target within ${range} feet?`,
      yesNext: -1,
      noNext: "fail",
      failReason: `The target must be within range of the feature.`,
    });
    i++;
  }

  // 8 — Condition check (common for features like Rage)
  if (mechanics.includes("while raging") || mechanics.includes("during your rage")) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Is the character currently raging?",
      yesNext: -1,
      noNext: "fail",
      failReason: `This feature only works while the character is raging.`,
    });
    i++;
  }

  // If no special conditions, add a simple "no restrictions" step
  if (steps.length === 1) {
    steps[i - 1].yesNext = i;
    steps.push({
      question: "Are there any conditions or effects preventing the character from acting normally?",
      yesNext: "fail",
      noNext: -1,
      failReason: "Conditions like Stunned, Paralyzed, or Incapacitated may prevent using features.",
    });
    i++;
    // swap yes/no for this question
    steps[i - 1].yesNext = "fail";
    steps[i - 1].noNext = "pass";
  } else {
    // patch the last step's yesNext to "pass"
    steps[i - 1].yesNext = "pass";
  }

  return steps;
}

export function FeatureChecker({ feature }: { feature: FeatureInfo }) {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<{ pass: boolean; reason?: string } | null>(null);

  const steps = useMemo(() => buildSteps(feature), [feature]);

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

  const featureNameClean = feature.name.replace(/ 5e$/i, "");

  if (!open) {
    return (
      <button
        onClick={() => { setOpen(true); reset(); }}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        DM check: can the player do it?
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
        className="relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl max-w-md w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-['Cinzel'] text-lg font-bold text-[var(--accent)]">
            {featureNameClean}
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
                className="flex-1 py-2.5 rounded-lg font-semibold text-sm bg-[var(--green)] text-white hover:brightness-110 transition-all cursor-pointer"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 py-2.5 rounded-lg font-semibold text-sm bg-[var(--red)] text-white hover:brightness-110 transition-all cursor-pointer"
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
                ? "bg-[var(--green-bg)] border border-[var(--green-border)]"
                : "bg-[var(--red-bg)] border border-[var(--red-border)]"
            }`}>
              <div className={`text-2xl font-bold font-['Cinzel'] mb-2 ${
                result.pass ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}>
                {result.pass ? "Yes, they can!" : "No, they can't"}
              </div>
              <p className="text-[var(--text-dim)] text-sm leading-relaxed">
                {result.pass
                  ? `All checks passed — the character can use ${featureNameClean}.`
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
