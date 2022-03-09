import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
function OrderSummary() {
    const navigate = useNavigate();
   const [firstName,setfirstName]=useState("");
   const [lastName,setlastName]=useState("");
   const [email,setEmail]=useState("");
   const [phone,setPhone]=useState("");
   const [state,setState]=useState("");
   const [city,setCity]=useState("");
   const [address,setAddress]=useState("");
   const handleValidateForm = () => {
    if (firstName !== "" && lastName !== "" && email !== "" && phone !== "" && state !== "" && city !== "" && address !== "") {
      return false;
    } else {
      return true;
    }
  };


   return (

    <div>
    <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="content-card shipping-card">
                        <h3>Review Details</h3>

                        <form class="custom-form">
                            <div class="infoCard">
                                <h4>Shipping Information</h4>
                                <ul>
                                    <li>
                                        <i><span class="iconify" data-icon="carbon:user"></span></i> <span>Sajid Mehmood</span>
                                    </li>
                                    <li>
                                        <i><span class="iconify" data-icon="simple-line-icons:envelope"></span></i> <span>sajidmehmood9@gmail.com</span>
                                    </li>
                                    <li>
                                        <i><span class="iconify" data-icon="lucide:phone"></span></i> <span>+923217068411</span>
                                    </li>
                                    <li>
                                        <i><span class="iconify" data-icon="carbon:location"></span></i> <span>House 10 Block D Model Town</span>
                                    </li>
                                    <li><i><span class="iconify" data-icon="bx:bx-flag"></span></i><span>Lahore, Pakistan</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="infoCard mb-4">
                                <h4>Payment Details</h4>

                                <p><i><img src="images/icons/Mastercard-Logo.svg" alt=""/></i> **** **** 4589</p>
                                <p>Fakhar Naveed</p>
                                <p>10/25 ***</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-5 text-center">
                                    <button class="btn btn-primary w-100 mb-2" onClick={() => navigate('/complete-order', { replace: true })}>Place Order</button>
                                    <a href="/" class="cta">Cancel and Return</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="content-card order-card pb-0">
                        <div class="title">
                            <h2>Order Summary</h2>
                        </div>
                        <ul class="shipping-process">
                            <li class="active">
                                <div class="icon"><span class="iconify" data-icon="fluent:vehicle-truck-profile-20-regular"></span></div>
                                <div class="media-body">
                                    <h4>Step 1 </h4>
                                    <p> Shipping</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon"><span class="iconify" data-icon="eva:credit-card-outline"></span></div>
                                <div class="media-body">
                                    <h4>Step 2 </h4>
                                    <p> Payment</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon"><span class="iconify" data-icon="jam:refresh"></span></div>
                                <div class="media-body">
                                    <h4>Step 3</h4>
                                    <p>Review</p>
                                </div>
                            </li>
                        </ul>
                        <div class="card-body">
                            <ul>
                                <li><span>Subtotal</span>
                                    <span class="price">Rs. 4500</span>
                                </li>
                                <li><span>Shipping Charges</span>
                                    <span class="price">Rs. 200</span>
                                </li>
                                <li class="total">
                                    <span>Total</span>
                                    <span class="price">Rs. 4700</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
       






       


   
    );
  }
  
  export default OrderSummary;