import React from 'react'

export default function OtpModal() {
  return (
    <>
   <div class="modal fade" id="phoneNumber" tabIndex="-1" aria-labelledby="phoneNumber" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span class="iconify"
            data-icon="icon-park:close"></span></button>

        <div className="modal-body">
          <img src="images/verify.png" alt="" />
          <h3>Please Enter OTP</h3>
          <p>We have sent you one time password to your number 0321-12345678</p>
          <div className="time">00:59</div>
          <div className="field-verify">
            <input type="tel" class="form-control" maxLength="1"/>
            <input type="tel" class="form-control" maxLength="1" disabled/>
            <input type="tel" class="form-control" maxLength="1" disabled />
            <input type="tel" class="form-control" maxLength="1" disabled />
            <input type="tel" class="form-control" maxLength="1" disabled />
          </div>
          <a href="#" className="btn btn-primary">Verify</a> <br/>
          <p class="note">Didn't receive OTP! <a href="#">Resend OTP</a> </p>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}
