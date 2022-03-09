import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Flask from "../../assets/images/icons/flask.png";
import { Link } from "react-router-dom";
function TopBookedTest() {
  const labTests = [
    { _id: 1, name: "CORONAVIRUS (COVID - 19) TEST", price: "499" },
    { _id: 2, name: "COVID-19 IAG Antibody", price: "599" },
    { _id: 3, name: "Blood C/E", price: "599" },
    { _id: 4, name: "HbA1C (Glycosated Hb)", price: "799" },
    { _id: 5, name: "CORONAVIRUS (COVID - 19) TEST", price: "899" },
    { _id: 6, name: "Blood C/E", price: "999" },
  ];
  return (
    <section className="test-top pt-0">
      <div className="container">
        <div className="card-products content-card pr-0">
          <div className="caption">
            <h4 className="primary-heading">Top Booked Lab Tests</h4>
          </div>
          <div className="products-holder">
            <div className="swiper productsSlider">
              <div className="swiper-wrapper">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={4}
                  navigation
                >
                  {labTests.map((test) => (
                    <SwiperSlide className="swiper-slide" key={test._id}>
                      <div className="lab-card">
                        <Link to="/test-detail">
                          <div className="icon">
                            <img src={Flask} alt="" />
                          </div>
                          <div className="cardBody">
                            <h4>{test.name}</h4>
                            <a href="#" className="cta">
                              CLick here to select Lab
                            </a>
                          </div>
                        </Link>
                        <div className="cardFooter">
                          <div className="media-body">
                            <div className="price">Rs. {test.price}</div>
                          </div>
                          <a href="#" className="cta-rounded-small btn-primary">
                            {" "}
                            <span
                              className="iconify"
                              data-icon="ph:shopping-cart-simple"
                            />{" "}
                          </a>
                        </div>
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

export default TopBookedTest;
