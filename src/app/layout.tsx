import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Muse Dungeon — D&D 5e Quick Reference for DMs",
    template: "%s | Muse Dungeon",
  },
  description:
    "Fast, scannable D&D 5e reference guides built for Dungeon Masters. Look up spells, classes, monsters, items, and rules in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cinzel:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="max-w-3xl mx-auto px-5">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
