import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
        <div className="header">
            <div><input type="text" placeholder='Enter Form Name' /></div>
            
            <div className="opt">
                <div>Flow</div>
                <div>Theme</div>
                <div>Response</div>
            </div>
            
            <div className='buttons'>
                <button>Share</button>
                <button className='save'>Save</button>
                <button>X</button>
            </div>
        </div>
    </>
  )
}

export default Header