import React from 'react';
import './CreateTypebot.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Mainbar from '../components/Mainbar';

function CreateTypebot() {
  return (
    <>
        <div className='botmainpg'>
            <Header />
            <div className='botbottom'>
                <Sidebar />
                <Mainbar />
            </div>
        </div>

    </>
  )
}

export default CreateTypebot