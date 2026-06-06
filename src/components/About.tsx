import { useAbout } from "./hooks";
import gsap from "gsap";
import { useRef } from "react";

export const About = () => {
  const imagesRef = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  useAbout();

  const onHover = (index: number) => {
    gsap.set(imagesRef[index].current, { transformPerspective: 500 });

    gsap.to(imagesRef[index].current, {
      duration: 0.5,
      rotationX: 5,
      z: -18,
    });
  };

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div
          className="md:col-span-3"
          ref={imagesRef[0]}
          onMouseEnter={() => onHover(0)}
          onTouchStart={() => onHover(0)}
        >
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div
          className="md:col-span-6"
          ref={imagesRef[1]}
          onMouseEnter={() => onHover(1)}
          onTouchStart={() => onHover(1)}
        >
          <div className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div
          className="md:col-span-3"
          ref={imagesRef[2]}
          onMouseEnter={() => onHover(2)}
          onTouchStart={() => onHover(2)}
        >
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div
          className="md:col-span-8"
          ref={imagesRef[3]}
          onMouseEnter={() => onHover(3)}
          onTouchStart={() => onHover(3)}
        >
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div
          className="md:col-span-4"
          ref={imagesRef[4]}
          onMouseEnter={() => onHover(4)}
          onTouchStart={() => onHover(4)}
        >
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};
