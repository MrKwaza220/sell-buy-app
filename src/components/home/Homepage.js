import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <section id="home">
      <div className="homepage">
        <div className="card">
          <div className="user_card">
            <img src="userprofile.png" alt="profile" />
            <h4>Mr Kwaza</h4>
          </div>

          <div class="about_user">
            <a href="#" class="nav-link" data-section="home">
              Home
            </a>
            <a href="#" class="nav-link" data-section="about">
              About
            </a>
            <a href="#" class="nav-link" data-section="services">
              Services
            </a>
            <a href="#" class="nav-link" data-section="work">
              Work
            </a>

            <div id="home-content" class="section-content">
              <img src="Renting black.jpg" />
            </div>

            <div id="about-content" class="section-content">
              <p>About Us</p>
            </div>

            <div id="services-content" class="section-content">
              <p>Our Services</p>
            </div>

            <div id="work-content" class="section-content">
              <p>Our Work</p>
            </div>
          </div>

          <div className="user_contacts">
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="linkedln.png" alt="Linkedln" />
            </a>
            <a href="#">
              <img src="Facebook.png" alt="Facebook" />
            </a>
          </div>
          <p>
            <button>Message</button>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Homepage;
