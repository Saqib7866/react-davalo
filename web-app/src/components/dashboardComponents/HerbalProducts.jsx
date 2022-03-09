import ProductCard from "../genericComponents/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useNavigate } from "react-router";
import "swiper/css";
import { getproducts } from "./../models/products";


function HerbalProducts(props) {

  const navigate = useNavigate();
  const state = {
    products: getproducts(),
  };

  const handleCardClick = (item) => {
    navigate(`/productdetail/${item.product._id}`);
  };

  return (
    <section class="herbal-products">
      <div class="container-fluid">
        <div class="card-products content-card">
          <div class="caption">
            <h4 class="primary-heading">Herbal Products</h4>
          </div>
          <div class="products-holder">
            <div class="swiper productsSlider">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
              >
                {state.products.map(product =>
                  <SwiperSlide key={product._id}><ProductCard product={product} onCardClick={handleCardClick} /></SwiperSlide>
                )}
              </Swiper>
            </div>
            <div class="control">
              <div class="swiper-button-next next1">
                <i><span class="iconify" data-icon="ri:arrow-right-s-line"></span></i>
              </div>
              <div class="swiper-button-prev prev2">
                <i><span class="iconify" data-icon="ri:arrow-left-s-line"></span></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="herbal-products">
    //   <div className="container">
    //     <div className="card-products content-card pr-0">
    //       <div className="caption">
    //         <h4 className="primary-heading">Herbal Products</h4>
    //       </div>
    //       <div className="products-holder">
    //         <div className="swiper productsSlider">
    //           <div className="swiper-wrapper">
    //             
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

export default HerbalProducts;
