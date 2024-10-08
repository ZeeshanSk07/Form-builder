import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CreateTypebot, UpdateTypebot} from "../api/Typebot";
import toast, {Toaster} from "react-hot-toast";
import check from '../assets/typebot/check.png';

function Header({
  userId,
  selectedbtn,
  setSelectedbtn,
  formName,
  setFormName,
  active,
  setActive,
  typebotId,
  setTypebotId,
  parent
}) {
  const navigate = useNavigate();

  const [share,setShare] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleclick = (buttonId) => {
    setActive(buttonId);
  };
  useEffect(() => {
    if (typebotId) {
      setIsDisabled(false);
    }
  },[])

  const saveForm = async() => {
    if (formName.trim() === "") {
      alert("Form Name is required");
      return;
    }

    if (!typebotId){
      const response = await CreateTypebot(formName, selectedbtn, userId, parent);
      console.log(response);
      setTypebotId(response.data.newTypebot._id);
      if (response.status === 201) {
        toast.success('Typebot Saved');
        setIsDisabled(false);      
      }else{
        toast.error('Error. Try again');
      }
    }
    else{
      const response = await UpdateTypebot(typebotId, formName, selectedbtn);
      console.log(response);
      if (response.status === 200) {
        toast.success('Typebot updated');
      }else{
        toast.error('Error. Try Updating again');
      }
    }
    
  };

  const shareTypebot = async() => {
    const url = `https://form-builder-tau-ten.vercel.app/typebot/${typebotId}`;
    try {
      await navigator.clipboard.writeText(url);
      console.log("URL copied to clipboard");
      setShare(true);

      setTimeout(() => {
        setShare(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy the URL: ", err);
      alert("Failed to copy the link. Please try again.");
    }
  }
  return (
    <>
      <div className="headerbot">
        <div>
          <input
            style={{ visibility: active !== "flow" ? "hidden" : "visible" }}
            onChange={(e) => setFormName(e.target.value)}
            type="text"
            value={formName}
            placeholder="Enter Form Name"
          />
        </div>

        <div className="opt">
          <div
            className={`${active === "flow" ? "active" : ""}`}
            onClick={() => handleclick("flow")}
          >
            Flow
          </div>
          <div
            className={`${active === "theme" ? "active" : ""}`}
            onClick={() => handleclick("theme")}
          >
            Theme
          </div>
          <div
            className={`${active === "response" ? "active" : ""}`}
            onClick={() => handleclick("response")}
          >
            Response
          </div>
        </div>

        <div className="buttons">
          <button style={{backgroundColor: isDisabled ? 'rgba(119, 119, 119, 1)' : 'rgba(26, 95, 255, 1)' }} onClick={shareTypebot} disabled={isDisabled}>Share</button>
          <button onClick={saveForm} className="save">
            Save
          </button>
          <Toaster position="top-center"  reverseOrder={false}/>
          <button
            onClick={(e) => {
              setSelectedbtn([]);
              setFormName("");
              navigate(-1);
            }}
          >
            X
          </button>
        </div>
        { share && <div className="copylink"><img src={check} alt="link copied" />Link copied</div>}
      </div>
    </>
  );
}

export default Header;
