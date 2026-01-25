import styles from "@/styles/Experience.module.css";

import Header from "@/components/header";
import { workExperienceProps } from "@/components/workExperience";
import WorkExperience from "@/components/workExperience";
import TechExperience from "@/components/techExperience";

export default function Experience() {
  const jobs: workExperienceProps[] = [
    {
      title: "Software Engineer",
      company: "Amazon Music",
      time: "Nov 2024 to Present",
      workDone: [
        "Led mobile upsell strategy for India's upcoming Unlimited tier, designing 12+ customer experiences amid evolving requirements. Mentored 2 junior engineers to deliver features through structured guidance and actionable work items.",
        "Drove end-to-end delivery of ML-powered ad break personalization system, achieving 2% boost in ad revenue without harming customer engagement metrics.",
        "Architected and launched Sponsored Sessions experiments, enabling advertisers to sponsor 30 minutes of ad-free listening. Established framework for new premium ad product offering.",
        "Built org's first cloud knowledge base with semantic search across repositories and internal documentation, accelerating engineer onboarding and reducing documentation discovery time.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Amazon Ads",
      time: "Sept 2023 to Nov 2024",
      workDone: [
        "Led migration of 60k+ TPS ad traffic across multiple ad products for FireTV, coordinating load testing, deployments, and partner communications, unlocking business-critical features including deals, auctions, and compliance capabilities.",
        "Spearheaded creation of dedicated ad serving infrastructure to meet strict latency requirements, reducing ad timeouts by 82% and enabling 15 million additional ads served monthly.",
        "Designed and implemented compliance orchestration system integrating multiple privacy services for EU DMA and child-profile filtering regulations, establishing monitoring dashboards and extensible architecture for evolving regulatory requirements.",
        "Overhauled integration test suite to support JSON-based test cases and streamlined workflows, reducing E2E test setup time from hours to minutes and accelerating development velocity across 4 publisher teams.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Amazon Ads",
      time: "Summer 2022",
      workDone: [
        "Led a cost minimization project for a cache that serves 30 million requests-per-hour for numerous types of Amazon devices.",
        "Designed and implemented major infrastructure and software overhauls that reduced the cache cost by 78%, projecting to save the org around $1 million per year.",
        "Overhauled the cache's codebase to a federated style architecture to provide seamless interoperability between various device types.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Amazon Ads",
      time: "Summer 2021",
      workDone: [
        "Created a web application for owners to more effectively interact with a configuration database containing several tables.",
        "Designed an intuitive layout that lead to a much simpler and less technically demanding workflow for software engineers and project managers.",
        "Implemented practical features such as type-checking, version history, and access control to limit bugs and keep track of changes.",
      ],
    },
    {
      title: "Undergraduate Researcher",
      company: "VCLA UCLA",
      time: "Oct 2019 — Jun 2021",
      workDone: [
        "Developed optimal plans, in real time, for virtual agents to collaborate and cook meals together in 3-D photo realistic kitchens.",
        "Generated dynamic scene graphs out of complex 3-D environments, allowing AI agents to more easily infer about and make plans in their environment.",
      ],
    },
    {
      title: "Information Security Intern",
      company: "Lumentum",
      time: "Summer 2020",
      workDone: [
        "Created a web dashboard providing the Information Security team real time alerting of security events and trends.",
        "Improved the workflow for security admins to check system health by centralizing data from numerous sources onto clear graphs on a single page.",
      ],
    },
  ];
  const technologies = [
    {
      title: "Backend",
      techs: [
        "Java (Spring)",
        "TypeScript and JavaScript (Node.js)",
        "Python (Django and Flask)",
      ],
    },
    {
      title: "Frontend",
      techs: [
        "iOS (Swift & Objective-C)",
        "Android (Java & Kotlin)",
        "React",
        "Next.js",
        "CSS",
        "HTML",
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
  const relevantCourses: string[] = [
    "Aritificial Intelligence",
    "Computer Graphics",
    "Computer Animation",
    "Data Science",
    "Database Systems",
    "Machine Learning",
    "Natural Language Processing",
    "Reinforcement Learning",
  ];
  return (
    <>
      <main>
        <Header currentPage="experience"></Header>
        <div className="flex flex-wrap gap-x-12 justify-between w-[94%] lg:w-[92%] mx-auto mb-14">
          <div className="shrink-0 grow basis-[55%]">
            <p className={styles.primaryHeader}>Work</p>
            <div className="space-y-6">
              {jobs.map(({ title, company, time, workDone }) => (
                <WorkExperience
                  key={title + company + time}
                  title={title}
                  company={company}
                  time={time}
                  workDone={workDone}
                ></WorkExperience>
              ))}
            </div>
          </div>
          <div className="basis-[38%] grow">
            <p className={styles.primaryHeader}>Technologies</p>
            <div className="space-y-2">
              {technologies.map(({ title, techs }) => (
                <TechExperience
                  key={title}
                  title={title}
                  techs={techs}
                ></TechExperience>
              ))}
            </div>
            <p className={styles.primaryHeader}>Education</p>
            <p className={styles.secondaryHeader}>
              B.S. Computer Science @ UCLA
            </p>
            <p className={styles.time}>2018 - 2022</p>
            <p className="font-medium text-primaryText text-lg mb-2">
              Relevant Electives:
            </p>
            <div className="columns-[9.375rem] lg:columns-2 sm:mb-4 mb-6">
              {relevantCourses.map((course) => (
                <p
                  key={course}
                  className="font-light text-primaryText text-sm mb-2"
                >
                  {course}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
