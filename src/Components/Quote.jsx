"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { PreButton } from "./Common/Icons";
import gotelip from "../../public/assets/img/svg/got_bg_elip.svg";
import quoteimg from "../../public/assets/img/webp/quote_img.webp";
import quotecircleimg from "../../public/assets/img/svg/quote_circle_elip.svg";

const Quote = () => {
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute top-[107%] sm:top-[50%] left-[25%] sm:left-[0%] rotate-[-180deg] z-[10]"
      onClick={onClick}
    >
      <PreButton />
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute top-[107%] sm:top-[50%] right-[25%] sm:right-[0%] z-[10]"
      onClick={onClick}
    >
      <PreButton />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomPrevArrow />,
    prevArrow: <CustomNextArrow />,
  };
  return (
    <>
      <div
        id="quote"
        className="bg-[#2B2B2B] pb-[86px] md:pb-[65px] lg:pb-[100px] xl:pb-[173px] relative overflow-hidden"
      >
        <div>
          <Image
            className="absolute hidden lg:block bottom-[50px] right-[57px] "
            src={quotecircleimg}
            alt="quotecircleimg"
          />
        </div>
        <div className="container max-w-[1100px] mx-auto px-3 relative">
          <div className="absolute left-[5%]  top-0 xl:h-[80px] h-[45px] md:h-[55px] lg:h-[80px] border-l-[1px] border-[#f6f6f6] z-40"></div>
          <div className="xl:mr-9 xl:pt-[96px] pt-12 md:pt-[65px] lg:pt-[96px]">
            <div className=" relative z-10  lg:ms-3">
              <Image
                className="absolute xl:max-w-[74px] w-[30px] md:w-[40px] xl:h-[74px] h-[36px] md:h-[67px] top-0 left-[-10px] xl:left-[-15px] -z-10"
                src={gotelip}
                alt="gotelip"
              />
              <h2 className="font-Inter font-normal xl:text-[64px] lg:text-[58px] md:text-[50px] text-[32px] text-[#f6f6f6] leading-[120%]">
                QUOTE
              </h2>
            </div>
            <Slider {...settings} className="mx-auto">
              <div className="flex items-center  justify-center mt-[29px] flex-col">
                <div className="flex justify-center ">
                  <Image
                    className="w-[104px] h-[97px]"
                    src={quoteimg}
                    alt="quoteimg"
                  />
                </div>
                <p className="font-Inter text-center font-semibold text-[20px] leading-[126%] mt-4 bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text">
                  Esther Howard
                </p>
                <p className="font-Inter font-normal text-[16px] text-center text-[#b9b9b9] leading-[155%]">
                  Marketing Coordinator
                </p>
                <div className="flex justify-center">
                  <p className="font-Inter font-normal text-[16px] text-[#b9b9b9] max-w-[574px] mt-4 text-center leading-[155%]">
                    Hipster Ipsum Tattooed Brunch I&apos;m Baby. Shaman Venmo
                    Sartorial Out Celiac Af Beard Sartorial. Trade Shabby
                    Cleanse Actually Chic Franzen Freegan. Dsa Shabby Pack Etsy
                    Mumblecore Lyft Letterpress Church-Key. Pinterest
                    Dreamcatcher
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-[29px] flex-col">
                <div className="flex justify-center ">
                  <Image
                    className="w-[104px] h-[97px]"
                    src={quoteimg}
                    alt="quoteimg"
                  />
                </div>
                <p className=" font-Inter text-center font-semibold text-[20px] leading-[125%] mt-4 bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text">
                  Esther Howard
                </p>
                <p className="font-Inter font-normal text-[16px] text-center text-[#b9b9b9] leading-[155%]">
                  Marketing Coordinator
                </p>
                <div className="flex justify-center">
                  <p className=" font-Inter font-normal text-[16px]  text-[#b9b9b9] max-w-[574px] mt-4 text-center leading-[155%]">
                    Hipster Ipsum Tattooed Brunch I&apos;m Baby. Shaman Venmo
                    Sartorial Out Celiac Af Beard Sartorial. Trade Shabby
                    Cleanse Actually Chic Franzen Freegan. Dsa Shabby Pack Etsy
                    Mumblecore Lyft Letterpress Church-Key. Pinterest
                    Dreamcatcher
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
