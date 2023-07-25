import React from "react";
import './PasswordChangedPopup.css';
import personIcon from '../assets/personIcon.png';

const PasswordChangedPopup = () => {
  return (
      <div className="password-changed-popup">
            <img className='person-icon' src={personIcon} alt='Profile'/>
            <h2 className='name'>Name</h2>
            <h3 className='password-changed'>Password Changed!</h3>
      </div>
  );
}

export default PasswordChangedPopup;