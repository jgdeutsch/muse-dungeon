type Source = { name: string; url: string; note?: string };

export function Sources({ sources }: { sources: Source[] }) {
  return (
    <div className="py-8 border-t border-[var(--border)]">
      <h2 className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-3">
        Sources &amp; Further Reading
      </h2>
      <ul className="list-none">
        {sources.map((s, i) => (
          <li key={i} className="mb-1.5 text-[0.82rem]">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors"
            >
              {s.name}
            </a>
            {s.note && (
              <span className="text-[var(--text-dim)]"> &mdash; {s.note}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
