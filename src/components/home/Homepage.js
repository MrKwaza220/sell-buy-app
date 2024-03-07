import React, { useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <section id="home">
      <div className="homepage">

        {/****  user profile ***************************************/}
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

              {/************ User Content ****************** */}
              <div className="content">
                {activeSection === "home" && (
                  <div className="home_content">
                    <img src="Renting black.jpg" alt="Home" />
                    <img src="Renting white.jpg" alt="Home" />

                  </div>
                )}


                {/* ********Content for About **************/}
                {activeSection === "about" && (
                  <div className="about-content">

                  
                    <h1>About Page</h1>
                    <p>
                      Sunt in culpa qui officia deserunt mollit anim id est
                      laborum consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco.
                    </p>
                  </div>
                )}

                {/* Content for Services******************/}
                {activeSection === "services" && (
                  <div className="services-content">
                    
                    
                    <h1>Services Page</h1>
                    <p>These are our services</p>
                  </div>
                )}
                 {/* Content for Work******************** */}
                {activeSection === "work" && (
                  <div className="work-content">
                   
                    <h1>Work Page</h1>
                    <p>Our work examples go here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p>
            <button>Message</button>
          </p>
          {/* ********users contacts********************/}
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


        {/*********** user favourites ***********************/}
        <div className="favourite">
            <div className="user_favourites">
            <h1>Your favourites</h1>
            <p>kwaza</p>
            <p>kwaza</p>
            <p>kwaza</p>
            <p>kwaza</p>

            </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
