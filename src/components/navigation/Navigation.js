import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation_bar">
      <nav>
        <div class="logo">MR KWAZA</div>
        <ul>
          <li>
            <a href="#" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
