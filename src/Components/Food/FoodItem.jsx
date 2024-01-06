import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

const FoodItem = ({ item }) => {
    return (
      <SwiperSlide>
        <img
          className="h-[280px] rounded-lg w-full"
          src={item?.ImageUrl}
          alt="image"
        />
        <h3 className='text-lg font-semibold text-[#0f0820] text-center'>{item?.Name}</h3>
      </SwiperSlide>
    );
};

export default FoodItem;