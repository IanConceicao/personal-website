import styles from "@/styles/About.module.css";
import Header from "@/components/header";
import Link from "next/link";
import {
  FaFileAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";
import IconAndLink, { iconAndLinkProps } from "@/components/iconAndLink";
import ThemePicker from "@/components/themePicker";

// 1. Move static data outside the component to prevent re-creation on render
const LINK_INFO: iconAndLinkProps[] = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/ian-conceicao-9a20791a4/",
    icon: <FaLinkedin />,
  },
  {
    title: "GitHub",
    link: "https://github.com/IanConceicao",
    icon: <FaGithub />,
  },
  {
    title: "Resume",
    link: "/Ian-Conceicao-Resume.pdf", // Added leading slash for public folder
    icon: <FaFileAlt />,
  },
  {
    title: "Copy Email",
    link: "#", // Better than an empty string
    icon: <FaCopy />,
    copyEmail: true,
  },
  {
    title: "Send Email",
    link: "mailto:iancon234@gmail.com",
    icon: <FaEnvelope />,
  },
];

export default function About() {
  return (
    <main>
      <Header currentPage="about" />

      {/* 2. Simplified Layout Classes for Tailwind v4 compatibility */}
      <div className="mx-auto mb-14 flex w-[94%] flex-wrap justify-between gap-x-20 lg:w-[92%]">
        {/* About Section */}
        <div className="basis-[55%] grow shrink-0">
          <h2 className={styles.header}>Hello</h2>
          <div className={styles.paragraphText}>
            <p className="mb-4">
              I’m Ian, a Software Engineer at Amazon Music dedicated to building
              delightful user experiences for our listeners. Currently, I bridge
              the gap between frontend products and highly-scaled platforms to
              launch innovative ad products and monetizeable experiences for
              Free and Prime Tier users across the world.
            </p>
            <p className="mb-4">
              I enjoy working across the stack, from designing visual
              experiences on our mobile app, to architecting the ad-serving
              engines that personalize music and other sponsored content. More
              recently, I have become especially passionate about leveraging AI
              tooling to accelerate developer velocity and push the boundaries
              of how fans interact with music.
            </p>
            <p>
              If it sounds like I could be a good fit for your team, please
              reach out to me on LinkedIn or via email.
            </p>
          </div>

          <h2 className={styles.header}>This Site</h2>
          <p className={styles.paragraphText}>
            I created this site using Next.js, React, Tailwind CSS, and Netlify.
            I designed this site to be readable on any screen format— if that is
            not your experience, or you have any other feedback, please let me
            know through a GitHub issue or an email. The source code can be
            found{" "}
            <Link
              href="https://github.com/IanConceicao/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hover-effect text-primary-header"
            >
              here
            </Link>
            .
          </p>
        </div>

        {/* Sidebar Section */}
        <div className="basis-[34%] grow">
          <h2 className={styles.header}>Links</h2>
          <div className="flex flex-col gap-y-2">
            {LINK_INFO.map((item) => (
              <IconAndLink
                key={item.title} // Title is unique enough here
                {...item} // Spreading props is cleaner
              />
            ))}
          </div>

          <h2 className={styles.header}>References</h2>
          <div className={styles.simpleParagraphText}>
            References are available upon request.
          </div>

          <h2 className={styles.header}>Themes</h2>
          <ThemePicker />
        </div>
      </div>
    </main>
  );
}
