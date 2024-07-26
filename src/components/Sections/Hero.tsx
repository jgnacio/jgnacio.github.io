"use client";
import { Zen_Dots } from "next/font/google";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";

// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  const heroTextDisplay = useRef(null);

  useEffect(() => {
    const textDisplay = gsap.fromTo(
      heroTextDisplay.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
    return () => {
      textDisplay.kill();
    };
  }, []);
  return (
    <div className="flex relative justify-center items-center min-h-[90vh]">
      <h1
        className={`text-3xl px-4 md:px-0 font-bold ${zen.className}`}
        ref={heroTextDisplay}
      >
        Welcome to jgnacio portfolio
      </h1>
    </div>
  );
}
