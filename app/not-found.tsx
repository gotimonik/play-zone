import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[62vh] max-w-2xl flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">404</p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Game signal lost</h1>
      <p className="mt-4 text-slate-300">
        That page is not in the arena anymore. Jump back into the catalog and pick a fresh run.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
      >
        Browse games
      </Link>
    </section>
  );
}
