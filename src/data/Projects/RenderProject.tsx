import Image from "next/image";
import { Zen_Dots } from "next/font/google";
import DisplayTechStack from "../../components/ui/ShowContent/DisplayTechStack";
import { SiYoutube, SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ProjectsListType } from "@/types/Projects";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function RenderProject({
  projects,
}: {
  projects: ProjectsListType;
}) {
  return (
    <div className="flex flex-col gap-5 lg:gap-0">
      {projects.map((project, index) => (
        <div
          className={`flex flex-col lg:flex-row mb-5 lg:mb-0 border-b-2 ${
            project.comingSoon ? "grayscale" : ""
          }`}
          key={index}
        >
          <div className="relative w-full lg:w-1/2 h-60 lg:h-screen">
            <Image
              className="-z-20"
              src={project.image.src}
              fill
              alt={project.image.alt}
              style={{ objectFit: "cover" }}
            />
            <Image
              className="w-full h-full backdrop-blur-sm"
              src={project.image.src}
              fill
              alt={project.image.alt}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col lg:justify-center lg:w-1/2 lg:h-screen lg:p-8 shadow-xl">
            <h2 className={`${zen.className} text-lg lg:text-4xl`}>
              {project.title}
            </h2>
            {project.comingSoon && (
              <span className="text-sm text-secondary grayscale-0">
                Coming Soon
              </span>
            )}
            <p className="mb-5">{project.description}</p>

            <div className="flex mb-8">
              <DisplayTechStack techStack={project.techStack} />
            </div>
            {project.link && (
              <>
                <p className="mb-4">{project.link.callToAction}</p>
                <div className="flex justify-start">
                  {project.link.youtube && (
                    <Link
                      className={buttonVariants({ variant: "outline" })}
                      target="_blank"
                      href={project.link.youtube}
                    >
                      <SiYoutube size={"2rem"} />
                    </Link>
                  )}
                  {project.link.github && (
                    <Link
                      className={buttonVariants({ variant: "outline" })}
                      target="_blank"
                      href={project.link.github}
                    >
                      <SiGithub size={"2rem"} />
                    </Link>
                  )}
                  {project.link.website && (
                    <div className="flex gap-2 items-center">
                      <span>Visit the website here.</span>
                      <Link
                        className={buttonVariants({ variant: "outline" })}
                        target="_blank"
                        href={project.link.website}
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
