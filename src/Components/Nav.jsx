  "use client";
  import Image from "next/image";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      document.body.classList.add("overflow-x-hidden");
    } else {
      document.body.classList.remove("overflow-x-hidden");
    }
  }, [show]);

  const toggleMenu = () => {
    setShow(!show);
    if (!show) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <div className={`bg-common-white-bg pt-3 pb-6 ${show ? "overflow-hidden" : "overflow-x-hidden"}`}>
      <div className="container max-w-[1140px] mx-auto px-3 xl:px-0">
        <div className="flex justify-between items-center">
          <Image src="/assets/img/svg/logo.svg" alt="Logo" width={153} height={47} />
          <button
            className="block z-50 focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="w-[42px] h-[28px] flex flex-col justify-between items-center z-40">
              <span className={`w-full h-1 bg-gray-600 transition-transform duration-300 ${show ? "rotate-45 translate-y-4" : ""}`}></span>
              <span className={`w-full h-1 bg-gray-600 transition-opacity duration-300 ${show ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`w-full h-1 bg-gray-600 transition-transform duration-300 ${show ? "-rotate-[50deg] -translate-y-2" : ""}`}></span>
            </div>
          </button>
          <div
            className={`absolute top-0 ${
              show ? "right-0" : "-right-full"
            } h-full z-40 bg-white w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 transition-right duration-500 flex items-center justify-center`}
          >
            <ul className="flex flex-col gap-6">
              <li>
                <a onClick={toggleMenu} href="#" className="text-black text-lg font-Inter font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#" className="text-black text-lg font-Inter font-medium">
                  Our Work
                </a>
              </li>
              <li>
                <a onClick={toggleMenu} href="#" className="text-black text-lg font-Inter font-medium">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
