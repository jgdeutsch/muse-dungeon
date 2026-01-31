#!/usr/bin/env python3
"""
Fetch feature requirements from DataForSEO for all D&D 5e class features.
Uses the SERP API to get detailed requirements for when/how to use each feature.
"""

import urllib.request
import json
import base64
import time
import sys
import re

# DataForSEO credentials
LOGIN = "atdan@superpower.com"
PASSWORD = "109abd31ad45604c"

def get_auth_header():
    credentials = base64.b64encode(f"{LOGIN}:{PASSWORD}".encode()).decode()
    return f"Basic {credentials}"

def fetch_serp_data(keyword):
    """Fetch SERP data for a keyword and extract organic results."""
    url = "https://api.dataforseo.com/v3/serp/google/organic/live/advanced"

    data = json.dumps([{
        "keyword": keyword,
        "location_code": 2840,  # USA
        "language_code": "en",
        "device": "desktop"
    }]).encode()

    req = urllib.request.Request(url, data=data, method='POST')
    req.add_header("Authorization", get_auth_header())
    req.add_header("Content-Type", "application/json")

    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            result = json.loads(response.read().decode())

            if result.get("tasks"):
                task = result["tasks"][0]
                if task.get("result"):
                    items = task["result"][0].get("items", [])

                    snippets = []
                    paa_questions = []
                    featured_snippet = None

                    for item in items:
                        # Get featured snippet if present
                        if item.get("type") == "featured_snippet":
                            featured_snippet = item.get("description", "")

                        # Get organic results
                        if item.get("type") == "organic":
                            desc = item.get("description", "")
                            if desc:
                                snippets.append(desc)

                        # Get People Also Ask
                        if item.get("type") == "people_also_ask":
                            for paa_item in item.get("items", []):
                                if paa_item.get("title"):
                                    expanded = paa_item.get("expanded_element", [{}])
                                    answer = ""
                                    if expanded and len(expanded) > 0:
                                        answer = expanded[0].get("description", "")
                                    paa_questions.append({
                                        "question": paa_item["title"],
                                        "answer": answer
                                    })

                    return {
                        "keyword": keyword,
                        "featured_snippet": featured_snippet,
                        "snippets": snippets[:5],  # Top 5 results
                        "paa": paa_questions
                    }
    except Exception as e:
        print(f"Error fetching {keyword}: {e}", file=sys.stderr)

    return {"keyword": keyword, "featured_snippet": None, "snippets": [], "paa": []}

def extract_requirements(data, feature_name):
    """Extract requirements from SERP data."""
    requirements = []

    all_text = ""
    if data.get("featured_snippet"):
        all_text += data["featured_snippet"] + " "
    for snippet in data.get("snippets", []):
        if snippet:
            all_text += snippet + " "
    for paa in data.get("paa", []):
        answer = paa.get("answer") if paa else None
        if answer:
            all_text += answer + " "

    all_text = all_text.lower()

    # Common D&D requirement patterns to look for
    patterns = {
        "action": r"(takes? an action|use your action|as an action|1 action|one action)",
        "bonus_action": r"(bonus action|as a bonus action)",
        "reaction": r"(reaction|as a reaction|use your reaction)",
        "short_rest": r"(short rest|short or long rest)",
        "long_rest": r"(long rest|finish a long rest)",
        "ki_points": r"(ki point|spend \d+ ki|ki cost)",
        "spell_slot": r"(spell slot|expend a spell slot)",
        "rage": r"(while rag|during.*rage|must be raging|in a rage)",
        "concentration": r"(concentration|must concentrate)",
        "level_requirement": r"(\d+(?:st|nd|rd|th) level)",
        "uses_per_rest": r"(once per|twice per|\d+ times? per|number of times equal)",
        "hit_points": r"(hit points?|hp|lose.*hit|current hp)",
        "attack": r"(attack roll|make an attack|melee attack|weapon attack|when you hit)",
        "saving_throw": r"(saving throw|save|dc \d+)",
        "within_range": r"(\d+ feet|within range|point within)",
        "free_hand": r"(free hand|empty hand|one hand free)",
        "verbal": r"(speak|verbal|say|shout|call out)",
        "line_of_sight": r"(can see|line of sight|see the|creature you can see)",
        "willing": r"(willing creature|willing target)",
        "specific_weapon": r"(monk weapon|finesse|melee weapon|ranged weapon)",
        "no_armor": r"(no armor|unarmored|not wearing armor|without armor)",
        "proficiency": r"(proficient|proficiency)",
        "channel_divinity": r"(channel divinity|use.*channel)",
        "bardic_inspiration": r"(bardic inspiration|inspiration die|inspiration dice)",
        "sorcery_points": r"(sorcery point|spend sorcery)",
        "superiority_dice": r"(superiority di[ce]|maneuver)",
    }

    found = {}
    for key, pattern in patterns.items():
        if re.search(pattern, all_text):
            found[key] = True

    return found

