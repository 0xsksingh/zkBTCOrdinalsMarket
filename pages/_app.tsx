import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  const zkbtc =  {
    "chain": "zkBTC",
    "chainId": 19236265,
    "explorers": [
      {
        "name": "zkbtc testnet scan",
        "url": "https://devilmorallyelephant-blockscout.eu-north-2.gateway.fm/",
        "standard": "none"
      }
    ],
    "faucets": [],
    "icon": {
      "url": "https://cdn.prod.website-files.com/66692907ab54c2d95c498bcc/66a7bca38174b5e8d14c8140_Logo.png",
      "width": 1000,
      "height": 1000,
      "format": "png"
    },
    "infoURL": "https://zkbtc.com",
    "name": "ZKBTC Testnet",
    "nativeCurrency": {
      "name": "BTC",
      "symbol": "BTC",
      "decimals": 18
    },
    "networkId": 19236265,
    "rpc": [
      "https://devilmorallyelephant-rpc.eu-north-2.gateway.fm/",
    ],
    "shortName": "zkbtc-testnet",
    "slug": "zkbtc-testnet",
    "testnet": true
  };

  return (
    <ThirdwebProvider
      activeChain={zkbtc}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
