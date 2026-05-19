"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Game } from "@/lib/games";

export function GamePlayer({ game }: { game: Game }) {
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const key = "recently-played";
    const existing = JSON.parse(window.localStorage.getItem(key) || "[]") as string[];
    const next = [game.slug, ...existing.filter((slug) => slug !== game.slug)].slice(0, 8);
    window.localStorage.setItem(key, JSON.stringify(next));
  }, [game.slug]);

  useEffect(() => {
    if (!started || !game.iframe_url) return;
    const timer = window.setTimeout(() => setLoaded(true), 3000);
    return () => window.clearTimeout(timer);
  }, [game.iframe_url, started]);

  async function openFullscreen() {
    const element = frameRef.current;
    if (element?.requestFullscreen) await element.requestFullscreen();
  }

  return (
    <div className="glass overflow-hidden rounded-lg">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
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
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
        >
          Fullscreen
        </button>
      </div>
      <div className="relative aspect-[16/10] min-h-[320px] bg-slate-950 md:aspect-video">
        {!started ? (
          <button
            type="button"
            disabled={!game.iframe_url}
            data-ga-click={game.iframe_url ? "game_play_click" : "game_unavailable_click"}
            data-ga-location="game_player"
            data-ga-label={game.title}
            onClick={() => {
              if (!game.iframe_url) return;
              setLoaded(false);
              setStarted(true);
            }}
            className="group absolute inset-0 overflow-hidden text-left disabled:cursor-not-allowed"
            aria-label={game.iframe_url ? `Play ${game.title}` : `${game.title} is unavailable`}
          >
            <Image
              src={game.thumbnail}
              alt={`${game.title} preview`}
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-fill transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
            <span className="absolute inset-0 grid place-items-center p-6">
              <span className="rounded-full bg-cyan-300 px-7 py-3 text-sm font-black text-slate-950 shadow-[0_0_40px_rgba(32,231,255,0.35)] transition group-hover:bg-white group-disabled:bg-slate-300">
                {game.iframe_url ? "Play Now" : "Game Unavailable"}
              </span>
            </span>
          </button>
        ) : !loaded ? (
          <div className="skeleton absolute inset-0 grid place-items-center text-sm font-bold text-slate-300">
            Loading game...
          </div>
        ) : null}
        {started && game.iframe_url ? (
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
