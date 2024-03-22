import React from "react";
import gotelip from "../../public/assets/img/svg/got_bg_elip.svg";
import grafimg from "../../public/assets/img/webp/graf_img.webp";
import triangleelip from "../../public/assets/img/svg/triangle_elip.svg";
import fivecircle from "../../public/assets/img/svg/five_circle.svg";
import Image from "next/image";

const OurWork = () => {
  return (
    <div className="relative">
      <div>
        <Image
          className="absolute bottom-[35px] hidden lg:block left-[35px] -z-10"
          src={triangleelip}
          alt="triangleelip"
        />
        <Image
          className="absolute top-[19%] right-[80px] hidden xl:block -z-10"
          src={fivecircle}
          alt="fivecircle"
        />
      </div>
      <div className="container max-w-[1100px] mx-auto px-3 relative">
        <div className="absolute left-[5%]  top-0 xl:h-[230px] lg:h-[90px] md:h-[55px] h-[45px] border-l-[1px] border-[#2b2b2b] z-40"></div>
        <div className="xl:pt-[245px] pt-12 md:pt-[65px] md:pb-[65px] xl:pb-[133px] lg:pb-[100px] lg:pt-[100px] pb-12 border-r-[1px] border-[#2B2B2B]">
          <div className="relative lg:ms-3">
            <Image
              className="absolute xl:max-w-[74px] w-[30px] md:w-[40px] xl:h-[74px] h-[36px] md:h-[67px]  top-0 left-[-10px] xl:left-[-15px] -z-10"
              src={gotelip}
              alt="gotelip"
            />
            <h2 className="font-Inter font-normal xl:text-[64px] lg:text-[58px] md:text-[50px] text-[32px] text-[#2b2b2b] leading-[120%]">
              OUR WORK
            </h2>
          </div>
          <div className="flex xl:justify-between lg:gap-6 flex-col lg:flex-row justify-center items-center">
            <div className="mt-[50px]">
              <div className="flex flex-col sm:flex-row">
                <div class="relative border-[1px] border-[#2b2b2b] py-[46px] px-4 xl:max-w-[284px] md:max-w-[370px] lg:max-w-[330px] sm:max-w-[450px] w-full">
                  <div>
                    <p className="font-Inter font-semibold text-[20px] leading-[120%] text-[#2b2b2b]">
                      Live Results
                    </p>
                    <p className=" text-[#656463] font-Inter font-normal text-[16px] mt-3">
                      Speak To Ideal Clients That Are Outside Your Network.
                      Discover New Markets And Grow Your
                    </p>
                  </div>
                  <h2 class="absolute flex top-0 left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white font-Inter font-normal text-[#2b2b2b] text-[40px] leading-[120%] ">
                      01
                    </span>
                  </h2>
                </div>
                <div class="relative border-[1px] border-[#2b2b2b] py-[46px] px-4 xl:max-w-[284px] md:max-w-[370px] lg:max-w-[330px] sm:max-w-[450px] w-full">
                  <div className=" ">
                    <p className="font-Inter font-semibold text-[#2b2b2b] text-[20px] leading-[120%]">
                      ENGIE Impact
                    </p>
                    <p className="text-[#656463] font-Inter font-normal text-[16px] mt-3">
                      Speak To Ideal Clients That Are Outside Your Network.
                      Discover New Markets And Grow Your
                    </p>
                  </div>
                  <h2 class="absolute flex top-0 left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white font-Inter text-[#2b2b2b] font-normal text-[40px] leading-[120%]">
                      02
                    </span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div class="relative border-[1px] border-[#2b2b2b] py-[46px] px-4 xl:max-w-[284px] md:max-w-[370px] lg:max-w-[330px] sm:max-w-[450px] w-full">
                  <div>
                    <p className="font-Inter font-semibold text-[20px] leading-[120%] text-[#2b2b2b]">
                      GridBeyond
                    </p>
                    <p className="text-[#656463] font-Inter font-normal text-[16px] mt-3">
                      Speak To Ideal Clients That Are Outside Your Network.
                      Discover New Markets And Grow Your
                    </p>
                  </div>
                  <h2 class="absolute flex top-0 left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white font-Inter font-normal text-[#2b2b2b] text-[40px] leading-[120%]">
                      03
                    </span>
                  </h2>
                </div>
                <div class="relative border-[1px] border-[#2b2b2b] py-[46px] px-4 xl:max-w-[284px] md:max-w-[370px] lg:max-w-[330px] sm:max-w-[450px] w-full">
                  <div className=" ">
                    <p className="font-Inter text-[#2b2b2b] font-semibold text-[20px] leading-[120%]">
                      Energy Management
                    </p>
                    <p className="text-[#656463] font-Inter font-normal text-[16px] mt-3">
                      Speak To Ideal Clients That Are Outside Your Network.
                      Discover New Markets And Grow Your
                    </p>
                  </div>
                  <h2 class="absolute flex top-0 left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white font-Inter font-normal text-[#2b2b2b] text-[40px] leading-[120%]">
                      04
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <Image
                className="max-w-[459px] w-full lg:min-h-[550px] mt-6 lg:mt-0"
                src={grafimg}
                alt="grafimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
