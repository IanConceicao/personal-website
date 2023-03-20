import Head from "next/head";

import Header from "@/components/header";

export default function About() {
  return (
    <>
      <Head>
        <title>Ian&apos;s Portfolio</title>
        <meta
          name="description"
          content="A portfolio website for Software Engineer Ian Conceicao"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header currentPage="about"></Header>
        <p className="font-book m-10">About page coming soon</p>
      </main>
    </>
  );
}
