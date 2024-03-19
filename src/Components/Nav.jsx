"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false); // state variable to toggle the navigation menu

  // useEffect hook to add and remove overflow-hidden class to the body based on the show state variable
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // useEffect cleanup function to remove the overflow-hidden class from the body when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);
  const Movement = () => {
    setShow(false);
  };

  return (
    <div className="bg-common-white-bg pt-3 pb-6">
      <div className="max-w-[1140px] mx-auto px-3 xl:px-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Image
            src="/assets/img/Svg/logo.svg"
            alt="Logo"
            width={153}
            height={47}
          />
          {/* Hamburger Menu Icon - shown up to 2xl screens */}
          <button
            className="block 2xl:hidden z-50 focus:outline-none"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div
              className={`w-[42px] h-[28px] flex flex-col justify-between items-center z-40`}
            >
              <span
                className={`w-full h-1 bg-gray-600 transition-transform duration-300 ${
                  show ? "rotate-45 translate-y-4" : ""
                }`}
              ></span>
              <span
                className={`w-full h-1 bg-gray-600 transition-opacity duration-300 ${
                  show ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`w-full h-1 bg-gray-600 transition-transform duration-300 ${
                  show ? "-rotate-[50deg] -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
          {/* Navigation Links - hidden on smaller screens unless isOpen is true */}
          <ul
            className={`${
              show ? "left-0" : "-left-full"
            } 2xl:left-0 duration-500 bg-white w-full h-full top-0 fixed gap-6 2xl:gap-8 flex flex-col 2xl:flex-row justify-center 2xl:justify-end items-center 2xl:bg-transparent 2xl:flex 2xl:static 2xl:w-auto 2xl:h-full z-40`}
          >
            {/* Navigation links */}
            <li>
              <a
                onClick={Movement}
                href="#"
                className="text-black text-lg font-Inter font-medium"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={Movement}
                href="#"
                className="text-black text-lg font-Inter font-medium"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                onClick={Movement}
                href="#"
                className="text-black text-lg font-Inter font-medium"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
