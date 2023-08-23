import BlogCard from "../utils/BlogCard";
import { HiCursorClick } from "react-icons/hi";
import { Description, ProjectCard, Heading } from "../utils";
import { HASHNODE_USERNAME } from "../config";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        user(username: "${HASHNODE_USERNAME}") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
              dateAdded
              coverImage
            }
          }
        }
      }
    `,
  });

  return {
    props: { data: data.user.publication.posts },
    revalidate: 1800,
  };
};

const blogs = ({ data }) => {
  return (
    <section>
      <Heading text={"Blogs"} />
      <Description text="Discover recent blogs I have written" />
      <div className="space-y-10">
        {console.log(data)}
        {<BlogCard blogs={data} />}
        <div className="flex justify-center">
          <a
            href="https://arthvhanesa.hashnode.dev/"
            target="_blank"
            className="gap-2 text-sh-blue hover:text-sh-blue-500 text-base mt-10 transition ease-in w-auto flex justify-center"
          >
            <p>More Blogs</p>
            <HiCursorClick className="text-xl inline-block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default blogs;
