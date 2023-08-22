import { companies, institutions } from "../data/data";
import { skills, keyToTitle } from "../data/skills";
import { EduCard, SkillCap, Heading, HeadingSmall } from "../utils";

const about = () => {
  return (
    <>
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
