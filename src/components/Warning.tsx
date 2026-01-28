export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(196,91,91,0.1)] border border-[rgba(196,91,91,0.3)] rounded-lg px-4 py-3 my-4 text-sm">
      <div className="font-bold text-[var(--red)] text-xs uppercase tracking-wider mb-1">
        Common Mistake
      </div>
      <div className="text-[var(--text)]">{children}</div>
    </div>
  );
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(91,196,122,0.1)] border border-[rgba(91,196,122,0.3)] rounded-lg px-4 py-3 my-4 text-sm">
      <div className="font-bold text-[var(--green)] text-xs uppercase tracking-wider mb-1">
        DM Tip
      </div>
      <div className="text-[var(--text)]">{children}</div>
    </div>
  );
}

export function RuleBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--accent-glow)] border border-[rgba(201,168,76,0.3)] rounded-lg px-4 py-3 my-4 text-sm">
      <div className="font-bold text-[var(--accent)] text-xs uppercase tracking-wider mb-1">
        Rule
      </div>
      <div className="text-[var(--text)]">{children}</div>
    </div>
  );
}
