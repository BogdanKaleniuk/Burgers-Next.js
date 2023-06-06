import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Чоткі бергери</title>
        <meta name="title" content="Чоткі бергери" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          Бергери
        </h1>
        <div className={styles.mainImage}>
          <Image
            src="/fatburger.png"
            alt="Burger"
            width={400}
            height={300}
            priority
          />
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          necessitatibus architecto sequi laudantium similique minima aliquid
          quaerat eum saepe, labore odio consectetur tenetur laboriosam
          voluptate assumenda molestiae optio?
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          officia ad facilis non?
        </p>
        <Link href="/burgers" className={styles.btn}>
          Всі бургери
        </Link>
      </div>
    </>
  );
}
