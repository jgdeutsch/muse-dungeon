#!/usr/bin/env python3
"""
Process feature requirements data from DataForSEO and generate TypeScript data file.
Extracts specific requirements/questions from the SERP data.
"""

import json
import sys
import re

def clean_text(text):
    """Clean text for display."""
    if not text:
        return ""
    # Remove "Read more" suffixes
    text = re.sub(r'\s*Read more\s*$', '', text)
    # Remove date prefixes like "Nov 30, 2019 —"
    text = re.sub(r'^[A-Z][a-z]{2}\s+\d{1,2},\s+\d{4}\s*[—-]\s*', '', text)
    # Clean up whitespace
    text = text.strip()
    return text

def extract_requirements_questions(data):
    """Extract actual requirement questions from the PAA data."""
    questions = []

    for paa in data.get("raw_data", {}).get("paa", []):
        q = paa.get("question", "")
        a = paa.get("answer", "")
        if not q or not a:
            continue

        # Clean the question and answer
        q = clean_text(q)
        a = clean_text(a)

        # Skip irrelevant questions
        irrelevant_patterns = [
            r'best.*subclass',
            r'weakest.*subclass',
            r'strongest.*subclass',
            r'which.*races',
            r'what is the \d+ rule',
            r'how does.*work.*D&D\?$',  # Generic "how does X work" without specifics
        ]

        skip = False
        for pattern in irrelevant_patterns:
            if re.search(pattern, q, re.I):
                skip = True
                break
        if skip:
            continue

        # Only include questions about usage/requirements
        relevant_keywords = [
            'when can', 'how to use', 'how does', 'can i use', 'can you use',
            'does.*work', 'requirement', 'do you need', 'can.*be used',
            'what triggers', 'does.*apply', 'can.*stack', 'works on', 'works with'
        ]

        is_relevant = False
        for kw in relevant_keywords:
            if re.search(kw, q, re.I):
                is_relevant = True
                break

        if is_relevant:
            questions.append({
                "question": q,
                "answer": a
            })

    return questions[:4]  # Max 4 questions

