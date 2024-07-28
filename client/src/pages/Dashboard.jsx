import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import dropdown from "../assets/dashboard/dropdown.png";
import create from "../assets/dashboard/create.png";
import deleteicon from "../assets/dashboard/delete.png";
import add from "../assets/dashboard/add.png";
import { useNavigate } from "react-router-dom";
import { CreateFolder, DeleteFolder, GetFolders } from "../api/Folders";
import { GetTheme } from "../api/Theme";
import { GetTypebots, DeleteTypebot } from "../api/Typebot";

function Dashboard({
  currentUser,
  setCurrentUser,
  userId,
  setUserId,
  parent,
  setParent,
  setTheme,
  setThemeId,
  typebotId,
  setTypebotId,
  formName,
  setFormName,
  selectedbtn,
  setSelectedbtn,
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [createfold, setCreatefold] = useState(false);
  const [confirmdel, setConfirmdel] = useState(false);
  const [confirmdelform, setConfirmdelform] = useState(false);
  const [foldName, setFoldName] = useState("");
  const [folders, setFolders] = useState([]);
  const [foltodel, setFoltodel] = useState("");
  const [typebot, setTypebot] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetchData();
      fetchtypebot();
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchData();
      fetchtypebot();
    }
  }, [userId]);

  useEffect(() => {
    if (currentUser?.email) {
      setUserId(currentUser.id);
    }
  }, [currentUser]);

  useEffect(() => {
    if (parent) {
      
      fetchtypebot();
    }
  }, [parent]);
  const fetchtypebot = async () => {
    const typebots = await GetTypebots(userId, parent);
    setTypebot(typebots.typebots);
    console.log(typebots.typebots);
  };
  const fetchData = async () => {
    if (userId) {
      try {
        const folder = await GetFolders(userId);
        setFolders(folder);

        const typebots = await GetTypebots(userId, parent);
        setTypebot(typebots.typebots);
        console.log(typebots.typebots);

        const themeon = await GetTheme(userId);
        setThemeId(themeon.themes._id);
        setTheme(themeon.themes.theme);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    }
  };

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const newFolder = async () => {
    const response = await CreateFolder(foldName, userId);
    if (response.status === 201) {
      setFoldName("");
      setCreatefold(false);
      fetchData();
    }
  };

  const handledelfold = async () => {
    if (foltodel) {
      const response = await DeleteFolder(foltodel);
      if (response.status === 200) {
        setConfirmdel(false);
        fetchData(); // Fetch the updated list of folders
      }
    }
  };

  const Logout = () => {
    setCurrentUser("");
    navigate("/");
    localStorage.removeItem("token");
  };

  const deleteForm = async () => {
    const response = await DeleteTypebot(typebotId);
    if (response.status === 200) {
      setConfirmdelform(false);
      fetchData(); // Fetch the updated list of folders
    }
  };

  const editTypebot = (formid, form, btns) => {
    console.log("function triggered");
    setTypebotId(formid);
    console.log("typebotId");
    setFormName(form);
    console.log("form");
    setSelectedbtn(btns);
    navigate("/createtypebot");
  };

  const settparent = (folId) => {
    setParent(folId);
  };

  const createbot = () => {
    setTypebotId("");
    setFormName("");
    setSelectedbtn([]);
    navigate("/createtypebot");
  };

  return (
    <>
      <div className="dashboard">
        <div className="headbox">
          <h3>
            <span>{currentUser.username}</span>'s workspace
            <img
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
              src={dropdown}
              alt="dropdown"
            />
            {isDropdownVisible && (
              <>
                <h3
                  onClick={() => navigate("/settings")}
                  className="dropdown-menu"
                >
                  Settings
                </h3>
                <h3
                  onClick={Logout}
                  style={{ color: "rgba(255, 165, 76, 1)" }}
                  className="dropdown-menu"
                >
                  Logout
                </h3>
              </>
            )}
          </h3>
        </div>
        <div className="strip">
          <div onClick={(e) => {
              setCreatefold(true);
              setParent(null);
            }} className="createform">
            <img src={create} alt="" />
            Create a folder
          </div>
          <div className="scrollstrip">
            {folders.map((ele, index) => (
              <div
                key={index}
                onClick={() => {
                  settparent(ele._id);
                }}
                className={`stripbox ${parent === ele._id ? "activefold" : ""}`}
                onMouseDown={() => setParent("")}
              >
                {ele.name}
                <img
                  onClick={(e) => {
                    setConfirmdel(true);
                    setFoltodel(ele._id);
                  }}
                  src={deleteicon}
                  alt="delete"
                />
              </div>
            ))}
          </div>
        </div>

        {createfold && (
          <div className="newfolder">
            <h2>Create New Folder</h2>
            <input
              onChange={(e) => setFoldName(e.target.value)}
              type="text"
              placeholder="Enter folder name"
            />
            <br />
            <button onClick={newFolder} className="done">
              Done
            </button>
            <button onClick={() => setCreatefold(false)}>Cancel</button>
          </div>
        )}

        {confirmdel && (
          <div className="confirmdel">
            <h2>Are you sure you want to delete this folder?</h2>
            <button onClick={handledelfold} className="confirm">
              Confirm
            </button>
            <button onClick={() => setConfirmdel(false)} className="cancel">
              Cancel
            </button>
          </div>
        )}

        {confirmdelform && (
          <div className="confirmdel">
            <h2>Are you sure you want to delete this Form?</h2>
            <button onClick={deleteForm} className="confirm">
              Confirm
            </button>
            <button
              onClick={(e) => {
                setConfirmdelform(false);
                setTypebotId("");
              }}
              className="cancel"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="typebot">
          <div onClick={createbot}>
            <img src={add} alt="add" />
            Create a typebot
          </div>
          {typebot.map((item, index) => (
            <div className="formne">
             <img
                onClick={(e) => {
                  setConfirmdelform(true);
                  setTypebotId(item._id);
                }}
                src={deleteicon}
                alt="del"
                className="deltype"
              />
              <div
              key={index}
              onClick={(e) => {
                editTypebot(item._id, item.formName, item.selectedbtn);
              }}
              className="formbot"
            >
              
              {item.formName}
             </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
