import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Nexus Play, a premium browser-games platform.",
  alternates: { canonical: absoluteUrl("/about") }
};

export default function AboutPage() {
  return (
    <article className="glass mx-auto max-w-3xl rounded-lg p-6 sm:p-8">
      <h1 className="text-4xl font-black text-white">About Nexus Play</h1>
      <p className="mt-5 leading-7 text-slate-300">
        Nexus Play is a modern browser-games platform designed for fast discovery, dedicated SEO
        pages, responsive gameplay, and lightweight embeds. The experience focuses on clean
        navigation, category browsing, trending picks, and recently played history.
      </p>
      <h2 className="mt-8 text-2xl font-black text-white">Built for players and search</h2>
      <p className="mt-3 leading-7 text-slate-300">
        Every game has its own slug-based page with dynamic metadata, structured data, social
        previews, breadcrumbs, related games, and optimized image loading.
      </p>
    </article>
  );
}
