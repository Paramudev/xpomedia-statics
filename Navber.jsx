import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/imgs/Navberimg/"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/path-to-logo.png" alt="Xpo Media Logo" className="me-2" height="40" />
          <div>
            <h1 className="h5 mb-0">Xpo Media</h1>
            <p className="small text-muted">Empowering Mind</p>
          </div>
        </a>

        {/* Navbar Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 gap-4 mb-lg-0">
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

        <a href="#" className="btn btn-primary rounded-pill ms-3">Enquiry Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
