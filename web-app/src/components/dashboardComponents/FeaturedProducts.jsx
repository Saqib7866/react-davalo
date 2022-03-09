import ProductCard from "../genericComponents/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useNavigate } from "react-router";
import { getproducts } from "./../models/products";

function FeaturedProducts(props) {
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate(`/productdetail/${item.product._id}`);
  };


  const state = {
    products: getproducts(),
  };

  return (
    <section className="featured-products">
      <div className="container-fluid">
        <div className="card-products content-card">
          <div className="caption">
            <h4 className="primary-heading">Featured Products</h4>
          </div>
          <div className="products-holder">
            <div className="swiper featureSlider">
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
            <div className="control">
              <div className="swiper-button-next next3">
                <i><span className="iconify" data-icon="ri:arrow-right-s-line" /></i>
              </div>
              <div className="swiper-button-prev prev4">
                <i><span className="iconify" data-icon="ri:arrow-left-s-line" /></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="featured-products">
    //   <div className="container">
    //     <div className="card-products content-card pr-0">
    //       <div className="caption">
    //         <h4 className="primary-heading">Featured Products</h4>
    //       </div>
    //       <div className="products-holder">
    //         <div className="swiper productsSlider">
    //           <div className="swiper-wrapper">
    //           <Swiper
    //               modules={[Navigation, Pagination, Scrollbar, A11y]}
    //               spaceBetween={10}
    //               slidesPerView={5}
    //               navigation
    //               >
    //               {state.products.map(product => 
    //               <SwiperSlide key={product._id}><ProductCard product={product} onCardClick={handleCardClick}/></SwiperSlide>
    //               )}
    //             </Swiper>
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

export default FeaturedProducts;
