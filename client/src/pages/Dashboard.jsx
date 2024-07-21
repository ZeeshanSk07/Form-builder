import React, {useState} from "react";
import "./Dashboard.css";
import dropdown from "../assets/dashboard/dropdown.png";
import create from "../assets/dashboard/create.png";
import deleteicon from "../assets/dashboard/delete.png";
import add from "../assets/dashboard/add.png";

function Dashboard({currentUser}) {
  let arr = [
    
  ];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [createfold, setCreatefold] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const createfolder = () => {
    setCreatefold(true);
  }

  return (
    <>
      <div className="dashboard">
        <div className="headbox">
          <h3>
            <span>{currentUser.username}</span>'s workspace <img onClick={toggleDropdown} 
              style={{ cursor: 'pointer' }} src={dropdown} alt="dropdown" />
              {isDropdownVisible && (
            <><h3 className='dropdown-menu'>
              Settings
            </h3>
            <h3 className='dropdown-menu'>
            Logout
            </h3></>
            
          )}
          </h3>
          
        </div>
        <div className="strip">
          <div onClick={createfolder} className="createform">
            <img src={create} alt="" />
            Create a folder
          </div>
          <div className="scrollstrip">
            {arr.map((ele, index) => (
              <div className="stripbox" key={index}>
                {ele}<img src={deleteicon} alt="delete" />
              </div>
            ))}
          </div>
        </div>

        {createfold && <div className="newfolder">
          <h2>Create New Folder</h2>
          <input type="text" placeholder="Enter folder name"/><br />
          <button>Done</button>
          <button>Cancel</button>
        </div>}

        <div className="typebot">
          <div>
            <img src={add} alt="add" />
            Create a typebot
          </div>
          {arr.map((item, index) => (
            <div className="formbot" key={index}>
              <img src={deleteicon} alt="del" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
