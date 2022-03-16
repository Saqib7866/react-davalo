import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import slider1 from '../../assets/images/hero-slider/slider1.png'
const HeroMain = () => {
    return (
      <section class="hero-main">
      <div class="container-fluid">
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="banner">
                 <img src={slider1} alt="" className="img-fluid w-100" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="banner">
                 <img src={slider1} alt="" className="img-fluid w-100" />
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
      
    )
}

export default HeroMain