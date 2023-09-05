import {
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiGooglecloud,
  SiDocker,
  SiPrisma,
  SiTailwindcss,
  SiC,
  SiScikitlearn,
  SiMicrosoftazure,
  SiGithubactions,
  SiDaisyui,
  SiExpress,
  SiAxios,
  SiMui,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

import { projectsImages } from "./ProjectsImages";
import { ProjectsListType } from "@/types/Projects";
import { ReactNode } from "react";
import { keyGenerator } from "@/lib/keyGenerator";

export const projects: ProjectsListType = [
  {
    title: "Machine Learning Operations (MLOps) Challenge",
    description:
      "The challenge is to train, register a model using MLflow with Azure Machine Learning followed by implementing the trained model in a real-time endpoint so that it can be consumed by a web application.",
    link: {
      callToAction: "See the solution on github",
      github: "https://github.com/jgnacio/MLOps-Challenges",
    },
    image: {
      src: projectsImages.aiskillschallenge.main,
      backgroundUrl: projectsImages.aiskillschallenge.backgroundUrl,
      alt: "Machine Learning Operations (MLOps) Challenge project",
    },
    techStack: {
      backend: [
        <SiPython key={keyGenerator()} />,
        <SiScikitlearn key={keyGenerator()} />,
      ],
      deployment: [
        <SiMicrosoftazure key={keyGenerator()} />,
        <SiGithubactions key={keyGenerator()} />,
      ],
    },
  },
  {
    title: "Smart ABA",
    description:
      "Smart ABA is an easy to use app designed to improve personalized learning and behavior transformation through Applied Behavior Analysis (ABA). Jerónimo Lussich, Lucas Cobham, Darío Nalerio and myself, developed this app for an educational center that serves children with special needs, with the goal of improving their educational experience.",
    link: {
      callToAction: "You can learn about Smart-ABA and its impact here",
      youtube: "https://www.youtube.com/watch?v=lkJnZSUaOnQ",
    },
    image: {
      src: projectsImages.smartAba.main,
      backgroundUrl: projectsImages.smartAba.backgroundUrl,
      alt: "Smart ABA project",
    },
    techStack: {
      frontend: [
        <SiNextdotjs key={keyGenerator()} />,
        <SiTailwindcss key={keyGenerator()} />,
        <SiDaisyui key={keyGenerator()} />,
      ],
      backend: [
        <SiTypescript key={keyGenerator()} />,
        <SiPrisma key={keyGenerator()} />,
        <SiExpress key={keyGenerator()} />,
        <SiAxios key={keyGenerator()} />,
        <SiFirebase key={keyGenerator()} />,
        <SiPostgresql key={keyGenerator()} />,
      ],
      deployment: [
        <SiDocker key={keyGenerator()} />,
        <SiGooglecloud key={keyGenerator()} />,
      ],
    },
  },
  {
    title: "Holberton Shell (hsh)",
    description:
      "A simple UNIX command language interpreter written in C programming language.",
    link: {
      callToAction: "See or contribute to the project on github",
      github: "https://github.com/jgnacio/holbertonschool-simple_shell",
    },
    image: {
      src: projectsImages.unixshell.main,
      backgroundUrl: projectsImages.unixshell.backgroundUrl,
      alt: "Unix Shell project",
    },
    techStack: {
      backend: [<SiC key={keyGenerator()} />],
    },
  },
  {
    title: "Casmabil(E-commerce)",
    comingSoon: true,
    description:
      "Casmabil is an E-commerce website for a local business built with Next.js, Tailwind CSS and Daisy UI. It is currently under development.",
    image: {
      src: projectsImages.casmabil.main,
      backgroundUrl: projectsImages.casmabil.backgroundUrl,
      alt: "Casmabil project e-commerce website",
    },
    techStack: {
      frontend: [
        <SiNextdotjs key={keyGenerator()} />,
        <SiTypescript key={keyGenerator()} />,
        <SiTailwindcss key={keyGenerator()} />,
        <SiDaisyui key={keyGenerator()} />,
      ],
      backend: [
        <SiExpress key={keyGenerator()} />,
        <SiMysql key={keyGenerator()} />,
      ],
      deployment: [
        <SiDocker key={keyGenerator()} />,
        <SiMicrosoftazure key={keyGenerator()} />,
      ],
    },
  },
  {
    title: "JYM Dulces creaciones (E-learning)",
    comingSoon: true,
    description:
      "JYM Dulces creaciones is an user-friendly web application for a local business built with modern technologies. It is currently under development.",
    image: {
      src: projectsImages.jym.main,
      backgroundUrl: projectsImages.jym.backgroundUrl,
      alt: "Casmabil project e-commerce website",
    },
    techStack: {
      frontend: [
        <SiNextdotjs key={keyGenerator()} />,
        <SiTypescript key={keyGenerator()} />,
        <SiTailwindcss key={keyGenerator()} />,
        <SiDaisyui key={keyGenerator()} />,
        <SiMui key={keyGenerator()} />,
      ],
      backend: [
        <SiMysql key={keyGenerator()} />,
        <SiPrisma key={keyGenerator()} />,
      ],
      deployment: [
        <SiDocker key={keyGenerator()} />,
        <SiGooglecloud key={keyGenerator()} />,
      ],
    },
  },
];
