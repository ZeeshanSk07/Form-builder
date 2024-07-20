import React from "react";
import "./LoginPage.css";
import arrow from "../assets/login/arrow_back.png";
import semicircle from "../assets/login/Ellipse 1.png";
import vercircle from "../assets/login/Ellipse 2.png";
import triangle from "../assets/login/Group 2 (1).png";
import { useNavigate } from "react-router-dom";
import { Login } from '../api/User';
import { useState } from "react";

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const response = await Login(email, password);
      console.log(response);
      if (response.status === 200){
        localStorage.setItem('token', response.data.token);
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.log('error');
    }
  }
  return (
    <>
      <div className="login">
        <img onClick={()=>navigate(-1)} src={arrow} alt="" />
        <div className="middles">
          <img src={triangle} alt="" />
          <div className="forms">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="**********" />

            <button onClick={handlelogin}>Log In</button>
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
