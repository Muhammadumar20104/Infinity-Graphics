import React from "react";

const Service = () => {
  return (
   <div className="md:container mx-auto">
     <div className="xl:px-32 lg:px-20 px-4 font-spaceGrotesk">
        <p className="sm:font-semibold font-medium sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 ps-3">
        Learning as much as we can about client, products, and target audience through resources and meetings.
        </p>
        <img src="/images//services/Rectangle 50.png" className="px-3" />
      </div>
      <div className="xl:px-32 lg:px-20 px-4 sm:py-20 py-10">
        <div className="flex justify-start fw-medium sm:text-3xl text-2xl pt-7">
          <img className="me-2 w-3 h-3 flex mt-3"src="/images/services/Ellipse 6.png" />
          <h3 className="space-grotesk text-3xl uppercase font-medium text-left">Methods</h3> 
        </div>

        <div className="lg:flex justify-between items-center mt-5">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <h5 className="xl:text-5xl font-spaceGrotesk lg:text-3xl sm:text-4xl text-2xl uppercase leading-tight font-medium tracking-tight lg:mb-0 mb-7">
            Online and Offline Resources
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base font-inter">
            We use online tools, platforms, media and statistics to learn about client’s 
            industry, brand, competitors and target audience
            </p>
          </div>
          <div className="lg:w-1/2 lg:pe-4 flex justify-center">
            <img src="/images/services/Rectangle 51.png" alt="" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col  justify-between items-center">
          <div className="lg:w-1/2 flex justify-center lg:order-1 order-2">
            <img src="/images/services/Rectangle 51.png" alt="" className="z-10 relative" />
          </div>
          <div className="lg:w-1/2 lg:ps-20 ps-2 pt-7 lg:pt-4 lg:order-2 order-1 mb-4 lg:mb-0">
            <h5 className=" xl:text-5xl font-spaceGrotesk lg:text-3xl sm:text-4xl text-2xl uppercase leading-tight font-medium tracking-tight lg:w-full sm:w-3/5 lg:mb-0 mb-7">
            Client Meetings
            </h5>
            <p className="text-gray-400 leading-5 pe-8 text-base font-inter">
            We talk face-to-face to our clients to learn about their branding, behaviour, 
            goals, preferences and dig problems we need to solve with design.
            </p>
          </div>
        </div>
        
      </div>
    
   </div>
  );
};

export default Service;
