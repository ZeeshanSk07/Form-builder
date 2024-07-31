import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetshareBot } from "../api/Typebot";
import logo from "../assets/theme/msglogo.png";
import send from "../assets/typebot/send.png";
import "./Sharebot.css";
import { saveResponse } from "../api/Response";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Sharebot() {
  const { typebotId } = useParams();
  const [bot, setBot] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [rate, setRate] = useState("");
  const [disabledInputs, setDisabledInputs] = useState({});
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getBot();
  }, [typebotId]);

  useEffect(() => {
    if (currentStep === bot.length && Object.keys(response).length > 0) {
      saveResp();
    }
  }, [currentStep]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (Object.keys(response).length > 0) {
        saveResp();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [response]);

  useEffect(() => {
    const recordPageView = async () => {
      try {
        await axios.post('/response/view', { pageId: typebotId });
      } catch (error) {
        console.error('Failed to record view:', error);
      }
    };

    recordPageView();
  }, []);

  const saveResp = async () => {
    if (Object.keys(response).length === 0) {
      console.warn("No response to save.");
      return;
    }

    try {
      const post = await saveResponse(typebotId, response);
      if (post.status === 201) {
        toast.success("Responses saved successfully!");
      } else {
        console.error("Error saving response:", post);
      }
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

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

  const handleInputChange = (name, value) => {
    setResponse((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinueRendering = () => {
    setDisabledInputs((prev) => ({ ...prev, [currentStep]: true }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (bot.length > 0 && currentStep < bot.length) {
      const currentBtn = bot[currentStep];

      if (currentBtn.type === "bubble") {
        const timer = setTimeout(() => {
          setCurrentStep((prevStep) => prevStep + 1);
        }, 1000); // 1 second delay for bubbles

        return () => clearTimeout(timer);
      }
    }
  }, [currentStep, bot]);

  return (
    <div className="askbot">
      {bot.map((btn, index) => {
        const nameparts = btn.name.split(" ");
        const firstname = nameparts[0];

        if (index > currentStep) return null;

        if (btn.type === "bubble") {
          return (
            <div key={index} className="ifbubble">
              {firstname === "Image" && (
                <>
                  <img className="bubblelogoimg" src={logo} alt="logo" />
                  <img src={btn.inputs} alt="image" />
                </>
              )}
              {firstname === "Video" && (
                <>
                  <img className="bubblelogoimg" src={logo} alt="logo" />
                  <video width="600" controls autoPlay muted>
                    <source src={btn.inputs} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              )}
              {firstname === "GIF" && (
                <>
                  <img className="bubblelogoimg" src={logo} alt="logo" />
                  <img src={btn.inputs} alt="gif" />
                </>
              )}

              {firstname === "Text" && (
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
              {firstname === "Text" && (
                <>
                  <input
                    value={response[btn.name] || ""}
                    type="text"
                    className={`inputdis ${disabledInputs[index] ? "disableinp" : ""}`}
                    placeholder="Enter your text"
                    onChange={(e) => handleInputChange(btn.name, e.target.value)}
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${disabledInputs[index] ? "disableinp" : ""}`}
                    onClick={handleContinueRendering}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {firstname === "Date" && (
                <>
                  <input
                    type="date"
                    className={`inputdis ${disabledInputs[index] ? "disableinp" : ""}`}
                    placeholder="Select a date"
                    onChange={(e) => handleInputChange(btn.name, e.target.value)}
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${disabledInputs[index] ? "disableinp" : ""}`}
                    onClick={handleContinueRendering}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {firstname === "Number" && (
                <>
                  <input
                    type="number"
                    className={`inputdis ${disabledInputs[index] ? "disableinp" : ""}`}
                    placeholder="Enter a number"
                    onChange={(e) => handleInputChange(btn.name, e.target.value)}
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${disabledInputs[index] ? "disableinp" : ""}`}
                    onClick={handleContinueRendering}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {firstname === "Email" && (
                <>
                  <input
                    type="email"
                    className={`inputdis ${disabledInputs[index] ? "disableinp" : ""}`}
                    placeholder="Enter your email"
                    onChange={(e) => handleInputChange(btn.name, e.target.value)}
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${disabledInputs[index] ? "disableinp" : ""}`}
                    onClick={handleContinueRendering}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {firstname === "Phone" && (
                <>
                  <input
                    type="tel"
                    className={`inputdis ${disabledInputs[index] ? "disableinp" : ""}`}
                    placeholder="Enter your phone"
                    onChange={(e) => handleInputChange(btn.name, e.target.value)}
                    disabled={!!disabledInputs[index]}
                  />
                  <button
                    className={`sendbtn ${disabledInputs[index] ? "disableinp" : ""}`}
                    onClick={handleContinueRendering}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              {firstname === "Button" && (
                <button
                  className={`btnbotshare ${disabledInputs[index] ? "disableinp" : ""}`}
                  disabled={!!disabledInputs[index]}
                  onClick={() => {
                    handleContinueRendering();
                    handleInputChange(btn.name, btn.inputs);
                  }}
                >
                  {btn.inputs}
                </button>
              )}
              {firstname === "Rating" && (
                <>
                  <div
                    className={`ratinginput ${disabledInputs[index] ? "disableinp" : ""}`}
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
                          handleInputChange(btn.name, value);
                        }}
                        disabled={!!disabledInputs[index]}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                  <button
                    className={`sendbtn ${disabledInputs[index] ? "disableinp" : ""}`}
                    onClick={handleContinueRendering}
                    disabled={!!disabledInputs[index]}
                  >
                    <img className="sendmsg" src={send} alt="send" />
                  </button>
                </>
              )}
              <Toaster position="top-center" reverseOrder={false} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default Sharebot;
