import Link from "next/link";

const footerLinks = [
  {
    title: "Spells",
    href: "/spells",
    children: [
      { title: "Cantrips", href: "/spells/cantrips" },
      { title: "Offensive", href: "/spells/offensive" },
      { title: "Utility & Control", href: "/spells/utility-control" },
      { title: "Support & Healing", href: "/spells/support-healing" },
      { title: "Reaction & Defense", href: "/spells/reaction-defense" },
      { title: "Class Spell Lists", href: "/spells/class-spell-lists" },
      { title: "General", href: "/spells/general" },
    ],
  },
  {
    title: "Characters",
    href: "/characters",
    children: [
      { title: "Classes & Subclasses", href: "/characters/classes" },
      { title: "Races & Species", href: "/characters/races" },
      { title: "Feats & Combat", href: "/characters/feats" },
      { title: "Character Creation", href: "/characters/creation" },
    ],
  },
  {
    title: "Monsters",
    href: "/monsters",
    children: [
      { title: "Creatures", href: "/monsters/creatures" },
      { title: "Lore & NPCs", href: "/monsters/lore" },
      { title: "Sourcebooks", href: "/monsters/sourcebooks" },
    ],
  },
  {
    title: "Items",
    href: "/items",
    children: [
      { title: "Equipment & Weapons", href: "/items/equipment" },
      { title: "Magic Items", href: "/items/magic-items" },
    ],
  },
  {
    title: "Rules",
    href: "/rules",
    children: [
      { title: "Conditions", href: "/rules/conditions" },
      { title: "Core Mechanics", href: "/rules/core-mechanics" },
      { title: "Game Terms", href: "/rules/game-terms" },
      { title: "Tools & Resources", href: "/rules/tools-resources" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-12 pt-8 pb-6 border-t border-[var(--border)]">
      <nav aria-label="Site map" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-8">
        {footerLinks.map((section) => (
          <div key={section.href}>
            <Link
              href={section.href}
              className="font-['Cinzel'] font-semibold text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors"
            >
              {section.title}
            </Link>
            <ul className="mt-2 space-y-1.5">
              {section.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="text-xs text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors"
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <p className="text-center text-xs text-[var(--text-dim)]">
        &copy; {new Date().getFullYear()} Muse Dungeon &mdash; D&amp;D 5e Quick Reference for Dungeon Masters
      </p>
    </footer>
  );
}
