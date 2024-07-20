import React from "react";
import "./LoginPage.css";
import arrow from "../assets/login/arrow_back.png";
import semicircle from "../assets/login/Ellipse 1.png";
import vercircle from "../assets/login/Ellipse 2.png";
import triangle from "../assets/login/Group 2 (1).png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <img onClick={()=>navigate(-1)} src={arrow} alt="" />
        <div className="middles">
          <img src={triangle} alt="" />
          <div className="forms">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" />

            <button>Log In</button>
            <p>
              Don't have an account? <a href="/signup">Register now</a>
            </p>
          </div>
          <img src={vercircle} alt="" />
        </div>
        <div className="bottomside">
          <img src={semicircle} alt="" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
