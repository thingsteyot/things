// src/pages/index.tsx
import { GambaButton } from "@/components/ui/GambaPlayButton";
import { GameGrid } from "@/components/game/GameGrid";
import { PLATFORM_REFERRAL_FEE } from "@/constants";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";
import { toast } from "sonner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";


export default function HomePage() {
  const walletModal = useWalletModal();
  const wallet = useWallet();

  const copyInvite = () => {
    if (!wallet.publicKey) {
      return walletModal.setVisible(true);
    }
    const referralLink = `${location.host}?code=${wallet.publicKey.toString()}`;
    navigator.clipboard.writeText(referralLink);
    toast.success(
      `Copied! Share your link to earn a ${
        PLATFORM_REFERRAL_FEE * 100
      }% fee when players use this platform`,
    );
  };
  return (
    <>
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-transparent">
          <div
            style={{
              backgroundImage: "url(/seo.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "perspective(800px) rotateX(40deg)",
              transformOrigin: "top center",
              zIndex: -1,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform rotate-12 scale-150 blur-xl pointer-events-none"></div>

          <div className="bg-[#15152e]/80 rounded-lg p-4 lg:col-span-2 text-center lg:text-left">
            <div className=" flex items-center justify-center md:justify-start">
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
                Welcome to Gamba
              </h1>
              <img src="/wave.gif" className="h-14" alt="Gamba Logo" />
            </div>
            <p className="my-2 text-white drop-shadow">
              The gambleFi protocol with end-to-end tools for on-chain
              degeneracy on Solana.
            </p>
            <p className="my-2 text-sm max-w-sm">
              Share your link to earn a {PLATFORM_REFERRAL_FEE * 100}% fee on
              each play when players use this platform using your code.
            </p>
            <button
              className="bg-[#8851ff] hover:bg-[#9564ff] rounded-lg p-2 text-xs bg-"
              onClick={copyInvite}
            >
              Copy Link
            </button>          
          </div>
          <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
         
            <button
              onClick={() => window.open("https://x.com/ThingsSOL")}
              className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              🌐 Twitter
            </button>
            <button
              onClick={() => window.open("https://discord.com/invite/HSTtFFwR")}
              className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              💬 Join Discord
            </button>
          </div>
          <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Slider</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <input type="radio" name="position" checked/>
    <input type="radio" name="position" />
    <input type="radio" name="position" />
    <main id="carousel">
      <div class="item">
        <img src="images/1.jpg">
        <h3 class="name">Sally Sharpe</h3>
        <p class="occupation">Marketing Admin</p>
        <p class="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, suscipit?</p>
      </div>
      <div class="item">
        <img src="images/2.jpg">
        <h3 class="name">Michael John</h3>
        <p class="occupation">Cybersecurity Engineer</p>
        <p class="testimonial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dolore.</p>
      </div>
      <div class="item">
        <img src="images/3.jpg">
        <h3 class="name">Mikayla Eddie</h3>
        <p class="occupation">Software Engineer</p>
        <p class="testimonial">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus?</p>
      </div>
      <div class="item">
        <img src="images/4.jpg">
        <h3 class="name">Eve Smith</h3>
        <p class="occupation">UI/UX Designer</p>
        <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, beatae?</p>
      </div>
      <div class="item">
        <img src="images/5.jpg">
        <h3 class="name">Luke Maxwell</h3>
        <p class="occupation">System Architect</p>
        <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempore.</p>
      </div>
    </main>
</body>
</html>
        </div>
        <h2 className="text-2xl font-bold text-center">Games</h2>
        <GameGrid />
        <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
