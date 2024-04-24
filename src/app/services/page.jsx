import React from "react";
import Services from "../components/services";

const page = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="md:container mx-auto">
      <div className="hero-section">
        <div className="lg:flex xl:px-32 lg:px-20 xsm:px-10 px-4 py-8 ">
          <div className="lg:w-1/2 h-fit lg:pe-4 flex justify-center">
            <img src="/images/services/Rectangle 39.png" />
          </div>
          <div className="lg:w-1/2 lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl xl:text-6xl xxl:text-8xl font-bold">
              What We <br className="lg:block hidden" /> Do
            </h1>
            <h5 className="py-4 xl:py-7 leading-10 text-2xl xl:text-3xl xxl:text-4xl font-semibold">
            Embracing Solutions Within Our Grasp: Unveiling the End-of-Day Resolve
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base">
            Constantly feeling the pulse of the digital world. We offer quality UI design,
            development, branding and more for forward-looking industries. Helping businesses 
            grow and delivering exciting web experience.
            </p>
          </div>
        </div>
      </div>
      <Services />
    </div>
   
  );
};

export default page;
