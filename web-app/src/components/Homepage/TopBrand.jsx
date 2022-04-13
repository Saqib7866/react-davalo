import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const TopBrand = ({topBrands }) => {
    return (<section className="topbrands">
        <div className="container-fluid">
            <div className="card-brands content-card">
                <div className="caption">
                    <h4 className="primary-heading">Top Brands</h4>
                </div>
                <div className="sliderWrapper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                    {topBrands?.map((brand)=>
                        <SwiperSlide>
                            <div class="brandImage">
                                <img src={brand.imageUrl} alt={brand.name}/>
                            </div>
                        </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
    )
}

export default TopBrand