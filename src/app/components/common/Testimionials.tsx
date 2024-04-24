"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
const Reviews = [
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220452/pexels-photo-220452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220451/pexels-photo-220451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220454/pexels-photo-220454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
  {
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/220455/pexels-photo-220455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    review:
      "Absolutely thrilled with the graphic designs provided by Infinity Graphic Solutions. The creativity and attention to detail exceeded our expectations. Our brand has never looked better, and the seamless collaboration made the entire process a pleasure. Highly recommend for anyone seeking top-notch graphic design services",
    type: "Programmer Analyst",
  },
];
function Testimionials() {
  const settings = {
    className: "center",
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerPadding: "60px",
    slidesToShow: 3,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <div className="bg-[#02ABD5]">
      <div className="md:container  xmd:h-[705px] h-[1300px] flex xmd:flex-row sm:flex-col items-center justify-between gap-[66px] overflow-y-hidden md:px-[30px] mx-auto ">
        <div className="xmd:w-[40%] w-[100%]  mt-10">
          <h2 className="flex flex-wrap text-[#FFFFFF] font-[500] text-[44px] ">
            What our Customers have to say!
          </h2>
          <p className="text-[#ffffffbe] font-[400] text-[18px] w-fit flex flex-wrap">
            Client voices, our pride. Discover firsthand experiences as our
            clients share stories of exceptional service, creativity that
            exceeds expectations, and partnerships that define success. Real
            testimonials, real satisfaction – your success, our story.
          </p>

          <div className="flex items-center md:flex-row flex-col justify-start gap-[60px] mt-[80px]">
            <div>
              <h5 className="text-[#FFFFFF] font-[500] text-[38px] font-spaceGrotesk">
                73+
              </h5>
              <p className="text-[#FFFFFF] font-spaceGrotesk tracking-[-0.66px] font-[22px]">
                Full 5 Star Reviews
              </p>
            </div>
            <div>
              <h5 className="text-[#FFFFFF] font-[500] text-[38px] font-spaceGrotesk">
                4.9
              </h5>
              <p className="text-[#FFFFFF] font-spaceGrotesk tracking-[-0.66px] font-[22px]">
                Out of 5 Average Rating
              </p>
            </div>
          </div>
        </div>
        <div className="xmd:w-[60%] w-[100%]  5sm:p-10 ">
          <Slider {...settings}>
            {Reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className=" colored h-auto xmd:p-[50px] sm:p-[20px]"
                >
                  <p className=" review text-[14px] font-[400] pb-[30px] text-wrap">
                    {review.review}
                  </p>
                  <div className="bg-[#76767626] h-[1px] "></div>
                  <div className="flex items-center pt-[30px] justify-start gap-[20px]">
                    <div className="w-[90px] h-[90px] ">
                      <Image
                        className="rounded-full w-[90px] object-cover h-[90px]"
                        src={review.image}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 className=" font-spaceGrotesk tracking-[-0.84px] font-[500] text-[28px] ">
                        {review.name}
                      </h5>
                      <p className="authorName text-[18px] font-spaceGrotesk tracking-[-0.54px]">
                        {review.type}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimionials;
