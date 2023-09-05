"use client";

import { Zen_Dots } from "next/font/google";
import { ReactNode } from "react";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function Title({
  title,
  children,
  style,
  sticky,
}: {
  title: string;
  style?: string;
  children: ReactNode;
  sticky?: boolean;
}) {
  return (
    <section className="flex min-h-[60vh] md:min-h-[45vh] border">
      <div
        className={`flex  w-full ${style === "center" ? "justify-center" : ""}`}
      >
        <div
          className={`flex ${
            style === "center" ? "justify-center" : "justify-start"
          } items-start  absolute`}
        >
          <h2
            className={`${zen.className} ${
              style === "center"
                ? "px-12 title-clip-center"
                : "px-4 pr-12 title-clip"
            } text-4xl md:text-5xl bg-primary text-background z-20`}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
