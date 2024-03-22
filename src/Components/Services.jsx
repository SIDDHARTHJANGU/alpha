"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import serviceimg from "../../public/assets/img/webp/service_img.webp";

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
        src="/assets/img/svg/alpha_ellips.svg"
        alt="alphaelip"
        width={130}
        height={170}
      />
      <div className="container max-w-[1152px] mx-auto px-3 xl:px-0 relative">
        <div className="absolute left-9 top-0 xl:h-[80px] h-[45px] md:h-[55px] lg:h-[80px] border-l border-white"></div>
        <div className="flex flex-wrap justify-between pt-12 md:pt-[65px] lg:pt-[100px] lg:pb-[60px] xl:py-[98px]">
          <div className="w-full md:w-[35%] lg:w-[29%] xl:w-[35%] 2xl:w-[35%] ">
            <div className=" relative z-10">
              <Image
                className="absolute xl:max-w-[74px] w-[30px] md:w-[40px] xl:h-[74px] h-[36px]  md:h-[67px] top-0 left-[-10px] xl:left-[-15px] -z-10"
                src="/assets/img/svg/got_bg_elip.svg"
                alt="gotelip"
                width={74}
                height={74}
              />
              <h2 className="font-Inter font-normal xl:text-[64px] lg:text-[58px] md:text-[50px] text-[32px] !leading-[121%] text-[#f6f6f6] relative">
                Services
              </h2>
            </div>
            <div className="flex flex-col w-full md:w-[250px] xl:w-[330px] mt-4 lg:mt-[44px] xl:-ml-3">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`font-Inter font-semibold text-base xl:text-xl !leading-[125%] text-[#b9b9b9] ${
                    activeTab === index
                      ? "text-[#f6f6f6] bg-linear-gradient-date border-transparent"
                      : ""
                  } duration-300 px-2 xl:px-[30px] py-[28px] border border-[#b9b9b9] hover:bg-transparent ${
                    activeTab === index ? "" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[67%] xl:w-[65%] 2xl:w-[65%] pt-6 lg:relative text-center md:text-start">
            {/* Content for each tab */}
            {activeTab === 0 && (
              <>
                <p className="font-Inter font-normal text-base !leading-[161%] text-[#b9b9b9] max-w-[690px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <Image
                  className="mt-7 lg:absolute xl:max-w-[916px] xl:h-[500px] 2xl:translate-x-[13.3%]"
                  src={serviceimg}
                  width={984}
                  height={500}
                  alt="header-first-image-small"
                />
                <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[493px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                  <div>
                    <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                      {count1}+
                    </p>
                    <p className="font-Inter font-normal text-[#656463] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                      B2B Companies trust Alpha2
                    </p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 1 && (
              <>
                <p className="font-Inter font-normal text-base !leading-[161%] text-[#b9b9b9] max-w-[690px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <Image
                  className="mt-7 lg:absolute xl:max-w-[916px] xl:h-[500px] 2xl:translate-x-[13.3%]"
                  src={serviceimg}
                  width={984}
                  height={500}
                  alt="header-first-image-small"
                />
                <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[493px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                  <div>
                    <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                      {count1}+
                    </p>
                    <p className="font-Inter font-normal text-[#656463] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                      B2B Companies trust Alpha2
                    </p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 2 && (
              <>
                <p className="font-Inter font-normal text-base !leading-[161%] text-[#b9b9b9] max-w-[690px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <Image
                  className="mt-7 lg:absolute xl:max-w-[916px] xl:h-[500px] 2xl:translate-x-[13.3%]"
                  src={serviceimg}
                  width={984}
                  height={500}
                  alt="header-first-image-small"
                />
                <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[493px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                  <div>
                    <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                      {count1}+
                    </p>
                    <p className="font-Inter font-normal text-[#656463] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                      B2B Companies trust Alpha2
                    </p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 3 && (
              <>
                <p className="font-Inter font-normal text-base !leading-[161%] text-[#b9b9b9] max-w-[690px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <Image
                  className="mt-7 lg:absolute xl:max-w-[916px] xl:h-[500px] 2xl:translate-x-[13.3%]"
                  src={serviceimg}
                  width={984}
                  height={500}
                  alt="header-first-image-small"
                />
                <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[493px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                  <div>
                    <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                      {count1}+
                    </p>
                    <p className="font-Inter font-normal text-[#656463] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                      B2B Companies trust Alpha2
                    </p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 4 && (
              <>
                <p className="font-Inter font-normal text-base !leading-[161%] text-[#b9b9b9] max-w-[690px]">
                  Hipster ipsum tattooed brunch I&apos;m baby. Shaman venmo
                  sartorial out celiac af beard sartorial. Trade shabby cleanse
                  actually chic franzen freegan. Dsa shabby pack etsy mumblecore
                  lyft letterpress church-key. Pinterest dreamcatcher
                  asymmetrical vibecession vegan neutra bun vexillologist. Chips
                  vape you diy locavore dreamcatcher mood edison kombucha. Kogi
                  retro chambray bird on. Organic farm-to-table iceland
                  knausgaard heirloom.
                </p>
                <Image
                  className="mt-7 lg:absolute xl:max-w-[916px] xl:h-[500px] 2xl:translate-x-[13.3%]"
                  src={serviceimg}
                  width={984}
                  height={500}
                  alt="header-first-image-small"
                />
                <div className="bg-white w-[150px] h-[120px] lg:w-[217px] lg:h-[175px] px-4 lg:px-8 pt-5 pb-8 text-center flex flex-col justify-center items-center z-30 relative translate-x-[100px] md:translate-x-[200px] xl:translate-x-[493px] -translate-y-[50px] lg:translate-y-[300px] 2xl:translate-y-[400px] xl:translate-y-[450px] 2xl:translate-x-[500px]">
                  <div>
                    <p className="font-Inter font-normal text-3xl lg:text-4xl xl:text-5xl text-[#2B2B2B] !leading-[120%]">
                      {count1}+
                    </p>
                    <p className="font-Inter font-normal text-[#656463] !leading-[121%] text-sm lg:text-base border-b border-black pb-3 lg:pb-5 mt-2">
                      B2B Companies trust Alpha2
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
