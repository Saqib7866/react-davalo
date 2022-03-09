import OTPInput from "otp-input-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Confirm(props) {
  const [OTP, setOTP] = useState("");
  return (
    <div
      className="modal fade"
      id="phoneNumber"
      tabIndex={-1}
      aria-labelledby="phoneNumber"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={() =>
              (document.getElementById("phoneNumber").style = "display: none")
            }
            aria-label="Close"
          />
          <div className="modal-body">
            <img src="images/verify.png" alt="" />
            <h3>Please Enter OTP</h3>
            <p>
              We have sent you one time password to your number {props.number}
            </p>
            <div className="field-verify">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                className=""
                OTPLength={6}
                otpType="number"
                disabled={false}
                inputClassName="form-control width"
              />
              {/* <input
                type="tel"
                autoFocus
                className="form-control"
                maxLength={1}
              />
              <input
                type="tel"
                autoFocus={true}
                className="form-control"
                maxLength={1}
                disabled
              />
              <input
                type="tel"
                className="form-control"
                maxLength={1}
                disabled
              />
              <input
                type="tel"
                className="form-control"
                maxLength={1}
                disabled
              />
              <input
                type="tel"
                className="form-control"
                maxLength={1}      
                disabled
              />
              <input
                type="tel"
                className="form-control"
                maxLength={1}
                disabled
              /> */}
            </div>
            <Link
              to=""
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                props.verifyCode(OTP);
                setOTP("");
              }}
            >
              Verify
            </Link>
            <br />
            <p className="note">
              Didn't receive OTP! <Link to="">Resend OTP</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
