import React from "react";
import footerlogo from "../../public/assets/img/svg/footer_logo.svg";
import Image from "next/image";
import { Facebook, Instagram, LinkeDin } from "./Common/Icons";
import footer_bg_img from "../../public/assets/img/webp/footer_img.webp";

export const MyFooter = () => {
  return (
    <div className="bg-common-dark-black-bg relative">
      <div>
        <Image
          className="absolute top-0 left-0 max-w-[293px] w-full"
          src={footer_bg_img}
          alt="footer_bg_img"
          width={293}
          height={63}
        />
      </div>
      <div className="container max-w-[1100px] mx-auto px-3">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-center sm:justify-between items-center pt-[130px] md:pt-[229px] pb-6">
          <div>
            <Image src={footerlogo} alt="logo" width={207} height={63} />
          </div>
          <ul className="flex gap-[18px]">
            <li>
              <a
                href="#about"
                className="font-normal font-Inter text-[16px] text-[#b6b6b6] hover:text-white duration-300 transition-all ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="font-normal font-Inter text-[16px] text-[#b6b6b6] hover:text-white duration-300 transition-all ease-in-out"
              >
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-normal font-Inter text-[16px] text-[#b6b6b6] hover:text-white duration-300 transition-all ease-in-out"
              >
                Services
              </a>
            </li>
          </ul>
          <div className="flex gap-4">
            <a
              className=" hover:translate-y-[-5px] duration-300"
              href="https://www.linkedin.com/feed/"
            >
              <LinkeDin />
            </a>
            <a
              className=" hover:translate-y-[-5px] duration-300"
              href="https://www.facebook.com/"
            >
              <Facebook />
            </a>
            <a
              className=" hover:translate-y-[-5px] duration-300"
              href="https://www.instagram.com/?hl=en"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <p className="py-[19px] text-center font-Inter font-normal footer_line text-[16px] text-[#b6b6b6] border-t-[1px] border-[#bbbbbb]">
          @copyright2024
        </p>
      </div>
    </div>
  );
};

export default MyFooter;
