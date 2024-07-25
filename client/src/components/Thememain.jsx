import React from 'react';
import './Thememain.css';
import msglogo from '../assets/theme/msglogo.png';


function Thememain({ selecttheme, setSelecttheme }) {

    return (
    <>
        <div style={{
            backgroundColor: selecttheme === 'light'? '#ffffff' : selecttheme === 'dark' ? 'rgb(23,25,35)' : selecttheme === 'blue' ? 'rgb(80,140,155)' : '#fff'
        }} className="thememain">
            <div className='msglog'><img src={msglogo} alt="log o" /><span className='hello'>Hello</span></div>
            <div><div className='bluecircle'></div><div className='hi'>Hi</div></div>
        </div>
    </>
)
}

export default Thememain