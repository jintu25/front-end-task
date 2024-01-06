import React from 'react';
import image from "../../assets/Image1.png";
const Banner = () => {
    return (
      <div className="max-w-screen-xl m-auto items-center rounded-lg lg:bg-[#e17801] grid grid-cols-1 lg:grid-cols-2">
        <div className="px-16 text-[#333] lg:text-white text-center lg:text-start mb-12 lg:mb-0">
          <h2 className="text-4xl font-semibold font-sans leading-normal mb-5">
            Deliver Food To Your Door Step!
          </h2>
          <p className=" font-normal text-[18px] font-[sans-serif] mt-3">
            Authentic Food, Quick Service, First Delivery
          </p>
        </div>
        <div className="bg-[#e16601] lg:bg-[#e17801] flex justify-center">
          <img src={image} alt="image" />
        </div>
      </div>
    );
};

export default Banner;