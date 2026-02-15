import styles from "@/styles/Experience.module.css";
import Header from "@/components/header";
import WorkExperience, {
  workExperienceProps,
} from "@/components/workExperience";
import TechExperience from "@/components/techExperience";

// 1. Move static data outside to optimize rendering and keep the component body clean
const JOBS: workExperienceProps[] = [
  {
    title: "Software Engineer",
    company: "Amazon Music",
    time: "Nov 2024 to Present",
    workDone: [
      "Led mobile upsell strategy for India's upcoming Unlimited tier, designing 12+ customer experiences amid evolving requirements.",
      "Drove end-to-end delivery of ML-powered ad break personalization system, achieving 2% boost in ad revenue.",
      "Architected and launched Sponsored Sessions experiments, enabling 30 minutes of ad-free listening.",
      "Built org's first cloud knowledge base with semantic search, accelerating engineer onboarding.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Amazon Ads",
    time: "Sept 2023 to Nov 2024",
    workDone: [
      "Led migration of 60k+ TPS ad traffic across multiple ad products for FireTV.",
      "Spearheaded creation of dedicated ad serving infrastructure, reducing ad timeouts by 82%.",
      "Designed and implemented compliance orchestration system for EU DMA and child-profile filtering.",
      "Overhauled integration test suite, reducing E2E test setup time from hours to minutes.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Amazon Ads",
    time: "Summer 2022",
    workDone: [
      "Led cost minimization project for a cache serving 30 million requests-per-hour.",
      "Reduced cache cost by 78%, projecting to save the org around $1 million per year.",
      "Overhauled codebase to federated style architecture for cross-device interoperability.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Amazon Ads",
    time: "Summer 2021",
    workDone: [
      "Created a web application for configuration database interaction.",
      "Designed intuitive layout reducing technical demand for PMs and engineers.",
      "Implemented type-checking, version history, and access control.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "VCLA UCLA",
    time: "Oct 2019 — Jun 2021",
    workDone: [
      "Developed real-time optimal plans for collaborative virtual agents in 3-D kitchens.",
      "Generated dynamic scene graphs out of complex 3-D environments.",
    ],
  },
  {
    title: "Information Security Intern",
    company: "Lumentum",
    time: "Summer 2020",
    workDone: [
      "Created a web dashboard for real-time security event alerting.",
      "Centralized system health data from numerous sources into a single-page dashboard.",
    ],
  },
];

const TECHNOLOGIES = [
  {
    title: "Backend",
    techs: ["Java (Spring)", "TypeScript & Node.js", "Python (Django/Flask)"],
  },
  {
    title: "Frontend",
    techs: [
      "iOS (Swift/Obj-C)",
      "Android (Java/Kotlin)",
      "React",
      "Next.js",
      "Tailwind",
    ],
  },
  {
    title: "Databases",
    techs: ["Redis (AWS)", "DynamoDB (AWS)", "S3 (AWS)", "SQL", "MongoDB"],
  },
  {
    title: "Research",
    techs: ["PyTorch", "NumPy", "TensorFlow", "UE4 & C++"],
  },
];

const RELEVANT_COURSES = [
  "Artificial Intelligence",
  "Computer Graphics",
  "Computer Animation",
  "Data Science",
  "Database Systems",
  "Machine Learning",
  "Natural Language Processing",
  "Reinforcement Learning",
];

export default function Experience() {
  return (
    <main>
      <Header currentPage="experience" />

      {/* Container: 2-column layout on desktop, stack on mobile */}
      <div className="mx-auto mb-14 flex w-[94%] flex-wrap justify-between gap-x-12 lg:w-[92%]">
        {/* Left Column: Work Experience */}
        <section className="basis-[55%] grow shrink-0">
          <h2 className={styles.primaryHeader}>Work</h2>{" "}
          <div className="space-y-6">
            {JOBS.map((job) => (
              <WorkExperience key={`${job.company}-${job.time}`} {...job} />
            ))}
          </div>
        </section>

        {/* Right Column: Skills & Education */}
        <aside className="basis-[38%] grow">
          <section className="mb-8">
            <h2 className={styles.primaryHeader}>Technologies</h2>
            <div className="space-y-2">
              {TECHNOLOGIES.map((tech) => (
                <TechExperience key={tech.title} {...tech} />
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.primaryHeader}>Education</h2>
            <p className={styles.secondaryHeader}>
              B.S. Computer Science @ UCLA
            </p>
            <p className={styles.time}>2018 - 2022</p>

            <p className="text-primary-text mb-2 text-lg font-medium">
              Relevant Electives:
            </p>

            {/* Multi-column list for courses */}
            <div className="columns-2 sm:mb-4 mb-6 gap-x-4">
              {RELEVANT_COURSES.map((course) => (
                <p
                  key={course}
                  className="text-primary-text mb-2 text-sm font-medium leading-tight"
                >
                  {course}
                </p>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
