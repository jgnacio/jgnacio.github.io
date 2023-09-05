import Link from "next/link";
import { Zen_Dots } from "next/font/google";
import { SocialPagesLinks } from "@/components/Footer/SocialPagesLinks";

// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function SocialPages() {
  return (
    <ul className="flex flex-col gap-2 w-full list-none text-2xl md:text-3xl">
      <li>
        <Link
          target="_blank"
          href={SocialPagesLinks.linkedin}
          className="flex gap-2 group"
        >
          <span className={`${zen.className} text-md md:text-4xl uppercase`}>
            LinkedIn
          </span>
          <p className="underline group-hover:text-primary transition-colors duration-150">
            jgnaciogomez
          </p>
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          href={SocialPagesLinks.github}
          className="group flex gap-2 "
        >
          <span className={`${zen.className} text-md md:text-4xl uppercase`}>
            Github
          </span>
          <p className="underline group-hover:text-primary transition-colors duration-150">
            jgnacio
          </p>
        </Link>
      </li>
    </ul>
  );
}
