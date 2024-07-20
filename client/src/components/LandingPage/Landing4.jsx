import React from "react";
import "./Landing4.css";
import landing4 from "../../assets/landing4.png";
import logo1 from "../../assets/features/logo1.png";
import logo2 from "../../assets/features/logo2.png";
import logo3 from "../../assets/features/logo3.png";
import logo4 from "../../assets/features/logo4.png";
import logo5 from "../../assets/features/logo5.png";
import logo6 from "../../assets/features/logo6.png";

import company1 from "../../assets/companylogo/SVG (1).png";
import company2 from "../../assets/companylogo/SVG (2).png";
import company3 from "../../assets/companylogo/SVG (3).png";
import company4 from "../../assets/companylogo/SVG (4).png";
import company5 from "../../assets/companylogo/SVG (5).png";
import company6 from "../../assets/companylogo/SVG (6).png";
import company7 from "../../assets/companylogo/SVG (7).png";
import company8 from "../../assets/companylogo/SVG (8).png";

function Landing4() {
  return (
    <>
      <div className="landing4">
        <h1>Collect results in real-time</h1>
        <p>
          One of the main advantage of a chat application is that you collect
          the user's responses on each question. <br />
          <span>You won't lose any valuable data.</span>
        </p>
        <img src={landing4} alt="img" />
      </div>

      <div className="landing4bot">
        <h2>And many more features</h2>
        <p>Typebot makes form building easy and comes with powerful features</p>
        <div className="boxes">
          <div className="graybox">
            <div className="textbox">
              <img src={logo1} alt="logo" />
              <h3>Hidden fields</h3>
              <p>
                Include data in your form URL to segment your user and use its
                data directly in your form.
              </p>
            </div>
          </div>
          <div className="graybox">
            <div className="textbox">
              <img src={logo2} alt="logo" />
              <h3>Team collaboration</h3>
              <p>Invite your teammates to work on your typebots with you</p>
            </div>
          </div>
          <div className="graybox">
            <div className="textbox">
              <img src={logo3} alt="logo" />
              <h3>Link to sub typebots</h3>
              <p>Reuse your typebots in different parent bots.</p>
            </div>
          </div>
          <div className="graybox">
            <div className="textbox">
              <img src={logo4} alt="logo" />
              <h3>Custom code</h3>
              <p>Customize everything with your own Javascript & CSS code</p>
            </div>
          </div>
          <div className="graybox">
            <div className="textbox">
              <img src={logo5} alt="logo" />
              <h3>Custom domain</h3>
              <p>Connect your typebot to the custom URL of your choice</p>
            </div>
          </div>
          <div className="graybox">
            <div className="textbox">
              <img src={logo6} alt="logo" />
              <h3>Folder management</h3>
              <p>
                Organize your typebots in specific folders to keep it clean and
                work with multiple clients
              </p>
            </div>
          </div>
        </div>

        <h3>Loved by teams and creators from all around the world</h3>
        <div className="companylogo">
          <img src={company1} alt="img" />
          <img src={company2} alt="img" />
          <img src={company3} alt="img" />
          <img src={company4} alt="img" />
          <img src={company5} alt="img" />
          <img src={company6} alt="img" />
          <img src={company7} alt="img" />
          <img src={company8} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Landing4;
