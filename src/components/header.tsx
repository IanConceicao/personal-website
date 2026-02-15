import Link from "next/link";

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const pages = ["projects", "experience", "about"];

  return (
    <div className="border-b-2 border-b-header-border bg-header-background transition ease-in-out duration-1000">
      <div className="flex justify-between gap-x-4 w-[90%] mx-auto pt-5 sm:pt-7 md:pt-10 pb-3 sm:pb-5 md:pb-8">
        <div className="flex gap-x-1 flex-col sm:flex-row sm:items-center sm:gap-x-3">
          {pages.map((page) => {
            const linkStyle =
              page === currentPage
                ? "underline decoration-select" // Underline current page
                : "text-hover-effect"; // On hover highlight other pages
            return (
              <p
                key={page}
                className="text-base md:text-xl text-primary-header"
              >
                <Link href={page} className={linkStyle}>
                  {page}
                </Link>
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap items-start sm:items-end justify-end max-w-[60%] -gap-y-5">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-header font-bold whitespace-nowrap">
            Ian Conceicao
          </div>
          <div className="text-base md:text-xl text-primary-text whitespace-nowrap -mt-5 sm:-mt-2">
            software engineer
          </div>
        </div>
      </div>
    </div>
  );
}
