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
    <footer className="mt-16 bg-[#0a0a0a] border-t border-[#222]">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        {/* Logo / Site name */}
        <Link href="/" className="inline-block mb-10">
          <span className="font-['Cinzel'] text-xl font-bold text-white tracking-wide">
            Muse Dungeon
          </span>
        </Link>

        {/* Link columns */}
        <nav
          aria-label="Site map"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10"
        >
          {footerLinks.map((section) => (
            <div key={section.href}>
              <Link
                href={section.href}
                className="font-['Cinzel'] font-semibold text-sm text-white hover:text-[var(--accent)] transition-colors"
              >
                {section.title}
              </Link>
              <ul className="mt-3 space-y-2">
                {section.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="text-[13px] text-[#888] hover:text-white transition-colors"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#222] text-center text-xs text-[#555]">
          &copy; {new Date().getFullYear()} Muse Dungeon &mdash; D&amp;D 5e Quick Reference for Dungeon Masters
        </div>
      </div>
    </footer>
  );
}
