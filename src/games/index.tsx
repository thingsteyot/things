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
  {
    id: "crash",
    meta: {
      background: "#e8dccb",
      name: "Crash",
      image: "/games/logo.png",
      description: `Predict a multiplier target and watch a rocket attempt to reach it. If the rocket crashes before the target, the player loses; if it reaches or exceeds the target, the player wins.`,
      volatility: 5,
    },
    app: dynamic(() => import("./Crash")),
  },
  {
    id: "mines",
    meta: {
      background: "#e8dccb",
      name: "Mines",
      image: "/games/logo.png",
      description: `Mines emerges as a strategic masterpiece, where players navigate a perilous landscape in search of hidden treasures. Uncover squares with caution, as lurking mines threaten to abruptly end your quest. With each revelation, the stakes escalate, offering daring players a heart-pounding experience filled with suspense and calculated risk, ensuring an immersive and unforgettable gaming adventure.`,
      volatility: 2,
    },
    app: dynamic(() => import("./Mines")),
  },
  {
    id: "dice",
    meta: {
      background: "#e8dccb",
      name: "Dice",
      image: "/games/logo.png",
      description: `Dice offers an exhilarating challenge where players must forecast the outcome of a roll with a unique twist. By selecting a number, participants aim to roll below it to clinch victory. The dynamic nature of the game allows for adjustments in choices, directly influencing potential payouts and skillfully balancing risk and reward, ensuring an immersive and stimulating gaming experience.`,
      volatility: 2,
    },
    app: dynamic(() => import("./Dice")),
  },
];
