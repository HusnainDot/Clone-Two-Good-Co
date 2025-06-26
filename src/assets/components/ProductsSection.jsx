import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import productOne from "../images/Product1.avif";
import productOneItemOne from "../images/product1_itme1.avif";
import productOneItemtwo from "../images/product1-item2.avif";
import productTwo from "../images/Product2.avif";
import producttwoItemone from "../images/product2-item1.avif";
import producttwoItemTwo from "../images/product2-item2.avif";
import productThreeitem from "../images/product3-item1.avif";
import { FaAngleRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger at the top

const ProductsSection = () => {

    useEffect(() => {
      const products = gsap.utils.toArray(".products");

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          products.forEach((product) => {
            gsap.to(product, {
              yPercent: 1000,
              ease: "none",
              scrollTrigger: {
                trigger: product,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
              },
            });
          });
        },
        "(max-width: 1023px)": () => {
          products.forEach((product) => {
            gsap.to(product, {
              yPercent: 200,
              ease: "none",
              scrollTrigger: {
                trigger: product,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
              },
            });
          });
        },
      });

      // ✅ Cleanup on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);
      
  return (
    <div className="my-10 md:my-20 px-2 md:px-5">
      <div className="flex items-center justify-between">
        <h4 className="uppercase text-md font-semibold">BUY GOOD</h4>
        <h4 className="uppercase text-md font-semibold">DO GOOD</h4>
      </div>
      <div className="w-full h-[2px] md:h-[1px] bg-gray-500"></div>

      <div className="w-full h-full bg-[#ffffff] rounded-lg px-1 md:px-2 py-12 my-1">
        <div className="flex flex-col md:flex-row items-center gap-3 min-w-full">
          {/* Product One */}
          <div className="h-[350px] w-full md:w-auto md:h-auto relative">
            <img
              src={productOne}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2  w-[300px] font-mono products">
              <div className="relative">
                <div className="flex items-center justify-evenly w-full h-full bg-[#DCC0B4] py-2.5 rounded-full">
                  <span className="bg-black h-[8px] w-[8px] rounded-full"></span>
                  <span className="text-black text-md font-medium uppercase">
                    Shop
                  </span>
                  <span className="text-black text-md font-bold uppercase">
                    things
                  </span>
                  <FaAngleRight size={15} />
                </div>
                <div className="w-full absolute bg-[#F3E9E5] rounded-4xl top-0 z-[-1]">
                  <div className="flex items-center gap-3 w-full h-full product-items">
                    <div className="flex items-center flex-col">
                      <img
                        src={productOneItemOne}
                        alt=""
                        className="w-[120px]"
                      />
                      <h4 className="uppercase font-sans text-xs font-semibold">
                        Two hugs candle
                      </h4>
                    </div>
                    <div className="flex items-center flex-col">
                      <img
                        src={productOneItemtwo}
                        alt=""
                        className="w-[120px]"
                      />
                      <h4 className="uppercase font-sans text-xs font-semibold">
                        Two hugs candle
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Two */}
          <div className="h-[350px] w-full md:w-auto md:h-auto relative">
            <img
              src={productTwo}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2  w-[300px] font-mono products">
              <div className="relative">
                <div className="flex items-center justify-evenly w-full h-full bg-[#DCC0B4] py-2.5 rounded-full">
                  <span className="bg-black h-[8px] w-[8px] rounded-full"></span>
                  <span className="text-black text-md font-medium uppercase">
                    Shop
                  </span>
                  <span className="text-black text-md font-bold uppercase">
                    Donations
                  </span>
                  <FaAngleRight size={15} />
                </div>
                <div className="w-full absolute bg-[#F3E9E5] rounded-4xl top-0 z-[-1]">
                  <div className="flex items-center gap-3 w-full h-full product-items">
                    <div className="flex items-center flex-col">
                      <img
                        src={producttwoItemone}
                        alt=""
                        className="w-[120px]"
                      />
                      <h4 className="uppercase font-sans text-xs font-semibold text-center">
                        Donate a Love + Care Pack
                      </h4>
                    </div>
                    <div className="flex items-center flex-col">
                      <img
                        src={producttwoItemTwo}
                        alt=""
                        className="w-[120px]"
                      />
                      <h4 className="uppercase font-sans text-xs font-semibold text-center">
                        Donate 20 Meals To A Women's Shelter
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Three */}
          <div className="h-[350px] w-full md:w-auto md:h-auto relative">
            <img
              src={productOne}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2  w-[300px] font-mono products">
              <div className="relative">
                <div className="flex items-center justify-evenly w-full h-full bg-[#DCC0B4] py-2.5 rounded-full">
                  <span className="bg-black h-[8px] w-[8px] rounded-full"></span>
                  <span className="text-black text-md font-medium uppercase">
                    Shop
                  </span>
                  <span className="text-black text-md font-bold uppercase">
                    Bath
                  </span>
                  <FaAngleRight size={15} />
                </div>
                <div className="w-full absolute bg-[#F3E9E5] rounded-4xl top-0 z-[-1] min-h-[0px] flex flex-col items-center justify-center pt-0 px-0 product-items">
                  <img
                    src={productThreeitem}
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
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
