import styles from "../../styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";

import { IconHome } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import { IconSailboat } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ---NAV--- */}
      <nav className={styles.navPageHome}>
        <div className={styles.containerImage}>
          <img src="/logoipsum-331.svg" alt="logo" />
        </div>
        <div className={styles.containerInput}></div>
        <div className={styles.filterIcons}>
          <button>Food & wine</button>
          <button>Wellness</button>
          <button>Events</button>
          <button>Open Air</button>
        </div>
      </nav>
      {/* ---MAIN--- */}
      <main className={styles.mainPageHome}>
        <div className={styles.titleAndLink}>
          <h2>#Experience for you</h2>
          <Link href="#">See all</Link>
        </div>

        {/* //Slider */}
        <div className={styles.containerSlider}>
          <div className={styles.boxSlider}>
            <h4>Titolo Evento</h4>
            <p>Orario</p>
            <p>Città</p>
          </div>
        </div>

        <div className={styles.titleAndLink}>
          <h2>#Show Experience</h2>
        </div>

        {/* List with random cards, but updates when the search is performed */}
        <section className={styles.containerSlider}>
          <div className={styles.box}>
            <div className={styles.boxIconTop}>
              <span>
                <IconHeart />
              </span>
              <span>
                <IconStar />
              </span>
            </div>
            <div className={styles.boxText}>
              <h4>Titolo Evento</h4>
              <p>Orario</p>
              <p>Città</p>
            </div>
          </div>
        </section>
        {/* bottom menu */}
        <header>
          <div className={styles.menu}>
            <Link href="/#">
              <IconHome />
            </Link>
            <Link href="/#">
              <IconSailboat />
            </Link>
            <Link href="/#">
              <IconHeart />
            </Link>
            <Link href="/#">
              <IconUserCircle />
            </Link>
          </div>
        </header>
      </main>
    </div>
  );
}
