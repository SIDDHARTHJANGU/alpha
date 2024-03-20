import Image from "next/image";
import React from "react";
import { Hand } from "./Common/Icons";

const About = () => {
  return (
    <div className=" bg-common-white-bg relative">
      <Image
        className="absolute bottom-5 xl:bottom-24 left-5 hidden lg:block"
        src="/assets/img/Svg/about_circle.svg"
        alt="gotelip"
        width={95}
        height={95}
      />
      <div className="container max-w-[1080px] mx-auto px-3 xl:px-0 z-10">
        <div className="border-black border-r relative">
          <div className="bg-black w-[1px] h-[121px] absolute"></div>
          <div className="py-10 lg:pt-[152px] md:pb-0 flex flex-col md:flex-row text-center items-center md:items-end md:justify-between md:text-start">
            <div className="z-10">
              <h2 className=" font-Inter font-normal text-5xl lg:text-[64px] !leading-[121%] text-black">
                <span className=" relative">
                  ABOUT{" "}
                  <span>
                    {" "}
                    <Image
                      className="absolute top-1 -left-2 xl:-left-6 -z-10 w-[25px]"
                      src="/assets/img/Svg/got_bg_elip.svg"
                      alt="gotelip"
                      width={44}
                      height={44}
                    />
                  </span>
                </span>{" "}
                US
              </h2>
              <div className="xl:ml-5">
                <p className="font-Inter font-normal text-base !leading-[121%] text-[#2b2b2b] max-w-[690px] md:max-w-[690px] mt-3 lg:mt-5">
                  Hipster Ipsum Tattooed Brunch I'm Baby. Shaman Venmo Sartorial
                  Out Celiac Af Beard Sartorial. Trade Shabby Cleanse Actually
                  Chic Franzen Freegan. Dsa Shabby Pack Etsy Mumblecore Lyft
                  Letterpress Church-key. Pinterest Dreamcatcher Asymmetrical
                  Vibecession Vegan Neutra Bun Vexillologist. Chips Vape You Diy
                  Locavore Dreamcatcher Mood Edison Kombucha. Kogi Retro
                  Chambray Bird On. Organic Farm-To-Table Iceland Knausgaard
                  Heirloom.
                </p>
                <div className="mt-3 lg:mt-6">
                  <button className="text-white font-Inter font-normal text-base !leading-[121%] py-[18px] px-10 bg-black">
                    CONTACT US
                  </button>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start py-5 md:pb-10 lg:py-[134px]">
                  <div className="border border-black px-3 pb-4 pt-12 md:pt-6 lg:pt-12 w-[335px] md:w-[230px] lg:w-[310px] xl:w-[335px] h-[278px]">
                    <Image
                      className=""
                      src="/assets/img/Svg/about_hand.svg"
                      alt="hand"
                      width={58}
                      height={58}
                    />
                    <p className="font-Inter font-semibold text-xl !leading-[121%] text-[#2B2B2B] max-w-[143px] mt-4">
                      Unearth new opportunities
                    </p>
                    <p className="font-Inter font-normal text-base !leading-[121%] text-[#656463] max-w-[374px] mt-3">
                      Speak To Ideal Clients That Are Outside Your Network.
                      Discover New Markets And Grow Your Business
                    </p>
                  </div>
                  <div className="border border-black px-3 pb-4 pt-12 md:pt-6 lg:pt-12 w-[335px] md:w-[230px] lg:w-[310px] xl:w-[335px] h-[278px] mt-5 md:mt-0">
                    <Image
                      className=""
                      src="/assets/img/Svg/about_hand.svg"
                      alt="hand"
                      width={58}
                      height={58}
                    />
                    <p className="font-Inter font-semibold text-xl !leading-[121%] text-[#2B2B2B] max-w-[217px] mt-4">
                      Leave prospecting to the experts
                    </p>
                    <p className="font-Inter font-normal text-base !leading-[121%] text-[#656463] max-w-[374px] mt-3">
                      Our Fully Managed Outreach Service Delivers A Reliable
                      Flow Of Leads, Reducing Your Cost Per Sale
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end md:items-end">
              <Image
                src="/assets/img/Webp/about_main.webp"
                alt="gotelip"
                width={336}
                height={652}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
