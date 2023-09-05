"use client";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiJavascript,
  SiGooglecloud,
  SiDocker,
  SiGnubash,
  SiPrisma,
  SiMicrosoftazure,
} from "react-icons/si";

import { gsap } from "gsap";
import { ReactNode, useEffect } from "react";
import horizontalLoop from "../utils/GSAPFunctions/HorizontalLoop";
import { keyGenerator } from "@/lib/keyGenerator";

export default function Technologies() {
  const technologiesList = [
    <SiTypescript key={keyGenerator()} />,
    <SiJavascript key={keyGenerator()} />,
    <SiReact key={keyGenerator()} />,
    <SiNextdotjs key={keyGenerator()} />,
    <SiNodedotjs key={keyGenerator()} />,
    <SiPrisma key={keyGenerator()} />,
    <SiPython key={keyGenerator()} />,
    <SiGooglecloud key={keyGenerator()} />,
    <SiMicrosoftazure key={keyGenerator()} />,
    <SiDocker key={keyGenerator()} />,
    <SiGnubash key={keyGenerator()} />,
  ];
  useEffect(() => {
    const boxes = gsap.utils.toArray(".box") as ReactNode[];

    const loop = horizontalLoop(boxes, {
      paused: false,
      repeat: -1,
      speed: 1.25,
    });

    return () => {
      loop.kill();
    };
  }, []);

  return (
    <div className="flex overflow-x-hidden justify-center py-12">
      <div className="flex flex-wrap justify-center p-2 gap-5 text-[12vw] md:text-[5vw]">
        {technologiesList.map((technology, index) => (
          <div className="box" key={index}>
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}
