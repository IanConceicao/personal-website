import Image, { StaticImageData } from "next/image";

export interface ProjectContainerProps {
  title: string;
  img: StaticImageData;
  alt: string;
  link: string;
  description?: string;
  imageWidth?: number;
}

export default function ProjectContainer({
  title,
  img,
  alt,
  link,
  description,
  imageWidth,
}: ProjectContainerProps) {
  imageWidth = imageWidth ? imageWidth : 90;
  return (
    <div className="group w-full sm:w-1/2 md:w-1/3 justify-center pb-3 md:pb-5 px-3 md:px-5 outline-2">
      <a href={link} target="_blank">
        <p className="w-full text-center text-secondaryHeader text-group-hover-effect font-gopher font-bold italic text-3xl md:text-4xl lg:text-[2.6rem] mb-4">
          {title}
        </p>
        <Image
          src={img}
          alt={alt}
          style={{ width: `${imageWidth}%` }}
          className={
            "mx-auto w-fill my-2 transition ease-in-out delay-100 group-hover:scale-90 duration-700"
          }
        ></Image>
        {description && (
          <p className="w-full text-center text-primaryText font-gopher">
            {description}
          </p>
        )}
      </a>
    </div>
  );
}
