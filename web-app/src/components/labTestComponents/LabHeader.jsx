import Search from "../../assets/images/icons/search.png"
import PhoneCall from "../../assets/images/icons/phone-call.png"
import Result from "../../assets/images/icons/result.png"
import Sms from "../../assets/images/icons/sms.png"
function LabHeader() {
  return (
    <>
      <section className="heading-page">
        <div className="container">
          <div className="caption text-center">
            <h1>How it Works ?</h1>
            <p>Just a simple few Step and its done</p>
          </div>
        </div>
      </section>
      {/* HOW WORKS START */}
      <section className="how-works">
        <div className="container">
          <ul className="steps-works">
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={Search} alt="" />
                </div>
                <p>Find your lab and book online for test sample collection</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={PhoneCall} alt="" />
                </div>
                <p>
                  You will receive call from representative to book your test
                  schedule
                </p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={Result} alt="" />
                </div>
                <p>Find your lab and book online for test sample collection</p>
              </div>
            </li>
            <li>
              <div className="card-step">
                <div className="icon">
                  <img src={Sms} alt="" />
                </div>
                <p>Find your lab and book online for test sample collection</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* HOW WORKS END */}
    </>
  );
}

export default LabHeader;
