import React from 'react';
import img1 from '../../assets/attachment.png';
import img2 from '../../assets/attachment2.png';
import fig from '../../assets/Figure.png';

function Landing1() {
  return (
    <>
        <div className='toppart'>
            <div><img src={img1} alt="img" /></div>
            <div>
              <h1>Build advanced chatbots
              visually</h1>
              <div>Typebot gives you powerful blocks to create unique chat experiences. Embed them
              anywhere on your web/mobile apps and start collecting results like magic.</div>
              <button>Create a FormBot for free</button>
            </div>
            <div><img src={img2} alt="img" /></div>
        </div>
        <div className='bottompart'>
            <img src={fig} alt="figure" />
        </div>
    </>
  )
}

export default Landing1