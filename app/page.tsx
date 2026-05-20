import Image from "next/image";
import Link from "next/link";
import { GameGrid } from "@/components/GameGrid";
import { RecentlyPlayed } from "@/components/RecentlyPlayed";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, games, gameSeeds, slugify } from "@/lib/games";
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd("Featured browser games", "/", featured)),
        }}
      />
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <div className="glass relative overflow-hidden rounded-lg p-6 sm:p-8 lg:min-h-110">
          <div className="absolute inset-y-0 right-0 z-0 hidden sm:block" style={{ width: "38%" }}>
            <Image
              src={hero.thumbnail}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 24vw, 38vw"
              className="object-fill opacity-80"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#08101f] via-transparent to-transparent" />
          </div>
          <div className="relative z-20 max-w-136">
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
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent" />
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const games = gameSeeds[category];
            const hero = games?.[0];

            return (
              <Link
                key={category}
                href={`/category/${slugify(category)}`}
                data-ga-click="category_click"
                data-ga-location="home_categories"
                data-ga-label={category}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/60"
              >
                {/* Category Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={hero.thumbnail}
                    alt={category}
                    fill
                    priority
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="eager"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-extrabold text-white drop-shadow-md">{category}</h3>

                  <div className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200 backdrop-blur-md">
                    🎮 {games.length} Games
                  </div>
                </div>
              </Link>
            );
          })}
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
