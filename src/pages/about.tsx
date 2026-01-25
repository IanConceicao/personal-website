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

export default function About() {
  const linkInfo: iconAndLinkProps[] = [
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
      link: "Ian-Conceicao-Resume.pdf",
      icon: <FaFileAlt />,
    },
    {
      title: "Copy Email",
      link: "",
      icon: <FaCopy />,
      copyEmail: true,
    },
    {
      title: "Send Email",
      link: "mailto:iancon234@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <>
      <main>
        <Header currentPage="about"></Header>
        <div className="flex flex-wrap gap-x-20 justify-between w-[94%] lg:w-[92%] mx-auto mb-14">
          <div className="shrink-0 grow basis-[55%]">
            <p className={styles.header}>Hello</p>
            <div className={styles.paragraphText}>
              <p>
                I’m Ian, a Software Engineer at Amazon Music dedicated to
                building delightful user experiences for our listeners.
                Currently, I bridge the gap between frontend products and
                highly-scaled platforms to launch innovative ad products and
                monetizeable experiences for Free and Prime Tier users across
                the world.
              </p>
              <p>
                I enjoy working across the stack, from designing visual
                experiences on our mobile app, to architecting the ad-serving
                engines that personalize music and other sponsored content. More
                recently, I have become especially passionate about leveraging
                AI tooling to accelerate developer velocity and push the
                boundaries of how fans interact with music.
              </p>
              <p>
                If it sounds like I could be a good fit for your team, please
                reach out to me on LinkedIn or via email.
              </p>
            </div>
            <p className={styles.header}>This Site</p>
            <p className={styles.paragraphText}>
              I created this site using Next.js, React, Tailwind CSS, and
              Netlify. I designed this site to be readable on any screen format—
              if that is not your experience, or you have any other feedback,
              please let me know through a Github issue or an email. The source
              code can be found{" "}
              <Link
                href="https://github.com/IanConceicao/personal-website"
                target="__blank"
                className="text-hover-effect text-primaryHeader"
              >
                here
              </Link>
              .
            </p>
          </div>
          <div className="basis-[34%] grow">
            <p className={styles.header}>Links</p>
            <div className="flex flex-col gap-y-2">
              {linkInfo.map(({ title, link, icon, copyEmail }) => (
                <IconAndLink
                  key={title + link}
                  title={title}
                  link={link}
                  icon={icon}
                  copyEmail={copyEmail}
                ></IconAndLink>
              ))}
            </div>

            <p className={styles.header}>References</p>
            <div className={styles.simpleParagraphText}>
              References are available upon request.
            </div>
            <p className={styles.header}>Themes</p>
            <ThemePicker />
          </div>
        </div>
      </main>
    </>
  );
}
