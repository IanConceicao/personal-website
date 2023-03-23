import styles from "@/styles/About.module.css";
import Head from "next/head";

import Header from "@/components/header";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaFileAlt, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import IconAndLink, { iconAndLinkProps } from "@/components/iconAndLink";

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
      link: "Ian-Conceicao-Resume-March-23.pdf",
      icon: <FaFileAlt />,
    },
    {
      title: "Copy Email",
      link: "",
      icon: <FaEnvelope />,
      copyEmail: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Ian&apos;s Portfolio</title>
        <meta
          name="description"
          content="A portfolio website for Software Engineer Ian Conceicao"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header currentPage="about"></Header>
        <div className="flex flex-wrap justify-between w-[94%] lg:w-[92%] mx-auto mb-14">
          <div className="w-full md:w-[60%] ">
            <p className={styles.header}>Hello</p>
            <div className={styles.paragraphText}>
              <p>
                I am Ian Conceicao, a recent computer science graduate from the
                University of California, Los Angeles.
              </p>
              <p>
                I have two summers of full-stack internship experience at
                Amazon, where I worked on a high-throughput ad-serving platform.
                Previously, I was an undergraduate researcher focusing on
                reinforcement learning and embodied AI.
              </p>
              <p>
                I am passionate about improving backend systems at scale, and
                creating purposeful user interfaces.
              </p>
              <p>
                Currently, I am pursuing entry-level backend, full-stack, and
                machine learning roles.
              </p>
            </div>
            <p className={styles.header}>This Site</p>
            <p className={styles.paragraphText}>
              I created this site using Next.js, React, Tailwind CSS, and
              Netlify. I designed this site to be readable on any screen format—
              if that is not your experience, or you have any other feedback,
              please let me know through a Github issue or a plain email. The
              source code can be found{" "}
              <Link
                href="https://github.com/IanConceicao/personal-website"
                target="__blank"
                className="transition ease-in-out duration-300 hover:text-altPrimaryHeader text-primaryHeader"
              >
                here
              </Link>
              .
            </p>
          </div>
          <div className="w-full md:w-[34%]">
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
            <div className={styles.paragraphText}>
              References are available upon request.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
