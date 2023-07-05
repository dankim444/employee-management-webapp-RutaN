import React, { useState } from 'react';
import X from '../assets/X.png';
import personIcon from '../assets/personIcon.png';
import PasswordChangedPopup from './PasswordChangedPopup';
import { AdministratorHome } from '../AdminPage/AdminHome';

export default function ConfirmPasswordPopup({ handleClose }) {
    const [isPasswordConfirmedOpen, setisPasswordConfirmedOpen] = useState(false);

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
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        {/* Flexbox for Name and image */}
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', marginTop: '0%', justifyContent: 'center'}}> 
            <img src={personIcon} alt='Profile' style={{ width: '150px', height: '150px' }}/>
            <h2 style={{
              fontSize: '2rem', 
              fontWeight: 'normal',
              color: '#2db2a0', 
              }}>Name</h2>
        </div>
          {/* Flexbox for textboxes */}
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20%', justifyContent: "space-between"}}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                <div style={{
                  fontFamily: '"Poppins", "Helvetica"',
                  fontSize: '30',
                  fontWeight: 'normal',
                }}>
                  <h1>Old Password</h1>
                </div>
                <div>
                  <input 
                  type="text" 
                  style={{ 
                    width: '211px',   
                    height: '48px',       
                    fontSize: '1rem', 
                    marginLeft: '46%',
                    boxShadow: '0px 4px 4px' 
                  }} 
                />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
              <div style={{
                  fontFamily: '"Poppins", "Helvetica"',
                  fontSize: '30',
                  fontWeight: 'normal',
                }}>
                  <h1>New Password</h1>
                </div>
                <div>
                  <input 
                  type="text" 
                  style={{ 
                    width: '211px',   
                    height: '48px',       
                    fontSize: '1rem', 
                    marginLeft: '46%',
                    boxShadow: '0px 4px 4px' 
                  }} 
                />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}>
                <div style={{
                  fontFamily: '"Poppins", "Helvetica"',
                  fontSize: '30',
                  fontWeight: 'normal',
                }}>
                  <h1>Confirm Password</h1>
                </div>
                <div>
                  <input 
                  type="text" 
                  style={{ 
                    width: '211px',   
                    height: '48px',       
                    fontSize: '1rem', 
                    marginLeft: '46%',
                    boxShadow: '0px 4px 4px' 
                  }} 
                />
                </div>
              </div>
          </div>
      </div>
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
      {/* Change password button --> revise this */}
      <button onClick={() => setisPasswordConfirmedOpen(true)} style={{
                fontSize: '1rem', 
                backgroundColor: '#2db2a0',
                color: '#ffffff',
                width: '150px', 
                height: '50px', 
      }}>Confirm Password</button>
      {isPasswordConfirmedOpen && <PasswordChangedPopup handleClose={() => setisPasswordConfirmedOpen(false)}/> }
      </div>
    </div>
    </div>
  );
}