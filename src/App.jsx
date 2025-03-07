import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/stylecss/Nav.css"
import './pages/Home.css'
import Navbar from './component/Navber';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<AboutUs  />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
