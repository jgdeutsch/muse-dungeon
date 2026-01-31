"use client";

import { useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";

const GEMINI_API_KEY = "AIzaSyBxvpCeInudM1bs80tApSQ0XrqnKlaOXgk";
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

  // Test function to generate a sample character and export PDF
  const testPDFExport = () => {
    const sampleCharacter: GeneratedCharacter = {
      name: "Thorin Ironforge",
      race: "Dwarf",
      classes: [{ name: "Fighter", level: 5 }],
      background: "Soldier",
      alignment: "Lawful Good",
      abilityScores: {
        strength: 16,
        dexterity: 12,
        constitution: 16,
        intelligence: 10,
        wisdom: 13,
        charisma: 8,
      },
      hitPoints: 52,
      armorClass: 18,
      speed: 25,
      proficiencyBonus: 3,
      savingThrows: ["Strength", "Constitution"],
      skills: ["Athletics", "Intimidation", "Perception", "Survival"],
      languages: ["Common", "Dwarvish"],
      equipment: [
        "Chain mail",
        "Shield",
        "Battleaxe",
        "Handaxes (2)",
        "Dungeoneer's pack",
        "Insignia of rank",
      ],
      features: [
        { name: "Fighting Style: Defense", description: "+1 AC when wearing armor." },
        { name: "Second Wind", description: "Bonus action to regain 1d10+5 HP. Once per short rest." },
        { name: "Action Surge", description: "Take one additional action. Once per short rest." },
        { name: "Extra Attack", description: "Attack twice when taking the Attack action." },
        { name: "Darkvision", description: "See in dim light within 60 feet as if bright light." },
        { name: "Dwarven Resilience", description: "Advantage on saves vs poison; resistance to poison damage." },
      ],
      backstory: "Thorin served for twenty years in the mountain king's elite guard, defending the deep halls against orc incursions and the occasional dragon. When his regiment was disbanded after a treaty with the surface kingdoms, he found himself without purpose. Now he wanders the realm as a sellsword, seeking worthy causes and hoping to reclaim the honor his family lost when his grandfather failed to protect the king's treasure.",
      personality: {
        traits: ["I face problems head-on. A simple, direct solution is the best path.", "I can stare down a hell hound without flinching."],
        ideals: ["Greater Good. Our lot is to lay down our lives in defense of others."],
        bonds: ["I fight for those who cannot fight for themselves."],
        flaws: ["I'd rather eat my armor than admit when I'm wrong."],
      },
      appearance: "A stout dwarf with a braided red beard streaked with gray, deep-set brown eyes, and a prominent scar across his left cheek from an orc's blade. He wears battered but well-maintained chain mail and carries a battleaxe that has seen better days but remains sharp.",
    };

    setCharacter(sampleCharacter);
  };

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

      {/* Test Button */}
      <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
        <button
          onClick={testPDFExport}
          className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer font-semibold"
        >
          Test: Generate Sample Character
        </button>
        <p className="text-xs text-[var(--text-dim)] mt-2">
          Skips questions and creates a sample dwarf fighter
        </p>
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

async function exportCharacterToPDF(character: GeneratedCharacter) {
  try {
    // Fetch the official D&D 5e character sheet template
    const templateUrl = "/dnd_5e_character_sheet.pdf";
    const templateBytes = await fetch(templateUrl).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    // Embed a standard font to use for field appearances
    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const getModifier = (score: number) => {
      const mod = Math.floor((score - 10) / 2);
      return mod >= 0 ? `+${mod}` : `${mod}`;
    };

    const classDisplay = character.classes.map((c) => `${c.name} ${c.level}`).join(" / ");
    const totalLevel = character.classes.reduce((sum, c) => sum + c.level, 0);

    // Helper to safely set text field with optional font size
    const setTextField = (fieldName: string, value: string, fontSize?: number) => {
      try {
        const field = form.getTextField(fieldName);
        if (fontSize) {
          field.setFontSize(fontSize);
        }
        field.setText(value);
      } catch {
        console.log(`Field not found: ${fieldName}`);
      }
    };

    // === PAGE 1: Main Character Sheet ===

    // Basic Info
    setTextField("CharacterName", character.name);
    setTextField("ClassLevel", classDisplay);
    setTextField("Background", character.background);
    setTextField("Race ", character.race);
    setTextField("Alignment", character.alignment);
    setTextField("XP", "0");

    // Ability Scores
    setTextField("STR", String(character.abilityScores.strength));
    setTextField("STRmod", getModifier(character.abilityScores.strength));
    setTextField("DEX", String(character.abilityScores.dexterity));
    setTextField("DEXmod ", getModifier(character.abilityScores.dexterity));
    setTextField("CON", String(character.abilityScores.constitution));
    setTextField("CONmod", getModifier(character.abilityScores.constitution));
    setTextField("INT", String(character.abilityScores.intelligence));
    setTextField("INTmod", getModifier(character.abilityScores.intelligence));
    setTextField("WIS", String(character.abilityScores.wisdom));
    setTextField("WISmod", getModifier(character.abilityScores.wisdom));
    setTextField("CHA", String(character.abilityScores.charisma));
    setTextField("CHamod", getModifier(character.abilityScores.charisma));

    // Combat Stats
    setTextField("AC", String(character.armorClass));
    setTextField("Initiative", getModifier(character.abilityScores.dexterity));
    setTextField("Speed", String(character.speed));
    setTextField("HPMax", String(character.hitPoints));
    setTextField("HPCurrent", String(character.hitPoints));
    setTextField("ProfBonus", `+${character.proficiencyBonus}`);
    setTextField("HDTotal", String(totalLevel));

    // Hit Dice - use the primary class's hit die
    const classHitDice: Record<string, string> = {
      "Barbarian": "d12", "Fighter": "d10", "Paladin": "d10", "Ranger": "d10",
      "Bard": "d8", "Cleric": "d8", "Druid": "d8", "Monk": "d8", "Rogue": "d8", "Warlock": "d8",
      "Sorcerer": "d6", "Wizard": "d6"
    };
    const primaryClass = character.classes[0]?.name || "Fighter";
    setTextField("HD", classHitDice[primaryClass] || "d8");

    // Saving Throws - calculate bonuses
    const savingThrowFields: Record<string, { field: string; ability: keyof typeof character.abilityScores }> = {
      "Strength": { field: "ST Strength", ability: "strength" },
      "Dexterity": { field: "ST Dexterity", ability: "dexterity" },
      "Constitution": { field: "ST Constitution", ability: "constitution" },
      "Intelligence": { field: "ST Intelligence", ability: "intelligence" },
      "Wisdom": { field: "ST Wisdom", ability: "wisdom" },
      "Charisma": { field: "ST Charisma", ability: "charisma" },
    };

    Object.entries(savingThrowFields).forEach(([saveName, { field, ability }]) => {
      const abilityMod = Math.floor((character.abilityScores[ability] - 10) / 2);
      const isProficient = character.savingThrows.includes(saveName);
      const bonus = isProficient ? abilityMod + character.proficiencyBonus : abilityMod;
      setTextField(field, bonus >= 0 ? `+${bonus}` : String(bonus));
    });

    // Skills - map skill names to form fields
    const skillFields: Record<string, { field: string; ability: keyof typeof character.abilityScores }> = {
      "Acrobatics": { field: "Acrobatics", ability: "dexterity" },
      "Animal Handling": { field: "Animal", ability: "wisdom" },
      "Arcana": { field: "Arcana", ability: "intelligence" },
      "Athletics": { field: "Athletics", ability: "strength" },
      "Deception": { field: "Deception ", ability: "charisma" },
      "History": { field: "History ", ability: "intelligence" },
      "Insight": { field: "Insight", ability: "wisdom" },
      "Intimidation": { field: "Intimidation", ability: "charisma" },
      "Investigation": { field: "Investigation ", ability: "intelligence" },
      "Medicine": { field: "Medicine", ability: "wisdom" },
      "Nature": { field: "Nature", ability: "intelligence" },
      "Perception": { field: "Perception ", ability: "wisdom" },
      "Performance": { field: "Performance", ability: "charisma" },
      "Persuasion": { field: "Persuasion", ability: "charisma" },
      "Religion": { field: "Religion", ability: "intelligence" },
      "Sleight of Hand": { field: "SleightofHand", ability: "dexterity" },
      "Stealth": { field: "Stealth ", ability: "dexterity" },
      "Survival": { field: "Survival", ability: "wisdom" },
    };

    Object.entries(skillFields).forEach(([skillName, { field, ability }]) => {
      const abilityMod = Math.floor((character.abilityScores[ability] - 10) / 2);
      const isProficient = character.skills.includes(skillName);
      const bonus = isProficient ? abilityMod + character.proficiencyBonus : abilityMod;
      setTextField(field, bonus >= 0 ? `+${bonus}` : String(bonus));
    });

    // Passive Perception
    const perceptionMod = Math.floor((character.abilityScores.wisdom - 10) / 2);
    const perceptionProficient = character.skills.includes("Perception");
    const passivePerception = 10 + perceptionMod + (perceptionProficient ? character.proficiencyBonus : 0);
    setTextField("Passive", String(passivePerception));

    // Other Proficiencies & Languages
    const proficienciesText = [
      "Languages: " + character.languages.join(", "),
      "",
      "Armor: Light, Medium, Heavy, Shields",
      "Weapons: Simple, Martial",
    ].join("\n");
    setTextField("ProficienciesLang", proficienciesText, 10);

    // Equipment & Weapons - with damage dice
    const weaponData: Record<string, { damage: string; type: string; properties?: string }> = {
      "battleaxe": { damage: "1d8", type: "slashing" },
      "longsword": { damage: "1d8", type: "slashing" },
      "shortsword": { damage: "1d6", type: "piercing" },
      "greatsword": { damage: "2d6", type: "slashing" },
      "greataxe": { damage: "1d12", type: "slashing" },
      "handaxe": { damage: "1d6", type: "slashing" },
      "dagger": { damage: "1d4", type: "piercing" },
      "rapier": { damage: "1d8", type: "piercing" },
      "scimitar": { damage: "1d6", type: "slashing" },
      "longbow": { damage: "1d8", type: "piercing" },
      "shortbow": { damage: "1d6", type: "piercing" },
      "light crossbow": { damage: "1d8", type: "piercing" },
      "heavy crossbow": { damage: "1d10", type: "piercing" },
      "hand crossbow": { damage: "1d6", type: "piercing" },
      "mace": { damage: "1d6", type: "bludgeoning" },
      "warhammer": { damage: "1d8", type: "bludgeoning" },
      "maul": { damage: "2d6", type: "bludgeoning" },
      "quarterstaff": { damage: "1d6", type: "bludgeoning" },
      "spear": { damage: "1d6", type: "piercing" },
      "javelin": { damage: "1d6", type: "piercing" },
      "club": { damage: "1d4", type: "bludgeoning" },
      "greatclub": { damage: "1d8", type: "bludgeoning" },
      "flail": { damage: "1d8", type: "bludgeoning" },
      "glaive": { damage: "1d10", type: "slashing" },
      "halberd": { damage: "1d10", type: "slashing" },
      "lance": { damage: "1d12", type: "piercing" },
      "morningstar": { damage: "1d8", type: "piercing" },
      "pike": { damage: "1d10", type: "piercing" },
      "trident": { damage: "1d6", type: "piercing" },
      "war pick": { damage: "1d8", type: "piercing" },
      "whip": { damage: "1d4", type: "slashing" },
    };

    const weapons = character.equipment.filter(item =>
      item.toLowerCase().includes("sword") || item.toLowerCase().includes("axe") ||
      item.toLowerCase().includes("bow") || item.toLowerCase().includes("dagger") ||
      item.toLowerCase().includes("mace") || item.toLowerCase().includes("hammer") ||
      item.toLowerCase().includes("crossbow") || item.toLowerCase().includes("staff") ||
      item.toLowerCase().includes("spear") || item.toLowerCase().includes("javelin") ||
      item.toLowerCase().includes("club") || item.toLowerCase().includes("flail") ||
      item.toLowerCase().includes("glaive") || item.toLowerCase().includes("halberd") ||
      item.toLowerCase().includes("lance") || item.toLowerCase().includes("morningstar") ||
      item.toLowerCase().includes("pike") || item.toLowerCase().includes("trident") ||
      item.toLowerCase().includes("pick") || item.toLowerCase().includes("whip") ||
      item.toLowerCase().includes("rapier") || item.toLowerCase().includes("scimitar") ||
      item.toLowerCase().includes("maul")
    );

    const getWeaponStats = (weaponName: string) => {
      const lowerName = weaponName.toLowerCase();
      for (const [key, data] of Object.entries(weaponData)) {
        if (lowerName.includes(key)) {
          return data;
        }
      }
      return { damage: "1d6", type: "bludgeoning" }; // default
    };

    const isRangedWeapon = (name: string) => {
      const lower = name.toLowerCase();
      return lower.includes("bow") || lower.includes("crossbow");
    };

    const isFinesseWeapon = (name: string) => {
      const lower = name.toLowerCase();
      return lower.includes("dagger") || lower.includes("rapier") || lower.includes("shortsword") || lower.includes("scimitar") || lower.includes("whip");
    };

    if (weapons[0]) {
      setTextField("Wpn Name", weapons[0]);
      const isRanged = isRangedWeapon(weapons[0]);
      const isFinesse = isFinesseWeapon(weapons[0]);
      const strMod = Math.floor((character.abilityScores.strength - 10) / 2);
      const dexMod = Math.floor((character.abilityScores.dexterity - 10) / 2);
      // Use DEX for ranged, or higher of STR/DEX for finesse, STR otherwise
      const atkMod = isRanged ? dexMod : (isFinesse ? Math.max(strMod, dexMod) : strMod);
      const atkBonus = atkMod + character.proficiencyBonus;
      setTextField("Wpn1 AtkBonus", atkBonus >= 0 ? `+${atkBonus}` : String(atkBonus));
      const stats = getWeaponStats(weapons[0]);
      const damageBonus = isRanged ? dexMod : (isFinesse ? Math.max(strMod, dexMod) : strMod);
      const damageStr = damageBonus >= 0 ? `${stats.damage}+${damageBonus} ${stats.type}` : `${stats.damage}${damageBonus} ${stats.type}`;
      setTextField("Wpn1 Damage", damageStr);
    }
    if (weapons[1]) {
      setTextField("Wpn Name 2", weapons[1]);
      const isRanged = isRangedWeapon(weapons[1]);
      const isFinesse = isFinesseWeapon(weapons[1]);
      const strMod = Math.floor((character.abilityScores.strength - 10) / 2);
      const dexMod = Math.floor((character.abilityScores.dexterity - 10) / 2);
      const atkMod = isRanged ? dexMod : (isFinesse ? Math.max(strMod, dexMod) : strMod);
      const atkBonus = atkMod + character.proficiencyBonus;
      setTextField("Wpn2 AtkBonus ", atkBonus >= 0 ? `+${atkBonus}` : String(atkBonus));
      const stats = getWeaponStats(weapons[1]);
      const damageBonus = isRanged ? dexMod : (isFinesse ? Math.max(strMod, dexMod) : strMod);
      const damageStr = damageBonus >= 0 ? `${stats.damage}+${damageBonus} ${stats.type}` : `${stats.damage}${damageBonus} ${stats.type}`;
      setTextField("Wpn2 Damage ", damageStr);
    }
    if (weapons[2]) {
      setTextField("Wpn Name 3", weapons[2]);
      const isRanged = isRangedWeapon(weapons[2]);
      const isFinesse = isFinesseWeapon(weapons[2]);
      const strMod = Math.floor((character.abilityScores.strength - 10) / 2);
      const dexMod = Math.floor((character.abilityScores.dexterity - 10) / 2);
      const atkMod = isRanged ? dexMod : (isFinesse ? Math.max(strMod, dexMod) : strMod);
      const atkBonus = atkMod + character.proficiencyBonus;
      setTextField("Wpn3 AtkBonus  ", atkBonus >= 0 ? `+${atkBonus}` : String(atkBonus));
      const stats = getWeaponStats(weapons[2]);
      const damageBonus = isRanged ? dexMod : (isFinesse ? Math.max(strMod, dexMod) : strMod);
      const damageStr = damageBonus >= 0 ? `${stats.damage}+${damageBonus} ${stats.type}` : `${stats.damage}${damageBonus} ${stats.type}`;
      setTextField("Wpn3 Damage ", damageStr);
    }

    // Personality
    setTextField("PersonalityTraits ", character.personality.traits.join(" "), 10);
    setTextField("Ideals", character.personality.ideals.join(" "), 10);
    setTextField("Bonds", character.personality.bonds.join(" "), 10);
    setTextField("Flaws", character.personality.flaws.join(" "), 10);

    // Features & Traits (combine features with equipment list)
    const featuresText = character.features.map(f => `${f.name}: ${f.description}`).join("\n\n");
    setTextField("Feat+Traits", featuresText, 10);

    // Equipment list in the equipment section
    const nonWeaponEquipment = character.equipment.filter(item => !weapons.includes(item));
    setTextField("Equipment", nonWeaponEquipment.join("\n"), 10);

    // === PAGE 2: Character Details ===
    setTextField("CharacterName 2", character.name);
    setTextField("Age", "Unknown");
    setTextField("Eyes", "");
    setTextField("Hair", "");
    setTextField("Skin", "");
    setTextField("Height", "");
    setTextField("Weight", "");

    // Character Appearance (this is the large text box on the left of page 2)
    setTextField("Appearance", character.appearance || "", 10);

    // Backstory
    setTextField("Backstory", character.backstory, 10);

    // Allies/Organizations - put the features here (Additional Features & Traits on page 2)
    const alliesText = character.features.map(f => `${f.name}: ${f.description}`).join("\n\n");
    setTextField("Allies", alliesText, 10);

    // === PAGE 3: Spellcasting (if applicable) ===
    if (character.spells) {
      // Cantrips
      if (character.spells.cantrips) {
        character.spells.cantrips.forEach((spell, i) => {
          setTextField(`Spells 10${i}`, spell);
        });
      }

      // Known Spells by level
      if (character.spells.knownSpells) {
        character.spells.knownSpells.forEach((levelSpells) => {
          levelSpells.spells.forEach((spell, i) => {
            // Field naming pattern varies, try common patterns
            setTextField(`Spells 10${levelSpells.level}${i}`, spell);
          });
        });
      }

      // Spell slots
      if (character.spells.spellSlots) {
        character.spells.spellSlots.forEach((slot) => {
          setTextField(`SlotsTotal ${slot.level}`, String(slot.slots));
          setTextField(`SlotsRemaining ${slot.level}`, String(slot.slots));
        });
      }
    }

    // Update field appearances with the embedded font to ensure font sizes are applied
    form.updateFieldAppearances(helvetica);

    // Flatten the form so fields are visible in all PDF viewers
    form.flatten();

    // Generate the PDF bytes
    const pdfBytes = await pdfDoc.save();

    // Create blob and download
    const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${character.name.replace(/[^a-zA-Z0-9]/g, "_")}_Character_Sheet.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Error generating PDF. Check console for details.");
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
