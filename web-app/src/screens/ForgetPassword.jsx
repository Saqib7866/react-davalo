import React from "react";
import backgroundimg from "../assets/images/bg-screen.png";
import { Link } from "react-router-dom";
import OtpModal from "../components/modal/OtpModal";
export default function ResetPassword() {
  const modachange=(e)=>{
    e.preventDefault()
  }
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="content-card p-0 registerPage">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contentForm">
                  <form className="register-form custom-form">
                    <Link to="/signIn" className="cta-back">
                      <span
                        class="iconify"
                        data-icon="eva:arrow-back-fill"
                      ></span>
                    </Link>
                    <h3>Reset Password</h3>
                    <p className="text-gray">
                      Choose any one to reset password
                    </p>
                    <div className="form-group">
                      <label>Email</label>
                      <div className="field-icon">
                        <input
                          type="email"
                          class="form-control"
                          placeHolder="email*"
                        />
                        <i>
                          <span
                            className="iconify"
                            data-icon="simple-line-icons:envelope"
                          ></span>
                        </i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <div className="field-icon">
                        <input
                          type="text"
                          class="form-control"
                          placeHolder="Phone number*"
                        />
                        <i>
                          <span
                            className="iconify"
                            data-icon="lucide:phone"
                          ></span>
                        </i>
                      </div>
                    </div>
                    <button
                    onClick={modachange}
                      className="btn btn-primary w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#phoneNumber"
                    >
                      Next
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img-holder">
                  <img src={backgroundimg} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <OtpModal/>
    </>
  );
}
