// src/components/game/GameGrid.tsx

import { GAMES } from "@/games";
import { GameCard } from "./GameCard";
import React from "react";

export function GameGrid() {
  return (
    <div className="overflow-y-auto h-full" style={{ height: '600px' }}>
      <div className="flex flex-col space-y-4">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

