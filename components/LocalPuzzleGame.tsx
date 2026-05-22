"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type LocalGameSlug = "arrow-puzzle-tap-puzzle-games" | "mind-games" | "interested-games";

type Direction = "up" | "right" | "down" | "left";

type ArrowTile = {
  id: number;
  row: number;
  col: number;
  direction: Direction;
};

type MindPhase = "loading" | "watching" | "input" | "success" | "missed";

const arrowGlyph: Record<Direction, string> = {
  up: "↑",
  right: "→",
  down: "↓",
  left: "←",
};

const mindColors = ["#22d3ee", "#f97316", "#84cc16", "#f43f5e"];
const interestSets = [
  { prompt: "Strategy", picks: ["Chess", "Tower", "Plan"], decoys: ["Sprint", "Drift", "Tap"] },
  { prompt: "Memory", picks: ["Recall", "Pattern", "Focus"], decoys: ["Guess", "Dash", "Spin"] },
  { prompt: "Creative", picks: ["Paint", "Tune", "Build"], decoys: ["Block", "Rush", "Blast"] },
  { prompt: "Arcade", picks: ["Combo", "Score", "Bonus"], decoys: ["Study", "Nap", "Index"] },
];

function directionToNearestEdge(row: number, col: number, size: number): Direction {
  const options: { direction: Direction; distance: number }[] = [
    { direction: "up", distance: row },
    { direction: "right", distance: size - 1 - col },
    { direction: "down", distance: size - 1 - row },
    { direction: "left", distance: col },
  ];
  return options.sort((a, b) => a.distance - b.distance)[0].direction;
}

function randomMindStep() {
  return Math.floor(Math.random() * mindColors.length);
}

function randomMindSequence(length: number) {
  return Array.from({ length }, randomMindStep);
}

function makeArrowLevel(level: number) {
  const size = Math.min(6, 4 + Math.floor(level / 2));
  const count = Math.min(size * size - 2, 6 + level * 2);
  const cells = Array.from({ length: size * size }, (_, index) => ({
    row: Math.floor(index / size),
    col: index % size,
  }));

  return cells
    .sort((a, b) => {
      const scoreA = (a.row * 11 + a.col * 17 + level * 7) % 31;
      const scoreB = (b.row * 11 + b.col * 17 + level * 7) % 31;
      return scoreA - scoreB;
    })
    .slice(0, count)
    .map((cell, index) => ({
      id: level * 100 + index,
      ...cell,
      direction: directionToNearestEdge(cell.row, cell.col, size),
    }));
}

function canExit(tile: ArrowTile, tiles: ArrowTile[]) {
  return !tiles.some((other) => {
    if (other.id === tile.id) return false;
    if (tile.direction === "up") return other.col === tile.col && other.row < tile.row;
    if (tile.direction === "down") return other.col === tile.col && other.row > tile.row;
    if (tile.direction === "left") return other.row === tile.row && other.col < tile.col;
    return other.row === tile.row && other.col > tile.col;
  });
}

function ArrowPuzzleGame() {
  const [level, setLevel] = useState(1);
  const [tiles, setTiles] = useState(() => makeArrowLevel(1));
  const [moves, setMoves] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const size = Math.min(6, 4 + Math.floor(level / 2));
  const cleared = tiles.length === 0;

  function reset(nextLevel = level) {
    setLevel(nextLevel);
    setTiles(makeArrowLevel(nextLevel));
    setMoves(0);
    setStrikes(0);
  }

  function tapTile(tile: ArrowTile) {
    setMoves((value) => value + 1);
    if (canExit(tile, tiles)) {
      setTiles((current) => current.filter((item) => item.id !== tile.id));
      return;
    }
    setStrikes((value) => value + 1);
  }

  return (
    <GameShell title="Arrow Puzzle" subtitle="Tap arrows only when their path to the edge is clear.">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Stat label="Level" value={level.toString()} />
        <Stat label="Moves" value={moves.toString()} />
        <Stat label="Blocks" value={strikes.toString()} />
      </div>
      <div
        className="mx-auto grid w-full max-w-110 gap-2 rounded-lg border border-white/10 bg-black/25 p-3"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: size * size }, (_, index) => {
          const row = Math.floor(index / size);
          const col = index % size;
          const tile = tiles.find((item) => item.row === row && item.col === col);

          return tile ? (
            <button
              key={tile.id}
              type="button"
              onClick={() => tapTile(tile)}
              className="aspect-square rounded-md border border-cyan-200/30 bg-cyan-300 text-3xl font-black text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.2)] transition hover:bg-white"
              aria-label={`Arrow ${tile.direction}`}
            >
              {arrowGlyph[tile.direction]}
            </button>
          ) : (
            <div key={`${row}-${col}`} className="aspect-square rounded-md bg-white/5" />
          );
        })}
      </div>
      {cleared ? (
        <div className="rounded-lg border border-lime-300/40 bg-lime-300/12 p-4 text-center">
          <p className="font-black text-lime-200">Level cleared in {moves} moves.</p>
          <button
            type="button"
            onClick={() => reset(level + 1)}
            className="mt-3 rounded-full bg-lime-300 px-5 py-2 text-sm font-black text-slate-950"
          >
            Next level
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => reset()}
          className="mx-auto rounded-full border border-white/15 px-5 py-2 text-sm font-bold text-white"
        >
          Restart
        </button>
      )}
    </GameShell>
  );
}

