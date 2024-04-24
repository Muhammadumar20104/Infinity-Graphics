import React from "react";

const BlogCard = ({img}) => {
  console.log(img);
  return (
    <div className="px-3 lg:w-1/3 md:w-1/2 my-3">
      <img src={img} alt="" />
      <div className="p-5">
        <div className="text-gray-400 flex">
          <p>Ui/UX</p>
          <p className="ps-10">3 Minutes Read</p>
        </div>
        <h5 className="font-medium text-2xl mt-2">5 Web design trends <br className="xl:block hidden"/>for 2024</h5>
      </div>
    </div>
  );
};

export default BlogCard;
