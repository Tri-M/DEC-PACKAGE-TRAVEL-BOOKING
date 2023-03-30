import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.css";
// import SignUpUi from '../SignUpUi/SignUpUi';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/signup'); 
  }
  const handleLoginClick = () => {
    navigate('/login');
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Trix-hemz travel !</span>
        <div className="navItems">
          <button className="navButton" onClick={handleRegisterClick}>Register</button>
          <button className="navButton"onClick={handleLoginClick}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;