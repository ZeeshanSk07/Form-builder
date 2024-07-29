import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetshareBot } from "../api/Typebot";
import logo from "../assets/theme/msglogo.png";
import send from "../assets/typebot/send.png";
import "./Sharebot.css";

function Sharebot() {
  const { typebotId } = useParams();
  const [bot, setBot] = useState([]);
  const [continueRendering, setContinueRendering] = useState(true);
  const [rate, setRate] = useState("");
  const [disabledInputs, setDisabledInputs] = useState({}); // State for disabling specific inputs

  useEffect(() => {
    getBot();
  }, [typebotId]);

  const getBot = async () => {
    try {
      const res = await GetshareBot(typebotId);
      if (res && res.data && res.data.typebot) {
        setBot(res.data.typebot.selectedbtn);
      }
    } catch (error) {
      console.error("Error fetching bot data:", error);
    }
  };

  const handleContinueRendering = (index) => {
    setDisabledInputs((prev) => ({ ...prev, [index]: true }));
    setContinueRendering(true);
  };

  return (
    <div className="askbot">
      {bot.map((btn, index) => {
        if (btn.type === "bubble" && continueRendering) {
          return (
            <div key={index} className="ifbubble">
              {btn.name === "Image" && (
                <>
                  <img className="bubblelogoimg" src={logo} alt="logo" />
                  <img src={btn.inputs} alt="image" />
                </>
              )}
              {btn.name === "Video" && (
                <>
                  <img className="bubblelogoimg" src={logo} alt="logo" />
                  <video width="600" controls autoPlay muted>
                    <source src={btn.inputs} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
              {btn.name === "GIF" && (
                <>
                  <img className="bubblelogoimg" src={logo} alt="logo" />
                  <img src={btn.inputs} alt="gif" />
                </>
              )}

              {btn.name === "Text" && (
                <>
                  <img className="bubblelogo" src={logo} alt="logo" />
                  <div className="textbubble">{btn.inputs}</div>
                </>
              )}
            </div>
          );
        }

        if (btn.type === "inputs") {
          return (
            <div key={index} className="ifinput">
              {btn.name === "Text" && (
                <>
                  <input
                    type="text"
                    className={`inputdis ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    placeholder="Enter your text"
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    onClick={() => handleContinueRendering(index)}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {btn.name === "Date" && (
                <>
                  <input
                    type="date"
                    className={`inputdis ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    placeholder="Select a date"
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    onClick={() => handleContinueRendering(index)}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {btn.name === "Number" && (
                <>
                  <input
                    type="number"
                    className={`inputdis ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    placeholder="Enter a number"
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    onClick={() => handleContinueRendering(index)}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {btn.name === "Email" && (
                <>
                  <input
                    type="email"
                    className={`inputdis ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    placeholder="Enter your email"
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    onClick={() => handleContinueRendering(index)}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {btn.name === "Phone" && (
                <>
                  <input
                    type="tel"
                    className={`inputdis ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    placeholder="Enter your phone"
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    onClick={() => handleContinueRendering(index)}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {btn.name === "Button" && (
                <button
                  className={`btnbotshare ${
                    disabledInputs[index] ? "disableinp" : ""
                  }`}
                  disabled={!!disabledInputs[index]}
                  onClick={() => handleContinueRendering(index)}
                >
                  {btn.inputs}
                </button>
              )}
              {btn.name === "Rating" && (
                <>
                  <div
                    className={`ratinginput ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        style={{
                          backgroundColor:
                            rate === value.toString()
                              ? "rgba(255, 142, 33, 1)"
                              : "",
                        }}
                        onClick={() => {
                          setRate(value.toString());
                          handleContinueRendering(index);
                        }}
                        disabled={!!disabledInputs[index]}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <button
                    className={`sendbtn ${
                      disabledInputs[index] ? "disableinp" : ""
                    }`}
                    onClick={() => handleContinueRendering(index)}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default Sharebot;