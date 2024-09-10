import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../components/pages/About';
import Skills from '../components/pages/Skills';
import Projects from '../components/pages/Projects';
import Contact from '../components/pages/Contact';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content-container">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainContent;
