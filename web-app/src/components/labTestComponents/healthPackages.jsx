import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { getPackages } from "../models/packages";
import imgPackage from "../../assets/images/imgPackage.png";
import { Link } from "react-router-dom";

function HealthPackages() {
  const packageslist = getPackages();

  return (
    <section className="test-top pt-0">
      <div className="container">
        <div className="card-products content-card pr-0">
          <div className="caption">
            <h4 className="primary-heading">Health Packages</h4>
          </div>
          <div className="products-holder">
            <div className="swiper productsSlider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation
                  >
                    {packageslist.map((pkg) => (
                      <SwiperSlide className="swiper-slide"> key={pkg._id}
                        <Link to={`/packagesdetail/${pkg._id}`}>
                          <div className="lab-card">
                            <div className="icon">
                              <img src={imgPackage} alt="" />
                            </div>
                            <div className="cardBody">
                              <h4>{pkg.PackageName}</h4>
                              <a href="#" className="cta">
                                Includes {pkg.TestsQty} tests
                              </a>
                            </div>
                            <div className="cardFooter">
                              <div className="media-body">
                                <div className="price">Rs. {pkg.price}</div>
                              </div>
                              <a
                                href="#"
                                className="cta-rounded-small btn-primary"
                              >
                                <span
                                  className="iconify"
                                  data-icon="octicon:eye-16"
                                />
                              </a>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
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

export default HealthPackages;
