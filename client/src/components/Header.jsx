import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CreateTypebot, UpdateTypebot} from "../api/Typebot";
import toast, {Toaster} from "react-hot-toast";

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

  const handleclick = (buttonId) => {
    setActive(buttonId);
  };

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
          <button>Share</button>
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
      </div>
    </>
  );
}

export default Header;
