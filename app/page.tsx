import Image from "next/image";
import Link from "next/link";
import { GameGrid } from "@/components/GameGrid";
import { RecentlyPlayed } from "@/components/RecentlyPlayed";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, games, slugify } from "@/lib/games";
import { collectionJsonLd, itemListJsonLd } from "@/lib/seo";

export default function Home() {
  const featured = games.filter((game) => game.featured);
  const trending = games.filter((game) => game.trending).slice(0, 10);
  const hero = featured[0];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd("Browser games", "/")) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd("Featured browser games", "/", featured)) }}
      />
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <div className="glass relative overflow-hidden rounded-lg p-6 sm:p-8 lg:min-h-[440px]">
          <div className="absolute inset-y-0 right-0 z-0 hidden sm:block" style={{ width: "38%" }}>
            <Image
              src={hero.thumbnail}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 24vw, 38vw"
              className="object-fill opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08101f] via-transparent to-transparent" />
          </div>
          <div className="relative z-20 max-w-[34rem]">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-cyan-300">
              Instant browser arena
            </p>
            <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-6xl">
              Premium games, <span className="neon-text block">zero friction.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Play curated iframe-powered games with fast discovery, dedicated SEO pages, trending
              picks, categories, and recently played history.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/games/${hero.slug}`}
                data-ga-click="hero_play_click"
                data-ga-location="home_hero"
                data-ga-label={hero.title}
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-white"
              >
                Play featured
              </Link>
              <Link
                href="/trending"
                data-ga-click="hero_trending_click"
                data-ga-location="home_hero"
                data-ga-label="See trending"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:border-pink-300"
              >
                See trending
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {featured.slice(1, 3).map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              data-ga-click="featured_game_click"
              data-ga-location="home_featured"
              data-ga-label={game.title}
              className="glass scanline relative min-h-52 overflow-hidden rounded-lg p-5"
            >
              <Image
                src={game.thumbnail}
                alt=""
                fill
                loading="eager"
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-fill opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              <div className="relative z-10 mt-24">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-300">
                  Featured
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">{game.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="Live heat" title="Trending now" href="/trending" />
        <GameGrid games={trending} priority />
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="Browse by mode" title="Categories" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${slugify(category)}`}
              data-ga-click="category_click"
              data-ga-location="home_categories"
              data-ga-label={category}
              className="glass rounded-lg p-4 transition hover:-translate-y-1 hover:border-pink-300/70"
            >
              <p className="text-lg font-black text-white">{category}</p>
              <p className="mt-1 text-sm text-slate-400">
                {games.filter((game) => game.category === category).length} games
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading eyebrow="Recommended" title="Editor picks" />
        <GameGrid games={games.filter((game) => game.rating >= 4.5).slice(0, 10)} />
      </section>

      <RecentlyPlayed games={games} />
    </>
  );
}
