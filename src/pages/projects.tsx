import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import picture from "/public/projectImages/640x360.png";

import Header from "@/components/header";
import ProjectContainer from "@/components/projectContainer";
import { StaticImageData } from "next/image";

export default function Projects() {
  const projectProfiles: {
    title: string;
    img: StaticImageData;
    description: string;
  }[] = [
    { title: "Zoomie Roomies", img: picture, description: "web app" },
    {
      title: "Deep-Q Learning",
      img: picture,
      description: "reinforcement learning",
    },
    {
      title: "Language Reader",
      img: picture,
      description: "web app",
    },
    {
      title: "Com2Sense Challenge",
      img: picture,
      description: "natural language processing",
    },
    {
      title: "Cut the Rope 3D",
      img: picture,
      description: "javascript game",
    },
    {
      title: "Duck Hunt 3D",
      img: picture,
      description: "javascript game",
    },
  ];
  return (
    <>
      <Head>
        <title>Ian Conceicao</title>
        <meta
          name="description"
          content="A portfolio website for Software Engineer Ian Conceicao"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header currentPage="projects"></Header>
        <div className="flex flex-wrap justify-center w-[98%] sm:w-[95%] md:w-[90%] mx-auto mt-5 sm:mt-8 md:mt-14">
          {projectProfiles.map(({ title, img, description }) => (
            <ProjectContainer
              key={title}
              projectTitle={title}
              img={img}
              alt={title}
              shortDescription={description}
            ></ProjectContainer>
          ))}
        </div>
      </main>
    </>
  );
}
