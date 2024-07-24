import React from 'react';
import './Mainbar.css';
import start from '../assets/typebot/start.png';

function Mainbar() {
  return (
    <>
        <div className="mainbar">
            <div><img src={start} alt="flag" />Start</div>

            <div className='askbubble'>
              <div>Image</div>
              <input type="text" placeholder='Enter text' />
            </div>

            <div className='askinput'>
              <div>Input Text</div>
              <p>Hint : User will tap to rate out of 5</p>
            </div>
        </div>
    </>
  )
}

export default Mainbar