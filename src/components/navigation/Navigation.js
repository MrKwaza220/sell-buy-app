import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

   const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation_bar">
      <nav>
        <div className="logo">Mr Kwaza</div>
        <ul className={showMenu ? "show" : ""}>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">Notification</a>
          </li>
          <li>
            <a href="#">Favourites</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <a href="#" className="dropbtn">
              Menu
            </a>
            <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
              <a href="#about">About</a>
              <a href="#contact">Login</a>
            </div>
          </li>
        </ul>

        {/* <a href="#" className="menu" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
          Menu
        </a> */}
      </nav>
    </div>
  );
}

export default Navigation;
