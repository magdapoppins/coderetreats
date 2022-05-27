import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Camps from "../components/Camps";
import FAQ from "../components/FAQ";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [content, setContent] = React.useState<"camps" | "faq">("camps");
  return (
    <div
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Code Retreats</title>
        <meta
          name="description"
          content="Let's get together and build things!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Code Retreats 2022</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "2rem",
          }}
        >
          <button
            className={`${styles.linkstylebutton} ${
              content === "camps" && styles.selected
            }`}
            onClick={() => setContent("camps")}
          >
            Upcoming Retreats
          </button>
          <button
            className={`${styles.linkstylebutton} ${
              content === "faq" && styles.selected
            }`}
            onClick={() => setContent("faq")}
          >
            FAQ
          </button>
        </div>
        {content === "camps" ? <Camps /> : <FAQ />}
      </main>

      <footer className={styles.footer}>
        <span className={styles.highlight}>
          Feel free to drop questions to stenius.mimmy@gmail.com!
        </span>
      </footer>
    </div>
  );
};

export default Home;
