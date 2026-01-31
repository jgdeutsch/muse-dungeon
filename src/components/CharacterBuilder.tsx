"use client";

import { useState } from "react";

type BuilderStep =
  | "level"
  | "name"
  | "concept"
  | "race"
  | "combatStyle"
  | "magic"
  | "magicStyle"
  | "classHint"
  | "personality"
  | "background"
  | "motivation"
  | "strength"
  | "weakness"
  | "generating"
  | "done";

type CharacterChoices = {
  level: number;
  name: string;
  concept: string;
  race: string;
  combatStyle: "melee" | "ranged" | "mixed" | "avoid";
  usesMagic: boolean;
  magicStyle?: "offensive" | "healing" | "utility" | "nature" | "dark";
  classHint?: string;
  personality: string;
  background: string;
  motivation: string;
  strength: string;
  weakness: string;
};

type GeneratedCharacter = {
  name: string;
  race: string;
  classes: { name: string; level: number }[];
  background: string;
  alignment: string;
  abilityScores: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  hitPoints: number;
  armorClass: number;
  speed: number;
  proficiencyBonus: number;
  savingThrows: string[];
  skills: string[];
  languages: string[];
  equipment: string[];
  features: { name: string; description: string }[];
  spells?: {
    cantrips?: string[];
    spellSlots?: { level: number; slots: number }[];
    knownSpells?: { level: number; spells: string[] }[];
  };
  backstory: string;
  personality: {
    traits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
  };
  appearance: string;
};

const STEPS: BuilderStep[] = [
  "level", "name", "concept", "race", "combatStyle", "magic", "magicStyle",
  "classHint", "personality", "background", "motivation", "strength", "weakness"
];

const RACES = [
  { name: "Human", desc: "Versatile and ambitious" },
  { name: "Elf", desc: "Graceful and long-lived" },
  { name: "Dwarf", desc: "Tough and traditional" },
  { name: "Halfling", desc: "Lucky and cheerful" },
  { name: "Half-Elf", desc: "Charismatic diplomat" },
  { name: "Half-Orc", desc: "Fierce and resilient" },
  { name: "Tiefling", desc: "Infernal heritage" },
  { name: "Dragonborn", desc: "Draconic pride" },
  { name: "Gnome", desc: "Curious inventor" },
  { name: "Aasimar", desc: "Celestial touched" },
];

const COMBAT_STYLES = [
  { key: "melee", name: "Up Close & Personal", desc: "Sword, axe, or fists — right in their face", icon: "⚔️" },
  { key: "ranged", name: "Keep Your Distance", desc: "Bows, crossbows, thrown weapons", icon: "🏹" },
  { key: "mixed", name: "Flexible Fighter", desc: "Adapt to any situation", icon: "🎯" },
  { key: "avoid", name: "Avoid Combat", desc: "Talk, sneak, or magic your way out", icon: "🤫" },
];

const MAGIC_STYLES = [
  { key: "offensive", name: "Destruction", desc: "Fireball, lightning, pure damage", icon: "🔥" },
  { key: "healing", name: "Healing & Support", desc: "Keep allies alive and buffed", icon: "✨" },
  { key: "utility", name: "Clever Tricks", desc: "Illusions, charms, problem-solving", icon: "🎭" },
  { key: "nature", name: "Nature Magic", desc: "Speak with animals, control plants", icon: "🌿" },
  { key: "dark", name: "Dark Arts", desc: "Necromancy, curses, forbidden power", icon: "💀" },
];

