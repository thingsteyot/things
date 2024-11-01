// src/components/game/GameGrid.tsx

import { GAMES } from "@/games";
import { GameCard } from "./GameCard";
import React from "react";

// src/components/game/GameCard.tsx
import React from "react";

export function GameCard({ game }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-52 w-96 flex flex-col transition-transform duration-300 hover:scale-105">
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-bold">{game.meta.name}</h2>
        <p className="text-sm text-gray-700">{game.meta.description}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button className="bg-blue-500 text-white rounded px-2 py-1">
          Oyna
        </button>
      </div>
    </div>
  );
}

