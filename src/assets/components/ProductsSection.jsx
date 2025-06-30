import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import productOne from "../images/Product1.avif";
import productOneItemOne from "../images/product1_itme1.avif";
import productOneItemtwo from "../images/product1-item2.avif";
import productTwo from "../images/Product2.avif";
import producttwoItemone from "../images/product2-item1.avif";
import producttwoItemTwo from "../images/product2-item2.avif";
import productThreeitem from "../images/product3-item1.avif";
import productimg1 from "../images/Hugs-Kisses-Pack-Two-Good-Co.avif";
import productimg2 from "../images/68.avif";
import productimg3 from "../images/Donate-20-meals-womens-shelter-two-good-co.avif";
import productimg4 from "../images/Website-Products.avif";
import { FaAngleRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
  const products = [
    {
      img: productimg1,
      title: "Two Kisses & Two Hugs Candles & Spray Pack",
      price: "$169",
    },
    {
      img: productimg2,
      title: "Strawberry Gum Leaf, Coriander, Basil + Mint Candle",
      price: "$59",
    },
    {
      img: productimg3,
      title: "Donate 20 Meals To A Women's Shelter",
      price: "$200",
    },
    {
      img: productimg4,
      title: "Two good co, hoodie",
      price: "$140",
    },
  ];

  const ProductSectionTwo = [
    {
      ParentImg: productOne,
      Parenttext1: "shope",
      Parenttext2: "Things",
      childImg1: productOneItemOne,
      childImg2: productOneItemtwo,
      childtext1: "two Hugs candle",
      childtext2: "two Hugs candle",
    },
    {
      ParentImg: productTwo,
      Parenttext1: "shope",
      Parenttext2: "Donation",
      childImg1: producttwoItemTwo,
      childImg2: producttwoItemTwo,
      childtext1: "Donate a Love + Care Pack",
      childtext2: "Donate 20 Meals To A Women's Shelter",
    },
    {
      ParentImg: productOne,
      Parenttext1: "shope",
      Parenttext2: "Bath",
      childImg1: productThreeitem,

      childtext1: "Cleanse & Nourish Hand Wash",
    },
  ];

  const mouse = useRef();

  const gridMouseEnter = () => {
    gsap.to(mouse.current, {
      opacity: 1,
      scale: 1,
    });
  };
  const quickX = gsap.quickTo(mouse.current, "left", { duration: 0.2 });
  const quickY = gsap.quickTo(mouse.current, "top", { duration: 0.2 });

  const gridMouseMove = (e) => {
    quickX(e.clientX - 90);
    quickY(e.clientY - 90);
  };
  const gridMouseLeave = () => {
    gsap.to(mouse.current, {
      opacity: 0,
      scale: 0,
    });
  };

  useEffect(() => {
    const products = gsap.utils.toArray(".products");

    const scrollAnimations = () => {
      const isLargeScreen = window.innerWidth >= 1024;

      products.forEach((product) => {
        gsap.to(product, {
          yPercent: 700,
          ease: "none",
          scrollTrigger: {
            trigger: product,
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        });
      });
    };

    scrollAnimations();

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollAnimations();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="my-10 md:my-20 px-2 md:px-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <h4 className="uppercase text-md font-semibold">BUY GOOD</h4>
        <h4 className="uppercase text-md font-semibold">DO GOOD</h4>
      </div>
      <div className="w-full h-[2px] md:h-[1px] bg-gray-500"></div>

      <div className="w-full h-full bg-[#ffffff] rounded-lg px-1 md:px-2 py-12 my-1">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center min-w-full gap-5">
          {ProductSectionTwo.map((items, index) => {
            return (
              <div
                key={index}
                className="h-auto w-full sm:w-auto  sm:h-auto relative"
              >
                <img
                  src={items.ParentImg}
                  alt=""
                  className="w-full h-full  object-cover md:object-contain lg:object-cover "
                />
                <div className="absolute top-[10%] md:top-[35%]  left-1/2 transform -translate-x-1/2  w-[300px] font-mono products">
                  <div className="relative">
                    <div className="flex items-center justify-evenly w-full h-full bg-[#DCC0B4] py-2.5 rounded-full">
                      <span className="bg-black h-[8px] w-[8px] rounded-full"></span>
                      <span className="text-black text-md font-medium uppercase">
                        {items.Parenttext1}
                      </span>
                      <span className="text-black text-md font-bold uppercase">
                        {items.Parenttext2}
                      </span>
                      <FaAngleRight size={15} />
                    </div>
                    <div className="w-full absolute bg-[#F3E9E5] rounded-4xl top-0 z-[-1] min-h-[0px] flex flex-col items-center justify-center pt-0 px-0 product-items">
                      <img
                        src={items.childImg1}
                        alt=""
                        className="w-[120px] h-[100px] object-cover"
                      />
                      <h4 className="uppercase font-sans text-xs font-semibold">
                        Cleanse & Nourish Hand Wash
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-5 lg:flex-row items-center lg:justify-between my-5">
          <div className="">
            <h4 className="  text-3xl lg:text-6xl font-bold text-center max-w-[90%] mx-auto lg:text-left lg:max-w-[700px]">
              We believe in people, until they believe in themselves again.
            </h4>
          </div>

          <div className=" flex flex-col items-center  lg:items-start gap-5  w-[90%] lg:w-[35%]">
            <p className="font-semibold text-center  lg:text-start">
              Everything we do is designed to rebuild self worth and
              independence, in order to break free from the cycle of
              disadvantage.
            </p>

            <p className="font-semibold  text-center  lg:text-start">
              With every purchase you make with us, you're helping to change the
              course of someone's life; you're walking alongside vulnerable
              women as they find their way home again.
            </p>

            <div className="">
              <h5 className="font-mono uppercase text-gray-600">
                Shop to Support
              </h5>
              <div className="w-full h-[1px] bg-gray-600"></div>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={gridMouseEnter}
          onMouseMove={gridMouseMove}
          onMouseLeave={gridMouseLeave}
          className="grid grid-cols-2 gap-y-20 py-[50px] md:py-[200px] relative cursor-pointer"
        >
          <div
            ref={mouse}
            className="w-[200px] h-[200px] rounded-full bg-[#e9edc984] fixed opacity-0 scale-0 pointer-events-none z-50 cursor-pointer hidden md:block"
          ></div>

          {products.map((items, index) => {
            return (
              <div key={index} className="flex flex-col gap-10 items-center">
                <img src={items.img} alt="" className="w-[80%]" />
                <div className="">
                  <h4 className="uppercase text-xs font-medium ">
                    {items.title}
                  </h4>
                  <span className="uppercase text-sm  font-medium block text-center">
                    {items.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
