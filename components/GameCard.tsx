import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/games";

export function GameCard({ game, priority = false }: { game: Game; priority?: boolean }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      data-ga-click="game_card_click"
      data-ga-location="game_grid"
      data-ga-label={game.title}
      className="group scanline glass block overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_80px_rgba(32,231,255,0.16)]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
        <Image
          src={game.thumbnail}
          alt={`${game.title} preview`}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
          className="object-fill transition duration-500 group-hover:scale-110"
          priority={priority}
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
          {game.category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-base font-extrabold text-white">{game.title}</h3>
          <span className="shrink-0 text-sm font-bold text-lime-300">{game.rating.toFixed(1)}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-white">{game.description}</p>
      </div>
    </Link>
  );
}
