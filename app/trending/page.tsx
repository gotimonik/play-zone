import type { Metadata } from "next";
import { GameGrid } from "@/components/GameGrid";
import { games } from "@/lib/games";
import { absoluteUrl, collectionJsonLd, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Trending Browser Games",
  description: "Play the most popular browser games trending on Games Play Fantacy.",
  alternates: { canonical: absoluteUrl("/trending") }
};

export default function TrendingPage() {
  const trending = games.filter((game) => game.trending).sort((a, b) => b.rating - a.rating);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd("Trending games", "/trending")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd("Trending games", "/trending", trending))
        }}
      />
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-pink-300">Live heat</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">Trending Games</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          High-rating browser games with quick starts, clean embeds, and strong replay value.
        </p>
      </header>
      <GameGrid games={trending} priority />
    </>
  );
}
