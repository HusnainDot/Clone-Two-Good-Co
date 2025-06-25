import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";

const HeroSection = ({ height }) => {
  const textRef = useRef(null);

  
  useEffect(() => {
    const elements = textRef.current.querySelectorAll("span");
    gsap.fromTo(
      elements,
      {
        y: 120,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      <div style={{ paddingTop: height }} className="w-full ">
        <h2 ref={textRef} className="pt-10 md:pt-0 text-[16vw] uppercase md:text-[16.5vw] font-extrabold text-nowrap leading-none tracking-[-5px] ">
          <span className="inline-block">change</span> <br />
          <span className="inline-block">the</span>
          <span className="inline-block ps-10">course</span>
        </h2>
      </div>
    </>
  );
};

export default HeroSection;
