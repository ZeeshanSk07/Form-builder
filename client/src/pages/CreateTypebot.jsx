import React, { useState } from "react";
import "./CreateTypebot.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Mainbar from "../components/Mainbar";
import Themebar from "../components/Themebar";
import Thememain from "../components/Thememain";

function CreateTypebot() {
  const [selectedbtn, setSelectedbtn] = useState([]);
  const [formName, setFormName] = useState("");
  const [active, setActive] = useState("flow");
  const [selecttheme, setSelecttheme] = useState("");
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
  <div style={{
            backgroundColor: selecttheme === 'light'? '#ffffff' : selecttheme === 'dark' ? 'rgb(23,25,35)' : selecttheme === 'blue' ? 'rgb(80,140,155)' : 'rgb(31,31,35)'
        }} className="botbottom">
    {active === 'theme' ? (
      <>
        <Themebar selecttheme={selecttheme} setSelecttheme={setSelecttheme}/>
        <Thememain selecttheme={selecttheme} setSelecttheme={setSelecttheme}/>
      </>
    ) : (
      <>
        <Sidebar selectedbtn={selectedbtn} setSelectedbtn={setSelectedbtn} />
        <Mainbar selectedbtn={selectedbtn} setSelectedbtn={setSelectedbtn} />
      </>
    )}
  </div>
</div>
    </>
  );
}

export default CreateTypebot;
