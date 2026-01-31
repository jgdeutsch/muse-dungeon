"use client";

import { useState } from "react";

type BuilderStep = "level" | "concept" | "race" | "multiclass" | "generating" | "done";

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

const DND_CLASSES = [
  "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk",
  "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"
];

const POPULAR_RACES = [
  "Human", "Elf", "Dwarf", "Halfling", "Half-Elf", "Half-Orc",
  "Tiefling", "Dragonborn", "Gnome", "Aasimar"
];

export function CharacterBuilder() {
  const [step, setStep] = useState<BuilderStep>("level");
  const [level, setLevel] = useState<number>(1);
  const [concept, setConcept] = useState("");
  const [racePreference, setRacePreference] = useState("");
  const [wantsMulticlass, setWantsMulticlass] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [character, setCharacter] = useState<GeneratedCharacter | null>(null);
  const [error, setError] = useState("");

  const reset = () => {
    setStep("level");
    setLevel(1);
    setConcept("");
    setRacePreference("");
    setWantsMulticlass(false);
    setSelectedClasses([]);
    setCharacter(null);
    setError("");
  };

  const generateCharacter = async () => {
    setStep("generating");
    setError("");

    try {
      const response = await fetch("/api/generate-character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          level,
          concept,
          racePreference: racePreference || undefined,
          multiclass: wantsMulticlass
            ? { enabled: true, classes: selectedClasses.length > 0 ? selectedClasses : undefined }
            : undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate character");
      }

      setCharacter(data.character);
      setStep("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStep("concept"); // Go back to let them try again
    }
  };

  const toggleClass = (className: string) => {
    setSelectedClasses((prev) =>
      prev.includes(className)
        ? prev.filter((c) => c !== className)
        : prev.length < 3
        ? [...prev, className]
        : prev
    );
  };

  // Step 1: Level Selection
  if (step === "level") {
    return (
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-['Cinzel'] text-2xl font-bold mb-2">What level?</h2>
          <p className="text-[var(--text-dim)]">Choose your starting level (1-20)</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setLevel(Math.max(1, level - 1))}
            className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] text-2xl hover:border-[var(--accent)] transition-colors cursor-pointer"
          >
            −
          </button>
          <div className="w-24 text-center">
            <span className="text-5xl font-bold text-[var(--accent)]">{level}</span>
          </div>
          <button
            onClick={() => setLevel(Math.min(20, level + 1))}
            className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] text-2xl hover:border-[var(--accent)] transition-colors cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Quick level buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[1, 3, 5, 10, 15, 20].map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer ${
                level === l
                  ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                  : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
              }`}
            >
              Level {l}
            </button>
          ))}
        </div>

        <button
          onClick={() => setStep("concept")}
          className="w-full py-4 rounded-lg bg-[var(--accent)] text-white font-semibold text-lg hover:brightness-110 transition-all cursor-pointer"
        >
          Next: Describe Your Character
        </button>
      </div>
    );
  }

  // Step 2: Character Concept
  if (step === "concept") {
    return (
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => setStep("level")}
          className="text-[var(--text-dim)] hover:text-[var(--text)] mb-4 cursor-pointer"
        >
          ← Back
        </button>

        <div className="text-center mb-8">
          <h2 className="font-['Cinzel'] text-2xl font-bold mb-2">Describe your character</h2>
          <p className="text-[var(--text-dim)]">Tell us who they are in a sentence or two</p>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
            {error}
          </div>
        )}

        <textarea
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          placeholder="e.g., A grizzled veteran soldier turned mercenary who secretly practices forbidden shadow magic..."
          className="w-full h-32 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] outline-none resize-none text-[var(--text)] placeholder:text-[var(--text-dim)]"
        />

        <p className="text-sm text-[var(--text-dim)] mt-2 mb-6">
          Be creative! The AI will choose the best class, race, and abilities to match your vision.
        </p>

        {/* Example concepts */}
        <div className="mb-6">
          <p className="text-sm text-[var(--text-dim)] mb-2">Need inspiration?</p>
          <div className="flex flex-wrap gap-2">
            {[
              "A charming rogue with a heart of gold",
              "An elderly wizard seeking one last adventure",
              "A reformed cultist seeking redemption",
              "A nature-loving warrior who protects the forest",
            ].map((ex) => (
              <button
                key={ex}
                onClick={() => setConcept(ex)}
                className="px-3 py-1 text-sm rounded-full bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setStep("race")}
          disabled={concept.trim().length < 10}
          className="w-full py-4 rounded-lg bg-[var(--accent)] text-white font-semibold text-lg hover:brightness-110 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next: Race Preference (Optional)
        </button>
      </div>
    );
  }

  // Step 3: Race Preference (Optional)
  if (step === "race") {
    return (
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => setStep("concept")}
          className="text-[var(--text-dim)] hover:text-[var(--text)] mb-4 cursor-pointer"
        >
          ← Back
        </button>

        <div className="text-center mb-8">
          <h2 className="font-['Cinzel'] text-2xl font-bold mb-2">Any race preference?</h2>
          <p className="text-[var(--text-dim)]">Optional - or let the AI choose what fits best</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {POPULAR_RACES.map((race) => (
            <button
              key={race}
              onClick={() => setRacePreference(racePreference === race ? "" : race)}
              className={`py-3 px-4 rounded-lg border transition-colors cursor-pointer ${
                racePreference === race
                  ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                  : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
              }`}
            >
              {race}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={racePreference}
          onChange={(e) => setRacePreference(e.target.value)}
          placeholder="Or type any race..."
          className="w-full p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--accent)] outline-none mb-6"
        />

        <div className="flex gap-3">
          <button
            onClick={() => {
              setRacePreference("");
              setStep("multiclass");
            }}
            className="flex-1 py-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] font-semibold hover:border-[var(--accent)] transition-colors cursor-pointer"
          >
            Skip - Let AI Choose
          </button>
          <button
            onClick={() => setStep("multiclass")}
            className="flex-1 py-4 rounded-lg bg-[var(--accent)] text-white font-semibold hover:brightness-110 transition-all cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // Step 4: Multiclass Option
  if (step === "multiclass") {
    return (
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => setStep("race")}
          className="text-[var(--text-dim)] hover:text-[var(--text)] mb-4 cursor-pointer"
        >
          ← Back
        </button>

        <div className="text-center mb-8">
          <h2 className="font-['Cinzel'] text-2xl font-bold mb-2">Single or Multiclass?</h2>
          <p className="text-[var(--text-dim)]">Want to specify classes or let the AI decide?</p>
        </div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setWantsMulticlass(false)}
            className={`flex-1 py-4 rounded-lg border transition-colors cursor-pointer ${
              !wantsMulticlass
                ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            Let AI Choose
          </button>
          <button
            onClick={() => setWantsMulticlass(true)}
            className={`flex-1 py-4 rounded-lg border transition-colors cursor-pointer ${
              wantsMulticlass
                ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
            }`}
          >
            I&apos;ll Pick Classes
          </button>
        </div>

        {wantsMulticlass && (
          <>
            <p className="text-sm text-[var(--text-dim)] mb-3">
              Select 1-3 classes (AI will distribute your {level} levels):
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {DND_CLASSES.map((cls) => (
                <button
                  key={cls}
                  onClick={() => toggleClass(cls)}
                  className={`py-3 px-2 rounded-lg border text-sm transition-colors cursor-pointer ${
                    selectedClasses.includes(cls)
                      ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                      : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--accent)]"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
            {selectedClasses.length > 0 && (
              <p className="text-center text-[var(--accent)] mb-4">
                Selected: {selectedClasses.join(" / ")}
              </p>
            )}
          </>
        )}

        <button
          onClick={generateCharacter}
          className="w-full py-4 rounded-lg bg-[var(--green)] text-white font-semibold text-lg hover:brightness-110 transition-all cursor-pointer"
        >
          Generate My Character!
        </button>
      </div>
    );
  }

  // Generating State
  if (step === "generating") {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="w-16 h-16 mx-auto mb-6 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
        <h2 className="font-['Cinzel'] text-2xl font-bold mb-2">Creating Your Character...</h2>
        <p className="text-[var(--text-dim)]">Rolling dice, consulting ancient tomes...</p>
      </div>
    );
  }

  // Done - Show Character Sheet
  if (step === "done" && character) {
    return <CharacterSheet character={character} onReset={reset} />;
  }

  return null;
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
