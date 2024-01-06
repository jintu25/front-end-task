import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

const FoodItem = ({ item }) => {
    console.log(item)
    return (
      <SwiperSlide>
        <img src={item.ImageUrl} alt="" />
      </SwiperSlide>
    );
};

export default FoodItem;