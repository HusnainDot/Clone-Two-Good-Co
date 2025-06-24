import React, { useState } from "react";
import heroImg from "../images/Logo/logo2.svg";
import { CiMenuFries } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

const navLinks = ["SHOP", "WHOLESALE", "CATERING", "DONATE"];

const Navbar = () => {
  const [checkHover, setCheckHover] = useState(null);

  return (
    <div className="w-full py-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-[80px] lg:w-auto">
          <img src={heroImg} alt="Hero" className="w-full h-full" />
        </div>

        <div>
          <ul className="flex items-start gap-10 lg:gap-20 font-medium">
            {/* Nav items */}

            {navLinks.map((itme, i) => (
              <div key={i} className="relative hidden lg:block ">
                <a
                  onMouseEnter={() => setCheckHover(i)}
                  onMouseLeave={() => setCheckHover(null)}
                  href="#"
                  className=" hover:opacity-50 text-xs uppercase inline-block"
                >
                  {itme}
                </a>
                <span
                  className={`   absolute left-0 bottom-0 h-[1.5px] transition-transform duration-300 ease-in-out bg-gray-500 w-full  origin-left ${
                    checkHover === i
                      ? "scale-x-100 origin-left"
                      : "scale-x-0 origin-right"
                  }`}
                ></span>
              </div>
            ))}

            {/* Icons */}
            <li>
              <button className="cursor-pointer">
                <CiMenuFries size={18} />
              </button>
            </li>
            <li>
              <button className="cursor-pointer">
                <FaCartPlus size={18} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
