"use client";

import { useState } from "react";

type FeatData = {
  name: string;
  prerequisite?: string | null;
  benefit?: string;
  mechanics?: string;
  rules?: { step: string; detail: string }[];
};

type CheckStep = {
  id: string;
  question: string;
  detail?: string;
  yesNext: string | "pass";
  noResult: string;
};

// Generate decision tree steps from feat/combat data
function generateDecisionTree(feat: FeatData): CheckStep[] {
  const name = feat.name;

  // Custom decision trees for specific combat maneuvers/feats
  if (name === "Sneak Attack") {
    return [
      {
        id: "rogue",
        question: "Is the character a Rogue?",
        detail: "Sneak Attack is a Rogue class feature.",
        yesNext: "weapon",
        noResult: "No - only Rogues get Sneak Attack.",
      },
      {
        id: "weapon",
        question: "Are they using a finesse or ranged weapon?",
        detail: "Daggers, rapiers, shortswords, bows, crossbows, etc.",
        yesNext: "used-this-turn",
        noResult: "No - Sneak Attack requires a finesse or ranged weapon.",
      },
      {
        id: "used-this-turn",
        question: "Have they already used Sneak Attack this turn?",
        detail: "Once per turn limit (not per round - opportunity attacks count as a new turn).",
        yesNext: "no-sneak",
        noResult: "condition",
      },
      {
        id: "no-sneak",
        question: "",
        detail: "",
        yesNext: "pass",
        noResult: "No - they already used Sneak Attack this turn.",
      },
      {
        id: "condition",
        question: "Do they have advantage on the attack?",
        detail: "From hiding, Faerie Fire, enemy prone, flanking (optional rule), etc.",
        yesNext: "disadvantage-check",
        noResult: "ally-adjacent",
      },
      {
        id: "ally-adjacent",
        question: "Is an ally within 5 feet of the target?",
        detail: "The ally must not be incapacitated.",
        yesNext: "disadvantage-check",
        noResult: "No - need advantage OR an adjacent ally.",
      },
      {
        id: "disadvantage-check",
        question: "Do they have disadvantage on the attack?",
        detail: "From darkness, prone while using ranged, etc. Disadvantage cancels advantage and blocks the ally-adjacent option.",
        yesNext: "no-disadvantage",
        noResult: "pass",
      },
      {
        id: "no-disadvantage",
        question: "",
        detail: "",
        yesNext: "pass",
        noResult: "No - disadvantage blocks Sneak Attack (unless they had advantage to cancel it).",
      },
    ];
  }

  if (name === "Two-Weapon Fighting") {
    return [
      {
        id: "two-weapons",
        question: "Are they wielding two weapons?",
        detail: "One in each hand.",
        yesNext: "light",
        noResult: "No - need two weapons for two-weapon fighting.",
      },
      {
        id: "light",
        question: "Are both weapons light?",
        detail: "Unless they have the Dual Wielder feat, both weapons must have the 'light' property.",
        yesNext: "attack-action",
        noResult: "No - both weapons must be light (or have Dual Wielder feat).",
      },
      {
        id: "attack-action",
        question: "Did they take the Attack action this turn?",
        detail: "Can't use bonus action attack without first taking Attack action.",
        yesNext: "bonus-action",
        noResult: "No - must take Attack action first.",
      },
      {
        id: "bonus-action",
        question: "Do they have their bonus action available?",
        detail: "The off-hand attack uses a bonus action.",
        yesNext: "pass",
        noResult: "No - off-hand attack requires a bonus action.",
      },
    ];
  }

  if (name === "Grapple" || name === "Grappling") {
    return [
      {
        id: "free-hand",
        question: "Do they have a free hand?",
        detail: "Grappling requires at least one free hand.",
        yesNext: "attack-action",
        noResult: "No - grappling requires a free hand.",
      },
      {
        id: "attack-action",
        question: "Are they using the Attack action?",
        detail: "Grapple replaces one attack within the Attack action.",
        yesNext: "size",
        noResult: "No - grapple must replace an attack.",
      },
      {
        id: "size",
        question: "Is the target no more than one size larger?",
        detail: "Can't grapple creatures more than one size category larger.",
        yesNext: "pass",
        noResult: "No - target is too large to grapple.",
      },
    ];
  }

  if (name === "Shove" || name === "Shoving") {
    return [
      {
        id: "attack-action",
        question: "Are they using the Attack action?",
        detail: "Shove replaces one attack within the Attack action.",
        yesNext: "size",
        noResult: "No - shove must replace an attack.",
      },
      {
        id: "size",
        question: "Is the target no more than one size larger?",
        detail: "Can't shove creatures more than one size category larger.",
        yesNext: "pass",
        noResult: "No - target is too large to shove.",
      },
    ];
  }

  if (name === "Opportunity Attack" || name === "Opportunity Attacks") {
    return [
      {
        id: "reaction",
        question: "Do they have their reaction available?",
        detail: "Opportunity attacks use your reaction.",
        yesNext: "leaving-reach",
        noResult: "No - already used reaction this round.",
      },
      {
        id: "leaving-reach",
        question: "Is the enemy leaving their reach?",
        detail: "Must be leaving reach with movement, not teleportation or forced movement.",
        yesNext: "can-see",
        noResult: "No - opportunity attacks trigger when leaving reach.",
      },
      {
        id: "can-see",
        question: "Can they see the enemy?",
        detail: "Can't make opportunity attacks against creatures you can't see.",
        yesNext: "pass",
        noResult: "No - can't opportunity attack what you can't see.",
      },
    ];
  }

  // Generic decision tree based on rules array
  if (feat.rules && feat.rules.length > 0) {
    const steps: CheckStep[] = [];

    feat.rules.forEach((rule, i) => {
      // Skip non-requirement steps (damage tables, etc.)
      const stepLower = rule.step.toLowerCase();
      if (stepLower.includes("damage") || stepLower.includes("level") || stepLower.includes("critical")) {
        return;
      }

      const nextId = i < feat.rules!.length - 1 ? `step-${i + 1}` : "pass";
      steps.push({
        id: `step-${i}`,
        question: `${rule.step}?`,
        detail: rule.detail.substring(0, 200) + (rule.detail.length > 200 ? "..." : ""),
        yesNext: nextId,
        noResult: `No - failed at: ${rule.step}`,
      });
    });

    // If we filtered out all steps, add a generic one
    if (steps.length === 0) {
      steps.push({
        id: "generic",
        question: `Does the situation allow ${feat.name}?`,
        detail: feat.rules[0]?.detail || "Check the requirements above.",
        yesNext: "pass",
        noResult: "No - requirements not met.",
      });
    }

    return steps;
  }

  // Fallback for feats with mechanics text
  if (feat.prerequisite) {
    return [
      {
        id: "prereq",
        question: "Does the character meet the prerequisite?",
        detail: feat.prerequisite,
        yesNext: "situation",
        noResult: `No - prerequisite not met: ${feat.prerequisite}`,
      },
      {
        id: "situation",
        question: `Can they use ${feat.name} in this situation?`,
        detail: feat.mechanics || feat.benefit || "Check the mechanics above.",
        yesNext: "pass",
        noResult: "No - situation doesn't allow it.",
      },
    ];
  }

  // Ultimate fallback
  return [
    {
      id: "has-ability",
      question: `Does the character have ${feat.name}?`,
      yesNext: "situation",
      noResult: `No - they don't have ${feat.name}.`,
    },
    {
      id: "situation",
      question: "Does the situation allow it?",
      detail: feat.mechanics || feat.benefit || "Check the requirements.",
      yesNext: "pass",
      noResult: "No - situation doesn't allow it.",
    },
  ];
}

