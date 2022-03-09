import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
function CompleteOrder() {
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

    <div> <div class="container">
    <div class="row">
        <div class="col-xl-8">
            <div class="content-card shipping-card h-100">
                <div class="successMessage">
                    <h2>Thank You!</h2>
                    <p>Your Order Has been placed</p>
                    <a href="/" class="cta">Return to Home Page</a>
                </div>

            </div>
        </div>
        <div class="col-xl-4">
            <div class="content-card order-card pb-0 h-100">
                <div class="title">
                    <h2>Order Summary</h2>
                </div>
                <ul class="summaryOrder">
                    <li> <span>Your Order Number is #12545. It will be deliver in 2 - 3
                            working days.</span> </li>
                    <li> <span>For Any Query please contact our customer support or
                            email us at <a href="mailto:abc@zyx.com">abc@zyx.com</a></span> </li>
                </ul>
            </div>
        </div>
    </div>

</div>
</div>
       






       


   
    );
  }
  
  export default CompleteOrder;