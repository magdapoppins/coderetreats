import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Camps from "../components/Camps";
import FAQ from "../components/FAQ";
import SignUp from "../components/SignUp";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [content, setContent] = React.useState<"camps" | "faq" | "signup">(
    "camps"
  );
  return (
    <div
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        <div className={styles.buttons}>
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
          <button
            className={`${styles.linkstylebutton} ${
              content === "signup" && styles.selected
            }`}
            onClick={() => setContent("signup")}
          >
            Tickets
          </button>
        </div>
        {content === "camps" && <Camps />}
        {content === "faq" && <FAQ />}
        {content === "signup" && <SignUp />}
      </main>
    </div>
  );
};

export default Home;
