import React from "react";
import "./NavigationBar.css";
import "./MediaQueries.css";

function NavigationBar() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <>
      <div className="navigation_bar">
        <nav className="desktop-nav">
          <ul className="navbar_items">
            <a href="/landingPage">
              <li className="home" id="home">
                Home
              </li>
            </a>
            <a href="booking">
              <li className="booking" id="booking">
                Book a table
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
              <a href="login">
                <button type="button" className="login">
                  Login
                </button>
              </a>
              <a href="./SignUp">
                <button type="button" className="signup">
                  Sign up
                </button>
              </a>
            </div>
          </ul>
        </nav>

        <nav className="hamburger-nav">
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links">
              <ul className="hamburger-links">
                <li>
                  <a href="/landingPage">Home</a>
                </li>
                <li>
                  <a href="booking">Book a table</a>
                </li>
                <li>
                  <a href="/ContactUs">Contact us</a>
                </li>
                <li>
                  <a href="/aboutUs">About us</a>
                </li>
                <a href="login">
                  <button className="login" type="button">
                    Log in
                  </button>
                </a>
                <a href="./SignUp">
                  <button className="signup" type="button">
                    Sign up
                  </button>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavigationBar;
