import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import logo from "../assets/imgs/Navberimg/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} style={{width:"76.5px", height:"76.5px"}} className="me-2" height="50" alt="Logo" />
          <div className="ms-2 ps-lg-3">
            <h1 className="h5 logo_lettle mb-0">Xpo Media</h1>
            <p className=" logo_small small text-muted">Empowering Mind</p>
          </div>
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
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link active text-dark" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">Module Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Clients</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Demo</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Enquiry Button */}
        <a href="#" className="btn nav_btn rounded-pill ms-3 d-none d-lg-block">Enquiry Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
