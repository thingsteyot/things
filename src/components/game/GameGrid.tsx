// src/components/game/GameCard.tsx
import React from "react";
import Link from "next/link";
import { GameBundle } from "gamba-react-ui-v2";

interface GameCardProps {
  game: GameBundle;
}

export function GameCard({ game }: GameCardProps) {
  const imagePath = `/games/${game.id}/logo.png`;
  
  return (
    <Link href={`/play/${game.id}`} passHref>
      <div className="cursor-pointer game-card w-full h-60 bg-cover bg-center rounded-lg text-white font-bold text-xl relative transition-transform duration-300 hover:scale-105" style={{ backgroundColor: game.meta.background }}>
        <div className="background absolute top-0 left-0 w-full h-full bg-size-100 bg-center bg-repeat" style={{ backgroundImage: "url(/stuff.png)" }}></div>
        <div className="image absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain" style={{ backgroundImage: `url(${imagePath})` }}></div>
        <div className="play absolute right-2 bottom-2 bg-black bg-opacity-40 rounded px-2 py-1 text-sm text-uppercase">
          Play {game.meta.name}
        </div>
      </div>
    </Link>
  );
}
