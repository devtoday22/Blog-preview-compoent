import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>Blog preview component</title>
        <meta name="description" content="Blog preview component by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.image}>
        <Image
          src="/illustration-article.svg"
          width={500}
          height={500}
          alt="Cover image"
    />
        </div>

      </main>
    </>
  );
}
