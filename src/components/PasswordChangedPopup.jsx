import React from 'react';
import X from '../assets/X.png';
import personIcon from '../assets/personIcon.png';

export default function ConfirmPasswordPopup({ handleClose }) {

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
    }}>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#FFF',
      padding: '10%',
      zIndex: '1000',
      fontFamily: '"Poppins", "Helvetica"',
      color: '#2db2a0',
      width: '901px', 
      height: '442px', 
      overflowY: 'auto', 
      boxSizing: 'border-box',
    }}>
      {/* Close button */}
      <img 
        src={X} 
        alt='X button' 
        onClick={handleClose}
        style={{
          position: 'absolute', 
          top: '3%', 
          right: '3%', 
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {/* Flexbox for Name and image */}
        <img src={personIcon} alt='Profile' style={{ width: '150px', height: '150px' }}/>
        <h2 style={{
            fontSize: '2rem', 
            fontWeight: 'normal',
            color: '#2db2a0', 
        }}>Name</h2>
        <div style={{
                  fontFamily: '"Poppins", "Helvetica"',
                  fontSize: '30',
                  fontWeight: 'normal',
                }}>
                  <h1>Password Changed!</h1>
        </div>
      </div>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
      {/* Change password button --> revise this */}
      <button onClick={handleClose} style={{
                fontSize: '1rem', 
                backgroundColor: '#2db2a0',
                color: '#ffffff',
                width: '150px', 
                height: '50px', 
      }}>Confirm Password</button>
      </div>
    </div>
    </div>
  );
}