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
  imageWidth = imageWidth ? imageWidth : 85;
  return (
    <div className="group">
      <a href={link} target="_blank">
        <p className="w-full text-center text-secondaryHeader text-group-hover-effect font-bold italic text-3xl md:text-4xl lg:text-[2.6rem] mb-4">
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
          <p className="w-full text-center text-primaryText">{description}</p>
        )}
      </a>
    </div>
  );
}
