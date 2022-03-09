import React from 'react'
import { Link } from "react-router-dom";
import masterCardlogo from '../assets/images/icons/Mastercard-Logo.svg';
export default function () {
  return (
    <>
    <section className="product-shipping">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8">
                        <div className="content-card shipping-card">
                          <ul className="shipping-process">
                            <li>
                                <div className="icon"><span class="iconify" data-icon="fluent:vehicle-truck-profile-20-regular"></span></div>
                                <div className="media-body">
                                    <h4>Step 1 </h4>
                                    <p> Shipping</p>
                                </div>
                            </li>
                            <li  >
                                <div className="icon"><span class="iconify" data-icon="eva:credit-card-outline"></span></div>
                                <div className="media-body">
                                    <h4>Step 2 </h4>
                                    <p> Payment</p>
                                </div>
                            </li>
                            <li className="active">
                                <div className="icon"><span class="iconify" data-icon="jam:refresh"></span></div>
                                <div className="media-body">
                                    <h4>Step 3</h4>
                                    <p>Review</p>
                                </div>
                            </li>
                        </ul>
                            <h3>Review Details</h3>

                            <form className="custom-form">
                                <div className="infoCard">
                                    <h4>Shipping Information</h4>
                                    <ul>
                                        <li>
                                            <i><span className="iconify" data-icon="carbon:user"></span></i> <span>Sajid Mehmood</span>
                                        </li>
                                        <li>
                                            <i><span className="iconify" data-icon="simple-line-icons:envelope"></span></i> <span>sajidmehmood9@gmail.com</span>
                                        </li>
                                        <li>
                                            <i><span className="iconify" data-icon="lucide:phone"></span></i> <span>+923217068411</span>
                                        </li>
                                        <li>
                                            <i><span className="iconify" data-icon="carbon:location"></span></i> <span>House 10 Block D Model Town</span>
                                        </li>
                                        <li><i><span className="iconify" data-icon="bx:bx-flag"></span></i><span>Lahore, Pakistan</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="infoCard mb-4">
                                    <h4>Payment Details</h4>

                                    <p><i><img src={masterCardlogo} alt=""/></i> **** **** 4589</p>
                                    <p>Fakhar Naveed</p>
                                    <p>10/25 ***</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 text-center">
                                        <Link to="/paymentProcess" className="cta">Cancel and Return</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4">
                        <div className="content-card order-card">
                            <div className="title">
                                <h2>Order Summary</h2>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li><span>Subtotal</span>
                                        <span className="price">Rs. 4500</span>
                                    </li>
                                    <li><span>Shipping Charges</span>
                                        <span className="price">Rs. 200</span>
                                    </li>
                                    <li><span>Promo Code <small>(If any)</small></span>
                                      <input type="text" class="form-control" placeHolder="Enter code here"/>
                                  </li>
                                  <li><span>Discount</span>
                                    <span className="price">Rs. 126</span>
                                </li>
                                  <li><span>Delivery Charges</span>
                                    <span className="price">Rs. 200</span>
                                </li>
                                    <li className="total">
                                        <span>Total</span>
                                        <span className="price">Rs. 4700</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to="/orderComplete" className="btn btn-primary w-100">Place Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
