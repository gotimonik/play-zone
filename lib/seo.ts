import type { Game } from "@/lib/games";

export const siteConfig = {
  name: "Nexus Play",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://games.playfantacy.com",
  description:
    "Play premium browser games instantly with fast loading, clean categories, trending picks, and dedicated game pages."
};

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function gameJsonLd(game: Game) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    url: absoluteUrl(`/games/${game.slug}`),
    image: game.thumbnail,
    genre: game.category,
    applicationCategory: "Game",
    operatingSystem: "Web browser",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: game.rating,
      ratingCount: Math.round(game.rating * 300)
    }
  };
}

export function collectionJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };
}
