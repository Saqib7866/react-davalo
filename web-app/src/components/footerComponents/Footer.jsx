import WhiteLogo from '../../assets/images/logo-white.png';
import FacebookLogo from '../../assets/images/social/fb.png';
import { Link } from 'react-router-dom';
import whiteLogo from '../../assets/images/logo-white.png'
import DeliveryLogo from '../../assets/images/payment/cash-del.png'
import TwitterLogo from '../../assets/images/social/twitter.png';
import InstaLogo from '../../assets/images/social/insta.png';
import MasterCardLogo from '../../assets/images/payment/Mastercard-Logo.png';
import Visa from '../../assets/images/payment/visa.png';
import JazzCash from '../../assets/images/payment/jazzCash.png';
import EasyPaisa from '../../assets/images/payment/easypaisa.png'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d-flex d-lg-none footer-content-header">
          <Link to="#" className="brand-footer"><img src="images/logo-white.png" alt="" className="img-fluid" /></Link>
          <ul className="social-links">
            <li>
              <Link to="#"><span className="iconify" data-icon="dashicons:facebook-alt" /></Link>
            </li>
            <li>
              <Link to="#"><span className="iconify" data-icon="ant-design:twitter-outlined" /></Link>
            </li>
            <li>
              <Link to="#"><span className="iconify" data-icon="lucide:instagram" /></Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-sm-4 col-6">
                <h4>Davalo</h4>
                <ul className="quick-links">
                  <li><Link to="career.html">Careers</Link></li>
                  <li><Link to="about-us.html">About us</Link></li>
                  <li><Link to="contact-us.html">Contact us</Link></li>
                  <li><Link to="delivery-information.html">Delivery Information</Link></li>
                  <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                  <li><Link to="faqs.html">FAQ's</Link></li>
                  <li><Link to="refund-policy.html">Refund Policy</Link></li>
                </ul>
              </div>
              <div className="col-sm-4 col-6">
                <h4>Popular categories</h4>
                <ul className="quick-links">
                  <li><Link to="#">Oral Care</Link></li>
                  <li><Link to="#">Baby Nutrition</Link></li>
                  <li><Link to="#">Herbal Cares</Link></li>
                  <li><Link to="#">Men's Health</Link></li>
                  <li><Link to="#">Women's Health</Link></li>
                  <li><Link to="#">Labs Tests</Link></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <h4>Contact us</h4>
                <ul className="quick-links">
                  <li><Link to="tel:+92-321-1234567">+92-321-1234567</Link></li>
                  <li>
                    <Link to="mailto:Emaple@davalo.com">Emaple@davalo.com</Link>
                  </li>
                  <li>Area 12, Karachi Pakistan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <Link to="/" className="brand-footer"><img src={whiteLogo} alt="" className="img-fluid" /></Link>
            <ul className="social-links">
              <li>
                <Link to="/"><span className="iconify" data-icon="dashicons:facebook-alt" /></Link>
              </li>
              <li>
                <Link to="/"><span className="iconify" data-icon="ant-design:twitter-outlined" /></Link>
              </li>
              <li>
                <Link to="/"><span className="iconify" data-icon="lucide:instagram" /></Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="copyrights">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <p>2022 Davalo.PK, All Rights Reserved.</p>
            </div>
            <div className="col-md-7">
              <ul className="payment-options">
                <li>
                  <img src={DeliveryLogo} alt="" />
                </li>
                <li>
                  <img src={EasyPaisa} alt="" />
                </li>
                <li>
                  <img src={JazzCash} alt="" />
                </li>
                <li>
                  <img src={MasterCardLogo} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
