import React, { useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <section id="home">
      <div className="homepage">
        <div className="card">
          <div className="user_card">
            <img src="userprofile.png" alt="profile" />
            <h4>Mr Kwaza</h4>
          </div>

          <div className="about_user">
            <div className="container">
              <div className="user_navigation">
                <a href="#" onClick={() => setActiveSection("home")}>
                  Home
                </a>
                <a href="#" onClick={() => setActiveSection("about")}>
                  About
                </a>
                <a href="#" onClick={() => setActiveSection("services")}>
                  Services
                </a>
                <a href="#" onClick={() => setActiveSection("work")}>
                  Work
                </a>
              </div>

              
              <div className="content">
                {activeSection === "home" && (
                  <div className="home-content">
                    <img src="Renting black.jpg" alt="Home" />
                  </div>
                )}

                {activeSection === "about" && (
                  <div className="about-content">
                    {/* Content for About */}
                    <h1>About Page</h1>
                    <p>This is the about page content.</p>
                  </div>
                )}

                {activeSection === "services" && (
                  <div className="services-content">
                    {/* Content for Services */}
                    <h1>Services Page</h1>
                    <p>These are our services.</p>
                  </div>
                )}

                {activeSection === "work" && (
                  <div className="work-content">
                    {/* Content for Work */}
                    <h1>Work Page</h1>
                    <p>Our work examples go here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p>
            <button>Message</button>
          </p>

          <div className="user_contacts">
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
        </div>
      </div>
    </section>
  );
};
export default Homepage;
