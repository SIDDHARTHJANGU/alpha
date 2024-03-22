"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isSidebarOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-common-white-bg z-40 relative">
      <div className="relative max-w-[1080px] mx-auto px-3 xl:px-0 pt-[19px] pb-[19px] z-10">
        <Image
          className="absolute top-0 -left-40 -z-10"
          src="/assets/img/svg/header_alpha.svg"
          alt="alphaelip"
          width={150}
          height={170}
        />
        <div className="flex justify-between items-center">
          <Image
            className=" cursor-pointer"
            src="/assets/img/svg/logo.svg"
            alt="Logo"
            width={153}
            height={47}
          />

          {/* This button now only appears when the sidebar is not open */}
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="z-30 cursor-pointer flex flex-col justify-between items-center  "
            >
              <span className="block w-6 h-1 bg-black"></span>
              <span className="block w-6 h-1 bg-black my-1"></span>
              <span className="block w-6 h-1 bg-black"></span>
            </button>
          )}
        </div>

        {/* Overlay and Sidebar */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-40 ">
            {/* Sidebar Overlay */}
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <div className="absolute top-0 right-0 h-full z-50 w-60 md:w-80 lg:w-96 bg-white pt-3 pb-6 transition-transform duration-300 ease-in-out">
              {/* Close button moves to the top left of the sidebar */}
              <div className="absolute top-0 left-0 pt-3 pl-3">
                <button
                  onClick={toggleSidebar}
                  className="cursor-pointer flex flex-col justify-between items-center h-4 w-6 relative"
                >
                  <span className="block w-6 h-[2px] bg-black rotate-45 translate-y-3"></span>
                  <span className="block w-6 h-[2px] bg-black -rotate-45 -translate-y-[1px]"></span>
                </button>
              </div>
              <ul className="mt-10 flex flex-col gap-6 justify-center items-center text-center min-h-full">
                <li>
                  <a
                    href="#"
                    className="text-black text-lg"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-lg"
                    onClick={handleLinkClick}
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black text-lg"
                    onClick={handleLinkClick}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
