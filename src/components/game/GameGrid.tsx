// src/components/game/GameGrid.tsx

import { GAMES } from "@/games";
import { GameCard } from "./GameCard";
import React from "react";

export function GameGrid() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalCards = GAMES.length;

  const slideNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const slidePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Slider stilini ayarlayın
  const sliderStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className="relative overflow-hidden">
      <button 
        onClick={slidePrev} 
        disabled={currentIndex === 0} 
        className="absolute left-0 z-10 bg-gray-700 text-white p-2 rounded"
      >
        Önceki
      </button>
      <div className="slider" style={sliderStyle}>
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <button 
        onClick={slideNext} 
        disabled={currentIndex === totalCards - 1} 
        className="absolute right-0 z-10 bg-gray-700 text-white p-2 rounded"
      >
        Sonraki
      </button>
    </div>
  );
}
