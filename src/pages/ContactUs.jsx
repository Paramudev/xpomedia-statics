import React from 'react'
import schoolboy from '../assets/imgs/ContactUs_img/boy.png'

const ContactUs = () => {
  return (
    <div>



   {/* Hero Section */}
   <div className="container-fluid contant_hero mb-4 text-center py-3 pt-4">
                <div className="container ">
                    <h3 className="fw-bold text-md-center text-lg-center  " style={{ fontSize: "2rem" }}>
                    Get in Touch with <i className='' style={{ color: "rgba(11, 61, 123, 1)"}}> XPO Media</i>
                    </h3>
                    <p className="text-secondary mx-auto pb-0" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
                    Have questions? Need a demo? We’re here to help! Reach out to us and let’s streamline your school management together.
                    </p>
                </div>
            </div>




{/* card and from and image section */}





<div className="container my-4">
      {/* Contact Info Section */}
      <div className="row mb-4 py-5 ">
        <div className="col-12 col-md-4 Amp_card mb-3">
          <div className="info-card text-center  align-content-center p-4">
            <div className="icon">🏢</div>
            <h3>Head Office</h3>
            <p>151/23, Thirumanjana Gopura Street, (Opp) Kamrajar Statue, Tiruvannamalai - 606601</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="info-card text-center align-content-center p-4">
            <div className="icon">✉️</div>
            <h3>Email Address</h3>
            <p>govindanmcass@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <div className="info-card text-center align-content-center p-4">
            <div className="icon">📞</div>
            <h3>Phone Number</h3>
            <p>8220832939</p>
          </div>
        </div>
      </div>

      {/* Form and Image Section */}
      <div className="row">
        {/* Form */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="form-container p-4 shadow-lg rounded-4">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select className="form-select" id="subject">
                  <option value="">Select the purpose</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Textarea"
                ></textarea>
              </div>
              <button type="submit" className="btn rounded-5 text-white fs-4 w-50" style={{background:" linear-gradient(180deg, #0B3D7B 0%, #1470E1 100%)",border: "2px solid #0B3D7B"}}>Submit</button>
            </form>
          </div>
        </div>

        {/* Image */}
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="image-container">
            <img
              src={schoolboy}
              alt="Person in uniform"
              className="img-fluid rounded  schoolboy" 
            />
          </div>
        </div>
      </div>
    </div>
















      
    </div>
  )
}

export default ContactUs