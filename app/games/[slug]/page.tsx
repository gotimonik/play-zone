import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GameGrid } from "@/components/GameGrid";
import { GamePlayer } from "@/components/GamePlayer";
import { SectionHeading } from "@/components/SectionHeading";
import { ShareButtons } from "@/components/ShareButtons";
import { categories, games, getGameBySlug, getRelatedGames, slugify } from "@/lib/games";
import { absoluteUrl, gameJsonLd, siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};
  const path = `/games/${game.slug}`;
  const title = `Play ${game.title} Online`;
  return {
    title,
    description: game.description,
    alternates: { canonical: absoluteUrl(path) },
    keywords: [game.title, game.category, "browser game", "online game", ...game.tags],
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title,
      description: game.description,
      images: [{ url: game.thumbnail, width: 1200, height: 630, alt: `${game.title} preview` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: game.description,
      images: [game.thumbnail]
    }
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  const related = getRelatedGames(game);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd(game)) }}
      />
      <Breadcrumbs
        items={[
          { label: game.category, href: `/category/${slugify(game.category)}` },
          { label: game.title }
        ]}
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <GamePlayer game={game} />
        <aside className="space-y-4">
          <div className="glass rounded-lg p-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Details</p>
            <h2 className="mt-3 text-2xl font-black text-white">{game.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{game.description}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-slate-500">Rating</dt>
                <dd className="font-bold text-lime-300">{game.rating.toFixed(1)} / 5</dd>
              </div>
              <div>
                <dt className="text-slate-500">Category</dt>
                <dd className="font-bold text-white">{game.category}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-5">
            <h2 className="text-lg font-black text-white">Share</h2>
            <div className="mt-3">
              <ShareButtons title={`Play ${game.title}`} url={absoluteUrl(`/games/${game.slug}`)} />
            </div>
          </div>
          <div className="glass rounded-lg p-5">
            <h2 className="text-lg font-black text-white">Categories</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`/category/${slugify(category)}`}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300 hover:text-white"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <section className="mt-12">
        <SectionHeading eyebrow="Same category" title={`More ${game.category} games`} />
        <GameGrid games={related} />
      </section>
    </>
  );
}
