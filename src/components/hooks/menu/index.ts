import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

export const useMenuGSAP = ({ currentIndex }: { currentIndex: number }) => {
  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);
};

export const useMenuSlide = ({
  totalCocktails,
}: {
  totalCocktails: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  return { goToSlide, currentIndex };
};
