import React from "react";
import masterCardLogo from '../assets/images/icons/Mastercard-Logo.svg';
import creditCard from '../assets/images/credit-card.png';
import cashOnDelivery from '../assets/images/cash-on-delivery.png';
import jazzCashImg from '../assets/images/jazz.png'
import { Link } from "react-router-dom";
export default function PaymentProcess() {
  return (
    <>
      <section className="product-shipping cart-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="content-card shipping-card">
                <ul className="shipping-process">
                  <li>
                    <div className="icon">
                      <span
                        class="iconify"
                        data-icon="fluent:vehicle-truck-profile-20-regular"
                      ></span>
                    </div>
                    <div className="media-body">
                      <h4>Step 1 </h4>
                      <p> Shipping</p>
                    </div>
                  </li>
                  <li className="active">
                    <div className="icon">
                      <span
                        class="iconify"
                        data-icon="eva:credit-card-outline"
                      ></span>
                    </div>
                    <div className="media-body">
                      <h4>Step 2 </h4>
                      <p> Payment</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span class="iconify" data-icon="jam:refresh"></span>
                    </div>
                    <div className="media-body">
                      <h4>Step 3</h4>
                      <p>Review</p>
                    </div>
                  </li>
                </ul>
                <h3 className="mb-3">Payment details</h3>
                <p>Please select one option to continue shipping</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="credit-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#credit"
                          type="button"
                          role="tab"
                          aria-controls="credit"
                          aria-selected="true"
                        >
                          Credit / Debit Card
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="cod-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#cod"
                          type="button"
                          role="tab"
                          aria-controls="cod"
                          aria-selected="false"
                        >
                          Cash On delivery
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="jazz-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#jazz"
                          type="button"
                          role="tab"
                          aria-controls="jazz"
                          aria-selected="false"
                        >
                          Jazzcash
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="easypaisa-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#easypaisa"
                          type="button"
                          role="tab"
                          aria-controls="easypaisa"
                          aria-selected="false"
                        >
                          Easypaisa
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="credit"
                    role="tabpanel"
                    aria-labelledby="credit-tab"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <form className="custom-form">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>Credit Card Number</label>
                                <div className="card-icon">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeHolder="0000 0000 0000 0000"
                                  />
                                  <i>
                                    <img
                                      src={masterCardLogo}
                                      alt=""
                                    />
                                  </i>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>Credit holder Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeHolder="Enter name here"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Exp Date</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeHolder="MM/YY"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Cvv</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeHolder="000"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="text-center">
                              <Link
                                to="/shippingReview"
                                className="btn btn-primary w-100 mb-2"
                              >
                                Next
                              </Link>
                              <Link to="/shippingDetails" className="cta">
                                Cancel and Return
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-xl-6">
                        <div className="cardImg text-center">
                          <img
                            src={creditCard}
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="cod"
                    role="tabpanel"
                    aria-labelledby="cod-tab"
                  >
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="cod-card text-center">
                          <img
                            src={cashOnDelivery}
                            alt=""
                            className="img-fluid"
                          />

                          <a
                            href="review-detail.html"
                            className="btn btn-primary w-100 mb-2"
                          >
                            Save
                          </a>

                          <Link to="/shippingDetails" className="cta">
                            Cancel and Return
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="jazz"
                    role="tabpanel"
                    aria-labelledby="jazz-tab"
                  >
                    <div className="card-payment">
                      <div className="row ">
                        <div className="col-xl-6">
                          <div className="cardImg text-center">
                            <img src={jazzCashImg} alt="" />
                            <p>
                              <a href="#">Click here</a> to pay through Jazzcash
                            </p>

                            <a href="#" className="cta">
                              Cancel and Return
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="easypaisa"
                    role="tabpanel"
                    aria-labelledby="easypaisa-tab"
                  >
                    <div className="card-payment">
                      <div className="row ">
                        <div className="col-xl-6">
                          <div className="cardImg text-center">
                            <img src="images/easypaisa.png" alt="" />
                            <p>
                              <a href="#">Click here</a> to pay through
                              easypaisa
                            </p>

                            <a href="#" className="cta">
                              Cancel and Return
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4">
              <div className="content-card order-card">
                <div className="title">
                  <h2>Order Summary</h2>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span className="price">Rs. 4500</span>
                    </li>
                    <li>
                      <span>Shipping Charges</span>
                      <span className="price">Rs. 200</span>
                    </li>
                    <li>
                      <span>
                        Promo Code <small>(If any)</small>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeHolder="Enter code here"
                      />
                    </li>
                    <li>
                      <span>Discount</span>
                      <span className="price">Rs. 126</span>
                    </li>
                    <li>
                      <span>Delivery Charges</span>
                      <span className="price">Rs. 200</span>
                    </li>
                    <li className="total">
                      <span>Total</span>
                      <span className="price">Rs. 4700</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