def build_checker_steps(data, feature_name, parent_class, level):
    """Build the checker step questions based on requirements detected."""
    steps = []

    detected = data.get("detected_requirements", {})
    snippets = data.get("raw_data", {}).get("snippets", [])
    paa = data.get("raw_data", {}).get("paa", [])
    featured = data.get("raw_data", {}).get("featured_snippet")

    # Combine all text for analysis
    all_text = featured or ""
    for s in snippets:
        if s:
            all_text += " " + s
    for p in paa:
        if p and p.get("answer"):
            all_text += " " + p.get("answer", "")
    all_text = all_text.lower()

    # Clean feature name
    feature_clean = feature_name.replace(" 5e", "")

    # 1. Always add class/level check first
    if parent_class != "Multiple":
        steps.append({
            "question": f"Is the character a {parent_class} of at least {level} level?",
            "failReason": f"{feature_clean} is a {parent_class} feature gained at {level} level."
        })
    else:
        steps.append({
            "question": f"Does the character have access to {feature_clean} from their class?",
            "failReason": f"{feature_clean} must be gained from a class that grants it."
        })

    # 2. Limited uses check
    if detected.get("uses_per_rest") or detected.get("long_rest") or detected.get("short_rest"):
        resource = "uses of this feature"
        if detected.get("ki_points") or "ki point" in all_text:
            resource = "Ki points"
        elif detected.get("sorcery_points") or "sorcery point" in all_text:
            resource = "Sorcery Points"
        elif detected.get("channel_divinity") or "channel divinity" in all_text:
            resource = "Channel Divinity uses"
        elif detected.get("bardic_inspiration") or "bardic inspiration" in all_text:
            resource = "Bardic Inspiration dice"
        elif detected.get("superiority_dice") or "superiority" in all_text:
            resource = "Superiority Dice"
        elif detected.get("spell_slot") or "spell slot" in all_text:
            resource = "spell slots"
        elif "rage" in all_text and parent_class == "Barbarian":
            resource = "Rages"
        elif "lay on hands" in feature_clean.lower():
            resource = "Lay on Hands healing pool"
        elif "divine sense" in feature_clean.lower():
            resource = "Divine Sense uses"

        # Check rest type
        rest_type = "long rest"
        if detected.get("short_rest") or "short rest" in all_text:
            rest_type = "short or long rest"

        steps.append({
            "question": f"Does the character have {resource} remaining?",
            "failReason": f"{feature_clean} has limited uses that recover after a {rest_type}."
        })

    # 3. Action economy checks
    if detected.get("bonus_action") or "bonus action" in all_text:
        steps.append({
            "question": "Does the character have their bonus action available this turn?",
            "failReason": f"{feature_clean} requires a bonus action to use."
        })

    if detected.get("reaction") or "reaction" in all_text:
        # Check for trigger requirement
        has_trigger = "trigger" in all_text or "when" in all_text
        if has_trigger:
            steps.append({
                "question": "Has the appropriate trigger occurred for this reaction?",
                "failReason": f"{feature_clean} is a reaction that requires a specific trigger."
            })
        steps.append({
            "question": "Does the character have their reaction available this round?",
            "failReason": "Each creature only gets one reaction per round."
        })

    if detected.get("action") or ("as an action" in all_text and "bonus action" not in all_text):
        steps.append({
            "question": "Does the character have their action available this turn?",
            "failReason": f"{feature_clean} requires an action to use."
        })

    # 4. Rage requirement (Barbarian features)
    if detected.get("rage") or ("while rag" in all_text or "while you're raging" in all_text or "your rage" in all_text):
        if "relentless" not in feature_clean.lower() and "persistent" not in feature_clean.lower():
            # Only add if it's not the Rage feature itself
            if "rage" != feature_clean.lower():
                steps.append({
                    "question": "Is the character currently raging?",
                    "failReason": f"{feature_clean} only works while the character is raging."
                })

    # 5. Attack requirements
    if detected.get("attack"):
        if "melee" in all_text:
            steps.append({
                "question": "Is the character making a melee attack?",
                "failReason": f"{feature_clean} only applies to melee attacks."
            })
        elif "weapon attack" in all_text:
            steps.append({
                "question": "Is the character making a weapon attack?",
                "failReason": f"{feature_clean} only applies to weapon attacks."
            })
        elif "hit" in all_text or "attack" in all_text:
            steps.append({
                "question": "Is the character making an attack or has hit a target?",
                "failReason": f"{feature_clean} requires an attack to be made."
            })

    # 6. Range/sight requirements
    if detected.get("within_range") or detected.get("line_of_sight"):
        range_match = re.search(r'(\d+)\s*(feet|ft)', all_text)
        if range_match:
            distance = range_match.group(1)
            steps.append({
                "question": f"Is the target/point within {distance} feet?",
                "failReason": f"{feature_clean} has a range of {distance} feet."
            })
        elif detected.get("line_of_sight"):
            steps.append({
                "question": "Can the character see the target?",
                "failReason": f"{feature_clean} requires the character to see the target."
            })

    # 7. Armor/equipment requirements
    if detected.get("no_armor"):
        steps.append({
            "question": "Is the character wearing no armor?",
            "failReason": f"{feature_clean} only works while not wearing armor."
        })

    if detected.get("specific_weapon"):
        if "monk weapon" in all_text or "martial arts" in feature_clean.lower():
            steps.append({
                "question": "Is the character using a monk weapon or unarmed strike?",
                "failReason": "This feature requires using monk weapons or unarmed strikes."
            })
        elif "finesse" in all_text:
            steps.append({
                "question": "Is the character using a finesse or ranged weapon?",
                "failReason": "This feature requires a finesse or ranged weapon."
            })

    # 8. Free hand requirement
    if detected.get("free_hand"):
        steps.append({
            "question": "Does the character have a free hand?",
            "failReason": f"{feature_clean} requires a free hand."
        })

    # 9. Concentration check
    if detected.get("concentration"):
        steps.append({
            "question": "Is the character free of other concentration effects?",
            "failReason": "A creature can only concentrate on one effect at a time."
        })

    # 10. Condition checks (can't be incapacitated, etc.)
    if "incapacitated" in all_text or "unconscious" in all_text:
        steps.append({
            "question": "Is the character free of conditions like Incapacitated or Unconscious?",
            "failReason": f"{feature_clean} cannot be used while incapacitated or unconscious."
        })

    # 11. Sneak Attack specific
    if "sneak attack" in feature_clean.lower():
        steps.append({
            "question": "Does the character have advantage OR is an ally within 5 feet of the target?",
            "failReason": "Sneak Attack requires advantage on the attack, OR an enemy of the target within 5 feet of it."
        })
        steps.append({
            "question": "Is the character using a finesse or ranged weapon?",
            "failReason": "Sneak Attack only works with finesse or ranged weapons."
        })

    # 12. Wild Shape specific
    if "wild shape" in feature_clean.lower():
        steps.append({
            "question": "Is the beast form valid for the druid's level? (CR and type restrictions)",
            "failReason": "Wild Shape limits beast CR and type (flying/swimming) based on druid level."
        })

    # 13. Divine Smite specific
    if "divine smite" in feature_clean.lower():
        steps.append({
            "question": "Does the character have a spell slot available?",
            "failReason": "Divine Smite requires expending a spell slot."
        })
        steps.append({
            "question": "Did the character just hit with a melee weapon attack?",
            "failReason": "Divine Smite can only be used when hitting with a melee weapon attack."
        })

    # If no special requirements were added beyond class check, add a generic condition check
    if len(steps) == 1:
        steps.append({
            "question": "Is the character free of conditions preventing normal actions (Stunned, Paralyzed, etc.)?",
            "failReason": "Certain conditions like Stunned, Paralyzed, or Incapacitated prevent using most features.",
            "invertedLogic": True  # "Yes" means they ARE free, which is good
        })

    return steps

def main():
    # Load the raw data
    with open("/tmp/feature-reqs.json", "r") as f:
        raw_data = json.load(f)

    # Process each feature
    processed = {}
    for slug, data in raw_data.items():
        feature_name = data.get("name", "")
        parent_class = data.get("parentClass", "")

        # Get level from the features data (we'll need to look this up)
        level = "1st"  # Default

        steps = build_checker_steps(data, feature_name, parent_class, level)
        questions = extract_requirements_questions(data)

        processed[slug] = {
            "slug": slug,
            "name": feature_name,
            "parentClass": parent_class,
            "steps": steps,
            "paaQuestions": questions
        }

    # Generate TypeScript file
    ts_output = '''// Auto-generated feature requirements data from DataForSEO
// DO NOT EDIT MANUALLY - regenerate with scripts/process-feature-requirements.py

export type FeatureStep = {
  question: string;
  failReason: string;
  invertedLogic?: boolean; // If true, "Yes" means fail instead of pass
};

export type FeatureRequirements = {
  slug: string;
  name: string;
  parentClass: string;
  steps: FeatureStep[];
  paaQuestions: { question: string; answer: string }[];
};

export const featureRequirements: Record<string, FeatureRequirements> = '''

    ts_output += json.dumps(processed, indent=2)
    ts_output += ";\n"

    print(ts_output)

if __name__ == "__main__":
    main()
