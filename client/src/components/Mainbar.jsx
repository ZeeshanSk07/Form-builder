import React, {useEffect} from "react";
import "./Mainbar.css";
import start from "../assets/typebot/start.png";
import deletebot from "../assets/typebot/delete.png";

function Mainbar({ selectedbtn, setSelectedbtn }) {
  const removebubble = (indexToremove) => {
    setSelectedbtn(selectedbtn.filter((btn, index) => index !== indexToremove));
  };

  useEffect(() => {
    console.log(selectedbtn);
  }, [selectedbtn]);


  const handleInputChange = (index, value) => {
    setSelectedbtn((prevSelectedbtn) =>
      prevSelectedbtn.map((btn, i) =>
        i === index ? { ...btn, inputs: value } : btn
      )
    );
  };

  return (
    <>
      <div className="mainbar">
        <div>
          <img src={start} alt="flag" />
          Start
        </div>

        {selectedbtn.map((btn, index) => {
          const firstname = btn.name.split(" ")[0];
          if (btn.type === "bubble") {
            return (
              <div key={index} className="askbubble">
                <img
                  onClick={() => removebubble(index)}
                  className="deletebubble"
                  src={deletebot}
                  alt="del"
                />
                <div>{btn.name}</div>
                {firstname === "Text" ? (
                  <input onChange={(e) => handleInputChange(index, e.target.value)} value={btn.inputs} type="text" placeholder="Click to add Text" />
                ) : (
                  <input onChange={(e) => handleInputChange(index, e.target.value)} value={btn.inputs} type="text" placeholder="Click to add link" />
                )}
              </div>
            );
          }

          if (btn.type === "inputs") {
            return (
              <div key={index} className="askinput">
                <img
                  onClick={() => removebubble(index)}
                  className="deletebubble"
                  src={deletebot}
                  alt="del"
                />
                <div>Input {btn.name}</div>
                {firstname === "Date" ? (
                  <p>Hint : User will select a date</p>
                ) : firstname === "Button" ? (
                  <input onChange={(e) => handleInputChange(index, e.target.value)} value={btn.inputs} className="btnbot" type="text" />
                ) : firstname === "Rating" ? (
                  <p>Hint : User will tap to rate out of 5</p>
                ) : (
                  <p>Hint : User will input a {firstname} on his form</p>
                )}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Mainbar;
