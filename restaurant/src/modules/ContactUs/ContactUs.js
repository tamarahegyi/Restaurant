import React from "react";
import "./ContactUs.css";
import Myimage7 from "../assets/mario-gutierrez-dH7GC5QqO7Y-unsplash.jpg";

function ContactUs() {
  return (
    <div className="contactUs-section">
      <div className="contact-info-section">
        <h1 className="contact-main">Contact info</h1>
        <div className="company-details-section">
          <form className="contact-form">
            <label className="name-label" htmlFor="name">
              Full name
            </label>
            <input className="name-input" type="text"></input>
            <label className="email-label" htmlFor="email">
              Email address
            </label>
            <input className="email-input" type="email"></input>
            <label className="message-label" htmlFor="message">
              Message
            </label>
            <textarea className="message-input" type="message"></textarea>
          </form>
          <div className="company-details">
            Contact
            <h2 className="company-email">mi.restaurante@email.com</h2>
            Based in
            <h2 className="company-base">Madrid</h2>
            </div>
        </div>
      </div>
      <div className="contactUs-photo">
        <img src={Myimage7} alt="building" className="contact-photo"></img>
      </div>
    </div>
  );
}

export default ContactUs;
