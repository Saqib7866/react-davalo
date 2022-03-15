import React from 'react'
import {  Link } from "react-router-dom";
import Topbar from './Topbar';
const Header = () => {
    return (<header>
  <div className="container-fluid">
        <Topbar/>
    <nav className="navbar navbar-expand-xl">
      <div className="quick-find dropdown">
      <Link  to="#" className="cta" data-bs-toggle="dropdown" aria-expanded="false"><i><span className="iconify" data-icon="ic:round-manage-search" /></i>
          <span className="text">Browse All Catageries</span><i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i>
        </Link>
        <div className="dropdown-menu quick-finds-links" aria-labelledby="dropdownMenuButton1">
          <ul>
            <li><Link  to="listing.html">Medicines </Link></li>
            <li><Link to="#">Lab Tests &amp; Checkups</Link></li>
            <li><Link to="#">Doctors Consults </Link></li>
            <li><Link to="#">Women's Healt="#"h</Link></li>
            <li><Link to="#">Compounding Pharmacy</Link></li>
            <li><Link to="#">Home Services</Link></li>
          </ul>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-xl-none d-inline-block menu-header">
          <Link to="#" className="brand-name"><img src="images/logo.png" alt="#" /></Link>
        </div>
        <div className="userInfo">
          <span className="avatar"><img src="images/avatar.png" alt="#" /></span>
          <div className="media-body">
            <span className="name">Fakhar Naveed</span>
            <div className="account-setting">
              <Link to="#">Dashboard</Link>
              <Link to="#" className="cta">Logout</Link>
            </div>
          </div>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <Link to="#" className="nav-link active"  data-bs-toggle="dropdown" aria-expanded="false">Medicines
              <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
            <div className="dropdown-menu">
              <div className="menu-inner">
                <div className="row">
                  <div className="col-xl-2">
                    <h4>Medicines</h4>
                    <ul className="quick-links">
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-2">
                    <h4>Personal Care</h4>
                    <ul className="quick-links">
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-2">
                    <h4>Lab Tests</h4>
                    <ul className="quick-links">
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-2">
                    <h4>Baby Care products</h4>
                    <ul className="quick-links">
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-2">
                    <h4>Lab Tests</h4>
                    <ul className="quick-links">
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                      <li><Link to="#">Lorem impson</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
              <Link  className="nav-link" to="#">Lab Tests
            </Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link" to="#">Compounding Medicine
            </Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link" to="#">Personal care
              <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link" to="#">Best Sales
              <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link" to="#">Organics
              <i><span className="iconify" data-icon="ri:arrow-down-s-line" /></i></Link>
          </li>
        </ul>
      </div>
      <Link  to="#l" className="btn btn-primary"><i><span className="iconify" data-icon="iconoir:cloud-upload" /></i>
        <span>آسان آرڈر</span></Link>
    </nav>
  </div>
</header>

    )
}

export default Header