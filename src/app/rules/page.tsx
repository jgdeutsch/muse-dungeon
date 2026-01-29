import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "Rules & Systems — D&D 5e",
  description:
    "D&D 5e rules quick reference: core mechanics, game terms, and external tools.",
};

const categories = [
  {
    key: "conditions",
    title: "Conditions",
    description:
      "Blinded, charmed, frightened, stunned, and all 14 D&D 5e conditions explained.",
    count: 14,
  },
  {
    key: "core-mechanics",
    title: "Core Mechanics",
    description:
      "Exhaustion, fall damage, multiclassing, and other core rules.",
    count: 7,
  },
  {
    key: "game-terms",
    title: "Game Terms & Backgrounds",
    description: "Languages, tools, backgrounds, and other game terms.",
    count: 4,
  },
  {
    key: "tools-resources",
    title: "External Tools & Resources",
    description: "D&D Beyond, Sage Advice, MCDM, and other resources.",
    count: 4,
  },
];

export default function RulesIndex() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Rules" }]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          Rules &amp; Systems
        </h1>
        <p className="text-[var(--text-dim)]">
          29 quick-reference guides for conditions, core mechanics, game terms,
          and resources.
        </p>
      </div>

      {categories.map((cat) => (
        <section
          key={cat.key}
          className="py-8 border-t border-[var(--border)]"
        >
          <Link href={`/rules/${cat.key}/`} className="no-underline">
            <h2 className="font-['Cinzel'] text-xl font-semibold mb-1 text-[var(--text)] hover:text-[var(--accent)] transition-colors">
              {cat.title}
            </h2>
          </Link>
          <p className="text-sm text-[var(--text-dim)]">
            {cat.description} &mdash; {cat.count} guides
          </p>
        </section>
      ))}
    </>
  );
}
