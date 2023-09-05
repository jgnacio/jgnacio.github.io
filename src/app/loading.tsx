"use client";
import { useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import PreLoadingAnimation from "@/components/utils/GSAPFunctions/PreLoadingAnimation";

export default function Loading() {
  const loadingText = "Lets code something cool!";
  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = gsap.utils.toArray(".preloading-text") as ReactNode[];
      PreLoadingAnimation(text);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="preloading-screen overflow-hidden bg-background absolute flex justify-center items-center w-full h-screen z-[90]">
      <div className="absolute">
        <span className="text-primary">{">\u00A0"}</span>
        <span className="preloading-cursor absolute text-primary">{"_"}</span>
        {loadingText.split("").map((char, index) => (
          <span className="preloading-text opacity-0" key={index}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
