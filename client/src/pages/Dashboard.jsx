import React, {useState} from "react";
import "./Dashboard.css";
import dropdown from "../assets/dashboard/dropdown.png";
import create from "../assets/dashboard/create.png";
import deleteicon from "../assets/dashboard/delete.png";
import add from "../assets/dashboard/add.png";
import { useNavigate } from "react-router-dom";
import {CreateFolder, DeleteFolder, GetFolders} from "../api/Folders";

function Dashboard({currentUser, setCurrentUser}) {
  let arr = [
    
  ];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [createfold, setCreatefold] = useState(false);
  const [confirmdel, setConfirmdel] = useState(false);
  const [confirmdelform, setConfirmdelform] = useState(false);

  const [foldName, setFoldName] = useState('');


  const navigate = useNavigate();
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const createfolder = () => {
    setCreatefold(true);
  }

  const newFolder = async() => {
        const response = await CreateFolder(foldName);
        if(response.status === 201) {
          setFoldName('');
          setCreatefold(false);
          let folders = await GetFolders();

            if (Array.isArray(folders)) {
                const arr = folders.map(folder => folder.name);
            } else {
                console.error('GetFolders did not return an array:', folders);
            }
        }
      
  }

  return (
    <>
      <div className="dashboard">
        <div className="headbox">
          <h3>
            <span>{currentUser.username}</span>'s workspace <img onClick={toggleDropdown} 
              style={{ cursor: 'pointer' }} src={dropdown} alt="dropdown" />
              {isDropdownVisible && (
            <><h3 onClick={(e)=>navigate('/settings')} className='dropdown-menu'>
              Settings
            </h3>
            <h3 onClick={(e)=>{setCurrentUser('');navigate('/')}} className='dropdown-menu'>
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
                {ele}<img onClick={(e)=>setConfirmdel(true)} src={deleteicon} alt="delete" />
              </div>
            ))}
          </div>
        </div>

        {createfold && <div className="newfolder">
          <h2>Create New Folder</h2>
          <input onChange={(e)=>setFoldName(e.target.value)} type="text" placeholder="Enter folder name"/><br />
          <button onClick={newFolder} className="done">Done</button>
          <button onClick={(e)=>setCreatefold(false)}>Cancel</button>
        </div>}

        {confirmdel && <div className="confirmdel">
          <h2>Are you sure you want to 
          delete this folder ?</h2>
          <button className="confirm">Confirm</button>
          <button onClick={(e)=>setConfirmdel(false)} className="cancel">Cancel</button>
        </div>}

        {confirmdelform && <div className="confirmdel">
          <h2>Are you sure you want to 
          delete this Form ?</h2>
          <button className="confirm">Confirm</button>
          <button onClick={(e)=>setConfirmdelform(false)} className="cancel">Cancel</button>
        </div>}

        <div className="typebot">
          <div>
            <img src={add} alt="add" />
            Create a typebot
          </div>
          {arr.map((item, index) => (
            <div className="formbot" key={index}>
              <img onClick={(e)=>setConfirmdelform(true)} src={deleteicon} alt="del" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