def main():
    # All major D&D 5e class features - same list as fetch-feature-faqs.py
    features = [
        # Artificer features
        ("when can i use magical tinkering 5e", "magical-tinkering-5e", "Magical Tinkering", "Artificer"),
        ("when can i use infuse item 5e requirements", "infuse-item-5e", "Infuse Item", "Artificer"),
        ("when can i use flash of genius 5e", "flash-of-genius-5e", "Flash of Genius", "Artificer"),
        ("magic item savant 5e requirements", "magic-item-savant-5e", "Magic Item Savant", "Artificer"),
        ("soul of artifice 5e how to use", "soul-of-artifice-5e", "Soul of Artifice", "Artificer"),

        # Barbarian features
        ("when can i use rage 5e requirements", "rage-5e", "Rage", "Barbarian"),
        ("unarmored defense barbarian 5e requirements", "unarmored-defense-5e", "Unarmored Defense", "Barbarian"),
        ("when can i use reckless attack 5e", "reckless-attack-5e", "Reckless Attack", "Barbarian"),
        ("danger sense 5e requirements", "danger-sense-5e", "Danger Sense", "Barbarian"),
        ("feral instinct 5e requirements", "feral-instinct-5e", "Feral Instinct", "Barbarian"),
        ("brutal critical 5e when does it apply", "brutal-critical-5e", "Brutal Critical", "Barbarian"),
        ("relentless rage 5e requirements", "relentless-rage-5e", "Relentless Rage", "Barbarian"),
        ("persistent rage 5e requirements", "persistent-rage-5e", "Persistent Rage", "Barbarian"),
        ("indomitable might 5e requirements", "indomitable-might-5e", "Indomitable Might", "Barbarian"),
        ("primal champion 5e requirements", "primal-champion-5e", "Primal Champion", "Barbarian"),

        # Bard features
        ("when can i use bardic inspiration 5e", "bardic-inspiration-5e", "Bardic Inspiration", "Bard"),
        ("jack of all trades 5e when does it apply", "jack-of-all-trades-5e", "Jack of All Trades", "Bard"),
        ("song of rest 5e requirements", "song-of-rest-5e", "Song of Rest", "Bard"),
        ("font of inspiration 5e requirements", "font-of-inspiration-5e", "Font of Inspiration", "Bard"),
        ("countercharm 5e requirements", "countercharm-5e", "Countercharm", "Bard"),
        ("magical secrets 5e requirements", "magical-secrets-5e", "Magical Secrets", "Bard"),
        ("superior inspiration 5e requirements", "superior-inspiration-5e", "Superior Inspiration", "Bard"),

        # Cleric features
        ("channel divinity 5e requirements when can i use", "channel-divinity-5e", "Channel Divinity", "Cleric"),
        ("turn undead 5e requirements", "turn-undead-5e", "Turn Undead", "Cleric"),
        ("destroy undead 5e requirements", "destroy-undead-5e", "Destroy Undead", "Cleric"),
        ("divine intervention 5e requirements", "divine-intervention-5e", "Divine Intervention", "Cleric"),
        ("divine strike 5e requirements", "divine-strike-5e", "Divine Strike", "Cleric"),

        # Druid features
        ("wild shape 5e requirements when can i use", "wild-shape-5e", "Wild Shape", "Druid"),
        ("beast spells 5e requirements", "beast-spells-5e", "Beast Spells", "Druid"),
        ("archdruid 5e requirements", "archdruid-5e", "Archdruid", "Druid"),

        # Fighter features
        ("when can i use second wind 5e", "second-wind-5e", "Second Wind", "Fighter"),
        ("when can i use action surge 5e", "action-surge-5e", "Action Surge", "Fighter"),
        ("indomitable 5e requirements", "indomitable-5e", "Indomitable", "Fighter"),

        # Monk features
        ("martial arts 5e requirements when can i use", "martial-arts-5e", "Martial Arts", "Monk"),
        ("when can i use ki 5e", "ki-5e", "Ki", "Monk"),
        ("flurry of blows 5e requirements", "flurry-of-blows-5e", "Flurry of Blows", "Monk"),
        ("patient defense 5e requirements", "patient-defense-5e", "Patient Defense", "Monk"),
        ("step of the wind 5e requirements", "step-of-the-wind-5e", "Step of the Wind", "Monk"),
        ("deflect missiles 5e requirements", "deflect-missiles-5e", "Deflect Missiles", "Monk"),
        ("slow fall 5e requirements", "slow-fall-5e", "Slow Fall", "Monk"),
        ("stunning strike 5e requirements", "stunning-strike-5e", "Stunning Strike", "Monk"),
        ("ki-empowered strikes 5e requirements", "ki-empowered-strikes-5e", "Ki-Empowered Strikes", "Monk"),
        ("evasion 5e requirements when does it apply", "evasion-5e", "Evasion", "Monk"),
        ("stillness of mind 5e requirements", "stillness-of-mind-5e", "Stillness of Mind", "Monk"),
        ("diamond soul 5e requirements", "diamond-soul-5e", "Diamond Soul", "Monk"),
        ("empty body 5e requirements", "empty-body-5e", "Empty Body", "Monk"),
        ("perfect self 5e requirements", "perfect-self-5e", "Perfect Self", "Monk"),

        # Paladin features
        ("divine sense 5e requirements", "divine-sense-5e", "Divine Sense", "Paladin"),
        ("lay on hands 5e requirements when can i use", "lay-on-hands-5e", "Lay on Hands", "Paladin"),
        ("divine smite 5e requirements when can i use", "divine-smite-5e", "Divine Smite", "Paladin"),
        ("aura of protection 5e requirements", "aura-of-protection-5e", "Aura of Protection", "Paladin"),
        ("aura of courage 5e requirements", "aura-of-courage-5e", "Aura of Courage", "Paladin"),
        ("improved divine smite 5e requirements", "improved-divine-smite-5e", "Improved Divine Smite", "Paladin"),
        ("cleansing touch 5e requirements", "cleansing-touch-5e", "Cleansing Touch", "Paladin"),

        # Ranger features
        ("favored enemy 5e requirements", "favored-enemy-5e", "Favored Enemy", "Ranger"),
        ("natural explorer 5e requirements", "natural-explorer-5e", "Natural Explorer", "Ranger"),
        ("primeval awareness 5e requirements", "primeval-awareness-5e", "Primeval Awareness", "Ranger"),
        ("hide in plain sight 5e requirements", "hide-in-plain-sight-5e", "Hide in Plain Sight", "Ranger"),
        ("vanish 5e requirements", "vanish-5e", "Vanish", "Ranger"),
        ("feral senses 5e requirements", "feral-senses-5e", "Feral Senses", "Ranger"),
        ("foe slayer 5e requirements", "foe-slayer-5e", "Foe Slayer", "Ranger"),

        # Rogue features
        ("sneak attack 5e requirements when can i use", "sneak-attack-5e", "Sneak Attack", "Rogue"),
        ("cunning action 5e requirements", "cunning-action-5e", "Cunning Action", "Rogue"),
        ("uncanny dodge 5e requirements", "uncanny-dodge-5e", "Uncanny Dodge", "Rogue"),
        ("reliable talent 5e requirements", "reliable-talent-5e", "Reliable Talent", "Rogue"),
        ("blindsense 5e requirements", "blindsense-5e", "Blindsense", "Rogue"),
        ("slippery mind 5e requirements", "slippery-mind-5e", "Slippery Mind", "Rogue"),
        ("elusive 5e requirements", "elusive-5e", "Elusive", "Rogue"),
        ("stroke of luck 5e requirements", "stroke-of-luck-5e", "Stroke of Luck", "Rogue"),

        # Sorcerer features
        ("font of magic 5e requirements", "font-of-magic-5e", "Font of Magic", "Sorcerer"),
        ("sorcery points 5e requirements how to use", "sorcery-points-5e", "Sorcery Points", "Sorcerer"),
        ("flexible casting 5e requirements", "flexible-casting-5e", "Flexible Casting", "Sorcerer"),
        ("metamagic 5e requirements when can i use", "metamagic-5e", "Metamagic", "Sorcerer"),
        ("sorcerous restoration 5e requirements", "sorcerous-restoration-5e", "Sorcerous Restoration", "Sorcerer"),

        # Warlock features
        ("pact magic 5e requirements", "pact-magic-5e", "Pact Magic", "Warlock"),
        ("eldritch invocations 5e requirements", "eldritch-invocations-5e", "Eldritch Invocations", "Warlock"),
        ("pact of the blade 5e requirements", "pact-of-the-blade-5e", "Pact of the Blade", "Warlock"),
        ("pact of the chain 5e requirements", "pact-of-the-chain-5e", "Pact of the Chain", "Warlock"),
        ("pact of the tome 5e requirements", "pact-of-the-tome-5e", "Pact of the Tome", "Warlock"),
        ("mystic arcanum 5e requirements", "mystic-arcanum-5e", "Mystic Arcanum", "Warlock"),
        ("eldritch master 5e requirements", "eldritch-master-5e", "Eldritch Master", "Warlock"),

        # Wizard features
        ("arcane recovery 5e requirements when can i use", "arcane-recovery-5e", "Arcane Recovery", "Wizard"),
        ("spell mastery 5e requirements", "spell-mastery-5e", "Spell Mastery", "Wizard"),
        ("signature spells 5e requirements", "signature-spells-5e", "Signature Spells", "Wizard"),

        # Blood Hunter features
        ("crimson rite 5e requirements", "crimson-rite-5e", "Crimson Rite", "Blood Hunter"),
        ("blood maledict 5e requirements", "blood-maledict-5e", "Blood Maledict", "Blood Hunter"),

        # Shared features
        ("extra attack 5e requirements", "extra-attack-5e", "Extra Attack", "Multiple"),
        ("fighting style 5e requirements", "fighting-style-5e", "Fighting Style", "Multiple"),
    ]

    results = {}

    for i, (keyword, slug, feature_name, parent_class) in enumerate(features):
        print(f"Fetching {i+1}/{len(features)}: {feature_name}", file=sys.stderr)
        data = fetch_serp_data(keyword)

        requirements = extract_requirements(data, feature_name)

        results[slug] = {
            "slug": slug,
            "name": feature_name,
            "parentClass": parent_class,
            "keyword": keyword,
            "raw_data": {
                "featured_snippet": data.get("featured_snippet"),
                "snippets": data.get("snippets", []),
                "paa": data.get("paa", [])
            },
            "detected_requirements": requirements
        }

        # Rate limit
        if i < len(features) - 1:
            time.sleep(0.5)

    # Output as JSON
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
