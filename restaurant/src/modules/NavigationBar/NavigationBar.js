import React from "react";
import "./NavigationBar.css";

function LandingPage() {
  return (
    <>
      <div className="navigation_bar">
        <nav className="nav">
          <ul className="navbar_items">
            <a href="home">
              <li className="home" id="home">
                Home
              </li>
            </a>
            <a href="booking">
              <li className="booking" id="booking">
                Book your table
              </li>
            </a>
            <a href="contact">
              <li className="contact" id="contact">
                Contact us
              </li>
            </a>
            <a href="about">
              <li className="about" id="about">
                About us
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default LandingPage;
