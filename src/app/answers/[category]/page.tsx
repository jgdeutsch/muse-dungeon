import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnswersByCategory, type AnswerPage } from "@/data/answers";

const categoryInfo: Record<string, { label: string; description: string }> = {
  rules: { label: "Rules Questions", description: "Official rules clarifications and interpretations" },
  "character-building": { label: "Character Building", description: "Help with builds, multiclassing, and optimization" },
  mechanics: { label: "Game Mechanics", description: "How specific game systems work" },
  "dm-advice": { label: "DM Advice", description: "Tips and guidance for Dungeon Masters" },
};

export function generateStaticParams() {
  return Object.keys(categoryInfo).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = categoryInfo[category];
  if (!info) return { title: "Answers" };
  return {
    title: `${info.label} — D&D 5e Answers`,
    description: info.description,
  };
}

export default async function AnswersCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = categoryInfo[category];
  if (!info) return notFound();

  const answers = getAnswersByCategory(category as AnswerPage["category"]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/answers/" className="text-gray-500 hover:text-gray-700">Answers</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900 dark:text-gray-100">{info.label}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">{info.label}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{info.description}</p>

      {answers.length === 0 ? (
        <p className="text-gray-500 py-12 text-center">No answers in this category yet. Check back soon!</p>
      ) : (
        <div className="space-y-4">
          {answers
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((answer) => (
              <Link
                key={answer.slug}
                href={`/answers/${category}/${answer.slug}/`}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors"
              >
                <h2 className="font-semibold mb-1">{answer.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{answer.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {answer.relatedPages.slice(0, 5).map((p, i) => (
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
      )}
    </main>
  );
}
