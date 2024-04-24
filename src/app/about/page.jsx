"use client";
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
// import TestimonialSlider from "../components/TestimonialSlider";
import Testimionials from "../components/common/Testimionials";
import EliteSquad from "../components/common/EliteSquad";
// import EliteSquad from "../components/common/EliteSquad";

const page = () => {
  const blogs = [
    { id: 1, src: "/images/articles/article2.png" },
    { id: 2, src: "/images/articles/article3.png" },
    { id: 3, src: "/images/articles/article4.png" },
    { id: 4, src: "/images/articles/article5.png" },
    { id: 5, src: "/images/articles/article6.png" },
    { id: 6, src: "/images/articles/article7.png" },
    { id: 7, src: "/images/articles/article8.png" },
  ];
  const [type, setType] = useState("all");
  const Types = [
    {
      name: "all",
    },
    {
      name: "web Design",
    },
    {
      name: "Webflow",
    },
    {
      name: "culture",
    },
    {
      name: "case studies",
    },

    {
      name: "branding",
    },
    {
      name: "Ui/UX",
    },
  ];
  return (
    <div className="">
      <div className="hero-section md:container mx-auto">
        <div className="lg:flex px-4 py-20  w-[100%]">
          <div className="lg:w-[50%] h-[100%]  flex justify-end items-end">
            <img
              src="/images/Rectangle 39.png"
              className="flex justify-end w-[2000px]  items-end img-fluid object-cover"
            />
          </div>
          <div className="lg:w-[50%] lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl text-justify xl:text-6xl 2xl:text-[90px]  font-bold">
              Inside Our <br className="lg:block hidden" /> Force Field
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl 2xl:text-5xl font-semibold">
              At the end of the day there is <br className="lg:block hidden" />{" "}
              a solution. That is our reach.
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base text-[14px]">
              We’ve got many skills, but we are most proud of our ability to
              DE-STRESS any situation. Infinity Graphics team has been infected
              with this good vibes since 2018. Now we spread it around. We get
              super-excited with original ideas, and every solved problem fires
              us up even more. Minds set on the future, we keep sharpening our
              skills, practicing UI & UX, and mastering tools like Figma and Web
              flow every day.
            </p>
          </div>
        </div>
      </div>
      <div className=" xl:px-32 lg:px-20 px-4 md:container mx-auto">
        <h2 className="sm:font-semibold font-medium sm:text-5xl text-4xl pt-20 sm:pb-10 pb-5 ps-3">
          Working party
        </h2>
        <img src="/images/Rectangle 40.png" className="px-3" />
      </div>
      <div className="xl:px-32 lg:px-20 px-4 sm:py-20 py-10 md:container mx-auto">
        <div className="lg:flex justify-between items-center">
          <h5 className="xl:text-4xl lg:text-3xl sm:text-4xl text-2xl uppercase leading-tight font-medium tracking-tight lg:w-1/2 sm:w-3/5 lg:mb-0 mb-7">
            Unlock the potential of <br className="xl:block hidden" /> your
            business
          </h5>
          <div className="lg:w-1/2 lg:block hidden">
            <img src="/images/Group 58.png" alt="" className="z-10 relative" />
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-3/5 lg:pe-8 lg:-mt-20">
            <div className="bg-black text-white rounded-3xl p-4  5sm:p-8">
              <h5 className="sm:text-4xl text-3xl font-medium pb-10 pt-4 tracking-tight">
                Best Creative Design Agency <br className="xxl:block hidden" />
                <span className="text-[#02ABD5]">Since 2018</span>
              </h5>
              <p className="5sm:ms-10 mb-20">
                Revitalize your brand's essence through our graphic design
                alchemy. We turn concepts into captivating visuals, forging a
                distinctive identity from logos to marketing materials. Immerse
                your brand in our creative ingenuity!
              </p>
              <div className="flex justify-between items-end">
                <h5 className="text-4xl font-semibold text-[#FEFE34]">#1</h5>
                <h6 className="mb-1 flex">
                  <img src="/images/arrow-blue.svg" className="me-2" />
                  ABOUT MORE
                </h6>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 ps-5">
            <ul className="pt-14">
              <li className="text-gray-400 py-3 text-xl flex items-center">
                <img src="/images/Group 55.svg" className="me-3" alt="" />
                Ui/Ux Designing
              </li>
              <li className="text-gray-400 py-3 text-xl flex items-center">
                <img src="/images/Group 55.svg" className="me-3" alt="" />
                Branding
              </li>
              <li className="text-gray-400 py-3 text-xl flex items-center">
                <img src="/images/Group 55.svg" className="me-3" alt="" />
                Graphic Designing
              </li>
              <li className="text-gray-400 py-3 text-xl flex items-center">
                <img src="/images/Group 55.svg" className="me-3" alt="" />
                Motion Graphic Designing
              </li>
            </ul>
            <h5 className="flex items-center fw-medium sm:text-3xl text-2xl pt-7">
              <div className="bg-black rounded-full p-3 me-3">
                <img src="/images/arrow-blue.svg" />
              </div>
              Services We Offer
            </h5>
          </div>
        </div>
      </div>
      <div className="md:container mx-auto sm:flex xl:px-32 lg:px-20 px-10 sm:pb-28 pb-16 pt-8 justify-between xsm:flex-row flex-col items-center gap-5 sm:text-left text-center">
        <div className="flex flex-col items-center">
          <h5 className="xl:text-4xl md:text-3xl text-2xl text-gray-400">
            Completed <br /> Projects
          </h5>
          <h4 className="xl:text-9xl md:text-7xl text-5xl font-semibold pt-2">
            1280+
          </h4>
        </div>
        <div className="sm:my-0 my-10 flex flex-col items-center">
          <h5 className="xl:text-4xl md:text-3xl text-2xl text-gray-400">
            Satisfied <br /> Clients
          </h5>
          <h4 className="xl:text-9xl md:text-7xl text-5xl font-semibold pt-2">
            174+
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="xl:text-4xl md:text-3xl text-2xl text-gray-400">
            Years of <br /> Experience
          </h5>
          <h4 className="xl:text-9xl md:text-7xl text-5xl font-semibold pt-2">
            5+
          </h4>
        </div>
      </div>
      <div className="bg-[#02ABD5] text-white xl:px-32 lg:px-20 px-10 lg:flex items-center">
        {/* <div className="lg:w-1/2 pe-10 lg:py-0 py-14">
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
        </div> */}
        <div className="md:container mx-auto">
          <Testimionials />
        </div>
      </div>
      <div className="md:container mx-auto sm:flex 4sm:flex-row flex-col justify-between xl:px-32 lg:px-20 px-10 py-20">
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
      <div className="overflow-hidden">
        <EliteSquad className={"bg-[#1F1F1F]"} />
      </div>

      <div className="md:container mx-auto xl:px-32 sm:px-2 px-10 pt-20">
        {/* <div className="flex flex-wrap">
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Web Design
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Web Flow
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Business
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Culture
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Case Studies
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            Branding
          </h5>
          <h5 className="sm:text-xl text-sm me-4 uppercase rounded-e-full bg-black text-white sm:px-4 px-3 py-3 my-2">
            UI/UX
          </h5>
        </div> */}
        <div className=" flex items-center flex-wrap gap-[20px] justify-start">
          {Types.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setType(item.name)}
                type="button"
                className={`${spaceGrotesk.className} bg-[#1F1F1F] group rounded-r-[40px] py-[10px] px-[30px] flex items-center justify-center text-[#FFFFFF] text-[23px] font-[400] uppercase `}
              >
                <div className="relative overflow-hidden cursor-default">
                  <span className="inline-block transition-all group-hover:-translate-y-16 group-hover:opacity-0 group-hover:rotate-12 cursor-default ease-in-out duration-500">
                    {item.name}
                  </span>
                  <span className="absolute left-0  translate-y-16 opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-500 group-hover:translate-y-0 inline-block">
                    {item.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <h5 className="text-4xl font-medium py-14 ps-2">OTHER TOPICS</h5>
        <div className="flex flex-wrap">
          {blogs?.map((val, index) => {
            return <BlogCard img={val.src}/>;
          })}
        </div>
      </div>
      {/* <div className="flex justify-between items-start bg-white xl:mx-32 sm:mx-20 mx-10 sm:my-20 my-10">
        <div>
          <h4 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-3xl font-medium py-4 px-3">
            Get In Touch
          </h4>
        </div>
        <img
          src="/images/arrow.svg"
          alt=""
          className="p-4 md:w-[110px] sm:w-[80px] w-[70px]"
        />
      </div> */}
    </div>
  );
};

export default page;
