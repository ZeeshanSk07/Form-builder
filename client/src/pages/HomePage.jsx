import React from "react";
import './HomePage.css';
import headlogo from '../assets/headlogo.png';
import Landing1 from "../components/LandingPage/Landing1";
import Landing2 from "../components/LandingPage/Landing2";
import Landing3 from "../components/LandingPage/Landing3";
import Landing4 from "../components/LandingPage/Landing4";
import Landing5 from "../components/LandingPage/Landing5";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div><img src={headlogo} alt='icon' /><span>FormBot</span></div>
        <div className="userbtn">
          <button onClick={() => navigate('/login')} style={{backgroundColor:"transparent",color:'rgba(126, 166, 255, 1)',border:'1px solid rgba(126, 166, 255, 1)'}}>Sign in</button>
          <button onClick={() => navigate('/signup')}>Create a Formbot</button>
        </div>
      </div>
      <Landing1 />
      <Landing2 />
      <Landing3 />
      <Landing4 />
      <Landing5 />
      <Footer />
    </>
  );
}

export default HomePage;
