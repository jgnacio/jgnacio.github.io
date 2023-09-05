import { ReactNode } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export default function HorizontalScroll(
    items: ReactNode[],
) {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".panel");
  
  gsap.to(sections, {
    ease: "none",
    scrollTrigger: {
      trigger: ".containerx",
      pin: true,
      scrub: 1,
      markers: true,
    }
  })
}
