import Cart1 from "../../assets/images/products/cart1.png";
import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../store/cart-context";

function MyCartModalItem(props) {
  const [product, setProduct] = useState(props.value);
  const ctx = useContext(CartContext);

  let output = ctx.getProdQty(product._id);

  const QtyHandler = (expression, prod, qty) => {
    ctx.handleQuantity(expression, prod, qty);
  }


  const quantityOnChaangeHandler = (e) => {
    const changedValue = parseInt(e.target.value);
    if (changedValue && changedValue > 0) {
      const p = {
        ...product,
        selectedQuantity: parseInt(e.target.value),
      };
      setProduct(p);
    } else {
      const p = {
        ...product,
        selectedQuantity: 1,
      };
      setProduct(p);
    }
  };

  return (
    <div className="media">
      <div className="cart-image">
        <img src={Cart1} alt="" />
      </div>
      <div className="media-body">
        <h4>{product.name}.</h4>
        <div className="price">
          Rs. {output.price} <del>{product.oldPrice}</del>
        </div>
        <div className="qunatity">
          <span>Quantity</span>
          <div className="input-spinner">
            <button
              className="btn cta-minus"
              onClick={() => QtyHandler("minus", product, output.quantity - 1)}
            >
              <i>
                <span className="iconify" data-icon="ci:minus" />
              </i>
            </button>
            <div className="spinner-field">
              <input
                type="text"
                value={output.quantity ? output.quantity : 1}
                className="form-control"
                onChange={quantityOnChaangeHandler}
              />
            </div>
            <button
              className="btn cta-plus"
              onClick={() => QtyHandler("plus", product, output.quantity + 1)}
            >
              <i>
                <span className="iconify" data-icon="ci:plus" />
              </i>
            </button>
          </div>
        </div>
      </div>
      <div className="action">
        <button href="#" className="btn btn-sm cta-delete" onClick={() => props.onDel(product._id)}>
          <span className="iconify" data-icon="mi:delete" />
        </button>
      </div>
    </div>
  );
}

export default MyCartModalItem;
