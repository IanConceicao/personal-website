import Image, { StaticImageData } from "next/image";

interface ProjectContainerProps {
  projectTitle: string;
  img: StaticImageData;
  alt: string;
  link: string;
  shortDescription?: string;
  imageWidth?: number;
}

export default function ProjectContainer({
  projectTitle,
  img,
  alt,
  link,
  shortDescription,
  imageWidth,
}: ProjectContainerProps) {
  imageWidth = imageWidth ? imageWidth : 90;
  return (
    <div className="group w-full sm:w-1/2 md:w-1/3 justify-center pb-3 md:pb-5 px-3 md:px-5 outline-2">
      <a href={link} target="_blank">
        <p className="transition ease-in-out duration-500 w-full text-center text-secondaryHeader group-hover:text-altPrimaryHeader font-gopher font-bold italic text-3xl md:text-4xl lg:text-[2.6rem] mb-4">
          {projectTitle}
        </p>
        <Image
          src={img}
          alt={alt}
          style={{ width: `${imageWidth}%` }}
          className={
            "mx-auto w-fill my-2 transition ease-in-out delay-100 group-hover:scale-90 duration-700"
          }
        ></Image>
        {shortDescription && (
          <p className="w-full text-center text-primaryText font-gopher">
            {shortDescription}
          </p>
        )}
      </a>
    </div>
  );
}
