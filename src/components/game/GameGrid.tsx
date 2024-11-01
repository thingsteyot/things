// src/components/game/GameGrid.tsx

import { GAMES } from "@/games";
import { GameCard } from "./GameCard";
import React from "react";

export function GameGrid() {
  return (
    <div className="flex flex-col overflow-y-scroll h-[600px] space-y-4 p-4">
      {GAMES.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
