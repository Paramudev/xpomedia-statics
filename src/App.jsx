import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





// pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";



// component
import Navbar from "../src/component/Navber"; 
import Footer from "../src/component/Footer"; 






// style css
import './assets/style.css/Navber.css'
import './assets/style.css/Home.css'
import './assets/style.css/Footer.css'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />  
        <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/module-features" element={<ModuleFeatures />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/enquiry" element={<Enquiry />} />
        </Routes>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
