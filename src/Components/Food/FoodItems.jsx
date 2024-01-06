import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import FoodItem from './FoodItem';
const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      const data = await response.json();

      // Extracting the 'Items' array from the response
      const items = data.Items;

      // Updating the state with the items
      setFoodItems(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    };
    
    fetchData();
}, []);
console.log(foodItems)

  const popularItems = foodItems.filter((item) => item.IsPopular);
  const recommendedItems = foodItems.filter((item) => item.IsRecommended);
    return (
      <div className="m-auto max-w-screen-xl my-20">
        {/* Render your UI using 'foodItems' */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mb-12">
          {popularItems.map((item) => (
            <SwiperSlide key={item.Id}>
              {/* Pass the item prop to the FoodItem component */}
              <FoodItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
{/* recommended food items call */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          {recommendedItems.map((item) => (
            <SwiperSlide key={item.Id}>
              {/* Pass the item prop to the FoodItem component */}
              <FoodItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default FoodItems;