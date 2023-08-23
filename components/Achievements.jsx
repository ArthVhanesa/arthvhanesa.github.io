import { Heading, Carousel } from "../utils";
import { hackathonWinImage } from "../data/data";
import { HASHNODE_BLOG_URL } from "../config";

export default function Achievements() {
  const bhoomiBlogLink = `${HASHNODE_BLOG_URL}/bhoomi-the-future-of-secure-property-transfers`;
  return (
    <section>
      <Heading text="Achievement" />
      <div className="flex flex-wrap">
        <div className="w-full md:w-[45%]">
          <h1 className="text-md font-normal text-justify mr-4">
            Woohoo! We did it! 🎉
            <span className="block mt-3">
              Our team participated in the state-level SSIP hackathon 2022 and
              came out on top,{" "}
              <span className="font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple cursor-default select-none">
                winning first prize!
              </span>{" "}
              🏆
            </span>
            <span className="block mt-3">
              Our achievement even made it into the Gujarat Samachar newspaper!
              How cool is that? 📰
            </span>
            <span className="block mt-3">
              And that&apos;s not all - we were also awarded{" "}
              <span className="font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple cursor-default select-none">
                a grant from SSIP
              </span>{" "}
              to develop our MVP, taking our project to the next level. 🚀
            </span>
            <span className="block mt-3">
              Built a solution{" "}
              <a
                href="https://bhoomi.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple select-none">
                  bhoomi.site
                </span>{" "}
              </a>
              to streamline and secure the land registry and transfer process.
            </span>
            <span className="block">
              Read more about it{" "}
              <a
                href={bhoomiBlogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sh-blue hover:text-sh-blue-500 transition ease-in underline underline-offset-4"
              >
                here.
              </a>
            </span>
          </h1>
        </div>
        <div className="w-full md:w-[55%]">
          <Carousel images={hackathonWinImage} />
        </div>
      </div>
    </section>
  );
}
