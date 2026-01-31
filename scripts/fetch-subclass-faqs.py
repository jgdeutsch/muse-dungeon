#!/usr/bin/env python3
"""
Fetch FAQ data from DataForSEO for all D&D 5e subclasses.
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
    # All D&D 5e subclasses
    subclasses = [
        # Artificer subclasses
        ("alchemist 5e", "Artificer", "Alchemist"),
        ("armorer 5e", "Artificer", "Armorer"),
        ("artillerist 5e", "Artificer", "Artillerist"),
        ("battle smith 5e", "Artificer", "Battle Smith"),

        # Barbarian subclasses
        ("path of the berserker 5e", "Barbarian", "Path of the Berserker"),
        ("path of the totem warrior 5e", "Barbarian", "Path of the Totem Warrior"),
        ("path of the ancestral guardian 5e", "Barbarian", "Path of the Ancestral Guardian"),
        ("path of the zealot 5e", "Barbarian", "Path of the Zealot"),
        ("path of the beast 5e", "Barbarian", "Path of the Beast"),
        ("path of wild magic 5e barbarian", "Barbarian", "Path of Wild Magic"),

        # Bard subclasses
        ("college of lore 5e", "Bard", "College of Lore"),
        ("college of valor 5e", "Bard", "College of Valor"),
        ("college of glamour 5e", "Bard", "College of Glamour"),
        ("college of swords 5e", "Bard", "College of Swords"),
        ("college of whispers 5e", "Bard", "College of Whispers"),
        ("college of eloquence 5e", "Bard", "College of Eloquence"),
        ("college of creation 5e", "Bard", "College of Creation"),

        # Blood Hunter subclasses
        ("order of the ghostslayer 5e", "Blood Hunter", "Order of the Ghostslayer"),
        ("order of the profane soul 5e", "Blood Hunter", "Order of the Profane Soul"),
        ("order of the mutant 5e", "Blood Hunter", "Order of the Mutant"),
        ("order of the lycan 5e", "Blood Hunter", "Order of the Lycan"),

        # Cleric subclasses
        ("life domain cleric 5e", "Cleric", "Life Domain"),
        ("light domain cleric 5e", "Cleric", "Light Domain"),
        ("war domain cleric 5e", "Cleric", "War Domain"),
        ("trickery domain cleric 5e", "Cleric", "Trickery Domain"),
        ("tempest domain cleric 5e", "Cleric", "Tempest Domain"),
        ("knowledge domain cleric 5e", "Cleric", "Knowledge Domain"),
        ("nature domain cleric 5e", "Cleric", "Nature Domain"),
        ("grave domain cleric 5e", "Cleric", "Grave Domain"),
        ("forge domain cleric 5e", "Cleric", "Forge Domain"),
        ("order domain cleric 5e", "Cleric", "Order Domain"),
        ("peace domain cleric 5e", "Cleric", "Peace Domain"),
        ("twilight domain cleric 5e", "Cleric", "Twilight Domain"),

        # Druid subclasses
        ("circle of the land 5e", "Druid", "Circle of the Land"),
        ("circle of the moon 5e", "Druid", "Circle of the Moon"),
        ("circle of dreams 5e", "Druid", "Circle of Dreams"),
        ("circle of the shepherd 5e", "Druid", "Circle of the Shepherd"),
        ("circle of spores 5e", "Druid", "Circle of Spores"),
        ("circle of stars 5e", "Druid", "Circle of Stars"),
        ("circle of wildfire 5e", "Druid", "Circle of Wildfire"),

        # Fighter subclasses
        ("champion fighter 5e", "Fighter", "Champion"),
        ("battle master 5e", "Fighter", "Battle Master"),
        ("arcane archer 5e", "Fighter", "Arcane Archer"),
        ("cavalier 5e", "Fighter", "Cavalier"),
        ("samurai 5e", "Fighter", "Samurai"),
        ("echo knight 5e", "Fighter", "Echo Knight"),
        ("psi warrior 5e", "Fighter", "Psi Warrior"),
        ("rune knight 5e", "Fighter", "Rune Knight"),

        # Monk subclasses
        ("way of the open hand 5e", "Monk", "Way of the Open Hand"),
        ("way of shadow 5e", "Monk", "Way of Shadow"),
        ("way of the four elements 5e", "Monk", "Way of the Four Elements"),
        ("way of the drunken master 5e", "Monk", "Way of the Drunken Master"),
        ("way of the kensei 5e", "Monk", "Way of the Kensei"),
        ("way of the sun soul 5e", "Monk", "Way of the Sun Soul"),
        ("way of mercy 5e", "Monk", "Way of Mercy"),
        ("way of the astral self 5e", "Monk", "Way of the Astral Self"),

        # Paladin subclasses
        ("oath of devotion 5e", "Paladin", "Oath of Devotion"),
        ("oath of the ancients 5e", "Paladin", "Oath of the Ancients"),
        ("oath of vengeance 5e", "Paladin", "Oath of Vengeance"),
        ("oathbreaker 5e", "Paladin", "Oathbreaker"),
        ("oath of conquest 5e", "Paladin", "Oath of Conquest"),
        ("oath of redemption 5e", "Paladin", "Oath of Redemption"),
        ("oath of glory 5e", "Paladin", "Oath of Glory"),
        ("oath of the watchers 5e", "Paladin", "Oath of the Watchers"),

        # Ranger subclasses
        ("hunter ranger 5e", "Ranger", "Hunter"),
        ("beast master 5e", "Ranger", "Beast Master"),
        ("gloom stalker 5e", "Ranger", "Gloom Stalker"),
        ("horizon walker 5e", "Ranger", "Horizon Walker"),
        ("monster slayer 5e", "Ranger", "Monster Slayer"),
        ("fey wanderer 5e", "Ranger", "Fey Wanderer"),
        ("swarmkeeper 5e", "Ranger", "Swarmkeeper"),
        ("drakewarden 5e", "Ranger", "Drakewarden"),

        # Rogue subclasses
        ("thief rogue 5e", "Rogue", "Thief"),
        ("assassin rogue 5e", "Rogue", "Assassin"),
        ("arcane trickster 5e", "Rogue", "Arcane Trickster"),
        ("inquisitive rogue 5e", "Rogue", "Inquisitive"),
        ("mastermind rogue 5e", "Rogue", "Mastermind"),
        ("scout rogue 5e", "Rogue", "Scout"),
        ("swashbuckler rogue 5e", "Rogue", "Swashbuckler"),
        ("phantom rogue 5e", "Rogue", "Phantom"),
        ("soulknife 5e", "Rogue", "Soulknife"),

        # Sorcerer subclasses
        ("draconic bloodline 5e", "Sorcerer", "Draconic Bloodline"),
        ("wild magic sorcerer 5e", "Sorcerer", "Wild Magic"),
        ("divine soul 5e", "Sorcerer", "Divine Soul"),
        ("shadow magic sorcerer 5e", "Sorcerer", "Shadow Magic"),
        ("storm sorcery 5e", "Sorcerer", "Storm Sorcery"),
        ("aberrant mind 5e", "Sorcerer", "Aberrant Mind"),
        ("clockwork soul 5e", "Sorcerer", "Clockwork Soul"),

        # Warlock subclasses
        ("the fiend warlock 5e", "Warlock", "The Fiend"),
        ("the great old one warlock 5e", "Warlock", "The Great Old One"),
        ("the archfey warlock 5e", "Warlock", "The Archfey"),
        ("hexblade 5e", "Warlock", "The Hexblade"),
        ("the celestial warlock 5e", "Warlock", "The Celestial"),
        ("the fathomless 5e", "Warlock", "The Fathomless"),
        ("the genie warlock 5e", "Warlock", "The Genie"),
        ("the undead warlock 5e", "Warlock", "The Undead"),

        # Wizard subclasses
        ("school of abjuration 5e", "Wizard", "School of Abjuration"),
        ("school of conjuration 5e", "Wizard", "School of Conjuration"),
        ("school of divination 5e", "Wizard", "School of Divination"),
        ("school of enchantment 5e", "Wizard", "School of Enchantment"),
        ("school of evocation 5e", "Wizard", "School of Evocation"),
        ("school of illusion 5e", "Wizard", "School of Illusion"),
        ("school of necromancy 5e", "Wizard", "School of Necromancy"),
        ("school of transmutation 5e", "Wizard", "School of Transmutation"),
        ("war magic 5e", "Wizard", "War Magic"),
        ("chronurgy magic 5e", "Wizard", "Chronurgy Magic"),
        ("graviturgy magic 5e", "Wizard", "Graviturgy Magic"),
        ("order of scribes 5e", "Wizard", "Order of Scribes"),
    ]

    results = {}

    for i, (keyword, parent_class, subclass_name) in enumerate(subclasses):
        print(f"Fetching {i+1}/{len(subclasses)}: {keyword}", file=sys.stderr)
        result = fetch_serp_data(keyword)
        result["parent_class"] = parent_class
        result["subclass_name"] = subclass_name
        results[keyword] = result

        # Rate limit - be nice to the API
        if i < len(subclasses) - 1:
            time.sleep(0.5)

    # Output as JSON
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
