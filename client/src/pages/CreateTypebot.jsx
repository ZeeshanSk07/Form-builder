import React, { useState, useEffect } from "react";
import "./CreateTypebot.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Mainbar from "../components/Mainbar";
import Themebar from "../components/Themebar";
import Thememain from "../components/Thememain";

function CreateTypebot({ theme, setTheme, themeId}) {
  const [selectedbtn, setSelectedbtn] = useState([]);
  const [formName, setFormName] = useState("");
  const [active, setActive] = useState("flow");

  useEffect(() =>{
    if (theme){
      setTheme(theme);
    }
  },[theme])
  return (
    <>
      <div className="botmainpg">
        <Header
          selectedbtn={selectedbtn}
          setSelectedbtn={setSelectedbtn}
          formName={formName}
          setFormName={setFormName}
          active={active}
          setActive={setActive}
        />
        <div
          style={{
            backgroundColor:
              theme === "light"
                ? "#ffffff"
                : theme === "dark"
                ? "rgb(23,25,35)"
                : theme === "blue"
                ? "rgb(80,140,155)"
                : "yellow",
          }}
          className="botbottom"
        >
          {active === "theme" ? (
            <>
              <Themebar theme={theme} setTheme={setTheme} themeId={themeId} />
              <Thememain theme={theme} setTheme={setTheme} />
            </>
          ) : (
            <>
              <Sidebar
                selectedbtn={selectedbtn}
                setSelectedbtn={setSelectedbtn}
              />
              <Mainbar
                selectedbtn={selectedbtn}
                setSelectedbtn={setSelectedbtn}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateTypebot;
