import React from "react";
import Image from "next/image";
import gotelip from "../../public/assets/img/Svg/got_bg_elip.svg";
import quoteimg from "../../public/assets/img/Webp/quote_img.png";
const Quote = () => {
  return (
    <div className="bg-common-black-bg">
      <div className="container max-w-[1140px] mx-auto px-3">
        <div className=" relative z-10">
          <Image
            className="absolute top-0 left-[-10px] xl:left-[-15px] -z-10"
            src={gotelip}
            alt="gotelip"
          />
          <h2 className=" font-Inter font-normal text-[64px] text-[#f6f6f6] leading-[120%]">
            QUOTE
          </h2>
        </div>
        <div>
          <Image className="w-[104px] h-[97px]" src={quoteimg} alt="quoteimg" />
          <p className=" font-Inter font-semibold text-[20px] leading-[125%] bg-gradient-to-t from-[#FF5269] to-[#ff684d] text-transparent bg-clip-text">
            Esther Howard
          </p>
          <p className=" font-Inter font-normal text-[16px] text-[#b9b9b9] ">
            Marketing Coordinator
          </p>
          <p className=" font-Inter font-normal text-[16px]  text-[#b9b9b9]">
            Hipster Ipsum Tattooed Brunch I'm Baby. Shaman Venmo Sartorial Out
            Celiac Af Beard Sartorial. Trade Shabby Cleanse Actually Chic
            Franzen Freegan. Dsa Shabby Pack Etsy Mumblecore Lyft Letterpress
            Church-Key. Pinterest Dreamcatcher{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
