import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GITHUB_URL } from "../const/contractAddresses";
import { Button } from "../components/ui/button";
import HomeScreen from "../components/HomePage/homeScreen";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <>
      <HomeScreen />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <div className={styles.heroBackground}>
              <div className={styles.heroBackgroundInner}>
                <Image
                  src="/hero-gradient.png"
                  width={1390}
                  height={1390}
                  alt="Background gradient from red to blue"
                  quality={100}
                  className={styles.gradient}
                />
              </div>
            </div>
            <div className={styles.heroAssetFrame}>
              <Image
                src="/ocm.gif"
                width={450}
                height={540}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
              />
              <Image
                src="/ocm2.gif"
                width={600}
                height={500}
                alt="Prince"
                quality={100}
                className={styles.gradient}
              />
              <Image
                src="/ocm3.gif"
                width={450}
                height={540}
                alt="zebra"
                quality={100}
                className={styles.gradient}
              />
            </div>
            <div className={styles.heroBodyContainer}>
              <div className={styles.heroBody}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroTitleGradient}>
                    zkBTC Ordinal&apos;s Market
                  </span>
                  <br />
                </h1>
                <h2>
                  Trade Unique Ordinals using Runes and BRC20 on zkBTC &apos;s Premium Ordinal
                  Marketplace 🌐
                </h2>
                <br />
              </div>
            </div>
          </div>
          <div className="text-center mx-56">
            <div className={styles.heroCtaContainer}>
              <Link className={styles.heroCta} href="/buy">
                Get Started
              </Link>
              <Link
                className={styles.secondaryCta}
                href={GITHUB_URL}
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
