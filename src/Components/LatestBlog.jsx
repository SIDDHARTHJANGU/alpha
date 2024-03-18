import React from "react";
import Image from "next/image";
import businessimg from "../../public/assets/img/Webp/business.png";
import planimg from "../../public/assets/img/Webp/plan.png";
import braniimg from "../../public/assets/img/Webp/brainstorm.png";
import gotelip from "../../public/assets/img/Svg/got_bg_elip.svg";
const LatestBlog = () => {
  return (
    <div>
      <div className="container max-w-[1140px] mx-auto px-0 border-r-[#2b2b2b] border-[2px]">
        <div className=" relative">
          <Image
            className=" absolute top-0 left-[-10px] xl:left-[-15px] -z-10"
            src={gotelip}
            alt="gotelip"
          />
          <h2 className=" font-Inter font-normal text-[64px] text-black leading-[120%]">
            LATEST BLOG
          </h2>
        </div>
        <div className=" flex pt-14 pb-[125px]">
          <div className=" border-[1.9px] border-[#2b2b2b] pt-3 px-3 pb-[52px]">
            <Image
              className=" w-[360px] h-[237px]"
              src={businessimg}
              alt="businessimg"
            />
          </div>
          <div className=" border-[1.9px] border-[#2b2b2b] pt-3 px-3 pb-[52px]">
            <Image
              className=" w-[360px] h-[237px]"
              src={planimg}
              alt="planimg"
            />
          </div>
          <div className=" border-[1.9px] border-[#2b2b2b] pt-3 px-3 pb-[52px]">
            <Image
              className=" w-[360px] h-[237px]"
              src={braniimg}
              alt="braniimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
