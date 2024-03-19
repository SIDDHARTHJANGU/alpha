import React from "react";
import { Bttnarrow, Headerhalfcircle, Headerunderline } from "./Common/Icons";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-common-white-bg">
      <div className="max-w-[1140px] mx-auto px-3 xl:px-0 border-t border-r border-black relative z-20">
        <div className="absolute left-0 top-0 h-[43px] border-l border-black"></div>
        <div className="flex flex-wrap">
          <div className="w-[80%]">
            <p className="font-Inter font-normal text-xl !leading-[121%] text-[#2B2B2B] mt-[70px] uppercase">
              B2B Sales Agency
            </p>
            <h1 className="uppercase font-Inter font-normal text-[86px] !leading-[121%] !max-w-[550px]">
              Corporate
              <span className="!relative block">
                marketing
                <span className="!absolute bottom-4 left-0 -z-10">
                  <Headerunderline />
                </span>
              </span>
              agency
            </h1>
            <ul className="mt-10">
              <li>
                <a
                  href=""
                  className="font-Inter font-thin text-xl !leading-[121%] text-[#2B2B2B] flex items-center gap-2.5"
                >
                  Our work <Bttnarrow />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[10%] flex justify-end items-end border-r border-black">
            <Image
              src="/assets/img/Webp/header_first_img.webp"
              width={180}
              height={359}
              alt="header-first-image-small"
            />
          </div>
          <div className="w-[10%]">
            <div>
              <div className="text-center">
                <Headerhalfcircle />
                <p
                  className="text-center font-Inter font-normal text-5xl !leading-[120%] text-[#2B2B2B]"
                >
                  5+ 
                </p>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