function MindGames() {
  const [round, setRound] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [input, setInput] = useState<number[]>([]);
  const [phase, setPhase] = useState<MindPhase>("loading");
  const [active, setActive] = useState<number | null>(null);
  const [message, setMessage] = useState("Watch the pattern.");

  useEffect(() => {
    setSequence(randomMindSequence(3));
    setInput([]);
    setPhase("watching");
  }, []);

  useEffect(() => {
    if (phase !== "watching" || sequence.length === 0) return;
    let index = 0;
    const timers: number[] = [];
    setMessage("Watch the pattern.");
    setActive(null);

    function showNextStep() {
      if (index >= sequence.length) {
        setActive(null);
        setPhase("input");
        setMessage("Repeat it.");
        return;
      }

      setActive(sequence[index] ?? null);
      timers.push(window.setTimeout(() => setActive(null), 360));
      index += 1;
      timers.push(window.setTimeout(showNextStep, 650));
    }

    timers.push(window.setTimeout(showNextStep, 350));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [sequence, phase]);

  function startNext() {
    setRound((current) => current + 1);
    setSequence((current) => [...current, randomMindStep()]);
    setInput([]);
    setPhase("watching");
  }

  function pressColor(index: number) {
    if (phase !== "input") return;

    setActive(index);
    window.setTimeout(() => setActive(null), 180);

    setInput((current) => {
      const nextInput = [...current, index];

      if (sequence[nextInput.length - 1] !== index) {
        setMessage("Pattern missed. Watch again.");
        setPhase("missed");
        window.setTimeout(() => {
          setInput([]);
          setPhase("watching");
        }, 650);
        return current;
      }

      if (nextInput.length === sequence.length) {
        setPhase("success");
        setMessage("Clean recall.");
        window.setTimeout(startNext, 650);
      }

      return nextInput;
    });
  }

  return (
    <GameShell title="Mind Games" subtitle="Memorize the color sequence, then repeat it exactly.">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Stat label="Round" value={round.toString()} />
        <Stat label="Pattern" value={sequence.length.toString()} />
        <Stat label="Input" value={`${input.length}/${sequence.length || 3}`} />
      </div>
      <div className="rounded-lg border border-white/10 bg-white/8 p-4 text-center font-bold text-white">
        {message}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {mindColors.map((color, index) => (
          <button
            key={color}
            type="button"
            disabled={phase !== "input"}
            onClick={() => pressColor(index)}
            className="aspect-16/10 rounded-lg border border-white/15 transition disabled:cursor-not-allowed"
            style={{
              background: color,
              opacity: active === index ? 1 : 0.55,
              transform: active === index ? "scale(1.03)" : "scale(1)",
              boxShadow:
                active === index
                  ? `0 0 42px ${color}`
                  : phase === "input"
                    ? `0 0 18px ${color}55`
                    : "none",
            }}
            aria-label={`Memory color ${index + 1}`}
          />
        ))}
      </div>
    </GameShell>
  );
}

function InterestedGames() {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const current = interestSets[round % interestSets.length];
  const options = useMemo(
    () =>
      [...current.picks, ...current.decoys].sort((a, b) => {
        const scoreA = (a.charCodeAt(0) + round * 9) % 19;
        const scoreB = (b.charCodeAt(0) + round * 9) % 19;
        return scoreA - scoreB;
      }),
    [current, round],
  );
  const complete = selected.length === current.picks.length;

  function choose(option: string) {
    if (selected.includes(option) || complete) return;
    if (current.picks.includes(option)) {
      setSelected((items) => [...items, option]);
      setScore((value) => value + 10);
      return;
    }
    setScore((value) => Math.max(0, value - 4));
  }

  function nextRound() {
    setRound((value) => value + 1);
    setSelected([]);
  }

  return (
    <GameShell
      title="Interested Games"
      subtitle="Pick the tiles that match the current interest before moving on."
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Stat label="Interest" value={current.prompt} />
        <Stat label="Score" value={score.toString()} />
        <Stat label="Found" value={`${selected.length}/${current.picks.length}`} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {options.map((option) => {
          const picked = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(option)}
              className={`min-h-20 rounded-lg border px-3 text-base font-black transition ${
                picked
                  ? "border-lime-300 bg-lime-300 text-slate-950"
                  : "border-white/15 bg-white/8 text-white hover:border-cyan-300 hover:bg-cyan-300/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {complete ? (
        <button
          type="button"
          onClick={nextRound}
          className="mx-auto rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950"
        >
          Next interest
        </button>
      ) : null}
    </GameShell>
  );
}

function GameShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-full bg-[#06111c] p-3 text-white sm:p-5">
      <section className="mx-auto flex min-h-full max-w-4xl flex-col gap-5 rounded-lg border border-white/10 bg-slate-950/78 p-4 shadow-2xl sm:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Play Zone Logic</p>
          <h1 className="mt-2 text-3xl font-black">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-slate-300">{subtitle}</p>
        </div>
        {children}
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-24 rounded-lg border border-white/10 bg-white/8 px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-black text-white">{value}</p>
    </div>
  );
}

export function LocalPuzzleGame({ slug }: { slug: string }) {
  if (slug === "arrow-puzzle-tap-puzzle-games") return <ArrowPuzzleGame />;
  if (slug === "mind-games") return <MindGames />;
  if (slug === "interested-games") return <InterestedGames />;
  return null;
}
