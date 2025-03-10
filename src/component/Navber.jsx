import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import logo from "../assets/imgs/Navberimg/logo2.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo}  className="mx-2" height="70" alt="Logo" />

        </a>

        {/* Navbar Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-5">
            <li className="nav-item"><Link className="nav-link" to={"/"}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link " to={'/AboutUs'} >About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/ModuleFeatures'}>Module Features</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/AboutUs'}>Pricing</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/AboutUs'}>Clients</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/AboutUs'}>Blog</Link></li>
            <li className="nav-item"><Link className="nav-link" to={'/AboutUs'}>Demo</Link></li>
            <li className="nav-item"><Link className="nav-link"to={'/AboutUs'}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Enquiry Button */}
        <a href="#" className="btn nav_btn rounded-pill ms-3 d-none d-lg-block">Enquiry Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
