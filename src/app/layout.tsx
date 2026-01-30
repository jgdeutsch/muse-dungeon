import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { SearchBar } from "@/components/SearchBar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { GameProvider } from "@/context/GameContext";
import { Toasts } from "@/components/Toasts";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFJ6XTCH');`,
          }}
        />
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFJ6XTCH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AuthProvider>
          <GameProvider>
            <div className="max-w-3xl mx-auto px-5">
              <Nav />
              <div className="pt-3">
                <SearchBar />
              </div>
              <main>{children}</main>
            </div>
            <Footer />
            <Toasts />
          </GameProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
