import Title from "../ui/ShowContent/Title";
import RenderProject from "../../data/Projects/RenderProject";
import { projects } from "@/data/Projects/ProjectsList";

export default function Projects() {
  return (
    <Title title="Projects" style="center" sticky={true}>
      <div className="flex flex-col project-children p-2 md:p-4">
        <RenderProject projects={projects} />
      </div>
    </Title>
  );
}
