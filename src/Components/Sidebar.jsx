"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { sidebarLink } from "./common/Helper";
import { Logo } from "./common/Icon";
const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="container pt-[13px] max-w-[1080px] mx-auto xl:ps-[25px] xl:pe-3 px-3">
      <div className="flex justify-between items-start border-b-[1px] pb-[23px] ">
        <Link href="#">
          <Logo />
        </Link>
        <div className="relative flex">
          {/* Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-10 cursor-pointer"
              onClick={closeSidebar}
            ></div>
          )}

          {/* Sidebar */}
          <div
            className={` bg-white end-0 fixed top-0 w-full max-w-[375px] h-full transition-transform transform z-50 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-[-100%]"
            }`}
          >
            <div className="min-h-screen flex flex-col justify-center items-center">
              {/* Your sidebar content goes here */}
              <button
                onClick={closeSidebar}
                className="absolute top-3 left-3 text-rich-black"
              >
                <RxCross2 className="w-[43px] h-[43px] text-rich-black hover:text-red-500 duration-300" />
              </button>
              <ul className="flex flex-col gap-5">
                {sidebarLink.map((value, index) => {
                  return (
                    <li
                      key={index}
                      onClick={closeSidebar}
                      className="text-center"
                    >
                      <Link
                        aria-label={value.title}
                        className="font-inter font-medium text-sm opacity-70 hover:opacity-100 transition-all ease-in-out duration-300"
                        key={index}
                        href={value.path}
                      >
                        {value.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <button className="bg-linear-gradient-btn hover:scale-105 mt-5 transition-all ease-in-out duration-300 py-[15px] px-[38px] font-inter font-semibold text-sm leading-[150%] text-light-white">
                Login
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">{children}</div>

          {/* Toggle button */}
          <button className=" text-rich-black" onClick={openSidebar}>
            <GiHamburgerMenu className="w-[43px] h-[43px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
