import React, { useState } from "react";
import img1 from "../assets/imgs/Home_img/hero.png";
import "../assets/style.css/Home.css";

import kids from "../assets/imgs/Home_img/managment_img.png";
import logo1 from "../assets/imgs/Home_img/school_logo/1.png"

// icons
import icons1 from '../assets/imgs/Home_img/cards_icons/1.png'
import icons2 from '../assets/imgs/Home_img/cards_icons/2.png'
import icons3 from '../assets/imgs/Home_img/cards_icons/3.png'
import icons4 from '../assets/imgs/Home_img/cards_icons/4.png'
import icons5 from '../assets/imgs/Home_img/cards_icons/5.png'
import icons6 from '../assets/imgs/Home_img/cards_icons/6.png'
import icons7 from '../assets/imgs/Home_img/cards_icons/7.png'


import icons8 from '../assets/imgs/Home_img/cards_icons/8.png'
import icons9 from '../assets/imgs/Home_img/cards_icons/9.png'
import icons10 from '../assets/imgs/Home_img/cards_icons/10.png'
import icons11 from '../assets/imgs/Home_img/cards_icons/11.png'
import icons12 from '../assets/imgs/Home_img/cards_icons/12.png'

const cardData = {
  admin: [
    { img: icons1 , title: "Standard / Course Setup", para: "Easily configure class standards, sections, and academic structures." },
    { img: icons2, title: "Fee Head", para: "Set up and manage fee categories, structures, and payment schedules." },
    { img: icons3, title: "Subjects & Courses", para: "Manage subjects and courses with structured categorization." },
    { img: icons4, title: "Community & Caste", para: "Maintain community and caste details for streamlined categorization." },
    { img: icons5, title: "Parents Information", para: "Keep track of parents' details and contact information." },
    { img: icons6, title: "Staff Information", para: "Manage staff details, roles, and contact information seamlessly for smooth school operations." },
    { img: icons7, title: "Library Head", para: "Efficiently manage books, categories, and borrowing records for a well-organized library system." },
  ],
  admission: [
    { img: icons8, title: "Admission Create", para: "Simplify student admissions with an easy-to-use process for quick enrollment and data management." },
    { img: icons9, title: "Barcode Design", para: "Generate barcode designs for student ID cards and documents." },
    { img: icons10, title: "Overall Student Report", para: "Get detailed reports on student data and academic progress." },
    { img: icons11, title: "Transfer Certificate", para: "Easily generate and manage student transfer certificates." },
    { img: icons12 , title: "Fee Setup & Bucketing", para: "Customize and categorize fee structures with precision." },
  ],
  transaction: [
    { img: "https://via.placeholder.com/150", title: "Billing Entry", para: "Manage all billing transactions efficiently." },
    { img: "https://via.placeholder.com/150", title: "Payment Entry", para: "Track and process payment records seamlessly." },
    { img: "https://via.placeholder.com/150", title: "Receipt Entry", para: "Generate and manage receipts for various transactions." },
    { img: "https://via.placeholder.com/150", title: "Attendance Entry", para: "Record and monitor attendance for staff and students." },
    { img: "https://via.placeholder.com/150", title: "Book Distribution", para: "Track the distribution of books among students." },
  ],
  transport: [
    { img: "https://via.placeholder.com/150", title: "Bus/Van Fee Head", para: "Manage and configure transportation fee structures." },
    { img: "https://via.placeholder.com/150", title: "Bus Route Details", para: "Define and maintain details of bus routes and stops." },
    { img: "https://via.placeholder.com/150", title: "Bus Fee Reports", para: "Generate reports related to transportation fees." },
    { img: "https://via.placeholder.com/150", title: "Placewise Report", para: "Analyze transport allocation and utilization reports." },
  ],
  collection: [
    { img: "https://via.placeholder.com/150", title: "Tuition Fee", para: "Manage tuition fee collections effectively." },
    { img: "https://via.placeholder.com/150", title: "Miscellaneous Fee", para: "Track and handle various miscellaneous fees." },
    { img: "https://via.placeholder.com/150", title: "Concession Account", para: "Monitor concession records and adjustments." },
    { img: "https://via.placeholder.com/150", title: "Billwise Detail", para: "Get bill-wise breakdowns for accurate financial tracking." },
    { img: "https://via.placeholder.com/150", title: "Receipt Details", para: "View and verify all issued receipts." },
    { img: "https://via.placeholder.com/150", title: "Routewise Balance", para: "Track outstanding balances by transport route." },
  ],
};

