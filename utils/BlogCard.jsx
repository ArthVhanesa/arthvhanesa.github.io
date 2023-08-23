import React, { useEffect, useState } from "react";
import { BiGitRepoForked, BiStar, BiLinkExternal } from "react-icons/bi";
import RepoSkeleton from "./RepoSkeleton";
import Image from "next/image";

const BlogCard = ({ blogs }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogs) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [blogs]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      {blogs.map((item) => {
        return loading ? (
          <RepoSkeleton key={item.id} />
        ) : (
          <div
            key={item.id}
            className="p-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg text-sh-white hover:shadow-lg transition-transform transform ease-in hover:scale-[1.02]"
          >
            <article className="flex flex-col justify-between">
              {/* <div className="w-full"> */}
              <Image
                src={item.coverImage}
                draggable="false"
                width={500}
                height={300}
                objectFit="contain"
                class="rounded-lg"
                alt={item.title + " thumbnail"}
              />
              {/* </div> */}

              <header className="flex justify-between items-center mb-2">
                <a
                  href={`https://arthvhanesa.hashnode.dev/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold inline-block text-sh-blue hover:text-sh-blue-500 transition ease-in"
                >
                  {item.title}
                </a>
              </header>

              <p className="text-sh-white-500 text-justify overflow-hidden h-12">
                {item.brief}
              </p>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
