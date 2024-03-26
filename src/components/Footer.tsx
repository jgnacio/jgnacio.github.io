"use client";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";
import LogoWidthVideo from "./Logo/LogoWithVideo";
import SocialPages from "./Footer/SocialPages";
import { ContactForm } from "./Contact/ContactForm";

// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const now: Date = new Date();
  const currentYear: number = now.getFullYear();

  return (
    <footer className="flex flex-col lg:flex-row-reverse p-4 w-full h-[40vh] md:h-[55vh] border-t">
      <div className="flex items-center justify-center w-full h-full">
        <LogoWidthVideo />
      </div>
      <div className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-col justify-end w-full">
          <SocialPages />
        </div>

        <small>&copy; Copyright {currentYear}, Ignacio Gómez</small>
      </div>
    </footer>
  );
}
