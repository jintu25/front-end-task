import React from 'react';
import image from "../../assets/Image1.png";
const Banner = () => {
    return (
      <div className="max-w-screen-xl m-auto items-center rounded-lg bg-[#e19301] grid grid-cols-1 lg:grid-cols-2">
        <div className="px-16 text-white">
          <h2 className="text-4xl font-semibold font-sans leading-normal">
            Deliver Food To Your Door Step!
          </h2>
          <p className=" font-normal text-[18px] font-[sans-serif] mt-3">
            Authentic Food, Quick Service, First Delivery
          </p>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>
      </div>
    );
};

export default Banner;