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
      target="__blank"
      className={`w-fit font-gopher text-base md:text-lg transition ease-in-out duration-500  hover:scale-110 ${
        effect && "text-success"
      }   ${!effect && "text-hover-effect text-primaryText"}`}
      onClick={copyToClipBoard}
    >
      <span className="inline-block align-middle">{icon}</span>
      {"  "}
      <span className="align-middle">{dynamicTitle}</span>
    </Link>
  );
}
