import React from "react";
import Image from "next/image";
import gotelip from "../../public/assets/img/Svg/got_bg_elip.svg";
import gotsecimg from "../../public/assets/img/Webp/got_sec_img.png";
import alphaelip from "../../public/assets/img/Svg/alpha_ellips.svg";

const GotAQuestion = () => {
  return (
    <div className=" bg-common-black-bg xl:pt-[96px] pt-12 z-30 relative ">
      <div>
        <Image
          className="absolute top-0 lg:h-[95%] md:h-[95%] h-[35%] xl:h-[100%] left-0 -z-10"
          src={alphaelip}
          alt="alphaelip"
        />
      </div>
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className="flex  flex-col md:flex-row  justify-evenly xl:gap-[86px]">
          <div>
            <div className="relative z-40 ms-3 xl:ms-[15px]">
              <Image
                className=" w-[6%] absolute top-0 left-[-10px] xl:left-[-15px] -z-10"
                src={gotelip}
                alt="gotelip"
              />
              <h2 className=" font-Inter font-normal text-[31px] lg:text-[50px] xl:text-[64px] text-white leading-[121%] ">
                GOT A QUESTION?
              </h2>
              <p className=" font-Inter font-normal text-[31px] lg:text-[50px] xl:text-[64px] text-white leading-[121%] mt-3">
                GET YOUR{" "}
                <span className="bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text">
                  ANSWER
                </span>{" "}
              </p>
            </div>
            <div>
              <textarea
                class="form_anything outline-none text-[#b9b9b9] bg-transparent border-[1px] border-[#b9b9b9] max-w-[592px] w-full pt-[18px] px-[25px] pb-[57px] lg:mt-12 mt-6"
                type="message"
                required=""
                name="message"
                placeholder="How We Can Help ?"
              ></textarea>
            </div>
            <button className=" font-semibold text-[16px] font-Inter text-white py-[15.5px] px-[38.4px] bg-[linear-gradient(0deg,#ff5269_-50%,#ff684d_100%)] lg:mt-12 mt-6">
              SEND MESSAGE
            </button>
          </div>
          <div>
            <Image
              className="md:translate-y-[20%] md:mt-[-40px] pb-12 mt-6 z-50 xl:max-w-[376px] md:h-[500px] lg:h-[550px] w-full xl:h-[605px]"
              src={gotsecimg}
              alt="gotsecimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotAQuestion;