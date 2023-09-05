import { Zen_Dots } from "next/font/google";
import { Separator } from "../separator";

// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function DisplayTechStack({
  techStack,
}: {
  techStack: {
    frontend?: any[];
    backend?: any[];
    deployment?: any[];
    other?: any[];
  };
}) {
  return (
    <div className="flex flex-col p-4">
      <span className={`${zen.className} w-full text-lg mb-2`}>
        Technologies
      </span>
      <div className="flex flex-wrap text-xl md:text-3xl">
        {techStack.frontend && (
          <div className="flex flex-col mb-4">
            <span
              className={`${zen.className} flex justify-center text-lg bg-primary text-background`}
            >
              Front-end
            </span>
            <div className="flex py-2 px-4">
              {techStack.frontend.map((technology, index) => (
                <div className="flex justify-center w-full mx-2" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        )}
        {techStack.backend && (
          <div className="flex flex-col mb-4">
            <span
              className={`${zen.className} flex justify-center text-lg bg-primary text-background`}
            >
              Back-end
            </span>
            <div className="flex py-2 px-4">
              {techStack.backend.map((technology, index) => (
                <div className="flex justify-center w-full mx-2" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        )}
        {techStack.deployment && (
          <div className="flex flex-col mb-4">
            <span
              className={`${zen.className} flex justify-center w-40 text-lg bg-primary text-background`}
            >
              Deployment
            </span>
            <div className="flex py-2 px-4">
              {techStack.deployment.map((technology, index) => (
                <div className="flex justify-center w-full mx-2" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        )}
        {techStack.other && (
          <div className="flex flex-col mb-4">
            <span
              className={`${zen.className} flex justify-center w-40 text-lg bg-primary text-background`}
            >
              Other
            </span>
            <div className="flex py-2 px-4">
              {techStack.other.map((technology, index) => (
                <div className="flex justify-center w-full mx-2" key={index}>
                  {technology}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
