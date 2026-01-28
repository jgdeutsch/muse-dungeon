type Stat = { label: string; value: string };

export function AtAGlance({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 my-6">
      <h2 className="font-['Cinzel'] text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
        At a Glance
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-[0.7rem] uppercase tracking-wider text-[var(--text-dim)] mb-0.5">
              {s.label}
            </div>
            <div className="text-sm font-semibold">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
