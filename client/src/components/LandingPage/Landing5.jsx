import React from "react";
import "./Landing5.css";
import vector from "../../assets/attachment2.png";
import vector2 from "../../assets/attachment.png";
import { useNavigate } from "react-router-dom";

function Landing5() {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing5">
        <img src={vector} alt="vector" />
        <div>
          <h2>Improve conversion and user engagement with FormBots </h2>
          <button onClick={() => navigate('/signup')}>Create a FormBot </button>
          <p>
            No trial. Generous <span>free</span> plan.
          </p>
        </div>
        <img src={vector2} alt="vector" />
      </div>
    </>
  );
}

export default Landing5;
