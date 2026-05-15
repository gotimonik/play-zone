import type { Metadata } from "next";
import Link from "next/link";
import { GameGrid } from "@/components/game-grid";
import { searchGames } from "@/lib/games";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Search Games",
  description: "Search free online browser games by title, category, and tags.",
  alternates: { canonical: absoluteUrl("/search") }
};

export default function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  return <SearchResults searchParams={searchParams} />;
}

async function SearchResults({
  searchParams
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const page = Math.max(1, Number(params.page || 1));
  const pageSize = 15;
  const results = searchGames(query);
  const totalPages = Math.max(1, Math.ceil(results.length / pageSize));
  const visible = results.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">Search</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">
          {query ? `Results for "${query}"` : "Search Games"}
        </h1>
        <p className="mt-4 text-slate-300">{results.length} games found.</p>
      </header>
      <GameGrid games={visible} priority />
      {totalPages > 1 ? (
        <nav className="mt-8 flex justify-center gap-3" aria-label="Pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
            <Link
              key={item}
              href={`/search?q=${encodeURIComponent(query)}&page=${item}`}
              className={`grid size-10 place-items-center rounded-lg border text-sm font-bold ${
                item === page
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-white/10 text-white hover:border-cyan-300"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
}
