import AsaanHeader from "../components/asaanOrderComponents/AsaanHeader";
import FileUpload from "../components/genericComponents/FileUpload";
import GuideLine from "../components/asaanOrderComponents/GuideLine";
import prescription from "../assets/images/icons/prescription.png"
import phone from "../assets/images/icons/phone-call.png"
import delivery from "../assets/images/icons/delivery-man.png"
import icon from "../assets/images/icons/image.png"
import sample from "../assets/images/sample.png"
import { useState } from "react";
import { Link } from "react-router-dom";
function AsaanOrder() {
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
      <section className="heading-page asan-order">
        <div className="container">
          <div className="caption text-center">
            <h1>ORDER <span>آسان</span></h1>
            <p>Just a simple few Step and its done</p>
          </div>
        </div>
      </section>
      <section className="how-works asanPrder">
        <div className="container">
          <ul className="steps-works">
            <li>
              <div className="card-step">
                <div className="icon"><img src={prescription} alt="" /></div>
                <p>Upload a valid prescription</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon"><img src={phone} alt="" /></div>
                <p>You will receive confirmation
                  call</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon"><img src={delivery} alt="" /></div>
                <p>Get your medicines deliver
                  to your location</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="prescription">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-card prescription-card h-100">
                <div className="caption">
                  <h4>Upload Prescription here</h4>
                  <p>To place Asaan order please upload prescription here</p>
                </div>
                <div className="document-upload d-none d-lg-block">
                  <input type="file" id="file" className="file-upload" hidden />
                  <label htmlFor="file">
                    <span className="icon"><img src={icon} alt="" /></span>
                    <h4>Drop image here, or <span>browse</span> </h4>
                    <span className="support">Supprorts: JPG , PNG</span>
                  </label>
                </div>
                <div className="docs_mobile">
                  <div>
                    <input className="btn uploadFile" id="files" name="files" type="file" />
                    <label htmlFor="files">
                      <i><span className="iconify" data-icon="clarity:upload-cloud-line" /></i>
                      <span> Upload File </span>
                    </label>
                  </div>
                  <button className="btn">
                    <i><span className="iconify" data-icon="codicon:device-camera" /></i>
                    <span>Take Photo</span>
                  </button>
                </div>
                <div className="document-footer">
                  <ul className="media-body">
                    <li><i className="close"><span className="iconify" data-icon="clarity:close-line" /></i><span>No image uploaded </span></li>
                  </ul>
                  <Link to="/" className="btn btn-primary">Place Order</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content-card card-guideline h-100">
                <h3>Guidelines <span>(How to upload prescription)</span></h3>
                <p>Do not crop out any part of the prescription image. Avoid unclear or blurred image of your prescription.
                  Include details of your doctor, patient and clinic visit date.
                  Medicines will only be dispensed against a valid prescription.</p>
                <div className="sample-image">
                  <img src={sample} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AsaanOrder;
