"use client";
//ts nocheck
import React from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, inView } from "framer-motion";

import { motion } from "framer-motion";
import { animate } from "framer-motion";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
function ServicesArea() {
  const [index, setIndex] = React.useState(0);
  const boxref = React.useRef(null);

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
      className="bg-[#1F1F1F] pt-[124px] pb-[120px]"
    >
      <div className="max-w-[1440px] px-5 sm:px-[30px]  mx-auto">
        <div className="flex lg:justify-between xsm:items-start max-lg:flex-col sm:items-center">
          <div className="flex xsm:flex-row sm:flex-col justify-center items-start gap-[10px] sm:gap-[20px] sm:items-center">
            <h4
              id="box"
              className={`font-spaceGrotesk  md:text-[44px] xsm:text-[36.5px] sm:text-[30px] text-white font-[500] uppercase`}
            >
              Our Project Area
            </h4>
            <div
              className={`font-spaceGrotesk group rounded-[36px] bg-[#02ABD5] text-[30px] sm:text-[44px] px-[28px] py-[4px] font-[400]`}
            >
              <div className="relative overflow-hidden cursor-default">
                <span className="inline-block transition-all group-hover:-translate-y-16 group-hover:opacity-0 group-hover:rotate-12 cursor-default ease-in-out duration-500">
                  Works
                </span>
                <span className="absolute text-white left-[50%] translate-x-[-50%] translate-y-16 opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-500 group-hover:translate-y-0 inline-block">
                  Works
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#242424] rounded-[50px] mt-[40px] sm:mt-[84px] border border-[#FFFFFF1A] p-[20px] sm:p-[30px]">
          <div>
            <div
              onMouseEnter={() => setIndex(0)}
              className="flex group max-lg:flex-col relative justify-start py-[20px] sm:py-[50px] items-start"
            >
              <h5
                className={`font-spaceGrotesk lg:w-[45%] text-[30px] ${
                  index == 0 ? "text-[#00FF9C]" : "text-[#FFFFFF]"
                } sm:text-[40px] font-[500]`}
              >
                Graphic Designing
              </h5>
              <p className="lg:w-[596px] text-[#FFFFFF59] text-[18px] font-[400]">
                {`Revitalize your brand's essence through our graphic design alchemy.
We turn concepts into captivating visuals, forging a distinctive identity
from logos to marketing materials. Immerse your brand in our creative
ingenuity!`}
              </p>
              <Image
                className={`${
                  index == 0
                    ? "hidden lg:block opacity-100 translate-y-[-25%] transition-all duration-1000 ease-in-out"
                    : "opacity-0 translate-y-[-15%]"
                } z-[999] absolute rotate-[-18.969deg] z-444 rounded-[25px] top-[50%] left-[50%] translate-x-[-10%]`}
                src="/assets/hover1.jpg"
                alt="arrow"
                width={432}
                height={540}
              />
            </div>
            <div
              onMouseEnter={() => setIndex(1)}
              className=" group max-lg:flex-col relative flex justify-start py-[20px] sm:py-[50px]  border-b border-[#FFFFFF1A] border-t items-start"
            >
              <h5
                className={`font-spaceGrotesk lg:w-[45%] text-[30px] sm:text-[40px] ${
                  index == 1 ? "text-[#00FF9C]" : "text-[#FFFFFF]"
                } font-[500]`}
              >
                UI/UX Designing
              </h5>
              <p className="lg:w-[596px] text-[#FFFFFF59] text-[18px] font-[400]">
                {`Elevate your brand with our graphic design magic. From logos to marketing materials, we bring your vision to life with creativity and flair. Unleash the power of visual impact!`}
              </p>
              <Image
                className={`${
                  index == 1
                    ? "hidden lg:block opacity-100 translate-y-[-50%] transition-all duration-1000 ease-in-out"
                    : "opacity-0 translate-y-[-40%]"
                } z-[999] absolute rotate-[-18.969deg] z-444 rounded-[25px] top-[50%] left-[50%] translate-x-[-10%]`}
                src="/assets/hover2.jpg"
                alt="arrow"
                width={432}
                height={540}
              />
            </div>
            <div
              onMouseEnter={() => setIndex(2)}
              className="group max-lg:flex-col relative flex justify-start py-[20px] sm:py-[50px]  border-b border-[#FFFFFF1A] items-start"
            >
              <h5
                className={`font-spaceGrotesk lg:w-[45%] text-[30px] ${
                  index == 2 ? "text-[#00FF9C]" : "text-[#FFFFFF]"
                } sm:text-[40px] font-[500]`}
              >
                Branding
              </h5>
              <p className="lg:w-[596px] text-[#FFFFFF59] text-[18px] font-[400]">
                {`Crafting identities that resonate. Our branding designs are more than visuals; they're stories told in color, shape, and emotion. Elevate your brand's narrative with our unique blend of creativity and strategy. Stand out, be remembered.`}
              </p>
              <Image
                className={`${
                  index == 2
                    ? "hidden lg:block opacity-100 translate-y-[-50%] transition-all duration-1000 ease-in-out"
                    : "translate-y-[-40%] opacity-0"
                } z-[999] absolute z-444 rotate-[-18.969deg] rounded-[25px] top-[50%] left-[50%] translate-x-[-10%]`}
                src="/assets/hover3.jpg"
                alt="arrow"
                width={432}
                height={540}
              />
            </div>
            <div
              onMouseEnter={() => setIndex(3)}
              className="group max-lg:flex-col relative flex justify-start py-[20px] sm:py-[50px] items-start"
            >
              <h5
                className={`font-spaceGrotesk lg:w-[45%] text-[30px] ${
                  index == 3 ? "text-[#00FF9C]" : "text-[#FFFFFF]"
                } sm:text-[40px] font-[500]`}
              >
                Motion Graphic Designing
              </h5>
              <p className="lg:w-[596px] text-[#FFFFFF59] text-[18px] font-[400]">
                {`Bring your ideas to life with our motion graphic design expertise. We merge creativity and motion to tell compelling stories, making your brand dynamic and unforgettable. Elevate your visual content and captivate your audience with our seamless animation magic.`}
              </p>
              <Image
                className={`${
                  index == 3
                    ? "hidden lg:block opacity-100 translate-y-[-60%]  transition-all duration-1000  ease-in-out"
                    : "translate-y-[-50%] opacity-0"
                } z-[999] absolute rotate-[-18.969deg] z-444 rounded-[25px] top-[20%] left-[50%]  translate-x-[-10%]`}
                src="/assets/hover4.jpg"
                alt="arrow"
                width={432}
                height={540}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesArea;
