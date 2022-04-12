import React from "react";

import { Link } from "react-router-dom";
import Product from "../../assets/images/products/product1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

const FeatureProduct = ({products}) => {
  return (
    <>
    <section className="featured-products">
      <div className="container-fluid">
        <div className="card-products content-card">
          <div className="caption">
            <h4 className="primary-heading">Featured Products</h4>
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
            >
             
              {products?.map((product)=>(
              <SwiperSlide>
                <div class="cardpproduct">
                  <div class="pruductImage text-center">
                    <Link to="#">
                      <img src={Product} alt="" />
                    </Link>
                  </div>
                  <div class="cardBody">
                    <Link to="#" class="title">
                    </Link>
                    <div class="name" style={{color:"white",fontWeight:"9px"}}>{product.title}</div>
                    <div class="size">{(product.sellType==="Both" ||product.sellType==="Pack") ?  <span >Pack Size  {product.quantity}</span> :  <span >Strips Available</span>}</div>
                  </div>
                    {product.discount>0 && <span class="badge-label save">Save {product.discount}%</span>}
                  <div class="cardFooter">
                    <div class="media-body">
                      <div class="price">Rs.  
                       {(product.sellType==="Both" ||product.sellType==="Pack") ?  product.packDiscountedPrice : product.stripDiscountedPrice}  <br/>
                       <del>{(product.sellType==="Both" ||product.sellType==="Pack") ?  product.cost : product.stripCost}</del>
                      </div>
                    </div>
                    <Link to="#" class="btn btn-primary">
                      <i>
                        <span
                          class="iconify"
                          data-icon="ph:shopping-cart-simple"
                        ></span>
                      </i>
                      <span>Add</span>
                    </Link>
                  </div>
                </div>
                </SwiperSlide>))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default FeatureProduct;
