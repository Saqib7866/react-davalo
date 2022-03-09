import CompundingHeader from "../components/compoundingComponents/CompoundingHeader";
import FileUpload from "../components/genericComponents/FileUpload";
import GuideLine from "../components/asaanOrderComponents/GuideLine";
import banner from '../assets/images/banner.png'
import prescription from "../assets/images/icons/prescription.png"
import phone from "../assets/images/icons/phone-call.png"
import dollar from "../assets/images/icons/dollar.png"
import sample from "../assets/images/sample.png"
import delivery from "../assets/images/icons/delivery-man.png"
import { useState } from "react";
import { Link } from "react-router-dom";

function CompoudingPharmacy() {
  const [inputs, setInputs] = useState({ fullName: '', phone: '' });
  const [fileName, setFileName] = useState('No image uploaded');
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs.fullName + inputs.phone);
  }
  const handleUpload = (e) => {
    setFileName(e.target.files[0].name)
  };
  const handleValidateForm = () => {
    if (inputs.fullName !== "" && inputs.phone !== "" && fileName !== "No image uploaded") {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div>
      <section>
        <div className="img-banner">
          <img src={banner} alt="" className="w-100" />
        </div>
      </section>

      {/* HEADING PAGE START */}
      {/* section  Prescription Start */}
      <section className="compoundOrder">
        <div className="container-fluid">
          <div className="content-card">
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h3>How to Order Compounded Medicines</h3>
                  <div className="media-step">
                    <div className="icon-card">
                      <img src={prescription} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Upload prescription</h4>
                      <p>Fill in your personal details and upload your compounding prescription.</p>
                      <Link to="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#uploadprescription"><i><span className="iconify" data-icon="ant-design:cloud-upload-outlined" /></i> Upload</Link>
                    </div>
                  </div>
                  <div className="media-step">
                    <div className="icon-card">
                      <img src={phone} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Get confirmation and quote for the products</h4>
                      <p>(Our experienced pharmacists will contact you and let you know
                        about the availability and price of the product)</p>
                    </div>
                  </div>
                  <div className="media-step">
                    <div className="icon-card">
                      <img src={dollar} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Payment Method</h4>
                      <p>You can pay at your doorstep using Cash</p>
                    </div>
                  </div>
                  <div className="media-step">
                    <div className="icon-card">
                      <img src={delivery} alt="" />
                    </div>
                    <div className="media-body">
                      <h4>Get your order at your doorstep</h4>
                      <p> Your compounded medicines will be delivered to you at your doorstep.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for uploading prescription added */}

      <div className="modal fade modalLarge" id="uploadprescription" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modalheader">
              <h5 className="modal-title">Upload Prescription</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <i><span className="iconify" data-icon="ep:close" /></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <form className="custom-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="field-icon">
                        <input type="text" className="form-control" placeholder="Full Name*" />
                        <i><span className="iconify" data-icon="carbon:user" /></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <div className="field-icon">
                        <input type="email" className="form-control" placeholder="email*" />
                        <i><span className="iconify" data-icon="simple-line-icons:envelope" /></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone no</label>
                      <div className="field-icon">
                        <input type="text" className="form-control" placeholder="Phone number*" />
                        <i><span className="iconify" data-icon="lucide:phone" /></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>State</label>
                      <div className="field-icon">
                        <input type="text" className="form-control" placeholder="email*" />
                        <i><span className="iconify" data-icon="bx:bx-flag" /></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <div className="field-icon">
                        <input type="text" className="form-control" placeholder="Phone number*" />
                        <i><span className="iconify" data-icon="bx:bx-flag" /></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Shipping address*</label>
                      <div className="field-icon">
                        <input type="text" className="form-control" placeholder="Shipping address*" />
                        <i><span className="iconify" data-icon="carbon:location" /></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Upload Prescription</label>
                      <div className="uploadGroup">
                        <input type="file" id="uploadFiled" name="prescription" className="upload-small" />
                        <label htmlFor="uploadFiled" className="uploadLabel"> <span>No image uploaded</span> </label>
                        <label htmlFor="uploadFiled" className="cta-file">Browse</label>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100">Place Order</button>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="content-card card-guideline h-100">
                    <h3>Guidelines <span>(How to upload prescription)</span></h3>
                    <p>Do not crop out any part of the prescription image. Avoid unclear or blurred image of your prescription.
                      Include details of your doctor, patient and clinic visit date. <br />
                      Medicines will only be dispensed against a valid prescription.</p>
                    <h4>(Reference Image)</h4>
                    <div className="sample-image">
                      <img src={sample} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* section  Prescription End */}
    </div >
  );
}

export default CompoudingPharmacy;
