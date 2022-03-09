import Product2 from "../../assets/images/products/product2.png";
import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";

function CartItem(props) {
  const ctx = useContext(CartContext);
  const [product, setProduct] = useState(props.value);
  let output = ctx.getProdQty(product._id);

  return (
    <div className="cart-list">
      <div className="row">
        <div className="col-lg-9">
          <div className="media-cart">
            <div className="image-product">
              <img src={Product2} alt="" />
            </div>
            <div className="media-body">
              <p>{product.name}
              </p>
              <button className="btn btn-sm cta-delete" onClick={() => props.onRemove(product._id)}>
                <span className="iconify" data-icon="mi:delete" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="priceQuantity">
            <div className="price">Rs. {output.price}/-</div>
            <div className="save">
              <del>{product.oldPrice}</del> Save {product.discountpercent}%
            </div>
            <input type="number" min={0} max={10} onChange={() => props.onQtyChange(product)} value={output.quantity} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
