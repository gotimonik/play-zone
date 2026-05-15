import type { MetadataRoute } from "next";
import { categories, games, slugify } from "@/lib/games";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    "",
    "/trending",
    "/search",
    "/about",
    "/privacy",
    "/terms",
    ...categories.map((category) => `/category/${slugify(category)}`),
    ...games.map((game) => `/games/${game.slug}`)
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: now,
    changeFrequency: path.startsWith("/games") ? "weekly" : "daily",
    priority: path === "" ? 1 : path.startsWith("/games") ? 0.8 : 0.7
  }));
}
