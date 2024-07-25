import React, {useState} from 'react';
import './Header.css';
import {useNavigate} from 'react-router-dom';

function Header({selectedbtn, setSelectedbtn, formName, setFormName,active, setActive}) {

  const navigate = useNavigate();

  const handleclick = (buttonId) => {
    setActive(buttonId);
  }
  return (
    <>
        <div className="headerbot">
            <div><input style={{ visibility: active !== 'flow' ? 'hidden' : 'visible' }} onChange={(e)=>setFormName(e.target.value)} type="text" placeholder='Enter Form Name' /></div>
            
            <div className="opt">
                <div className={`${active === 'flow' ? 'active' : ''}`} onClick={()=>handleclick('flow')}>Flow</div>
                <div className={`${active === 'theme' ? 'active' : ''}`} onClick={()=>handleclick('theme')} >Theme</div>
                <div className={`${active === 'response' ? 'active' : ''}`} onClick={()=>handleclick('response')}>Response</div>
            </div>
            
            <div className='buttons'>
                <button>Share</button>
                <button className='save'>Save</button>
                <button onClick={(e)=>{setSelectedbtn([]);setFormName('');navigate(-1);}}>X</button>
            </div>
        </div>
    </>
  )
}

export default Header