import { Widget } from "@components/Widget";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NLW Return</title>
        <meta name="description" content="NLW Return" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Widget />
      </main>
    </>
  );
};

export default Home;