const buttonData = [
  { name: "Administration", id: "admin" },
  { name: "Admission", id: "admission" },
  { name: "Transaction", id: "transaction" },
  { name: "Transport", id: "transport" },
  { name: "Collection", id: "collection" },
  { name: "Payment", id: "payment" },
  { name: "Reports", id: "reports" },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("admin");
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (selectedCategory) {
      setStartIndex((prev) => (prev + 1) % Math.max(cardData[selectedCategory].length - 3, 1));
    }
  };

  const handlePrev = () => {
    if (selectedCategory) {
      setStartIndex((prev) => (prev - 1 + Math.max(cardData[selectedCategory].length - 3, 1)) % Math.max(cardData[selectedCategory].length - 3, 1));
    }
  };







   
  return (
    <div className="container-fluid ">
      {/* Hero Section */}
      <section className="row align-items-center py-5 Home_hero text-center text-lg-start">
        <div className="col-lg-6 col-md-12 px-4">
          <h1 className="fw-bold">Smart School ERP for</h1>
          <h2 className="fw-medium">Smarter Management!</h2>
          <p className="text-muted">Automate, Streamline & Simplify School Operations!</p>
          <button className="btn btn-dark btn-lg rounded-pill mt-3">Get Started Now</button>
        </div>
        <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
          <img src={img1} alt="School ERP" className="img-fluid" style={{ maxWidth: "90%" }} />
        </div>
      </section>

      {/* Features Section */}
      <div className="container text-center py-5">
        <h2 className="fw-bold text-primary">All-in-One Smart Dashboard for Seamless School Management!</h2>
        <p className="text-muted">
          Effortlessly manage everything—from administration to finance, transport and reports—all in one intuitive dashboard.
        </p>
      </div>

      {/* Card Section */}
      <div className="p-3 p-md-5" style={{ overflowX: "hidden" }}>
        <div className="d-flex flex-wrap justify-content-center mb-4 gap-2">
          {buttonData.map((btn) => (
            <button
              key={btn.id}
              onClick={() => {
                setSelectedCategory(btn.id);
                setStartIndex(0);
              }}
              className={`px-3 py-2 cards_btn rounded-lg transition-all ${
                selectedCategory === btn.id ? "bg-blue-700 text-warning" : "text-white hover:bg-blue-100"
              }`}
            >
              {btn.name}
            </button>
          ))}
        </div>
        {selectedCategory && (
          <div className="d-flex align-items-center justify-content-center gap-3" style={{ overflowX: "hidden" }}>
            <button onClick={handlePrev} className="carusul_btn d-none d-md-block">◀</button>
            <div
              className="d-flex flex-nowrap justify-content-start gap-4"
              style={{ maxWidth: "100%", overflowX: "hidden" }}
            >
              {cardData[selectedCategory]?.slice(startIndex, startIndex + 4).map((card, index) => (
                <div
                  key={index}
                  className="card_layout  p-4 rounded-lg shadow-md"
                  style={{ minWidth: "250px", maxWidth: "300px", flex: "0 0 auto" }}
                >
                  <img src={card.img || "https://via.placeholder.com/150"} alt={card.title} className=" object-cover ms-5 rounded-md" style={{width:"30px"}} />
                  <h3 className="text-lg font-bold mt-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.para}</p>
                  <button className="mt-2 btn btn-outline-primary">View</button>
                </div>
              ))}
            </div>
            <button onClick={handleNext} className="carusul_btn d-none d-md-block">▶</button>
          </div>
        )}
      </div>

      {/* School Management System */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>
              <span className="fw-bold" style={{ color: "rgba(11, 61, 123, 1)" }}>Xpo Media</span> – The Most Preferred School Management System!
            </h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center">
            <p className="mt-3 Management_para">
              Managing a school is complex, but Xpo Media makes it effortless with its comprehensive and user-friendly ERP solution. Designed to streamline operations, enhance productivity, and ensure accuracy, our platform integrates all essential modules, including Administration, Admissions, Fee Management, Transport, Reports, and more. With real-time data insights, automation, and secure cloud access, schools can eliminate manual errors, save time, and focus on delivering quality education. Trusted by 100+ educational institutions, Xpo Media is the go-to choice for schools seeking a reliable, efficient, and future-ready management system.
            </p>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img src={kids} alt="Happy School Kids" className="img-fluid" style={{ maxWidth: "90%" }} />
          </div>
        </div>
      </div>












    





















      
    </div>
  );
};

export default Home;