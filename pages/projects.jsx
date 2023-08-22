import { projectList } from "../data/projects";
import { Description, ProjectCard } from "../utils";
import { Heading } from "../utils/Heading";

const projects = () => {
  return (
    <section>
      <Heading text={"Featured Projects"} />
      <Description text="Discover a collection of projects highlighting my journey as a web developer" />

      <div className="space-y-10">
        {projectList.map((project, idx) => (
          <ProjectCard
            key={project.id}
            leftAlign={(idx + 1) % 2 === 0}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default projects;
