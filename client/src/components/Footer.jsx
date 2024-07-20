import React from "react";
import './Footer.css';
import directto from '../assets/link.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="column">
          Made with ❤️ by
          <a href="">@cuvette</a>
        </div>
        <div className="column">
          <a href="">Status <img src={directto} alt="" /></a>
          <a href="">Documentation <img src={directto} alt="" /></a>
          <a href="">Roadmap <img src={directto} alt="" /></a>
          <a href="">Pricing</a>
        </div>
        <div className="column">
          <a href="">Discord <img src={directto} alt="" /></a>
          <a href="">Github repository <img src={directto} alt="" /></a>
          <a href="">Twitter <img src={directto} alt="" /></a>
          <a href="">LinkedIn <img src={directto} alt="" /></a>
          <a href="">OSS Friends</a>
        </div>
        <div className="column">
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
