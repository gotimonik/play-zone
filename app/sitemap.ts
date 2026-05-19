import type { MetadataRoute } from "next";
import { categories, games, slugify } from "@/lib/games";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "/", changeFrequency: "daily" as const, priority: 1 },
    { path: "/trending", changeFrequency: "daily" as const, priority: 0.85 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.45 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.25 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.25 }
  ];
  const categoryRoutes = categories.map((category) => ({
    path: `/category/${slugify(category)}`,
    changeFrequency: "daily" as const,
    priority: 0.8
  }));
  const gameRoutes = games.map((game) => ({
    path: `/games/${game.slug}`,
    changeFrequency: "weekly" as const,
    priority: game.featured ? 0.9 : game.trending ? 0.85 : 0.75
  }));

  return [...staticRoutes, ...categoryRoutes, ...gameRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
