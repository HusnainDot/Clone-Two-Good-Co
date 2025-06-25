import React, { useRef } from "react";
import video from "../images/video.mp4";
import gsap from "gsap";

const VideoSection = () => {
  const mouse = useRef(null);

  const mouseEnter = () => {
    gsap.to(mouse.current, {
      scale: 1,
      opacity: 1,
    });
  };

  const mouseMove = (dets) => {
    gsap.to(mouse.current, {
      left: dets.clientX - 50,
      top: dets.clientY - 50,
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

  return (
    <div className="px-5 w-full my-5 relative">
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
  );
};

export default VideoSection;
