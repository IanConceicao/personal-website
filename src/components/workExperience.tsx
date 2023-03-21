import styles from "@/styles/Experience.module.css";

export interface workExperienceProps {
  titleAndCompany: string;
  time: string;
  workDone: string[];
}

export default function WorkExperience({
  titleAndCompany,
  time,
  workDone,
}: workExperienceProps) {
  return (
    <div>
      <p className={styles.secondaryHeader}>{titleAndCompany}</p>
      <p className={styles.time}>{time}</p>
      <ul className="list-disc list-inside font-book text-sm text-primaryText text-justify font-light">
        {workDone.map((work) => (
          <li key={work + time}>{work}</li>
        ))}
      </ul>
    </div>
  );
}
