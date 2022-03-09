import React from 'react'
import backgroundimg from '../assets/images/bg-screen.png'
import { Link } from 'react-router-dom'
export default function SignUpWithEmail() {
  return (
    <>
<section>
            <div className="container-fluid">
                <div className="content-card p-0 registerPage">
                    <div className="row">
                        <div className="col-lg-6">
                          <div className="contentForm">
                            <form action="" className="register-form custom-form">
                              <Link to="/signUp" className="cta-back"><span class="iconify" data-icon="eva:arrow-back-fill"></span></Link>
                                <h3>Sign Up</h3>
                                <h4 className="primary-heading">Sign in using Email</h4>
                                <div className="form-group">
                                  <label>Full Name</label>
                                  <div className="field-icon">
                                      <input type="text" class="form-control" placeHolder="Full Name*" required/>
                                      <i><span className="iconify" data-icon="carbon:user"></span></i>
                                  </div>
                              </div>
                              <div className="form-group">
                                <label>Email</label>
                                <div className="field-icon">
                                    <input type="email" class="form-control" placeHolder="email*"/>
                                    <i><span className="iconify" data-icon="simple-line-icons:envelope"></span></i>
                                </div>
                            </div>
                              <div className="form-group">
                                  <label>Phone Number</label>
                                  <div className="field-icon">
                                    <input type="text" class="form-control" placeHolder="Phone number*"/>
                                      <i><span className="iconify" data-icon="lucide:phone"></span></i>
                                  </div>
                              </div>
                              <div className="form-group">
                                <label>Password</label>
                                <div className="field-icon">
                                    <input type="password" class="form-control" placeHolder="password"/>
                                    <i><span className="iconify" data-icon="clarity:lock-line"></span></i>
                                </div>
                            </div>
                              <button className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#phoneNumber">Sign up</button>
                              <p class="text-note">Already have account <Link to="signIn">Sign in</Link></p>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-holder">
                            <img src={backgroundimg} alt="" className="w-100"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
