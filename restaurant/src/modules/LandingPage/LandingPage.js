import React from "react";
import './LandingPage.css';
import Carousel from "./Carousel";

function LandingPage() {
  return (
    <section className="landingpage-section">
    <div className="main-message">
      <div className="landingpage-section">
        <h1>So great to see you</h1>
      </div>
      <div className="landingpage-buttons">
        <button className="read-our-history">Read about our history</button>
        <button className="book-table-landing">Book a table</button>
      </div>
      <Carousel/>
    </div>
    </section>
  );
}

export default LandingPage;
