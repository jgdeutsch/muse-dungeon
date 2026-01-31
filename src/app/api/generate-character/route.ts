import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = "AIzaSyBxvpCeInudM1bs80tApSQ0XrqnKlaOXgk";

type CharacterChoices = {
  level: number;
  name?: string;
  concept?: string;
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

export async function POST(request: NextRequest) {
  try {
    const choices: CharacterChoices = await request.json();

    if (!choices.level || choices.level < 1 || choices.level > 20) {
      return NextResponse.json(
        { error: "Level must be between 1 and 20" },
        { status: 400 }
      );
    }

    if (!choices.race) {
      return NextResponse.json(
        { error: "Please select a race" },
        { status: 400 }
      );
    }

    const prompt = buildPrompt(choices);

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
        { error: "Failed to generate character. Please try again." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      console.error("No generated text in response:", JSON.stringify(data));
      return NextResponse.json(
        { error: "No response from AI. Please try again." },
        { status: 500 }
      );
    }

    // Parse the JSON response from Gemini
    let character;
    try {
      // Clean up the response in case there's any extra whitespace or markdown
      let cleanedText = generatedText.trim();
      // Remove potential markdown code blocks
      if (cleanedText.startsWith("```json")) {
        cleanedText = cleanedText.slice(7);
      }
      if (cleanedText.startsWith("```")) {
        cleanedText = cleanedText.slice(3);
      }
      if (cleanedText.endsWith("```")) {
        cleanedText = cleanedText.slice(0, -3);
      }
      cleanedText = cleanedText.trim();

      character = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("Failed to parse character JSON:", generatedText);
      console.error("Parse error:", parseError);
      return NextResponse.json(
        { error: "Failed to parse character data. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ character });
  } catch (error) {
    console.error("Character generation error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
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

  // Determine best class based on choices
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
