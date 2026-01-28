import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "Character Options — D&D 5e",
  description:
    "D&D 5e character reference guides: classes, subclasses, races, feats, and creation tools.",
};

const categories = [
  {
    key: "classes",
    title: "Classes & Subclasses",
    description: "Quick reference for every class and subclass in D&D 5e.",
    count: 24,
  },
  {
    key: "races",
    title: "Races & Species",
    description: "Racial traits, ability scores, and subraces at a glance.",
    count: 33,
  },
  {
    key: "feats",
    title: "Combat Maneuvers & Feats",
    description: "Feats, grappling, sneak attack, and other combat options.",
    count: 6,
  },
  {
    key: "creation",
    title: "Character Creation Tools",
    description: "Point buy, character sheets, and creation guides.",
    count: 4,
  },
];

export default function CharactersIndex() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Characters" }]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">
          Character Options
        </h1>
        <p className="text-[var(--text-dim)]">
          71 quick-reference guides for classes, races, feats, and character
          creation.
        </p>
      </div>

      {categories.map((cat) => (
        <section
          key={cat.key}
          className="py-8 border-t border-[var(--border)]"
        >
          <Link
            href={`/characters/${cat.key}/`}
            className="no-underline"
          >
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
