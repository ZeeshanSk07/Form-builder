import React, { useState, useEffect } from "react";
import "./Themebar.css";
import light from "../assets/theme/light.png";
import dark from "../assets/theme/dark.png";
import blue from "../assets/theme/blue.png";
import { updateTheme } from "../api/Theme";
import toast, { Toaster } from 'react-hot-toast';

function Themebar({ theme, setTheme, themeId }) {
  
  const handleTheme = async (newTheme) => {
    setTheme(newTheme);
    const response = await updateTheme(themeId, newTheme);
    if (response.status === 200) {
      toast.success('Theme updated!');
    } else {
      toast.error('Failed to update theme');
    }
  };

  return (
    <>
      <div className="themebar">
        <h2>Customize the theme</h2>
        <div className="themeopt">
          <img
            style={{
              border: theme === "light" ? "4px solid rgb(26,95,255)" : "none",
              borderRadius: "12px",
            }}
            onClick={() => handleTheme("light")}
            src={light}
            alt="light"
          />
          <img
            style={{
              border: theme === "dark" ? "4px solid rgb(26,95,255)" : "none",
              borderRadius: "12px",
            }}
            onClick={() => handleTheme("dark")}
            src={dark}
            alt="dark"
          />
          <img
            style={{
              border: theme === "blue" ? "4px solid rgb(26,95,255)" : "none",
              borderRadius: "12px",
            }}
            onClick={() => handleTheme("blue")}
            src={blue}
            alt="blue"
          />
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Themebar;
