import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <section id="home">

    <div className="homepage">
      <div className="card">
        <img src="" alt="John" />
        <h4>Mr Kwaza</h4>

        <div>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
    </section>
  );
}
export default Homepage;
