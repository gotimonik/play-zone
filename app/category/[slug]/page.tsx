import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GameGrid } from "@/components/game-grid";
import { categories, getGamesByCategory, slugify } from "@/lib/games";
import { absoluteUrl, collectionJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: slugify(category) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => slugify(item) === slug);
  if (!category) return {};
  return {
    title: `${category} Games`,
    description: `Play the best ${category.toLowerCase()} browser games online with fast loading and dedicated game pages.`,
    alternates: { canonical: absoluteUrl(`/category/${slug}`) }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => slugify(item) === slug);
  if (!category) notFound();
  const items = getGamesByCategory(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd(`${category} games`, `/category/${slug}`))
        }}
      />
      <Breadcrumbs items={[{ label: category }]} />
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">Category</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-6xl">{category} Games</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Explore {items.length} instant-play {category.toLowerCase()} games with optimized previews
          and dedicated play pages.
        </p>
      </header>
      <GameGrid games={items} priority />
    </>
  );
}
