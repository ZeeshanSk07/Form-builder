import React from "react";
import "./Landing3.css";
import landing3 from "../../assets/landing3.png";
import landing3bot from "../../assets/landing3bot.png";
import landinglogo from "../../assets/landing3logos.png";

function Landing3() {
  return (
    <>
      <div className="specify">
        <div className="splitpage">
          <div className="img">
            <img src={landing3} alt="img" />
          </div>
          <div className="text">
            <h2>Easy building experience</h2>
            <p>
              All you have to do is drag and drop blocks to create your app.
              Even if you have custom needs, you can always add custom code.
            </p>
          </div>
        </div>
        <div className="splitpage">
          <div className="text">
            <h2>Embed it in a click</h2>
            <p>
              Embedding your typebot in your applications is a walk in the park.
              Typebot gives you several step-by-step platform- specific
              instructions. Your typebot will always feel "native".
            </p>
          </div>
          <div className="img">
            <img src={landing3bot} alt="img" />
          </div>
        </div>
      </div>
      <div className="logos">
        <img src={landinglogo} alt="logos" />
        <h2>Integrate with any platform</h2>
        <p>
          Typebot offers several native integrations blocks as well as
          instructions on how to embed typebot on particular platforms
        </p>
      </div>
    </>
  );
}

export default Landing3;
