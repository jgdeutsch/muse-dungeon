#!/usr/bin/env python3
"""
Fetch FAQ data from DataForSEO for all D&D 5e class features.
Uses the SERP API to get People Also Asked questions and Related Searches.
"""

import urllib.request
import json
import base64
import time
import sys

# DataForSEO credentials
LOGIN = "atdan@superpower.com"
PASSWORD = "109abd31ad45604c"

def get_auth_header():
    credentials = base64.b64encode(f"{LOGIN}:{PASSWORD}".encode()).decode()
    return f"Basic {credentials}"

def fetch_serp_data(keyword):
    """Fetch SERP data for a keyword and extract PAA questions and related searches."""
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

                    paa_questions = []
                    related_searches = []

                    for item in items:
                        if item.get("type") == "people_also_ask":
                            for paa_item in item.get("items", []):
                                if paa_item.get("title"):
                                    paa_questions.append({
                                        "question": paa_item["title"],
                                        "answer_hint": paa_item.get("expanded_element", [{}])[0].get("description", "")
                                    })
                        elif item.get("type") == "related_searches":
                            related_searches = item.get("items", [])

                    return {
                        "keyword": keyword,
                        "paa": paa_questions,
                        "related": related_searches
                    }
    except Exception as e:
        print(f"Error fetching {keyword}: {e}", file=sys.stderr)

    return {"keyword": keyword, "paa": [], "related": []}

