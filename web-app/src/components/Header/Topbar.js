import React from 'react'
import {  Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
import Avatar from "../../assets/images/avatar.png"
import MyCartMenu from './MyCartMenu';
const Topbar = () => {
  return (
    <div className="topbar">
    <div className="top-left-content">
      <Link to="#" className="brand-name"><img src={Logo} alt="#" /></Link>
      <div className="delivery-to">
        <span className="text">Delivery to</span>
        <div className="dropdown">
        <Link  className="cta-deliver" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <i><span className="iconify" data-icon="carbon:location" /></i>
            <span>Islamabad</span>
            <i><span className="iconify" data-icon="eva:arrow-ios-downward-fill" /></i>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><Link to="#">Lahore</Link></li>
            <li><Link to="#">Karachi</Link></li>
            <li><Link to="#">Islamabad</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <form className="searchFilter">
      <div className="form-field">
        <input type="text" className="form-control" placeholder="What are you looking for?" />
        <i><span className="iconify" data-icon="akar-icons:search" /></i>
      </div>
    </form>
    <div className="top-right-content">
      <button className="cta-search d-inline-block d-xl-none" data-bs-toggle="modal" data-bs-target="#searchModal">
        <i><span className="iconify" data-icon="akar-icons:search" /></i>
      </button>
      <div className="dropdown">
      <Link to="#" className="cta-cart" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="count">
            <span className="iconify" data-icon="ph:shopping-cart-simple" />
            <span>14</span></i>
          <span className="media-body">
            <span className="text">My Cart</span>
            <span className="price">RS: 4700.4</span>
          </span>
          <i><span className="iconify" data-icon="eva:arrow-ios-downward-fill" /></i>
        </Link>
        <MyCartMenu/>
      </div>
      <div className="dropdown">
      <Link  to="#" className="cta-user" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="avatar"><img src={Avatar} alt="#" /></span>
          <span className="name">Fakhar Naveed</span>
          <i>
            <span className="iconify" data-icon="eva:arrow-ios-downward-fill" />
          </i>
        </Link>
        <div className="dropdown-menu">
          <ul>
            <li><Link to="#">Dashboard </Link></li>
            <li><Link to="#">Logout</Link></li>
          </ul>
        </div>
      </div>
      <Link  to="#"className="cta-more"><span className="iconify" data-icon="akar-icons:grid" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      </button>
    </div>
  </div>
  )
}

export default Topbar