import React from 'react';
import './ChangePasswordPopup.css';
import personIcon from '../assets/personIcon.png';

const ChangePasswordPopup = () => {
    return (
        <div className="change-password-popup">
          <div className="column"> 
              <img className='person-icon' src={personIcon} alt='Profile'/>
              <h2 className='name'>Name</h2>
          </div>
          <div className="column-right">
              <div className='flex-container'>
                <div className='email'>
                  <h3>My Email</h3>
                </div>
                <div>
                  <input className='input1' type="text"/>
                </div>
              </div>
              <div className='flex-container2'>
                <div className='password'>
                  <h3>My Password</h3>
                </div>
                <div>
                  <input className='input2' type="text"/>
                </div>
              </div>
          </div>
        </div>
    );
}

export default ChangePasswordPopup;