import React from "react";
import img2 from "../../assets/attachment.png";
import img1 from "../../assets/attachment2.png";
import fig from "../../assets/Container.png";
import "./Landing1.css";

function Landing1() {
  return (
    <>
      <div className="main">
        <div className="toppart">
          <div className="flexdiv">
            <img src={img1} alt="img" />
          </div>
          <div className="headdiv">
            <h1>Build advanced chatbots visually</h1>
            <div className="flexdiv">
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them anywhere on your web/mobile apps and start
              collecting results like magic.
            </div>
            <button>Create a FormBot for free</button>
          </div>
          <div className="flexdiv">
            <img src={img2} alt="img" />
          </div>
        </div>
        <div className="bottompart">
          <img src={fig} alt="figure" />
        </div>
      </div>
    </>
  );
}

export default Landing1;
