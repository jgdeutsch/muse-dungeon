export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--red-bg)] border border-[var(--red-border)] rounded-lg px-4 py-3 my-4 text-sm">
      <div className="font-bold text-[var(--red)] text-xs uppercase tracking-wider mb-1">
        Common Mistake
      </div>
      <div className="text-[var(--text)]">{children}</div>
    </div>
  );
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--green-bg)] border border-[var(--green-border)] rounded-lg px-4 py-3 my-4 text-sm">
      <div className="font-bold text-[var(--green)] text-xs uppercase tracking-wider mb-1">
        DM Tip
      </div>
      <div className="text-[var(--text)]">{children}</div>
    </div>
  );
}

export function RuleBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--accent-light)] border border-[var(--accent)] border-opacity-30 rounded-lg px-4 py-3 my-4 text-sm">
      <div className="font-bold text-[var(--accent)] text-xs uppercase tracking-wider mb-1">
        Rule
      </div>
      <div className="text-[var(--text)]">{children}</div>
    </div>
  );
}
