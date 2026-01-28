"use client";

import Link from "next/link";
import { useGame } from "@/context/GameContext";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function GamePage() {
  const { characters, removeCharacter } = useGame();

  const players = characters.filter((c) => c.type === "player");
  const npcs = characters.filter((c) => c.type === "npc");

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "My Game" },
        ]}
      />

      <div className="pt-6 pb-2">
        <h1 className="font-['Cinzel'] text-3xl font-bold mb-2">My Game</h1>
        <p className="text-[var(--text-dim)]">
          Track your campaign&apos;s players and NPCs.
        </p>
      </div>

      {/* Stats bar */}
      {characters.length > 0 && (
        <div className="flex gap-6 py-4 mb-2">
          {[
            { n: players.length, l: "Players" },
            { n: npcs.length, l: "NPCs" },
            { n: characters.length, l: "Total" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-['Cinzel'] text-2xl font-bold text-[var(--accent)]">
                {s.n}
              </div>
              <div className="text-xs text-[var(--text-dim)]">{s.l}</div>
            </div>
          ))}
        </div>
      )}

      {characters.length === 0 ? (
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 text-center my-8">
          <div className="text-4xl mb-4">&#9876;</div>
          <h2 className="font-['Cinzel'] text-xl font-semibold mb-2">
            No characters yet
          </h2>
          <p className="text-[var(--text-dim)] text-sm mb-4">
            Browse class guides and add players or NPCs to start tracking your
            campaign.
          </p>
          <Link
            href="/characters/classes/"
            className="inline-block bg-[var(--accent)] text-white rounded-lg px-5 py-2.5 text-sm font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            Browse Classes
          </Link>
        </div>
      ) : (
        <>
          {[
            { label: "Players", list: players },
            { label: "NPCs", list: npcs },
          ]
            .filter((g) => g.list.length > 0)
            .map((group) => (
              <section
                key={group.label}
                className="py-6 border-t border-[var(--border)]"
              >
                <h2 className="font-['Cinzel'] text-xl font-semibold mb-4">
                  {group.label}
                </h2>
                {group.list.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 mb-2"
                  >
                    <div>
                      <div className="text-sm font-semibold">{c.name}</div>
                      <div className="text-xs text-[var(--text-dim)]">
                        {c.className} &middot;{" "}
                        {new Date(c.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <button
                      onClick={() => removeCharacter(c.id)}
                      className="text-xs text-[var(--red)] cursor-pointer bg-transparent border-0 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </section>
            ))}
        </>
      )}
    </>
  );
}
