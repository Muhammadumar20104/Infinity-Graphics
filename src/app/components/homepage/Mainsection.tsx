"use client";
import React from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
import Marquee from "react-fast-marquee";
function Mainsection() {
  return (
    <div className="sm:pt-[85px] pt-[30px] pb-[30px] px-3 lg:pb-[175px] z-1 relative ">
      <Image
        src="/assets/line-right.png"
        className="absolute right-0 top-[30%] z-[-1] translate-y-[-50%]"
        width={1440}
        height={600}
        alt=""
      />
      <div
        draggable
        className="flex md:px-[30px] xmd:flex-row sm:flex-col  2xl:px-0 justify-around container max-w-[1440px] sm:gap-[40px] gap-[20px] max-sm:flex-col mx-auto items-center"
      >
        <h1
          draggable
          className={`font-spaceGrotesk 2xl:text-[160px]  lg:text-[130px] 5sm:text-[100px] text-5xl 5sm:font-normal sm:font-medium leading-[100%] 5sm:tracking-[-5.4px] tracking-wider `}
        >
          Crafting
        </h1>
        <div className="flex justify-center overflow-hidden 5sm:w-[45%] w-[60%] bg-[#02ABD5] rounded-[150px] items-center">
          <Marquee speed={100}>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className="max-lg:w-[25px] w-[45px]"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] text-[60px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                brands
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="max-lg:w-[25px] w-[45px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] text-[60px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                brands
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="max-lg:w-[25px] w-[45px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] text-[60px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                brands
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="max-lg:w-[25px] w-[45px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] md:text-[80px] text-[60px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                brands
              </span>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="flex md:px-[30px]  2xl:px-0 xmd:flex-row sm:flex-col   max-w-[1440px] mx-auto justify-around container gap-[20px] sm:py-[30px] items-center ">
        <h1
          className={`font-spaceGrotesk  2xl:text-[160px]  xlg:text-[140px] slg:text-[130px] lg:text-[120px] xmd:text-[100px] 5sm:text-[100px] sm:text-5xl sm:font-medium 5sm:font-normal  5sm:tracking-[-5.4px] leading-[190px]  `}
        >
          and digital
        </h1>
        <div className=" hidden sm:flex container sm:w-[300px] md:w-[350px] 2xl:w-[518px] tracking-[0.11px] text-[#767676] justify-center items-center">
          <p className="font-[400] z-[-1] leading-[160%] w-[400px] text-[18px] lg:text-[22px]">
            We design exceptional brands, products, web apps, mobile apps,
            websites for startups and enterprises.
          </p>
        </div>
      </div>
      <div className="max-sm:flex-col-reverse  sm:flex-col xmd:flex-row flex max-w-[1440px] container sm:px-[30px] mx-auto justify-center xl:justify-around gap-[48px] items-center">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="flex items-center justify-center gap-[10px]"
        >
          <div className="relative">
  <Image
    src="/assets/header3rdlogo.png"
    width={180}
    height={168}
    className="max-lg:w-[100px]"
    alt=""
  />
  <Image
    src="/images/arrow-blue.svg"
    width={80}
    height={168}
    className="lg:w-[70px] xmd:w-[40px] sm:w-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    alt=""
  />
</div>
          <div className=" sm:hidden sm:w-[400px] tracking-[0.11px] text-[#767676] flex justify-center items-center">
            <p className="font-[400] leading-[160%] text-[16px] md:text-[22px]">
              We design exceptional brands, products, web apps, mobile apps,
              websites for startups and enterprises.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1200"
          className="flex  ms:w-full justify-center 5sm:w-[70%] w-[90%] bg-[#00C0CC] rounded-[150px] items-center"
        >
          <Marquee speed={100}>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="max-lg:w-[25px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] text-[70px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                Experience
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="max-lg:w-[25px] w-[45px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] text-[70px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                Experience
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                className="max-lg:w-[25px] w-[45px]"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] text-[70px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                Experience
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] px-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="max-lg:w-[25px] w-[45px]"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30.0053 0C28.3676 0 26.7323 0.994929 26.2753 2.97527L21.8971 21.9001L2.97074 26.2674C-0.990247 27.1814 -0.990247 32.8234 2.97074 33.7374L21.8971 38.1047L26.2753 57.0295C27.1894 60.9902 32.8212 60.9902 33.7353 57.0295L38.1029 38.1047L57.0293 33.7374C60.9902 32.8234 60.9902 27.1814 57.0293 26.2674L38.1029 21.9001L33.7353 2.97527C33.2783 0.994929 31.643 0 30.0053 0Z"
                  fill="white"
                />
              </svg>
              <span
                className={`${spaceGrotesk.className} 2xl:text-[140px] xl:text-[120px] lg:text-[100px] text-[70px] font-[400] text-white leading-normal tracking-[-5.4px]`}
              >
                Experience
              </span>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Mainsection;