const CLASS_HINTS = [
  { name: "Barbarian", desc: "Rage-fueled warrior", combat: "melee", magic: false },
  { name: "Bard", desc: "Musical magic user", combat: "mixed", magic: true },
  { name: "Cleric", desc: "Divine spellcaster", combat: "mixed", magic: true },
  { name: "Druid", desc: "Nature's guardian", combat: "mixed", magic: true },
  { name: "Fighter", desc: "Martial expert", combat: "mixed", magic: false },
  { name: "Monk", desc: "Martial artist", combat: "melee", magic: false },
  { name: "Paladin", desc: "Holy warrior", combat: "melee", magic: true },
  { name: "Ranger", desc: "Wilderness hunter", combat: "ranged", magic: true },
  { name: "Rogue", desc: "Stealthy striker", combat: "mixed", magic: false },
  { name: "Sorcerer", desc: "Innate magic", combat: "avoid", magic: true },
  { name: "Warlock", desc: "Pact magic user", combat: "mixed", magic: true },
  { name: "Wizard", desc: "Learned spellcaster", combat: "avoid", magic: true },
];

const PERSONALITIES = [
  "Brave and heroic",
  "Cunning and clever",
  "Kind and compassionate",
  "Mysterious and secretive",
  "Cheerful and optimistic",
  "Gruff but loyal",
  "Noble and honorable",
  "Wild and unpredictable",
];

const BACKGROUNDS = [
  "Soldier", "Criminal", "Noble", "Sage", "Outlander",
  "Folk Hero", "Entertainer", "Acolyte", "Merchant", "Hermit"
];

const MOTIVATIONS = [
  "Seeking revenge",
  "Protecting loved ones",
  "Searching for treasure",
  "Atoning for past sins",
  "Seeking knowledge",
  "Running from something",
  "Proving themselves",
  "Adventure for its own sake",
];

const STRENGTHS = [
  "Never gives up",
  "Thinks quickly on their feet",
  "Incredibly loyal to friends",
  "Natural leader",
  "Master of their craft",
  "Surprisingly wise",
];

const WEAKNESSES = [
  "Too trusting",
  "Hot-headed temper",
  "Haunted by the past",
  "Afraid of failure",
  "Can't resist a challenge",
  "Terrible at lying",
];

