import Image from "next/image";
const ProjectCard = ({ leftAlign, image, title, des, tech, url }) => {
  return (
    <div
      className={
        "flex justify-center " +
        (leftAlign ? "lg:justify-end" : "lg:justify-start")
      }
    >
      <article className="relative inline-flex max-w-max">
        <header
          className={
            "top-2/4 bottom-2/4 right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 absolute flex items-center justify-center ml-0 " +
            (leftAlign ? "lg:-ml-[22.5rem]" : "lg:ml-[22.5rem]")
          }
        >
          <div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "mb-2 text-xl md:text-3xl text-left font-bold block " +
                (leftAlign ? "md:text-left" : "md:text-right")
              }
            >
              {title}
            </a>
            <div
              className={
                "text-left text-xs md:text-base p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg w-72 md:w-80 " +
                (leftAlign ? "md:text-left" : "md:text-right")
              }
            >
              {des}
            </div>
            <div
              className={
                "flex gap-4 p-1 mt-2 text-xs md:text-base text-sh-white cursor-default " +
                (leftAlign ? "justify-start" : "justify-start lg:justify-end")
              }
            >
              {tech.map((tech, index) => (
                <div className={"rounded-md bg-sh-blue p-1"} key={index}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </header>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="opacity-25 md:opacity-50 hover:opacity-100 w-full md:w-[35rem] rounded-lg border-2 bg-sh-blue border-sh-blue relative scale-[.99] hover:scale-100 transition ease-in shadow-lg flex">
            <Image
              className="w-full h-full rounded-lg"
              src={image}
              alt={title + " image"}
              objectFit="contain"
              draggable="false"
              placeholder="blur"
            />
          </div>
        </a>
      </article>
    </div>
  );
};

export default ProjectCard;
