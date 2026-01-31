#!/usr/bin/env python3
"""
Fetch SERP data from DataForSEO for D&D character creation topics.
This will help understand what content DMs and players want on creation pages.
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
                    top_results = []

                    for item in items:
                        if item.get("type") == "people_also_ask":
                            for paa_item in item.get("items", []):
                                if paa_item.get("title"):
                                    paa_questions.append({
                                        "question": paa_item["title"],
                                        "answer_hint": paa_item.get("expanded_element", [{}])[0].get("description", "") if paa_item.get("expanded_element") else ""
                                    })
                        elif item.get("type") == "related_searches":
                            for rel in item.get("items", []):
                                if isinstance(rel, dict) and rel.get("title"):
                                    related_searches.append(rel["title"])
                                elif isinstance(rel, str):
                                    related_searches.append(rel)
                        elif item.get("type") == "organic" and len(top_results) < 5:
                            top_results.append({
                                "title": item.get("title", ""),
                                "url": item.get("url", ""),
                                "description": item.get("description", "")
                            })

                    return {
                        "keyword": keyword,
                        "paa": paa_questions,
                        "related": related_searches,
                        "top_results": top_results
                    }
    except Exception as e:
        print(f"Error fetching {keyword}: {e}", file=sys.stderr)

    return {"keyword": keyword, "paa": [], "related": [], "top_results": []}

def main():
    # Character creation related keywords
    keywords = [
        # Core character creation
        "dnd character creator",
        "dnd 5e character creator",
        "d&d character builder",
        "how to make a dnd character",
        "dnd character creation guide",

        # Character sheet
        "dnd character sheet",
        "dnd 5e character sheet pdf",
        "fillable character sheet 5e",
        "dnd character sheet explained",

        # Point buy
        "dnd point buy",
        "dnd 5e point buy calculator",
        "point buy 5e",
        "dnd ability scores point buy",

        # Stat rolling
        "dnd stat roller",
        "4d6 drop lowest",
        "dnd ability score generator",
        "roll stats dnd 5e",

        # Standard array
        "dnd standard array",
        "5e standard array",
        "standard array vs point buy",

        # Character concepts
        "dnd character ideas",
        "dnd character backstory generator",
        "dnd character concepts",
        "interesting dnd characters",

        # Specific tools people search for
        "dnd beyond character creator",
        "free dnd character creator",
        "random dnd character generator",
        "dnd character name generator",
    ]

    results = {}

    for i, keyword in enumerate(keywords):
        print(f"Fetching {i+1}/{len(keywords)}: {keyword}", file=sys.stderr)
        result = fetch_serp_data(keyword)
        results[keyword] = result

        # Rate limit
        if i < len(keywords) - 1:
            time.sleep(0.5)

    # Output as JSON
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
