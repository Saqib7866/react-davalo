import { Link } from "react-router-dom";
import product1 from "../../assets/images/products/product1.png";
function ProductCard(props) {
  return (
    <div className="cardpproduct">
      <div className="pruductImage text-center">
        <Link to="/productdetail/8">  <img src={product1} alt="" /></Link>
      </div>
      <div className="cardBody">
        <Link className="title" to="/productdetail/8"> Surbex</Link>
        <div className="size">Pack size: 1</div>
        <div className="name">Syrup</div>
      </div>
      <span className="badge-label save">Save 10%</span>
      <div className="cardFooter">
        <div className="media-body">
          <div className="price">Rs. 499 <del>550</del></div>
        </div>
        <Link to="#" className="btn btn-primary"><i><span className="iconify" data-icon="ph:shopping-cart-simple" /></i>
          <span>Add</span>
        </Link>
      </div>
    </div>

  );
}

export default ProductCard;
