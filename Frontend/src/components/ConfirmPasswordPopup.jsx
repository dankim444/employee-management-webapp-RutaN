import React from 'react';
import './ConfirmPasswordPopup.css';
import personIcon from '../assets/personIcon.png';

const ConfirmPasswordPopup = () => {
  return (
    <div className="confirm-password-popup">
          <div className="column"> 
              <img className='person-icon' src={personIcon} alt='Profile'/>
              <h2 className='name'>Name</h2>
          </div>
          <div className="column-right">
              <div className='flex-container'>
                <div className='email'>
                  <h3>Old Password</h3>
                </div>
                <div>
                  <input className='input1' type="text"/>
                </div>
              </div>
              <div className='flex-container2'>
                <div className='password'>
                  <h3>New Password</h3>
                </div>
                <div>
                  <input className='input2' type="text"/>
                </div>
              </div>
              <div className='flex-container3'>
                <div className='confirm-password'>
                  <h3>Confirm Password</h3>
                </div>
                <div>
                  <input className='input3' type="text"/>
                </div>
              </div>
          </div>
      </div>
  );
}

export default ConfirmPasswordPopup;