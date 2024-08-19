import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <div className="navigation_bar">
        <nav className="nav">
          <ul className="navbar_items">
            <a href="/landingPage">
              <li className="home" id="home">
                Home
              </li>
            </a>
            <a href="booking">
              <li className="booking" id="booking">
                Book your table
              </li>
            </a>
            <a href="/ContactUs">
              <li className="contact" id="contact">
                Contact us
              </li>
            </a>
            <a href="/aboutUs">
              <li className="about" id="about">
                About us
              </li>
            </a>
            <div className="button_section">
            <a href="login"><button type="button" className="login" >Login</button></a>
            <a href="./SignUp"><button type="button" className="signup" >Sign up</button></a>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar;
