import React from "react";
import { Link } from "react-router-dom";
import backgroundimg from "../assets/images/bg-screen.png";
export default function Signup() {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="content-card p-0 registerPage">
            <div className="row">
              <div className="col-lg-6">
                <div className="contentForm">
                  <form action="" className="register-form custom-form">
                    <h3>Sign Up</h3>
                    <h4 className="primary-heading">Sign up using</h4>
                    <ul className="nav-login">
                      <li>
                        <Link to="/signupWithPhone" className="phone">
                          <i>
                            <span
                              className="iconify"
                              data-icon="ci:phone"
                            ></span>
                          </i>
                          <span>Sign up with Phone Number</span>
                        </Link>
                      </li>
                      <li>
                        <a to="#" className="fb">
                          <i>
                            <span
                              className="iconify"
                              data-icon="bx:bxl-facebook"
                            ></span>
                          </i>
                          <span>Sign up with Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="gplus">
                          <i>
                            <span
                              className="iconify"
                              data-icon="ei:sc-google-plus"
                            ></span>
                          </i>
                          <span>Sign up with Google</span>
                        </a>
                      </li>
                      <li>
                        <Link to="/signUpWithEmail" className="email">
                          <i>
                            <span
                              className="iconify"
                              data-icon="fa-solid:envelope"
                            ></span>
                          </i>
                          <span>Sign up with Email</span>
                        </Link>
                      </li>
                    </ul>
                    <p>
                      Already have account <Link to="/signIn">Sign in</Link>
                    </p>
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
    </>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   getRedirectResult,
//   RecaptchaVerifier,
//   sendEmailVerification,
//   signInWithPhoneNumber,
//   signInWithRedirect,
// } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import FeatherIcon from "feather-icons-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { GoogleAuthProvider } from "firebase/auth";
// import { FacebookAuthProvider } from "firebase/auth";
// import { useNavigate } from "react-router";
// import GoogleImage from "../assets/images/social/Google__G__Logo.png";
// import FbImage from "../assets/images/social/fb.png";
// import call from "../assets/images/social/call.png";
// import mail from "../assets/images/social/email.png";
// import BackGround from "../assets/images/bg-screen.png";
// import { Link } from "react-router-dom";
// import { firebaseConfig } from "../components/firebase/firebaseConfig";
// import Confirm from "../components/models/confirm";
// import LoadingIndicator from "../components/loader/loader";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [rePassword, setRePassword] = useState("");
//   const [number, setNumber] = useState("");
//   const [signIn, setSignIn] = useState("");
//   const [showLoader, setShowLoader] = useState(false);
//   const recaptchaWrapperRef = useRef();
//   const [responseData, setResponseData] = useState();
//   initializeApp(firebaseConfig);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loading = localStorage.getItem("loading");
//     if (loading === "true") {
//       setShowLoader(true);
//     }
//     const auth = getAuth();
//     getRedirectResult(auth).then(async (response) => {
//       if (response) {
//         localStorage.setItem("loading", false);
//         console.log("loggedIn");
//         const idToken = await getFirstTimeIdToken();
//         if (idToken) {
//           localStorage.setItem("loggedIn", true);
//           localStorage.setItem(
//             "token",
//             response._tokenResponse.oauthAccessToken
//           );
//           localStorage.setItem(
//             "user",
//             JSON.stringify({
//               id: response.user.uid,
//               name: response.user.displayName,
//               email: response.user.email,
//               photo: response.user.photoURL,
//             })
//           );
//           navigate("/home");
//         }
//       } else {
//         // setTimeout(() => {
//         localStorage.setItem("loading", false);
//         setShowLoader(false);
//         // }, 3000);
//       }
//     });
//   }, [navigate]);

//   const getFirstTimeIdToken = async () => {
//     const token = await getAuth().currentUser.getIdToken();
//     if (token) {
//       localStorage.setItem("idToken", token);
//     }
//     return token;
//   };

//   const loginWithGoogle = async () => {
//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();
//     setShowLoader(true);
//     localStorage.setItem("loading", true);
//     await signInWithRedirect(auth, googleProvider);
//   };

//   const loginWithFacebook = async () => {
//     const auth = getAuth();
//     const provider = new FacebookAuthProvider();
//     setShowLoader(true);
//     localStorage.setItem("loading", true);
//     await signInWithRedirect(auth, provider);
//   };

//   const goToSignUp = async () => {
//     navigate("/signUp");
//   };

//   const SignUp = (e) => {
//     e.preventDefault();
//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         sendEmailVerification(auth.currentUser).then(() => {
//           toast("Email Verification Sent To " + email + " Successfully", {
//             type: "success",
//           });
//         });
//       })
//       .catch((error) => {
//         toast("Failed", { type: "error" });
//       });
//   };

//   const sendOtpVerification = async () => {
//     const auth = getAuth();
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "small",
//         badge: "inline",
//         callback: () => {},
//       },
//       auth
//     );
//     await window.recaptchaVerifier.render();
//   };

//   const onSignInSubmit = (e) => {
//     e.preventDefault();
//     sendOtpVerification();
//     const appVerifier = window.recaptchaVerifier;
//     const auth = getAuth();
//     signInWithPhoneNumber(auth, number, appVerifier)
//       .then((confirmationResult) => {
//         setResponseData(confirmationResult);
//         window.confirmationResult = confirmationResult;
//         window.recaptchaVerifier.clear();
//         document.getElementById("phoneNumber").classList.add("show");
//         document.getElementById("phoneNumber").style = "display:block";
//         document.body.style = "overflow: hidden; padding-right: 17px;";
//       })
//       .catch((error) => {
//         window.recaptchaVerifier.clear();
//         toast("Failed To Verify Phone Number", { type: "error" });
//       });
//   };

//   const verifyCode = (code) => {
//     responseData
//       .confirm(code)
//       .then((result) => {
//         recaptchaWrapperRef.current.innerHTML = ``;
//         localStorage.setItem("token", result.user.accessToken);
//         localStorage.setItem("phoneNumber", result.user.phoneNumber);
//         document.getElementById("phoneNumber").style = "display:none";
//         toast("OTP Verified Successfully", { type: "success" });
//         navigate("/home");
//       })
//       .catch((error) => {
//         toast("Failed To Verify OTP", { type: "error" });
//         document.getElementById("phoneNumber").style = "display:none";
//       });
//   };

//   const validate = () => {
//     if (
//       signIn === "email" &&
//       name !== "" &&
//       password !== "" &&
//       password.length >= 8 &&
//       email !== "" &&
//       rePassword !== "" &&
//       rePassword === password
//     ) {
//       return false;
//     }
//     if (signIn === "phone" && name !== "" && number.length >= 13) {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   if (!showLoader) {
//     return (
//       <section>
//         <div className="container">
//           <div className="content-card p-0">
//             <div className="row ">
//               <div className="col-lg-6">
//                 <form className="register-form custom-form">
//                   <h3>Sign Up</h3>
//                   {signIn === "" && (
//                     <>
//                       <h4 className="primary-heading">Sign up using</h4>
//                       <ul className="nav-login">
//                         <li>
//                           <Link
//                             to=""
//                             onClick={loginWithGoogle}
//                             className="gplus"
//                           >
//                             <i>
//                               <span
//                                 class="iconify"
//                                 data-icon="ei:sc-google-plus"
//                               ></span>
//                             </i>{" "}
//                             Sign up with Google
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="" onClick={loginWithFacebook} className="fb">
//                             <i>
//                               <span
//                                 class="iconify"
//                                 data-icon="bx:bxl-facebook"
//                               ></span>
//                             </i>{" "}
//                             Sign up with facebook
//                           </Link>
//                         </li>

//                         <li>
//                           <Link
//                             to=""
//                             onClick={() => setSignIn("email")}
//                             className="email"
//                           >
//                             <i>
//                               <span
//                                 class="iconify"
//                                 data-icon="fa-solid:envelope"
//                               ></span>
//                             </i>
//                             Sign up with Email
//                           </Link>
//                         </li>
//                         <li>
//                           <Link
//                             to=""
//                             onClick={() => setSignIn("phone")}
//                             className="phone"
//                           >
//                             <i>
//                               <span class="iconify" data-icon="ci:phone"></span>
//                             </i>
//                             Sign up with Phone Number
//                           </Link>
//                         </li>
//                       </ul>
//                       <p>Already have account <Link to="/">Sign in</Link></p>
//                     </>
//                   )}
//                   <div className="row align-items-center">
//                     {(signIn === "email" || signIn === "phone") && (
//                       <div className="col-lg-12">
//                         <div
//                           className="flex mb-4 back"
//                           style={{ cursor: "pointer" }}
//                           onClick={() => setSignIn("")}
//                         >
//                           <FeatherIcon icon="arrow-left" /> Back{" "}
//                         </div>
//                         <div className="form-group">
//                           <label>Full Name</label>
//                           <div className="field-icon">
//                             <input
//                               type="text"
//                               value={name}
//                               onChange={(e) => setName(e.target.value)}
//                               className="form-control"
//                               placeholder="Full name*"
//                             />
//                             <i>
//                               <span
//                                 className="iconify"
//                                 data-icon="carbon:user"
//                               />
//                             </i>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                     {signIn === "email" && (
//                       <>
//                         <div className="col-lg-12">
//                           <div className="form-group">
//                             <label>Email*</label>
//                             <div className="field-icon">
//                               <input
//                                 type="text"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="form-control"
//                                 placeholder="Email*"
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="simple-line-icons:envelope"
//                                 />
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group">
//                             <label>Password*</label>
//                             <div className="field-icon">
//                               <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="form-control"
//                                 placeholder="Password*"
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="clarity:lock-line"
//                                 />
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group">
//                             <label>Re-Enter password*</label>
//                             <div className="field-icon">
//                               <input
//                                 type="password"
//                                 value={rePassword}
//                                 onChange={(e) => setRePassword(e.target.value)}
//                                 className="form-control"
//                                 placeholder="Re-enter password*"
//                               />
//                               <i>
//                                 <span
//                                   className="iconify"
//                                   data-icon="clarity:lock-line"
//                                 />
//                               </i>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     )}
//                     {signIn === "phone" && (
//                       <>
//                         <div className="col-lg-12">
//                           <label>Phone number*</label>
//                         </div>
//                         <div className="col-lg-12">
//                           <div className="form-group">
//                             <div className="field-icon">
//                               <PhoneInput
//                                 className="form-control"
//                                 placeholder="Enter phone number"
//                                 value={number}
//                                 onChange={(e) => setNumber(e)}
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="col-lg-12" style={{ textAlign: "end" }}>
//                           <center>
//                             <div
//                               className="mt-3 mb-2"
//                               id="recaptcha-container"
//                               ref={recaptchaWrapperRef}
//                             ></div>
//                           </center>
//                         </div>
//                       </>
//                     )}
//                     {signIn === "email" && (
//                       <div className="col-lg-12">
//                         <button
//                           className="btn btn-primary w-100"
//                           disabled={validate()}
//                           onClick={SignUp}
//                         >
//                           Sign Up
//                         </button>
//                         <p
//                           className="text-center cta-account"
//                           onClick={goToSignUp}
//                         >
//                           Already have an account? <Link to=""> Sign in</Link>{" "}
//                         </p>
//                       </div>
//                     )}
//                     {signIn === "phone" && (
//                       <div className="col-lg-12">
//                         <button
//                           className="btn btn-primary w-100"
//                           onClick={onSignInSubmit}
//                           disabled={validate()}
//                         >
//                           Sign Up
//                         </button>

//                       </div>
//                     )}
//                   </div>
//                 </form>
//               </div>
//               <div className="col-lg-6">
//                 <img src={BackGround} alt="" className="w-100" />
//               </div>
//               <Confirm number={number} verifyCode={verifyCode} />
//             </div>
//           </div>
//         </div>
//         <ToastContainer />
//       </section>
//     );
//   } else {
//     return (
//       <center>
//         <div style={{ marginTop: "150px", marginBottom: "150px" }}>
//           <LoadingIndicator />
//         </div>
//       </center>
//     );
//   }
// }
