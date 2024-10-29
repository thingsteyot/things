// src/games/index.tsx

import { GameBundle } from "gamba-react-ui-v2";
import dynamic from "next/dynamic";

interface GameMeta {
  background?: string;
  name: string;
  image?: string;
  description?: string;
  volatility?: number;
}

export const GAMES: GameBundle<GameMeta>[] = [
  {
    id: "flip",
    meta: {
      background: "#e8dccb",
      name: "Flip",
      image: "/games/logo.png",
      description: `Flip presents a compelling blend of simplicity and high-stakes excitement, where players face the tantalizing gamble of choosing between Heads or Tails. Every flip of the coin serves as a decisive moment, offering the potential to double one's fortune or lose it all. This straightforward yet adrenaline-inducing game tests players' luck and strategic decision-making prowess, ensuring an electrifying and immersive gaming session.`,
      volatility: 1,
    },
    app: dynamic(() => import("./Flip")),
  },
];
