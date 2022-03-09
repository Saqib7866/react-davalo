import ChughtaiLab from "../../assets/images/brands/Logo-Chughtai-Lab.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
function TopLabs() {
  const brands = [
    { _id: 1, name: "ChughtaiLab", color: "brandImage bg-purple-300" },
    { _id: 2, name: "ShakatKhanum", color: "brandImage bg-red-300" },
    { _id: 3, name: "AghaKhan", color: "brandImage bg-red-300" },
    { _id: 4, name: "Brand2", color: "brandImage bg-blue-300" },
    { _id: 5, name: "Brand3", color: "brandImage bg-blue-dark-300" },
    { _id: 6, name: "Brand4", color: "brandImage bg-purple-300" },
  ];

  return (
    <section className="topLabs">
      <div className="container">
        <div className="card-brands content-card">
          <div className="caption">
            <h4 className="primary-heading">Top Laboratories</h4>
          </div>
          {/* Swiper */}
          <div className="sliderWrapper">
            <div className="swiper brandsSlider">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={4}
                  navigation
                >
                  {brands.map((brand) => (
                    <SwiperSlide className="swiper-slide" key={brand._id}>
                      <Link to="/selected-lab-tests-list" className={brand.color}>
                        <img src={ChughtaiLab} alt="" />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="text-end card-dafault-footer">
            <a href="#" className="cta-view">
              See All
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

export default TopLabs;
