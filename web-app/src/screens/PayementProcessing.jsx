import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

function PayementProcess() {
    const navigate = useNavigate();

   const [cardNumber,setcardNumber]=useState("");
   const [cardName,setcardName]=useState("");
   const [date,setDate]=useState("");
   const [cvv,setCvv]=useState("");
   const [jazzNo,setJazzNo]=useState("");
   const [easypaisaNo,seteasypaisaNo]=useState("");
   const handleValidateForm = () => {
    if (cardNumber !== "" && cardName !== "" && date !== "" && cvv !== "") {
      return false;
    } else {
      return true;
    }
  };
  const handleValidateJazzForm = () => {
    if (jazzNo !== "" ) {
      return false;
    } else {
      return true;
    }
  };
  const handleValidateEasyPaisaForm = () => {
    if (easypaisaNo !== "" ) {
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
                            <h3 class="mb-3">Payment details</h3>
                            <p>Please select one option to continue shipping</p>

                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="credit-tab" data-bs-toggle="tab" data-bs-target="#credit" type="button" role="tab" aria-controls="credit" aria-selected="true">Credit / Debit Card</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="cod-tab" data-bs-toggle="tab" data-bs-target="#cod" type="button" role="tab" aria-controls="cod" aria-selected="false">Cash On delivery</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="jazz-tab" data-bs-toggle="tab" data-bs-target="#jazz" type="button" role="tab" aria-controls="jazz" aria-selected="false">Jazzcash</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="easypaisa-tab" data-bs-toggle="tab" data-bs-target="#easypaisa" type="button" role="tab" aria-controls="easypaisa" aria-selected="false">Easypaisa</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="credit" role="tabpanel" aria-labelledby="credit-tab">
                                    <div class="row">
                                        <div class="col-xl-5">
                                            <form class="custom-form">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>Credit Card Number</label>
                                                            <div class="card-icon">
                                                                <input type="text" class="form-control" placeholder="0000 0000 0000 0000" value={cardNumber}  onChange={(e) => setcardNumber(e.target.value)}/>
                                                                <i><img src="images/icons/Mastercard-Logo.svg" alt=""/></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>Credit holder Name</label>
                                                            <input type="text" class="form-control" placeholder="Enter name here" value={cardName}  onChange={(e) => setcardName(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label>Exp Date</label>
                                                            <input type="text" class="form-control" placeholder="MM/YY" value={date}  onChange={(e) => setDate(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label>Cvv</label>
                                                            <input type="text" class="form-control" placeholder="000" value={cvv}  onChange={(e) => setCvv(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="text-center">
                                                    <button  class="btn btn-primary w-100 mb-2"  disabled={handleValidateForm()}  onClick={() => navigate('/order-summary', { replace: true })} >Next</button>
                                                        <a href="/cartdetail" class="cta">Cancel and Return</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-xl-7">
                                            <div class="cardImg text-center">
                                                <img src="images/credit-card.png" alt="" class="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="cod" role="tabpanel" aria-labelledby="cod-tab">
                                    <div class="row">
                                        <div class="col-lg-4 offset-lg-4">
                                            <div class="cod-card text-center">
                                                <img src="images/cash-on-delivery.png" alt="" class="img-fluid" />

                                                <a href="/order-summary" class="btn btn-primary w-100"  >Save</a>

                                                <a href="/cartdetail" class="cta">Cancel and Return</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="jazz" role="tabpanel" aria-labelledby="jazz-tab">
                                    <div class="card-payment">

                                        <div class="row ">
                                            <div class="col-xl-6">
                                                <form class="custom-form">
                                                    <div class="row ">
                                                        <div class="col-lg-12">
                                                            <div class="note-text">
                                                                <h5>FOR JAZZ/WARID</h5>
                                                                <p>unlock your phone and you will receive a MPIN Input Prompt</p>
                                                            </div>
                                                            <div class="note-text">
                                                                <h5>FOR OTHER NETWORKS</h5>
                                                                <p>Log-in to your JazzCash App and enter your MPIN</p>
                                                            </div>
                                                            <p class="note"><strong> Note:</strong> Ensure your JazzCash account is Active and has sufficient balance.</p>
                                                            <div class="form-group">
                                                                <label>JazzCash Account Number</label>
                                                                <input type="text" class="form-control" placeholder="" value={jazzNo}  onChange={(e) => setJazzNo(e.target.value)}/>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="text-center">
                                                            <button class="btn btn-primary w-100 mb-2" onClick={() => navigate('/order-summary', { replace: true })}  disabled={handleValidateJazzForm()}>Pay Now</button>
                                                            <a href="/cartdetail" class="cta">Cancel and Return</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="cardImg text-center">
                                                    <img src="images/jazz.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="easypaisa" role="tabpanel" aria-labelledby="easypaisa-tab">
                                    <div class="card-payment">

                                        <div class="row ">
                                            <div class="col-xl-6">
                                                <form class="custom-form">
                                                    <div class="row ">
                                                        <div class="col-lg-12">
                                                            <div class="payment-text">
                                                                <p>
                                                                    Experience easy payments – save your Easypaisa account as default method to pay!
                                                                    Please ensure your Easypaisa account is Active and has sufficient balance. </p>

                                                                <p>To confirm your payment after providing OTP: </p>

                                                                <p>- USSD prompt for Telenor Customers Only <br/> • Unlock your phone and enter 5 digit PIN in the prompt to pay </p>

                                                                <p>OR </p>

                                                                <p>- Approve Payment in your Easypaisa App (Telenor and Other Networks)</p>
                                                                • Login to Easypaisa App and tap on payment notification to approve<br/>
                                                                <br/>• If you miss the notification, go to My Approvals in side menu to confirm
                                                                
                                                            </div>
                                                            

                                                            <div class="form-group">
                                                                <label>Easypaisa Account Number</label>
                                                                <input type="text" class="form-control" placeholder="" value={easypaisaNo}  onChange={(e) => seteasypaisaNo(e.target.value)}/>

                                                            </div>
                                                        </div>
                                                     </div>
                                                   
                                                    </form>
                                                    <div class="col-lg-12">
                                                        <div class="text-center">
                                                            <button class="btn btn-primary w-100 mb-2"  onClick={() => navigate('/order-summary', { replace: true })}  disabled={handleValidateEasyPaisaForm()}>Pay Now</button>
                                                            <a href="/cartdetail" class="cta">Cancel and Return</a>
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="cardImg text-center">
                                                    <img src="images/easypaisa.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


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

            </div>
            </div>
       
       
       );
  }
  
  export default PayementProcess;