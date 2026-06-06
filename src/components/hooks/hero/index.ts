import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IUseHero } from "./types";
import { SplitText } from "gsap/SplitText";

export const useHero = ({ videoRef, isMobile }: IUseHero) => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });

    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.set(heroSplit.chars, {
      display: "inline-block",
      unicodeBidi: "isolate",
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current?.duration,
        });
      };
    }
  }, []);
};