export function CharacterBuilder() {
  const [stepIndex, setStepIndex] = useState(0);
  const [choices, setChoices] = useState<Partial<CharacterChoices>>({
    level: 1,
  });
  const [character, setCharacter] = useState<GeneratedCharacter | null>(null);
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const currentStep = STEPS[stepIndex];
  const progress = ((stepIndex) / (STEPS.length)) * 100;

  const updateChoice = <K extends keyof CharacterChoices>(key: K, value: CharacterChoices[K]) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    // Skip magicStyle if they don't use magic
    if (currentStep === "magic" && !choices.usesMagic) {
      setStepIndex((i) => i + 2); // Skip magicStyle
    } else if (stepIndex < STEPS.length - 1) {
      setStepIndex((i) => i + 1);
    } else {
      generateCharacter();
    }
  };

  const prevStep = () => {
    // Skip magicStyle when going back if they don't use magic
    if (currentStep === "classHint" && !choices.usesMagic) {
      setStepIndex((i) => i - 2);
    } else if (stepIndex > 0) {
      setStepIndex((i) => i - 1);
    }
  };

  const reset = () => {
    setStepIndex(0);
    setChoices({ level: 1 });
    setCharacter(null);
    setError("");
    setIsGenerating(false);
  };

  const generateCharacter = async () => {
    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate-character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(choices),
      });

      const text = await response.text();

      if (!response.ok) {
        let errorMsg = "Failed to generate character";
        try {
          const errorData = JSON.parse(text);
          errorMsg = errorData.error || errorMsg;
        } catch {
          // Use default error message
        }
        throw new Error(errorMsg);
      }

      const data = JSON.parse(text);
      setCharacter(data.character);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStepIndex(STEPS.length - 1); // Go back to last question
    } finally {
      setIsGenerating(false);
    }
  };

  // Get suggested classes based on choices
  const getSuggestedClasses = () => {
    return CLASS_HINTS.filter((c) => {
      if (choices.usesMagic && !c.magic) return false;
      if (!choices.usesMagic && c.magic) return false;
      if (choices.combatStyle === "melee" && c.combat === "ranged") return false;
      if (choices.combatStyle === "ranged" && c.combat === "melee") return false;
      if (choices.combatStyle === "avoid" && c.combat === "melee") return false;
      return true;
    });
  };

  // Generating State
  if (isGenerating) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
            <h2 className="font-['Cinzel'] text-2xl font-bold mb-2">Creating Your Character...</h2>
            <p className="text-[var(--text-dim)]">Rolling dice, consulting ancient tomes...</p>
          </div>
          <CharacterPreview choices={choices} />
        </div>
      </div>
    );
  }

  // Done - Show Character Sheet
  if (character) {
    return <CharacterSheet character={character} onReset={reset} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-[var(--text-dim)] mb-2">
          <span>Question {stepIndex + 1} of {STEPS.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-[var(--surface)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Question Panel */}
        <div>
          {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
              {error}
            </div>
          )}

          {/* Step 1: Level */}
          {currentStep === "level" && (
            <QuestionCard
              title="What level is your character?"
              subtitle="This affects their power and abilities"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => updateChoice("level", Math.max(1, (choices.level || 1) - 1))}
                  className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] text-2xl hover:border-[var(--accent)] transition-colors cursor-pointer"
                >
                  −
                </button>
                <div className="w-24 text-center">
                  <span className="text-5xl font-bold text-[var(--accent)]">{choices.level || 1}</span>
                </div>
                <button
                  onClick={() => updateChoice("level", Math.min(20, (choices.level || 1) + 1))}
                  className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] text-2xl hover:border-[var(--accent)] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {[1, 3, 5, 10, 15, 20].map((l) => (
                  <button
                    key={l}
                    onClick={() => updateChoice("level", l)}
                    className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                      choices.level === l
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    Level {l}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 2: Name */}
          {currentStep === "name" && (
            <QuestionCard
              title="What's your character's name?"
              subtitle="Or leave blank and we'll create one"
            >
              <input
                type="text"
                value={choices.name || ""}
                onChange={(e) => updateChoice("name", e.target.value)}
                placeholder="Enter a name or skip..."
                className="w-full p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] outline-none text-lg"
              />
              <p className="text-sm text-[var(--text-dim)] mt-3">
                Tip: The AI will generate a fitting name if you skip this
              </p>
            </QuestionCard>
          )}

          {/* Step 3: Concept */}
          {currentStep === "concept" && (
            <QuestionCard
              title="Describe your character in a few words"
              subtitle="What's their vibe?"
            >
              <textarea
                value={choices.concept || ""}
                onChange={(e) => updateChoice("concept", e.target.value)}
                placeholder="e.g., A grizzled veteran seeking redemption..."
                className="w-full h-24 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] outline-none resize-none"
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {["A mysterious wanderer", "A cheerful adventurer", "A reluctant hero", "A cunning scoundrel"].map((ex) => (
                  <button
                    key={ex}
                    onClick={() => updateChoice("concept", ex)}
                    className="px-3 py-1 text-sm rounded-full bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 4: Race */}
          {currentStep === "race" && (
            <QuestionCard
              title="Choose your race"
              subtitle="Each brings unique traits"
            >
              <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                {RACES.map((race) => (
                  <button
                    key={race.name}
                    onClick={() => updateChoice("race", race.name)}
                    className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      choices.race === race.name
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    <div className="font-semibold">{race.name}</div>
                    <div className={`text-xs ${choices.race === race.name ? "text-white/80" : "text-[var(--text-dim)]"}`}>
                      {race.desc}
                    </div>
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 5: Combat Style */}
          {currentStep === "combatStyle" && (
            <QuestionCard
              title="How do you prefer to fight?"
              subtitle="This helps determine your class"
            >
              <div className="space-y-3">
                {COMBAT_STYLES.map((style) => (
                  <button
                    key={style.key}
                    onClick={() => updateChoice("combatStyle", style.key as CharacterChoices["combatStyle"])}
                    className={`w-full p-4 rounded-lg border text-left transition-colors cursor-pointer flex items-center gap-4 ${
                      choices.combatStyle === style.key
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    <span className="text-2xl">{style.icon}</span>
                    <div>
                      <div className="font-semibold">{style.name}</div>
                      <div className={`text-sm ${choices.combatStyle === style.key ? "text-white/80" : "text-[var(--text-dim)]"}`}>
                        {style.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 6: Magic */}
          {currentStep === "magic" && (
            <QuestionCard
              title="Do you want to use magic?"
              subtitle="Spells can solve many problems"
            >
              <div className="flex gap-4">
                <button
                  onClick={() => updateChoice("usesMagic", true)}
                  className={`flex-1 p-6 rounded-lg border text-center transition-colors cursor-pointer ${
                    choices.usesMagic === true
                      ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                      : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                  }`}
                >
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-semibold">Yes, Magic!</div>
                  <div className={`text-sm ${choices.usesMagic === true ? "text-white/80" : "text-[var(--text-dim)]"}`}>
                    Cast spells and wield arcane power
                  </div>
                </button>
                <button
                  onClick={() => updateChoice("usesMagic", false)}
                  className={`flex-1 p-6 rounded-lg border text-center transition-colors cursor-pointer ${
                    choices.usesMagic === false
                      ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                      : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                  }`}
                >
                  <div className="text-3xl mb-2">💪</div>
                  <div className="font-semibold">No Magic</div>
                  <div className={`text-sm ${choices.usesMagic === false ? "text-white/80" : "text-[var(--text-dim)]"}`}>
                    Rely on skill and strength alone
                  </div>
                </button>
              </div>
            </QuestionCard>
          )}

          {/* Step 7: Magic Style */}
          {currentStep === "magicStyle" && choices.usesMagic && (
            <QuestionCard
              title="What kind of magic appeals to you?"
              subtitle="This shapes your spell selection"
            >
              <div className="space-y-3">
                {MAGIC_STYLES.map((style) => (
                  <button
                    key={style.key}
                    onClick={() => updateChoice("magicStyle", style.key as CharacterChoices["magicStyle"])}
                    className={`w-full p-4 rounded-lg border text-left transition-colors cursor-pointer flex items-center gap-4 ${
                      choices.magicStyle === style.key
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    <span className="text-2xl">{style.icon}</span>
                    <div>
                      <div className="font-semibold">{style.name}</div>
                      <div className={`text-sm ${choices.magicStyle === style.key ? "text-white/80" : "text-[var(--text-dim)]"}`}>
                        {style.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 8: Class Hint */}
          {currentStep === "classHint" && (
            <QuestionCard
              title="Any class preference?"
              subtitle="Based on your choices, these fit best"
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
                {getSuggestedClasses().map((cls) => (
                  <button
                    key={cls.name}
                    onClick={() => updateChoice("classHint", cls.name)}
                    className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      choices.classHint === cls.name
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    <div className="font-semibold">{cls.name}</div>
                    <div className={`text-xs ${choices.classHint === cls.name ? "text-white/80" : "text-[var(--text-dim)]"}`}>
                      {cls.desc}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => updateChoice("classHint", "")}
                className={`w-full p-3 rounded-lg border transition-colors cursor-pointer ${
                  choices.classHint === ""
                    ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                    : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                Surprise me!
              </button>
            </QuestionCard>
          )}

          {/* Step 9: Personality */}
          {currentStep === "personality" && (
            <QuestionCard
              title="What's their personality like?"
              subtitle="How do they act around others?"
            >
              <div className="grid grid-cols-2 gap-2">
                {PERSONALITIES.map((p) => (
                  <button
                    key={p}
                    onClick={() => updateChoice("personality", p)}
                    className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                      choices.personality === p
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 10: Background */}
          {currentStep === "background" && (
            <QuestionCard
              title="What was their life before adventuring?"
              subtitle="Their background shapes their skills"
            >
              <div className="grid grid-cols-2 gap-2">
                {BACKGROUNDS.map((bg) => (
                  <button
                    key={bg}
                    onClick={() => updateChoice("background", bg)}
                    className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                      choices.background === bg
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 11: Motivation */}
          {currentStep === "motivation" && (
            <QuestionCard
              title="What drives them to adventure?"
              subtitle="Everyone needs a reason"
            >
              <div className="grid grid-cols-2 gap-2">
                {MOTIVATIONS.map((m) => (
                  <button
                    key={m}
                    onClick={() => updateChoice("motivation", m)}
                    className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                      choices.motivation === m
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 12: Strength */}
          {currentStep === "strength" && (
            <QuestionCard
              title="What's their greatest strength?"
              subtitle="What makes them special?"
            >
              <div className="space-y-2">
                {STRENGTHS.map((s) => (
                  <button
                    key={s}
                    onClick={() => updateChoice("strength", s)}
                    className={`w-full p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      choices.strength === s
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Step 13: Weakness */}
          {currentStep === "weakness" && (
            <QuestionCard
              title="What's their fatal flaw?"
              subtitle="Flaws make characters interesting"
            >
              <div className="space-y-2">
                {WEAKNESSES.map((w) => (
                  <button
                    key={w}
                    onClick={() => updateChoice("weakness", w)}
                    className={`w-full p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      choices.weakness === w
                        ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                        : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </QuestionCard>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {stepIndex > 0 && (
              <button
                onClick={prevStep}
                className="px-6 py-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                ← Back
              </button>
            )}
            <button
              onClick={nextStep}
              disabled={!isStepComplete(currentStep, choices)}
              className="flex-1 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:brightness-110 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {stepIndex === STEPS.length - 1 ? "Generate Character!" : "Next →"}
            </button>
          </div>
        </div>

        {/* Live Preview Panel */}
        <CharacterPreview choices={choices} />
      </div>
    </div>
  );
}

function QuestionCard({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-['Cinzel'] text-2xl font-bold mb-1">{title}</h2>
      <p className="text-[var(--text-dim)] mb-6">{subtitle}</p>
      {children}
    </div>
  );
}

function CharacterPreview({ choices }: { choices: Partial<CharacterChoices> }) {
  const filledCount = Object.values(choices).filter((v) => v !== undefined && v !== "").length;

  return (
    <div className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] sticky top-4">
      <h3 className="font-['Cinzel'] text-lg font-semibold mb-4 text-[var(--accent)]">
        Your Character
      </h3>

      {/* Character Portrait Placeholder */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border)] flex items-center justify-center text-4xl">
        {choices.race === "Dragonborn" && "🐉"}
        {choices.race === "Elf" && "🧝"}
        {choices.race === "Dwarf" && "🧔"}
        {choices.race === "Human" && "👤"}
        {choices.race === "Halfling" && "🍀"}
        {choices.race === "Half-Orc" && "👹"}
        {choices.race === "Tiefling" && "😈"}
        {choices.race === "Gnome" && "🔧"}
        {choices.race === "Half-Elf" && "🌟"}
        {choices.race === "Aasimar" && "👼"}
        {!choices.race && "❓"}
      </div>

      {/* Name */}
      <div className="text-center mb-4">
        <div className="font-['Cinzel'] text-xl font-bold">
          {choices.name || "???"}
        </div>
        <div className="text-sm text-[var(--text-dim)]">
          Level {choices.level || 1} {choices.race || "???"} {choices.classHint || "???"}
        </div>
      </div>

      {/* Filled Attributes */}
      <div className="space-y-2 text-sm">
        {choices.concept && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Concept:</span> {choices.concept}
          </div>
        )}
        {choices.combatStyle && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Combat:</span>{" "}
            {choices.combatStyle === "melee" && "Melee Fighter"}
            {choices.combatStyle === "ranged" && "Ranged Attacker"}
            {choices.combatStyle === "mixed" && "Flexible Fighter"}
            {choices.combatStyle === "avoid" && "Avoids Combat"}
          </div>
        )}
        {choices.usesMagic !== undefined && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Magic:</span>{" "}
            {choices.usesMagic ? `Yes (${choices.magicStyle || "..."})` : "No"}
          </div>
        )}
        {choices.personality && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Personality:</span> {choices.personality}
          </div>
        )}
        {choices.background && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Background:</span> {choices.background}
          </div>
        )}
        {choices.motivation && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Motivation:</span> {choices.motivation}
          </div>
        )}
        {choices.strength && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Strength:</span> {choices.strength}
          </div>
        )}
        {choices.weakness && (
          <div className="p-2 bg-[var(--bg-card)] rounded">
            <span className="text-[var(--text-dim)]">Flaw:</span> {choices.weakness}
          </div>
        )}
      </div>

      {/* Completion indicator */}
      <div className="mt-4 pt-4 border-t border-[var(--border)] text-center text-sm text-[var(--text-dim)]">
        {filledCount < 5 && "Keep going..."}
        {filledCount >= 5 && filledCount < 10 && "Looking good!"}
        {filledCount >= 10 && "Almost there!"}
      </div>
    </div>
  );
}

function isStepComplete(step: BuilderStep, choices: Partial<CharacterChoices>): boolean {
  switch (step) {
    case "level":
      return (choices.level || 0) >= 1;
    case "name":
      return true; // Optional
    case "concept":
      return true; // Optional
    case "race":
      return !!choices.race;
    case "combatStyle":
      return !!choices.combatStyle;
    case "magic":
      return choices.usesMagic !== undefined;
    case "magicStyle":
      return !choices.usesMagic || !!choices.magicStyle;
    case "classHint":
      return true; // Optional
    case "personality":
      return !!choices.personality;
    case "background":
      return !!choices.background;
    case "motivation":
      return !!choices.motivation;
    case "strength":
      return !!choices.strength;
    case "weakness":
      return !!choices.weakness;
    default:
      return true;
  }
}

function CharacterSheet({
  character,
  onReset,
}: {
  character: GeneratedCharacter;
  onReset: () => void;
}) {
  const classDisplay = character.classes
    .map((c) => `${c.name} ${c.level}`)
    .join(" / ");

  const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);

  const getModifier = (score: number) => {
    const mod = Math.floor((score - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="font-['Cinzel'] text-3xl font-bold mb-1">{character.name}</h1>
          <p className="text-[var(--text-dim)]">
            Level {totalLevel} {character.race} {classDisplay}
          </p>
          <p className="text-sm text-[var(--text-dim)]">
            {character.background} • {character.alignment}
          </p>
        </div>
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
        >
          Create Another
        </button>
      </div>

      {/* Core Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
          <div className="text-3xl font-bold text-red-500">{character.hitPoints}</div>
          <div className="text-sm text-[var(--text-dim)]">Hit Points</div>
        </div>
        <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
          <div className="text-3xl font-bold text-blue-500">{character.armorClass}</div>
          <div className="text-sm text-[var(--text-dim)]">Armor Class</div>
        </div>
        <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center">
          <div className="text-3xl font-bold text-[var(--accent)]">{character.speed} ft</div>
          <div className="text-sm text-[var(--text-dim)]">Speed</div>
        </div>
      </div>

      {/* Ability Scores */}
      <div className="grid grid-cols-6 gap-2 mb-6">
        {Object.entries(character.abilityScores).map(([ability, score]) => (
          <div
            key={ability}
            className="p-3 bg-[var(--surface)] rounded-lg border border-[var(--border)] text-center"
          >
            <div className="text-xs text-[var(--text-dim)] uppercase mb-1">
              {ability.slice(0, 3)}
            </div>
            <div className="text-2xl font-bold">{score}</div>
            <div className="text-sm text-[var(--accent)]">{getModifier(score)}</div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Saving Throws */}
          <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
            <h3 className="font-['Cinzel'] font-semibold mb-2">Saving Throws</h3>
            <p className="text-sm text-[var(--text-dim)]">
              {character.savingThrows.join(", ")}
            </p>
          </div>

          {/* Skills */}
          <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
            <h3 className="font-['Cinzel'] font-semibold mb-2">Skills</h3>
            <p className="text-sm text-[var(--text-dim)]">{character.skills.join(", ")}</p>
          </div>

          {/* Languages */}
          <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
            <h3 className="font-['Cinzel'] font-semibold mb-2">Languages</h3>
            <p className="text-sm text-[var(--text-dim)]">{character.languages.join(", ")}</p>
          </div>

          {/* Equipment */}
          <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
            <h3 className="font-['Cinzel'] font-semibold mb-2">Equipment</h3>
            <ul className="text-sm text-[var(--text-dim)] space-y-1">
              {character.equipment.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Features */}
          <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
            <h3 className="font-['Cinzel'] font-semibold mb-2">Features & Traits</h3>
            <div className="space-y-3">
              {character.features.map((f, i) => (
                <div key={i}>
                  <div className="font-medium text-[var(--accent)]">{f.name}</div>
                  <p className="text-sm text-[var(--text-dim)]">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spells (if any) */}
          {character.spells && (character.spells.cantrips?.length || character.spells.knownSpells?.length) && (
            <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
              <h3 className="font-['Cinzel'] font-semibold mb-2">Spellcasting</h3>
              {character.spells.cantrips && character.spells.cantrips.length > 0 && (
                <div className="mb-3">
                  <div className="text-sm font-medium text-[var(--accent)]">Cantrips</div>
                  <p className="text-sm text-[var(--text-dim)]">
                    {character.spells.cantrips.join(", ")}
                  </p>
                </div>
              )}
              {character.spells.spellSlots && character.spells.spellSlots.length > 0 && (
                <div className="mb-3">
                  <div className="text-sm font-medium text-[var(--accent)]">Spell Slots</div>
                  <p className="text-sm text-[var(--text-dim)]">
                    {character.spells.spellSlots.map((s) => `${s.level}st: ${s.slots}`).join(", ")}
                  </p>
                </div>
              )}
              {character.spells.knownSpells && character.spells.knownSpells.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-[var(--accent)]">Spells</div>
                  {character.spells.knownSpells.map((lvl, i) => (
                    <p key={i} className="text-sm text-[var(--text-dim)]">
                      {lvl.level === 0 ? "Cantrips" : `Level ${lvl.level}`}: {lvl.spells.join(", ")}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Personality */}
      <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] mb-6">
        <h3 className="font-['Cinzel'] font-semibold mb-3">Personality</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-[var(--accent)]">Traits: </span>
            <span className="text-[var(--text-dim)]">{character.personality.traits.join(" ")}</span>
          </div>
          <div>
            <span className="font-medium text-[var(--accent)]">Ideals: </span>
            <span className="text-[var(--text-dim)]">{character.personality.ideals.join(" ")}</span>
          </div>
          <div>
            <span className="font-medium text-[var(--accent)]">Bonds: </span>
            <span className="text-[var(--text-dim)]">{character.personality.bonds.join(" ")}</span>
          </div>
          <div>
            <span className="font-medium text-[var(--accent)]">Flaws: </span>
            <span className="text-[var(--text-dim)]">{character.personality.flaws.join(" ")}</span>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)] mb-6">
        <h3 className="font-['Cinzel'] font-semibold mb-2">Appearance</h3>
        <p className="text-sm text-[var(--text-dim)]">{character.appearance}</p>
      </div>

      {/* Backstory */}
      <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
        <h3 className="font-['Cinzel'] font-semibold mb-2">Backstory</h3>
        <p className="text-sm text-[var(--text-dim)] whitespace-pre-line">{character.backstory}</p>
      </div>
    </div>
  );
}
