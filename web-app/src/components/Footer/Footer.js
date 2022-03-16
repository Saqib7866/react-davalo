import React from 'react'

import LogoWhite from '../../assets/images/logo-white.png'

import Cash from '../../assets/images/payment/cash-del.png'

import EasyPaisa from '../../assets/images/payment/easypaisa.png'

import JazzCash from '../../assets/images/payment/jazzCash.png'
import MasterCard from '../../assets/images/payment/Mastercard-Logo.png'


import {  Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
    <div class="container">
      <div class="d-flex d-lg-none footer-content-header">
        <Link to="#" class="brand-footer"><img src={LogoWhite} alt="" class="img-fluid" /></Link>

        <ul class="social-links">
          <li>
            <Link to="#"><span class="iconify" data-icon="dashicons:facebook-alt"></span></Link>
          </li>
          <li>
            <Link to="#"><span class="iconify" data-icon="ant-design:twitter-outlined"></span></Link>
          </li>
          <li>
            <Link to="#"><span class="iconify" data-icon="lucide:instagram"></span></Link>
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-sm-4 col-6">
              <h4>Davalo</h4>
              <ul class="quick-links">
                <li><Link to="#">Careers</Link></li> 
                <li><Link to="a#">About us</Link></li>
                <li><Link to="#">Contact us</Link></li>
                <li><Link to="#">Delivery Information</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">FAQ's</Link></li>
                <li><Link to="#">Refund Policy</Link></li>
              </ul>
            </div>
            <div class="col-sm-4 col-6">
              <h4>Popular categories</h4>
              <ul class="quick-links">
                <li><Link to="#">Oral Care</Link></li>
                <li><Link to="#">Baby Nutrition</Link></li>
                <li><Link to="#">Herbal Cares</Link></li>
                <li><Link to="#">Men's Health</Link></li>
                <li><Link to="#">Women's Health</Link></li>
                <li><Link to="#">Labs Tests</Link></li>
              </ul>
            </div>
            <div class="col-sm-4">
              <h4>Contact us</h4>
              <ul class="quick-links">
                <li><Link to="tel:+92-321-1234567">+92-321-1234567</Link></li>
                <li>
                  <Link to="mailto:Emaple@davalo.com">Emaple@davalo.com</Link>
                </li>
                <li>Area 12, Karachi Pakistan</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-2 d-none d-lg-block">
          <Link to="#" class="brand-footer"><img src={LogoWhite} alt="" class="img-fluid" /></Link>
          <ul class="social-links">
            <li>
              <Link to="#"><span class="iconify" data-icon="dashicons:facebook-alt"></span></Link>
            </li>
            <li>
              <Link to="#"><span class="iconify" data-icon="ant-design:twitter-outlined"></span></Link>
            </li>
            <li>
              <Link to="#"><span class="iconify" data-icon="lucide:instagram"></span></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5">
            <p>2022 Davalo.PK, All Rights Reserved.</p>
          </div>
          <div class="col-md-7">
            <ul class="payment-options">
              <li>
                <img src={Cash} alt="" />
              </li>
              <li>
                <img src={EasyPaisa} alt="" />
              </li>
              <li>
                <img src={JazzCash} alt="" />
              </li>
              <li>
                <img src={MasterCard} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer