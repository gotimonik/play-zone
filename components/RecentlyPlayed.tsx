"use client";

import { useEffect, useState } from "react";
import { GameGrid } from "@/components/GameGrid";
import type { Game } from "@/lib/games";

export function RecentlyPlayed({ games }: { games: Game[] }) {
  const [recent, setRecent] = useState<Game[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const slugs = JSON.parse(window.localStorage.getItem("recently-played") || "[]") as string[];
      setRecent(slugs.map((slug) => games.find((game) => game.slug === slug)).filter(Boolean) as Game[]);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [games]);

  if (recent.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Resume</p>
        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Recently played</h2>
      </div>
      <GameGrid games={recent} />
    </section>
  );
}
