"use client";
import React, { useEffect, useState } from "react";
import { Bttnarrow, Headerhalfcircle, Headerunderline } from "./Common/Icons";
import Image from "next/image";
import headerfirstimg from "../../public/assets/img/webp/header_first_img.webp";
import headersecondtimg from "../../public/assets/img/webp/header_second_img.webp";

const Hero = () => {
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
    <div id="home" className="bg-common-white-bg relative">
      <Image
        className="absolute right-12 w-[82px] h-[161px] lg:top-[73%] xl:top-[91%] hidden lg:block z-50"
        src="/assets/img/svg/header_circle.svg"
        width={181}
        height={67}
        alt="half-circle"
      />
      <div className="container max-w-[1080px] mx-auto px-3 xl:px-0 z-10 relative">
        <div className="border-black border-r border-t relative">
          <div className="absolute w-[1px] h-[43px] bg-black top-0 left-0"></div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-[85%] xl:w-[87%] 2xl:w-[85%] border-r border-black">
              <div className="flex justify-between">
                <div>
                  <div className="xl:-ml-3">
                    <p className="font-Inter font-normal text-base md:text-xl !tracking-[2px] !leading-[121%] text-[#2B2B2B] mt-6 md:mt-[70px] uppercase">
                      B2B Sales Agency
                    </p>
                    <h1 className="uppercase text-[#2b2b2b] font-Inter font-normal text-[34px] lg:text-[72px] xl:text-[86px] !leading-[121%] max-w-[410px] lg:!max-w-[550px]">
                      Corporate{" "}
                      <span className="!relative z-10">
                        marketing
                        <span className="!absolute bottom-0 lg:bottom-4 left-0 -z-10">
                          <Headerunderline />
                        </span>
                      </span>
                      agency
                    </h1>
                    <ul className="mt-2 lg:mt-10 lg:pb-[72px]">
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
                  <div className="hidden md:block lg:hidden">
                    <div className="flex justify-between mt-5">
                      <div className="flex flex-col justify-center items-center text-center border-r border-black pe-5">
                        <p className="font-Inter font-normal text-3xl !leading-[120%] text-[#2B2B2B]">
                          {count1}+
                        </p>
                        <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%]  text-[#656463]">
                          Years of experience
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center text-center border-r border-black pe-5">
                        <p className="font-Inter font-normal text-3xl !leading-[120%] text-[#2B2B2B]">
                          {count2}+
                        </p>
                        <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%]  text-[#656463]">
                          Years of experience
                        </p>
                      </div>
                      <div className="flex flex-col justify-center items-center text-center border-r border-black pe-5">
                        <p className="font-Inter font-normal text-3xl !leading-[120%] text-[#2B2B2B]">
                          {count3}+
                        </p>
                        <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%]  text-[#656463]">
                          Years of experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-end">
                  <Image
                    className="mt-5 md:mt-0 lg:mt-0"
                    src={headerfirstimg}
                    width={180}
                    height={359}
                    alt="header-first-image-small"
                  />
                </div>
              </div>
              <div className="w-full md:hidden py-5">
                <div className="flex justify-between">
                  <div className="flex flex-col justify-center items-center text-center border-r border-black pe-5">
                    <p className="font-Inter font-normal text-2xl lg:text-5xl !leading-[120%] text-[#2B2B2B]">
                      {count1}+
                    </p>
                    <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%]  text-[#656463]">
                      Years of experience
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center border-r border-black pe-5">
                    <p className="font-Inter font-normal text-2xl lg:text-5xl !leading-[120%] text-[#2B2B2B]">
                      {count1}+
                    </p>
                    <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%]  text-[#656463]">
                      Years of experience
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center  pe-5">
                    <p className="font-Inter font-normal text-2xl lg:text-5xl !leading-[120%] text-[#2B2B2B]">
                      {count1}+
                    </p>
                    <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%]  text-[#656463]">
                      Years of experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Image
                  className="lg:max-w-[861px] xl:!max-w-[1120px] lg:-translate-x-3 xl:-translate-x-[182px] 2xl:-translate-x-[203px]"
                  src={headersecondtimg}
                  width={1187}
                  height={439}
                  alt="header-second-image-big"
                />
              </div>
            </div>
            <div className="lg:w-[15%] xl:w-[13%] 2xl:w-[15%]">
              <div className="hidden lg:block">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col justify-between items-center text-center border-b border-black h-[305px] pb-8 pt-8">
                    <div className="pl-16">
                      <Headerhalfcircle />
                    </div>
                    <div>
                      <p className="font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                        {count1}+
                      </p>
                      <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%] text-[#656463]">
                        Years of experience
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center border-b border-black pt-10 pb-8">
                    <p className="font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                      {count2}+
                    </p>
                    <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%] text-[#656463]">
                      Years of experience
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center border-b border-black pt-10 pb-8">
                    <p className="font-Inter font-normal text-3xl md:text-5xl !leading-[120%] text-[#2B2B2B]">
                      {count3}+
                    </p>
                    <p className="font-Inter max-w-[90px] font-normal text-base !leading-[120%] text-[#656463]">
                      Years of experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
