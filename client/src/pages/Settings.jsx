import React, {useState, useEffect} from "react";
import './Settings.css';
import profile from '../assets/settings/profile.png';
import lock from '../assets/settings/lock.png';
import eye from '../assets/settings/eye.png';
import logout from '../assets/settings/Logout.png';
import {useNavigate} from 'react-router-dom';
import { Updateuser } from "../api/User";
import toast, {Toaster} from 'react-hot-toast'

function Settings({currentUser, setCurrentUser, userId, setUserId}) {

  const navigate = useNavigate();

  const [updusername, setUpdusername] = useState('');
  const [updemail, setUpdemail] = useState('');
  const [oldpassword, setOldpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');


  useEffect(() => {
    if (!currentUser){
      navigate('/login');
    }
    else{
      setUserId(currentUser.id);
    }
  }, []);

  const Logout= () => {
    setCurrentUser('');
    navigate('/');
    localStorage.removeItem('token');
  }

  const handleUpdate = async () => {
    const response = await Updateuser(userId, updusername, updemail, oldpassword, newpassword);
    if (response.status === 200) {
      setCurrentUser(response.data);
      toast.success('Profile updated successfully');
    }
    else{
      toast.error('Failed to update profile');
    }
  }

  return (
    <>
      <div className="settings">
        <h2>Settings</h2>

        <div className="input">
          <img src={profile} alt="user" /><input onChange={(e)=>setUpdusername(e.target.value)} type="text" placeholder="Name" />
        </div>

        <div className="input">
          <img src={lock} alt="locked" /><input onChange={(e)=>setUpdemail(e.target.value)} type="email" placeholder="Update Email" /><img src={eye} alt="hide" />
        </div>

        <div className="input">
        <img src={lock} alt="locked" /><input onChange={(e)=>setOldpassword(e.target.value)} type="text" placeholder="Old Password"/><img src={eye} alt="hide" />
        </div>

        <div className="input">
        <img src={lock} alt="locked" /><input onChange={(e)=>setNewpassword(e.target.value)} type="text" placeholder="New Password" /><img src={eye} alt="hide" />
        </div>

        <button onClick={handleUpdate}>Update</button>
        <Toaster position="top-center" reverseOrder={false} />


        <div onClick={Logout} className="logoff"><img src={logout} alt="logout" />Log out</div>
      </div>
    </>
  );
}

export default Settings;
