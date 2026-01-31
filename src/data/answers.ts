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

export const answerPages: AnswerPage[] = [
  // Placeholder answer to enable static generation - will be replaced by real answers
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
