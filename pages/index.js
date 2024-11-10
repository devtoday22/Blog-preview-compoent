import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";



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
        {/* Head part of card */}
        <div className={styles.features}>
          <div className={styles.categoryLink}>
          <Link href="/dashboard">Learning</Link>
          </div>
          <div className={styles.date}>
            Published 21 Dec 2023
          </div>
          <h1 className={styles.headline}>
            HTML & CSS foundations
          </h1>
          <p className={styles.description}>
          These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>
        {/* Author profile component */}
        <div className={styles.authorProfile}>
          <div className={styles.authorImage}>
            <Image
            src="/image-avatar.webp"
            width={500}
            height={500}
            alt="Image of blog author"
            />
          </div>
          <div className={styles.authorName}>
            <p>Greg Hooper</p>
          </div>
        </div>

      </main>
    </>
  );
}
