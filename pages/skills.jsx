import { skill, keyToTitle } from "../data/skills";
import { SkillCap, Heading, HeadingSmall } from "../utils";

const skills = () => {
  return (
    <>
      <section>
        <Heading text={"Tech Stack"} />
        <br />
        {skill &&
          Object.keys(skill).map((key) => (
            <div key={key}>
              <HeadingSmall text={keyToTitle[key]} />
              <div className="my-3 lg:px-5 w-full flex flex-wrap gap-4">
                {skill[key].map((item) => (
                  <SkillCap key={item.id} {...item} />
                ))}
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default skills;
