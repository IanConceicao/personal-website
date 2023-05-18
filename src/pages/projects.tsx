import tetrisCubePics from "/public/projectImages/tetriscubes.png";
import omnom from "/public/projectImages/omnom.png";
import peoplePic from "/public/projectImages/people.png";
import languageReaderPic from "/public/projectImages/languagereader.png";
import chatbot from "/public/projectImages/chatbot.png";
import nlpPic from "/public/projectImages/nlp.png";

import Header from "@/components/header";
import ProjectContainer, {
  ProjectContainerProps,
} from "@/components/projectContainer";

export default function Projects() {
  const projectProfiles: ProjectContainerProps[] = [
    {
      title: "Zoomie Roomies",
      img: peoplePic,
      description: "web app",
      link: "https://github.com/IanConceicao/ZoomieRoomies",
      imageWidth: 72,
      alt: "An icon of happy people standing",
    },
    {
      title: "Tetris 99 Deep Learning",
      img: tetrisCubePics,
      description: "reinforcement learning",
      link: "https://github.com/IanConceicao/Tetris-99-Deep-RL",
      imageWidth: 80,
      alt: "Tetris Pieces",
    },
    {
      title: "Language Reader",
      img: languageReaderPic,
      description: "web app",
      link: "https://github.com/IanConceicao/language-reader",
      imageWidth: 85,
      alt: "A logo depicting Japanese being translated to English",
    },
    {
      title: "Com2Sense Challenge",
      img: nlpPic,
      description: "natural language processing",
      link: "https://github.com/IanConceicao/Com2Sense-Challenge",
      alt: "A book with an artificial brain on top of it",
    },
    {
      title: "Marketing Bot",
      img: chatbot,
      description: "chatbot creator",
      link: "https://github.com/IanConceicao/MarketingBot",
      imageWidth: 70,
      alt: "A sticker of a pink and blue robot speaking.",
    },
    {
      title: "Cut the Rope 3D",
      img: omnom,
      description: "javascript game",
      link: "https://github.com/IanConceicao/Cut-the-Rope-3D",
      imageWidth: 60,
      alt: "A sticker of the main character from Cut the Rope, Om-Nom",
    },
  ];
  return (
    <>
      <main>
        <Header currentPage="projects"></Header>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 w-[96%] md:w-[94%] lg:w-[92%] mx-auto mt-5 sm:mt-8 md:mt-12 mb-14">
          {projectProfiles.map(
            ({ title, img, description, link, imageWidth, alt }) => (
              <ProjectContainer
                key={title}
                title={title}
                img={img}
                alt={alt}
                description={description}
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
