import Image from "next/image";
import React from "react";
import { Hand } from "./Common/Icons";
import aboutmain from "../../public/assets/img/webp/about_main.webp";

const About = () => {
  return (
    <div id="about" className="bg-common-white-bg relative">
      <Image
        className="absolute w-[95px] h-[95px] bottom-5 xl:bottom-24 left-5 hidden lg:block"
        src="/assets/img/svg/about_circle.svg"
        alt="gotelip"
        width={95}
        height={95}
      />
      <div className="container max-w-[1080px] mx-auto px-3 xl:px-0 z-10">
        <div className="border-black border-r relative">
          <div className="bg-black w-[1px] top-0 left-0 xl:h-[121px] lg:h-[90px] md:h-[55px] h-[45px] absolute"></div>
          <div className="py-12 md:py-[65px] xl:pt-[152px] lg:pt-[100px] md:pb-0 flex flex-col md:flex-row text-center items-center md:items-end md:justify-between md:text-start">
            <div className="z-10">
              <h2 className="font-Inter font-normal xl:text-[64px] lg:text-[58px] md:text-[50px] text-[32px] !leading-[121%] text-black lg:-ml-8">
                <span className="relative">
                  ABOUT{" "}
                  <span>
                    {" "}
                    <Image
                      className="absolute xl:max-w-[74px] w-[30px] md:w-[40px] xl:h-[74px] h-[36px] md:h-[60px] top-1 left-[-10px] xl:-left-4 -z-10"
                      src="/assets/img/svg/got_bg_elip.svg"
                      alt="gotelip"
                      width={44}
                      height={44}
                    />
                  </span>
                </span>{" "}
                US
              </h2>
              <div className="">
                <p className="font-Inter font-normal text-base !leading-[156%] text-[#656463] max-w-[690px] md:max-w-[711px] mt-3 lg:mt-5">
                  Hipster Ipsum Tattooed Brunch I&apos;m Baby. Shaman Venmo
                  Sartorial Out Celiac Af Beard Sartorial. Trade Shabby Cleanse
                  Actually Chic Franzen Freegan. Dsa Shabby Pack Etsy Mumblecore
                  Lyft Letterpress Church-key. Pinterest Dreamcatcher
                  Asymmetrical Vibecession Vegan Neutra Bun Vexillologist. Chips
                  Vape You Diy Locavore Dreamcatcher Mood Edison Kombucha. Kogi
                  Retro Chambray Bird On. Organic Farm-To-Table Iceland
                  Knausgaard Heirloom.
                </p>
                <div className="mt-3 lg:mt-6">
                  <button className="text-white font-Inter font-normal text-base !leading-[121%] py-[18px] px-[39px] bg-black hover:bg-linear-gradient-date duration-300 ease-in-out">
                    CONTACT US
                  </button>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start py-5 md:pb-10 lg:py-[134px]">
                  <div className="border border-black px-3 pb-4 pt-12 md:pt-6 lg:pt-12 w-[335px] md:w-[230px] lg:w-[310px] xl:w-[333px] h-[277px] flex flex-col justify-center items-center md:justify-start md:items-start">
                    <Image
                      className=""
                      src="/assets/img/svg/about_hand.svg"
                      alt="hand"
                      width={58}
                      height={58}
                    />
                    <p className="font-Inter font-semibold text-xl !leading-[121%] text-[#2B2B2B] max-w-[143px] mt-4">
                      Unearth new opportunities
                    </p>
                    <p className="font-Inter font-normal text-base !leading-[121%] text-[#656463] max-w-[296px] mt-3">
                      Speak To Ideal Clients That Are Outside Your Network.
                      Discover New Markets And Grow Your Business
                    </p>
                  </div>
                  <div className="border border-black px-3 pb-4 pt-12 md:pt-6 lg:pt-12 w-[335px] md:w-[230px] lg:w-[310px] xl:w-[333px] h-[277px] flex flex-col justify-center items-center md:justify-start md:items-start mt-5 md:mt-0">
                    <Image
                      src="/assets/img/svg/about_man.svg"
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
            <div className="flex justify-center md:justify-end md:items-end md:translate-x-[2px] h-[500px] md:h-[652px]">
              <Image src={aboutmain} alt="aboutmain" width={336} height={652} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
