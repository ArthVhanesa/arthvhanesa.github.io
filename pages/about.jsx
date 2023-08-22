import { companies, institutions } from "../data/data";
import { skills, keyToTitle } from "../data/skills";
import { EduCard, SkillCap } from "../utils";
import { Heading, HeadingSmall } from "../utils/Heading";

const about = () => {
  return (
    <>
      <section>
        <Heading text={"Tech Stack"} />
        <br />
        {skills &&
          Object.keys(skills).map((key) => (
            <div key={key}>
              <HeadingSmall text={keyToTitle[key]} />
              <div className="my-3 lg:px-5 w-full flex flex-wrap gap-4">
                {skills[key].map((item) => (
                  <SkillCap key={item.id} {...item} />
                ))}
              </div>
            </div>
          ))}
      </section>

      <section>
        <Heading text={"Career"} />

        <div className="space-y-4 mt-3 lg:px-5">
          {companies.map((edu) => (
            <EduCard key={edu.id} {...edu} />
          ))}
        </div>
      </section>

      <section>
        <Heading text={"Education"} />

        <div className="space-y-4 mt-3 lg:px-5">
          {institutions.map((edu) => (
            <EduCard key={edu.id} {...edu} />
          ))}
        </div>
      </section>
    </>
  );
};

export default about;
