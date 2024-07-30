import React, { useState, useEffect } from "react";
import "./CreateTypebot.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Mainbar from "../components/Mainbar";
import Themebar from "../components/Themebar";
import Thememain from "../components/Thememain";
import Response from "../components/Response";

function CreateTypebot({ userId, selectedbtn, setSelectedbtn, formName, setFormName,parent,setParent, theme, setTheme, themeId, typebotId, setTypebotId}) {
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
          userId={userId}
          active={active}
          setActive={setActive}
          typebotId={typebotId}
          setTypebotId={setTypebotId}
          parent={parent}
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
                : "rgb(31,31,35)",
          }}
          className="botbottom"
        >
          {active === "theme" ? (
            <>
              <Themebar theme={theme} setTheme={setTheme} themeId={themeId} />
              <Thememain theme={theme} />
            </>
          ) : active === 'response' ?
              <Response typebotId={typebotId}
          setTypebotId={setTypebotId} selectedbtn={selectedbtn}/>
           :
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
          }
        </div>
      </div>
    </>
  );
}

export default CreateTypebot;
