import React from 'react'
import { Link } from 'react-router-dom'
export default function ShippingDetails () {
  return (
    <>
     <section className="product-shipping cart-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-9 col-xl-8">
              <div className="content-card shipping-card">
                <ul className="shipping-process">
                  <li className="active">
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
                  <li>
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
                <div className="row align-items-end">
                  <div className="col-xl-9">
                    <h3>Shipping Information</h3>
                    <form className="custom-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <div className="field-icon">
                              <input
                                type="text"
                                class="form-control"
                                placeHolder="First name*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="carbon:user"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <div className="field-icon">
                              <input
                                type="text"
                                class="form-control"
                                placeHolder="Last Name*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="carbon:user"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Email</label>
                            <div className="field-icon">
                              <input
                                type="email"
                                class="form-control"
                                placeHolder="email*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="simple-line-icons:envelope"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Phone no</label>
                            <div className="field-icon">
                              <input
                                type="text"
                                class="form-control"
                                placeHolder="Phone number*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="lucide:phone"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>State</label>
                            <div className="field-icon">
                              <input
                                type="text"
                                class="form-control"
                                placeHolder="email*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="bx:bx-flag"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>City</label>
                            <div className="field-icon">
                              <input
                                type="text"
                                class="form-control"
                                placeHolder="Phone number*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="bx:bx-flag"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Shipping address*</label>
                            <div className="field-icon">
                              <input
                                type="text"
                                class="form-control"
                                placeHolder="Shipping address*"
                              />
                              <i>
                                <span
                                  className="iconify"
                                  data-icon="carbon:location"
                                ></span>
                              </i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="text-center">
                            <Link
                              to="/paymentProcess"
                              className="btn btn-primary w-100 mb-2"
                            >
                              Next
                            </Link>
                            <a href="detail-cart.html" className="cta">
                              Cancel and Return
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
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
  )
}



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";

// function ShippingDetails() {
//   const navigate = useNavigate();
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState([{ value: "Karachi", label: "Karachi" }]);
//   const [address, setAddress] = useState("");
//   const options = [
//     { value: "Islamabad", label: "Islamabad" },
//     { value: "Karachi", label: "Karachi" },
//     { value: "Lahore", label: "Lahore" },
//   ];
//   const handleValidateForm = () => {
//     if (
//       firstName !== "" &&
//       lastName !== "" &&
//       phone !== "" &&
//       city !== "" &&
//       address !== ""
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   //   const handleClick = () => navigate.push('/payement-detail')

//   return (
//     <div>
//       <section className="product-shipping">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-8">
//               <div className="content-card shipping-card">
//                 <h3>Shipping Information</h3>
//                 <div className="row">
//                   <div className="col-xl-9">
//                     <form className="custom-form">
//                       <div className="row">
//                         <div className="col-lg-6">
//                           <div classNamelass="form-group">
//                             <label>First Name</label>
//                             <div className="field-icon">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="First name*"
//                                 value={firstName}
//                                 onChange={(e) => setfirstName(e.target.value)}
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="carbon:user"
//                                 ></span>
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="form-group">
//                             <label>Last Name</label>
//                             <div className="field-icon">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Last Name*"
//                                 value={lastName}
//                                 onChange={(e) => setlastName(e.target.value)}
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="carbon:user"
//                                 ></span>
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="form-group">
//                             <label>Email</label>
//                             <div className="field-icon">
//                               <input
//                                 type="email"
//                                 className="form-control"
//                                 placeholder="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="simple-line-icons:envelope"
//                                 ></span>
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-6">
//                           <div className="form-group">
//                             <label>Phone no</label>
//                             <div className="field-icon">
//                               <input
//                                 type="text"
//                                 class="form-control"
//                                 placeholder="Phone number*"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="lucide:phone"
//                                 ></span>
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                         {/* <div className="col-lg-6">
//                                                 <div className="form-group">
//                                                     <label>State</label>
//                                                     <div className="field-icon">
//                                                         <input type="text" className="form-control" placeholder="state*" value={state} onChange={(e) => setState(e.target.value)}/>
//                                                         <i><span className="iconify" data-icon="bx:bx-flag"></span></i>
//                                                     </div>
//                                                 </div>
//                                             </div> */}
//                         <div className="col-lg-6">
//                           <div className="form-group">
//                             <label>City</label>
//                             <div className="field-icon">
//                               <Select
//                                 options={options}
//                                 placeholder="Select Contractor"
//                                 value={city}
//                                 onChange={(city) => setCity(city)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group">
//                             <label>Shipping address*</label>
//                             <div className="field-icon">
//                               <textarea
//                                 className="form-control"
//                                 rows={2}
//                                 placeholder="Shipping address*"
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                               >
//                                 <i>
//                                   <span
//                                     className="iconify"
//                                     data-icon="carbon:location"
//                                   ></span>
//                                 </i>
//                               </textarea>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div>
//                             <div className="row">
//                               <div className="col-lg-4"></div>
//                               <div className="col-lg-4">
//                                 <button
//                                   className="btn btn-primary w-100 mb-2"
//                                   disabled={handleValidateForm()}
//                                   onClick={() =>
//                                     navigate("/payement-detail", {
//                                       replace: true,
//                                     })
//                                   }
//                                 >
//                                   Next
//                                 </button>
//                               </div>
//                               <div className="col-lg-4">
//                                 <a href="/cartdetail" className="cta">
//                                   Cancel and Return
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-4">
//               <div className="content-card order-card pb-0">
//                 <div className="title">
//                   <h2>Order Summary</h2>
//                 </div>
//                 <ul className="shipping-process">
//                   <li className="active">
//                     <div className="icon">
//                       <span
//                         className="iconify"
//                         data-icon="fluent:vehicle-truck-profile-20-regular"
//                       ></span>
//                     </div>
//                     <div className="media-body">
//                       <h4>Step 1 </h4>
//                       <p> Shipping</p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="icon">
//                       <span
//                         className="iconify"
//                         data-icon="eva:credit-card-outline"
//                       ></span>
//                     </div>
//                     <div className="media-body">
//                       <h4>Step 2 </h4>
//                       <p> Payment</p>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="icon">
//                       <span className="iconify" data-icon="jam:refresh"></span>
//                     </div>
//                     <div className="media-body">
//                       <h4>Step 3</h4>
//                       <p>Review</p>
//                     </div>
//                   </li>
//                 </ul>
//                 <div className="card-body">
//                   <ul>
//                     <li>
//                       <span>Subtotal</span>
//                       <span className="price">Rs. 4500</span>
//                     </li>
//                     <li>
//                       <span>Shipping Charges</span>
//                       <span className="price">Rs. 200</span>
//                     </li>
//                     <li className="total">
//                       <span>Total</span>
//                       <span className="price">Rs. 4700</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ShippingDetails;
