"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { categories, slugify } from "@/lib/games";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/trending", label: "Trending" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (value) router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060711]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-black text-white">
          <span className="grid size-9 place-items-center rounded-lg bg-cyan-300 text-slate-950 shadow-[0_0_30px_rgba(32,231,255,0.35)]">
            N
          </span>
          <span>Nexus Play</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                pathname === item.href ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <form onSubmit={onSubmit} className="ml-auto hidden w-full max-w-sm sm:block">
          <label className="sr-only" htmlFor="global-search">
            Search games
          </label>
          <input
            id="global-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search games..."
            className="w-full rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
          />
        </form>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/10 p-2 text-sm font-bold text-white md:hidden"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
          <form onSubmit={onSubmit}>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search games..."
              className="w-full rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white outline-none"
            />
          </form>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[...navItems, ...categories.map((c) => ({ href: `/category/${slugify(c)}`, label: c }))].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
