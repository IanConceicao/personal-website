import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ian Conceicao</title>
        <meta
          name="description"
          content="Ian Conceicao is a software developer from California. He graduated from UCLA in 2022 in computer science and interned at Amazon
          for two summers. He enjoys making full-stack applications, and tinkering with the latest machine learning  models."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
