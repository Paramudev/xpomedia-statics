import React, { useEffect, useRef, useState } from 'react';
import '../pages/Home.css';
import heroimg from "../assets/imgs/Homeimg/hero.png";

import logo1 from "../assets/imgs/Homeimg/logos/1.png";
import logo2 from "../assets/imgs/Homeimg/logos/2.png";
import logo3 from "../assets/imgs/Homeimg/logos/3.png";
import logo4 from "../assets/imgs/Homeimg/logos/4.png";
import logo5 from "../assets/imgs/Homeimg/logos/5.png";
import logo6 from "../assets/imgs/Homeimg/logos/6.png";
import logo7 from "../assets/imgs/Homeimg/logos/7.png";
import logo8 from "../assets/imgs/Homeimg/logos/8.png";
import logo9 from "../assets/imgs/Homeimg/logos/9.png";
import logo10 from "../assets/imgs/Homeimg/logos/10.png";
import logo11 from "../assets/imgs/Homeimg/logos/11.png";
import logo12 from "../assets/imgs/Homeimg/logos/12.png";
import logo13 from "../assets/imgs/Homeimg/logos/13.png";
import logo14 from "../assets/imgs/Homeimg/logos/14.png";

import standent from "../assets/imgs/Homeimg/logos/stundent.png";

import { FaUsers, FaCheckCircle, FaMoneyBill, FaUserTie, FaGlobe, FaAward, FaUserGraduate, FaSmile, FaCogs } from "react-icons/fa";

