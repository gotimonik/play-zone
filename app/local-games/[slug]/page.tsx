import { notFound } from "next/navigation";
import { LocalPuzzleGame } from "@/components/LocalPuzzleGame";

const localGameSlugs = [
  "arrow-puzzle-tap-puzzle-games",
  "mind-games",
  "interested-games",
] as const;

export function generateStaticParams() {
  return localGameSlugs.map((slug) => ({ slug }));
}

export default async function LocalGamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!localGameSlugs.includes(slug as (typeof localGameSlugs)[number])) notFound();
  return <LocalPuzzleGame slug={slug} />;
}
