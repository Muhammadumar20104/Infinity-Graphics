"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function TestimonialSlider() {
  var settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows:false,
    dots:false
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="test p-10 bg-[#00C0CC] rounded-2xl my-4">
          <p className="text-[#FFFFFFA6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            voluptates illum nobis ratione beatae, sapiente consequatur ab
            nostrum quod laudantium voluptatem at natus mollitia ipsum
            temporibus facere doloribus saepe quidem ipsam earum aliquam qui
            blanditiis.
          </p>
          <div className="flex items-center mt-7">
            <img src="/images/Rectangle 9.png" alt="" width={60} />
            <div className="ms-4">
              <h5 className="font-medium text-white text-lg">Bessie Cooper</h5>
              <p className="text-[#FFFFFFA6] text-sm">Programer Analyst</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="test p-10 bg-[#00C0CC]  rounded-2xl my-4">
          <p className="text-[#FFFFFFA6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            voluptates illum nobis ratione beatae, sapiente consequatur ab
            nostrum quod laudantium voluptatem at natus mollitia ipsum
            temporibus facere doloribus saepe quidem ipsam earum aliquam qui
            blanditiis.
          </p>
          <div className="flex items-center mt-7">
            <img src="/images/Rectangle 9.png" alt="" width={60} />
            <div className="ms-4">
              <h5 className="font-medium text-white text-lg">Bessie Cooper</h5>
              <p className="text-[#FFFFFFA6] text-sm">Programer Analyst</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="test p-10 bg-[#00C0CC]  rounded-2xl my-4">
          <p className="text-[#FFFFFFA6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            voluptates illum nobis ratione beatae, sapiente consequatur ab
            nostrum quod laudantium voluptatem at natus mollitia ipsum
            temporibus facere doloribus saepe quidem ipsam earum aliquam qui
            blanditiis.
          </p>
          <div className="flex items-center mt-7">
            <img src="/images/Rectangle 9.png" alt="" width={60} />
            <div className="ms-4">
              <h5 className="font-medium text-white text-lg">Bessie Cooper</h5>
              <p className="text-[#FFFFFFA6] text-sm">Programer Analyst</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="test p-10 bg-[#00C0CC]  rounded-2xl my-4">
          <p className="text-[#FFFFFFA6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            voluptates illum nobis ratione beatae, sapiente consequatur ab
            nostrum quod laudantium voluptatem at natus mollitia ipsum
            temporibus facere doloribus saepe quidem ipsam earum aliquam qui
            blanditiis.
          </p>
          <div className="flex items-center mt-7">
            <img src="/images/Rectangle 9.png" alt="" width={60} />
            <div className="ms-4">
              <h5 className="font-medium text-white text-lg">Bessie Cooper</h5>
              <p className="text-[#FFFFFFA6] text-sm">Programer Analyst</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="test p-10 bg-[#00C0CC]  rounded-2xl my-4">
          <p className="text-[#FFFFFFA6]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            voluptates illum nobis ratione beatae, sapiente consequatur ab
            nostrum quod laudantium voluptatem at natus mollitia ipsum
            temporibus facere doloribus saepe quidem ipsam earum aliquam qui
            blanditiis.
          </p>
          <div className="flex items-center mt-7">
            <img src="/images/Rectangle 9.png" alt="" width={60} />
            <div className="ms-4">
              <h5 className="font-medium text-white text-lg">Bessie Cooper</h5>
              <p className="text-[#FFFFFFA6] text-sm">Programer Analyst</p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
