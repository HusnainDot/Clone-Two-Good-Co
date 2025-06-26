import React, { useEffect, useRef, useState } from "react";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import gsap from "gsap/gsap-core";
import VideoSection from "./assets/components/VideoSection";
import ProductsSection from "./assets/components/ProductsSection";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navHight, setnavHight] = useState(0);
  const navRef = useRef(null);

  const handelScrollBar = () => {
    const hight = navRef.current?.offsetHeight || 0;

    setnavHight(hight);
    const scrollPosition = window.scrollY;

    if (scrollPosition > navHight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // gsap.fromTo(
    //   navRef.current,
    //   {
    //     y: -20,
    //     opacity: 0,
    //   },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     duration: 0.5,
    //     delay: 0.7,
    //     ease: "power3.out",
    //   }
    // );

    handelScrollBar();
    window.addEventListener("scroll", handelScrollBar);

    return () => window.removeEventListener("scroll", handelScrollBar);
  }, []);

  return (
    <>
      <div className="w-full mx-auto bg-[#eeeeee]  ">
        {/* Nav bar */}

        <Navbar navRef={navRef} scrolled={scrolled} />

        <HeroSection height={navHight} />
        <VideoSection />
        <ProductsSection />
        <div className="w-full h-screen bg-teal-950"></div>
      </div>
    </>
  );
};

export default Home;
