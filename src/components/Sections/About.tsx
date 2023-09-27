import { Zen_Dots } from "next/font/google";
import Image from "next/image";
import Title from "../ui/ShowContent/Title";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function About() {
  const profileImg =
    "https://res.cloudinary.com/dyrtfx5rl/image/upload/v1689708226/jgnacio-portfolio/profilewbg.png";
  return (
    <Title title="About">
      <div className="flex flex-col lg:flex-row">
        <div className="container flex justify-center basis-2/3">
          <Image
            src={profileImg}
            width={400}
            height={600}
            style={{ objectFit: "cover" }}
            alt="Ignacio Gómez profile foto"
            className="opacity-90"
          />
        </div>
        <div className="flex justify-center items-center px-4 basis-1/2">
          <p className=" p-4">
            Hello! I&apos;m <b>Ignacio Gómez</b>, a passionate and skilled
            software engineer recently graduated from{" "}
            <b className="italic">Holberton School</b>. With a strong foundation
            in computer science and a curiosity for cutting-edge technologies, I
            am dedicated to creating innovative and efficient software
            solutions.
          </p>
        </div>
      </div>
    </Title>
  );
}
