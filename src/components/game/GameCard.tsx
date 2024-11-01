// src/components/sections/Dashboard/GameCard.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GameBundle } from "gamba-react-ui-v2";

interface GameCardProps {
  game: GameBundle;
  key?: string | number;
}

export function GameCard({ game }: GameCardProps) {
  const router = useRouter();
  const small = router.pathname !== "/";
  const imagePath = `/games/${game.id}/logo.png`;
  
  // Kartın dikdörtgen boyutları
  const backgroundStyle = {
    backgroundColor: game.meta.background,
  };

  return (
    <Link href={`/play/${game.id}`} passHref>
      <div
        className="cursor-pointer game-card w-full h-64 bg-cover bg-center rounded-lg text-white font-bold text-2xl relative transition-transform duration-300 hover:scale-105"
        style={backgroundStyle}
      >
        <div
          className="background absolute top-0 left-0 w-full h-full bg-size-100 bg-center bg-repeat"
          style={{ backgroundImage: "url(/stuff.png)" }}
        ></div>
        <div
          className="image absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
        <div className="play absolute right-2 bottom-2 bg-black bg-opacity-40 rounded px-2 py-1 text-sm text-uppercase">
          Play {game.meta.name}
        </div>
      </div>
    </Link>
  );
}
