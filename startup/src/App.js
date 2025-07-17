import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import FooterSection from './Components/FooterSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FooterSection /> 
      </div>
    </Router>
  );
} 

export default App;
