import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrap">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
