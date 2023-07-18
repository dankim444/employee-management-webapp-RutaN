import React from "react";
import './UpdateInfo1.css';
import personIcon from '../assets/personIcon.png';
import X from '../assets/X.png';


// This is the PopUp component that allows you to update individual information from the home page
export default function UpdateInfo1({ isOpen, handleClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="update-info" style={{
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '10%',
        zIndex: '1000',
        fontFamily: '"Poppins", "Helvetica"',
        color: '#2db2a0',
        width: '100%', 
        height: '100%', 
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
        {/* Pop-up title */}
        <h1 style={{
              textAlign: 'center',
              marginTop: '0%'
            }}>Update Information</h1>
        
        <div style={{ display: 'flex', flexDirection: 'row'}}>
  
          {/* Flexbox for Name and image */}
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10%', marginTop: '5%', justifyContent: "center", alignItems: 'center'}}> 
              <img src={personIcon} alt='Profile' style={{ width: '150px', height: '150px' }}/>
              <h2 style={{
                fontSize: '2rem', 
                fontWeight: 'normal',
                color: '#2db2a0', 
                }}>Name</h2>
          </div>
  
          {/* Flexbox for textboxes */}
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20%', justifyContent: "space-between"}}>  
            <div>
              <h2><input 
                type="text" 
                placeholder="Direccion" 
                style={{ 
                  width: '325px',   
                  height: '50px',       
                  fontSize: '1rem', 
                  marginLeft: '46%',
                }} 
              /></h2>
            </div>
            <div>
              <h2><input 
                type="text" 
                placeholder="Genero" 
                style={{ 
                width: '325px',   
                height: '50px',       
                fontSize: '1rem', 
                marginLeft: '46%', 
              }} 
              /></h2>
            </div>
              <h2><input 
                type="text" 
                placeholder="Fecha de Nacimiento" 
                style={{ 
                  width: '325px',   
                  height: '50px',       
                  fontSize: '1rem',
                  marginLeft: '46%',
                }} 
              /></h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5%',
            }}>
              {/* Change button */}
              <button onClick={handleClose} style={{
                  fontSize: '1rem', 
                  backgroundColor: '#2db2a0',
                  color: '#ffffff',
                  width: '150px', 
                  height: '50px', 
              }}><b>Change</b></button>
            </div>
          </div>
        </div>
      </div>
      
    );
  }