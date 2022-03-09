

import { getAuth } from "firebase/auth";
import { useCallback, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { fireBaseApi } from "./components/firebase/firebaseService";
import Footer from "./components/footerComponents/Footer";
import ProductDetail from "./components/genericComponents/ProductDetail";
import Header from "./components/header/Header";
import HealthPackageDetail from "./components/labTestComponents/HealthPackageDetail";
import AsaanOrder from "./screens/AsaanOrder";
import CartDetail from "./screens/CartDetail";
import CompleteOrder from "./screens/CompleteOrder";
import CompoudingPharmacy from "./screens/CompoundingPharmacy";
import Dashboard from "./screens/Dashboard";
import EmailVerification from "./screens/EmailVerification";
import LabTestHome from "./screens/LabTestHome";

import OrderSummary from "./screens/OrderSummary";
import PayementProcess from "./screens/PayementProcessing";
import SelectedLabTests from "./screens/SelectedLabTests";
import ShippingDetails from "./screens/ShippingDetails";
import SignIn from "./screens/SignIn";
import TestDetail from "./screens/TestDetail";
import VerifyEmail from "./screens/VerifyEmail";
import CartProvider from "./store/cartProvider";
import ProductListing from "./screens/Products";
import SignUpWithEmail from "./screens/SignUpWithEmail";
import SignupWithPhone from "./screens/SignupWithPhone";
import Signup from "./screens/Signup";
import ResetPassword from "./screens/ForgetPassword";
import OtpModal from "./components/modal/OtpModal";
import ShippingReview from "./screens/ShippingReview";
import PaymentProcess from "./screens/PaymentProcess";
import OrderComplete from "./screens/OrderComplete";
function App() {
  const intervalId = useRef(null);
  const loggedIn = localStorage.getItem("loggedIn");

  const getIdToken = useCallback(async () => {
    const auth = getAuth();
    if (loggedIn) {
      auth.onAuthStateChanged(async (user) => {
        if (user !== null && user.stsTokenManager.isExpired === false) {
          intervalId.current = setInterval(async () => {
            const user = await auth.currentUser;

            const token = localStorage.getItem("idToken");
            if (token && user !== null) {
              const response = await fireBaseApi.post("", {
                grant_type: "refresh_token",
                refresh_token: user.refreshToken,
              });
              localStorage.setItem(
                "idToken",
                response.data && response.data.id_token
              );
              console.log(response);
            } else {
              clearInterval(intervalId.current);
            }
          }, 3600000);
        }
      });
    }
  }, [loggedIn]);

  useEffect(() => {
    getIdToken();
  }, [loggedIn, getIdToken]);

  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route  path="/signUp" element={<Signup />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/signupWithPhone" element={<SignupWithPhone />}></Route>
          <Route path="/signUpWithEmail" element={<SignUpWithEmail />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route path="/resetPassword" element={<ResetPassword />}></Route>
          <Route path="/shippingDetails" element={<ShippingDetails />}></Route>
          <Route path="/shippingReview" element={<ShippingReview />}></Route>
          <Route path="/paymentProcess" element={<PaymentProcess />}></Route>
          <Route path="/orderComplete" element={<OrderComplete />}></Route>
          <Route
            path="/email-verification"
            element={<EmailVerification />}
          ></Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
          <Route path="/asaanorder" element={<AsaanOrder />}></Route>
          <Route path="/cartDetail" element={<CartDetail />}></Route>
          <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
          <Route
            path="/packagesdetail/:id"
            element={<HealthPackageDetail />}
          ></Route>
          <Route path="/home" element={<Dashboard />}></Route>
          <Route path="/cartdetail" element={<CartDetail />}></Route>
          <Route path="/asaanorder" element={<AsaanOrder />}></Route>
          <Route
            path="/compoundingpharmacy"
            element={<CompoudingPharmacy />}
          ></Route>
          <Route path="/labtests" element={<LabTestHome />}></Route>
          <Route path="/labtests/:text" element={<LabTestHome />}></Route>
          <Route path="/products" element={<ProductListing />}></Route>
          <Route path="/products/:text" element={<ProductListing />}></Route>
          <Route path="/shipping-detail" element={<ShippingDetails />}></Route>
          <Route path="/payement-detail" element={<PayementProcess />}></Route>
          <Route path="/order-summary" element={<OrderSummary />}></Route>
          <Route path="/complete-order" element={<CompleteOrder />}></Route>
          <Route
            path="/selected-lab-tests-list"
            element={<SelectedLabTests />}
          ></Route>
          <Route path="/test-detail" element={<TestDetail />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
