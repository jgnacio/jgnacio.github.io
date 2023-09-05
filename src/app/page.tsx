"use client";

import Footer from "@/components/Footer";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Technologies from "@/components/Sections/Technologies";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1500);
  }, []);
  return (
    <main className="flex flex-col text-sm md:text-base">
      {mounted ? (
        <>
          <Hero />
          <div className="p-4 md:px-48">
            <About />
            <Education />
          </div>
          <Technologies />
          <Projects />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
