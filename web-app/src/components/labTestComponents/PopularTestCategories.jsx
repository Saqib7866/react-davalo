import Heart from "../../assets/images/icons/heart.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
function PopularTestCategories() {
  const categories = [
    { name: "Heart Tests" },
    { name: "Blood Tests" },
    { name: "Hormones Tests" },
    { name: "Organ Tests" },
    { name: "Heart Tests1" },
    { name: "Blood Tests1" },
  ];
  return (
    <section className="popular-test">
      <div className="container">
        <div className="content-card">
          <div className="caption">
            <h4 className="primary-heading">Popular Test Categories</h4>
          </div>
          <div className="products-holder">
            <div className="swiper testSlider">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={4}
                  navigation
                >
                  {categories.map((cat) => (
                    <SwiperSlide className="swiper-slide" key={cat.name}>
                      <div className="text-card bg-red-300">
                        <div className="icon">
                          <img src={Heart} alt="" />
                        </div>
                        <div className="media-body">{cat.name}</div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
          </div>
          <div className="text-end card-dafault-footer">
            <a href="#" className="cta-view">
              See All{" "}
              <i>
                <span className="iconify" data-icon="eva:arrow-forward-fill" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularTestCategories;
