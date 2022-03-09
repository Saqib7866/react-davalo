import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "../../store/cart-context";

function OrderSummary() {
  const cartctx = useContext(CartContext);
  const shippingCharges = 200;
  return (
    <div className="content-card order-card">
      <div className="title">
        <h2>Order Summary</h2>
      </div>
      <div className="card-body">
        <ul>
          <li>
            <span>Subtotal</span>
            <span className="price">Rs. {cartctx.totalAmount}</span>
          </li>
          <li>
            <span>Shipping Charges</span>
            <span className="price">Rs. {shippingCharges}</span>
          </li>
          <li className="total">
            <span>Total</span>
            <span className="price">Rs. {cartctx.totalAmount + shippingCharges}</span>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <Link to="/shipping-detail" className="btn btn-primary w-100">
          Place Order
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
