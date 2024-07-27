import React ,{useEffect} from 'react';
import './Sidebar.css';
import text from '../assets/typebot/text.png';
import img from '../assets/typebot/img.png';
import video from '../assets/typebot/video.png';
import gif from '../assets/typebot/gif.png';
import T from '../assets/typebot/Ttext.png';
import hash from '../assets/typebot/hash.png';
import email from '../assets/typebot/email.png';
import phone from '../assets/typebot/phone.png';
import date from '../assets/typebot/date.png';
import rating from '../assets/typebot/rating.png';
import btns from '../assets/typebot/btns.png';

function Sidebar({selectedbtn, setSelectedbtn}) {

  const bubbles= [
    {
      id: 1,
      img: text,
      label: 'Text',
    },
    {
      id: 2,
      img: img,
      label: 'Image',
    },
    {
      id: 3,
      img: video,
      label: 'Video',
    },
    {
      id: 4,
      img: gif,
      label: 'GIF',
    }
  ];

  const inputs = [
    {
      id: 1,
      label: 'Text',
      img: T,
    },
    {
      id: 2,
      label: 'Number',
      img: hash,
    },
    {
      id: 3,
      label: 'Email',
      img: email,
    },
    {
      id: 4,
      label: 'Phone',
      img: phone,
    },{
      id: 5,
      label: 'Date',
      img: date,
    },
    {
      id: 6,
      label: 'Rating',
      img: rating,
    },
    {
      id: 7,
      label: 'Button',
      img: btns,
    }
  ]

  useEffect(() => {
    console.log(selectedbtn);
}, [selectedbtn]);

  const handlebtnclick = async(buttonname, type) => {
       await setSelectedbtn([...selectedbtn ,{
        name: buttonname,
        type: type,
        inputs:'',
      }]);
  }

  return (
    <>
      <div className="sidebar">
        <div className='bubbles'>
            <div className='headbot'>Bubbles</div>
            <div className='bubbleitem'>{bubbles.map((item, id)=>
              <div onClick={()=>handlebtnclick(`${item.label}`, 'bubble')} className='inputbox' key={id}><img src={item.img} alt={item.label} />{item.label}</div>
              )}
            </div>
        </div>

        <div className='inputs'>
            <div className='headbot'>Inputs</div>
            <div className='inputitem'>
              {inputs.map((item, id) =>
                <div key={id} onClick={()=>handlebtnclick(`${item.label}`, 'inputs')} className='inputbox'><img src={item.img} alt={item.label} />{item.label}</div>
              )}
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar