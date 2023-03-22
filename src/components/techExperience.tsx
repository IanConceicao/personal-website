export interface techExperienceProps {
  title: string;
  techs: string[];
}

export default function TechExperience({ title, techs }: techExperienceProps) {
  return (
    <>
      <p className="font-gopher font-medium text-primaryText text-lg mb-2">
        {title}
      </p>
      <div className="columns-2 md:columns-[9.375rem] space-y-2">
        {techs.map((tech) => (
          <p
            key={tech}
            className="font-gopher font-light text-primaryText text-sm"
          >
            {tech}
          </p>
        ))}
      </div>
    </>
  );
}