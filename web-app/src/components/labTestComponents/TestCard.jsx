import { Link } from "react-router-dom";
import Flask from "../../assets/images/icons/flask.png";
function TestCard(props) {
  return (
    <div className="col-lg-3">
      <div className="lab-card">
        <Link to="/test-detail">
          <div className="icon">
            <img src={Flask} alt="" />
          </div>
          <div className="cardBody">
            <h4>{props.value.name}</h4>
            <p>{props.value.category}</p>
            <p>{props.value.labName}</p>
          </div>
        </Link>
        <div className="cardFooter">
          <div className="media-body">
            <div className="off">{props.value.actualPrice}</div>
            <div className="price">
              Rs. {props.value.afterPrice} <span>Save 10%</span>
            </div>
          </div>
          <a href="#" className="cta-rounded-small btn-primary">
            {" "}
            <span
              className="iconify"
              data-icon="ph:shopping-cart-simple"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
