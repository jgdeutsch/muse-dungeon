import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <div className="py-4 text-xs text-[var(--text-dim)]">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2 opacity-50">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-[var(--text-dim)] no-underline hover:text-[var(--accent)] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
