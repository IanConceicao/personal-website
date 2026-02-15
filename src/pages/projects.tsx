import Header from "@/components/header";
import ProjectContainer, {
  ProjectContainerProps,
} from "@/components/projectContainer";

/**
 * Data defined outside the component to prevent re-allocation on every render.
 * Note: Paths starting with "/" automatically look in the "public" folder.
 */
const projectProfiles: ProjectContainerProps[] = [
  {
    title: "Zoomie Roomies",
    img: "/projectImages/people.png",
    description: "web app",
    link: "https://github.com/IanConceicao/ZoomieRoomies",
    imageWidth: 72,
    alt: "An icon of happy people standing",
  },
  {
    title: "Tetris 99 Deep Learning",
    img: "/projectImages/tetriscubes.png",
    description: "reinforcement learning",
    link: "https://github.com/IanConceicao/Tetris-99-Deep-RL",
    imageWidth: 75,
    alt: "Tetris Pieces",
  },
  {
    title: "Language Reader",
    img: "/projectImages/languagereader.png",
    description: "web app",
    link: "https://github.com/IanConceicao/language-reader",
    imageWidth: 80,
    alt: "A logo depicting Japanese being translated to English",
  },
  {
    title: "Com2Sense Challenge",
    img: "/projectImages/nlp.png",
    description: "natural language processing",
    link: "https://github.com/IanConceicao/Com2Sense-Challenge",
    alt: "A book with an artificial brain on top of it",
  },
  {
    title: "Marketing Bot",
    img: "/projectImages/chatbot.png",
    description: "chatbot creator",
    link: "https://github.com/IanConceicao/MarketingBot",
    imageWidth: 70,
    alt: "A sticker of a pink and blue robot speaking.",
  },
  {
    title: "Cut the Rope 3D",
    img: "/projectImages/omnom.png",
    description: "javascript game",
    link: "https://github.com/IanConceicao/Cut-the-Rope-3D",
    imageWidth: 60,
    alt: "A sticker of the main character from Cut the Rope, Om-Nom",
  },
];

export default function Projects() {
  return (
    <main>
      <Header currentPage="projects" />
      <div className="mx-auto mt-5 mb-14 grid w-[96%] grid-cols-1 gap-x-6 gap-y-10 sm:mt-8 sm:grid-cols-2 md:mt-12 md:w-[94%] md:grid-cols-3 lg:w-[92%]">
        {projectProfiles.map((project) => (
          <ProjectContainer key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
