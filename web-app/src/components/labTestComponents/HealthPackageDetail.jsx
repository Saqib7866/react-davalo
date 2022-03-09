import family from '../../assets/images/family.png'

function HealthPackageDetail() {
  return (
    <section className="product-detail">
      <div className="container">
        <div className="content-card">
          <div className="row">
            <div className="col-xl-4">
              <div className="img-report text-center">
                <img src={family} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-8">
              <div className="info-card">
                <h2>Basic Family Health Checkup</h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="brand">
                      Brand: <span>Neutrogena</span>
                    </div>
                    <div className="price">
                      Rs. 499 <del>550</del>
                      <span>Save 10%</span>
                    </div>
                    <div className="detailFooter">
                      <h4>Members</h4>
                      <div className="input-spinner">
                        <button className="btn cta-minus">
                          <i>
                            <span className="iconify" data-icon="ci:minus" />
                          </i>
                        </button>
                        <div className="spinner-field">
                          <input
                            type="text"
                            defaultValue={5}
                            className="form-control"
                          />
                        </div>
                        <button className="btn cta-plus">
                          <i>
                            <span className="iconify" data-icon="ci:plus" />
                          </i>
                        </button>
                      </div>
                      <a href="#" className="btn btn-primary">
                        <i>
                          <span
                            className="iconify"
                            data-icon="ph:shopping-cart-simple"
                          />
                        </i>
                        Add to cart
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <h4>Tests Included in package</h4>
                        <ul className="package">
                          <li>
                            <span>CBC/ESR</span>
                          </li>
                          <li>
                            <span>Blood Group &amp; RH Antibody</span>
                          </li>
                          <li>
                            <span>Renal Function Test</span>
                          </li>
                          <li>
                            <span>R.A Factor</span>
                          </li>
                          <li>
                            <span>Lipid Profile</span>
                          </li>
                          <li>
                            <span>Calcium</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <h4>Complimentary Tests</h4>
                        <ul className="package">
                          <li>
                            <span>Urine R/E</span>
                          </li>
                          <li>
                            <span>Doctor Check-up</span>
                          </li>
                          <li>
                            <span>Renal Function Test</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
                    See All
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

export default HealthPackageDetail;
