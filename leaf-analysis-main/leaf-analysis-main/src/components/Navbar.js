import React, { useState } from 'react';
import { IoFitnessOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedDashboard, setSelectedDashboard] = useState(''); // Start with an empty value for the dropdown
  // const navigate = useNavigate(); // For navigation using react-router

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleDashboardChange = (event) => {
  //   const dashboardPath = event.target.value;
  //   setSelectedDashboard(dashboardPath);
    
  //   if (dashboardPath) {
  //     navigate(dashboardPath); 
  //   }
  // };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <IoFitnessOutline className="navbar-icon" />
        <h1 className="navbar-title">Leaves For Lives</h1>
        <span className="navbar-subtitle"> - Ayurveda is Alive</span>
      </div>


      {/* Dashboard Dropdown */}
      {/* <div className="navbar-dropdown">
        <select
          className="form-select"
          value={selectedDashboard}
          onChange={handleDashboardChange}
        >
          <option value="">Choose a Dashboard</option> 
          <option value="/indiadashboard">India Health Overview</option>
          <option value="/worldrankings">World Healthcare Rankings</option>
          <option value="/costanalysis">Cost Analysis Dashboard</option>
          <option value="/healthy">Positive Healthcare</option>
          <option value="/worst">Worst Healthcare Dashboard</option>
        </select>
      </div> */}

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
