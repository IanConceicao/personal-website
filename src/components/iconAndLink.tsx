import { IconType } from "react-icons";
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
  const [effect, setEffect] = useState(false);

  const effectLifespan = 10000;

  function copyToClipBoard(event: React.MouseEvent<HTMLAnchorElement>) {
    if (copyEmail) {
      event.preventDefault();
      navigator.clipboard.writeText("IanCon234@gmail.com");
      setDynamicTitle("Email Copied!");
      setEffect(true);
      setTimeout(() => setEffect(false), effectLifespan);
      setTimeout(() => setDynamicTitle(title), effectLifespan + 150);
    }
  }

  return (
    <Link
      href={link}
      target="_blank"
      className={`w-fit text-base md:text-lg ${
        effect && "text-success"
      }   ${!effect && "text-hover-effect text-enlarge-on-hover-effect text-primary-text"}`}
      onClick={copyToClipBoard}
    >
      <span className="inline-block align-middle">{icon}</span>
      {"  "}
      <span className="align-middle">{dynamicTitle}</span>
    </Link>
  );
}
