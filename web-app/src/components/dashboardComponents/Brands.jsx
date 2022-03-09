import brand1 from "../../assets/images/brands/brand1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function Brands() {
  return (
    <section className="topbrands">
      <div className="container-fluid">
        <div className="card-brands content-card">
          <div className="caption">
            <h4 className="primary-heading">Top Brands</h4>
          </div>
          {/* Swiper */}
          <div className="sliderWrapper">
            <div className="swiper brandsSlider">
              <div className="swiper-wrapper"><Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
              >
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="brandImage bg-yellow-300">
                    <img src={brand1} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper></div>
            </div>
            <div className="control">
              <div className="swiper-button-next next">
                <i><span className="iconify" data-icon="ri:arrow-right-s-line" /></i>
              </div>
              <div className="swiper-button-prev prev">
                <i><span className="iconify" data-icon="ri:arrow-left-s-line" /></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="topbrands">
    //   <div className="container">
    //     <div className="card-brands content-card">
    //       <div className="caption">
    //         <h4 className="primary-heading">Top Brands</h4>
    //       </div>
    //       {/* Swiper */}
    //       <div className="sliderWrapper">
    //         <div className="swiper brandsSlider">
    //           <div className="swiper-wrapper">


    //           </div>
    //         </div>
    //       </div>
    //       <div className="text-end card-dafault-footer">
    //         <a href="#" className="cta-view">
    //           See All
    //           <i>
    //             <span className="iconify" data-icon="eva:arrow-forward-fill" />
    //           </i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Brands;
