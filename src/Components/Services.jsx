"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount >= 500) {
          clearInterval(timer);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Unearth new opportunities",
    "Unearth new opportunities",
    "Unearth new opportunities",
    "Unearth new opportunities",
    "Unearth new opportunities",
  ];

  return (
    <div className="bg-common-black-bg relative z-10">
      <Image
        className="absolute top-0 xl:top-20 left-0 -z-10"
        src="/assets/img/Svg/alpha_ellips.svg"
        alt="alphaelip"
        width={130}
        height={170}
      />
      <div className="container max-w-[1152px] mx-auto px-3 xl:px-0 relative">
        <div className="absolute left-8 top-0 hidden lg:block lg:h-[50px] xl:h-[90px] border-l border-white"></div>
        <div className="flex flex-wrap justify-between pt-10 md:pt-[60px] lg:pb-[60px] xl:py-[98px]">
          <div className="w-full md:w-[35%] lg:w-[29%] 2xl:w-[35%]">
            <div className=" relative z-10">
              <Image
                className="absolute w-[10%] top-0 left-[-10px] xl:left-[-15px] -z-10"
                src="/assets/img/Svg/got_bg_elip.svg"
                alt="gotelip"
                width={74}
                height={74}
              />
              <h2 className=" font-Inter font-normal text-[64px] !leading-[121%] text-white relative">
                Services
              </h2>
            </div>
            <div className="flex flex-col w-full md:w-[250px] xl:w-[330px] mt-1 lg:mt-[44px]">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`font-Inter font-semibold text-base lg:text-xl !leading-[125%] text-[#b9b9b9] ${
                    activeTab === index
                      ? "text-[#f6f6f6] bg-linear-gradient-date border-transparent"
                      : ""
                  } duration-300 px-2 lg:px-[30px] py-[28px] border border-[#b9b9b9] hover:bg-transparent ${
                    activeTab === index ? "" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[67%] 2xl:w-[65%] pt-6 lg:relative text-center md:text-start">
            <p className="font-Inter font-normal text-base !leading-[121%] text-[#b9b9b9] max-w-[690px]">
              {/* Content for each tab */}
              {activeTab === 0 && (
                <>
                  Hipster ipsum tattooed brunch I'm baby. Shaman venmo sartorial
                  out celiac af beard sartorial. Trade shabby cleanse actually
                  chic franzen freegan. Dsa shabby pack etsy mumblecore lyft
                  letterpress church-key. Pinterest dreamcatcher asymmetrical
                  vibecession vegan neutra bun vexillologist. Chips vape you diy
                  locavore dreamcatcher mood edison kombucha. Kogi retro
                  chambray bird on. Organic farm-to-table iceland knausgaard
                  heirloom.
                  <Image
                    className="mt-7 lg:absolute lg:translate-x-0 xl:max-w-[984px] xl:h-[500px]"
                    src="/assets/img/Webp/service_img.webp"
                    width={984}
                    height={500}
                    alt="header-first-image-small"
                  />
                  <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[510px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                    <div>
                      <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                        {count1}+
                      </p>
                      <p className="font-Inter font-normal text-[#2B2B2B] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                        B2B Companies trust Alpha2
                      </p>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 1 && (
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  euismod eget arcu nec accumsan. Nullam in augue magna.
                  Suspendisse potenti. Curabitur non nibh id massa cursus
                  consectetur. In ultricies, quam et ultrices cursus, sem justo
                  interdum mi, sit amet pulvinar tellus neque vel lorem.
                  <Image
                    className="mt-7 lg:absolute lg:translate-x-0 xl:max-w-[900px] xl:h-[500px] 2xl:max-w-[984px]"
                    src="/assets/img/Webp/service_img.webp"
                    width={984}
                    height={500}
                    alt="header-first-image-small"
                  />
                  <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[470px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                    <div>
                      <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                        {count1}+
                      </p>
                      <p className="font-Inter font-normal text-[#2B2B2B] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                        B2B Companies trust Alpha2
                      </p>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 2 && (
                <>
                  Integer varius consectetur eros ut commodo. Nullam sit amet
                  fermentum leo. Proin eu tortor a ex commodo ultricies. Donec
                  dictum tortor ut nulla tincidunt, nec dignissim nisi
                  malesuada. Aliquam vel orci lobortis, eleifend elit at,
                  pulvinar sapien. Duis ac luctus ligula. Nulla at ligula non
                  augue iaculis vulputate ac id tortor. Integer nec nisi eget
                  arcu ultricies suscipit id nec libero. Aliquam erat volutpat.
                  <Image
                    className="mt-7 lg:absolute lg:translate-x-0 xl:max-w-[900px] xl:h-[500px] 2xl:max-w-[984px]"
                    src="/assets/img/Webp/service_img.webp"
                    width={984}
                    height={500}
                    alt="header-first-image-small"
                  />
                  <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[470px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                    <div>
                      <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                        {count1}+
                      </p>
                      <p className="font-Inter font-normal text-[#2B2B2B] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                        B2B Companies trust Alpha2
                      </p>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 3 && (
                <>
                  Sed fermentum lacus nec ex venenatis, id efficitur nulla
                  porttitor. Nullam at lorem pretium, laoreet ante eget,
                  fermentum elit. Integer ut tortor id velit varius dignissim.
                  In efficitur odio at metus sollicitudin, nec venenatis risus
                  semper. Donec aliquam euismod nunc vel pellentesque. Fusce
                  ultricies convallis tortor, nec lacinia eros fringilla at.
                  Duis efficitur ante justo, ac viverra urna dictum nec.
                  <Image
                    className="mt-7 lg:absolute lg:translate-x-0 xl:max-w-[900px] xl:h-[500px] 2xl:max-w-[984px]"
                    src="/assets/img/Webp/service_img.webp"
                    width={984}
                    height={500}
                    alt="header-first-image-small"
                  />
                  <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[470px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                    <div>
                      <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                        {count1}+
                      </p>
                      <p className="font-Inter font-normal text-[#2B2B2B] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                        B2B Companies trust Alpha2
                      </p>
                    </div>
                  </div>
                </>
              )}
              {activeTab === 4 && (
                <>
                  Phasellus at ipsum id velit maximus mattis. Sed vel congue
                  metus. Maecenas vulputate justo nec elit efficitur, at
                  lobortis nulla feugiat. Vivamus tincidunt, nunc at tempus
                  feugiat, quam lorem auctor magna, eu egestas libero est eu
                  libero. Fusce auctor risus sed orci ultricies, non consequat
                  sapien consectetur. Nam pretium auctor dui, vitae convallis
                  purus congue ut. Proin pretium, sem quis viverra eleifend,
                  elit risus lobortis lectus, nec volutpat urna leo at ex.
                  <Image
                    className="mt-7 lg:absolute lg:translate-x-0 xl:max-w-[900px] xl:h-[500px] 2xl:max-w-[984px]"
                    src="/assets/img/Webp/service_img.webp"
                    width={984}
                    height={500}
                    alt="header-first-image-small"
                  />
                  <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[470px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                    <div>
                      <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                        {count1}+
                      </p>
                      <p className="font-Inter font-normal text-[#2B2B2B] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                        B2B Companies trust Alpha2
                      </p>
                    </div>
                  </div>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
