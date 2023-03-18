interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className="border-2 border-b-white">
      <div className="flex justify-between w-[98%] sm:w-[95%] md:w-11/12 lg:w-5/6 mx-auto pt-10 pb-8">
        <div className="flex items-center gap-x-3 ">
          <p className="text-xl text-primaryHeader  font-gopher hover:text-secondaryHeader">
            work
          </p>
          <p className="text-xl text-primaryHeader font-gopher hover:text-secondaryHeader">
            about
          </p>
        </div>
        <div className="flex items-end gap-x-1">
          <p className="text-2xl sm:text-4xl md:text-5xl text-primaryHeader font-gopher font-bold">
            Ian Conceicao
            <span className="text-xs sm:text-s md:text-xl text-primaryText font-book whitespace-nowrap">
              {" "}
              Software Engineer
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
