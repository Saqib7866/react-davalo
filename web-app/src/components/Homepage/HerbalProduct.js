import React from "react";

import { Link } from "react-router-dom";
import Product from "../../assets/images/products/product1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
const HerbalProduct = () => {
  return (
    <section className="herbal-products">
      <div className="container-fluid">
        <div className="card-products content-card">
          <div className="caption">
            <h4 className="primary-heading">Herbal Products</h4>
          </div>
          <div className="products-holder">
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
            ></Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerbalProduct;
