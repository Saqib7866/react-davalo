import Flask from "../assets/images/icons/flask-large.png"
function TestDetail() {
  return (
    <section className="product-detail">
      <div className="container">
        <div className="content-card">
          <div className="row">
            <div className="col-lg-4">
              <div className="img-report text-center">
                <img
                  src={Flask}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="info-card mb-">
                <h2>Diabetes Profile Package</h2>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="brand">
                      Brand: <span>Chughtai Labs</span>
                    </div>
                    <div className="price">
                      Rs. 499 <del>550</del>
                      <span>Save 10%</span>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h4>Tests Included in package</h4>
                    <ul className="package">
                      <li>
                        <span> Glucose Fasting</span>
                      </li>
                      <li>
                        <span>HbA1c</span>
                      </li>
                      <li>
                        <span>Micro Albumin</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detailFooter">
                  <a href="#" className="btn btn-primary">
                    <i>
                      <span
                        className="iconify"
                        data-icon="ph:shopping-cart-simple"
                      />{" "}
                    </i>{" "}
                    Add to cart
                  </a>
                </div>
              </div>
              <div className="card-detail">
                <div className="cardHeader">
                  <h4>Description</h4>
                </div>
                <div className="card-body">
                  It is formulated with clear defend technology to help clear
                  spots and defend against new breakouts from first use for
                  healthy looking, spot proof skin. It is best suitable for
                  sensitive skin. It consists of Salicylic acid as the main
                  ingredient which helps preventing the acne. It is a oil-free
                  scrub which is the best feature for spot prone skin.
                </div>
                <div className="card-footer text-end">
                  <a href="#" className="cta-view">
                    See All{" "}
                    <i>
                      <span
                        className="iconify"
                        data-icon="eva:arrow-forward-fill"
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestDetail;
