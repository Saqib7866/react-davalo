
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import phone from '../assets/images/icons/phone-call.png'
import result from '../assets/images/icons/result.png'
import sms from '../assets/images/icons/sms.png'
import search from '../assets/images/icons/search.png'
import chughtai from '../assets/images/brands/Logo-Chughtai-Lab.png'
import HealthPackages from "../components/labTestComponents/healthPackages";
import LabHeader from "../components/labTestComponents/LabHeader";
import PopularTestCategories from "../components/labTestComponents/PopularTestCategories";
import TopBookedTest from "../components/labTestComponents/TopBookedTest";

import TopLabs from "../components/labTestComponents/TopLabs";

function LabTestHome() {
  // const text = useParams();
  // let healthRef = useRef(null);
  // healthRef = useRef(healthRef)
  // const executeScroll = () => healthRef.current.scrollIntoView()
  // let labRef = useRef(null);
  // labRef = useRef(labRef)
  // const labExecuteScroll = () => labRef.current.scrollIntoView()
  // useEffect(() => {
  //   if (text.text != null || '') {
  //     executeScroll()
  //   } else {
  //     labExecuteScroll()
  //   }
  // });
  return (
    <div>
      <section className="heading-page">
        <div className="container">
          <div className="caption text-center">
            <h1>How it Works ?</h1>
            <p>Just a simple few Step and its done</p>
          </div>
        </div>
      </section>
      <section className="how-works">
        <div className="container">
          <ul className="steps-works">
            <li>
              <div className="card-step">
                <div className="icon"><img src={search} alt="" /></div>
                <p>Find your lab and book online
                  for test sample collection</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon"><img src={phone} alt="" /></div>
                <p>You will receive call from
                  representative
                  to book your test schedule</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon"><img src={result} alt="" /></div>
                <p>Find your lab and book online
                  for test sample collection</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon"><img src={sms} alt="" /></div>
                <p>Find your lab and book online
                  for test sample collection</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="topLabs">
        <div className="container-fluid">
          <div className="card-brands content-card">
            <div className="caption">
              <h4 className="primary-heading">Top Laboratories</h4>
            </div>
            {/* Swiper */}
            <div className="sliderWrapper">
              <div className="swiper brandsSlider">
                <div className="swiper-wrapper justify-content-lg-center">
                  <div className="swiper-slide">
                    <Link to="#" className="brandImage">
                      <img src={chughtai} alt="" />
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to="#" className="brandImage">
                      <img src={chughtai} alt="" />
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to="#" className="brandImage">
                      <img src={chughtai} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="control">
                <div className="swiper-button-next next"><i><span className="iconify" data-icon="ri:arrow-right-s-line" /></i></div>
                <div className="swiper-button-prev prev"><i><span className="iconify" data-icon="ri:arrow-left-s-line" /></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="test-top pt-0">
        <div className="container-fluid">
          <div className="card-products content-card ">
            <div className="caption">
              <h4 className="primary-heading">Top Booked Lab Tests</h4>
            </div>
            <div className="products-holder">
              <div className="swiper productsSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="lab-card">
                      <div className="cardBody">
                        <h4>CORONAVIRUS (COVID - 19)
                          TEST</h4>
                        <div className="media-body">
                          <div className="price">
                            Rs. 499 <span>Onwords</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <Link to="#" className="btn btn-primary w-100">Check Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lab-card">
                      <div className="cardBody">
                        <h4>CORONAVIRUS (COVID - 19)
                          TEST</h4>
                        <div className="media-body">
                          <div className="price">
                            Rs. 499 <span>Onwords</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <Link to="#" className="btn btn-primary w-100">Check Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lab-card">
                      <div className="cardBody">
                        <h4>CORONAVIRUS (COVID - 19)
                          TEST</h4>
                        <div className="media-body">
                          <div className="price">
                            Rs. 499 <span>Onwords</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <Link to="#" className="btn btn-primary w-100">Check Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lab-card">
                      <div className="cardBody">
                        <h4>CORONAVIRUS (COVID - 19)
                          TEST</h4>
                        <div className="media-body">
                          <div className="price">
                            Rs. 499 <span>Onwords</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <Link to="#" className="btn btn-primary w-100">Check Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lab-card">
                      <div className="cardBody">
                        <h4>CORONAVIRUS (COVID - 19)
                          TEST</h4>
                        <div className="media-body">
                          <div className="price">
                            Rs. 499 <span>Onwords</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <Link to="#" className="btn btn-primary w-100">Check Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="lab-card">
                      <div className="cardBody">
                        <h4>CORONAVIRUS (COVID - 19)
                          TEST</h4>
                        <div className="media-body">
                          <div className="price">
                            Rs. 499 <span>Onwords</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardFooter">
                        <Link to="#" className="btn btn-primary w-100">Check Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control">
                <div className="swiper-button-next next1"><i><span className="iconify" data-icon="ri:arrow-right-s-line" /></i></div>
                <div className="swiper-button-prev prev2"><i><span className="iconify" data-icon="ri:arrow-left-s-line" /></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default LabTestHome;
