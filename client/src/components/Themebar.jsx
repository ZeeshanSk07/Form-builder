import React from "react";
import "./Themebar.css";
import light from "../assets/theme/light.png";
import dark from "../assets/theme/dark.png";
import blue from "../assets/theme/blue.png";

function Themebar({ selecttheme, setSelecttheme }) {
  return (
    <>
      <div className="themebar">
        <h2>Customize the theme</h2>

        <div className="themeopt">
          <img
            style={{
              border:
                selecttheme === "light" ? "4px solid rgb(26,95,255)" : "none",
              borderRadius: "12px",
            }}
            onClick={() => setSelecttheme("light")}
            src={light}
            alt="light"
          />
          <img
            style={{
              border:
                selecttheme === "dark" ? "4px solid rgb(26,95,255)" : "none",
              borderRadius: "12px",
            }}
            onClick={() => setSelecttheme("dark")}
            src={dark}
            alt="dark"
          />
          <img
            style={{
              border:
                selecttheme === "blue" ? "4px solid rgb(26,95,255)" : "none",
              borderRadius: "12px",
            }}
            onClick={() => setSelecttheme("blue")}
            src={blue}
            alt="blue"
          />
        </div>
      </div>
    </>
  );
}

export default Themebar;
