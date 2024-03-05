import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <section id="home">
      <div className="homepage">
        <div class="user_card">
          <img src="userprofile.png" alt="profile" />
          <h4>Mr Kwaza</h4>
        </div>

        <div class="about_user">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Work</a>
        </div>
        <div>
          <a href="#">
            <img src="twitter.png" alt="x" />
          </a>
          <a href="#">
            <img src="facebook.png" alt="facebook" />
          </a>
          <a href="#">
            <img src="linkedln.png" alt="linkedln" />
          </a>
        </div>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </section>
  );
}
export default Homepage;
