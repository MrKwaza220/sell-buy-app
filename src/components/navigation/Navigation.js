import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    setShowMenu(false);
  };

  return (
    <div className="navigation_bar">
      <nav>
        <div className="logo">Mr Kwaza</div>
        <ul className={showMenu ? "show" : ""}>
          <li>
            <a
              href="#home"
              className={activePage === "home" ? "active" : ""}
              onClick={() => handlePageClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#messages"
              className={activePage === "messages" ? "active" : ""}
              onClick={() => handlePageClick("messages")}
            >
              Messages
            </a>
          </li>
          <li>
            <a
              href="#userNotifications"
              className={activePage === "notification" ? "active" : ""}
              onClick={() => handlePageClick("notification")}
            >
              Notification
            </a>
          </li>
          <li>
            <a
              href="#favourites"
              className={activePage === "favourites" ? "active" : ""}
              onClick={() => handlePageClick("favourites")}
            >
              Favourites
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activePage === "search" ? "active" : ""}
              onClick={() => handlePageClick("search")}
            >
              Search
            </a>
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
      </nav>
    </div>
  );
}

export default Navigation;
