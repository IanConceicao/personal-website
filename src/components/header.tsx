import styles from "@/styles/Header.module.css";
import Link from "next/link";

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const pages = ["projects", "experience", "about"];

  return (
    <div className="border-2 border-b-white">
      <div className="flex justify-between gap-x-4 w-[98%] sm:w-[95%] md:w-[90%] mx-auto pt-5 sm:pt-7 md:pt-10 pb-3 sm:pb-5 md:pb-8">
        <div className="flex items-center gap-x-3 ">
          {pages.map((page) => {
            const style =
              page === currentPage ? styles.currentPage : styles.page;
            return (
              <p key={page} className={style}>
                <Link href={page}>{page}</Link>
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap items-end justify-end">
          <p className="text-4xl md:text-5xl lg:text-6xl text-primaryHeader font-gopher font-bold whitespace-nowrap">
            Ian Conceicao
          </p>
          <p className="text-base md:text-xl text-primaryText font-book whitespace-nowrap -mt-2">
            software engineer
          </p>
        </div>
      </div>
    </div>
  );
}
