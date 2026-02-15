import Image from "next/image";

export interface ProjectContainerProps {
  title: string;
  img: string;
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
  imageWidth = 85,
}: ProjectContainerProps) {
  return (
    <div className="group">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className="text-secondary-header text-group-hover-effect w-full text-center text-2xl mb-2 font-bold italic md:text-4xl lg:text-[2.6rem]">
          {title}
        </p>

        <div
          className="relative mx-auto aspect-square transition duration-700 ease-in-out group-hover:scale-90"
          style={{ width: `${imageWidth}%` }}
        >
          <Image
            src={img}
            alt={alt}
            fill
            className="object-contain"
            priority={title === "Zoomie Roomies"} // Optional: load the first project faster
          />
        </div>

        {description && (
          <p className="text-primary-text mt-4 w-full text-center">
            {description}
          </p>
        )}
      </a>
    </div>
  );
}
