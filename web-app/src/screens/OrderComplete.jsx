import React from 'react'

export default function OrderComplete() {
  return (
    <>
    <section className="cart-detail">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="content-card shipping-card h-100">
                            <div className="successMessage">
                                <h2>Thank You!</h2>
                                <p>Your Order Has been placed</p>
                                <a href="index.html" className="cta">Return to Home Page</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="content-card order-card pb-0 h-100">
                            <div className="title">
                                <h2>Order Summary</h2>
                            </div>
                            <ul className="summaryOrder">
                                <li> <span>Your Order Number is #12545. It will be deliver in 2 - 3
                                        working days.</span> </li>
                                <li> <span>For Any Query please contact our customer support or
                                        email us at <a href="mailto:abc@zyx.com">abc@zyx.com</a></span> </li>
                            </ul>
                        </div>
                    </div>
                </div>

           
            </div>
        </section>
    
    </>
  )
}
