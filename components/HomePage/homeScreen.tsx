import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HomeScreen = () => {
  return (
    <div className="flex flex-row gap-24 justify-center items-center my-20">
      <div className="flex flex-col ">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold  bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-2">
            Unleash your {""}
          </h1>
          <p className=" text-5xl md:text-8xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {" "}
            Ordinals
          </p>
        </div>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Seamlessly Trade, Collect, and explore unique ordinals.</li>
          <li>Access to Comprehensive transaction history</li>
          <li>Immerse yourself in the future of Ordinals and</li>
          <li>unlock true potential of digital ownership on zkBTC</li>
        </ul>

        <div className="flex gap-1 items-start mt-[30px]">
          <Button variant="default" size="lg">
            Get started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          <Image
            className="rotate-12"
            src="/Runestone.webp"
            alt="Bitcoin"
            height={240}
            width={240}
          />
          <Image
            className="rotate-12"
            src="/BitcoinPuppet.webp"
            alt="Bitcoin"
            height={240}
            width={240}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            className="rotate-12"
            src="/QuantumCats.webp"
            alt="Bitcoin"
            height={240}
            width={240}
          />
          <Image
            className="rotate-12"
            src="/OrdinalMix.webp"
            alt="Bitcoin"
            height={240}
            width={240}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