def main():
    # All major D&D 5e class features
    features = [
        # Artificer features
        ("magical tinkering 5e", "Artificer", "Magical Tinkering", "1st"),
        ("infuse item 5e", "Artificer", "Infuse Item", "2nd"),
        ("flash of genius 5e", "Artificer", "Flash of Genius", "7th"),
        ("magic item savant 5e", "Artificer", "Magic Item Savant", "14th"),
        ("soul of artifice 5e", "Artificer", "Soul of Artifice", "20th"),

        # Barbarian features
        ("rage 5e", "Barbarian", "Rage", "1st"),
        ("unarmored defense barbarian 5e", "Barbarian", "Unarmored Defense", "1st"),
        ("reckless attack 5e", "Barbarian", "Reckless Attack", "2nd"),
        ("danger sense 5e", "Barbarian", "Danger Sense", "2nd"),
        ("primal path 5e", "Barbarian", "Primal Path", "3rd"),
        ("extra attack barbarian 5e", "Barbarian", "Extra Attack", "5th"),
        ("fast movement barbarian 5e", "Barbarian", "Fast Movement", "5th"),
        ("feral instinct 5e", "Barbarian", "Feral Instinct", "7th"),
        ("brutal critical 5e", "Barbarian", "Brutal Critical", "9th"),
        ("relentless rage 5e", "Barbarian", "Relentless Rage", "11th"),
        ("persistent rage 5e", "Barbarian", "Persistent Rage", "15th"),
        ("indomitable might 5e", "Barbarian", "Indomitable Might", "18th"),
        ("primal champion 5e", "Barbarian", "Primal Champion", "20th"),

        # Bard features
        ("bardic inspiration 5e", "Bard", "Bardic Inspiration", "1st"),
        ("jack of all trades 5e", "Bard", "Jack of All Trades", "2nd"),
        ("song of rest 5e", "Bard", "Song of Rest", "2nd"),
        ("bard college 5e", "Bard", "Bard College", "3rd"),
        ("expertise bard 5e", "Bard", "Expertise", "3rd"),
        ("font of inspiration 5e", "Bard", "Font of Inspiration", "5th"),
        ("countercharm 5e", "Bard", "Countercharm", "6th"),
        ("magical secrets 5e", "Bard", "Magical Secrets", "10th"),
        ("superior inspiration 5e", "Bard", "Superior Inspiration", "20th"),

        # Cleric features
        ("divine domain 5e", "Cleric", "Divine Domain", "1st"),
        ("channel divinity cleric 5e", "Cleric", "Channel Divinity", "2nd"),
        ("turn undead 5e", "Cleric", "Turn Undead", "2nd"),
        ("destroy undead 5e", "Cleric", "Destroy Undead", "5th"),
        ("divine intervention 5e", "Cleric", "Divine Intervention", "10th"),
        ("divine strike 5e", "Cleric", "Divine Strike", "8th"),

        # Druid features
        ("druidic 5e", "Druid", "Druidic", "1st"),
        ("wild shape 5e", "Druid", "Wild Shape", "2nd"),
        ("druid circle 5e", "Druid", "Druid Circle", "2nd"),
        ("timeless body druid 5e", "Druid", "Timeless Body", "18th"),
        ("beast spells 5e", "Druid", "Beast Spells", "18th"),
        ("archdruid 5e", "Druid", "Archdruid", "20th"),

        # Fighter features
        ("fighting style fighter 5e", "Fighter", "Fighting Style", "1st"),
        ("second wind 5e", "Fighter", "Second Wind", "1st"),
        ("action surge 5e", "Fighter", "Action Surge", "2nd"),
        ("martial archetype 5e", "Fighter", "Martial Archetype", "3rd"),
        ("extra attack fighter 5e", "Fighter", "Extra Attack", "5th"),
        ("indomitable 5e", "Fighter", "Indomitable", "9th"),

        # Monk features
        ("unarmored defense monk 5e", "Monk", "Unarmored Defense", "1st"),
        ("martial arts 5e", "Monk", "Martial Arts", "1st"),
        ("ki 5e", "Monk", "Ki", "2nd"),
        ("flurry of blows 5e", "Monk", "Flurry of Blows", "2nd"),
        ("patient defense 5e", "Monk", "Patient Defense", "2nd"),
        ("step of the wind 5e", "Monk", "Step of the Wind", "2nd"),
        ("unarmored movement 5e", "Monk", "Unarmored Movement", "2nd"),
        ("monastic tradition 5e", "Monk", "Monastic Tradition", "3rd"),
        ("deflect missiles 5e", "Monk", "Deflect Missiles", "3rd"),
        ("slow fall 5e", "Monk", "Slow Fall", "4th"),
        ("extra attack monk 5e", "Monk", "Extra Attack", "5th"),
        ("stunning strike 5e", "Monk", "Stunning Strike", "5th"),
        ("ki-empowered strikes 5e", "Monk", "Ki-Empowered Strikes", "6th"),
        ("evasion monk 5e", "Monk", "Evasion", "7th"),
        ("stillness of mind 5e", "Monk", "Stillness of Mind", "7th"),
        ("purity of body 5e", "Monk", "Purity of Body", "10th"),
        ("tongue of the sun and moon 5e", "Monk", "Tongue of the Sun and Moon", "13th"),
        ("diamond soul 5e", "Monk", "Diamond Soul", "14th"),
        ("timeless body monk 5e", "Monk", "Timeless Body", "15th"),
        ("empty body 5e", "Monk", "Empty Body", "18th"),
        ("perfect self 5e", "Monk", "Perfect Self", "20th"),

        # Paladin features
        ("divine sense 5e", "Paladin", "Divine Sense", "1st"),
        ("lay on hands 5e", "Paladin", "Lay on Hands", "1st"),
        ("fighting style paladin 5e", "Paladin", "Fighting Style", "2nd"),
        ("divine smite 5e", "Paladin", "Divine Smite", "2nd"),
        ("sacred oath 5e", "Paladin", "Sacred Oath", "3rd"),
        ("channel divinity paladin 5e", "Paladin", "Channel Divinity", "3rd"),
        ("extra attack paladin 5e", "Paladin", "Extra Attack", "5th"),
        ("aura of protection 5e", "Paladin", "Aura of Protection", "6th"),
        ("aura of courage 5e", "Paladin", "Aura of Courage", "10th"),
        ("improved divine smite 5e", "Paladin", "Improved Divine Smite", "11th"),
        ("cleansing touch 5e", "Paladin", "Cleansing Touch", "14th"),

        # Ranger features
        ("favored enemy 5e", "Ranger", "Favored Enemy", "1st"),
        ("natural explorer 5e", "Ranger", "Natural Explorer", "1st"),
        ("fighting style ranger 5e", "Ranger", "Fighting Style", "2nd"),
        ("ranger archetype 5e", "Ranger", "Ranger Archetype", "3rd"),
        ("primeval awareness 5e", "Ranger", "Primeval Awareness", "3rd"),
        ("extra attack ranger 5e", "Ranger", "Extra Attack", "5th"),
        ("land's stride 5e", "Ranger", "Land's Stride", "8th"),
        ("hide in plain sight 5e", "Ranger", "Hide in Plain Sight", "10th"),
        ("vanish 5e", "Ranger", "Vanish", "14th"),
        ("feral senses 5e", "Ranger", "Feral Senses", "18th"),
        ("foe slayer 5e", "Ranger", "Foe Slayer", "20th"),

        # Rogue features
        ("expertise rogue 5e", "Rogue", "Expertise", "1st"),
        ("sneak attack 5e", "Rogue", "Sneak Attack", "1st"),
        ("thieves cant 5e", "Rogue", "Thieves' Cant", "1st"),
        ("cunning action 5e", "Rogue", "Cunning Action", "2nd"),
        ("roguish archetype 5e", "Rogue", "Roguish Archetype", "3rd"),
        ("uncanny dodge 5e", "Rogue", "Uncanny Dodge", "5th"),
        ("evasion rogue 5e", "Rogue", "Evasion", "7th"),
        ("reliable talent 5e", "Rogue", "Reliable Talent", "11th"),
        ("blindsense 5e", "Rogue", "Blindsense", "14th"),
        ("slippery mind 5e", "Rogue", "Slippery Mind", "15th"),
        ("elusive 5e", "Rogue", "Elusive", "18th"),
        ("stroke of luck 5e", "Rogue", "Stroke of Luck", "20th"),

        # Sorcerer features
        ("sorcerous origin 5e", "Sorcerer", "Sorcerous Origin", "1st"),
        ("font of magic 5e", "Sorcerer", "Font of Magic", "2nd"),
        ("sorcery points 5e", "Sorcerer", "Sorcery Points", "2nd"),
        ("flexible casting 5e", "Sorcerer", "Flexible Casting", "2nd"),
        ("metamagic 5e", "Sorcerer", "Metamagic", "3rd"),
        ("sorcerous restoration 5e", "Sorcerer", "Sorcerous Restoration", "20th"),

        # Warlock features
        ("otherworldly patron 5e", "Warlock", "Otherworldly Patron", "1st"),
        ("pact magic 5e", "Warlock", "Pact Magic", "1st"),
        ("eldritch invocations 5e", "Warlock", "Eldritch Invocations", "2nd"),
        ("pact boon 5e", "Warlock", "Pact Boon", "3rd"),
        ("pact of the blade 5e", "Warlock", "Pact of the Blade", "3rd"),
        ("pact of the chain 5e", "Warlock", "Pact of the Chain", "3rd"),
        ("pact of the tome 5e", "Warlock", "Pact of the Tome", "3rd"),
        ("pact of the talisman 5e", "Warlock", "Pact of the Talisman", "3rd"),
        ("mystic arcanum 5e", "Warlock", "Mystic Arcanum", "11th"),
        ("eldritch master 5e", "Warlock", "Eldritch Master", "20th"),

        # Wizard features
        ("spellcasting wizard 5e", "Wizard", "Spellcasting", "1st"),
        ("arcane recovery 5e", "Wizard", "Arcane Recovery", "1st"),
        ("arcane tradition 5e", "Wizard", "Arcane Tradition", "2nd"),
        ("spell mastery 5e", "Wizard", "Spell Mastery", "18th"),
        ("signature spells 5e", "Wizard", "Signature Spells", "20th"),

        # Blood Hunter features (Matt Mercer class)
        ("hunter's bane 5e", "Blood Hunter", "Hunter's Bane", "1st"),
        ("blood maledict 5e", "Blood Hunter", "Blood Maledict", "1st"),
        ("crimson rite 5e", "Blood Hunter", "Crimson Rite", "2nd"),
        ("blood hunter order 5e", "Blood Hunter", "Blood Hunter Order", "3rd"),
        ("dark augmentation 5e", "Blood Hunter", "Dark Augmentation", "7th"),
        ("brand of castigation 5e", "Blood Hunter", "Brand of Castigation", "6th"),
        ("grim psychometry 5e", "Blood Hunter", "Grim Psychometry", "9th"),
        ("dark velocity 5e", "Blood Hunter", "Dark Velocity", "10th"),
        ("hardened soul 5e", "Blood Hunter", "Hardened Soul", "14th"),
        ("sanguine mastery 5e", "Blood Hunter", "Sanguine Mastery", "20th"),

        # Popular multiclass/shared features
        ("extra attack 5e", "Multiple", "Extra Attack", "5th"),
        ("fighting style 5e", "Multiple", "Fighting Style", "1st-2nd"),
        ("spellcasting 5e", "Multiple", "Spellcasting", "1st"),
        ("evasion 5e", "Multiple", "Evasion", "7th"),
        ("unarmored defense 5e", "Multiple", "Unarmored Defense", "1st"),
        ("channel divinity 5e", "Multiple", "Channel Divinity", "2nd-3rd"),
    ]

    results = {}

    for i, (keyword, parent_class, feature_name, level) in enumerate(features):
        print(f"Fetching {i+1}/{len(features)}: {keyword}", file=sys.stderr)
        result = fetch_serp_data(keyword)
        result["parent_class"] = parent_class
        result["feature_name"] = feature_name
        result["level"] = level
        results[keyword] = result

        # Rate limit - be nice to the API
        if i < len(features) - 1:
            time.sleep(0.5)

    # Output as JSON
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
