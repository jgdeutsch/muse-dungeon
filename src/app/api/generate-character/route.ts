import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = "AIzaSyBxvpCeInudM1bs80tApSQ0XrqnKlaOXgk";

type CharacterRequest = {
  level: number;
  concept: string;
  racePreference?: string;
  multiclass?: {
    enabled: boolean;
    classes?: string[];
  };
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

export async function POST(request: NextRequest) {
  try {
    const body: CharacterRequest = await request.json();
    const { level, concept, racePreference, multiclass } = body;

    if (!level || level < 1 || level > 20) {
      return NextResponse.json(
        { error: "Level must be between 1 and 20" },
        { status: 400 }
      );
    }

    if (!concept || concept.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a character concept" },
        { status: 400 }
      );
    }

    const prompt = buildPrompt(level, concept, racePreference, multiclass);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
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
      return NextResponse.json(
        { error: "Failed to generate character" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    // Parse the JSON response from Gemini
    let character: GeneratedCharacter;
    try {
      character = JSON.parse(generatedText);
    } catch {
      console.error("Failed to parse character JSON:", generatedText);
      return NextResponse.json(
        { error: "Failed to parse character data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ character });
  } catch (error) {
    console.error("Character generation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function buildPrompt(
  level: number,
  concept: string,
  racePreference?: string,
  multiclass?: { enabled: boolean; classes?: string[] }
): string {
  let classInstructions = "";
  if (multiclass?.enabled && multiclass.classes && multiclass.classes.length > 1) {
    classInstructions = `This is a MULTICLASS character combining: ${multiclass.classes.join(" and ")}. Distribute the ${level} total levels appropriately between these classes based on the character concept.`;
  } else if (multiclass?.classes && multiclass.classes.length === 1) {
    classInstructions = `The character class is: ${multiclass.classes[0]}.`;
  } else {
    classInstructions = `Choose the most appropriate class (or multiclass combination if it fits the concept better) for this character.`;
  }

  const raceInstructions = racePreference
    ? `The player prefers this race: ${racePreference}. Use it if it fits, or suggest something similar.`
    : `Choose the most appropriate race for this character concept.`;

  return `You are a D&D 5e character creation expert. Create a complete, playable character sheet based on this concept:

CHARACTER CONCEPT: "${concept}"
LEVEL: ${level}
${raceInstructions}
${classInstructions}

Generate a complete D&D 5e character following these rules:
- Use standard array (15, 14, 13, 12, 10, 8) for ability scores, distributed appropriately for the class/concept
- Apply racial ability score bonuses
- Calculate HP correctly (max at level 1, average rounded up for subsequent levels + CON modifier per level)
- Include all class features gained by this level
- For spellcasters, include appropriate cantrips and spells known/prepared
- Select equipment appropriate for starting gold or starting equipment packages
- Create a compelling backstory that fits the concept
- Generate a memorable name that fits the race and setting

Return ONLY valid JSON matching this exact structure (no markdown, no explanations):
{
  "name": "Character Name",
  "race": "Race (including subrace if applicable)",
  "classes": [{"name": "Class Name", "level": number}],
  "background": "Background Name",
  "alignment": "Alignment",
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
    "cantrips": ["list if applicable"],
    "spellSlots": [{"level": 1, "slots": 2}],
    "knownSpells": [{"level": 1, "spells": ["spell names"]}]
  },
  "backstory": "2-3 paragraph backstory",
  "personality": {
    "traits": ["2 personality traits"],
    "ideals": ["1 ideal"],
    "bonds": ["1 bond"],
    "flaws": ["1 flaw"]
  },
  "appearance": "Brief physical description"
}`;
}
