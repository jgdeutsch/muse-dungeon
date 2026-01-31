// Answer pages generated from Reddit D&D questions
// These pages answer common questions and interlink with existing MuseDungeon content

export type AnswerPage = {
  slug: string;
  title: string;
  question: string; // The original question being answered
  category: "rules" | "character-building" | "mechanics" | "dm-advice";
  description: string;
  sections: { id: string; title: string; content: string }[];
  relatedPages: { name: string; url: string; type: string }[]; // Links TO other pages
  sourceUrl?: string; // Original Reddit URL (optional, for reference)
  createdAt: string; // ISO date
};

// Pages that link TO this answer (populated automatically)
export type AnswerBacklink = {
  answerSlug: string;
  linkedFrom: { name: string; url: string; type: string }[];
};

export const answerPages: AnswerPage[] = [// Placeholder answer to enable static generation - will be replaced by real answers
  {
    slug: "getting-started-with-dnd-5e",
    title: "Getting Started with D&D 5e",
    question: "How do I get started playing D&D 5e?",
    category: "rules",
    description: "A beginner's guide to starting your D&D 5e journey, covering the basics of character creation, gameplay, and finding a group.",
    sections: [
      {
        id: "introduction",
        title: "Welcome to D&D!",
        content: "Dungeons & Dragons 5th Edition is a tabletop roleplaying game where you and your friends create characters and embark on adventures together. One player takes on the role of the Dungeon Master (DM), who narrates the story and controls the world, while the other players control their individual characters.",
      },
      {
        id: "what-you-need",
        title: "What You Need to Play",
        content: "To get started, you'll need: the Basic Rules (available free from Wizards of the Coast), a set of polyhedral dice (d4, d6, d8, d10, d12, d20, and d100), a character sheet, pencil, and some friends to play with. The Player's Handbook provides more options but isn't required to start.",
      },
      {
        id: "character-creation",
        title: "Creating Your First Character",
        content: "Character creation involves choosing a race (like Human, Elf, or Dwarf), a class (like Fighter, Wizard, or Rogue), rolling or assigning ability scores, and developing a backstory. Check out our character creation tools to help you build your first character!",
      },
    ],
    relatedPages: [
      { name: "Character Creation Tools", url: "/characters/creation/", type: "Guide" },
      { name: "Point Buy Calculator", url: "/characters/creation/dnd-point-buy/", type: "Tool" },
      { name: "Stat Roller", url: "/characters/creation/dnd-stat-roller/", type: "Tool" },
    ],
    createdAt: "2025-01-31T00:00:00.000Z",
  },
  {
    "slug": "tiefling-innate-thaumaturgy-question",
    "title": "Tiefling innate thaumaturgy question",
    "question": "Tiefling innate thaumaturgy question",
    "category": "character-building",
    "description": "My take on a common D&D 5e question: Tiefling innate thaumaturgy question",
    "sections": [
      {
        "id": "introduction",
        "title": "Quick Answer",
        "content": "I see this question come up a lot in my games and online communities. It touches on rogue, tiefling, thaumaturgy. Let me break down how I handle this at my table."
      },
      {
        "id": "original-question",
        "title": "The Question",
        "content": "Here's the full context of what was asked:\n\n> I tried to look this up but didn't find anything. My apologies if it's been covered. I'm playing a tiefling rogue. If I want to try to cast thaumaturgy without giving away that I'm casting it (say to close a door on an opponent in the middle of a fight), is there a feat that would allow me to do so?"
      },
      {
        "id": "class-mechanics",
        "title": "Class Mechanics",
        "content": "When it comes to the **Rogue**, I always refer players to my [Rogue guide](https://musedungeon.comhttps://musedungeon.com/characters/classes/rogue-5e/). I've put together everything you need to know about the class features, subclass options, and how to build an effective character."
      },
      {
        "id": "spells",
        "title": "Spells Involved",
        "content": "**[Thaumaturgy](https://musedungeon.comhttps://musedungeon.com/spells/cantrips/thaumaturgy-5e/)** — I've written up a full breakdown including casting time, range, components, and my rulings on common questions players ask about this spell."
      },
      {
        "id": "racial-considerations",
        "title": "Racial Considerations",
        "content": "The **[Tiefling](https://musedungeon.comhttps://musedungeon.com/characters/races/tiefling-5e/)** has some unique traits that come into play here. I cover all the racial features, ability score bonuses, and lore in my race guide — it's one of the more popular picks I see at my tables."
      }
    ],
    "relatedPages": [
      {
        "name": "Rogue",
        "url": "https://musedungeon.com/characters/classes/rogue-5e/",
        "type": "Class"
      },
      {
        "name": "Tiefling",
        "url": "https://musedungeon.com/characters/races/tiefling-5e/",
        "type": "Race"
      },
      {
        "name": "Thaumaturgy",
        "url": "https://musedungeon.com/spells/cantrips/thaumaturgy-5e/",
        "type": "Spell"
      }
    ],
    "sourceUrl": "https://reddit.com/r/DnD/comments/1qruw8m/tiefling_innate_thaumaturgy_question/",
    "createdAt": "2026-01-31T08:12:58.372Z"
  },
];

// Helper to get all answer slugs for static generation
export function getAllAnswerSlugs(): { category: string; slug: string }[] {
  return answerPages.map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

// Get a specific answer by slug
export function getAnswerBySlug(slug: string): AnswerPage | undefined {
  return answerPages.find((a) => a.slug === slug);
}

// Get answers related to a specific page URL
export function getAnswersRelatedTo(pageUrl: string): AnswerPage[] {
  return answerPages.filter((a) =>
    a.relatedPages.some((p) => p.url === pageUrl || pageUrl.includes(p.url))
  );
}

// Get answers by category
export function getAnswersByCategory(category: AnswerPage["category"]): AnswerPage[] {
  return answerPages.filter((a) => a.category === category);
}
