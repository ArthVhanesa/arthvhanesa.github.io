import { GITHUB_API_URL, GITHUB_USERNAME } from "../config";
import { Description, RepoCard, Heading } from "../utils";
export const getStaticProps = async () => {
  const res = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`);
  let allAlbums = await res.json();

  return {
    props: { data: allAlbums },
    revalidate: 1800,
  };
};

const openSource = ({ data }) => {
  return (
    <section>
      <Heading text="GitHub Repositories" />
      <Description text="Some repositories I have published and contributed to" />
      {<RepoCard repos={data} />}
    </section>
  );
};

export default openSource;
