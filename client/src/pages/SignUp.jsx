import React from "react";
import "./SignUp.css";
import arrow from "../assets/login/arrow_back.png";
import semicircle from "../assets/login/Ellipse 1.png";
import vercircle from "../assets/login/Ellipse 2.png";
import triangle from "../assets/login/Group 2 (1).png";

function SignUp() {
  return (
    <>
      <div className="signup">
        <img src={arrow} alt="" />
        <div className="middle">
          <img src={triangle} alt="" />
          <div className="form">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter a username" />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" />

            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" placeholder="" />

            <button>Log In</button>
            <p>
              Already have an account? <a href="">Login</a>
            </p>
          </div>
          <img src={vercircle} alt="" />
        </div>
        <div className="bottom">
          <img src={semicircle} alt="" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
