"use client";

import { useState } from "react";
import jsPDF from "jspdf";

const GEMINI_API_KEY = "AIzaSyBlYNgNuypnwwxTb4JsbU5GvZzP0f3KcJo";
const GEMINI_MODEL = "gemini-2.0-flash";

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
  const [apiStatus, setApiStatus] = useState<"untested" | "testing" | "success" | "failed">("untested");
  const [apiError, setApiError] = useState("");

  const currentStep = STEPS[stepIndex];
  const progress = ((stepIndex) / (STEPS.length)) * 100;

  const updateChoice = <K extends keyof CharacterChoices>(key: K, value: CharacterChoices[K]) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
  };

  // Select and auto-advance to next step
  const selectAndAdvance = <K extends keyof CharacterChoices>(key: K, value: CharacterChoices[K]) => {
    setChoices((prev) => ({ ...prev, [key]: value }));
    // Small delay so user sees the selection highlight
    setTimeout(() => {
      // Handle special cases
      if (key === "usesMagic" && value === false) {
        setStepIndex((i) => i + 2); // Skip magicStyle
      } else if (stepIndex < STEPS.length - 1) {
        setStepIndex((i) => i + 1);
      } else {
        generateCharacter();
      }
    }, 150);
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
    setApiStatus("untested");
    setApiError("");
  };

  const testApiConnection = async () => {
    setApiStatus("testing");
    setApiError("");
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "Say 'ready' and nothing else." }] }],
            generationConfig: { temperature: 0, maxOutputTokens: 10 },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText.slice(0, 100)}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        setApiStatus("success");
      } else {
        throw new Error("No response from API");
      }
    } catch (err) {
      setApiStatus("failed");
      setApiError(err instanceof Error ? err.message : "Connection failed");
    }
  };

  const generateCharacter = async () => {
    setIsGenerating(true);
    setError("");

    try {
      const prompt = buildPrompt(choices as CharacterChoices);

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 4096,
              responseMimeType: "application/json",
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API error:", errorText);
        throw new Error("Failed to generate character. Please try again.");
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!generatedText) {
        console.error("No generated text in response:", JSON.stringify(data));
        throw new Error("No response from AI. Please try again.");
      }

      // Parse the JSON response from Gemini
      let cleanedText = generatedText.trim();
      if (cleanedText.startsWith("```json")) cleanedText = cleanedText.slice(7);
      if (cleanedText.startsWith("```")) cleanedText = cleanedText.slice(3);
      if (cleanedText.endsWith("```")) cleanedText = cleanedText.slice(0, -3);
      cleanedText = cleanedText.trim();

      const character = JSON.parse(cleanedText);
      setCharacter(character);
    } catch (err) {
      console.error("Character generation error:", err);
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
                    onClick={() => selectAndAdvance("level", l)}
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

              {/* API Test Section */}
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[var(--text-dim)]">
                    {apiStatus === "untested" && "Test AI connection before starting"}
                    {apiStatus === "testing" && "Testing connection..."}
                    {apiStatus === "success" && (
                      <span className="text-green-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        AI ready!
                      </span>
                    )}
                    {apiStatus === "failed" && (
                      <span className="text-red-500">{apiError}</span>
                    )}
                  </div>
                  <button
                    onClick={testApiConnection}
                    disabled={apiStatus === "testing"}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      apiStatus === "testing"
                        ? "bg-[var(--surface)] text-[var(--text-dim)]"
                        : apiStatus === "success"
                        ? "bg-green-500/20 text-green-500 border border-green-500"
                        : "bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]"
                    }`}
                  >
                    {apiStatus === "testing" ? "Testing..." : apiStatus === "success" ? "Retest" : "Test API"}
                  </button>
                </div>
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
                onKeyDown={(e) => e.key === "Enter" && nextStep()}
                placeholder="Enter a name or press Enter to skip..."
                className="w-full p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] outline-none text-lg"
                autoFocus
              />
              <p className="text-sm text-[var(--text-dim)] mt-3">
                Press Enter to continue (AI will generate a name if left blank)
              </p>
            </QuestionCard>
          )}

          {/* Step 3: Concept */}
          {currentStep === "concept" && (
            <QuestionCard
              title="Describe your character in a few words"
              subtitle="What's their vibe? (Press Enter to continue)"
            >
              <textarea
                value={choices.concept || ""}
                onChange={(e) => updateChoice("concept", e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), nextStep())}
                placeholder="e.g., A grizzled veteran seeking redemption..."
                className="w-full h-24 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] outline-none resize-none"
                autoFocus
              />
              <div className="flex flex-wrap gap-2 mt-3">
                {["A mysterious wanderer", "A cheerful adventurer", "A reluctant hero", "A cunning scoundrel"].map((ex) => (
                  <button
                    key={ex}
                    onClick={() => selectAndAdvance("concept", ex)}
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
                    onClick={() => selectAndAdvance("race", race.name)}
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
                    onClick={() => selectAndAdvance("combatStyle", style.key as CharacterChoices["combatStyle"])}
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
                  onClick={() => selectAndAdvance("usesMagic", true)}
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
                  onClick={() => selectAndAdvance("usesMagic", false)}
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
                    onClick={() => selectAndAdvance("magicStyle", style.key as CharacterChoices["magicStyle"])}
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
                    onClick={() => selectAndAdvance("classHint", cls.name)}
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
                onClick={() => selectAndAdvance("classHint", "")}
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
                    onClick={() => selectAndAdvance("personality", p)}
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
                    onClick={() => selectAndAdvance("background", bg)}
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
                    onClick={() => selectAndAdvance("motivation", m)}
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
                    onClick={() => selectAndAdvance("strength", s)}
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
                    onClick={() => selectAndAdvance("weakness", w)}
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
            {/* Only show Next button for steps that need manual advancement */}
            {(currentStep === "level" || currentStep === "name" || currentStep === "concept") && (
              <button
                onClick={nextStep}
                disabled={!isStepComplete(currentStep, choices)}
                className="flex-1 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold hover:brightness-110 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            )}
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

function exportCharacterToPDF(character: GeneratedCharacter) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 15;

  const getModifier = (score: number) => {
    const mod = Math.floor((score - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  const classDisplay = character.classes.map((c) => `${c.name} ${c.level}`).join(" / ");
  const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);

  // Helper for section headers
  const addSectionHeader = (text: string) => {
    if (y > 260) {
      doc.addPage();
      y = 15;
    }
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(139, 69, 19); // Brown color for headers
    doc.text(text, margin, y);
    y += 7;
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
  };

  // Helper for wrapped text
  const addWrappedText = (text: string, fontSize: number = 10) => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      if (y > 280) {
        doc.addPage();
        y = 15;
      }
      doc.text(line, margin, y);
      y += fontSize * 0.5;
    });
    y += 2;
  };

  // === HEADER ===
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(character.name, pageWidth / 2, y, { align: "center" });
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text(`Level ${totalLevel} ${character.race} ${classDisplay}`, pageWidth / 2, y, { align: "center" });
  y += 6;
  doc.text(`${character.background} • ${character.alignment}`, pageWidth / 2, y, { align: "center" });
  doc.setTextColor(0, 0, 0);
  y += 10;

  // === CORE STATS ROW ===
  doc.setFillColor(245, 245, 245);
  doc.roundedRect(margin, y, contentWidth, 20, 3, 3, "F");

  const statBoxWidth = contentWidth / 3;
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");

  // HP
  doc.setTextColor(180, 50, 50);
  doc.text(String(character.hitPoints), margin + statBoxWidth / 2, y + 10, { align: "center" });
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("Hit Points", margin + statBoxWidth / 2, y + 16, { align: "center" });

  // AC
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(50, 100, 180);
  doc.text(String(character.armorClass), margin + statBoxWidth * 1.5, y + 10, { align: "center" });
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("Armor Class", margin + statBoxWidth * 1.5, y + 16, { align: "center" });

  // Speed
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(139, 69, 19);
  doc.text(`${character.speed} ft`, margin + statBoxWidth * 2.5, y + 10, { align: "center" });
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("Speed", margin + statBoxWidth * 2.5, y + 16, { align: "center" });

  doc.setTextColor(0, 0, 0);
  y += 28;

  // === ABILITY SCORES ===
  const abilityBoxWidth = contentWidth / 6;
  const abilities = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  const abilityValues = [
    character.abilityScores.strength,
    character.abilityScores.dexterity,
    character.abilityScores.constitution,
    character.abilityScores.intelligence,
    character.abilityScores.wisdom,
    character.abilityScores.charisma,
  ];

  doc.setFillColor(250, 250, 250);
  doc.roundedRect(margin, y, contentWidth, 22, 3, 3, "F");

  abilities.forEach((ability, i) => {
    const x = margin + abilityBoxWidth * i + abilityBoxWidth / 2;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text(ability, x, y + 5, { align: "center" });

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.text(String(abilityValues[i]), x, y + 13, { align: "center" });

    doc.setFontSize(9);
    doc.setTextColor(139, 69, 19);
    doc.text(getModifier(abilityValues[i]), x, y + 19, { align: "center" });
  });

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  y += 30;

  // === SAVING THROWS & PROFICIENCY ===
  addSectionHeader("Saving Throws");
  doc.setFontSize(10);
  doc.text(`Proficiency Bonus: +${character.proficiencyBonus}`, margin, y);
  y += 5;
  doc.text(character.savingThrows.join(", "), margin, y);
  y += 8;

  // === SKILLS ===
  addSectionHeader("Skills");
  addWrappedText(character.skills.join(", "));
  y += 3;

  // === LANGUAGES ===
  addSectionHeader("Languages");
  addWrappedText(character.languages.join(", "));
  y += 3;

  // === EQUIPMENT ===
  addSectionHeader("Equipment");
  character.equipment.forEach((item) => {
    if (y > 280) {
      doc.addPage();
      y = 15;
    }
    doc.setFontSize(10);
    doc.text(`• ${item}`, margin, y);
    y += 5;
  });
  y += 3;

  // === FEATURES & TRAITS ===
  addSectionHeader("Features & Traits");
  character.features.forEach((feature) => {
    if (y > 270) {
      doc.addPage();
      y = 15;
    }
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(139, 69, 19);
    doc.text(feature.name, margin, y);
    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    addWrappedText(feature.description, 9);
    y += 2;
  });

  // === SPELLS (if any) ===
  if (character.spells && (character.spells.cantrips?.length || character.spells.knownSpells?.length)) {
    addSectionHeader("Spellcasting");

    if (character.spells.cantrips && character.spells.cantrips.length > 0) {
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Cantrips:", margin, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      addWrappedText(character.spells.cantrips.join(", "), 9);
    }

    if (character.spells.spellSlots && character.spells.spellSlots.length > 0) {
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Spell Slots:", margin, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      const slots = character.spells.spellSlots.map((s) => `Level ${s.level}: ${s.slots}`).join(", ");
      addWrappedText(slots, 9);
    }

    if (character.spells.knownSpells && character.spells.knownSpells.length > 0) {
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Prepared/Known Spells:", margin, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      character.spells.knownSpells.forEach((lvl) => {
        const levelLabel = lvl.level === 0 ? "Cantrips" : `Level ${lvl.level}`;
        addWrappedText(`${levelLabel}: ${lvl.spells.join(", ")}`, 9);
      });
    }
    y += 3;
  }

  // === PERSONALITY ===
  addSectionHeader("Personality");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("Traits: ", margin, y);
  doc.setFont("helvetica", "normal");
  const traitsText = character.personality.traits.join(" ");
  const traitsLines = doc.splitTextToSize(traitsText, contentWidth - 20);
  doc.text(traitsLines, margin + 15, y);
  y += traitsLines.length * 4 + 3;

  doc.setFont("helvetica", "bold");
  doc.text("Ideals: ", margin, y);
  doc.setFont("helvetica", "normal");
  const idealsText = character.personality.ideals.join(" ");
  const idealsLines = doc.splitTextToSize(idealsText, contentWidth - 20);
  doc.text(idealsLines, margin + 15, y);
  y += idealsLines.length * 4 + 3;

  doc.setFont("helvetica", "bold");
  doc.text("Bonds: ", margin, y);
  doc.setFont("helvetica", "normal");
  const bondsText = character.personality.bonds.join(" ");
  const bondsLines = doc.splitTextToSize(bondsText, contentWidth - 20);
  doc.text(bondsLines, margin + 15, y);
  y += bondsLines.length * 4 + 3;

  doc.setFont("helvetica", "bold");
  doc.text("Flaws: ", margin, y);
  doc.setFont("helvetica", "normal");
  const flawsText = character.personality.flaws.join(" ");
  const flawsLines = doc.splitTextToSize(flawsText, contentWidth - 20);
  doc.text(flawsLines, margin + 15, y);
  y += flawsLines.length * 4 + 6;

  // === APPEARANCE ===
  if (y > 250) {
    doc.addPage();
    y = 15;
  }
  addSectionHeader("Appearance");
  addWrappedText(character.appearance, 9);
  y += 3;

  // === BACKSTORY ===
  if (y > 240) {
    doc.addPage();
    y = 15;
  }
  addSectionHeader("Backstory");
  addWrappedText(character.backstory, 9);

  // === FOOTER ===
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Generated by Muse Dungeon • Page ${i} of ${totalPages}`, pageWidth / 2, 290, { align: "center" });
  }

  // Save the PDF
  const fileName = `${character.name.replace(/[^a-zA-Z0-9]/g, "_")}_Character_Sheet.pdf`;
  doc.save(fileName);
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
        <div className="flex gap-2">
          <button
            onClick={() => exportCharacterToPDF(character)}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:brightness-110 transition-all cursor-pointer font-semibold"
          >
            Export PDF
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
          >
            Create Another
          </button>
        </div>
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

