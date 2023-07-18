import React, { useState } from "react";
import personIcon from '../assets/personIcon.png';
import X from '../assets/X.png';
import settings from '../assets/settings.png';
import UpdateInfo2 from "./UpdateInfo2";

export default function PopUp1({ isOpen, handleClose, handleOpenPopup2 }) {
    // const [isPopUp1Open, setPopUp1Open] = useState(false);
    // const [isPopUp2Open, setPopUp2Open] = useState(false);

    const [showChildModal, setShowChildModal] = useState(false); 
    
    // const openPopUp2 = () => {
    //     setPopUp2Open(true);  
    // };
    // const closePopUp2 = () => {
    //     setPopUp2Open(false);
    // }

    const openChildModal = () => {
        setShowChildModal(true);
    }

    const closeChildModal = () => {
        setShowChildModal(false);
    }

    if (!isOpen) return null;
  
    return (
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '2%',
        zIndex: '1000',
        fontFamily: '"Poppins", "Helvetica"',
        color: '#2db2a0',
        width: '885px', 
        height: '570px', 
        overflowY: 'auto', 
        boxSizing: 'border-box',
      }}>
        {/* Settings button */}
        <img 
          src={settings} 
          alt='settings button' 
        //   onClick={openPopUp2}
        onClick={openChildModal}
          style={{
            position: 'absolute', 
            top: '2%', 
            right: '7%', 
          }}
        />
        {/* The nested popup */}
        {showChildModal && <UpdateInfo2 isOpen={showChildModal} handleClose={closeChildModal} />}
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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: '10%'}}>
          {/* Flexbox for Name and image */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <img src={personIcon} alt='Profile' style={{ width: '150px', height: '150px' }}/>
            <h2 style={{
                fontSize: '2rem', 
                fontWeight: 'normal',
                color: '#2db2a0', 
            }}>Name</h2>
          </div>
  
          {/* Flexbox for tags */}
          <div>
            <div style={{ marginLeft: '75%'}}> 
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>TYPE:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>PORTAFOLIO:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>IDENTIFICACIÓN:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>FECHA INGRESO:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>EMAIL:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>FECHA DE NACIMIENTO:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>GENERO:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>EPS:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>AFP:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>ROL:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>CONTRATO:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>ESTADO:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>CATEGORIA:</p>
              <p style={{fontSize: '15', marginBottom: '1px', fontWeight: 'bold'}}>CARGO:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }