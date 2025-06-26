import React, { useRef, useState } from "react";
import video from "../images/video.mp4";
import gsap from "gsap";

const VideoSection = () => {
  const [onmouse, setonmouse] = useState(false);

  const mouse = useRef(null);

  const mouseEnter = () => {
    gsap.to(mouse.current, {
      scale: 1,
      opacity: 1,
    });
  };

  const mouseMove = (dets) => {
    gsap.to(mouse.current, {
      left: dets.clientX - 20,
      top: dets.clientY - 20,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const mouseLeave = () => {
    gsap.to(mouse.current, {
      scale: 0,
      opacity: 0,
    });
  };
  const text = useRef(null);
  const mousetext = () => {
    gsap.fromTo(
      text.current,
      {
        width:"0"
      },
      {
        width:"100%",
        duration: 0.5,
        ease: "none",
      }
    );
  };

  return (
    <div className="px-5 w-full my-5 relative">
      <div>
        <video
          onMouseEnter={mouseEnter}
          onMouseMove={mouseMove}
          onMouseLeave={mouseLeave}
          src={video}
          className="w-auto h-auto object-cover rounded-md md:rounded-2xl hover:cursor-pointer"
          autoPlay
          muted
          loop
        />

        <div
          ref={mouse}
          className="w-[100px] h-[100px] top-0 left-0 bg-black z-10 absolute rounded-full opacity-0 scale-0 flex items-center justify-center font-semibold text-2xl text-white "
        >
          play
        </div>
      </div>

      <div className="my-10 md:my-20">
        <div className="flex flex-col ">
          <h3 className="font-bold text-3xl md:text-6xl text-center py-2 md:py-5">
            TAKE THE PLEDGE.
          </h3>
          <p className="font-semibold text-sm md:text-lg text-center ">
            Support and empower women experiencing domestic violence, every day
            of the year..
          </p>

          <div className="flex flex-col items-center justify-center w-fit mx-auto pt-5 ">
            <a
              onMouseEnter={mousetext}
              href="#"
              className="text-md uppercase font-mono  text-center cursor-pointer"
            >
              learn more today
            </a>

            <div ref={text} className={`bg-gray-500 w-full h-[1.5px]  `}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
