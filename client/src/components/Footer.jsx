import React from "react";
import './Footer.css';
import directto from '../assets/link.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="column">
          Made with ❤️ by
          <a href="/signup">@cuvette</a>
        </div>
        <div className="column">
          <a href="/signup">Status <img src={directto} alt="" /></a>
          <a href="/signup">Documentation <img src={directto} alt="" /></a>
          <a href="/signup">Roadmap <img src={directto} alt="" /></a>
          <a href="/signup">Pricing</a>
        </div>
        <div className="column">
          <a href="/signup">Discord <img src={directto} alt="" /></a>
          <a href="/signup">Github repository <img src={directto} alt="" /></a>
          <a href="/signup">Twitter <img src={directto} alt="" /></a>
          <a href="/signup">LinkedIn <img src={directto} alt="" /></a>
          <a href="/signup">OSS Friends</a>
        </div>
        <div className="column">
          <a href="/signup">About</a>
          <a href="/signup">Contact</a>
          <a href="/signup">Terms of Service</a>
          <a href="/signup">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
