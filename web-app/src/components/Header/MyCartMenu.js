import React from 'react'

import {  Link } from "react-router-dom";
import Cart1 from "../../assets/images/products/cart1.png"
const MyCartMenu = () => {
  return (
    <div className="dropdown-menu cart-dropdown" aria-labelledby="dropdownMenuButton1">
    <div className="title-cart">
      <h4>My Cart</h4>
    </div>
    <div className="cart-body" data-simplebar>
      <div className="media">
        <div className="cart-image">
          <img src={Cart1} alt="#" />
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
          <img src={Cart1} alt="#" />
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
        <Link  to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
        </div>
      </div>
      <div className="media">
        <div className="cart-image">
          <img src={Cart1} alt="#" />
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
        <Link  to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
        </div>
      </div>
      <div className="media">
        <div className="cart-image">
          <img src={Cart1} alt="#" />
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
          <img src={Cart1} alt="#" />
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
        <Link  to="#" className="cta-delete"><span className="iconify" data-icon="mi:delete" /></Link>
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
  )
}

export default MyCartMenu