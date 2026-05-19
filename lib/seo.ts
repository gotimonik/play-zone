import type { Game } from "@/lib/games";

export const siteConfig = {
  name: "Games Play Fantacy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://games.playfantacy.com",
  description:
    "Play premium browser games instantly with fast loading, clean categories, trending picks, and dedicated game pages.",
  keywords: [
    "free online games",
    "browser games",
    "instant play games",
    "action games",
    "arcade games",
    "racing games",
    "puzzle games",
    "multiplayer games"
  ]
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
    keywords: [game.title, game.category, ...game.tags].join(", "),
    applicationCategory: "Game",
    operatingSystem: "Web browser",
    playMode: game.tags.includes("multiplayer") ? "MultiPlayer" : "SinglePlayer",
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

export function siteJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.svg")
    }
  ];
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { label: "Home", href: "/" },
      ...items
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href || "/")
    }))
  };
}

export function itemListJsonLd(name: string, path: string, items: Game[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/games/${game.slug}`),
      name: game.title
    }))
  };
}
