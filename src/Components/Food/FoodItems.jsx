import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import FoodItem from './FoodItem';
const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/food.json"); // Assuming food.json is in the public folder
      const data = await response.json();

      const items = data.Items;
      setFoodItems(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


  const popularItems = foodItems.filter((item) => item.IsPopular);
  const recommendedItems = foodItems.filter((item) => item.IsRecommended);
    return (
      <div className="m-auto max-w-screen-xl my-20">
        {/* Render your UI using 'foodItems' */}
        <>
          <div className="flex justify-between my-4">
            <h2 className="text-[#100a27] text-2xl font-semibold">Popular</h2>
            <div className="text-xl font-semibold text-[#e2553d] flex items-center">
              <h2>Add Items</h2>
              <span className="font-bold text-3xl">
                <IoMdArrowDropleft />
              </span>
              <span className="font-bold text-3xl">
                <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            // pagination={{
            //   clickable: true,
            // }}

            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.20": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.30": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.40": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mb-12">
            {popularItems.map((item) => (
              <SwiperSlide key={item.Id}>
                <FoodItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>

        {/* recommended food items call */}
        <>
          <div className="flex justify-between my-4">
            <h2 className="text-[#100a27] text-2xl font-semibold">
              Recommended
            </h2>
            <div className="text-xl font-semibold text-[#e2553d] flex items-center">
              <h2>Add Items</h2>
              <span className="font-bold text-3xl">
                <IoMdArrowDropleft />
              </span>
              <span className="font-bold text-3xl">
                <IoMdArrowDropright />
              </span>
            </div>
          </div>
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
              "@1.20": {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              "@1.30": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.40": {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper">
            {recommendedItems.map((item) => (
              <SwiperSlide key={item.Id}>
                <FoodItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    );
};

export default FoodItems;