import Logo from "../../assets/images/logo.png";
import Avatar from "../../assets/images/avatar.png";
import Navbar from "../navbar/Navbar";
import MyCartModal from "./MyCartModal";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart1 from '../../assets/images/products/cart1.png'
import { useNavigate } from 'react-router-dom';
import CartContext from "../../store/cart-context";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const user = localStorage.getItem("user")
  const parsedUser = JSON.parse(user)
  const cartctx = useContext(CartContext);

  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  // useEffect(() => {

  // }, [])

  const logout = () => {

    const auth = getAuth();
    console.log("auth", auth)
    signOut(auth).then(() => {
      console.log("Logged Out Successfully")
      localStorage.clear()
      navigate("/")
    }).catch((error) => {

    });
  }
  return (
    <header>
      <div className="container-fluid">
        <div className="topbar">
          <div className="top-left-content">
            <Link to="/home" className="brand-name"><img src={Logo} alt="" /></Link>
            <div className="delivery-to">
              <span className="text">Delivery to</span>
              <div className="dropdown">
                <Link className="cta-deliver" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <i><span className="iconify" data-icon="carbon:location" /></i>
                  <span>Islamabad</span>
                  <i><span className="iconify" data-icon="eva:arrow-ios-downward-fill" /></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><Link to="#">Lahore</Link></li>
                  <li><Link to="#">Karachi</Link></li>
                  <li><Link to="#">Islamabad</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <form className="searchFilter">
            <div className="form-field">
              <input type="text" className="form-control" placeholder="What are you looking for?" />
              <i><span className="iconify" data-icon="akar-icons:search" /></i>
            </div>
          </form>
          <div className="top-right-content">
            <button className="cta-search d-inline-block d-xl-none" data-bs-toggle="modal" data-bs-target="#searchModal">
              <i><span className="iconify" data-icon="akar-icons:search" /></i>
            </button>
            <div className="dropdown">
              <Link to="#" className="cta-cart" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="count">
                  <span className="iconify" data-icon="ph:shopping-cart-simple" />
                  <span>14</span></i>
                <span className="media-body">
                  <span className="text">My Cart</span>
                  <span className="price">RS: 4700.4</span>
                </span>
                <i><span className="iconify" data-icon="eva:arrow-ios-downward-fill" /></i>
              </Link>
              <div className="dropdown-menu cart-dropdown" aria-labelledby="dropdownMenuButton1">
                <div className="title-cart">
                  <h4>My Cart</h4>
                </div>
                <div className="cart-body" data-simplebar>
                  <div className="media">
                    <div className="cart-image">
                      <img src={Cart1} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Neutrogena Spot....</h4>
                      <div className="price">Rs. 499 <del>550</del></div>
                      <div className="qunatity">
                        <span>Quantity</span>
                        <div className="input-spinner">
                          <input type="number" className="form-control incValue" defaultValue={5} min={0} />
                          <div className="icon-spinner">
                            <button className="btn-inc">
                              <span className="iconify" data-icon="eva:arrow-ios-downward-outline" />
                            </button>
                            <button className="btn-dec">
                              <span className="iconify" data-icon="eva:arrow-ios-upward-outline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="action">
                      <Link to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
                    </div>
                  </div>
                  <div className="media">
                    <div className="cart-image">
                      <img src={Cart1} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Neutrogena Spot....</h4>
                      <div className="price">Rs. 499 <del>550</del></div>
                      <div className="qunatity">
                        <span>Quantity</span>
                        <div className="input-spinner">
                          <input type="number" className="form-control incValue" defaultValue={5} min={0} />
                          <div className="icon-spinner">
                            <button className="btn-inc">
                              <span className="iconify" data-icon="eva:arrow-ios-downward-outline" />
                            </button>
                            <button className="btn-dec">
                              <span className="iconify" data-icon="eva:arrow-ios-upward-outline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="action">
                      <Link to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
                    </div>
                  </div>
                  <div className="media">
                    <div className="cart-image">
                      <img src={Cart1} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Neutrogena Spot....</h4>
                      <div className="price">Rs. 499 <del>550</del></div>
                      <div className="qunatity">
                        <span>Quantity</span>
                        <div className="input-spinner">
                          <input type="number" className="form-control incValue" defaultValue={5} min={0} />
                          <div className="icon-spinner">
                            <button className="btn-inc">
                              <span className="iconify" data-icon="eva:arrow-ios-downward-outline" />
                            </button>
                            <button className="btn-dec">
                              <span className="iconify" data-icon="eva:arrow-ios-upward-outline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="action">
                      <Link to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
                    </div>
                  </div>
                  <div className="media">
                    <div className="cart-image">
                      <img src={Cart1} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Neutrogena Spot....</h4>
                      <div className="price">Rs. 499 <del>550</del></div>
                      <div className="qunatity">
                        <span>Quantity</span>
                        <div className="input-spinner">
                          <input type="number" className="form-control incValue" defaultValue={5} min={0} />
                          <div className="icon-spinner">
                            <button className="btn-inc">
                              <span className="iconify" data-icon="eva:arrow-ios-downward-outline" />
                            </button>
                            <button className="btn-dec">
                              <span className="iconify" data-icon="eva:arrow-ios-upward-outline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="action">
                      <Link to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
                    </div>
                  </div>
                  <div className="media">
                    <div className="cart-image">
                      <img src={Cart1} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Neutrogena Spot....</h4>
                      <div className="price">Rs. 499 <del>550</del></div>
                      <div className="qunatity">
                        <span>Quantity</span>
                        <div className="input-spinner">
                          <input type="number" className="form-control incValue" defaultValue={5} min={0} />
                          <div className="icon-spinner">
                            <button className="btn-inc">
                              <span className="iconify" data-icon="eva:arrow-ios-downward-outline" />
                            </button>
                            <button className="btn-dec">
                              <span className="iconify" data-icon="eva:arrow-ios-upward-outline" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="action">
                      <Link to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
                    </div>
                  </div>
                </div>
                <div className="cart-footer">
                  <div className="total">
                    <h4>Total Bill</h4>
                    <div className="price">Rs: 2350</div>
                  </div>
                  <Link to="#" className="btn btn-outline-default w-100">View Cart Details</Link>
                  <Link to="#" className="btn btn-primary w-100">Proceed to Checkout</Link>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <Link to="#" className="cta-user" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="avatar"><img src={Avatar} alt="" /></span>
                <span className="name">Fakhar Naveed</span>
                <i>
                  <span className="iconify" data-icon="eva:arrow-ios-downward-fill" />
                </i>
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li><Link to="/">Dashboard </Link></li>
                  <li><Link to="/">Logout</Link></li>
                </ul>
              </div>
            </div>
            <Link to="#" className="cta-more"><span className="iconify" data-icon="akar-icons:grid" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            </button>
          </div>
        </div>
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-xl">
          <div className="quick-find dropdown">
            <Link to="#" className="cta" data-bs-toggle="dropdown" aria-expanded="false"><i><span className="iconify" data-icon="ic:round-manage-search" /></i>
              <span className="text">Browse All Catageries</span><i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i>
            </Link>
            <div className="dropdown-menu quick-finds-links" aria-labelledby="dropdownMenuButton1">
              <ul>
                <li><Link to="/products">Medicines </Link></li>
                <li><Link to="/labtests">Lab Tests &amp; Checkups</Link></li>
                <li><Link to="#">Doctors Consults </Link></li>
                <li><Link to="#">Women's Health</Link></li>
                <li><Link to="#">Compounding Pharmacy</Link></li>
                <li><Link to="#">Home Services</Link></li>
              </ul>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-xl-none d-inline-block menu-header">
              <Link to="index.html" className="brand-name"><img src={Logo} alt="" /></Link>
            </div>
            <div className="userInfo">
              <span className="avatar"><img src={Avatar} alt="" /></span>
              <div className="media-body">
                <span className="name">Fakhar Naveed</span>
                <div className="account-setting">
                  <Link to="#">Dashboard</Link>
                  <Link to="#" className="cta">Logout</Link>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="#" data-bs-toggle="dropdown" aria-expanded="false">Medicines
                  <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
                <div className="dropdown-menu">
                  <div className="menu-inner">
                    <div className="row">
                      <div className="col-xl-2">
                        <h4>Medicines</h4>
                        <ul className="quick-links">
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                        </ul>
                      </div>
                      <div className="col-xl-2">
                        <h4>Personal Care</h4>
                        <ul className="quick-links">
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                        </ul>
                      </div>
                      <div className="col-xl-2">
                        <h4>Lab Tests</h4>
                        <ul className="quick-links">
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                        </ul>
                      </div>
                      <div className="col-xl-2">
                        <h4>Baby Care products</h4>
                        <ul className="quick-links">
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                        </ul>
                      </div>
                      <div className="col-xl-2">
                        <h4>Lab Tests</h4>
                        <ul className="quick-links">
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                          <li><Link to="#">Lorem impson</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/labtests">Lab Tests
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/compoundingpharmacy">Compounding Medicine
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Personal care
                  <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Best Sales
                  <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Organics
                  <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
              </li>
            </ul>
          </div>
          <Link to="/asaanorder" className="btn btn-primary"><i><span className="iconify" data-icon="iconoir:cloud-upload" /></i>
            <span>آسان آرڈر</span></Link>
        </nav>
      </div>
    </header>

  );
}
