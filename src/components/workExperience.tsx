import styles from "@/styles/Experience.module.css";

export interface workExperienceProps {
  title: string;
  company: string;
  time: string;
  workDone: string[];
}

export default function WorkExperience({
  title,
  company,
  time,
  workDone,
}: workExperienceProps) {
  return (
    <div>
      <p className={styles.secondaryHeader}>
        {`${title} `}
        <span className="inline-block">@ {company}</span>
      </p>
      <p className={styles.time}>{time}</p>
      <ul className="list-disc list-inside font-light leading-relaxed text-sm text-primaryText sm:text-justify">
        {workDone.map((work) => (
          <li key={work + time}>{work}</li>
        ))}
      </ul>
    </div>
  );
}
