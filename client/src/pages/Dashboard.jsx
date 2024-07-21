import React from 'react';
import './Dashboard.css';
import dropdown from '../assets/dashboard/dropdown.png';
import create from '../assets/dashboard/create.png';
import deleteicon from '../assets/dashboard/delete.png';
import add from '../assets/dashboard/add.png';

function Dashboard() {
  return (
    <>
    <div className='dashboard'>
        <div className='headbox'><h3>user's workspace <img src={dropdown} alt="dropdown" /></h3></div>
        <div className='strip'>
            <div><img src={create} alt="create" />Create a folder</div>
            <div>computer <img src={deleteicon} alt="delete" /></div>
        </div>

        <div className='typebot'>
            <div><img src={add} alt="add" />Create a typebot</div>
            <div>
                <img src={deleteicon} alt="del" />
                New Form 
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard