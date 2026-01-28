type Section = { id: string; label: string };

export function JumpTo({ sections }: { sections: Section[] }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-4 my-5">
      <h2 className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-3">
        Jump to
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-[0.82rem] text-[var(--text)] no-underline bg-[var(--bg)] border border-[var(--border)] rounded-md px-3 py-1 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
