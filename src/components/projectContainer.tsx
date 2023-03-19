import Image, { StaticImageData } from "next/image";

interface ProjectContainerProps {
  projectTitle: string;
  img: StaticImageData;
  alt: string;
  shortDescription?: string;
}

export default function ProjectContainer({
  projectTitle,
  img,
  alt,
  shortDescription,
}: ProjectContainerProps) {
  return (
    <div className="group w-full sm:w-1/2 md:w-1/3 justify-center pb-5 px-5 outline-2">
      <p className="w-full text-center text-primaryHeader group-hover:text-secondaryHeader font-gopher font-bold italic text-3xl md:text-4xl lg:text-[2.6rem]">
        {projectTitle}
      </p>
      <Image
        src={img}
        alt={alt}
        className="w-full my-2 transition ease-in-out delay-100 group-hover:scale-90 duration-700"
      ></Image>
      {shortDescription && (
        <p className="w-full text-center text-primaryText font-book">
          {shortDescription}
        </p>
      )}
    </div>
  );
}
