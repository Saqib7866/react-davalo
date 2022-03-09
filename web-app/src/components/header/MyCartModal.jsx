import { Link } from "react-router-dom";
import MyCartModalItem from "./MyCartModalItem";
import {useContext } from "react";
import CartContext from "../../store/cart-context";


function MyCartModal() {
  const cartctx = useContext(CartContext);

  const onDeleteHandler = (id) => {
    cartctx.removeItem(id);
  }

  return (
    <div
      className="dropdown-menu cart-dropdown "
      aria-labelledby="dropdownMenuButton1"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="title-cart">
        <h4>My Cart</h4>
      </div>
      <div className="cart-body">
        {cartctx.items.map((product) => (
          <MyCartModalItem key={product._id} value={product}  onDel={onDeleteHandler} />
        ))}
      </div>
      <div className="cart-footer">
        <div className="total">
          <h4>Total Bill</h4>
          <div className="price">Rs: {cartctx.totalAmount}</div>
        </div>
        <Link to="/cartdetail" className="btn btn-default w-100">
          View Cart Details</Link>
        
        <a href="/shipping-detail" className="btn btn-primary w-100">
          Proceed to Checkout
        </a>
      </div>
    </div>
  );
}

export default MyCartModal;
