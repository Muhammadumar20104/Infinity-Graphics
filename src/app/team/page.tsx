"use client";
import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import EliteSquad from "../components/common/EliteSquad";
import Testimionials from "../components/common/Testimionials";

const Teampage = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="">
      <div className="hero-section md:container mx-auto">
        <div className="lg:flex xl:px-32 lg:px-20 px-10 py-20 font-spaceGrotesk">
          <div className="lg:w-1/2  flex justify-center">
            <img src="/images/team.png" />
          </div>
          <div className="lg:w-1/2 lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl xl:text-6xl xll:text-8xl font-bold">
              Our Team
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl xxl:text-4xl font-semibold">
            Meet the Creatives: Unveiling Our Infinity Graphic Team
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
            You can get to know the talented individuals who bring creativity, passion, and 
            expertise to every project we undertake. Here, we introduce you to the diverse 
            and dynamic team behind our success, highlighting their skills, experiences, and 
            contributions to our collective vision.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="bg-white text-black py-20">
        <div className="lg:flex">
          <div className="lg:w-1/3"></div>
          <h4 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl lg:-ms-10 lg:px-0 md:px-20 px-10 lg:w-1/3 uppercase leading-tight">
            The Elite <br className="lg:block hidden" /> sAquad{" "}
            <br className="lg:block hidden" /> Of{" "}
            <br className="lg:block hidden" /> Builders
          </h4>
          <div className="xxl:-ms-10 ms-10 lg:w-1/3 xxl:pe-32 lg:pe-10 ">
            <div className="flex justify-center xl:pe-44 lg:pe-20 lg:mt-0 mt-5">
              <img
                src="/images/Vector.png"
                alt=""
                className="lg:w-[110px] w-[80px]"
              />
            </div>
            <p className="text-lg lg:pt-20 pt-10 lg:pb-0 pb-16 leading-8 lg:text-left text-center">
              We are a group of passionate <br /> creators spread across the
              globe, <br />
              united by a singular purpose. JUST <br /> GREAT WORK
            </p>
          </div>
        </div>
        <img
          src="/images/Group 56.png"
          alt=""
          className="xl:px-32 lg:px-20 px-10 sm:-mt-32 -mt-20"
        />
      </div> */}
      <div className="">
        <EliteSquad className={" bg-[#e3eeec]"} txtcol={"text-black"} pcol={"text-black"}/>
      </div>

      <div className="md:container  mx-auto sm:flex 4sm:flex-row flex-col justify-between xl:px-32 lg:px-20 px-10 py-20">
        <div>
          <h5 className="md:text-4xl text-3xl font-medium pb-5 tracking-tight">
            WANT TO JUMP ON BOARD?
          </h5>
          <h4 className="xl:text-9xl lg:text-8xl md:text-6xl text-5xl font-medium pt-2 tracking-tighter">
            Check Out <br className="sm:block hidden" /> Open Positions
          </h4>
        </div>
        <img
          src="/images/arrow.svg"
          alt=""
          className="lg:w-[170px] w-[120px] sm:mx-0 mx-auto sm:mt-0 mt-7"
        />
      </div>

      {/* <div className="bg-[#02ABD5] ">
        <div className="md:container mx-auto  text-white xl:px-32 lg:px-20 px-10 lg:flex items-center">
        <div className="lg:w-1/2 pe-10 lg:py-0 py-14 ">
          <h5 className="text-4xl font-medium capitalize pb-5 leading-tight tracking-tight">
            What our Customers <br /> have to say!
          </h5>
          <p>
            Client voices, our pride. Discover firsthand experiences as our
            clients share stories of exceptional service, creativity that
            exceeds expectations, and partnerships that define success. Real
            testimonials, real satisfaction – your success, our story.
          </p>
          <div className="flex sm:pt-16 pt-10">
            <div className="me-14">
              <h5 className="text-2xl font-bold">73+</h5>
              <p>Full 5 Star Reviews</p>
            </div>
            <div>
              <h5 className="text-2xl font-bold">4.9</h5>
              <p>Out of 5 Average Rating</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 ">
          <TestimonialSlider />
        </div>
        </div>
      </div> */}
      <div>
        <Testimionials/>
      </div>

     
    </div>
   
  );
};

export default Teampage;
