import type { Game } from "@/lib/games";
import { GameCard } from "@/components/game-card";

export function GameGrid({ games, priority = false }: { games: Game[]; priority?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {games.map((game, index) => (
        <GameCard key={game.slug} game={game} priority={priority && index < 5} />
      ))}
    </div>
  );
}
