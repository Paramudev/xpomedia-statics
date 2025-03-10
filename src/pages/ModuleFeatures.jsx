import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported
import { Accordion, Card, Button, Container, Row, Col } from "react-bootstrap";





const modules = [
    "Administration",
    "Admission",
    "Transport",
    "Collection",
    "Payment",
    "Reports",
  ];

const ModuleFeatures = () => {

    const [activeModule, setActiveModule] = useState("Administration");
  return (
    <div>
      {/* Module Features Hero Section */}
      <div className="container-fluid ModuleFeatures_hero text-center py-3">
        <div className="container">
          <h3 className="fw-bold" style={{ color: "rgba(11, 61, 123, 1)" }}>
            All-in-One Solution for Effortless School Administration!
          </h3>
          <p className="text-secondary">
            "Simplify school operations with powerful modules for admissions, attendance, fees, transport, <br /> 
            and more. Stay organized, efficient, and in control with real-time insights!"
          </p>
        </div>
      </div>

      {/* Main Content Section */}

  

      <div className="container mt-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            <button className="list-group-item list-group-item-action active">Administration</button>
            <button className="list-group-item list-group-item-action">Admission</button>
            <button className="list-group-item list-group-item-action">Transaction</button>
            <button className="list-group-item list-group-item-action">Transport</button>
            <button className="list-group-item list-group-item-action">Collection</button>
            <button className="list-group-item list-group-item-action">Payment</button>
            <button className="list-group-item list-group-item-action">Reports</button>
          </div>
        </div>
        {/* Content Section */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h4>Administration Module</h4>
              <p><strong>Effortless Management for Institutional Excellence</strong></p>
              <p>The Administration Module in XPO Media ERP is designed to simplify and streamline educational institution management. From course structuring to staff and fee management, this module ensures seamless operations, reducing administrative burdens and enhancing efficiency.</p>
              
              <h5>Standard/Course Setup</h5>
              <ul>
                <li>Define and configure academic courses and standards</li>
                <li>Customize curricula to match institutional requirements</li>
                <li>Assign course heads and manage academic structure efficiently</li>
                <li>Ensure smooth student enrollment and course allocation</li>
              </ul>
              
              <h5>Fee Head</h5>
              <ul>
                <li>Categorize and define tuition, examination, and other fees</li>
                <li>Automate fee collection and streamline transactions</li>
                <li>Ensure transparency and accuracy in financial records</li>
                <li>Generate detailed fee reports for analysis and audits</li>
              </ul>
              
              <h5>Subject & Course Management</h5>
              <ul>
                <li>Organize subjects under specific courses for structured learning</li>
                <li>Assign subject heads and faculty for curriculum management</li>
                <li>Define prerequisites and subject dependencies</li>
                <li>Maintain academic consistency and improve learning pathways</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>







   
    </div>
  );
};

export default ModuleFeatures;
