import CartItem from "../components/cartDetailComponents/CartItem";
import OrderSummary from "../components/cartDetailComponents/OrderSummary";
import { useContext, useState } from 'react';
import CartContext from "../store/cart-context";

function CartDetail() {
  const cartctx = useContext(CartContext);


  const [products, setProducts] = useState(cartctx.items);
  const handleRemove = (id) => {
    cartctx.removeItem(id);
  };

  const handleQtyChange =(prod,e) => {
    const changedquantity = parseInt(e.target.value);
    if(changedquantity && changedquantity > 0){
      cartctx.handleQuantity("", prod, changedquantity);
    }
  }


  return (
    <section className="cart-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-card">
              <div className="title">
                <h2>My Cart {cartctx.items.length}</h2>
                <a href="/labtests" className="cta-underline">
                  Continue Shopping
                </a>
              </div>
              {products.map((product) => (
                <CartItem key={product.id} onRemove={handleRemove} onQtyChange={handleQtyChange} value={product} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetail;
