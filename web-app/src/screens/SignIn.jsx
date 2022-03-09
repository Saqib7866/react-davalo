import React from 'react'
import backgroundimg from '../assets/images/bg-screen.png'
import { Link } from 'react-router-dom'
export default function SignIn() {
  return (
    <>
    <section>
            <div className="container-fluid">
                <div className="content-card p-0 registerPage">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                          
                          <div className="contentForm">
                            <form action="" className="register-form custom-form">
                              <Link to="/signUp" className="cta-back"><span class="iconify" data-icon="eva:arrow-back-fill"></span></Link>
                                <h3>Sign in</h3>
                                <h4 className="primary-heading">Sign in using Email</h4>
                         
                              <div className="form-group">
                                <label>Email</label>
                                <div className="field-icon">
                                    <input type="email" class="form-control" placeHolder="email*"/>
                                    <i><span className="iconify" data-icon="simple-line-icons:envelope"></span></i>
                                </div>
                            </div>
                              <div className="form-group">
                                <label>Password</label>
                                <div className="field-icon">
                                    <input type="password" class="form-control" placeHolder="password"/>
                                    <i><span className="iconify" data-icon="clarity:lock-line"></span></i>
                                </div>
                            </div>
                              <button className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#phoneNumber">Sign in</button>
                              <p class="text-note"><Link to="/resetPassword">Forgot Password ?</Link></p>
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


// import React, { useState } from 'react'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import BackGround from "../assets/images/bg-screen.png"
// import { useNavigate } from 'react-router';
// import { toast, ToastContainer } from "react-toastify";
// import { firebaseConfig } from '../components/firebase/firebaseConfig';
// import { Link } from 'react-router-dom';

// export default function SignIn() {
//     const navigate = useNavigate()
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const validate = () => {
//         if (password !== "" && password.length >= 8 && email !== "") {
//             return false
//         }
//         else {
//             return true
//         }
//     }

//     const SignIn = async (e) => {
//         e.preventDefault()
//         const auth = getAuth()
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 if (user.emailVerified) {
//                     navigate("/home")
//                     console.log(user)
//                 } else {
//                     toast("Please Verify Your Email To Continue", { type: "warning" })
//                 }
//             })
//             .catch((error) => {
//                 if (error.message.includes("wrong-password")) {
//                     toast("Invalid Password Please Enter Correct Password", { type: "error" })
//                 } else {
//                     toast("Invalid Email Address", { type: "error" })
//                 }

//             });
//     };
//     return (
//         <section>
//             <div className="container">
//                 <div className="content-card p-0">
//                     <div className="row ">
//                         <div className="col-lg-6">
//                             <form action className="register-form custom-form">
//                                 <h3>Sign In</h3>
//                                 <div className="col-lg-12 mt-5">
//                                     <div className="form-group">
//                                         <label>Email*</label>
//                                         <div className="field-icon">
//                                             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email*" />
//                                             <i><span className="iconify" data-icon="simple-line-icons:envelope" /></i>
//                                         </div>
//                                     </div>
//                                 </div><div className="col-lg-12">
//                                     <div className="form-group">
//                                         <label>Password*</label>
//                                         <div className="field-icon">
//                                             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password*" />
//                                             <i><span className="iconify" data-icon="clarity:lock-line" /></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-12 mt-5">
//                                     <button className="btn btn-primary w-100" disabled={validate()} onClick={SignIn}>Sign In</button>
//                                     <p className="text-center cta-account">Does'nt have an account? <Link to="/"> Sign Up</Link> </p>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="col-lg-6">
//                             <img src={BackGround} alt="" className="w-100" />
//                         </div>
//                     </div>
//                 </div>
//                 <ToastContainer />
//             </div>
//         </section>
//     )
// }
