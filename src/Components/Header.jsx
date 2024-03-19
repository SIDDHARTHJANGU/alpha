"use client";
import React, { useEffect, useState } from "react";
import { Bttnarrow, Headerhalfcircle, Headerunderline } from "./Common/Icons";
import Image from "next/image";

const Header = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const startCounter = (setCount, limit, interval) => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= limit) {
          clearInterval(timer);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, interval);
  };

  useEffect(() => {
    startCounter(setCount1, 5, 100);
    startCounter(setCount2, 235, 10);
    startCounter(setCount3, 20, 100);

    return () => {
      clearInterval();
    };
  }, []);
  return (
    <div className="bg-common-white-bg">
      <div className="max-w-[1140px] mx-auto px-3 xl:px-0 border-t border-r border-black relative z-20">
        <div className="absolute left-0 top-0 h-[43px] border-l border-black"></div>
        <div className="flex flex-wrap">
          <div className=" w-full lg:w-[85%]">
            <div className="flex justify-between lg:h-[545px]">
              <div>
                <p className="font-Inter font-normal text-xl !leading-[121%] text-[#2B2B2B] mt-6 md:mt-[70px] uppercase">
                  B2B Sales Agency
                </p>
                <h1 className="uppercase font-Inter font-normal text-[34px] lg:text-[86px] !leading-[121%] max-w-[410px] lg:!max-w-[550px]">
                  Corporate{" "}
                  <span className="!relative">
                    {" "}
                    marketing{" "}
                    <span className="!absolute bottom-0 lg:bottom-4 left-0 -z-10">
                      {" "}
                      <Headerunderline />{" "}
                    </span>{" "}
                  </span>{" "}
                  agency{" "}
                </h1>
                <ul className="mt-2 lg:mt-10">
                  <li>
                    <a
                      href=""
                      className="font-Inter font-thin text-xl !leading-[121%] text-[#2B2B2B] flex items-center gap-2.5"
                    >
                      Our work <Bttnarrow />
                    </a>
                  </li>
                </ul>
                <div className="hidden md:block lg:hidden">
                  <div className="flex lg:flex-col items-center justify-between py-5">
                    <div className="text-center lg:px-4 border-b lg:border-black lg:pb-8 lg:h-[325px] flex flex-col justify-center items-cente">
                      <div className="lg:ps-14 lg:pt-10 hidden lg:block">
                        <Headerhalfcircle />
                      </div>
                      <div>
                        <p className="text-center font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                          {count1}+
                        </p>
                        <p className="text-center font-Inter max-w-[90px] font-normal text-base !leading-[120%] text-[#2B2B2B]">
                          Years of experience
                        </p>
                      </div>
                    </div>
                    <div className="w-[1px] bg-black h-28 lg:hidden"></div>
                    <div className="lg:pt-10 lg:pb-8 border-b lg:border-black text-center flex flex-col justify-center items-center">
                      <p className="text-center font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                        {count2}
                      </p>
                      <p className="text-center font-Inter font-normal max-w-[90px] text-base !leading-[120%] text-[#2B2B2B]">
                        Years of experience
                      </p>
                    </div>
                    <div className="w-[1px] bg-black h-28 lg:hidden"></div>
                    <div className="lg:pt-10 lg:pb-8 border-b lg:border-black text-center flex flex-col justify-center items-center md:pe-10">
                      <p className="text-center font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                        {count3}+
                      </p>
                      <p className="text-center font-Inter font-normal text-base max-w-[90px] !leading-[120%] text-[#2B2B2B]">
                        Years of experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-start lg:justify-end lg:items-end border-r border-black">
                <Image
                  className="mt-5 md:mt-10 lg:mt-0"
                  src="/assets/img/Webp/header_first_img.webp"
                  width={180}
                  height={359}
                  alt="header-first-image-small"
                />
              </div>
            </div>
            <Image
              className="absolute left-0 lg:-left-[13.2%] top-[100%] lg:top-[82%] lg:max-w-[996px] xl:max-w-[1118px] w-full"
              src="/assets/img/Webp/header_second_img.webp"
              width={1087}
              height={439}
              alt="header-second-image-big"
            />
          </div>
          <div className="w-full lg:w-[15%]">
            <div className="flex md:hidden lg:flex lg:flex-col items-center justify-between py-5">
              <div className="text-center lg:px-4 border-b lg:border-black lg:pb-8 lg:h-[325px] flex flex-col justify-center lg:justify-between items-cente">
                <div className="xl:ps-14 xl:pt-10 hidden lg:block">
                  {/* <Headerhalfcircle /> */}
                  <Image
                    
                    src="/assets/img/Svg.Ellipse.svg"
                    width={187}
                    height={139}
                    alt="header-second-image-big"
                  />
                </div>
                <div>
                  <p className="text-center font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                    {count1}+
                  </p>
                  <p className="text-center font-Inter max-w-[90px] font-normal text-base !leading-[120%] text-[#2B2B2B]">
                    Years of experience
                  </p>
                </div>
              </div>
              <div className="w-[1px] bg-black h-28 lg:hidden"></div>
              <div className="lg:pt-10 lg:pb-8 border-b lg:border-black text-center flex flex-col justify-center items-center">
                <p className="text-center font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                  {count2}
                </p>
                <p className="text-center font-Inter font-normal max-w-[90px] text-base !leading-[120%] text-[#2B2B2B]">
                  Years of experience
                </p>
              </div>
              <div className="w-[1px] bg-black h-28 lg:hidden"></div>
              <div className="lg:pt-10 lg:pb-8 border-b lg:border-black text-center flex flex-col justify-center items-center md:pe-10">
                <p className="text-center font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                  {count3}+
                </p>
                <p className="text-center font-Inter font-normal text-base max-w-[90px] !leading-[120%] text-[#2B2B2B]">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
