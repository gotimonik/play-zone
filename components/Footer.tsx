import Link from "next/link";
import { categories, slugify } from "@/lib/games";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <h2 className="text-xl font-black text-white">Games Play Fantacy</h2>
          <p className="mt-3 max-w-md text-sm text-white">
            Welcome to the ultimate destination for instant web gaming entertainment. Our platform offers a huge collection of fun, fast, and addictive browser games that you can play anytime without downloads or installations. Explore action, puzzle, racing, adventure, arcade, shooting, multiplayer, and many more categories designed for players of all ages.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-white">Explore</h3>
            <div className="mt-3 space-y-2 text-sm text-white">
              <Link className="block hover:text-white" href="/trending">
                Trending games
              </Link>
              <Link className="block hover:text-white" href="/search">
                Search
              </Link>
              <Link className="block hover:text-white" href="/about">
                About
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Categories</h3>
            <div className="mt-3 space-y-2 text-sm text-white">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category}
                  className="block hover:text-white"
                  href={`/category/${slugify(category)}`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white">Legal</h3>
            <div className="mt-3 space-y-2 text-sm text-white">
              <Link className="block hover:text-white" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="block hover:text-white" href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
