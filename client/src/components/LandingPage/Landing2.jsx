import React from "react";
import "./Landing2.css";
import landing2 from "../../assets/Landing2.png";
import landingbottom from "../../assets/landing bottom.png";

function Landing2() {
  return (
    <>
      <div className="Container">
        <h1>
          Replace your old school forms with <br />
          chatbots
        </h1>
        <div className="smalltext">
          Typebot is a better way to ask for information. It leads to an
          increase in customer satisfaction and retention and multiply by <br />{" "}
          3 <br />
          your conversion rate compared to classical forms.
        </div>

        <div className="bottom">
          <div>
            <img src={landingbottom} alt="landing" />
          </div>
          <div>
            <img src={landing2} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing2;
