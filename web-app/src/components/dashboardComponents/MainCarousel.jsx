import Slider1 from "../../assets/images/hero-slider/slider1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
function MainCarousel() {
  return (
    <section className="hero-main">
      <div className="container-fluid">
        <div className="swiper heroSlider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            autoplay={true}
            direction="horizontal"
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="banner">
                <img src={Slider1} alt="" className="img-fluid w-100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner">
                <img src={Slider1} alt="" className="img-fluid w-100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner">
                <img src={Slider1} alt="" className="img-fluid w-100" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner">
                <img src={Slider1} alt="" className="img-fluid w-100" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>

    // <section className="hero-main">
    //   <div className="container">
    //     <div className="swiper heroSlider">
    //       <div className="swiper-wrapper">

    //       </div>
    //       <div className="swiper-pagination" />
    //     </div>
    //   </div>
    // </section>
  );
}

export default MainCarousel;
