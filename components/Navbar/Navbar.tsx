import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/marketplace.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy">Buy</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/rent">Rent</Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet
              theme="dark"
              btnTitle={"Enter zkBTC Ordinals"}
              welcomeScreen={{
                img: {
                  src: "https://cdn.prod.website-files.com/66692907ab54c2d95c498bcc/66a7bca38174b5e8d14c8140_Logo.png",
                  width: 300,
                  height: 150,
                },
                title: "Your Entry to the world of Ordinals on zkBTC",
                subtitle: "Connect Wallet to enter 🎉",
              }}
            />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
