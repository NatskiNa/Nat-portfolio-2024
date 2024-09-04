import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { BsPerson } from 'react-icons/bs';
import { PiStack } from 'react-icons/pi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { IoIosContact } from 'react-icons/io';

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  return (
    <div className="sidebar">
      <div className={`sidebar ${expandSidebar ? 'expanded' : 'collapsed'}`}>
        <button onClick={() => setExpandSidebar(!expandSidebar)}>
          {expandSidebar ? 'Expand' : 'Collapse'}
        </button>
        {expandSidebar && (
          <div className="sidebar-profile-pic">
            <img src="/NN-profile.jpg" alt="profile" />
          </div>
        )}
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/">
                <GoHome />
                {expandSidebar && 'Home'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about">
                <BsPerson />
                {expandSidebar && 'About'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills">
                <PiStack />
                {expandSidebar && 'Skills'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                <MdOutlineWorkOutline />
                {expandSidebar && 'Projects'}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <IoIosContact />
                {expandSidebar && 'Contact'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
