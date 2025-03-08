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


import Bcard1 from "../assets/imgs/Homeimg/Frame 30620 (1).png"
import Bcard2 from "../assets/imgs/Homeimg/Frame 30626.png"
import Bcard3 from "../assets/imgs/Homeimg/Frame 30628.png"
import Bcard4 from "../assets/imgs/Homeimg/Frame 30625.png"



import Software1 from "../assets/imgs/Homeimg/New folder/1.png"
import Software2 from "../assets/imgs/Homeimg/New folder/2.png"
import Software3 from "../assets/imgs/Homeimg/New folder/3.png"
import Software4 from "../assets/imgs/Homeimg/New folder/4.png"
import Software5 from "../assets/imgs/Homeimg/New folder/5.png"


import Upgrade from "../assets/imgs/Homeimg/gril.jpeg"

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
    {
      icon: Software1, // Replace with an appropriate image
      title: "Parent Engagement",
      description:
        "Keep parents connected and informed with real-time updates on student progress, attendance, and school activities.",
    },
    {
      icon: Software2, // Replace with an appropriate image
      title: "Attendance Management",
      description:
        "Effortlessly track and manage student and staff attendance with real-time updates, automated reports & seamless integration with school records.",
    },
    {
      icon: Software3, // Replace with an appropriate image
      title: "Fee Management",
      description:
        "Simplify fee collection and tracking with automated billing, real-time payment updates, and detailed financial reports for seamless school finance management.",
    },
    {
      icon: Software4, // Replace with an appropriate image
      title: "Staff Management",
      description:
        "Efficiently manage staff records, attendance, payroll, and performance tracking with an integrated system designed for smooth school operations.",
    },
    {
      icon: Software5, // Replace with an appropriate image
      title: "Remote Access",
      description:
        "Manage your school anytime, anywhere with secure cloud-based access, enabling real-time updates, reports, and seamless communication.",
    },
  ];



  // State to manage which FAQ item is expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: 'What is Xpo Media School Management System?',
      answer: 'Xpo Media is a comprehensive ERP solution designed to streamline school operations, including admissions, attendance, fee management, transport, reports, and more.',},
    { question: 'Who can use Xpo Media?', answer: ' Xpo Media is ideal for schools, colleges, and educational institutions looking for an efficient, automated, and user-friendly management system.' },
    { question: 'Is Xpo Media cloud-based?', answer: 'Yes! Xpo Media is a cloud-based platform, allowing secure access to data from anywhere, anytime.' },
    { question: 'How does Xpo Media simplify fee management?', answer: 'Our system automates fee collection, generates invoices, tracks pending payments, and provides real-time financial reports, ensuring hassle-free finance management.' },
    { question: 'Can parents track their child\'s progress?', answer: 'Yes! Xpo Media provides a dedicated parent portal where parents can access real-time updates on attendance, grades, homework, and school activities.' },
    { question: 'Does Xpo Media support mobile access?', answer: 'Yes! Xpo Media is accessible via both web and mobile, ensuring a seamless experience across all devices.' },
    { question: 'How secure is our school\'s data on Xpo Media?', answer: 'We use advanced encryption and multi-layer security protocols to protect all sensitive data, ensuring privacy and security' },
    { question: 'Can Xpo Media be customized for our school\'s needs?', answer: 'Absolutely! Xpo Media offers flexible modules and customization options to align with your school’s unique requirements.' },
    { question: 'Does Xpo Media support online payments?', answer: 'Yes! Xpo Media integrates with multiple payment gateways, allowing parents to make secure online payments for fees and other school expenses.' },
    { question: 'How can we get started with Xpo Media?', answer: 'Getting started is easy! Contact our team for a demo, and we’ll guide you through the setup and onboarding process to ensure a smooth transition.' },
  ];

  // Toggle FAQ item expansion
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };








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





  // last card secation

  const [formData, setFormData] = useState({
    role: "",
    fullName: "",
    phone: "",
    email: "",
    location: "",
    totalStudents: "",
    annualFees: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className=" hero_heading d-flex align-items-center py-5">
        <div className="container ">
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
      <div className="mb-5 py-3">
        <ul className="nav nav-pills justify-content-center flex-wrap gap-3">
          {Object.keys(cardData).map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link  ${activeTab === tab ? 'active' : ''}`}
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
            <div className="card custom-card flex-shrink-0 shadow" key={index} style={{ width: '250px' }}>
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
      <div className="logos py-2 my-5" style={{ background: "rgba(217, 217, 217, 1)" }}>
        <div className="text-center justify-content-center">
          <h2 className="mb-4 my-4 py-3  text-dark-blue">Trusted & <span className="text-danger">❤️</span> by 100+ Schools</h2>
          <div className="row justify-content-center g-3">
            {logos.map((logo, index) => (
              <div key={index} className="col-lg-2 school_logo col-sm-2 col-md-2">
                <img src={logo} alt={`Logo ${index + 1}`} className="  d-inline" style={{ maxWidth: "90px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Management Section */}
      <div className="container py-4 text-center">
        <h2 className="fw-bold mb-4">
          <span className="text-dark-blue">Xpo Media</span> - The Most Preferred School Management System!
        </h2>
        <div className="row align-items-center flex-column py-5 flex-md-row text-md-start">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <p className="Management_para">
              Managing a school is complex, but Xpo Media makes it effortless with its comprehensive and user-friendly ERP solution. Designed to streamline operations, enhance productivity, and ensure accuracy, our platform integrates all essential modules, including Administration, Admissions, Fee Management, Transport, Reports, and more. With real-time data insights, automation, and secure cloud access, schools can eliminate manual errors, save time, and focus on delivering quality education. Trusted by 100+ educational institutions, Xpo Media is the go-to choice for schools seeking a reliable, efficient, and future-ready management system
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={standent} alt="School Management" className="img-fluid w-75 w-md-100" />
          </div>
        </div>
      </div>

      {/* Software Section */}
      <div className="container-fluid  py-2">
        <div className="row text-center seconts_cards mb-5  g-4">
          <div className="col-6 col-md-3">
            <div className="p-3  rounded text-dark-blue">
              <img style={{ width: "200px" }} src={Bcard1} alt="" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3  rounded text-dark-blue">
              <img style={{ width: "200px" }} src={Bcard2} alt="" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3  rounded text-dark-blue">
              <img style={{ width: "200px" }} src={Bcard3} alt="" />
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3  rounded text-dark-blue">
              <img style={{ width: "200px" }} src={Bcard4} alt="" />
            </div>
          </div>
        </div>






      </div>

      <div className="container text-center my-5">
        <h2>
          Key Features Of <span className="text-primary">Xpo Media’s</span> Best School ERP Software
        </h2>
        <div className="row justify-content-center mb-5 mt-5">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-3 d-flex justify-content-center align-items-center">
              <div className="p-4 h-100 d-flex flex-column align-items-center text-center" style={{ width: "18rem" }}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mb-3"
                  style={{ width: "162px", height: "98px" }}
                />
                <h5 className="" style={{ Color: "rgba(11, 61, 123, 1)" }}>{feature.title}</h5>
                <p className="Software_para lh-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      <div className="container mt-5">
      <h2 className="mb-5" style={{color: "rgba(11, 61, 123, 1)"}} >Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className=" mb-3">
          <div
            className="card-header Questions h4 pb-2  bdg-white border-0 text-dark border-bottom"
            onClick={() => toggleFAQ(index)}
            style={{ cursor: 'pointer' }}
          >
            <h5 className="mb-3 " >
             <i className='' style={{color: "rgba(11, 61, 123, 1)"}}> Q{index + 1} </i>{faq.question}{' '}
              <span className="float-end ">
                <i
                  className={`bi ${
                    activeIndex === index ? 'bi-dash' : 'bi-plus'
                  }`}
                ></i>
              </span>
            </h5>
          </div>
          <div
            className={`collapse ${activeIndex === index ? 'show' : ''}`}
          >
            <div className="card-body fs-5">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>







{/* last card secation  */}


<div className="container Upgrade d-flex justify-content-center align-items-center min-vh-100 my-5  py-4"  >
      <div className="row w-100 align-items-center   flex-column-reverse flex-md-row ">
        <div className="col-12 text-center mb-3">
          <h2>
            Upgrade Your School with <span className="text-primary">Xpo Media!</span>
          </h2>
          <p className="text-muted">
            Simplify administration, enhance efficiency, and drive seamless management.
          </p>
        </div>
        <div className="col-md-6   ">
          <div className="card  shadow-lg ">
            <div className="card-body p-4  ">
              <form onSubmit={handleSubmit} className="mt-3 ">
                <div className="mb-3">
                  <h4>  Role at School</h4>
                  <select className="form-select " name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="principal">Principal</option>
                  </select>
                </div>
                <div className="mb-3">
                  <h4>Full Name</h4>
                  <input type="text" className="form-control" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <h4>Phone Number</h4>
                  <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <h4>Email</h4>
                  <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <h4>School Location</h4>
                  <select className="form-select" name="location" value={formData.location} onChange={handleChange}>
                    <option value="">Select Location</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <h4>Total Number of Students in Your School</h4>
                  <select className="form-select" name="totalStudents" value={formData.totalStudents} onChange={handleChange}>
                    <option value="">Total Number of Students</option>
                    <option value="100-500">100-500</option>
                    <option value="500-1000">500-1000</option>
                  </select>
                </div>
                <div className="mb-3">
                  <h4>Annual Fees Charged Per Student</h4>
                  <select className="form-select" name="annualFees" value={formData.annualFees} onChange={handleChange}>
                    <option value="">Annual Fees Per Student</option>
                    <option value="$500-$1000">$500-$1000</option>
                    <option value="$1000-$5000">$1000-$5000</option>
                  </select>
                </div>
                <div className="form-check  align-items-center rightbtn mb-5">
                  
                  <div className="form-check-input  rightbtn " type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                  <label className="form-check-label ms-2">I agree to receive communications via WhatsApp / SMS / Email</label>
                </div>
                <button type="submit" className="btn  Upgrad  " >Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 Media text-center">
          <img src={Upgrade} alt="School Upgrade "  className="img-fluid rounded h-75 shadow-lg"  />
        </div>
      </div>
    </div>





















    </div>
  );
};

export default Home;