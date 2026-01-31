import Link from "next/link";
import { answerPages, getAnswersByCategory } from "@/data/answers";

export const metadata = {
  title: "D&D 5e Answers — MuseDungeon",
  description: "Comprehensive answers to common D&D 5e questions from the community.",
};

export default function AnswersIndexPage() {
  const categories = [
    { slug: "rules", label: "Rules Questions", description: "Official rules clarifications and interpretations" },
    { slug: "character-building", label: "Character Building", description: "Help with builds, multiclassing, and optimization" },
    { slug: "mechanics", label: "Game Mechanics", description: "How specific game systems work" },
    { slug: "dm-advice", label: "DM Advice", description: "Tips and guidance for Dungeon Masters" },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">D&D 5e Answers</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Community-driven answers to common Dungeons & Dragons 5th Edition questions.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => {
          const count = getAnswersByCategory(cat.slug as "rules" | "character-building" | "mechanics" | "dm-advice").length;
          return (
            <Link
              key={cat.slug}
              href={`/answers/${cat.slug}/`}
              className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{cat.label}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cat.description}</p>
              <span className="text-xs text-purple-600 dark:text-purple-400">{count} answers</span>
            </Link>
          );
        })}
      </div>

      {answerPages.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Answers</h2>
          <div className="space-y-4">
            {answerPages
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 10)
              .map((answer) => (
                <Link
                  key={answer.slug}
                  href={`/answers/${answer.category}/${answer.slug}/`}
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <h3 className="font-semibold mb-1">{answer.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{answer.description}</p>
                  <div className="mt-2 flex gap-2">
                    {answer.relatedPages.slice(0, 3).map((p, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}
    </main>
  );
}
