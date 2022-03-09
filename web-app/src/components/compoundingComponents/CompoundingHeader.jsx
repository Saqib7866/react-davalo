import Prescription from "../../assets/images/icons/prescription.png";
import CellPhone from "../../assets/images/icons/phone-call.png";
import DeliveryMan from "../../assets/images/icons/delivery-man.png";
function CompundingHeader() {
  return (
    <>
      <section class="heading-page compounding">
        <div class="container">
          <div class="caption text-center">
            <h1>How it Works ?</h1>
            <p>Just a simple few Step and its done</p>
          </div>
        </div>
      </section>
      <section className="how-works">
        <div className="container">
          <ul className="steps-works">
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={Prescription} alt="" />
                </div>
                <p>Upload a valid prescription</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={CellPhone} alt="" />
                </div>
                <p>You will receive confirmation call</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={DeliveryMan} alt="" />
                </div>
                <p>Get your medicines deliver to your location</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default CompundingHeader;
