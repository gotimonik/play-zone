"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Game } from "@/lib/games";
import { LocalPuzzleGame } from "@/components/LocalPuzzleGame";

function localGameSlug(game: Game) {
  const prefix = "/local-games/";
  return game.iframe_url?.startsWith(prefix) ? game.iframe_url.slice(prefix.length) : null;
}

export function GamePlayer({ game }: { game: Game }) {
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const localRef = useRef<HTMLDivElement>(null);
  const localSlug = localGameSlug(game);

  useEffect(() => {
    const key = "recently-played";
    const existing = JSON.parse(window.localStorage.getItem(key) || "[]") as string[];
    const next = [game.slug, ...existing.filter((slug) => slug !== game.slug)].slice(0, 8);
    window.localStorage.setItem(key, JSON.stringify(next));
  }, [game.slug]);

  useEffect(() => {
    if (!started || !game.iframe_url || localSlug) return;
    const timer = window.setTimeout(() => setLoaded(true), 3000);
    return () => window.clearTimeout(timer);
  }, [game.iframe_url, localSlug, started]);

  async function openFullscreen() {
    const element = localRef.current || frameRef.current;
    if (element?.requestFullscreen) await element.requestFullscreen();
  }

  return (
    <div className="glass overflow-hidden rounded-lg">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Now Playing</p>
          <h1 className="text-xl font-black text-white sm:text-2xl">{game.title}</h1>
        </div>
        <button
          type="button"
          onClick={openFullscreen}
          data-ga-click="game_fullscreen_click"
          data-ga-location="game_player"
          data-ga-label={game.title}
          className="cursor-pointer rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Fullscreen
        </button>
      </div>
      <div className="relative aspect-16/10 min-h-80 bg-slate-950 md:aspect-video">
        {!started ? (
          <button
            type="button"
            disabled={!game.iframe_url}
            data-ga-click={game.iframe_url ? "game_play_click" : "game_unavailable_click"}
            data-ga-location="game_player"
            data-ga-label={game.title}
            onClick={() => {
              if (!game.iframe_url) return;
              setLoaded(Boolean(localSlug));
              setStarted(true);
            }}
            className="group absolute inset-0 cursor-pointer overflow-hidden text-left disabled:cursor-not-allowed"
            aria-label={game.iframe_url ? `Play ${game.title}` : `${game.title} is unavailable`}
          >
            <Image
              src={game.thumbnail}
              alt={`${game.title} preview`}
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-fill transition duration-700 group-hover:scale-108"
              loading="eager"
            />
            <span className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-slate-950/10" />
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(32,231,255,0.22),transparent_28rem)] opacity-80 transition group-hover:opacity-100" />
            <span className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
              <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-100 backdrop-blur">
                {game.category}
              </span>
              <span className="rounded-full border border-lime-200/25 bg-lime-300/15 px-3 py-1 text-xs font-black text-lime-200 backdrop-blur">
                {game.rating.toFixed(1)} / 5
              </span>
            </span>
            <span className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-5 p-5 text-center sm:p-8">
              <span className="max-w-2xl">
                <span className="block text-xs font-black uppercase tracking-[0.32em] text-cyan-200">
                  Ready to play
                </span>
                <span className="mt-2 line-clamp-2 block text-2xl font-black leading-tight text-white drop-shadow-lg sm:text-4xl">
                  {game.title}
                </span>
              </span>
              <span className="relative inline-flex items-center justify-center">
                <span className="absolute h-full w-full rounded-full bg-cyan-300/35 blur-xl transition group-hover:scale-125 group-hover:bg-pink-300/35" />
                <span className="relative inline-flex items-center gap-3 rounded-full border border-white/35 bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-[0_20px_60px_rgba(32,231,255,0.3)] transition group-hover:-translate-y-1 group-hover:bg-cyan-200 group-focus:outline-none group-focus:ring-2 group-focus:ring-cyan-300 sm:px-7 sm:py-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 shadow-inner">
                    <span className="ml-0.5 h-0 w-0 border-y-8 border-l-12 border-y-transparent border-l-cyan-300" />
                  </span>
                  <span>{game.iframe_url ? "Play Now" : "Game Unavailable"}</span>
                </span>
              </span>
              <span className="text-xs font-bold text-slate-200/90">
                Instant load · fullscreen ready · no download
              </span>
            </span>
          </button>
        ) : !loaded ? (
          <div className="skeleton absolute inset-0 grid place-items-center text-sm font-bold text-slate-300">
            Loading game...
          </div>
        ) : null}
        {started && localSlug ? (
          <div ref={localRef} className="absolute inset-0 overflow-auto bg-slate-950">
            <LocalPuzzleGame slug={localSlug} />
          </div>
        ) : started && game.iframe_url ? (
          <iframe
            ref={frameRef}
            src={game.iframe_url}
            title={`${game.title} game`}
            loading="lazy"
            allow="fullscreen; gamepad; autoplay"
            allowFullScreen
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 h-full w-full"
          />
        ) : null}
      </div>
    </div>
  );
}
