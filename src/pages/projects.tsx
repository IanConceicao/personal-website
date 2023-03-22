import Head from "next/head";
import picture from "/public/projectImages/640x360.png";
import tetrisCubePics from "/public/projectImages/tetriscubes.png";
import omnom from "/public/projectImages/omnom.png";
import peoplePic from "/public/projectImages/people.png";
import languageReaderPic from "/public/projectImages/languagereader.png";
import duckPic from "/public/projectImages/duckhunt.png";
import nlpPic from "/public/projectImages/nlp.png";

import Header from "@/components/header";
import ProjectContainer from "@/components/projectContainer";
import { StaticImageData } from "next/image";

export default function Projects() {
  const projectProfiles: {
    title: string;
    img: StaticImageData;
    link: string;
    description?: string;
    imageWidth?: number;
  }[] = [
    {
      title: "Zoomie Roomies",
      img: peoplePic,
      description: "web app",
      link: "https://github.com/IanConceicao/ZoomieRoomies",
      imageWidth: 70,
    },
    {
      title: "Tetris 99 Deep Learning",
      img: tetrisCubePics,
      description: "reinforcement learning",
      link: "https://github.com/IanConceicao/Tetris-99-Deep-RL",
      imageWidth: 85,
    },
    {
      title: "Language Reader",
      img: languageReaderPic,
      description: "web app",
      link: "https://github.com/IanConceicao/language-reader",
      imageWidth: 86,
    },
    {
      title: "Com2Sense Challenge",
      img: nlpPic,
      description: "natural language processing",
      link: "https://github.com/IanConceicao/Com2Sense-Challenge",
    },
    {
      title: "Cut the Rope 3D",
      img: omnom,
      description: "javascript game",
      link: "https://github.com/IanConceicao/Cut-the-Rope-3D",
      imageWidth: 60,
    },
    {
      title: "Duck Hunt 3D",
      img: duckPic,
      description: "javascript game",
      link: "https://github.com/IanConceicao/Duck-Hunt-3D",
      imageWidth: 65,
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
        <div className="flex flex-wrap justify-center w-[96%] md:w-[94%] lg:w-[92%] mx-auto mt-5 sm:mt-8 md:mt-12 mb-14">
          {projectProfiles.map(
            ({ title, img, description, link, imageWidth }) => (
              <ProjectContainer
                key={title}
                projectTitle={title}
                img={img}
                alt={title}
                shortDescription={description}
                link={link}
                imageWidth={imageWidth}
              ></ProjectContainer>
            )
          )}
        </div>
      </main>
    </>
  );
}
