import React from 'react';
import image from '../../assets/Image2.png'
import { FaGoogle, FaInstagram, FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#e19301] items-center">
        <div className=" py-8 px-8 lg:pl-28">
          <div className="flex flex-col lg:flex-row items-center lg:items-end bg-white py-2 px-4 rounded-xl mb-16">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-lg w-full lg:mr-4"
            />
            <button
              type="submit"
              className="bg-[#eb6a00] text-white px-8 py-2 rounded-xl text-xl font-semibold relative items-center">
              Subscribe
              <FaLongArrowAltRight className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            </button>
          </div>
          <h3 className='text-2xl font-bold text-[#030311] mb-4'>logo</h3>
          <div className="flex justify-between">
            <div>
              <p className='text-lg font-semibold'>Copyright@trip.all right reserved</p>
            </div>
            <div>
              <ul className='flex gap-3'>
                <li>
                  <a href="">
                    <FaGoogle />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <img src={image} alt="" />
        </div>
      </div>
    );
};

export default Footer;