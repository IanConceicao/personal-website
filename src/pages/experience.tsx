import styles from "@/styles/Experience.module.css";
import Header from "@/components/header";
import WorkExperience, {
  workExperienceProps,
} from "@/components/workExperience";
import TechExperience from "@/components/techExperience";

// 1. Move static data outside to optimize rendering and keep the component body clean
const JOBS: workExperienceProps[] = [
  {
    title: "Software Development Engineer II",
    company: "Amazon Music · Ad Monetization",
    time: "Dec 2024 to Present",
    workDone: [
      "Extending Amazon's ad tech stack to serve video ads on Amazon Music, a projected $10M annual revenue opportunity.",
      "Designed the architecture for Amazon Music's first display ads platform, a $4M+ opportunity, connecting the home-page content stack to ad serving.",
      "Utilized learned customer behavior to serve extended ad-pods to ad-tolerant customers, raising total ad revenue for Amazon Music by 2.3% in the US.",
      "Designed and launched a Sponsored Sessions experiment, letting advertisers sponsor 30 minutes of ad-free listening on Alexa and mobile.",
      "Led 12+ upsells across iOS, Android, and Fire TV for the India Free Tier launch, mentoring 2 engineers and contributing to 6.8K more weekly sign-ups.",
      "Co-built a GenAI ticket triage system that de-duplicates, re-routes, and triages tickets, closing 281K duplicate tickets in the first week.",
      "Built a team-wide AI agent platform with skills and a custom code and doc knowledge base, accelerating onboarding and development.",
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Amazon Ads · Display Ad Serving",
    time: "Sept 2023 to Nov 2024",
    workDone: [
      "Led migration of 4 Fire TV display ad formats (60K+ TPS) from a legacy ad server to an OpenRTB exchange, enabling deals, auctions, and compliance.",
      "Launched an Asia-Pacific ad server region next to the ad exchange, cutting Fire TV ad timeouts 82% and serving 15M more ads in the first month.",
      "Built a compliance layer across 3 privacy services enforcing EU DMA consent, child-profile ad filtering, and Quebec cookie consent.",
      "Overhauled the integration test suite, reducing E2E test setup time from hours to minutes.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Amazon Ads",
    time: "June 2022 to Sept 2022",
    workDone: [
      "Led a cost minimization project for a device cache serving 30 million requests per hour across numerous types of Amazon devices.",
      "Designed and implemented infrastructure and software overhauls that cut cache cost by 78%, projecting $1 million in annual savings for the org, and more as the service scales.",
      "Overhauled the cache's codebase to a federated-style architecture for seamless interoperability between device types.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Amazon Ads",
    time: "June 2021 to Sept 2021",
    workDone: [
      "Created a full-stack web application for owners to more effectively interact with a configuration database containing several tables.",
      "Designed an intuitive layout that simplified the workflow for software engineers and project managers.",
      "Implemented type-checking, version history, and access control to limit bugs and keep track of changes.",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company: "Center for Vision, Cognition, Learning & Autonomy (UCLA)",
    time: "Oct 2019 to June 2021",
    workDone: [
      "Developed optimal plans, in real time, for virtual agents to collaborate and cook meals together in 3-D photo-realistic kitchens.",
      "Generated dynamic scene graphs out of complex 3-D environments, allowing AI agents to more easily infer and plan in their environment.",
    ],
  },
  {
    title: "Information Security Intern",
    company: "Lumentum",
    time: "June 2020 to Sept 2020",
    workDone: [
      "Created a web dashboard giving the Information Security team real-time alerting of security events and trends.",
      "Improved the workflow for security admins to check system health by centralizing data from numerous sources onto clear graphs on a single page.",
    ],
  },
];

const TECHNOLOGIES = [
  {
    title: "AdTech",
    techs: [
      "Ad Serving",
      "Ad Decisioning",
      "Targeting",
      "Deals",
      "Frequency Capping",
      "Audio",
      "Video",
      "Display",
    ],
  },
  {
    title: "Backend",
    techs: ["Java (Spring)", "TypeScript & Node.js", "Python (Django/Flask)"],
  },
  {
    title: "Frontend & Mobile",
    techs: [
      "React",
      "Next.js",
      "Tailwind",
      "iOS (Swift/Obj-C)",
      "Android (Java/Kotlin)",
    ],
  },
  {
    title: "AWS",
    techs: ["EC2", "ECS & Fargate", "Lambda", "SQS & SNS", "CloudWatch", "IAM"],
  },
  {
    title: "Databases",
    techs: ["DynamoDB", "Redis (ElastiCache)", "SQL (RDS)", "MongoDB", "S3"],
  },
  {
    title: "AI Tools",
    techs: ["Claude Code", "Codex", "Kiro"],
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
            <h2 className={styles.primaryHeader}>Skills</h2>
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
