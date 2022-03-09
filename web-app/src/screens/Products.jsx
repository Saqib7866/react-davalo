import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { useParams } from "react-router";
import Select from "react-select";
import ProductCard from '../components/genericComponents/ProductCard';
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function ProductListing() {
    const location = useLocation()
    const [name, setName] = useState("")
    const [option, setOptions] = useState({ value: "Availability", label: "Availability" })
    const navigate = useNavigate();
    const text = useParams();
    const products = [
        {
            _id: "1",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "2",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "3",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "4",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "5",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "6",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "7",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "8",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "8",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "8",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
        {
            _id: "8",
            name: "Surbex",
            size: "Small",
            type: "Syrup",
            oldPrice: 550,
            price: 449,
            discountpercent: 10,
        },
    ];

    const handleCardClick = (item) => {
        navigate(`/productdetail/${item.product._id}`);
    };
    const options = [
        { value: "Availability", label: "Availability" },
        { value: "Price:Low to High", label: "Price:Low to High" },
        { value: "A-Z Order", label: "A-Z Order" },
    ];
    useEffect(() => {
        setName(text.text)

    }, [])

    return (
        <section className="listing-detail">
            <div className="container-fluid">
                <div className="content-card">
                    <div className="caption d-none d-xl-block">
                        <h4 className="primary-heading">All Medicines</h4>
                    </div>
                    <div className="listingWrapper">
                        <div className="filter-sidebar">
                            <h3>Filter By</h3>
                            <div className="form-row">
                                <div className="col-xl-12 col-6">
                                    <div className="card-filter">
                                        <h4>Price</h4>
                                        <div className="filterBody">
                                            <div id="slider" />
                                            <ul className="range-filter">
                                                <li>From <span id="lower-value" /></li>
                                                <li>To <span id="upper-value" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-xl-12 col-6">
                                    <div className="card-filter">
                                        <h4>Discount</h4>
                                        <div className="filterBody">
                                            <div id="slider-discount" />
                                            <ul className="range-filter">
                                                <li>From <span id="lower-value-discount" /></li>
                                                <li>To <span id="upper-value-discount" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-6">
                                    <div className="card-filter ">
                                        <h4>Brands</h4>
                                        <div className="filterBody">
                                            <ul className="brandList" data-simplebar>
                                                <li>
                                                    <input type="checkbox" id="brand1" name="brands" className="check-style" />
                                                    <label htmlFor="brand1"><i className="check"><span className="iconify" data-icon="akar-icons:check" /></i>
                                                        <span>Hamdard</span></label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="brand2" name="brands" className="check-style" />
                                                    <label htmlFor="brand2"><i className="check"><span className="iconify" data-icon="akar-icons:check" /></i>
                                                        <span>Kosar</span></label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="brand3" name="brands" className="check-style" />
                                                    <label htmlFor="brand3"><i className="check"><span className="iconify" data-icon="akar-icons:check" /></i>
                                                        <span>Kosar</span></label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="brand4" name="brands" className="check-style" />
                                                    <label htmlFor="brand4"><i className="check"><span className="iconify" data-icon="akar-icons:check" /></i>
                                                        <span>Hamdard</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-6">
                                    <div className="card-filter ">
                                        <h4>Stock Availability</h4>
                                        <div className="filterBody">
                                            <ul className="brandList" data-simplebar>
                                                <li>
                                                    <input type="checkbox" id="stock1" name="stock" className="check-style" />
                                                    <label htmlFor="stock1"><i className="check"><span className="iconify" data-icon="akar-icons:check" /></i>
                                                        <span>Exclude Out of Stock</span></label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="caption d-block d-xl-none">
                            <h4 className="primary-heading">All Medicines</h4>
                        </div>
                        <div className="listingContent">
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product1.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product1.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html">Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product1.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html">Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product1.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html">Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product1.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html">Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product1.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html">Surbex</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cardpproduct">
                                    <div className="pruductImage text-center">
                                        <Link to="detail.html"> <img src="images/products/product2.png" alt="" /></Link>
                                    </div>
                                    <div className="cardBody">
                                        <Link className="title" to="detail.html"> Nivea Lotion</Link>
                                        <div className="size">Pack size: 1</div>
                                        <div className="name">Syrup</div>
                                    </div>
                                    <span className="badge-label save">Save 10%</span>
                                    <div className="cardFooter">
                                        <div className="media-body">
                                            <div className="price">Rs. 499 <del>550</del></div>
                                        </div>
                                        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
                                            <span>Add</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
}
export default ProductListing;
