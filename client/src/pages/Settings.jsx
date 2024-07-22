import React from "react";
import './Settings.css';
import profile from '../assets/settings/profile.png';
import lock from '../assets/settings/lock.png';
import eye from '../assets/settings/eye.png';
import logout from '../assets/settings/Logout.png';

function Settings() {
  return (
    <>
      <div className="settings">
        <h2>Settings</h2>

        <div className="input">
          <img src={profile} alt="user" /><input type="text" placeholder="Name" />
        </div>

        <div className="input">
          <img src={lock} alt="locked" /><input type="email" placeholder="Update Email" /><img src={eye} alt="hide" />
        </div>

        <div className="input">
        <img src={lock} alt="locked" /><input type="text" placeholder="Old Password"/><img src={eye} alt="hide" />
        </div>

        <div className="input">
        <img src={lock} alt="locked" /><input type="text" placeholder="New Password" /><img src={eye} alt="hide" />
        </div>

        <button>Update</button>
      </div>
    </>
  );
}

export default Settings;
