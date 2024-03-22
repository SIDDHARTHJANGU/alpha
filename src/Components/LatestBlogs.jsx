import React from "react";
import Image from "next/image";
import businessimg from "../../public/assets/img/webp/business.webp";
import planimg from "../../public/assets/img/webp/plan.webp";
import braniimg from "../../public/assets/img/webp/brainstorm.webp";
import gotelip from "../../public/assets/img/svg/got_bg_elip.svg";
import latesttopelip from "../../public/assets/img/svg/latest_blog_top_elip.svg";
import latestbottomelip from "../../public/assets/img/svg/latest_blog_bottom_elip.svg";

const LatestBlogs = () => {
  return (
    <div id="latest" className="bg-[#eceae7] relative">
      <div>
        <Image
          className="absolute top-[38%] w-[64px] h-[82px] hidden md:block left-[28px]"
          src={latesttopelip}
          alt="latesttopelip"
        />
        <Image
          className="absolute bottom-[9%] lg:bottom-3 hidden sm:block xl:w-[66px] xl:h-[98px] lg:w-[65px] lg:h-[65px] right-[28px]"
          src={latestbottomelip}
          alt="latestbottomelip"
        />
      </div>
      <div className="container max-w-[1100px] mx-auto px-3  relative ">
        <div className="absolute left-[5%]  top-0 xl:h-[148px] lg:h-[90px] md:h-[55px] h-[45px] border-l-[1px] border-[#2b2b2b] z-40"></div>
        <div className="sm:border-r-[1px]  xl:pt-[171px] lg:py-[100px] py-[48px] md:py-[65px] xl:pb-[223px] flex flex-col justify-center items-center lg:items-start border-[#2B2B2B]">
          <div className="relative z-10 ms-3">
            <Image
              className="absolute xl:max-w-[74px] w-[30px] md:w-[40px] xl:h-[74px] h-[36px] md:h-[67px] top-0 left-[-10px] xl:left-[-15px] -z-10"
              src={gotelip}
              alt="gotelip"
            />
            <h2 className="font-Inter font-normal xl:text-[64px] lg:text-[58px] md:text-[50px] text-[32px] text-[#2b2b2b] leading-[120%]">
              LATEST BLOG
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-[55px] justify-center items-center">
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center min-[992px]:justify-end  md:px-2 lg:px-0 min-[992px]:pr-[10px] lg:pr-[0px]">
              <div className="px-[13px]  pt-[13px] pb-[52px] group cursor-pointer border-[1px] border-[#2B2B2B] relative max-w-[365.73px] flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-date transition-all duration-300 ease-in-out bg-[#2B2B2B] font-Inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src={businessimg}
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-[#2B2B2B] absolute transition-all duration-300 ease-out left-5 min-[1000px]:left-[2px] min-[1030px]:left-6 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[20px] max-w-[290.47px] pr-[30px]">
                    <h3 className="font-semibold text-[20px] font-Inter text-white">
                      Esther Howard
                    </h3>
                    <p className="text-[16px] text-[#b9b9b9] font-Inter font-normal leading-[160%]">
                      Hipster Ipsum Tattooed Brunch I&apos;m Baby. Shaman Venmo
                      Sartorial Out Celiac Af Beard Sartorial.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center md:px-2 lg:px-0 min-[992px]:justify-start">
              <div className="px-[13px] mt-4 sm:mt-0 pt-[13px] pb-[52px] group cursor-pointer border-[1px] lg:border-l-[0px] max-w-[365.73px] lg:border-r-[0px] border-[#2B2B2B] relative flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-date transition-all duration-300 ease-in-out bg-[#2B2B2B] font-Inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src={planimg}
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-[#2B2B2B] absolute transition-all duration-300 ease-out left-5 min-[1000px]:left-[2px] min-[1030px]:left-6 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[20px] max-w-[290.47px] pr-[30px]">
                    <h3 className="font-semibold text-[20px] font-Inter text-white">
                      Esther Howard
                    </h3>
                    <p className="text-[16px] text-[#b9b9b9] font-Inter font-normal leading-[160%]">
                      Hipster Ipsum Tattooed Brunch I&apos;m Baby. Shaman Venmo
                      Sartorial Out Celiac Af Beard Sartorial.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-4/12 flex justify-center md:px-2 lg:px-0">
              <div className="px-[13px] mt-4 pt-[13px] pb-[52px] lg:mt-0 group cursor-pointer border-[1px] lg:border-r-[0px] max-w-[365.73px] border-[#2B2B2B] relative flex justify-center">
                <div className="relative overflow-hidden group-hover:overflow-visible">
                  <p className="text-[#F6F6F6] text-[14px] font-normal px-[6px] py-[1px] rounded-[2px] group-hover:bg-linear-gradient-date transition-all duration-300 ease-in-out bg-[#2B2B2B] font-Inter absolute right-[5px] top-[5px]">
                    2/7/2024
                  </p>
                  <Image
                    src={braniimg}
                    width={338.2}
                    height={237.52}
                    alt="business"
                  />
                  <div className="bg-[#2B2B2B] absolute transition-all duration-300 ease-out left-5 min-[1000px]:left-[2px] min-[1030px]:left-6 top-[100%] group-hover:top-[52%] lg:group-hover:top-[90%] pt-[20px] pl-[13px] pb-[20px] max-w-[290.47px] pr-[30px]">
                    <h3 className="font-semibold text-[20px] font-Inter text-white">
                      Esther Howard
                    </h3>
                    <p className="text-[16px] text-[#b9b9b9] font-Inter font-normal leading-[160%]">
                      Hipster Ipsum Tattooed Brunch I&apos;m Baby. Shaman Venmo
                      Sartorial Out Celiac Af Beard Sartorial.{" "}
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

export default LatestBlogs;
