import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./assets/stylecss/Nav.css"
import './pages/Home.css'
import './assets/stylecss/about.css'
import './assets/stylecss/ModuleFeatures.css'

import Navbar from './component/Navber';
import Footer from './component/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ModuleFeatures from './pages/ModuleFeatures';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/AboutUs" element={<AboutUs  />} />
        <Route  path="/ModuleFeatures" element={<ModuleFeatures  />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
