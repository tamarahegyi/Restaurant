import React from "react";
import "./LandingPage.css";
import Carousel from "./Carousel";
import './LandingQueries.css'

function LandingPage() {
  return (
    <section className="landingpage-section">
      <div className="main-message">
        <div className="landingpage-section">
          <h1 className="welcome-message">So great to see you</h1>
        </div>
        <div className="landingpage-buttons">
          <a href="/aboutUs"><button className="read-our-history">Read about our history</button></a>
          <a href="/booking"><button className="book-table-landing">Book a table</button></a>
        </div>
        <Carousel />
      </div>
    </section>
  );
}

export default LandingPage;
