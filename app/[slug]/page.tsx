import { notFound, redirect } from "next/navigation";
import {
  categories,
  categoryPaths,
  games,
  getCategoryBySourcePath,
  getGameBySourcePath,
  slugify
} from "@/lib/games";

export function generateStaticParams() {
  return [
    ...games.map((game) => ({ slug: game.sourcePath.replace(/^\//, "") })),
    ...categories.map((category) => ({ slug: categoryPaths[category].replace(/^\//, "") }))
  ];
}

export default async function SourcePathPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sourcePath = `/${slug}`;
  const game = getGameBySourcePath(sourcePath);
  if (game) redirect(`/games/${game.slug}`);

  const category = getCategoryBySourcePath(sourcePath);
  if (category) redirect(`/category/${slugify(category)}`);

  notFound();
}
