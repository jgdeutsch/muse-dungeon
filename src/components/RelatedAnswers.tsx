import Link from "next/link";

export type RelatedAnswer = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

export function RelatedAnswers({ answers }: { answers: RelatedAnswer[] }) {
  if (!answers || answers.length === 0) return null;

  return (
    <section id="related-answers" className="py-8 border-t border-[var(--border)]">
      <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
        Related Questions & Answers
      </h2>
      <p className="text-sm text-[var(--text-dim)] mb-4">
        Community questions related to this topic:
      </p>
      <div className="space-y-3">
        {answers.map((answer) => (
          <Link
            key={answer.slug}
            href={`/answers/${answer.category}/${answer.slug}/`}
            className="block p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <h3 className="font-semibold text-sm mb-1">{answer.title}</h3>
            <p className="text-xs text-[var(--text-dim)] line-clamp-2">
              {answer.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
