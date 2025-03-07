import React from 'react';
import img1 from '../assets/imgs/Footerimg/footer_logo.png'

const Footer = () => {
  return (
    <div>




<footer class=" bg-dark text-white py-4">
  <div class="container footer">
    <div class="row">
      <div class="col-md-3 text-center text-md-start">
        <img src={img1} alt="Xpo Media Logo" style={{width:"135px"}} class="img-fluid mb-2  ms-lg-5" />
        <p className='mt-2 lh-lg'>Streamline and automate your school's daily academic and administrative operations with Xpo Media. Elevate efficiency, enhance productivity, and experience seamless digital school management like never before!</p>
      </div>
      
      <div class="col-md-3 ps-5 lh-base  my-5">
        <h5 class="text-white">Contact Information</h5>
        <p><i class="fas fa-map-marker-alt "></i> 151/23, Thirumanjana Gopura Street, (Opp) Kamarajar Statue, Tiruvannamalai - 606601.</p>
        <p><i class="fas fa-envelope"></i> govindanmcas@gmail.com</p>
        <p><i class="fas fa-phone"></i> 8220839239</p>
        <div class="d-flex  gap-2">
          <a href="#" class="text-white fs-5"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-white fs-5"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white fs-5"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-white fs-5"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white fs-5"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="col-md-3  my-lg-5  ps-5">
        <h5 class="text-white">Quick Links</h5>
        <ul class=" lh-lg ">
          <li><a href="#" class="text-white-50 text-decoration-none">Home</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">About Us</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Features</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Pricing</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Contact Us</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">Blog</a></li>
          <li><a href="#" class="text-white-50 text-decoration-none">FAQs</a></li>
        </ul>
      </div>

      <div class="col-md-3 ps-sm-5  my-lg-5">
        <h5 class="text-white">Core Modules</h5>
        <ul class=" lh-lg ">
          <li>Administration</li>
          <li>Admission Management</li>
          <li>Fee Management</li>
          <li>Attendance Tracking</li>
          <li>Library Management</li>
          <li>Transport & Route Management</li>
          <li>Reports & Analytics</li>
        </ul>
      </div>
    </div>
    <p class="text-start
     border-top mt-3 pt-3">All Rights Reserved &copy; 2025 Xpo Media Since 2000</p>
  </div>
</footer>






    </div>
  );
};

export default Footer;
