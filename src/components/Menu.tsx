"use client";

import { allCocktails } from "../constants/index.js";
import { useMemo, useRef } from "react";
import { useMenuGSAP, useMenuSlide } from "./hooks";
import { getCocktailAtUtil } from "../utils";

export const Menu = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const totalCocktails = allCocktails.length;
  const currentCocktailIndexOffset = 0 as const;
  const prevCocktailIndexOffset = -1 as const;
  const nextCocktailIndexOffset = 1 as const;

  const { goToSlide, currentIndex } = useMenuSlide({
    totalCocktails: allCocktails.length,
  });

  useMenuGSAP({ currentIndex });

  const { currentCocktail, prevCocktail, nextCocktail } = useMemo(() => {
    const currentCocktail = getCocktailAtUtil({
      indexOffset: currentCocktailIndexOffset,
      cockTails: allCocktails,
      totalCocktails,
      currentIndex,
    });
    const prevCocktail = getCocktailAtUtil({
      indexOffset: prevCocktailIndexOffset,
      cockTails: allCocktails,
      totalCocktails,
      currentIndex,
    });
    const nextCocktail = getCocktailAtUtil({
      indexOffset: nextCocktailIndexOffset,
      cockTails: allCocktails,
      totalCocktails,
      currentIndex,
    });

    return { currentCocktail, prevCocktail, nextCocktail };
  }, [allCocktails, totalCocktails, currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`
                ${isActive ? "text-white border-white" : "text-white/50 border-white/50"}
              `}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