function buildPrompt(choices: CharacterChoices): string {
  const combatStyleDesc = {
    melee: "prefers close combat with melee weapons",
    ranged: "prefers ranged combat with bows or crossbows",
    mixed: "is flexible and adapts to any combat situation",
    avoid: "prefers to avoid direct combat, using stealth, diplomacy, or magic",
  };

  const magicStyleDesc = {
    offensive: "focuses on destructive magic like fireballs and lightning",
    healing: "focuses on healing and supporting allies",
    utility: "focuses on clever tricks, illusions, and problem-solving spells",
    nature: "focuses on nature magic, speaking with animals, and controlling plants",
    dark: "focuses on necromancy, curses, and forbidden powers",
  };

  let classGuidance = "";
  if (choices.classHint) {
    classGuidance = `The player has expressed interest in playing a ${choices.classHint}.`;
  } else {
    classGuidance = `Choose the best class based on these preferences: ${combatStyleDesc[choices.combatStyle]}${
      choices.usesMagic ? ` and uses magic (${choices.magicStyle ? magicStyleDesc[choices.magicStyle] : "any style"})` : " and does not use magic"
    }.`;
  }

  return `You are a D&D 5e character creation expert. Create a complete, playable character sheet based on these player choices:

LEVEL: ${choices.level}
${choices.name ? `PREFERRED NAME: ${choices.name}` : "Generate an appropriate fantasy name for this character."}
RACE: ${choices.race}
${choices.concept ? `CHARACTER CONCEPT: ${choices.concept}` : ""}

COMBAT STYLE: ${combatStyleDesc[choices.combatStyle]}
MAGIC: ${choices.usesMagic ? `Yes - ${choices.magicStyle ? magicStyleDesc[choices.magicStyle] : "general magic user"}` : "No magic, purely martial"}

${classGuidance}

PERSONALITY: ${choices.personality}
BACKGROUND: ${choices.background}
MOTIVATION: ${choices.motivation}
GREATEST STRENGTH: ${choices.strength}
FATAL FLAW: ${choices.weakness}

Generate a complete D&D 5e character following these rules:
- Use point buy (27 points) for ability scores, distributed optimally for the chosen class
- Apply racial ability score bonuses (use 2024 rules: +2/+1 or +1/+1/+1 of player's choice)
- Calculate HP correctly (max at level 1, average rounded up for subsequent levels + CON modifier per level)
- Include all class features gained by this level
- For spellcasters, include appropriate cantrips and spells that match the magic style preference
- Select thematic equipment appropriate for the class and background
- Create a compelling 2-3 paragraph backstory incorporating their motivation, background, strength, and flaw
- The personality traits, ideals, bonds, and flaws should reflect the player's choices

Return ONLY valid JSON (no markdown code blocks, no explanations) matching this exact structure:
{
  "name": "Character Name",
  "race": "Race (including subrace if applicable)",
  "classes": [{"name": "Class Name", "level": ${choices.level}}],
  "background": "${choices.background}",
  "alignment": "Alignment that fits the personality",
  "abilityScores": {
    "strength": number,
    "dexterity": number,
    "constitution": number,
    "intelligence": number,
    "wisdom": number,
    "charisma": number
  },
  "hitPoints": number,
  "armorClass": number,
  "speed": number,
  "proficiencyBonus": number,
  "savingThrows": ["list of proficient saves"],
  "skills": ["list of proficient skills"],
  "languages": ["list of known languages"],
  "equipment": ["list of equipment items"],
  "features": [{"name": "Feature Name", "description": "Brief description"}],
  "spells": {
    "cantrips": ["list if spellcaster, empty array if not"],
    "spellSlots": [{"level": 1, "slots": 2}],
    "knownSpells": [{"level": 1, "spells": ["spell names"]}]
  },
  "backstory": "2-3 paragraph backstory incorporating their motivation and flaw",
  "personality": {
    "traits": ["2 personality traits based on ${choices.personality}"],
    "ideals": ["1 ideal"],
    "bonds": ["1 bond related to their motivation: ${choices.motivation}"],
    "flaws": ["1 flaw based on: ${choices.weakness}"]
  },
  "appearance": "Brief physical description fitting the race and class"
}`;
}