export function FeatChecker({ feat }: { feat: FeatData }) {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>("start");
  const [result, setResult] = useState<"pass" | "fail" | null>(null);
  const [failReason, setFailReason] = useState<string>("");

  const steps = generateDecisionTree(feat);
  const firstStepId = steps[0]?.id || "start";

  const reset = () => {
    setCurrentStep(firstStepId);
    setResult(null);
    setFailReason("");
  };

  const handleAnswer = (answer: "yes" | "no") => {
    const step = steps.find((s) => s.id === currentStep);
    if (!step) return;

    if (answer === "yes") {
      if (step.yesNext === "pass") {
        setResult("pass");
      } else {
        // Check if it's a "skip" step (empty question means auto-resolve)
        const nextStep = steps.find((s) => s.id === step.yesNext);
        if (nextStep && nextStep.question === "") {
          // Auto-resolve this step
          if (nextStep.yesNext === "pass") {
            setResult("pass");
          } else {
            setFailReason(nextStep.noResult);
            setResult("fail");
          }
        } else {
          setCurrentStep(step.yesNext);
        }
      }
    } else {
      // No answer
      if (step.noResult.startsWith("No -")) {
        setFailReason(step.noResult);
        setResult("fail");
      } else {
        // noResult is actually the next step ID
        const nextStep = steps.find((s) => s.id === step.noResult);
        if (nextStep) {
          setCurrentStep(step.noResult);
        } else {
          setFailReason(step.noResult);
          setResult("fail");
        }
      }
    }
  };

  const currentStepData = steps.find((s) => s.id === currentStep);
  const stepIndex = steps.findIndex((s) => s.id === currentStep);
  const totalSteps = steps.filter((s) => s.question !== "").length;

  if (!open) {
    return (
      <button
        onClick={() => {
          setOpen(true);
          reset();
        }}
        className="w-full mt-4 py-3 px-4 rounded-lg font-semibold text-sm bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer"
      >
        DM Quick Check: Can They Use {feat.name}?
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
            {feat.name} Check
          </h3>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-dim)] hover:text-[var(--text)] text-xl leading-none cursor-pointer"
          >
            &times;
          </button>
        </div>

        {/* Result State */}
        {result === "pass" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--green-bg)] border-2 border-[var(--green)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-[var(--green)] font-['Cinzel'] mb-2">
              Yes!
            </div>
            <p className="text-[var(--text-dim)] mb-6">
              They can use {feat.name}.
            </p>
            <button
              onClick={reset}
              className="px-6 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              Check Again
            </button>
          </div>
        )}

        {result === "fail" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-red-500 font-['Cinzel'] mb-2">
              No
            </div>
            <p className="text-[var(--text-dim)] mb-6">
              {failReason.replace("No - ", "")}
            </p>
            <button
              onClick={reset}
              className="px-6 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              Check Again
            </button>
          </div>
        )}

        {/* Question State */}
        {result === null && currentStepData && (
          <>
            {/* Progress indicator */}
            <div className="flex gap-1 mb-6">
              {steps.filter(s => s.question !== "").map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i < stepIndex ? "bg-[var(--green)]" : i === stepIndex ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">
                {currentStepData.question}
              </p>
              {currentStepData.detail && (
                <p className="text-sm text-[var(--text-dim)]">
                  {currentStepData.detail}
                </p>
              )}
            </div>

            {/* Yes/No Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => handleAnswer("yes")}
                className="flex-1 py-3 px-4 rounded-lg font-semibold bg-[var(--green-bg)] border-2 border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)] hover:text-white transition-all cursor-pointer"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer("no")}
                className="flex-1 py-3 px-4 rounded-lg font-semibold bg-red-500/10 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              >
                No
              </button>
            </div>

            {/* Back button */}
            {stepIndex > 0 && (
              <button
                onClick={reset}
                className="w-full mt-3 py-2 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-colors cursor-pointer"
              >
                Start Over
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
