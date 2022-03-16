import React from 'react'

import {  Link } from "react-router-dom";
import prescription from '../../assets/images/icons/prescription.png'
import phone from '../../assets/images/icons/phone-call.png'
import deliveryMan from '../../assets/images/icons/delivery-man.png'
const HowItWorks = () => {
  return (
  <section className="howItWorks">
  <div className="container-fluid">
    <div className="content-card">
      <div className="caption">
        <h3>
          Davalo - Its never easy before to order medicines in a fast way.
        </h3>
        <p>
          Our unmatched <Link to="#"> Asaan Order</Link> Feature let you order
          in just 3 simple easy steps.
        </p>
      </div>
      <ul className="cardWork">
        <li>
          <div className="card-how-work">
            <div className="inner-content">
              <i> <img src={prescription} alt="" /></i>
              <p>Upload a valid prescription</p>
            </div>
          </div>
        </li>
        <li>
          <div className="card-how-work">
            <div className="inner-content">
              <i> <img src={phone} alt=""  /></i>
              <p>You will receive confirmation call</p>
            </div>
          </div>
        </li>
        <li>
          <div className="card-how-work">
            <div className="inner-content">
              <i> <img src={deliveryMan} alt=""  /></i>
              <p>Get your medicines deliver to your location</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default HowItWorks