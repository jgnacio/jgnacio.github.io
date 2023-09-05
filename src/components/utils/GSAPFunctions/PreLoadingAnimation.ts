import { ReactNode } from "react";
import { gsap } from "gsap";

export default function PreLoadingAnimation(
  items: ReactNode[]
) {
  gsap.to(items, {
    opacity: 1,
    duration: 0.3,
    stagger: {
      each: 0.03,
      ease: "power1.in",
    },
  });
  gsap.from(items, {
    color: "#c04af2",
    stagger: {
      each: 0.03,
      ease: "power1.in",
    },
  });
  gsap.from(".preloading-cursor", {
    opacity: 0,
    duration: 0.3,
    repeat: -1,
  });
  gsap.to(".preloading-cursor", {
    translateX: 9.5 * items.length,
    ease: "",
    duration: 0.8,
  });

}
