import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported
import { Accordion, Card, Button, Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/imgs/ModuleFeaturesimg/star-icon.png"





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
        <div className="ModuleFeatures">


            {/* Module Features Hero Section */}
            <div className="container-fluid ModuleFeatures_hero mb-4 text-center py-3">
                <div className="container">
                    <h3 className="fw-bold  text-md-center text-lg-center" style={{ color: "rgba(11, 61, 123, 1)", fontSize: "2rem" }}>
                        All-in-One Solution for Effortless School Administration!
                    </h3>
                    <p className="text-secondary mx-auto" style={{ maxWidth: "800px", fontSize: "1rem", lineHeight: "1.6" }}>
                        "Simplify school operations with powerful modules for admissions, attendance, fees, transport,
                        and more. Stay organized, efficient, and in control with real-time insights!"
                    </p>
                </div>
            </div>


            {/* Main Content Section */}



            <div className="container ModuleFeatures_contant  mt-4">
                <h3 className="text-dark text-center mb-4 fs-2">Modules & Features of <samp style={{ color: " rgba(11, 61, 123, 1)" }} > Xpo Media</samp></h3>
                <hr className=" fw-bolder" />
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="list-group w-auto text-center  h-auto ">
                            <button className=" contant_btn  list-group-item-action active">Administration</button>
                            <button className=" contant_btn list-group-item-action">Admission</button>
                            <button className=" contant_btn list-group-item-action">Transaction</button>
                            <button className=" contant_btn list-group-item-action">Transport</button>
                            <button className=" contant_btn list-group-item-action">Collection</button>
                            <button className=" contant_btn list-group-item-action">Payment</button>
                            <button className=" contant_btn list-group-item-action">Reports</button>
                        </div>
                    </div>
                    {/* Content Section */}


                    {/* Administration  */}



                    <div className="p-6 col-9 ps-5 max-w-4xl mx-auto    rounded-lg">






                        <h2 className=" " style={{ color: " rgba(11, 61, 123, 1)" }}>Administration Module</h2>
                        <p className="   mb-2" style={{ color: " rgba(11, 61, 123, 1)" }}>
                            Effortless Management for Institutional Excellence
                        </p>
                        <p className="text-gray-700 mb-4">
                            The Administration Module in XPO Media ERP is designed to simplify and streamline educational institution management. From course structuring to staff and fee management, this module ensures seamless operations, reducing administrative burdens and enhancing efficiency.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800">Standard/Course Setup</h3>
                        <p className="text-gray-700 mb-4">
                            The Standard/Course Setup feature allows institutions to structure their academic framework efficiently. Administrators can define academic standards, configure courses, and customize curricula to meet educational requirements. This ensures a well-organized learning system, enabling institutions to provide students with structured and streamlined education pathways.
                        </p>

                        <ul className="list-none space-y-2 lh-lg">
                            <li className="flex items-center">
                                <img src={img1} style={{ width: "30px" }} alt="" />    Define and configure academic courses and standards
                            </li>
                            <li className="flex items-center">
                                <img src={img1} style={{ width: "30px" }} alt="" />  Customize curricula to match institutional requirements
                            </li>
                            <li className="flex items-center">
                                <img src={img1} style={{ width: "30px" }} alt="" /> Assign course heads and manage academic structure efficiently
                            </li>
                            <li className="flex items-center">
                                <img src={img1} style={{ width: "30px" }} alt="" /> Ensure smooth student enrollment and course allocation
                            </li>
                        </ul>
                    </div>

                    <div className="   my-4">
                        <div className=" p-4 ">
                            <h2 className="">Administration Module</h2>
                            <p className="text-muted fw-semibold">
                                Effortless Management for Institutional Excellence
                            </p>
                            <p>
                                The Administration Module in XPO Media ERP is designed to simplify and streamline educational institution management. From course structuring to staff and fee management, this module ensures seamless operations, reducing administrative burdens and enhancing efficiency.
                            </p>

                            <h3 className="text-">Standard/Course Setup</h3>
                            <p>
                                The Standard/Course Setup feature allows institutions to structure their academic framework efficiently. Administrators can define academic standards, configure courses, and customize curricula to meet educational requirements. This ensures a well-organized learning system, enabling institutions to provide students with structured and streamlined education pathways.
                            </p>

                            <ul className=" mb-4 lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Define and configure academic courses and standards</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Customize curricula to match institutional requirements</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Assign course heads and manage academic structure efficiently</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Ensure smooth student enrollment and course allocation</li>
                            </ul>

                            <h3 className="">Fee Head</h3>
                            <p>
                                Managing institutional finances becomes effortless with the Fee Head Setup feature. It allows administrators to define and categorize various fee components, such as tuition fees, examination fees, and other miscellaneous charges.
                            </p>
                            <ul className=" mb-4 lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Categorize and define tuition, examination, and other fees</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Automate fee collection and streamline transactions</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Ensure transparency and accuracy in financial records</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Generate detailed fee reports for analysis and audits</li>
                            </ul>

                            <h3 className="">Subject & Course Management</h3>
                            <p>
                                This feature simplifies academic organization by enabling institutions to define and categorize subjects under specific courses, ensuring structured learning.
                            </p>
                            <ul className=" mb-4 lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Organize subjects under specific courses</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Assign subject heads and faculty</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Define prerequisites and subject dependencies</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Maintain academic consistency</li>
                            </ul>

                            <h3 className="">Community & Caste Setup</h3>
                            <p>
                                Helps maintain student demographic records for institutional and regulatory compliance, supporting inclusivity and scholarships.
                            </p>
                            <ul className=" mb-4 lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Record student demographic details</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Manage reservations and scholarships</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Ensure inclusivity and student support</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Generate demographic reports</li>
                            </ul>

                            <h3 className="">Parent Information Management</h3>
                            <p>
                                Helps institutions maintain accurate records of student guardians, improving communication and transparency.
                            </p>
                            <ul className=" lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Store and update parent occupation and contact details</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Enhance communication between institutions and guardians</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Maintain accurate student financial aid records</li>
                                <li className="list-group-item"><img src={img1} style={{ width: "30px" }} alt="" />  Ensure transparency in parent interactions</li>
                            </ul>



                            <h3 className="">Staff Information Management</h3>
                            <p>
                                A well-organized workforce is crucial for institutional success. The Staff Information Management feature helps administrators maintain detailed records of faculty and administrative staff, including their roles, designations, and contact details. This ensures efficient workforce management, easy retrieval of information, and smooth internal operations.
                            </p>
                            <ul className=" mb-4 lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Maintain faculty and administrative staff records</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Assign roles and responsibilities for efficient management</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" /> Track staff performance and attendance</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" />  Ensure smooth internal communication and coordination</li>
                            </ul>

                            <h3 className="">Library Head Management</h3>
                            <p>
                                The Library Head Management feature streamlines library operations by allowing institutions to maintain a structured record of library heads, book inventory, and member allocations. It ensures efficient book tracking, user management, and smooth library administration, enhancing the learning resources available to students and faculty.
                            </p>
                            <ul className=" lh-lg">
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" /> Manage book inventory and track issued/returned books</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" /> Assign library heads and streamline library operations</li>
                                <li className="list-group-item"> <img src={img1} style={{ width: "30px" }} alt="" /> Ensure easy access to learning resources for students and faculty</li>
                                <li className="list-group-item"><img src={img1} style={{ width: "30px" }} alt="" /> Maintain an organized and efficient library system</li>
                            </ul>


                        </div>
                    </div>













                </div>
            </div>








        </div>
    );
};

export default ModuleFeatures;
