import React from "react";
import "./SignUp.css";
import MyPhoto from "../assets/signup.jpg";

function SignUp() {
  return (
    <div className="sign-up-main-page">
      <div className="sign-up-message">
        <h1>Sign up</h1>
        <img className="sign-up-photo" src={MyPhoto} alt="open sign"></img>
      </div>
      <div className="sign-up-form">
        <form className="sign-up">
          <label className="sign-up-name" htmlFor="name">
            Full name
          </label>
          <input className="name-input sign-up-name-input" type="text"></input>
          <label htmlFor="email">Email</label>
          <input
            className="email-input sign-up-name-input"
            type="email"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            className="password-input email-input sign-up-name-input"
            type="password"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