const Home = () => {
  const [activeTab, setActiveTab] = useState('Administration');

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14,
  ];

  const cardData = {
    Administration: [
      { icon: '🎓', title: 'Standard / Course Setup', description: 'Easily configure class standards, sections, and academic structures.' },
      { icon: '📅', title: 'Timetable Setup', description: 'Create and manage timetables efficiently.' },
      { icon: '📊', title: 'Performance Tracking', description: 'Track student performance with analytics.' },
    ],
    Admission: [
      { icon: '📝', title: 'Application Management', description: 'Streamline admission process.' },
      { icon: '👨‍🎓', title: 'Student Enrollment', description: 'Manage enrollment with ease.' },
      { icon: '📋', title: 'Document Verification', description: 'Verify documents seamlessly.' },
    ],
    Transaction: [
      { icon: '💰', title: 'Fee Head', description: 'Manage fee categories and schedules.' },
      { icon: '💳', title: 'Payment Tracking', description: 'Track transactions in real-time.' },
      { icon: '📈', title: 'Financial Reports', description: 'Generate financial insights.' },
    ],
    Transport: [
      { icon: '🚌', title: 'Route Management', description: 'Plan transportation routes.' },
      { icon: '📍', title: 'Vehicle Tracking', description: 'Track vehicles in real-time.' },
      { icon: '👥', title: 'Student Pickup/Drop', description: 'Manage pickup/drop-off schedules.' },
    ],
    Collection: [
      { icon: '📦', title: 'Fee Collection', description: 'Simplify fee collection.' },
      { icon: '📜', title: 'Dues Management', description: 'Track pending dues.' },
      { icon: '📊', title: 'Collection Reports', description: 'Generate collection reports.' },
    ],
    Payment: [
      { icon: '💵', title: 'Online Payments', description: 'Enable secure online payments.' },
      { icon: '📅', title: 'Payment Schedules', description: 'Manage payment schedules.' },
      { icon: '🔔', title: 'Payment Reminders', description: 'Send automated reminders.' },
    ],
    Reports: [
      { icon: '📉', title: 'Academic Reports', description: 'Generate academic reports.' },
      { icon: '📊', title: 'Attendance Reports', description: 'Track attendance.' },
      { icon: '📋', title: 'Custom Reports', description: 'Create custom reports.' },
    ],
  };

  const features = [
    { title: "Parent Engagement", description: "Keep parents informed with updates.", icon: <FaUsers /> },
    { title: "Attendance Management", description: "Track attendance effortlessly.", icon: <FaCheckCircle /> },
    { title: "Fee Management", description: "Simplify fee collection.", icon: <FaMoneyBill /> },
    { title: "Staff Management", description: "Manage staff records.", icon: <FaUserTie /> },
    { title: "Remote Access", description: "Manage school anywhere.", icon: <FaGlobe /> },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const scrollLeft = scrollContainer.scrollLeft;

      if (scrollLeft >= scrollWidth - clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth - clientWidth;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  return (
    <div className="mt-4">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold text-dark-blue display-5">Smart School ERP for</h1>
              <h2 className="fw-bold text-black display-5">Smarter Management!</h2>
              <p className="text-gray fs-5">Automate, Streamline & Simplify School Operations!</p>
              <p className="quote text-dark-blue fst-italic">"A complete School ERP software."</p>
              <a href="#" className="btn btn-dark btn-lg rounded-pill px-4 shadow-sm">Get Started Now</a>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src={heroimg} alt="School Management" className="img-fluid w-75 w-md-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <div className="text-center mb-4 px-3">
        <h1 className="display-6 text-dark-blue">ALL-in-One Smart Dashboard</h1>
        <p className="text-gray fst-italic">"Effortlessly manage everything in one dashboard."</p>
      </div>

      {/* Tabs Section */}
      <div className="mb-4">
        <ul className="nav nav-pills justify-content-center flex-wrap gap-2">
          {Object.keys(cardData).map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Scrollable Card Section */}
      <div className="card-section position-relative px-3">
        <button
          className="btn btn-primary rounded-circle scroll-arrow d-none d-md-block position-absolute top-50 start-0 translate-middle-y"
          onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
        >
          ←
        </button>
        <div
          className="d-flex flex-nowrap overflow-auto cards-container gap-3"
          ref={scrollRef}
        >
          {[...cardData[activeTab], ...cardData[activeTab]].map((card, index) => (
            <div className="card custom-card flex-shrink-0" key={index} style={{ width: '300px' }}>
              <div className="card-body text-center">
                <div className="card-icon fs-1 mb-3">{card.icon}</div>
                <h5 className="card-title text-primary">{card.title}</h5>
                <p className="card-text text-muted">{card.description}</p>
                <a href="#" className="btn btn-link">See More →</a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary rounded-circle scroll-arrow d-none d-md-block position-absolute top-50 end-0 translate-middle-y"
          onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
        >
          →
        </button>
      </div>

      {/* Logos Section */}
      <div className="logos py-5" style={{ background: "rgba(217, 217, 217, 1)" }}>
        <div className="text-center">
          <h2 className="mb-4 text-dark-blue">Trusted & <span className="text-danger">❤️</span> by 100+ Schools</h2>
          <div className="row justify-content-center g-4">
            {logos.map((logo, index) => (
              <div key={index} className="col-4 col-sm-3 col-md-2">
                <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid" style={{ maxWidth: "90px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Management Section */}
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-4">
          <span className="text-dark-blue">Xpo Media</span> - The Most Preferred School Management System!
        </h2>
        <div className="row align-items-center flex-column flex-md-row text-md-start">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <p className="Management_para">
              Managing a school is complex, but Xpo Media makes it effortless with its comprehensive ERP solution...
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={standent} alt="School Management" className="img-fluid w-75 w-md-100" />
          </div>
        </div>
      </div>

      {/* Software Section */}
      <div className="container-fluid py-5">
        <div className="row text-center mb-4 bg-dark-blue p-3 rounded-3 g-3">
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white rounded text-dark-blue">
              <FaAward className="fs-2 mb-2" />
              <h3>24+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white rounded text-dark-blue">
              <FaUserGraduate className="fs-2 mb-2" />
              <h3>10000+</h3>
              <p>Students</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white rounded text-dark-blue">
              <FaSmile className="fs-2 mb-2" />
              <h3>100+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 bg-white rounded text-dark-blue">
              <FaCogs className="fs-2 mb-2" />
              <h3>20+</h3>
              <p>Modules</p>
            </div>
          </div>
        </div>

        <h3 className="text-center mb-4">Key Features Of <span className="text-primary">Xpo Media’s</span> ERP</h3>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="p-3 border rounded text-center bg-light">
                <div className="text-primary fs-2 mb-2">{feature.icon}</div>
                <h5 className="text-primary">{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;