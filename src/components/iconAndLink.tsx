import { IconContext, IconType } from "react-icons";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import { ReactElement, useState } from "react";

export interface iconAndLinkProps {
  title: string;
  link: string;
  icon: ReactElement<IconType>;
  copyEmail?: boolean;
}

export default function IconAndLink({
  title,
  link,
  icon,
  copyEmail,
}: iconAndLinkProps) {
  const [dynamicTitle, setDynamicTitle] = useState(title);

  function copyToClipBoard(event: React.MouseEvent<HTMLAnchorElement>) {
    if (copyEmail) {
      event.preventDefault();
      navigator.clipboard.writeText("IanCon234@gmail.com");
      setDynamicTitle("Email Copied");
      setTimeout(() => setDynamicTitle(title), 10000);
    }
  }

  return (
    <IconContext.Provider value={{ size: "auto" }}>
      <div className="transition ease-in-out duration-300 hover:text-altPrimaryHeader inline-flex items-center  text-primaryText">
        <Link
          href={link}
          target="__blank"
          className="h-6"
          onClick={copyToClipBoard}
        >
          {icon}
        </Link>
        <Link
          href={link}
          target="__blank"
          className=" font-gopher text-base md:text-lg pl-2"
          onClick={copyToClipBoard}
        >
          {dynamicTitle}
        </Link>
      </div>
    </IconContext.Provider>
  );
}
