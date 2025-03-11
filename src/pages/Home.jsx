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


import Bcard1 from "../assets/imgs/Homeimg/Frame 30620 (1).png";
import Bcard2 from "../assets/imgs/Homeimg/Frame 30626.png";
import Bcard3 from "../assets/imgs/Homeimg/Frame 30628.png";
import Bcard4 from "../assets/imgs/Homeimg/Frame 30625.png";


import Software1 from "../assets/imgs/Homeimg/New folder/1.png";
import Software2 from "../assets/imgs/Homeimg/New folder/2.png";
import Software3 from "../assets/imgs/Homeimg/New folder/3.png";
import Software4 from "../assets/imgs/Homeimg/New folder/4.png";
import Software5 from "../assets/imgs/Homeimg/New folder/5.png";

import Upgrade from "../assets/imgs/Homeimg/gril.jpeg";
import standent from "../assets/imgs/Homeimg/logos/stundent.png";

import minus from "../assets/imgs/Homeimg/mines.png"
import plus from "../assets/imgs/Homeimg/plus.png"

import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Administration');
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14];
  const scrollRef = useRef(null);
  const features = [
    {
      icon: Software1, 
      title: "Parent Engagement",
      description:
        "Keep parents connected and informed with real-time updates on student progress, attendance, and school activities.",
    },
    {
      icon: Software2, 
      title: "Attendance Management",
      description:
        "Effortlessly track and manage student and staff attendance with real-time updates, automated reports & seamless integration with school records.",
    },
    {
      icon: Software3, 
      title: "Fee Management",
      description:
        "Simplify fee collection and tracking with automated billing, real-time payment updates, and detailed financial reports for seamless school finance management.",
    },
    {
      icon: Software4,
      title: "Staff Management",
      description:
        "Efficiently manage staff records, attendance, payroll, and performance tracking with an integrated system designed for smooth school operations.",
    },
    {
      icon: Software5,
      title: "Remote Access",
      description:
        "Manage your school anytime, anywhere with secure cloud-based access, enabling real-time updates, reports, and seamless communication.",
    },
  ];


  const faqs =  [
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

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;
        const scrollLeft = scrollContainer.scrollLeft;
        if (scrollLeft >= scrollWidth - clientWidth) scrollContainer.scrollLeft = 0;
        else if (scrollLeft <= 0) scrollContainer.scrollLeft = scrollWidth - clientWidth;
      };
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [activeTab]);

  const [formData, setFormData] = useState({ role: "", fullName: "", phone: "", email: "", location: "", totalStudents: "", annualFees: "", agree: false });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero_heading d-flex align-items-center py-4 py-md-5">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold text-dark-blue display-5 display-md-4">Smart School ERP for</h1>
              <h2 className="fw-bold text-black display-5 display-md-4">Smarter Management!</h2>
              <p className="text-gray fs-5">Automate, Streamline & Simplify School Operations!</p>
              <a href="#" className="btn btn-dark btn-lg rounded-pill px-4 shadow-sm">Get Started Now</a>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src={heroimg} alt="School Management" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <div className="logos py-4 my-5" style={{ background: "rgba(217, 217, 217, 1)" }}>
        <div className="container text-center">
          <h2 className="mb-4 text-dark-blue">Trusted & <span className="text-danger">❤️</span> by 100+ Schools</h2>
          <div className="row justify-content-center g-3">
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
        <h2 className="fw-bold mb-4"><span className="text-dark-blue">Xpo Media</span> - Preferred School Management System!</h2>
        <div className="row align-items-center flex-column flex-md-row text-md-start">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <p className="Management_para">            Managing a school is complex, but Xpo Media makes it effortless with its comprehensive and user-friendly ERP solution. Designed to streamline operations, enhance productivity, and ensure accuracy, our platform integrates all essential modules, including Administration, Admissions, Fee Management, Transport, Reports, and more. With real-time data insights, automation, and secure cloud access, schools can eliminate manual errors, save time, and focus on delivering quality education. Trusted by 100+ educational institutions, Xpo Media is the go-to choice for schools seeking a reliable, efficient, and future-ready management system</p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={standent} alt="School Management" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Software Section */}
      <div className="container-fluid py-5 seconts_cards">
        <div className="row text-center g-4">
          {[Bcard1, Bcard2, Bcard3, Bcard4].map((card, index) => (
            <div key={index} className="col-6 col-md-3 ">
              <img src={card} alt={`Card ${index + 1}`} style={{width:"180px"}} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center my-5">
        <h2>Key Features Of <span className="text-primary">Xpo Media’s</span> Best School ERP Software</h2>
        <div className="row justify-content-center mt-5 g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-4 d-flex justify-content-center">
              <div className="p-4 text-center">
                <img src={feature.icon} alt={feature.title} className="img-fluid mb-3" style={{ maxWidth: "160px", height:"130px" }} />
                <h5 className="text-dark-blue" style={{ maxWidth: "360px" }}>{feature.title}</h5>
                <p className="Software_para " style={{ maxWidth: "360px" }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mt-5">
        <h2 className="mb-5 text-dark-blue">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3">
            <div className="card-header border-bottom py-3" onClick={() => toggleFAQ(index)} style={{ cursor: 'pointer' }}>
              <h5>Q{index + 1} {faq.question} <span className="float-end">{activeIndex === index ?  <img src={minus} alt="" style={{width:"40px"}} / > : <img src={plus} alt="" style={{width:"40px"}}  />}</span></h5>
            </div>
            {activeIndex === index && <div className="card-body">{faq.answer}</div>}
          </div>
         
        ))}
      </div>

      {/* Form Section */}
      <div className="container Upgrade py-5 my-5">
        <div className="row align-items-center  flex-md-">
          <div className="col-12  text-center mb-4">
            <h2>Upgrade Your School with <span className="text-primary">Xpo Media!</span></h2>
            <p className="text-muted   ">Simplify administration, enhance efficiency, and drive seamless management <br /> with our powerful School ERP solution!</p>
          </div>
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="card shadow-lg p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>Role at School</label>
                  <select className="form-select" name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="principal">Principal</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>Full Name</label>
                  <input type="text" className="form-control" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>Phone Number</label>
                  <input type="text" className="form-control" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>Email</label>
                  <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>School Location</label>
                  <select className="form-select" name="location" value={formData.location} onChange={handleChange}>
                    <option value="">Select Location</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>Total Number of Students</label>
                  <select className="form-select" name="totalStudents" value={formData.totalStudents} onChange={handleChange}>
                    <option value="">Total Number of Students</option>
                    <option value="100-500">100-500</option>
                    <option value="500-1000">500-1000</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium fs-5" style={{color: "rgba(11, 61, 123, 1)"}}>Annual Fees Per Student</label>
                  <select className="form-select" name="annualFees" value={formData.annualFees} onChange={handleChange}>
                    <option value="">Annual Fees Per Student</option>
                    <option value="$500-$1000">$500-$1000</option>
                    <option value="$1000-$5000">$1000-$5000</option>
                  </select>
                </div>
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                  <label className="form-check-label">I agree to receive communications</label>
                </div>
                <button type="submit" className="fs-4 Upgrad">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img src={Upgrade} alt="School Upgrade" className="img-fluid girlimg rounded shadow-lg" style={{width:"557px"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;