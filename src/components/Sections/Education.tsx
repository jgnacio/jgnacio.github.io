import { Zen_Dots } from "next/font/google";
import Title from "../ui/ShowContent/Title";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function Education() {
  return (
    <Title title="Education">
      <div className="flex md:px-14 items-center justify-center h-full px-4 mt-8 md:mt-4">
        <p className="p-4">
          During my time at Holberton School, I immersed myself in a rigorous
          and collaborative learning environment, honing my problem-solving
          skills, and mastering several programming languages and frameworks. I
          took on various challenges, ranging from working with binary trees to
          creating complete applications. As a culmination of our efforts, my
          team and I successfully developed a minimum viable product called
          Smart ABA.
        </p>
      </div>
    </Title>
  );
}
