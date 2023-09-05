import { ReactNode } from "react";
import { gsap } from "gsap";

interface Config {
  repeat?: number;
  paused?: boolean;
  speed?: number;
}

export default function horizontalLoop(
  items: ReactNode[],
  config: Config
): gsap.core.Timeline {
  config = config || {};


  const tl = gsap.timeline(config);

  tl.to(items, {
    y: -10,
    duration: 0.1,
    scale: 1.1,
    yoyo: true,
    rotate: 0,
    delay: 0.5,
    stagger: {
      each: 0.1,
      ease: "power1.Out",
    },
  });

  tl.to(items, {
    rotate: 360,
    duration: 1,
    stagger: {
      each: 0.1,
      ease: "power1.Out",
      from: "center",
    },
    color: "#c04af2",
  });
  tl.to(items, {
    duration: 0.5,
    color: "#55dd6e",
    stagger: {
      each: 0.1,
      ease: "power1.Out",
      from: "start"
    },
  })

  tl.to(items, {
    y: 0,
    duration: 0.1,
    scale: 1,
    yoyo: true,
    stagger: {
      each: 0.1,
      ease: "power1.Out",
      from: "end",
    },
    color: "inherit",
  });

  return tl;
}
