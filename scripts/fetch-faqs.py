#!/usr/bin/env python3
"""
Fetch FAQ data from DataForSEO for all pages on the site.
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
    # List of keywords to fetch (class names)
    keywords = [
        # Classes (excluding paladin which is already done)
        "artificer 5e",
        "barbarian 5e",
        "bard 5e",
        "bladesinger 5e",
        "blood hunter 5e",
        "cleric 5e",
        "druid 5e",
        "eldritch knight 5e",
        "fighter 5e",
        "gunslinger 5e",
        "hexblade warlock 5e",
        "monk 5e",
        "ranger 5e",
        "rogue 5e",
        "sorcerer 5e",
        "swashbuckler 5e",
        "warlock 5e",
        "wizard 5e",
    ]

    results = {}

    for i, keyword in enumerate(keywords):
        print(f"Fetching {i+1}/{len(keywords)}: {keyword}", file=sys.stderr)
        result = fetch_serp_data(keyword)
        results[keyword] = result

        # Rate limit - be nice to the API
        if i < len(keywords) - 1:
            time.sleep(0.5)

    # Output as JSON
    print(json.dumps(results, indent=2))

if __name__ == "__main__":
    main()
