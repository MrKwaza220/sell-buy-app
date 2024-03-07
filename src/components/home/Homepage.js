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

          <div className="about_user">
            <a href="">
              Home
              <div className="user_home">
               
              </div>
            </a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Work</a>
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
